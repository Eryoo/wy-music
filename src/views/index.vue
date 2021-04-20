<template>
    <div>
        <div class="section">
            <!-- 轮播图 -->
            <indexBanner></indexBanner>
            <!-- 顶部导航 -->
            <indexTopNav></indexTopNav>
            <!-- 推荐歌单 -->
            <personalized></personalized>
            
            <nimiPlay></nimiPlay>
        </div>
    </div>
</template>
<script lang="ts" setup>

import personalized from "../components/personalized.vue"
import indexBanner from "../components/indexBanner.vue"
import indexTopNav from "../components/indexTopNav.vue"   
import nimiPlay from "../components/miniPlay.vue"

import {homepageBlockPage,playlistCatlist,personalizedMv} from "../api/login"

import {ref , inject} from "vue"

// playlistCatlist("/playlist/catlist",{}).then(res =>{
  
// })


personalizedMv('/personalized/mv',{}).then(res =>{
  console.log(res)
})


// homepageBlockPage("/homepage/block/page",{}).then(res =>{
//     // console.log(res)
// })

</script>
<style scoped>
.section{
    padding: 15px 10px;
}
</style>