import  { createApp }  from 'vue'
import App from './App.vue'
import  VueRouter  from 'vue-router'

import Post from '@/components/Post'
import Author from '@/components/Author'
import PostByTag from '@/components/PostByTag'
import AllPost from '@/components/AllPost'
const app = createApp(App);
app.use(VueRouter);

const routes = [
    { path: '/author/:username', component: Author},
    { path: '/post/:slug', component: Post},
    { path: '/tag/:tag', component: PostByTag},
    { path: '/', component: AllPost}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
})
export default router   

app.use(router);
// app.mount('#app');

// import { createApp } from 'vue';
// import App from './App.vue';
// import { createRouter, createWebHistory } from 'vue-router'; // Correct import

// import Post from '@/components/Post';
// import Author from '@/components/Author';
// import PostByTag from '@/components/PostByTag';
// import AllPost from '@/components/AllPost';

// const app = createApp(App);

// // Create a router instance using createRouter
// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/author/:username', component: Author },
//         { path: '/post/:slug', component: Post },
//         { path: '/tag/:tag', component: PostByTag },
//         { path: '/', component: AllPost }
//     ]
// });

// // Use the router instance with app.use
// app.use(router);

// app.mount('#app');
