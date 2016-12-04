(function() {
  'use strict';

  class VolcanoApp extends Polymer.Element {
    static get is () { return 'volcano-app'; }

    static get config () {
      return {
        properties: {

          //this change pages
          page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged'
          }
        },

        observers: [
          '_routePageChanged(routeData.page)'
        ],
      }
    }

    ready () {
      super.ready();

      //remove frist loading style
      this.removeAttribute('unresolved');

      // var appHeader = document.querySelector('app-header');
      var appHeader = this.shadowRoot.querySelector('app-header');
      // var bgHeader = document.querySelector('.bg-header');
      var bgHeader = this.shadowRoot.querySelector('.bg-header');

      var appHeaderHeight = appHeader.offsetHeight;
      var bgHeaderHeight = bgHeader.offsetHeight;

      //for scroll header
      var transformBgHeader = function () {
        console.log("Im transform header");
        var y = window.scrollY;
        if (y <= bgHeaderHeight) {
          y = y;
          // y = 1.5 * y;
        }
        var s = bgHeader.style;
        s.transform = s.webkitTransform = 'translate3d(0,' + -y + 'px,0)';
        appHeader.shadow = y > bgHeaderHeight - appHeaderHeight;
      }

      transformBgHeader();
      window.addEventListener('scroll', transformBgHeader);

      this._setHeaderScrollListener(this.$.header, this._headerScroll);
      // console. log(this._setHeaderScrollListener(appHeader, this._headerScroll));
      // console.log(this._headerScroll);

      //for create new event
      var pel = this.shadowRoot.querySelector('box-menu-icon');
      pel.addEventListener('boxmenuevent', function(e) {
        // console.info("Event is: ", e);
        // console.info("Custom data is: ", e.detail);
      });
    }

    _setHeaderScrollListener(header, fn) {
      var target = (header.scrollTarget === this.ownerDocument.documentElement) ? window : header.scrollTarget;
      target.addEventListener('scroll', fn.bind(this), { passive: true });
    }

    //for toggle class header add custom style
    _headerScroll(evt) {
      // console.log(this.$.header);
      // console.log(this.$.fabicon);
      var appHeader = this.shadowRoot.querySelector('app-header');
      var paperfab = this.shadowRoot.querySelector('paper-fab');

      paperfab.classList.toggle('shrink-to-hidden', appHeader.getScrollState().progress > 0.5);
    }

    _routePageChanged(page) {
      this.page = page || 'view1';
    }

    _pageChanged(page) {
      // Load page import on demand. Show 404 page if fails
      // var resolvedPageUrl = this.resolveUrl('page-' + page + '.html');
      // Polymer.Utils.importHref(resolvedPageUrl, null, () => this._showPage404(), true);
    }

    _showPage404() {
      this.page = '404';
    }

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
