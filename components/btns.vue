<style lang="scss" scoped></style>
<template>
  <div class="fiexd">
    <div class="img" @click="kefu">
      <img src="~assets/img/kefu.png" alt />
    </div>
    <div class="img" @click="top">
      <img src="~assets/img/top.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  async asyncData({ params }) {
    return {}
  },
  mounted() {},
  methods: {
    kefu() {
      window.open(
        'https://tb.53kf.com/code/client/10180604/1',
        '_blank',
        'height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no'
      )
    },
    top() {
      // console.log(this.$refs.container)
      // this.$refs.container.scrollIntoView({
      //   behavior: 'smooth'
      // })
      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
    }
  }
}
</script>
