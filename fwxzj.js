/******************************
脚本功能：Fun Widgets小组件-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
破解版本：2.17.1
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/widget\.haoqimiao\.net\/api\/user\/info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/fwxzj.js
[mitm] 
hostname = widget.haoqimiao.net
*******************************/
let obj = JSON.parse($response.body);

obj.data.user = {
   ...obj.data.user,
   "vipExpiresTime" : 32472115200,
   "vip" : true,
   "vipType" : 1
}

$done({body: JSON.stringify(obj)});
