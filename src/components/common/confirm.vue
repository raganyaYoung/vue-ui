<template>
  <div v-if="visible">
    <div class="con-background" @click="_cancel"></div>
    <div class="outer-box">
      <p class="con-title">
        <h4>ATTENTION!</h4>
      </p>
      <hr />
      <div class="con-body" v-html="msg"></div>
      <p class="con-btn">
        <a class="button is-danger" style="margin-right:30px" @click="_confirm">{{_('确认')}}</a>
        <a class="button is-primary" @click="_cancel">{{_('取消')}}</a>
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.component('confirm', {
    name: 'confirm',
    props: {
      visible: false,
      msg: '',
      on_confirm: {
        type: Function,
      },
      on_cancel: {
        type: Function,
      },
    },
    methods: {
      _confirm () {
        this.on_confirm()
        this.visible = false
      },
      _cancel () {
        this.on_cancel()
        this.visible = false
      },
    }, 
    
  })

</script>

<style lang="sass" scoped>
  .outer-box {
    z-index: 3;
    position: fixed;
    top: 34%;
    left: 44%;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    padding: 8px 16px;
    box-shadow: 0 1px 8px hsla(0,0%,39%,.2);
    background: #fff;
    width: 300px;

    .con-title {
      font-weight: bold;
    }

    .con-body {
      padding: 6px 16px;
      word-break: break-all;
    }

    .con-btn {
      text-align: center;
      margin-bottom: 10px;
    }

    
  }

  .con-background {
    z-index: 2;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: -100px;
    background: rgba(17, 17, 17, 0.86);
  }
  
</style>
