<template>
<div class="leave">
    <div class="leave_header clearfix">
      <el-button class="addbut" type="primary" size="mini" icon="el-icon-plus"></el-button>
      <div class="block">
        <el-date-picker class="selectdate"
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      <el-button class="searchbut head" type="primary" size="mini">搜索</el-button>
    </div>
    </div>
    <div class="leave_data">
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
.leave{
  background-color: #ffffff;
  padding: 0 15px;
}
.leave_header{
  line-height: 43px;
  border-bottom: 1px solid #eeeeee;
  margin-top: 15px;
  padding: 3px;
}
.block{
float: right;
}
.selectdate{
  margin-right: 5px;
  width: 400px;
}

.leave_data{
  font-size: 14px;
  padding: 10px 15px;
}
.leave_data .el-button{
  padding: 7px;
  margin: 0;
}


.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }
</style>