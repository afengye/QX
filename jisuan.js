/******************************
脚本功能：计算器HD-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-02
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www\.40sishi\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/jisuan.js
[mitm] 
hostname = www.40sishi.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/calculator/user/profile") != -1) {
      obj.data.vipState = {
            "startTime": 1717167110,
            "state": 1,
            "forever": false,
            "expireTime": 32472115200
      }
      
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
