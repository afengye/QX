/******************************
脚本功能：冷知识酱-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-22
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/lengapp\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/lengjiang.js

hostname = lengapp.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/v1/mine") != -1) {
    obj.is_admin = obj.is_member = obj.is_year_member = true;
    obj.member_expired_at = 32472115200;
    obj.nickname = "afengye";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
