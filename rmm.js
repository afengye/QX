/******************************
脚本功能：软眠眠-解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-21
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/ruanmianmian\.xinzhi\.space\/api\/v1\/getUserByToken url script-response-body https://raw.githubusercontent.com/afengye/QX/main/rmm.js
[mitm] 
hostname = ruanmianmian.xinzhi.space
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "is_vip": 1,
  "vip_expire": "2999-01-01 00:00:00",
  "vip_type": "vip_softsleep_forever_78",
  "vip_day": 99999999999
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
