<style lang="scss" scoped></style>
<template>
  <div class="container">
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  // async asyncData({ params, redirect }) {
  //   redirect('/travel/1')
  //   return
  // },
  async asyncData(context) {
    let menu
    console.log(Object.keys(context.store.state.menu).length)
    if (!Object.keys(context.store.state.menu).length) {
      let res = await context.$axios.get(`/menu/watabe/list/China`)
      context.store.commit(`SAVE_MENU`, res.data)
      let obj = res.data.filter(v => {
        return v.frontLink == '/travel'
      })[0]
      menu = obj.children
    } else {
      let obj = context.store.state.menu.filter(v => {
        return v.frontLink == '/travel'
      })[0]
      if (obj) {
        menu = obj.children
      }
    }
    let data = menu[0]
    context.redirect(`${data.frontLink}/${data.eName}?parentId=${data.parentId}&key=${data.key}&title=${data.title}`)
    return {
      menu
    }
  },
  mounted() {
    console.log(this.menu)
  },
  methods: {}
}
</script>
