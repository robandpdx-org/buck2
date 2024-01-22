"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4184],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){return function(n){var t=m(n.components);return a.createElement(e,o({},n,{components:t}))}},m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(t),c=r,u=d["".concat(i,".").concat(c)]||d[c]||h[c]||o;return t?a.createElement(u,l(l({ref:n},p),{},{components:t})):a.createElement(u,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},56281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={},i="Bxl support for performing analysis on targets",l={unversionedId:"rfcs/bxl-analysis",id:"rfcs/bxl-analysis",title:"Bxl support for performing analysis on targets",description:"Intro",source:"@site/../docs/rfcs/bxl-analysis.md",sourceDirName:"rfcs",slug:"/rfcs/bxl-analysis",permalink:"/docs/rfcs/bxl-analysis",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"How to implement it?",id:"how-to-implement-it",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"bxl-support-for-performing-analysis-on-targets"},"Bxl support for performing analysis on targets"),(0,r.mdx)("h2",{id:"intro"},"Intro"),(0,r.mdx)("p",null,"As Bob and I continue to build out ",(0,r.mdx)("inlineCode",{parentName:"p"},"bxl")," we want users to be able to inspect the\nproviders and actions for a given target label. In order to support this, we\nneed to be able to provide access to ",(0,r.mdx)("inlineCode",{parentName:"p"},"AnalysisResult")," via ",(0,r.mdx)("inlineCode",{parentName:"p"},"starlark"),", obtained\nvia a call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"RuleAnalysisCalculation::get_analysis_result"),"."),(0,r.mdx)("h2",{id:"how-to-implement-it"},"How to implement it?"),(0,r.mdx)("p",null,"Our three principle options are as follows:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"BxlContext::analyze(targetlabel: ConfiguredTargetLabelLike)"),", where\n",(0,r.mdx)("inlineCode",{parentName:"li"},"ConfiguredTargetLabelLike")," accepts ",(0,r.mdx)("inlineCode",{parentName:"li"},"ConfiguredTargetLabel"),",\n",(0,r.mdx)("inlineCode",{parentName:"li"},"ConfiguredTargetNode"),", or sets and lists of these things + acceptable\nstrings.")),(0,r.mdx)("p",null,"In this scenario, we attach the analysis method onto the bxl context itself, and\nrequire that users pass in the target label-ish thing when they want to\nconstruct an analysis result. It's a little awkward in some ways because the\nanalysis is more naturally a method on the argument being passed in and the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"BxlContext")," is a context that is needed to perform the calculation. On the\nother hand, this allows us to construct a type analogous to ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetExpr")," which\ncan parse from a wide variety of different ",(0,r.mdx)("inlineCode",{parentName:"p"},"ConfiguredTarget")," like things\n(strings, nodes, labels, sets, ...). It also is a bit nice from an\nimplementational standpoint since we don't have to pass the context around\neverywhere. This isn't a huge pro though, since we can stick it in the global\neval field."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'result = bxl.analyze(bxl.cquery.deps("foo"))\n')),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"ConfiguredTargetLabel::analyze()"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"ConfiguredTargetNode::analyze()"),", ...\nwhere we carry around the ",(0,r.mdx)("inlineCode",{parentName:"li"},"BxlContext")," in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"eval")," global field and\nimplement analysis on each type that is target label like.")),(0,r.mdx)("p",null,"The pro of this one is that it's quite natural - you can take a\n",(0,r.mdx)("inlineCode",{parentName:"p"},"ConfiguredStarlarkTargetLabel")," and then just ... call ",(0,r.mdx)("inlineCode",{parentName:"p"},"analyze()")," on it like\nyou might expect to. The two downsides are that we have to propagate the context\naround behind the scenes, and we'll have to provide an implementation of\n",(0,r.mdx)("inlineCode",{parentName:"p"},"analyze")," on everything that we'd like to have be able to be ",(0,r.mdx)("inlineCode",{parentName:"p"},"analyzable"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'result = "root//bin:the_binary".analyze()\n# but we don\'t support\n"root//bin:the_binary".rdeps()\n\n\n# instead this looks nice\nnodes = ctx.cquery.deps("foo")\nfor n in nodes:\n  # since we can now do\n  nodes.label\n  nodes.attrs.field\n\n  # similarly access analysis\n  nodes.analysis\n')),(0,r.mdx)("ol",{start:3},(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"BxlContext::analysis(): AnalysisContext")," where ",(0,r.mdx)("inlineCode",{parentName:"li"},"AnalysisContext")," exposes\n",(0,r.mdx)("inlineCode",{parentName:"li"},"AnalysisContext::analyze(targetlabel: ConfiguredTargetLabelLike)"),".")),(0,r.mdx)("p",null,"There's not really any pros of this approach except that it's similar to the\nflow for ",(0,r.mdx)("inlineCode",{parentName:"p"},"cquery")," where we return a ",(0,r.mdx)("inlineCode",{parentName:"p"},"cqueryctx")," object to call ",(0,r.mdx)("inlineCode",{parentName:"p"},"cquery")," methods\nthrough."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'result = ctx.analysis().analyze("//lib:file1")\n')),(0,r.mdx)("p",null,"We can also restrict the API to require that users go through ",(0,r.mdx)("inlineCode",{parentName:"p"},"cquery")," to obtain\na ",(0,r.mdx)("inlineCode",{parentName:"p"},"ConfiguredTargetNode")," prior to calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"analysis"),", although we don't ",(0,r.mdx)("em",{parentName:"p"},"have\nto"),". I say that we don't have to because the ",(0,r.mdx)("inlineCode",{parentName:"p"},"get_analysis_result")," method\nmentioned above is configured to accept a label anyway."))}m.isMDXComponent=!0}}]);