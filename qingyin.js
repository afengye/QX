/******************************
脚本功能：轻音乐-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-15
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/fuciyuanbang\.ciyuans\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qingyin.js
[mitm] 
hostname = fuciyuanbang.ciyuans.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/fuciyuanphp/community/social.php") != -1) {
    obj.result.name = "afengye";
    obj.result.vip = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
