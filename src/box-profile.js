(function() {
    'use strict';

    class BoxProfile extends Polymer.Element {
        static get is() { return 'box-profile'; }

        static get config() {
            return {
                properties: {
                },
                observers: [
                ]
            };
        }
    }

    customElements.define(BoxProfile.is, BoxProfile);

})();
