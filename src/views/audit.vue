<template>
<div class="audit">
  <div class="audit_data">
    <el-table class="data"
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="120"
        align="center">
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
        width="120"
        align="center">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="120"
        align="center">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="140"
        align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="140"
        align="center">
      </el-table-column>
      <el-table-column
        prop="QQ"
        label="QQ"
        align="center">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      tableData:[
        {
          name:'小明',
          gender:'男',
          age:20,
          phone:'13988888888',
          address:'河南省商丘市民权',
          QQ:'672619651',

        }
      ]
    }
  },
}
</script>
<style scoped>
.audit{
  padding: 15px;
  font-size: 14px;
  color: #666666;
  text-align: center;
}
.audit_data{
  padding: 10px 15px;
  background-color: #ffffff;
}
.audit_data .data{
  background-color: #f2f2f2;
}
</style>