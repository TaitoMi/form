(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{178:function(e,a,r){e.exports=r(370)},183:function(e,a,r){},185:function(e,a,r){},370:function(e,a,r){"use strict";r.r(a);var l=r(0),t=r.n(l),n=r(43),s=r.n(n),m=(r(183),r(165)),o=r(166),c=r(175),i=r(167),d=r(176),u=(r(184),r(185),r(372)),p=r(111),_=r(373),h=(r(186),r(174)),w=r(29),f=w.object().shape({name:w.string().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").max(50,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 50 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),age:w.number().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").min(18,"\u041d\u0435 \u043c\u043b\u0430\u0434\u0448\u0435 18 \u043b\u0435\u0442").max(65,"\u041d\u0435 \u0441\u0442\u0430\u0440\u0448\u0435 65"),email:w.string().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435").email("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email \u0430\u0434\u0440\u0435\u0441"),website:w.string().url("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"),accept:w.bool().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),E=function(e){var a=e.skills;return t.a.createElement(h.a,{initialValues:{name:"",password:"",repeatedPassword:"",email:"",website:""},validationSchema:f},(function(e){var r=e.values,l=e.errors,n=e.touched,s=e.handleChange,m=e.handleBlur,o=e.handleSubmit;return t.a.createElement("form",{className:"form",onSubmit:o},t.a.createElement(t.a.Fragment,null,a),t.a.createElement("div",{className:"form__row"},t.a.createElement("span",{htmlFor:"name",className:"form__label"},"\u0418\u043c\u044f:"),t.a.createElement(u.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:s,id:"name",name:"name",onBlur:m,value:r.name,className:"form__input ".concat(n.name&&l.name?"has-error":null)})),n.name&&l.name?t.a.createElement("div",{className:"input__error"},l.name):null,t.a.createElement("div",{className:"form__row"},t.a.createElement("span",{htmlFor:"password",className:"form__label"},"\u041f\u0430\u0440\u043e\u043b\u044c:"),t.a.createElement(u.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:s,id:"password",name:"password",onBlur:m,value:r.password,className:"form__input ".concat(n.password&&l.password?"has-error":null)})),n.password&&l.password?t.a.createElement("div",{className:"input__error"},l.password):null,t.a.createElement("div",{className:"form__row"},t.a.createElement("span",{htmlFor:"repeatedPassword",className:"form__label"},"\u0415\u0449\u0435 \u0440\u0430\u0437:"),t.a.createElement(u.a,{placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:s,id:"repeatedPassword",name:"repeatedPassword",onBlur:m,value:r.repeatedPassword,className:"form__input ".concat(n.repeatedPassword&&l.repeatedPassword?"has-error":null)})),n.repeatedPassword&&l.repeatedPassword?t.a.createElement("div",{className:"input__error"},l.repeatedPassword):null,t.a.createElement("div",{className:"form__row"},t.a.createElement("span",{htmlFor:"email",className:"form__label"},"Email:"),t.a.createElement(u.a,{id:"email",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",onChange:s,onBlur:m,value:r.email,className:"form__input ".concat(n.email&&l.email?"has-error":null)})),n.email&&l.email?t.a.createElement("div",{className:"input__error"},l.email):null,t.a.createElement("div",{className:"form__row"},t.a.createElement("span",{htmlFor:"website",className:"form__label"},"Website:"),t.a.createElement(u.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 website",onChange:s,id:"website",name:"website",onBlur:m,value:r.website,className:"form__input ".concat(n.website&&l.website?"has-error":null)})),n.website&&l.website?t.a.createElement("div",{className:"input__error"},l.website):null,t.a.createElement("div",{className:"form__row"},t.a.createElement("span",{htmlFor:"age",className:"form__label"},"\u0412\u043e\u0437\u0440\u0430\u0441\u0442:"),t.a.createElement(u.a,{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442",onChange:s,onBlur:m,value:r.age,id:"age",name:"age",className:"form__input ".concat(n.age&&l.age?"has-error":null)})),n.age&&l.age?t.a.createElement("div",{className:"input__error"},l.age):null,t.a.createElement("div",{className:"form__row"},t.a.createElement("span",{htmlFor:"age",className:"form__label label__skills"},"\u041d\u0430\u0432\u044b\u043a\u0438:"),t.a.createElement("div",{className:"form__skills"},t.a.createElement(u.a,{placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0432\u044b\u043a",onChange:s,id:"skills",value:r.skills,className:"form__input"}),t.a.createElement(p.a,{htmlType:"button",type:"dashed"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u0432\u044b\u043a"))),t.a.createElement(_.a,{onChange:s,onBlur:m,checked:r.accept,name:"accept",id:"accept",className:"form__accept"},"\u042f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e \u0443\u0441\u043b\u043e\u0432\u0438\u044f"),t.a.createElement(p.a,{className:"form__submit-btn",htmlType:"submit",type:"primary"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))}))};E.defaultProps={skills:[0]};var b=E,v=function(e){function a(e){var r;return Object(m.a)(this,a),(r=Object(c.a)(this,Object(i.a)(a).call(this,e))).state={skills:[0]},r}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.skills;return t.a.createElement(b,{skills:e})}}]),a}(t.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(t.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[178,1,2]]]);
//# sourceMappingURL=main.02dd118e.chunk.js.map