/******************************
脚本功能：照片拼图-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-20
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/image\.szshht\.cn\/api\/User\/getVipInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/zppt.js
[mitm] 
hostname = image.szshht.cn
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074"]["\u0069\u0073\u005f\u0076\u0069\u0070"]=0x4942a^0x4942b;obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074"]["\u0065\u006e\u0064\u0064\u0061\u0074\u0065"]="\u0032\u0039\u0039\u0039\u002d\u0030\u0031\u002d\u0030\u0031";obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074"]["\u0069\u0073\u005f\u0066\u006f\u0072\u0065\u0076\u0065\u0072"]=0x45d45^0x45d44;aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
