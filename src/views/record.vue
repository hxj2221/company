<template>
  <div>
    <div style="width:98%;background:#fffff;">
      <div style="margin-left:15px;margin-top:20px;">
        <el-button type="primary">近一个月</el-button>
        <el-button type="primary">近一星期</el-button>
        <el-button type="primary">当天</el-button>

        <div style="float:right;">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="请选择日期时间"
            value-format="yyyy-MM-dd"
          ></el-date-picker>——
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="请选择日期时间"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-button type="primary" @click="search">搜索</el-button>
        </div>
      </div>
      <el-table :data="showlist" style="width: 98%;margin-left:1vw;margin-top:1vw">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          username: "小仙女",
          clocktime: "2020-06-09",
          up_uptime: "",
          up_downtime: "",
          down_uptime: "",
          down_downtime: "",
          up: "",
          down: ""
        },
        {
          username: "小仙女",
          clocktime: "2020-06-18",
          up_uptime: "",
          up_downtime: "",
          down_uptime: "",
          down_downtime: "",
          up: "",
          down: ""
        },
        {
          username: "小仙女",
          clocktime: "2020-06-20",
          up_uptime: "",
          up_downtime: "",
          down_uptime: "",
          down_downtime: "",
          up: "",
          down: ""
        }
      ],
      value1: "",
      value2: "",
      showlist: []
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    search() {
      console.log(this.value1);
      //判断value1，value2的值为空的话就将list的值赋给showlist
      if (
        (this.value1 == "" || this.value1 == null) &&
        (this.value2 == "" || this.value2 == null)
      ) {
        this.showlist = this.tableData;
      }
      //判断value2的值为空的话就将大于value1的值赋给showlist
      else if (
        this.value1 !== "" &&
        (this.value2 == "" || this.value2 == null)
      ) {
        let produce = this.tableData.filter(n => {
          if (n.clocktime > this.value1) {
            return n;
          }
        });
        this.showlist = produce;
        console.log(this.showlist);
      }
      //判断value1的值为空的话就将小于value2的值赋给showlist
      else if (
        (this.value1 == "" || this.value1 == null) &&
        this.value2 !== ""
      ) {
        let produce = this.tableData.filter(n => {
          if (n.clocktime < this.value2) {
            return n;
          }
        });
        this.showlist = produce;
      }
      //判断value1，value2的值都不为空的话就将他们之间的值赋给showlist
      else {
        let produce = this.tableData.filter(n => {
          if (n.clocktime > this.value1 && n.clocktime < this.value2) {
            return n;
          }
        });
        this.showlist = produce;
      }
    }
  },
  created() {
    this.showlist = this.tableData;
  }
};
</script>
<style scoped>
</style>