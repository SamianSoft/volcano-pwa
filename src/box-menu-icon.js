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
      super.ready()
      this.$.one.addEventListener('fireevent1', this.myEvent);
      this.$.two.addEventListener('fireevent2', this.myEvent);
      this.$.three.addEventListener('fireevent3', this.myEvent);
    }

    // myEvent () {
    //   console.log('myEvent');
    // }
  }

  customElements.define(BoxMenuIcon.is, BoxMenuIcon);

})();
