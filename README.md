# ð¥° Live.

~~ä¸ä¸ªå¿«éãç®æ´ãå®å¨ãæ°æ®å¨æ§å¶çæ åç«¯å¾®åå®¢~~

ä¸ä¸ªç®éçå¾®åå®¢é¡µ

## çµææ¥èª
- [giki.app](https://giki.app) ä¸æ¬¾ç®åãå®å¨ãåè½å¼ºå¤§çæ¥è®°åºç¨ã
- [valinejs](https://valine.js.org) ä¸æ¬¾å¿«éãç®æ´ä¸é«æçæ åç«¯è¯è®ºç³»ç»ã

## å¦ä½å·¥ä½ç

æ¨ææ°æ®å­å¨äº [Leancloud](http://leancloud.cn/) 
ç [æ°æ®å­å¨](https://leancloud.cn/docs/storage_overview.html) ä¸­ï¼ä½¿ç¨å [valinejs](https://valine.js.org) ä¸è´çæ¹å¼ï¼ï¼ä½¿ç¨ [react](https://github.com/facebook/react) å [antd](https://ant.design/components/overview-cn/) å®ç°æ¨ææ°æ®å±ç¤ºé¡µé¢ã


## ä½¿ç¨

### 1.åå»ºLeancloudåºç¨

å¨ Leancloud åå»ºä¸ä¸ªå¼åç Appï¼è·å`AppID`å`AppKey`ï¼ç»å®åååè·åæå¡å¨å°åã
> å·ä½å¯åèï¼https://leancloud.cn/docs/sdk_setup-js.html#hash20935048

å¨`src/conf.js`ä¸­ä¿®æ¹ Leancloud ç¸å³éç½®ã
```
applicationId : "your-app-id",
applicationKey : "your-app-key",
serverURL:"https://your-api.address",
```
### 2.åå»ºTweetç±»

å¨ Leancloud App >> æ°æ®å­å¨ >> ç»æåæ°æ®ä¸­æ°å»º class : `Tweet` ,ç»æå¦ä¸ï¼

|  content   | tags  | likes|
|  ----  | ----  | ----|
| string  | array | number |
ï¼å¯éï¼ï¼éç½®æé

#### 1ï¼å¨åå»ºè´¦æ·ä¸­å»ºç«ä¸ä¸ªè´¦æ·ã

####  2ï¼æéè®¾ç½®

##### class è®¿é®æé

 |  æä½   | æé  | 
 |  ----  | ----  | 
 | add_fields  | æå®ç¨æ· | 
 | create  | æå®ç¨æ· | 
 | delete  | æå®ç¨æ· | 
 | update| ææç¨æ· | 
 | find| ææç¨æ· | 
 | get| ææç¨æ· | 

ç±äº`likes`å­æ®µéè¦å¨åç«¯æ´æ°ï¼å æ­¤å¼æ¾äº update æä½ç»ææç¨æ·ï¼å¯¹å¶ä»å­æ®µçä¿®æ¹å¨ä¸é¢éå¶ã

##### é»è®¤ACLæé

|  æä½   | æé  |
|  ----  | ----  |
| read  | ææç¨æ· |
| write  | ææç¨æ· |

åæ ·ç±äº`likes`å­æ®µçæ´æ°é®é¢ï¼write æéä¹ä¸å¾ä¸å¼æ¾ã

##### åæé

|  å   | å®¢æ·ç«¯ä¸å¯è§  | åªè¯»|
 |  ----  | ----  | ----  | 
| ACL  | â | | 
| content  |  |â | 
| tags  |  | â| 
| likes  | | | 
| createdAt  |  | | 
| updatedAt  |  | | 

#####  3ï¼ è®¾ç½®>>å®å¨ä¸­å¿>>éç½®WEBå®å¨åå
### 3. æ°å»ºä¸æ¡è®°å½
- content: ç¬¬ä¸æ¡liveð
- likes: 0
- tags: ["ææå¼"]
### 4. å¶ä»éç½®
- [Favicon Generator](https://realfavicongenerator.net/) çæä¸å¥faviconæ¿æ¢å°`public/`
- ä¿®æ¹`public/index.html`ä¸­ç title,keywords,descriptionsã
- Â·Â·Â·
### 5. é¢è§é¡¹ç®
```shell
git clone https://github.com/yuhangch/live.git
cd live && yarn install
yarn start
```
è½çå°åå»ºç"ç¬¬ä¸æ¡liveð"ï¼å°±å¤§ååæäºã
### 6. é¨ç½²é¡¹ç®

```shell
yarn build
```
å°çæçéææä»¶é¨ç½²å°ä»»ä½å°æ¹å§ï¼


## å¦ä½æ°å¢åå®¹
- å¨ Leancloud ç [æ§å¶å°](https://console.leancloud.cn/) ä¸­æ°å»ºï¼å¬ä¸å»å¾è ¢ï¼å®æèµ·æ¥è¿å¯ä»¥æ¥å **[åä¸æ¯ä¸è½ç¨.jpg]** ï¼ 
- åä¸ªå®¢æ·ç«¯ï¼ä½¿ç¨ [oclif](https://github.com/oclif/oclif) å®ç°äºä¸ä¸ªç®åçå®¢æ·ç«¯ [live-cli](https://github.com/yuhangch/live-cli) ,ä¾å¤§å®¶åèã
