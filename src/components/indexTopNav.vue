<template>
    <div class="indexTopNav">
        <div class="items" v-for="item in  boll.list" :key="item.id">
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
const boll = reactive({
    list :[]
})
    homepage('/homepage/dragon/ball',{}).then(res =>{
        if(res.data.code == 200){
            boll.list = res.data.data
        }
    })
</script>
<style scoped>
.indexTopNav{
    display: flex;
    overflow: hidden;
    overflow-x: auto;
    margin-top: 15px;
    margin-bottom: 20px;
}
.items{
    margin-right: 12px;
}
.bg{
    width: 45px;
    height: 45px;
    border-radius: 25px;
    background: red;
    margin: 0 auto;
}
.bg img{
    width: 100%;
    height: 100%;
}
.name{
    font-size:12px;
    text-align: center;
    width: 55px;

}
</style>