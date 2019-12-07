const express = require('express')
const UserAddClick = require('./mongodb').UserAddClick

const app = express()

app.get("/getuserlist",function(req,res){
	console.log('req', req.query)
	UserAddClick.find({title: req.query.title}, function(err, doc){
		if(err){
			console.log('后端出错')
			return
		}
		return res.json({code: 0, data: doc})
	})
})

app.listen(3002, function(){
	console.log('listening 3002 port')
})