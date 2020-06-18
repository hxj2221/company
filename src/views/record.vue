<template>
  <div>
    <el-button type="primary"  style="margin-left:15px">近一个月</el-button>
    <el-button type="primary">近一星期</el-button>
    <el-button type="primary">当天</el-button>

    <div style="float:right">
      <el-date-picker v-model="value1" type="date" style="width:30%"></el-date-picker>-
      <el-date-picker v-model="value1" type="date" style="width:30%"></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table :data="tableData" style="width: 98%;margin-left:1vw;margin-top:1vw">
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="clocktime" label="时间"></el-table-column>
      <el-table-column prop="up_uptime" label="上午上班时间"></el-table-column>
      <el-table-column prop="up_downtime" label="上午下班时间"></el-table-column>
      <el-table-column prop="down_uptime" label="下午上班时间"></el-table-column>
      <el-table-column prop="down_downtime" label="下午下班时间"></el-table-column>
      <el-table-column prop="up" label="上午"></el-table-column>
      <el-table-column prop="down" label="下午"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          username: "小仙女",
          clocktime: "2020-03-09",
          up_uptime: "2020-03-09",
          up_downtime: "2020-03-09",
          down_uptime: "2020-03-09",
          down_downtime: "2020-03-09",
          up: 4,
          down: 8
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
</style>