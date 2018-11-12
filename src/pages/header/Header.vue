<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input"></div>
      <div class="header-right"></div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="stylus">
  @import "~styles/vars.styl"
  .header
    display: flex
    line-height torem(44)
    height torem(44)
    background-color $bgcolor
    color #fff
    .header-left
      float left
      width torem(32)
      .back-icon
        text-align center
        font-size torem(18)

</style>
