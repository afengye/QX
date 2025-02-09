/******************************
脚本功能：吉真紫薇斗数-解锁会员需登录
脚本作者：afengye
脚本频道：https://t.me/afengye
破解版本：1.4.8
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/zwpp\.wzbz123\.com\/api\/v1\.1\/user\/getzwvipinfo(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/jzzwds.js
[mitm] 
hostname = zwpp.wzbz123.com
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "expires" : "2999-01-01 00:00:00",
   "vipLevel" : 1
}

$done({body: JSON.stringify(obj)});
