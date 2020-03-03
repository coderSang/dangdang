<template>
  <div class="z_timer">
    <span class="time">{{hour}}</span>
    <span style="font-size: 25px">时</span>
    <span class="time">{{min}}</span>
    <span style="font-size: 25px">分</span>
    <span class="time time_second">{{second}}</span>
    <span style="font-size: 25px">秒</span>
  </div>
</template>

<script>
  export default {
    name: "Timer",
    data() {
      return {
        hour: '02',
        min: '00',
        second: '00'
      }
    },
    methods: {
      fix(num, len) {
        return ('' + num).length < len ?
          ((new Array(len + 1)).join('0') + num).slice(-len) :
          '' + num;
      }
    },
    mounted() {
      setInterval(() => {
        let second = parseInt(this.second)
        let min = parseInt(this.min)
        let hour = parseInt(this.hour)
        if (second === 0 && min === 0 && hour !== 0) {
          hour--
          min = 59
          second = 59
        } else if (second === 0 && min !== 0) {
          min = min - 1
          second = 59
        } else if (second !== 0) {
          second--
        } else {

        }
        this.second = '' + this.fix(second, 2)
        this.min = '' + this.fix(min, 2)
        this.hour = '' + this.fix(hour, 2)
      }, 1000)
    }
  }

</script>

<style scoped>
  .z_timer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 5px 0 5px 0;
  }

  .time {
    background: #323232;
    color: #ffffff;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
  }

  .time_second {
    background: #f3344a;
    color: #fff;
  }
</style>