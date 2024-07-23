/******************************
脚本功能：鲨鱼记账-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-24
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.shayujizhang\.com\/account\/\.* url script-response-body https://raw.githubusercontent.com/afengye/QX/main/shayu.js
[mitm] 
hostname = api.shayujizhang.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);



aFengYe = JSON.stringify(obj);
$done(aFengYe);
