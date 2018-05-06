<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
      class="item border-bottom"
      v-for="item of recommendList"
      :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
          title: '北京赏花好地方',
          desc: '乱花渐欲迷人眼，京城赏花大搜索'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2f/e615bc3c8e0cf46d9fb92c58ac305f45.water.jpg_200x200_e4e69a48.jpg',
          title: '世界公园',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/14/77271e0d50733ea9d4b3b1534f813d4c.water.jpg_200x200_e6109e17.jpg',
          title: '桃园仙谷',
          desc: '周末干嘛？北京很多博物馆已经免费开放啦'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      margin-top .2rem
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
