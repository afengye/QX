
/******************************
脚本功能：滚动截长屏-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-25
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/appss\.rhinoxlab\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/gdjcp.js
[mitm] 
hostname = appss.rhinoxlab.com
*******************************/

var obj=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);obj["\u0072\u0065\u0073\u0075\u006c\u0074"]["\u0076\u0069\u0070\u0045\u0078\u0070\u0069\u0072\u0065\u0054\u0069\u006d\u0065"]="10-10-9992".split("").reverse().join("");obj["\u0072\u0065\u0073\u0075\u006c\u0074"]["\u0076\u0069\u0070\u0047\u0072\u006f\u0075\u0070\u0049\u006e\u0066\u006f\u0073"]=[{"\u0067\u0072\u006f\u0075\u0070\u0054\u0079\u0070\u0065":"\u0054\u0059\u0050\u0045\u005f\u004f\u004e\u0045","\u0076\u0069\u0070\u0054\u0079\u0070\u0065":'VIP'}];$done({"\u0062\u006f\u0064\u0079":JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj)});