<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for='(i,index) in arrItem' :key='index' class="swiper-slide">
        <div class="iSlide">
          <img class="img" :src="i.imgUrl" :key="i.name">
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default{
  props: {
    arrItem: Array
  },
  mounted: function () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      speed: 2000,
      observer: true,
      // 修改swiper的父元素时，自动初始化swiper
      observeParents: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style scoped lang="stylus">
  /*在此处引入的必须是styl  此处的style只对当前组件生效,但是分页是传递给swiperr组件了,所以不会生效,三个箭头进行穿透*/
  .swiper-container >>> .swiper-pagination-bullet
    background rgba(255,255,255,.5)
  .swiper-container >>> .swiper-pagination-bullet-active
    background #fff
  .swiper-container
    height: 0;
    width: 100%
    padding-bottom  26.57%
    img
      width  100%
</style>
