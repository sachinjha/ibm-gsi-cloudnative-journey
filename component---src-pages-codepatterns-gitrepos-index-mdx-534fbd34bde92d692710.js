(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var i=a("pOBw"),o=a("q1tI"),n=a.n(o),s=a("NmYn"),c=a.n(s),r=a("OKom"),b=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),g=a("qKvR"),u=function(e){var t,a=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(g.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.text},a)))))},A=a("pEPl"),d=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=A.data.site.siteMetadata.repository,o=a||i,n=o.baseUrl,s=o.subDirectory,c=n+"/edit/"+o.branch+s+"/src/pages"+t;return n?Object(g.b)("div",{className:"bx--row "+d.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:d.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),O=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var f=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),n=o===i,s=new RegExp(i+"(?!-)"),r=a.replace(s,o);return Object(g.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=n,t),v.listItem)},Object(g.b)(O.Link,{className:v.link,to:""+r},e))}));return Object(g.b)("div",{className:v.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:v.list},o))))))},i}(n.a.Component),j=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,s=t.frontmatter,l=void 0===s?{}:s,p=t.relativePagePath,m=t.titleType,A=l.tabs,d=l.title,O=l.theme,v=l.description,B=l.keywords,N=i.data.site.pathPrefix,C=N?o.pathname.replace(N,""):o.pathname,T=A?C.split("/").filter(Boolean).slice(-1)[0]||c()(A[0],{lower:!0}):"";return Object(g.b)(b.a,{tabs:A,homepage:!1,theme:O,pageTitle:d,pageDescription:v,pageKeywords:B,titleType:m},Object(g.b)(u,{title:n?Object(g.b)(n,null):d,label:"label",tabs:A}),A&&Object(g.b)(f,{slug:C,tabs:A,currentTab:T}),Object(g.b)(j.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:p})),Object(g.b)(y.a,{pageContext:t,location:o,slug:C,tabs:A,currentTab:T}),Object(g.b)(r.a,null))}},"4eu9":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return A}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),o=a("013z");a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var s={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},r=c("AnchorLinks"),b=c("AnchorLink"),l=c("Row"),p=c("Column"),m=c("ResourceCard"),g={_frontmatter:s},u=o.a;function A(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(i.b)(u,n({},g,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Overview"),Object(i.b)("p",null,"In the ",Object(i.b)("a",n({parentName:"p"},{href:"../overview"}),"Overview")," section we describe why ",Object(i.b)("em",{parentName:"p"},"Code\nPatterns")," provide a perfect on ramp to help projects get started. The Developer Tools project is providing a set of seed templates that can be used to get projects moving quickly and focusing on use case business logic."),Object(i.b)("p",null,"Read up on why you should start with a ",Object(i.b)("strong",{parentName:"p"},"Code Pattern")," and if you have not\nalready tried to deploy your first app to show you how easy it is to get\nstarted"),Object(i.b)(r,{mdxType:"AnchorLinks"},Object(i.b)(b,{to:"../../codepattens/overview",mdxType:"AnchorLink"},"Code Patterns Overview"),Object(i.b)(b,{to:"../../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploying your first app")),Object(i.b)("p",null,"Here are links to the base set of ",Object(i.b)("strong",{parentName:"p"},"Code Patterns")," provided for the ",Object(i.b)("em",{parentName:"p"},"IBM Garage for Cloud Developer Tools"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To use the Code Patterns, click on the link and then the ",Object(i.b)("strong",{parentName:"p"},"Template")," button to create a version in your own git organization.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Then clone it onto your local machine and then use ",Object(i.b)("inlineCode",{parentName:"p"},"igc pipeline")," to register it with your CI server either Jenkins or Tekton."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",n({parentName:"pre"},{className:"language-bash"}),'oc login\noc get pods\nnpm i -g @ibmgaragecloud/cloud-native-toolkit-cli\ngit clone {code pattern}\ncd {code pattern}\nigc enable | git add . | git commit -m "Update"" | git push\nigc pipeline -n dev --tekton\n')))),Object(i.b)("h3",null,"Git Repo Links"),Object(i.b)(l,{mdxType:"Row"},Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(m,{title:"React UI Patterns",subTitle:"Carbon based UI to help with common patterns using React framework",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-react",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(m,{title:"Angular UI Patterns",subTitle:"Carbon based UI to help with common patterns using Angular framework",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-angular",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(m,{title:"ArgoCD GitOps",subTitle:"Template configuration to help to set up GitOps with ArgoCD",actionIcon:"launch",color:"light",href:"https://github.com/IBM/template-argocd-gitops",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)(l,{mdxType:"Row"},Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(m,{title:"Typescript Microservice",subTitle:"Node.js TypeScript Microservice offering OpenAPI endpoints",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-typescript",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(m,{title:"Typescript GraphQL",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-graphql-typescript",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(i.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)(m,{title:"Spring Boot Microservice",subTitle:"Spring Boot Java Microservice",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-java-spring",mdxType:"ResourceCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQ4y4WUzUsWURTG5/3IRRHpO3PnOhq6CSECoZDMRdCuTUJbBWlh/gEt1NW7dOEfEOgyJCJooUJbyVWIQgVR23YatQjx21ftOXeeM5x3EBz4cWfOnHnmnOeemSh1SaQHzmvm/D6YA1tgD5yBHbACJkHD5FZldS4utCKXxDXevAOWwYVP3YWsFp8W8T9gtixaFnsODuQBxE5wLrRYnXIKjs0LP4HOQlTbpJipJIgK5zaO65atnusXcMN6J23u+/yhn2AMvDNC4uEuOGLONpgBTamaou+t4LIkMvmNiY+AJ6AXpGAAPAMZ7zfkZdIFnx3V3Qye8U0f6Ws9uuJA7j2pUGyg4JoE54JQEh9SsBmSk7gqJpOKoaY7ivUm+B5syb0+ijhn6pXM2S0mV66ors71JTewJaIRPThjyZ8lKYnjivdJZIfeHs4lkalymJbJSAXBlo4C2MwFG0HsMkHPuBF8XBbcLrXcZVu2ot65UF2p5amiZWyQBFblc0LgmKIT3OUOboB+TSokG3PNeLlOu0KXhalhaPP1UHwpbUCbqInPs91TFvNbh/MfeQF+8OYiGAdJ/nCsFgyBafHb52IyLjrDr/VNM90+lcASuA3+9mRefc1Knr1irvqmG7oP+m35a1l3EBnLfFpntYN5q8E33dVB/Tp0QljdZNt/TH5B4BtvzoJH4GEu2GXzHlDwxPxtmvS4Wha9Dj5IS6z2KxNthUNGaE8rY07bOFRN+0/BBnh7ieBd8AssgD6tTCfhP7zh+TRsafseAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}A.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-gsi-ecosystem/ibm-gsi-cloudnative-journey"}}}')}}]);
//# sourceMappingURL=component---src-pages-codepatterns-gitrepos-index-mdx-534fbd34bde92d692710.js.map