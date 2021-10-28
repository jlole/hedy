var hedyApp=(()=>{var A=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var J=A(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.modal=D.error=void 0;var ke=function(){function e(){var t=this;$("#modal-confirm-button").on("click",function(){return t.hide()}),$("#modal-no-button").on("click",function(){return t.hide()}),$("#modal-cancel-button").on("click",function(){return t.hide()})}return e.prototype.show=function(){$("#modal-mask").show(),$("#modal-content").show(),window.scrollTo(0,0)},e.prototype.hide=function(){$("#modal-mask").hide(),$("#modal-content").hide(),$("#modal-alert").hide(),$("#modal-prompt").hide(),$("#modal-confirm").hide()},e.prototype.alert=function(t,a){var i=this;$("#modal-alert-text").text(t),this.show(),$("#modal-alert").show(),a&&setTimeout(function(){return i.hide()},a)},e.prototype.confirm=function(t,a){var i=this;$("#modal-confirm-text").text(t),this.show(),$("#modal-confirm").show(),$("#modal-yes-button").off("click").on("click",function(){i.hide(),a()})},e.prototype.prompt=function(t,a,i){var s=this;$("#modal-prompt-text").text(t),this.show(),$("#modal-prompt").show(),a&&$("#modal-prompt-input").val(a),$("#modal-ok-button").off("click").on("click",function(){s.hide();var n=$("#modal-prompt-input").val();typeof n=="string"&&i(n)})},e}(),P;D.error={setEditor:function(e){P=e},hide:function(){$("#errorbox").hide(),$("#warningbox").hide(),P==null||P.resize()},showWarning:function(e,t){$("#warningbox .caption").text(e),$("#warningbox .details").text(t),$("#warningbox").show(),P==null||P.resize()},show:function(e,t){$("#errorbox .caption").text(e),$("#errorbox .details").text(t),$("#errorbox").show(),P==null||P.resize()}};D.modal=new ke});var ee=A(()=>{"use strict";function m(){return{gobble:[{regex:".*",token:"text",next:"start"}],expression_eol:Me([{regex:"'[^']*'",token:"constant.character"},{regex:"at random",token:"keyword"},{regex:"$",token:"text"}])}}var Te=[{name:"level1",rules:g(m(),G("gobble"),Z(),p("start",{regex:R("echo"),token:"keyword",next:"gobble"}),p("start",{regex:R("ask"),token:"keyword",next:"gobble"}))},{name:"level2",rules:g(m(),G("expression_eol"),I("gobble"),v("gobble"),Z())},{name:"level3",rules:g(m(),Z(),G("expression_eol"),I(),v())},{name:"level4",rules:g(m(),G(),I(),v(),Y(),_())},{name:"level5",rules:g(m(),G(),I(),v(),Y(),_(),Q())},{name:"level6",rules:g(m(),G(),I(),v(),Y(),_(),Q(),y())},{name:"level7",rules:g(m(),G(),I(),v(),x(),_(),Q(),y())},{name:"level8",rules:g(m(),G(),I(),v(),x(),_(),y(),oe())},{name:"level9and10",rules:g(m(),G(),I(),v(),x(),_(),y(),ie(),oe())},{name:"level11",rules:g(m(),G(),I(),v(),x(),_(),y(),ie())},{name:"level12",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level11",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level13",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level14",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level15",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level16",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level17",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level18and19",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level20",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level21",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level22",rules:g(m(),k(),T(),v(),x(),_(),y(),M())},{name:"level23",rules:g(m(),k(),T(),v(),x(),_(),y(),M())}];function Me(e){for(var t=[],a=0,i=e;a<i.length;a++){var s=i[a];s.regex&&t.push({regex:s.regex+"$",token:s.token,next:"start"}),t.push(s)}return t}function p(e,t){return function(a){var i;Array.isArray(e)||(e=[e]);for(var s=0,n=e;s<n.length;s++){var r=n[s];a[r]||(a[r]=[]),Array.isArray(t)?(i=a[r]).push.apply(i,t):a[r].push(t)}return a}}function U(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(a){for(var i=0,s=e;i<s.length;i++){var n=s[i];a=n(a)}return a}}function g(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];return U.apply(void 0,t)(e)}function G(e){return p("start",{regex:R("print"),token:"keyword",next:e!=null?e:"start"})}function I(e){return p("start",{regex:"(\\w+)( is ask )",token:["text","keyword"],next:e!=null?e:"expression_eol"})}function v(e){return p("start",{regex:"(\\w+)( is )",token:["text","keyword"],next:e!=null?e:"expression_eol"})}function k(){return p("start",{regex:"(print)(\\()",token:["keyword","paren.lparen"],next:"start"})}function Z(){return U(p("start",{regex:"turn (left|right)?",token:"keyword",next:"start"}),p("start",{regex:"forward",token:"keyword",next:"start"}))}function T(){return p("start",{regex:"(\\w+)( is input)(\\()",token:["text","keyword","paren.lparen"],next:"start"})}function _(){return U(p("start",{regex:"'[^']*'",token:"constant.character"}),p("start",{regex:"at random",token:"keyword"}),p("start",{regex:"[, ]+",token:"punctuation.operator"}))}function Y(){return U(p("start",{regex:R("if"),token:"keyword",next:"condition"}),p("start",{regex:R("else"),token:"keyword"}),p("condition",{regex:R("is"),token:"keyword",next:"start"}))}function x(){return U(p("start",{regex:R("if"),token:"keyword",next:"condition"}),p("start",{regex:"\\belse\\b",token:"keyword"}),p("condition",{regex:R("((is)|(in))"),token:"keyword",next:"start"}))}function y(){return p(["start","expression_eol"],[{regex:" \\* ",token:"keyword"},{regex:" \\+ ",token:"keyword"},{regex:" \\- ",token:"keyword"}])}function Q(){return p("start",{regex:"(repeat)( \\w+ )(times)",token:["keyword","text","keyword"]})}function oe(){return p("start",{regex:"(for )(\\w+)( in )(\\w+)",token:["keyword","text","keyword","text"]})}function ie(){return p("start",{regex:"(for )(\\w+)( in range )(\\w+)( to )(\\w+)",token:["keyword","text","keyword","text","keyword","text"]})}function M(){return p("start",{regex:"(for )(\\w+)( in range)(\\()([\\s\\w]+)(,)([\\s\\w]+)(\\))",token:["keyword","text","keyword","paren.lparen","text","punctuation.operator","text","paren.rparen"]})}function Ee(e){for(var t=0,a=Object.values(e);t<a.length;t++)for(var i=a[t],s=0,n=i;s<n.length;s++){var r=n[s];r.regex&&!r._loosened&&(r.regex=r.regex.replace(/ /g," +"),r._loosened=!0)}return e}if(window.define)for(se=function(e){define("ace/mode/"+e.name,[],function(t,a,i){var s=t("ace/lib/oop"),n=t("ace/mode/text").Mode,r=t("ace/mode/text_highlight_rules").TextHighlightRules;function u(){this.$rules=Ee(e.rules),this.normalizeRules()}s.inherits(u,r);function c(){this.HighlightRules=u}s.inherits(c,n),a.Mode=c})},K=0,X=Te;K<X.length;K++)le=X[K],se(le);var se,le,K,X;function R(e){return"\\b"+e+" "}});var te=A(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.remove_student=E.join_class=E.delete_class=E.rename_class=E.create_class=void 0;var C=J(),N=V();function Ce(){C.modal.prompt(N.auth.texts.class_name_prompt,"",function(e){$.ajax({type:"POST",url:"/class",data:JSON.stringify({name:e}),contentType:"application/json",dataType:"json"}).done(function(t){location.reload()}).fail(function(t){console.error(t),C.error.show(ErrorMessages.Connection_error,JSON.stringify(t))})})}E.create_class=Ce;function Pe(e){C.modal.prompt(N.auth.texts.class_name_prompt,"",function(t){$.ajax({type:"PUT",url:"/class/"+e,data:JSON.stringify({name:t}),contentType:"application/json",dataType:"json"}).done(function(a){location.reload()}).fail(function(a){console.error(a),C.error.show(ErrorMessages.Connection_error,JSON.stringify(a))})})}E.rename_class=Pe;function Ge(e){C.modal.confirm(N.auth.texts.delete_class_prompt,function(){$.ajax({type:"DELETE",url:"/class/"+e,contentType:"application/json",dataType:"json"}).done(function(t){window.location.pathname="/for-teachers"}).fail(function(t){console.error(t),C.error.show(ErrorMessages.Connection_error,JSON.stringify(t))})})}E.delete_class=Ge;function je(e,t,a){if(a===void 0&&(a=!1),!N.auth.profile)return C.modal.confirm(N.auth.texts.join_prompt,function(){localStorage.setItem("hedy-join",JSON.stringify({link:e,name:t})),window.location.pathname="/login"});$.ajax({type:"GET",url:e}).done(function(i){C.modal.alert(N.auth.texts.class_join_confirmation+" "+t),a||(window.location.pathname="/programs")}).fail(function(i){console.error(i),C.error.show(ErrorMessages.Connection_error,JSON.stringify(i))})}E.join_class=je;function Ie(e,t){C.modal.confirm(N.auth.texts.remove_student_prompt,function(){$.ajax({type:"DELETE",url:"/class/"+e+"/student/"+t,contentType:"application/json",dataType:"json"}).done(function(a){location.reload()}).fail(function(a){console.error(a),C.error.show(ErrorMessages.Connection_error,JSON.stringify(a))})})}E.remove_student=Ie});var V=A(o=>{"use strict";var Oe=o&&o.__awaiter||function(e,t,a,i){function s(n){return n instanceof a?n:new a(function(r){r(n)})}return new(a||(a=Promise))(function(n,r){function u(d){try{l(i.next(d))}catch(w){r(w)}}function c(d){try{l(i.throw(d))}catch(w){r(w)}}function l(d){d.done?n(d.value):s(d.value).then(u,c)}l((i=i.apply(e,t||[])).next())})},Ae=o&&o.__generator||function(e,t){var a={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,s,n,r;return r={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function u(l){return function(d){return c([l,d])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,s&&(n=l[0]&2?s.return:l[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,l[1])).done)return n;switch(s=0,n&&(l=[l[0]&2,n.value]),l[0]){case 0:case 1:n=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,s=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(n=a.trys,!(n=n.length>0&&n[n.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){a.label=l[1];break}if(l[0]===6&&a.label<n[1]){a.label=n[1],n=l;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(l);break}n[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(d){l=[6,d],s=0}finally{i=n=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});o.auth=void 0;var L=J(),Re=te(),Ne=W(),ue={AF:"Afghanistan",AX:"\xC5land Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia, Plurinational State of",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, the Democratic Republic of the",CK:"Cook Islands",CR:"Costa Rica",CI:"C\xF4te d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Cura\xE7ao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic of",KR:"Korea, Republic of",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia, the Former Yugoslav Republic of",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine, State of",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"R\xE9union",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barth\xE9lemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part)",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part)",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela, Bolivarian Republic of",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};o.auth={texts:AuthMessages,profile:void 0,reset:void 0,entityify:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")},emailRegex:/^(([a-zA-Z0-9_+\.\-]+)@([\da-zA-Z\.\-]+)\.([a-zA-Z\.]{2,6})\s*)$/,redirect:function(e){e="/"+e,window.location.pathname=e},logout:function(){$.ajax({type:"POST",url:"/auth/logout"}).done(function(){o.auth.redirect("login")})},destroy:function(){L.modal.confirm(o.auth.texts.are_you_sure,function(){$.ajax({type:"POST",url:"/auth/destroy"}).done(function(){o.auth.redirect("")})})},error:function(e,t,a){$(a||"#error").html(e),$(a||"#error").css("display","block"),t&&$("#"+t).css("border","solid 1px red")},clear_error:function(e){$(e||"#error").html(""),$(e||"#error").css("display","none"),$("form *").css("border","")},success:function(e,t){$("#error").css("display","none"),$(t||"#success").html(e),$(t||"#success").css("display","block")},submit:function(e){var t=this,a,i,s,n,r={};if($("form.auth *").map(function(c,l){l.id&&(r[l.id]=l.value)}),e==="signup"){if(!r.username)return o.auth.error(o.auth.texts.please_username,"username");if(r.username=r.username.trim(),r.username.length<3)return o.auth.error(o.auth.texts.username_three,"username");if(r.username.match(/:|@/))return o.auth.error(o.auth.texts.username_special,"username");if(!((a=r.email)===null||a===void 0?void 0:a.match(o.auth.emailRegex)))return o.auth.error(o.auth.texts.valid_email,"email");if(r.email!==r.mail_repeat)return o.auth.error(o.auth.texts.repeat_match_email,"mail_repeat");if(!r.password)return o.auth.error(o.auth.texts.please_password,"password");if(r.password.length<6)return o.auth.error(o.auth.texts.password_six,"password");if(r.password!==r.password_repeat)return o.auth.error(o.auth.texts.repeat_match_password,"password_repeat");if(r.birth_year&&!he(r.birth_year))return o.auth.error(o.auth.texts.valid_year+new Date().getFullYear(),"birth_year");var u={username:r.username,email:r.email,password:r.password,birth_year:r.birth_year?parseInt(r.birth_year):void 0,country:r.country?r.country:void 0,gender:r.gender?r.gender:void 0,subscribe:$("#subscribe").prop("checked"),prog_experience:$("input[name=has_experience]:checked").val(),experience_languages:$("#languages").is(":visible")?$("input[name=languages]").filter(":checked").map(function(){return $(t).val()}).get():void 0};$.ajax({type:"POST",url:"/auth/signup",data:JSON.stringify(u),contentType:"application/json; charset=utf-8"}).done(function(){o.auth.success(o.auth.texts.signup_success),o.auth.profile={session_expires_at:Date.now()+1e3*60*60*24},ce()}).fail(function(c){var l=c.responseText||"";l.match("email")?o.auth.error(o.auth.texts.exists_email):l.match("username")?o.auth.error(o.auth.texts.exists_username):o.auth.error(o.auth.texts.ajax_error)})}if(e==="login"){if(!r.username)return o.auth.error(o.auth.texts.please_username_email,"username");if(!r.password)return o.auth.error(o.auth.texts.please_password,"password");o.auth.clear_error(),$.ajax({type:"POST",url:"/auth/login",data:JSON.stringify({username:r.username,password:r.password}),contentType:"application/json; charset=utf-8"}).done(function(){o.auth.profile={session_expires_at:Date.now()+1e3*60*60*24},ce()}).fail(function(c){var l;c.status===403?(o.auth.error(o.auth.texts.invalid_username_password+" "+o.auth.texts.no_account+` &nbsp;<button class="green-btn" onclick="auth.redirect ('signup')">`+o.auth.texts.create_account+"</button>"),$("#create-account").hide(),localStorage.setItem("hedy-login-username",(l=r.username)!==null&&l!==void 0?l:"")):o.auth.error(o.auth.texts.ajax_error)})}if(e==="profile"){if(!((i=r.email)!==null&&i!==void 0?i:"").match(o.auth.emailRegex))return o.auth.error(o.auth.texts.valid_email,"email");if(r.birth_year&&!he(r.birth_year))return o.auth.error(o.auth.texts.valid_year+new Date().getFullYear(),"birth_year");var u={email:r.email,birth_year:r.birth_year?parseInt(r.birth_year):void 0,country:r.country,gender:r.gender,prog_experience:$("input[name=has_experience]:checked").val(),experience_languages:$("#languages").is(":visible")?$("input[name=languages]").filter(":checked").map(function(){return $(t).val()}).get():void 0};console.log(u),o.auth.clear_error(),$.ajax({type:"POST",url:"/profile",data:JSON.stringify(u),contentType:"application/json; charset=utf-8"}).done(function(){o.auth.success(o.auth.texts.profile_updated)}).fail(function(l){o.auth.error(o.auth.texts.ajax_error+" "+l.responseText)})}if(e==="change_password"){if(!r.password)return o.auth.error(o.auth.texts.please_password,"password","#error-password");if(r.password.length<6)return o.auth.error(o.auth.texts.password_six,"password","#error-password");if(r.password!==r.password_repeat)return o.auth.error(o.auth.texts.repeat_match,"password_repeat","#error-password");var u={old_password:r.old_password,new_password:r.password};o.auth.clear_error("#error-password"),$.ajax({type:"POST",url:"/auth/change_password",data:JSON.stringify(u),contentType:"application/json; charset=utf-8"}).done(function(){o.auth.success(o.auth.texts.password_updated,"#success-password"),$("#old_password").val(""),$("#password").val(""),$("#password_repeat").val("")}).fail(function(l){l.status===403?o.auth.error(o.auth.texts.invalid_password,null,"#error-password"):o.auth.error(o.auth.texts.ajax_error,null,"#error-password")})}if(e==="recover"){if(!r.username)return o.auth.error(o.auth.texts.please_username,"username");var u={username:r.username};o.auth.clear_error(),$.ajax({type:"POST",url:"/auth/recover",data:JSON.stringify(u),contentType:"application/json; charset=utf-8"}).done(function(){o.auth.success(o.auth.texts.sent_password_recovery),$("#username").val("")}).fail(function(l){l.status===403?o.auth.error(o.auth.texts.invalid_username):o.auth.error(o.auth.texts.ajax_error)})}if(e==="reset"){if(!r.password)return o.auth.error(o.auth.texts.please_password,"password");if(r.password.length<6)return o.auth.error(o.auth.texts.password_six,"password");if(r.password!==r.password_repeat)return o.auth.error(o.auth.texts.repeat_match,"password_repeat");var u={username:(s=o.auth.reset)===null||s===void 0?void 0:s.username,token:(n=o.auth.reset)===null||n===void 0?void 0:n.token,password:r.password};o.auth.clear_error(),$.ajax({type:"POST",url:"/auth/reset",data:JSON.stringify(u),contentType:"application/json; charset=utf-8"}).done(function(){o.auth.success(o.auth.texts.password_resetted),$("#password").val(""),$("#password_repeat").val(""),delete o.auth.reset,o.auth.redirect("login")}).fail(function(l){l.status===403?o.auth.error(o.auth.texts.invalid_reset_link):o.auth.error(o.auth.texts.ajax_error)})}},markAsTeacher:function(e,t){$.ajax({type:"POST",url:"/admin/markAsTeacher",data:JSON.stringify({username:e,is_teacher:t}),contentType:"application/json; charset=utf-8"}).done(function(){L.modal.alert(["User",e,"successfully",t?"marked":"unmarked","as teacher"].join(" "),4e3),location.reload()}).fail(function(a){console.log(a),L.modal.alert(["Error when",t?"marking":"unmarking","user",e,"as teacher"].join(" "))})},changeUserEmail:function(e,t){L.modal.prompt("Please enter the corrected email",t,function(a){if(a!==t){if(!a.match(o.auth.emailRegex))return L.modal.alert("Please enter a valid email.");$.ajax({type:"POST",url:"/admin/changeUserEmail",data:JSON.stringify({username:e,email:a}),contentType:"application/json; charset=utf-8"}).done(function(){L.modal.alert(["Successfully changed the email for User",e,"to",a].join(" ")),location.reload()}).fail(function(i){console.log(i),L.modal.alert(["Error when changing the email for User",e].join(" "))})}})}};$("#country")&&(ae=$("#country").html(),Object.keys(ue).map(function(e){ae+='<option value="'+e+'">'+ue[e]+"</option>"}),$("#country").html(ae));var ae;$(".auth input").get().map(function(e){e.addEventListener("input",function(){return o.auth.clear_error()})});$.ajax({type:"GET",url:"/profile"}).done(function(e){["/signup","/login"].indexOf(window.location.pathname)!==-1&&o.auth.redirect("my-profile"),o.auth.profile=e,$("#profile").html()&&($("#username").html(e.username),$("#email").val(e.email),$("#birth_year").val(e.birth_year),$("#gender").val(e.gender),$("#country").val(e.country),e.prog_experience&&($('input[name=has_experience][value="'+e.prog_experience+'"]').prop("checked",!0),e.prog_experience==="yes"&&$("#languages").show()),(e.experience_languages||[]).map(function(t){$('input[name=languages][value="'+t+'"]').prop("checked",!0)}),$("#student_classes ul").html((e.student_classes||[]).map(function(t){return"<li>"+o.auth.entityify(t.name)+"</li>"}).join("")))}).fail(function(e){window.location.pathname.indexOf("/my-profile")!==-1&&o.auth.redirect("login")});window.location.pathname==="/reset"&&(de=window.location.search.slice(1).split("&"),z={},de.map(function(e){var t=e.split("=");z[t[0]]=decodeURIComponent(t[1])}),!z.username||!z.token?o.auth.redirect("recover"):o.auth.reset=z);var de,z;window.location.pathname==="/signup"&&(H=localStorage.getItem("hedy-login-username"),H&&(localStorage.removeItem("hedy-login-username"),H.match("@")?$("#email").val(H):$("#username").val(H)));var H;$("#email, #mail_repeat").on("cut copy paste",function(e){return e.preventDefault(),!1});function ce(){return Oe(this,void 0,void 0,function(){var e,t,a,i,s,n;return Ae(this,function(r){switch(r.label){case 0:return e=localStorage.getItem("hedy-first-save"),t=e?JSON.parse(e):void 0,t?[4,(0,Ne.saveitP)(t[0],t[1],t[2],t[3])]:[3,2];case 1:if(r.sent(),localStorage.removeItem("hedy-first-save"),a=fe(),a)return[2,o.auth.redirect(a)];r.label=2;case 2:return i=localStorage.getItem("hedy-join"),s=i?JSON.parse(i):void 0,s?(localStorage.removeItem("hedy-join"),[2,(0,Re.join_class)(s.link,s.name)]):(n=fe(),n?[2,o.auth.redirect(n)]:(o.auth.redirect("programs"),[2]))}})})}function fe(){var e=localStorage.getItem("hedy-save-redirect");return e&&localStorage.removeItem("hedy-save-redirect"),e}function he(e){var t=parseInt(e);return!(!t||t<1900||t>new Date().getFullYear())}});var W=A(f=>{"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.get_trimmed_code=f.load_quiz=f.prompt_unsaved=f.copy_to_clipboard=f.share_program=f.viewProgramLink=f.saveitP=f.saveit=f.tryPaletteCode=f.runit=f.theGlobalEditor=void 0;ee();var h=J(),b=V();(function(){window.State||(window.State={}),s($("#editor"));for(var e=function(r){$(r).addClass("text-lg rounded");var u=n(r,!0);if(u.setOptions({maxLines:1/0}),u.setOptions({minLines:2}),u.setValue(u.getValue().replace(/\n+$/,""),-1),!$(r).hasClass("no-copy-button")){var c=$("<div>").css({position:"absolute",top:5,right:5,width:"auto"}).appendTo(r);$("<button>").attr("title",UiMessages.try_button).css({fontFamily:"sans-serif"}).addClass("green-btn").text("\u21E5").appendTo(c).click(function(){f.theGlobalEditor===null||f.theGlobalEditor===void 0||f.theGlobalEditor.setValue(u.getValue()+`
`)})}},t=0,a=$(".turn-pre-into-ace pre").get();t<a.length;t++){var i=a[t];e(i)}function s(r){if(!!r.length){var u=n(r.get(0),r.data("readonly"));f.theGlobalEditor=u,h.error.setEditor(u),window.Range=ace.require("ace/range").Range;var c=window.sessionStorage;if(c){var l=r.data("lskey"),d=r.data("loaded-program"),w=c.getItem(l);d!=="True"&&w&&u.setValue(w,1),u.on("blur",function(B){c.setItem(l,u.getValue())}),u.on("change",function(){$("#inline-modal").is(":visible")&&$("#inline-modal").hide(),window.State.disable_run=!1,$("#runit").css("background-color",""),window.State.unsaved_changes=!0,me(u)})}window.onbeforeunload=function(){if(window.State.unsaved_changes&&!window.State.no_unload_prompt)return b.auth.texts.unsaved_changes};var O;return window.addEventListener("keydown",function(B){var F=B.keyCode;if(F===18){O=!0;return}if(F===13&&O){if(!window.State.level||!window.State.lang)throw new Error("Oh no");ge(window.State.level,window.State.lang,function(){$("#output").focus()})}F===37&&document.activeElement===document.getElementById("output")&&(u.focus(),u.navigateFileEnd())}),window.addEventListener("keyup",function(B){var F=B.keyCode;if(F===18){O=!1;return}}),u}}function n(r,u){var c=ace.edit(r);c.setTheme("ace/theme/monokai"),u&&c.setOptions({readOnly:!0,showGutter:!1,showPrintMargin:!1,highlightActiveLine:!1});var l=1;if(l==1){var d={"9":"ace/mode/level9and10","10":"ace/mode/level9and10","18":"ace/mode/level18and19","19":"ace/mode/level18and19"};if(window.State.level){var w=d[window.State.level]||"ace/mode/level"+window.State.level;c.session.setMode(w)}}return c}})();function pe(){return!b.auth.profile||b.auth.profile.session_expires_at>Date.now()?!1:(location.reload(),!0)}function me(e){e.session.clearAnnotations();for(var t in e.session.getMarkers(!1))e.session.removeMarker(t)}function ge(e,t,a){if(window.State.disable_run)return h.modal.alert(b.auth.texts.answer_question);if(!pe()){h.error.hide();try{e=e.toString();var i=f.theGlobalEditor,s=ne();me(i),console.log(`Original program:
`,s),$.ajax({type:"POST",url:"/parse",data:JSON.stringify({level:e,code:s,lang:t,read_aloud:!!$("#speak_dropdown").val(),adventure_name:window.State.adventure_name}),contentType:"application/json",dataType:"json"}).done(function(n){if(console.log("Response",n),n.Warning&&h.error.showWarning(ErrorMessages.Transpile_warning,n.Warning),n.Error){h.error.show(ErrorMessages.Transpile_error,n.Error),n.Location&&n.Location[0]!="?"&&(i.session.setAnnotations([{row:n.Location[0]-1,column:n.Location[1]-1,text:"",type:"error"}]),i.session.addMarker(new ace.Range(n.Location[0]-1,n.Location[1]-1,n.Location[0]-1,n.Location[1]),"editor-error","fullLine",!1));return}Fe(n.Code,n.has_turtle,a).catch(function(r){console.log(r),h.error.show(ErrorMessages.Execute_error,r.message),Je(e,s,r.message)})}).fail(function(n){console.error(n),n.readyState<4?h.error.show(ErrorMessages.Connection_error,ErrorMessages.CheckInternet):h.error.show(ErrorMessages.Other_error,ErrorMessages.ServerError)})}catch(n){console.error(n),h.error.show(ErrorMessages.Other_error,n.message)}}}f.runit=ge;function Le(e){var t=ace.edit("editor"),a=1;t.setValue(e+`
`,a),window.State.unsaved_changes=!1}f.tryPaletteCode=Le;function re(e,t,a,i,s){if(h.error.hide(),!pe())try{if(!b.auth.profile)return h.modal.confirm(b.auth.texts.save_prompt,function(){window.State&&window.State.adventure_name&&!Array.isArray(e)&&(e=[e,window.State.adventure_name]),localStorage.setItem("hedy-first-save",JSON.stringify([e,t,a,i])),window.location.pathname="/login"});window.State.unsaved_changes=!1;var n=window.State.adventure_name;Array.isArray(e)&&(n=e[1],e=e[0]),$.ajax({type:"POST",url:"/programs",data:JSON.stringify({level:e,lang:t,name:a,code:i,adventure_name:n}),contentType:"application/json",dataType:"json"}).done(function(r){var u;if(s)return r.Error?s(r):s(null,r);if(r.Warning&&h.error.showWarning(ErrorMessages.Transpile_warning,r.Warning),r.Error){h.error.show(ErrorMessages.Transpile_error,r.Error);return}h.modal.alert(b.auth.texts.save_success_detail,4e3),$("#program_name").val(r.name),(u=window.State.adventures)===null||u===void 0||u.map(function(c){c.short_name===(n||"level")&&(c.loaded_program={name:r.name,code:i})})}).fail(function(r){console.error(r),h.error.show(ErrorMessages.Connection_error,JSON.stringify(r)),r.status===403&&(localStorage.setItem("hedy-first-save",JSON.stringify([n?[e,n]:e,t,a,i])),localStorage.setItem("hedy-save-redirect","hedy"),window.location.pathname="/login")})}catch(r){console.error(r),h.error.show(ErrorMessages.Other_error,r.message)}}f.saveit=re;function Be(e,t,a,i){return new Promise(function(s,n){re(e,t,a,i,function(r,u){r?n(r):s(u)})})}f.saveitP=Be;function ve(e){return window.location.origin+"/hedy/"+e+"/view"}f.viewProgramLink=ve;function De(e,t,a,i,s){if(!b.auth.profile)return h.modal.alert(b.auth.texts.must_be_logged);var n=function(c){$.ajax({type:"POST",url:"/programs/share",data:JSON.stringify({id:c,public:i}),contentType:"application/json",dataType:"json"}).done(function(l){i&&we(ve(c),!0),h.modal.alert(i?b.auth.texts.share_success_detail:b.auth.texts.unshare_success_detail,4e3),s&&setTimeout(function(){location.reload()},1e3)}).fail(function(l){console.error(l),h.error.show(ErrorMessages.Connection_error,JSON.stringify(l))})};if(a!==!0)return n(a);var r=""+$("#program_name").val(),u=ne();return re(e,t,r,u,function(c,l){if(c&&c.Warning)return h.error.showWarning(ErrorMessages.Transpile_warning,c.Warning);if(c&&c.Error)return h.error.show(ErrorMessages.Transpile_error,c.Error);n(l.id)})}f.share_program=De;function we(e,t){var a,i,s=document.createElement("textarea");s.value=e,s.setAttribute("readonly",""),s.style.position="absolute",s.style.left="-9999px",document.body.appendChild(s);var n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):void 0;s.select(),document.execCommand("copy"),document.body.removeChild(s),r&&((a=document.getSelection())===null||a===void 0||a.removeAllRanges(),(i=document.getSelection())===null||i===void 0||i.addRange(r)),t||h.modal.alert(b.auth.texts.copy_clipboard,4e3)}f.copy_to_clipboard=we;function Je(e,t,a){$.ajax({type:"POST",url:"/report_error",data:JSON.stringify({level:e,code:t,page:window.location.href,client_error:a}),contentType:"application/json",dataType:"json"})}window.onerror=function(t,a,i,s,n){$.ajax({type:"POST",url:"/client_exception",data:JSON.stringify({message:t,source:a,line_number:i,column_number:s,error:n,url:window.location.href,user_agent:navigator.userAgent}),contentType:"application/json",dataType:"json"})};function Fe(e,t,a){var i=$("#output");i.empty(),Sk.pre="output";var s=Sk.TurtleGraphics||(Sk.TurtleGraphics={});return s.target="turtlecanvas",s.width=400,s.height=300,s.worldWidth=400,s.worldHeight=300,t||$("#turtlecanvas").empty(),Sk.configure({output:u,read:c,inputfun:l,inputfunTakesPrompt:!0,__future__:Sk.python3,timeoutMsg:function(){return ErrorMessages.Program_too_long},execLimit:function(){return t?2e4:3e3}()}),Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody("<stdin>",!1,e,!0)}).then(function(d){console.log("Program executed"),$("#output").is(":empty")&&$("#turtlecanvas").is(":empty")&&h.error.showWarning(ErrorMessages.Transpile_warning,ErrorMessages.Empty_output),a&&a()}).catch(function(d){console.log(d);var w=n(d)||JSON.stringify(d);throw new Error(w)});function n(d){var w=d.args&&d.args.v&&d.args.v[0]&&d.args.v[0].v;return w}function r(d,w){$("<span>").text(d).css({color:w}).appendTo(i)}function u(d){r(d,"white"),_e(d)}function c(d){if(Sk.builtinFiles===void 0||Sk.builtinFiles.files[d]===void 0)throw"File not found: '"+d+"'";return Sk.builtinFiles.files[d]}function l(d){return Sk.execStart=new Date(new Date().getTime()+1e3*60*60*24*365),$("#turtlecanvas").empty(),new Promise(function(w){window.State.disable_run=!0,$("#runit").css("background-color","gray");var O=$('#inline-modal input[type="text"]');$("#inline-modal .caption").text(d),O.val(""),O.attr("placeholder",d),_e(d),setTimeout(function(){O.focus()},0),$("#inline-modal form").one("submit",function(B){return window.State.disable_run=!1,$("#runit").css("background-color",""),B.preventDefault(),$("#inline-modal").hide(),Sk.execStart=new Date,setTimeout(function(){w(O.val()),$("#output").focus()},0),!1}),$("#inline-modal").show()})}}function _e(e){var t=$("#speak_dropdown").val();if(!!t){var a=window.speechSynthesis.getVoices().filter(function(s){return s.voiceURI===t})[0];if(a){var i=new SpeechSynthesisUtterance(e);i.voice=a,i.rate=.9,speechSynthesis.speak(i)}}}(function(){if(!window.speechSynthesis||!window.State.lang)return;var e=0,t=setInterval(function(){var i;e+=1;var s=a((i=window.State.lang)!==null&&i!==void 0?i:"");if(s.length>0){for(var n=0,r=s;n<r.length;n++){var u=r[n];$("#speak_dropdown").append($("<option>").attr("value",u.voiceURI).text("\u{1F4E3} "+u.name))}$("#speak_container").show(),clearInterval(t)}e>=20&&clearInterval(t)},100);function a(i){var s=i.match(/^([a-z]+)/i);if(!s)return[];var n=s[1];return window.speechSynthesis?window.speechSynthesis.getVoices().filter(function(r){return r.lang.startsWith(n)}):[]}})();function Ue(e){if(!window.State.unsaved_changes)return e();window.State.no_unload_prompt=!0,h.modal.confirm(b.auth.texts.unsaved_changes,e)}f.prompt_unsaved=Ue;function Ve(e){$('*[data-tabtarget="end"]').html('<iframe id="quiz-iframe" class="w-full" title="Quiz" src="/quiz/start/'+e+'"></iframe>')}f.load_quiz=Ve;function ne(){try{var e=ace.require("ace/ext/whitespace");e.trimTrailingSpace(f.theGlobalEditor.session,!0)}catch(t){console.error(t)}return f.theGlobalEditor===null||f.theGlobalEditor===void 0?void 0:f.theGlobalEditor.getValue()}f.get_trimmed_code=ne});var xe=A(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});var ze=J(),He=V(),S=W();$(function(){function e(){$("#warningbox").hide(),$("#errorbox").hide(),$("#output").empty(),$("#turtlecanvas").empty(),window.State.unsaved_changes=!1}function t(i){var s,n,r=$('*[data-tab="'+i+'"]'),u=r.siblings("*[data-tab]"),c=$('*[data-tabtarget="'+i+'"]'),l=c.siblings("*[data-tabtarget]");u.removeClass("tab-selected"),r.addClass("tab-selected"),l.addClass("hidden"),c.removeClass("hidden");var d={};if((s=window.State.adventures)===null||s===void 0||s.map(function(w){d[w.short_name]=w}),e(),i==="end"){$("#adventures-tab").css("max-height","100%"),$("#level-header input").hide(),$("#editor-area").hide();return}$("#adventures-tab").css("max-height","20em"),$("#level-header input").show(),$("#editor-area").show(),window.State.loaded_program&&(window.State.adventure_name_onload||"level")===i?($("#program_name").val(window.State.loaded_program.name),S.theGlobalEditor===null||S.theGlobalEditor===void 0||S.theGlobalEditor.setValue(window.State.loaded_program.code)):((n=d[i])===null||n===void 0?void 0:n.loaded_program)?($("#program_name").val(d[i].loaded_program.name),S.theGlobalEditor===null||S.theGlobalEditor===void 0||S.theGlobalEditor.setValue(d[i].loaded_program.code)):i==="level"&&window.State.default_program_name&&window.State.default_program?($("#program_name").val(window.State.default_program_name),S.theGlobalEditor===null||S.theGlobalEditor===void 0||S.theGlobalEditor.setValue(window.State.default_program)):($("#program_name").val(d[i].default_save_name+" - "+window.State.level_title+" "+window.State.level),S.theGlobalEditor===null||S.theGlobalEditor===void 0||S.theGlobalEditor.setValue(d[i].start_code)),window.State.adventure_name=i==="level"?void 0:i,S.theGlobalEditor===null||S.theGlobalEditor===void 0||S.theGlobalEditor.clearSelection(),window.State.unsaved_changes=!1}if($("*[data-tab]").click(function(i){var s=$(i.target),n=s.data("tab");i.preventDefault(),window.State.unsaved_changes?ze.modal.confirm(He.auth.texts.unsaved_changes,function(){return t(n)}):t(n);var r=n!=="level"?n:"";window.history&&window.history.replaceState(null,"","#"+r)}),window.State&&window.State.adventure_name)t(window.State.adventure_name);else if(window.location.hash){var a=window.location.hash.replace(/^#/,"");a&&t(a)}})});var $e=A(()=>{"use strict";function Ke(e){var t=80,a=e.split(`
`),i=a.map(function(s){return Math.floor(s.length/t)});return We(i)+a.length}function We(e){for(var t=0,a=0,i=e;a<i.length;a++){var s=i[a];t+=s}return t}function Se(e){var t=Math.max(1,Ke($(e).val())),a=t*25+4;$(e).height()<a&&$(e).css({height:a+"px"})}$("textarea").each(function(e,t){return Se(t)}).on("input",function(e){var t=$(e.target);t.hasClass("touched")||(t.addClass("touched"),t.attr("name",t.data("name")),qe(t.closest("form"))),Se(t)});var be=new Map;function qe(e){var t=e.data("file"),a=be.get(t);if(!a){var i=$('button[data-file="'+t+'"]');a={button:i,changes:0},be.set(t,a)}a.changes+=1,a.button.text(t+" ("+a.changes+")")}$("button[data-file]").click(function(e){var t=$(e.target).data("file"),a=$('form[data-file="'+t+'"]');a.submit()})});var Ye=A(j=>{"use strict";var Ze=j&&j.__createBinding||(Object.create?function(e,t,a,i){i===void 0&&(i=a),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,i){i===void 0&&(i=a),e[i]=t[a]}),q=j&&j.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Ze(t,e,a)};Object.defineProperty(j,"__esModule",{value:!0});q(J(),j);q(W(),j);q(V(),j);ee();xe();$e();q(te(),j)});return Ye();})();
//# sourceMappingURL=appbundle.js.map
