/******************************
脚本功能：白猫-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-31
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/baimiao\.uzero\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/baimao.js
[mitm] 
hostname = baimiao.uzero.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/v2.user/appLaunchWithUser") != -1) {
    obj.value.nickname = "afengye";
    obj.value.vip = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
