<template>
  <div>
    <el-row>
  <el-col :span="24">
 <div class="bg">
           <el-row>
         <el-col :span="1"><div class="grid-content bg-purple"><p class="text">修改密码</p> </div></el-col>
          </el-row>
           <hr style="border:0.5px solid #f6f6f6;">  
            <!-- 当前密码 -->
          <el-row>
   <el-col :span="24"><div class="pwdnow">
     <p>&nbsp;当前密码<span>&nbsp;&nbsp;
         <el-input v-model="passwordinput" placeholder="请输入密码"></el-input>
                </span>
              </p> </div></el-col>
      </el-row>   
       <!-- 当前密码 --> 
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="新密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认新密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
  </el-form-item>
</el-form>
</el-row>
 </div>
 </el-col>
</el-row>
    <!-- 取消  -->
    <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row>
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row><el-row>
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
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  // data(){
  //   return {
  //     input:"",
  //     passwordinput:'',
  //     rpasswordinput:''
  //   }
  // },
  data() {
      // var checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          // age: [
          //   { validator: checkAge, trigger: 'blur' }
          // ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('修改成功!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
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
    width: 1300px;
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
    .el-form {
    margin-top: 5px;  
     position: absolute;
    }
.pwdnow{
  margin-left: 20px;
  margin-top: 30px;
}
</style>