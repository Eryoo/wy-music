import Vuex from "../state/index"
const audio:any = document.getElementById('audio')
    
export function pausedHanle(){
    Vuex.commit('play/setPlayStatus',false)
    audio.pause()
}


export function playHandle () {
    Vuex.commit('play/setPlayStatus',true)
    audio.play()
}