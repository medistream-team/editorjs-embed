import SERVICES from './services';
import './index.css';
import { debounce } from 'debounce';

/**
 * @typedef {object} EmbedData
 * @description Embed Tool data
 * @property {string} service - service name
 * @property {string} url - source URL of embedded content
 * @property {string} embed - URL to source embed page
 * @property {number} [width] - embedded content width
 * @property {number} [height] - embedded content height
 * @property {string} [caption] - content caption
 */
/**
 * @typedef {object} PasteEvent
 * @typedef {object} HTMLElement
 * @typedef {object} Service
 * @description Service configuration object
 * @property {RegExp} regex - pattern of source URLs
 * @property {string} embedUrl - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
 * @property {string} html - iframe which contains embedded content
 * @property {Function} [id] - function to get resource id from RegExp groups
 */
/**
 * @typedef {object} EmbedConfig
 * @description Embed tool configuration object
 * @property {object} [services] - additional services provided by user. Each property should contain Service object
 */

/**
 * @class Embed
 * @classdesc Embed Tool for Editor.js 2.0
 *
 * @property {object} api - Editor.js API
 * @property {EmbedData} _data - private property with Embed data
 * @property {HTMLElement} element - embedded content container
 *
 * @property {object} services - static property with available services
 * @property {object} patterns - static property with patterns for paste handling configuration
 */
export default class Embed {
  /**
   * data for Toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>',
      title: 'Embed',
    };
  }

  /**
   * Allow pressing Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * @param {{data: EmbedData, config: EmbedConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   *   readOnly - read-only mode flag
   */
  constructor({ data, api, readOnly }) {
    this.api = api;
    this._data = {};
    this.element = null;
    this.readOnly = readOnly;

    this.data = data;
  }

  /**
   * @param {EmbedData} data - embed data
   * @param {RegExp} [data.regex] - pattern of source URLs
   * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
   * @param {string} [data.html] - iframe which contains embedded content
   * @param {object} [data.style] - iframe style
   * @param {string} [data.caption] - caption
   */
  set data(data) {
    if (!(data instanceof Object)) {
      throw Error('Embed Tool data should be object');
    }

    this._data = {
      ...data,
      caption: data.caption || this.data.caption || '',
    };

    const oldView = this.element;

    if (oldView) {
      oldView.parentNode.replaceChild(this.render(), oldView);
    }
  }

  /**
   * @returns {EmbedData}
   */
  get data() {
    if (this.element) {
      const caption = this.element.querySelector('.embed-tool__caption');

      this._data.caption = caption ? caption.value : '';
    }

    return this._data;
  }

  /**
   * Get plugin styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      container: 'embed-tool',
      containerLoading: 'embed-tool--loading',
      preloader: 'embed-tool__preloader',
      caption: 'embed-tool__caption',
      url: 'embed-tool__url',
      content: 'embed-tool__content',
      error: 'embed-tool__error',
    };
  }

  /**
   * Render Embed tool content
   *
   * @returns {HTMLElement}
   */
  render() {
    const { source, service, embed, caption: _caption } = this.data;

    const container = this._createElement({
      tagName: 'div',
      classList: (service && embed) ? [this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading] : [ this.CSS.baseClass ],
    });
    const input = this._createInput({
      disabled: this.readOnly,
      value: source || '',
      placeholder: 'https://',
      classList: !(service && embed) ? [this.CSS.input, this.CSS.error] : [ this.CSS.input ],
    });

    input.addEventListener('paste', (event) => {
      const url = (event.clipboardData || window.clipboardData).getData('text');

      if (url) {
        this._checkedUrl(url);
      }
    });
    input.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        const url = event.target.value;

        if (url) {
          this._checkedUrl(url);
        }
      }
    });

    container.appendChild(input);

    if (service && embed) {
      const { html } = Embed.services[service];

      const preloader = this.createPreloader();
      const template = this._createElement({
        tagName: 'template',
      });
      const caption = this._createInput({
        disabled: this.readOnly,
        value: _caption || '',
        placeholder: 'Enter a caption',
        classList: [this.CSS.input, this.CSS.caption],
      });

      template.innerHTML = html;
      template.content.firstChild.setAttribute('src', embed);
      template.content.firstChild.classList.add(this.CSS.content);

      this.embedIsReady(container)
        .then(() => container.classList.remove(this.CSS.containerLoading));

      container.appendChild(preloader);
      container.appendChild(template.content.firstChild);
      container.appendChild(caption);
    }

    this.element = container;

    return container;
  }

  /**
   *
   */
  updated() {
    const [input, caption] = this.element.querySelectorAll('input');

    if (input.value && !document.activeElement.contains(caption)) {
      input.focus();
      const value = input.value;

      input.value = '';
      input.value = value;
    }
  }

  /**
   * @param url
   */
  _checkedUrl(url) {
    const _data = {
      service: '',
      source: url,
      embed: '',
      style: {},
    };

    Object.entries(Embed.patterns)
      .some(([key, value]) => {
        if (value.test(_data.source)) {
          _data.service = key;

          return true;
        }

        return false;
      });

    if (_data.service) {
      const { regex, embedUrl, style, id = (ids) => ids.shift() } = Embed.services[_data.service];
      const result = regex.exec(_data.source).slice(1);

      _data.embed = embedUrl.replace(/<%= remote_id %>/g, id(result));
      _data.style = style;
    }

    this.data = _data;
  }

  /**
   * @param root0
   * @param root0.tagName
   * @param root0.classList
   *
   * @returns {HTMLElement}
   */
  _createElement({
    tagName,
    classList,
  }) {
    const element = document.createElement(tagName);

    if (classList && classList.length > 0) {
      classList.forEach(list => {
        element.classList.add(list);
      });
    }

    return element;
  }

  /**
   * @param root0
   * @param root0.disabled
   * @param root0.placeholder
   * @param root0.value
   * @param root0.classList
   *
   * @returns {HTMLElement}
   */
  _createInput({
    disabled,
    placeholder,
    value,
    classList,
  }) {
    const input = this._createElement({
      tagName: 'input',
      classList,
    });

    if (disabled) {
      input.setAttribute('disabled', disabled);
    } else {
      input.removeAttribute('disabled');
    }
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('value', value);

    return input;
  }

  /**
   * Creates preloader to append to container while data is loading
   *
   * @returns {HTMLElement}
   */
  createPreloader() {
    const preloader = this._createElement({
      tagName: 'preloader',
      classList: [ this.CSS.preloader ],
    });
    const url = this._createElement({
      tagName: 'div',
      classList: [ this.CSS.url ],
    });

    url.textContent = this.data.source;
    preloader.appendChild(url);

    return preloader;
  }

  /**
   * Save current content and return EmbedData object
   *
   * @returns {EmbedData}
   */
  save() {
    return this.data;
  }

  /**
   * Analyze provided config and make object with services to use
   *
   * @param {EmbedConfig} config - configuration of embed block element
   */
  static prepare({ config = {} }) {
    const { services = {} } = config;

    let entries = Object.entries(SERVICES);

    const enabledServices = Object
      .entries(services)
      .filter(([key, value]) => {
        return typeof value === 'boolean' && value === true;
      })
      .map(([ key ]) => key);

    const userServices = Object
      .entries(services)
      .filter(([key, value]) => {
        return typeof value === 'object';
      })
      .filter(([key, service]) => Embed.checkServiceConfig(service))
      .map(([key, service]) => {
        const { regex, embedUrl, html, style, id } = service;

        return [key, {
          regex,
          embedUrl,
          html,
          style,
          id,
        } ];
      });

    if (enabledServices.length) {
      entries = entries.filter(([ key ]) => enabledServices.includes(key));
    }

    entries = entries.concat(userServices);

    Embed.services = entries.reduce((result, [key, service]) => {
      if (!(key in result)) {
        result[key] = service;

        return result;
      }

      result[key] = Object.assign({}, result[key], service);

      return result;
    }, {});

    Embed.patterns = entries
      .reduce((result, [key, item]) => {
        result[key] = item.regex;

        return result;
      }, {});
  }

  /**
   * Check if Service config is valid
   *
   * @param {Service} config - configuration of embed block element
   * @returns {boolean}
   */
  static checkServiceConfig(config) {
    const { regex, embedUrl, html, style, id } = config;

    let isValid = regex && regex instanceof RegExp &&
      embedUrl && typeof embedUrl === 'string' &&
      html && typeof html === 'string';

    isValid = isValid && (id !== undefined ? id instanceof Function : true);
    isValid = isValid && (style !== undefined ? typeof style === 'object' : true);

    return isValid;
  }

  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Checks that mutations in DOM have finished after appending iframe content
   *
   * @param {HTMLElement} targetNode - HTML-element mutations of which to listen
   * @returns {Promise<any>} - result that all mutations have finished
   */
  embedIsReady(targetNode) {
    const PRELOADER_DELAY = 450;

    let observer = null;

    return new Promise((resolve, reject) => {
      observer = new MutationObserver(debounce(resolve, PRELOADER_DELAY));
      observer.observe(targetNode, {
        childList: true,
        subtree: true,
      });
    }).then(() => {
      observer.disconnect();
    });
  }
}
