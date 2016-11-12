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

  customElements.define(VolcanoApp.is, VolcanoApp);
})();
