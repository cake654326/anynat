"use strict";(self.webpackChunkanynat_doc=self.webpackChunkanynat_doc||[]).push([[906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,c(c({ref:n},p),{},{components:t})):r.createElement(y,c({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2,title:"\u670d\u52a1\u7aef\u90e8\u7f72"},c=void 0,i={unversionedId:"install-server",id:"install-server",title:"\u670d\u52a1\u7aef\u90e8\u7f72",description:"\u521b\u5efa docker-compose.yml \u6587\u4ef6",source:"@site/docs/install-server.md",sourceDirName:".",slug:"/install-server",permalink:"/docs/install-server",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u670d\u52a1\u7aef\u90e8\u7f72"},sidebar:"docsSidebar",previous:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/docs/install"},next:{title:"\u5ba2\u6237\u7aef\u90e8\u7f72",permalink:"/docs/install-client"}},s={},l=[{value:"\u521b\u5efa docker-compose.yml \u6587\u4ef6",id:"\u521b\u5efa-docker-composeyml-\u6587\u4ef6",level:3},{value:"\u521b\u5efaAnynat\u670d\u52a1\u7aef\u5bb9\u5668",id:"\u521b\u5efaanynat\u670d\u52a1\u7aef\u5bb9\u5668",level:3},{value:"\u8fdb\u5165\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u6587\u4ef6\u5939",id:"\u8fdb\u5165\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u6587\u4ef6\u5939",level:3},{value:"\u521b\u5efa\u670d\u52a1\u7aef\u8fde\u63a5\u914d\u7f6e\u6587\u4ef6: <strong><em> config.customize.ts </em></strong>",id:"\u521b\u5efa\u670d\u52a1\u7aef\u8fde\u63a5\u914d\u7f6e\u6587\u4ef6--configcustomizets-",level:3},{value:"\u91cd\u542f\u5bb9\u5668,\u6bcf\u6b21\u4fee\u6539\u914d\u7f6e\u90fd\u9700\u8981\u91cd\u542f\u5bb9\u5668/\u91cd\u542f\u7cfb\u7edf",id:"\u91cd\u542f\u5bb9\u5668\u6bcf\u6b21\u4fee\u6539\u914d\u7f6e\u90fd\u9700\u8981\u91cd\u542f\u5bb9\u5668\u91cd\u542f\u7cfb\u7edf",level:3},{value:"\u81f3\u6b64,\u606d\u559c\u4f60\u5b8c\u6210\u670d\u52a1\u7aef\u90e8\u7f72\u5b89\u88c5\u6559\u7a0b",id:"\u81f3\u6b64\u606d\u559c\u4f60\u5b8c\u6210\u670d\u52a1\u7aef\u90e8\u7f72\u5b89\u88c5\u6559\u7a0b",level:3}],p={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u521b\u5efa-docker-composeyml-\u6587\u4ef6"},"\u521b\u5efa docker-compose.yml \u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: \'3.9\'\n\nservices:\n\n  anynat:\n    image: rockey1997/anynat:1.0.0 #\u955c\u50cf\u7248\u672c\n    container_name: anynat_1 #\u5bb9\u5668\u540d\u79f0\n    ports:\n      - "2333:2333" #\u670d\u52a1\u7aef\u4e0e\u5ba2\u6237\u7aef\u901a\u4fe1\u7684\u7aef\u53e3  \u5982\u679c\u6ca1\u6709\u57df\u540d\u7684\u60c5\u51b5\u4e0b \u53ef\u4ee5\u4f7f\u7528 \u516c\u7f51IP:2333\u8fdb\u884c\u8fde\u63a5\n      - "443:443" #\u4f7f\u7528\u8be5\u7aef\u53e3\u9700\u8981\u7ed1\u5b9a\u57df\u540d  \u4f8b\u5982a.com\u5bf9\u5e94\u5ba2\u6237\u7aef80\u670d\u52a1\u7aef\u53e3  b.com\u5bf9\u5e94\u5ba2\u6237\u7aef\u670d\u52a1\u7aef\u53e381 \u5982\u679c\u4f7f\u7528IP+\u7aef\u53e3\u7684\u8bbf\u95ee\u65b9\u5f0f \u9700\u8981\u5728\u6b64\u66b4\u9732\u5bf9\u5e94\u7684\u7aef\u53e3  \u4f8b\u5982bindPort\u662f11300   \u5c31\u8981\u6dfb\u52a011300:11300\n      - "10000:22" #\u5bb9\u5668ssh\u7aef\u53e3\n    restart: always\n    volumes:\n      - "./container/anynat/logs:/root/anynat/logs/pm2/logs" #\u65e5\u5fd7\u5b58\u653e\u8def\u5f84\n      - "./container/anynat/userConfig:/root/anynat/userConfig" #\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u8def\u5f84\n    environment:\n      VITE_RUNTIME_TYPE: server #\u8fd0\u884c\u65b9\u5f0f server:\u670d\u52a1\u7aef client:\u5ba2\u6237\u7aef\n')),(0,a.kt)("h3",{id:"\u521b\u5efaanynat\u670d\u52a1\u7aef\u5bb9\u5668"},"\u521b\u5efaAnynat\u670d\u52a1\u7aef\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker compose up -d\n")),(0,a.kt)("h3",{id:"\u8fdb\u5165\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u6587\u4ef6\u5939"},"\u8fdb\u5165\u914d\u7f6e\u6587\u4ef6\u5b58\u653e\u6587\u4ef6\u5939"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ./container/anynat/userConfig\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u670d\u52a1\u7aef\u8fde\u63a5\u914d\u7f6e\u6587\u4ef6--configcustomizets-"},"\u521b\u5efa\u670d\u52a1\u7aef\u8fde\u63a5\u914d\u7f6e\u6587\u4ef6: ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("em",{parentName:"strong"}," config.customize.ts "))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"}," \u6240\u6709\u53ef\u914d\u7f6e\u7684\u53c2\u6570\u8bf4\u660e:",(0,a.kt)("a",{parentName:"em",href:"https://github.com/rockey2020/anynat/blob/main/config.base.ts"},"https://github.com/rockey2020/anynat/blob/main/config.base.ts")," "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const customizeConfig = {\n    server: {\n        mode: "wss",\n        bindDomains: ["example-anynat.next-app.cc"],//\u60a8\u7684\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u901a\u4fe1\u57df\u540d\n    },\n    client: {\n        //\u9700\u8981\u7a7f\u900f\u7684\u5185\u7f51\u670d\u52a1\u5217\u8868(\u8be5\u9879\u914d\u7f6e\u9700\u8981\u5b8c\u5168\u548c\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4e00\u81f4)\n        connections: [\n            {\n                type: "tcp",//\u5185\u7f51\u670d\u52a1\u534f\u8bae\u7c7b\u578b http https websocket ssh\u7b49 \u5219\u586b\u5199tcp \u5176\u4ed6\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u586b\u5199udp \n                serverUrl: "wss://example-anynat.next-app.cc",//\u60a8\u7684\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u7684\u901a\u4fe1\u57df\u540d\n                //uuid\u4e0d\u80fd\u6709\u91cd\u590d \u6bcf\u4e00\u4e2a\u670d\u52a1\u5bf9\u5e94\u72ec\u7acb\u7684uuid\n                uuid: "3ab16a66-1736-4981-bd6a-a0d4a7a2ee07",\n                secretKey: "Qdc5q7fGr*YJ82TvwsrM",\n                localPort: 11300,//\u5185\u7f51\u672c\u5730\u670d\u52a1\u7684\u7aef\u53e3\n                localHost: "192.168.124.114",//\u5185\u7f51\u672c\u5730\u670d\u52a1\u7684IP\n                bindPort: 11300,//\u8be5\u5185\u7f51\u670d\u52a1\u7ed1\u5b9a\u7684\u5bf9\u5e94\u670d\u52a1\u7aef\u7aef\u53e3 \u5982\u679c\u6ca1\u6709\u57df\u540d\u7684\u8bdd \u4e5f\u53ef\u4ee5\u901a\u8fc7 \u670d\u52a1\u7aef\u516c\u7f51IP:11300 \u8bbf\u95ee\u5230\u60a8\u8981\u7a7f\u900f\u7684\u5185\u7f51\u670d\u52a1  \u4f7f\u7528IP+\u7aef\u53e3\u8bbf\u95ee\u5185\u7f51\u670d\u52a1\u7684\u65f6\u5019  \u8bb0\u5f97\u5728\u670d\u52a1\u7aefdocker-compose.yml\u6587\u4ef6\u66b4\u9732\u5bf9\u5e94\u7684\u7aef\u53e3\n                bindDomains: ["example-a1.next-app.cc"],//\u914d\u7f6e\u597d\u540e \u8bbf\u95eeexample-a1.next-app.cc \u5c31\u80fd\u8bbf\u95ee\u5230\u4f60\u7684\u5185\u7f51\u670d\u52a1\n                //\u8bf7\u5230\u9996\u9875\u751f\u6210\u65b0\u7684AES\u52a0\u5bc6\u4fe1\u606f,\u5e76\u4e14\u5206\u522b\u8986\u76d6 aesKey iv \u5bf9\u5e94\u7684\u503c \u5207\u83ab\u4f7f\u7528\u672c\u6587\u6863\u4e2d\u7528\u4f5c\u6f14\u793a\u7684aes\u52a0\u5bc6\u4fe1\u606f\n                encryption: {\n                    aesKey: {\n                        "alg": "A256GCM",\n                        "ext": true,\n                        "k": "RGKoHaLq86ghkmBtTwiDeOnx0gQLB_vhS8eiF39xYUo",\n                        "key_ops": ["encrypt", "decrypt"],\n                        "kty": "oct"\n                    },\n                    iv: new Uint8Array([178, 212, 14, 44, 198, 193, 74, 134, 200, 107, 69, 144, 133, 24, 198, 254, 150, 118, 224, 96, 57, 135, 131, 113, 164, 34, 55, 19, 79, 246, 11, 185]),\n                },\n                hasSSL: false,//\u5982\u679c\u8be5\u5185\u7f51\u670d\u52a1\u542f\u7528\u4e86ssl\u529f\u80fd,\u5219\u8be5\u9009\u9879\u9700\u8981\u914d\u7f6e\u4e3atrue,\u5426\u5219\u65e0\u6cd5\u4f7f\u7528\u5185\u7f51\u7a7f\u900f\u529f\u80fd\n                rejectUnauthorized: false,//\u914d\u7f6efalse \u5ffd\u7565\u6389\u8bc1\u4e66\u76f8\u5173\u9519\u8bef(\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u7684\u901a\u4fe1)\n            },\n        ],\n    },\n};\n\nexport {customizeConfig};\n')),(0,a.kt)("h3",{id:"\u91cd\u542f\u5bb9\u5668\u6bcf\u6b21\u4fee\u6539\u914d\u7f6e\u90fd\u9700\u8981\u91cd\u542f\u5bb9\u5668\u91cd\u542f\u7cfb\u7edf"},"\u91cd\u542f\u5bb9\u5668,\u6bcf\u6b21\u4fee\u6539\u914d\u7f6e\u90fd\u9700\u8981\u91cd\u542f\u5bb9\u5668/\u91cd\u542f\u7cfb\u7edf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker restart anynat_1\n")),(0,a.kt)("h3",{id:"\u81f3\u6b64\u606d\u559c\u4f60\u5b8c\u6210\u670d\u52a1\u7aef\u90e8\u7f72\u5b89\u88c5\u6559\u7a0b"},"\u81f3\u6b64,\u606d\u559c\u4f60\u5b8c\u6210\u670d\u52a1\u7aef\u90e8\u7f72\u5b89\u88c5\u6559\u7a0b"))}m.isMDXComponent=!0}}]);