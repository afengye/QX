/******************************
脚本功能：知页简历-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.zhiyeapp\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/zhiye.js
[mitm] 
hostname = api.zhiyeapp.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/v1/user/mine") != -1) {
    obj.data.resumeMembershipInfo.userName = "afengye";
    obj.data.resumeMembershipInfo.membershipStatus = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
