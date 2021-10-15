(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[36],{226:function(e,t,a){"use strict";a.r(t);var c=a(99),o=a(95),n=a(284),s=a(19);var r=function(e){var t=e.title,a=e.statistic,r=e.total,i=e.formula,l=e.date,d=e.description,j=e.className,m=Object(n.a)().t;return Object(s.jsxs)("div",{className:"meta-item ".concat(j),children:[Object(s.jsxs)("div",{className:"meta-item-top",children:[Object(s.jsx)("h3",{children:t}),Object(s.jsx)(c.a,{message:i,children:Object(s.jsx)(o.o,{size:16})})]}),Object(s.jsx)("h1",{children:a}),Object(s.jsx)("h5",{children:l}),r&&Object(s.jsx)("h5",{children:"".concat(m("India has")," ").concat(r," ").concat(m("CPL"))}),Object(s.jsx)("p",{children:d})]})},i=a(10),l=a(24),d=a(68),j=a(80),m=a(2),b=a.n(m),h=a(23),O=a.n(h);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,c,o=function(e,t){if(null==e)return{};var a,c,o={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var v=Object(m.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,o=e.size,n=void 0===o?24:o,s=p(e,["color","size"]);return b.a.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),b.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),b.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));v.propTypes={color:O.a.string,size:O.a.oneOfType([O.a.string,O.a.number])},v.displayName="Compass";var f=v;function x(e){var t=e.numerator,a=e.denominator;return Object(s.jsxs)("div",{className:"frac",children:[Object(s.jsx)("span",{children:t}),Object(s.jsx)("span",{className:"bottom",children:a})]})}function y(e){var t,a,c,o,m,b=e.stateCode,h=e.data,O=e.timeseries,u=Object(n.a)().t,p=Object(l.h)(h[b],"total","confirmed",{normalizedByPopulationPer:"lakh"}),v=Object(l.h)(h[b],"total","tested",{normalizedByPopulationPer:"lakh"}),y=Object(l.h)(h.TT,"total","confirmed",{normalizedByPopulationPer:"lakh"}),g=Object(l.h)(h[b],"total","activeRatio"),k=Object(l.h)(h[b],"total","recoveryRatio"),w=Object(l.h)(h[b],"total","cfr"),N=Object.keys(O||{}).filter((function(e){return e<=Object(l.g)()})),P=N[N.length-1],T=Object(d.a)(Object(j.a)(Object(l.j)(P),6)),C=Object(l.h)(null===O||void 0===O?void 0:O[P],"delta","tpr",{movingAverage:!0});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"StateMeta population",children:[Object(s.jsxs)("div",{className:"meta-item population",children:[Object(s.jsx)("h3",{children:u("Population")}),Object(s.jsx)("h1",{children:Object(l.e)(null===(t=h[b])||void 0===t||null===(a=t.meta)||void 0===a?void 0:a.population)})]}),Object(s.jsxs)("div",{className:"alert",children:[Object(s.jsx)(f,{}),Object(s.jsxs)("div",{className:"alert-right",children:[u("Based on 2019 population projection by NCP"),Object(s.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(s.jsxs)("div",{className:"StateMeta",children:[Object(s.jsx)(r,{className:"confirmed",title:u("Confirmed Per Lakh"),statistic:Object(l.e)(p),total:Object(l.e)(y),formula:Object(s.jsxs)(s.Fragment,{children:["".concat(1e5," x "),Object(s.jsx)(x,{numerator:u("Total confirmed cases"),denominator:u("Total population")})]}),description:"\n            ~".concat(Object(l.e)(p,"long")," ").concat(u("out of every lakh people in")," ").concat(i.y[b]," ").concat(u("have tested positive for the virus."),"\n            ")}),Object(s.jsx)(r,{className:"active",title:u("Active Ratio"),statistic:"".concat(Object(l.e)(g,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:u("Total active cases right now"),denominator:u("Total confirmed cases")})]}),description:g>0?"".concat(u("For every 100 confirmed cases"),", ~").concat(Object(l.e)(g,"long")," ").concat(u("are currently infected.")):u("Currently, there are no active cases in this state.")}),Object(s.jsx)(r,{className:"recovery",title:u("Recovery Ratio"),statistic:"".concat(Object(l.e)(k,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:u("Total recovered cases"),denominator:u("Total confirmed cases")})]}),description:k>0?"".concat(u("For every 100 confirmed cases"),", ~").concat(Object(l.e)(k,"long")," ").concat(u("have recovered from the virus.")):u("Unfortunately, there are no recoveries in this state yet.")}),Object(s.jsx)(r,{className:"mortality",title:u("Case Fatality Ratio"),statistic:"".concat(Object(l.e)(w,"%")),formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:u("Total deaths"),denominator:u("Total confirmed cases")})]}),description:w>0?"".concat(u("For every 100 confirmed cases"),", ~").concat(Object(l.e)(w,"long")," ").concat(u("have unfortunately passed away from the virus.")):u("Fortunately, no one has passed away from the virus in this state.")}),Object(s.jsx)(r,{className:"tpr",title:u("Test Positivity Ratio"),statistic:C>0?"".concat(Object(l.e)(C,"%")):"-",formula:Object(s.jsxs)(s.Fragment,{children:["100 x ",Object(s.jsx)(x,{numerator:u("Confirmed cases last week"),denominator:u("Samples tested last week")})]}),date:"".concat(Object(l.c)(T,"dd MMM")," - ").concat(Object(l.c)(P,"dd MMM")),description:C>0?"".concat(u("In the last one week,")," ").concat(Object(l.e)(C,"%"),"\n              ").concat(u("of samples tested came back positive.")):u("No tested sample came back positive in last one week.")}),Object(s.jsx)(r,{className:"tpl",title:u("Tests Per Lakh"),statistic:"".concat(Object(l.e)(v)),formula:Object(s.jsxs)(s.Fragment,{children:["".concat(1e5," x "),Object(s.jsx)(x,{numerator:u("Total samples tested"),denominator:u("Total population")})]}),date:v&&(null===(c=h[b])||void 0===c||null===(o=c.meta)||void 0===o||null===(m=o.tested)||void 0===m?void 0:m.date)?"".concat(u("As of")," ").concat(Object(l.d)(h[b].meta.tested.date)," ").concat(u("ago")):"",description:v>0?"".concat(u("For every lakh people in")," ").concat(i.y[b],",\n                ~").concat(Object(l.e)(v,"long")," ").concat(u("samples were tested.")):u("No tests have been conducted in this state yet.")})]})]})}var g=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(m.memo)(y,g)},99:function(e,t,a){"use strict";var c=a(98),o=a(126),n=a(2),s=(a(116),a(117),a(19));t.a=function(e){var t=e.children,a=e.message,r=e.hold,i=void 0!==r&&r,l=e.childProps,d=void 0===l?{}:l,j=Object(n.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(s.jsx)(o.a,{className:"Tooltip",content:"string"===typeof a?Object(s.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:a.split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):a,arrow:!1,animation:"shift-away",touch:!i||["hold",300],children:Object(s.jsx)("div",Object(c.a)(Object(c.a)({onClick:j},d),{},{children:t}))})}}}]);
//# sourceMappingURL=36.c9d7dcf7.chunk.js.map