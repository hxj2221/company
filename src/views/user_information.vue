<template>
  <div class="head">
    <img src="../assets/images/tianjia.png" alt class="tj" slot="left" />
    <hr />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="ID" label="id" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column prop="Telephone" label="手机号" width="160"></el-table-column>
      <el-table-column prop="weixin" label="微信" width="160"></el-table-column>
      <el-table-column prop="QQ" label="QQ" width="160"></el-table-column>
      <el-table-column prop="time" label="创建时间" width="120"></el-table-column>
      <el-table-column prop="people" label="创建人" width="105"></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template>
          <!-- <el-button type="warning" icon="el-icon-search" @click="dialogVisibles = true" size="mini" style=" float: left"></el-button>
          <el-button type="danger" icon="el-icon-edit" size="mini" style=" float: right"></el-button> -->
             <a href="#"  @click="dialogVisibles = true" style="display:flex;float:left;width:30px; height:15px;padding-top:8px;padding-left:8px;height:30px;background-color: #009688;color:#ffffff"><i class="el-icon-search"></i></a>
            <a href="#" @click="dialogVisibles = true" style="display:flex;float:left;width:30px; height:15px;padding-top:8px;padding-left:8px;height:30px;background-color: #FFB800;color:#ffffff"><i class="el-icon-edit"></i></a>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改用户信息" :visible.sync="dialogVisibles" width="30%" :before-close="good">
      <p class="dialog_start clearfix">
        <span>姓名</span>
        <el-input v-model="name" class="inputs"></el-input>
      </p>
      <p class="dialog_start clearfix">
        <span class="inputss">性别</span>
        <el-radio v-model="sex" label="1">男</el-radio>
        <el-radio v-model="sex" label="2">女</el-radio>
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
      <el-button @click="dialogVisibles = false">取 消</el-button>
      <!-- <el-button type="primary" @click="dialogVisibles = false">确 定</el-button> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      radio: "1",
      tableData: [
        {
          ID: "1",
          name: "王大虎",
          sex: "男",
          age: "20",
          Telephone: "1503786976",
          weixin: 1503786976,
          QQ: 826959276,
          time: "2016-08-08",
          people: "王二乎"
        },
        {
          ID: "2",
          name: "王小虎",
          sex: "男",
          age: "20",
          Telephone: "1503786976",
          weixin: 1503786976,
          QQ: 826959276,
          time: "2016-08-08",
          people: "王二乎"
        },
        {
          ID: "3",
          name: "王小虎",
          sex: "男",
          age: "20",
          Telephone: "1503786976",
          weixin: 1503786976,
          QQ: 826959276,
          time: "2016-08-08",
          people: "王二乎"
        },
        {
          ID: "4",
          name: "王小虎",
          sex: "男",
          age: "20",
          Telephone: "1503786976",
          weixin: 1503786976,
          QQ: 826959276,
          time: "2016-08-08",
          people: "王二乎"
        }
      ],
      dialogVisibles: false,
     name: "",
      sex: "",
      age: "",
      address: "",
      Telephone: "",
      weixin: "",
      qq: "",
    };
  },
  methods: {
    // good(done) {
    //   this.$confirm("确认关闭？")
    //     .then(_ => {
    //       done();
    //     })
    //     .catch(_ => {});
    // }
  }
}
</script>
<style scoped>
.head {
  margin-top: 1vw;
  margin-left: 1vw;
}
.tj {
  width: 3vw;
}
hr {
  margin-bottom: 1vw;
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
</style>