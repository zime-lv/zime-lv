(this["webpackJsonplocal-currency"]=this["webpackJsonplocal-currency"]||[]).push([[12,48],{288:function(e,t,a){"use strict";a.r(t);var r=a(375);a.d(t,"default",(function(){return r.default}))},375:function(e,t,a){"use strict";a.r(t);var r=a(73),n=a(3),o=a(0),c=a.n(o),l=a(12),i=a(518),s=a(525),d={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},u={borderColor:"#2196f3"},b={borderColor:"#00e676"},p={borderColor:"#ff1744"};t.default=function(e){var t=Object.assign({},e.data),a=t.barrelGetters.accountPhotoPath,f=t.barrelFunctions.sendRequest,g=Object(o.useState)(null),m=Object(n.a)(g,2)[1],h=Object(l.a)("AccountRegistration").t;""!==a&&(d.padding=0,d.borderStyle="none",d.backgroundColor="none");var j=Object(o.useCallback)((function(e){m(e),f({req:"upload file",data:{acceptedFiles:e}})}),[]),v=Object(i.a)({accept:"image/*",onDrop:j}),E=v.getRootProps,C=v.getInputProps,O=v.isDragActive,y=v.isDragAccept,k=v.isDragReject,x=Object(o.useMemo)((function(){return Object(r.a)({},d,{},O?u:{},{},y?b:{},{},k?p:{})}),[O,y,k]);return""===a?c.a.createElement("div",{className:"container"},c.a.createElement("div",E({style:x}),c.a.createElement("input",C()),c.a.createElement("p",null,h("Click to select the image file")))):(a="gfx/photo_id.png",c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",E({style:x}),c.a.createElement("input",C()),c.a.createElement(s.a.Image,{width:171,height:180,alt:"171x180",src:a})))))}}}]);
//# sourceMappingURL=12.7cc5f70c.chunk.js.map