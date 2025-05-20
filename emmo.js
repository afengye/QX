/******************************
脚本功能：EMMO日记-解锁永久会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：需登陆
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^http:\/\/106\.54\.2\.168\/emmoDiary\/user\/getUser url script-response-body https://raw.githubusercontent.com/afengye/QX/main/emmo.js
[mitm] 
hostname = 106.54.2.168
*******************************/
let obj = JSON.parse($response.body);

obj.data.user = {
    ...obj.data.user,
    "isLifeVip" : "1",
    "vipEndTime" : "32472115200",
    "isVip" : "1"    
}

$done({body: JSON.stringify(obj)});
