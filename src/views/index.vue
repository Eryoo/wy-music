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

import {homepageBlockPage} from "../api/login"

import {ref , inject} from "vue"

    const demo = inject("audio")
    console.log("inject")
    console.log(demo)

homepageBlockPage("/homepage/block/page",{}).then(res =>{
    console.log(res)
})

</script>
<style scoped>
.section{
    padding: 15px 10px;
}
</style>