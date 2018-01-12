<template>
  <div> 
    <h3>电台</h3>
    <div class="row">
      <div class="wrap col-md-3 col-sm-3 col-xs-3" v-for="item in stationList">
      <router-link :to="{path: '/staionFirst',query:{tid:item.id}}">
       <img :src="item.avatarUrl">
      </router-link>
      <span>{{item.desc}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      stationList:[],
    }
  },
  created(){
    this.get()
  },
  methods:{
    get(){
      this.$http.get("/api/data").then((res)=>{
        this.stationList=res.data.data.stationList
      })
    }
  },
  watch:{
    '$route':'get'
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
.wrap span{
  display:block;
  position:absolute;
  width:90%;height:30px;line-height:30px;
  background:yellow;
  bottom:0;
  opacity: 0.5;
  overflow:hidden;
}
</style>