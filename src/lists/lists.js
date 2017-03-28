define([
    'text!src/lists/lists.html',
    'jquery',
    'css!src/lists/lists.css'
], function(html, jquery) {
    'use strict';
    function add (){
        $('#container').html(html);
    }

    function getdata_riben (){
        $.get('http://localhost:3000/getriben',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

     function getdata_hanguo (){
        $.get('http://localhost:3000/gethanguo',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_xiang (){
        $.get('http://localhost:3000/getxiang',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_meiguo (){
        $.get('http://localhost:3000/getmeiguo',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_faguo (){
        $.get('http://localhost:3000/getfaguo',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

     function getdata_aozhou (){
        $.get('http://localhost:3000/getaozhou',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_yingguo (){
        $.get('http://localhost:3000/getyingguo',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_taiguo (){
        $.get('http://localhost:3000/gettaiguo',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

     function getdata_taiwan (){
        $.get('http://localhost:3000/gettaiwan',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_yidali (){
        $.get('http://localhost:3000/getyidali',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
            $("img.lazy").lazyload({effect: "fadeIn",failure_limit : 20});
        })
    }

    function getdata_deguo (){
        $.get('http://localhost:3000/getdeguo',function(res){
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
            $('#lists_left').html(home_left);
            $('#lists_right').html(home_right);
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
        getdata_riben : getdata_riben,
        getdata_hanguo:getdata_hanguo,
        getdata_xiang:getdata_xiang,
        getdata_meiguo:getdata_meiguo,
        getdata_faguo:getdata_faguo,
        getdata_aozhou:getdata_aozhou,
        getdata_yingguo:getdata_yingguo,
        getdata_taiguo:getdata_taiguo,
        getdata_taiwan:getdata_taiwan,
        getdata_yidali:getdata_yidali,
        getdata_deguo:getdata_deguo,
    }
});