/******************************
脚本功能：Now-登录后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-05
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/nowapi\.navoinfo\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/now.js
[mitm] 
hostname = nowapi.navoinfo.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/h2/user/getUserInfo") != -1) {
    var vipInfo = {
        expire_time: 32472115200,
        expire_notice: "",
        is_vip: true
    };
    obj.result.now_sport = obj.result.excellent = obj.result.tapping = obj.result.training_camp = obj.result.wooden_fish = obj.result.book = obj.result.yoga = vipInfo;
    obj.result.now_vip.is_forever = true;
    obj.result.now_vip.is_vip = true;
    obj.result.now_vip.expire_time = 32472115200;
    obj.result.now_vip.expire_notice = "您当前已经是Now会员";
    obj.result.nickname = "afengye";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
