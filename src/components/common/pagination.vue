<template>
  <nav class="pagination">
    <ul style="list-style:none;">
      <li>
        <a class="button" @click.prevent="current_page=1">{{_('首页')}}</a>
      </li>
      <li v-if="current_page > 1">
        <a class="button" @click.prevent="current_page-=1">{{_('上一页')}}</a>
      </li>
      <li v-for="num in array">
        <a class="button" @click.prevent="current_page=num" :class="{'is-primary': current_page === num}">{{ num }}</a>
      </li>
      <li v-if="current_page < total_pages">
        <a class="button" @click.prevent="current_page+=1">{{_('下一页')}}</a>
      </li>
      <li>
        <a class="button" @click.prevent="current_page=total_pages">{{_('尾页')}}</a>
      </li>
      <li>
        <a class="button">{{_('共')}}{{count}}{{_('条')}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import Vue from 'vue'
  export default {
    props: {
      current_page: 1,
      total_pages: 20,
      count: '',
    },
    computed: {
      array: function() {
        var arr = []
        var begin = Math.max(this.current_page - 4, 0)
        var end = Math.min(this.current_page + 6, this.total_pages)
        while (++begin <= end) {
          arr.push(begin)
        }
        return arr
      }
    }
  }
</script>

<style lang="sass" scoped>
  .content li + li {
    margin-top: 0px;
  }
</style>
