/******************************
脚本功能：青蛙减肥机-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：需登录
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^http:\/\/shoushen\.beijingmorning\.cn\/index\/userinfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qwjfj.js
[mitm] 
hostname = shoushen.beijingmorning.cn
*******************************/
let obj = JSON.parse($response.body);

obj.result = {
    ...obj.result,
    "uvip" : "1", 
    "totime" : "2999-01-01 00:00:00",
    "appid" : "com.lostweight.ios.long1",
    "islong" : "1",
}

$done({body: JSON.stringify(obj)});
