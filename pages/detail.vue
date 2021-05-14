<style lang="scss" scoped>
.mianbao {
  max-width: 1280px;
  margin: 25px auto;
}
.ccc {
  margin: 0 auto;
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'PingFangSC-Medium';
}
.tit {
  color: #962549;
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 3px;
  margin: 60px auto 24px;
}
.time {
  color: #999999;
  font-family: 'PingFangSC-Regular';
  font-size: 14px;
  line-height: 18px;
}
.des {
  width: 738.77px;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  margin: 62px auto 89px;
}
.btns {
  display: flex;
  margin: 90px auto;
  .btn {
    width: 180px;
    height: 40px;
    margin-top: 50px;
    border: solid 1px #962549;
    color: #962549;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 2px;
    display: block;
    cursor: pointer;
  }
  .btn1 {
    border: solid 1px #962549;
    color: #fff;
    background: #962549;
    margin-left: 40px;
  }
}
</style>
<template>
  <div>
    <div class="mianbao">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/about/news' }">关于我们</el-breadcrumb-item>
        <el-breadcrumb-item>最新资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="img">
      <img :src="$store.state.baseUrl + obj.mainHeadKV[0].imageURL" alt />
    </div>
    <div class="ccc">
      <div class="tit">{{obj.titleAndOverview.title}}</div>
      <div class="time">{{obj.uTime}}</div>
      <p class="des" v-html="obj.richEditor"></p>
      <!-- <div class="img">
        <img src="~assets/img/about/newsimg.jpg" alt />
      </div>-->
      <div class="btns">
        <div class="btn btn1" @click="zixun">详情咨询</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  data() {
    return {}
  },
  // watchQuery: ['key'],
  async asyncData(context) {
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/5e4408d6bede2879e6afd756/${context.query.key}`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/${context.query.key}`
      )
    }
    return {
      obj: res.data[0]
    }
  },
  mounted() {
    console.log(this.obj)
  },
  methods: {
    zixun() {
      window.open(
        'https://tb.53kf.com/code/client/10180604/1',
        '_blank',
        'height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no'
      )
    }
  }
}
</script>
