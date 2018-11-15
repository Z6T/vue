<template>
    <div class="search">
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
      <city-alphabet></city-alphabet>
    </div>
</template>

<script>
// import CityHeader from '../components/'
import CityHeader from '@/components/city/CityHeader'
import CitySearch from '@/components/city/CitySearch'
import CityList from '@/components/city/CityList'
import CityAlphabet from '@/components/city/CityAlphabet'
export default {
  name: 'SearchCity',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style scoped>

</style>
