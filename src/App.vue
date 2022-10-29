<script setup>

import Header from './components/Header.vue';
import Sidebar from './components/SideBar.vue';

import {ref} from 'vue'

const isOpenMenu = ref(false)

const toogleMenu = () => {
isOpenMenu.value =!isOpenMenu.value
}
</script>

<template>
<div class="container">
<div class="sidebar-toggle" @click="toogleMenu">&#5125;</div>
<Header/>
<Sidebar :openSidebar="isOpenMenu"/>


<div :class="['content',{contemt_full:!isOpenMenu}]">
<router-view/>
</div>
</div>
</template>

<style scoped>
#app{
   font-family:Avenir, Halvetica,Arial,sans-serif;
}
.content{
    max-width:1400px;
    margin-left:250px;
    padding:30px;
    transition: .2s;
}

.sidebar-toggle{
        position:fixed;
        left:0;
        width:15px;
        background:var(--primary-color);
        height:100%;
        top:99px;
        z-index:1;
        cursor:pointer;
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
}
@media screen and (max-width:1023){
        .content{
        margin-left:0;
        }
}

</style>
