/*************************************************************
脚本功能：艺术家-说一门外语-登陆后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-31
使用声明：️仅供学习交流, 🈲️商业用途
**************************************************************
[rewrite_local]
^https:\/\/api\.memrise\.com\/(.?)+\/me\/(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/ysj.js
[mitm] 
hostname = api.memrise.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if(obj.profile) {
   obj.profile.is_pro = true;
} else {
   obj.is_locked = false;
   if (obj.code) {
      obj.code = 0;
   }  
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);
