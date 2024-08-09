/************************************************
脚本功能：绿幕助手相机-登陆后解锁永久运营商会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-10
使用声明：️仅供学习交流, 🈲️商业用途
*************************************************
[rewrite_local]
^https:\/\/ltx\.lmlivehelp\.com\/user\/getUser url script-response-body https://raw.githubusercontent.com/afengye/QX/main/lmzs.js
[mitm] 
hostname = ltx.lmlivehelp.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);var vipInfo={"\u0062\u0075\u0079\u004d\u0065\u006d\u0062\u0065\u0072":!![],"\u006d\u0065\u006d\u0062\u0065\u0072\u0054\u0079\u0070\u0065":0x3d,"\u006d\u0065\u006d\u0062\u0065\u0072\u0053\u0074\u0061\u0074\u0075\u0073":0x1};for(let key in obj["\u0064\u0061\u0074\u0061"]){if(vipInfo["\u0068\u0061\u0073\u004f\u0077\u006e\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079"](key)){obj["\u0064\u0061\u0074\u0061"][key]=vipInfo[key];}}aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
