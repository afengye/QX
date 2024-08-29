/*******************************
脚本功能：环球翻译官-解锁周卡会员
脚本作者：afengye
注意事项：需登录⚠
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/hqfyg\.5exg\.cn\/translation\/getuserinfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/hqfyg.js
[mitm] 
hostname = hqfyg.5exg.cn
*******************************/

var obj =  JSON.parse($response.body);
let data = obj.result;
let vipInfo = {
    "vipExpireTime" : "2999-01-01 00:00:00",
    "isVip" : 1,
    "originalIsVip" : 1,
    "imgTotalCount" : 99999,
    "totalCount" : 99999,
    "haveSubed" : 1
}
for (let key in data) {
  if (vipInfo.hasOwnProperty(key)) {
     data[key] = vipInfo[key]
  }
}
$done({body: JSON.stringify(obj)});
