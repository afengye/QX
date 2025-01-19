/******************************
脚本功能：亲戚计算器-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-01-19
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/chenghu\.kuaixuanwo\.com\/user\/info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qqjsq.js
[mitm] 
hostname = chenghu.kuaixuanwo.com
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "subscribe_expires_date" : "2999-01-01T00:00:00Z",
   "vip_type" : 1,
   "purchase_date" : 32472115200,
   "is_vip" : 1
}

$done({body: JSON.stringify(obj)});
