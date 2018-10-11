<template>
    <div class="header">
      <div class="left iconfont">&#xe606;</div>
      <div class="center iconfont"><div class="input">&#xe62c;输入</div></div>
      <div class="right iconfont">城市&#xe6aa;</div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
.header
  width 100%
  height 2rem
  line-height 2rem
  position relative
  background aqua
  .left
    width 20%
    position absolute
    left 0
    text-align center
  .center
    width 50%
    position absolute
    left 20%
    .input
      border-radius 0.2rem
      height 1.8rem
      background white
  .right
    width 30%
    margin 0 auto
    text-align center
    position absolute
    left 70%
</style>
