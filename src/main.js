import Vue from 'vue'
import App from './App.vue'
// import MyUI from './components'

const MyUI = require("../dist/myui").default

Vue.use(MyUI, {
  components: [
    "MyButton",
    "MyInput"
  ]
});

new Vue({
  render: h => h(App)
}).$mount("#app")