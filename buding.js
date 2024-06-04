/******************************
脚本功能：布丁锁屏-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-05
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/screen-lock\.sm-check\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/buding.js
[mitm] 
hostname = screen-lock.sm-check.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/userApi/saveUser") != -1) {
    obj.data.freeFlag = obj.data.newVipStatus = obj.data.vipStatus = 1;
    obj.data.endTime = "2999-01-01";
    obj.data.expireDate = 32472115200;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
