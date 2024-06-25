/******************************
脚本功能：电子请柬制作-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-26
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/cn\.invit\.vip\/users\/info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qingjian.js
[mitm] 
hostname = cn.invit.vip
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);
obj.data.is_vip = 1;
obj.data.vip_exp = 32472115200;
aFengYe = JSON.stringify(obj);
$done(aFengYe);
