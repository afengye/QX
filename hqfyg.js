/*******************************
脚本功能：环球翻译官-解锁周卡会员
脚本作者：afengye
注意事项：需登录⚠
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/hqfyg\.5exg\.cn\/translation\/getuserinfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/hqfyg.js
[mitm] 
hostname = hqfyg.5exg.cn
*******************************/
var obj=JSON["\u0070\u0061\u0072\u0073\u0065"]($response["\u0062\u006f\u0064\u0079"]);
let data=obj["\u0072\u0065\u0073\u0075\u006c\u0074"];
let vipInfo={"\u0076\u0069\u0070\u0045\u0078\u0070\u0069\u0072\u0065\u0054\u0069\u006d\u0065":'2999-01-01\x2000:00:00',"\u0069\u0073\u0056\u0069\u0070":0x1,"\u006f\u0072\u0069\u0067\u0069\u006e\u0061\u006c\u0049\u0073\u0056\u0069\u0070":0x1,"\u0069\u006d\u0067\u0054\u006f\u0074\u0061\u006c\u0043\u006f\u0075\u006e\u0074":0x1869f,"\u0074\u006f\u0074\u0061\u006c\u0043\u006f\u0075\u006e\u0074":0x1869f,"\u0068\u0061\u0076\u0065\u0053\u0075\u0062\u0065\u0064":0x1};
for(let key in data){if(vipInfo["\u0068\u0061\u0073\u004f\u0077\u006e\u0050\u0072\u006f\u0070\u0065\u0072\u0074\u0079"](key)){data[key]=vipInfo[key];}};
$done({"\u0062\u006f\u0064\u0079":JSON["\u0073\u0074\u0072\u0069\u006e\u0067\u0069\u0066\u0079"](obj)});
