const express = require('express')
const path = require('path')
const UserAddClick = require('./mongodb').UserAddClick

const app = express()

app.use(express.static(path.join(__dirname, './build')))

// 设置跨越
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	if(req.method == "OPTIONS") res.send(200);
	else  next();
});


app.get("/getuserlist",function(req,res){
	console.log('req', req.query)
	if(req.query.uid) {
		UserAddClick.find({uid: req.query.uid}, function(err, doc){
			if(err){
				console.log('后端出错')
				return
			}
			return res.json({code: 0, data: doc})
		})
	}
	if(req.query.title) {
		console.log("这是title")
		UserAddClick.find({title: req.query.title}, function(err, doc){
			if(err){
				console.log('后端出错')
				return
			}
			return res.json({code: 0, data: doc})
		})
	}
})

app.listen(3002, function(){
	console.log('listening 3002 port')
})