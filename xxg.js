/******************************
脚本功能：小习惯-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-04
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/xianbeikeji\.com\/daily\/app\/user\/queryVipFlagByDeviceId url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xxg.js
[mitm] 
hostname = xianbeikeji.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.data.vipFlag = 1;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
