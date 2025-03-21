/******************************
脚本功能：番茄短剧-解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-03-21
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/8\.149\.129\.124:3002\/api\/account\/v1(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/fqdj.js
[mitm] 
hostname = 8.149.129.124
*******************************/
let obj = JSON.parse($response.body);

obj.vipExpiresAt = "2999-01-01T00:00:00Z";
obj.testerExpiresAt = "2999-01-01T00:00:00Z";

$done({body: JSON.stringify(obj)});
