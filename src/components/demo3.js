// table js渲染数据
export default {
  props: {
    column: {
      type: Array
    },
    data: {
      type: Array
    }
  },
  data() {
    return {
      currentColumns: [],  // thead 数据
      currentData: []   // tbody 数据
    }
  },
  methods: {
    makeColumn() {
      this.currentColumns = this.column.map((item, index) => {  // 表头显示初始数据
        item._sortType = 'normal';
        item._index = index
        return item
      })
    },
    makeData() {
      this.currentData = this.data.map((item, index) => { // tbody 获得初始显示数据
        item._index = index;
        return item
      })
    },
    handleSortByAsc(index) {   // 正序
      const key = this.currentColumns[index].key;
      this.currentColumns.forEach((col) => { // 表明数据已经排过顺序
        col._sortType = 'normal'
      })
      this.currentColumns[index]._sortType = 'asc'  //
      this.currentData.sort((a, b) => {   // 改变currentData里面的 数据的排序
        return a[key] > b[key] ? 1 : -1;
      })
    },
    handleSortByDesc(index) {  // 逆序
      const key = this.currentColumns[index].key;
      this.currentColumns.forEach((col) => {
        col._sortType = 'normal'
      })
      this.currentColumns[index]._sortType = 'desc'
      this.currentData.sort((a, b) => {
        return a[key] < b[key] ? 1 : -1;
      })
    }
  },
  created() {
    this.makeColumn()
    this.makeData()
  },
  render(h) {
    const ths = [];
    this.currentColumns.forEach((col, index) => {   // 渲染表头数据
      if (col.sortable) {  // 渲染表头有排序的部分
        ths.push(h('th', [
          h('span', col.title),
          h('a', {
            on: {
              click: () => {
                this.handleSortByAsc(index)
              }
            }
          }, '⬆️'),
          h('a', {
            on: {
              click: () => {
                this.handleSortByDesc(index)
              }
            }
          }, '⬇️')
        ]))
      } else {  // 渲染表头没有排序的部分
        ths.push(h('th', col.title));
      }
    })
    const trs = [];
    this.currentData.forEach((row) => {
      const tds = [];
      this.currentColumns.forEach((cell) => {
        tds.push(h('td', row[cell.key]))   // 渲染每一行的每一个td 数据
      });
      trs.push(h('tr', tds)); //产生4个tr
    })
    return h('table', [    // render 函数的第三个参数是一个子节点的数组对象， 第二个参数是数据对象，
      h('thead', [
        h('tr', ths)
      ]),
      h('tbody', trs)
    ])
  },
  watch: {  //当增加数据事监听数据的变化  通过判断sortedColumn 数组的长度来判断是否排序过
    data() {
      this.makeData()
      const sortedColumn = this.currentColumns.filter((col) => {
        return col._sortType !== 'normal'
      })
      if (sortedColumn > 0) {
        if(sortedColum[0]._sortType === 'asc'){
          this.handleSortByAsc(sortedColumn[0].index)
        }else {
          this.handleSortByDesc(sortedColumn[0].index)
        }
      }
    }
  }
}
//  实现步骤 =》 显示初始展示数据通过props 传递过来的数据 赋值给初始的currentData  ， currentData 即tbody和thead 将获取到的数据
//通过render 函数的方法显示出来

