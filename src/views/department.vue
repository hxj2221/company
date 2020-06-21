<template>
  <div>
    <div style="width:98%;background:#fffff;">
      <div style="margin-left:15px;margin-top:20px;">
        <el-button type="text" @click="dialogVisible = true">添加</el-button>
        <el-dialog title="修改部门职位" :visible.sync="dialogVisible" width="30%">
          <b style="font-size:16px">名称：</b>
          <el-input v-model="detailname" style="width:60%"></el-input>
          <br />
          <br />
          <br />
          <b style="font-size:16px">类型：</b>
          <el-radio v-model="deatiltype" label="部门"></el-radio>
          <el-radio v-model="deatiltype" label="职位"></el-radio>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addgoods" v-if="show==0">确 定</el-button>
            <el-button type="primary" @click="editgood"  v-if="show==1">确定修改</el-button>
          </span>
        </el-dialog>
      </div>
      <br />
      <el-table :data="showlist" style="width: 98%;margin-left:1vw;margin-top:vw">
        <el-table-column prop="detailid" label="id"></el-table-column>
        <el-table-column prop="detailname" label="名称"></el-table-column>
        <el-table-column prop="deatiltype" label="类型"></el-table-column>
        <el-table-column prop="detailsort" label="排序"></el-table-column>
        <el-button type="warning">警告按钮</el-button>
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
      show:'',
      detailname: "",
      deatiltype: "",
      dialogVisible: false,
      searchname: "",
      tableData: [
        {
          detailid: 1,
          detailname: "小花",
          deatiltype: "部门",
          detailsort: 1
        },
        {
          detailid: 1,
          detailname: "小红",
          deatiltype: "职位",
          detailsort: 1
        }
      ],
      showlist: []
    };
  },
  methods: {
    addgoods() {
      this.show=0
      this.dialogVisible = false;
      console.log(this.deatiltype, this.detailname);
      let a = {
        deatiltype: this.deatiltype,
        detailname: this.detailname,
        detailid: 1,
        detailsort: 2
      };

      this.tableData.push(a);
    },
    handleEdit(index, row) {
      this.show=1
      this.dialogVisible = true;
      console.log(index, row);
     this.deatiltype= row.deatiltype
     this.detailname= row.detailname
    },
    editgood() {
      this.dialogVisible = false;
      let a = {
        deatiltype: this.deatiltype,
        detailname: this.detailname
      };
      this.tableData.splice(1,1,a);
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