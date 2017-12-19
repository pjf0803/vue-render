<template>
  <div class="demo2-wrapper">
    <demo-item :data="List"></demo-item>
    <button @click = "change('img')">图片按钮</button>
    <button @click = "change('text')">文本按钮</button>
    <demo-view :level="1" :title="title"></demo-view>
  </div>
</template>
<script>
  import demoItem from './demo2.js'
  import demoView from './demo1.vue'
  export default {
    name: 'demo-2',
    data () {
      return {
        List: {},
        title:'测试标题'
      }
    },
    components: {
      demoItem,
      demoView
    },
    methods: {
      change (type) {
        if (type === 'img') {
          this.List = {
            type: 'img'
          }
        } else if (type === 'text') {
          this.List = {
            type: 'text',
            content: '这是一段文本'
          }
        } else {
          this.List = {}
        }
      }
    },
    created () {
      this.change('img');
    }
  }
</script>
<style scoped>

</style>
