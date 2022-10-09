import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { i18n } from '@/i18n';

import '@/assets/styles/main.scss';

const app = createApp(App);

app.use(router).use(i18n).mount('#app');
