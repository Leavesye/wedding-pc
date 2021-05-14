<style lang="scss" scoped>
.link {
  width: 50vw;
  min-width: 640px;
  min-height: 640px;
  height: 50vw;
  padding-bottom: 50%;
  background-size: 100% 100% !important;
  color: #ffffff;
  position: relative;
  .content {
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
    font-size: 30px;
    font-weight: 500;
    line-height: 37px;
    text-transform: uppercase;
  }
  .ctitle {
    font-family: 'PingFangSC-Medium';
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
    cursor: pointer;
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
.title {
  margin-top: 60px;
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
.tuijian {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 53px;
  margin-bottom: 90px;
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
  .wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ename {
      width: 380px;
      color: #ffffff;
      font-family: 'Montserrat-Medium';
      font-size: 26px;
      line-height: 33px;
      text-align: center;
    }
    .name {
      color: #ffffff;
      font-family: 'PingFangSC-Medium';
      font-size: 20.86957px;
      line-height: 27px;
      letter-spacing: 3.130435px;
      margin-top: 10px;
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
  .test{
    height: 40px;
  }
}
.s {
  /deep/ .swiper-slide {
    overflow: hidden;
  }
}
.lists {
  margin: auto;
  .title {
    div:last-child {
      margin-bottom: 0;
    }
  }
  .item {
    width: 1280px;
    margin: auto;
    border-bottom: solid 1px #d8d8d8;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-bottom: 80px;

    font-family: 'PingFangSC-Regular';
    .des {
      color: #262626;
      font-size: 20px;
      line-height: 32px;
      margin-top: 47px;
      margin-bottom: 54px;
      text-align: center;
    }
    .text {
      color: #4a4a4a;
      font-size: 14px;
      line-height: 28px;
      width: 850px;
      margin-bottom: 45px;
      text-align: center;
      width: 875px;
    }
    .ban {
      width: 1000px;
      height: 666px;
      margin: auto;
    }
    .swiper {
      position: relative;
    }
    /deep/ {
      .swiper-container {
        width: 1220px;
      }
      .swiper-slide {
        display: flex;
        text-align: center;
      }
      .swiper-wrapper {
        width: 1000px;
        height: 666px;
      }
      .swiper-button-prev {
        left: 0;
        top: 333px;
      }
      .swiper-button-next {
        right: 0;
        top: 333px;
      }
      .swiper-pagination {
        position: static;
        margin-top: 30px;
      }
      .swiperPag {
        display: flex;
        width: 1000px;
        align-items: center;
        .img {
          width: 186px;
          margin-left: 16px;
          box-sizing: border-box;
          opacity: 0.5;
          position: relative;
          &.active {
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
          img {
            width: 100%;
            float: left;
          }
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
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
              <div class="name">{{banner.title}}&nbsp;</div>
              <div class="des">{{ banner.subTitle }}</div>
              <div class="text" v-html="banner.content.replace(/\n|\r\n/g, '<br>')">{{ banner.content }}</div>
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
          <div>{{ banner.title }}</div>
          <span class="slide" :class="{ active: active == index,first }">
            <span class="tip"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="s">
      <div class="title">
        <div>Custom Theme</div>
        <div>定制主题</div>
      </div>
      <div
        class="swiper-no-swiping swiper"
        v-swiper:mySwiper3="swiperOption3"
        @slideChange="change3"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in obj.themeKV"
            :key="index"
          >
            <div
              class="link fangda"
              :style="{
                background: `url(${$store.state.baseUrl +
                  item.simageVideoData[0].imageURL}) no-repeat center center`
              }"
            >
              <div class="content" @click="showFangda(item.imageVideoData, 0)">
                <div class="etitle">{{ item.enName }}</div>
                <div class="ctitle">{{ item.name }}</div>
                <div class="btn" @click="showFangda(item.imageVideoData, 0)">
                  <span>了解更多</span>
                  <img src="~assets/img/xin.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-prev1"></div>
        <div class="swiper-button-next swiper-button-next1"></div>
      </div>
    </div>
    <div class="lists">
      <div class="item" v-for="(item, index) in obj.theme" :key="index">
        <div class="title">
          <div>{{ item.enName }}</div>
          <div>{{ item.name }}</div>
        </div>
        <div class="des" v-html="item.subTitle">{{ item.des }}</div>
        <div class="text" v-html="item.content.replace(/\n|\r\n/g, '<br>')"></div>
        <div class="swiper">
          <no-ssr>
            <swiper
              ref="swiper3"
              :options="swiperOption4"
              @slideChange="slideChange2(item, index)"
            >
              <swiper-slide
                v-for="(banner, index) in item.imageVideoData"
                :key="index"
              >
                <img
                  class="ban fangda"
                  :src="$store.state.baseUrl + banner.imageURL"
                  alt
                  @click="showFangda(item.imageVideoData, index)"
                />
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <div class="swiper-pagination">
              <div class="swiperPag">
                <div
                  @click="pagination(index, index2)"
                  class="swiper-pagination-customs img"
                  :class="
                    item.active == index2
                      ? 'swiper-pagination-customs-active active'
                      : ''
                  "
                  v-for="(banner, index2) in item.imageVideoData"
                  :key="index2 + 's'"
                >
                  <img :src="$store.state.baseUrl + banner.imageURL" />
                </div>
              </div>
            </div>
          </no-ssr>
        </div>
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
            class="swiper-slide fangda"
            v-for="(banner, index) in obj.case"
            :key="index"
            @click="showFangda(banner.imageVideoData, index)"
          >
            <img
              :src="$store.state.baseUrl + banner.simageVideoData[0].imageURL"
            />
            <div class="wrap">
              <div class="ename">{{ banner.enName }}</div>
              <div class="name">{{ banner.name }}</div>
            </div>
          </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-prev1"></div>
        <div class="swiper-button-next swiper-button-next1"></div>
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
  scrollToTop: true,
  async asyncData(context) {
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/5e4408f0bede2879e6afd758/5e4408f0bede2879e6afd758`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e4408f0bede2879e6afd758/5e4408f0bede2879e6afd758`
      )
    }
    let obj = res.data[0]
    obj.theme.map(v => {
      v.active = 0
    })
    return {
      obj,
      parentId: context.query.key
    }
  },

  mounted() {
    // this.top()
    console.log(this.obj)
  },
  data() {
    let that = this
    return {
      arr: [],
      index: 0,
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
        watchSlidesProgress: true,
        paginationClickable: true,
        slidesPerView: 3,
        // loop: true,
        loopAdditionalSlides: 1,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption3: {
        watchSlidesProgress: true,
        paginationClickable: true,
        slidesPerView: 2,
        // loop: true,
        loopAdditionalSlides: 1,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption4: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    changeIndex(val) {
      this.index = val
    },
    showFangda(arr, i) {
      if(!arr.length) return
      this.arr = arr
      this.index = i
      console.log(this.arr)
      this.$refs.fangda.open()
    },
    slideChange2(item, i) {
      console.log(this.$refs.swiper3[i].swiper.realIndex)
      item.active = this.$refs.swiper3[i].swiper.realIndex
    },
    pagination(index, index2) {
      console.log(this.$refs.swiper3[index].swiper)
      this.$refs.swiper3[index].swiper.slideTo(index2 + 1)
    },
    top() {
      console.log(utils)
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop
      utils.scrollAnimation(currentY, 0)
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
    },
    changeSwiper2(i) {
      console.log(i)
      this.mySwiper2.slideTo(i + 2)
      // this.active = this.mySwiper.activeIndex
    }
  }
}
</script>
