import{_ as b}from"./AppLayout.2119c742.js";import{_ as v}from"./FormCard.3c016c4a.js";import{d as w,p as x,o as f,e as _,F as S,h,t as k,j as $,u as U,c as j,w as d,a as m,b as l,g as s,i as B}from"./app.518f4ca7.js";import{_ as g}from"./Input.f6ce5f4b.js";import{_ as i}from"./InputError.8868b24e.js";import{_ as c}from"./Label.6e8fa678.js";import{_ as O}from"./Button.c0661cc6.js";import"./_plugin-vue_export-helper.cdc0426e.js";const M=["value","selected"],N={__name:"Select",props:{modelValue:String,options:{type:Object,default:{}}},emits:["update:modelValue"],setup(n){const e=w(null);return x(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(p,t)=>(f(),_("select",{class:"bg-gray-50 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm",onChange:t[0]||(t[0]=a=>p.$emit("update:modelValue",String(a.target.value))),ref_key:"select",ref:e},[(f(!0),_(S,null,h(n.options,(a,u)=>(f(),_("option",{key:u,value:String(a.id),selected:String(a.id)==n.modelValue},k(a.name),9,M))),128))],544))}},C=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Add/Update User ",-1),F={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},P={class:"col-span-6 sm:col-span-4"},T={class:"col-span-6 sm:col-span-4"},A={class:"col-span-6 sm:col-span-4"},D={class:"col-span-6 sm:col-span-4"},E=B(" Save "),Q={__name:"Create",props:{form_type:{type:String,default:"add"},route_url:{type:String,default:null},title:{type:String,default:null},breadcrumb:{type:Object,default:{}},role:{type:Object,default:{}},model:{type:Object,default:{}}},setup(n){var u,y,V;const e=n,p=$(()=>{if(e.form_type=="add")return"POST";if(e.form_type=="edit")return"PUT"}),t=U({_method:p,name:(u=e==null?void 0:e.model)==null?void 0:u.name,email:(y=e==null?void 0:e.model)==null?void 0:y.email,password:null,role:(V=e==null?void 0:e.model)==null?void 0:V.role}),a=()=>{t.post(e.route_url,{errorBag:"createModel",preserveScroll:!0,onSuccess:()=>!0})};return(L,o)=>(f(),j(b,{title:n.title},{header:d(()=>[C]),default:d(()=>[m("div",null,[m("div",F,[l(v,{onSubmitted:a},{form:d(()=>[m("div",P,[l(c,{for:"name",value:"Name"}),l(g,{id:"name",modelValue:s(t).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(t).name=r),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),l(i,{message:s(t).errors.name,class:"mt-2"},null,8,["message"])]),m("div",T,[l(c,{for:"email",value:"Username"}),l(g,{id:"email",modelValue:s(t).email,"onUpdate:modelValue":o[1]||(o[1]=r=>s(t).email=r),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),l(i,{message:s(t).errors.email,class:"mt-2"},null,8,["message"])]),m("div",A,[l(c,{for:"role",value:"Role"}),l(N,{id:"role",modelValue:s(t).role,"onUpdate:modelValue":o[2]||(o[2]=r=>s(t).role=r),class:"mt-1 block w-full",options:n.role},null,8,["modelValue","options"]),l(i,{message:s(t).errors.role,class:"mt-2"},null,8,["message"])]),m("div",D,[l(c,{for:"password",value:"Password"}),l(g,{id:"password",modelValue:s(t).password,"onUpdate:modelValue":o[3]||(o[3]=r=>s(t).password=r),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),l(i,{message:s(t).errors.password,class:"mt-2"},null,8,["message"])])]),actions:d(()=>[l(O,{type:"submit"},{default:d(()=>[E]),_:1})]),_:1})])])]),_:1},8,["title"]))}};export{Q as default};
