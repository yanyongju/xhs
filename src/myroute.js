define([
    'router',
    'jquery',
    'lazylod'
], function(Router, $) {
    'use strict';
    var router = new Router()
    
    //生活
    .route('#/home',function(req,next){
        console.log('生活')
        //默认
        $('.act').css('color','#333');
        $('[href="#/home"]').css('color','#ff2741');

        require(['src/home/home.js'],function(home){
            home.add();
             $('.bor').css('border','0');
             $('[href="#/hufu"]').css('border-bottom','2px solid #ff2741');
            home.getdata();

            //护肤页面
            router.route('#/hufu',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/hufu"]').css('border-bottom','2px solid #ff2741');
                home.getdata();
            })

            //彩妆页面
            router.route('#/caizhuang',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/caizhuang"]').css('border-bottom','2px solid #ff2741');
                home.getdata_caizhuang();
            })

            //男人页面
             router.route('#/man',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/man"]').css('border-bottom','2px solid #ff2741');
                home.getdata_man();
            })

            //穿搭页面
             router.route('#/chuanda',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/chuanda"]').css('border-bottom','2px solid #ff2741');
                home.getdata_chuanda();
            })

            //包包页面
             router.route('#/bao',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/bao"]').css('border-bottom','2px solid #ff2741');
                home.getdata_bao();
            })

            //鞋子页面
             router.route('#/xiezi',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/xiezi"]').css('border-bottom','2px solid #ff2741');
                home.getdata_xiezi();
            })

            //家居页面
            router.route('#/jiaju',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/jiaju"]').css('border-bottom','2px solid #ff2741');
                home.getdata_jiaju();
            })

            //个人护理页面
            router.route('#/geren',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/geren"]').css('border-bottom','2px solid #ff2741');
                home.getdata_geren();
            })

            //零食页面
             router.route('#/lingshi',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/lingshi"]').css('border-bottom','2px solid #ff2741');
                home.getdata_lingshi();
            })

            //保健品页面
            router.route('#/baojian',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/baojian"]').css('border-bottom','2px solid #ff2741');
                home.getdata_baojian();
            })

            //母婴页面
            router.route('#/muying',function(){
                 //导航状态的切换
                 $('.bor').css('border','0');
                $('[href="#/muying"]').css('border-bottom','2px solid #ff2741');
                home.getdata_muying();
            })
        })
    })

    //目的地
    .route('#/lists',function(req,next){
        console.log('目的地')
        //默认
         $('.act').css('color','#333');
        $('[href="#/lists"]').css('color','#ff2741');

         require(['src/lists/lists.js'],function(lists){
            lists.add();
             $('.bor').css('border','0');
             $('[href="#/riben"]').css('border-bottom','2px solid #ff2741');
            lists.getdata_riben();

            //日本
            router.route('#/riben',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/riben"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_riben();
            })

            //韩国
            router.route('#/hanguo',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/hanguo"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_hanguo();
            })

            //香港
            router.route('#/xiang',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/xiang"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_xiang();
            })

            //美国
            router.route('#/meiguo',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/meiguo"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_meiguo();
            })

            //法国
            router.route('#/faguo',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/faguo"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_faguo();
            })

            //澳洲
            router.route('#/aozhou',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/aozhou"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_aozhou();
            })

            //英国
            router.route('#/yingguo',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/yingguo"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_yingguo();
            })

            //泰国
            router.route('#/taiguo',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/taiguo"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_taiguo();
            })

            //台湾
            router.route('#/taiwan',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/taiwan"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_taiwan();
            })

            //意大利
            router.route('#/yidali',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/yidali"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_yidali();
            })

            //德国
            router.route('#/deguo',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/deguo"]').css('border-bottom','2px solid #ff2741');
                lists.getdata_deguo();
            })
        })    
    })

    //品牌
    .route('#/cart',function(req,next){
        //默认
         $('.act').css('color','#333');
        $('[href="#/cart"]').css('color','#ff2741');
        console.log('购物车')
       
       require(['src/cart/cart.js'],function(cart){
            cart.add();
             $('.bor').css('border','0');
             $('[href="#/xiangnaier"]').css('border-bottom','2px solid #ff2741');
            cart.getdata_xiangnaier();

            //香奈儿
            router.route('#/xiangnaier',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/xiangnaier"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_xiangnaier();
            })

            //资生堂
            router.route('#/zishengtang',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/zishengtang"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_zishengtang();
            })

            //蒂芙尼
            router.route('#/difuni',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/difuni"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_difuni();
            })

            //悦诗风吟
            router.route('#/yueshi',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/yueshi"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_yueshi();
            })

            //路易威登
            router.route('#/luyiweideng',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/luyiweideng"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_luyiweideng();
            })

            //无印良品
            router.route('#/wuyin',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/wuyin"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_wuyin();
            })

            //圣罗兰
            router.route('#/shengluolan',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/shengluolan"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_shengluolan();
            })

            //肌肤之钥
            router.route('#/jifu',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/jifu"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_jifu();
            })

            //迪奥
            router.route('#/diao',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/diao"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_diao();
            })

            //雪花秀
            router.route('#/xuehua',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/xuehua"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_xuehua();
            })

            //爱丽小屋
            router.route('#/aili',function(){
                //导航状态的切换
                $('.bor').css('border','0');
                $('[href="#/aili"]').css('border-bottom','2px solid #ff2741');
                cart.getdata_aili();
            })
       });
    })

    .route('#/mine',function(req,next){
         $('.act').css('color','#333');
        $('[href="#/mine"]').css('color','#ff2741');
        console.log('个人中心')
        
        require(['src/buy/buy.js'],function(buy){
            buy.add();
            buy.getdata();
        })
    })

    .route('#/goumai/:id',function(req,next){
        var id = req.params.id;
        require(['src/buyto/buyto.js'],function(buyto){
            buyto.add(id);
            buyto.getdata(id);
        })
    })

    .route('#/gouwuche',function(req,next){
        require(['src/buycart/buycart.js'],function(buycart){
            buycart.add();
            // buycart.getdata();
        })
    })
})