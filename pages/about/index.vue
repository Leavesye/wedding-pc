<style lang="scss" scoped>
</style>
<template>
  <div class="wrap"></div>
</template>
<script>
export default {
  data() {
    return {}
  },
  async asyncData(context) {
    let menu
    console.log(Object.keys(context.store.state.menu).length)
    if (!Object.keys(context.store.state.menu).length) {
      let res = await context.$axios.get(`/menu/watabe/list/China`)
      context.$store.commit(`SAVE_MENU`, res.data)
      let obj = res.data.filter(v => {
        return v.frontLink == '/about'
      })[0]
      menu = obj.children
    } else {
      let obj = context.store.state.menu.filter(v => {
        return v.frontLink == '/about'
      })[0]
      if (obj) {
        menu = obj.children
      }
    }
    return context.redirect(`${menu[0].frontLink}`)
  },
  mounted() {},
  methods: {}
}
</script>
