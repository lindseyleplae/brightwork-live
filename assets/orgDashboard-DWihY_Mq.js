import{d as u,a0 as o}from"./index-C38m1I6j.js";import{i as c,s as e}from"./supabase-Bjy4e3fb.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=u("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),r=new Map;async function g(n){const a=n.trim();if(!a)return{status:"not_found"};if(!c||!e)return{status:"unavailable"};const i=r.get(a);if(i)return i;const s=l(a);return r.set(a,s),s}async function l(n){const a=e;if(!a)return{status:"unavailable"};try{const{data:i,error:s}=await a.rpc("org_applications",{p_token:n}),t=i;return s||t!=null&&t.error?{status:"unavailable"}:(t==null?void 0:t.found)===!1?{status:"not_found"}:!(t!=null&&t.found)||!t.listing?{status:"unavailable"}:{status:"ready",listing:t.listing,applications:Array.isArray(t.applications)?t.applications:[]}}catch{return{status:"unavailable"}}}function y(n){return o(`manage/${encodeURIComponent(n)}`)}export{p as C,g as f,y as m};
