/******************************
脚本功能：塔罗牌-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-14
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/www\.40sishi\.com\/tarot\/user\/profile url script-response-body https://raw.githubusercontent.com/afengye/QX/main/tapai.js
[mitm] 
hostname = www.40sishi.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);


obj.data.vipState =  {
  "startTime": "1970-01-01",
  "state": 1,
  "forever": true,
  "expireTime": "2999-01-01"
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);
