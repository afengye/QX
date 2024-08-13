/******************************
脚本功能：视频转文字-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-16
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/paperwork\.szshht\.cn\/api\/User\/getUserInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/spzwz.js
[mitm] 
hostname = paperwork.szshht.cn
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074"]["\u0069\u0073\u005f\u0076\u0069\u0070"]=0x2c95c^0x2c95d;obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074"]["\u0065\u006e\u0064\u0064\u0061\u0074\u0065"]="10-10-9992".split("").reverse().join("");aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
