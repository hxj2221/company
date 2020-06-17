<template>
<div> 
  <div class="enter-bg">
  <el-row>
  <el-col :span="2"><div class="grid-content bg-purple">
 <el-button type="primary" @click="click" style="margin-top:20px;"><i class="el-icon-plus"></i></el-button>
    </div></el-col>
  <el-col :span="18"><div class="grid-content bg-purple-light">
<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </div></el-col>
  <el-col :span="4">
    <div class="enter-input">
    <el-input v-model="input" placeholder="请输入姓名"></el-input>
  </div>
 <div class="enter-button">
<el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
  </el-col>
</el-row>
<hr style="border:0.5px solid #f6f6f6;margin-top:20px;">
<!-- 表格 -->
<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
     <el-table
    :data="tableData"
    border
    style="width:81.55%;margin-top:30px;">
     <el-table-column property="ImageUrl" label="图片"  width="220">
       
                <template slot-scope="scope">
                  <el-image
                    style="width: 50px; height: 50px"
                    :src="'http://api.switchyl.online/'+scope.row.ImageUrl">
                  </el-image>
                </template>
              </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
       width="180"
      >
    </el-table-column>
     <el-table-column
      prop="nation"
      label="民族"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="手机号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="department"
       label="部门"
       width="180"
      >
    </el-table-column>
    <el-table-column
      prop="job"
      label="职位"
       width="180"
      >
      </el-table-column>
      <el-table-column
      prop="operation"
      label="操作"
       width="200"
      >
    </el-table-column>
  </el-table>
    </div></el-col>
</el-row>
  <!-- 弹框 -->
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
 >

</el-dialog>
</div>
  </div>
</template>
<script>
  export default {
    components:{},
    props:{},
    data() {
      return {
        tableData: [
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
        {
          name: '王小虎',
          age: '19',
          sex:'男',
          nation:'汉',
          tel:'174485485',
          department:'销售',
          operation:'',
          job:'前端工程师'
        }, 
       
        
        ],
         options: [{
          value: '选项1',
          label: '——请选择——'
        }, {
          value: '选项2',
          label: '销售'
        }, {
          value: '选项3',
          label: '人资'
        }],
        value: '',
        input:'',
        //  dialogVisible: false
      }
    },
    methods: {
      // handleClose(done) {
      //   this.$confirm('确认关闭？')
      //     .then(_ => {
      //       done();
      //     })
      //     .catch(_ => {});
      // },
      click(){
        this.dialogTableVisible = true;
      }
    }
  }
</script>
<style scoped>
.enter-bg{
    background:#fff;
    line-height: 8px;
    margin-top: 20px;
    }
  .el-select {
    margin-left:86%;
    width: 12%;
    margin-top: 20px;
  }
.enter-input .el-input{
    width: 50%;
    margin-top: 20px;
}
.enter-button .el-button{
  position: absolute;
  margin-top: -40px;
  margin-left:58%;
  position: absolute;
}
.enter-button{
  position: relative;
}
</style>