<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      size="small"
      @click="changeMenu(tag)"
      :disable-transitions="false"
      @close="handleClose(tag)"
      >{{ tag.label }}</el-tag
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
      currentMenu: (state) => state.tab.currentMenu,
    }),
  },
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
    };
  },
  methods: {
    ...mapMutations({
      close: "closeTab",
    }),
    handleClose(tag) {
      this.close(tag);
      this.$router.push(this.currentMenu.path);
    },
    changeMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
