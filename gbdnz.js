/******************************
脚本功能：关不掉的闹钟-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/nao\.beijingmorning\.cn\/user\/userinfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/gbdnz.js
[mitm] 
hostname = nao.beijingmorning.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.result.uvip = 1;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
