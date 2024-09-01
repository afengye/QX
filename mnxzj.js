/*******************************
脚本功能：迷你小组件-解锁永久会员
脚本作者：afengye
注意事项：需登录
下载软件：https://apps.apple.com/app/id1660845939
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fufei\.haitubangong\.com\/api\/client\/info(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/mnxzj.js
[mitm] 
hostname = fufei.haitubangong.com
*******************************/

let obj =  JSON.parse($response.body);

let vipInfo = {
   "forever" : 1,
   "vipname" : "永久会员",
   "expired_at" : "2999-01-01 00:00:00"
}
obj.data.vip = vipInfo;

$done({body: JSON.stringify(obj)});
