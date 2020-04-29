### vue-admin-template

基于element-ui 只提供了必要的页面布局，只需填充需要的页面和路由配置即可

---
#### 安装依赖

`npm i`

#### 运行

`npm run serve`

#### Questions

（1）侧边菜单栏怎么配置？

定位目录`src→components→CommonAside.vue`在asideMenu中根据已有格式配置侧边栏显示的菜单信息
接着在`src→router→index.js`routes中配置路由即可

（2）侧边栏图标在哪找的？

图标为element-ui提供的，直接使用即可，官网[element-ui](https://element.eleme.io/#/zh-CN/component/icon)
