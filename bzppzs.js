/*******************************
脚本功能：八字排盘助手-解锁会员
脚本作者：afengye
注意事项：无
下载软件：https://apps.apple.com/app/id6502890871
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^http:\/\/xz1\.mifengzongdongyuan\.com\/horoscope\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/bzppzs.js
[mitm] 
hostname = xz1.mifengzongdongyuan.com
*******************************/

var obj =  JSON.parse($response.body);

let data = obj.result.userInfo;
data.vip = 1;
data.vipHours = 32472115200;
data.vipExpiryDate = "2999-01-01 00:00:00";

$done({body: JSON.stringify(obj)});
