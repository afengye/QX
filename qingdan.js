/******************************
脚本功能：滴答清单-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/dida365\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qingdan.js
[mitm] 
hostname = dida365.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/v2/user/profile") != -1) {
    obj.displayName = "afengye";
}

if($request.url.indexOf("/api/v2/user/status") != -1) {
    obj.pro = true;
    obj.proEndDate = "2970-01-01T00:00:00.000+0000";
    obj.freeTrial = true;
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);
