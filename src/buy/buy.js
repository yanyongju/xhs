define([
    'text!src/buy/buy.html',
    'jquery',
    'css!src/buy/buy.css'
], function(html, jquery) {
    'use strict';
    function add(){
        $('#container').html(html);
    }

    function getdata (){
        $.get('http://localhost:3000/getbuy',function(res){
            var lives = res.data;
            var home_left = [];
            var home_right = [];
            for(var i = 0;i < lives.length;i++){
                var box = '<a id="'+lives[i].id+'" href="#/goumai" class="box">\
                            <img class="lazy" data-original="'+lives[i].image+'"/>\
                            <p class="h">'+lives[i].title+'</p>\
                            <div class="desc">'+lives[i].desc+'</div>\
                            <div class="price">￥'+lives[i].price+'</div>\
                        </a>'
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

    // function getTemplate(data){
    //         var str = 
    //         return str;
    //     }

    return{
        add:add,
        getdata:getdata
    }
});