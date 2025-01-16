/******************************
脚本功能：诗词之美-解锁部分会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-01-17
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/lchttpapi\.xczim\.com\/1\.1\/users\/(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/sczm.js
[mitm] 
hostname = lchttpapi.xczim.com
*******************************/
let obj = JSON.parse($response.body);

obj = {
   ...obj,
   "membership" : true,
   "lifetimeMembership" : true,
   "premiumMembership" : true
}

$done({body: JSON.stringify(obj)});
