/******************************
脚本功能：去国内广告规则
脚本作者：afengye
脚本频道：https://t.me/afengye
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http[s]?:\/\/(/toblog\.ctobsnssdk\.com|open\.e\.kuaishou\.com|mobads\.baidu\.com|api-access\.pangolin-sdk-toutiao1\.com|adservice\.sigmob\.cn|(\.?)+\.gdt\.qq\.com)(\.?)+ url reject
[mitm] 
hostname = toblog.ctobsnssdk.com,open.e.kuaishou.com,mobads.baidu.com,api-access.pangolin-sdk-toutiao1.com,adservice.sigmob.cn,*.gdt.qq.com
*******************************/
