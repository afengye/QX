/******************************
脚本功能：一木记账-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：需登陆
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^https:\/\/yimuapp\.com:8082\/bookkeeping\/user\/getUserInfoById url script-response-body https://raw.githubusercontent.com/afengye/QX/main/ymjz.js
[mitm] 
hostname = yimuapp. com
*******************************/
let obj = JSON.parse($response.body);

obj.result = {
    ...obj.result,
    "vipTime" : 32472115200,
    "vipType" : 2    
}

$done({body: JSON.stringify(obj)});
