/******************************
脚本功能：元气AI相机-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-01
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api-ios-aicamera\.vipguanjia\.net\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yqxj.js
[mitm] 
hostname = api-ios-aicamera.vipguanjia.net
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/yqaicamera/mobile/user/info") != -1) {
    var vipInfo = {
      "vip_ex_date" : 32472115200,
      "vip_type" : "13"
    };
    obj.user_info.permission_vip_info = [vipInfo];
    obj.user_info.vip_start_time = 1719716929;
    obj.user_info.vip_end_time = 32472115200;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
