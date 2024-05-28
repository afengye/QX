/******************************
脚本功能：懒饭-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-29
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/lanfanapp\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/lanfan.js
[mitm] 
hostname = lanfanapp.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/v1/user/prime.json") != -1) {
  obj.content.user.name = "afengye";
  obj.content.user.is_prime = true;
  obj.content.user.prime = {
    "is_prime" : true,
    "expires_time" : "2099-01-01 00:00:00"
  };
}
if($request.url.indexOf("/api/v1/user/page_detail.json") != -1) {
  obj.content.user.name = "afengye";
  obj.content.user.is_prime = true;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
