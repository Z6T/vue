<template>
    <div class="weekend">
      <p class="week-title">周末去哪儿</p>
      <ul>
        <li class="item" v-for="(item,index) of weekendList" :key="index">
          <a href="">
            <div class="item-img-wrapper"><img :src="item.imgUrl" alt=""></div>
            <div class="item-title-wrapper">
              <p class="item-stitle">{{ item.title }}</p>
              <p class="item-btitle">{{ item.desc }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendList: Array
  }
}
</script>

<style scoped lang="stylus">
.item
  a
    display block
.week-title
  padding-left .26rem
  line-height .8rem
  color #212121
.item-img-wrapper
  height: 0;
  padding-bottom: 37.4375%;
  overflow hidden
.item-title-wrapper
  position: relative;
  padding: .14rem .2rem .2rem .2rem;
  .item-stitle
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    overflow hidden
    text-overflow ellipsis
    nowrap white-space
  .item-btitle
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
</style>
