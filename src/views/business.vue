<template>
  <div class="head">
    <img src="../assets/images/tianjia.png" alt class="tj" slot="left" />
    <hr />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="ID" label="id" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column prop="Telephone" label="手机号" width="180"></el-table-column>
      <el-table-column prop="weixin" label="微信" width="174"></el-table-column>
      <el-table-column prop="QQ" label="QQ" width="156"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="120"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <a
            href="#"
            @click="handleClick = true"
            style="display:flex;float:left;width:25px; height:5px;margin-top: 5px;margin-left:-20px;padding-left:5px;height:20px;background-color:rgb(0, 150, 136);color:#ffffff"
          >
            <i>+</i>
          </a>
          <a
            href="#"
            @click="handleClick = true"
            style="display:flex;float:left;width:25px; height:5px;margin-top: 5px;margin-left:1px;padding-left:3px;padding-top:3px;height:20px;background-color:rgb(0, 150, 136);color:#ffffff"
          >
            <i class="el-icon-search"></i>
          </a>
          <a
            href="#"
            @click="handleClick = true"
            style="display:flex;float:left;width:25px; height:5px;margin-top: 5px;margin-left:1px;padding-left:5px;padding-top:3px;height:20px;background-color: rgb(255, 184, 0);color:#ffffff"
          >
            <i class="el-icon-edit"></i>
          </a>
          <a
            href="#"
            @click="handleClick = true"
            style="display:flex;float:left;width:25px; height:5px;margin-top: 5px;margin-left:1px;padding-left:3px;height:20px;background-color: rgb(255, 87, 34);color:#ffffff"
          >
            <i style="font-size:6px">放弃</i>
          </a>

          <!-- <el-button type="warning" icon="el-icon-search" @click="handleClick = true" size="mini" style=" float: left"></el-button> -->
          <!-- <el-button type="danger" icon="el-icon-edit" size="mini" style=" float: right"></el-button> -->
          <!-- <el-button icon="el-icon-search" @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          ID: "1",
          name: "王小虎",
          sex: "男",
          age: "20",
          Telephone: "1503786976",
          weixin: 1503786976,
          QQ: 826959266,
          time: "2016-08-08"
        }
      ]
    };
  }
};
</script>
<style scoped>
*a{
  padding-left: 0px;
}
.tj {
  width: 3vw;
}
hr {
  margin-bottom: 1vw;
}
.head {
  margin-left: 1vw;
  background-color: #fff;
  width: 78vw;
}
</style>