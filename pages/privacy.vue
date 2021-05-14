<style lang="scss" scoped>
.box {
  width: 900px;
  margin: 30px auto;
}
</style>
<template>
  <div class="container">
    <div class="box" v-html="obj.richEditor"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  head() {
    if (this.obj.seo) {
      return {
        title: this.obj.seo ? this.obj.seo.title : '',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.obj.seo ? this.obj.seo.description : ''
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.obj.seo ? this.obj.seo.keyWords : ''
          }
        ]
      }
    }
  },
  async asyncData(context) {
    let res = await context.$axios.get(
      `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5eecb25b3e46768cc239ebd7`
    )
    return {
      obj: res.data[0]
    }
  },
  mounted() {
    console.log(this.obj)
  },
  methods: {}
}
</script>
