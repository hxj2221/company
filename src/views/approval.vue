<template>
<div class="approval">
    <div class="approval_header">
      <el-button type="primary" size="mini">全部</el-button>
      <el-button type="warning" size="mini">待审核</el-button>
      <el-button type="primary" size="mini">已通过</el-button>
      <el-button type="danger" size="mini">已拒绝</el-button>
    </div>
    <div class="approval_data">
      <el-table class="table"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="Sponsor"
      label="发起人"
      width="100"
      align="center">
    </el-table-column>
    <el-table-column
      prop="start"
      label="开始时间"
      width="220"
      align="center">
    </el-table-column>
    <el-table-column
      prop="end"
      label="结束时间"
      width="220"
      align="center">
    </el-table-column>
    <el-table-column
      prop="days"
      label="天数"
      align="center">
    </el-table-column>
    <el-table-column
      prop="reason"
      label="原因"
      align="center">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型"
      align="center">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      align="center">
      <el-button type="warning" size="mini">待审核</el-button>
    </el-table-column>
    <el-table-column
      prop="operation"
      label="操作"
      align="center">
      <el-button type="warning" icon="el-icon-edit" size="mini"></el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
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
          Sponsor:'w',
          start:'2020-06-18 00:00:00',
          end:'2020-06-18 18:30:00',
          days:'1',
          reason:'111',
          type:'请假',
          state:'',
          operation:'',
        },
        {
          Sponsor:'w',
          start:'2020-06-18 00:00:00',
          end:'2020-06-18 18:30:00',
          days:'1',
          reason:'111',
          type:'请假',
          state:'',
          operation:'',
        },
      ]
    }
  },
}
</script>
<style scoped>
.approval{
  background-color: #ffffff;
  padding: 0 15px;
}
.approval_header{
  line-height: 43px;
  border-bottom: 1px solid #eeeeee;
  margin-top: 15px;
  padding: 3px;
}

.approval_data{
  font-size: 14px;
  padding: 10px 15px;
}
.approval_data .el-button{
  padding: 7px;
  margin: 0;
}

</style>