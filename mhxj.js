/******************************
脚本功能：漫画相机-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-15
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.haokanke\.com\/api\/v1\/my url script-response-body https://raw.githubusercontent.com/afengye/QX/main/mhxj.js
[mitm] 
hostname = api.haokanke.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.data.vip_days = 999999999;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
