<template>
  <div class="vue-body"
    :class="isIphoneX ? 'iphoneX':''">
    <div class="sun-header">
      <x-header :left-options="leftOptions"
        :title="title"></x-header>
    </div>
    <div class="sun-view-wrap">
      <transition>
        <router-view class="sun-view-section"></router-view>
      </transition>
    </div>
    <div class="sun-footer">
      <tabbar style="position:fixed;">
        <tabbar-item link="/">
          <img slot="icon"
            src="../../assets/demo/icon_nav_button.png">
          <span slot="label">HOME</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'
export default {
  name: 'Layout',
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      isIphoneX: false
    }
  },
  computed: {
    leftOptions () {
      return {
        showBack: this.$route.path !== '/product'
      }
    },
    title () {
      if (this.$route.path === '/product') return 'Home'
      return this.$route.name
    }
  }
}
</script>
<style lang="less">
.vue-body.iphoneX {
  bottom: 34px;
}
.sun-footer.iphoneX {
  flex: 1 0 auto;
  height: 50px;
  .weui-tabbar {
    bottom: 34px;
  }
}
</style
