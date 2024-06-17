/******************************
脚本功能：全局扫描-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-18
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/sm\.szsszykj\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/saomiao.js
[mitm] 
hostname = sm.szsszykj.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/user/vip") != -1) {
    obj.Content.is_vip = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
