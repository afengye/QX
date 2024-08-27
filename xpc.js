/******************************
脚本功能：橡皮擦-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-25
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^^https:\/\/appss\.yuanfengo\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xpc.js
[mitm] 
hostname = appss.yuanfengo.com
*******************************/

var obj =  JSON.parse($response.body);

obj.result.vipExpireTime = "2999-01-01";
obj.result.vipGroupInfos = [
   {
    "groupType" : "TYPE_ONE",
    "vipType" : "VIP"
  }
];

$done({body: JSON.stringify(obj)});
