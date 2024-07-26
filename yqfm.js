/******************************
脚本功能：元气FM-解锁部分会员功能
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-27
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/yuanjoy\.com\/FM\/api\/(\.?)+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yqfm.js
[mitm] 
hostname = yuanjoy.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);


if($request.url.indexOf("/api/special/list") != -1) {
    var list = obj.data;
    for (var i = 0; i < list.length; i++){
        var soundList = list[i].soundList;
        if (soundList) {
            for (var j = 0; j < soundList.length; j++){
              soundList[j].isFree = true;
            }
        }
    }
}

if($request.url.indexOf("/api/sync") != -1) {
    var list = obj.data.sounds;
    for (var i = 0; i < list.length; i++){
        list[i].isFree = true;
    }
}

if($request.url.indexOf("/api/radio/list/exclude") != -1 || $request.url.indexOf("/api/sound/list/exclude") != -1) {
    var list = obj.data.list;
    for (var i = 0; i < list.length; i++){
        list[i].isFree = true;
    }
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
