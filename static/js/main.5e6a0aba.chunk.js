(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{34:function(A,e,t){},35:function(A,e,t){"use strict";t.r(e);var i=t(1),c=t.n(i),a=t(22),r=t.n(a),s=t(4),n=t(8),o=t(2),l=t(7),d=t(0),h=function(A){var e=A.component,t=A.layout,i=A.componentProps,c=Object(l.a)(A,["component","layout","componentProps"]);return t=void 0===t?function(A){return Object(d.jsx)(d.Fragment,{children:A.children})}:t,Object(d.jsx)(s.a,Object(o.a)(Object(o.a)({},c),{},{render:function(A){return Object(d.jsx)(t,{children:Object(d.jsx)(e,Object(o.a)(Object(o.a)({},A),i))})}}))},j=t(11),m=t(3),v=t.n(m),b=t(18),u=c.a.forwardRef((function(A,e){var t=Object(i.useState)(window.innerHeight),c=Object(j.a)(t,2),a=c[0],r=c[1],s=Object(i.useState)([]),n=Object(j.a)(s,2),o=n[0],l=n[1],h=function(){return o.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},m=function(){if(!h())for(var A=function(A){var e=o[A],t=e.getAttribute("data-reveal-delay"),i=e.getAttribute("data-reveal-offset")?e.getAttribute("data-reveal-offset"):"200";(function(A,e){return A.getBoundingClientRect().top<=a-e})(e.getAttribute("data-reveal-container")?e.closest(e.getAttribute("data-reveal-container")):e,i)&&!e.classList.contains("is-revealed")&&(t&&0!==t?setTimeout((function(){e.classList.add("is-revealed")}),t):e.classList.add("is-revealed"))},e=0;e<o.length;e++)A(e)};Object(i.useImperativeHandle)(e,(function(){return{init:function(){l(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof o&&o.length>0&&(h()||(window.addEventListener("scroll",u),window.addEventListener("resize",O)),m())}),[o]);var v=function(){h()&&(window.removeEventListener("scroll",u),window.removeEventListener("resize",O))},u=Object(b.throttle)((function(){v(),m()}),30),O=Object(b.throttle)((function(){r(window.innerHeight)}),30);return Object(i.useEffect)((function(){v(),m()}),[a]),Object(d.jsx)(d.Fragment,{children:A.children()})}));u.propTypes={children:v.a.func.isRequired};var O=u,g=t(14),p=t(5),f=t.n(p),x=t(13),k=function(A){var e=A.className,t=A.src,c=A.width,a=A.height,r=A.alt,s=Object(l.a)(A,["className","src","width","height","alt"]),n=Object(i.useState)(!1),h=Object(j.a)(n,2),m=h[0],v=h[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){u(b.current)}),[]);var u=function(A){var e,t,i=document.createElement("img");m||(A.style.display="none",A.before(i),i.src=(e=A.getAttribute("width")||0,t=A.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(e," ").concat(t,'"%3E%3C/svg%3E')),i.width=A.getAttribute("width"),i.height=A.getAttribute("height"),i.style.opacity="0",A.className&&i.classList.add(A.className),i.remove(),A.style.display="")};return Object(d.jsx)("img",Object(o.a)(Object(o.a)({},s),{},{ref:b,className:e,src:t,width:c,height:a,alt:r,onLoad:function(){v(!0)}}))};k.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var B=k,S=function(A){var e=A.className,t=Object(l.a)(A,["className"]),i=f()("brand",e);return Object(d.jsx)("div",Object(o.a)(Object(o.a)({},t),{},{className:i,children:Object(d.jsx)("h1",{className:"m-0",children:Object(d.jsx)(x.a,{to:"/",children:Object(d.jsx)(B,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAAUnSURBVFhHvVfbcuJGEN0fW3MTYIy56AYSNwPeVDYfYGdtwPbmUlub5/xefiO7tsG95/RI2hF2CKRcUVWXhDTTfeb06Z7hjYg8s3p1Ib3or1e1mnMN189jPXvBgS85eA17CUTuR6lwmQ12Sh+kjgm1Coz3xPiODPG5WrnCs/UeVnOuzJxkXqlwob5Sv6XiJUL9I4CLbGCx+LO4pyfGmg1pVCtyDCsXj6RSOsL9rZSO3srTZoMABf1dLhxJvVLWsZzXhXUwl74yAIhhx8wBCLzP2cBadSm/361kOozUosCTKPTE77bl8eFBgzqVkqwfH2W1uJLl4oN4bkcGvUA+rhYyG8XJ3Fh9ZX7Bih0zB4AUpgMroHfY82Q+HshsHCuAGL95dVqnCmSzXsM24rZb4nZaCqwPkBybAojx7Fh+dwLgx3Tg8fGNnE8G8tO7uQz7gcShq455+V5XfLetgMiAj5Xznddt6XcF63flh9lE3k3H8HV7OIB6bZUBiLGqu9W1DPo+hhFARwOvsfrN5kmZCPCOIHgRwKjny/vzKXwMpV5f/QcAmPT+fIY0+DIZ9KUfuJpfXsw1QZQgyJvlAitvi9dp67e+b5hi2kYA/CNA2ACYZlz/DsBBGcUIeobgc+STjsmAh1xr7qH+Srko3XYTTFALa02B0h/6mv+zQU8XQF8HA6jVliokOiEIOu3DOYMQBFfNsnOxclffnaI8Czougl7OAGAcBeqDvg4GUEWzSUuQxpVFcJ7STw08If+PuD/e3xtgEGaj5mgfsOfaZXgQA5MozANASlh+AUCEULkDDTAw3/Hutk+NBiDa6bBn5oK9vfvANgNnceIExpIjiDQYQZAFF9SHUL9WARhgcIKYjRIGDgFgt+KS1YrZUhtVR05AL1suW7FpxwUVI5uRua/lpF7VcZzHNrzdisu79oIaul86cDL5U1vxb7dL+fTLjdyi3f56twSYJnrCQhbXAAjKtSlh9bw811UQMcqVq6cQuwAQ+H9kfhmDsVLLA7BS4PufUcdGxVPQSXX3fA+KhwYYFHdtvxQggPBiagggRAoIgG1cAQTfAewWoVWvRM3yG1OICYDQczXvmm8GA+2mCZkWzApRAG4XANA/AMBHn+BiUr97M0DhKI0AQSENUdOkVoMioN/t6OYTQHgUHy+mgwC4IbF5mRScwNf3E9beVcAyZHCmYI49oY+yo7p5sQJoWoIITla4el5katgPZaIVFBsAViM6CAAZoA4IQFss2iqFx0MIjS34ASzwThDsDRw3ikMFz7leq7k/gLpjUZWkIK1n04hMH+giBQGCmZ4AUzaYipYyQJtSvEkK7DLczYAlQgIgjdnBAk6ZAp/7AMzFyki/GoIHHoCAHbLUR7WQNQq43ahL0Tpr7hThdiPqNI+VQt7ZUI6dsmlG2IQotmIB50BsQHzmWZHfm2hEHpUPYzMigIIFYOeZ0Hc/ZQPJABtRuhvaaWC+Wf/cjBg8PZSkF0swtUmcb8U8UeN6GUBOhIkGUiczfY40DVEYAIivQT/e3agguVOyTEfJBnaGOewffLYB7F8FOQDQgu10hPzGEaYIaj3WuxmLMwDGchMz2jHM5Rg4CEBCPTcjPhMA03H/5W8cuUybZZrmOH7pAQTfCdboppGByjEAodsxdwDAdoz8s5zo3G2dZBUxHQzk4etX1UJqBMVxKWgaz4VkI9cJd1dB/q8ZFct3xaMLKP8y+Z3a5Qvvtg3fMXfvv2Y0m4XXtm0B0nI/Uvv//p7Lm28CHsRPs3ySqAAAAABJRU5ErkJggg==",alt:"Open",width:t.width,height:t.height})})})}))};S.defaultProps={width:32,height:32};var w=S,I=function(A){var e=A.className,t=Object(l.a)(A,["className"]),i=f()("footer-social",e);return Object(d.jsx)("div",Object(o.a)(Object(o.a)({},t),{},{className:i,children:Object(d.jsxs)("ul",{className:"list-reset",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://telegram.me/stadd",children:Object(d.jsxs)("svg",{width:t.iconWidth,height:t.iconHeight,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Telegram"}),Object(d.jsx)("path",{d:"M41.23 8.61a1.87 1.87 0 0 0-1.34-.126c-.144.048-1.544.583-3.113 1.188s-4.98 1.918-7.586 2.92l-9.24 3.55c-2.476.95-6.317 2.426-8.53 3.277s-4.15 1.612-4.308 1.69c-1.1.553-1.453 1.232-.943 1.793a1.99 1.99 0 0 0 .533.387c.17.078 2.192.724 4.493 1.436s4.2 1.308 4.21 1.326.738 2.345 1.6 5.17c1.033 3.375 1.616 5.182 1.7 5.263a1.515 1.515 0 0 0 1.123.18c.667-.11.433.086 3.805-3.185a9.087 9.087 0 0 1 1.592-1.414c.04.032 1.488 1.1 3.22 2.368l4.136 3.04a3.96 3.96 0 0 0 2.107 1.04 1.583 1.583 0 0 0 1.6-1.228c.087-.25 4.552-21.04 5.573-25.95.298-1.428.095-2.3-.632-2.725z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://github.com/staddy",children:Object(d.jsxs)("svg",{width:t.iconWidth,height:t.iconHeight,viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Github"}),Object(d.jsx)("path",{"data-name":"layer2",d:"M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"}),Object(d.jsx)("path",{"data-name":"layer1",d:"M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://vk.com/staddy",children:Object(d.jsxs)("svg",{width:t.iconWidth,height:t.iconHeight,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"VK"}),Object(d.jsx)("path",{d:"M22.647 35.647h2.4a2.027 2.027 0 0 0 1.095-.48 1.76 1.76 0 0 0 .33-1.054s-.047-3.224 1.447-3.7c1.472-.468 3.363 3.116 5.368 4.494a3.8 3.8 0 0 0 2.668.814l5.36-.074s2.8-.173 1.474-2.38c-.11-.18-.775-1.634-3.986-4.62-3.36-3.123-2.91-2.618 1.138-8.022 2.465-3.29 3.45-5.3 3.143-6.16-.293-.82-2.107-.6-2.107-.6l-6.035.036a1.368 1.368 0 0 0-.78.138 1.685 1.685 0 0 0-.532.648A35.085 35.085 0 0 1 31.4 19.4c-2.687 4.57-3.762 4.812-4.2 4.528-1.022-.66-.767-2.657-.767-4.075 0-4.43.67-6.276-1.306-6.754a10.3 10.3 0 0 0-2.817-.28c-2.154-.023-3.976.005-5.008.512-.687.337-1.216 1.087-.893 1.13a2.707 2.707 0 0 1 1.78.9 5.84 5.84 0 0 1 .6 2.735s.355 5.214-.83 5.86c-.813.445-1.93-.462-4.325-4.608a38.6 38.6 0 0 1-2.154-4.473 1.8 1.8 0 0 0-.5-.674 2.49 2.49 0 0 0-.926-.375l-5.735.038a1.954 1.954 0 0 0-1.178.4 1.253 1.253 0 0 0-.022 1.023S7.607 25.8 12.69 31.1a13.76 13.76 0 0 0 9.956 4.542z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://twitter.com/prstad",children:Object(d.jsxs)("svg",{width:t.iconWidth,height:t.iconHeight,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Twitter"}),Object(d.jsx)("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})]})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"https://www.instagram.com/prstad",children:Object(d.jsxs)("svg",{width:t.iconWidth,height:t.iconHeight,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("title",{children:"Instagram"}),Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{cx:"12.145",cy:"3.892",r:"1"}),Object(d.jsx)("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),Object(d.jsx)("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})]})]})})})]})}))};I.defaultProps={iconWidth:16,iconHeight:16};var C=I,H=function(A){var e=A.className,t=(A.navPosition,A.hideNav,A.hideSignin,A.bottomOuterDivider),c=A.bottomDivider,a=Object(l.a)(A,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),r=Object(i.useState)(!1),s=Object(j.a)(r,2),n=s[0],h=s[1],m=Object(i.useRef)(null),v=Object(i.useRef)(null);Object(i.useEffect)((function(){return n&&b(),document.addEventListener("keydown",O),document.addEventListener("click",g),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",g),u()}}));var b=function(){document.body.classList.add("off-nav-is-active"),m.current.style.maxHeight=m.current.scrollHeight+"px",h(!0)},u=function(){document.body.classList.remove("off-nav-is-active"),m.current&&(m.current.style.maxHeight=null),h(!1)},O=function(A){n&&27===A.keyCode&&u()},g=function(A){m.current&&n&&!m.current.contains(A.target)&&A.target!==v.current&&u()},p=f()("site-header",t&&"has-bottom-divider",e);return Object(d.jsx)("header",Object(o.a)(Object(o.a)({},a),{},{className:p,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:f()("site-header-inner",c&&"has-bottom-divider"),children:[Object(d.jsx)(w,{width:64,height:64}),Object(d.jsx)(C,{iconWidth:24,iconHeight:24})]})})}))};H.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var y=H,T=function(A){var e=A.className,t=A.topOuterDivider,i=A.topDivider,c=Object(l.a)(A,["className","topOuterDivider","topDivider"]),a=f()("site-footer center-content-mobile",t&&"has-top-divider",e);return Object(d.jsx)("footer",Object(o.a)(Object(o.a)({},c),{},{className:a,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:f()("site-footer-inner",i&&"has-top-divider"),children:[Object(d.jsx)("div",{className:"footer-top text-xxs",children:Object(d.jsx)(C,{iconWidth:32,iconHeight:32})}),Object(d.jsx)("div",{className:"footer-bottom space-between text-xxs invert-order-desktop",children:Object(d.jsxs)("div",{className:"footer-copyright",children:["Template by ",Object(d.jsx)("a",{href:"https://cruip.com",children:"Cruip"})]})})]})})}))};T.defaultProps={topOuterDivider:!1,topDivider:!1};var N=T,U=function(A){var e=A.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{navPosition:"right",className:"reveal-from-bottom"}),Object(d.jsx)("main",{className:"site-content",children:e}),Object(d.jsx)(N,{})]})},E={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},Z={types:Object(o.a)({},E.types),defaults:Object(o.a)({},E.defaults)},M={types:Object(o.a)(Object(o.a)({},E.types),{},{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(o.a)(Object(o.a)({},E.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},Q=(Object(o.a)(Object(o.a)({},E.types),{},{pushLeft:v.a.bool}),Object(o.a)(Object(o.a)({},E.defaults),{},{pushLeft:!1}),Object(o.a)({},Z.defaults)),D=function(A){var e=A.className,t=A.topOuterDivider,i=A.bottomOuterDivider,c=A.topDivider,a=A.bottomDivider,r=A.hasBgColor,s=A.invertColor,n=Object(l.a)(A,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=f()("hero section center-content",t&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",s&&"invert-color",e),j=f()("hero-inner section-inner",c&&"has-top-divider",a&&"has-bottom-divider");return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},n),{},{className:h,children:Object(d.jsx)("div",{className:"container-sm",children:Object(d.jsx)("div",{className:j,children:Object(d.jsxs)("div",{className:"hero-content",children:[Object(d.jsx)("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200",children:"Stanislav Ponkrashov"}),Object(d.jsx)("div",{className:"container-xs",children:Object(d.jsx)("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400",children:"Full stack game developer"})})]})})})}))};D.defaultProps=Q;var P=D,z=function(A){var e=A.className,t=A.data,i=A.children,c=A.tag,a=Object(l.a)(A,["className","data","children","tag"]),r=f()("section-header",e),s=c;return Object(d.jsx)(d.Fragment,{children:(t.title||t.paragraph)&&Object(d.jsx)("div",Object(o.a)(Object(o.a)({},a),{},{className:r,children:Object(d.jsxs)("div",{className:"container-xs",children:[i,t.title&&Object(d.jsx)(s,{className:f()("mt-0",t.paragraph?"mb-16":"mb-0"),children:t.title}),t.paragraph&&Object(d.jsx)("p",{className:"m-0",children:t.paragraph})]})}))})};z.defaultProps={children:null,tag:"h2"};var L=z,R=Object(o.a)({},M.defaults),X=function(A){var e=A.className,t=A.topOuterDivider,i=A.bottomOuterDivider,c=A.topDivider,a=A.bottomDivider,r=A.hasBgColor,s=A.invertColor,n=A.invertMobile,h=A.invertDesktop,j=A.alignTop,m=A.imageFill,v=A.projects,b=Object(l.a)(A,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill","projects"]),u=f()("features-split section",t&&"has-top-divider",i&&"has-bottom-divider",r&&"has-bg-color",s&&"invert-color",e),O=f()("features-split-inner section-inner",c&&"has-top-divider",a&&"has-bottom-divider"),g=f()("split-wrap",n&&"invert-mobile",h&&"invert-desktop",j&&"align-top");return Object(d.jsx)("section",Object(o.a)(Object(o.a)({},b),{},{className:u,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)(L,{data:{title:"Projects",paragraph:""},className:"center-content"}),Object(d.jsx)("div",{className:g,children:v.map((function(A){return Object(d.jsxs)("div",{className:"split-item",children:[Object(d.jsxs)("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item",children:[Object(d.jsx)("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8",children:A.brief}),Object(d.jsx)("h3",{className:"mt-0 mb-12",children:A.title}),Object(d.jsx)("p",{className:"m-0",children:A.description})]}),Object(d.jsx)("div",{className:f()("split-item-image center-content-mobile reveal-from-bottom",m&&"split-item-image-fill"),"data-reveal-container":".split-item",children:Object(d.jsx)("a",{href:A.url,children:Object(d.jsx)(B,{src:A.img,alt:"Features split 01",width:528,height:396})})})]})}))})]})})}))};X.defaultProps=R;var V=X,Y=function(A){var e=A.projects;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(P,{className:"illustration-section-01"}),Object(d.jsx)(V,{projects:e,invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"})]})};Y.defaultProps={};var q=Y,G=t.p+"static/media/circle2.b7cef776.png";g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_CODE);var F=[{img:"data:image/png;base64,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",url:"/projects/circle",brief:"Puzzle",title:"The Circle",description:'"The Circle" is a visually dazzling adventure, full of kinetic excitement, but it retreats to formula just when it\'s getting interesting.'},{img:G,url:"/projects/circle2",brief:"Puzzle",title:"The Circle 2.0: In Pursuit Of Red Arrow",description:"The project builds on the established context of the first game. Although beautiful, The Circle leaves a few open questions. In Pursuit Of Red Arrow successfully answers them and adds its own."}],J=function(){var A=Object(i.useRef)(),e=Object(s.f)();return Object(i.useEffect)((function(){var t=e.pathname;document.body.classList.add("is-loaded"),A.current.init(),function(A){g.a.set({page:A}),g.a.pageview(A)}(t)}),[e]),Object(d.jsx)(O,{ref:A,children:function(){return Object(d.jsx)(s.c,{children:Object(d.jsx)(h,{exact:!0,path:"/",component:q,layout:U,componentProps:{projects:F}})})}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(34);var W=Object(n.a)();r.a.render(Object(d.jsx)(s.b,{history:W,children:Object(d.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.5e6a0aba.chunk.js.map