<template>
    <div id="playContent">
         <!-- 隐藏播放器 -->
        <audio id="audio" controls="controls" ref='audio'  style="displat:none" />
        <div class="bg">
            <img v-if="songs.picUrl != ''" :src="songs.picUrl" alt="">
        </div>
        <div class="plate" :class="{'play':isPlay}">
            <img v-if="songs.picUrl != ''" :src="songs.picUrl" alt="">
        </div>
        <div class="playController">
            <div class="oth"></div>
            <div class="progress">
                <div class='line' id="line">
                    <div class="point" :style="{left:pointLeft+ 'px'}"></div>
                </div>
                <div class="time">{{timeOut}}</div>
            </div>
            <div class="Controller">
                <div><svg t="1618818432306" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2486" width="32" height="32"><path d="M659.63 879.59H364.29c-40.13 0-79.07-8.3-115.72-24.67-35.3-15.76-66.97-38.3-94.14-66.99-55.64-58.75-86.28-136.77-86.28-219.7 0-82.92 30.64-160.94 86.28-219.7 27.17-28.69 58.84-51.23 94.14-67 36.65-16.37 75.58-24.67 115.72-24.67h295.34c10.15 0 20.37 0.54 30.38 1.62 13.18 1.41 22.72 13.24 21.3 26.42s-13.24 22.72-26.42 21.3c-8.31-0.89-16.81-1.34-25.26-1.34H364.29c-66.03 0-128.18 27.23-175.01 76.67-47.16 49.8-73.13 116.1-73.13 186.69s25.97 136.89 73.13 186.69c46.82 49.44 108.97 76.67 175.01 76.67h295.34c66.03 0 128.18-27.23 175.01-76.67 47.16-49.8 73.13-116.1 73.13-186.69 0-13.25 10.75-24 24-24s24 10.75 24 24c0 82.92-30.64 160.94-86.28 219.69-27.17 28.69-58.84 51.23-94.14 67-36.65 16.38-75.59 24.68-115.72 24.68z" p-id="2487" fill="#ffffff"></path><path d="M896.94 260.76l-185.33-107c-15.48-8.94-34.83 2.23-34.83 20.11v214c0 17.88 19.35 29.05 34.83 20.11l185.33-107c15.48-8.94 15.48-31.28 0-40.22z" p-id="2488" fill="#ffffff"></path></svg></div>
                <div><svg t="1618818649722" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8980" width="32" height="32"><path d="M803.584 134.592c-18.176-10.048-39.936-10.112-58.112 0L192 443.008l0-282.88c0-17.664-14.336-32-32-32S128 142.464 128 160.128l0 344.896C127.744 507.2 127.104 509.248 127.104 511.488S127.744 515.84 128 518.016l0 346.112c0 17.664 14.336 32 32 32s32-14.336 32-32L192 579.968l553.408 308.352C754.56 893.44 764.48 896 774.528 896s19.968-2.56 29.056-7.616c18.176-10.112 28.992-28.224 28.992-48.576L832.576 183.104C832.576 162.88 821.76 144.768 803.584 134.592zM768.192 829.248 198.016 511.488 771.328 192 768.192 829.248z" p-id="8981" fill="#ffffff"></path></svg></div>
                <div @click="playHandle" v-if="!isPlay"><svg t="1618818555735" class="icon" viewBox="0 0 1085 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7259" width="50" height="50"><path d="M546.904228 18.10573c-277.76918 0-502.94529 225.17611-502.94529 502.94529 0 277.77164 225.17488 502.94775 502.94529 502.94775 277.76795 0 502.94529-225.17611 502.94529-502.94775C1049.849518 243.28307 824.672178 18.10573 546.904228 18.10573L546.904228 18.10573zM546.904228 973.701659c-249.992631 0-452.651868-202.659237-452.651868-452.651868 0-249.990172 202.659237-452.649408 452.651868-452.649408s452.650638 202.659237 452.650638 452.649408C999.554866 771.042422 796.896859 973.701659 546.904228 973.701659L546.904228 973.701659zM775.203924 485.406478c-78.267962-53.25591-220.1919-132.967608-301.004232-182.358388-33.132146-20.893592-60.993549-12.502952-63.667043 24.399633-1.938099 98.840588 0 289.550264 0 390.101445 1.681079 37.462125 34.709926 42.403293 63.37559 27.362121 80.72133-48.906255 219.456505-132.95777 300.588574-182.112436C773.968017 562.476656 836.097862 528.305364 775.203924 485.406478L775.203924 485.406478z" p-id="7260" fill="#ffffff"></path></svg></div>
                <div v-else @click="pausedHanle"><svg t="1618818993205" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10587" width="50" height="50"><path d="M512 12C236.31 12 12 236.31 12 512s224.31 500 500 500 500-224.31 500-500S787.69 12 512 12z m0 944.44C266.94 956.44 67.56 757.06 67.56 512S266.94 67.56 512 67.56 956.44 266.94 956.44 512 757.06 956.44 512 956.44z" p-id="10588" fill="#ffffff"></path><path d="M373.11 289.78a27.76 27.76 0 0 0-27.78 27.78v388.88a27.78 27.78 0 1 0 55.56 0V317.56a27.76 27.76 0 0 0-27.78-27.78zM650.89 289.78a27.76 27.76 0 0 0-27.78 27.78v388.88a27.78 27.78 0 0 0 55.56 0V317.56a27.76 27.76 0 0 0-27.78-27.78z" p-id="10589" fill="#ffffff"></path></svg></div>
                <div><svg t="1618818703168" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9676" width="32" height="32"><path d="M832 160.128c0-17.664-14.336-32-32-32S768 142.464 768 160.128l0 282.88L214.592 134.592c-18.176-10.112-39.936-10.048-58.112 0C138.24 144.768 127.424 162.88 127.424 183.168l0 656.64c0 20.224 10.816 38.464 29.056 48.576C165.568 893.44 175.488 896 185.472 896s19.968-2.56 29.056-7.616L768 579.968l0 284.096c0 17.664 14.336 32 32 32s32-14.336 32-32L832 160.128zM191.808 829.248 188.672 192l573.312 319.488L191.808 829.248z" p-id="9677" fill="#ffffff"></path></svg></div>
                <div><svg t="1618818597426" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8366" width="32" height="32"><path d="M832 832a32 32 0 0 1 3.744 63.776L832 896H192a32 32 0 0 1-3.744-63.776L192 832h640z m0-304a32 32 0 0 1 3.744 63.776L832 592H192a32 32 0 0 1-3.744-63.776L192 528h640zM224.256 128.544a64 64 0 0 1 26.816 5.888L256 136.96l127.488 72.832a64 64 0 0 1 4.832 108.096l-4.8 3.04L256 393.824a64 64 0 0 1-95.52-50.016l-0.224-5.568V192.544a64 64 0 0 1 64-64z m0 64v145.696l127.488-72.864-127.488-72.832zM832 224a32 32 0 0 1 3.744 63.776L832 288H496a32 32 0 0 1-3.744-63.776L496 224H832z" p-id="8367" fill="#ffffff"></path></svg></div>
            </div>
        </div>
       
    </div>
</template>
<script lang="ts" setup>
    import { defineProps , onMounted ,ref ,reactive ,onUnmounted,computed,inject } from "vue"
    import { useRoute,useRouter } from "vue-router"
    import { useStore , mapGetters} from "vuex"
    import {getSongDetail ,getSongUrl} from "../api/login"
    import {formatSecToDate} from "../utils/utils"

    const Router = useRouter()
    const Route = useRoute()
    const songId = defineProps({
        id:{
            type:String
        }
    })
    const store = useStore()
    // 获取全局audio标签
    const audio:any = inject("audio")
    const songs = reactive({
        details:{},
        picUrl:""
       
    })
    const isPlay = ref(false)
    let timer:any = null
    let playStatus:any = null
    let duration:any = ref('')
    let currentTime:any = ref('')
    let line:any = null
    let pointLeft = ref(0)
    let timeOut =  computed(() => {
            return  formatSecToDate(((duration.value - currentTime.value)))
        })
    function getSongDetails (){
           getSongDetail(`/song/detail?ids=${Route.query.songid}`,{}).then(res =>{
            if(res.data.code == 200){
                songs.picUrl = res.data.songs[0].al.picUrl
                console.log(Route.query.songid)
                store.commit('play/setSongInfo',res.data.songs[0])
                getSongUrls(Route.query.songid)
            }
        })
    }
 
    function getSongUrls (id) {
        getSongUrl(`/song/url?id=${id}`,{}).then(res =>{
            console.log(res)
            if(res.data.code == 200) {
                audio.src = res.data.data[0].url
                clearInterval(playStatus)
                playStatus = setInterval(() => {
                    console.log("audio.readyState",audio.readyState)
                    if(audio.readyState == 4){
                        duration.value = audio.duration
                        clearInterval(playStatus)
                    }
                },500)
            }
        })
    }
    function pausedHanle (){
        isPlay.value = false
        clearInterval(timer)
        store.commit('play/setPlayStatus',false)
        audio.pause()
    }
    function playHandle() {
        isPlay.value = true
        audio.play()
        store.commit('play/setPlayStatus',true)
        clearInterval(timer)
          timer = setInterval(() =>{
              if(audio.currentTime == audio.duration){
                  pausedHanle()
              }
            currentTime.value = audio.currentTime;
            pointLeft.value = Number((line.offsetWidth * audio.currentTime)/ audio.duration)
            store.commit('play/setPlayTimeOut',audio.duration - audio.currentTime)
         },1000)
    }

    onMounted(() =>{
        //  audio = document.getElementById('audio')
         line = document.getElementById("line")
         console.log(line.offsetWidth)
         getSongDetails()
            clearInterval(playStatus)
            playStatus = setInterval(() => {
                if(audio.readyState == 4){
                   playHandle();
                }
            },500)
    })

    onUnmounted(() =>{
          clearInterval(playStatus)
          clearInterval(timer)
    })

</script>

<style scoped>
.playContent{
    overflow: hidden;
    position: relative;
}
.bg{
    transform: scale(1.5,1.5);
    filter: blur(20px);
    position: absolute;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .4);
}
.plate{
    width: 180px;
    height: 180px;
    position: absolute;
    z-index: 3;
    border-radius: 200px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    margin: -250px 0 0 -140px;
    border: 50px solid black;
   
}
.plate.play{
     animation:turn 5s linear infinite;      
}
.plate img{
    width: 100%;
    height: 100%;
}
#audio{
    margin-top: 100vh;
}

@keyframes turn {
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
}
.progress{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
}
.point{
    width: 8px;
    height: 8px;
    position: absolute;
    z-index: 2;
    top: -3px;
    border-radius: 5px;
    background: #fff;
    left: 0;
}
.progress .line{
    height: 2px;
    width: 300px;
    background: #aaa7a7;
    border-radius: 2px;
    position: relative;
}
.time{
    color: #fff;
    font-size: 12px;
}
.playController{
    position: absolute;
    z-index: 3;
    width: 100%;
    left: 0;
    bottom: 20px;
}
.playController .Controller{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

</style>