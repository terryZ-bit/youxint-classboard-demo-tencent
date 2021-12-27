import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import axios from 'axios'
import less from 'less'
import ElementUI from 'element-ui'
import './assets/defult.less'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import dayjs from "dayjs";

Vue.prototype.axios = axios
Vue.use(dataV)
Vue.use(ElementUI)
Vue.prototype.less = less
Vue.use(dayjs)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

