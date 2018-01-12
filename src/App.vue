<template>
  <div id="app">
    <div class="header row">
      <h2 class="col-md-2 col-sm-2 col-xs-2 text-center">
      <router-link :to="{path: '/' }">
      <span>网易云音乐</span>
      </router-link></h2>
      <div class="col-md-5 col-sm-5 col-xs-5">
          <ul class="navbar navbar-default" >
            <router-link v-for="item in menuList" :to="{path: item.path}" tag="li" :key="item.id">
              {{item.name}}
            </router-link>
          </ul>
      </div>
      <div class="col-md-3 col-sm-3 col-xs-3">
        <input type="text" class="form-control" placeholder="搜索" v-model="words" @keyup.enter="search(words)"/>
        <person-show :is-show="inputShow" @on-close="closeMsg('inputShow')">
           <ol>
             <li v-for="(item,index) in searchList" :key="index" class="select-li" @click="closeMsg('inputShow')">
             <router-link :to="{path:'/playDetail',query:{id:item.id,name:item.name,songer:item.ar[0].name}}">
             <p>{{item.name}}--{{item.ar[0].name}}--{{item.id}}</p>
             </router-link>
             </li>
          </ol>
        </person-show>
        
      </div>
      <div class="col-md-2 col-sm-2 col-xs-2">
        <img class="img-circle" src="./assets/5.jpg" @click="msg">
        <person-show :is-show="isShow" @on-close="closeMsg('isShow')" class="person">
           <h3 class="text-center">个人资料展示卡</h3>
           <div class="from-group">
                <img class="img-circle" src="./assets/5.jpg"/>
                <button class="btn btn-success">修改</button>
            </div>
           <div class="from-group">
                <label class="col-md-2 col-sm-2 col-xs-2" v-if="nickname">{{nickname}}</label>
                <label class="col-md-2 col-sm-2 col-xs-2" v-else>动力在哪儿</label>
                <input class="col-md-6 col-sm-6 col-xs-6" type="text" placeholder="昵称" v-model="nickname">
               
            </div>
            <div class="from-group">
                <label class="col-md-2 col-sm-2 col-xs-2" v-if="sex">{{sex}}</label>
                <label class="col-md-1 col-sm-1 col-xs-1" v-else>女</label>
                <input class="col-md-6 col-sm-6 col-xs-6" type="text" placeholder="性别" v-model="sex">
            
            </div>
            <div class="from-group">
                <label class="col-md-2 col-sm-2 col-xs-2" v-if="age">{{age}}</label>
                <label class="col-md-1 col-sm-1 col-xs-1" v-else>20</label>
                <input class="col-md-6 col-sm-6 col-xs-6" type="text" placeholder="年龄" v-model="age">
                
            </div>
            <div class="from-group">
              <label class="col-md-2 col-sm-2 col-xs-2" v-if="city">{{city}}</label>
                <label class="col-md-1 col-sm-1 col-xs-1" v-else>常德</label>
                <input class="col-md-6 col-sm-6 col-xs-6" type="text" placeholder="城市" v-model="city">
          
            </div>
        </person-show>
      </div>
    </div>
    <div class="con">
      <slide-show :slides="slides" :inv="inv"></slide-show>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
    </div>
    <div class="footer">
      <h2 class="text-center">force By Lj</h2>
    </div>
  </div>
</template>

<script>
import SlideShow from './components/slide'
import PersonShow from './components/person'
export default {
  components:{
    SlideShow,
    PersonShow
  },
  data(){
    return{
      menuList:[
        {"id":1,"name":"我的音乐","path":"/mymusic"},
        {"id":2,"name":"电台","path":"/station"},
        {"id":3,"name":"歌手","path":"/musicer"}
      ],
      slides: [
        {
          src: require('./assets/1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('./assets/2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('./assets/3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('./assets/4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      inv:2000,
      words:"",
      searchList:[],
      isShow:false,
      inputShow:false,
      nickname:"",
      sex:"",
      age:"",
      city:""
    }
  },
  methods:{
    search(words){
      this.$http.get("https://api.imjad.cn/cloudmusic/?type=search&s="+this.words).then((res)=>{
        this.searchList=res.data.result.songs
        this.inputShow=true,
        this.words=""
      })
    },
    msg(){
      this.isShow=true
    },
    closeMsg(attr){
      this[attr]=false
    }
  }
}
</script>
<style>
ul{
  list-style:none;
}
.header{
  width:100%;
  height:100px;
  background:#242424;
  color:#ccc;
  margin-bottom:2rem;
}
.header span{
  display:block;height:50px;line-height:50px;margin:25px 0;color:#ccc;
}
.header ul li{
  height:50px;line-height:50px;margin:15px 0;
  font-size:25px;
}
.header input{
  height:50px;line-height:50px;margin:25px 0;
}
.header .img-circle{
  width:100px;height:100px;border-radius:50%;margin-left:20px;
}
.footer{
  width:100%;
  height:50px;
  background:#242424;
}
.footer h2{
  color:#ccc;
}
.select-li{
  width:600px;
  font-size:16px;
}
.person .row{
  width: 100%;height: 60px;
}
.person .from-group span{
  color:red;
}
</style>
