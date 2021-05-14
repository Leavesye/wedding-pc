<style lang="scss" scoped>
.preview {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  .shadow {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.88);
  }
  .card {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .des {
        color: #ffffff;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
        line-height: 18px;
        margin-top: 15px;
      }
    }
    .img {
      max-width: 80vw;
      max-height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: auto;
        transform: scale(1) rotate(0deg);
        margin-left: 0px;
        margin-top: 0px;
        max-height: 80vh;
        max-width: 80vw;
      }
    }
    .close {
      position: absolute;
      right: 40px;
      top: 40px;
      width: 34px;
      height: 34px;
      cursor: pointer;
    }
  }
  .swiper-button-prev {
    left: 130px;
  }
  .swiper-button-next {
    right: 130px;
  }
}
.tags {
  margin: 15px 0 10px;
  display: flex;
  .tag {
    height: 26px;
    padding: 0 16px;
    border: solid 0.945px #962549;
    background: #962549;
    box-sizing: border-box;
    color: #fff;
    color: #ffffff;
    font-family: 'PingFangSC-Regular';
    font-size: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 10px;
  }
  .tag:nth-child(2n) {
    border: solid 1px #ffffff;
    background: transparent;
  }
}
</style>
<template>
  <div class="preview" v-if="show">
    <div class="shadow"></div>
    <div class="card" @click="close">
      <div class="box">
        <div class="img" @click.stop>
          <img :src="$store.state.baseUrl + showArr[showIndex].imageURL" alt />
        </div>
        <div class="tags">
          <a
            class="tag"
            v-if="showArr[showIndex].locationName"
            :href="showArr[showIndex].locationUrl"
            >{{ showArr[showIndex].locationName }}</a
          >
          <a
            class="tag"
            v-if="showArr[showIndex].weddingType"
            :href="showArr[showIndex].weddingUrl"
            >{{ showArr[showIndex].weddingType }}</a
          >
        </div>
        <div class="des" v-if="showArr[showIndex].title">
          {{ showArr[showIndex].title }}
        </div>
      </div>
      <div
        class="swiper-button-prev"
        @click.stop="prev"
        v-show="showIndex != 0"
      ></div>
      <div
        class="swiper-button-next"
        @click.stop="next"
        v-show="showIndex != showArr.length - 1"
      ></div>
      <div class="img close" @click="close">
        <img src="~assets/img/close2.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      active: 0
    }
  },
  props: {
    showArr: {
      type: Array,
      default: []
    },
    showIndex: {
      default: 0
    }
  },
  watch: {
    active: {
      handler(val) {
        // this.active = val
        this.$emit('changeIndex', val)
      }
    }
  },
  async asyncData({ params }) {
    return {}
  },
  mounted() {},
  methods: {
    open() {
      this.show = true
      document.body.style.overflow = 'hidden'
    },
    close() {
      this.show = false
      document.body.style.overflow = 'visible'
    },
    prev() {
      let index = this.showIndex-1
      this.$emit('changeIndex', index)
    },
    next() {
      let index = this.showIndex+1
      this.$emit('changeIndex', index)
    }
  }
}
</script>
