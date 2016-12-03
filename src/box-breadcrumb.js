(function () {
  'use strict';

  class BoxBreadcrumb extends Polymer.Element {
    static get is() { return 'box-breadcrumb'; }

    static get config () {
      return {
        properties: {
        },
        observers: [
        ]
      };
    }
  }

  customElements.define(BoxBreadcrumb.is, BoxBreadcrumb);

})();
