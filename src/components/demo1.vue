<template>
  <div class="render-wrapper">
    <h1 v-if = "level === 1">
      <a href=" `'#' title`">
        {{title}}
      </a>
      <slot></slot>
    </h1>
    <h2 v-if = "level === 2">
      <a href=" '#'+ title ">
        {{title}}
      </a>
      <slot></slot>
    </h2>
  </div>
</template>
<script>
  export default {
    name: 'demo1',
    data () {
      return {
      }
    },
    props: {
      level: {
        type: Number
      },
      title: {
        type: String
      }
    },
    methods: {

    }
  }
</script>
<style scoped >

</style>
