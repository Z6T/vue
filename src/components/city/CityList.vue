<template>
    <div class="list">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style scoped lang="stylus">
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    .title
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.2rem;
      color: #666;
      font-size: 0.26rem;
</style>
