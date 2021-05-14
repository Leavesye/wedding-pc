<style lang="scss" scoped>
.banner {
  overflow: hidden;
}
.box1 {
  width: 1260px;
  margin: auto;
}
.tab {
  margin-top: 20px;
  height: 70px;
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #d8d8d8;
  margin-bottom: 40px;
  div {
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 3px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    position: relative;
    // &.nuxt-link-active {
    &.active {
      color: #962549;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 105px;
        height: 2px;
        background: #962549;
      }
    }
  }
}
.box {
  margin-bottom: 70px;
}
.img {
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
}
.play {
  width: 50px;
  height: 50px;
  z-index: 99999999;
}
/deep/ {
  .vue-waterfall-column {
    margin-right: 20px;
    width: 300px !important;
    &:last-child {
      margin-right: 0;
    }
  }
}
.videos {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 300px;
    margin-right: 20px;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
<template>
  <div class="container">
    <div class="banner">
      <img :src="$store.state.baseUrl + obj.mainHeadKV[0].imageURL" alt />
    </div>
    <div class="box1">
      <div class="tab">
        <div
          v-for="(item, index2) in obj.photoList"
          :class="{ active: index == index2 }"
          :key="index2"
          @click="changeArr(index2)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="box" v-if="show">
        <waterfall
          :col="4"
          :lazyDistance="800"
          :data="obj.photoList[index].imageVideoData"
          v-if="type == 'static'"
        >
          <template>
            <div
              class="cell-item"
              v-for="(item, index2) in obj.photoList[index].imageVideoData"
              :key="index2"
            >
              <div class="img fangda" v-if="item.mediaType == 'image'">
                <img
                  :src="$store.state.baseUrl + item.imageURL"
                  alt
                  @click="
                    showFangda(obj.photoList[index].imageVideoData, index2)
                  "
                />
              </div>
              <div class="img" v-else>
                <img :src="$store.state.baseUrl + item.imageURL" alt />
                <div class="play center">
                  <img src="~assets/img/play.png" alt />
                </div>
              </div>
            </div>
          </template>
        </waterfall>
        <!-- <div class="videos" v-else>
          <div class="item" v-for="(item, index) in arr2" :key="index">
            <div class="img">
              <img :src="item.url" alt />
              <div class="play center">
                <img src="~assets/img/play.png" alt />
              </div>
            </div>
          </div>
        </div>-->
        <fangda
          ref="fangda"
          :showArr="arr"
          :showIndex="index2"
          @changeIndex="changeIndex"
        ></fangda>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      index: 0,
      index2: 0,
      show: true,
      type: 'static'
    }
  },
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
        `/resource/watabe/preview/single/China/5e440915bede2879e6afd75c/5e440915bede2879e6afd75c`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e440915bede2879e6afd75c/5e440915bede2879e6afd75c`
      )
    }
    let obj = res.data[0]
    return {
      obj,
      parentId: context.query.key
    }
  },
  // watch: {
  //   $route: {
  //     handler(val) {
  //       console.log(val.params.id == 2)
  //       if (val.params.id == 2) {
  //         this.type = 'video'
  //       } else {
  //         this.type = 'static'
  //       }
  //       console.log(this.type)
  //       // if (document.documentElement.scrollTop > 200) {
  //       //   this.fixed = true
  //       // } else {
  //       //   this.fixed = false
  //       // }
  //     },
  //     deep: true
  //   }
  // },
  mounted() {
    console.log(this.obj)
    if (this.$route.params.id == 2) {
      this.type = 'video'
    } else {
      this.type = 'static'
    }
  },
  methods: {
    changeArr(index) {
      this.show = false
      this.index = index
      setTimeout(() => {
        this.show = true
      }, 10)
    },
    showFangda(arr, i) {
      this.arr = arr
      this.index2 = i
      this.$forceUpdate()
      console.log(this.arr)
      this.$refs.fangda.open()
    },
    changeIndex(i) {
      console.log(i)
      this.index2 = i
    }
  }
}
</script>
