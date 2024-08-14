/******************************
脚本功能：睿心冥想-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-16
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.wiseinheart\.com\/api\/MiniProgram\/(User\/Profile|Course\/CourseDetail) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/rxmx.js
[mitm] 
hostname = api.wiseinheart.com
*******************************/

var aFengYe=$response["\u0062\u006f\u0064\u0079"];var obj=JSON["\u0070\u0061\u0072\u0073\u0065"](aFengYe);var vipInfo={"\u0049\u0073\u0056\u0049\u0050":!![],"\u0056\u0049\u0050\u0045\u0078\u0070\u0069\u0072\u0065\u0054\u0069\u006d\u0065":"\u0032\u0039\u0039\u0039\u002d\u0030\u0031\u002d\u0030\u0031\u0054\u0030\u0030\u003a\u0030\u0030\u003a\u0030\u0030\u005a","\u0056\u0069\u0070":![],"\u0050\u0072\u0069\u0063\u0065":0x0,"\u0041\u0076\u0061\u006c\u0069\u0061\u0062\u006c\u0065":!![]};for(let key in obj){if(vipInfo["\u0068\u0061\u0073\u004f\u0077\u006e\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079"](key)){obj[key]=vipInfo[key];}}if(obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u0073"]){var i;for(i=0x2d3dc^0x2d3dc;i<obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u0073"]['length'];i++){obj["\u0043\u006f\u006e\u0074\u0065\u006e\u0074\u0073"][i]['Avaliable']=!![];}}aFengYe=JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj);$done(aFengYe);
