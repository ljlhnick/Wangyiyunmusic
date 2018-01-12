<template>
  <div>
  	<div class="con">
  	   <div class="row">
  	     <div class="col-md-3 col-sm-3 col-xs-3 left">
  	       <img :src="artist.img1v1Url" class="sheetimg"/>
  	     </div>
  	     <div class="col-md-8 col-sm-8 col-xs-8 right">
  	       <h2>{{artist.name}}</h2>
  	       <p>标签 <button class="btn btn-info" v-for="item in artist.alias">{{item}}</button></p>
  	       <p class="desc">{{artist.briefDesc}}</p>
  	     </div>
  	   </div>

  	   <h3>歌手推荐 <span class="ss">{{artist.albumSize}}张专辑</span><span  class="ss">{{artist.mvSize}}</span><span class="ss">热门歌曲{{artist.musicSize}}首</span></h3>

  	   <table class="table table-bordered table-striped table-hover">
  	     <tr>
  	     	<th>歌曲名</th>
  	     	<th>歌曲id</th>
  	     	<th>歌手</th>
  	     	<th>专辑</th>
          <th>Mv</th>
  	     	<th>播放</th>
  	     </tr>
  	     <tr v-for="item in List">
  	     	<td>{{item.name}}</td>
          <td>{{item.id}}</td>
          <td>{{item.ar[0].name}}</td>
          <td>{{item.al.name}}</td>
          <td>{{item.mv}}</td>
  	     	<td>
  	     	<router-link :to="{path:'/playDetail',query:{id:item.id,name:item.name,songer:item.ar[0].name,mv:item.mv}}">
  	     	<button class="btn btn-success">play</button>
  	     	</router-link>
  	     	</td></tr>
  	   </table>
  	</div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      artist:"",
      List:[],
    }
  },
  created(){
    this.get()
  },
  methods:{
    get(){
      if(typeof(this.$route.query.mid)==="undefined")
        return
      this.$http({
        url:'https://api.imjad.cn/cloudmusic/',
        method:'get',
        params: {
          type:'artist',
          id:this.$route.query.mid
        }
      }).then((res)=>{
        this.artist=res.data.artist
        this.List=res.data.hotSongs
        //console.log(this.List)
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
.row .right .desc{
  color:#333;
}
h3 .ss{
  display: inline-block;margin-left: 2rem;
  font-size:20px;
}
</style>