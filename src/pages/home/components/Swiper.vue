<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
        class="swiper-img"
        :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // loop swiper
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/6e/3f6a091804ac0a02.jpg_890x330_b6673437.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/3c/b2e542d1649a9b02.jpg_890x330_ae9ba0f1.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
/* >>> means find any tag with class swiper-pagination-bullet-active, ignore scoped */
.wrapper >>> .swiper-pagination-bullet-active
  background #fff !important

.wrapper
  /* image auto fit */
  width 100%
  height 0
  overflow hidden
  padding-bottom 37.25%
  background #ccc
  /*
  alternatively:
  width 100%
  height 31.25vw (may have compatibility problem)
  */
  .swiper-img
    width 100%
</style>
