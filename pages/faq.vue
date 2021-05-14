<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 848px;
  margin: auto;
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
.choose {
  overflow: hidden;
  width: 100%;
  .item {
    margin-right: 16px;
    width: 200px;
    height: 60px;
    border: solid 1px #962549;
    background: #ffffff;
    color: #962549;
    font-family: 'PingFangSC-Regular';
    font-size: 16px;
    float: left;
    margin-bottom: 20px;
    text-align: center;
    line-height: 60px;
    &:nth-child(4n) {
      margin-right: 0;
    }
    &.select {
      background: #962549;
      color: #fff;
    }
  }
}
.list {
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
</style>
<template>
  <div class="box">
    <div class="tit">FAQ</div>
    <div class="t2">常见问题</div>
    <div class="choose">
      <div
        class="item"
        :class="{ select: index == active }"
        v-for="(item, index) in obj.faqContent"
        :key="index"
        @click="changeTab(index)"
      >{{ item.blockName }}</div>
    </div>
    <div class="list" v-if="obj.faqContent">
      <div
        class="item"
        :class="{ active: item.show }"
        v-for="(item, index) in obj.faqContent[active].items"
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
</template>
<script>
export default {
  data() {
    return {
      active: 0
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
        `/resource/watabe/preview/single/China/5e44091bbede2879e6afd75d/5e44091bbede2879e6afd75d`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e44091bbede2879e6afd75d/5e44091bbede2879e6afd75d`
      )
    }

    return { obj: res.data[0] }
  },
  mounted() {
    console.log(this.obj)
  },
  methods: {
    changeTab(i) {
      this.active = i
    },
    show(item) {
      if (item.show) {
        item.show = !item.show
      } else {
        this.$set(item, 'show', true)
      }
    }
  }
}
</script>
