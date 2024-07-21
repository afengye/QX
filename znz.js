/******************************
脚本功能：指南针-解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-22
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/compass\.xinzhi\.space\/api\/v1\/isVip url script-response-body https://raw.githubusercontent.com/afengye/QX/main/znz.js
[mitm] 
hostname = compass.xinzhi.space
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.data.is_vip = 1;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
