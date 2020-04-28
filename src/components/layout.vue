<template>
  <div> 
  	<h3>歌单推荐</h3>
    <el-row>
    <el-col :span="8" v-for="(item, index) in songList" :key="index">
      <el-card :body-style="{ padding: '0px' }">
          <router-link :to="{path:'/songFirst',query:{songId:item.id}}">
            <img :src="item.avatarUrl" class="image">
          </router-link>
        <div style="padding: 14px;">
          <span>{{item.desc}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.id }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    </el-row>
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
img{
  width: 100%;
}
.wrap img{
	display:block;
	width:92%;
}
.wrap p{
	display:block;position:absolute;bottom:0;
	width:90%;height:30px;line-height:30px;
	background:yellow;opacity:0.5;
  overflow:hidden;

}
</style>