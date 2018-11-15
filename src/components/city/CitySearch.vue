<template>
  <div class="city-searchdiv">
    <input type="text" class="search" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CityIuput'
}
</script>

<style scoped lang="stylus">
.city-searchdiv
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4;
  .search
    box-sizing border-box
    padding 0 0.1rem
    text-align center
    border-radius 0.06rem
    height 0.62rem
    width: 100%
</style>
