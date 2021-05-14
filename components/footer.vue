<style lang="scss" scoped>
.footer {
  height: 330px;
  width: 100%;
  min-width: 1280px;
  // box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  border-top: 1px solid #e6e6e6;
  position: relative;
  background: #f6f6f6;
}
.wrap {
  width: 1110px;
  margin: auto;
  display: flex;
  // align-items: center;
  padding-top: 30px;
}
.file {
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e6e6e6;
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #747474;
  font-family: 'PingFangSC-Light';
  font-size: 12px;
}
.left {
  font-family: 'SourceHanSerifCN-Regular';
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 5px;
  width: 302px;
  img {
    width: 302px;
  }
  & > div {
    margin-left: 98px;
    margin-top: 67px;
    width: 161px;
    height: 29px;
    img {
      width: 161px;
      height: 29px;
    }
  }
}
.center1 {
  margin-left: 84px;
  display: flex;
  flex: 1;
  .column {
    flex-shrink: 0;
    .title {
      color: #962549;
      font-family: 'PingFangSC-Medium';
      font-size: 14px;
      line-height: 18px;
    }
    .list {
      margin-top: 25px;
      .item {
        position: relative;
        cursor: pointer;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        color: #4a4a4a;
        font-family: 'PingFangSC-Regular';
        font-size: 12px;
        line-height: 28px;
        .img {
          margin-right: 12px;
          width: 20px;
          height: 20px;
        }
        .erweima {
          display: none;
          position: absolute;
          top: 50%;
          left: 95px;
          transform: translateY(-50%);
          width: 130px;
          height: 130px;
          background: #fff;
          z-index: 99999;
        }
        &:hover {
          .erweima {
            display: block;
          }
        }
      }
    }
    .num {
      color: #962549;
      font-family: MonotypeCorsiva;
      font-size: 36px;
      line-height: 46px;
      margin-top: 15px;
    }
  }
}
.right {
  position: relative;
  display: flex;
  width: 191px;
  .line {
    height: 20px;
    width: 1px;
    background: #d8d8d8;
  }
  .l {
    flex: 1;
  }
  .r {
    flex: 1;
    text-align: right;
  }
  .tab {
    color: #747474;
    font-family: 'PingFangSC-Medium';
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    &.active {
      color: #962549;
      & + .des {
        display: block;
      }
    }
    & + .des {
      display: none;
      position: absolute;
      left: 0;
      top: 33px;
      width: 191px;
      color: #4a4a4a;
      font-family: 'PingFangSC-Regular';
      font-size: 12px;
      line-height: 40px;
      text-align: left;
    }
  }
}
.tags {
  list-style-type: none;
  display: flex;
  font-size: 12px;
  width: 1110px;
  margin: 0 auto;
  margin-top: 60px;
}
.tags li {
  margin-right: 20px;
}
</style>
<template>
  <div class="footer">
    <div class="wrap">
      <div class="left">
        <img src="~assets/img/logo.png" alt="WATABE WEDDING华德培全球婚礼策划公司" />
        
      </div>
      <div class="center1">
        <div class="column">
          <div class="title">关注我们</div>
          <div class="list">
            <a href="https://huadepei.tmall.com/" target="_blank" class="item" rel="nofollow">
              <div class="img">
                <img src="~assets/img/timao.svg" alt />
              </div>
              <div>天猫旗舰店</div>
            </a>
            <div class="item">
              <div class="img">
                <img src="~assets/img/wechat2.png" alt />
              </div>
              <div>客服微信</div>
              <div class="erweima">
                <img src="~assets/img/kefuerweima.png" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="column ml60">
          <div class="title">常见问题</div>
          <div class="list">
            <a href="/privacy"  class="item" rel="nofollow">
              <div>个人信息保护方针</div>
            </a>
            <a href="/rule"  class="item" rel="nofollow">

              <div>使用条款</div>
            </a>
          </div>
        </div>
        <div class="column ml60">
          <div class="title">咨询&合作</div>
          <div class="num">400-661-1314</div>
        </div>
      </div>
      <div class="right">
        <div class="l">
          <div
            class="tab"
            :class="{ active: active == 0 }"
            @click="changeActive(0)"
          >
            上海门店
          </div>
          <div class="des">
            <div>上海市浦东新区浙桥路80号1层</div>
            <div>联系电话：021-64732255</div>
            <div>营业时间：10:00-18:30</div>
          </div>
        </div>
        <div class="line"></div>
        <div class="r">
          <div
            class="tab"
            :class="{ active: active == 1 }"
            @click="changeActive(1)"
          >
            北京门店
          </div>
          <div class="des">
            <div>
              北京市朝阳区工人体育场北路8号 <br />
              三里屯SOHO办公楼A座1603室
            </div>
            <div>TEL:010-65002620</div>
            <div>营业时间：10:00-18:30</div>
          </div>
        </div>
      </div>
    </div>
    <ul class="tags">
      <li v-for="(item, i) in tags" :key="i">{{item}}</li>
    </ul>
    <div class="file">
      <div>
        <a href="https://beian.miit.gov.cn" target="icp" rel="nofollow">沪ICP备18041883号-1</a>  © 2020 Watabe Wedding Corporation. All Rights
        Reserved.  华德培婚纱(上海)有限公司
      </div>
      <div>
        <img src="~assets/img/jinghui.png" alt />
      </div>
      <div>  沪公网安备 31011502005148号</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      tags: ['旅行结婚','旅行婚礼','海外婚礼','教堂婚礼','三亚婚礼','海岛婚礼','海外婚庆公司','冲绳婚庆公司','目的地婚礼策划'],
    }
  },
  methods: {
    changeActive(i) {
      this.active = i
    }
  }
}
</script>
