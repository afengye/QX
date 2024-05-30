/******************************
脚本功能：番薯小说阅读器-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-31
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/g20\.manmeng168\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/fanshu.js
[mitm] 
hostname = baimiao.uzero.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/v1/client/user/completeUserInfo") != -1) {
    obj.data.nick = "afengye";
    obj.data.vip = true;
    obj.data.vip_start_time = 1717074752;
    obj.data.vip_end_time = 4083829946;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
