<template>
  <div>
  	<div class="con">
  	   <ul v-for="item in sheepList" class="list-group">
        <router-link :to="{path:'/playDetail',query:{djid:item.id}}">
  	     	<li class="row">
            <img :src="item.coverUrl" class="col-md-2 col-sm-2 col-xs-2"/>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <p>{{item.name}}</p>
              <p>评论---{{item.commentCount}}</p>
              <p>{{item.description}}</p>
            </div>
          </li>
        </router-link>
  	   </ul>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      subdesc:"",
      sheepList:[]
    }
  },
  created(){
    this.get()
  },
  methods:{
    get(){
      if(typeof(this.$route.query.tid)==="undefined"){
        return
      }
      this.$http({
        url:'https://api.imjad.cn/cloudmusic/',
        method:'get',
        params: {
          type:'djradio',
          id:this.$route.query.tid
        }
      }).then((res)=>{
        this.sheepList=res.data.programs
      });
    }
  },
  watch:{
    '$route':'get'
  }
}
</script>
<style scoped>
.con{
	width:1200px;
	margin:2rem auto;
}
ul li{
  width:500px;height:150px;margin-botton:1rem;
  width:100%;
}
ul li img{
  width:100%;height:90%;
}
ul li p{
  height:30px;line-height:30px;overflow:hidden;
  color:#333;
}
h3 .ss{
  display: inline-block;margin-left: 2rem;
  font-size:20px;
}
</style>