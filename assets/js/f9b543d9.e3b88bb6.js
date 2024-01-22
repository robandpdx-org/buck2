"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3476],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>l});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=r.createContext({}),l=function(e){return function(n){var t=d(n.components);return r.createElement(e,o({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(t),m=s,f=l["".concat(a,".").concat(m)]||l[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[f]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(87462),s=(t(67294),t(3905));const o={id:"subscribe",title:"subscribe"},a=void 0,i={unversionedId:"users/commands/subscribe",id:"users/commands/subscribe",title:"subscribe",description:"These are the flags/commands under buck2 subscribe and their --help output:",source:"@site/../docs/users/commands/subscribe.generated.md",sourceDirName:"users/commands",slug:"/users/commands/subscribe",permalink:"/docs/users/commands/subscribe",draft:!1,tags:[],version:"current",frontMatter:{id:"subscribe",title:"subscribe"},sidebar:"manualSidebar",previous:{title:"status",permalink:"/docs/users/commands/status"},next:{title:"targets",permalink:"/docs/users/commands/targets"}},c={},u=[{value:"buck subscribe",id:"buck-subscribe",level:2}],l={toc:u};function d(e){let{components:n,...t}=e;return(0,s.mdx)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"These are the flags/commands under ",(0,s.mdx)("inlineCode",{parentName:"p"},"buck2 subscribe")," and their ",(0,s.mdx)("inlineCode",{parentName:"p"},"--help")," output:"),(0,s.mdx)("h2",{id:"buck-subscribe"},"buck subscribe"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"buck2-release-subscribe \nOpen a subscription channel to the Buck2 daemon. This allows you to interact with the Buck2 daemon\nvia the `stdin` and `stdout` of this command: you send requests to the daemon by writing to `stdin`,\nand you get responses via `stdout`.\n\nThe protocol used by this command is length-prefixed protobuf. This format is a repeated series of a\nvarint followed by a record of the length indicated by said varint.\n\nThe protobuf spec for those records is described in `buck2_subscription_proto/subscription.proto`.\nThe client writes `SubscriptionRequest` and reads `SubscriptionResponse`. See the documentation in\n`subscription.proto` to discover available APIs.\n\nThis API does not (currently) allow invalid requests and will error out when one is sent.\n\nUSAGE:\n    buck2-release subscribe [OPTIONS]\n\nOPTIONS:\n        --active-commands\n            Whether to request command snapshots\n\n    -c, --config <SECTION.OPTION=VALUE>\n            List of config options\n\n        --client-metadata <CLIENT_METADATA>\n            Metadata key-value pairs to inject into Buck2's logging. Client metadata must be of the\n            form `key=value`, where `key` is a snake_case identifier, and will be sent to backend\n            datasets\n\n        --config-file <PATH>\n            List of config file paths\n\n        --disable-starlark-types\n            Disable runtime type checking in Starlark interpreter.\n            \n            This option is not stable, and can be used only locally to diagnose evaluation\n            performance problems.\n\n        --event-log <PATH>\n            Write events to this log file\n\n        --exit-when-different-state\n            Used for exiting a concurrent command when a different state is detected\n\n        --fake-arch <ARCH>\n            [possible values: default, aarch64, x8664]\n\n        --fake-host <HOST>\n            [possible values: default, linux, macos, windows]\n\n        --fake-xcode-version <VERSION-BUILD>\n            Value must be formatted as: version-build (e.g., 14.3.0-14C18 or 14.1-14B47b)\n\n    -h, --help\n            Print help information\n\n    -m, --modifier <VALUE>\n            A configuration modifier to configure all targets on the command line. This may be a\n            constraint value target.\n\n        --oncall <ONCALL>\n            The oncall executing this command\n\n        --reuse-current-config\n            Re-uses any `--config` values (inline or via modefiles) if there's a previous command,\n            otherwise the flag is ignored.\n            \n            If there is a previous command and `--reuse-current-config` is set, then the old config\n            is used, ignoring any overrides.\n            \n            If there is no previous command but the flag was set, then the flag is ignored, the\n            command behaves as if the flag was not set at all.\n\n        --skip-targets-with-duplicate-names\n            If there are targets with duplicate names in `BUCK` file, skip all the duplicates but\n            the first one. This is a hack for TD. Do not use this option\n\n        --stack\n            Record or show target call stacks.\n            \n            Starlark call stacks will be included in duplicate targets error.\n            \n            If a command outputs targets (like `targets` command), starlark call stacks will be\n            printed after the targets.\n\n        --target-platforms <PLATFORM>\n            Configuration target (one) to use to configure targets\n\n        --unstable-json\n            Whether to get output as JSON. The JSON format is deemed unstable so this should only be\n            used for debugging\n\n        --unstable-write-invocation-record <PATH>\n            Write the invocation record (as JSON) to this path. No guarantees whatsoever are made\n            regarding the stability of the format\n\n    -v, --verbose <VERBOSITY>\n            How verbose buck should be while logging.\n            \n            Values: 0 = Quiet, errors only; 1 = Show status. Default; 2 = more info about errors; 3\n            = more info about everything; 4 = more info about everything + stderr;\n            \n            It can be combined with specific log items (stderr, full_failed_command, commands,\n            actions, status, stats, success) to fine-tune the verbosity of the log. Example usage\n            \"-v=1,stderr\"\n            \n            [default: 1]\n\n        --write-build-id <PATH>\n            Write command invocation id into this file\n\n")))}d.isMDXComponent=!0}}]);