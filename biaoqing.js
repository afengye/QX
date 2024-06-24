/******************************
脚本功能：万能表情包-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-25
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/mars-prod\.whalean\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/biaoqing.js
[mitm] 
hostname = mars-prod.whalean.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/hestia-service/api/wpUser/getUserInfo") != -1) {
    obj.data.memberType = 1;
    obj.data.userName = "afengye";
    obj.data.memberEndTime= 30118572443;
    obj.data.isMember = 0;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
