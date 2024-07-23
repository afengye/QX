/******************************
脚本功能：漫画栈-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-24
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/member\.mkzcdn\.com\/user\/funds\/info\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/mhz.js
[mitm] 
hostname = member.mkzcdn.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "is_vip": "1",
  "vip_type": "2",
  "vip_end_time": "32472115200"
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
