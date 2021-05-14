<style lang="scss" scoped>
.show {
  text-align: center;
  .title {
    margin: 60px auto 42px;
    color: #962549;
    font-family: 'PingFangSC-Medium';
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 3px;
  }
  .des {
    color: #262626;
    font-family: 'PingFangSC-Regular';
    font-size: 20px;
    line-height: 25px;
  }
  .text {
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    line-height: 28px;
    margin: 40px auto 60px;
  }
  .dess {
    margin: 30px auto 91px;
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    line-height: 28px;
  }
  .swiper-container {
    width: 1220px;
    img {
      width: 100%;
    }
  }
  .swiper-slide {
    cursor: pointer;
    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background: #d8d8d8;
    }
    .fangda1 {
      display: none;
    }
    &.swiper-slide-active {
      .shadow {
        display: none;
      }
      .fangda1 {
        display: block;
      }
    }
  }
}
.list {
  background: #f6f6f6;
  margin: auto;
  overflow: hidden;
  .item {
    justify-content: center;
    display: flex;
    margin-bottom: 120px;
    .img {
      cursor: pointer;
      width: 480px;
      height: 720px;
      margin-left: 90px;
      position: relative;
      .fangda1 {
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        margin-right: 0 !important;
        position: absolute;
      }
    }
    .left {
      width: 650px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .top {
        margin-top: 160px;
        text-align: center;
      }
      .tit {
        color: #962549;
        font-family: 'PingFangTC-Medium';
        font-size: 30px;
        line-height: 38px;
        margin-bottom: 64px;
      }
      .des {
        // width: 300px;
        color: #262626;
        font-family: 'PingFangSC-Regular';
        font-size: 20px;
        line-height: 44px;
      }
    }
    &:nth-child(2n) {
      flex-direction: row-reverse;
      .img {
        margin-left: 0;
        margin-right: 90px;
      }
    }
  }
  .swiper {
    width: 650px;
    position: relative;
    .swiper-button-next2 {
      right: 0;
      background-image: url(~assets/img/right-arrow2.png);
      background-size: 100% 100%;
      width: 29px;
      height: 66px;
    }
    .swiper-button-prev2 {
      left: 0;
      background-image: url(~assets/img/Left-arrow2.png);
      background-size: 100% 100%;
      width: 29px;
      height: 66px;
    }
  }
  /deep/ {
    .swiper-container {
      width: 490px;
    }
    .swiper-slide {
      box-sizing: border-box;
      opacity: 0.5;
      position: relative;
    }
    .swiper-slide-active {
      opacity: 1;
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        border: solid 5px #962549;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
}
.fangda1 {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
}
.swiper-button-prev4 {
  left: 256px;
}
.swiper-button-next {
  right: 256px;
}
.ban:hover{
  &+.fangda1{
    opacity: .7;
  }
}
</style>
<template>
  <div class="container">
    <btns></btns>
    <div
      class="swiper-no-swiping"
      v-swiper:mySwiper="swiperOption"
      :activeIndex="active"
      @slideChange="change"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in obj.mainHeadKV" :key="index">
          <div class="banner">
            <div class="banner2">
              <img :src="$store.state.baseUrl + banner.imageURL" alt />
            </div>
            <div class="shadow"></div>
            <div class="wrap">
              <div class="name">{{ banner.title }}&nbsp;</div>
              <div class="des">{{ banner.subTitle }}</div>
              <div
                class="text"
                v-html="banner.content.replace(/\n|\r\n/g, '<br>')"
              >
                {{ banner.content }}
              </div>
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
          <span class="slide" :class="{ active: active == index,first }">
            <span class="tip"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="show">
      <div class="title">{{obj.new.title}}</div>
      <div class="des">{{obj.new.subTitle}}</div>
      <div class="text" v-html="obj.new.content.replace(/\n|\r\n/g, '<br>') ">{{obj.new.content}}</div>
      <no-ssr>
        <swiper
          ref="swiper2"
          class="swiper-no-swiping"
          :options="swiperOption2"
          @slideChange="slideChange"
        >
          <swiper-slide v-for="(banner, index) in obj.new.imageVideoData" :key="index">
            <img
              class="ban"
              :src="$store.state.baseUrl + banner.imageURL"
              alt
              @click="showFangda(obj.new.imageVideoData, index)"
            />
            
            <div class="shadow" @click.prevent></div>
          </swiper-slide>

          <div class="swiper-button-prev swiper-button-prev4" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-next4" slot="button-next"></div>
        </swiper>
      </no-ssr>
      <div class="dess">{{ obj.new.imageVideoData[active2].title }}</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in obj.other" :key="index">
        <div class="left">
          <div class="top">
            <div class="tit">{{ item.title }}</div>
            <div class="des" v-html="item.content.replace(/\n|\r\n/g, '<br>') ">{{item.content}}</div>
          </div>
          <div class="swiper">
            <no-ssr>
              <swiper
                class="swiper-no-swiping"
                ref="swiper3"
                :options="swiperOption3"
                @slideChange="slideChange2(item, index)"
              >
                <swiper-slide v-for="(banner, index) in item.imageVideoData" :key="index">
                  <img class="ban" :src="$store.state.baseUrl + banner.imageURL" alt />
                </swiper-slide>
              </swiper>

              <div class="swiper-button-prev swiper-button-prev2" @click="swiperPrev(index)"></div>
              <div class="swiper-button-next swiper-button-next2" @click="swiperNext(index)"></div>
            </no-ssr>
          </div>
        </div>
        <div class="img fangda">
          <img
            :src="$store.state.baseUrl + item.imageVideoData[item.active].imageURL"
            alt
            @click="showFangda(item.imageVideoData, item.active)"
          />
          
        </div>
      </div>
    </div>

    <fangda ref="fangda" :showArr="arr" :showIndex="index" @changeIndex="changeIndex"></fangda>
  </div>
</template>
<script>
import utils from '~/utils/utils.js'
export default {
  scrollToTop: true,
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
        `/resource/watabe/preview/single/China/5e440907bede2879e6afd75b/5e440907bede2879e6afd75b`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e440907bede2879e6afd75b/5e440907bede2879e6afd75b`
      )
    }
    let obj = res.data[0]
    obj.other.map(v => {
      v.active = 0
    })
    return {
      obj,
      parentId: context.query.key
    }
  },
  data() {
    let that = this
    return {
      arr: [],
      index: 0,
      active: 0,
      active2: 0,
      show: false,
      showArr: [],
      showIndex: 0,
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
        // loop: true,
        effect: 'coverflow',
        slidesPerView: '2.5',
        initialSlide: 1,
        centeredSlidesBounds: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption3: {
        watchSlidesProgress: true,
        slidesPerView: 3,
        loop: true,
        spaceBetween: 20,
        loopAdditionalSlides: 1
      }
    }
  },
  mounted() {
    console.log(this.obj)
    // this.top()
  },
  methods: {
    changeIndex(val) {
      this.index = val
    },
    showFangda(arr, i) {
      this.arr = arr
      this.index = i
      console.log(this.index, i)
      this.$refs.fangda.open()
    },
    swiperPrev(index) {
      console.log(this.$refs.swiper3[index].swiper)
      this.$refs.swiper3[index].swiper.slidePrev()
    },
    swiperNext(index) {
      console.log(this.$refs.swiper3[index].swiper)
      this.$refs.swiper3[index].swiper.slideNext()
    },
    slideChange2(item, i) {
      console.log(this.$refs.swiper3[i].swiper.realIndex)
      item.active = this.$refs.swiper3[i].swiper.realIndex
    },
    scroll() {
      console.log(1)
    },
    showImg(index, arr) {
      this.showArr = arr
      this.showIndex = index
      this.show = true
      console.log(document, window)
      document.body.style.overflow = 'hidden'
    },
    close() {
      this.show = false
      document.body.style.overflow = 'visible'
    },
    top() {
      console.log(utils)
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop
      utils.scrollAnimation(currentY, 0)
    },
    changeSwiper2(index, index2) {
      this.$refs[index][0].swiper.slideTo(index2 + 1)
    },
    slideChange() {
      console.log(this.$refs.swiper2)
      this.active2 = this.$refs.swiper2.swiper.realIndex
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
    change3() {
      this.active3 = this.mySwiper3.realIndex
      console.log(this.mySwiper3.activeIndex, this.mySwiper3.realIndex)
    },
    changeSwiper(i) {
      this.mySwiper.slideTo(i + 1)
      // this.active = this.mySwiper.activeIndex
    }
  }
}
</script>
