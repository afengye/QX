/******************************
脚本功能：典读-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-27
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www\.diando\.net\/api\/1\.0\/user\/getUserHomepage url script-response-body https://raw.githubusercontent.com/afengye/QX/main/diandu.js
[mitm] 
hostname = www.diando.net
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.data.user.isVip = 1;
obj.data.user.vipDay = 365;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
