/******************************
脚本功能：遥望-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：需登录
使用声明：️仅供学习交流
*******************************
[rewrite_local]
^https:\/\/(mars-prod|ins-web)\.whalean\.com\/(member\/userMemberHomePageV2|poseidon-service\/api\/user\/homeData(.?)+) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yw.js
[mitm] 
hostname = mars-prod.whalean.com,ins-web.whalean.com
*******************************/
let obj = JSON.parse($response.body);

if($request.url.indexOf("member\/userMemberHomePageV2") != -1){
  obj.data.memberInfos[0].isMember = 0;
  obj.data.memberInfos[0].memberLevel = "1";
  obj.data.memberInfos[0].memberExpirationTime = "2999-01-01";
}else{
   obj.data.userBaseResponse.hasVip = 1;
}

$done({body: JSON.stringify(obj)});
