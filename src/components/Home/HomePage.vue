<template>
  <div class="home">
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeSwiper from './HomeSwiper.vue'
export default {
  name: 'HomePage',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper
  }
}
</script>

<style scoped lang="stylus">
.home
  width 100%
</style>
