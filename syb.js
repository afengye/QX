/*******************************
脚本功能：水印宝-解锁会员
脚本作者：afengye
注意事项：无
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/newappapi\.fntmob\.com\/api\/v1\/qsy\/user-info(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/syb.js
[mitm] 
hostname = newappapi.fntmob.com
*******************************/

let obj =  JSON.parse($response.body);

obj.data = {
    ...obj.data,
    "is_vip" : 1,
    "level_expire" : 32472115200
}

$done({body: JSON.stringify(obj)});
