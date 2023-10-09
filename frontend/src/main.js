// import router from '@/router'
// // import { createApp } from 'vue'
// // import App from './App.vue'

// import Vue from 'vue'

// // createApp(App).use(router).mount('#app')

// new Vue({
//     router,
// })

// import Vue from 'vue'; // Import Vue
import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue'; // Replace with your root component
import router from '@/router'; // Import your Vue Router instance

// Create your Vue app instance
const app = createApp(App);

// Use the Vue Router instance
app.use(router);

// Mount your app to an element
app.mount('#app'); // Replace '#app' with your root element ID
