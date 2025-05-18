/**********************************
脚本功能：元元记账-解锁永久会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：无
使用声明：️仅供学习交流
***********************************
[rewrite_local]
^https:\/\/gs\.gateway\.gameley\.cn\/ai-book-user\/(open\/list|user\/refresh\/token) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yyjz.js
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
