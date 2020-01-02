<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
                default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据开发</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="/function">
            <i class="el-icon-menu"></i>
            <span slot="title">函数启停</span>
          </el-menu-item>

          <el-menu-item index="/hello">
            <i class="el-icon-menu"></i>
            <span slot="title">内存监控</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>

    </el-row>




  </div>


</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      tabPosition: 'left'
    }
  },
  components: {
  },
  methods:{
    func() {
      this.$router.replace('/home');
    },

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
