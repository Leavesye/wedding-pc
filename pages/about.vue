<style lang="scss" scoped>
.container2 {
  display: flex;
  margin-bottom: 180px;
  padding-top: 30px;
}
.left {
  height: 200px;
  width: 190px;
  border: 1px solid #d8d8d8;
  margin-right: 30px;
  .item {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d8d8d8;
    color: #962549;
    font-family: 'PingFangSC-Regular';
    font-size: 14px;
    &:last-child {
      border: 0;
    }
    &.nuxt-link-active {
      background: #f5ebee;
    }
  }
}
.right {
  flex: 1;
  flex-shrink: 0;
}
/deep/ {
  .wrap{
    width: 1060px;
  }
}
</style>
<template>
  <div class="container2" v-if="show">
    <div class="left">
      <nuxt-link
        class="item"
        v-for="item in menu"
        :key="item.key"
        :to="
                  `${item.frontLink}`
                "
      >{{ item.title }}</nuxt-link>
    </div>
    <div class="right">
      <nuxt-child></nuxt-child>
    </div>
  </div>
  <div v-else>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      show: true,
      obj: {}
    }
  },
  async asyncData(context) {
    let menu
    console.log(Object.keys(context.store.state.menu).length)
    if (!Object.keys(context.store.state.menu).length) {
      let res = await context.$axios.get(`/menu/watabe/list/China`)
      context.store.commit(`SAVE_MENU`, res.data)
      let obj = res.data.filter(v => {
        return v.frontLink == '/about'
      })[0]
      menu = obj.children
    } else {
      let obj = context.store.state.menu.filter(v => {
        return v.frontLink == '/about'
      })[0]
      if (obj) {
        menu = obj.children
      }
    }
    return {
      menu
    }
  },
  computed() {},
  watch: {
    $route: {
      handler: function(val, oldVal) {
        console.log(val)
        this.show = true
        if (val.params.id) {
          this.$set(this.obj, 'id', val.params.id)
        } else {
          this.show = true
        }
        // Object.assign(this.routeParams, val.params)
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {
    if (this.$route.params.id) {
      this.show = false
    } else {
      this.show = true
    }
  },
  mounted() {},
  methods: {}
}
</script>