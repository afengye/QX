/******************************
脚本功能：算料宝-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-02-13
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/app\.suanliaobao\.com\/remote\/remote url script-response-body https://raw.githubusercontent.com/afengye/QX/main/slb.js
[mitm] 
hostname = app.suanliaobao.com
*******************************/
let obj = JSON.parse($response.body);

if(obj.data){
  obj.data.memberType = "vip";
  obj.data.expireTime = "2999-01-01"
}

$done({body: JSON.stringify(obj)});
