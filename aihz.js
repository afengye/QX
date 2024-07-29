/******************************
脚本功能：万能AI盒子-解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-30
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/aichat\.jieaiwai\.top\/index\.php\/index\/member\/getMember url script-response-body https://raw.githubusercontent.com/afengye/QX/main/aihz.js
[mitm] 
hostname = aichat.jieaiwai.top
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
   "isMember": 1,
   "expiration_time": "2999-01-01 00:00:00"
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
