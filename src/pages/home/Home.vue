<template>
  <div>
    <app-header></app-header>
    <app-swiper></app-swiper>
    <app-icons></app-icons>
    <app-recommend></app-recommend>
    <app-weekend></app-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    appHeader: HomeHeader,
    appSwiper: HomeSwiper,
    appIcons: HomeIcons,
    appRecommend: HomeRecommend,
    appWeekend: HomeWeekend
  }
}
</script>

<style>

</style>
