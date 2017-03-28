define([
    'text!src/buyto/buyto.html',
    'jquery',
    'css!src/buyto/buyto.css'
], function(html, jquery) {
    'use strict';
    function add(){
        $('.max').html(html);
    }

    return{
        add:add
    }
});