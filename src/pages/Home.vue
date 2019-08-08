<template>
    <div>
        <home-header :city="city"></home-header>
        <swiper :arrItem="swiperList"></swiper>
        <icons :iconList="iconList"></icons>
        <guess :recommendList="recommendList"></guess>
        <weekend :weekendList="weekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from '@/components/home/Header'
import Swiper from '@/components/home/SwiperList'
import Guess from '@/components/home/Guess'
import Weekend from '@/components/home/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Guess,
    Weekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      let data = { 'code': '1234', 'name': 'yyyy' }
      axios.get('/api/index.json', {
        date: '2017/09/10'
      }, {
        'headers': { 'Content-Type': 'application/x-www-form-urlencodeed' }
      })
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
