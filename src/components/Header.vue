<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="header-right">
        {{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
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
      margin-right torem(8)
      width torem(32)
      .back-icon
        text-align center
        font-size torem(18)
        font-weight bold
    .header-input
      flex 1
      margin-top torem(7)
      padding-left torem(10)
      line-height torem(30)
      height torem(30)
      background #fff
      border-radius: .1rem
      color #e4e7ea
    .header-right
      float right
      width torem(66)
      text-align center
      .arrow-icon
        font-size .24rem
        margin-left: 0.04rem;
</style>
