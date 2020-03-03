<template>
  <div class="wrapper">
    <ul class="content">
      <li v-for="item in transScroll" class="item">
        <img class="pic" :src="item.url" alt="">
        <p class="name">{{item.name}}</p>
        <div class="price">
          <p class="new">￥{{item.new}}</p>
          <p class="old">￥{{item.old}}</p>
        </div>
      </li>


    </ul>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "TransverseScroller",
    components: {
      BScroll
    },
    props: {
      transScroll: {
        type: Array,
        default() {
          return []
        }

      }
    },
    data() {
      return {
        scroller: {
          type: Object,
          default() {
            return {}
          }
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        let wrapper = document.querySelector('.wrapper')
        this.scroller = new BScroll(wrapper, {
          probeType: 3,
          scrollX: true,
          scrollY: false
        })
      })
    },
  }
</script>

<style scoped>
  .wrapper {

    overflow: hidden;
    width: 100vw;
  }

  .content {
    /*这里定了七个的长度（25+2+2）*7  */
    width: 203vw;
    display: flex;
  }

  .item {
    width: 25vw;
    margin: 2vw;
  }

  .pic {
    width: 25vw;
    height: 25vw;
  }

  .name {
    font-size: 30px;
    margin-top: 1vw;
    line-height: 40px;
    height: 80px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    text-align: left;
  }

  .old {
    text-decoration: line-through
  }

  .new {
    color: red;
  }

</style>