/******************************
脚本功能：幻休-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-06
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.shaolinzen\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/huanxiu.js
[mitm] 
hostname = api.shaolinzen.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/user/v1/info") != -1) {
    obj.data.nickname = "afengye";
    obj.data.familySipActive = obj.data.familyVipActive = obj.data.vipActive = true;
    obj.data.familyVipExpireTime = obj.data.familySipExpireTime = obj.data.vipExpireTime = 32472115200;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
