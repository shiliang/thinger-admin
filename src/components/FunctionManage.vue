<template>
    <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%">
        <el-table-column
                prop="functionname"
                label="函数名称"
                width="180">
        </el-table-column>
        <el-table-column
                prop="status"
                label="状态"
                width="180">
        </el-table-column>
        <el-table-column
                prop="operator"
                label="操作">
            <template slot-scope="scope">
            <el-button type="success" @click="openFunc(scope.row.id)">启动</el-button>
                <el-button type="warning" @click="closeFunc(scope.row.id)">关闭</el-button>
            </template>
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
          tableData: []
      }
  },
    methods: {
      openFunc: function (id) {
        console.log(id)
      },
        closeFunc: function (id) {
            console.log(id)
        }
    },

  mounted() {
      var that = this
      axios.get(
        '/thinger/api/v1/faas/functions'
    ).then((response) => {
        //console.log(response.data)
        response.data.forEach(function (e) {
            console.log(e.id)
            that.tableData.push({
                functionname : e.id,
                status: "on",
                operator: "done"
            })
        })

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
