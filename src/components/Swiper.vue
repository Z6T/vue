<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for='(i,index) in arrItem' :key='index' class="swiper-slide">
        <div class="iSlide">
          <img class="img" :src="i.imgUrl">
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default{
  mounted: function () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      speed: 2000,
      pagination: '.swiper-pagination'
    })
  },
  data () {
    return {
      arrItem: [
        {
          name: 'swiperSlide5',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/6e/4a5551bbb189d902.jpg_750x200_25257467.jpg'
        },
        {
          name: 'swiperSlide1',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/12/856f100069809e02.jpg_750x200_e3485a2b.jpg'
        },
        {
          name: 'swiperSlide6',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/af/30ffcf34e9819f02.jpg_750x200_736b7236.jpg'
        },
        {
          name: 'swiperSlide9',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/ce/77e115fea8f99102.jpg_750x200_a2d0fcd2.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  /*在此处引入的必须是styl  此处的style只对当前组件生效,但是分页是传递给swiperr组件了,所以不会生效,三个箭头进行穿透*/
  .swiper-container >>> .swiper-pagination-bullet-active
    background #fff
  .swiper-container
    height: 0;
    width: 100%
    padding-bottom  26.57%
    img
      width  100%
</style>
