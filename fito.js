/******************************
脚本功能：Fito-解锁Pro功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-03-20
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.fitoapp\.cn\/users\/me url script-response-body https://raw.githubusercontent.com/afengye/QX/main/fito.js
[mitm] 
hostname = api.fitoapp.cn
*******************************/
let obj = JSON.parse($response.body);

obj.isVip = true;

$done({body: JSON.stringify(obj)});
