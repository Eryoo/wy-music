<template>
   <div class="app">
     <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <!-- 底部导航 -->
    <bottomNav></bottomNav>
    <audio id="audio" controls="controls" ref='audio' style="displat:none" />
    </div>
</template>

<script lang="ts">
import { defineComponent , watch ,ref ,provide , onMounted ,computed} from 'vue'
import bottomNav from "./components/nav.vue"
import { useRoute,useRouter } from 'vue-router'
export default defineComponent({
  name: 'App', 
  components:{bottomNav},
  setup(){
    onMounted(()=>{
       const audio = document.getElementById('audio')
        provide('audio',audio)
    })
    const Router = useRouter()
    const Route = useRoute();
    console.log(Route)
    console.log(Router)
    const transitionName = ref("fade")
    watch(() => Route.path,(n,o) =>{
      if(n == '/play'){
        transitionName.value = "top"
      }else{
        transitionName.value = ""
      }
    })
    return {
      transitionName
    }
  }
})
</script>

<style>
    .top-enter-active,
    .top-leave-active {
      transition: .3s;
      transform: translateY(0%);
    }

    .top-enter-from,
    .top-leave-to {
      transform: translateY(50%);
    } 
   #audio{
     left: -20000px;
     position: absolute;
   }
   body{
     background: #e1e1e1;
   }
</style>
