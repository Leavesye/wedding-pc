<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrap > .title {
  width: 100%;
  height: 50px;
  display: flex;
  padding-top: 7px;
  border-bottom: 1px solid #d8d8d8;
  color: #962549;
  font-family: 'PingFangSC-Medium';
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 2px;
  box-sizing: border-box;
  div {
    cursor: pointer;
    height: 100%;
    color: #4a4a4a;
    font-family: 'PingFangSC-Medium';
    letter-spacing: 2px;
    margin-right: 50px;
  }
  .active {
    color: #962549;
    border-bottom: 2px solid #962549;
  }
}
.list {
  width: 100%;
  .item {
    display: flex;
    padding-bottom: 58px;
    border-bottom: solid 1px #d8d8d8;
    margin-top: 60px;
    &:last-child {
      border: 0;
    }
    &.hide{
      opacity: 0;
    }
  }
  .img {
    width: 480px;
    height: 290px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }
  .c {
    flex: 1;
    margin-left: 60px;
    position: relative;
  }
  .name {
    color: #962549;
    font-family: 'PingFangSC-Medium';
    font-size: 20px;
    line-height: 25px;
    margin-top: 25px;
    margin-bottom: 22px;
  }
  .des {
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    line-height: 32px;
    & > div {
      display: flex;
      align-items: center;
    }
    .icon {
      width: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      img {
        float: left;
      }
    }
  }
  .btn {
    position: absolute;
    bottom: 0;
    right: 0;
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
.map {
  overflow: hidden;
  position: relative;
  .list {
    width: 100%;
    height: 100%;
  }
  .item {
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    color: #4a4a4a;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    .point {
      width: 10px;
      height: 10px;
      background: #962549;
      margin-right: 5px;
      border-radius: 50%;
      position: relative;
      div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
      .point1 {
        width: 10px;
        height: 10px;
        border: solid 1px rgba(150, 37, 73, 0.5);
        background: rgba(150, 37, 73, 0.1);
        animation: anim_wave2 2s linear infinite;
      }
      .point2 {
        opacity: 0.5985863;
        width: 10px;
        height: 10px;
        border: solid 1px rgba(150, 37, 73, 0.5);
        background: rgba(150, 37, 73, 0.1);
        animation: anim_wave1 2s linear infinite;
      }
      .point3 {
        opacity: 0.3;
        width: 10px;
        height: 10px;
        border: solid 1px rgba(150, 37, 73, 0.5);
        background: rgba(150, 37, 73, 0.1);
        animation: anim_wave 2s linear infinite;
      }
    }

    @keyframes anim_wave {
      0% {
        width: 10px;
        height: 10px;
      }
      100% {
        width: 80px;
        height: 80px;
      }
    }
    @keyframes anim_wave1 {
      0% {
        width: 10px;
        height: 10px;
      }
      100% {
        width: 60px;
        height: 60px;
      }
    }
    @keyframes anim_wave2 {
      0% {
        width: 10px;
        height: 10px;
      }
      100% {
        width: 40px;
        height: 40px;
      }
    }
  }
  .item1 {
    left: 55px;
    top: 174px;
  }
  .item2 {
    left: 89px;
    top: 203px;
  }
  .item3 {
    left: 361px;
    top: 281px;
  }
  .item4 {
    left: 402px;
    top: 347px;
  }
  .item5 {
    left: 461px;
    top: 206px;
  }
  .item6 {
    left: 507px;
    top: 290px;
  }
  .item7 {
    left: 498px;
    top: 308px;
  }
  .item8 {
    left: 475px;
    top: 391px;
  }
  .item9 {
    left: 644px;
    top: 260px;
  }
  .item10 {
    left: 666px;
    top: 285px;
  }
  .item11 {
    left: 681px;
    top: 371px;
  }
  .item12 {
    left: 764px;
    top: 228px;
  }
}
.pop {
  padding: 50px;
  box-sizing: border-box;
  position: relative;
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .li {
    width: 50%;
    margin-bottom: 60px;
    box-sizing: border-box;
    padding-right: 30px;
    &:nth-child(2n) {
      margin-right: 0;
    }
    .tit {
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(150, 37, 73, 1);
      line-height: 28px;
    }
    .des {
      margin-top: 10px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(74, 74, 74, 1);
      line-height: 26px;
    }
  }
}
.pop2 {
  height: 200px;
  padding: 30px 25px;
  .list {
    height: auto;
  }
  .li {
    margin-right: 0;
    width: 100%;
  }
}
.x {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 15px;
  right: 15px;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>
<template>
  <div class="wrap">
    <div class="title">
      <div @click="change('china')" :class="{ active: active == 'china' }">中国门店</div>
      <div @click="change('haiwai')" :class="{ active: active == 'haiwai' }">海外门店</div>
    </div>
    <div class="list" v-show="active == 'china'">
      <div class="item" v-for="(item, index) in obj.storeContent.chinaStores.stores" :key="index">
        <div class="img">
          <img :src="$store.state.baseUrl + item.imageVideoData[0].imageURL" alt />
        </div>
        <div class="c">
          <div class="name">{{ item.storeName }}</div>
          <div class="des">
            <div>
              <div class="icon">
                <div>
                  <img src="~assets/img/address.png" alt />
                </div>
              </div>
              <div>{{ item.address }}</div>
            </div>
            <div v-show="item.phone">
              <div class="icon">
                <div>
                  <img src="~assets/img/phone.png" alt />
                </div>
              </div>
              <div>{{ item.hotLine }}</div>
            </div>
            <div>联系电话：{{ item.contactLine }}</div>
            <div>营业时间：{{ item.openTime }}</div>
            <div v-show="item.str">{{ item.str }}</div>
          </div>
          <a
            target="_blank"
            :href="`https://api.map.baidu.com/marker?location=${item.geoLocation.split(',')[1] + ',' + item.geoLocation.split(',')[0]}&title=${item.storeName}&content=${item.address}&output=html
`"
            class="btn"
          >
            <div class="icon">
              <img src="~assets/img/address2.png" alt />
            </div>
            <div>地图交通</div>
          </a>
        </div>
      </div>
    </div>
    <div class="map" v-show="active == 'haiwai'">
      <img src="~assets/img/map.png" alt />
      <div class="list">
        <el-popover
          :width="item.stores.length > 1 ? '810' : '300'"
          trigger="click"
          v-for="(item, index) in obj.storeContent.foreignStores"
          :key="index"
          v-model="item.show"
          @show="show($event, item)"
        >
          <div :class="item.stores.length > 1 ? 'pop' : 'pop pop2'">
            <div class="x" @click="close(item)">
              <img src="@/assets/img/close.png" alt />
            </div>
            <div class="list">
              <div class="li" v-for="item2 in item.stores" :key="item2.storeName">
                <div class="tit">{{ item2.storeName }}</div>
                <div class="des" v-if="item2.mobile">{{ item2.hotLine }}</div>
                <div class="des">{{ item2.address }}</div>
              </div>
            </div>
          </div>
          <div slot="reference" class="item" :class="item.stores.length ? `item${index+1}` : `item${index+1} hide`" >
            <div class="point">
              <div class="point1" v-show="item.show"></div>
              <div class="point2" v-show="item.show"></div>
              <div class="point3" v-show="item.show"></div>
            </div>
            <div>{{ item.country }}</div>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script>
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
  data() {
    return {
      active: 'china',
      list: [
        {
          id: 1,
          name: '法国',
          shop: [
            {
              name: '巴黎店',
              des: '7, Rue Blanche 75009 Paris, France'
            }
          ]
        },
        {
          id: 2,
          name: '意大利',
          shop: [
            {
              name: '佛罗伦萨店',
              des: "Via de' Pecori,1 50123 Firenze, Italy"
            }
          ]
        },
        {
          id: 3,
          name: '越南',
          shop: [
            {
              name: '岘港店',
              des: `C/O SKY hub Global Tour Lounge, ZEN DIAMOND SUITES HOTEL DANANG 5F, 
16 Ly Thuong Kiet, Hai Chau, Da Nang`
            }
          ]
        },
        {
          id: 4,
          name: '巴厘岛',
          shop: [
            {
              name: '巴厘岛店',
              des:
                'Jl.By Pass l Gusti Ngurah Rai No.89X Kedonganan,Kuta Bali 80362'
            }
          ]
        },
        {
          id: 5,
          name: '日本',
          shop: [
            {
              name: '札幌店',
              mobile: '〒060-0003',
              des: '札幌市中央区北3条西3-1-2　札幌站前藤井ビル4F'
            },
            {
              name: '东京Grand Plaza店',
              mobile: '〒103-0027',
              des: '中央区日本橋3-6-2　日本橋フロント4F'
            },
            {
              name: '新宿Grand Plaza店',
              mobile: '〒160-0022',
              des: '新宿区新宿4-3-25　TOKYU REIT新宿ビル5F'
            },
            {
              name: '银座Salon',
              mobile: '〒104-0061',
              des: '中央区銀座5-8-17　银座Plaze58 2F'
            },
            {
              name: '涉谷Lounge',
              mobile: '〒150-0001',
              des: '渋谷区神宮前6-25-14　神宮前Media Squareビル4F'
            },
            {
              name: '横滨Grand Plaza店',
              mobile: '〒220-0004',
              des: '横浜市西区北幸1-6-1　横浜ファーストビル15F'
            },
            {
              name: '京都本店',
              mobile: '〒602-8011',
              des: '京都市上京区烏丸通出水上る桜鶴円町361　京都本店２F'
            },
            {
              name: '京都四条店',
              mobile: '〒600-8005',
              des:
                '京都市下京区 四条通麩屋町西入立売東町１ 京都フコク生命四条柳馬場ビル10F'
            },
            {
              name: '大阪Grand Plaza店',
              mobile: '〒530-0017',
              des: '大阪市北区角田町2-15 シログチビル5F'
            },
            {
              name: '梅田Salon',
              mobile: '〒530-0001',
              des: '大阪市北区梅田2丁目4-9 ブリーゼブリーゼ　B1F    '
            },
            {
              name: '心斋桥店',
              mobile: '〒542-0086',
              des: '大阪市中央区西心斎橋2-1-3 御堂筋ダイヤモンドビル5F   '
            },
            {
              name: '冲绳那霸店',
              mobile: '〒900-0006',
              des: '那覇市おもろまち4-19-39 グランドテラス新都心1F   '
            }
          ]
        },
        {
          id: 6,
          name: '塞班',
          shop: [
            {
              name: '塞班店',
              des: 'PMB 405 PPP BOX 10000 Saipan MP96950'
            }
          ]
        },
        {
          id: 7,
          name: '关岛',
          shop: [
            {
              name: '关岛店',
              des:
                'TUMON SANDS PLAZA 2F 1082 Pale San Vitores Road, #213 Tamuning,Guam 96913'
            }
          ]
        },
        {
          id: 8,
          name: '澳洲',
          shop: [
            {
              name: '凯恩斯店',
              des: '6 Lake Street, Cairns, QLD4870, Australia'
            }
          ]
        },
        {
          id: 9,
          name: '火奴鲁鲁',
          shop: [
            {
              name: '夏威夷火奴鲁鲁店',
              des: '2270 Kalakaua Ave., 9F Honolulu, Hawaii 96815'
            }
          ]
        },
        {
          id: 10,
          name: '科纳',
          shop: [
            {
              name: '夏威夷科纳店',
              des: '73-4976 Kamanu Street, Suite 106, Kailua-Kona, HI 96740'
            }
          ]
        },
        {
          id: 11,
          name: '大溪地',
          shop: [
            {
              name: '大溪地店',
              des:
                "SCI Morou Benett Imm 15/17 Rue Jeanne d'Arc, Papeete,Tahiti, French Polynesia"
            }
          ]
        },
        {
          id: 12,
          name: '拉斯维加斯',
          shop: [
            {
              name: '拉斯维加斯店',
              des: '3790 Paradise Rd, Suite 153, Las Vegas,Nevada 89169'
            }
          ]
        }
      ]
    }
  },
  async asyncData(context) {
    let res = {}
    if (context.query.type && context.query.type == 'preview') {
      context.store.commit('save_token', context.query.t)
      res = await context.$axios.get(
        `/resource/watabe/preview/single/China/5e4408d6bede2879e6afd756/5e4e26deb5c1951d163eadae`
      )
    } else {
      res = await context.$axios.get(
        `/resource/watabe/production/single/China/5e4408d6bede2879e6afd756/5e4e26deb5c1951d163eadae`
      )
    }
    let obj = res.data[0]
    obj.storeContent.foreignStores.map(v => {
      v.show = false
    })
    return {
      obj,
      parentId: context.query.key
    }
  },
  mounted() {
    console.log(
      this.list.map(v => {
        return v.name
      })
    )
  },
  methods: {
    change(val) {
      this.active = val
    },
    close(item) {
      item.show = false
    },
    show(e, item) {
      console.log(e)
      console.log(item)
      if (!item.stores || !item.stores.length) item.show = false
    }
  }
}
</script>
