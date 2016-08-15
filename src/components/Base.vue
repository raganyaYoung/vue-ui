<template>
  <div class="wrapper">

    <nav class="nav header">
      <div class="nav-left">
        <p class="title">vue ui {{ _('组件') }}</p>
        <div class="title-icon">
          <span class="icon" @click="slideNav">
            <i class="fa fa-bars"></i>
          </span>
        </div>
      </div>
      <div class="nav-right nav-menu">
        <p class="level-item">
          <div style="font-size:14px;color:#fff;margin-left:15px;margin-top:5px;">
            <span>{{_('语言')}}：</span>
            <a href="javascript:;" @click="changeLang('zh-CN')" v-bind:style="{color: lang === 'zh-CN' ? '#333' : '#fff' }">{{_('中')}}</a> |
            <a href="javascript:;" @click="changeLang('en')" v-bind:style="{color: lang === 'en' ? '#333' : '#fff' }">{{_('英')}}</a>
          </div>
        </p>
      </div>
    </nav>

    <div class="columns">

      <div class="column is-2 menu-container">
        <aside class="menu side-bar" transition="fadeLeft" v-if="slideStatus">
          <li class="header-li">HEADER</li>
          <ul class="menu-list">
            <li v-for="item in menus"><a 
              v-link='{path: item.path}' 
              :class="{'is-active': item.is-active}"
              @click="changeActive(menus, item)"
              >{{item.name}}
            </a></li>
          </ul>
        </aside>
      </div>

      <div class="column content" v-bind:style="{marginLeft: !slideStatus ? '-207px' : '23px'}">

        <message></message>

        <!-- main view -->
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>



<script>
import Vue from 'vue'
import store from './vuex/store.js'
import routes from './routes/routes.js'

import message from './common/message.vue'
import { changeLang } from './vuex/actions.js'

const menus = JSON.parse(JSON.stringify(routes))

export default {
  data() {
    return {
      menus: menus,
      slideStatus: true,
    }
  },
  created() {
    menus.map(el => {
      Vue.set(el, 'is-active', this.$route.path.includes(el.path))
    })
  },
  components: {
    message,
  },
  vuex: {
    actions: {
      changeLang,
    },
    getters: {
      lang: state => state.lang
    }
  },
  methods: {
    changeActive(menu, item) {
      menu.map(el => {
        Vue.set(el, 'is-active', false)
      })
      Vue.set(item, 'is-active', true)
    },
    slideNav() {
      this.slideStatus = !this.slideStatus
    },
  },
  store: store
}

var Nav = Vue.extend({
  template: ``

})
</script>


<style lang="sass" scoped>
  .wrapper {
    margin: 0px;
    padding: 0px;
    min-height: 100%;
    position: relative;

    .header {
      padding: 15px 15px 15px 10px;
      height: 58px;
      background: #1fc8db;
      box-shadow: 0 1px 0 rgba(255,255,255,0.2);
      posotion:relative;

      .title {
        margin: 0px;
        padding: 0px;
        background: rgba(23,30,32,0.1);
        position: absolute;
        top: 0px;
        left: 0px;
        width: 230px;
        height: 58px;
        text-align: center;
        line-height: 58px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
      }

      .title-icon {
        position: absolute;
        top: 0px;
        left: 230px;
        width: 58px;
        height: 58px;
        cursor: pointer;
        color: #fff;

        .icon {
          text-align: center;
          line-height: 58px;
        }

        &:hover {
          background: rgba(23,30,32,0.1);

          .icon {
            transform: scale(1.1);
          }
        }
      }
    }

    .side-bar {
      background: #1e282c;
      position: absolute;
      min-height: 100%;
      width: 230px;

      .header-li {
        display: block;
        padding: 12px 5px 12px 15px;
        background: #1a2226;
        font-size: 14px;
        color: #4b646f;
      }

      .menu-list {
      }

      .ul-bar {
        background: #2c3b41;
      }

      .active {
        background: #1fc8db;
        color: #fff;
      }
    }

    .content {
      margin-left: 28px;
      margin-top: 15px;
      margin-right: 15px;
      width: 100%;
      height:100%;
      transition:margin-left 0.8s;
    }

  }
  .menu-container {
        // min-height:100%!important;
        height: 515px;
      }
</style>
