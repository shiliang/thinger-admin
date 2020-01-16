<template>
    <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>
</template>
<script>
import axios from 'axios'

export default {
  name: 'FunctionManage',
  props: {
    msg: String
  },
  data() {

      return {
          tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-08',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-06',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }]
      }
  },

  mounted() {
      axios.get(
        '/thinger/api/v1/faas/functions'
    ).then((response) => {
        console.log(response.data)
    }).catch(function (error) {
        console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
  }

  .el-aside {
      color: #333;
  }
</style>
