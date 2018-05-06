<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // loop swiper
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
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
  padding-bottom 31.25%
  background #ccc
  /*
  alternatively:
  width 100%
  height 31.25vw (may have compatibility problem)
  */
  .swiper-img
    width 100%
</style>
