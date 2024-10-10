/*******************************
脚本功能：Vibes个性化音乐-解锁订阅
脚本作者：afengye
注意事项：查看频道说明
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/vibes.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/afengye/QX/main/vibes.js
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
    const product_id = "com.andyworks.vibes.yearlyPatron";
    const entitlements = ["patron",
        "skinAndy",
        "skinCedar",
        "skinChroma",
        "skinKarat",
        "skinMonster",
        "skinOpal",
        "skinPresstube"];
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
