/*function fun2(res){
	console.log("hello ,我是fun2");
	res.write("你好，我是fun2");
}

module.exports = fun2;//只支持一个函数*/

//支持多个函数
module.exports={
	fun2:function(res){
		console.log("我是fu2");
		res.write("我是fu2");
	},
	fun3:function(res){
		console.log("我是fu3");
		res.write("我是fu3");
	}
}