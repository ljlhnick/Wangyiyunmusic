<template>
    <div>
    <el-table :data="listData" stripe style="width: 100%">
        <el-table-column
        prop="name"
        label="歌曲标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="时长"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ar[0].name"
        label="歌手">
      </el-table-column>
      <el-table-column
        prop="al.name"
        label="专辑">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="changePage"
      layout="prev, pager, next"
      :total="totalCount">
    </el-pagination>
    </el-table>
    </div>
</template>
<script>
export default{
  data(){
    return{
        totalCount: 0,
        currentPage: 1
    }
  },

  methods: {
    changePage(currentPage){
      this.currentPage = currentPage;
      this.$http({
        url:'https://api.imjad.cn/cloudmusic/',
        method:'get',
        params: {
          type: 'playlist',
          id: id,
          offest: currentPage
        }
      }).then((res)=>{
        this.subdesc=res.data.playlist;
        this.sheepList=res.data.playlist.tracks;
      })
    }    
  },

  props:{
      listData:{
        required: true,
      },
      id:{
         required: true, 
      }
  },
 
}
</script>