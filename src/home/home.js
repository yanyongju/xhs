define([
    'text!src/home/home.html',
    'jquery',
    'css!src/home/home.css'
], function(html, jquery) {
    'use strict';
    function add (){
        $('#container').html(html);
    }

    function getdata (){
        $.get('http://localhost:3000/getlive',function(res){
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

     function getdata_caizhuang (){
        $.get('http://localhost:3000/getcaizhuang',function(res){
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

     function getdata_man (){
        $.get('http://localhost:3000/getman',function(res){
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

    function getdata_chuanda (){
        $.get('http://localhost:3000/getchuanda',function(res){
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

    function getdata_bao (){
        $.get('http://localhost:3000/getbao',function(res){
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

    function getdata_xiezi (){
        $.get('http://localhost:3000/getxiezi',function(res){
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
    
    function getdata_jiaju (){
        $.get('http://localhost:3000/getjiaju',function(res){
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

     function getdata_geren (){
        $.get('http://localhost:3000/getgeren',function(res){
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

     function getdata_lingshi (){
        $.get('http://localhost:3000/getlingshi',function(res){
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

    function getdata_baojian (){
        $.get('http://localhost:3000/getbaojian',function(res){
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

     function getdata_muying (){
        $.get('http://localhost:3000/getmuying',function(res){
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
            var str = '<a id="'+data.id+'" hred="#/goumai" class="box">\
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
        getdata : getdata,
        getdata_caizhuang:getdata_caizhuang,
        getdata_man:getdata_man,
        getdata_chuanda:getdata_chuanda,
        getdata_bao:getdata_bao,
        getdata_xiezi:getdata_xiezi,
        getdata_jiaju:getdata_jiaju,
        getdata_geren:getdata_geren,
        getdata_lingshi:getdata_lingshi,
        getdata_baojian:getdata_baojian,
        getdata_muying:getdata_muying,
    }
});