/******************************
脚本功能：一言-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-23
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan\/(getuserinfoandbooklist|checkpro)(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yy.js
[mitm] 
hostname = app.yiyan.art
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var data = obj.user ? obj.user : obj;
data.viptype = "3";

aFengYe = JSON.stringify(obj);
$done(aFengYe);
