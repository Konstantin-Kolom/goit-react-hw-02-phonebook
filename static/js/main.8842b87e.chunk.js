(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={section:"Section_section__1KMbK"}},18:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(8),i=n.n(c),o=(n(17),n(18),n(12)),s=n(2),u=n(3),l=n(5),b=n(4),h=n(9),d=n.n(h),j=n(10),m=n.n(j),p=n(0);function f(e){var t=e.children,n=e.title;return Object(p.jsxs)("section",{className:m.a.section,children:[Object(p.jsx)("h1",{children:n}),t]})}var O=n(11),v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.hendleChange=function(t){var n=t.currentTarget,r=n.name,a=n.value;e.setState(Object(O.a)({},r,a))},e.hendleSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:"",id:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.hendleSubmit,children:[Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter contact name",required:!0,onChange:this.hendleChange})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter contact number",required:!0,onChange:this.hendleChange})]}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("ul",{children:this.props.stateApp.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(p.jsxs)("li",{className:"",id:n,children:[Object(p.jsx)("p",{children:r}),Object(p.jsx)("p",{children:a}),Object(p.jsx)("button",{type:"button",onClick:function(){return e.props.onDeleteContact(n)},children:"Delete"})]},n)}))})}}]),n}(r.Component),C=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onchangeFilter;return Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"text",value:t,onChange:n})})}}]),n}(r.Component),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmit=function(t){var n={id:d.a.generate(t.name),name:t.name,number:t.number};if(e.state.contacts.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()})))return alert("".concat(n.name," is alresdy in contacts"));(n.name="")||e.setState((function(e){return{contacts:[n].concat(Object(o.a)(e.contacts))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.deleteContact=function(t){console.log(t),e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(f,{title:"Phonebook",children:[Object(p.jsx)(v,{onFormSubmit:this.formSubmit}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(C,{value:e,onchangeFilter:this.changeFilter}),Object(p.jsx)(x,{stateApp:n,onDeleteContact:this.deleteContact})]})})}}]),n}(r.Component);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8842b87e.chunk.js.map