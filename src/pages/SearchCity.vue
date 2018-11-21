<template>
    <div class="search">
      <city-header></city-header>
      <city-search :cities = 'cities'></city-search>
      <city-list
        :cities ='cities'
        :hotCities ='hotCities'
      ></city-list>
      <city-alphabet :cities="cities"></city-alphabet>
      <div v-show="isshow" style="    width: 20px;
    height: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    background: url(http://img.lanrentuku.com/img/allimg/1212/5-121204194025.gif);
    background-size: 100%;"></div>
    </div>
</template>

<script>
// import CityHeader from '../components/'
import CityHeader from '@/components/city/CityHeader'
import CitySearch from '@/components/city/CitySearch'
import CityList from '@/components/city/CityList'
import CityAlphabet from '@/components/city/CityAlphabet'
import axios from 'axios'
export default {
  name: 'SearchCity',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      isshow: true
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    handleCityJson (res) {
      res = res.data
      if (res.ret === true) {
        var data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
        this.isshow = false
      }
    }
  },
  mounted () {
    axios.get('/api/city.json')
      .then(this.handleCityJson)
  }
}
</script>

<style scoped>

</style>
