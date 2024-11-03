/*******************************
脚本功能：脚本解锁订阅集合
脚本作者：afengye
注意事项：查看频道说明
频道地址：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
********************************
[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/crack.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/.+$) url script-request-header https://raw.githubusercontent.com/afengye/QX/main/crack.js
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
    let date = {"expires_date": "2999-01-01T00:00:00Z","original_purchase_date":"2021-01-01T00:00:00Z","purchase_date": "2021-01-01T00:00:00Z","ownership_type": "PURCHASED","store": "app_store"};
    let subscriber = body.subscriber;
    let bundle_id = $request.headers["X-Client-Bundle-ID"]?$request.headers["X-Client-Bundle-ID"]:$request.headers["User-Agent"].match(/^[a-zA-Z0-9]+/)[0];
    const list = [
      {"app_name":"Days","bundle_id":"net.mattdavenport.daysuntil","product_id":"net.mattdavenport.daysuntil.dayspremiumlifetime","entitlements":["premium","pro"],"version":"3.15"},
      {"app_name":"Diarly","bundle_id":"com.pureformstudio.diaryOSX","product_id":"com.pureformstudio.diary.yearly_2022_promo","entitlements":["PRO"],"version":"3.18"},
      {"app_name":"Loopsie","bundle_id":"","product_id":"com.gamelounge.loopsie.ios.one_time","entitlements":["premium"],"version":"8.17.1"},
      {"app_name":"1Blocker","bundle_id":"","product_id":"blocker.ios.iap.lifetime","entitlements":["premium"],"version":"5.8"},
      {"app_name":"VidCap","bundle_id":"io.fadel.VidCap","product_id":"subs.vcp_59.99_365_3","entitlements":["io.fadel.vidcap.pro"],"version":"1.0.197"},
      {"app_name":"SuperPlanner","bundle_id":"com.gabrielguarino.SuperPlanner","product_id":"superplanner_pro_lifetime","entitlements":["pro_lifetime"],"version":"2.1.2406"}
   ];  
   for(let data of list){
     if(bundle_id == data.bundle_id || bundle_id == data.app_name){
       let product_id = data.product_id;
       let entitlements = data.entitlements;
       subscriber.subscriptions[(product_id)] = date;
       for (let entitlement of entitlements) {
         subscriber.entitlements[(entitlement)] = date;        
         subscriber.entitlements[(entitlement)].product_identifier = product_id; 
       }
       break; 
     }   
   }
   obj.body = JSON.stringify(body);
  }
}

$done(obj);

