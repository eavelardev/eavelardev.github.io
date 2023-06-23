(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self,l=function(a,b){a=a.split(".");var c=d;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===b?c[e]&&c[e]!==Object.prototype[e]?c=c[e]:c=c[e]={}:c[e]=b},m=function(a){return a};var n=new Map([]);n.set("devsite-a11y-announce",{src:"js/devsite_devsite_a11y_announce_module.js"});n.set("devsite-analytics",{src:"js/devsite_devsite_analytics_module.js"});n.set("devsite-analytics-scope",{src:"js/devsite_devsite_analytics_scope_module.js"});n.set("devsite-anselm",{src:"js/devsite_devsite_anselm_module.js"});n.set("devsite-api-getstarted",{src:"js/devsite_devsite_api_getstarted_module.js"});n.set("devsite-apix",{src:"js/devsite_devsite_apix_module.js"});
n.set("devsite-apix-index",{src:"js/devsite_devsite_apix_index_module.js"});n.set("devsite-apix-snippets",{src:"js/devsite_devsite_apix_snippets_module.js"});n.set("devsite-appearance-selector",{src:"js/devsite_devsite_appearance_selector_module.js"});n.set("devsite-author-page-insights",{src:"js/devsite_devsite_author_page_insights_module.js"});n.set("devsite-badger",{src:"js/devsite_devsite_badger_module.js"});n.set("devsite-badge-awarded",{src:"js/devsite_devsite_badge_awarded_module.js"});
n.set("devsite-badge-awarder",{src:"js/devsite_devsite_badge_awarder_module.js"});n.set("devsite-badge-redeemer",{src:"js/devsite_devsite_badge_redeemer_module.js"});n.set("devsite-book-nav",{src:"js/devsite_devsite_book_nav_module.js"});n.set("devsite-bookmark",{src:"js/devsite_devsite_bookmark_module.js"});n.set("devsite-carousel",{src:"js/devsite_devsite_carousel_module.js"});n.set("devsite-catalog",{src:"js/devsite_devsite_catalog_module.js"});n.set("devsite-catalog-body-badges",{src:"js/devsite_devsite_catalog_body_badges_module.js"});
n.set("devsite-chart",{src:"js/devsite_devsite_chart_module.js"});n.set("devsite-checkbox",{src:"js/devsite_devsite_checkbox_module.js"});n.set("devsite-code",{src:"js/devsite_devsite_code_module.js"});n.set("devsite-codelab-catalog",{src:"js/devsite_devsite_codelab_catalog_module.js"});n.set("devsite-content",{src:"js/devsite_devsite_content_module.js"});n.set("devsite-concierge",{src:"js/devsite_devsite_concierge_module.js"});n.set("devsite-concierge-info-panel",{src:"js/devsite_devsite_concierge_info_panel_module.js"});
n.set("devsite-concierge-recommendations-panel",{src:"js/devsite_devsite_concierge_recommendations_panel_module.js"});n.set("devsite-countdown",{src:"js/devsite_devsite_countdown_module.js"});n.set("devsite-credentials-dialog",{src:"js/devsite_devsite_credentials_dialog_module.js"});n.set("devsite-cse",{src:"js/devsite_devsite_cse_module.js"});n.set("devsite-device",{src:"js/devsite_devsite_device_module.js"});n.set("devsite-devprofile",{src:"js/devsite_devsite_devprofile_module.js"});
n.set("devsite-dialog",{src:"js/devsite_devsite_dialog_module.js"});n.set("devsite-dropdown-list",{src:"js/devsite_devsite_dropdown_list_module.js"});n.set("devsite-dynamic-content",{src:"js/devsite_devsite_dynamic_content_module.js"});n.set("devsite-dynamic-hero",{src:"js/devsite_devsite_dynamic_hero_module.js"});n.set("devsite-edit-profile",{src:"js/devsite_devsite_edit_profile_module.js"});n.set("devsite-expandable",{src:"js/devsite_devsite_expandable_module.js"});
n.set("devsite-extradory",{src:"js/devsite_devsite_extradory_module.js"});n.set("devsite-fast-track-profile-creator",{src:"js/devsite_devsite_fast_track_profile_creator_module.js"});n.set("devsite-feature-tooltip",{src:"js/devsite_devsite_feature_tooltip_module.js"});n.set("devsite-feedback",{src:"js/devsite_devsite_feedback_module.js"});n.set("devsite-filter",{src:"js/devsite_devsite_filter_module.js"});n.set("devsite-footer-linkboxes",{src:"js/devsite_devsite_footer_linkboxes_module.js"});
n.set("devsite-footer-promos",{src:"js/devsite_devsite_footer_promos_module.js"});n.set("devsite-footer-utility",{src:"js/devsite_devsite_footer_utility_module.js"});n.set("devsite-fully-clickable",{src:"js/devsite_devsite_fully_clickable_module.js"});n.set("devsite-googler-buttons",{src:"js/devsite_devsite_googler_buttons_module.js"});n.set("devsite-hats-survey",{src:"js/devsite_devsite_hats_survey_module.js"});n.set("devsite-header",{src:"js/devsite_devsite_header_module.js"});
n.set("devsite-heading-link",{src:"js/devsite_devsite_heading_link_module.js"});n.set("devsite-iframe",{src:"js/devsite_devsite_iframe_module.js"});n.set("devsite-info-popout",{src:"js/devsite_devsite_info_popout_module.js"});n.set("devsite-jump-to",{src:"js/devsite_devsite_jump_to_module.js"});n.set("devsite-jsfiddle-button",{src:"js/devsite_devsite_jsfiddle_button_module.js"});n.set("devsite-json-validator",{src:"js/devsite_devsite_json_validator_module.js"});
n.set("devsite-language-selector",{src:"js/devsite_devsite_language_selector_module.js"});n.set("devsite-lightbox",{src:"js/devsite_devsite_lightbox_module.js"});n.set("devsite-mathjax",{src:"js/devsite_devsite_mathjax_module.js"});n.set("devsite-mdc",{src:"js/devsite_devsite_mdc_module.js"});n.set("devsite-my-community",{src:"js/devsite_devsite_my_community_module.js"});n.set("devsite-mwc",{src:"js/devsite_devsite_mwc_module.js"});n.set("devsite-multiple-choice",{src:"js/devsite_devsite_multiple_choice_module.js"});
n.set("devsite-nav-buttons",{src:"js/devsite_devsite_nav_buttons_module.js"});n.set("devsite-notification",{src:"js/devsite_devsite_notification_module.js"});n.set("devsite-pagination",{src:"js/devsite_devsite_pagination_module.js"});n.set("devsite-panel",{src:"js/devsite_devsite_panel_module.js"});n.set("devsite-playlist",{src:"js/devsite_devsite_playlist_module.js"});n.set("devsite-playlist-earnable-badges",{src:"js/devsite_devsite_playlist_earnable_badges_module.js"});
n.set("devsite-playlist-summary",{src:"js/devsite_devsite_playlist_summary_module.js"});n.set("devsite-product-catalog",{src:"js/devsite_devsite_product_catalog_module.js"});n.set("devsite-profile-card",{src:"js/devsite_devsite_profile_card_module.js"});n.set("devsite-progress",{src:"js/devsite_devsite_progress_module.js"});n.set("devsite-quiz",{src:"js/devsite_devsite_quiz_module.js"});n.set("devsite-recommendations",{src:"js/devsite_devsite_recommendations_module.js"});
n.set("devsite-recommendations-dropdown",{src:"js/devsite_devsite_recommendations_dropdown_module.js"});n.set("devsite-recommendations-sidebar",{src:"js/devsite_devsite_recommendations_sidebar_module.js"});n.set("devsite-recommended-content",{src:"js/devsite_devsite_recommended_content_module.js"});n.set("devsite-reference-results",{src:"js/devsite_devsite_reference_results_module.js"});n.set("devsite-related-entities",{src:"js/devsite_devsite_related_entities_module.js"});
n.set("devsite-rich-tooltip",{src:"js/devsite_devsite_rich_tooltip_module.js"});n.set("devsite-search",{src:"js/devsite_devsite_search_module.js"});n.set("devsite-select",{src:"js/devsite_devsite_select_module.js"});n.set("devsite-selector",{src:"js/devsite_devsite_selector_module.js"});n.set("devsite-shell",{src:"js/devsite_devsite_shell_module.js"});n.set("devsite-shell-activate-button",{src:"js/devsite_devsite_shell_activate_button_module.js"});n.set("devsite-sitemask",{src:"js/devsite_devsite_sitemask_module.js"});
n.set("devsite-snackbar",{src:"js/devsite_devsite_snackbar_module.js"});n.set("devsite-sort",{src:"js/devsite_devsite_sort_module.js"});n.set("devsite-spinner",{src:"js/devsite_devsite_spinner_module.js"});n.set("devsite-support-form",{src:"js/devsite_devsite_support_form_module.js"});n.set("devsite-tabs",{src:"js/devsite_devsite_tabs_module.js"});n.set("devsite-thumb-rating",{src:"js/devsite_devsite_thumb_rating_module.js"});n.set("devsite-toc",{src:"js/devsite_devsite_toc_module.js"});
n.set("devsite-topic",{src:"js/devsite_devsite_topic_module.js"});n.set("devsite-tooltip",{src:"js/devsite_devsite_tooltip_module.js"});n.set("devsite-tracking-question",{src:"js/devsite_devsite_tracking_question_module.js"});n.set("devsite-user",{src:"js/devsite_devsite_user_module.js"});n.set("devsite-var",{src:"js/devsite_devsite_var_module.js"});n.set("devsite-version-selector",{src:"js/devsite_devsite_version_selector_module.js"});n.set("devsite-video",{src:"js/devsite_devsite_video_module.js"});
n.set("devsite-visibility-analytics",{src:"js/devsite_devsite_visibility_analytics_module.js"});n.set("devsite-vplus",{src:"js/devsite_devsite_vplus_module.js"});n.set("devsite-wall-acknowledgement",{src:"js/devsite_devsite_wall_acknowledgement_module.js"});n.set("devsite-youtube",{src:"js/devsite_devsite_youtube_module.js"});n.set("google-codelab",{src:"js/devsite_google_codelab_module.js"});n.set("google-codelab-about",{src:"js/devsite_google_codelab_about_module.js"});
n.set("google-codelab-analytics",{src:"js/devsite_google_codelab_analytics_module.js"});n.set("google-codelab-step",{src:"js/devsite_google_codelab_step_module.js"});n.set("google-codelab-survey",{src:"js/devsite_google_codelab_survey_module.js"});l("DevsiteAppAuthorizedElements",n);l("DevsiteAppTenantCustomized",!1);var aa={uc:0,tc:1,Wb:6,Ub:8,cc:12,dc:14,ec:17,jc:18,lc:21,nc:25,pa:37,oc:38,Ca:40,lb:45,X:47,C:50,O:52,K:62,Sa:63,Ob:66,Eb:70,F:73,sb:74,Z:75,Lb:76,Oa:77,Qa:80,L:81,fb:82,Ka:83,Cb:85,ga:87,Fa:89,Gb:90,Ga:91,Pa:92,V:93,rc:94,Ja:95,U:96,Pb:97,G:98,I:99,mc:100,Ba:101,La:102,Kb:103,qc:104,ka:105,W:106,za:107,na:108,yb:109,ha:110,wa:111,pc:112,Mb:113,oa:114,S:115,ra:116,jb:117,eb:118,Ha:119,Fb:120,ac:121,Nb:122,hc:123,Vb:124,Za:125,tb:126,Aa:127,bc:128,ob:129,pb:130,ua:131,Xa:132,H:133,Ta:134,Da:135,kb:136,
J:137,sc:138,vb:139,Yb:140,Tb:141,nb:142,bb:143,wb:144,R:145,rb:146,Ua:147,ab:148,Hb:149,ma:150,fa:151,Va:152,ta:154,Y:155,kc:156,ic:157,Ra:158,sa:159,M:160,aa:161,la:162,Zb:163,Jb:164,qa:165,da:166,Qb:167,ea:168,Ya:169,Wa:170,Ia:171,ya:172,Ib:173,qb:174,zb:175,Ab:176,ub:177,Bb:178,Xb:179,fc:180,ba:181,ja:182,T:183,D:184,Db:185,Ma:186,gb:187,ca:188,ia:189,ib:190,N:191,P:192,cb:193,Rb:194,Ea:195,xb:196,xa:197,Sb:198,hb:200,va:201,Na:202,mb:203};var p,q;a:{for(var ba=["CLOSURE_FLAGS"],r=d,u=0;u<ba.length;u++)if(r=r[ba[u]],null==r){q=null;break a}q=r}var ca=q&&q[610401301];p=null!=ca?ca:!1;var v;const da=d.navigator;v=da?da.userAgentData||null:null;function w(a){return p?v?v.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function x(a){var b;a:{if(b=d.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function y(){return p?!!v&&0<v.brands.length:!1}function z(){return y()?w("Chromium"):(x("Chrome")||x("CriOS"))&&!(y()?0:x("Edge"))||x("Silk")};var ea=y()?!1:x("Trident")||x("MSIE");!x("Android")||z();z();x("Safari")&&(z()||(y()?0:x("Coast"))||(y()?0:x("Opera"))||(y()?0:x("Edge"))||(y()?w("Microsoft Edge"):x("Edg/"))||y()&&w("Opera"));var fa={},A=null;var ha="undefined"!==typeof Uint8Array,ia=!ea&&"function"===typeof btoa;const B="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function C(a,b){if(B)return a[B]|=b;if(void 0!==a.h)return a.h|=b;Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function D(a){let b;B?b=a[B]:b=a.h;return null==b?0:b}function E(a,b){B?a[B]=b:void 0!==a.h?a.h=b:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}function F(a){C(a,1);return a};var ja={};function G(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let H;var I=Object.freeze(E([],23));function ka(a){var b=a.length;(b=b?a[b-1]:void 0)&&G(b)?b.g=1:a.push({g:1})};function la(a){return null==a?a:!!a};var ma=function(a){const b=a.j+a.i;return a.h||(a.h=a.m[b]={})},J=function(a,b,c){return-1===b?null:b>=a.j?a.h?a.h[b]:void 0:c&&a.h&&(c=a.h[b],null!=c)?c:a.m[b+a.i]},K=function(a,b,c,e){a.l&&(a.l=void 0);b>=a.j||e?ma(a)[b]=c:(a.m[b+a.i]=c,(a=a.h)&&b in a&&delete a[b])};
function na(a,b,c,e,f){let g=J(a,b,e);Array.isArray(g)||(g=I);const h=D(g);h&1||F(g);if(f)h&2||C(g,18),c&1||Object.freeze(g);else{f=!(c&2);const k=h&2;c&1||!k?f&&h&16&&!k&&(a=g,B?a[B]&&(a[B]&=-17):void 0!==a.h&&(a.h&=-17)):(g=F(Array.prototype.slice.call(g)),K(a,b,g,e))}return g}function oa(a){if(D(a.m)&2)throw Error();K(a,2,"en")}
var L=function(a,b){{const c=!!(D(a.m)&2);let e=na(a,b,1,void 0,c),f=D(e);if(!(f&4)){Object.isFrozen(e)&&(e=F(e.slice()),K(a,b,e));let g=0,h=0;for(;g<e.length;g++){const k=e[g];null!=k&&(e[h++]=k)}h<g&&(e.length=h);f|=5;c&&(f|=18);E(e,f);f&2&&Object.freeze(e)}!c&&(f&2||Object.isFrozen(e))&&(e=Array.prototype.slice.call(e),C(e,5),K(a,b,e));a=e}return a};function N(a,b){return null==a?b:a};let O;function pa(a,b){return qa(b)}
function qa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(D(a)&128))return a=Array.prototype.slice.call(a),ka(a),a}else if(ha&&null!=a&&a instanceof Uint8Array){if(ia){for(var b="",c=0,e=a.length-10240;c<e;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{void 0===b&&(b=0);if(!A){A={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");e=
["+/=","+/","-_=","-_.","-_"];for(var f=0;5>f;f++){var g=c.concat(e[f].split(""));fa[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===A[k]&&(A[k]=h)}}}b=fa[b];c=Array(Math.floor(a.length/3));e=b[64]||"";for(f=g=0;g<a.length-2;g+=3){var t=a[g],M=a[g+1];k=a[g+2];h=b[t>>2];t=b[(t&3)<<4|M>>4];M=b[(M&15)<<2|k>>6];k=b[k&63];c[f++]=""+h+t+M+k}h=0;k=e;switch(a.length-g){case 2:h=a[g+1],k=b[(h&15)<<2]||e;case 1:a=a[g],c[f]=""+b[a>>2]+b[(a&3)<<4|h>>4]+k+e}a=c.join("")}return a}}return a};function ra(a,b,c,e,f,g){if(null!=a){if(Array.isArray(a))a=f&&0==a.length&&D(a)&1?void 0:g&&D(a)&2?a:sa(a,b,c,void 0!==e,f,g);else if(G(a)){const h={};for(let k in a)h[k]=ra(a[k],b,c,e,f,g);a=h}else a=b(a,e);return a}}function sa(a,b,c,e,f,g){const h=D(a);e=e?!!(h&16):void 0;a=Array.prototype.slice.call(a);for(let k=0;k<a.length;k++)a[k]=ra(a[k],b,c,e,f,g);c(h,a);return a}function ta(a){return a.B===ja?a.toJSON():qa(a)}function ua(a,b){a&128&&ka(b)};var va=function(){var a=P.h;H=!0;try{return JSON.stringify(a.toJSON(),pa)}finally{H=!1}},Q=class{constructor(a){var b=wa;null==a&&(a=O);O=void 0;var c=this.constructor.h;if(null==a){a=c?[c]:[];var e=!0;E(a,48)}else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();var f=C(a,0)|32;e=0!==(16&f);if(128&f)throw Error();E(a,f)}this.i=c?0:-1;this.m=a;a:{f=this.m.length;c=f-1;if(f&&(f=this.m[c],G(f))){this.h=f;this.j=c-this.i;break a}this.j=Number.MAX_VALUE}if(this.h&&"g"in this.h)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(b){e=e&&!0;c=this.j;let k;for(f=0;f<b.length;f++){var g=b[f];if(g<c){g+=this.i;var h=a[g];h?xa(h,e):a[g]=I}else k||(k=ma(this)),(h=k[g])?xa(h,e):k[g]=I}}}toJSON(){const a=this.m;var b;H?b=a:b=sa(a,ta,ua,void 0,!1,!1);return b}};function xa(a,b){if(Array.isArray(a)){var c=D(a),e=1;!b||c&2||(e|=16);(c&e)!==e&&E(a,c|e)}}Q.prototype.B=ja;Q.prototype.toString=function(){return this.m.toString()};var ya=class extends Q{getTenantId(){return N(J(this,1),0)}getLocale(){return N(J(this,2),"")}getInsecureHost(){return N(J(this,7),"")}},za=function(a){return b=>{if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);C(b,16);O=b;b=new a(b);O=void 0}return b}}(ya),wa=[10,12,13,21,22];var R;var S=class{constructor(a,b){this.h=b===Aa?a:""}toString(){return this.h+""}},Aa={};var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),Ca=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var e=a[c].indexOf("="),f=null;if(0<=e){var g=a[c].substring(0,e);f=a[c].substring(e+1)}else g=a[c];b(g,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var T=function(a){this.l=this.v=this.j="";this.u=null;this.o=this.s="";this.h=!1;if(a instanceof T){this.h=a.h;Da(this,a.j);this.v=a.v;this.l=a.l;Ea(this,a.u);this.s=a.s;var b=a.i;var c=new U;c.j=b.j;b.h&&(c.h=new Map(b.h),c.i=b.i);Fa(this,c);this.o=a.o}else a&&(b=String(a).match(Ba))?(this.h=!1,Da(this,b[1]||"",!0),this.v=V(b[2]||""),this.l=V(b[3]||"",!0),Ea(this,b[4]),this.s=V(b[5]||"",!0),Fa(this,b[6]||"",!0),this.o=V(b[7]||"")):(this.h=!1,this.i=new U(null,this.h))};
T.prototype.toString=function(){var a=[],b=this.j;b&&a.push(W(b,Ga,!0),":");var c=this.l;if(c||"file"==b)a.push("//"),(b=this.v)&&a.push(W(b,Ga,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,null!=c&&a.push(":",String(c));if(c=this.s)this.l&&"/"!=c.charAt(0)&&a.push("/"),a.push(W(c,"/"==c.charAt(0)?Ha:Ia,!0));(c=this.i.toString())&&a.push("?",c);(c=this.o)&&a.push("#",W(c,Ja));return a.join("")};
var Da=function(a,b,c){a.j=c?V(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))},Ea=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.u=b}else a.u=null},Fa=function(a,b,c){b instanceof U?(a.i=b,Ka(a.i,a.h)):(c||(b=W(b,La)),a.i=new U(b,a.h))},Ma=function(a){return a instanceof T?new T(a):new T(a)},V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},W=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Na),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,
"%$1")),a):null},Na=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ga=/[#\/\?@]/g,Ia=/[#\?:]/g,Ha=/[#\?]/g,La=/[#\?@]/g,Ja=/#/g,U=function(a,b){this.i=this.h=null;this.j=a||null;this.l=!!b},X=function(a){a.h||(a.h=new Map,a.i=0,a.j&&Ca(a.j,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};U.prototype.add=function(a,b){X(this);this.j=null;a=Y(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i+=1;return this};
var Oa=function(a,b){X(a);b=Y(a,b);a.h.has(b)&&(a.j=null,a.i-=a.h.get(b).length,a.h.delete(b))},Pa=function(a,b){X(a);b=Y(a,b);return a.h.has(b)};U.prototype.forEach=function(a,b){X(this);this.h.forEach(function(c,e){c.forEach(function(f){a.call(b,f,e,this)},this)},this)};var Qa=function(a,b){X(a);let c=[];if("string"===typeof b)Pa(a,b)&&(c=c.concat(a.h.get(Y(a,b))));else for(a=Array.from(a.h.values()),b=0;b<a.length;b++)c=c.concat(a[b]);return c};
U.prototype.set=function(a,b){X(this);this.j=null;a=Y(this,a);Pa(this,a)&&(this.i-=this.h.get(a).length);this.h.set(a,[b]);this.i+=1;return this};U.prototype.get=function(a,b){if(!a)return b;a=Qa(this,a);return 0<a.length?String(a[0]):b};
U.prototype.toString=function(){if(this.j)return this.j;if(!this.h)return"";const a=[],b=Array.from(this.h.keys());for(var c=0;c<b.length;c++){var e=b[c];const g=encodeURIComponent(String(e)),h=Qa(this,e);for(e=0;e<h.length;e++){var f=g;""!==h[e]&&(f+="="+encodeURIComponent(String(h[e])));a.push(f)}}return this.j=a.join("&")};
var Y=function(a,b){b=String(b);a.l&&(b=b.toLowerCase());return b},Ka=function(a,b){b&&!a.l&&(X(a),a.j=null,a.h.forEach(function(c,e){var f=e.toLowerCase();if(e!=f&&(Oa(this,e),Oa(this,f),0<c.length)){this.j=null;e=this.h;var g=e.set;f=Y(this,f);var h=c.length;if(0<h){const k=Array(h);for(let t=0;t<h;t++)k[t]=c[t];h=k}else h=[];g.call(e,f,h);this.i+=c.length}},a));a.l=b};/*

 SPDX-License-Identifier: Apache-2.0
*/
const Ra={};function Sa(a,b){var c=Ra[a];if(void 0!==c&&(!c.A||Date.now()<=c.A+3E5))return c.p;c=new Promise((f,g)=>{b.onload=()=>f(b);b.onerror=h=>{b.parentNode&&b.parentNode.removeChild(b);g(h)};document.head.appendChild(b)});const e={A:0,p:c};c.catch(()=>e.A=+new Date);Ra[a]=e;return c}
var Ta=function(a){a=Ma(a);const b=document.createElement("script");var c=a.toString();c=null===c?"null":void 0===c?"undefined":c;if(void 0===R){var e=null;var f=d.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:m,createScript:m,createScriptURL:m})}catch(k){d.console&&d.console.error(k.message)}R=e}else R=e}c=(e=R)?e.createScriptURL(c):c;c=new S(c,Aa);b.src=c instanceof S&&c.constructor===S?c.h:"type_error:TrustedResourceUrl";var g;let h;(g=(c=null==(h=(g=(b.ownerDocument&&
b.ownerDocument.defaultView||window).document).querySelector)?void 0:h.call(g,"script[nonce]"))?c.nonce||c.getAttribute("nonce")||"":"")&&b.setAttribute("nonce",g);return Sa(a.toString(),b)};class Ua{constructor(){this.promise=new Promise(a=>{this.h=a})}};var Z=function(a="Devsite has failed to load."){throw Error(a);},Wa=async function(){var a=P;const b=new Ua;l("__devsiteAppReadyResolver",b.h);l("__devsiteAppReadyPromise",b.promise);l("DevsiteApp.whenReady",()=>b.promise);if(L(a.h,12).length)try{await Promise.all(L(a.h,12).map(f=>{f=Ma(f);const g=document.createElement("link");g.setAttribute("rel","stylesheet");g.setAttribute("type","text/css");g.setAttribute("href",f.toString());return Sa(f.toString(),g)}))}catch(f){Z(`Failed to load Devsite App dependencies: ${f.message}`)}const c=
d.DevsiteAppTenantCustomized?N(J(a.h,6),""):N(J(a.h,5),"");try{await Ta(`${c}${Va(a)}`)}catch(f){if("en"!==a.h.getLocale()){oa(a.h);try{await Ta(`${c}${N(J(a.h,4),"")}`)}catch(g){Z(`Failed to load Devsite App binary: ${g.message}`)}}else Z(`Failed to load Devsite App binary: ${f.message}`)}const e=document;if("complete"!==e.readyState&&"interactive"!==e.readyState){const f=new Ua;e.addEventListener("readystatechange",()=>{"interactive"!==e.readyState&&"complete"!==e.readyState||f.h()});await f.promise}},
Va=function(a){const b=a.h.getLocale();a=N(J(a.h,4),"");return b&&"en"!==b?a.replace(/\.js$/,`__${b.toLowerCase().replace("-","_")}.js`):a};
const P=new class{constructor(){this.i=null;this.h=new ya;this.j=[];this.l=a=>{this.j.push(a)};this.s=()=>{this.o()};if(d.__globalAppLoader)return d.__globalAppLoader;try{this.h=za(`${GoogleDevelopersObject}`.replace("\n",""))}catch(a){Z("GoogleDevelopersObject missing or invalid")}GoogleDevelopersObject=null;l("__globalAppLoader",this);l("DevsiteApp.hasFlagAccess",a=>this.hasFlagAccess(a));l("DevsiteApp.hasMendelFlagAccess",(a,b)=>this.hasMendelFlagAccess(a,b))}o(){var a=document.querySelector("devsite-content");
a&&(window.removeEventListener("message",this.l),a.removeEventListener("devsite-content-updated",this.s));a=window;for(const b of this.j)a.dispatchEvent(b);this.j=[]}getEnv(){if(N(la(J(this.h,11)),!1))return"PROD";const a=document.location.hostname;return a.endsWith("test.devsite.corp.google.com")||a.endsWith("test.devsite-v2-staging.googleplex.com")?"TEST":a.endsWith(".devsite.corp.google.com")||a.endsWith("devsite-v2-staging.googleplex.com")?"STAGE":"DEV"}hasFlagAccess(a){a:{var b=this.getEnv();
var c=this.h;c=na(c,13,0,!1,!!(D(c.m)&2));var e=new URL(document.location.toString());e=new T(e.href);const f=Object.keys(aa);if("PROD"!==b)for(const g of f)if(aa[g]===a&&(b=e.i.get(g),void 0!==b)){a="true"===b;break a}a=Array.from(c).includes(a)}return a}hasMendelFlagAccess(a,b){a:{var c=this.getEnv();var e=L(this.h,22);var f=new URL(document.location.toString());f=new T(f.href);a=a+"__"+b;if("PROD"!==c&&(c=f.i.get(a),void 0!==c)){e="true"===c;break a}e=Array.from(e).includes(a)}return e}},Xa=document.querySelector("devsite-content");
Xa&&(window.addEventListener("message",P.l),Xa.addEventListener("devsite-content-updated",P.o.bind(P)));(async function(){const a=window;if("WeakMap"in a&&"performance"in a&&"now"in a.performance)return P.i||(P.i=Wa()),P.i})().then(()=>{N(la(J(P.h,9)),!1)?(d.DevsiteAppFrameboxInit||Z("Failed to load Devsite App binary"),DevsiteAppFrameboxInit(va(),d.DevsiteAppAuthorizedElements)):(d.DevsiteAppInit||Z("Failed to load Devsite App binary"),DevsiteAppInit(va(),d.DevsiteAppAuthorizedElements))});}).call(this);