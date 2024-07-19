/******************************
脚本功能：微商换头像-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-20
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/htx\.jietuguanjia\.com\/api\/app\/userInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/wshtx.js
[mitm] 
hostname = htx.jietuguanjia.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.data.vipExpiredTime = "2999-01-01";
obj.data.isVip = true;
obj.data.isInAppBuy = 1;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
