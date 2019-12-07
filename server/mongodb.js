const mongoose = require('mongoose')
const fs = require('fs')
// 链接mongo
const DB_URL = 'mongodb://localhost:27017/user_ad_click'
mongoose.connect(DB_URL)

const models = {
	user_ad_click: {
		"uid": {type: String, require: true},
		"uid_neights_list": {type: String, require: true},
		"title": {type: String, require: true},
		"title_neights_list": {type: String, require: true},
		"is_click": {type: Boolean, require: true},
		"p_date": {type: String, require: true}
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

const UserAddClick = mongoose.model('user_ad_click')

// 清除数据库内容
// UserAddClick.remove({}, function(err, doc){

// })

fs.readFile('user_ad_click.csv', function(err, data){
	if(err){
		console.log(err.stack)
		return
	}
	const rows = data.toString().split('\n')
	for(let i = 0; i < rows.length; i ++){
		const rows_list = rows[i].split(',')
		const mongoSave = new UserAddClick({
			uid: rows_list[0],
			uid_neights_list: rows_list[1],
			title: rows_list[2],
			title_neights_list: rows_list[3],
			is_click: rows_list[4] == 1 ? true : false,
			p_date: rows_list[5]
		})
		mongoSave.save(function(err, doc){
			if(err){
				console.log('错误')
			}
		})
	}
})
