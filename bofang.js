/******************************
脚本功能：万能播放器-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-15
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www\.40sishi\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/bofang.js
[mitm] 
hostname = www.40sishi.com
*******************************/

var aFengYe = $response.body;

if($request.url.indexOf("/seaplayer/user/profile") != -1) {
   aFengYe = aFengYe.replace("\"is_vip\":0", "\"is_vip\":1");
}

$done(aFengYe);
