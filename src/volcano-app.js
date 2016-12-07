(function() {
  'use strict';

  class VolcanoApp extends Polymer.Element {
    static get is () { return 'volcano-app'; }

    static get config () {
      return {
        properties: {
          page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged'
          }
        },

        observers: [
          '_routePageChanged(routeData.page)'
        ],
      };
    }

    constructor () {
      super();
      this.defaultPage = 'view1';
    }

    ready () {
      super.ready();

      //remove frist loading style
      this.removeAttribute('unresolved');

      this._setHeaderScrollListener(this.$.appHeader, this._onHeaderScroll);
    }

    _setHeaderScrollListener(header, fn) {
      let target = (header.scrollTarget === this.ownerDocument.documentElement) ? window : header.scrollTarget;
      target.addEventListener('scroll', fn.bind(this), { passive: true });
      //TODO: add passive polyfill
    }

    _onHeaderScroll () {
      let y = window.scrollY;
      y *= 1.5;

      // header background scroll effect
      this.$.bgHeader.style['transform'] = this.$.bgHeader.style['webkitTransform'] = `translate3d(0, ${-y}px, 0)`;
      this.$.appHeader.shadow = (y > this.$.bgHeader.offsetHeight -  this.$.appHeader.offsetHeight);
    }

    _routePageChanged(page) {
      this.page = page || this.defaultPage;
    }

    _pageChanged(page) {
      // TODO: Lazy loading in polymer 2.0
      // Load page import on demand. Show 404 page if fails
      // var resolvedPageUrl = this.resolveUrl('page-' + page + '.html');
      // Polymer.Utils.importHref(resolvedPageUrl, null, () => this._showPage404(), true);
    }
    /*
    _showPage404() {
      this.page = '404';
    }
    */

    //this function for close app drawer
    _closedraw() {
      var closeclass = this.shadowRoot.querySelector('app-drawer');
      var btndrawer = this.shadowRoot.querySelector('#btndrawer');
      var ahl = this.shadowRoot.querySelector('app-header-layout');
      var docw = document.body.offsetWidth;

      if (closeclass.classList.contains('close')) {
        closeclass.classList.remove('close');
        btndrawer.classList.remove('iconclose');
        btndrawer.classList.add('iconopen');
        //btndrawer.classList.add('iconclose');
        ahl.style.width = Number(docw - closeclass.offsetWidth) + 'px';
        // console.log(btndrawer);
        closeclass.animate();
      }
      else {
        closeclass.classList.add('close');
        btndrawer.classList.remove('iconopen');
        btndrawer.classList.add('iconclose');
        ahl.style.width = Number(docw - closeclass.offsetWidth) + 'px';
        // console.log(btndrawer);
        closeclass.animate();
      }
    }

    //for test custom event
    test(event) {
      console.log(event.detail.iconid + ': test create event');
      // console.log(event.target.shadowRoot.);
    }
  }

  customElements.define(VolcanoApp.is, VolcanoApp);
})();
