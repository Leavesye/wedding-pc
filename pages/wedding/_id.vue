<style lang="scss" scoped>
.tit {
  margin-top: 50px;
  text-align: center;
  color: #962549;
  font-family: 'PingFangSC-Medium';
  font-size: 30px;
  line-height: 38px;
  letter-spacing: 3px;
  .eng {
    color: #f4e9ec;
    font-family: Montserrat;
    font-size: 60px;
    font-weight: 500;
    line-height: 73px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
}
.vediobox {
  display: flex;
  flex-direction: column;
  align-items: center;

  .des {
    margin: 40px auto 60px;
    width: 1110px;
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    line-height: 28px;
    text-align: center;
  }
  .video {
    width: 1060px;
    margin: 60px auto 90px;
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
}
.list {
  margin-top: 64px;
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 30px;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 90px;
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        text-align: center;
        color: #962549;
        font-family: 'PingFangSC-Regular';
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 3px;
        div:first-child {
          margin-bottom: 8px;
          color: #962549;
          font-family: Montserrat;
          font-size: 30px;
          font-weight: 500;
          line-height: 37px;
        }
      }
      .text {
        width: 400px;
        color: #4a4a4a;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        line-height: 28px;
        margin: 40px auto 70px;
        text-align: center;
      }
      .btns {
        display: flex;
        .btn {
          width: 180px;
          height: 40px;
          border: solid 1px #962549;
          color: #962549;
          font-size: 14px;
          line-height: 40px;
          text-align: center;
          letter-spacing: 2px;
          display: block;
          cursor: pointer;
          margin-left: 40px;
        }
        .btn1 {
          border: solid 1px #962549;
          color: #fff;
          background: #962549;
          margin-left: 0;
        }
      }
    }
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
    /deep/ {
      .swiper-container {
        width: 880px;
        height: 586px;
        margin: 0;
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
  background: #f6f6f6;
  .ccc {
    width: 1440px;
    margin: auto;
    height: 340px;
    .swiper-button-prev,
    .swiper-button-next {
      top: 100px;
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

      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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
        margin: 2px 0 20px;
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
.address {
  display: flex;
  width: 1200px;
  margin: 90px auto;
  background: #000;
  background: #f6f6f6;
  /deep/ {
    .swiper-container {
      width: 600px;
      height: 362px;
    }
  }
  .right {
    padding: 70px 85px;
    width: 600px;
    height: 362px;
    box-sizing: border-box;
    .title {
      color: #962549;
      font-family: 'PingFangSC-Medium';
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 43px;
    }
    .text {
      color: #4a4a4a;
      font-family: 'PingFangSC-Regular';
      font-size: 14px;
      line-height: 26px;
    }
    .btn {
      margin-top: 52px;
      width: 180px;
      height: 40px;
      background: #962549;
      color: #fff;
      justify-content: center;
      align-items: center;
      display: flex;
      .icon {
        margin-right: 10px;
      }
    }
  }
}
.dianping {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  background: #f6f6f6;
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
  .swiper-container {
    width: 1420px;
    height: 400px;
  }

  .cen {
    width: 460px;
    height: 260px;
    border: solid 1px #e6e6e6;
    background: #ffffff;
    position: relative;
    margin-top: 40px;
    .top {
      display: flex;
      width: 100%;
      align-items: flex-end;
      padding: 0 20px;
      & > .img {
        width: 230px;
        height: 154px;
        margin-top: -34px;
      }
      .wrap {
        margin-left: 20px;
        position: relative;
        .name {
          color: #4a4a4a;
          font-family: 'PingFangSC-Medium';
          font-size: 16px;
          line-height: 20px;
        }
        .xin {
          margin: 10px 0;
        }
        .img {
          width: 73px;
          height: 11px;
        }
        .time,
        .add {
          color: #4a4a4a;
          font-family: 'PingFangSC-Regular';
          font-size: 14px;
          line-height: 26px;
        }
      }
    }

    .text {
      padding: 20px;
      color: #4a4a4a;
      font-family: 'PingFangSC-Regular';
      font-size: 14px;
      line-height: 24px;
    }
  }
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 848px;
  margin: auto;
  .list2 {
    width: 100%;
    margin-bottom: 140px;
    .item {
      margin-bottom: 20px;
      .q {
        display: flex;
        align-items: center;
        color: #4a4a4a;
        font-family: 'PingFangSC-Medium';
        font-size: 16px;
        height: 60px;
        background: #f6f6f6;
        padding: 0 30px;
        span {
          color: #962549;
          font-family: 'PingFang-SC-Regular';
          font-size: 24px;
        }
        .w {
          flex: 1;
          margin-left: 6px;
        }
      }
      .a {
        padding: 20px 30px;
        display: flex;
        span {
          color: #f22335;
          font-family: 'PingFang-SC-Regular';
          font-size: 24px;
        }
        div {
          color: #4a4a4a;
          font-family: 'PingFangSC-Regular';
          font-size: 16px;
          margin-left: 5px;
          line-height: 30px;
        }
      }
      &.active {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .tit {
    color: #962549;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 500;
    margin-top: 60px;
  }
  .t2 {
    color: #962549;
    font-family: 'PingFangSC-Regular';
    font-size: 20px;
    letter-spacing: 3px;
    margin-bottom: 60px;
  }
}
</style>
<template>
  <div class="container">
    <btns></btns>
    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
    <div
      v-if="flag"
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
          <div></div>
          <span class="slide" :class="{ active: active == index, first }">
            <span class="tip"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="vediobox">
      <div class="tit" v-if="obj.desText">
        <div class="eng">{{ obj.desText.eName }}</div>
        <div>{{ obj.desText.name }}</div>
      </div>
      <div
        class="des"
        v-if="obj.desText"
        v-html="obj.desText.content.replace(/\n|\r\n/g, '<br>')"
      >
        日本冲绳，位于日本的最南端，以琉球群岛为中心，由宫古诸岛、八重山诸岛等岛屿组成，富有独特的自然环境，有着“东方夏威夷”之称。
        在美丽的自然风景之外，在冲绳自然与历史文化完美融合。这里既有琉球王国的历史遗迹，又有东西文化碰撞交织的村落，特别是冲绳本岛，集多国文化荟萃于一身。
        冲绳处于亚热带，常年温度宜人，是知名的潜水胜地，不论是深潜或浮潜，都可带给潜水者梦寐以求的潜水体验。
        从中国前往的交通非常便利，当地住宿选择也非常丰富。
      </div>
      <div class="video" v-if="show2 && obj.desVideo && obj.desVideo.length">
        <img :src="$store.state.baseUrl + obj.desVideo[0].videoCoverURL" alt />
        <div class="play" @click="play">
          <img src="~assets/img/play.png" alt />
        </div>
      </div>
      <div class="video" v-else-if="obj.desVideo && obj.desVideo.length">
        <video
          :src="$store.state.baseUrl + obj.desVideo[0].videoURL"
          autoplay
          controls
        ></video>
      </div>
      <no-ssr>
        <swiper :options="swiperOption2">
          <swiper-slide v-for="(banner, index) in obj.desPhoto" :key="index">
            <img
              class="ban"
              :src="$store.state.baseUrl + banner.imageURL"
              alt
            />
          </swiper-slide>
          <div
            class="swiper-button-prev swiper-button-prev1"
            slot="button-prev"
          ></div>
          <div
            class="swiper-button-next swiper-button-next1"
            slot="button-next"
          ></div>
        </swiper>
      </no-ssr>
    </div>
    <div class="l">
      <div class="tit">
        <div class="eng">{{ eName }}</div>
        <div>{{ title }}</div>
      </div>
      <div class="list">
        <div class="item" v-for="(item, index) in obj.resorts" :key="index">
          <no-ssr>
            <swiper :options="swiperOption3">
              <swiper-slide
                v-for="(banner, index) in item.imageVideoData"
                :key="index"
              >
                <img
                  class="ban"
                  :src="$store.state.baseUrl + banner.imageURL"
                  alt
                />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </no-ssr>
          <div class="right">
            <div class="title">
              <div>{{ item.eName }}</div>
              <div>{{ item.name }}</div>
            </div>
            <div class="text" v-html="item.content.replace(/\n|\r\n/g, '<br>')">
              {{ item.content }}
            </div>
            <div class="btns">
              <nuxt-link
                :to="
                  `list?key=${item.link}&name=${item.name}&eName=${item.eName}`
                "
                class="btn btn1"
                >了解更多</nuxt-link
              >
 <a class="btn" @click="zixun">
            <span>详情咨询</span>
          </a>            </div>
          </div>
        </div>
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
          v-swiper:mySwiper2="swiperOption4"
          @slideChange="change2"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(banner, index) in obj.staff"
              :key="index"
            >
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
                  >
                    {{ item.content }}
                  </div>
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
    <div class="address" v-if="obj.store.name">
      <no-ssr>
        <swiper :options="swiperOption3">
          <swiper-slide
            v-for="(banner, index) in obj.store.imageVideoData"
            :key="index"
          >
            <img
              class="ban"
              :src="$store.state.baseUrl + banner.imageURL"
              alt
            />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </no-ssr>
      <div class="right">
        <div class="title">{{ obj.store.name }}</div>
        <div class="text">{{ obj.store.phone }}</div>
        <div>{{ obj.store.location }}</div>
        <a
          :href="
            `https.com/marker?location=${obj.store.geo}&title=${obj.store.name}&content=${obj.store.location}&output=html
`
          "
          class="btn"
        >
          <div class="icon">
            <img src="~assets/img/address2.png" alt />
          </div>
          <div>地图交通</div>
        </a>
      </div>
    </div>
    <div class="dianping" v-if="obj.comments && obj.comments.length">
      <div class="title">
        <div>GUEST COMMENTS</div>
        <div>新人点评</div>
      </div>
      <div class="ccc">
        <no-ssr>
          <swiper :options="swiperOption5">
            <div
              class="swiper-slide"
              v-for="(item, index) in obj.comments"
              :key="index"
            >
              <div class="cen">
                <div class="top">
                  <div class="img">
                    <img
                      :src="
                        $store.state.baseUrl + item.imageVideoData[0].imageURL
                      "
                    />
                  </div>
                  <div class="wrap">
                    <div class="name">{{ item.name }}</div>
                    <div class="img xin">
                      <img src="~assets/img/wedding/5heart.png" alt />
                    </div>
                    <div class="time">婚期:{{ item.time }}</div>
                    <div class="add">场地:{{ item.location }}</div>
                  </div>
                </div>
                <div class="text">{{ item.content }}</div>
              </div>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </no-ssr>
      </div>
    </div>
    <div class="box" v-if="obj.faq && obj.faq.length">
      <div class="tit">FAQ</div>
      <div class="t2">常见问题</div>
      <div class="list2">
        <div
          class="item"
          :class="{ active: item.show }"
          v-for="(item, index) in obj.faq"
          :key="index"
        >
          <div class="q" @click="show(item)">
            <span>Q.</span>
            <div class="w">{{ item.question }}</div>
            <div class="img">
              <img v-show="!item.show" src="~/assets/img/plus.png" alt />
              <img v-show="item.show" src="~/assets/img/delete.png" alt />
            </div>
          </div>
          <div v-show="item.show" class="a">
            <span>A.</span>
            <div>{{ item.answer }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '~/utils/utils.js'
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
  watch: {
    $route: {
      handler(val) {
        console.log(val)
        this.flag = false
        setTimeout(() => {
          this.flag = true
        }, 10)
      },
      deep: true
    }
  },
  data() {
    return {
      flag: false,
      show2: true,
      active: 0,
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
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption3: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption5: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption4: {
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
      }
    }
  },
  watchQuery: true,
  async asyncData(context) {
    let res = {}
    let ret = await context.$axios.get(`/menu/watabe/list/China`)
    const o = ret.data.find(v => v.title == '全球婚礼').children.find(v => v.eName == context.params.id)
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
    return {
      obj,
      flag: false,
      title: o.title,
      eName: context.params.id
    }
  },
  mounted() {
    this.flag = true
    console.log(this.obj)
    this.top()
  },
  methods: {
    zixun() {
      window.open(
        'https://tb.53kf.com/code/client/10180604/1',
        '_blank',
        'height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no'
      )
    },
    play() {
      this.show2 = false
    },
    show(item) {
      let show = item.show ? false : true
      this.$set(item, 'show', show)
      // item.show = !item.show
    },
    change2() {
      this.active2 = this.mySwiper2.realIndex
      console.log(this.mySwiper2.activeIndex, this.mySwiper2.realIndex)
      // this.active = this.mySwiper.realIndex
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
    changeSwiper(i) {
      this.mySwiper.slideTo(i + 1)
      // this.active = this.mySwiper.activeIndex
    }
  }
}
</script>
