/*******************************
脚本功能：水印相机-解锁会员
脚本作者：afengye
注意事项：无
下载软件：https://apps.apple.com/app/id6505012233
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^http:\/\/supercamera\.yifanxinmei\.com\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/afengye/QX/main/syxj2.js
[mitm] 
hostname = supercamera.yifanxinmei.com
*******************************/

let obj =  JSON.parse($response.body);
let data = obj.data.identity;
data.vip_expire_time= 32472115200;
data.vip = 1;
$done({body: JSON.stringify(obj)});
