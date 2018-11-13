<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <icons></icons>
    <guess></guess>
  </div>
</template>

<script>
import HomeHeader from '@/pages/header/Header'
import Swiper from '@/components/Swiper'
import Icons from '@/components/Icons'
import Guess from '@/components/Guess'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Guess
  }
}
</script>

<style scoped>

</style>
