<template>
   <div class="app">
     
      <router-view></router-view>
    
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
  }
})
</script>

<style>

   #audio{
     left: -20000px;
     position: absolute;
   }
   body{
     background: #e1e1e1;
   }
</style>
