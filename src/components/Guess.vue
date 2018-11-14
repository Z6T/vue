<template>
  <div class="guess">
    <div class="guess-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span>猜你喜欢</span>
    </div>
    <ul class="guess-ul">
      <li class="guess-li border-bottom">
        <a href="" class="mp-fulllink">
          <div class="a-img"><img src="../assets/imgs/choushitou.png" alt=""></div>
          <div class="a-content">
            <div class="guess-liketitle">徐梦瑶</div>
            <div class="guess-likecomment">
              <img src="../assets/imgs/star.png" alt="">
              <span>99999条评论</span>
            </div>
            <div class="guess-likeprice">
              <span class="gp">￥<em>不卖</em></span>
              起
              <span class="gp-address">登封市</span>
            </div>
          </div>
        </a>
      </li>
      <li class="guess-li">
        <a href="" class="mp-fulllink">
          <div class="a-img"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt=""></div>
          <div class="a-content">
            <div class="guess-liketitle">故宫</div>
            <div class="guess-likecomment">
              <img src="../assets/imgs/star.png" alt="">
              <span>31333条评论</span>
            </div>
            <div class="guess-likeprice">
              <span class="gp">￥<em>20</em></span>
              起
              <span class="gp-address">大兴区</span>
            </div>
          </div>
        </a>
      </li>
      <li class="guess-li border-bottom" >
        <a href="" class="mp-fulllink">
          <div class="a-img"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt=""></div>
          <div class="a-content">
            <div class="guess-liketitle">故宫</div>
            <div class="guess-likecomment">
              <img src="../assets/imgs/star.png" alt="">
              <span>31333条评论</span>
            </div>
            <div class="guess-likeprice">
              <span class="gp">￥<em>20</em></span>
              起
              <span class="gp-address">大兴区</span>
            </div>
          </div>
        </a>
      </li>
      <li class="guess-li border-bottom">
        <a href="" class="mp-fulllink">
          <div class="a-img"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt=""></div>
          <div class="a-content">
            <div class="guess-liketitle">故宫</div>
            <div class="guess-likecomment">
              <img src="../assets/imgs/star.png" alt="">
              <span>31333条评论</span>
            </div>
            <div class="guess-likeprice">
              <span class="gp">￥<em>20</em></span>
              起
              <span class="gp-address">大兴区</span>
            </div>
          </div>
        </a>
      </li>
      <li class="guess-li">
        <a href="" class="mp-fulllink">
          <div class="a-img"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt=""></div>
          <div class="a-content">
            <div class="guess-liketitle">故宫</div>
            <div class="guess-likecomment">
              <img src="../assets/imgs/star.png" alt="">
              <span>31333条评论</span>
            </div>
            <div class="guess-likeprice">
              <span class="gp">￥<em>20</em></span>
              起
              <span class="gp-address">大兴区</span>
            </div>
          </div>
        </a>
      </li>
      <li class="guess-li">
        <a href="" class="mp-fulllink">
          <div class="a-img"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg" alt=""></div>
          <div class="a-content">
            <div class="guess-liketitle">故宫</div>
            <div class="guess-likecomment">
              <img src="../assets/imgs/star.png" alt="">
              <span>31333条评论</span>
            </div>
            <div class="guess-likeprice">
              <span class="gp">￥<em>20</em></span>
              起
              <span class="gp-address">大兴区</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Guess'
}
</script>

<style scoped lang="stylus">
  @import "~styles/vars.styl"
.guess
  margin-top torem(12)
  background white
  .guess-title
    padding torem(16) 0
    img
      width: 0.3rem;
      height: 0.3rem;
      margin-left: 0.2rem;
      vertical-align: top;
    span
      font-size 0.32rem
  .guess-ul
    margin-left .24rem
    .guess-li
      padding .2rem 0
      min-height torem(120)
      .mp-fulllink
        overflow hidden
        height: 100%
        display flex
        .a-img
          width: 2rem
          height: 2rem
          float: left
          overflow hidden
          img
            height: 100%
        .a-content
          flex 1
          padding-left .22rem
          .guess-liketitle
            margin-top: .26rem;
            height: .44rem;
            color: #212121;
            font-size: .32rem;
            line-height: .44rem;
          .guess-likecomment
            margin-top: .14rem;
            height: .34rem;
            color #616161
          .guess-likeprice
            margin-top 0.22rem
            color #616161
            .gp
              font-size: .24rem;
              line-height: 0.4rem;
              color #ff8300
              em
                font-size: 0.4rem;
            .gp-address
              float right
              margin-right 0.24rem
              color #616161
              font-size: .24rem;
              line-height: .4rem;
</style>
