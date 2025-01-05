/******************************
脚本功能：组件岛-解锁永久会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-01-05
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.widgetisland\.cn\/app\/ios\/vip\/info(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/zjd.js
[mitm] 
hostname = api.widgetisland.cn
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
  "iapProductId" : "cn.widgetisland.theme.permanent",
  "vipCategory" : 1,
  "vipName" : "永久会员",
  "name" : "永久会员"
}

$done({body: JSON.stringify(obj)});
