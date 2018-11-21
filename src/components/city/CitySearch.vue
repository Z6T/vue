<template>
  <div class="city-searchdiv">
    <input type="text" class="search" placeholder="请输入城市名或拼音" v-model="keyword">
    <div class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item border-bottom">{{ item.name }}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有查询到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityIuput',
  data () {
    return {
      list: [],
      keyword: ''
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      setTimeout(() => {
        const result = []
        var cities = this.cities
        if (!this.keyword) {
          this.list = []
          return
        }
        for (let i in cities) {
          cities[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
        console.log(this.list)
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped lang="stylus">
.city-searchdiv
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4;
  .search
    box-sizing border-box
    padding 0 0.1rem
    text-align center
    border-radius 0.06rem
    height 0.62rem
    width: 100%
  .search-content
    position: absolute
    top 1.58rem
    right: 0
    left: 0
    bottom 0
    background-color #fff
    z-index: 9999
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
