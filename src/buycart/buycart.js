define([
    'text!src/buycart/buycart.html',
    'jquery',
    'css!src/buycart/buycart.css'
], function(html, jquery) {
    'use strict';
    function add (){
        $('#container').html(html);
    }
    return{
        add:add
    }
});