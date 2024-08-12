/******************************
脚本功能：全能解压缩-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-14
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/uncompress\.gpsdingweishouhu\.com\/api\/user url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qnjys.js
[mitm] 
hostname = uncompress.gpsdingweishouhu.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070\u005f\u0065\u0078\u0070\u0069\u0072\u0079\u005f\u0064\u0061\u0074\u0065"]="00:00:00 10-10-9992".split("").reverse().join("");obj["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070\u005f\u0065\u0078\u0070\u0069\u0072\u0079\u005f\u0064\u0061\u0074\u0065\u005f\u0031\u0039\u0037\u0030"]=0x78f7d2800;aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
