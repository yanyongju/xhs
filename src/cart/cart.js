define([
    'text!src/cart/cart.html',
    'jquery',
    'css!src/cart/cart.css'
], function(html, jquery) {
    'use strict';
    function add (){
        $('#container').html(html);
    }

    function getdata_xiangnaier (){
        $.get('http://localhost:3000/getxiangnaier',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_zishengtang (){
        $.get('http://localhost:3000/getzishengtang',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_difuni (){
        $.get('http://localhost:3000/getdifuni',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_yueshi (){
        $.get('http://localhost:3000/getyueshi',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_luyiweideng (){
        $.get('http://localhost:3000/getluyiweideng',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_wuyin (){
        $.get('http://localhost:3000/getwuyin',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_shengluolan (){
        $.get('http://localhost:3000/getshengluolan',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_jifu (){
        $.get('http://localhost:3000/getjifu',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_diao (){
        $.get('http://localhost:3000/getdiao',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_xuehua (){
        $.get('http://localhost:3000/getxuehua',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_aili (){
        $.get('http://localhost:3000/getaili',function(res){
            var lives = res.data.notes;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = getTemplate(lives[i]);
                if(i%2==0){
                    home_left.push(box);
                }else{
                    home_right.push(box);
                }
            }
            home_left = home_left.join('');
            home_right = home_right.join('');
            $('#home_left').html(home_left);
            $('#home_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getTemplate(data){
            var str = '<a id="'+data.id+'" href="#/goumai" class="box">\
                <img class="lazy" data-original="'+data.image+'"/>\
                <p class="h">'+data.title+'</p>\
                <div class="desc">'+data.desc+'</div>\
                <div class="user">\
                    <div class="user_image">\
                    <img class="lazy" data-original="'+data.user.image+'"/>\
                    </div>\
                    <div class="user_name"><p>'+data.user.nickname+'</p></div>\
                    <div class="user_likes">\
                        <span><img src="//s.xiaohongshu.com/s/note-list/*/img/likes-icon-be12924.png"/></span>\
                        '+data.likes+'\
                    </div>\
                </div>\
            </a>'
            return str;
        } 

    return {
        add:add,
        getdata_xiangnaier : getdata_xiangnaier,
        getdata_zishengtang:getdata_zishengtang,
        getdata_difuni:getdata_difuni,
        getdata_yueshi:getdata_yueshi,
        getdata_luyiweideng:getdata_luyiweideng,
        getdata_wuyin:getdata_wuyin,
        getdata_shengluolan:getdata_shengluolan,
        getdata_jifu:getdata_jifu,
        getdata_diao:getdata_diao,
        getdata_xuehua:getdata_xuehua,
        getdata_aili:getdata_aili,
    }
});