/******************************
脚本功能：元气桌面解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-23
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/mobile-ios-wallpaper-api\.zhhainiao\.com\/v1\/user\/info url script-response-body 
[mitm] 
hostname = mobile-ios-wallpaper-api.zhhainiao.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);
var vipInfo = {
  "vip_ex_date" : 32503338000,
  "vip_type" : "13"
};
obj.user_info.permission_vip_info = [vipInfo], obj.permission_vip_info = [vipInfo];
aFengYe = JSON.stringify(obj);
$done(aFengYe);
