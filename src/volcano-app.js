(function() {
  'use strict';

  let defaultPage = 'view1';

  Polymer({
    is: 'volcano-app',

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

    ready: function () {
      //remove frist loading style
      this.removeAttribute('unresolved');

      this._setHeaderScrollListener(this.$.appHeader, this._onHeaderScroll);
    },

    _setHeaderScrollListener: function (header, fn) {
      let target = (header.scrollTarget === this.ownerDocument.documentElement) ? window : header.scrollTarget;
      target.addEventListener('scroll', fn.bind(this), { passive: true });
      //TODO: add passive polyfill
    },

    _onHeaderScroll: function () {
      let y = window.scrollY;
      y *= 1.5;

      // header background scroll effect
      this.$.bgHeader.style['transform'] = this.$.bgHeader.style['webkitTransform'] = `translate3d(0, ${-y}px, 0)`;
      this.$.appHeader.shadow = (y > this.$.bgHeader.offsetHeight -  this.$.appHeader.offsetHeight);
    },

    _routePageChanged: function (page) {
      this.page = page || defaultPage;
    },

    _pageChanged: function (page) {
      // TODO: Lazy loading in polymer 2.0
      // Load page import on demand. Show 404 page if fails
      // var resolvedPageUrl = this.resolveUrl('page-' + page + '.html');
      // Polymer.Utils.importHref(resolvedPageUrl, null, () => this._showPage404(), true);
    },

    _showPage404: function () {
      this.page = '404';
    },

    _closedraw: function () {
      let closeclass = this.$$('app-drawer');
      let btndrawer = this.$.btndrawer;
      let ahl = this.$$('app-header-layout');
      let docw = window.innerWidth;

      if (closeclass.classList.contains('close')) {
        closeclass.classList.remove('close');
        btndrawer.classList.remove('iconclose');
        btndrawer.classList.add('iconopen');
        //btndrawer.classList.add('iconclose');
        ahl.style.width = Number(docw - closeclass.offsetWidth) + 'px';
        // console.log(btndrawer);
      } else {
        closeclass.classList.add('close');
        btndrawer.classList.remove('iconopen');
        btndrawer.classList.add('iconclose');
        ahl.style.width = Number(docw - closeclass.offsetWidth) + 'px';
        // console.log(btndrawer);
      }
    }
  });

})();
