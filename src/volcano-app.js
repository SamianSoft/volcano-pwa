(function (){
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
      }
    }

    ready () {
      super.ready();
      this.removeAttribute('unresolved');
    }

    _routePageChanged (page) {
      this.page = page || 'view1';
    }

    _pageChanged (page) {
      // Load page import on demand. Show 404 page if fails
      // var resolvedPageUrl = this.resolveUrl('page-' + page + '.html');
      // Polymer.Utils.importHref(resolvedPageUrl, null, () => this._showPage404(), true);
    }

    _showPage404 () {
      this.page = '404';
    }
  }

  addEventListener('WebComponentsReady', function() {

    var appHeader = document.querySelector('app-header');
    var bgHeader = document.querySelector('.bg-header');
    var appHeaderHeight = appHeader.offsetHeight;
    var bgHeaderHeight = bgHeader.offsetHeight;

    var transformBgHeader = function() {
      var y = window.scrollY;
      if (y <= bgHeaderHeight) {
        y = 1.5 * y;
      }
      var s = bgHeader.style;
      s.transform = s.webkitTransform = 'translate3d(0,' + -y + 'px,0)';
      appHeader.shadow = y > bgHeaderHeight - appHeaderHeight;
    }

    transformBgHeader();

    addEventListener('scroll', transformBgHeader);

  });

  customElements.define(VolcanoApp.is, VolcanoApp);
})();
