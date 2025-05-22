/******************************
脚本功能：堆糖-解锁普通会员非SVIP
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：需登录
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^https:\/\/api-2\.duitang\.com\/napi\/people\/me\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/dt.js
[mitm] 
hostname = api-2.duitang.com
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
    ...obj.data,
    "vip_end_at_mills" : 32472115200,
    "vip_end_at" : 32472115200,
    "vip_level" : 1,
    "vip" : true
}

$done({body: JSON.stringify(obj)});
