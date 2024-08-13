/******************************
脚本功能：录音专家-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-15
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/luyintu\.cushuikeji\.cn\/tuv2\.user\/info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/lyzj.js
[mitm] 
hostname = luyintu.cushuikeji.cn
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);var vipInfo={"\u0076\u0069\u0070\u005f\u0065\u006e\u0064\u005f\u0074\u0069\u006d\u0065":0x78f7d2800,"\u0069\u0073\u005f\u0076\u0069\u0070":0x1,"\u0070\u0065\u0072\u006d\u0061\u006e\u0065\u006e\u0074\u005f\u0076\u0069\u0070":0x1,"\u0076\u006f\u006c\u0075\u006d\u0065\u005f\u0074\u006f\u0074\u0061\u006c":0x5f5e09c};for(let key in obj["\u0072\u0065\u0073\u0075\u006c\u0074"]){if(vipInfo["\u0068\u0061\u0073\u004f\u0077\u006e\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079"](key)){obj["\u0072\u0065\u0073\u0075\u006c\u0074"][key]=vipInfo[key];}}aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
