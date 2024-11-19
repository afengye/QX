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
    let bundle_id = $request.headers["X-Client-Bundle-ID"]?$request.headers["X-Client-Bundle-ID"]:$request.headers["User-Agent"].match(/^[%a-zA-Z0-9]+/)[0];
    const list = [
      {"app_name":"Days","bundle_id":"net.mattdavenport.daysuntil","product_id":"net.mattdavenport.daysuntil.dayspremiumlifetime","entitlements":["premium","pro"],"version":"3.15"},
      {"app_name":"Diarly","bundle_id":"com.pureformstudio.diaryOSX","product_id":"com.pureformstudio.diary.yearly_2022_promo","entitlements":["PRO"],"version":"3.18"},
      {"app_name":"Loopsie","bundle_id":"","product_id":"com.gamelounge.loopsie.ios.one_time","entitlements":["premium"],"version":"8.17.1"},
      {"app_name":"1Blocker","bundle_id":"","product_id":"blocker.ios.iap.lifetime","entitlements":["premium"],"version":"5.8"},
      {"app_name":"VidCap","bundle_id":"io.fadel.VidCap","product_id":"subs.vcp_59.99_365_3","entitlements":["io.fadel.vidcap.pro"],"version":"1.0.197"},
      {"app_name":"SuperPlanner","bundle_id":"com.gabrielguarino.SuperPlanner","product_id":"superplanner_pro_lifetime","entitlements":["pro_lifetime"],"version":"2.1.2406"},
      {"app_name":"Ereasy","bundle_id":"background.remover.bg.eraser","product_id":"app.ereasy.ereasy.na.bold.one_year","entitlements":["premium","Full_access_app"],"version":"2.0.0"},
      {"app_name":"stepapp","bundle_id":"com.gunthermarktl.stepapp","product_id":"app.steps.stepsapp.premium.year","entitlements":["stepapppro"],"version":"8.0.1"},
      {"app_name":"WorldClock","bundle_id":"com.overdesigned.WorldClock","product_id":"com.overdesigned.worldclock.removeads1","entitlements":["lifetime-unlock"],"version":"1.21.2"},
      {"app_name":"%E8%A7%A3%E5%BF%A7%E5%A8%83%E5%A8%83","bundle_id":"id.com.WorryDolls","product_id":"magicmode","entitlements":["magicmode"],"version":"2.0"},
      {"app_name":"opusvpn","bundle_id":"com.biel.opus.vpn","product_id":"opusvpn.v2.yearly","entitlements":["PRO"],"version":"1.8.6"},
      {"app_name":"Fleeky","bundle_id":"net.cacaomobile.customizescreen","product_id":"fleeky_week_cny48_3d","entitlements":["Unlimited"],"version":"3.15.0"},
      {"app_name":"Zen7%20VPN","bundle_id":"com.efe.zen7vpn","product_id":"yearly","entitlements":["Premium"],"version":"2.0"},
      {"app_name":"HappyScale","bundle_id":"com.frontpocketsoftware.happyscale","product_id":"com.frontpocketsoftware.happyscale.premium.perpetual","entitlements":["premium"],"version":"2024.15"},
      {"app_name":"%E9%85%B7%E6%8B%8D","bundle_id":"com.wallpapershub.anime","product_id":"com.wallpapershub.anime.premiumCategories","entitlements":["Premium"],"version":"3.7"},
      {"app_name":"ZoomEarth","bundle_id":"com.neave.zoomearth","product_id":"ze_pro_annual_v1","entitlements":["pro"],"version":"3.1"},
      {"app_name":"FitnessView","bundle_id":"com.funnmedia.fitnessview","product_id":"fitnessview.premiumOnetime","entitlements":["fitnessview-premium"],"version":"2.5.7"},
      {"app_name":"Video%20Up!","bundle_id":"video.up.editor.maker","product_id":"app.videoup.videoup.na.base.one_year","entitlements":["Full_access_app"],"version":"1.23.1"},
      {"app_name":"ElementNote","bundle_id":"com.soysaucelab.element.note","product_id":"com.soysaucelab.element.note.lifetime","entitlements":["pro"],"version":"2.5.0"},
      {"app_name":"Bend2","bundle_id":"com.bowery-digital.bend","product_id":"subs_29.99_365_0","entitlements":["all_access"],"version":"6.1.3"},
      {"app_name":"Carbon","bundle_id":"rr.carbon","product_id":"carbon.subscription.yearly.1.freetrial","entitlements":["pro"],"version":"14.2"},
      {"app_name":"Assembly","bundle_id":"com.pixite.assembly","product_id":"com.pixite.assembly.1yearP","entitlements":["premium_access"],"version":"2.4.7"},
      {"app_name":"UTC","bundle_id":"tech.miidii.UTC","product_id":"tech.miidii.UTC.unlock.pro","entitlements":["Entitlement.Pro"],"version":"3.11"},
      {"app_name":"Ramble","bundle_id":"com.bowery-digital.ramble","product_id":"subs.rmbl_19.99_365_0","entitlements":["all_access"],"version":"1.1.1"},
      {"app_name":"PDFScanner","bundle_id":"pdf.scanner.reader.online.pro","product_id":"weekly_f3_699_scanner","entitlements":["full_access"],"version":"2.7.76"},
      {"app_name":"GeniusScan","bundle_id":"com.geniussoftware.GeniusScan","product_id":"com.thegrizzlylabs.geniusscan.geniuscloud.subscription.year.1","entitlements":["ultra"],"version":"7.22"},
      {"app_name":"Gymnotize","bundle_id":"com.gymnotize","product_id":"com.gymnotize.upgrade.pro.subscription.annual","entitlements":["rc.gymnotize.pro.subscription"],"version":"9.2.62"},
      {"app_name":"XS%20VPN","bundle_id":"com.xsvpn.free.turbofast","product_id":"xs_ios_yearly_sub_1","entitlements":["Premium"],"version":"2.6"},
      {"app_name":"Goru","bundle_id":"com.ahmetserdarkaradeniz.Goru","product_id":"com.ahmetserdarkaradeniz.goruyearlyalternative","entitlements":["goru_pro"],"version":"1.6.1"},
      {"app_name":"Pedometer","bundle_id":"com.crossforward.pedometer","product_id":"pedometer_annual_20","entitlements":["premium"],"version":"6.1"},
      {"app_name":"%E5%A4%A9%E6%B0%94%20%C2%B4","bundle_id":"maxime.maheo.simple-weather","product_id":"maxime.maheo.simpleweather.yearly","entitlements":["premium"],"version":"3.5.4"},
      {"app_name":"ChatGPT","bundle_id":"com.prod.gpt","product_id":"com.prod.gpt.1y40","entitlements":["premium"],"version":"1.2.6"}
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

