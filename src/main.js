import Vue from 'vue'
import App from './App.vue'
import {Button, Select,Input} from 'element-ui'


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)

new Vue({
  render: h => h(App),
}).$mount('#app')
