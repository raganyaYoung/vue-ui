//es6语法：
import Vue from "vue";//其实不用写完，会自动查找。可以直接写import Vue from "vue";
import Router from 'vue-router'
import "bulma"
import 'vue-animate/dist/vue-animate.min.css'
import 'font-awesome/scss/font-awesome.scss'

import store from './components/vuex/store.js'
import { getTrans } from './components/utils/trans.js'
import { changeMsg } from './components/vuex/actions.js'

//引入我们编写的测试用vue文件。
import Base from './components/base.vue';
import Datepicker from './components/examples/demo-datepicker.vue'
import Message from './components/examples/demo-message.vue'
import Pagination from './components/examples/demo-pagination.vue'
import Confirm from './components/examples/demo-confirm.vue'
import Chart from './components/examples/demo-chart.vue'
import Upload from './components/examples/demo-upload.vue'
// import Quill from './components/examples/demo-quill.vue'

Vue.config.debug = true;//开启错误提示

Vue.use(Router)

Vue.prototype._ = function(word) {
  return getTrans(word, store.state.lang)
}

Vue.prototype.message = function(duration, msg, visible) {
  return changeMsg(store, {duration, msg, visible})
}

const router = new Router({
  hashbang: false,
  linkActiveClass: "active",
  history: true
})

router.map({
  '*': {
    component: {
      template: `<div><h2>{{_('welcome!')}}!</h2></div>`
    }
  },

  '/admin': {
    component: Base,
    subRoutes: {
      '/datepicker': {
        component: Datepicker
      },
      '/message': {
        component: Message
      },
      'pagination': {
        component: Pagination
      },
      'confirm': {
        component: Confirm
      },
      'chart': {
        component: Chart
      },
      'upload': {
        component: Upload
      },
      // 'quill': {
      //   component: Quill
      // }
    }
  },
});


// redirect vue router default
router.redirect({
  '*': '/admin'
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
const App = Vue.extend({
  template: '<div><router-view></router-view></div>'
})
window.router = router

router.start(App, '#app')