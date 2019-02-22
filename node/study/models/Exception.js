/*
* @Author: Administrator
* @Date:   2019-02-23 00:04:29
* @Last Modified by:   Administrator
* @Last Modified time: 2019-02-23 00:10:52
*/
module.exports = {
	expfun:function(flag){
		if(flag==0){
			throw '我是例外';
		}
		return 'success';
	}
}