import{j as e,ad as fe,ae as pe,a4 as je,ab as Ce,af as ye,ag as X,ah as be,ai as ve,aj as _e,ak as Se,al as ke}from"./@mui/icons-material-c2086071.js";import{r as o,d as V}from"./vendor-b612640b.js";import{f as Z,s as Ie,v as we,D as Me,u as ee,a as W,b as Le,c as Pe,d as Fe,C as $,A as te,e as w,m as Ae,g as Te,h as De,p as Re,i as Ee,j as Oe,k as Be,S as qe,l as Ye,n as K}from"./index-ce05be55.js";import{u as Ne}from"./@reactour/tour-e24be7d6.js";import{u as ne}from"./@tanstack/react-query-7cfe65c4.js";import{F as A,I as T,x as D,M as p,y as He,r as se,h as F,i as b,S as g,B as R,q as H,z as Qe,E as ze,G as Ve,s as Ge,H as y,J as U,K as P,L as ae,e as le,N as We}from"./@mui/material-99b79a59.js";import{D as E,s as ie,b as m,C as k,E as re,H as $e,x as Ke}from"./@mui/lab-cc97fd70.js";import{c as Ue,o as Je}from"./use-debounce-6bf2a1da.js";import{d as Xe,a as v}from"./dayjs-c0cd33fe.js";import{c as Ze}from"./react-draggable-cc2383fd.js";import{u as et}from"./react-hook-form-c6612ec3.js";import"./@emotion/react-0d101b94.js";import"./@emotion/styled-6b07d811.js";import"./@supabase/supabase-js-711ba96a.js";import"./dexie-3976de5d.js";import"./dexie-react-hooks-0c2ddb12.js";import"./axios-760d4776.js";import"./@react-rxjs/utils-24ca515a.js";import"./@react-rxjs/core-1a0bb4f0.js";import"./notistack-f220509a.js";import"./hotkeys-js-d20e5801.js";const tt=()=>{const{data:t,isLoading:n}=ne({queryKey:["languages"],queryFn:()=>Z.getAllLanguages()});return{data:t,isLoading:n}},oe=t=>{const{data:n,isFetching:s}=ne({queryKey:["qualityprofile",t],queryFn:()=>Z.getQualityProfilesByLanguage(t),enabled:!!t});return{data:n,isFetching:s}},ce=({className:t,handleChange:n,inputProps:s,includeAllOption:a,displayEmpty:r})=>{const{data:l,isLoading:i}=tt();return e.jsx(A,{sx:{width:200},className:t,children:i?e.jsx(E,{}):e.jsxs(e.Fragment,{children:[e.jsx(T,{id:"language",children:"Lenguaje"}),e.jsxs(D,{inputProps:s,labelId:"language",label:"Lenguaje",onChange:n,sx:{width:200},defaultValue:a?"all":"",displayEmpty:r,children:[a&&e.jsx(p,{value:"all",children:"Todos"}),l==null?void 0:l.map(({id:h,name:x})=>e.jsx(p,{value:h,children:x},h))]})]})})},nt=()=>{const{setIsOpen:t,isOpen:n}=Ne(),s=o.useCallback(a=>{Ie(a.target.value)},[]);return o.useEffect(()=>{const a=we();t(a)},[t]),o.useEffect(()=>{Me("body",n==null?void 0:n.valueOf())},[n]),e.jsx(ce,{className:"language",handleChange:s,displayEmpty:!0})},st=()=>{const t=ee(),n=o.useRef(null),{data:s,isFetching:a}=oe(t);o.useEffect(()=>{var l;W(((l=n.current)==null?void 0:l.value)??"")},[t]);const r=o.useCallback(l=>{W(l.target.value)},[]);return a?e.jsx(E,{}):e.jsxs(A,{className:"mainFilters",sx:{width:200},children:[e.jsx(T,{id:"qualityprofile",children:"Quality Profile"}),e.jsx(D,{ref:n,onChange:r,label:"Quality Profile",labelId:"qualityprofile",defaultValue:"",displayEmpty:!0,children:s==null?void 0:s.map(({id:l,name:i})=>e.jsx(p,{value:l,children:i},l))})]})},at=({value:t,label:n,reactiveCb:s})=>{const a=o.useCallback(()=>{s(t)},[s,t]);return e.jsx(p,{onClick:a,children:n})},G=({filterConfig:t,reactiveCallback:n,isClosingRecursive:s})=>{const[a,r]=o.useState(null),[l,i]=o.useState(!0),h=o.useCallback(d=>{n(d),i(d==="all"),s&&r(null)},[s,n]),x=o.useCallback(()=>{r(null)},[]),c=o.useCallback(d=>{d.preventDefault(),r(d.currentTarget)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(ie,{onClick:c,sx:{padding:"1px !important"},children:e.jsx(He,{variant:"dot",invisible:l,color:"secondary",children:e.jsx(fe,{sx:{color:"#e4a010"}})})}),e.jsx(se,{anchorEl:a,onClose:x,open:!!a,children:t.map(({value:d,label:u})=>e.jsx(at,{label:u,value:d,reactiveCb:h}))})]})};var de=(t=>(t.Blocker="BLOCKER",t.Critical="CRITICAL",t.Info="INFO",t.Major="MAJOR",t.Minor="MINOR",t))(de||{}),ue=(t=>(t.Bug="BUG",t.CodeSmell="CODE_SMELL",t.SecurityHotspot="SECURITY_HOTSPOT",t.Vulnerability="VULNERABILITY",t))(ue||{});const he=[{value:"all",label:"Todos"},...Object.values(ue).map(t=>({value:t,label:t}))],xe=[{value:"all",label:"Todos"},...Object.values(de).map(t=>({value:t,label:t}))],ge=[{value:"all",label:"Todos"},{value:"active",label:"Activo"},{value:"deactive",label:"Inactivo"}],lt=Object.freeze({all:null,active:!0,deactive:!1}),it=()=>{const t=o.useCallback(n=>{Le(lt[n])},[]);return e.jsx(G,{filterConfig:ge,isClosingRecursive:!0,reactiveCallback:t})},rt=()=>{const t=o.useCallback(n=>{Pe(n)},[]);return e.jsx(G,{filterConfig:xe,isClosingRecursive:!0,reactiveCallback:t})},ot=()=>{const t=o.useCallback(n=>Fe(n),[]);return e.jsx(G,{filterConfig:he,isClosingRecursive:!0,reactiveCallback:t})},I=[{label:"",especialConfig:!0,resource:"htmlDesc"},{label:"Código",resource:"key",textAlign:"left"},{label:"Regla",resource:"name",textAlign:"left"},{label:"Tipo",resource:"type",filter:e.jsx(ot,{}),textAlign:"left"},{label:"Severidad",resource:"severity",textAlign:"left",filter:e.jsx(rt,{})},{label:"Estado Actual",resource:"isActiveSonar",especialConfig:!0,className:"actualState",textAlign:"left",filter:e.jsx(it,{})},{label:"Estado Propuesto",resource:"isActive",especialConfig:!0,className:"proposedState"},{label:"Última Propuesta: ",resource:"updated_at",especialConfig:!0,icon:e.jsx(pe,{sx:{color:t=>t.palette.common.white}})},{label:"Autor",resource:"user_email"}],ct=o.memo(({data:t})=>e.jsx(e.Fragment,{children:e.jsx(F,{children:t.map(({label:n,icon:s,filter:a,className:r})=>e.jsx(b,{variant:"head",className:r,sx:{background:l=>`${l.palette.grey[900]} !important`},children:e.jsxs(g,{direction:"row",gap:.5,alignItems:"center",justifyContent:"space-between",children:[s,e.jsx(m,{sx:{color:l=>l.palette.common.white},fontWeight:700,children:n}),a]})},n))})}));var Q={},dt={get exports(){return Q},set exports(t){Q=t}};(function(t,n){(function(s,a){t.exports=a()})(V,function(){return function(s,a,r){r.updateLocale=function(l,i){var h=r.Ls[l];if(h)return(i?Object.keys(i):[]).forEach(function(x){h[x]=i[x]}),h}}})})(dt);const ut=Q;var z={},ht={get exports(){return z},set exports(t){z=t}};(function(t,n){(function(s,a){t.exports=a()})(V,function(){return function(s,a,r){s=s||{};var l=a.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function h(c,d,u,f){return l.fromToBase(c,d,u,f)}r.en.relativeTime=i,l.fromToBase=function(c,d,u,f,M){for(var _,L,O,B=u.$locale().relativeTime||i,q=s.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],me=q.length,S=0;S<me;S+=1){var j=q[S];j.d&&(_=f?r(c).diff(u,j.d,!0):u.diff(c,j.d,!0));var C=(s.rounding||Math.round)(Math.abs(_));if(O=_>0,C<=j.r||!j.r){C<=1&&S>0&&(j=q[S-1]);var Y=B[j.l];M&&(C=M(""+C)),L=typeof Y=="string"?Y.replace("%d",C):Y(C,d,j.l,O);break}}if(d)return L;var N=O?B.future:B.past;return typeof N=="function"?N(L):N.replace("%s",L)},l.to=function(c,d){return h(c,d,this,!0)},l.from=function(c,d){return h(c,d,this)};var x=function(c){return c.$u?r.utc():r()};l.toNow=function(c){return this.to(x(this),c)},l.fromNow=function(c){return this.from(x(this),c)}}})})(ht);const xt=z;var J={},gt={get exports(){return J},set exports(t){J=t}};(function(t,n){(function(s,a){t.exports=a(Xe)})(V,function(s){function a(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var r=a(s),l={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(i){return i+"º"}};return r.default.locale(l,null,!0),l})})(gt);v.extend(ut);v.locale("es");v.extend(xt);v.updateLocale("es",{relativeTime:{future:"en %s",past:"hace %s",s:"1 s",m:"1 min",mm:"%d min",h:"1 h",hh:"%d h",d:"1 d",dd:"%d d",M:"1 M",MM:"%d M",y:"1 Y",yy:"%d Y"}});const mt=({date:t})=>e.jsx(m,{align:"left",children:v(t).from(new Date)});function ft(t){const{tags:n,isActive:s,dateSonar:a,ruleTitle:r,ruleDescription:l}=t;return e.jsxs(R,{children:[e.jsxs(g,{padding:2,direction:"column",spacing:2,children:[e.jsxs(g,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:2,children:[e.jsx(k,{sx:{backgroundColor:({palette:i})=>i.mode===$.DARK?i.grey[900]:i.grey[800],color:"white"},label:`Regla ${s?"activo":"inactivo"} desde:`}),e.jsx(k,{label:`${a??"Sin info"}`})]}),e.jsx(g,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:2,children:n.map(i=>e.jsx(k,{label:i},i))})]}),e.jsx(g,{direction:"row",justifyContent:"flex-start",alignItems:"center",padding:2,pb:0,children:e.jsx(re,{title:r,children:e.jsx(k,{color:"secondary",label:e.jsx(m,{noWrap:!0,variant:"h5",children:r})})})}),e.jsxs(g,{direction:"column",justifyContent:"center",padding:2,children:[e.jsx(g,{direction:"row",justifyContent:"flex-start",children:e.jsx(k,{label:"Descripción de la Regla",sx:{backgroundColor:({palette:i})=>i.mode===$.DARK?i.grey[900]:i.grey[800],color:"white"}})}),e.jsx(m,{dangerouslySetInnerHTML:{__html:l}})]})]})}function pt({initialStatus:t,result:n,id:s}){const[a,r]=o.useState(!1),[l,i]=o.useState(t),{user:h}=o.useContext(te);o.useEffect(()=>{i(t)},[t]),o.useEffect(()=>{w.rulesStatus.get(Number(s)).then(d=>r(!!d))},[s]);const x=n.isActiveOriginal!==l;o.useEffect(()=>{a&&n.isActiveOriginal===l&&w.rulesStatus.delete(Number(s))},[l,s,a,n.isActiveOriginal]);const c=o.useCallback(async d=>{i(d.target.checked);const u=await w.rulesStatus.get(Number(s));(!a||n.isActiveOriginal!==d.target.checked)&&await w.rulesStatus.put({...u,id:Number(s),newStatus:d.target.checked,updated_at:new Date,languageId:n.lang_id,qualityProfileId:Number(n.qualityProfile_id),user_email:h==null?void 0:h.email}),r(!0)},[s,a,n.isActiveOriginal,n.lang_id,n.qualityProfile_id,h==null?void 0:h.email]);return e.jsxs(g,{direction:"row",alignItems:"center",children:[e.jsx(m,{minWidth:60,children:l?"Activo":"Inactivo"}),e.jsx(H,{onChange:c,checked:l}),a&&x?e.jsx(je,{}):""]})}const jt=({resource:t,value:n,result:s,secondaryValue:a})=>t==="isActiveSonar"?e.jsx(m,{children:n?"Activo":"Inactivo"}):t==="htmlDesc"?e.jsx(Ae,{icon:e.jsx(Ce,{}),popoverBody:e.jsx(ft,{tags:[s.severity,s.type],isActive:s.isActive,ruleTitle:s.name,ruleDescription:s.htmlDesc})}):t==="updated_at"?Math.abs(v(String(n)).diff(a,"hours"))>6?e.jsx(mt,{date:String(n)}):e.jsx(m,{align:"left",children:"--"}):e.jsx(pt,{initialStatus:!!n,result:s,id:s.id}),Ct=({colSpan:t})=>e.jsx(b,{colSpan:t,children:e.jsx(R,{display:"grid",sx:{placeContent:"center",minHeight:400},children:e.jsx(E,{})})}),yt=({icon:t,primaryText:n,secondaryText:s})=>e.jsxs(g,{direction:"column",justifyContent:"center",alignItems:"center",minHeight:"50vh",sx:{fontSize:100},gap:8,children:[t,e.jsxs(g,{direction:"column",gap:4,children:[e.jsx(m,{color:"GrayText",variant:"h3",children:n}),s&&e.jsx(m,{textAlign:"center",color:"GrayText",variant:"body1",children:s})]})]}),bt=({hasContent:t,children:n,colSpan:s})=>t?e.jsx(e.Fragment,{children:n}):e.jsx(F,{children:e.jsx(b,{colSpan:s,children:e.jsx(yt,{icon:e.jsx(ye,{color:"disabled",fontSize:"inherit"}),primaryText:"Sin datos",secondaryText:"Selecciona filtros"})})}),vt=({children:t,collapseContent:n,colSpan:s})=>{const[a,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(F,{sx:{cursor:"pointer",":hover":{backgroundColor:({palette:l})=>l.grey[400]}},onClick:()=>{r(l=>!l)},children:t}),e.jsx(F,{children:e.jsx(b,{colSpan:s,padding:a?"normal":"none",children:e.jsx($e,{in:a,sx:{"& .MuiCollapse-wrapperInner":{display:"flex"}},children:n})})})]})},_t=({title:t,result:n})=>{const{user:s}=o.useContext(te),a=Ue(async({target:r})=>await w.saveDescription({...n,user_email:s==null?void 0:s.email},r.value),500);return e.jsx(ze,{multiline:!0,fullWidth:!0,sx:{ml:12,mr:3,minHeight:"initial",height:"auto"},defaultValue:n.description,title:t,placeholder:"Ingresa el porqué del cambio",onChange:a})};function St(){const[t,n,{data:s,isFetching:a,total:r,page:l,rowsPerPage:i}]=Te(),h=o.useCallback((c,d)=>{c&&t(d+1)},[t]),x=o.useCallback(c=>{n(parseInt(c.target.value,10)),t(1)},[t,n]);return e.jsxs(e.Fragment,{children:[e.jsx(De,{body:a?e.jsx(Ct,{colSpan:I.length}):e.jsx(bt,{hasContent:!!(s!=null&&s.length),colSpan:I.length,children:a?[]:s==null?void 0:s.map(c=>e.jsx(vt,{colSpan:I.length,collapseContent:e.jsx(_t,{result:c,title:`${c.id}-comments`}),children:I.map(({resource:d,especialConfig:u,textAlign:f})=>u?e.jsx(b,{sx:{textAlign:f??"center"},children:e.jsx(jt,{result:c,resource:d,secondaryValue:c.created_at,value:c[d]??"--"})},d+c.id):e.jsx(b,{sx:{textAlign:f??"center",maxWidth:140},children:e.jsx(re,{title:String(c[d]??"--"),children:e.jsx(m,{noWrap:!0,sx:{...d==="key"?{width:60}:{}},children:Re(String(c[d]??"--"),d==="key")})})},d+c.id))},c.id))}),header:e.jsx(ct,{data:I})}),e.jsx(R,{sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(Qe,{rowsPerPage:i,count:r??1e3,page:l-1,onPageChange:h,onRowsPerPageChange:x,labelRowsPerPage:"Filas por página"})})]})}const kt=({content:t})=>e.jsx("div",{style:{position:"sticky",bottom:20,left:"90vw",width:40,display:"flex",justifyContent:"flex-end",zIndex:500},children:t}),It=({input:t,id:n,label:s})=>e.jsxs(A,{sx:{width:200},children:[e.jsx(T,{id:n,children:s}),t]}),wt=({label:t,labelId:n,isActive:s,inputProps:a,config:r})=>e.jsx(D,{labelId:n,label:t,sx:{width:200},defaultValue:"all",disabled:!s,displayEmpty:!0,inputProps:a,children:r==null?void 0:r.map(({value:l,label:i})=>e.jsx(p,{value:l,children:i},i))}),Mt=[{id:"type-uncontrolled",label:"Type",registerField:"type",config:he},{id:"severity-uncontrolled",label:"Severity",registerField:"severity",config:xe},{id:"state-uncontrolled",label:"State",registerField:"state",config:ge}],Lt=({handleChanges:t,text:n,inputProps:s})=>{const{data:a,isFetching:r}=oe(n==="all"?"":n);return r?e.jsx(E,{}):e.jsxs(A,{sx:{width:200},children:[e.jsx(T,{id:"qualityProfile-uncontrolled",children:"Quality Profile"}),e.jsxs(D,{inputProps:s,onChange:t,label:"Quality Profile",labelId:"qualityProfile-uncontrolled",defaultValue:"all",children:[e.jsx(p,{value:"all",children:"Todos"}),a==null?void 0:a.map(({id:l,name:i})=>e.jsx(p,{value:l,children:i},l))]})]})},Pt=({handleClose:t,isOpen:n})=>{const[s,a]=o.useState(!1),{register:r,handleSubmit:l}=et(),[i,h]=o.useState(),x=o.useCallback(async u=>await Ee().downloadReport({lang_id:u.language_id,qualityProfile_id:u.qualityProfile_id,severity:u.severity,type:u.type,isActiveSonar:u.state},u.showOnlyIsActiveDifferences),[]),c=o.useCallback(()=>{a(u=>!u)},[]),d=o.useCallback(u=>{h(u.target.value)},[]);return e.jsx(Ve,{variant:"persistent",onClose:t,anchor:"right",open:n,children:e.jsx(g,{sx:{minWidth:400},component:"form",onSubmit:l(x),children:e.jsxs(Ge,{children:[e.jsx(y,{children:e.jsx(U,{control:e.jsx(H,{onClick:c}),label:"Filtros"})}),e.jsx(P,{}),e.jsx(y,{children:e.jsx(ce,{includeAllOption:!0,inputProps:r("language_id"),className:"generic-filter-uncontrolled",handleChange:d})}),e.jsx(y,{children:e.jsx(Lt,{text:i,inputProps:r("qualityProfile_id")})}),e.jsx(P,{}),Mt.map(({id:u,label:f,registerField:M,config:_})=>e.jsx(y,{children:e.jsx(It,{label:f,id:u,input:e.jsx(wt,{config:_,label:f,labelId:u,inputProps:r(M),isActive:s})})})),e.jsx(P,{}),e.jsx(y,{children:e.jsx(U,{control:e.jsx(H,{...r("showOnlyIsActiveDifferences")}),label:"Solo diferencias"})}),e.jsx(P,{}),e.jsx(y,{children:e.jsx(Ke,{type:"submit",variant:"contained",startIcon:e.jsx(X,{}),sx:{width:"100%"},children:"Download"})})]})})})},Ft=()=>{const[t,n]=o.useState(!1),s=o.useCallback(()=>{n(!0)},[]),a=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(p,{onClick:s,children:[e.jsx(ae,{children:e.jsx(X,{})}),e.jsx(le,{children:"Descarga Personalizada"})]}),e.jsx(Pt,{handleClose:a,isOpen:t})]})},At=()=>{const[t]=Oe();return e.jsxs(p,{onClick:t,children:[e.jsx(ae,{children:e.jsx(be,{fontSize:"small"})}),e.jsx(le,{children:"Restaurar"})]})},Tt=()=>{const[t,n]=o.useState(null),s=o.useRef(null),a=Be(),r=o.useCallback(()=>{n(null)},[]);o.useEffect(()=>{n(a?s.current:null)},[a]);const l=o.useCallback(({currentTarget:i})=>{n(i)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(Ze,{children:e.jsx(ie,{ref:s,onClick:l,sx:{background:({palette:i})=>i.secondary.main,zIndex:500},className:"dragableMenu",children:e.jsx(ve,{fontSize:"large"})})}),e.jsxs(se,{className:"menuDragable",anchorEl:t,open:!!t,onClose:r,children:[e.jsx(qe,{}),e.jsx(Ft,{}),e.jsx(At,{})]})]})},Dt=()=>{const t=ee(),n=Ye(),[s,a]=o.useState(),[r]=Je(s,1e3),l=o.useMemo(()=>t&&n,[t,n]),i=o.useCallback(({target:h})=>{a(h.value)},[]);return o.useEffect(()=>{a(""),K()},[t,n]),o.useEffect(()=>{K(r)},[r]),e.jsx(We,{value:s,disabled:!l,onChange:i,startAdornment:e.jsx(_e,{})})};function nn(){return e.jsxs(e.Fragment,{children:[e.jsxs(g,{gap:3,children:[e.jsxs(m,{children:[e.jsx(Se,{})," Activa o desactiva los switches dependiendo si deseas habilitar la regla o no"]}),e.jsxs(m,{children:[e.jsx(ke,{})," Recuerda que los estados que propongas no se aplicarán de inmediato en SonarQube"]})]}),e.jsx(g,{direction:"column",gap:4,marginTop:4,children:e.jsxs(R,{display:"flex",gap:4,children:[e.jsx(nt,{}),e.jsx(st,{}),e.jsx(Dt,{})]})}),e.jsx(St,{}),e.jsx(kt,{content:e.jsx(Tt,{})})]})}export{nn as default};
