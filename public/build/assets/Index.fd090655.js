import{_ as f}from"./AppLayout.2119c742.js";import{o as r,c as h,w as l,a as e,b as n,g as o,L as d,e as c,h as _,F as g,i as u,t as b}from"./app.518f4ca7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y={class:"font-semibold text-xl text-gray-800 leading-tight"},p=u(" Add "),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},m={class:"table-auto w-full"},w=e("thead",null,[e("tr",null,[e("th",null,"TITLE"),e("th",null,"ACTIONS")])],-1),k={class:"table-report__action w-56"},v={class:"flex justify-center items-center"},S=u(" Edit "),j={__name:"Index",props:{models:{type:Object,default:{}},add_link:{type:String,default:null},search:{default:null},route_name:{type:String,default:null},title:{type:String,default:null},breadcrumb:{type:Object,default:{}}},setup(a){return(s,B)=>(r(),h(f,{title:a.title},{header:l(()=>[e("h2",y,[n(o(d),{href:s.route(a.route_name+"create"),class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},{default:l(()=>[p]),_:1},8,["href"])])]),default:l(()=>[e("div",null,[e("div",x,[e("table",m,[w,e("tbody",null,[(r(!0),c(g,null,_(a.models.data,(t,i)=>(r(),c("tr",{class:"bg-white my-2",key:i},[e("td",null,[n(o(d),{href:s.route(a.route_name+"edit",t==null?void 0:t.id),class:"font-medium whitespace-nowrap"},{default:l(()=>[u(b(t==null?void 0:t.title),1)]),_:2},1032,["href"])]),e("td",k,[e("div",v,[n(o(d),{href:s.route(a.route_name+"edit",t==null?void 0:t.id),class:"flex items-center mr-3"},{default:l(()=>[S]),_:2},1032,["href"])])])]))),128))])])])])]),_:1},8,["title"]))}};export{j as default};