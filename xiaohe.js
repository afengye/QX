/******************************
脚本功能：小荷听书-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-10
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/xiaohe\.sjs\.com\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xiaohe.js
[mitm] 
hostname = xiaohe.sjs.com.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/App//User/index") != -1) {
    obj.data.member.nickname = "afengye";
    obj.data.member.isVip = true;
    obj.data.member.vip_time = "2999-01-01";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
