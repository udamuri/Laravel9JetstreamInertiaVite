import{_ as x}from"./AppLayout.2119c742.js";import{_ as y}from"./FormCard.3c016c4a.js";import{j as g,u as b,o as S,c as V,w as a,a as s,b as e,g as l,i as h}from"./app.518f4ca7.js";import{_ as i}from"./Input.f6ce5f4b.js";import{_ as u}from"./InputError.8868b24e.js";import{_ as f}from"./Label.6e8fa678.js";import{_ as v}from"./Button.c0661cc6.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $=s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Add/Update POST ",-1),w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},O={class:"col-span-6 sm:col-span-4"},T={class:"col-span-6 sm:col-span-4"},j=h(" Save "),q={__name:"Create",props:{form_type:{type:String,default:"add"},route_url:{type:String,default:null},title:{type:String,default:null},breadcrumb:{type:Object,default:{}},role:{type:Object,default:{}},model:{type:Object,default:{}}},setup(m){var c,d;const t=m,_=g(()=>{if(t.form_type=="add")return"POST";if(t.form_type=="edit")return"PUT"}),o=b({_method:_,title:(c=t==null?void 0:t.model)==null?void 0:c.title,content:(d=t==null?void 0:t.model)==null?void 0:d.content}),p=()=>{o.post(t.route_url,{errorBag:"createModel",preserveScroll:!0,onSuccess:()=>!0})};return(k,r)=>(S(),V(x,{title:m.title},{header:a(()=>[$]),default:a(()=>[s("div",null,[s("div",w,[e(y,{onSubmitted:p},{form:a(()=>[s("div",O,[e(f,{for:"name",value:"Title"}),e(i,{id:"title",modelValue:l(o).title,"onUpdate:modelValue":r[0]||(r[0]=n=>l(o).title=n),type:"text",class:"mt-1 block w-full",autocomplete:"title"},null,8,["modelValue"]),e(u,{message:l(o).errors.name,class:"mt-2"},null,8,["message"])]),s("div",T,[e(f,{for:"content",value:"Content"}),e(i,{id:"content",modelValue:l(o).content,"onUpdate:modelValue":r[1]||(r[1]=n=>l(o).content=n),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),e(u,{message:l(o).errors.content,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[e(v,{type:"submit"},{default:a(()=>[j]),_:1})]),_:1})])])]),_:1},8,["title"]))}};export{q as default};