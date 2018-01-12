<template>
  <div> 
  	<h3>歌单推荐</h3>
    <div class="row">
  	  <div class="wrap col-md-3 col-sm-3 col-xs-3" v-for="item in songList">
      <router-link :to="{path:'/songFirst',query:{songId:item.id}}">
  	 	   <img :src="item.avatarUrl">
      </router-link>
      <p>
        <span class="pull-right">{{item.desc}}</span>
      </p>
  	  </div>
  	</div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      songList:[]
    }
  },
  created(){
    this.get()
  },
  methods:{
    get(){
      //请求项目下的data.json文件
      this.$http.get("/api/data").then((res)=>{
        this.songList=res.data.data.songList
      })
    }
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}
h3{
	color:pink;
	padding:20px;
}
.wrap{
	padding-left:10px;
	position:relative;
  width:300px;height:300px;
  margin:20px 0;

}
.wrap img{
	display:block;
	width:92%;
	height:100%;
}
.wrap p{
	display:block;position:absolute;bottom:0;
	width:90%;height:30px;line-height:30px;
	background:yellow;opacity:0.5;
  overflow:hidden;

}
</style>