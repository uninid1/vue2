import { createApp } from 'vue';
import App from './App.vue';
import NotificationMessage from './components/NotificationMessage.vue';

const app = createApp(App);

app.component('NotificationMessage', NotificationMessage);

app.mount('#app');