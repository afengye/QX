/******************************
脚本功能：句读-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-13
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/judouapp\.com\/api\/v2\/(mine\/profile|users\/wechat) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/judu.js
[mitm] 
hostname = judouapp.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0069\u0073\u005f\u006d\u0065\u006d\u0062\u0065\u0072"]=!![];obj["\u0069\u0073\u005f\u0079\u0065\u0061\u0072\u005f\u006d\u0065\u006d\u0062\u0065\u0072"]=!![];obj["\u006d\u0065\u006d\u0062\u0065\u0072\u005f\u0065\u0078\u0070\u0069\u0072\u0065\u0064\u005f\u0061\u0074"]="10-10-9992".split("").reverse().join("");obj["\u006d\u0065\u006d\u0062\u0065\u0072\u005f\u0074\u0079\u0070\u0065"]="PIV".split("").reverse().join("");aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
