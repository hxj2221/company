<template>
  <div class="head">
    <el-table :data="tableData" border style="width: 95%">
      <el-table-column fixed prop="ID" label="id" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column prop="Telephone" label="手机号" width="160"></el-table-column>
      <el-table-column prop="weixin" label="微信" width="160"></el-table-column>
      <el-table-column prop="QQ" label="QQ" width="160"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="100"></el-table-column>
      <el-table-column prop="people" label="创建人" width="105"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <!-- <el-button type="warning" icon="el-icon-edit" @click="dialogVisible = true" size="mini" class="buttonn"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button> -->
           <a href="#"  @click="dialogVisibles = true" style="display:flex;float:left;width:30px; height:15px;padding-top:8px;padding-left:8px;height:30px;background-color: #FFB800;color:#ffffff"><i class="el-icon-search"></i></a>
            <a href="#" @click="dialogVisibles = true" style="display:flex;float:left;width:30px; height:15px;padding-top:4px;padding-left:4px;height:30px;background-color: #1E9FFF;color:#ffffff"><i style="font-size:6px">申领</i></a>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="修改请假申请"
      :visible.sync="dialogVisible"
      width="30%"
     
      class="allTable"
    >
      <p class="dialog_start clearfix">
        <span>用户ID</span>
        <el-input v-model="id" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>姓名</span>
        <el-input v-model="name" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>年龄</span>
        <el-input v-model="age" class="input"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>地址</span>
        <el-input v-model="address" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>电话</span>
        <el-input v-model="Telephone" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>微信</span>
        <el-input v-model="weixin" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>QQ</span>
        <el-input v-model="qq" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>创建人</span>
        <el-input v-model="creater" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>创建时间</span>
        <el-input v-model="CreateTime" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span>所属</span>
        <el-input v-model="suoshu" class="inputs"></el-input>
      </p>
      <!-- <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
    </el-dialog>
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
          time: "2016-08-08 20:14:24",
          people: "王二乎"
        }
      ],
      dialogVisible: false,
      id: "",
      name: "",
      age: "",
      address: "",
      Telephone: "",
      weixin: "",
      qq: "",
      creater: "",
      CreateTime: "",
      suoshu: ""
    };
  },
  // methods: {
  //   handleClose(done) {
  //     this.$confirm("确认关闭？")
  //       // eslint-disable-next-line no-unused-vars
  //       .then(_ => {
  //         done();
  //       })
  //       // eslint-disable-next-line no-unused-vars
  //       .catch(_ => {});
  //   }
  // }
};
</script>
<style  lang="less">
.head {
  margin-top: 1vw;
  margin-left: 1vw;
}

.inputs {
  width: 18vw;
  margin-left: 1vw;
  margin-bottom: 1vw;
}
.inputss {
  margin-right: 1vw;
}
.input {
  width: 18vw;
  margin-left: 1vw;
  margin-bottom: 1vw;
  margin-top: 1vw;
  
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
.buttonn{
  float: left;}
</style>