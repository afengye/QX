/*******************************
脚本功能：Unfold视频照片编辑器-解锁订阅
脚本作者：afengye
注意事项：查看频道说明
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/unfold.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/afengye/QX/main/unfold.js
[mitm] 
hostname = api.revenuecat.com
*******************************/
let obj = {};

if(typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  obj.headers = $request.headers;
}else {
  let body = JSON.parse(typeof $response != "undefined" && $response.body || null);
  if(body && body.subscriber) {
    const product_id = "UNFOLD_PRO_YEARLY";
    const entitlements = ["BESTDRESSED1_STORY",
        "BIRTHDAY1_STORY",
        "CS1_AN_STORY",
        "CS2_AN_STORY",
        "CS2_POST",
        "CS2_STORY",
        "CS3_POST",
        "CS3_STORY",
        "CS4_POST",
        "CS4_STORY",
        "DW1_POST",
        "DW1_STORY",
        "DW2_POST",
        "DW2_STORY",
        "EFFECTS1_STORY",
        "FF1_POST",
        "FF1_STORY",
        "FF2_POST",
        "FF2_STORY",
        "FF3_POST",
        "FF3_STORY",
        "FS1_FONT",
        "JN1_POST",
        "JN1_STORY",
        "JN2_POST",
        "JN2_STORY",
        "LOVE1_STORY",
        "LOVE2_STORY",
        "LOVE3_POST",
        "LOVE3_STORY",
        "MOODBOARD1_STORY",
        "MOODBOARD_POST",
        "PC1_STORY",
        "PL1_POST",
        "PL1_STORY",
        "PRIDE1_STORY",
        "PRO",
        "PROMOTION1_STORY",
        "PRO_YEARLY",
        "RED1_STORY",
        "REDUCED_PRO_YEARLY",
        "RP1_POST",
        "RP1_STORY",
        "RP2_POST",
        "RP2_STORY",
        "RP3_STORY",
        "SB1_POST",
        "SB1_STORY",
        "TUTORIAL1_POST",
        "TUTORIAL1_STORY",
        "ZD1_STORY"];
    let data = {"expires_date": "2999-01-01T00:00:00Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    subscriber.subscriptions[(product_id)] = data;

    for (let entitlement of entitlements) {
       subscriber.entitlements[(entitlement)] = data;        
       subscriber.entitlements[(entitlement)].product_identifier = product_id;   
    }

    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
