# second

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

##### 2020/04/25 run error
```
The CLI moved into a separate package: webpack-cli
Please install 'webpack-cli' in addition to webpack itself to use the CLI
```
solve [The CLI moved into a separate package: webpack-cli](https://blog.csdn.net/u010696334/article/details/81035312)

```
webpack4报错compilation.mainTemplate.applyPluginsWaterfall is not a function
solvw[html-webpack-plugin](https://blog.csdn.net/sunqy1995/article/details/82193267)
```

```
Module build failed: TypeError: Cannot read property 'vue' of undefined
solve[vue-loader插件破坏](https://blog.csdn.net/weixin_33923762/article/details/92076874)
```

```
15v的vue-loader
solve[v15](https://blog.csdn.net/csdn_yudong/article/details/84900409)
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

cnpm install vue-loader@latest --save-dev

```
Cannot find module 'import-local'
    at Function.Module._resolveFilename
```
由于项目中安装第三方包时，cnpm和npm混合使用，导致报错,删除node_module，重新安装

```
jest
https://www.jianshu.com/p/eb3e9ad30fc4
```


这是一个模仿网易音乐核心功能的vue.js项目，歌单列表，以及我的音乐（自己收藏的歌单），电台和歌手，由于这个api里面有体积，但是我还用了自己项目里data.json里面的数据，主要是想锻炼自己s使用.json文件的能力，搜索以及查看修改个人信息的功能用到了slot插槽以及父子组件的通信。
里面用到了vue，vue-router,vue-resource,axios,暂时还没用到vuex
对于路由要注意参数时query和params的区别，
里面的api由https://api.imjad.cn/cloudmusic.md
提供，
