/******************************
脚本功能：克拉壁纸-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-12
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/claritywallpaper\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/kela.js
[mitm] 
hostname = claritywallpaper.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/clarity/api/userInfo") != -1) {
    obj.data.expireTime = 32472115200;
    obj.data.level = 5;
    obj.data.nickName = "afengye";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
