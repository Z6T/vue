<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <icons></icons>
    <guess></guess>
    <weekend></weekend>
  </div>
</template>

<script>
import HomeHeader from '@/pages/header/Header'
import Swiper from '@/components/Swiper'
import Icons from '@/components/Icons'
import Guess from '@/components/Guess'
import Weekend from '@/components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Guess,
    Weekend
  }
}
</script>

<style scoped>

</style>
