/******************************
脚本功能：得见小说解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-25
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/dj\.palmestore\.com\/zyuc\/api\/user\/accountInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/dejian.js
[mitm] 
hostname = dj.palmestore.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "vipType": 1,
  "vipExpire": 4072625440
}

obj.body.userInfo.vipInfo = vipInfo,  obj.body.userInfo.unlockVipInfo = vipInfo;
aFengYe = JSON.stringify(obj);
$done(aFengYe);
