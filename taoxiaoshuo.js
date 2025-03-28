/******************************
脚本功能：淘小说-解锁会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-03-28
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/tybook\.taoyuewenhua\.net\/auth\/account(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/taoxiaoshuo.js
[mitm] 
hostname = tybook.taoyuewenhua.net
*******************************/
let obj = JSON.parse($response.body);

obj.data.isVip = true;

$done({body: JSON.stringify(obj)});
