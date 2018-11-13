<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">北京门票</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">一日游</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">文化古迹</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">动植物园</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img src="https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">打卡圣地</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">野生动物园</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img src="http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png" alt="" class="img-comtent">
      </div>
      <p class="icon-desc">泡温泉</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'icons'
}
</script>

<style scoped lang="stylus">
  @import "~styles/vars.styl"
  .icons
    height 0
    padding-bottom: 51.2%
    margin-top torem(12)
    box-sizing border-box
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
