/*******************************
脚本功能：模板
脚本作者：afengye
注意事项：无
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
 url script-response-body https://raw.githubusercontent.com/afengye/QX/main/
[mitm] 
hostname = 
*******************************/

let obj =  JSON.parse($response.body);


$done({body: JSON.stringify(obj)});
