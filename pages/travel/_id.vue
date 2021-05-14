<style lang="scss" scoped>
img {
  width: 100%;
  float: left;
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
  background: #f6f6f6;
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
  .ccc {
    width: 1440px;
    margin: auto;
    height: 380px;
    .swiper-button-prev,
    .swiper-button-next {
      top: 100px;
    }
  }
  .swiper-slide {
    height: 340px;
    display: flex;
    justify-content: center;
    .cen {
      &:first-child {
        margin-left: 0;
      }
      width: 580px;
      display: flex;
      margin-left: 40px;
    }
    .img {
      width: 200px;
      height: 200px;
    }
    .wrap::after {
      height: 200px;
      width: 1px;
      content: '';
      background: #999;
      position: absolute;
      left: 0;
      top: 0;
    }
    .wrap {
      padding-left: 28px;
      margin-left: 30px;
      position: relative;
      .job {
        color: #4a4a4a;
        font-family: MonotypeCorsiva;
        font-size: 20px;
        line-height: 25px;
      }
      .name {
        color: #1a181c;
        font-family: 'PingFangSC-Medium';
        font-size: 16px;
        line-height: 20px;
      }
      .des {
        color: #4a4a4a;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        line-height: 22px;
        width: 320px;
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

.lists {
  margin: auto;
  width: 1240px;
  .swiper {
    width: 1000px;
  }

  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;
    margin-bottom: 80px;

    font-family: 'PingFangSC-Regular';
    &:nth-child(2n) {
      align-items: flex-start;
      .block {
        flex-direction: row;
      }
      .text{
        margin-right: 0;
        margin-left: 30px;
      }
    }
    .block {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      .text{
        max-width: 620px;
        flex: 1;
        margin-right: 30px;
      }
      .tit {
        color: #962549;
        font-family: 'PingFangSC-Medium';
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 3px;
        text-align: left;
      }
      .des {
        margin-top: 24px;
        width: 100%;
        color: #4a4a4a;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        line-height: 28px;
      }
    }
    .des {
      color: #262626;
      font-size: 20px;
      line-height: 25px;
    }
    .text {
      color: #4a4a4a;
      font-size: 14px;
      line-height: 28px;
    }
    .ban {
      width: 1000px;
      height: 666px;
      cursor: pointer;
    }
    /deep/ {
      .swiper-container {
        width: 1000px;
        height: 666px;
      }
      .swiper-slide {
        display: flex;
        text-align: center;
      }
      .swiper-wrapper {
        width: 1000px;
        height: 666px;
      }
      .swiper-pagination {
        bottom: 30px;
      }
      .swiperPag {
        display: flex;
        align-items: center;
        .img {
          width: 135px;
          margin-left: 20px;
          box-sizing: border-box;
          opacity: 0.5;
          position: relative;
          &.active {
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
            opacity: 1;
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
  <div class="container">
    <btns></btns>
    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
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
          <span class="slide" :class="{ active: active == index, first }">
            <span class="tip"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="title" v-if="obj.name">
      <div>{{ obj.name.titleEN }}</div>
      <div>{{ obj.name.titleCN }}</div>
    </div>
    <div class="lists">
      <div class="item" v-for="(item, index) in obj.location" :key="index">
        <div class="swiper">
          <no-ssr>
            <swiper
              class="swiper-no-swiping"
              :ref="index"
              :options="swiperOption4"
              @slideChange="slideChange(item, index)"
            >
              <swiper-slide v-for="(banner, index) in item.imageVideoData" :key="index">
                <img
                  class="ban fangda"
                  :src="$store.state.baseUrl + banner.imageURL"
                  alt
                  @click="showFangda(item.imageVideoData, index)"
                />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </no-ssr>
        </div>
        <div class="block">
          <div class="swiperPag">
            <div
              class="img"
              :class="{ active: item.active == index2 }"
              v-for="(banner, index2) in item.imageVideoData"
              :key="index2 + 's'"
              @click="changeSwiper2(index, index2)"
            >
              <img :src="$store.state.baseUrl + banner.imageURL" alt />
            </div>
          </div>
          <div class="text">
            <div class="tit">{{ item.title }}</div>
            <div class="des" v-html="item.content.replace(/\n|\r\n/g, '<br>')">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner" v-if="obj.corpImage && obj.corpImage.length">
      <div class="img">
        <img :src="$store.state.baseUrl + obj.corpImage[0].imageURL" alt />
      </div>
    </div>
    <div class="tuijian" v-if="obj.staff && obj.staff.length">
      <div class="title">
        <div>PHOTO GALLERY</div>
        <div>婚礼团队</div>
      </div>
      <div class="ccc">
        <div
          class="swiper-no-swiping swiper"
          v-swiper:mySwiper2="swiperOption2"
          @slideChange="change2"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(banner, index) in obj.staff" :key="index">
              <div class="cen" v-for="(item, index2) in banner" :key="index2">
                <div class="img">
                  <img
                    :src="
                      $store.state.baseUrl + item.imageVideoData[0].imageURL
                    "
                  />
                </div>
                <div class="wrap">
                  <div class="job">{{ item.position }}</div>
                  <div class="name">{{ item.name }}</div>
                  <div
                    class="des"
                    v-html="item.content.replace(/\n|\r\n/g, '<br>')"
                  >{{ item.content }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev swiper-button-prev1"></div>
          <div class="swiper-button-next swiper-button-next1"></div>
        </div>
      </div>
    </div>
    <fangda ref="fangda" :showArr="arr" :showIndex="index" @changeIndex="changeIndex"></fangda>
  </div>
</template>

<script>
import utils from '~/utils/utils.js'
// import 'swiper/dist/css/swiper.css'
export default {
  scrollToTop: true,
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
        loop: true,
        loopAdditionalSlides: 1,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOption3: {
        watchSlidesProgress: true,
        paginationClickable: true,
        slidesPerView: 2,
        loop: true,
        loopAdditionalSlides: 1,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption4: {
        loop: true,
        autoplay: {
          delay: 5000, //1秒切换一次
          waitForTransition: true,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  watchQuery: ['key'],
  async asyncData(context) {
    let res = {}
    let ret = await context.$axios.get(`/menu/watabe/list/China`)
    const o = ret.data.find(v => v.title == '全球旅拍').children.find(v => v.eName == context.params.id)
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/${o.parentId}/${o.key}`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/${o.parentId}/${o.key}`
      )
    }
    let obj = res.data.length ? res.data[0] : {}
    if (obj.staff && obj.staff.length) {
      let arr = [],
        arr2 = []
      for (let i = 0; i < obj.staff.length; i++) {
        arr2.push(obj.staff[i])
        if (arr2.length == 2 || i == obj.staff.length - 1) {
          arr.push(arr2)
          arr2 = []
        }
      }
      obj.staff = arr
    }
    if (obj.location && obj.location.length) {
      obj.location.map(v => {
        v.active = 0
      })
    }
    return {
      obj
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
  mounted() {
    console.log(this.obj)
    this.top()
  },
  methods: {
    changeIndex(val) {
      this.index = val
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
    changeSwiper2(index, index2) {
      this.$refs[index][0].swiper.slideTo(index2 + 1)
    },
    slideChange(item, i) {
      console.log(this.$refs[i][0].swiper.realIndex)
      item.active = this.$refs[i][0].swiper.realIndex
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
