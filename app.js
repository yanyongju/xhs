require.config({
    baseUrl:'/',
    paths:{
        router:'lib/router.min',
        myroute:'src/myroute',
        jquery:'/lib/jquery-1.12.4.min',
        lazylod:'lib/jquery.lazyload.min',
        text:'lib/text',
        css:'lib/css.min'
    }
})

require(['myroute'],function(){

    location.hash = '#/home'

})