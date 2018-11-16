<template>
  <ul class="list">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>E</li>
    <li>E</li>
    <li>F</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
