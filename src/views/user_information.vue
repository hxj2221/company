<template>
<div class="head">
      <img src="../assets/images/tianjia.png" alt="" class="tj" slot="left">
      <hr>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="ID"
      label="id"
      width="60">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
      prop="Telephone"
      label="手机号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="weixin"
      label="微信"
      width="180">
    </el-table-column>
     <el-table-column
      prop="QQ"
      label="QQ"
      width="170">
    </el-table-column>
     <el-table-column
      prop="time"
      label="创建时间"
      width="120">
    </el-table-column>
     <el-table-column
      prop="people"
      label="创建人"
      width="105">
    </el-table-column>


    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template>
        <el-button @click="open" type="text" size="small">查看</el-button>
        <el-button type="text" @click="open" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
     methods: {
      open() {
        this.$prompt('修改用户信息', {

        }).then(() => {
          this.$message({
       
            message: '修改成功啦'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
          
          });       
        });
      }
    },
 
  components:{},
  props:{},
  data(){
    return {
        tableData: [{
          ID: '1',
          name: '王小虎',
          sex: '男',
          age: '20',
          Telephone: '1503786976',
          weixin: 1503786976,
           QQ:826959276,
          time:'2016-08-08',
          people:'王二乎'
        }, {
          ID: '2',
          name: '王小虎',
          sex: '男',
          age: '20',
          Telephone: '1503786976',
          weixin: 1503786976,
           QQ:826959276,
          time:'2016-08-08',
          people:'王二乎'
        }, {
          ID: '3',
          name: '王小虎',
          sex: '男',
          age: '20',
          Telephone: '1503786976',
          weixin: 1503786976,
           QQ:826959276,
          time:'2016-08-08',
          people:'王二乎'
        }, {
          ID: '4',
          name: '王小虎',
          sex: '男',
          age: '20',
          Telephone: '1503786976',
          weixin: 1503786976,
           QQ:826959276,
          time:'2016-08-08',
          people:'王二乎'
        }]
      }
    
  },
}
</script>
<style scoped>
.head{
  margin-top: 1vw;
  margin-left: 1vw;
}
.tj{
  width:3vw;
}
hr{
  margin-bottom: 1vw;
}
</style>