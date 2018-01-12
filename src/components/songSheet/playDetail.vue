<template>
  <div>
   <h3 class="text-center">歌曲播放页</h3>
   <div class="row">
     <div class="col-md-3 col-sm-3 col-xs-3"></div>
     <audio v-show="src" :src="src" controls autoplay class="col-md-6 col-sm-6 col-xs-6"></audio>
     <audio v-show="djsrc" :src="djsrc" controls ></audio>
   </div>
   <h3 v-show="name" class="text-center">{{name}}--<span>{{songer}}</span></h3>
   <div v-show="lyric" class="row">
    <div class="col-md-3 col-sm-3 col-xs-3"></div>
    <textarea class="col-md-6 col-sm-6 col-xs-6">{{lyric}}</textarea>
   </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      name:"",
      songer:"",
      lyric:"",
      src:"",
      djsrc:""
    }
  },
  created(){
    this.get()
  },
  methods:{
    get(){
      if(typeof(this.$route.query.djid)!="undefined"){
        this.getStation(this.$route.query.djid)
        this.name=""
        this.songer=""
        this.lyric=""
        this.src=""
        return 
      }

      if(typeof(this.$route.query.id)==="undefined")
          return 
      this.$http({
        method:'get',
        url:'https://api.imjad.cn/cloudmusic/',
        params:{
          type:'lyric',
          id:this.$route.query.id
        }
      }).then((res)=>{
        this.lyric=res.data.lrc.lyric
        this.name=this.$route.query.name
        this.songer=this.$route.query.songer
        this.getSrc(this.$route.query.id)
      });
    },

    //歌曲
    getSrc(id){
      if(typeof(id)==="undefined"||id==0)
          return 
      this.$http.get("https://api.imjad.cn/cloudmusic/?type=song&id="+id).then((res)=>{
        this.src=res.data.data[0].url
      }) 
    },

    getStation(id){
      this.$http.get("https://api.imjad.cn/cloudmusic/?type=dj&id="+id).then((res)=>{
       this.djsrc=res.data.data[0].url
      })
    }
  },
  watch:{
    '$route':'get',
  }
}
</script>
<style scoped>
h3{
  margin:1rem 0;
}
audio{
  width:100%;height:60px;
  border:1px solid #red;
}
textarea{
  width:600px;
  height:600px;
  color:#daa520;
}
</style>