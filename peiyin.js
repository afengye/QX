/******************************
脚本功能：萌配音-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-07
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/lc\.i7play\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/peiyin.js
[mitm] 
hostname = lc.i7play.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/1.1/users") != -1) {
    obj.username = "afengye";
    obj.isVip = true;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
