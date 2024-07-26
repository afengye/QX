/******************************
脚本功能：元气FM-解锁部分会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-27
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/yuanjoy\.com\/FM\/api\/(special|radio|sound)\/list(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yqfm.js
[mitm] 
hostname = yuanjoy.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj = obj.replaceAll(/false, true);

aFengYe = JSON.stringify(obj);
$done(aFengYe);
