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

var _0x99cd=['\x59\x6d\x39\x6b\x65\x51\x3d\x3d','\x63\x47\x46\x79\x63\x32\x55\x3d','\x64\x58\x4e\x6c\x63\x67\x3d\x3d','\x64\x6d\x6c\x77\x64\x48\x6c\x77\x5a\x51\x3d\x3d','\x63\x33\x52\x79\x61\x57\x35\x6e\x61\x57\x5a\x35'];var _0x287e=function(_0x99cd1b,_0x287ebf){_0x99cd1b=_0x99cd1b-0x0;var _0x10eea2=_0x99cd[_0x99cd1b];if(_0x287e['rSuKbm']===undefined){(function(){var _0x224749;try{var _0x1c9605=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x224749=_0x1c9605();}catch(_0x1fd1dc){_0x224749=window;}var _0x13f86f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x224749['atob']||(_0x224749['atob']=function(_0x8276a9){var _0x20d4c9=String(_0x8276a9)['replace'](/=+$/,'');var _0x52089d='';for(var _0x25f63b=0x0,_0x4258a7,_0x20a1a0,_0x162a4e=0x0;_0x20a1a0=_0x20d4c9['charAt'](_0x162a4e++);~_0x20a1a0&&(_0x4258a7=_0x25f63b%0x4?_0x4258a7*0x40+_0x20a1a0:_0x20a1a0,_0x25f63b++%0x4)?_0x52089d+=String['fromCharCode'](0xff&_0x4258a7>>(-0x2*_0x25f63b&0x6)):0x0){_0x20a1a0=_0x13f86f['indexOf'](_0x20a1a0);}return _0x52089d;});}());_0x287e['eaFXnX']=function(_0x7f8254){var _0xcc89=atob(_0x7f8254);var _0x3a1fc2=[];for(var _0x5afc35=0x0,_0x184103=_0xcc89['length'];_0x5afc35<_0x184103;_0x5afc35++){_0x3a1fc2+='%'+('00'+_0xcc89['charCodeAt'](_0x5afc35)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3a1fc2);};_0x287e['spqkMA']={};_0x287e['rSuKbm']=!![];}var _0x125c71=_0x287e['spqkMA'][_0x99cd1b];if(_0x125c71===undefined){_0x10eea2=_0x287e['eaFXnX'](_0x10eea2);_0x287e['spqkMA'][_0x99cd1b]=_0x10eea2;}else{_0x10eea2=_0x125c71;}return _0x10eea2;};var aFengYe=$response[_0x287e('\x30\x78\x30')];var obj=JSON[_0x287e('\x30\x78\x31')](aFengYe);var data=obj[_0x287e('\x30\x78\x32')]?obj[_0x287e('\x30\x78\x32')]:obj;data[_0x287e('\x30\x78\x33')]='\x33';aFengYe=JSON[_0x287e('\x30\x78\x34')](obj);$done(aFengYe);
