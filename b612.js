/******************************
脚本功能：B612咔叽-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：无
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^https:\/\/user-kaji-api\.b612kaji\.com\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/afengye/QX/main/b612.js
[mitm] 
hostname = user-kaji-api.b612kaji.com
*******************************/
let obj = JSON.parse($response.body);

obj.result = {
    "products" : [
       "com.campmobile.snowcamera.vip.oneyear"
    ],
    "activated" : true
}

$done({body: JSON.stringify(obj)});
