/******************************
脚本功能：水印相机-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-21
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/water-fv\.jslynhapi\.com\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/afengye/QX/main/syxj.js
[mitm] 
hostname = water-fv.jslynhapi.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0064\u0061\u0074\u0061"]["\u0069\u0064\u0065\u006e\u0074\u0069\u0074\u0079"]["\u0076\u0069\u0070\u005f\u0065\u0078\u0070\u0069\u0072\u0065\u005f\u0074\u0069\u006d\u0065"]=0x78f7d2800;obj["\u0064\u0061\u0074\u0061"]["\u0069\u0064\u0065\u006e\u0074\u0069\u0074\u0079"]["\u0076\u0069\u0070"]=0xe18cd^0xe18cc;aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
