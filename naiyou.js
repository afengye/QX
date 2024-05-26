/******************************
脚本功能：奶油壁纸解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-26
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/nz-api\.duitang\.com\/account\/me\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/naiyou.js
[mitm] 
hostname = nz-api.duitang.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.data.vip = true;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
