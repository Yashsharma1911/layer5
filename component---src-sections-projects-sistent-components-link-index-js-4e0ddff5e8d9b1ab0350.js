(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5163],{13524:function(e,t,n){var i=n(75972).k5;e.exports.Y=function(e){return i({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"}}]})(e)}},22033:function(e,t,n){var i=n(75972).k5;e.exports.I=function(e){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"}}]})(e)}},66198:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(96540),o=n(13524),s=n(64810),a=n(48003),r=n(22033),l=n(95125);var c=n(21250).default.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-688mic-0"})(["\n  position: absolute;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width: 15rem;\n  padding-bottom: 2rem;\n  @media screen and (min-width: 1280px) and (max-width: 1350px) {\n    margin-left: 0.2rem;\n  }\n\n  .go-back {\n    margin-left: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color: ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n\n  .toc-sub-inline {\n    display: inline-block;\n  }\n\n  .active {\n    font-weight: 500;\n    color: ",";\n  }\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    white-space: nowrap;\n  }\n\n  .toc-ul {\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn {\n    display: none;\n  }\n\n  .toc-ul-open {\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height: auto !important;\n    opacity: 1 !important;\n    margin-bottom: 2rem;\n    transition: all 0.4s !important;\n  }\n\n  .toc-menu-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px) {\n    position: initial;\n    margin-right: 3rem;\n    width: auto;\n    .toc-toggle-btn {\n      display: inline-block;\n    }\n    .go-back {\n      margin-left: 0;\n    }\n\n    .toc-ul {\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n\n    .toc-ul-open {\n      visibility: visible;\n    }\n  }\n\n  .toc-acc-item {\n    background-color: transparent;\n  }\n\n  .identity, .components {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    padding-right: 1rem;\n    cursor: pointer;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  .identity-sublinks, .components-sublinks {\n    padding-left: 0.56rem;\n\n    .identity-item, .components-item {\n      font-size: 1.05rem;\n      margin-top: 0.45rem;\n    }\n  }\n"],(e=>e.theme.text),(e=>e.theme.secondaryColor),(e=>e.theme.menuColor),(e=>e.theme.secondaryColor),(e=>e.theme.text)),p=n(63760),m=n(3349),d=n(86462);var u=()=>{const{0:e,1:t}=(0,i.useState)(!1),n=(0,d.useLocation)(),{0:u,1:g}=(0,i.useState)(n.pathname.includes("/identity")),{0:h,1:f}=(0,i.useState)(n.pathname.includes("/components")),k=[...l.componentsData].sort(((e,t)=>e.name.localeCompare(t.name)));return i.createElement(c,null,i.createElement("div",{className:"go-back"},i.createElement(s.Link,{to:"/projects/sistent"},i.createElement(o.Y,null),i.createElement("h4",null,"Table of Contents")),i.createElement("div",{className:"toc-toggle-btn"},e?i.createElement(a.W,{className:"toc-menu-icon",onClick:function(){t(!e)}}):i.createElement(r.I,{className:"toc-menu-icon",onClick:function(){t(!e)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(e?"toc-ul-open":"")},i.createElement("li",null,i.createElement(s.Link,{to:"/projects/sistent/about",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"About")),i.createElement("li",null,i.createElement("div",null,i.createElement("li",{className:"toc-sub-heading identity",onClick:()=>g((e=>!e))},"Identity",u?i.createElement(m.I,null):i.createElement(p.p,null)),u&&i.createElement("div",{className:"identity-sublinks"},i.createElement("li",null,i.createElement(s.Link,{to:"/projects/sistent/identity/color",className:"toc-sub-heading toc-sub-inline identity-item "+(n.pathname.includes("/projects/sistent/identity/color")?"active":""),activeClassName:"active"},"Color")),i.createElement("li",null,i.createElement(s.Link,{to:"/projects/sistent/identity/spacing",className:"toc-sub-heading toc-sub-inline identity-item "+(n.pathname.includes("/projects/sistent/identity/spacing")?"active":""),activeClassName:"active"},"Spacing")),i.createElement("li",null,i.createElement(s.Link,{to:"/projects/sistent/identity/typography",className:"toc-sub-heading toc-sub-inline identity-item "+(n.pathname.includes("/projects/sistent/identity/typography")?"active":""),activeClassName:"active"},"Typography"))))),i.createElement("li",null,i.createElement("div",null,i.createElement("li",{className:"toc-sub-heading components",onClick:()=>f((e=>!e))},"Components",h?i.createElement(m.I,null):i.createElement(p.p,null)),h&&i.createElement("div",{className:"components-sublinks"},i.createElement("li",null,k.map((e=>i.createElement("li",{key:e.id},i.createElement(s.Link,{to:e.url,className:"toc-sub-heading toc-sub-inline components-item "+(n.pathname===e.url?"active":""),activeClassName:"active"},e.name)))))))))))}},22514:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});var i=n(96540);const o=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/backdrop",text:"Backdrop"},{id:11,link:"/projects/sistent/components/backdrop/guidance",text:"Backdrop"},{id:12,link:"/projects/sistent/components/backdrop/code",text:"Backdrop"},{id:13,link:"/projects/sistent/components/box",text:"Box"},{id:14,link:"/projects/sistent/components/box/guidance",text:"Box"},{id:15,link:"/projects/sistent/components/box/code",text:"Box"},{id:16,link:"/projects/sistent/components/button",text:"Button"},{id:17,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:18,link:"/projects/sistent/components/button/code",text:"Button"},{id:19,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:20,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:21,link:"/projects/sistent/components/button-group/code",text:"Button Group"},{id:22,link:"/projects/sistent/components/container",text:"Container"},{id:23,link:"/projects/sistent/components/container/guidance",text:"Container"},{id:24,link:"/projects/sistent/components/container/code",text:"Container"},{id:25,link:"/projects/sistent/components/icons",text:"Icons"},{id:26,link:"/projects/sistent/components/link",text:"Link"},{id:27,link:"/projects/sistent/components/link/guidance",text:"Link"},{id:28,link:"/projects/sistent/components/link/code",text:"Link"},{id:29,link:"/projects/sistent/components/modal",text:"Modal"},{id:30,link:"/projects/sistent/components/modal/code",text:"Modal"},{id:31,link:"/projects/sistent/components/pagination",text:"Pagination"},{id:32,link:"/projects/sistent/components/pagination/guidance",text:"Pagination"},{id:33,link:"/projects/sistent/components/pagination/code",text:"Pagination"},{id:34,link:"/projects/sistent/components/paper",text:"Paper"},{id:35,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:36,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:37,link:"/projects/sistent/components/popper",text:"Popper"},{id:38,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:39,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:40,link:"/projects/sistent/components/select",text:"Select"},{id:41,link:"/projects/sistent/components/select/guidance",text:"Select"},{id:42,link:"/projects/sistent/components/select/code",text:"Select"},{id:43,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:44,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:45,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:46,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:47,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:48,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:49,link:"/projects/sistent/components/tooltip",text:"Tooltip"},{id:50,link:"/projects/sistent/components/tooltip/guidance",text:"Tooltip"},{id:51,link:"/projects/sistent/components/tooltip/code",text:"Tooltip"}];var s=n(96044);var a=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var r=()=>{var e,t;const{0:n,1:r}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=o.findIndex((t=>t.link===e));r(t)}),[]),i.createElement(a,null,n>0?i.createElement(s.default,{$secondary:!0,$url:null===(e=o[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<o.length-1?i.createElement(s.default,{$primary:!0,$url:null===(t=o[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},95125:function(e){e.exports={componentsData:[{id:1,name:"Button",description:"A button is an interactive element that triggers a specific action and also lets users know what will happen next.",url:"/projects/sistent/components/button",src:"/button"},{id:2,name:"Text Input",description:"A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",url:"/projects/sistent/components/text-input",src:"/text-input"},{id:3,name:"Modal",description:"A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",url:"/projects/sistent/components/modal",src:"/modal"},{id:4,name:"Paper",description:"The Paper component offers an elevated surface with shadow effects, following Material Design’s elevation system.",url:"/projects/sistent/components/paper",src:"/paper"},{id:5,name:"Popper",description:"A popper is a tooltip that appears when a user interacts with an element.",url:"/projects/sistent/components/popper",src:"/popper"},{id:6,name:"Text Field",description:"The TextField component is a versatile input field used to capture user input in forms and user interfaces.",url:"/projects/sistent/components/text-field",src:"/text-field"},{id:7,name:"Link",description:"Links are essential and integral components of an interface. They are primarily used for navigation, guiding users to the next step in a journey or redirecting them to relevant sections or pages.",url:"/projects/sistent/components/link",src:"/link"},{id:8,name:"Container",description:"Containers align and center content, providing responsive layout options for different screen sizes.",url:"/projects/sistent/components/container",src:"/container"},{id:9,name:"ButtonGroup",description:"ButtonGroup is a component that groups multiple buttons together.",url:"/projects/sistent/components/button-group",src:"/button-group"},{id:10,name:"Box",description:"Box is used as a flexible container for layout and styling, allowing quick customization and responsive design adjustments.",url:"/projects/sistent/components/box",src:"/box"},{id:11,name:"Tooltip",description:"The Tooltip component is a small pop-up box that appears when a user hovers over an element.",url:"/projects/sistent/components/tooltip",src:"/tooltip"},{id:12,name:"Backdrop",description:"Backdrop component overlays a dimmed screen to focus attention on foreground content.",url:"/projects/sistent/components/backdrop",src:"/backdrop"},{id:13,name:"ToggleButton",description:"ToggleButton allows users to switch between two or more states, commonly used in forms or settings for quick toggles.",url:"/projects/sistent/components/toggle-button",src:"/toggle-button"},{id:14,name:"Pagination",description:"Pagination enables users to navigate through multiple pages of content, providing an intuitive interface for browsing large datasets or segmented information.",url:"/projects/sistent/components/pagination",src:"/pagination"},{id:15,name:"Select",description:"Select component is a dropdown menu for selecting an option from a list.",url:"/projects/sistent/components/select",src:"/select"},{id:16,name:"Icons",description:"Sistent provides a comprehensive collection of icons that can be used across your projects. These icons are designed to be consistent with the overall design language of the Sistent design system, ensuring a cohesive user experience.",url:"/projects/sistent/components/icons",src:"/icons"}]}},48185:function(e,t,n){"use strict";n.r(t);var i=n(96540),o=n(64810),s=n(86462),a=n(58501),r=n(96044),l=n(9184),c=n(66054),p=n(92121);t.default=()=>{const e=(0,s.useLocation)(),{isDark:t}=(0,p.G)();return i.createElement(l.p,{title:"Link"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Link")),i.createElement("p",null,"A link component is a navigational element that directs users to another page or section within an application."),i.createElement("div",{className:"filterBtns"},i.createElement(r.default,{className:"/projects/sistent/components/link"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/link"),title:"Overview"}),i.createElement(r.default,{className:"/projects/sistent/components/link/guidance"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/link/guidance"),title:"Guidance"}),i.createElement(r.default,{className:"/projects/sistent/components/link/code"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/link/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"Links are essential and integral components of an interface. They are primarily used for navigation, guiding users to the next step in a journey or redirecting them to relevant sections or pages. Links can be paired with other elements to create cohesive designs, enhancing the digital experience by providing smooth transitions and interaction cues."),i.createElement("a",{id:"Types of Links"},i.createElement("h2",null,"Types of Links")),i.createElement("p",null,"Links in an interface serve as vital elements for navigation and interaction. Multiple types of links are available to establish hierarchy, provide visual prominence, and enhance flexibility, guiding users towards their goals efficiently. With distinct styling and behaviors, links can help streamline user flows and create a cohesive user experience."),i.createElement("h3",null,"Simple Links"),i.createElement("p",null,"Basic anchor links with customizable colors and typography styles that inherit properties from the Typography component. This allows flexibility in styling with options like various text sizes or variants."),i.createElement(c.fI,{$Hcenter:!0,className:"image-container"},i.createElement(a.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(a.Link,{href:"https://layer5.io/",style:{marginLeft:"10px",padding:"6px"}},"Simple Link"))),i.createElement("h3",null,"Customized Links"),i.createElement("p",null,"The links can be customized in the below mentioned way"),i.createElement("h4",null,"1. Color"),i.createElement("p",null,"Nomally the color of Sistent Link is green , but on adding styling properties, You can customize link colors with predefined values such as primary, secondary, error, success, warning, info, or inherit existing text colors like Blue, Red."),i.createElement(c.fI,{$Hcenter:!0,className:"image-container"},i.createElement(a.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(a.Link,{href:"https://layer5.io/",style:{marginLeft:"10px",textDecoration:"none",color:"blue",padding:"6px"}},"Customized Link 1"))),i.createElement("h4",null,"2. Underlining"),i.createElement("p",null,"Also known as ghost buttons, text buttons are mostly just what the name implies; they are buttons without fills or borders which might just have a specific text styling and color to denote different states for easier identification."),i.createElement(c.fI,{$Hcenter:!0,className:"image-container"},i.createElement(a.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(a.Link,{href:"https://layer5.io/",style:{marginLeft:"10px",textDecoration:"underline",padding:"6px"}},"Customized Link 2"))),i.createElement("h4",null,"3. Variants"),i.createElement("p",null,"Links can have various text styles using the different styling property"),i.createElement(c.fI,{$Hcenter:!0,className:"image-container"},i.createElement(a.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(a.Link,{href:"https://layer5.io/",style:{marginLeft:"10px",textDecoration:"underline",color:"blue",padding:"6px",border:"2px solid green"},variant:"body1"},"Customized Link 3"))),i.createElement("a",{id:"Security"},i.createElement("h2",null,"Security")),i.createElement("p",null,"When using ",i.createElement("code",null,'target="_blank"')," with links, it's crucial to include",i.createElement("code",null,'rel="noopener"')," or ",i.createElement("code",null,'rel="noreferrer"')," for security reasons:"),i.createElement("ul",null,i.createElement("li",null,i.createElement("strong",null,"Prevent Access:")," ",i.createElement("code",null,'rel="noopener"')," prevents the new page from accessing the",i.createElement("code",null,"window.opener")," property, securing your original page from potential malicious redirects."),i.createElement("li",null,i.createElement("strong",null,"Avoid Referer Leakage:")," ",i.createElement("code",null,'rel="noreferrer"')," not only blocks the new page's access to your original page but also stops the Referer header from being sent, protecting user privacy."),i.createElement("li",null,i.createElement("strong",null,"Security Risk Mitigation:")," Using these attributes reduces the risk of phishing attacks and ensures that your site maintains control over its navigation and data.")),i.createElement("p",null,"By following these practices, you can enhance the security of your web application and protect your users."),i.createElement("a",{id:"Optimization"},i.createElement("h2",null,"Optimized Rendering of Links Using")),i.createElement("p",null,"useMemo is a React hook that helps optimize the rendering of link components by memorizing computed values, which prevents unnecessary re-renders."))))}},9184:function(e,t,n){"use strict";n.d(t,{p:function(){return m}});var i=n(96540),o=n(91580),s=n(66198),a=n(66054),r=n(22514),l=n(64810);const c=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var p=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:o}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;o(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(l.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const m=e=>{let{title:t,children:n}=e;return i.createElement(o.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(s.A,null),i.createElement("div",{className:"page-section"},i.createElement(a.mc,null,n," ",i.createElement(r.A,null)),i.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-sections-projects-sistent-components-link-index-js-4e0ddff5e8d9b1ab0350.js.map