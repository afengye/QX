/******************************
脚本功能：海豚记账本-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-13
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/book\.haitunwallet\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/haitun.js
[mitm] 
hostname = book.haitunwallet.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/app/user/userInfo") != -1) {
    obj.data.nickname = "afengye";
}

if($request.url.indexOf("/app/vip/status") != -1) {
    obj.data.status = 1;
    obj.data.endTime = "2999-01-01";
}

if($request.url.indexOf("/app/account/members") != -1) {
    //obj.data.owner.vipLevel;
    obj.data.owner.vipStatus = 1;
}



aFengYe = JSON.stringify(obj);
$done(aFengYe);
