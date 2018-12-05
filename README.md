## js全栈之vue-h5
### 项目背景
纯粹出于提升技术，作为js web全栈开发入门学习前后端分离系统的h5部分，希望以此熟悉 vue 最新的3.x脚手架，以及滴滴开源的基于vue的移动端组件库cube-ui框架，弱化业务，只具备登录注册，压缩上传图片，及列表下拉刷新或上拉加载等功能！

如遇到问题或交流，请加qq: 1007344228。

### 技术架构
前后端分离，基于vue技术栈。核心库当前版本为：
- vue 2.5.17, 
- vue-router 3.0.1, 
- vuex 3.0.1, 
- axios 0.18.0, 
- cube-ui 1.12.2

### 参与学习或开发
- 下载源码
  ```
  git clone https://github.com/yibiankeji/js-h5-vue.git   
  ```
- 安装项目有关依赖
  ```
  cd js-h5-vue &&  npm install 
  ```
- 启动项目
  ```
  npm start  
  ```
- 部署项目 (生成静态文件后，一般通过配置ngnix访问，可用pm2配置本地自动部署)
  ```
  npm run build
  ```
  
### 各目录及文件功能
- ├── README.md 本文件，介绍项目的基本情况
- ├── babel.config.js babel的配置文件
- ├── dist 打包后所有文件的目录
- ├── node_modules 所有第三方依赖库所在的目录，如vue,axios, cube-ui等
- ├── package-lock.json 版本锁定的文件
- ├── package.json npm有关的配置文件，如依赖库、运行脚本等
- ├── postcss.config.js postcss的配置文件
- ├── public 静态资源所在的文件 如图片，index.html 
- ├── src 项目编写代码的目录
- │   ├── App.vue 根组件
- │   ├── api.js 各种请求Url文件
- │   ├── assets 静态资源，如一些公共样式等
- │   ├── components 组件目录
- │   ├── main.js 启动文件
- │   ├── router.js 路由文件
- │   ├── store.js vuex 文件
- │   ├── theme.styl cube-ui的主题文件
- │   └── views 页面目录
- └── vue.config.js 项目脚手架的配置文件