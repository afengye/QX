/******************************
脚本功能：加画框-解锁终身会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-01-06
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/prod\.jiahk\.cn\/api\/v2\/forty\/findUserInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/jhk.js
^https:\/\/prod\.jiahk\.cn\/api\/v2\/forty\/findAdvertisement url reject
[mitm] 
hostname = prod.jiahk.cn
*******************************/
