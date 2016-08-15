<template>
  <div>
    <datepicker format="YYYY-MM-DD" :value.sync="startAt"></datepicker>
    - <datepicker format="YYYY-MM-DD" :value.sync="endAt"></datepicker>
  </div>
</template>
<script>
  import Vue from 'vue'
  import datepicker from '../common/datepicker.vue'
  export default ({
    data() {
      return {
        startAt: '',
        endAt: ''
      }
    },
    components: {
      datepicker
    },
    watch: {
      'endAt': function() {
        let startAt = new Date(this.startAt.replace(/\-/g, "\/"))
        let endAt = new Date(this.endAt.replace(/\-/g, "\/"))
        if(this.startAt !== '' && this.endAt !== '' && startAt >= endAt) {
          Vue.set(this, 'endAt', this.startAt)
        }
      },
      'startAt': function() {
        let startAt = new Date(this.startAt.replace(/\-/g, "\/"))
        let endAt = new Date(this.endAt.replace(/\-/g, "\/"))
        if(this.startAt !== '' && this.endAt !== '' && endAt <= startAt) {
          Vue.set(this, 'startAt', this.endAt)
        }
      },
    }
  })
</script>