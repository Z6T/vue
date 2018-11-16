<template>
  <ul class="list" >
    <li
      :key="item"
      v-for="item in letterarr"
      @click="clickLetter"
    >{{ item }}</li>
  </ul>
</template>

<script>
import Bus from '../../assets/bus.js'
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    clickLetter (e) {
      var currentLetter = e.target.innerText
      Bus.$emit('scrollEle', currentLetter)
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
