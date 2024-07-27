/******************************
脚本功能：知音漫画-解锁会员漫画
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-28
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/apigate\.kaimanhua\.com\/zymk-(userpurchased|getuserinfo)-api\/v1\/(userpurchased|getuserinfo)(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/zymh.js
^https:\/\/(api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/get_ads|open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ$|mi\.gdt\.qq\.com\/gdt_mview\.fcg\?) url reject-200
[mitm] 
hostname = apigate.kaimanhua.com,api-access.pangolin-sdk-toutiao.com, mi.gdt.qq.com, open.e.kuaishou.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "isvip": 1,
  "vipdays": 99999,
  "vipdate": 32472115200,
  "Uviptime": 32472115200
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}

obj.status = 0;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
