<template>
    <div>
    <!-- <p>tableList {{listData.length}}</p> -->
    <el-table :data="listData" stripe style="width: 100%">
        <el-table-column v-for="item in colunms"
        :prop="item.prop"
        :label="item.title"
        :key="item.title"
        width="180">
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
import {formatDate} from './songSheet/date.js';
export default{
  data(){
    return{
      colunms:[
        {
            key: "company",
            title: "播放",
        },
        {
            key: "name",
            title: "歌曲标题",
        },
        {
            key: "id",
            title: "时长",
        },
        {
            key: "company",
            title: "歌手",
        },
        {
            key: "company",
            title: "专辑",
        }
      ]
    }
  },

  props:{
      listData:{
          required: true,
          default: () => {
              return [];
          }
      }
  },
 
  methods:{
    
  },

  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
}
</script>