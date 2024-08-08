/******************************
脚本功能：指尖笔记-登陆后解锁永久会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-09
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/data\.ufbae\.com\/User\/GetUser(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/zjbj.js
[mitm] 
hostname = data.ufbae.com
*******************************/
var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0076\u0069\u0070"]=obj["\u0063\u0068\u0072\u0069\u0073\u0074\u006d\u0061\u0073\u0056\u0049\u0050"]=0x503c5^0x503c4;aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
