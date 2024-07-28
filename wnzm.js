/******************************
脚本功能：Super Widget-登陆后解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-29
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/gateway\.hatelifu\.club\/open\/(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/wnzm.js
^http[s]?:\/\/(/toblog\.ctobsnssdk\.com|open\.e\.kuaishou\.com|mobads\.baidu\.com|api-access\.pangolin-sdk-toutiao1\.com|adservice\.sigmob\.cn|(\.?)+\.gdt\.qq\.com)(\.?)+ url reject-200
[mitm] 
hostname = gateway.hatelifu.club,toblog.ctobsnssdk.com,open.e.kuaishou.com,mobads.baidu.com,api-access.pangolin-sdk-toutiao1.com,adservice.sigmob.cn,*.gdt.qq.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "memberFlag": true,
  "expireDate": "2999-01-01 00:00:00",
  "userRingStatus": true,
  "userSubscribeStatus": true
}

if (obj.data) {
  for (let key in obj.data) {
    if (vipInfo.hasOwnProperty(key)) {
       obj.data[key] = vipInfo[key]
    }
  }
}

obj.code = 0;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
