(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{115:function(t,n,e){"use strict";var r=e(2),i=e(92),a=i.a?r.useLayoutEffect:r.useEffect,c={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.a=i.a&&"undefined"!==typeof window.ResizeObserver?function(){var t=Object(r.useState)(null),n=t[0],e=t[1],i=Object(r.useState)(c),o=i[0],u=i[1],l=Object(r.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var n=t[0].contentRect,e=n.x,r=n.y,i=n.width,a=n.height,c=n.top,o=n.left,l=n.bottom,s=n.right;u({x:e,y:r,width:i,height:a,top:c,left:o,bottom:l,right:s})}}))}),[]);return a((function(){if(n)return l.observe(n),function(){l.disconnect()}}),[n]),[e,o]}:function(){return[i.b,c]}},125:function(t,n,e){"use strict";n.a=function(t){for(var n;n=t.sourceEvent;)t=n;return t}},144:function(t,n,e){"use strict";e.d(n,"b",(function(){return f})),e.d(n,"a",(function(){return d}));var r=function(t){return t},i=1e-6;function a(t){return"translate("+t+",0)"}function c(t){return"translate(0,"+t+")"}function o(t){return function(n){return+t(n)}}function u(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function l(){return!this.__axis}function s(t,n){var e=[],s=null,f=null,d=6,h=6,j=3,b="undefined"!==typeof window&&window.devicePixelRatio>1?0:.5,v=1===t||4===t?-1:1,m=4===t||2===t?"x":"y",g=1===t||3===t?a:c;function p(a){var c=null==s?n.ticks?n.ticks.apply(n,e):n.domain():s,p=null==f?n.tickFormat?n.tickFormat.apply(n,e):r:f,O=Math.max(d,0)+j,x=n.range(),y=+x[0]+b,M=+x[x.length-1]+b,_=(n.bandwidth?u:o)(n.copy(),b),k=a.selection?a.selection():a,w=k.selectAll(".domain").data([null]),A=k.selectAll(".tick").data(c,n).order(),N=A.exit(),T=A.enter().append("g").attr("class","tick"),E=A.select("line"),S=A.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),A=A.merge(T),E=E.merge(T.append("line").attr("stroke","currentColor").attr(m+"2",v*d)),S=S.merge(T.append("text").attr("fill","currentColor").attr(m,v*O).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==k&&(w=w.transition(a),A=A.transition(a),E=E.transition(a),S=S.transition(a),N=N.transition(a).attr("opacity",i).attr("transform",(function(t){return isFinite(t=_(t))?g(t+b):this.getAttribute("transform")})),T.attr("opacity",i).attr("transform",(function(t){var n=this.parentNode.__axis;return g((n&&isFinite(n=n(t))?n:_(t))+b)}))),N.remove(),w.attr("d",4===t||2===t?h?"M"+v*h+","+y+"H"+b+"V"+M+"H"+v*h:"M"+b+","+y+"V"+M:h?"M"+y+","+v*h+"V"+b+"H"+M+"V"+v*h:"M"+y+","+b+"H"+M),A.attr("opacity",1).attr("transform",(function(t){return g(_(t)+b)})),E.attr(m+"2",v*d),S.attr(m,v*O).text(p),k.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),k.each((function(){this.__axis=_}))}return p.scale=function(t){return arguments.length?(n=t,p):n},p.ticks=function(){return e=Array.from(arguments),p},p.tickArguments=function(t){return arguments.length?(e=null==t?[]:Array.from(t),p):e.slice()},p.tickValues=function(t){return arguments.length?(s=null==t?null:Array.from(t),p):s&&s.slice()},p.tickFormat=function(t){return arguments.length?(f=t,p):f},p.tickSize=function(t){return arguments.length?(d=h=+t,p):d},p.tickSizeInner=function(t){return arguments.length?(d=+t,p):d},p.tickSizeOuter=function(t){return arguments.length?(h=+t,p):h},p.tickPadding=function(t){return arguments.length?(j=+t,p):j},p.offset=function(t){return arguments.length?(b=+t,p):b},p}function f(t){return s(2,t)}function d(t){return s(3,t)}},167:function(t,n,e){"use strict";e.d(n,"b",(function(){return j})),e.d(n,"a",(function(){return b}));var r=e(251),i=e(273),a=e(119),c=e(108),o=e(49);function u(t){return Math.log(t)}function l(t){return Math.exp(t)}function s(t){return-Math.log(-t)}function f(t){return-Math.exp(-t)}function d(t){return isFinite(t)?+("1e"+t):t<0?0:t}function h(t){return function(n){return-t(-n)}}function j(t){var n,e,c=t(u,l),o=c.domain,j=10;function b(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(j),e=function(t){return 10===t?d:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(j),o()[0]<0?(n=h(n),e=h(e),t(s,f)):t(u,l),c}return c.base=function(t){return arguments.length?(j=+t,b()):j},c.domain=function(t){return arguments.length?(o(t),b()):o()},c.ticks=function(t){var i,a=o(),c=a[0],u=a[a.length-1];(i=u<c)&&(d=c,c=u,u=d);var l,s,f,d=n(c),h=n(u),b=null==t?10:+t,v=[];if(!(j%1)&&h-d<b){if(d=Math.floor(d),h=Math.ceil(h),c>0){for(;d<=h;++d)for(s=1,l=e(d);s<j;++s)if(!((f=l*s)<c)){if(f>u)break;v.push(f)}}else for(;d<=h;++d)for(s=j-1,l=e(d);s>=1;--s)if(!((f=l*s)<c)){if(f>u)break;v.push(f)}2*v.length<b&&(v=Object(r.a)(c,u,b))}else v=Object(r.a)(d,h,Math.min(h-d,b)).map(e);return i?v.reverse():v},c.tickFormat=function(t,r){if(null==r&&(r=10===j?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),t===1/0)return r;null==t&&(t=10);var a=Math.max(1,j*t/c.ticks().length);return function(t){var i=t/e(Math.round(n(t)));return i*j<j-.5&&(i*=j),i<=a?r(t):""}},c.nice=function(){return o(Object(a.a)(o(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},c}function b(){var t=j(Object(c.d)()).domain([1,10]);return t.copy=function(){return Object(c.a)(t,b()).base(t.base())},o.b.apply(t,arguments),t}},172:function(t,n,e){"use strict";var r=e(125);n.a=function(t,n){if(t=Object(r.a)(t),void 0===n&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(n.getScreenCTM().inverse())).x,i.y]}if(n.getBoundingClientRect){var a=n.getBoundingClientRect();return[t.clientX-a.left-n.clientLeft,t.clientY-a.top-n.clientTop]}}return[t.pageX,t.pageY]}},211:function(t,n,e){"use strict";var r=e(25);n.a=function(t,n){var e,i;if(void 0===n){var a,c=Object(r.a)(t);try{for(c.s();!(a=c.n()).done;){var o=a.value;null!=o&&(void 0===e?o>=o&&(e=i=o):(e>o&&(e=o),i<o&&(i=o)))}}catch(d){c.e(d)}finally{c.f()}}else{var u,l=-1,s=Object(r.a)(t);try{for(s.s();!(u=s.n()).done;){var f=u.value;null!=(f=n(f,++l,t))&&(void 0===e?f>=f&&(e=i=f):(e>f&&(e=f),i<f&&(i=f)))}}catch(d){s.e(d)}finally{s.f()}}return[e,i]}},218:function(t,n,e){"use strict";var r=e(253),i=e(124),a=e(123),c=e(138),o=e(166),u=e(139);n.a=function(t,n,e){var l=null,s=Object(a.a)(!0),f=null,d=c.a,h=null;function j(a){var c,o,u,j,b,v=(a=Object(i.a)(a)).length,m=!1,g=new Array(v),p=new Array(v);for(null==f&&(h=d(b=Object(r.a)())),c=0;c<=v;++c){if(!(c<v&&s(j=a[c],c,a))===m)if(m=!m)o=c,h.areaStart(),h.lineStart();else{for(h.lineEnd(),h.lineStart(),u=c-1;u>=o;--u)h.point(g[u],p[u]);h.lineEnd(),h.areaEnd()}m&&(g[c]=+t(j,c,a),p[c]=+n(j,c,a),h.point(l?+l(j,c,a):g[c],e?+e(j,c,a):p[c]))}if(b)return h=null,b+""||null}function b(){return Object(o.a)().defined(s).curve(d).context(f)}return t="function"===typeof t?t:void 0===t?u.a:Object(a.a)(+t),n="function"===typeof n?n:void 0===n?Object(a.a)(0):Object(a.a)(+n),e="function"===typeof e?e:void 0===e?u.b:Object(a.a)(+e),j.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),l=null,j):t},j.x0=function(n){return arguments.length?(t="function"===typeof n?n:Object(a.a)(+n),j):t},j.x1=function(t){return arguments.length?(l=null==t?null:"function"===typeof t?t:Object(a.a)(+t),j):l},j.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),e=null,j):n},j.y0=function(t){return arguments.length?(n="function"===typeof t?t:Object(a.a)(+t),j):n},j.y1=function(t){return arguments.length?(e=null==t?null:"function"===typeof t?t:Object(a.a)(+t),j):e},j.lineX0=j.lineY0=function(){return b().x(t).y(n)},j.lineY1=function(){return b().x(t).y(e)},j.lineX1=function(){return b().x(l).y(n)},j.defined=function(t){return arguments.length?(s="function"===typeof t?t:Object(a.a)(!!t),j):s},j.curve=function(t){return arguments.length?(d=t,null!=f&&(h=d(f)),j):d},j.context=function(t){return arguments.length?(null==t?f=h=null:h=d(f=t),j):f},j}},290:function(t,n,e){"use strict";e.r(n);var r=e(102),i=e(47),a=e(10),c=e(24),o=e(93),u=e.n(o),l=e(211),s=e(200),f=e(144),d=e(118),h=e(272),j=e(142),b=e(167),v=e(172),m=e(252),g=e(218);function p(t,n){this._context=t,this._t=n}p.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var O=function(t){return new p(t,.5)};var x=e(254),y=e(166),M=e(138),_=(e(101),e(83)),k=e(91),w=e.n(k),A=e(2),N=e(284),T=e(115),E=e(19),S=15,z=35,H=25,R=25,C=.7;function D(t){var n=t.statistics,e=t.timeseries,o=t.dates,p=t.endDate,k=t.chartType,w=t.isUniform,D=t.isLog,V=t.isMovingAverage,F=t.noRegionHighlightedDistrictData,P=Object(N.a)().t,L=Object(A.useRef)([]),Y=Object(T.a)(),X=Object(i.a)(Y,2),U=X[0],G=X[1],I=G.width,B=G.height,J=Object(A.useState)(o[o.length-1]),Z=Object(i.a)(J,2),q=Z[0],K=Z[1];Object(A.useEffect)((function(){K(o[o.length-1])}),[o]);var Q=Object(A.useCallback)((function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:V;return Object(c.h)(null===e||void 0===e?void 0:e[t],k,n,{movingAverage:r})}),[k,V,e]),W=Object(A.useMemo)((function(){var t=o.length,n=Object(_.a)(Object(c.j)(o[t-1]),Object(c.j)(o[0])),e=I-z;return Math.max(0,e-R)/(1.25*n)<4}),[I,o]),$=Object(A.useMemo)((function(){var t=o.length,n=I-z;return Object(h.a)().clamp(!0).domain([Object(c.j)(o[0]||p),Object(c.j)(o[t-1]||p)]).range([R,n])}),[I,p,o]),tt=Object(A.useMemo)((function(){var t=B-H,e=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=t.domain();return n?t.domain([e[0],e[0]*Math.pow(e[1]/e[0],1.4285714285714286)]):t.domain([e[0],e[0]+(e[1]-e[0])/C]),t},c=Object(l.a)(o.reduce((function(t,n){return t.push.apply(t,Object(r.a)(a.u.map((function(t){return Q(n,t)})))),t}),[])),u=Object(i.a)(c,2),s=u[0],f=u[1],d=e(Object(j.a)().clamp(!0).domain([Math.min(0,s),Math.max(1,f)]).range([t,S]).nice(4)),h=e(Object(b.a)().clamp(!0).domain([1,Math.max(10,f)]).range([t,S]).nice(4),!0);return n.map((function(n){if(w){if("total"===k&&D&&a.u.includes(n))return h;if(a.u.includes(n))return d}var r=Object(l.a)(o,(function(t){return Q(t,n)})),c=Object(i.a)(r,2),u=c[0],s=c[1];return"total"===k&&D?e(Object(b.a)().clamp(!0).domain([1,Math.max(10,s)]).range([t,S]).nice(4),!0):e(Object(j.a)().clamp(!0).domain([Math.min(0,u),"%"===a.z[n].format?Math.min(100,Math.max(1,s)):Math.max(1,s)]).range([t,S]).nice(4))}))}),[B,k,w,D,n,o,Q]);Object(A.useEffect)((function(){if(I&&B){var t=o.length,e=I-z,r=B-H,i="delta"===k&&!V,u=function(t){return t.attr("class","x-axis").call(Object(f.a)($).ticks(function(t){return t<480?4:6}(I)))},l=function(t,n){t.attr("class","x-axis2").call(Object(f.a)($).tickValues([]).tickSize(0)).select(".domain").style("transform","translate3d(0, ".concat(n(0),"px, 0)")),n(0)!==r?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},h=function(t,n,e){return t.attr("class","y-axis").call(Object(f.b)(n).ticks(4).tickFormat((function(t){return Object(c.e)(t,e)})).tickPadding(4))};n.forEach((function(n,s){var f,v=L.current[s],p=Object(m.a)(v),_=p.transition().duration(a.d),w=tt[s],A=a.z[n],N="%"===a.z[n].format?"%":"short",T=!!(null===(f=a.z[n])||void 0===f?void 0:f.nonLinear);p.select(".x-axis").style("transform","translate3d(0, ".concat(r,"px, 0)")).transition(_).call(u),p.select(".x-axis2").transition(_).call(l,w),p.select(".y-axis").style("transform","translate3d(".concat(e,"px, 0, 0)")).transition(_).call(h,w,N),p.selectAll("circle.normal").data(W?[]:o,(function(t){return t})).join((function(t){return t.append("circle").attr("class","normal").attr("fill",null===A||void 0===A?void 0:A.color).attr("stroke",null===A||void 0===A?void 0:A.color).attr("cx",(function(t){return $(Object(c.j)(t))})).attr("cy",(function(t){return w(i?0:Q(t,n))})).attr("r",2)})).transition(_).attr("cx",(function(t){return $(Object(c.j)(t))})).attr("cy",(function(t){return w(Q(t,n))}));var E=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(g.a)().curve(O).x((function(t){return $(Object(c.j)(t))})).y0(w(0)).y1(e?w(0):function(t){return w(Q(t,n,!1))})(t)};p.selectAll(".trend-area").data(t&&"delta"===k&&!T&&W?[o]:[]).join((function(t){return t.append("path").attr("class","trend-area").call((function(t){return t.attr("d",(function(t){return E(t,!0)})).transition(_).attr("d",E)}))}),(function(t){return t.call((function(t){return t.transition(_).attrTween("d",(function(t){var n=Object(m.a)(this).attr("d"),e=E(t);return Object(d.a)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(_).attr("d",(function(t){return E(t,!0)})).remove()}))})).transition(_).attr("opacity",V?.3:1),p.selectAll(".stem").data(!t||"delta"!==k||T||W?[]:o,(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").attr("stroke-width",4).attr("x1",(function(t){return $(Object(c.j)(t))})).attr("y1",w(0)).attr("x2",(function(t){return $(Object(c.j)(t))})).attr("y2",w(0))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(_).attr("x1",(function(t){return $(Object(c.j)(t))})).attr("x2",(function(t){return $(Object(c.j)(t))})).attr("y1",w(0)).attr("y2",w(0)).remove()}))})).transition(_).attr("x1",(function(t){return $(Object(c.j)(t))})).attr("y1",w(0)).attr("x2",(function(t){return $(Object(c.j)(t))})).attr("y2",(function(t){return w(Q(t,n,!1))})).attr("opacity",V?.2:1);var S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x.a;return Object(y.a)().curve(e).x((function(t){return $(Object(c.j)(t))})).y((function(e){return w(Q(e,n,t))}))};p.select(".trend").selectAll("path").data(t&&("total"===k||T||V)?[o]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke-width",4).attr("d",S()).call((function(t){return t.transition(_).attr("opacity",1)}))}),(function(t){return t.call((function(t){return t.attr("opacity",1).transition(_).attrTween("d",(function(t){var n=Object(m.a)(this).attr("d"),e=S()(t);return Object(d.a)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(_).attr("opacity",0).remove()}))})).attr("stroke",(null===A||void 0===A?void 0:A.color)+(W?"99":"50")),p.select(".trend-background").selectAll("path").data(t&&"delta"===k&&T&&V?[o]:[]).join((function(t){return t.append("path").attr("class","trend-background").attr("fill","none").attr("stroke-width",4).attr("d",S(!1,M.a)).call((function(t){return t.transition(_).attr("opacity",.2)}))}),(function(t){return t.call((function(t){return t.transition(_).attrTween("d",(function(t){var n=Object(m.a)(this).attr("d"),e=S(!1,M.a)(t);return Object(d.a)(n,e)}))}))}),(function(t){return t.call((function(t){return t.transition(_).attr("opacity",0).remove()}))})).attr("stroke",(null===A||void 0===A?void 0:A.color)+(W?"99":"50")),p.selectAll("*").attr("pointer-events","none"),p.on("mousemove",j).on("touchmove",(function(t){return j(t.touches[0])})).on("mouseout touchend",b)}))}function j(t){var n=Object(v.a)(t)[0],e=$.invert(n);if(!isNaN(e)){var r=(0,Object(s.a)((function(t){return Object(c.j)(t)})).left)(o,e,1),i=o[r-1],a=o[r];K(e-Object(c.j)(i)<Object(c.j)(a)-e?i:a)}}function b(n){K(o[t-1])}}),[I,B,k,V,W,$,tt,n,Q,o]),Object(A.useEffect)((function(){n.forEach((function(t,n){var e=L.current[n],r=Object(m.a)(e),i=a.z[t],o=tt[n],u=r.transition().duration(a.d);r.selectAll("circle.condensed").data(W&&q?[q]:[],(function(t){return t})).join((function(n){return n.append("circle").attr("class","condensed").attr("fill",null===i||void 0===i?void 0:i.color).attr("stroke",null===i||void 0===i?void 0:i.color).attr("pointer-events","none").attr("cx",(function(t){return $(Object(c.j)(t))})).attr("cy",(function(n){return o(Q(n,t))})).attr("r",4)})).transition(u).attr("cx",(function(t){return $(Object(c.j)(t))})).attr("cy",(function(n){return o(Q(n,t))})),W||r.selectAll("circle").attr("r",(function(t){return t===q?4:2}))}))}),[W,q,$,tt,n,Q]);var nt=Object(A.useCallback)((function(t){var n;if(q){var e=Q(q,t);if(!(null===(n=a.z[t])||void 0===n?void 0:n.hideZero)||0!==e){var r=o[o.findIndex((function(t){return t===q}))-1];return e-Q(r,t)}}}),[o,q,Q]),et=Object(A.useMemo)((function(){return n.map((function(t,n){return{animationDelay:"".concat(250*n,"ms")}}))}),[n]);return Object(E.jsx)("div",{className:"Timeseries",children:n.map((function(t,n){var e=Q(q,t),r=nt(t,n),i=a.z[t];return Object(E.jsxs)("div",{className:u()("svg-parent fadeInUp","is-".concat(t)),style:et[n],ref:0===n?U:null,children:[q&&Object(E.jsxs)("div",{className:u()("stats","is-".concat(t)),children:[Object(E.jsx)("h5",{className:"title",children:P(Object(c.a)(i.displayName))}),Object(E.jsx)("h5",{children:Object(c.c)(q,"dd MMMM")}),Object(E.jsxs)("div",{className:"stats-bottom",children:[Object(E.jsx)("h2",{children:F&&(null===i||void 0===i?void 0:i.hasPrimary)?"-":Object(c.e)(e,"short"!==i.format?i.format:"long",t)}),Object(E.jsx)("h6",{children:F&&(null===i||void 0===i?void 0:i.hasPrimary)?"":"".concat(r>0?"+":"").concat(Object(c.e)(r,"short"!==i.format?i.format:"long",t))})]})]}),Object(E.jsxs)("svg",{ref:function(t){L.current[n]=t},preserveAspectRatio:"xMidYMid meet",children:[Object(E.jsx)("g",{className:"x-axis"}),Object(E.jsx)("g",{className:"x-axis2"}),Object(E.jsx)("g",{className:"y-axis"}),Object(E.jsx)("g",{className:"trend-background"}),Object(E.jsx)("g",{className:"trend"})]})]},t)}))})}var V=function(t,n){return!!w()(n.chartType,t.chartType)&&(!!w()(n.isUniform,t.isUniform)&&(!!w()(n.isLog,t.isLog)&&(!!w()(n.isMovingAverage,t.isMovingAverage)&&(!!w()(n.regionHighlighted.stateCode,t.regionHighlighted.stateCode)&&(!!w()(n.regionHighlighted.districtName,t.regionHighlighted.districtName)&&(!!w()(n.noRegionHighlightedDistrictData,t.noRegionHighlightedDistrictData)&&(!!w()(n.endDate,t.endDate)&&(!!w()(n.statistics,t.statistics)&&!!w()(n.dates,t.dates)))))))))};n.default=Object(A.memo)(D,V)}}]);
//# sourceMappingURL=19.6603b937.chunk.js.map