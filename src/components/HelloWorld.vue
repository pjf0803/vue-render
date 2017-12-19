<template>
  <div class="hello">
    <demo1 :level = '1' title = 'biao1'>biaoqian21
    </demo1>
    <demo1 :level = '2' title = 'biao2'>{{msg}}</demo1>
  </div>
</template>
<script>
  import demo1 from './demo1.js'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome'
      }
    },
    components: {
      demo1
    }
  }
</script>
<style scoped>

</style>
