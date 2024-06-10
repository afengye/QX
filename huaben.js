/******************************
脚本功能：话本小说-去广告，解锁本地会员标识
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-09
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/user\.ihuaben\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/huaben.js
[mitm] 
hostname = user.ihuaben.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/userinfo") != -1) {
    obj.nickName = "afengye";
    obj.isPaymentMember = obj.isMember = true;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
