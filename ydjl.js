/**********************************
脚本功能：阅读记录-登陆后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-31
使用声明：️仅供学习交流, 🈲️商业用途
***********************************
[rewrite_local]
^https:\/\/app\.yidiansz\.com\/api\/v2\/app\/user\/info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/ydjl.js
[mitm] 
hostname = app.yidiansz.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "member_type": 4,
  "member_status": 1
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);
