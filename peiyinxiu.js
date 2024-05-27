/******************************
脚本功能：配音秀-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-27
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/iosapi\.peiyinxiu\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/peiyinxiu.js
[mitm] 
hostname = iosapi.peiyinxiu.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/Api/user/GetMyInfo") != -1){
    obj.data.is_vip = 1;
    obj.data.vipLevel = 1;
    obj.data.vip_end_time = 4070886812;
    obj.data.vipEventText = "afengye";
}

if ($request.url.indexOf("/Api/user/GetVipDetail") != -1) {
    obj.data.is_vip = 1;
    obj.data.vipLevel = 1;
    obj.data.end_time = 4070886812;
}

if ($request.url.indexOf("/Api/User/GetTools") != -1) {
    obj.data.vipLevel = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
