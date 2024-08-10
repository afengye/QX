/******************************
脚本功能：百转格-登陆后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-11
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/format-api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/bzg.js
[mitm] 
hostname = format-api.netpock.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0064\u0061\u0074\u0061"]["\u0069\u0073\u005f\u0076\u0069\u0070"]=!![];obj["\u0064\u0061\u0074\u0061"]["\u0077\u0070\u0073\u005f\u0073\u0069\u007a\u0065"]=0x1869f;aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
