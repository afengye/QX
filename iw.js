/******************************
脚本功能：in widget超级小组件-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-13
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api-webclip\.wdxzj\.com\/\?service=App\.User\.GetInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/iw.js
[mitm] 
hostname = api-webclip.wdxzj.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);obj["\u0064\u0061\u0074\u0061"]["\u0064\u0061\u0074\u0061"]["\u0070\u0061\u0079\u0053\u0069\u0067\u006e\u0065\u0064"]=0xccc3e^0xccc3f;obj["\u0064\u0061\u0074\u0061"]["\u0064\u0061\u0074\u0061"]["\u0076\u0069\u0070\u0056\u0061\u0069\u006c\u0064\u0054\u0069\u006d\u0065"]="\u0033\u0032\u0034\u0037\u0032\u0031\u0031\u0035\u0032\u0030\u0030";obj["\u0064\u0061\u0074\u0061"]["\u0064\u0061\u0074\u0061"]['vipType']="\u5458\u4F1A\u4E45\u6C38".split("").reverse().join("");aFengYe=JSON['stringify'](obj);$done(aFengYe);
