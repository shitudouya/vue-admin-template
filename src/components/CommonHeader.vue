<template>
  <header>
    <div class="l-content">
      <el-button size="mini" type="primary" icon="el-icon-menu" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-tooltip class="fullScreen" effect="dark" content="全屏" placement="bottom">
        <i class="el-icon-full-screen" @click="clickFullscreen"></i>
      </el-tooltip>

      <el-tooltip effect="dark" content="消息中心" placement="bottom" class="message">
        <el-badge is-dot>
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-tooltip>

      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="userImg" class="user_img" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import screenfull from "screenfull";
import { mapState } from "vuex";
export default {
  data() {
    return {
      userImg: require("../assets/images/user.png"),
      isFullscreen: false,
    };
  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  methods: {
    clickFullscreen() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
    },
    collapseMenu() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  padding: 0 20px;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background-color: #fff;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 30px;
  }
}
.r-content {
  .user_img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    cursor: pointer;
    vertical-align: middle;
  }
}
.message {
  font-size: 22px;
  margin-right: 25px;
  cursor: pointer;
}
.fullScreen {
  margin-right: 25px;
  vertical-align: middle;
  font-size: 24px;
  cursor: pointer;
}
</style>

<style>
header.el-header {
  padding: 0;
}
</style>
