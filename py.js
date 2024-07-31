/******************************
脚本功能：配音-解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-01
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/xihongshi\.dicallapp\.com\/SDGetMeCount\.ashx url script-response-body https://raw.githubusercontent.com/afengye/QX/main/py.js
[mitm] 
hostname = xihongshi.dicallapp.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "TFlag": 1,
  "UFlag": 1,
  "UserVipEnd": "2999-01-01"
}

for (let key in obj.result) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.result[key] = vipInfo[key]
  }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
