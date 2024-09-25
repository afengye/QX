/*****************************************************
脚本功能：Gentler Streak健康与健身贴心助手-解锁订阅
脚本作者：afengye
注意事项：查看频道说明
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
******************************************************
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/gsjk.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/afengye/QX/main/gsjk.js
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
    const name = "\u0070\u0072\u0065\u006d\u0069\u0075\u006d";
    const appid = "\u0061\u0070\u0070\u002e\u0067\u0065\u006e\u0074\u006c\u0065\u0072\u002e\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002e\u0073\u0075\u0062\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006f\u006e\u002e\u0079\u0065\u0061\u0072\u006c\u0079\u0031\u002e\u0061\u0064\u0064\u0033\u0030\u006f\u0066\u0066\u005f\u0031\u0073\u0074\u0059\u0065\u0061\u0072";
    let data = {
      "expires_date": "2999-01-01T00:00:00Z",
      "original_purchase_date":  "2021-01-01T00:00:00Z",
      "purchase_date": "2021-01-01T00:00:00Z",
      "ownership_type": "PURCHASED",
      "store": "app_store"
    };
    let subscriber = body.subscriber;
    subscriber.subscriptions[(appid)] = data;
    subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
    subscriber.entitlements[(name)].product_identifier = (appid);   
    obj.body = JSON.stringify(body);
  } 
}

$done(obj);
