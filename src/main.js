import Vue from "vue"
import App from "./App.vue"
import store from "./store/Index"
import Toasted from 'vue-toasted';
import "./registerServiceWorker";

import '@/assets/css/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.use(Toasted, { position: 'bottom-center', duration: 5000, theme: 'toasted-primary', singleton: true })

Vue.mixin({
    methods: {
        showError(err){
            this.$toasted.error(err ? err : 'An error has occurred');
        },
    }
})

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.split('-').map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(' ')
});

Vue.prototype.$eventBus = new Vue();

new Vue({
    store,
	render: h => h(App)
}).$mount("#guest-list")
