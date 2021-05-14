<template>
  <div>
    <Header></Header>
    <div class="page">
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import store from 'store'
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    console.log(window.devicePixelRatio)
    console.log(store)
    if (window.devicePixelRatio == 1.5) {
      document.body.style.zoom = '.667'
    } else if (window.devicePixelRatio == 1.25) {
      document.body.style.zoom = '.75'
    } else if (window.devicePixelRatio == 1.75) {
      document.body.style.zoom = '.5675'
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  margin: 0 auto 0;
  min-height: calc(100vh - 480px);
  width: 100%;
  min-width: 1280px;
}
</style>
