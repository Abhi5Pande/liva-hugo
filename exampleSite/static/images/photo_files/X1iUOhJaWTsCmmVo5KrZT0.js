;/*FB_PKG_DELIM*/

__d("usePolarisCreationSessionMediaSelect",["PolarisCreationActionCreationSelectImage","PolarisReactRedux","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(){var a=d("PolarisReactRedux").useDispatch();return h(function(b){b.length&&a(d("PolarisCreationActionCreationSelectImage").creationSelectImage(b[0]))},[a])}g["default"]=a}),98);
__d("usePolarisHandleStartCreationSession",["PolarisCreationActionStartCreationSession","PolarisCreationMode","PolarisNavigationActions","PolarisReactRedux","nullthrows","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useRef;function a(a){var b=d("PolarisReactRedux").useDispatch(),e=h(!1),f=function(a,c){c===void 0&&(c=d("PolarisCreationMode").CreationMode.POST),b(d("PolarisNavigationActions").trackEntrypoint()),b(d("PolarisCreationActionStartCreationSession").startCreationSession(a,c))};return function(b,g){g===void 0&&(g=d("PolarisCreationMode").CreationMode.POST);if(e.current===!0)return;e.current=!0;c("nullthrows")(a.current).selectFile();f(b,g);e.current=!1}}g["default"]=a}),98);
__d("CreationSessionStarter",["PolarisImageFileForm.react","react","usePolarisCreationSessionMediaSelect","usePolarisHandleStartCreationSession"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useRef;function a(a){var b=a.children;a.creationMode;a=i(null);var e=c("usePolarisCreationSessionMediaSelect")(),f=c("usePolarisHandleStartCreationSession")(a);return h.jsxs(h.Fragment,{children:[h.jsx("div",{children:h.jsx(d("PolarisImageFileForm.react").ImageFileForm,{acceptMimeTypes:["image/jpeg"],onFileChange:e,ref:a},"creation-starter-upload")}),b(f)]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisClipsTabHelpers",["IGDSThemeConstantsHelpers","PolarisDsaQEHelpers","PolarisNavigationHelpers"],(function(a,b,c,d,e,f,g){"use strict";var h=12,i=60,j=32;function k(){var a;a=(a=(a=document.documentElement)==null?void 0:a.clientWidth)!=null?a:0;return a-d("PolarisNavigationHelpers").getNavBarDesktopWidth()-2*j-i-h}function l(a){var b,c;b=(b=(b=document.documentElement)==null?void 0:b.clientHeight)!=null?b:0;c=(c=(c=document.documentElement)==null?void 0:c.clientWidth)!=null?c:0;var e=k();e=e*(16/9);var f=d("IGDSThemeConstantsHelpers").getNumericValue("nav-narrow-screen-min"),g=d("IGDSThemeConstantsHelpers").getNumericValue("revamp-nav-bottom-toolbar-height");c=c<f?b*.9-g:b*.9;a===!0&&(c-=78);e>c&&(e=c);return e}var m=1200;function a(a){if(a==null){var b=l(d("PolarisDsaQEHelpers").hasTabbedReelsHeader());return Math.min(b,m)}b=a.getBoundingClientRect().top;a=32;return Math.min(b-a,m)}var n={container:{display:"x78zum5",maxHeight:"xedcshv",$$css:!0},ufi:{justifyContent:"x13a6bvl",marginStart:"x16n37ib",width:"x1247r65",$$css:!0}};function b(){return{container:n.container,ufi:n.ufi}}c=1500;g.getReelMediaContainerHeight=l;g.getMaxPopoverHeight=a;g.getClipsContainerStyles=b;g.WINDOW_RESIZE_THROTTLE=c}),98);
__d("polarisWithCreationStarter",["CreationSessionStarter","polarisGetDisplayName","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=0;function a(a){var b="component-with-creation-starter-"+i++;function d(d){return h.jsx(c("CreationSessionStarter"),{children:function(c){return h.createElement(a,babelHelpers["extends"]({},d,{key:b,onStartCreation:c}))}})}d.displayName=d.name+" [from "+f.id+"]";d.displayName="withCreationStarter("+c("polarisGetDisplayName")(a)+")";return d}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("PolarisYourActivityRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisYourActivityRoot.react").__setRef("PolarisYourActivityRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisQRRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisQRRoot.react").__setRef("PolarisQRRoot.entrypoint")};g["default"]=a}),98);
__d("sortBy",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a.map(function(a,c){return{index:c,sortValue:b(a),value:a}});a.sort(function(a,b){var c=a.sortValue,d=b.sortValue;if(c>d)return 1;return c<d?-1:a.index-b.index});return a.map(function(a){return a.value})}f["default"]=a}),66);