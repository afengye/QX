/******************************
脚本功能：自主提词器-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/appss\.rhinox\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/tici.js
[mitm] 
hostname = appss.rhinox.cn
*******************************/
var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("//app/account/getAccountInfo") != -1) {
    obj.result.type = "VIP";
    obj.result.freeFlag = "YES";
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
