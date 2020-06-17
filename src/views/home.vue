<template>
<div class="home">
    <!-- 欢迎 -->
    <div class="home_header">
      <div class="home_name">欢迎员工：陈晨熙！</div>
    </div>
    <!-- 开发者 -->
    <div></div>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
}
</script>
<style scoped>
.home{
  margin: 10px;
}
.home_header{
  background-color: #ffffff;
  padding: 10px 15px;
  margin-bottom: 15px;
}
.home_name{
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: #F5F5F5;
  color: #666666;
  border-left: 5px solid #009688;
}
</style>