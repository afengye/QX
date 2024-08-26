/******************************
脚本功能：抖抖去水印-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^^https:\/\/kkyun\.com\/api\/(accounts\/user|apps\/start_task)(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/ddqsy.js
[mitm] 
hostname = kkyun.com
*******************************/

let obj=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);let data=obj["\u0075\u0073\u0065\u0072"]?obj["\u0075\u0073\u0065\u0072"]:obj;let vipInfo={"\u0069\u0073\u005f\u0076\u0069\u0070":!![],"\u0073\u0074\u0061\u0074\u0075\u0073":0x1,"\u0076\u0069\u0070\u005f\u006e\u0061\u006d\u0065":"\u5df2\u89e3\u9501\u9ad8\u7ea7\u529f\u80fd"};for(let key in data){if(vipInfo["\u0068\u0061\u0073\u004f\u0077\u006e\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079"](key)){data[key]=vipInfo[key];}}$done({"\u0062\u006f\u0064\u0079":JSON['stringify'](obj)});
