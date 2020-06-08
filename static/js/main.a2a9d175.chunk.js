(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{32:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n,c,r=a(0),o=a.n(r),u=a(18),s=a.n(u),i=a(10),l=a(9),O=a(2),d=a(47),b=Object(d.a)("FETCH_TODOS"),p=Object(d.a)("INSERT_TODO"),m=Object(d.a)("TOGGLE_TODO"),E=Object(d.a)("DELETE_TODO"),j=Object(d.a)("DRAG_TODO"),f=Object(d.a)("EDIT_TODO"),T=a(17),h=function(e){return e.todo},v=Object(T.a)([h],(function(e){return e})),x=(Object(T.a)([h],(function(e){return e.todos})),a(11)),D=function(){var e=new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()<9?"0".concat(e.getMonth()+1):e.getMonth()+1,"-").concat(e.getDate()<10?"0".concat(e.getDate()):e.getDate(),"T00:00")},y=Object(d.a)("SET_TITLE"),_=Object(d.a)("SET_TEXT"),S=Object(d.a)("SET_DATE"),g=Object(T.a)([function(e){return e.input}],(function(e){return e})),k=function(){var e=Object(i.b)(),t=Object(r.useCallback)((function(t){return e(y(t),[e])}),[e]),a=Object(r.useCallback)((function(t){return e(_(t),[e])}),[e]),n=Object(r.useCallback)((function(t){return e(S(t),[e])}),[e]);return{input:Object(i.c)(g),setTitle:t,setText:a,setDate:n}},w=function(){var e=Object(i.b)(),t=Object(i.c)(v).todos,a=k(),n=a.setTitle,c=a.setText,o=a.setDate,u=Object(r.useCallback)((function(t){return e(b(t),[e])}),[e]);return{todos:t,getTodos:u,putTodo:function(a,r){var u;e(p({key:a,todo:Object(O.a)(Object(O.a)({id:(u=t,(u.length?Math.max.apply(Math,Object(x.a)(u.map((function(e){return e.id}))))+1:0)||0)},r),{},{done:!1})})),n(""),c(""),o("")},deleteTodo:function(t,a){return e(E({key:t,id:a}))},toggleTodo:function(t,a){return e(m({key:t,id:a}))},dragTodo:function(t,a){return e(j({key:t,todos:a}))},editTodo:function(t,a,n){return e(f({key:t,id:a,todo:n}))}}},C=function(){var e=k(),t=e.input,a=e.setTitle,n=e.setText,c=e.setDate,u=t.title,s=t.text,i=t.date,O=w().putTodo,d=Object(r.useState)(!1),b=Object(l.a)(d,2),p=b[0],m=b[1],E=function(e){var t=e.target,r=t.name,o=t.value;switch(r){case"title":a(o);break;case"text":n(o);break;case"date":c(o)}};return o.a.createElement("div",{className:"input"},o.a.createElement("input",{type:"text",name:"title",onChange:E,value:u,placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.(\ud544\uc218)"}),o.a.createElement("textarea",{type:"text",name:"text",onChange:E,value:s,placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.(\ud544\uc218)"}),p?o.a.createElement("input",{className:"input_date",type:"datetime-local",name:"date",onChange:E,min:D(),value:i,placeholder:"\ub9c8\uac10\uae30\ud55c\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}):o.a.createElement("button",{type:"button",onClick:function(){m((function(e){return!e}))}},"\ub9c8\uac10\uae30\ud55c \uc120\ud0dd"),o.a.createElement("div",{className:"add-button",onClick:function(){u.length?s.length?new Date(i).getTime()<(new Date).getTime()?alert("\ud604\uc7ac\uc2dc\uac04 \ubcf4\ub2e4 \uc774\uc804 \uc2dc\uac04\uc740 \uc120\ud0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."):O("todo",t):alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."):alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")}},"Add"))},R=a(31),I=a(7),U=function(e){var t=e.id,a=e.title,n=e.done,c=e.text,u=e.date,s=e.expired,i=Object(r.useState)(!1),d=Object(l.a)(i,2),b=d[0],p=d[1],m=Object(r.useState)(!1),E=Object(l.a)(m,2),j=E[0],f=E[1],T=Object(r.useState)({title:a,text:c,date:u}),h=Object(l.a)(T,2),v=h[0],x=h[1],y=w(),_=y.deleteTodo,S=y.toggleTodo,g=y.editTodo,k=function(e){var t=e.target,a=t.name,n=t.value;x(Object(O.a)(Object(O.a)({},v),{},Object(I.a)({},a,n)))},C=v.title,R=v.text,U=v.date;return o.a.createElement("div",{className:"item".concat(s?" expired":""),onClick:function(){return f((function(e){return!e}))}},b?null:o.a.createElement("div",{className:"item_chk"},o.a.createElement("input",{type:"checkbox",className:"tick",onClick:function(e){e.stopPropagation(),S("todo",t)},checked:n,readOnly:!0})),o.a.createElement("div",{className:"item_box".concat(b?" editing":"")},o.a.createElement("div",{className:"text-container"},b?o.a.createElement(o.a.Fragment,null,"title:",o.a.createElement("input",{type:"text",name:"title",onChange:k,value:C,placeholder:"\ud0c0\uc774\ud2c0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})):o.a.createElement("div",{className:"title".concat(n?" done":"")},"[title] ",a),b?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"date:",o.a.createElement("input",{type:"datetime-local",name:"date",onChange:k,min:D(),value:U})):u?o.a.createElement("div",{className:"date".concat(n?" done":"")},"[\ub9c8\uac10\uae30\ud55c] ",function(e){var t=new Date(e);return new Intl.DateTimeFormat("ko",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(t).reduce((function(e,t,a){return 0===a?t.value:e+t.value}),"")}(u)):null,b?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),"content:",o.a.createElement("br",null),o.a.createElement("textarea",{type:"text",name:"text",onChange:k,value:R,style:{width:"80%",height:"45%",resize:"none"}})):o.a.createElement("div",{className:"text".concat(n?" done":"").concat(j?" expand":"")},"[content] ",c.split("\n").map((function(e,t){return o.a.createElement(r.Fragment,{key:t},e,o.a.createElement("br",null))})))),o.a.createElement("div",{className:"item_btn"},o.a.createElement("div",{className:"delete",onClick:function(){return _("todo",t)}},"DELETE"),o.a.createElement("div",{className:"edit",onClick:function(){b&&g("todo",t,v),p((function(e){return!e}))}},b?"SAVE":"EDIT"))))},L=function(e){var t=e.todos,a=w().dragTodo,n=Object(r.useState)([]),c=Object(l.a)(n,2),u=c[0],s=c[1];Object(r.useEffect)((function(){s(t)}),[s,t]);var i=Object(r.useMemo)((function(){return u.map((function(e){return o.a.createElement(U,Object.assign({key:e.id},e,{expired:new Date(e.date).getTime()<(new Date).getTime()}))}))}),[u]);return o.a.createElement("div",{className:"list"},o.a.createElement(R.a,{list:u,setList:s,animation:150,onEnd:function(){return a("todo",u)}},i))},N=function(){return o.a.createElement("svg",{height:"20pt",viewBox:"-20 0 512 512.00102",width:"20pt",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"m426.492188 348.875h-.03125c-14.722657-.007812-23.035157-7.648438-27.792969-25.53125-4.863281-18.289062-5.027344-44.8125-5.199219-72.894531-.207031-34.023438-.441406-72.585938-8.898438-107.074219-1-4.078125-5.121093-6.574219-9.199218-5.574219-4.074219 1-6.570313 5.117188-5.574219 9.195313 8.035156 32.75 8.261719 70.363281 8.464844 103.546875.179687 29.078125.34375 56.542969 5.707031 76.707031 2.332031 8.769531 5.675781 15.976562 9.996094 21.625h-316.855469c4.320313-5.648438 7.664063-12.855469 9.996094-21.625 5.363281-20.164062 5.53125-47.628906 5.707031-76.707031.269531-44.394531.578125-94.710938 18.742188-133.21875 20.445312-43.347657 61-64.421875 123.984374-64.421875 34.589844 0 62.894532 6.5 84.125 19.324218 18.410157 11.117188 31.925782 26.917969 41.320313 48.304688 1.6875 3.84375 6.175781 5.59375 10.019531 3.902344 3.84375-1.6875 5.59375-6.171875 3.90625-10.019532-10.550781-24.015624-26.492187-42.589843-47.382812-55.207031-13.335938-8.054687-28.996094-13.863281-46.832032-17.402343-1.796874-23.347657-21.355468-41.804688-45.15625-41.804688-23.800781 0-43.363281 18.460938-45.148437 41.8125-17.015625 3.371094-32.058594 8.804688-44.96875 16.285156-20.773437 12.039063-36.796875 29.785156-47.625 52.738282-19.59375 41.542968-19.914063 93.644531-20.191406 139.613281-.171875 28.082031-.332031 54.605469-5.199219 72.894531-4.757812 17.882812-13.070312 25.523438-27.792969 25.53125h-.03125c-24.582031 0-44.582031 20-44.582031 44.585938 0 24.582031 20 44.582031 44.582031 44.582031h48.128907c4.199218 0 7.605468-3.40625 7.605468-7.605469s-3.40625-7.601562-7.605468-7.601562h-48.128907c-16.195312 0-29.375-13.179688-29.375-29.375 0-16.195313 13.175781-29.371094 29.371094-29.375h.003906.027344 381.851563.027343.007813c16.191406.003906 29.367187 13.179687 29.367187 29.375 0 16.195312-13.179687 29.375-29.375 29.375h-303.359375c-4.199218 0-7.601562 3.402343-7.601562 7.601562s3.402344 7.605469 7.601562 7.605469h31.214844c3.847656 41.421875 38.785156 73.957031 81.195312 73.957031 42.40625 0 77.34375-32.535156 81.191407-73.957031h109.761719c24.582031 0 44.582031-20 44.582031-44.582031 0-24.585938-20-44.585938-44.582031-44.585938zm-190.953126-333.667969c14.5625 0 26.742188 10.402344 29.503907 24.164063-9.335938-1.101563-19.164063-1.675782-29.503907-1.675782-10.339843 0-20.167968.570313-29.5 1.671876 2.761719-13.761719 14.9375-24.160157 29.5-24.160157zm0 481.585938c-34.015624 0-62.121093-25.734375-65.90625-58.75h131.808594c-3.785156 33.015625-31.890625 58.75-65.902344 58.75zm0 0"}),o.a.createElement("path",{d:"m357.632812 47.722656c.136719.074219 13.675782 7.800782 26.996094 25.75 17.84375 24.039063 26.886719 54.070313 26.886719 89.261719 0 4.199219 3.40625 7.605469 7.605469 7.605469 4.199218 0 7.605468-3.40625 7.605468-7.605469 0-48.445313-16.542968-80.601563-30.421874-99.042969-15.25-20.265625-30.644532-28.910156-31.292969-29.269531-3.667969-2.023437-8.269531-.695313-10.308594 2.960937-2.039063 3.660157-.722656 8.285157 2.929687 10.339844zm0 0"}),o.a.createElement("path",{d:"m415.003906 50.511719c1.222656.800781 29.96875 20.09375 29.96875 68.632812 0 4.199219 3.40625 7.601563 7.605469 7.601563s7.601563-3.402344 7.601563-7.601563c0-57.25-35.464844-80.480469-36.976563-81.441406-3.527344-2.246094-8.191406-1.207031-10.457031 2.3125-2.265625 3.515625-1.246094 8.210937 2.257812 10.496094zm0 0"}),o.a.createElement("path",{d:"m51.949219 170.339844c4.199219 0 7.605469-3.40625 7.605469-7.605469 0-35.191406 9.046874-65.222656 26.886718-89.261719 13.238282-17.835937 26.695313-25.578125 26.992188-25.75 3.660156-2.035156 4.988281-6.652344 2.960937-10.320312-2.035156-3.675782-6.660156-5.007813-10.335937-2.980469-.648438.359375-16.042969 9.003906-31.292969 29.269531-13.875 18.441406-30.417969 50.597656-30.417969 99.042969 0 4.199219 3.402344 7.605469 7.601563 7.605469zm0 0"}),o.a.createElement("path",{d:"m18.496094 126.746094c4.199218 0 7.601562-3.402344 7.601562-7.601563 0-48.5 28.703125-67.804687 29.96875-68.628906 3.515625-2.261719 4.546875-6.945313 2.300782-10.476563-2.253907-3.542968-6.953126-4.585937-10.5-2.332031-1.507813.960938-36.976563 24.1875-36.976563 81.4375 0 4.199219 3.40625 7.601563 7.605469 7.601563zm0 0"}))},A=function(){return o.a.createElement("svg",{height:"20pt",viewBox:"-20 0 512 512.00102",width:"20pt",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"m426.492188 356.484375h-381.910157c17.5 0 27.394531-9.15625 33.011719-24.332031 27.167969-73.285156-45.199219-286.851563 157.949219-286.851563 203.144531 0 130.765625 213.566407 157.9375 286.851563 5.625 15.175781 15.523437 24.332031 33.011719 24.332031zm0 0",fill:"#f7d360"}),o.a.createElement("path",{d:"m463.46875 393.457031c0 20.421875-16.558594 36.976563-36.976562 36.976563h-381.910157c-10.210937 0-19.457031-4.136719-26.148437-10.828125-6.691406-6.691407-10.828125-15.9375-10.828125-26.148438 0-20.417969 16.554687-36.972656 36.976562-36.972656h381.910157c10.210937 0 19.457031 4.136719 26.148437 10.828125s10.828125 15.9375 10.828125 26.144531zm0 0",fill:"#e58e13"}),o.a.createElement("path",{d:"m393.480469 332.152344h-198.5c-21.398438 0-38.511719-17.714844-37.847657-39.105469 2.796876-90.5-11.636718-246.027344 76.921876-247.738281-243.09375 1.257812-87.699219 311.175781-189.46875 311.175781h381.90625c-17.488282 0-27.386719-9.15625-33.011719-24.332031zm0 0",fill:"#e58e13"}),o.a.createElement("path",{d:"m463.46875 393.457031c0 20.421875-16.558594 36.976563-36.976562 36.976563h-275.0625c-10.207032 0-19.453126-4.136719-26.144532-10.828125-6.691406-6.691407-10.828125-15.9375-10.828125-26.148438 0-20.417969 16.554688-36.972656 36.972657-36.972656h275.0625c10.210937 0 19.457031 4.136719 26.148437 10.828125s10.828125 15.9375 10.828125 26.144531zm0 0",fill:"#f7d360"}),o.a.createElement("path",{d:"m309.492188 430.433594c0 34.003906-22.945313 62.636718-54.179688 71.285156-6.296875 1.742188-12.925781 2.675781-19.769531 2.675781-40.851563 0-73.960938-33.113281-73.960938-73.960937zm0 0",fill:"#e58e13"}),o.a.createElement("path",{d:"m305.914062 453.246094c-7.613281 23.5-26.675781 41.851562-50.601562 48.472656-15.042969-4.160156-28.160156-12.953125-37.722656-24.746094-7.707032-9.507812-.753906-23.726562 11.484375-23.726562zm0 0",fill:"#f7d360"}),o.a.createElement("path",{d:"m273.125 48.128906c.082031-.933594.113281-1.875.113281-2.828125 0-20.816406-16.882812-37.695312-37.695312-37.695312-20.828125 0-37.695313 16.878906-37.695313 37.695312 0 .953125.027344 1.894531.109375 2.828125",fill:"#e58e13"}),o.a.createElement("path",{d:"m426.492188 348.875h-.03125c-14.722657-.007812-23.035157-7.648438-27.792969-25.53125-4.863281-18.289062-5.027344-44.8125-5.199219-72.894531-.207031-34.023438-.441406-72.585938-8.898438-107.074219-1-4.078125-5.121093-6.574219-9.199218-5.574219-4.074219 1-6.570313 5.117188-5.574219 9.195313 8.035156 32.75 8.261719 70.363281 8.464844 103.546875.179687 29.078125.34375 56.542969 5.707031 76.707031 2.332031 8.769531 5.675781 15.976562 9.996094 21.625h-316.855469c4.320313-5.648438 7.664063-12.855469 9.996094-21.625 5.363281-20.164062 5.53125-47.628906 5.707031-76.707031.269531-44.394531.578125-94.710938 18.742188-133.21875 20.445312-43.347657 61-64.421875 123.984374-64.421875 34.589844 0 62.894532 6.5 84.125 19.324218 18.410157 11.117188 31.925782 26.917969 41.320313 48.304688 1.6875 3.84375 6.175781 5.59375 10.019531 3.902344 3.84375-1.6875 5.59375-6.171875 3.90625-10.019532-10.550781-24.015624-26.492187-42.589843-47.382812-55.207031-13.335938-8.054687-28.996094-13.863281-46.832032-17.402343-1.796874-23.347657-21.355468-41.804688-45.15625-41.804688-23.800781 0-43.363281 18.460938-45.148437 41.8125-17.015625 3.371094-32.058594 8.804688-44.96875 16.285156-20.773437 12.039063-36.796875 29.785156-47.625 52.738282-19.59375 41.542968-19.914063 93.644531-20.191406 139.613281-.171875 28.082031-.332031 54.605469-5.199219 72.894531-4.757812 17.882812-13.070312 25.523438-27.792969 25.53125h-.03125c-24.582031 0-44.582031 20-44.582031 44.585938 0 24.582031 20 44.582031 44.582031 44.582031h48.128907c4.199218 0 7.605468-3.40625 7.605468-7.605469s-3.40625-7.601562-7.605468-7.601562h-48.128907c-16.195312 0-29.375-13.179688-29.375-29.375 0-16.195313 13.175781-29.371094 29.371094-29.375h.003906.027344 381.851563.027343.007813c16.191406.003906 29.367187 13.179687 29.367187 29.375 0 16.195312-13.179687 29.375-29.375 29.375h-303.359375c-4.199218 0-7.601562 3.402343-7.601562 7.601562s3.402344 7.605469 7.601562 7.605469h31.214844c3.847656 41.421875 38.785156 73.957031 81.195312 73.957031 42.40625 0 77.34375-32.535156 81.191407-73.957031h109.761719c24.582031 0 44.582031-20 44.582031-44.582031 0-24.585938-20-44.585938-44.582031-44.585938zm-190.953126-333.667969c14.5625 0 26.742188 10.402344 29.503907 24.164063-9.335938-1.101563-19.164063-1.675782-29.503907-1.675782-10.339843 0-20.167968.570313-29.5 1.671876 2.761719-13.761719 14.9375-24.160157 29.5-24.160157zm0 481.585938c-34.015624 0-62.121093-25.734375-65.90625-58.75h131.808594c-3.785156 33.015625-31.890625 58.75-65.902344 58.75zm0 0"}),o.a.createElement("path",{d:"m357.632812 47.722656c.136719.074219 13.675782 7.800782 26.996094 25.75 17.84375 24.039063 26.886719 54.070313 26.886719 89.261719 0 4.199219 3.40625 7.605469 7.605469 7.605469 4.199218 0 7.605468-3.40625 7.605468-7.605469 0-48.445313-16.542968-80.601563-30.421874-99.042969-15.25-20.265625-30.644532-28.910156-31.292969-29.269531-3.667969-2.023437-8.269531-.695313-10.308594 2.960937-2.039063 3.660157-.722656 8.285157 2.929687 10.339844zm0 0"}),o.a.createElement("path",{d:"m415.003906 50.511719c1.222656.800781 29.96875 20.09375 29.96875 68.632812 0 4.199219 3.40625 7.601563 7.605469 7.601563s7.601563-3.402344 7.601563-7.601563c0-57.25-35.464844-80.480469-36.976563-81.441406-3.527344-2.246094-8.191406-1.207031-10.457031 2.3125-2.265625 3.515625-1.246094 8.210937 2.257812 10.496094zm0 0"}),o.a.createElement("path",{d:"m51.949219 170.339844c4.199219 0 7.605469-3.40625 7.605469-7.605469 0-35.191406 9.046874-65.222656 26.886718-89.261719 13.238282-17.835937 26.695313-25.578125 26.992188-25.75 3.660156-2.035156 4.988281-6.652344 2.960937-10.320312-2.035156-3.675782-6.660156-5.007813-10.335937-2.980469-.648438.359375-16.042969 9.003906-31.292969 29.269531-13.875 18.441406-30.417969 50.597656-30.417969 99.042969 0 4.199219 3.402344 7.605469 7.601563 7.605469zm0 0"}),o.a.createElement("path",{d:"m18.496094 126.746094c4.199218 0 7.601562-3.402344 7.601562-7.601563 0-48.5 28.703125-67.804687 29.96875-68.628906 3.515625-2.261719 4.546875-6.945313 2.300782-10.476563-2.253907-3.542968-6.953126-4.585937-10.5-2.332031-1.507813.960938-36.976563 24.1875-36.976563 81.4375 0 4.199219 3.40625 7.601563 7.605469 7.601563zm0 0"}))},G=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=w(),u=c.todos,s=c.getTodos;Object(r.useEffect)((function(){s()}),[s]);var i=function(){return u.length?u.filter((function(e){return new Date(e.date).getTime()<(new Date).getTime()})):[]};Object(r.useEffect)((function(){var e=setInterval((function(){i().length&&!a&&(alert("\ub9c8\uac10\uae30\ud55c\uc774 \uc9c0\ub09c \ud560 \uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud655\uc778\ud574\uc8fc\uc138\uc694."),clearInterval(e))}),6e4);return function(){clearInterval(e)}}));return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"bell",onClick:function(){var e=i();if(e.length){var t=e.map((function(e){return e.title}));alert("\ud0c0\uc774\ud2c0 [".concat(t.join(","),"] \ud560 \uc77c\uc740 \ub9c8\uac10\uae30\ud55c\uc774 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4.")),n(!0)}}},i().length?a?o.a.createElement(N,null):o.a.createElement(A,null):o.a.createElement(N,null)),o.a.createElement("h1",null,"Todo List"),o.a.createElement("div",{className:"content"},o.a.createElement(C,null),u.length?o.a.createElement(L,{todos:u}):null))},z=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(G,null))},F=(a(43),a(8)),Q=a(29),M=a(30),J=a(46),q=Object(J.a)((n={},Object(I.a)(n,"SET_TITLE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{title:t.payload})})),Object(I.a)(n,"SET_TEXT",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{text:t.payload})})),Object(I.a)(n,"SET_DATE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{date:t.payload})})),n),{title:"",text:"",date:""}),B=Object(J.a)((c={},Object(I.a)(c,"TODOS_REQUEST",(function(e){return Object(O.a)(Object(O.a)({},e),{},{status:"fetching"})})),Object(I.a)(c,"TODOS_SUCCESS",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{todos:Object(x.a)(t.payload),status:"success"})})),Object(I.a)(c,"TODOS_FAILURE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{status:"error",exception:t.payload})})),Object(I.a)(c,"INSERT_TODO_REQUEST",(function(e){return Object(O.a)(Object(O.a)({},e),{},{status:"fetching"})})),Object(I.a)(c,"INSERT_TODO_SUCCESS",(function(e,t){var a=t.payload.todo;return Object(O.a)(Object(O.a)({},e),{},{todos:[].concat(Object(x.a)(e.todos),[a]),status:"success"})})),Object(I.a)(c,"INSERT_TODO_FAILURE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{statue:"error",exception:t.payload})})),Object(I.a)(c,"DELETE_TODO_REQUEST",(function(e){return Object(O.a)(Object(O.a)({},e),{},{statue:"fetching"})})),Object(I.a)(c,"DELETE_TODO_SUCCESS",(function(e,t){var a=t.payload.id;return Object(O.a)(Object(O.a)({},e),{},{todos:Object(x.a)(e.todos.filter((function(e){return e.id!==a}))),status:"success"})})),Object(I.a)(c,"DELETE_TODO_FAILURE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{statue:"error",exception:t.payload})})),Object(I.a)(c,"TOGGLE_TODO_REQUEST",(function(e){return Object(O.a)(Object(O.a)({},e),{},{status:"request"})})),Object(I.a)(c,"TOGGLE_TODO_SUCCESS",(function(e,t){var a=t.payload.id;return Object(O.a)(Object(O.a)({},e),{},{todos:Object(x.a)(e.todos.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{done:e.id===a?!e.done:e.done})})))})})),Object(I.a)(c,"TOGGLE_TODO_FAILURE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{status:"error",exception:t.payload})})),Object(I.a)(c,"DRAG_TODO_REQUEST",(function(e){return Object(O.a)(Object(O.a)({},e),{},{status:"request"})})),Object(I.a)(c,"DRAG_TODO_SUCCESS",(function(e,t){var a=t.payload.todos;return Object(O.a)(Object(O.a)({},e),{},{todos:a,status:"success"})})),Object(I.a)(c,"DRAG_TODO_FAILURE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{status:"error",exception:t.payload})})),Object(I.a)(c,"EDIT_TODO_REQUEST",(function(e){return Object(O.a)(Object(O.a)({},e),{},{status:"request"})})),Object(I.a)(c,"EDIT_TODO_SUCCESS",(function(e,t){var a=t.payload,n=a.id,c=a.todo,r=c.title,o=c.text,u=c.date;return Object(O.a)(Object(O.a)({},e),{},{todos:Object(x.a)(e.todos.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{title:e.id===n?r:e.title,text:e.id===n?o:e.text,date:e.id===n?u:e.date})}))),status:"success"})})),Object(I.a)(c,"EDIT_TODO_FAILURE",(function(e,t){return Object(O.a)(Object(O.a)({},e),{},{status:"error",exception:t.payload})})),c),{todos:[],status:"",exception:null}),H=Object(F.combineReducers)({input:q,todo:B}),P=a(6),X=a.n(P),V=a(4),W=a(25),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"todo";return JSON.parse(localStorage.getItem(e)||"[]")},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"todo",t=arguments.length>1?arguments[1]:void 0;return localStorage.setItem(e,JSON.stringify(t))},Z=X.a.mark(be),$=X.a.mark(pe),ee=X.a.mark(me),te=X.a.mark(Ee),ae=X.a.mark(je),ne=X.a.mark(fe),ce=X.a.mark(Te),re=X.a.mark(he),oe=X.a.mark(ve),ue=X.a.mark(xe),se=X.a.mark(De),ie=X.a.mark(ye),le=X.a.mark(_e),Oe=function(){var e=Object(W.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(W.a)(X.a.mark((function e(t){var a,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.key,n=t.value,e.next=3,K(a,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function be(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)("FETCH_TODOS",pe);case 2:case"end":return e.stop()}}),Z)}function pe(e){var t;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(V.d)({type:"TODOS_REQUEST"});case 3:return a.prev=3,a.t0=V.d,a.t1="TODOS_SUCCESS",a.next=8,Object(V.b)(Oe,t)||[];case 8:return a.t2=a.sent,a.t3={type:a.t1,payload:a.t2},a.next=12,(0,a.t0)(a.t3);case 12:a.next=18;break;case 14:return a.prev=14,a.t4=a.catch(3),a.next=18,Object(V.d)({type:"TODOS_FAILURE",payload:a.t4});case 18:case"end":return a.stop()}}),$,null,[[3,14]])}function me(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)("INSERT_TODO",Ee);case 2:case"end":return e.stop()}}),ee)}function Ee(e){var t,a,n,c,r;return X.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.key,n=t.todo,o.next=3,Object(V.d)({type:"INSERT_TODO_REQUEST"});case 3:return o.prev=3,o.next=6,Object(V.d)({type:"INSERT_TODO_SUCCESS",payload:{todo:n}});case 6:return o.next=8,Object(V.e)();case 8:return c=o.sent,r=c.todo.todos,o.next=12,Object(V.b)(de,{key:a,value:r});case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(3),o.next=18,Object(V.d)({type:"INSERT_TODO_FAILURE",payload:o.t0});case 18:case"end":return o.stop()}}),te,null,[[3,14]])}function je(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)("DELETE_TODO",fe);case 2:case"end":return e.stop()}}),ae)}function fe(e){var t,a,n,c,r;return X.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.key,n=t.id,o.next=3,Object(V.d)({type:"DELETE_TODO_REQUEST"});case 3:return o.prev=3,o.next=6,Object(V.d)({type:"DELETE_TODO_SUCCESS",payload:{id:n}});case 6:return o.next=8,Object(V.e)();case 8:return c=o.sent,r=c.todo.todos,o.next=12,Object(V.b)(de,{key:a,value:r});case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(3),o.next=18,Object(V.d)({type:"DELETE_TODO_FAILURE",payload:o.t0});case 18:case"end":return o.stop()}}),ne,null,[[3,14]])}function Te(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)("TOGGLE_TODO",he);case 2:case"end":return e.stop()}}),ce)}function he(e){var t,a,n,c,r;return X.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.key,n=t.id,o.next=3,Object(V.d)({type:"TOGGLE_TODO_REQUEST"});case 3:return o.prev=3,o.next=6,Object(V.d)({type:"TOGGLE_TODO_SUCCESS",payload:{id:n}});case 6:return o.next=8,Object(V.e)();case 8:return c=o.sent,r=c.todo.todos,o.next=12,Object(V.b)(de,{key:a,value:r});case 12:o.next=18;break;case 14:return o.prev=14,o.t0=o.catch(3),o.next=18,Object(V.d)({type:"TOGGLE_TODO_FAILURE",paylaod:o.t0});case 18:case"end":return o.stop()}}),re,null,[[3,14]])}function ve(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)("DRAG_TODO",xe);case 2:case"end":return e.stop()}}),oe)}function xe(e){var t,a,n;return X.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.key,n=t.todos,c.next=3,Object(V.d)({type:"DRAG_TODO_REQUEST"});case 3:return c.prev=3,c.next=6,Object(V.d)({type:"DRAG_TODO_SUCCESS",payload:{todos:n}});case 6:return c.next=8,Object(V.b)(de,{key:a,value:n});case 8:c.next=14;break;case 10:return c.prev=10,c.t0=c.catch(3),c.next=14,Object(V.d)({type:"DRAG_TODO_FAILURE",payload:c.t0});case 14:case"end":return c.stop()}}),ue,null,[[3,10]])}function De(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.f)("EDIT_TODO",ye);case 2:case"end":return e.stop()}}),se)}function ye(e){var t,a,n,c,r,o;return X.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,a=t.key,n=t.id,c=t.todo,u.next=3,Object(V.d)({type:"EDIT_TODO_REQUEST"});case 3:return u.prev=3,u.next=6,Object(V.d)({type:"EDIT_TODO_SUCCESS",payload:{id:n,todo:c}});case 6:return u.next=8,Object(V.e)();case 8:return r=u.sent,o=r.todo.todos,u.next=12,Object(V.b)(de,{key:a,value:o});case 12:u.next=18;break;case 14:return u.prev=14,u.t0=u.catch(3),u.next=18,Object(V.d)({type:"EDIT_TODO_FAILURE",payload:u.t0});case 18:case"end":return u.stop()}}),ie,null,[[3,14]])}function _e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([Object(V.c)(be),Object(V.c)(me),Object(V.c)(je),Object(V.c)(Te),Object(V.c)(ve),Object(V.c)(De)]);case 2:case"end":return e.stop()}}),le)}var Se=X.a.mark(ge);function ge(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([Object(V.c)(_e)]);case 2:case"end":return e.stop()}}),Se)}var ke=Object(M.a)(),we=[ke],Ce=Object(Q.composeWithDevTools)({})(F.applyMiddleware.apply(void 0,we)),Re=Object(F.createStore)(H,Ce);ke.run(ge);var Ie=Re;s.a.render(o.a.createElement(i.a,{store:Ie},o.a.createElement(z,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a2a9d175.chunk.js.map