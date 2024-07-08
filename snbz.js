/******************************
脚本功能：少女壁纸-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-09
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www\.helloshiyu\.com\/mood\/superadmin\/user\/profile url script-response-body https://raw.githubusercontent.com/afengye/QX/main/snbz.js
[mitm] 
hostname = www.helloshiyu.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.result.type = "VIP";
obj.result.freeFlag = "YES";
obj.result.vipGroupInfos = [
   {
    "groupType" : "TYPE_ONE",
    "vipType" : "VIP",
    "autoPay" : "YES"
  }
];

aFengYe = JSON.stringify(obj);
$done(aFengYe);
