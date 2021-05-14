<style lang="scss" scoped>
.banner {
  width: 100%;
  position: relative;
  .banner2 {
    z-index: -1;
    overflow: hidden;
  }
  .shadow {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 440px;
    background: linear-gradient(180deg, #00000000, #000000);
  }

  .wrap {
    position: absolute;
    width: 1100px;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    padding: 89px 37px;
    text-align: left;
    color: #fff;
    font-family: 'PingFang-SC-Regular';
    .img {
      width: 300px;
      overflow: hidden;
    }
    .name {
      font-size: 30px;
      margin-left: 47px;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
      line-height: 38px;
      letter-spacing: 2.5px;
    }
    .des {
      margin-left: 47px;
      margin-top: 22px;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
      font-family: 'PingFangSC-Medium';
      font-size: 18px;
      letter-spacing: 3px;
    }
    .text {
      width: 320px;
      margin-left: 47px;
      margin-top: 16px;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
      font-size: 14px;
      line-height: 30px;
      letter-spacing: 2px;
    }
    .btn {
      margin-left: 47px;
      margin-top: 60px;
      width: 180px;
      height: 40px;
      border: solid 1px #ffffff;
      color: #ffffff;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 2px;
      display: block;
      &:hover {
        background: #962549;
        border: #962549;
      }
    }
  }
}
.swiper-container {
  // height: 300px;
  width: 100%;
}
.test {
  position: relative;
  display: inline-block;
  // text-indent: -999px;\
  height: 32px;
  cursor: pointer;
  background-color: transparent;
  display: inline-block;
  width: 150px;
  border: none;
  margin: 0 10px;
  text-align: left;
  color: #fff;
  .slide {
    background-color: #d8d8d8;
    width: 100%;
    height: 2px;
    margin-top: 10px;
    // text-indent: -999px;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .tip {
    display: inline-block;
    width: 0;
    height: 2px;
    background: #962549;
    position: absolute;
    left: 0;
    top: 0;
  }
  .slide.active {
    .tip {
      animation: mymove 5s linear forwards;
    }
  }
}
@keyframes mymove {
  from {
    width: 0px;
  }
  to {
    width: 150px;
  }
}
@-webkit-keyframes mymove /*Safari and Chrome*/ {
  from {
    width: 0px;
  }
  to {
    width: 50px;
  }
}
</style>
<template>
  <div
    class="swiper-no-swiping"
    v-swiper:mySwiper="swiperOption"
    :activeIndex="active"
    @slideChange="change"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
        <div class="banner">
          <div class="banner2">
            <img :src="banner.url" alt="" />
          </div>
          <div class="shadow"></div>
          <div class="wrap">
            <!-- <div class="img">
                <img src="~assets/img/okinawa.png" alt="" />
              </div> -->
            <div class="name">{{ banner.name }}</div>
            <div class="des">{{ banner.des }}</div>
            <div class="text">
              {{ banner.text }}
            </div>
            <nuxt-link to="/" class="btn">了解更多</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination">
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="test"
        @click="changeSwiper(index)"
      >
        <div>{{ banner.name }}</div>
        <span class="slide" :class="{ active: active == index }"
          ><span class="tip"></span
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000, //1秒切换一次
          waitForTransition: true,
          disableOnInteraction: false
        }
      }
    }
  },
  async asyncData({ params }) {
    return {}
  },
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  mounted() {},
  methods: {
    change() {
      this.active = this.mySwiper.realIndex
    },
    changeSwiper(i) {
      this.mySwiper.slideTo(i + 1)
      // this.active = this.mySwiper.activeIndex
    },
  }
}
</script>
