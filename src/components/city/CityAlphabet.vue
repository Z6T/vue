<template>
  <ul class="list" >
    <li  v-show="tipDivShow">
      <div class="showletterdiv">{{ thisLetter}}</div>
    </li>
    <li
      :key="item"
      v-for="item in letterarr"
      @click="clickLetter"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
    >{{ item }}</li>
  </ul>
</template>

<script>
import Bus from '../../assets/bus.js'
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchState: false,
      tipDivShow: false,
      thisLetter: 'A',
      AstartY: '',
      timer: null
    }
  },
  props: {
    cities: Object
  },
  methods: {
    clickLetter (e) {
      var currentLetter = e.target.innerText
      Bus.$emit('scrollEle', currentLetter)
    },
    handleTouchStart () {
      this.touchState = true
    },
    handleTouchMove (e) {
      if (this.touchState) { // 节流操作
        if (!this.timer) {
          clearTimeout(this.timer)
        }
        setTimeout(() => {
          this.tipDivShow = true // 滑动时候提示字母位置
          var thisletterY = e.touches[0].clientY
          var index = Math.floor((thisletterY - this.AstartY - 79) / 15)
          if (index >= 0 && index < this.letterarr.length) {
            this.thisLetter = this.letterarr[index]
            Bus.$emit('scrollEle', this.thisLetter)
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchState = false
      setTimeout(() => {
        this.tipDivShow = false
      }, 1000)
    }
  },
  computed: {
    letterarr () {
      const letters = []
      for (let key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  updated () {
    this.AstartY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style scoped lang="stylus">
.showletterdiv
  position: absolute;
  top: 50%;
  right: 20px;
  margin-top: -15px;
  width: 30px;
  background: rgba(208, 192, 192, 0.6);
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

.list
  display: flex
  flex-direction column
  width 0.4rem
  justify-content center
  position: absolute
  z-index 111
  right: 0
  bottom: 0
  top: 1.58rem;
  li
    line-height: .3rem
    text-align: center
    color: #00bcd4
</style>
