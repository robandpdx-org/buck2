"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1821],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){return function(n){var t=p(n.components);return r.createElement(e,i({},n,{components:t}))}},p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={id:"init",title:"init"},a=void 0,s={unversionedId:"users/commands/init",id:"users/commands/init",title:"init",description:"These are the flags/commands under buck2 init and their --help output:",source:"@site/../docs/users/commands/init.generated.md",sourceDirName:"users/commands",slug:"/users/commands/init",permalink:"/docs/users/commands/init",draft:!1,tags:[],version:"current",frontMatter:{id:"init",title:"init"},sidebar:"manualSidebar",previous:{title:"help-env",permalink:"/docs/users/commands/help-env"},next:{title:"install",permalink:"/docs/users/commands/install"}},c={},l=[{value:"buck init",id:"buck-init",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"These are the flags/commands under ",(0,o.mdx)("inlineCode",{parentName:"p"},"buck2 init")," and their ",(0,o.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,o.mdx)("h2",{id:"buck-init"},"buck init"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-init \nBuck2 Init\n\nThis command is intended to be part-tutorial part-convenience for generating buck2 projects. Given a\npath and optional name (in the case that the folder name is not desirable).\n\nUSAGE:\n    buck2-release init [OPTIONS] [--] [PATH]\n\nARGS:\n    <PATH>\n            The path to initialize the project in. The folder does not need to exist\n            \n            [default: .]\n\nOPTIONS:\n        --allow-dirty\n            Initialize the project even if the git repo at \\[PATH\\] has uncommitted changes\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --console <super|simple|...>\n            Which console to use for this command\n            \n            [env: BUCK_CONSOLE=]\n            [default: auto]\n            [possible values: simple, simplenotty, simpletty, super, auto, none]\n\n        --git\n            \n\n    -h, --help\n            Print help information\n\n    -n, --name <NAME>\n            The name for the project. If not provided will default to the last segment of the path\n\n        --no-interactive-console\n            Disable console interactions\n            \n            [env: BUCK_NO_INTERACTIVE_CONSOLE=]\n\n        --no-prelude\n            Don't generate a prelude or a toolchain\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --ui <UI>\n            Configure additional superconsole ui components.\n            \n            Accepts a comma-separated list of superconsole components to add. Possible values are:\n            \n            dice - shows information about evaluated dice nodes debugevents - shows information\n            about the flow of events from buckd\n            \n            These components can be turned on/off interactively. Press 'h' for help when\n            superconsole is active.\n            \n            [possible values: dice, debugevents, io, re]\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n")))}p.isMDXComponent=!0}}]);