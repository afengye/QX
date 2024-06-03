/******************************
脚本功能：句读-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-04
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/judouapp\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/judu.js
[mitm] 
hostname = judouapp.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/v2/mine/profile") != -1) {
    obj.is_member = true;
    obj.is_year_member = true;
    obj.nickname = "afengye";
    obj.member_expired_at = 30118658071;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
