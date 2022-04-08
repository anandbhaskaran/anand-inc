// eslint-disable-next-line import/extensions
import '@/@db/db';
// eslint-disable-next-line import/extensions
import '@/plugins/vue-composition-api';
import '@/styles/styles.scss';
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCQu2agZ70UcogvEEqBV-lSloItwZODWrI',
    authDomain: 'anand-inc.firebaseapp.com',
    projectId: 'anand-inc',
    storageBucket: 'anand-inc.appspot.com',
    messagingSenderId: '521131394898',
    appId: '1:521131394898:web:43f94a717cf78713609c8b',
    measurementId: 'G-QEVM39RKYG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
