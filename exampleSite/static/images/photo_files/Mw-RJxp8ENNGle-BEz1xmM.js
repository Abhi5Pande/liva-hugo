;/*FB_PKG_DELIM*/

__d("ZenonSignalingProtocol",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({MW:"mw",MWPP:"mw++"});c=a;f["default"]=c}),66);
__d("MLCHealthLoggerEvent",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({DAILY_INTERACTION_WITH_SURFACE:"daily_interaction_with_surface",COMMIT_CREATE:"commit_create",COMMIT_EDIT:"commit_edit"});c=a;f["default"]=c}),66);
__d("MlcHealthBizappEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2646");b=d("FalcoLoggerInternal").create("mlc_health_bizapp_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthCareerProfileEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3833");b=d("FalcoLoggerInternal").create("mlc_health_career_profile_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthFacebookAndWorkplaceEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2647");b=d("FalcoLoggerInternal").create("mlc_health_facebook_and_workplace_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthFacebookEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2648");b=d("FalcoLoggerInternal").create("mlc_health_facebook_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthInstagramEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3766");b=d("FalcoLoggerInternal").create("mlc_health_instagram_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthInternalToolsEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2649");b=d("FalcoLoggerInternal").create("mlc_health_internal_tools_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthMessagingLightswitchEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2650");b=d("FalcoLoggerInternal").create("mlc_health_messaging_lightswitch_event",a);e=b;g["default"]=e}),98);
__d("MlcHealthWorkplaceEventFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2651");b=d("FalcoLoggerInternal").create("mlc_health_workplace_event",a);e=b;g["default"]=e}),98);
__d("MLCHealthInstrumentationPlugin__INTERNAL.react",["FBLogger","Lexical","LexicalComposerContext","LexicalUtils","MLCInstrumentationCommands","MlcHealthBizappEventFalcoEvent","MlcHealthCareerProfileEventFalcoEvent","MlcHealthFacebookAndWorkplaceEventFalcoEvent","MlcHealthFacebookEventFalcoEvent","MlcHealthInstagramEventFalcoEvent","MlcHealthInternalToolsEventFalcoEvent","MlcHealthMessagingLightswitchEventFalcoEvent","MlcHealthWorkplaceEventFalcoEvent","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useLayoutEffect,i=new Set();function j(a){switch(a){case"facebook":return c("MlcHealthFacebookEventFalcoEvent");case"workplace":return c("MlcHealthWorkplaceEventFalcoEvent");case"facebook_and_workplace":return c("MlcHealthFacebookAndWorkplaceEventFalcoEvent");case"internal_tools":return c("MlcHealthInternalToolsEventFalcoEvent");case"messaging_lightswitch":return c("MlcHealthMessagingLightswitchEventFalcoEvent");case"bizapp":return c("MlcHealthBizappEventFalcoEvent");case"instagram":return c("MlcHealthInstagramEventFalcoEvent");case"career_profile":return c("MlcHealthCareerProfileEventFalcoEvent");default:a}throw c("FBLogger")("lexical").mustfixThrow("Policy product not handled by exhaustive switch-case?")}function k(a,b,c){j(a).log(function(){return{event:c,surface:b}})}function a(a){var b=a.editor__DEPRECATED,c=a.policyProduct,e=a.surface,f;if(b)f=b;else{a=d("LexicalComposerContext").useLexicalComposerContext();f=a[0]}h(function(){var a=function(){};i.has(e)||(a=f.registerUpdateListener(function(b){var d=b.dirtyLeaves;b=b.tags;if(i.has(e)){a();return}if(d.size===0||b.has("history-merge")||!f.isEditable())return;i.add(e);k(c,e,"daily_interaction_with_surface");a()}));return d("LexicalUtils").mergeRegister(a,f.registerCommand(d("MLCInstrumentationCommands").COMMIT_COMMAND,function(a){a==="create"?k(c,e,"commit_create"):k(c,e,"commit_edit");return!1},d("Lexical").COMMAND_PRIORITY_CRITICAL))},[f,c,e]);return null}g["default"]=a}),98);
__d("MLCInteractionInstrumentationPlugin__INTERNAL.react",["cr:3286","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return b("cr:3286")&&h.jsx(b("cr:3286"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MLCTypingPerformancePlugin__INTERNAL.react",["LexicalComposerContext","LexicalText","cr:2012305","cr:308","cr:3287","cr:5452","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useLayoutEffect,j=b("cr:2012305")||b("cr:308");e=(c=b("cr:5452"))!=null?c:{};var k=e.getTextLengthBucket;function a(a){if(j===null)return null;b("cr:3287")&&b("cr:3287")();return h.jsx(l,babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";function l(a){var b=a.editor__DEPRECATED,c=a.format__DEPRECATED,e=a.surface;a=a.typingPerformanceID;var f=a===void 0?"":a,g;if(b)g=b;else{a=d("LexicalComposerContext").useLexicalComposerContext();g=a[0]}i(function(){var a=babelHelpers["extends"]({},k==null?null:{textLengthBucket:k(g.getEditorState().read(d("LexicalText").$rootTextContent).length)}),b;h();function h(){b==null?void 0:b();if(j===null)return;var d=null,h=g.registerRootListener(function(b){if(b===d)return;d!==null&&j.unregisterTypingPerf(d);if(b!==null){var g;j.trackTypingPerf(b,e,d,babelHelpers["extends"]({},a,{editor:"LexicalEditor",format:(g=c)!=null?g:"",typingPerformanceID:f}))}d=b});b=function(){h(),d!==null&&j.unregisterTypingPerf(d)}}var i=k==null?null:g.registerTextContentListener(function(b){b=k(b.length);if(b===a.textLengthBucket)return;a.textLengthBucket=b;h()});return function(){b==null?void 0:b(),i==null?void 0:i()}},[f,g,c,e]);return null}g["default"]=a}),98);
__d("MLCInstrumentationPlugin__INTERNAL.react",["MLCHealthInstrumentationPlugin__INTERNAL.react","MLCInteractionInstrumentationPlugin__INTERNAL.react","MLCTypingPerformancePlugin__INTERNAL.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b="facebook";b;function a(a){return h.jsxs(h.Fragment,{children:[h.jsx(c("MLCTypingPerformancePlugin__INTERNAL.react"),babelHelpers["extends"]({},a)),h.jsx(c("MLCHealthInstrumentationPlugin__INTERNAL.react"),babelHelpers["extends"]({},a)),h.jsx(c("MLCInteractionInstrumentationPlugin__INTERNAL.react"),babelHelpers["extends"]({},a))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("DirectRequestsDeclineButtonConfirmFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3349");b=d("FalcoLoggerInternal").create("direct_requests_decline_button_confirm",a);e=b;g["default"]=e}),98);
__d("DirectRequestsThreadAllowFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3674");b=d("FalcoLoggerInternal").create("direct_requests_thread_allow",a);e=b;g["default"]=e}),98);
__d("DirectRequestsThreadDeclineFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3675");b=d("FalcoLoggerInternal").create("direct_requests_thread_decline",a);e=b;g["default"]=e}),98);
__d("MessageRequestsInfoBannerShownFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("258");b=d("FalcoLoggerInternal").create("message_requests_info_banner_shown",a);e=b;g["default"]=e}),98);
__d("MessageRequestsThreadActionConfirmedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("259");b=d("FalcoLoggerInternal").create("message_requests_thread_action_confirmed",a);e=b;g["default"]=e}),98);
__d("MessageRequestsThreadActionTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("260");b=d("FalcoLoggerInternal").create("message_requests_thread_action_tapped",a);e=b;g["default"]=e}),98);
__d("MessageRequestsThreadDenialOptionsTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("261");b=d("FalcoLoggerInternal").create("message_requests_thread_denial_options_tapped",a);e=b;g["default"]=e}),98);
__d("MessageRequestsBulkActionConfirmedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("256");b=d("FalcoLoggerInternal").create("message_requests_bulk_action_confirmed",a);e=b;g["default"]=e}),98);
__d("MessageRequestsBulkActionEditFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2614");b=d("FalcoLoggerInternal").create("message_requests_bulk_action_edit",a);e=b;g["default"]=e}),98);
__d("MessageRequestsBulkActionTappedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("257");b=d("FalcoLoggerInternal").create("message_requests_bulk_action_tapped",a);e=b;g["default"]=e}),98);
__d("MessageRequestsViewThreadlistFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("263");b=d("FalcoLoggerInternal").create("message_requests_view_threadlist",a);e=b;g["default"]=e}),98);
__d("useDebouncedComet",["CometDebounce","react","useStable"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useLayoutEffect,j=b.useRef;function a(a,b){var d=j(a);i(function(){d.current=a},[a]);var e=c("useStable")(function(){return c("CometDebounce")(function(){d.current.apply(void 0,arguments)},b)});h(function(){return function(){e.reset()}},[]);return e}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("IGDSAddOutline24Icon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:h.jsx("path",{d:"M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("IGDSSettingsPanoOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:[h.jsx("circle",{cx:"12",cy:"12",fill:"none",r:"8.635",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),h.jsx("path",{d:"M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})]}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("PolarisClipboard",["ExecutionEnvironment","UserAgent","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";function a(){if(!c("ExecutionEnvironment").canUseDOM)return!1;if(c("UserAgent").isBrowser("Firefox < 41"))return!1;return c("UserAgent").isBrowser("Chrome >= 43")?!0:typeof document.queryCommandSupported==="function"&&document.queryCommandSupported("copy")}function b(a,b){b=b!=null?b:c("nullthrows")(document.body);var d=document.createElement("span");d.textContent=a;b.appendChild(d);a=window.getSelection();a.removeAllRanges();var e=document.createRange();e.selectNodeContents(d);a.addRange(e);e=!0;try{e=document.execCommand("copy")}catch(a){e=!1}a.removeAllRanges();b.removeChild(d);return e}g.canCopy=a;g.copy=b}),98);