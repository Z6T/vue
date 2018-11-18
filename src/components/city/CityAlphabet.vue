<template>
  <ul class="list" >
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
      touchState: false
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
      debugger
      var AstartY = this.$refs['A'][0].offsetTop
      var thisletterY = e.touches[0].clientY
      var index = Math.floor((thisletterY - AstartY - 79) / 15)
      console.log(this.letterarr[index])
    },
    handleTouchEnd () {
      this.touchState = false
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
  }
}
</script>

<style scoped lang="stylus">
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
