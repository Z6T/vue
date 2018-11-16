<template>
    <div class="search">
      <city-header></city-header>
      <city-search></city-search>
      <city-list
        :cities ='cities'
        :hotCities ='hotCities'
      ></city-list>
      <city-alphabet :cities="cities"></city-alphabet>
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
      letter: ''
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
