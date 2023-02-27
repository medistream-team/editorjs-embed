import SERVICES from './services';
import './index.css';
import { debounce } from 'debounce';

import refreshIcon from './img/refresh.svg'
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
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.75 6C15.75 5.17157 16.4216 4.5 17.25 4.5C18.0784 4.5 18.75 5.17157 18.75 6C18.75 6.82843 18.0784 7.5 17.25 7.5C16.4216 7.5 15.75 6.82843 15.75 6ZM17.25 3C15.5931 3 14.25 4.34315 14.25 6C14.25 6.20952 14.2715 6.41402 14.3124 6.61142L7.86875 10.1261C7.32606 9.58473 6.57712 9.25 5.75 9.25C4.09315 9.25 2.75 10.5931 2.75 12.25C2.75 13.9069 4.09315 15.25 5.75 15.25C6.73867 15.25 7.61565 14.7717 8.16219 14.034L14.3123 17.3886C14.2715 17.586 14.25 17.7905 14.25 18C14.25 19.6569 15.5931 21 17.25 21C18.9069 21 20.25 19.6569 20.25 18C20.25 16.3431 18.9069 15 17.25 15C16.3412 15 15.5269 15.4041 14.9767 16.0423L8.72581 12.6328C8.74177 12.5074 8.75 12.3797 8.75 12.25C8.75 11.9613 8.70921 11.6821 8.63308 11.4178L14.9767 7.95768C15.5269 8.59594 16.3412 9 17.25 9C18.9069 9 20.25 7.65685 20.25 6C20.25 4.34315 18.9069 3 17.25 3ZM15.75 18C15.75 17.1716 16.4216 16.5 17.25 16.5C18.0784 16.5 18.75 17.1716 18.75 18C18.75 18.8284 18.0784 19.5 17.25 19.5C16.4216 19.5 15.75 18.8284 15.75 18ZM5.75 10.75C6.57843 10.75 7.25 11.4216 7.25 12.25C7.25 13.0784 6.57843 13.75 5.75 13.75C4.92157 13.75 4.25 13.0784 4.25 12.25C4.25 11.4216 4.92157 10.75 5.75 10.75Z" fill="black"/></svg>',
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

      form: 'embed-tool__form',
      img: 'embed-tool__img',
      text: 'embed-tool__text',
      card: 'embed-tool__card',
      refreshBtn: 'embed-tool__refresh-btn',
      flex_row: 'embed-tool__flex_row',
      flex_column: 'embed-tool__flex_column',
      hov_underline: 'embed-tool__hov_underline'
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
      : this._createElement('div', [this.CSS.baseClass, this.CSS.container]);

    // form
    const form = this._createForm(source);

    form.addEventListener('paste', this._onPasteEvent);
    form.addEventListener('submit', this._onSubmitEvent);

    container.appendChild(form);

    if (!service) {
        this.element = container
        return container
    }

    // preloader and caption
    const preloader = this.createPreloader(source);
    const caption = this._createElement('input', [this.CSS.input, this.CSS.caption], {
        disabled: this.readOnly,
        value: _caption || '',
        placeholder: '설명을 입력하세요.',
    });

    container.appendChild(preloader)

    // embed
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

    // card
    if (service === 'etc') {
        this._getOgData(source)
          .then((response) => {
            const template = this._createOgCard(response);

            container.classList.remove(this.CSS.containerLoading);

            container.appendChild(template);
            container.appendChild(caption);
          })
          .catch((err) => {
            const message = preloader.firstChild
            message.textContent = err
          })
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
      ogTitle: ogTitle || twitterTitle || '',
      ogDescription: ogDescription || twitterDescription || '',
      ogImageUrl: ogImage?.url || twitterImage?.url || '',
      ogUrl: ogUrl || requestUrl || '',
      ogIcon: favicon?.includes('https://') ? favicon :  '',
      ogSiteName: ogSiteName || twitterSite || ogTitle || twitterTitle || ''
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
    const form = this._createElement('form', this.CSS.form);

    const input = this._createElement('input', this.CSS.input, {
      disabled: this.readOnly,
      value: source || '',
      placeholder: 'URL 을 입력하세요.',
      style: 'border: 1px solid #E1E4EC; background-color: #F1F3F8;'
    });

    const button = this._createElement('button', [this.CSS.refreshBtn], {
      disabled: this.readOnly,
      type: 'submit',
      innerHTML: refreshIcon
    });

    form.appendChild(input);
    form.appendChild(button);

    return form;
  }

  _onPasteEvent = (event) => {
    const url = (event.clipboardData || window.clipboardData).getData('text');
    this._checkedUrl(url);
  }

  _onSubmitEvent = (event) => {
    event.preventDefault();

    const url = event.target[0].value;
    this._checkedUrl(url);
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
  _createOgCard({ ogTitle, ogDescription, ogImageUrl, ogUrl, ogIcon, ogSiteName }) {
    const card = this._createElement('a', this.CSS.card, {
      style: 'text-decoration: none;'
    });

    const cardContent = this._createElement('div', [this.CSS.flex_column], {
      style: 'padding: 16px;'
    })

    const cardWrapper = this._createElement('div')

    const cardTitle = this._createElement('div', [this.CSS.flex_row], {
      href: ogUrl,
    })

    const title = this._createElement('span', [this.CSS.text, this.CSS.hov_underline], {
      innerText: ogTitle,
      style: 'font-size: 14px; -webkit-line-clamp: 1;'
    });

    const titleIcon = this._createElement('img', [], {
      src: ogIcon,
      style: 'width: 16px; height: 16px; margin-right: 8px;'
    })

    const description = this._createElement('span', [this.CSS.text], {
      innerText: ogDescription,
      style: 'font-size: 12px; margin-top: 4px;'
    });

    const cardSite = this._createElement('div', [this.CSS.flex_row], {
      style: 'font-size: 12px; white-space: normal;'
    })

    const siteName = this._createElement('span', [], {
      innerText: ogSiteName
    })

    const siteNameIcon = this._createElement('img', [], {
      src: ogIcon,
      style: 'width: 12px; height: 12px; margin-right: 4px;'
    })

    const image = this._createElement('div', this.CSS.img, {
      style: `background-image: url(${ogImageUrl})`
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
