(this["webpackJsonplocal-currency"]=this["webpackJsonplocal-currency"]||[]).push([[47],{416:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),c=n(12),l=n(22),u=n(11),i=n(120),s=n(121);r.default=function(e){var r=Object.assign({namespace:"CurrencyContainer"},e),n=r.barrelGetters,t=n.settings,o=n.accordionViewCurrency,y=n.activePageCurrencies,m=n.accountNumber,d=r.barrelSetters,g=d.setAccordionViewCurrency,p=d.setRedirectTo,C=d.setResponseProps,E=r.barrelFunctions.getCurrencies,f=Object(c.a)([r.namespace]).t;return null===m&&p("/sign-out"),"undefined"!==typeof t.currencies&&null!==t.currencies&&t.currencies.length<2?a.a.createElement(a.a.Fragment,null):a.a.createElement(a.a.Fragment,null,a.a.createElement(l.a,{defaultActiveKey:o},a.a.createElement(u.a,null,a.a.createElement(l.a.Toggle,{as:u.a.Header,eventKey:"currencies",style:{cursor:"pointer"},onClick:function(){"currencies"!==o?(C(null),g("currencies"),E(y)):g(null)}},f("Currencies")),a.a.createElement(l.a.Collapse,{eventKey:"currencies"},a.a.createElement(u.a.Body,null,a.a.createElement(i.default,e)))),"undefined"!==typeof t.currencyCreationAllowed&&t.currencyCreationAllowed&&a.a.createElement(u.a,null,a.a.createElement(l.a.Toggle,{as:u.a.Header,eventKey:"currencyRegistration",style:{cursor:"pointer"},onClick:function(){g("currencyRegistration"!==o?"currencyRegistration":null)}},f("Currency Registration")),a.a.createElement(l.a.Collapse,{eventKey:"currencyRegistration"},a.a.createElement(u.a.Body,null,a.a.createElement(s.default,e))))))}}}]);
//# sourceMappingURL=47.81752c08.chunk.js.map