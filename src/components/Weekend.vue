<template>
    <div class="weekend">
      <p class="week-title">周末去哪儿</p>
      <ul>
        <li class="item">
          <a href="">
            <div class="item-img-wrapper"><img src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt=""></div>
            <div class="item-title-wrapper">
              <p class="item-stitle">京城人的周末撒欢地</p>
              <p class="item-btitle">在帝都过周末，不仅仅是城中游！</p>
            </div>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="item-img-wrapper"><img src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt=""></div>
            <div class="item-title-wrapper">
              <p class="item-stitle">京城人的周末撒欢地</p>
              <p class="item-btitle">在帝都过周末，不仅仅是城中游！</p>
            </div>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="item-img-wrapper"><img src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt=""></div>
            <div class="item-title-wrapper">
              <p class="item-stitle">京城人的周末撒欢地</p>
              <p class="item-btitle">在帝都过周末，不仅仅是城中游！</p>
            </div>
          </a>
        </li>
        <li class="item">
          <a href="">
            <div class="item-img-wrapper"><img src="http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg" alt=""></div>
            <div class="item-title-wrapper">
              <p class="item-stitle">京城人的周末撒欢地</p>
              <p class="item-btitle">在帝都过周末，不仅仅是城中游！</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Weekend'
}
</script>

<style scoped lang="stylus">
.item
  a
    display block
.week-title
  padding-left .26rem
  line-height .8rem
  color #212121
.item-img-wrapper
  height: 0;
  padding-bottom: 37.4375%;
  overflow hidden
.item-title-wrapper
  position: relative;
  padding: .14rem .2rem .2rem .2rem;
  .item-stitle
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    overflow hidden
    text-overflow ellipsis
    nowrap white-space
  .item-btitle
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
</style>
