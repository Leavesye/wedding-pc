<style lang="scss" scoped>
img {
  width: 100%;
  float: left;
}
.strength {
  height: 750px;
  width: 100%;
  background: url('~assets/img/home/hua1.png') no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  padding-top: 178px;
}
.cardList {
  width: 100%;
  display: flex;
  justify-content: center;
  top: -115px;
  position: absolute;
  z-index: 2;
  .card {
    width: 362px;
    margin-right: 12px;
    position: relative;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    background: #fff;
    img {
      height: 242px;
    }
    .shade {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 74px;
      background: rgba(255, 255, 255, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: height 0.3s;
      .name {
        color: #962549;
        font-family: 'PingFangSC-Medium';
        font-size: 15px;
        line-height: 19px;
        margin-bottom: 7px;
        .des {
          color: #4a4a4a;
          font-family: 'PingFangSC-Regular';
          font-size: 13px;
          line-height: 17px;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
    &:hover {
      .shade {
        height: 100%;
      }
    }
  }
}
.pinpai {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #962549;
    font-family: 'PingFang-SC-Bold';
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 3px;
  }
  .list {
    width: 1110px;
    height: 130px;
    display: flex;
    align-items: center;
    margin: 47px auto 60px;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 130px;
      justify-content: flex-end;
      position: relative;
      .count {
        color: #962549;
        font-family: 'PingFangSC-Light';
        font-size: 36px;
        display: flex;
        align-items: center;
        span {
          font-family: Arial;
          font-size: 60px;
          font-weight: 700;
        }
      }
      .des {
        margin-top: 16px;
        color: #4a4a4a;
        font-family: 'PingFangSC-Semibold';
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
      }
      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 129px;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        background: #d8d8d8;
      }
      &:last-child::after {
        display: none;
      }
    }
    .line {
      width: 1px;
      height: 129px;
      background: #d8d8d8;
    }
  }
  .des2 {
    height: 104px;
    font-size: 14px;
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    line-height: 38px;
    text-align: center;
  }
  .btn {
    margin-top: 60px;
    width: 180px;
    height: 40px;
    color: #ffffff;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 2px;
    background: #962549;
    border: #962549;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 14px;
      margin-left: 5px;
    }
  }
}
.links {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  #7 {
    width: 720px;
    height: 720px;
  }
  .link {
    width: 50%;
    height: 0;
    padding-bottom: 50%;
    background-size: 100% 100% !important;
    color: #ffffff;
    position: relative;

    .content {
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .etitle {
      font-family: Montserrat;
      color: #ffffff;
      font-size: 30px;
      font-weight: 500;
      line-height: 37px;
      text-transform: uppercase;
    }
    .ctitle {
      font-family: 'PingFangSC-Medium';
      color: #ffffff;
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 3px;
      margin-top: 14px;
    }
    .btn {
      margin-top: 110px;
      width: 180px;
      height: 40px;
      color: #ffffff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 2px;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'PingFangSC-Regular';
      img {
        width: 14px;
        margin-left: 5px;
      }
      &:hover {
        background: #962549;
        border: #962549;
      }
    }
  }
}
.tuijian {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 53px;
  .title {
    text-align: center;
    div:first-child {
      color: #962549;
      font-family: Montserrat;
      font-size: 30px;
      font-weight: 500;
      line-height: 37px;
    }
    div:last-child {
      margin-top: 8px;
      color: #962549;
      font-family: 'PingFangSC-Regular';
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 3px;
      margin-bottom: 40px;
    }
  }
  .shadow {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
  }
  .swiper-slide-active .shadow {
    opacity: 0;
    display: none;
  }
  & > .des {
    clear: both;
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    padding-top: 20px;
    // display: none;
  }
  .list {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    .item {
      width: 350px;
      height: 278px;
      border: 1px solid #962549;
      padding: 5px 4px;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      .img {
        height: 204px;
      }
      .des {
        color: #962549;
        font-family: 'PingFangSC-Medium';
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        line-height: 60px;
      }
    }
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
/deep/ {
  .swiper-pagination2 {
    // bottom: 64px;
    // position: absolute;
    position: static;
    display: flex;
    margin-top: 30px;
    // left: 0;
    // right: 0;
    // margin: auto;
    justify-content: center;
    width: 100%;
    margin-bottom: 63px;
  }
}
.swiper-content {
  position: relative;
  .banner {
    &:hover {
      .shadow {
        opacity: 0.3;
      }
    }
  }
}
</style>
<template>
  <div ref="container" class="container" v-if="show">
    <btns></btns>
    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
    <div class="swiper-content">
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
            <a :href="banner.link">
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
              </a>
          </div>
        </div>
      </div>
      <div class="swiper-pagination">
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

    <div class="strength">
      <div class="cardList">
        <div class="card" v-for="item in obj.subHeadKV" :key="item.id">
          <a :href="item.link">
          <img :src="$store.state.baseUrl + item.imageURL" alt />
          <div class="shade">
            <div class="name">{{ item.title }}</div>
            <div class="des">{{ item.subTitle }}</div>
          </div>
          </a>
        </div>
        <!-- <div class="card">
          <img src="~assets/img/home/card2.png" alt />
          <div class="shade">
            <div class="name">婚礼定制</div>
            <div class="des">每一份爱情都值得一场专属的婚礼</div>
          </div>
        </div>
        <div class="card">
          <img src="~assets/img/home/card3.png" alt />
          <div class="shade">
            <div class="name">微电影</div>
            <div class="des">记录幸福婚礼 镌刻爱情印记</div>
          </div>
        </div>-->
      </div>
      <div class="pinpai">
        <div class="title">品牌优势</div>
        <div class="list">
          <div
            class="item"
            v-for="(item, index) in advantage.items"
            :key="index"
          >
            <div class="count">
              <span ref="num" class="num">{{ item.count }}+</span>
              {{ item.unit }}
            </div>
            <div class="des">{{ item.title }}</div>
          </div>
        </div>
        <div
          class="des2"
          v-html="advantage.content.replace(/\n|\r\n/g, '<br>')"
        ></div>
        <a :href="advantage.link" class="btn">
          <span>了解更多</span>
          <img src="~assets/img/xin.png" alt />
        </a>
      </div>
    </div>
    <div class="links">
      <div
        class="link fangda"
        :style="{
          background: `url(${
            $store.state.baseUrl + item.imageURL
          }) no-repeat center center`,
        }"
        v-for="item in obj.mainFeature"
        :key="item.id"
      >          <a :href="item.link">

        <div class="content">
          <div class="etitle">{{ item.title }}</div>
          <div class="ctitle">{{ item.subTitle }}</div>
          <a :href="item.link" class="btn">
            <span>了解更多</span>
            <img src="~assets/img/xin.png" alt />
          </a>
        </div></a>
      </div>
    </div>
    <div class="tuijian">
      <div class="title">
        <div>PHOTO GALLERY</div>
        <div>客片欣赏</div>
      </div>
      <div
        class="swiper-no-swiping swiper"
        v-swiper:mySwiper2="swiperOption2"
        @slideChange="change2"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(banner, index) in obj.photos"
            :key="index"
          >
            <img
              class="fangda"
              :src="$store.state.baseUrl + banner.imageURL"
              @click="showFangda(obj.photos, index)"
            />
            <div class="shadow"></div>
          </div>
        </div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="des">{{ obj.photos[active2].title }}</div>
      <div class="swiper-pagination2">
        <span
          v-for="(banner, index) in obj.photos"
          :key="index"
          class="swiper-pagination-bullet"
          @click="changeSwiper2(index)"
          :class="{ 'swiper-pagination-bullet-active': active2 == index }"
        ></span>
      </div>
      <div class="title">
        <div>LATEST INFORMATION</div>
        <div>最新资讯</div>
      </div>
      <div class="list">
        <a
          class="item"
          :href="banner.link"
          v-for="(banner, index) in obj.banner"
          :key="index"
        >
          <div class="img">
            <img :src="$store.state.baseUrl + banner.imageURL" alt />
          </div>
          <div class="des">{{ banner.title }}</div>
        </a>
      </div>
    </div>
    <fangda
      ref="fangda"
      :showArr="arr"
      :showIndex="index"
      @changeIndex="changeIndex"
    ></fangda>
  </div>
</template>

<script>
import utils from '~/utils/utils.js'
// import 'swiper/dist/css/swiper.css'
export default {
  head() {
    return {
      title: this.obj.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.obj.seo.description,
        },
        { hid: 'keywords', name: 'keywords', content: this.obj.seo.keyWords }      ],
    }
  },
  watchQuery: ['type'],
  async asyncData(context) {
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/5e4a4da2b5c1951d163ead96/5e4a4da2b5c1951d163ead96`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e4a4da2b5c1951d163ead96/5e4a4da2b5c1951d163ead96`
      )
      context.store.commit('SAVE_LINK', res.data[0].fLinks)
      // context.store.commit('SAVE_LINK', [
      //   { text: '旅行结婚', link: 'www.baidu.com', alt: 'fdkhfjhd' },
      //   { text: '旅行结婚', link: 'www.baidu.com', alt: 'fdkhfjhd' },
      //   { text: '旅行结婚', link: 'www.baidu.com', alt: 'fdkhfjhd' },
      // ])
    }
    let obj = res.data[0]
    return {
      obj: obj,
      advantage: obj.advantage,
      query: context.route.query,
    }
  },
  scrollToTop: true,
  data() {
    return {
      arr: [],
      index: 0,
      show: false,
      count: 0,
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      active: 0,
      active2: 0,
      countto: false,
      first: true,
      swiperOption: {
        effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000, //1秒切换一次
          waitForTransition: true,
          disableOnInteraction: false,
        },
      },
      swiperOption2: {
        loop:true,
        slidesPerView: 'auto',
        centeredSlides: true,
        watchSlidesProgress: true,
        paginationClickable: true,
        slidesPerView: 1.7875,
        spaceBetween: 5,
        loopAdditionalSlides: 1,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination2',
        },
        // autoplay: {
        //   delay: 5000, //1秒切换一次
        //   waitForTransition: true,
        //   disableOnInteraction: false
        // }
      },
    }
  },
  mounted() {
    console.log(this.query)
    console.log(this.$route.query)
    this.advantage.items.forEach((v) => {
      v.count = 0
    })
    let that = this
    this.show = true
    // if (window.devicePixelRatio != 1) this.changeSwiper(0)
    window.requestAnimFrame = (function () {
      //浏览器的兼容设置
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOMElement */ element) {
          window.setTimeout(callback, 1000 / 60) //定义每秒执行60次动画
        }
      )
    })()
    let _this = this
    var oldMethod = window.onscroll
    if (typeof oldMethod == 'function') {
      window.onscroll = function (e) {
        oldMethod.call(this)
        if (
          document.documentElement.scrollTop >
            document.getElementsByClassName('strength')[0].offsetTop - 400 &&
          !that.counto
        ) {
          that.countAdd()
          that.counto = true
        }
      }
    }
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
  },
  methods: {
    changeIndex(data) {
      this.index = data
    },
    showFangda(arr, i) {
      this.arr = arr
      this.index = i
      console.log(this.arr)
      this.$refs.fangda.open()
    },
    top() {
      console.log(utils)
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop
      utils.scrollAnimation(currentY, 0)
    },
    countAdd() {
      let _this = this
      let length = 0
      this.advantage.items.forEach((v) => {
        if (v.count >= v.number) {
          length++
        } else {
          v.count++
        }
      })
      if (length == this.advantage.items.length) {
        return
      }
      this.$forceUpdate()
      window.requestAnimFrame(_this.countAdd)
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
    },
  },
}
</script>
