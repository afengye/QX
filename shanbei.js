/******************************
脚本功能：扇贝单词英语版-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-31
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/apiv3\.shanbay\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/shanbei.js
[mitm] 
hostname = apiv3.shanbay.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/wordsapp/vip/user_item/status") != -1) {
    obj = {
      "status" : "VIP",
      "is_big_member" : true
    };
}
if ($request.url.indexOf("/bayuser/user") != -1) {
    obj.nickname = "afengye";
    obj.is_staff = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
