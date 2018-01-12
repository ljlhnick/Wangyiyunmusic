<template>
  <div>
  	<div class="con">
  	   <div class="row">
  	     <div class="col-md-3 col-sm-3 col-xs-3 left">
  	       <img :src="subdesc.coverImgUrl" class="sheetimg"/>
  	     </div>
  	     <div class="col-md-8 col-sm-8 col-xs-8 right">
  	       <h2>{{subdesc.name}}</h2>
  	       <p>{{subdesc.createTime | formatDate}}创建</p>
  	       <div class="btn-toolbar">
  	         <button class="btn">收藏{{subdesc.subscribedCount}}</button>
  	         <button class="btn">分享{{subdesc.shareCount}}</button>
  	         <button class="btn">下载{{subdesc.commentCount}}</button>
  	         <button class="btn">评论{{subdesc.commentCount}}</button>
           </div>
  	       <p>标签 <button class="btn btn-info" v-for="item in subdesc.tags">{{item}}</button></p>
  	       <p>{{subdesc.description}}</p>
  	     </div>
  	   </div>

  	   <h3>歌曲推荐 <span class="ss">{{subdesc.trackCount}}首歌</span><span class="ss">播放{{subdesc.playCount}}次</span></h3>

  	   <table class="table table-bordered table-striped table-hover">
  	     <tr>
  	     	<th>歌曲名</th>
  	     	<th>歌曲id</th>
  	     	<th>歌手</th>
  	     	<th>专辑</th>
  	     	<th>播放</th>
  	     </tr>
  	     
  	     <tr v-for="item in sheepList">
  	     	<td>{{item.name}}</td>
          <td>{{item.id}}</td>
          <td>{{item.ar[0].name}}</td>
          <td>{{item.al.name}}</td>
  	     	<td>
  	     	<router-link :to="{path:'/playDetail',query:{id:item.id,name:item.name,songer:item.ar[0].name}}">
  	     	<button class="btn btn-success">play</button>
  	     	</router-link>
  	     	</td></tr>
  	   </table>
  	</div>
  </div>
</template>
<script>
import {formatDate} from './date.js'
export default{
  data(){
    return{
      subdesc:"",
      sheepList:[],
      tid:""
    }
  },
  created(){
    this.get()
  },
  methods:{
    get(){
      if(typeof(this.$route.query.songId)==="undefined"){
        return
      }
      this.$http({
        url:'https://api.imjad.cn/cloudmusic/',
        method:'get',
        params: {
          type:'playlist',
          id:this.$route.query.songId
        }
      }).then((res)=>{
        this.subdesc=res.data.playlist
        //console.log(res.data.playlist)
        this.sheepList=res.data.playlist.tracks
      });
    }
  },
  watch:{
    '$route':'get'
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date,'yyyy-MM-dd');
    }
  }
}
</script>
<style scoped>
.con{
	width:1200px;
	margin:2rem auto;
}
.row{
	margin-bottom:2rem;
}
.row .left .sheetimg{
	width:300px;height:300px;
}
.row .right{
	margin-left:1rem;
}
.row .right h2{
	font-size:25px;
}
.row .right .btn-toolbar{
	margin:0.8rem 0;
}
.row .right button{
	margin-right:0.5rem;
}
.row .right p{
	font-size:14px;
	color:#ccc;
	border-radius:5px;
}
h3 .ss{
  display: inline-block;margin-left: 2rem;
  font-size:20px;
}
</style>