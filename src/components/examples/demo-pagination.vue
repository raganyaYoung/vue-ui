<template>
  <div>
    <pagination :current_page.sync="current_page" :total_pages.sync="total_pages" :count.sync="rdata_count"></pagination>
  </div>
</template>
<script>
  import Vue from 'vue'
  import pagination from '../common/pagination.vue'
  export default ({
    data() {
      return {
        current_page: 1,
        rdata_count: 100,
        total_pages: '',
        pageSize: 20,
      }
    },
    components: {
      pagination
    },
    computed: {
      'total_pages': function() {
        return Math.ceil(this.rdata_count/this.pageSize)
      },
    }
  })
</script>