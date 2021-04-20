<template>
    <div class="playListDetails" v-cloak>
        <div class="top-details">
            <div class="content">
                <div class="coverImg">
                    <img :src="details.playlist.coverImgUrl" alt="">
                </div>
                <div class="info" v-if="details.playlist">
                    <div class="name">{{details.playlist.name}}</div>
                    <div class="creator">
                        <div class="avatarWarpper">
                            <img class="avatar" :src="avatarUrl" alt="">
                            <img class="identityIcon" :src="identityIconUrl" alt="" srcset="">
                        </div>
                        <div class="nickname">{{nickname}}</div>
                    </div>
                    <div class="description" v-if="details.playlist.description">{{details.playlist.description}}</div>
                </div>
            </div>
            <div class="oth">
                <div>
                    <svg t="1618810190173" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22116" width="24" height="24"><path d="M518.1 193.1l103.1 205.2 11.6 23 25.5 3.6 228.7 32.6L722 615.3l-19 18.2 4.5 25.9 20.8 118.9 9.2 52.5 5.9 33.8 3.2 18.5-206-106.3-22.6-11.7-22.6 11.6L289.4 883.2l39-223.9 4.5-25.9-19-18.2L149.1 457.6l228.8-32.7 25.5-3.6 11.6-23L518.1 193.1M518.1 118.3c-11.1 0-20.6 6.3-25.2 15.4L370.9 376.2 98.2 415.1c-10.2 1.5-19.2 8.4-22.7 18.7-3.5 10.4-0.3 21.2 7.1 28.3l197.3 188.7-46.5 266.6c-1.7 10 2.2 20.6 11.2 26.9 5 3.6 10.8 5.3 16.5 5.3 4.6 0 9.1-1.1 13.1-3.2l243.9-125.8 243.8 125.8c4.1 2.1 8.6 3.2 13.2 3.2 5.7 0 11.5-1.7 16.4-5.3 8.9-6.3 13-16.9 11.2-26.9 0 0-4.5-25.8-10.7-61.3-4.5-25.7-9.9-56.5-15.1-86.4-10.8-61.5-20.8-118.9-20.8-118.9l197.3-188.7c7.4-7.1 10.6-18 7.1-28.3-3.3-10.3-12.4-17.3-22.6-18.7l-272.7-38.9L543.3 133.7C538.7 124.6 529.2 118.3 518.1 118.3L518.1 118.3z" p-id="22117" fill="#8a8a8a"></path></svg>
                </div>
                <div>
                    <svg t="1618810250989" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22998" width="24" height="24"><path d="M878.3 98.2H145.7c-44.7 0-81 36.3-81 81V714c0 44.7 36.3 81 81 81h192.8l149.2 121.8c7.4 6 16.3 9 25.3 9 8.9 0 17.9-3 25.2-9l150-121.8h190c44.7 0 81-36.3 81-81V179.2c0.1-44.7-36.3-81-80.9-81z m1 615.8c0 0.5-0.5 1-1 1H674.1c-9.2 0-18.1 3.2-25.2 9L513.1 834.2 378.1 724c-7.1-5.8-16.1-9-25.3-9H145.7c-0.5 0-1-0.5-1-1V179.2c0-0.5 0.5-1 1-1h732.5c0.5 0 1 0.5 1 1V714z" p-id="22999" fill="#8a8a8a"></path><path d="M322.1 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" p-id="23000" fill="#8a8a8a"></path><path d="M513.1 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" p-id="23001" fill="#8a8a8a"></path><path d="M704.3 447.6m-50 0a50 50 0 1 0 100 0 50 50 0 1 0-100 0Z" p-id="23002" fill="#8a8a8a"></path></svg>
                </div>
                <div>
                    <svg t="1618810286671" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23882" width="24" height="24"><path d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z" fill="#8a8a8a" p-id="23883"></path></svg>
                </div>
            </div>
        </div>
        <!--  -->
        <div>
            <v-list :playList='tracks.list' ></v-list>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {playlistDetail} from "../api/login"
import {reactive,ref} from "vue"
import {useRouter , useRoute } from "vue-router"
import vList from "../components/vList.vue"

const Router = useRouter();
const Route = useRoute()
const details = reactive({
    playlist:{},
})
let avatarUrl = ref("")
let identityIconUrl = ref("")
let nickname = ref("")
let tracks = reactive({
    list : []
})

playlistDetail("/playlist/detail",{
    id:Route.query.id
}).then(res =>{
    console.log(res)
    if(res.data.code == 200){
        details.playlist = res.data.playlist
        avatarUrl.value = res.data.playlist.creator.avatarUrl
        identityIconUrl.value = res.data.playlist.creator.avatarDetail?res.data.playlist.creator.avatarDetail.identityIconUrl:""
        nickname.value = res.data.playlist.creator.nickname
        tracks.list = res.data.playlist.tracks
    }
})

</script>
<style scoped>
    [v-cloak]{
        display: none;
    }
    .playListDetails{
        width: 100%;
    }
    .top-details{
        /* height: 180px; */
        background:linear-gradient(130deg,#999,#888);
        padding: 30px 15px;
        display: flex;
        align-content: center;
        margin-bottom: 20px;
        border-radius: 0px 0px 120px 120px /0px 0px 10px 10px;
        position: relative;
    }
    .top-details .content{
        display: flex;
        align-content: center;
        width: 100%;
        justify-content: space-between;
    }
    .coverImg{
        width: 120px;
        height: 120px;
    }
    .coverImg img{
        width:100%;
        height: 100%;
        border-radius: 10px;
    }
    .content .info{
        width: 200px;
        font-size: 14px;
    }
    .content .info .name{
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 10px;
    }
    .description{
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(199, 196, 196);
        font-size: 14px;
    }

    .creator{
        margin-bottom: 10px;
        position: relative;
        display: flex;
        color: #fff;
        align-content: center;
    }
    .avatarWarpper{
        position: relative;
        width: 30px;
        height: 30px;
    }
    .avatar{
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }
    .identityIcon{
        position: absolute;
        z-index: 2;
        width: 16px;
        height: 16px;
        bottom: -2px;
        right: -6px;
    }
    .creator .nickname{
        line-height: 30px;
        margin-left: 10px;
        color: rgb(199, 196, 196);
    }
    .oth{
        display: flex;
        align-items: center;
        position: absolute;
        bottom: -25px;
        border-radius: 20px;
        background: #fff;
        font-size: 16px;
        width: 150px;
        left: 50%;
        margin-left: -85px;
        box-shadow:  0 0 10px rgba(0, 0, 0, .1);
        padding: 10px 10px;
        justify-content: space-around;
    }
</style>