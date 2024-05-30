/******************************
脚本功能：口袋故事-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-01
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.idaddy\.cn\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/koudai.js
[mitm] 
hostname = api.idaddy.cn
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/inner4/ilisten/user/user:get") != -1) {
    obj.data.nickname = "afengye";
    obj.data.is_buy = true;
    obj.data.is_forever_vip = 1;
    obj.data.vip = 1;
    obj.data.vip_create_ts = "2024-06-01T00:00:00Z";
    obj.data.vip_valid_ts = "2099-06-01T00:00:00Z";
    obj.data.vip_info = {
      "is_story_vip": true,
      "is_knowledge_vip": true,
      "story_vip_expire_time": "2099-06-01 00:00:00",
      "knowledge_vip_expire_day": "999999999",
      "knowledge_vip_expire_time": "2099-06-01 00:00:00",
      "is_forever_story_vip": true,
      "is_forever_knowledge_vip": true,
      "story_vip_expire_day": "999999999",
      "is_story_vip_subscribe": true
    };
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
