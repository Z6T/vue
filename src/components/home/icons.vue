<template>
  <div class="icons border-bottom">
    <div class="icon" v-for="(item,index) of iconList" :key="index">
      <div class="icon-img">
        <img :src="item.imgUrl" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'icons',
  props: {
    iconList: Array
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/vars.styl"
  .icons
    height 0
    padding-bottom: 47.6%
    padding-top: 0.24rem;
    box-sizing border-box
    background white
    .icon
      position: relative
      width 25%
      height 0
      padding-bottom 22%
      float: left
      .icon-img
        position: absolute
        top 0
        left 0
        right 0
        bottom: .7rem
        .img-comtent
          margin: 0 auto;
          display: block;
          height:100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .66rem
        line-height: .66rem
        text-align: center
        color: $darkTextColor
        ellipsis()

</style>
