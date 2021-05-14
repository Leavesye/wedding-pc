<style lang="scss" scoped>
.container1 {
  width: 1260px;
  margin: 25px auto 60px;
}
.tit {
  margin-top: 30px;
  text-align: center;
  color: #962549;
  font-family: 'PingFangSC-Medium';
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 3px;
  .eng {
    color: #f4e9ec;
    font-family: Montserrat;
    font-size: 60px;
    font-weight: 500;
    line-height: 73px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  & > a {
    width: 400px;
    height: 400px;
    margin-left: 30px;
    margin-bottom: 30px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:hover {
      .shadow {
        display: flex;
      }
    }
    .shadow {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 400px;
      height: 400px;
      background: rgba(0, 0, 0, 0.3);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .tit {
        color: #ffffff;
        font-family: 'PingFangSC-Medium';
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 3px;
        margin-bottom: 10px;
      }
      .name {
        color: #ffffff;
        font-family: 'Montserrat-Medium';
        font-size: 20px;
        line-height: 25px;
        text-align: center;
      }
    }
  }
}
</style>
<template>
  <div class="container1">
    <div class="list">
      <nuxt-link
        :to="`/wedding/detail/${item.eName}?parentId=${item.parentId}&key=${item._id}`"
        v-for="(item, index) in list"
        :key="index"
      >
        <img :src="$store.state.baseUrl + item.listImage" />
        <div class="shadow">
          <div class="tit">{{item.eName}}</div>
          <div class="name">{{item.cName}}</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  watchQuery: ['keyword'],
  async asyncData(context) {
    let res = await context.$axios.get(
      `/search/watabe/production/single/China/${context.query.keyword}`
    )
    let list = res.data
    return {
      list
    }
  },
  // head() {
  //   return {
  //     title: this.obj.seo.title,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.obj.seo.description
  //       },
  //       { hid: 'keywords', name: 'keywords', content: this.obj.seo.keyWords }
  //     ]
  //   }
  // },
  mounted() {
    console.log(this.obj)
  },
  methods: {}
}
</script>