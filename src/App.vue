<template>
  <div id="app">
    <!-- to improve performance -->
    <!-- prevent keep sending http request -->
    <!-- although the router-view is kept alive,
        the excluded component's mounted life cycle hook will still fire
     -->
    <keep-alive exclude="Detail">
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
