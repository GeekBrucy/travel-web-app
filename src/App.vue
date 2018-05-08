<template>
  <div id="app">
    <!-- to improve performance -->
    <!-- prevent keep sending http request -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
