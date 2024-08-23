/******************************
脚本功能：薄荷壁纸-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.json(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/danbo.js
^https:\/\/api-danbo\.meitu\.com\/meme\/save\.json url reject-200
[mitm] 
hostname = api-sub.meitu.com,api-danbo.meitu.com
*******************************/

var obj=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);var data=obj["\u0064\u0061\u0074\u0061"];data["\u0069\u0073\u005f\u0076\u0069\u0070"]=data["\u0075\u0073\u0065\u005f\u0076\u0069\u0070"]=!![];$done(JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj));
