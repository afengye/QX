/******************************
脚本功能：趣铃-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-01
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/apiquling\.hengqifeng\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/quling.js
[mitm] 
hostname = apiquling.hengqifeng.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/user/getUserByToken") != -1) {
    obj.data.ifMember = "0";
    obj.data.endDate = "2999-01-01 00:00:00";
    obj.data.grade = "3";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
