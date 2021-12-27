<template>
  <div id="index" :style="{backgroundImage:'url('+require('/public/index/back.png')+')'}">
    <el-container>
      <el-header height="20px">
        <p style="float: left; font-size: 15px; margin-top: 5px; padding-top: 0;margin-left: 0;padding-left: 5px;">{{date_info|formatTime}} - {{week}}</p>
        <p style="width: 100px; margin: 0 auto;">{{form.org_name}}</p>
        <img src="../../../public/images/幼信通logo.png" alt="未显示" style="height: 40px; float: right">
        <img src="../../../public/images/欧啦logo(左右）.png" alt="未显示" style="height: 30px; float: right; padding-top: 5px">
      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "index",

  data() {
    return {
      date_info: new  Date(),
      week: '',
      form: {
        org_name: '比力星球托育园'
      }
    }
  },

  mounted() {
    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date_info = new Date(); // 修改数据date
    }, 1000)
    let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    let wk = new Date().getDay()
    this.week = weeks[wk]
  },

  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },

  filters:{
    formatTime(val){
      return dayjs(val).format('YYYY-MM-DD hh:mm:ss')
    }
  }
}
</script>

<style scoped lang="less">
#index {
  height: 100%;
  width: 100%;
  background-repeat:no-repeat;
  background-size:100%;
  position: fixed;

  .el-header {
    padding-left: 0;

  }
}
</style>