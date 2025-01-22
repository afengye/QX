/******************************
脚本功能：面包拼图-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-01-06
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/bread28resapi\.wscreativity\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/afengye/QX/main/mbpt.js
[mitm] 
hostname = bread28resapi.wscreativity.com
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
   "isValid" : 1,
   "expiredTs" : 32472115200,
   "vipType" : 3
}

$done({body: JSON.stringify(obj)});
