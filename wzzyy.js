/******************************
脚本功能：文字转语音助手-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-25
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/text-to-speech\.xinmengmakeji\.com\/api\/user url script-response-body https://raw.githubusercontent.com/afengye/QX/main/wzzyy.js
[mitm] 
hostname = text-to-speech.xinmengmakeji.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "vip_product_id" : "week_1.99first",
  "vip_expiry_date" : "2999-01-01 00:00:00",
  "vip_type" : "0",
  "vip_expiry_date_1970" : 32472115200
}



aFengYe = JSON.stringify(obj);
$done(aFengYe);
