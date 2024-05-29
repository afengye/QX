/******************************
脚本功能：便了么-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-30
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/pebblefan\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/pianleme.js
[mitm] 
hostname = pebblefan.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/papi/get_users") != -1) {
    obj.user_infos[0].nickname = "afengye";
    obj.user_infos[0].vip = true;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
