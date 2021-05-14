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
.title2 {
  height: 77px;
  margin-top: 60px;
  margin-bottom: 50px;
  flex-shrink: 0;
  overflow: hidden;
}
.des {
  color: #4a4a4a;
  font-family: 'PingFangSC-Regular';
  font-size: 14px;
  line-height: 28px;
  text-align: center;
}
.video {
  width: 100%;
  margin: 60px auto 70px;
  position: relative;
  video {
    width: 100%;
  }
  .play {
    width: 70px;
    height: 70px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
<template>
  <div class="wrap">
    <div class="title">
      <div class="active">品牌简介</div>
    </div>
    <div class="banner">
      <img :src="$store.state.baseUrl + obj.mainHeadKV[0].imageURL" alt />
    </div>
    <div class="title2">
      <img src="~assets/img/about/title.png" alt />
    </div>
    <div class="des" v-html="obj.headText.replace(/\n|\r\n/g, '<br>')">
      「 WATABE华德培海外婚礼 」隶属日本上市集团WATABE
      WEDDING株式会社，于2014年正式进入中国。
      <br />秉承集团“那一天，永在心间”的婚礼理念，「 WATABE华德培海外婚礼
      」始终坚持日式服务精神， 携手WATABE
      <br />WEDDING全球日本服务团队，为中国每一对新人打造安心、难忘的婚礼。
    </div>
    <div class="video" v-if="obj.video.length && show">
      <img :src="$store.state.baseUrl + obj.video[0].videoCoverURL" alt />
      <div class="play" @click="change">
        <img src="~assets/img/play.png" alt />
      </div>
    </div>
    <div class="video" v-else-if="obj.video.length">
      <video :src="$store.state.baseUrl + obj.video[0].videoURL" autoplay controls></video>
    </div>
    <div class="des" v-html="obj.richEditor.replace(/\n|\r\n/g, '<br>')">
      WATABE WEDDING株式会社，成立于1953年，
      <br />是东京证券交易所上市公司，主板上市代码4696。
      <br />历经60余年的发展，已成为一家拥有日本酒店、日本婚礼、海外婚礼、
      <br />海外旅拍、婚纱西服、相册工厂的一站式婚礼服务集团公司。
      <br />旗下海外婚礼业务更是覆盖冲绳、巴厘岛、塞班岛、夏威夷、关岛、大溪地、
      <br />北海道、轻井泽、东京、京都、意大利、英国、澳大利亚、
      <br />新西兰等国家和地区，并持续在不断扩大中。
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
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
        `/resource/watabe/preview/single/China/5e4408d6bede2879e6afd756/5e4e26d0b5c1951d163eadad`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5e4e26d0b5c1951d163eadad`
      )
    }
    let obj = res.data[0]
    return {
      obj,
      parentId: context.query.key
    }
  },
  mounted() {
    console.log(this.obj)
  },
  methods: {
    change() {
      this.show = !this.show
    }
  }
}
</script>
