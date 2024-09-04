/***********************************************
脚本功能：手机录屏录大师急速录屏-解锁终身会员
脚本作者：afengye
注意事项：无
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
************************************************
[rewrite_local]
^https:\/\/iossjlplds\.sanwubeixin\.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/sjlp.js
[mitm] 
hostname = iossjlplds.sanwubeixin.cn
*******************************/

let obj =  JSON.parse($response.body);

obj.data.isVip = true;
obj.data.vip_time = 32472115200;
  
$done({body: JSON.stringify(obj)});
