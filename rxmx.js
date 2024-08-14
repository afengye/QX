/******************************
脚本功能：睿心冥想-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-08-17
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.wiseinheart\.com\/api\/MiniProgram\/(User\/Profile|Course\/CourseDetail) url script-response-body https://raw.githubusercontent.com/afengye/QX/main/rxmx.js
[mitm] 
hostname = api.wiseinheart.com
*******************************/


