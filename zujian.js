/******************************
脚本功能：小组件-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-10
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www\.40sishi\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/zujian.js
[mitm] 
hostname = www.40sishi.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/artwidget/user/profile") != -1) {
    obj.data.vipState =  {
        "startTime": "1970-01-01",
        "state": 1,
        "forever": true,
        "expireTime": "2999-01-01"
    }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
