/******************************
脚本功能：随手写-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-18
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/www\.kkmop\.com\/vipMsg(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/ssx.js
[mitm] 
hostname = www.kkmop.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0072\u0065\u0073\u0075\u006c\u0074\u004d\u0073\u0067"]='{\x22vip\x22:true,\x22vipDays\x22:99999,\x22vipDateTo\x22:\x222999-12-31T16:00:00Z\x22,\x22regtime\x22:\x222024-01-01T00:00:00Z\x22,\x22viptime\x22:\x222999-12-31T16:00:00Z\x22}';aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
