(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={ContactsList:"Contacts_ContactsList__dbS9n",ContactsItem:"Contacts_ContactsItem__svyGe",BtnDeletContact:"Contacts_BtnDeletContact__1gLrl"}},14:function(t,e,n){t.exports={section:"Section_section__1KMbK"}},26:function(t,e,n){},3:function(t,e,n){t.exports={ContactEntryForm:"DataRecordForm_ContactEntryForm__eqzDB",NameInputField:"DataRecordForm_NameInputField__2I-RY",ContactInputForm:"DataRecordForm_ContactInputForm__2AX3Y",btnFormContact:"DataRecordForm_btnFormContact__kdkWG",iconForm:"DataRecordForm_iconForm__1W7c8",inputName:"DataRecordForm_inputName__3SDyN"}},36:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(12),o=n.n(r),s=(n(25),n(26),n(20)),i=n(4),l=n(5),u=n(7),m=n(6),b=n(13),d=n.n(b),j=n(14),h=n.n(j),p=n(1);function O(t){var e=t.children,n=t.title;return Object(p.jsxs)("section",{className:h.a.section,children:[Object(p.jsx)("h1",{children:n}),e]})}var C=n(15),F=n(3),f=n.n(F),_=n(17),x=n(16),N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hendleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.hendleSubmit=function(e){e.preventDefault(),t.props.onFormSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:f.a.ContactEntryForm,onSubmit:this.hendleSubmit,children:[Object(p.jsxs)("label",{className:f.a.NameInputField,children:[Object(p.jsx)("span",{className:f.a.iconForm,children:Object(p.jsx)(x.a,{})}),Object(p.jsx)("span",{className:f.a.inputName,children:"Name:"}),Object(p.jsx)("input",{className:f.a.ContactInputForm,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter contact name",required:!0,onChange:this.hendleChange})]}),Object(p.jsxs)("label",{className:f.a.NameInputField,children:[Object(p.jsx)("span",{className:f.a.iconForm,children:Object(p.jsx)(_.a,{})}),Object(p.jsx)("span",{className:f.a.inputName,children:"Number:"}),Object(p.jsx)("input",{className:f.a.ContactInputForm,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Enter contact number",required:!0,onChange:this.hendleChange})]}),Object(p.jsx)("button",{className:f.a.btnFormContact,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(10),g=n.n(v),y=n(18),A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("ul",{className:g.a.ContactsList,children:this.props.stateApp.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(p.jsxs)("li",{className:g.a.ContactsItem,id:n,children:[Object(p.jsx)("p",{children:a}),Object(p.jsx)("p",{children:c}),Object(p.jsxs)("button",{className:g.a.BtnDeletContact,type:"button",onClick:function(){return t.props.onDeleteContact(n)},children:[Object(p.jsx)("span",{className:"",children:Object(p.jsx)(y.a,{})}),Object(p.jsx)("span",{children:"Delete"})]})]},n)}))})}}]),n}(a.Component),D=n(8),S=n.n(D),I=n(19),k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.onchangeFilter;return Object(p.jsx)("div",{className:S.a.conteiner,children:Object(p.jsxs)("label",{className:S.a.FilterLabel,children:[Object(p.jsx)("span",{className:S.a.iconFilter,children:Object(p.jsx)(I.a,{})}),Object(p.jsx)("span",{className:S.a.FilterTitle,children:"Find contacts by name:"}),Object(p.jsx)("input",{className:S.a.inputFilter,type:"text",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:n})]})})}}]),n}(a.Component),L=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmit=function(e){var n={id:d.a.generate(e.name),name:e.name,number:e.number};if(t.state.contacts.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()})))return alert("".concat(n.name," is alresdy in contacts"));t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){console.log(e),t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(O,{title:"Phonebook",children:[Object(p.jsx)(N,{onFormSubmit:this.formSubmit}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(k,{value:t,onchangeFilter:this.changeFilter}),Object(p.jsx)(A,{stateApp:n,onDeleteContact:this.deleteContact})]})})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={conteiner:"FilterContact_conteiner__1I1N9",FilterLabel:"FilterContact_FilterLabel__pD3xx",FilterTitle:"FilterContact_FilterTitle__2LP5o",iconFilter:"FilterContact_iconFilter__1PHDa",inputFilter:"FilterContact_inputFilter__1rG7c"}}},[[36,1,2]]]);
//# sourceMappingURL=main.f24d125d.chunk.js.map