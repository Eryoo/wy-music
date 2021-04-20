<template>
    <div class="list">
        <div v-for="(item,index) in props.playList" :key="item.id">
            <vListItem :data="item" :itemIndex="index"></vListItem>
        </div>
    </div>
</template>
<script lang='ts' setup>
import vListItem from "../components/vListItem.vue"
import { defineProps } from 'vue'

const props = defineProps({
    playList:{
        type:Array,
    }
})
</script>