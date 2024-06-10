/******************************
脚本功能：时光手帐-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-11
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.shouzhang\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/shiguang.js
[mitm] 
hostname = api.shouzhang.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/memcenterlk/member/firstpage.do") != -1) {
    obj.data.vip = true;
}


if($request.url.indexOf("/diary/vip/mem") != -1) {
    obj.data = "DU5rLTXu2oHwls2k+KiXj+pBYSZcM0qVoiL5OByGN0PJlcgR4udbb4CfLNAl54qbKlW1Zx9DBZhUucaNSgd70ui+qfriswv5Nf/Htb8AqYKiZDYgPpK2DFHgKljlZtYqMyRYNPH9TtXihDf5rwk1aseSrlUhpp93bkaeAYCat45buo3lTm24fPNv3vYHaDcYlXczjtpUkXMlUD989w7ml+Ug8lcd2ckq5SHQZLFn/626gNwpdK7diiOFl1yCnZjqZ5F45ZIIZyxKtqcxCSv8xc/zgmMVt7ussW3bqgSKWXo3bgvpXN7BMXgNHwbYaEAOBLFJczmePPNtW3MJqQEJQLV1BZQAmtwHIHQ2Trg6Rs3AQ1CVDBTBwI6tOVlDd0CApR2oDfcfh+k+nUWq+F9q8g==";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
