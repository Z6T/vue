<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <icons></icons>
  </div>
</template>

<script>
import HomeHeader from '@/pages/header/Header'
import Swiper from '@/components/Swiper'
import Icons from '@/components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons
  }
}
</script>

<style scoped>

</style>
