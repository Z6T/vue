<template>
    <div class="city-header">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
  @import "~styles/vars.styl"
  .city-header
    position: relative;
    overflow: hidden;
    height: 0.86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    font-size: 0.32rem;
    a
      color #fff
      .back-icon
        position: absolute;
        text-align center
        font-size torem(18)
        font-weight bold
        width: torem(32)
</style>
