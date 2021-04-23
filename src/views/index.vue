<template>
    <div>
        <div class="section">
            <!-- 轮播图 -->
            <indexBanner></indexBanner>
            <!-- 顶部导航 -->
            <indexTopNav></indexTopNav>
            <!-- 推荐歌单 -->
            <personalized></personalized>
        </div>
         <div class="section" :style="{'font-size':'14px'}">
             暂无数据
         </div>
        <nimiPlay></nimiPlay>
    </div>
</template>
<script lang="ts" setup>

import personalized from "../components/personalized.vue"
import indexBanner from "../components/indexBanner.vue"
import indexTopNav from "../components/indexTopNav.vue"   
import nimiPlay from "../components/miniPlay.vue"

import {homepageBlockPage} from "../api/login"

import {ref , inject} from "vue"


</script>
<style scoped>
.section{
    padding: 15px 0px;
    background: #fff;
    margin-bottom: 10px; 
    border-radius: 10px;
}
.section:first-child{
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
       border-bottom-left-radius: 10px;
       border-bottom-right-radius: 10px;
    }
</style>