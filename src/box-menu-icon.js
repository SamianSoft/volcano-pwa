(function () {
  'use strict';

  Polymer({
    is : 'box-menu-icon',

    fireEvent: function (event) {
      // console.log(event.target);

      var myevent = new CustomEvent("boxmenuevent", {
        detail: {
          iconid : event.target.id
        }
      });
      this.dispatchEvent(myevent);
    }
  });
})();
