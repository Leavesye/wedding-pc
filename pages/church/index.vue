<style lang="scss" scoped>
.swiper-container {
  // height: 300px;
  width: 100%;
}
.strength {
  height: 700px;
  width: 100%;
  background-size: 100% 100%;
  position: relative;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tit {
    color: #962549;
    font-family: 'PingFangSC-Medium';
    font-size: 30px;
    letter-spacing: 3px;
    margin-bottom: 42px;
  }
  .des {
    color: #262626;
    font-family: 'PingFangSC-Regular';
    font-size: 20px;
    margin-bottom: 40px;
  }
  .detail {
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    line-height: 28px;
    text-align: center;
  }
}
.swiper {
  width: 100%;
  // .des {
  //   clear: both;
  //   color: #4a4a4a;
  //   font-family: 'PingFangSC-Regular';
  //   font-size: 14px;
  //   line-height: 18px;
  //   text-align: center;
  //   padding-top: 20px;
  //   display: none;
  // }
}
.tab {
  width: 1280px;
  margin: auto;
  margin-top: 20px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #d8d8d8;
  margin-bottom: 50px;
  a {
    cursor: pointer;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 20px;
    position: relative;
    &.active {
      color: #962549;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 2px;
        background: #962549;
      }
    }
  }
}
.list {
  margin: auto;
  width: 1280px;
  .item {
    display: flex;
    height: 586px;
    overflow: hidden;
    margin-bottom: 80px;
    .img {
      width: 880px;
    }
    .wrap {
      width: 400px;
      padding: 0 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f6f6f6;
      .tit {
        margin-top: 100px;
        color: #962549;
        font-family: 'PingFangSC-Medium';
        font-size: 20px;
      }
      .eng {
        color: #962549;
        font-family: 'Montserrat-Regular';
        font-size: 18px;
        margin-top: 10px;
      }
      .des {
        margin-top: 40px;
        color: #4a4a4a;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        line-height: 28px;
      }
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
        &:hover {
          background: #962549;
          color: #fff;
        }
      }
    }
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
}
/deep/ {
  .test {
    height: 40px;
  }
}
</style>
<template>
  <div ref="container" class="container">
    <btns></btns>
    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
    <div
      class="swiper-no-swiping"
      v-swiper:mySwiper="swiperOption"
      :activeIndex="active"
      @slideChange="change"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner, index) in obj.mainHeadKV"
          :key="index"
        >
          <div class="banner">
            <div class="banner2">
              <img :src="$store.state.baseUrl + banner.imageURL" alt />
            </div>
            <div class="shadow"></div>
            <div class="wrap">
              <div class="name">{{ banner.title }}</div>
              <div class="des">{{ banner.subTitle }}</div>
              <div
                class="text"
                v-html="banner.content.replace(/\n|\r\n/g, '<br>')"
              >
                {{ banner.content }}
              </div>
              <a :href="banner.link" class="btn">了解更多</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination2">
        <div
          v-for="(banner, index) in obj.mainHeadKV"
          :key="index"
          class="test"
          @click="changeSwiper(index)"
        >
          <div></div>
          <span
            class="slide"
            :class="{ active: active == index, first: first }"
          >
            <span class="tip"></span>
          </span>
        </div>
      </div>
    </div>
    <div
      class="strength"
      v-if="obj.subHeadKV && obj.subHeadKV.length"
      :style="{
        background: `url(${$store.state.baseUrl +
          obj.subHeadKV[0].imageURL}) no-repeat center center`
      }"
    >
      <div class="tit">{{ obj.subHeadKV[0].title }}</div>
      <div class="des">{{ obj.subHeadKV[0].subTitle }}</div>
      <div
        class="detail"
        v-html="obj.subHeadKV[0].content.replace(/\n|\r\n/g, '<br>')"
      >
        教堂，在西方文化中，一直是神圣与浪漫的代名词。
        在神父或牧师的祝福中，在上帝的见证下完成婚礼，
        <br />使其承载着无可比拟的仪式感，也更加坚定新人共度一生的信念感！
        彼此的一句“我愿意”，一生的幸福故事即将展开。
      </div>
    </div>
    <div class="tab">
      <a
        v-for="(item, index) in obj.chapelContent"
        :class="{ active: active3 == index }"
        :key="index"
        @click="changeChapelItems(index)"
        >{{ item.country }}</a
      >
    </div>
    <div class="list">
      <div
        class="item"
        v-for="(item, index) in obj.chapelContent[active3].chapelItems"
        :key="index"
      >
        <div class="img">
          <img
            v-if="item.imageVideoData.length == 1"
            :src="$store.state.baseUrl + item.imageVideoData[0].imageURL"
            alt
          />
          <div v-else>
            <no-ssr>
              <swiper :options="swiperOption2">
                <swiper-slide
                  v-for="(banner, index) in item.imageVideoData"
                  :key="index"
                >
                  <img :src="$store.state.baseUrl + banner.imageURL" alt />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </no-ssr>
          </div>
        </div>
        <div class="wrap">
          <div class="tit">{{ item.chapelNameC }}</div>
          <div class="eng">{{ item.chapelNameE }}</div>
          <div class="des" v-html="item.content.replace(/\n|\r\n/g, '<br>')">
            {{ item.content }}
          </div>
          <a class="btn" :href="item.url">了解更多</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.obj.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.obj.seo.description
        },
        { hid: 'keywords', name: 'keywords', content: this.obj.seo.keyWords }
      ]
    }
  },
  async asyncData(context) {
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/5e4408e7bede2879e6afd757/5e4408e7bede2879e6afd757`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e4408e7bede2879e6afd757/5e4408e7bede2879e6afd757`
      )
    }
    // redirect('/church/1')
    return { obj: res.data[0] }
  },
  mounted() {
    // console.log('app init', this)
    // setTimeout(() => {
    //   this.banners.push('/5.jpg')
    //   console.log('banners update')
    // }, 3000)
    // console.log(
    //   'This is current swiper instance object', this.mySwiper,
    //   'I will slideTo banners 3')
    //  this.mySwiper.slideTo(3)
    // this.top()
    console.log(this.obj)
  },
  scrollToTop: true,
  components: {},
  data() {
    return {
      active: 0,
      active2: 0,
      active3: 0,
      first: true,
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000, //1秒切换一次
          waitForTransition: true,
          disableOnInteraction: false
        }
      },
      swiperOption2: {
        loop: true,
        autoplay: {
          delay: 5000 //1秒切换一次
        },
        pagination: {
          el: '.swiper-pagination',

          clickable: true
        }
      }
    }
  },
  methods: {
    changeChapelItems(index) {
      this.active3 = index
    },
    change() {
      this.first = false
      this.active = this.mySwiper.realIndex
    },
    change2() {
      this.active2 = this.mySwiper2.realIndex
      console.log(this.mySwiper2.activeIndex, this.mySwiper2.realIndex)
      // this.active = this.mySwiper.realIndex
    },
    changeSwiper(i) {
      this.mySwiper.slideTo(i + 1)
      // this.active = this.mySwiper.activeIndex
    },
    changeSwiper2(i) {
      console.log(i)
      this.mySwiper2.slideTo(i + 2)
      // this.active = this.mySwiper.activeIndex
    }
  }
}
</script>
