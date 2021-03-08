// eslint-disable-next-line node/no-extraneous-import
import Vue from "vue"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})