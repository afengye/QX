/******************************
脚本功能：蛋啵-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-24
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/danbo.js
^https:\/\/api-danbo\.meitu\.com\/meme\/save\.json url reject-200
[mitm] 
hostname = api-sub.meitu.com,api-danbo.meitu.com
*******************************/

var obj =  JSON.parse($response.body);

var data = obj.data;
data.is_vip = data.use_vip = true;

$done(JSON.stringify(obj));
