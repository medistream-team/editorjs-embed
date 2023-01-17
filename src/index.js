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
      img: 'embed-tool__img',

      reset: 'embed-tool__reset',
      text: 'embed-tool__text',
      flex_row: 'embed-tool__flex_row',
      flex_column: 'embed-tool__flex_column',
    };
  }

  /**
   * Render Embed tool content
   *
   * @returns {HTMLElement}
   */
  render() {
    const { service, source, caption: _caption } = this.data;

    const container = service
      ? this._createElement('div', [this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading])
      : this._createElement('div', this.CSS.baseClass);

    const form = this._createForm(source);

    form.addEventListener('paste', (event) => {
      const url = (event.clipboardData || window.clipboardData).getData('text');

      this._checkedUrl(url);
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const url = event.target[0].value;

      this._checkedUrl(url);
    });

    container.appendChild(form);

    if (service) {
      const preloader = this.createPreloader(source);
      const caption = this._createElement('input', [this.CSS.input, this.CSS.caption], {
        disabled: this.readOnly,
        value: _caption || '',
        placeholder: 'Enter a caption',
      });

      container.appendChild(preloader);

      if (service !== 'etc') {
        const { html, embed } = this._getEmbedData(service, source);

        const template = this._createElement('template');

        template.innerHTML = html;
        template.content.firstChild.setAttribute('src', embed);
        template.content.firstChild.classList.add(this.CSS.content);

        this.embedIsReady(container)
          .then(() => container.classList.remove(this.CSS.containerLoading));

        container.appendChild(template.content.firstChild);
        container.appendChild(caption);
      }

      if (service === 'etc') {
        this._getOgData(source)
          .then(({ title, description, imageUrl, url, icon, siteName }) => {
            const template = this._createOgCard(title, description, imageUrl, url, icon, siteName);

            container.classList.remove(this.CSS.containerLoading);

            container.appendChild(template);
            container.appendChild(caption);
          })
          .catch((err) => {
            const message = preloader.firstChild
            message.textContent = err
          })
      }
    }

    this.element = container;

    return container;
  }

  /**
   * @param service
   * @param source
   */
  _getEmbedData(service, source) {
    const { html, regex, embedUrl, id = (ids) => ids.shift() } = Embed.services[service];
    const result = regex.exec(source).slice(1);

    const embed = embedUrl.replace(/<%= remote_id %>/g, id(result));

    this.data.embed = embed;

    return {
      html,
      embed,
    };
  }

  /**
   * @param source
   */
  async _getOgData(source) {
    const url = encodeURI(source);

    const response = await fetch('https://public-api.medistream.co.kr/og/?url=' + url);

    if (response.status !== 200) {
      return Promise.reject('잘못된 URL입니다.')
    }

    const {
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      ogSiteName,
      twitterTitle,
      twitterDescription,
      twitterImage,
      twitterSite,
      requestUrl,
      favicon
    } = await response.json();

    return {
      title: ogTitle || twitterTitle || '',
      description: ogDescription || twitterDescription || '',
      imageUrl: ogImage?.url || twitterImage?.url || '',
      url: ogUrl || requestUrl || '',
      icon: favicon?.includes('https://') ? favicon :  '',
      siteName: ogSiteName || twitterSite || ogTitle || twitterTitle || ''
    };
  }

  /**
   * @param url
   */
  _checkedUrl(url) {
    let service = '';

    const patterns = {
      ...Embed.patterns,
      // eslint-disable-next-line
      etc: /(?:http[s]?:\/\/)|(?:www\.)([a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~:]+)/
    };

    Object.entries(patterns)
      .some(([key, value]) => {
        if (value.test(url)) {
          service = key;

          return true;
        }

        return false;
      });

    this.data = {
      service,
      source: url,
    };
  }

  /**
   * @param tagName
   * @returns {HTMLElement}
   */
  _createElement(tagName, classList, attributes) {
    const element = document.createElement(tagName);

    if (Array.isArray(classList)) {
      element.classList.add(...classList);
    } else if (typeof classList === 'string') {
      element.classList.add(classList);
    }

    if (attributes) {
      Object.entries(attributes)
      .forEach(([key, value]) => {
        if (!key) return;

        element[key] = value
      });
    }

    return element;
  }

  /**
   * @param source
   */
  _createForm(source) {
    const form = this._createElement('form', [this.CSS.input, this.CSS.flex_row], {
      style: 'margin-bottom: 7px;'
    });

    const input = this._createElement('input', this.CSS.reset, {
      disabled: this.readOnly,
      value: source || '',
      placeholder: 'URL을 입력하세요.',
      style: 'width: 100%;'
    });

    const button = this._createElement('button', this.CSS.reset, {
      disabled: this.readOnly,
      type: 'submit',
      innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18px" height="18px" style="vertical-align: middle;"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg>'
    });

    form.appendChild(input);
    form.appendChild(button);

    return form;
  }

  /**
   * Creates preloader to append to container while data is loading
   *
   * @param source
   * @param textContent
   * @returns {HTMLElement}
   */
  createPreloader(textContent) {
    const preloader = this._createElement('preloader', this.CSS.preloader);
    const url = this._createElement('div', this.CSS.url, {
      textContent
    });

    preloader.appendChild(url);

    return preloader;
  }

  /**
   * @param ogTitle
   * @param ogDescription
   * @param ogImageUrl
   * @param ogUrl
   * @returns {HTMLElement}
   */
  _createOgCard(ogTitle, ogDescription, ogImageUrl, ogUrl, ogIcon, ogSiteName) {
    const card = this._createElement('div', [], {
      style: 'min-height: 120px; max-height: 120px; display: flex; background-color: var(--ds-surface-raised, white); border-radius: 1.5px; border: 2px solid transparent; -webkit-box-pack: justify; justify-content: space-between; overflow: hidden; box-shadow: var(--ds-shadow-raised, 0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px 1px rgba(9, 30, 66, 0.13));'
    });

    const cardContent = this._createElement('div', [], {
      style: 'padding: 16px; display: flex; flex-direction: column; justify-content: space-between;'
    })

    const cardWrapper = this._createElement('div')

    const cardSite = this._createElement('div', [], {
      style: 'display: flex; -webkit-box-align: center; align-items: center; font-size: 12px; white-space: normal;'
    })

    const cardTitle = this._createElement('a', [], {
      href: ogUrl,
      style: 'display: flex; align-item: center;'
    })

    const title = this._createElement('span', [], {
      innerText: ogTitle,
      style: 'font-size: 14px; font-weight: 500; line-height: 20px; display: -webkit-box; overflow: hidden; text-overflow: ellipsis; word-break: break-word; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: inherit; max-height: 48px;'
    });

    const titleIcon = this._createElement('img', [], {
      src: ogIcon,
      style: 'width: 16px; height: 16px; margin-right: 8px;'
    })

    const description = this._createElement('span', [], {
      innerText: ogDescription,
      style: 'font-size: 12px; line-height: 20px; font-weight: normal; margin-top: 4px; display: -webkit-box; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-word; max-height: 40px; white-space: pre-line;'
    });

    const siteName = this._createElement('span', [], {
      innerText: ogSiteName
    })

    const siteNameIcon = this._createElement('img', [], {
      src: ogIcon,
      style: 'width: 12px; height: 12px; margin-right: 4px;'
    })

    const image = this._createElement('img', this.CSS.img, {
      src: ogImageUrl
    })

    if (ogIcon) {
      cardTitle.appendChild(titleIcon)
      cardSite.appendChild(siteNameIcon)
    }

    cardTitle.appendChild(title)
    cardSite.appendChild(siteName)

    cardWrapper.appendChild(cardTitle)
    cardWrapper.appendChild(description)

    cardContent.appendChild(cardWrapper)
    cardContent.appendChild(cardSite)

    card.appendChild(cardContent)
    card.appendChild(image)

    return card;
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
        const { regex, embedUrl, html, id } = service;

        return [key, {
          regex,
          embedUrl,
          html,
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
    const { regex, embedUrl, html, id } = config;

    let isValid = regex && regex instanceof RegExp &&
      embedUrl && typeof embedUrl === 'string' &&
      html && typeof html === 'string';

    isValid = isValid && (id !== undefined ? id instanceof Function : true);

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
