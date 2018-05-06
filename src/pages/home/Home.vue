<template>
  <div>
    <app-header></app-header>
    <app-swiper></app-swiper>
    <app-icons></app-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    appHeader: HomeHeader,
    appSwiper: HomeSwiper,
    appIcons: HomeIcons
  }
}
</script>

<style>

</style>
