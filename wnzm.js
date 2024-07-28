/******************************
脚本功能：Super Widget-登陆后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-29
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/gateway\.hatelifu\.club\/open\/common\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/wnzm.js
[mitm] 
hostname = gateway.hatelifu.club
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "memberFlag": true,
  "expireDate": "2999-01-01 00:00:00",
  "memberIcon": "https://pgcloud.aitici.com/common/20231213/e81d654a862d4da7acd62b2b62c2281c.jpg",
  "memberId": 1009001,
  "memberName": "终身会员"
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
