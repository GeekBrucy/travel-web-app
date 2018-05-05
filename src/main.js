// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// for the click delay on mobile device
import fastClick from 'fastClick'

// reset css
import 'styles/reset.css'
import 'styles/border.css'

// iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
