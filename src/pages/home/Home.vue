<template>
  <div>
    <app-header></app-header>
    <app-swiper></app-swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    appHeader: HomeHeader,
    appSwiper: HomeSwiper
  }
}
</script>

<style>

</style>
