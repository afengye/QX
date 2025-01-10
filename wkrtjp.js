/******************************
脚本功能：万康人体解刨-解锁终身会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-01-10
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/wankang\.xlhcq\.com\/v1\/user_info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/wkrtjp.js
[mitm] 
hostname = wankang.xlhcq.com
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
  ...obj.data,
  "vip_type" : 6,
  "vip_expire" : "2999-01-01"
}

$done({body: JSON.stringify(obj)});
