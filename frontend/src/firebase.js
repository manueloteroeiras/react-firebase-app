import firebase from 'firebase';

const config = require('./credencials.json')

let app = {};

if (!firebase.apps.length) {
  app = firebase.initializeApp(config, 'ferremax');
}



export default  !firebase.apps.length ? app : firebase.app('ferremax');