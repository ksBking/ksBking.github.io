import{d as _,r as l,o as e,c as t,t as s,f as c,F as d,i as F,e as n,h as f,j as m}from"./app.af2c87b5.js";const v={key:0},k={key:1},D={key:2},g={key:3},B=["href"],y={key:4},E=_({__name:"Download",setup(i){const o=l("loading"),a=l(),h=`https://ksbking.gitee.io/data/league-tool/latest.json?_=${Date.now()}`;return fetch(h).then(u=>u.json()).then(u=>{o.value="ok",a.value=u}).catch(()=>{o.value="fail"}),(u,x)=>(e(),t(d,null,[a.value?(e(),t("p",v,"\u516C\u544A\uFF1A"+s(a.value.notice),1)):c("",!0),a.value?(e(),t("h2",k,"\u6700\u65B0\u7248\u672C\uFF1A"+s(a.value.version)+"\uFF08"+s(a.value.time)+"\uFF09",1)):c("",!0),o.value==="loading"?(e(),t("p",D,"\u6B63\u5728\u52A0\u8F7D\u2026\u2026")):o.value==="ok"?(e(),t("ul",g,[(e(!0),t(d,null,F(a.value.download,(r,p)=>(e(),t("li",{key:p},[n("a",{href:r.url,target:"_blank",rel:"noreferrer"},s(r.name),9,B)]))),128))])):(e(),t("p",y,"\u52A0\u8F7D\u5931\u8D25\u2026\u2026"))],64))}}),j=n("h1",{id:"\u4E0B\u8F7D",tabindex:"-1"},[m("\u4E0B\u8F7D "),n("a",{class:"header-anchor",href:"#\u4E0B\u8F7D","aria-hidden":"true"},"#")],-1),N=JSON.parse('{"title":"\u4E0B\u8F7D","description":"","frontmatter":{"title":"\u4E0B\u8F7D"},"headers":[],"relativePath":"projects/league-tool/download.md","lastUpdated":1664722509000}'),w={name:"projects/league-tool/download.md"},C=_({...w,setup(i){return(o,a)=>(e(),t("div",null,[j,f(E)]))}});export{N as __pageData,C as default};
