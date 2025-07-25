## 简介

一个纯静态前端，采用 Vue3、JavaScript 和 Element Plus 进行开发，一个后台管理系统前端开发基础框架，具备动态路由、面包屑导航以及多页面打开。

## 特性

- **最新技术栈**：使用 Vue3/vite3 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **多页面Tag** 支持多页面打卡
- **权限** 内置完善的动态路由权限生成方案
- **组件** 二次封装了多个常用的组件

## 项目地址
  ### [Github地址](https://github.com/tobeflyboy/gushici)


## 在线示例

[演示地址](http://117.72.192.233/)


## 准备
开发前请确保熟悉并掌握以下技术栈：

- vue: https://cn.vuejs.org/
- element-plus：https://element-plus.midfar.com/
- pinia: https://pinia.vuejs.org/zh/
- vue-router: https://router.vuejs.org/zh/

注：开发前请务必阅读上述所有文档。应用至实际项目开发请修改 readme 内容。

## 推荐的 IDE 工具和插件

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (需禁用旧插件 Vetur、Volar ) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Vite 构建工具配置

参考 [Vite 配置](https://vitejs.dev/config/).

## 主要结构

```
.
|-- LICENSE // LICENSE声明
|-- README.md // 使用手册
|-- eslint.config.js
|-- index.html
|-- jsconfig.json
|-- package-lock.json
|-- package.json
|-- public // 静态资源
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- cover.css // 需要强制覆盖的样式
|   |   |-- expand.css // 原子化css
|   |   |-- generate.scss // 原子化css
|   |   |-- imgs
|   |   |-- logo.svg
|   |   `-- main.css
|   |-- components // 组件
|   |   |-- CustomCard // 普通卡片组件
|   |   |-- CustomChartBar // 柱状图卡片
|   |   |-- CustomChartLine // 折线图卡片
|   |   |-- CustomChartPie // 饼图卡片
|   |   |-- CustomEditDialog // 带表单的对话框组件
|   |   |-- CustomFilterTree // 可筛选的组织架构树
|   |   |-- CustomForm // 表单组件
|   |   |-- CustomMoveCard // 可缩放卡片
|   |   |-- CustomSearch // 条件筛选组件
|   |   |-- CustomTable // 表格组件
|   |   |-- MyDateTimePicker // 时间日期选择器
|   |   |-- MyInput // 输入框组件
|   |   |-- MySelect // 选择器
|   |   |-- MyTree // 树结构
|   |   |-- PdfPreview // pdf在线预览组件
|   |   `-- icons // svg图标
|   |-- layout // 页面框架布局
|   |   |-- components
|   |   |   |-- breadcrumb.vue // 面包屑
|   |   |   |-- menu.vue // 侧边菜单
|   |   |   |-- personal.vue // 个人中心
|   |   |   `-- tag.vue // 多页面标签
|   |   `-- index.vue
|   |-- main.js // 入口文件
|   |-- router // 路由配置
|   |   |-- authRouter.js // 动态路由引入与匹配处理
|   |   `-- index.js // 路由创建与配置
|   |-- stores // 状态管理
|   |   |-- authRouter.js // 动态路由状态管理
|   |   `-- tagList.js // 多页面标签状态管理
|   |-- utils // 通用工具
|   |   |-- getData.js // 模拟异步获取数据
|   |   |-- htmlToPdf.js // 页面转pdf方法
|   |   `-- printToPdf.js // 目标元素打印方法
|   `-- views
|       |-- CardTemplate // 卡片示例合集
|       |   |-- template1.vue // 普通卡片示例
|       |   |-- template2.vue // echarts卡片示例
|       |   |-- template3.vue // 可拖拽卡片示例
|       |   `-- template4.vue // 可缩放卡片示例
|       |-- Dashboard // 首页
|       |-- FormTemplate // 表单示例
|       |   |-- formConfig.js // 表单配置
|       |   |-- template1.vue // 表单示例1
|       |   `-- template2.vue // 表单示例2
|       |-- Login // 登录模块
|       |-- PdfTemplate // 表格示例
|       |   |-- template1.vue // pdf预览示例1
|       |   `-- template2.vue // pdf预览示例2
|       |-- Systems // 系统管理
|       |   |-- components
|       |   |   |-- CustomFunctionsDialog.vue // 功能权限弹窗
|       |   |   |-- CustomMenuPermissionsDialog.vue // 菜单权限弹窗
|       |   |   |-- NestedMenu.vue // 功能权限分配表格组件
|       |   |   |-- role.vue // 角色
|       |   |   |-- searchConfig.js
|       |   |   |-- simulatedData.js
|       |   |   `-- tableConfig.js
|       |   |-- simulatedData.js
|       |   `-- structures.vue // 组织架构
|       |-- TableTemplate // 表格示例
|       |   |-- tableConfig.js // 表格配置项
|       |   |-- template1.vue // 示例1
|       |   `-- template2.vue // 示例2
|       `-- gushici // 诗词文集
`-- vite.config.js
```
## 项目图片
![](/public/demo-img/0.png)
![](/public/demo-img/00.png)
![](/public/demo-img/01.png)
![](/public/demo-img/02.png)
![](/public/demo-img/03.png)
![](/public/demo-img/04.png)
![](/public/demo-img/05.png)
![](/public/demo-img/06.png)
![](/public/demo-img/07.png)
![](/public/demo-img/08.png)
![](/public/demo-img/09.png)
![](/public/demo-img/10.png)
![](/public/demo-img/11.png)
![](/public/demo-img/12.png)
![](/public/demo-img/13.png)
![](/public/demo-img/14.png)
## 使用

### 确定本地的node版本>=20。本地使用v20.18.0验证通过。

```sh
node -v
```

### 安装依赖

```sh
npm install
```

### 开发模式连接

```sh
npm run dev
```

### 打包

```sh
npm run build
```

### 代码检查 [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 支持环境

现代浏览器。

| Chrome          | Edge            | Firefox         | Safari          | 
| --------------- | --------------- | --------------- | --------------- | 
| Chrome ≥ 85     | Edge ≥ 85       | Firefox ≥ 79    | Safari ≥ 14.1   | 

