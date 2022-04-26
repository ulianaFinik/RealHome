import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer/Footer.vue'
import MainContainer from './components/MainContainer.vue'
import About from './components/About.vue'
import Property from './components/Property.vue'
import Blog from './components/Blog.vue'
import Home from './components/Home.vue'
import Contacts from './components/Contacts.vue'
import FooterIcons from './components/Footer/FooterIcons.vue'//наименование компонентов с большой буквы
import FooterNavigation from './components/Footer/FooterNavigation.vue'
import FooterContacts from './components/Footer/FooterContacts.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import Features from './components/Features.vue'
import PropertyPage from './components/PropertyPage.vue'



export const routes = [ //если квадратные скобки - всегда МАССИВ
    { path: '/', component: Home }, // По этому URL вместо router-view будет вставлен указанный компонент
    { path: '/about', component: About },
    { path: '/property', component: Property },
    { path: '/blog', component: Blog },
    { path: '/Contacts', component: Contacts},
    { path: '/property/:id', component: PropertyPage },
    // если фигурные скобки - объект. Объект может содержать свойства, которые можно воспринимать как переменные
];

export const router = createRouter({
    base: '/',
    history: createWebHistory(),
    routes,
  });

const app = createApp(App);
app.use(router);
app.component('Header', Header) // второй аргумент без кавычек это название компонента, а первый  - имя, под которым этот компонент можно использовать в templates, Регистрирую хедер
app.component('Footer', Footer)
app.component('MainContainer', MainContainer)
app.component('About', About)
app.component('Property', Property)
app.component('FooterIcons', FooterIcons)
app.component('FooterNavigation', FooterNavigation)
app.component('FooterContacts', FooterContacts)
app.component('Breadcrumbs', Breadcrumbs)
app.component('Blog', Blog)
app.component('Features', Features)
app.component('PropertyPage', PropertyPage)
app.mount('#app');//подключение приложнения в див с ID "app". Подключается в html


