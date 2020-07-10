<template>
  <div class="leave">
    <div class="leave_header clearfix">
      <el-button
        class="addbut"
        @click="add = true"
        type="primary"
        size="mini"
        icon="el-icon-plus"
      ></el-button>

      <el-dialog title="请假申请" :visible.sync="add" width="30%" :before-close="addto">
        <p class="dialog_start clearfix">
        <span>开始时间</span>
        <span class="inp">
          <el-date-picker
            v-model="addlist.ksj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          ></el-date-picker>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>结束时间</span>
        <span class="inp">
          <el-date-picker
            v-model="addlist.jsj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          ></el-date-picker>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>天数</span>
        <span class="inp">
          <el-input v-model="addlist.ts" placeholder="请输入内容"></el-input>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>类型</span>
        <span class="inp">
          <el-radio v-model="addlist.type" label="1">请假</el-radio>
          <el-radio v-model="addlist.type" label="2">外出</el-radio>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>原因</span>
        <span class="inp">
          <el-input type="textarea" v-model="addlist.yy"></el-input>
        </span>
      </p>
      <span slot="footer">
        <el-button @click="add = false">取 消</el-button>
        <el-button type="primary" @click="tianjia">确 定</el-button>
      </span>
      </el-dialog>

      <div class="block">
        <el-date-picker
          class="selectdate"
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-button class="searchbut head" type="primary" size="mini">搜索</el-button>
      </div>
    </div>
    <div class="leave_data">
      <el-table
        class="table"
        :data="tableData"
        type="index"
        @row-click="ccc"
        border
        style="width: 100%"
      >
        <el-table-column prop="g_name" label="发起人" width="100" align="center"></el-table-column>
        <el-table-column prop="j_ksj" label="开始时间" width="220" align="center"></el-table-column>
        <el-table-column prop="j_jsj" label="结束时间" width="220" align="center"></el-table-column>
        <el-table-column prop="j_ts" label="天数" align="center"></el-table-column>
        <el-table-column prop="j_yy" label="原因" align="center"></el-table-column>
        <el-table-column prop="j_type" label="类型" align="center"></el-table-column>
        <el-table-column prop="j_zt" label="状态" align="center"></el-table-column>
        <el-table-column prop="operation" label="操作" align="center">
          <el-button type="warning" icon="el-icon-edit" @click="dialogVisible = true" size="mini"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(index)" size="mini"></el-button>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="修改请假申请" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <p class="dialog_start clearfix">
        <span>开始时间</span>
        <span class="inp">
          <el-date-picker
            v-model="tablelist.j_ksj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          ></el-date-picker>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>结束时间</span>
        <span class="inp">
          <el-date-picker
            v-model="tablelist.j_jsj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          ></el-date-picker>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>天数</span>
        <span class="inp">
          <el-input v-model="tablelist.j_ts" placeholder="请输入内容"></el-input>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>类型</span>
        <span class="inp">
          <el-radio v-model="tablelist.j_type" label="请假">请假</el-radio>
          <el-radio v-model="tablelist.j_type" label="外出">外出</el-radio>
        </span>
      </p>
      <p class="dialog_start clearfix">
        <span>原因</span>
        <span class="inp">
          <el-input type="textarea" v-model="tablelist.j_yy"></el-input>
        </span>
      </p>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getleave,addleave } from "../network/leave/leave.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      tablelist: [],
      dialogVisible: false,
      add:false,
      addlist:{
        ksj:'',
        jsj:'',
        ts:'',
        yy:'',
        type:''
      }
    };
  },
  methods: {
    addto(done) {
      this.$confirm("确认关闭？")
        // eslint-disable-next-line no-unused-vars
        .then(_ => {
          done();
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_ => {});
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        // eslint-disable-next-line no-unused-vars
        .then(_ => {
          done();
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_ => {});
    },
    ccc(row, column, event) {
      console.log(column);
      console.log(event);
      this.tablelist = row;
      console.log(row);
    },
    del(index) {
      this.tableData.splice(index, 1);
      console.log(index);
    },
    tianjia(){
      let j_ygid = this.$store.state.uid
      let j_ksj=this.addlist.ksj
      let j_jsj=this.addlist.jsj
      let j_ts=this.addlist.ts
      let j_yy=this.addlist.yy
      let j_type=this.addlist.type
      this.add=false
      let j_add={
        j_ygid,
        j_ksj,
        j_jsj,
        j_ts,
        j_yy,
        j_type
      }
      console.log(j_add)
      addleave(j_add).then(res=>{
        console.log(res)
      })
      //location.reload()
    }
  },
  created() {
    getleave(this.$store.state.uid).then(res => {
      console.log(res);
      this.tableData = res.data.data;
    });
  }
};
</script>
<style scoped>
.leave {
  background-color: #ffffff;
  padding: 0 15px;
}
.leave_header {
  line-height: 43px;
  border-bottom: 1px solid #eeeeee;
  margin-top: 15px;
  padding: 3px;
}
.block {
  float: right;
}
.selectdate {
  margin-right: 5px;
  width: 400px;
}

.leave_data {
  font-size: 14px;
  padding: 10px 15px;
}
.leave_data .el-button {
  padding: 7px;
  margin: 0;
}
.dialog_start span {
  display: block;
  margin-right: 10px;
  width: 20%;
  line-height: 40px;
  float: left;
  margin-bottom: 10px;
}
.dialog_start .inp {
  width: 60%;
}

.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
</style>