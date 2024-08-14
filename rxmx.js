/******************************
脚本功能：睿心冥想-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-17
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.wiseinheart\.com\/api\/MiniProgram\/User\/Profile url script-response-body https://raw.githubusercontent.com/afengye/QX/main/rxmx.js
[mitm] 
hostname = api.wiseinheart.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0049\u0073\u0056\u0049\u0050"]=!![];obj["\u0056\u0049\u0050\u0045\u0078\u0070\u0069\u0072\u0065\u0054\u0069\u006d\u0065"]="Z00:00:00T10-10-9992".split("").reverse().join("");aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
