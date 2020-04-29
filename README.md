## 网易云音乐 采用vue+vue-router+axios+ElementUI， 后续会加入vuex进行数据状态管理

> clone and run

## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
##project detail
模仿网易云音乐的vue pc端，里面有歌单列表，电台，歌手，路由需要注意query和params区别，后台API文档：https://api/imjad.cn/cloudmusic.md

### change Log on 2020/04/24 
update axios from 0.17.1 to 0.19.2
add webpack-bundle-analyzer(3.7.0) and webpack-dev-server(3.10.3)

### change Log on 2020/04/25 can npm run dev
The CLI moved into a separate package: webpack-cli Please install 'webpack-cli' in addition to webpack itself to use the CLI
solve [The CLI moved into a separate package: webpack-cli](https://blog.csdn.net/u010696334/article/details/81035312)

webpack4报错compilation.mainTemplate.applyPluginsWaterfall is not a function
solve [html-webpack-plugin](https://blog.csdn.net/sunqy1995/article/details/82193267)

Module build failed: TypeError: Cannot read property 'vue' of undefined
cnpm i vue-loader@latest --save-dev  (v15)
solve [vue-loader插件破坏](https://blog.csdn.net/weixin_33923762/article/details/92076874)  [v15配置](https://blog.csdn.net/csdn_yudong/article/details/84900409)

### change Log on 2020/04/27 add ElementUI
change data.json(mock data)
npm i element-ui and import element css then use ElementUI
use dialog and progress
add formatTime filter to format millSeconds to Mins-Seconds
use table and pagination in myFrist.vue but api not correctly show data by offset and limit query
add tableList component but not use

### change Log on 2020/04/28 add some elementUI
replaced by carousel, navMenu, card component 
use tableList component in songFirst.vue songerFirst.vue myFirst.vue
add pagination and paging function but api not support 

### change Log on 2020/04/29 
add backToTop
add formatTime filter to support format millSeconds to Days-Hours-Mins-Seconds
add a new col in tableList.vue

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader/zh-cn/).

