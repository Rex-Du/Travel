<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="container">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide><img src="../../../static/picture/bg5.jpg" alt="" class="page"></swiper-slide>
      <swiper-slide><img src="../../../static/picture/bg5.jpg" alt="" class="page"></swiper-slide>
      <swiper-slide><img src="../../../static/picture/bg5.jpg" alt="" class="page"></swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // pagination: {
        //   el: '.swiper-pagination'
        // }
        loop: true,
        autoplay:true,//等同于以下设置
        /*autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          },*/
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  }
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  // mounted () {
  //   // current swiper instance
  //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  //   // console.log('this is current swiper instance object', this.swiper)
  //   this.swiper.slideTo(3, 1000, false)
  // }

}
</script>

<style scoped lang="stylus">
.container
  width 100%
  height 6rem
  background #795da3
  .page
    width 100%
    height 6rem

</style>
