<template>
    <div class="personalized">
        <div class="title">
            <div>推荐歌单</div>
            <div class="more">更多></div>
        </div>
        <div class="content">
            <div class="items" v-for="(item) in obj.list" :key="item.id" @click="goToDetails(item.id)">
                <img :src="item.picUrl" alt="">
                <div class="playCount">
                    <svg t="1618810336913" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26691" width="14" height="14"><path d="M246.21875 905.22265625c-13.271484375 0-26.54296875-3.515625-38.583984375-10.458984375-24.2578125-13.974609375-38.671875-39.0234375-38.671875-66.97265625V376.6484375c0-9.228515625 7.470703125-16.69921875 16.69921875-16.69921875s16.69921875 7.470703125 16.69921875 16.69921875v451.14257812499994c0 15.8203125 8.26171875 30.05859375 21.97265625 37.96875 13.7109375 7.998046875 30.146484375 7.91015625 43.857421875 0l545.625-316.0546875c14.23828125-8.26171875 22.412109375-22.939453125 21.884765625-39.287109375-0.52734375-16.435546875-9.580078125-30.5859375-24.2578125-37.880859375L163.337890625 149.36328125c-8.26171875-4.130859375-11.6015625-14.150390625000002-7.470703125-22.412109375 4.130859375-8.26171875 14.23828125-11.6015625 22.412109375-7.470703125L826.384765625 442.56640625c25.83984375 12.919921875 41.8359375 37.880859375 42.802734375 66.796875 0.87890625 28.916015625-13.53515625 54.755859375-38.49609375 69.2578125L284.978515625 894.67578125c-12.12890625 7.03125-25.400390625 10.546875-38.759765625 10.546875z" p-id="26692" fill="#ffffff"></path></svg>
                    {{item.numFormat.value + item.numFormat.unit}}</div>
                <div>
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
    import {ref ,reactive ,computed } from "vue"
    import {personalized} from "../api/login"
    import { useRouter } from "vue-router"
    import {numberFormat} from "../utils/utils"

    const obj = reactive({
        list : []
    })
    const Router = useRouter()
    console.log(Router)
    const goToDetails = (value) =>{
        Router.push({
            name:'playlistDetail',
            query:{
                id:value
            }
        })
    }

    personalized("/personalized?limit=6").then(res => {
        if(res.data.code == 200){
            obj.list = res.data.result
            obj.list.forEach(item =>{
                item.numFormat = numberFormat(item.playCount)
            })
        }
    })

</script>
<style scoped lang='scss'>
.personalized{
    padding-left: 10px;
}
.title{
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding-right: 10px;
    justify-content: space-between;
    .more{
        font-size: 14px;
        font-weight:normal;
        border: 1px solid #999;
        padding:  0 5px;
        border-radius: 10px;
        color: #999;
    }
}
.content{
    overflow: hidden;
    overflow-x: auto;
    display: flex;
    font-size: 12px;
}
.items {
    margin-right: 10px;
    position: relative;
}
.items img{
    width: 100px;
    height: 100px;
    border-radius: 10px;
}
.items .playCount{
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: #fff;
    border-radius: 20px;
    background: rgba(0, 0, 0, .6);
    padding: 5px 5px;
}

</style>