/******************************
脚本功能：风云学习宝-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-19
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/fufei\.cfcpe\.com\.cn\/api\/client\/info(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/fyxxb.js
[mitm] 
hostname = fufei.cfcpe.com.cn
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070"]={"\u0066\u006f\u0072\u0065\u0076\u0065\u0072":0x1};aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
