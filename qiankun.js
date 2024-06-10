/******************************
脚本功能：易演乾坤-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-11
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.yuceshu\.cn:8443\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qiankun.js
[mitm] 
hostname = api.yuceshu.cn:8443
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/Account/GetUserInfo") != -1) {
    obj.data.nickName = "afengye";
    obj.data.isVip = true;
    obj.data.vipValidTime = "2999-01-01";
    obj.data.memberLevel = 1;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
