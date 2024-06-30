/******************************
脚本功能：元气-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-01
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www\.duitang\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/duitang.js
[mitm] 
hostname = www.duitang.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/napi/people/me/") != -1) {
    obj.data.vip = true;
    obj.data.vip_level = 2;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
