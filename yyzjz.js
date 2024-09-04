/*******************************
脚本功能：易颜证件照-解锁年度会员
脚本作者：afengye
注意事项：需登录
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/fufei\.cfcpe\.com\.cn\/api\/client\/info(.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yyzjz.js
[mitm] 
hostname = fufei.cfcpe.com.cn
*******************************/

let obj =  JSON.parse($response.body);

obj.data.vip = {
  "forever" : 1,
  "plan_id" : 2500,
  "func_quota" : -1,
  "actived_at" : "2024-09-01 09:00:00",
  "func_times" : 0,
  "isExpired" : 0,
  "is_vip_plan" : 1,
  "start_time" : null,
  "viptype" : 5346790,
  "ios_product_id" : "YiYanIDPhoto_Lifelong",
  "vipname" : "终身VIP",
  "expired_at" : "2999-01-01 00:00:00",
  "status" : 1
}

$done({body: JSON.stringify(obj)});
