define([
    'text!src/buyto/buyto.html',
    'jquery',
    'css!src/buyto/buyto.css'
], function(html, jquery) {
    'use strict';
    var cartt = [];
    function add(id){
        $('#container').html(html);
        $('#btn_cart').on('click',function(){
            $('.zhezhao').fadeIn(400);
            $('.buy_windows').show().animate({top:'50%'},400);
           
            $('#btn_join').on('click',function(){
                console.log(123)
                $('.zhezhao').fadeOut(400);
                $('.buy_windows').animate({top:'100%'},200,function(){$(this).hide()});
                var goods = JSON.parse(localStorage.goods);
                for(var i = 0;i < goods.length;i++){
                if(id == goods[i].id){
                    cartt.push(goods[i].id+':'+1);
                    localStorage.goodss = JSON.stringify(cartt); 
                    console.log(localStorage.goodss)              
                }
            }
            })
        })
    }

    function getdata(id){
            var goods = JSON.parse(localStorage.goods);
            for(var i = 0;i < goods.length;i++){
                if(id == goods[i].id){
                    var d = goods[i];
                    var str = '<img src="'+d.image+'" alt="">\
                                <p class="title">'+d.title+'</p>\
                                <div class="from"><p class="from_title">来自日本<span>奥尔滨 ALBION</span></p></div>\
                                 <p class="price">￥'+d.price+'</p>'
                    var wtr = '<img src="'+d.image+'"/>\
                               <p class="title">'+d.title+'</p>\
                               <p class="price">￥'+d.price+'</p>\
                               <button id="btn_join" class="btn_join">确认加入</button>'             
                    $('.buyto').html(str);
                    $('.buy_windows').html(wtr);
                    $('.footer').hide();                  
                }
            }
        }

    return{
        add:add,
        getdata:getdata
    }
});