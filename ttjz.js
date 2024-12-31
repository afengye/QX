/******************************
脚本功能：团团记账-解锁终身会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-12-31
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/gs\.gateway\.gameley\.cn\/np-book-user\/(open\/list|user\/refresh\/token) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/ttjz.js
[mitm] 
hostname = gs.gateway.gameley.cn
*******************************/
let obj = JSON.parse($response.body);

if($request.url.indexOf("/user\/refresh\/token") != -1){
  obj.info.user = {
    ...obj.info.user,
    "visitVipForever": true,
    "visitVipBoolean": true,
    "normalVipBoolean": true,
    "normalVipForever": true,
    "adVipBoolean": true,
    "adVipForever": true,
  }
}else{
   obj.info.openVos = [];
}

$done({body: JSON.stringify(obj)});
