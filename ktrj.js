/*******************************
脚本功能：抠图软件-解锁会员
脚本作者：afengye
注意事项：无
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^http:\/\/kt\.jiaofei8\.cn\/api\/user\/my url script-response-body https://raw.githubusercontent.com/afengye/QX/main/ktrj.js
[mitm] 
hostname = kt.jiaofei8.cn
*******************************/

let obj =  JSON.parse($response.body);

let data = obj.data;
data = {
  ...data,
  "free_num" : 99999,
  "finish_time" : "终身会员",
  "type" : 2
}

$done({body: JSON.stringify(obj)});
