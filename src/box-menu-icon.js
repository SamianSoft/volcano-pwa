(function () {
  'use strict';

  class BoxMenuIcon extends Polymer.Element {
    static get is() { return 'box-menu-icon'; }

    static get config () {
      return {
        properties: {
          // myEvent: String,
        },
        observers: [
        ]
      };
    }

    ready () {
      super.ready();
      var s = this.$.one;
      s.addEventListener('fireevent', this.myEvent);
    }

    // myEvent () {
    //   console.log('myEvent');
    // }
  }

  customElements.define(BoxMenuIcon.is, BoxMenuIcon);

})();
