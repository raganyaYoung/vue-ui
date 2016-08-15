<template>
  <div class="outer-box" v-if="visible" transition="fade">
    <i class="fa fa-exclamation-circle"></i>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  import Vue from 'vue'
  import store from '../vuex/store.js'
  import { changeMsg } from '../vuex/actions.js'

  window.store = store

  export default Vue.component('message', {
    name: 'message',
    vuex: {
      getters: {
        msg(state) {
          return state.message.msg
        },
        duration(state) {
          return state.message.duration
        },
        visible(state) {
          return state.message.visible
        },
      }
    },
    store: store,
  })

</script>

<style lang="sass" scoped>
  .fade-transition {
    font-size: 12px;
    position: fixed;
    z-index: 1010;
    left: 50%;
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    box-shadow: 0 1px 8px hsla(0,0%,39%,.2);
    background: #fff;
    animation: myfirst 0.3s;
    -moz-animation: myfirst 0.3s; /* Firefox */
    -webkit-animation: myfirst 0.3s;  /* Safari 和 Chrome */
    -o-animation: myfirst 0.3s;
    transition: top 1s;

    i { margin-top: 2px; }
  }
  .fade-enter, .fade-leave {
    opacity: 0;
    animation: myend 0.3s;
    -moz-animation: myend 0.3s; /* Firefox */
    -webkit-animation: myend 0.3s;  /* Safari 和 Chrome */
    -o-animation: myend 0.3s;
    transition: all 1s;
    i { margin-top: 2px; }
  }

  @keyframes myfirst
  {
    0%  {top: 0px;}
    90% {top: 70px;}
    100% {top: 75px;}
  }

  @-moz-keyframes myfirst /* Firefox */
  {
    0%  {top: 0px;}
    100% {top: 75px;}
  }

  @-webkit-keyframes myfirst /* Safari 和 Chrome */
  {
    0%  {top: 0px;}
    100% {top: 75px;}
  }

  @-o-keyframes myfirst /* Opera */
  {
    0%  {top: 0px;}
    100% {top: 75px;}
  }

  @keyframes myend
  {
    0%  {top: 75px; opacity: 1}
    100% {top: -75px; opacity: 0}
  }

  @-moz-keyframes myend /* Firefox */
  {
    0%  {top: 75px; opacity: 1}
    100% {top: -75px; opacity: 0}
  }

  @-webkit-keyframes myend /* Safari 和 Chrome */
  {
    0%  {top: 75px; opacity: 1}
    100% {top: -75px; opacity: 0}
  }

  @-o-keyframes myend /* Opera */
  {
    0%  {top: 75px; opacity: 1}
    100% {top: -75px; opacity: 0}
  }
  
</style>
