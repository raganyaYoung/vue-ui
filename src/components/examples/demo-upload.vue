<template>
  <div>
    <upload :file.sync="photo" style="margin-left:50px;"></upload>
  </div>
</template>
<script>
  import Vue from 'vue'
  import upload from '../examples/demo-upload.vue'

  export default ({
    data() {
      return {
        photo: '',
      }
    },
    components: {
      upload
    }
  })
</script>