<template>
  <div>
    <div style="width:98%;background:#fffff;">
      <div style="margin-left:15px;margin-top:20px;">
        <!-- <el-button type="text" >添加</el-button> -->

        <div
          @click="dialogVisible = true"
          style="background-color: #009688;color:#ffffff;width:50px;height:40px;border-radius:5px;padding-left:13px;padding-top:8px"
        >
          <i class="el-icon-plus" style="font-size:20px;"></i>
        </div>
        <el-dialog title="添加部门职位" :visible.sync="dialogVisible" width="30%" v-if="show==0">
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
          </span>
        </el-dialog>
        <el-dialog title="修改部门职位" :visible.sync="dialogVisible" width="30%" v-if="show==1">
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
            <el-button type="primary" @click="editgood">确定修改</el-button>
          </span>
        </el-dialog>
      </div>
      <br />
      <el-table :data="showlist" style="width: 98%;margin-left:1vw;margin-top:vw">
        <el-table-column prop="detailid" label="id"></el-table-column>
        <el-table-column prop="detailname" label="名称"></el-table-column>
        <el-table-column prop="deatiltype" label="类型"></el-table-column>
        <el-table-column prop="detailsort" label="排序"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="handleEdit(scope.$index, scope.row)"
            ></el-button>-->
            <a
              href="#"
              @click="handleEdit(scope.$index, scope.row)"
              style="display:flex;float:left;width:30px; height:15px;padding-top:8px;padding-left:8px;height:30px;background-color: #FFB800;color:#ffffff"
            >
              <i class="el-icon-edit"></i>
            </a>
            <a
              href="#"
              @click="handleDelete(scope.$index, scope.row)"
              style="display:flex;float:left;width:30px; height:15px;padding-top:8px;padding-left:8px;height:30px;background-color: red;color:#ffffff"
            >
              <i class="el-icon-delete"></i>
            </a>

            <!-- <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="handleDelete(scope.$index, scope.row)"
            ></el-button>-->
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
      show: 0,
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
      this.show = 0;
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
      this.show = 1;
      this.dialogVisible = true;
      console.log(index, row);
      this.deatiltype = row.deatiltype;
      this.detailname = row.detailname;
      //       let a = {
      //         deatiltype: row.deatiltype,
      //         detailname: row.detailname,
      //         detailid: row.detailid,
      //         detailsort: row.detailsort
      //       };
      // console.log(a)
      //       // this.showlist.splice(index, 1, a);
    },
    editgood() {
      console.log(this.showlist);
      this.dialogVisible = false;
      let a = {
        deatiltype: this.deatiltype,
        detailname: this.detailname,
        detailid: 1,
        detailsort: 1
      };
      this.tableData.splice(1, 1, a);
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
  border-radius: 10px;
}
</style>