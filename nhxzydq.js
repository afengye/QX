/*******************************
脚本功能：倪海厦中医大全-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：无
使用声明：️仅供学习交流
********************************
[rewrite_local]
^https:\/\/medicine-family\.meappstore\.top\/medicineModule\/api\/users\/iosUserLogin url script-response-body https://raw.githubusercontent.com/afengye/QX/main/nhxzydq.js
[mitm] 
hostname = medicine-family.meappstore.top
********************************/
let obj = JSON.parse($response.body);

obj.data = {
    ...obj.data,
    "vipState" : 1,
    "vipEndDateTime" : "2999-01-01 00:00:00",
    "vipEndTime" : "2999-01-01 00:00:00"
}

$done({body: JSON.stringify(obj)});
