"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[861],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>s});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,m=s["".concat(o,".").concat(u)]||s[u]||h[u]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},13609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"glossary",title:"Glossary of Terms",toc_max_heading_level:4},o=void 0,l={unversionedId:"concepts/glossary",id:"concepts/glossary",title:"Glossary of Terms",description:".buckconfig",source:"@site/../docs/concepts/glossary.md",sourceDirName:"concepts",slug:"/concepts/glossary",permalink:"/docs/concepts/glossary",draft:!1,tags:[],version:"current",frontMatter:{id:"glossary",title:"Glossary of Terms",toc_max_heading_level:4},sidebar:"manualSidebar",previous:{title:"Configurations",permalink:"/docs/concepts/configurations"},next:{title:"aquery",permalink:"/docs/users/commands/aquery"}},d={},p=[{value:".buckconfig",id:"buckconfig",level:4},{value:"Action",id:"action",level:4},{value:"Action graph",id:"action-graph",level:4},{value:"Artifact",id:"artifact",level:4},{value:"Attribute",id:"attribute",level:4},{value:"BUCK file",id:"buck-file",level:4},{value:"BXL",id:"bxl",level:4},{value:"Cell",id:"cell",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Configured graph",id:"configured-graph",level:4},{value:"Daemon",id:"daemon",level:4},{value:"Dependency",id:"dependency",level:4},{value:"Execution platform",id:"execution-platform",level:4},{value:"Hybrid execution",id:"hybrid-execution",level:4},{value:"Isolation dir",id:"isolation-dir",level:4},{value:"Package",id:"package",level:4},{value:"Prelude",id:"prelude",level:4},{value:"Project",id:"project",level:4},{value:"Provider",id:"provider",level:4},{value:"Remote execution (RE)",id:"remote-execution-re",level:4},{value:"Rule",id:"rule",level:4},{value:"Starlark",id:"starlark",level:4},{value:"Target",id:"target",level:4},{value:"Target label",id:"target-label",level:4},{value:"Target pattern",id:"target-pattern",level:4},{value:"Target universe",id:"target-universe",level:4},{value:"Transition",id:"transition",level:4},{value:"Unconfigured graph",id:"unconfigured-graph",level:4},{value:"Visibility",id:"visibility",level:4}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h4",{id:"buckconfig"},".buckconfig"),(0,r.mdx)("p",null,"The root of your ",(0,r.mdx)("a",{parentName:"p",href:"#project"},"project")," must contain a configuration file named\n",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig"),". Before executing, Buck2 reads this file to incorporate specified\ncustomizations. See ",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/buckconfig"},".buckconfig")," for more info."),(0,r.mdx)("h4",{id:"action"},"Action"),(0,r.mdx)("p",null,"An individual, cacheable, ideally hermetic command that's run during the\n",(0,r.mdx)("a",{parentName:"p",href:"#buck-file"},"build"),". It takes ",(0,r.mdx)("a",{parentName:"p",href:"#artifact"},"artifacts")," as inputs and produces\nother artifacts as outputs. An example command could be ",(0,r.mdx)("inlineCode",{parentName:"p"},"gcc -o main main.c"),",\nwhich takes the artifact ",(0,r.mdx)("inlineCode",{parentName:"p"},"main.c")," (a source file) and produces the artifact\ncalled ",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," (the compiled binary)."),(0,r.mdx)("h4",{id:"action-graph"},"Action graph"),(0,r.mdx)("p",null,"The dependency graph of all ",(0,r.mdx)("a",{parentName:"p",href:"#action"},"actions")," belonging to a target: it can be\nqueried with ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 aquery"),"."),(0,r.mdx)("h4",{id:"artifact"},"Artifact"),(0,r.mdx)("p",null,"A single input or output of an ",(0,r.mdx)("a",{parentName:"p",href:"#action"},"action"),". These are files that\nparticipate as inputs or outputs of a build and can be source files or build\noutputs. For more information, see the\n",(0,r.mdx)("a",{parentName:"p",href:"https://buck2.build/docs/api/build/Artifact/"},"Artifact API"),"."),(0,r.mdx)("h4",{id:"attribute"},"Attribute"),(0,r.mdx)("p",null,"Declared by a ",(0,r.mdx)("a",{parentName:"p",href:"#rule"},"rule")," and used to express the properties of a particular\ninstance of a rule to create a ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"target"),". For example, srcs, deps and\ncopts, which declare a target's source files, dependencies, and custom compiler\noptions, respectively. The available attributes for a target depend on its rule\ntype."),(0,r.mdx)("h4",{id:"buck-file"},"BUCK file"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file (the name is configurable, some projects use ",(0,r.mdx)("inlineCode",{parentName:"p"},"TARGETS"),") is the\nmain configuration file that tells Buck2 what to build, what their dependencies\nare, and how to build them. Buck2 takes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file as input and evaluates the\nfile to declare ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"targets"),", which are then used to create a graph of\ndependencies and to derive the ",(0,r.mdx)("a",{parentName:"p",href:"#action"},"actions")," that must be completed to\nbuild intermediate and final software outputs. A ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file marks a directory\nand any sub-directories not containing a ",(0,r.mdx)("inlineCode",{parentName:"p"},"BUCK")," file as a ",(0,r.mdx)("a",{parentName:"p",href:"#package"},"package"),"."),(0,r.mdx)("h4",{id:"bxl"},"BXL"),(0,r.mdx)("p",null,"BXL (",(0,r.mdx)("a",{parentName:"p",href:"https://buck2.build/docs/developers/bxl"},"Buck eXtension Language"),") scripts\nare written in ",(0,r.mdx)("a",{parentName:"p",href:"#starlark"},"Starlark")," (a restricted subset of Python) and give\nintegrators the ability to inspect and interact directly with the buck2 graph."),(0,r.mdx)("p",null,"BXL scripts can query the ",(0,r.mdx)("a",{parentName:"p",href:"#action-graph"},"action graph"),",\n",(0,r.mdx)("a",{parentName:"p",href:"#configured-graph"},"configured graph"),", and\n",(0,r.mdx)("a",{parentName:"p",href:"#unconfigured-graph"},"unconfigured graph"),". They can also create\n",(0,r.mdx)("a",{parentName:"p",href:"#action"},"actions")," and trigger builds."),(0,r.mdx)("h4",{id:"cell"},"Cell"),(0,r.mdx)("p",null,"The directory tree of one or more Buck2 ",(0,r.mdx)("a",{parentName:"p",href:"#package"},"packages"),". A Buck2 build can\ninvolve multiple cells. The cell root always contains a\n",(0,r.mdx)("a",{parentName:"p",href:"#buckconfig"},".buckconfig"),", although the presence of a .buckconfig file doesn't\nin itself define a cell. Rather, the cells involved in a build are defined at\nthe time Buck2 is invoked; they are specified in the .buckconfig for the Buck\n",(0,r.mdx)("a",{parentName:"p",href:"#project"},"project"),"."),(0,r.mdx)("h4",{id:"configuration"},"Configuration"),(0,r.mdx)("p",null,"Configurations consist of a set of 'constraint values' that are used to resolve\n",(0,r.mdx)("inlineCode",{parentName:"p"},"select")," ",(0,r.mdx)("a",{parentName:"p",href:"#attribute"},"attributes")," prior to evaluating ",(0,r.mdx)("a",{parentName:"p",href:"#rule"},"rule"),"\nimplementations: the attribute takes the value of the first branch in the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"select")," that matches the configuration."),(0,r.mdx)("p",null,"Configurations are instantiated by rules that produce a ",(0,r.mdx)("inlineCode",{parentName:"p"},"PlatformInfo"),"\n",(0,r.mdx)("a",{parentName:"p",href:"#provider"},"provider"),". Once created, targets can receive their configuration\nthrough a variety of mechanisms, such as:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Inheritance - by default, when following a dependency edge A -> B, B inherits\nA's configuration."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"default_target_platform")," attribute and ",(0,r.mdx)("inlineCode",{parentName:"li"},"--target-platforms")," command line\nflag."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#transition"},"Transitions")," (see below).")),(0,r.mdx)("p",null,"Configurations allow a single target to exist in multiple variants in the\nconfigured graph (for example, to build a given binary at differing optimization\nlevels or targeting different CPU architectures)."),(0,r.mdx)("h4",{id:"configured-graph"},"Configured graph"),(0,r.mdx)("p",null,"The configured target graph is generated by configuring target nodes in the\n",(0,r.mdx)("a",{parentName:"p",href:"#unconfigured-graph"},"unconfigured target graph"),". That is, ",(0,r.mdx)("inlineCode",{parentName:"p"},"selects")," are fully\nresolved and configurations applied. The configured graph includes information\nabout the ",(0,r.mdx)("a",{parentName:"p",href:"#configuration"},"configurations")," and ",(0,r.mdx)("a",{parentName:"p",href:"#transition"},"transitions"),"\ninvolved in building targets. The same target may appear in multiple different\nconfigurations (when printed, the configuration is after the target in\nparentheses)."),(0,r.mdx)("h4",{id:"daemon"},"Daemon"),(0,r.mdx)("p",null,"The Daemon process lives between invocations and is designed to allow for cache\nreuse between Buck2 invocations, which can considerably speed up builds. For\nmore information, see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/daemon"},"Daemon (buckd)"),"."),(0,r.mdx)("h4",{id:"dependency"},"Dependency"),(0,r.mdx)("p",null,"A directed edge between two ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"targets"),". A target ",(0,r.mdx)("inlineCode",{parentName:"p"},"A")," can have a\ndependency on target ",(0,r.mdx)("inlineCode",{parentName:"p"},"B"),", for example, if any ",(0,r.mdx)("inlineCode",{parentName:"p"},"dep")," attribute of ",(0,r.mdx)("inlineCode",{parentName:"p"},"A")," mentions\n",(0,r.mdx)("inlineCode",{parentName:"p"},"B"),". A target's dependence on another target is determined by the\n",(0,r.mdx)("a",{parentName:"p",href:"#visibility"},"visibility")," of the latter."),(0,r.mdx)("h4",{id:"execution-platform"},"Execution platform"),(0,r.mdx)("p",null,"A type of ",(0,r.mdx)("a",{parentName:"p",href:"#rule"},"rule")," that includes information such as what execution types a\n",(0,r.mdx)("a",{parentName:"p",href:"#target"},"target")," supports, which can be ",(0,r.mdx)("a",{parentName:"p",href:"#remote-execution-re"},"remote"),", local,\nand ",(0,r.mdx)("a",{parentName:"p",href:"#hybrid-execution"},"hybrid")," execution. Also, whether it supports cache\nuploads, which allows users to get cache hits for things that executed locally."),(0,r.mdx)("h4",{id:"hybrid-execution"},"Hybrid execution"),(0,r.mdx)("p",null,"Enables shifting work to the local host when available parallelism in the build\nis low. This enables users to save on ",(0,r.mdx)("a",{parentName:"p",href:"#remote-execution-re"},"remote execution"),"\nroundtrips to enable faster builds."),(0,r.mdx)("h4",{id:"isolation-dir"},"Isolation dir"),(0,r.mdx)("p",null,"Instances of Buck2 share a ",(0,r.mdx)("a",{parentName:"p",href:"#daemon"},"daemon")," if and only if their isolation\ndirectory is identical. The isolation directory also influences the output paths\nprovided by Buck2."),(0,r.mdx)("h4",{id:"package"},"Package"),(0,r.mdx)("p",null,"A directory that contains a Buck2 ",(0,r.mdx)("a",{parentName:"p",href:"#buck-file"},"BUCK file")," and all source files\nbelonging to the same directory as the BUCK file, or any of its subdirectories\nthat do not contain a BUCK file themselves."),(0,r.mdx)("h4",{id:"prelude"},"Prelude"),(0,r.mdx)("p",null,"The prelude is a unique ",(0,r.mdx)("inlineCode",{parentName:"p"},".bzl")," file located at ",(0,r.mdx)("inlineCode",{parentName:"p"},"prelude//prelude.bzl"),". Buck2\nimplicitly loads all the symbols defined in the prelude whenever it loads a\n",(0,r.mdx)("a",{parentName:"p",href:"#buck-file"},(0,r.mdx)("inlineCode",{parentName:"a"},"BUCK"))," file. Symbols defined outside the prelude can be imported\nvia a ",(0,r.mdx)("inlineCode",{parentName:"p"},"load()")," statement."),(0,r.mdx)("p",null,"When you create a Buck2 project using ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 init --git"),", it will contain the\nsame prelude used internally at Meta by Buck2 users. It is viewable at\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/tree/main/prelude"},"https://github.com/facebook/buck2/tree/main/prelude"),"."),(0,r.mdx)("h4",{id:"project"},"Project"),(0,r.mdx)("p",null,"The Outermost directory where there is a ",(0,r.mdx)("a",{parentName:"p",href:"#buckconfig"},".buckconfig"),": also known\nas the ",(0,r.mdx)("a",{parentName:"p",href:"#cell"},"root cell"),". The .buckconfig for the project specifies the\n",(0,r.mdx)("a",{parentName:"p",href:"#cell"},"cells")," that constitute the Buck2 project. Specifically, these cells are\nspecified in the '","[repositories]","' section of the ",(0,r.mdx)("inlineCode",{parentName:"p"},".buckconfig"),". All command\ninvocations are executed from the project root."),(0,r.mdx)("h4",{id:"provider"},"Provider"),(0,r.mdx)("p",null,"Data returned from a ",(0,r.mdx)("a",{parentName:"p",href:"#rule"},"rule")," function. It's the only way that information\nfrom this rule is available to other rules that depend on it (see\n",(0,r.mdx)("a",{parentName:"p",href:"#dependency"},"dependency"),"). Every rule must return at least the ",(0,r.mdx)("inlineCode",{parentName:"p"},"DefaultInfo"),"\nprovider. A common case is to also return either ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo")," (because they are\nexecutable) or custom providers that the dependents rule can use. For more\ninformation, see\n",(0,r.mdx)("a",{parentName:"p",href:"https://buck2.build/docs/rule_authors/writing_rules/#providers"},"Providers"),"."),(0,r.mdx)("h4",{id:"remote-execution-re"},"Remote execution (RE)"),(0,r.mdx)("p",null,"Distributed execution of ",(0,r.mdx)("a",{parentName:"p",href:"#action"},"actions")," on remote workers. It can speed up\nbuilds significantly by scaling the nodes available for parallel actions, and by\ncaching action outputs across Buck2 users."),(0,r.mdx)("h4",{id:"rule"},"Rule"),(0,r.mdx)("p",null,"A rule consists of an attribute spec and an implementation, which is a\n",(0,r.mdx)("a",{parentName:"p",href:"#starlark"},"Starlark")," function."),(0,r.mdx)("p",null,"The attribute spec declares what attributes the rule expects to receive. The\nrule implementation receives the ",(0,r.mdx)("a",{parentName:"p",href:"#attribute"},"attributes")," of a ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"target"),"\nand the ",(0,r.mdx)("a",{parentName:"p",href:"#provider"},"providers")," of its ",(0,r.mdx)("a",{parentName:"p",href:"#dependency"},"dependencies"),". It can\ndeclare new ",(0,r.mdx)("a",{parentName:"p",href:"#action"},"actions")," and ",(0,r.mdx)("a",{parentName:"p",href:"#artifact"},"artifacts")," and must return\n",(0,r.mdx)("a",{parentName:"p",href:"#provider"},"providers")," that can be used to pass data to its dependents or to\nBuck2 itself."),(0,r.mdx)("p",null,"Rules are instantiated in ",(0,r.mdx)("a",{parentName:"p",href:"#buck-file"},"BUCK files")," to declare targets and set\ntheir attributes. The rule implementation is called when Buck2 needs its\nproviders, which can happen when the target is built, or when one of its\ndependents is."),(0,r.mdx)("p",null,"As an example, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cxx_binary")," rule could be used to create a C++ binary, but\n",(0,r.mdx)("inlineCode",{parentName:"p"},"android_binary")," rule would be used to create an Android APK"),(0,r.mdx)("h4",{id:"starlark"},"Starlark"),(0,r.mdx)("p",null,"Starlark is a dialect of Python originally developed by Google for the\n",(0,r.mdx)("a",{parentName:"p",href:"https://bazel.build/rules/language"},"Bazel build tool"),". It is the configuration\nlanguage of the Buck2 build system and the language you use in ",(0,r.mdx)("inlineCode",{parentName:"p"},".bzl")," and\n",(0,r.mdx)("a",{parentName:"p",href:"#buck-file"},(0,r.mdx)("inlineCode",{parentName:"a"},"BUCK")," files")," to define and instantiate ",(0,r.mdx)("a",{parentName:"p",href:"#rule"},"rules"),"."),(0,r.mdx)("p",null,"There are many reasons why Meta has chosen Starlark, as detailed in\n",(0,r.mdx)("a",{parentName:"p",href:"https://developers.facebook.com/blog/post/2021/04/08/rust-starlark-library/"},"The Rust Starlark library"),"\narticle."),(0,r.mdx)("p",null,"The Buck2 project maintains and uses an open source\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebookexperimental/starlark-rust"},"Starlark interpreter in Rust"),"."),(0,r.mdx)("h4",{id:"target"},"Target"),(0,r.mdx)("p",null,"An object that is defined in a ",(0,r.mdx)("a",{parentName:"p",href:"#buck-file"},"BUCK file"),". Targets represent the\nbuildable units of a build from the perspective of the end user. Declared by\ninstantiating a ",(0,r.mdx)("a",{parentName:"p",href:"#rule"},"rule")," with attributes. A target has\n",(0,r.mdx)("a",{parentName:"p",href:"#dependency"},"dependencies"),", which are references to other targets."),(0,r.mdx)("h4",{id:"target-label"},"Target label"),(0,r.mdx)("p",null,"The identifier for a ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"target"),". Structured as\n",(0,r.mdx)("inlineCode",{parentName:"p"},"cellAlias//path/to/package:target"),", where ",(0,r.mdx)("inlineCode",{parentName:"p"},"cellAlias//")," maps to a\n",(0,r.mdx)("a",{parentName:"p",href:"#cell"},"cell root")," path (as defined in the ",(0,r.mdx)("a",{parentName:"p",href:"#buckconfig"},"./buckconfig")," of the\ncell this target belongs to), ",(0,r.mdx)("inlineCode",{parentName:"p"},"path/to/package")," is the ",(0,r.mdx)("a",{parentName:"p",href:"#package"},"package"),"\ndirectory that contains the ",(0,r.mdx)("a",{parentName:"p",href:"#buck-file"},"BUCK file")," declaring the target\n(relative to the mapped cell alias), and ",(0,r.mdx)("inlineCode",{parentName:"p"},":target")," is the target's name."),(0,r.mdx)("h4",{id:"target-pattern"},"Target pattern"),(0,r.mdx)("p",null,"A string that resolves to a set of ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"targets"),". They can be used as\narguments to commands such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 build")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 uquery"),". They can also be\nused in the ",(0,r.mdx)("a",{parentName:"p",href:"#visibility"},"visibility")," argument of a ",(0,r.mdx)("a",{parentName:"p",href:"#rule"},"rule"),". For more\ninformation, see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/target_pattern"},"Target pattern"),"."),(0,r.mdx)("h4",{id:"target-universe"},"Target universe"),(0,r.mdx)("p",null,"A set of configured targets and their transitive deps. In the context of cquery\nand build in the Buck2 CLI, any literals are resolved to all matching targets\nwithin the universe. Target universe can be passed explicitly on the Buck2 CLI\nvia ",(0,r.mdx)("inlineCode",{parentName:"p"},"--target-universe"),". If omitted, the target universe will be inferred by\nconstructing a universe using all the target literals (and their transitive\ndeps) within the query string for cquery."),(0,r.mdx)("h4",{id:"transition"},"Transition"),(0,r.mdx)("p",null,"Allows the ",(0,r.mdx)("a",{parentName:"p",href:"#configuration"},"configuration")," to change across a\n",(0,r.mdx)("a",{parentName:"p",href:"#dependency"},"dependency")," edge. That is, normally, if ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"target")," A\ndepends on target B, then if the configuration for A is X, then B is configured\nusing X too. By using a transition, you can produce X to configure B instead."),(0,r.mdx)("h4",{id:"unconfigured-graph"},"Unconfigured graph"),(0,r.mdx)("p",null,"A graph of ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"targets")," before ",(0,r.mdx)("a",{parentName:"p",href:"#configuration"},"configurations")," are\napplied. Can be queried via ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 uquery"),"."),(0,r.mdx)("h4",{id:"visibility"},"Visibility"),(0,r.mdx)("p",null,"Determines whether a ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"target")," can include another ",(0,r.mdx)("a",{parentName:"p",href:"#target"},"target")," as\nits ",(0,r.mdx)("a",{parentName:"p",href:"#dependency"},"dependency"),". For more information, see\n",(0,r.mdx)("a",{parentName:"p",href:"/docs/concepts/visibility"},"Visibility"),"."))}c.isMDXComponent=!0}}]);