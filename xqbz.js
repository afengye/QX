/******************************
脚本功能：星晴壁纸-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2025-01-21
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/huyitool\.jidiandian\.cn\/tool-flow-service\/api\/payMember\/getPayMemberInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xqbz.js
[mitm] 
hostname = huyitool.jidiandian.cn
*******************************/
let obj = JSON.parse($response.body);

obj.data = {
   ...obj.data,
   "member" : true,
   "memberDeadline" : "2999-01-01",
   "permanentMember" : true
}

$done({body: JSON.stringify(obj)});
