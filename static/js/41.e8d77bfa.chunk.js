(this["webpackJsonplocal-currency-client"]=this["webpackJsonplocal-currency-client"]||[]).push([[41],{476:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a(21),i=a(9),o=a(13),u=a(19),s=a(14);t.default=function(e){var t=Object.assign({namespace:"FormComponent",request:"get something",style:{}},e),a=t.barrelFunctions.sendRequest,n=Object(o.a)([t.namespace]).t,m=i.b({text1:i.c().required(n("Text1 is required"))});return l.a.createElement(c.a,{component:function(a){var c=a.handleSubmit,i=a.handleChange,o=(a.handleBlur,a.values),m=a.touched,d=(a.isValid,a.validateForm,a.errors);return l.a.createElement(s.default,{title:n("Component")},l.a.createElement(r.a,{noValidate:!0,onSubmit:c},l.a.createElement(r.a.Group,null,l.a.createElement(r.a.Label,null,n("TEXT1")),l.a.createElement(r.a.Control,{type:"string",placeholder:"",name:"text1",value:o.text1,onChange:i,isInvalid:!!d.text1&&m.text1}),l.a.createElement(r.a.Control.Feedback,{type:"invalid"},d.text1)),l.a.createElement(u.default,Object.assign({},e,{caption:n("Submit"),request:t.request,namespace:t.namespace}))))},validationSchema:m,onSubmit:function(e){return console.log(e),null!==e&&a({req:t.request,data:e})},initialValues:{text1:""}})}}}]);
//# sourceMappingURL=41.e8d77bfa.chunk.js.map