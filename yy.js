/******************************
脚本功能：一言-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-23
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan\/(getuserinfoandbooklist|checkpro)(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yy.js
[mitm] 
hostname = app.yiyan.art
*******************************/

let afengye=$response["\u0062\u006f\u0064\u0079"];let obj=JSON["\u0070\u0061\u0072\u0073\u0065"](afengye);let data=obj["\u0075\u0073\u0065\u0072"]?obj["\u0075\u0073\u0065\u0072"]:obj;data["\u0076\u0069\u0070\u0074\u0079\u0070\u0065"]="\u0033";afengye=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(afengye);
