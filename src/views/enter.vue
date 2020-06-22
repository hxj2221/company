<template>
<div> 
  <div class="enter-bg">
  <el-row>
  <el-col :span="2"><div class="grid-content bg-purple">
 <el-button type="primary" @click="show" style="margin-top:20px;"><i class="el-icon-plus"></i></el-button>
    </div></el-col>
  <el-col :span="18"><div class="enter-select">
<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </div></el-col>
  <el-col :span="4">
    <div class="enter-input">
    <el-input v-model="input" placeholder="请输入姓名"></el-input>
  </div>
 <div class="enter-button">
<el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
  </el-col>
</el-row>
<hr style="border:0.5px solid #f6f6f6;margin-top:20px;">
<!-- 表格 -->
<el-row>
  <el-col :span="24">
    <div class="">
     <el-table
    :data="tableData"
    border
    style="width:100%;margin-top:30px;">
    <el-table-column property="ImageUrl" label="图片"  width="220" align="center" >
                <template slot-scope="scope">
                  <el-image
                    style="width: 50px; height: 50px;"
                    :src="'http://api.switchyl.online/'+scope.row.ImageUrl">
                  </el-image>
                </template>
              </el-table-column>
  <el-table-column
      prop="name"
      label="姓名"
      width="140"
       align="center"
      >
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="140"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
       width="140"
        align="center"
      >
    </el-table-column>
     <el-table-column
      prop="nation"
      label="民族"
      width="140"
       align="center"
      >
    </el-table-column>
    <el-table-column
      prop="tel"
      label="手机号"
      width="140"
       align="center"
      >
    </el-table-column>
    <el-table-column
      prop="department"
       label="部门"
       width="140"
        align="center"
      >
    </el-table-column>
    <el-table-column
      prop="job"
      label="职位"
       width="140"
        align="center"
      >
      </el-table-column>
      <el-table-column
      prop="operation"
      label="操作"
       width="150"
        align="center"
      >
      <el-row>
  <el-col :span="8"><div class="table-button">
    <el-button type="primary" @click="look"><i class="el-icon-search"></i></el-button>
    </div></el-col>
    <el-col :span="8"><div class="table-edit">
  <el-button type="primary" @click="edit">   
<i class="el-icon-edit"></i></el-button>
    </div></el-col>
    <el-col :span="8"><div class="table-del">
       <el-button type="primary"  @click.native.prevent="deleteRow($index, tableData)"> <i class="el-icon-delete"></i></el-button>
    </div></el-col> 
</el-row>
    </el-table-column>
  </el-table>  

  <!-- 弹框 -->
  <el-dialog  class="allTable"
  title="录入员工信息"
  :visible.sync="dialogVisible"
  width="40%"
>
   <el-row>
 <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <div class="con">
              <p>
               姓名
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <el-input v-model="winput" placeholder="请输入您的姓名"></el-input>
                  
                </span>
              </p>
            </div>
          </div>
        </el-col>
         </el-row>
        <!-- 照片 -->
         <el-row>
  <el-col :span="24"><div class="enter-photo">
    <div class="text">
      <p>照片</p>
    </div>
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
    </div></el-col>
</el-row>   
<!-- 身份证   -->
<div class="con-second">
                  <p>
                    身份证号
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <el-input v-model="sinput" placeholder="请输入身份证号码"></el-input>
                    </span>
                  </p>
                </div>
                <!-- 民族 -->
                <div class="con-second">
                  <p> &nbsp;&nbsp;&nbsp;&nbsp;
                   民族
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-input v-model="minput" placeholder="请输入民族"></el-input>
                    </span>
                  </p>
                </div>
                
                <!-- 学历 -->
                 <div class="con-three">
              <p class="text-second">&nbsp;&nbsp;&nbsp;学历 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-select v-model="studyvalue" placeholder="请选择">
    <el-option
      v-for="item in study"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>
 </div>

<!-- 电话 -->
<div class="con-second">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    电话
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-input v-model="sinput" placeholder="请输入电话号码"></el-input>
                    </span>
                  </p>
                </div>
                <!-- 年龄 -->
<div class="con-second">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    年龄
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-input v-model="ageinput" placeholder="请输入年龄"></el-input>
                    </span>
                  </p>
                </div>
           <!-- 性别 -->
       <div class="con-second"> 
         <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio></p>   
    </div>  
    <!-- 密码 -->
<div class="con-second">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    密码
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-input v-model="pinput" placeholder="请输入密码"></el-input>
                    </span>
                  </p>
                </div>
                <!-- 地址 -->
<div class="con-second">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    地址
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-input v-model="addressinput" placeholder="请输入地址"></el-input>
                    </span>
                  </p>
                </div>   

                <!-- 所属部门 -->
                 <div class="con-three">
              <p class="text-second">所属部门&nbsp;&nbsp;&nbsp;&nbsp;
        <el-select v-model="doorvalue" placeholder="请选择">
    <el-option
      v-for="item in study"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>
 </div>
             <!-- 职位 -->
              <div class="con-three">
              <p class="text-second">&nbsp;&nbsp;&nbsp;职位 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <el-select v-model="jobvalue" placeholder="请选择">
    <el-option
      v-for="item in study"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>
 </div>

 <!-- 所属用户组 -->
                 <div class="con-three">
              <p class="text-second">所属用户组
        <el-select v-model="teamvalue" placeholder="请选择">
    <el-option
      v-for="item in study"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>
 </div>
 <div  class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @row-click="dialogVisible = false">添 加</el-button>
 </div>
</el-dialog>
    </div></el-col>
</el-row>
</div>
  </div>
</template>
<script>
  export default {
    components:{},
    props:{},
    data() {
      return {
        tableData: [
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
],
         options: [{
          value: '选项1',
          label: '——请选择——'
        }, {
          value: '选项2',
          label: '销售'
        }, {
          value: '选项3',
          label: '人资'
        }],
         study: [{
          value: '选项1',
          label: '——请选择——'
        }, {
          value: '选项2',
          label: '大专'
        }, {
          value: '选项3',
          label: '本科'
        }, {
          value: '选项4',
          label: '专科'
        }, {
          value: '选项5',
          label: '博士'
        }],
        studyvalue: '',
         dialogVisible: false,
        value: '',
        input:'',
        imageUrl: '',
       winput:"",
        sinput:'',
        minput:'',
        radio:'男',
        ageinput:'',
        addressinput:'',
        pinput:'',
        doorvalue:'',
        jobvalue:'',
        teamvalue:'',
        
      }
    },
    methods: {
     show(){
      this.dialogVisible=true;
     },
      look(){
      this.dialogVisible=true;
     },
      edit(){
      this.dialogVisible=true;
     },
deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file){
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style lang="less">
.enter-bg{
    background:#fff;
    line-height: 8px;
    margin-top: 20px;
    }
  .enter-select {
    margin-left:86%;
    width: 30%;
    margin-top: 20px;
  }
.enter-input .el-input{
    width: 50%;
    margin-top: 20px;
}
.enter-button .el-button{
  position: absolute;
  margin-top: -40px;
  margin-left:58%;
  position: absolute;
}
.enter-button{
  position: relative;
}
.table-button .el-button{
    width: 10%;
    height: 10%;
    line-height: 10px;
    margin: 0 auto; 
    background: #009688;
    color: #FFFFFF;
    font-size: 14px;
}
.table-button i{
 display: flex;
 justify-content: center;
}
.table-edit .el-button{
    width: 8%;
    height: 8%;
    line-height: 10px;
    margin: 0 auto; 
    background: #ffb800;
    color: #FFFFFF;
    font-size: 14px;
     border: 0;
   }
.table-edit i{
 display: flex;
 justify-content: center;
} 
.table-del .el-button{
    width: 10%;
    height: 10%;
    line-height: 10px;
    margin: 0 auto; 
    background: #ff5722;
    color: #FFFFFF;
    font-size: 14px;
    border: 0;
   }
.table-del i{
 display: flex;
 justify-content: center;
} 
.con p {
 font-size: 16px;
 margin-left: 80px;
}
.el-input {
  width: 180px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
 
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .avatar-uploader{
  border:1px dashed rgb(109, 108, 108);
   width: 100px;
 height: 100px;
 margin-left:150px;
 margin-top:30px;
  }
  .enter-photo{
    position: relative;
  }
   .text{
 margin-left:80px; 
margin-top:10px;
position: absolute;
  }
  .con-second{
     font-size: 16px;
 margin-left: 60px;
 margin-top:30px;
  }
  
   .text-second{
margin-left:70px; 
margin-top:30px;
font-size: 16px;
 }
 
 .el-input {
   width: 60%;
 }
.con-three .el-select{ 
     width: 61%;
  }
.allTable {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: Center;
  overflow: hidden;
  .el-dialog {
    margin: 20 auto !important;
    height: 70%;
    overflow: hidden;
    .el-dialog__body {
      position: absolute;
      left: 0;
      top: 54px;
      bottom: 0;
      right: 0;
      padding: 0px 20px;
      z-index: 1;
      overflow: hidden;
      overflow-y: auto;
    }
  }
}
.dialog-footer{
margin-left:400px;
margin-top: 50px;
margin-bottom: 20px;
 }
.el-image{
  margin-left: 60px;
}
</style>