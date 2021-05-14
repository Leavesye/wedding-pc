<style lang="scss" scoped>

</style>
<template>
  <div class="container">
  </div>
</template>
<script>
import utils from '~/utils/utils.js'
export default {
  data() {
    return {
    }
  },
  async asyncData(context) {
    let menu
    console.log(Object.keys(context.store.state.menu).length)
    if (!Object.keys(context.store.state.menu).length) {
      let res = await context.$axios.get(`/menu/watabe/list/China`)
      context.store.commit(`SAVE_MENU`, res.data)
      let obj = res.data.filter(v => {
        return v.frontLink == '/wedding'
      })[0]
      menu = obj.children
    } else {
      let obj = context.store.state.menu.filter(v => {
        return v.frontLink == '/wedding'
      })[0]
      if (obj) {
        menu = obj.children
      }
    }
    let data = menu[0]
    context.redirect(`${data.frontLink}/${data.eName}`)
    return {
      menu
    }
  },
  mounted() {},
  methods: {
    top() {
      console.log(utils)
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop
      utils.scrollAnimation(currentY, 0)
    },
    change() {
      this.active = this.mySwiper.realIndex
    },
    changeSwiper(i) {
      this.mySwiper.slideTo(i + 1)
      // this.active = this.mySwiper.activeIndex
    },
  }
}
</script>
