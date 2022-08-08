import{o as i,c as L,w as e,a as t,r as y,u as x,d as b,e as c,b as o,f as h,g as a,F as $,h as w,n as C,t as v,i as l}from"./app.f23fd69f.js";import{_ as M}from"./ActionMessage.e97e6e9a.js";import{_ as U,a as z,b as T}from"./DialogModal.326bc51d.js";import{_ as S}from"./Button.a724eedf.js";import{_ as J}from"./DangerButton.37710b04.js";import{_ as W}from"./FormSection.9c977b8c.js";import{_ as E}from"./Input.682fc788.js";import{_ as B}from"./Checkbox.57955ce7.js";import{_ as Y}from"./InputError.d7659786.js";import{_ as F}from"./Label.aa8b4389.js";import{_ as A}from"./SecondaryButton.ef16d1a4.js";import{J as q}from"./SectionBorder.d817bb4a.js";import"./SectionTitle.e0537cb1.js";import"./_plugin-vue_export-helper.cdc0426e.js";const G={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},H={class:"sm:flex sm:items-start"},K=t("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),O={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},Q={class:"text-lg"},R={class:"mt-2"},X={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},Z={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(d,{emit:P}){const r=()=>{P("close")};return(m,k)=>(i(),L(U,{show:d.show,"max-width":d.maxWidth,closeable:d.closeable,onClose:r},{default:e(()=>[t("div",G,[t("div",H,[K,t("div",O,[t("h3",Q,[y(m.$slots,"title")]),t("div",R,[y(m.$slots,"content")])])])]),t("div",X,[y(m.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}},ee=l(" Create API Token "),se=l(" API tokens allow third-party services to authenticate with our application on your behalf. "),te={class:"col-span-6 sm:col-span-4"},oe={key:0,class:"col-span-6"},ne={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},le={class:"flex items-center"},ae={class:"ml-2 text-sm text-gray-600"},ie=l(" Created. "),re=l(" Create "),ce={key:0},de={class:"mt-10 sm:mt-0"},me=l(" Manage API Tokens "),ue=l(" You may delete any of your existing tokens if they are no longer needed. "),_e={class:"space-y-6"},pe={class:"flex items-center"},fe={key:0,class:"text-sm text-gray-400"},he=["onClick"],ve=["onClick"],ke=l(" API Token "),ge=t("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),ye={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},xe=l(" Close "),be=l(" API Token Permissions "),$e={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},we={class:"flex items-center"},Ce={class:"ml-2 text-sm text-gray-600"},Ae=l(" Cancel "),Pe=l(" Save "),Te=l(" Delete API Token "),Se=l(" Are you sure you would like to delete this API token? "),Be=l(" Cancel "),Fe=l(" Delete "),Ge={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(d){const r=x({name:"",permissions:d.defaultPermissions}),m=x({permissions:[]}),k=x(),g=b(!1),_=b(null),p=b(null),I=()=>{r.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,r.reset()}})},V=u=>{m.permissions=u.abilities,_.value=u},j=()=>{m.put(route("api-tokens.update",_.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>_.value=null})},D=u=>{p.value=u},N=()=>{k.delete(route("api-tokens.destroy",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})};return(u,n)=>(i(),c("div",null,[o(W,{onSubmitted:I},{title:e(()=>[ee]),description:e(()=>[se]),form:e(()=>[t("div",te,[o(F,{for:"name",value:"Name"}),o(E,{id:"name",modelValue:a(r).name,"onUpdate:modelValue":n[0]||(n[0]=s=>a(r).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),o(Y,{message:a(r).errors.name,class:"mt-2"},null,8,["message"])]),d.availablePermissions.length>0?(i(),c("div",oe,[o(F,{for:"permissions",value:"Permissions"}),t("div",ne,[(i(!0),c($,null,w(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",le,[o(B,{checked:a(r).permissions,"onUpdate:checked":n[1]||(n[1]=f=>a(r).permissions=f),value:s},null,8,["checked","value"]),t("span",ae,v(s),1)])]))),128))])])):h("",!0)]),actions:e(()=>[o(M,{on:a(r).recentlySuccessful,class:"mr-3"},{default:e(()=>[ie]),_:1},8,["on"]),o(S,{class:C({"opacity-25":a(r).processing}),disabled:a(r).processing},{default:e(()=>[re]),_:1},8,["class","disabled"])]),_:1}),d.tokens.length>0?(i(),c("div",ce,[o(q),t("div",de,[o(z,null,{title:e(()=>[me]),description:e(()=>[ue]),content:e(()=>[t("div",_e,[(i(!0),c($,null,w(d.tokens,s=>(i(),c("div",{key:s.id,class:"flex items-center justify-between"},[t("div",null,v(s.name),1),t("div",pe,[s.last_used_ago?(i(),c("div",fe," Last used "+v(s.last_used_ago),1)):h("",!0),d.availablePermissions.length>0?(i(),c("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:f=>V(s)}," Permissions ",8,he)):h("",!0),t("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:f=>D(s)}," Delete ",8,ve)])]))),128))])]),_:1})])])):h("",!0),o(T,{show:g.value,onClose:n[3]||(n[3]=s=>g.value=!1)},{title:e(()=>[ke]),content:e(()=>[ge,u.$page.props.jetstream.flash.token?(i(),c("div",ye,v(u.$page.props.jetstream.flash.token),1)):h("",!0)]),footer:e(()=>[o(A,{onClick:n[2]||(n[2]=s=>g.value=!1)},{default:e(()=>[xe]),_:1})]),_:1},8,["show"]),o(T,{show:_.value!=null,onClose:n[6]||(n[6]=s=>_.value=null)},{title:e(()=>[be]),content:e(()=>[t("div",$e,[(i(!0),c($,null,w(d.availablePermissions,s=>(i(),c("div",{key:s},[t("label",we,[o(B,{checked:a(m).permissions,"onUpdate:checked":n[4]||(n[4]=f=>a(m).permissions=f),value:s},null,8,["checked","value"]),t("span",Ce,v(s),1)])]))),128))])]),footer:e(()=>[o(A,{onClick:n[5]||(n[5]=s=>_.value=null)},{default:e(()=>[Ae]),_:1}),o(S,{class:C(["ml-3",{"opacity-25":a(m).processing}]),disabled:a(m).processing,onClick:j},{default:e(()=>[Pe]),_:1},8,["class","disabled"])]),_:1},8,["show"]),o(Z,{show:p.value!=null,onClose:n[8]||(n[8]=s=>p.value=null)},{title:e(()=>[Te]),content:e(()=>[Se]),footer:e(()=>[o(A,{onClick:n[7]||(n[7]=s=>p.value=null)},{default:e(()=>[Be]),_:1}),o(J,{class:C(["ml-3",{"opacity-25":a(k).processing}]),disabled:a(k).processing,onClick:N},{default:e(()=>[Fe]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ge as default};
