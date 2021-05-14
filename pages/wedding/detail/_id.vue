<style lang="scss" scoped>
img {
  width: 100%;
  float: left;
}

.swiper-container {
  // height: 300px;
  width: 100%;
}
.links {
  width: 100%;
  background: #f6f6f6;
  .link {
    width: 100%;
    min-width: 1280px;
    min-height: 640px;
    display: flex;
    flex-direction: row-reverse;
    &:nth-child(2n) {
      flex-direction: row;
      .btn {
        color: #962549;
        background: transparent;
        border: solid 1px #962549;
      }
    }
    & > .swiper {
      width: 50%;
    }
    .content {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 130px;
      position: relative;
      box-sizing: border-box;
    }
    .etitle {
      color: #962549;
      font-family: Montserrat;
      font-size: 30px;
      font-weight: 500;
      line-height: 37px;
    }
    .ctitle {
      font-family: 'PingFangSC-Medium';
      font-size: 20px;
      line-height: 25px;
      letter-spacing: 3px;
      margin-top: 8px;
      margin-bottom: 40px;
      color: #962549;
    }
    .text {
      width: 450px;
      color: #4a4a4a;
      font-family: 'PingFangSC-Regular';
      font-size: 14px;
      line-height: 28px;
    }
    .btn {
      position: absolute;
      bottom: 90px;
      width: 180px;
      height: 40px;
      color: #ffffff;
      background: #962549;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 2px;
      border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'PingFangSC-Regular';
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
.h {
  margin: 25px auto 70px;
  width: 1280px;
  .tit {
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
}
/deep/ {
  .swiper-pagination3 {
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
  .address {
    margin-bottom: 50px;
    .cont {
      display: flex;
      width: 1012px;
      height: 400px;
      background: #f6f6f6;
      .left {
        width: 50%;
        .line {
          padding-top: 26px;
          padding-right: 30px;
          display: flex;
          height: 72px;
          color: #4a4a4a;
          font-family: 'PingFangSC-Regular';
          font-size: 14px;
          line-height: 24px;
          box-sizing: border-box;
          border-bottom: solid 1px #ffffff;
          & > div:first-child {
            width: 116px;
            flex-shrink: 0;
            color: #962549;
            font-family: 'PingFangSC-Medium';
            font-size: 14px;
            text-align: center;
          }
        }
        .line2 {
          height: 92px;
        }
      }
      #allmap {
        width: 50%;
        height: 100%;
      }
    }
  }
  .video {
    .play {
      width: 50px;
      height: 50px;
    }
    .list {
      display: flex;
      justify-content: center;
      margin-bottom: 70px;
      .item {
        position: relative;
        width: 400px;
        margin-right: 30px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        .play {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &.only {
          width: 800px;
          text-align: center;
        }
      }
    }
  }
  .jiudian {
    .list {
      display: flex;
      justify-content: center;
      margin-bottom: 70px;
      .item {
        position: relative;
        width: 400px;
        margin-right: 30px;
        &:last-child {
          margin-right: 0;
        }
        &.only {
          width: 800px;
          text-align: center;
          .name {
            font-size: 20px;
            line-height: 25px;
            margin: 29px auto 13px;
          }
          .ename {
            height: 25px;
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 21px;
          }
          .des {
            color: #747474;
            font-size: 14px;
            line-height: 22px;
            justify-content: center;
          }
        }
        .name {
          color: #962549;
          font-family: 'PingFangSC-Medium';
          font-size: 16px;
          line-height: 20px;
          margin: 15px 0 7px;
        }

        .ename {
          color: #962549;
          font-family: 'PingFangSC-Regular';
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 12px;
        }

        .des {
          color: #747474;
          font-family: 'PingFangSC-Regular';
          font-size: 14px;
          line-height: 22px;
          display: flex;
          align-items: center;
          .img {
            width: 14px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .qita {
    .item {
      width: 400px;
      height: 310px;
      background: #ffffff;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      & > div:last-child {
        padding: 15px;
      }
    }
    .img {
      height: 200px;
    }
    .tit {
      color: #962549;
      font-family: 'PingFangSC-Medium';
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    .des {
      color: #4a4a4a;
      font-family: 'PingFangSC-Regular';
      font-size: 13.23px;
      line-height: 22px;
    }

    .list {
      display: flex;
      justify-content: center;
      margin-bottom: 70px;
    }
  }
}
.play {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.fangda2 {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
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
              <div class="name">{{ banner.title }}&nbsp;</div>
              <div class="des">{{ banner.subTitle }}</div>
              <div
                class="text"
                v-html="banner.content.replace(/\n|\r\n/g, '<br>')"
              ></div>
            </div>
            <div class="play" v-if="banner.mediaType != 'image'">
              <img src="~assets/img/play.png" alt />
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
          <span class="slide" :class="{ active: active == index, first }">
            <span class="tip"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="h">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/wedding' }"
          >海外婚礼</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ obj.name.titleCN }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="tit">
        <div class="eng">{{ obj.name.titleEN }}</div>
        <div>{{ obj.name.titleCN }}</div>
      </div>
    </div>
    <div class="links">
      <div class="link" v-for="(item, index) in obj.feature" :key="index">
        <div class="swiper">
          <no-ssr>
            <swiper :options="swiperOption3">
              <swiper-slide
                v-for="(banner, index) in item.imageVideoData"
                :key="index"
              >
                <img
                  class="fangda"
                  :src="$store.state.baseUrl + banner.imageURL"
                  alt
                  @click="showFangda(item.imageVideoData, index)"
                />
                <div class="img fangda2">
                  <img src="~assets/img/fangda.png" alt />
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </no-ssr>
        </div>
        <div class="content">
          <div class="etitle">{{ item.titleEN }}</div>
          <div class="ctitle">{{ item.titleCN }}</div>
          <div class="text" v-html="item.content.replace(/\n|\r\n/g, '<br>')">
            {{ item.content }}
          </div>
          <a class="btn" @click="zixun">
            <span>详情咨询</span>
          </a>
        </div>
      </div>
    </div>
    <div class="tuijian">
      <div class="address">
        <div class="title">
          <div>INFORMATION</div>
          <div>基本信息</div>
        </div>
        <div class="cont">
          <div class="left">
            <div class="line">
              <div>教堂名称</div>
              <div>{{ obj.information.name }}</div>
            </div>
            <div class="line line2">
              <div>所在地址</div>
              <div>{{ obj.information.address }}</div>
            </div>
            <div class="line">
              <div>交通信息</div>
              <div>{{ obj.information.traffic }}</div>
            </div>
            <div class="line">
              <div>容纳人数</div>
              <div>{{ obj.information.people }}名</div>
            </div>
            <div class="line line2">
              <div>其他信息</div>
              <div>{{ obj.information.other }}</div>
            </div>
          </div>
          <div id="allmap"></div>
        </div>
      </div>
      <div class="title" v-if="obj.photo && obj.photo.length">
        <div>PHOTO GALLERY</div>
        <div>客片欣赏</div>
      </div>
      <div
        v-if="obj.photo && obj.photo.length"
        class="swiper-no-swiping swiper"
        v-swiper:mySwiper2="swiperOption2"
        @slideChange="change2"
      >
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(banner, index) in obj.photo"
            :key="index"
          >
            <img :src="$store.state.baseUrl + banner.imageURL" />
            <div class="shadow"></div>
          </div>
        </div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="des" v-if="obj.photo && obj.photo.length">
        {{ obj.photo[active2].title }}
      </div>
      <div class="swiper-pagination3" v-if="obj.photo && obj.photo.length">
        <span
          v-for="(banner, index) in obj.photo"
          :key="index"
          class="swiper-pagination-bullet"
          @click="changeSwiper2(index)"
          :class="{ 'swiper-pagination-bullet-active': active2 == index }"
        ></span>
      </div>
      <div class="video" v-if="obj.video && obj.video.length">
        <div class="title">
          <div>VIDEO CLIP</div>
          <div>视频欣赏</div>
        </div>
        <div class="list">
          <div
            class="item"
            v-for="(item, index) in obj.video"
            :key="index"
            :class="{ only: obj.video.length == 1 }"
            @click="playVedio($store.state.baseUrl + item.videoURL)"
          >
            <div class="img">
              <img :src="$store.state.baseUrl + item.videoCoverURL" alt />
            </div>
            <div class="play">
              <img src="~assets/img/play.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="jiudian" v-if="obj.hotel && obj.hotel.length">
        <div class="title">
          <div>HOTEL&STAY</div>
          <div>酒店住宿</div>
        </div>
        <div class="list">
          <div
            class="item"
            :class="{ only: obj.hotel.length == 1 }"
            v-for="(item, index) in obj.hotel"
            :key="index"
          >
            <div class="img" v-if="item.imageVideoData.length">
              <img
                :src="$store.state.baseUrl + item.imageVideoData[0].imageURL"
                alt
              />
            </div>
            <div>
              <div class="name">{{ item.titleCN }}</div>
              <div class="ename">{{ item.titleEN }}</div>
              <a
                target="_blank"
                :href="
                  `https://api.map.baidu.com/marker?location=${item.geo.split(
                    ','
                  )[1] +
                    ',' +
                    item.geo.split(',')[0]}&title=${item.titleCN}&content=${
                    item.content
                  }&output=html
`
                "
                class="des"
              >
                <div class="img">
                  <img src="~assets/img/address.png" alt />
                </div>
                {{ item.content }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="qita" v-if="obj.resort && obj.resort.length">
        <div class="title">
          <div>WEDDING RESORT</div>
          <div>其他婚礼形式</div>
        </div>
        <div class="list">
          <a
            :href="item.url"
            class="item"
            v-for="(item, index) in obj.resort"
            :key="index"
          >
            <div class="img" v-if="item.imageVideoData.length">
              <img
                :src="$store.state.baseUrl + item.imageVideoData[0].imageURL"
                alt
              />
            </div>
            <div>
              <div class="tit">{{ item.title }}</div>
              <div class="des" v-html="item.content">{{ item.content }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <fangda
      ref="fangda"
      :showArr="arr2"
      :showIndex="index"
      @changeIndex="changeIndex"
    ></fangda>
  </div>
</template>

<script>
import map from '@/plugins/map.js'
// import 'swiper/dist/css/swiper.css'
export default {
  scrollToTop: true,
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
    return {
      arr2: [],
      index: 0,
      active: 0,
      active2: 0,
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
        slidesPerView: 'auto',
        centeredSlides: true,
        watchSlidesProgress: true,
        paginationClickable: true,
        slidesPerView: 1.7875,
        spaceBetween: 5,
        loop: true,
        loopAdditionalSlides: 1,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // autoplay: {
        //   delay: 5000, //1秒切换一次
        //   waitForTransition: true,
        //   disableOnInteraction: false
        // }
      },
      swiperOption3: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  async asyncData(context) {
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/${context.query.parentId}/${context.query.key}`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/${context.query.parentId}/${context.query.key}`
      )
    }
    let obj = res.data.length ? res.data[0] : {}

    return {
      obj
    }
  },
  mounted() {
    console.log(this.obj)
    let _this = this
    if (process.browser) {
      !(function(mapInit) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
          'https://api.map.baidu.com/api?v=2.0&ak=vIRKexmYnjoOWjF8hLNPlXkWxKdzAd26&callback=mapinit'
        window['mapinit'] = function() {
          mapInit()
        }
        document.head.appendChild(script)
      })(function() {
        // 这里使用BMap
        var map = new BMap.Map('allmap')
        let arr = _this.obj.information.geo.split(',')
        map.centerAndZoom(new BMap.Point(arr[0], arr[1]), 16)
        console.log(BMap)
        var marker = new BMap.Marker(new BMap.Point(arr[0], arr[1]))
        map.addOverlay(marker); 
        // var local = new BMap.LocalSearch(map, {
        //   renderOptions: { map: map }
        // })
        // local.search(_this.obj.information.address)
      })
    }
  },
  methods: {
    playVedio(url) {
      window.open(url)
    },
    changeIndex(val) {
      this.index = val
    },
    zixun() {
      window.open(
        'https://tb.53kf.com/code/client/10180604/1',
        '_blank',
        'height=600,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no'
      )
    },
    showFangda(arr, i) {
      this.arr2 = arr
      this.index = i
      console.log(this.arr)
      this.$refs.fangda.open()
    },
    top() {
      // console.log(this.$refs.container)
      // this.$refs.container.scrollIntoView({
      //   behavior: 'smooth'
      // })
      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
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
