/******************************
脚本功能：水印相机-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
注意事项：查看频道说明
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/watermarking\.xitengtech\.cn\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/afengye/QX/main/syxj3.js
[mitm] 
hostname = water-fv.jslynhapi.com
*******************************/
let obj = JSON.parse($response.body);

obj.data.identity = {
   ...obj.data.identity,
   "vip_expire_time" : 32472115200,
   "vip" : 1    
}

$done({body:JSON.stringify(obj)});
