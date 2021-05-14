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
  overflow: hidden;
}
.list {
  width: 100%;
  margin-top: 84px;
  .item {
    display: flex;
    margin-bottom: 95px;
    .img {
      margin-top: 15px;
      width: 457px;
      height: 305px;
      flex-shrink: 0;
      margin-right: 70px;
    }
    .content {
      flex: 1;
      .title2 {
        width: 85px;
        height: 75px;
        line-height: 75px;
        text-align: center;
        background: url('../../assets/img/about/01.png') no-repeat center center;
        background-size: contain;
        color: #962549;
        font-family: 'PingFangSC-Regular';
        font-size: 18px;
        letter-spacing: 2.7px;
      }
      .des {
        color: #962549;
        font-family: 'SourceHanSerifCN-SemiBold';
        font-size: 26px;
        line-height: 33px;
        margin-bottom: 42px;
      }
      .content2 {
        color: #4a4a4a;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        line-height: 28px;
      }
    }
    &:nth-child(2n) {
      flex-direction: row-reverse;
      .img {
        margin-right: 0;
      }
      .content {
        margin-right: 70px;
      }
    }
    &:nth-child(2) {
      .content {
        .title2 {
          background: url('../../assets/img/about/02.png') no-repeat center
            center;
        }
      }
    }
    &:nth-child(3) {
      .content {
        .title2 {
          background: url('../../assets/img/about/03.png') no-repeat center
            center;
        }
      }
    }
    &:nth-child(4) {
      .content {
        .title2 {
          background: url('../../assets/img/about/04.png') no-repeat center
            center;
        }
      }
    }
  }
}
</style>
<template>
  <div class="wrap">
    <div class="title">
      <div class="active">团队介绍</div>
    </div>
    <div class="banner">
      <img :src="$store.state.baseUrl + obj.mainHeadKV[0].imageURL" alt />
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in obj.content" :key="index">
        <div class="img">
          <img :src="$store.state.baseUrl + item.imageVideoData[0].imageURL" alt />
        </div>
        <div class="content">
          <div class="title2">{{item.title}}</div>
          <div class="des">{{item.subTitle}}</div>
          <div class="content2" v-html="item.editorContent.replace(/\n|\r\n/g, '<br>')">
            日本上市集团「WATABE
            WEDDING」携旗下中国品牌「WATABE华德培海外婚礼」，为了每一对中国新人一生一次的婚礼仪式，量身打造婚礼婚宴方案，从礼堂、礼服到仪式流程，全程把握细节里爱的表达，全力以赴做好每一次服务。我们自信能更好地帮助新人，将这份真爱告知彼此与世界，使那一天成为新人此生回忆中永远闪闪发光的珍宝！
          </div>
        </div>
      </div>
    </div>
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
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/5e4408d6bede2879e6afd756/5e4e26c0b5c1951d163eadac`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5e4e26c0b5c1951d163eadac`
      )
    }
    let obj = res.data[0]
    return {
      obj
    }
  },
  mounted() {
    console.log(this.obj)
  },
  methods: {}
}
</script>
