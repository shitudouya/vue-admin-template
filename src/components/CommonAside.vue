<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#2D8CF0"
  >
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="subItem in item.children" :index="subItem.path" :key="subItem.path" @click="clickMenu(subItem)">
          <i :class="'el-icon-' + subItem.icon"></i>
          {{ subItem.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      asideMenu: [
        { path: "/", label: "首页", icon: "s-home", name: "home" },
        { path: "/user", label: "用户管理", icon: "user", name: "user" },
        {
          label: "其它",
          icon: "s-promotion",
          name: "other",
          children: [
            { path: "/page1", label: "页面1", icon: "setting", name: "page1" },
            { path: "/page2", label: "页面2", icon: "setting", name: "page2" },
          ],
        },
      ],
    };
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.asideMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
.el-menu-item.is-active {
  background-color: #000c17 !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-submenu .el-menu-item {
  min-width: 199px;
}
</style>
