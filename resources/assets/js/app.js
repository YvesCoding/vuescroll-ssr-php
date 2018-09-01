import App from './components/App.vue';
import Vue from 'vue';
import vuescroll from 'vuescroll';
Vue.use(vuescroll);

export default new Vue({
    render: h => h(App)
});
