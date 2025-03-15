/*********************************************
脚本功能：获取revenuecat接口破解参数
脚本作者：afengye
注意事项：必须保证软件
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
**********************************************
[rewrite_local]
^https:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/(subscribers\/.+\/offerings|product_entitlement_mapping) url script-request-header https://raw.githubusercontent.com/afengye/QX/main/header.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/product_entitlement_mapping$ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/mapping.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/subscribers\/.+\/offerings$ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/offerings.js
[mitm] 
hostname = api.revenuecat.com,api.rc-backup.com
*******************************/
