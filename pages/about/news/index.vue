<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  width: 100%;
  height: 50px;
  display: flex;
  padding-top: 7px;
  border-bottom: 1px solid #d8d8d8;
  color: #962549;
  font-family: 'PingFangSC-Medium';
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 2px;
  box-sizing: border-box;
  div {
    height: 100%;
  }
  .active {
    border-bottom: 2px solid #962549;
  }
}
.banner {
  margin-top: 30px;
  display: flex;
  align-items: center;
  img {
    width: 800px;
    height: 480px;
  }
  .text {
    width: 345px;
    height: 360px;
    margin-left: -90px;
    background: #fff;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
    font-family: 'PingFangSC-Regular';
    padding: 40px 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tit {
      color: #962549;
      font-family: 'PingFangSC-Medium';
      font-size: 30px;
      line-height: 36px;
    }
    .des {
      color: #4a4a4a;
      font-size: 14px;
      line-height: 28px;
    }
    .time {
      color: #999999;
      font-size: 14px;
      line-height: 18px;
    }
  }
}
.list {
  width: 100%;
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 515px;
    margin-bottom: 60px;
    &:nth-child(2n-1) {
      margin-right: 30px;
    }
    .img {
      margin-bottom: 20px;
      // height: 305px;
    }
    .content {
      width: 100%;
      font-family: 'PingFangSC-Medium';
      .title2 {
        color: #962549;
        font-size: 26px;
        line-height: 33px;
        margin-bottom: 20px;
      }
      .date {
        color: #999999;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}
</style>
<template>
  <div class="wrap">
    <div class="title">
      <div class="active">最新资讯</div>
    </div>
    <nuxt-link :to="`/detail?key=${top._id}`" class="banner">
      <img :src="$store.state.baseUrl + top.mainHeadKV[0].imageURL" alt />
      <div class="text">
        <div class="tit">{{ top.titleAndOverview.title }}</div>
        <div class="des">{{ top.titleAndOverview.overview }}</div>
        <div class="time">{{ top.uTime }}</div>
      </div>
    </nuxt-link>
    <div class="list">
      <nuxt-link
        :to="`/detail?key=${item._id}`"
        class="item"
        v-for="(item, index) in arr"
        :key="index"
        v-if="!item.isTop"
      >
        <div class="img">
          <img :src="$store.state.baseUrl + item.mainHeadKV[0].imageURL" alt />
        </div>
        <div class="content">
          <div class="title2">{{ item.titleAndOverview.title }}</div>
          <div class="date">{{ item.titleAndOverview.overview }}</div>
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
  async asyncData(context) {
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/news/watabe/preview/list/China/5e4408d6bede2879e6afd756`
      )
    } else {
      res = await context.$axios.get(
        `/resource/news/watabe/production/list/China/5e4408d6bede2879e6afd756`
      )
    }
    let top = res.data.filter(v => {
      return v.isTop
    })[0]
    return {
      top,
      arr: res.data
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {}
}
</script>
