<template>
<div class="home">
    <!-- 欢迎 -->
    <div class="home_header">
      <div class="home_name">欢迎员工：陈晨熙！</div>
    </div>
    <!-- 开发者 -->
    <div class="home_who">
      <p>开发团队</p>
      <div class="personnel">
      <el-table :data="tableData" border :show-header="false" style="width: 100%">
        <el-table-column prop="date" width="200%">
        </el-table-column>
        <el-table-column prop="name"></el-table-column>
      </el-table>
      </div>
    </div>
    <!-- 版本信息 -->
    <div class="home_edition">
      <p>版本信息</p>
      <div class="information">
      <el-table :data="VIdata" border :show-header="false" style="width: 100%">
        <el-table-column prop="title" width="200%">
        </el-table-column>
        <el-table-column prop="data"></el-table-column>
      </el-table>
      <el-table :data="download" border :show-header="false" style="width: 100%">
        <el-table-column prop="title" width="200%">
        </el-table-column>
        <el-table-column>
          <el-button type="warning">获取授权</el-button>
          <el-button type="success">立即下载</el-button>
        </el-table-column>
      </el-table>
      </div>
    </div>
</div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      tableData: [{
          date: '开发者',
          name: '精英小分队',
        },],
        VIdata:[
          {
            title:'当前版本',
            data:'v8.8.8 std'
          },
          {
            title:'基于框架',
            data:'elementui'
          },
          {
            title:'主要特色',
            data:'清爽/简洁/响应式'
          },
        ],
        download:[{
          title:'获取渠道'
        }]
      }
  },
  methods: {
    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //     if (rowIndex === 1) {
    //       return {display: 'none'}
    //     }
    //   },
  },
}
</script>
<style scoped>
.home{
  margin: 10px;
}
.home_header{
  background-color: #ffffff;
  padding: 10px 15px;
  margin-bottom: 15px;
}
.home_name{
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background-color: #F5F5F5;
  color: #666666;
  border-left: 5px solid #3c8dbc;
}
.home_who{
  background-color: #ffffff;
  margin-bottom: 15px;
}
.home_who p{
  font-size: 14px;
  line-height: 43px;
  padding: 0 15px;
  border-bottom: 1px solid #e9e9e9;
}
.personnel{
  text-align: center;
  padding: 10px 15px;
}
.home_edition{
  background-color: #ffffff;
  margin-bottom: 15px;
}
.home_edition p{
  font-size: 14px;
  line-height: 43px;
  padding: 0 15px;
  border-bottom: 1px solid #e9e9e9;
}
.information{
  text-align: center;
  padding: 10px 15px;
}
</style>