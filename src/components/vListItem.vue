<template>
    <div class="items" @click="getDatailsSong(item.data.id)">
        <div class="no">{{item.itemIndex + 1}}</div>
        <div class="info">
            <div class="name">{{item.data.name}}</div>
            <div class="ar">{{ar.toString()}}</div>
        </div>
        <div class="play">
                <svg v-if="item.data.mv > 0" t="1618810065296" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19753" width="32" height="32"><path d="M957.44 326.656c-8.192-53.248-52.224-95.232-105.472-101.376-234.496-27.648-443.392-27.648-678.912 0-53.248 7.168-97.28 49.152-105.472 101.376C56.32 388.096 51.2 450.56 51.2 512s5.12 123.904 15.36 183.296c8.192 53.248 52.224 95.232 105.472 101.376 117.76 14.336 228.352 20.48 338.944 20.48s222.208-7.168 338.944-20.48c54.272-6.144 97.28-48.128 105.472-101.376 10.24-61.44 15.36-122.88 15.36-184.32 2.048-61.44-3.072-123.904-13.312-184.32z m-40.96 362.496c-5.12 34.816-34.816 62.464-70.656 66.56-231.424 27.648-437.248 27.648-668.672 0-35.84-4.096-64.512-31.744-70.656-67.584C97.28 630.784 92.16 571.392 92.16 512s5.12-118.784 15.36-178.176c5.12-34.816 34.816-62.464 70.656-67.584C409.6 238.592 614.4 238.592 846.848 266.24c35.84 4.096 64.512 31.744 70.656 66.56 10.24 59.392 15.36 118.784 15.36 178.176-1.024 59.392-6.144 118.784-16.384 178.176zM548.864 434.176c-17.408-12.288-38.912-23.552-60.416-31.744-1.024 0-2.048-1.024-3.072-1.024-3.072-1.024-5.12-1.024-7.168-1.024-11.264-2.048-23.552 0-32.768 6.144-12.288 7.168-20.48 17.408-24.576 30.72-7.168 23.552-11.264 49.152-11.264 75.776 0 23.552 3.072 48.128 10.24 75.776 0 2.048 1.024 4.096 2.048 5.12 0 1.024 0 1.024 1.024 2.048 8.192 19.456 27.648 31.744 48.128 31.744 6.144 0 13.312-1.024 19.456-4.096 17.408-7.168 39.936-17.408 59.392-31.744 17.408-12.288 33.792-25.6 52.224-43.008 18.432-20.48 18.432-50.176 0-70.656-18.432-19.456-34.816-32.768-53.248-44.032z m22.528 86.016c-15.36 15.36-29.696 26.624-45.056 37.888-17.408 12.288-35.84 20.48-52.224 27.648-5.12 2.048-10.24 0-13.312-4.096 0-1.024-1.024-2.048-1.024-2.048-6.144-24.576-9.216-46.08-9.216-65.536 0-22.528 3.072-44.032 9.216-64.512v-1.024c1.024-3.072 3.072-4.096 4.096-5.12 3.072-1.024 6.144-2.048 8.192-1.024 1.024 0 3.072 1.024 4.096 1.024 17.408 7.168 34.816 16.384 49.152 26.624 15.36 10.24 29.696 21.504 44.032 37.888 5.12 2.048 5.12 8.192 2.048 12.288z" p-id="19754" fill="#bfbfbf"></path></svg>
        </div>
        <div class="more">
            <svg t="1618809853728" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4735" width="24" height="24"><path d="M336 448a48 48 0 1 0 0 96 48 48 0 0 0 0-96z m176 0a48 48 0 1 0 0 96 48 48 0 0 0 0-96z m176 0a48 48 0 1 0 0 96 48 48 0 0 0 0-96z" p-id="4736" fill="#8a8a8a"></path></svg>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps ,toRef } from "vue"
import {getSongDetail ,getSongUrl} from "../api/login"
import { useRouter } from "vue-router"
import { useStore , mapActions} from "vuex"
const item = defineProps({
    data:{
        type:Object,
    },
    itemIndex:{
        type:Number
    }
})
const Router = useRouter()
const store = useStore()
const ar = item.data.ar.map(item => item.name)


function getDatailsSong (id) {
    store.commit("play/setSongUrl","")
    // store.dispatch('play/getSongUrl',id)
    Router.push({
        path:"/play",
        query:{
            songid :id
        }
    })

}

</script>
<style scoped>
    .items{
        display: flex;
        align-content: center;
        align-items: center;
        padding: 10px 15px;
        /* justify-content: space-around; */
    }
    .no{
        color: #999;
        font-size: 16px;
        margin-right: 15px;
    }
    .info{
        width: 245px;
    }
    .name{
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
    }
    .ar{
        font-size: 14px;
        color: #999;
    }
    .play,.more{
        width: 30px;
        font-size: 14px;
        padding: 0 8px;
    }
</style>