
let ImgItem = {
  name: 'imgItem',
  props: ['data'],
  render: function (h) {
    return h('div', [
      h('p', '图片组件')
    ])
  }
}

let TextItem = {
  name: 'textItem',
  props: ['data'],
  render: function (h) {
    return h('div', [
      h('p', this.data.content)
    ])
  }
}

export default {
  functional: true,
  props: {
    data: {
      type: Object
    }
  },
  render (h, context) {
    function getComponent () {
      let data = context.props.data
      if (data.type === 'img') return ImgItem
      if (data.type === 'text') return TextItem
    };
    return h(
      getComponent(),
      {
        props: {
          data: context.props.data
        }
      }
    )
  }
}
