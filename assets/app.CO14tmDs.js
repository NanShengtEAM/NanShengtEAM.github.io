import{R as p}from"./chunks/theme.DrzHULya.js";import{R as o,a8 as u,a9 as c,aa as l,d as f,u as d,v as m,s as h,ab as g,ac as A,ad as v,a6 as P,ae as R,af as w,ag as y,ah as C,ai as b,aj as E,ak as S}from"./chunks/framework.BUl2sX5_.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(p),T=f({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=d();return m(()=>{h(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&g(),A(),v(),s.setup&&s.setup(),()=>P(s.Layout)}});async function j(){globalThis.__VITEPRESS__=!0;const e=_(),a=D();a.provide(R,e);const t=w(e.route);return a.provide(y,t),a.component("Content",C),a.component("ClientOnly",b),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:E}),{app:a,router:e,data:t}}function D(){return l(T)}function _(){let e=o,a;return u(t=>{let n=c(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{S(a.route,t.site),e.mount("#app")})});export{j as createApp};
