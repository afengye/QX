/*******************************
脚本功能：青橙日记-解锁永久会员
脚本作者：afengye
注意事项：需登录，开启脚本再登录
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^http:\/\/182\.92\.64\.124\/MayDiaryOnLine\/login url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qcrj.js
[mitm] 
hostname = 182.92.64.124
*******************************/

let obj =  JSON.parse($response.body);

obj.vipInfo = "1";

$done({body: JSON.stringify(obj)});
