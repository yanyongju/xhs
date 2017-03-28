var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('./'))

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/getlive',function(req,res){
    fs.readFile(__dirname + '/public/生活/live.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getcaizhuang',function(req,res){
    fs.readFile(__dirname + '/public/生活/caizhuang.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getman',function(req,res){
    fs.readFile(__dirname + '/public/生活/man.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getchuanda',function(req,res){
    fs.readFile(__dirname + '/public/生活/chuanda.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getbao',function(req,res){
    fs.readFile(__dirname + '/public/生活/bao.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getxiezi',function(req,res){
    fs.readFile(__dirname + '/public/生活/xiezi.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getjiaju',function(req,res){
    fs.readFile(__dirname + '/public/生活/jiaju.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getgeren',function(req,res){
    fs.readFile(__dirname + '/public/生活/geren.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getlingshi',function(req,res){
    fs.readFile(__dirname + '/public/生活/lingshi.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getbaojian',function(req,res){
    fs.readFile(__dirname + '/public/生活/baojian.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getmuying',function(req,res){
    fs.readFile(__dirname + '/public/生活/muying.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getriben',function(req,res){
    fs.readFile(__dirname + '/public/目的地/riben.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/gethanguo',function(req,res){
    fs.readFile(__dirname + '/public/目的地/hanguo.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getxiang',function(req,res){
    fs.readFile(__dirname + '/public/目的地/xiang.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getmeiguo',function(req,res){
    fs.readFile(__dirname + '/public/目的地/meiguo.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getfaguo',function(req,res){
    fs.readFile(__dirname + '/public/目的地/faguo.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getaozhou',function(req,res){
    fs.readFile(__dirname + '/public/目的地/aozhou.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getyingguo',function(req,res){
    fs.readFile(__dirname + '/public/目的地/yingguo.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/gettaiguo',function(req,res){
    fs.readFile(__dirname + '/public/目的地/taiguo.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/gettaiwan',function(req,res){
    fs.readFile(__dirname + '/public/目的地/taiwan.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getyidali',function(req,res){
    fs.readFile(__dirname + '/public/目的地/yidali.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getdeguo',function(req,res){
    fs.readFile(__dirname + '/public/目的地/deguo.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getxiangnaier',function(req,res){
    fs.readFile(__dirname + '/public/品牌/xiangnaier.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getzishengtang',function(req,res){
    fs.readFile(__dirname + '/public/品牌/zishengtang.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getdifuni',function(req,res){
    fs.readFile(__dirname + '/public/品牌/difuni.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getyueshi',function(req,res){
    fs.readFile(__dirname + '/public/品牌/yueshi.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getluyiweideng',function(req,res){
    fs.readFile(__dirname + '/public/品牌/luyiweideng.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getwuyin',function(req,res){
    fs.readFile(__dirname + '/public/品牌/wuyin.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getshengluolan',function(req,res){
    fs.readFile(__dirname + '/public/品牌/shengluolan.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getjifu',function(req,res){
    fs.readFile(__dirname + '/public/品牌/jifu.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getdiao',function(req,res){
    fs.readFile(__dirname + '/public/品牌/diao.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getxuehua',function(req,res){
    fs.readFile(__dirname + '/public/品牌/xuehua.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getaili',function(req,res){
    fs.readFile(__dirname + '/public/品牌/aili.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.get('/getbuy',function(req,res){
    fs.readFile(__dirname + '/public/购买/buy.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data);
            res.json(json);
        }
    })
})

app.listen(3000,function(){
    console.log('服务器已启动：http://localhost:3000')
})