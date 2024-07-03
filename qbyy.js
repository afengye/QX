/******************************
脚本功能：千变语音-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-04
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/www\.voicepackage\.xyz\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qbyy.js
[mitm] 
hostname = www.voicepackage.xyz
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/app/main/account/index") != -1) {
    obj.data.nickName = "afengye";
    obj.data.vip_expiration_time_show = "2999-01-01";
    obj.data.showAudit = obj.data.exemptAb = obj.data.idCardCertified = obj.data.vipDayThanWeek = true;
    obj.data.vipIsOverdue = false;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
