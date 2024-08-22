/******************************
脚本功能：一言-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-23
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/app\.yiyan\.art\/yiyan\/(getuserinfoandbooklist|checkpro)(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yy.js
[mitm] 
hostname = app.yiyan.art
*******************************/

var _0x4383=['\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x62\x6f\x64\x79','\x76\x69\x70\x74\x79\x70\x65'];var _0x26fa=function(_0x438308,_0x26fa5a){_0x438308=_0x438308-0x0;var _0x1081b3=_0x4383[_0x438308];return _0x1081b3;};var aFengYe=$response[_0x26fa('\x30\x78\x31')];var obj=JSON['\x70\x61\x72\x73\x65'](aFengYe);var data=obj['\x75\x73\x65\x72']?obj['\x75\x73\x65\x72']:obj;data[_0x26fa('\x30\x78\x32')]='\x33';aFengYe=JSON[_0x26fa('\x30\x78\x30')](obj);$done(aFengYe);
