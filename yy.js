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

var _0x1d8e=['\x62\x6f\x64\x79','\x70\x61\x72\x73\x65','\x75\x73\x65\x72','\x76\x69\x70\x74\x79\x70\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79'];var _0x448b=function(_0x1d8e69,_0x448bf0){_0x1d8e69=_0x1d8e69-0x0;var _0x4a22d9=_0x1d8e[_0x1d8e69];return _0x4a22d9;};var _0x112d1b=$response[_0x448b('\x30\x78\x30')];var _0x563a3a=JSON[_0x448b('\x30\x78\x31')](_0x112d1b);var _0x57f2e9=_0x563a3a['\x75\x73\x65\x72']?_0x563a3a[_0x448b('\x30\x78\x32')]:_0x563a3a;_0x57f2e9[_0x448b('\x30\x78\x33')]='\x33';_0x112d1b=JSON[_0x448b('\x30\x78\x34')](_0x563a3a);$done(_0x112d1b);
