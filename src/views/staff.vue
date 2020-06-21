<template>
  <div>
    <div style="width:98%;background:#fffff;">
      <div style="margin-left:15px;margin-top:20px;">
        <div>
          <el-input
            v-model="searchname"
            placeholder="请输入输入名字"
            style="float:left;width:10%;margin-right:10px"
          ></el-input>
          <el-button type="primary" @click="search" style="float:left;margin-bottom:20px">搜索</el-button>
        </div>
      </div>
      <br />
      <el-table :data="showlist" style="width: 98%;margin-left:1vw;margin-top:vw">
        <el-table-column prop="detailimg" label="照片"></el-table-column>
        <el-table-column prop="detailname" label="姓名"></el-table-column>
        <el-table-column prop="deatilgender" label="性别"></el-table-column>
        <el-table-column prop="detailsize" label="年龄"></el-table-column>
        <el-table-column prop="detailnation" label="民族"></el-table-column>
        <el-table-column prop="detailphone" label="手机号"></el-table-column>
        <el-table-column prop="detaildepartment" label="部门"></el-table-column>
        <el-table-column prop="detailpost" label="职位"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>

            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchname: "",
      tableData: [
        {
          detailimg: "",
          detailname: "小花",
          deatilgender: "女",
          detailsize: "18",
          detailnation: "汉",
          detailphone: "18337813517",
          detaildepartment: "管理层",
          detailpost: "总经理"
        },
        {
          detailimg: "",
          detailname: "小黄",
          deatilgender: "女",
          detailsize: "18",
          detailnation: "汉",
          detailphone: "18337813517",
          detaildepartment: "管理层",
          detailpost: "总经理"
        }
      ],
      showlist: []
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    },
    search() {
      console.log(this.searchname);

      let produce = this.tableData.filter(n => {
        if (n.detailname == this.searchname) {
          return n;
        }
      });
      this.showlist = produce;
      console.log(this.showlist);
    }
  },
  created() {
    this.showlist = this.tableData;
  }
};
</script>
<style scoped>
el-table-column {
  text-align: center;
}
</style>