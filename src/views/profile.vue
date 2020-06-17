<template>
<div class="head">
  <p>设置我的资料</p>
  <hr>
  <h5>照片</h5>
 <el-upload
  class="avatar-uploader"
  action="http://localhost:8082/git"
  :show-file-list="false"
@success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="姓名">
    <el-input v-model="formLabelAlign.name" class="texts"></el-input>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="性别">
    <el-input v-model="formLabelAlign.sex" class="texts"></el-input>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="年龄">
    <el-input v-model="formLabelAlign.Age" class="texts"></el-input>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="身份证号">
    <el-input v-model="formLabelAlign.ID" class="texts"></el-input>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="民族">
    <el-input v-model="formLabelAlign.nation" class="texts"></el-input>
  </el-form-item>
</el-form>

<el-form :inline="true" :model="formLabelAlign" label-width="80px">
  <el-form-item label="活动区域">
    <el-select v-model="formLabelAlign.region" class="texts">
      <el-option label="大专" value="dazhuan"></el-option>
      <el-option label="本科" value="benke"></el-option>
      <el-option label="研究生" value="yanjiusheng"></el-option>
      <el-option label="博士" value="boshi"></el-option>
    </el-select>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="所属部门">
    <el-input v-model="formLabelAlign.department" class="texts"></el-input>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="职务">
    <el-input v-model="formLabelAlign.post" class="texts"></el-input>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="电话">
    <el-input v-model="formLabelAlign.Telephone" class="texts"></el-input>
  </el-form-item>
</el-form>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
 <el-form-item label="地址">
    <el-input v-model="formLabelAlign.address" class="texts"></el-input>
  </el-form-item>
   <el-form-item class="Buttons">
    <el-button type="primary" @click="onSubmit">修改</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
 
</div>
</template>


<script>
  export default {
    data() {
      return {
        imageUrl: '',
        labelPosition:'',
          formLabelAlign: {
          name: '',
              region: ''
          },
           
      };
    },
    methods: {
      // handleAvatarSuccess(res,file) {
      
      //   console.log(res)
      // },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        // const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        // if (!isLt2M) {
        //   this.$message.error('上传头像图片大小不能超过 2MB!');
        // }
        // return isJPG && isLt2M;
           console.log(file)
           this.imageUrl=file.name
      },
       onSubmit() {
        console.log('submit!');
      }
  }
  }
</script>
<style scoped>
.head{
  background-color: #fff;
  width: 90%;
  margin-left: 1vw;
  margin-top: 1vw;
}
p{
  margin-bottom: 1vw;
  margin-left: 1vw;
 padding-top: 1vw;
}
hr{
  margin-bottom: 1vw;
}
h5{
  float: left;
  margin-top: 6vw;
  margin-left: 2vw;
  margin-right: 2vw;
}
.el-icon-plus{
  border: 1.5px dashed rgb(185, 185, 175);
  margin-left: 2vw;
  margin-bottom: 2vw;
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .texts{
    width: 20vw;
  }
  .Buttons{
    float: right;
  }
</style>