/******************************
脚本功能：PDF转换助手-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-07
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/pdfnew-api\.shoujicad\.com:8086\/api/user url script-response-body https://raw.githubusercontent.com/afengye/QX/main/pdf.js
[mitm] 
hostname = pdfnew-api.shoujicad.com:8086
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/user") != -1) {
    obj.data.vipExpiryDate = 32472115200;
    obj.data.forever = true;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
