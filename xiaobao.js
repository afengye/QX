/******************************
脚本功能：小宝搜题-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-13
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/soti\.ixyzh\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xiaobao.js
[mitm] 
hostname = soti.ixyzh.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/ios/isvip") != -1) {
    obj.data.isVip = "1";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
