import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-localstorage/iron-localstorage.js';
import '@polymer/iron-ajax/iron-ajax.js';

class NcAppconfig extends PolymerElement {
  static get template() {
    return html`
      <iron-ajax id="data" auto url="[[url]]" handle-as="json" last-response="{{appconfig}}" on-error="_handleError"></iron-ajax>
      <iron-localstorage name="app-config" value="{{appconfig}}"></iron-localstorage>
    `;
  }
  static get properties() {
    return {
      /**
      * appconfig.json value
      */
      appconfig: {
        type: Object,
        notify: true,
        reflectToAttribute: true
      },
      /**
      * URL Path of config file by default /appconfig.json
      */
      url: {
        type: String,
        value: "/appconfig.json",
        notify: true,
        reflectToAttribute: true
      }
    }
  }

  _handleError(){
    console.log('error loading file');
  }
}

window.customElements.define('nc-appconfig', NcAppconfig);
