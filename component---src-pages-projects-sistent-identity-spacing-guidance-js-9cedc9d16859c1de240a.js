(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8726],{13524:function(e,t,n){var i=n(75972).k5;e.exports.Y=function(e){return i({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"}}]})(e)}},22033:function(e,t,n){var i=n(75972).k5;e.exports.I=function(e){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"}}]})(e)}},66198:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var i=n(96540),s=n(13524),a=n(64810),o=n(48003),c=n(22033),r=n(95125);var l=n(21250).default.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-688mic-0"})(["\n  position: absolute;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width: 15rem;\n  padding-bottom: 2rem;\n  @media screen and (min-width: 1280px) and (max-width: 1350px) {\n    margin-left: 0.2rem;\n  }\n\n  .go-back {\n    margin-left: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color: ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n\n  .toc-sub-inline {\n    display: inline-block;\n  }\n\n  .active {\n    font-weight: 500;\n    color: ",";\n  }\n\n  ul {\n    display: flex;\n    flex-direction: column;\n    white-space: nowrap;\n  }\n\n  .toc-ul {\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn {\n    display: none;\n  }\n\n  .toc-ul-open {\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height: auto !important;\n    opacity: 1 !important;\n    margin-bottom: 2rem;\n    transition: all 0.4s !important;\n  }\n\n  .toc-menu-icon {\n    width: 1.5rem;\n    height: 1.5rem;\n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px) {\n    position: initial;\n    margin-right: 3rem;\n    width: auto;\n    .toc-toggle-btn {\n      display: inline-block;\n    }\n    .go-back {\n      margin-left: 0;\n    }\n\n    .toc-ul {\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n\n    .toc-ul-open {\n      visibility: visible;\n    }\n  }\n\n  .toc-acc-item {\n    background-color: transparent;\n  }\n\n  .identity, .components {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    padding-right: 1rem;\n    cursor: pointer;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  .identity-sublinks, .components-sublinks {\n    padding-left: 0.56rem;\n\n    .identity-item, .components-item {\n      font-size: 1.05rem;\n      margin-top: 0.45rem;\n    }\n  }\n"],(e=>e.theme.text),(e=>e.theme.secondaryColor),(e=>e.theme.menuColor),(e=>e.theme.secondaryColor),(e=>e.theme.text)),p=n(63760),d=n(3349),m=n(86462);var u=()=>{const{0:e,1:t}=(0,i.useState)(!1),n=(0,m.useLocation)(),{0:u,1:h}=(0,i.useState)(n.pathname.includes("/identity")),{0:g,1:f}=(0,i.useState)(n.pathname.includes("/components")),y=[...r.componentsData].sort(((e,t)=>e.name.localeCompare(t.name)));return i.createElement(l,null,i.createElement("div",{className:"go-back"},i.createElement(a.Link,{to:"/projects/sistent"},i.createElement(s.Y,null),i.createElement("h4",null,"Table of Contents")),i.createElement("div",{className:"toc-toggle-btn"},e?i.createElement(o.W,{className:"toc-menu-icon",onClick:function(){t(!e)}}):i.createElement(c.I,{className:"toc-menu-icon",onClick:function(){t(!e)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(e?"toc-ul-open":"")},i.createElement("li",null,i.createElement(a.Link,{to:"/projects/sistent/about",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"About")),i.createElement("li",null,i.createElement("div",null,i.createElement("li",{className:"toc-sub-heading identity",onClick:()=>h((e=>!e))},"Identity",u?i.createElement(d.I,null):i.createElement(p.p,null)),u&&i.createElement("div",{className:"identity-sublinks"},i.createElement("li",null,i.createElement(a.Link,{to:"/projects/sistent/identity/color",className:"toc-sub-heading toc-sub-inline identity-item "+(n.pathname.includes("/projects/sistent/identity/color")?"active":""),activeClassName:"active"},"Color")),i.createElement("li",null,i.createElement(a.Link,{to:"/projects/sistent/identity/spacing",className:"toc-sub-heading toc-sub-inline identity-item "+(n.pathname.includes("/projects/sistent/identity/spacing")?"active":""),activeClassName:"active"},"Spacing")),i.createElement("li",null,i.createElement(a.Link,{to:"/projects/sistent/identity/typography",className:"toc-sub-heading toc-sub-inline identity-item "+(n.pathname.includes("/projects/sistent/identity/typography")?"active":""),activeClassName:"active"},"Typography"))))),i.createElement("li",null,i.createElement("div",null,i.createElement("li",{className:"toc-sub-heading components",onClick:()=>f((e=>!e))},"Components",g?i.createElement(d.I,null):i.createElement(p.p,null)),g&&i.createElement("div",{className:"components-sublinks"},i.createElement("li",null,y.map((e=>i.createElement("li",{key:e.id},i.createElement(a.Link,{to:e.url,className:"toc-sub-heading toc-sub-inline components-item "+(n.pathname===e.url?"active":""),activeClassName:"active"},e.name)))))))))))}},22514:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var i=n(96540);const s=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/backdrop",text:"Backdrop"},{id:11,link:"/projects/sistent/components/backdrop/guidance",text:"Backdrop"},{id:12,link:"/projects/sistent/components/backdrop/code",text:"Backdrop"},{id:13,link:"/projects/sistent/components/box",text:"Box"},{id:14,link:"/projects/sistent/components/box/guidance",text:"Box"},{id:15,link:"/projects/sistent/components/box/code",text:"Box"},{id:16,link:"/projects/sistent/components/button",text:"Button"},{id:17,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:18,link:"/projects/sistent/components/button/code",text:"Button"},{id:19,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:20,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:21,link:"/projects/sistent/components/button-group/code",text:"Button Group"},{id:22,link:"/projects/sistent/components/container",text:"Container"},{id:23,link:"/projects/sistent/components/container/guidance",text:"Container"},{id:24,link:"/projects/sistent/components/container/code",text:"Container"},{id:25,link:"/projects/sistent/components/icons",text:"Icons"},{id:26,link:"/projects/sistent/components/link",text:"Link"},{id:27,link:"/projects/sistent/components/link/guidance",text:"Link"},{id:28,link:"/projects/sistent/components/link/code",text:"Link"},{id:29,link:"/projects/sistent/components/modal",text:"Modal"},{id:30,link:"/projects/sistent/components/modal/code",text:"Modal"},{id:31,link:"/projects/sistent/components/pagination",text:"Pagination"},{id:32,link:"/projects/sistent/components/pagination/guidance",text:"Pagination"},{id:33,link:"/projects/sistent/components/pagination/code",text:"Pagination"},{id:34,link:"/projects/sistent/components/paper",text:"Paper"},{id:35,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:36,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:37,link:"/projects/sistent/components/popper",text:"Popper"},{id:38,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:39,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:40,link:"/projects/sistent/components/select",text:"Select"},{id:41,link:"/projects/sistent/components/select/guidance",text:"Select"},{id:42,link:"/projects/sistent/components/select/code",text:"Select"},{id:43,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:44,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:45,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:46,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:47,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:48,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:49,link:"/projects/sistent/components/tooltip",text:"Tooltip"},{id:50,link:"/projects/sistent/components/tooltip/guidance",text:"Tooltip"},{id:51,link:"/projects/sistent/components/tooltip/code",text:"Tooltip"}];var a=n(96044);var o=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var c=()=>{var e,t;const{0:n,1:c}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=s.findIndex((t=>t.link===e));c(t)}),[]),i.createElement(o,null,n>0?i.createElement(a.default,{$secondary:!0,$url:null===(e=s[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<s.length-1?i.createElement(a.default,{$primary:!0,$url:null===(t=s[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},25889:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i=n(96540),s=n(64810),a=n(86462),o=n.p+"static/space-token-table-2-light-17e47722e59c9326623fd99567a1b30d.png",c=n.p+"static/space-token-table-2-dark-9f90a39e0268bb1aee337b041c8accd4.png",r=n.p+"static/space-token-table-3-light-446e3b8d937a5ff8291b71a0716f7499.png",l=n.p+"static/space-token-table-3-dark-35c13c7a780793e0502dcf1921f59574.png",p=n(66054),d=n(92121),m=n(9184),u=n(96044);const h=()=>{const{isDark:e}=(0,d.G)(),t=(0,a.useLocation)();return i.createElement(m.p,{title:"Spacing"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Spacing")),i.createElement("p",null,"Space is the unseen component in designed solutions that enables clear, concise, and consistent arrangement of interface elements across a screen."),i.createElement("div",{className:"filterBtns"},i.createElement(u.default,{className:"/projects/sistent/identity/spacing"===t.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/identity/spacing"),title:"Overview"}),i.createElement(u.default,{className:"/projects/sistent/identity/spacing/guidance"===t.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/identity/spacing/guidance"),title:"Guidance"}),i.createElement(u.default,{className:"/projects/sistent/identity/spacing/code"===t.pathname?"active":"",onClick:()=>(0,s.navigate)("/projects/sistent/identity/spacing/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"Applying spatial values to designs is a much debated topic and can prove to be quite difficult and very confusing especially when trying to maintain consistency across all designs. To this end, a few concepts have been pieced together in order to simplify the understanding of spatial harmony and ensure a consistent execution."),i.createElement("a",{id:"Spatial Organization"},i.createElement("h2",null,"Spatial Organization")),i.createElement("p",null,"Mostly in an interface, the way space and spatial harmony is achieved is by applying these space values to specific elements or in specific use cases. This can range form the size of a given element to the space between elements on a page."),i.createElement("h3",null,"Gap"),i.createElement("p",null,"Gap can be used to represent the space between any two given elements in an interface. This can be the inset values in a button or a card, stack or inline spacing between blocks of text or a group of elements in a section, and can also be applicable for margin values in a grid system. Because this can be confusing to determine a mode of application given that the spatial system consists of over 10 different values, a set consisting of five to seven values can be chosen to serve as all the values for the 'gap' spacing that will be used in an interface."),i.createElement("p",null,"Arriving at these values, however is not arbitrary or random selection from the spacing scale. Instead, a geometric progression gotten by multiplying the base space value by a common ratio of two and also dividing by the same ratio will provide the values needed to populate the 'gap' category. This arrangement will ensure uniform space across an interface that will greatly help to establish element relationships and hierarchy."),i.createElement(p.fI,{Hcenter:!0,className:"image-container"},i.createElement(p.fv,{md:8,lg:8,sm:12},i.createElement("img",{src:e?c:o,alt:"Space Token Table"}))),i.createElement("p",null,"*The last spacing value of 80px that was included was added because 80px is the value for the margin in the 12 column grid that is being applied for desktop screens."),i.createElement("h3",null,"Radius"),i.createElement("p",null,"The radius value of elements in an interface help to define the theme and density that it conveys. Little to no radius can describe a more grotesque or brutal theme, while higher and more consistent use of radiuses can describe a modern and minimal UI theme. Radius values can be determined based on the use case and the needs of the designs being curated. With Layer5, we have chosen five radius values that can provide a the much needed variation that can help to describe a minimal and consistent user interface."),i.createElement(p.fI,{Hcenter:!0,className:"image-container"},i.createElement(p.fv,{md:8,lg:8,sm:12},i.createElement("img",{src:e?l:r,alt:"Space Token Table"}))),i.createElement("p",null,"As is the case with most user interface decisions that are agreed upon, these values should be subjected to proper scrutiny based on the intended use case as well as appropriate exploration to ensure the best possible application."),i.createElement("h3",null,"Size"),i.createElement("p",null,"Size refers to the amount of area that an atom or element of a design takes up in the available space of the user interface. Whether it’s that of an icon or the total size of an image, all of that space can be described as size. While it is true that much larger size values may not necessarily be strictly defined in the spatial system, elements which are frequently used and require a fixed size throughout a design can have specific values assigned to them to ensure consistency."),i.createElement("p",null,"Applicable scenarios can be in the case of buttons, text fields, some cards, navigation menus, logos, and icons. While there are exceptions to these elements, mostly, it is recommended that they appear in a uniform size across an interface to improve the consistency therein."),i.createElement("a",{id:"Space Application Considerations"},i.createElement("h2",null,"Space Application Considerations")),i.createElement("p",null,"For spacing to be effectively employed in designs, a few considerations are to be made to enable a simple, yet, uniform application of space values across designs. One such principles is that in a bounding box, the padding of the box should be the highest spacing value. This simply means that for any container, (could be a card, button, an entire page layout) both the horizontal and vertical padding values must be more than any other space values used inside of the container to separate its child elements."),i.createElement("p",null,"This is applicable whether the horizontal and vertical paddings have the same or different values. To provide more, clarity, the inline spacing in a container should not be more than its horizontal padding, and the stack spacing value should not be more than the container's vertical padding. This gradual decrease in the space value as we go deeper into a container or an element helps to enhance uniformity and consistency across designs."),i.createElement("h3",null,"Exceptions"),i.createElement("p",null,"Of course, these suggestions are not set in stone, and as such, exceptions should be made to accommodate the peculiar needs of a design and its existing principles. One of the cases where exceptions can apply is when proper separation needs to be established among a group of elements."),i.createElement("p",null,"Although most pages will have a horizontal padding value, they seldom have a vertical padding value and since elements are mostly arranged in a vertical stack in a digital interface, it becomes necessary that proper separation is established in order to assist users to easily identify sections and navigate through the content of a page in the proper manner for better understanding. Varying values of space can therefore be employed in this vertical stack to improve users' clarity and minimize any confusion encountered."))))};var g=()=>i.createElement(h,null)},95125:function(e){e.exports={componentsData:[{id:1,name:"Button",description:"A button is an interactive element that triggers a specific action and also lets users know what will happen next.",url:"/projects/sistent/components/button",src:"/button"},{id:2,name:"Text Input",description:"A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",url:"/projects/sistent/components/text-input",src:"/text-input"},{id:3,name:"Modal",description:"A text input is made up of multiple elements that combine to form a component that helps users to read, write, and edit text in an interface.",url:"/projects/sistent/components/modal",src:"/modal"},{id:4,name:"Paper",description:"The Paper component offers an elevated surface with shadow effects, following Material Design’s elevation system.",url:"/projects/sistent/components/paper",src:"/paper"},{id:5,name:"Popper",description:"A popper is a tooltip that appears when a user interacts with an element.",url:"/projects/sistent/components/popper",src:"/popper"},{id:6,name:"Text Field",description:"The TextField component is a versatile input field used to capture user input in forms and user interfaces.",url:"/projects/sistent/components/text-field",src:"/text-field"},{id:7,name:"Link",description:"Links are essential and integral components of an interface. They are primarily used for navigation, guiding users to the next step in a journey or redirecting them to relevant sections or pages.",url:"/projects/sistent/components/link",src:"/link"},{id:8,name:"Container",description:"Containers align and center content, providing responsive layout options for different screen sizes.",url:"/projects/sistent/components/container",src:"/container"},{id:9,name:"ButtonGroup",description:"ButtonGroup is a component that groups multiple buttons together.",url:"/projects/sistent/components/button-group",src:"/button-group"},{id:10,name:"Box",description:"Box is used as a flexible container for layout and styling, allowing quick customization and responsive design adjustments.",url:"/projects/sistent/components/box",src:"/box"},{id:11,name:"Tooltip",description:"The Tooltip component is a small pop-up box that appears when a user hovers over an element.",url:"/projects/sistent/components/tooltip",src:"/tooltip"},{id:12,name:"Backdrop",description:"Backdrop component overlays a dimmed screen to focus attention on foreground content.",url:"/projects/sistent/components/backdrop",src:"/backdrop"},{id:13,name:"ToggleButton",description:"ToggleButton allows users to switch between two or more states, commonly used in forms or settings for quick toggles.",url:"/projects/sistent/components/toggle-button",src:"/toggle-button"},{id:14,name:"Pagination",description:"Pagination enables users to navigate through multiple pages of content, providing an intuitive interface for browsing large datasets or segmented information.",url:"/projects/sistent/components/pagination",src:"/pagination"},{id:15,name:"Select",description:"Select component is a dropdown menu for selecting an option from a list.",url:"/projects/sistent/components/select",src:"/select"},{id:16,name:"Icons",description:"Sistent provides a comprehensive collection of icons that can be used across your projects. These icons are designed to be consistent with the overall design language of the Sistent design system, ensuring a cohesive user experience.",url:"/projects/sistent/components/icons",src:"/icons"}]}},9184:function(e,t,n){"use strict";n.d(t,{p:function(){return d}});var i=n(96540),s=n(91580),a=n(66198),o=n(66054),c=n(22514),r=n(64810);const l=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var p=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:s}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;s(e)}),[]),i.createElement(l,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(r.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const d=e=>{let{title:t,children:n}=e;return i.createElement(s.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(a.A,null),i.createElement("div",{className:"page-section"},i.createElement(o.mc,null,n," ",i.createElement(c.A,null)),i.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-sistent-identity-spacing-guidance-js-9cedc9d16859c1de240a.js.map