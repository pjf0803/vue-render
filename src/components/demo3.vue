<template>
  <div class="table-wrapper">
    <demo-table :column="column" :data="data"></demo-table>
    <button @click="addData" class="btn">增加数据</button>
  </div>
</template>
<script>
  import demoTable from './demo3.js'
  export default {
    name: 'demo3',
    data () {
      return {
        column: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            sortable: true
          },
          {
            title: '出生年月',
            key: 'birthday',
            sortable: true
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data: [
          {
            name: '王小明',
            age: 13,
            birthday: '2004-12-3',
            address: '北京市海淀区西二旗'
          },
          {
            name: '李明',
            age: 15,
            birthday: '2002-12-31',
            address: '北京市西城区牛街'
          },
          {
            name: '力宏',
            age: 23,
            birthday: '1994-12-23',
            address: '北京市海淀区西二旗'
          },
          {
            name: '王可',
            age: 43,
            birthday: '1974-8-3',
            address: '北京市丰台区卢沟桥'
          }
        ]
      }
    },
    components: {
      demoTable
    },
    methods:{
      addData(){
        this.data.push({
          name: '沈瑞云',
          age: 24,
          birthday: '1993-10-25',
          address: '河南省焦作市'
        })
      }
    }
  }
</script>
<style scoped>
  table{
    width: 100%;
    border-collapse:collapse;
  }
  table, td, th{
    border:1px solid black;
  }
  .btn{
    float: left;
  }
</style>


