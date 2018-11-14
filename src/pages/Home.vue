<template>
  <div>
    <home-header :city="city"></home-header>
    <swiper :arrItem="swiperList"></swiper>
    <icons :iconList = "iconList"></icons>
    <guess :recommendList = "recommendList"></guess>
    <weekend :weekendList = "weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header'
import Swiper from '@/components/Swiper'
import Icons from '@/components/Icons'
import Guess from '@/components/Guess'
import Weekend from '@/components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Guess,
    Weekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res && res.ret === true) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
