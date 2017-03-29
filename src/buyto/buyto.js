define([
    'text!src/buyto/buyto.html',
    'jquery',
    'css!src/buyto/buyto.css'
], function(html, jquery) {
    'use strict';
    function add(){
        $('#container').html(html);
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
                    $('.buyto').html(str);
                    $('.footer').hide();                  
                }
            }
        }

    return{
        add:add,
        getdata:getdata
    }
});