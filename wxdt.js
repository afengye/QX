/******************************
脚本功能：信纸卫星地图-登录后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-26
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/a\.xinzhi\.space\/api\/User\/getUserByToken url script-response-body https://raw.githubusercontent.com/afengye/QX/main/wxdt.js
[mitm] 
hostname = a.xinzhi.space
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "vip_type":"year",
  "vip_expire": "2999-01-01 00:00:00",
  "is_vip": 1,
  "vip_day": 99999
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);
