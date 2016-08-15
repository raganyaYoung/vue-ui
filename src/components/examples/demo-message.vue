<template>
  <div>
    <button class="button" @click="showMsg">{{_('显示提示信息')}}</button>
  </div>
</template>

<script>
  export default ({
    methods: {
      showMsg() {
        this.message(2, 'message', true)
      }
    }
  })
</script>