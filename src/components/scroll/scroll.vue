<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  //  const DIRECTION_H = 'horizontal'
  //  const DIRECTION_V = 'vertical'

  export default {
    data: function () {
      return {}
    },
    methods: {
      _initScroll: function () {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })
      },
      enable: function () {
        this.scroll && this.scroll.enable()
      },
      disable: function () {
        this.scroll && this.scroll.disable()
      },
      refresh: function () {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    created: function () {
    },
    mounted: function () {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    watch: {
      data: function () {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      }
//      listenScroll: {
//        type: Boolean,
//        default: false
//      },
//      pullup: {
//        type: Boolean,
//        default: false
//      },
//      beforeScroll: {
//        type: Boolean,
//        default: false
//      },
//      refreshDelay: {
//        type: Number,
//        default: 20
//      },
//      direction: {
//        type: String,
//        default: DIRECTION_V
//      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
</style>
