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
      // this.$.one.addEventListener('fireevent1', this.myEvent);
      // this.$.two.addEventListener('fireevent2', this.myEvent);
      // this.$.three.addEventListener('fireevent3', this.myEvent);
    }

    // onetap () {
    //   this.fireevent(1);
    // }

    // twotap () {
    //   this.fireevent(2);
    // }

    // threetap () {
    //   this.fireevent(3);
    // }

    fireevent (event) {

      // console.log(event.target);

      var myevent = new CustomEvent("boxmenuevent", {
        detail: {
          iconid : event.target.id
        }
      });
      this.dispatchEvent(myevent);
    }
  }

  customElements.define(BoxMenuIcon.is, BoxMenuIcon);

})();
