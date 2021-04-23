<template>
    <div class="indexTopNav">
        <div class="items" v-for="item in  boll.list" :key="item.id" @click="goToPalyListPages(item)">
            <div class="bg">
                <img :src="item.iconUrl" alt="">
            </div>
            <div class="name">{{item.name}}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {homepage} from "../api/login"
import { reactive } from "vue"
import { useRouter } from "vue-router"

const Router = useRouter()
const boll = reactive({
    list :[]
})
    homepage('/homepage/dragon/ball',{}).then(res =>{
        if(res.data.code == 200){
            boll.list = res.data.data
        }
    })
    function goToPalyListPages(item){
        if(item.id == -2){
            Router.push({
                path:"/palyList"
            })
        }
    }
</script>
<style scoped lang='scss'>
.indexTopNav{
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    margin-top: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 0 10px 10px;
    .items{
        margin-right: 12px;
        .bg{
            width: 45px;
            height: 45px;
            border-radius: 25px;
            background: red;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .name{
            font-size:12px;
            text-align: center;
            width: 55px;
        }
    }
}
</style>