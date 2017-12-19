export default {
  props: {
    level: {
      type: Number
    },
    title: {
      type: String
    }
  },
  render: function (h) {
    return h(
      'h' + this.level,
      [
        h( 'a',
          {
            domProps: {
              href: '#' + this.title
            },
            attrs: {
              id: 'ceshi'
            },
            on: {
              change () {
                console.log('测试数据')
              }
            },
            style: {
              color: 'pink'
            }
          },
          this.$slots.default
        )
      ]
    )
  }
}
