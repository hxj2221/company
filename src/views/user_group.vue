<template>
<div>
  <template>
<div> 
  <div class="userGroup-bg">
  <el-row>
  <el-col :span="24"><div class="grid-content bg-purple">
 <el-button type="primary" @click="userGroupShow" style="margin-top:20px;"><i class="el-icon-plus"></i></el-button>
    </div></el-col>
</el-row>
<hr style="border:0.5px solid #f6f6f6;margin-top:20px;">
<!-- 表格 -->
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
     <el-table
    :data="tableData"
    border
    style="width:100%;margin-top:30px;">
  
    <el-table-column
      prop="id"
      label="id"
      width="140"
       align="center"
      >
    </el-table-column>
    <el-table-column
      prop="group"
      label="用户组名"
      width="140"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="qx"
      label="权限"
       width="910"
        align="center"
      >
    </el-table-column>
     <el-table-column
      prop="operation"
      label="操作"
      width="160"
       align="center"
      >
      <el-row>
    <el-col :span="12"><div class="table-edit">
  <el-button type="primary" @click="userGroupEdit">   
<i class="el-icon-edit"></i></el-button>
    </div></el-col>
    <el-col :span="12"><div class="table-del">
       <el-button type="primary"  @click.native.prevent="delUserGroupRow($index, tableData)"> <i class="el-icon-delete"></i></el-button>
    </div></el-col> 
</el-row>
    </el-table-column>
  </el-table>  
  <!-- 弹框 -->
  <el-dialog  class="allTable"
  title="添加用户组"
  :visible.sync="dialogVisible"
  width="40%"
>

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
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
       tableData: [
        {
          id: '1',
          group: '销售经理',
          qx:'63,43,40,13,39,12,10,51,65,42,18,41,17,69,68,67,66,11',
          operation:'',
        },
        {
          id: '1',
          group: '销售经理',
          qx:'63,43,40,13,39,12,10,51,65,42,18,41,17,69,68,67,66,11',
          operation:'',
        }],
          dialogVisible: false, 

    }
  },
  methods:{
   delUserGroupRow(index, rows) {
        rows.splice(index, 1);
      },
       userGroupShow(){
      this.dialogVisible=true;
     },

  }
}
</script>
<style lang="less">
.userGroup-bg{
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
</style>