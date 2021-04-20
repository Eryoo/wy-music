<template>
    <div class="playlistPages">
        <div class="tags-content">
            <div class="tags" id="tags">
                <div v-for="item in tags.list" :key='item.id' class="item" :class="{'active': catActive == item.name}" @click="onSelectTags(item.name)">
                    {{item.name}}
                </div>
            </div>
        </div>

        <!--  -->
        <div class="playlists">
            <div class="playlists-item" v-for="item in playlists.list" :key='item.coverImgId' @click="goToDetails(item.id)">
                <div class="playCount"><svg t="1618810336913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26691" width="14" height="14"><path d="M246.21875 905.22265625c-13.271484375 0-26.54296875-3.515625-38.583984375-10.458984375-24.2578125-13.974609375-38.671875-39.0234375-38.671875-66.97265625V376.6484375c0-9.228515625 7.470703125-16.69921875 16.69921875-16.69921875s16.69921875 7.470703125 16.69921875 16.69921875v451.14257812499994c0 15.8203125 8.26171875 30.05859375 21.97265625 37.96875 13.7109375 7.998046875 30.146484375 7.91015625 43.857421875 0l545.625-316.0546875c14.23828125-8.26171875 22.412109375-22.939453125 21.884765625-39.287109375-0.52734375-16.435546875-9.580078125-30.5859375-24.2578125-37.880859375L163.337890625 149.36328125c-8.26171875-4.130859375-11.6015625-14.150390625000002-7.470703125-22.412109375 4.130859375-8.26171875 14.23828125-11.6015625 22.412109375-7.470703125L826.384765625 442.56640625c25.83984375 12.919921875 41.8359375 37.880859375 42.802734375 66.796875 0.87890625 28.916015625-13.53515625 54.755859375-38.49609375 69.2578125L284.978515625 894.67578125c-12.12890625 7.03125-25.400390625 10.546875-38.759765625 10.546875z" p-id="26692" fill="#ffffff"></path></svg>{{numberFormat(item.playCount).value + numberFormat(item.playCount).unit}}</div>
                <div class="coverImg">
                    <img class="coverImgUrl" :src="item.coverImgUrl" alt="">
                </div>
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {playlistCatlist , topPlaylistHighquality ,playlistHighqualityTags} from "../api/login"
import {nextTick, reactive,ref } from 'vue'
import {numberFormat} from "../utils/utils"
import {useRouter} from "vue-router"

    const Router  = useRouter()
    const tags = reactive({
        list:[]
    })
    const playlists = reactive({
        list:[]
    })

    const catActive = ref("华语")

    const goToDetails = (value) =>{
        Router.push({
            name:'playlistDetail',
            query:{
                id:value
            }
        })
    }
    function onSelectTags (name){
        catActive.value = name
        getList()
    }

    playlistHighqualityTags('/playlist/highquality/tags',{}).then(res =>{
        
        if(res.data.code == 200){
            tags.list = res.data.tags
            nextTick(() => {
                let item = document.getElementsByClassName('item')
                let tags = document.getElementById('tags')
                tags.style.width = item.length * 45 + "px"
                
            })
        }
    })

    function getList(){
        topPlaylistHighquality(`/top/playlist/highquality`,{cat:catActive.value}).then(res =>{
            console.log(res)
            if(res.data.code == 200){
                playlists.list = res.data.playlists
            }
        })
    }
    getList()
    

</script>
<style lang='scss' scoped>
.playlistPages{
    width: 100%;
    overflow: hidden;
    .tags-content{
        width: 100vw;
        overflow: hidden;
        overflow-x: auto;
    }
    .tags{
        display: flex;
        align-items: center;
        overflow: hidden;
        overflow-x: auto;
        font-size: 14px;
        padding: 10px 10px;
        .item{
            padding: 3px 5px;
            font-size: 14px;
            border-bottom: 2px solid #fff;
            &.active{
                border-bottom: 2px solid #ff7788;
            }
        }
    }
}
    .playlists{
        padding: 10px 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        .playlists-item{
            width: 30%;
            position: relative;
            margin-bottom: 15px;
            .playCount{
                font-size: 12px;
                position: absolute;
                top: 5px;
                right: 0;
                z-index: 4;
                display: flex;
                align-items: center;
                background: rgba(0,0,0,.2);
                color: #fff;
                padding: 2px 5px;
                border-radius: 10px;
            }
            .coverImg{
                position: relative;
                width: 100%;
                height: 110px;
                background: rgba(0,0,0,.2);
                border-radius: 10px;
                &:after{
                    content: "";
                    width: 90%;
                    height: 10px;
                    background-color:rgba(0,0,0,.1);
                    position: absolute;
                    z-index: 2;
                    top: -6px;
                    left: 50%;
                    margin-left: -45%;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }    
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    position: relative;
                    z-index: 3;
                }
            }
            
            .name{
                font-size: 12px;
                height: 35px;
                 text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
    }
</style>