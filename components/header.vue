<style lang="scss" scoped>
img {
  width: 100%;
  float: left;
}

.hbox {
  height: 150px;
  width: 100%;
  // overflow-y: visible;
  // overflow-x: hidden;
}
.header {
  height: 150px;
  width: 100%;
  min-width: 1280px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 999;
  .right {
    float: right;
    margin: 47px 50px 73px 0;
    display: flex;
    align-items: center;
    height: 30px;
    position: relative;
    .btns {
      display: flex;
      .item {
        margin-left: 25px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: relative;
        .erweima {
          display: none;
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 130px;
          height: 153px;
        }
        &:hover {
          .erweima {
            display: block;
          }
        }
      }
      .wechat {
        background-image: url('~assets/img/wechat.svg');
        &:hover {
          background-image: url('~assets/img/wechatroll.svg');
        }
      }
      .weibo {
        background-image: url('~assets/img/weibo.svg');
        &:hover {
          background-image: url('~assets/img/weiboroll.svg');
        }
      }
      .timao {
        background-image: url('~assets/img/timao.svg');
        &:hover {
          background-image: url('~assets/img/timaoroll.svg');
        }
      }
      .hongshu {
        background-image: url('~assets/img/hongshu.svg');
        &:hover {
          background-image: url('~assets/img/hongshuroll.svg');
        }
      }
    }
    .ipt {
      display: flex;
      align-items: center;
      // width: 130px;
      height: 30px;
      border: 1px solid #747474;
      padding: 0 12px;
      border-radius: 15px;
      div {
        flex: 1;
        display: flex;
        align-items: center;
      }
      input {
        width: 100%;
      }
      img {
        height: 18px;
        width: 18px;
        flex-shrink: 0;
      }
      .search {
        width: 100px;
        transition: all 0.2s linear;
        outline: none;
        &:focus {
          width: 150px;
        }
      }
    }
  }
  .center {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    img {
      margin-top: 30px;
    }
    .nav {
      width: 100%;
      justify-content: center;
      height: 50px;
      position: relative;
      display: flex;
      align-items: center;
      a {
        height: 50px;
        line-height: 50px;
        color: #1a181c;
        font-size: 14px;
        margin-right: 58px;
        &:hover {
          color: #962549;
        }
        &:last-child {
          margin-right: 0;
        }
        &.nuxt-link-active {
         color: #962549;
          border-bottom: 2px solid #962549;
          // &::after {
          //   content: '';
          //   position: absolute;
          //   width: 59px;
          //   height: 2px;
          //   left: 50%;
          //   bottom: 0;
          //   transform: translateX(-50%);
          //   background: #962549;
          // }
        }
      }
      a:hover .erji {
        display: flex;
        animation: hidein 0.3s linear forwards;
      }
      @keyframes hidein {
        from {
          opacity: 0;
        }
        40% {
          opacity: 0.5;
        }
        to {
          opacity: 1;
        }
      }
      .erji {
        position: absolute;
        left: 0;
        right: 0;
        top: 50px;
        opacity: 0;
        // display: flex;
        display: none;
        height: 60px;
        background: rgba(255, 255, 255, 1);
        width: 100%;
        border-top: 1px solid #e6e6e6;
        align-items: center;
        justify-content: center;
        a {
          height: 50px;
          line-height: 50px;
          color: #1a181c;
          font-size: 14px;
          padding: 0 42px;
          position: relative;
          margin-right: 0;
          &:hover {
            color: #962549;
          }
          &:first-child {
            padding-left: 0;
            margin-left: 0;
          }
          &:last-child {
            padding-right: 0;
            margin-right: 0;
          }
        }
      }
    }
  }
}
.logo {
  width: 300px;
  height: 55px;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0.5;
  }
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background: #fff;
}
</style>
<template>
  <div class="hbox">
    <div class="header" :class="{ fixed: fixed }">
      <div class="center">
        <nuxt-link to="/" v-if="!fixed">
          <img class="logo" src="~assets/svg/logo.svg" alt="WATABE WEDDING华德培全球婚礼策划公司" />
        </nuxt-link>
        <div class="nav">
          <template v-for="(item, index) in list">
            <nuxt-link v-if="item.children && item.children.length" :to="`${item.frontLink}`">
              {{ item.title }}
              <div class="erji" v-if="item.frontLink != '/about'">
                <nuxt-link
                  v-for="item2 in item.children"
                  :key="item2.key"
                  :to="
                  `${item2.frontLink}/${item2.eName}`
                "
                >{{ item2.title }}</nuxt-link>
              </div>
            </nuxt-link>
            <nuxt-link v-else-if="item.frontLink" :to="`${item.frontLink}`">
              {{
              item.title
              }}
            </nuxt-link>
          </template>

          <!-- <nuxt-link to="/about">关于我们</nuxt-link>
        <nuxt-link to="/church">
          全球教堂
          <div class="erji">
            <nuxt-link to="/church/1">巴厘岛</nuxt-link>
            <nuxt-link to="/church/2">冲绳</nuxt-link>
            <nuxt-link to="/church/3">北海道</nuxt-link>
            <nuxt-link to="/church/4">日本</nuxt-link>
            <nuxt-link to="/church/5">关岛</nuxt-link>
            <nuxt-link to="/church/6">塞班岛</nuxt-link>
            <nuxt-link to="/church/7">夏威夷</nuxt-link>
          </div>
        </nuxt-link>
        <nuxt-link to="/custom">高端定制</nuxt-link>
        <nuxt-link class="haiwai" to="/wedding">
          海外婚礼
          <div class="erji">
            <nuxt-link to="/wedding/okinawa">巴厘岛</nuxt-link>
            <nuxt-link to="/wedding/2">冲绳</nuxt-link>
            <nuxt-link to="/wedding/3">北海道</nuxt-link>
            <nuxt-link to="/wedding/4">日本</nuxt-link>
            <nuxt-link to="/wedding/5">关岛</nuxt-link>
            <nuxt-link to="/wedding/6">塞班岛</nuxt-link>
            <nuxt-link to="/wedding/7">夏威夷</nuxt-link>
          </div>
        </nuxt-link>
        <nuxt-link to="/travel"
          >海外旅拍
          <div class="erji">
            <nuxt-link to="/travel/1">冲绳外景</nuxt-link>
            <nuxt-link to="/travel/2">冲绳教堂</nuxt-link>
            <nuxt-link to="/travel/3">北海道</nuxt-link>
            <nuxt-link to="/travel/4">东京</nuxt-link>
            <nuxt-link to="/travel/5">关岛</nuxt-link>
          </div>
        </nuxt-link>
        <nuxt-link to="/dress">婚纱礼服</nuxt-link>
        <nuxt-link to="/appreciate">作品欣赏</nuxt-link>
          <nuxt-link to="/question">常见问题</nuxt-link>-->
        </div>
      </div>
      <div class="right" v-if="!fixed">
        <div class="ipt">
          <!-- <div> -->
          <input class="search" type="text" v-model="keyword" placeholder="教堂搜索" />
          <!-- </div> -->
          <img src="~assets/img/search.png" alt @click="search" />
        </div>
        <div class="btns">

          <a href="https://weibo.com/p/1006062867765780/home" target="_blank" rel="nofollow">
          <div class="item weibo">
            <!-- <img src="~assets/img/weibo.svg" alt /> -->
            
          </div></a>
          <a href="https://huadepei.tmall.com/" target="_blank" rel="nofollow">
          <div class="item timao">
            <!-- <img src="~assets/img/timao.svg" alt /> -->
            
          </div></a>
                    <a href="https://www.xiaohongshu.com/user/profile/5bab43548e662f0001bd0b22" target="_blank" rel="nofollow">
          <div class="item hongshu">
            <!-- <img src="~assets/img/timao.svg" alt /> -->
            
          </div></a>
          <div class="item wechat">
            <!-- <img src="~assets/img/wechat.svg" alt /> -->
            <div class="erweima">
              <img src="~assets/img/weixinerweima.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      active: 0,
      show: false,
      fixed: false,
      keyword: ''
    }
  },
  watch: {
    $route: {
      handler(val) {
        console.log(window.onscroll)
        let that = this
        var oldMethod = window.onscroll
        // if (typeof oldMethod == 'function') {
        //   window.onscroll = function(e) {
        //     oldMethod.call(this)
        //   }
        // }
        window.onscroll = function(e) {
          console.log(e)
          if (document.documentElement.scrollTop > 200) {
            that.fixed = true
          } else {
            that.fixed = false
          }
          // if (oldMethod) {
          //   oldMethod.call(this)
          // }
        }
        // this.top()
        console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 200) {
          this.fixed = true
        } else {
          this.fixed = false
        }
      },
      deep: true
    }
  },
  async created() {
    let ret = await this.$axios.get(`/fLinks`)
    this.$store.commit('SAVE_LINK', ret)
    let res = await this.$axios.get(`/menu/watabe/list/China`)
    this.$store.commit(`SAVE_MENU`, res.data)
    this.list = res.data.filter(v => {
      return v.show
    })
  },
  async mounted() {
    console.log(this)
    let that = this

    console.log(window)
    if (document.documentElement.scrollTop > 200) {
      this.fixed = true
    } else {
      this.fixed = false
    }
    window.onscroll = function(e) {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > 200) {
        that.fixed = true
      } else {
        that.fixed = false
      }
    }
  },
  methods: {
    search() {
      this.$router.push({ path: '/search', query: { keyword: this.keyword } })
    },
    top() {
      window.scrollTo(0, 0)
    },
    changeShow() {
      console.log(1)
      this.show = true
    },
    changeShow2(e) {
      console.log(e)
      if (e.toElement._prevClass == 'erji') {
      } else this.show = false
    }
  }
}
</script>
