<template>
    <div>
         <van-swipe class="banner-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item  v-for="(item) in objBanner.list" :key="item.bannerId">
                    <div class="banner-item">
                        <img class="banner-pic" :src="item.pic" alt="">
                         <div class="typeTitle">{{item.typeTitle}}</div>
                    </div>
                </van-swipe-item>
          </van-swipe>
    </div>
</template>
<script lang="ts" setup>
import {banner} from "../api/login"
import { reactive} from "vue"

const objBanner = reactive({
    list:[]
})
banner("/banner?type=2").then(res =>{
        if(res.data.code == 200){
            objBanner.list = res.data.banners
        }
    })

</script>
<style scoped>
.banner-swipe{
    height: 130px;
    border-radius: 10px;
}
.banner-swipe .banner-pic{
    width: 100%;
    height: 100%;
}
.banner-item{
    position: relative;
}
.typeTitle{
    position:absolute;
    z-index: 2;
    bottom: 14px;
    right: 0;
    background: red;
    font-size: 12px;
    padding: 3px 5px;
    color: #fff;
    border-top-left-radius: 10px;
}
</style>