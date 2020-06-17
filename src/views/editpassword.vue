<template>
<div>
      <div class="bg">
         <el-row>
         <el-col :span="1"><div class="grid-content bg-purple"><p class="text">修改密码</p> </div></el-col>
         <!-- <el-col :span="23"><div class="grid-content bg-purple"></div></el-col> -->
          </el-row>
           <hr style="border:0.5px solid #f6f6f6;">  
           <el-row>
         <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
         <!-- <el-col :span="23"><div class="grid-content bg-purple"></div></el-col> -->
          </el-row>
    <el-row>
   <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="22">
        <div class="grid-content bg-purple"> 
        <p>当前密码：<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <el-input v-model="input" placeholder="请输入密码"></el-input>
                </span>
              </p> 
        
        </div></el-col> 
         </el-row>   
       <!-- 当前密码 --> 
       <!-- 新密码 -->
          <el-row>
   <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="22">
        <div class="grid-content bg-purple"> 
        <p>新密码：<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <el-input v-model="passwordinput" placeholder="请输入密码"></el-input>
                </span>
              </p> 
        </div></el-col> 
           </el-row>   
       <!-- 新密码 --> 
      
      <!-- 确认新密码 -->
         <el-row >
   <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="22">
        <div class="grid-content bg-purple"> 
        <p>确认新密码：<span>&nbsp;
         <el-input v-model="rpasswordinput" placeholder="请输入密码"></el-input>
                </span>
              </p> 
        </div></el-col>  
           </el-row>  
       <!--确认新密码 --> 
   <!--修改 --> 
   <el-row>
<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
 <el-col :span="20">
   <div class="btn">
  
  <el-button type="primary" style="background:#009688;border:none;">修改</el-button>
 
   </div></el-col>
      </el-row>
 <!--修改 --> 
  <!--取消 -->
   <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
 <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
 <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
 <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
 <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>

  <el-row>
  <el-col :span="22"><div class="grid-content bg-purple-dark"></div></el-col>
  <el-col :span="2">
    <div class="buttons">
     <el-row>
  <el-button>取消</el-button>
</el-row>
</div></el-col>
</el-row>
  <!--取消 --> 
      </div> 

      <!-- 222222 -->
  
   
</div> 
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      input:"",
      passwordinput:'',
      rpasswordinput:''
    }
  },
}
</script>
<style scoped>
 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

.el-input {
  width: 180px;
}
.bg{
    width: 1800px;
    height: 355px;
    background:#fff;
    position: relative;
    line-height: 8px;
    margin-top: 20px;
    }
 .text{
  margin-left: 20px;
  margin-top: 30px;
  position: absolute;
    }

</style>