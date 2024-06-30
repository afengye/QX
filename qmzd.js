/******************************
脚本功能：取名字典-游客登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-30
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www\.qimingzidian\.top\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qmzd.js
[mitm] 
hostname = www.qimingzidian.top
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/v01/login") != -1 || $request.url.indexOf("/v01/user-info") != -1) {
    obj.data.is_vip = true;
    obj.data.expire = 32472115200;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
