
const router:Array<any> = [
    { 
        path: '/',
        meta:{
            kepp:false,
            nav:true
        },
        component: () =>  import("../views/index.vue")
    },
    { 
        path: '/playlistDetail',
        name:'playlistDetail',
        meta:{
            kepp:false,
            nav:false
        }, 
        component: () =>  import("../views/playlistDetail.vue")},
    { 
        path: '/my',
        name:'my',
        meta:{
            keep:false,
            nav:true
        },
         component: () =>  import("../views/my.vue")
    },
    { 
        path: '/play',
        name:'play',
        meta:{
            keep:false,
            nav:false
        },
         component: () =>  import("../views/play.vue")
    },
]
export default router