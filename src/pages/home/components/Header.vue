<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
// @符号可以代表目标文件所在的根文件夹,即src
// 引入css使用@符号时,需要在@前面加上~符号
// ~符号表示后面的值为alias, alias在webpack.base.conf.js中有定义
@import '~styles/variables.styl'
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
  .header-right
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    color #fff
    .arrow-icon
      margin-left -.04rem
      font-size .24rem
  .header-input
    flex 1
    height .64rem
    margin-top .12rem
    margin-left .2rem
    line-height .64rem
    background #fff
    border-radius .1rem
    color: #ccc
    padding-left .2rem
</style>
