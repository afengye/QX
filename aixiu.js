/******************************
脚本功能：AI换脸秀-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-05
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/changeclothes\.szsszykj\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/aixiu.js
[mitm] 
hostname = changeclothes.szsszykj.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/interface/GetIosVip.php") != -1) {
  obj.Content.end_time = "2999-01-01 00:00:00";
  obj.Content.is_vip = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
