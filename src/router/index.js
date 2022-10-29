import {createRouter, createWebHistory} from 'vue-router'
import Index from './views/Index.vue'
import Typograp from './views/TypoGraphy.vue'
import Button from './views/Button.vue'
import Table from './views/Table.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Index',
            component:Index
        },
        {
            path:'/button',
            name:'Button',
            component:Button
        },
        {
            path:'/typography',
            name:'TypoGraphy',
            component:TypoGraphy
        },
        {
            path:'/table',
            name:'Table',
            component:Table
        },
    ]
})

export default router;