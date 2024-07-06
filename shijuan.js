/******************************
脚本功能：试卷扫描-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-07
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/appss\.baomingding\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/shijuan.js
[mitm] 
hostname = appss.baomingding.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/app/account/getAccountInfo") != -1) {
    obj.result.type = "VIP";
    obj.result.freeFlag = "YES";
    obj.result.vipExpireDays = 99999999999;
    obj.result.vipExpireTime = "2999-01-01 00:00:00";
    obj.result.vipGroupInfos = [
       {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ];
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
