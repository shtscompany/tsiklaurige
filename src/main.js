import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import moment from "moment";
import VueMomentJS from "vue-momentjs";
import store from "./store";
import { firebase } from "@firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNjPQk2UdaGZUMU4koN6vrzu_cfRCCbVU",
  authDomain: "tsiklauri-app.firebaseapp.com",
  databaseURL:
    "https://tsiklauri-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tsiklauri-app",
  storageBucket: "tsiklauri-app.appspot.com",
  messagingSenderId: "1000973461332",
  appId: "1:1000973461332:web:342e844e4cffc121418ac1",
  measurementId: "G-SZC4NW1770"
};

// // init firebase app
firebase.initializeApp(firebaseConfig);

// init firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };

Vue.use(VueMomentJS, moment);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
