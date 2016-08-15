<template>
  <div>
    <textarea type="text" class="textarea" :value="msg"></textarea>
    <button class="button" @click="confirmShow">{{_('删除')}}</button>
    <confirm
      :visible.sync="confirm_show"
      :msg="confirm_msg"
      :on_confirm="_confirm"
      :on_cancel="_cancel">
    </confirm>
  </div>
</template>
<script>
  import Vue from 'vue'
  import confirm from '../common/confirm.vue'
  export default ({
    data() {
      return {
        confirm_show: false,
        confirm_msg: '',
        msg: 'wild'
      }
    },
    components: {
      confirm
    },
    methods: {
      deleteMsg() {
        this.msg = ''
      },
      _confirm() {
        this.deleteMsg()
      },
      _cancel() {
        this.confirm_msg = ''
        this.confirm_show = false
      },
      confirmShow() {
        this.confirm_msg = 'the content is：' + this.msg + '<br/>'
        this.confirm_show = true 
      },
    }
  })
</script>