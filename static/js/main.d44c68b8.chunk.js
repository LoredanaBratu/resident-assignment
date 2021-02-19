(this["webpackJsonpresident-assignment"]=this["webpackJsonpresident-assignment"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r,c,a,o,i,s,l,j,u,d=n(1),b=n.n(d),p=n(15),x=n.n(p),O=(n(23),n(24),n(3)),m=n(4),f={red:"#f54257",gray:"#D3D3D3",violet:"#a442f5",lightGrey:"#f1f1f1",lightBlue:"#4287f5"},v=m.a.div(r||(r=Object(O.a)(["\n  background-color: ",";\n  padding: 20px;\n"])),f.lightGrey),h=n(0),g=function(){return Object(h.jsx)(v,{children:Object(h.jsx)("h2",{className:"navbar",children:"User projects"})})},P=n(6),N=n(2),y=n(5),w=n(7),S=m.a.div(c||(c=Object(O.a)(["\n  .project-details {\n    display: flex;\n    align-items: center;\n  }\n  .user-form-container {\n    margin: 0 auto;\n    max-width: 500px;\n    box-sizing: border-box;\n    padding: 15px 15px 110px 15px;\n  }\n  .add-section-icon {\n    height: 20px;\n    margin-left: 5px;\n    transform: rotate(45deg);\n  }\n  .projects-tags {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .clear-icon {\n    height: 20px;\n  }\n  .json-string {\n    margin: 0 auto;\n    max-width: 700px;\n    box-sizing: border-box;\n    word-break: break-word;\n    padding: 25px 2px 110px 2px;\n    color: ",";\n  }\n  .username-input {\n    flex: 1;\n    flex-direction: column;\n  }\n"])),f.lightBlue),C=n.p+"static/media/close.b396869b.png",k=m.a.div(a||(a=Object(O.a)(["\n  background-color: ",";\n  bottom: 0;\n  width: 100%;\n  padding: 20px;\n  position: fixed;\n  box-sizing: border-box;\n\n  .actions-buttons {\n    display: flex;\n    justify-content: space-between;\n  }\n"])),f.lightGrey),I=n(8),E=m.a.div(o||(o=Object(O.a)(["\n  button:focus {\n    outline: none;\n  }\n  .action-btn {\n    height: 40px;\n    width: 145px;\n  }\n  .json-btn {\n    width: 115px;\n    border-radius: 4px;\n    margin-bottom: 10px;\n    color: ",";\n    border-color: ",";\n  }\n"])),f.violet,f.violet),D=function(e){var t=e.buttonText,n=Object(I.a)(e,["buttonText"]);return Object(h.jsx)(E,{children:Object(h.jsx)("button",Object(N.a)(Object(N.a)({},n),{},{children:t}))})},z=function(e){var t=e.showJSON,n=void 0!==t&&t,r=e.onSubmit,c=void 0===r?function(){return null}:r,a=e.onCancel,o=void 0===a?function(){return null}:a,i=e.toggleJSON,s=void 0===i?function(){return null}:i;return Object(h.jsx)(k,{children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsx)(D,{type:"submit",value:"Submit",className:"json-btn",onClick:s,buttonText:n?"Show form":"View form JSON"}),Object(h.jsxs)("div",{className:"actions-buttons",children:[Object(h.jsx)(D,{type:"reset",value:"Reset",onClick:o,buttonText:"Cancel",className:"action-btn reset"}),Object(h.jsx)(D,{type:"submit",value:"Submit",buttonText:"Save",onClick:c,className:"action-btn submit"})]})]})})},R=m.a.div(i||(i=Object(O.a)(["\n  margin: 10px 0px;\n  position: relative;\n  padding: 15px 10px;\n  border: 1px dashed ",";\n\n  .duration-container {\n    display: flex;\n    align-items: center;\n  }\n  .duration-section {\n    display: flex;\n    margin: 0 auto;\n  }\n  .delete-section-icon {\n    top: -10px;\n    height: 20px;\n    right: -10px;\n    position: absolute;\n  }\n"])),f.gray),T={projectDetail:{duration:["days","weeks","months","years"]}},B=m.a.div(s||(s=Object(O.a)(["\n  display: flex;\n  position: relative;\n  padding-bottom: 2px;\n  flex-direction: column;\n  input:focus {\n    outline: none;\n  }\n  .input-label {\n    padding-right: 5px;\n  }\n  .right-icon {\n    top: 3px;\n    z-index: 2;\n    right: 10px;\n    height: 16px;\n    position: absolute;\n    vertical-align: middle;\n  }\n  .input {\n    max-height: 22px;\n    margin-right: 5px;\n    &--extraSmall {\n      width: 70px;\n    }\n    &--small {\n      width: 100px;\n    }\n    &--large {\n      width: 100%;\n    }\n  }\n  .input-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),F={required:"Required",alreadyExists:"Project already exists",noProjectSelected:"Please select a project"},J=m.a.div(l||(l=Object(O.a)(["\n  .error-message {\n    font-size: 12px;\n    color: ",";\n  }\n"])),f.red),q=function(e){var t=e.message,n=void 0===t?F.required:t;return Object(h.jsx)(J,{children:Object(h.jsx)("div",{className:"error-message",children:n})})},G=function(e){var t=e.size,n=e.value,r=e.error,c=e.label,a=e.RightIcon,o=e.className,i=e.type,s=void 0===i?"text":i,l=e.onRightIconClick,j=void 0===l?function(){return null}:l,u=Object(I.a)(e,["size","value","error","label","RightIcon","className","type","onRightIconClick"]);return Object(h.jsxs)(B,{className:o,children:[c&&Object(h.jsx)("div",{className:"input-label",children:Object(h.jsx)("label",{children:c})}),Object(h.jsxs)("div",{className:"input-wrapper",children:[Object(h.jsx)("input",Object(N.a)({type:s,value:n,className:"input input--".concat(t),onKeyPress:function(e){return"Enter"===e.key&&e.preventDefault()}},u)),r&&Object(h.jsx)(q,{})]}),a&&Object(h.jsx)("img",{src:a,alt:"Clear input",className:"right-icon",onClick:function(){return j(n)}})]})},K=m.a.div(j||(j=Object(O.a)(["\n  display: flex;\n  select {\n    height: 22px;\n  }\n  .label-select {\n    margin-right: 10px;\n  }\n  .select-project {\n    width: 100%;\n  }\n  .select-duration {\n    width: 70px;\n  }\n  .select-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),L=function(e){var t=e.name,n=e.error,r=e.label,c=e.options,a=e.value,o=Object(I.a)(e,["name","error","label","options","value"]);return Object(h.jsxs)(K,{children:[r&&Object(h.jsx)("label",{className:"label-select",children:r}),Object(h.jsxs)("div",{className:"select-wrapper",children:[Object(h.jsxs)("select",Object(N.a)(Object(N.a)({name:t,value:a},o),{},{children:[Object(h.jsx)("option",{value:""}),(c||[]).map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})),n&&Object(h.jsx)(q,{message:"units"===t?F.required:F.noProjectSelected})]})]})},A=m.a.div(u||(u=Object(O.a)(["\n  textarea:focus {\n    outline: none;\n  }\n  .textarea-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n  .label-textarea {\n    margin-right: 10px;\n  }\n  .details-textarea-section {\n    display: flex;\n    padding: 15px 0px;\n  }\n  .textarea-details-field {\n    border-radius: 5px;\n  }\n"]))),M=function(e){var t=e.label,n=e.error,r=Object(I.a)(e,["label","error"]);return Object(h.jsx)(A,{children:Object(h.jsxs)("div",{className:"details-textarea-section",children:[t&&Object(h.jsx)("span",{className:"label-textarea",children:"Details"}),Object(h.jsxs)("div",{className:"textarea-wrapper",children:[Object(h.jsx)("textarea",Object(N.a)({rows:"3",name:"details",id:"details-area"},r)),n&&Object(h.jsx)(q,{})]})]})})},U=function(e){var t=e.data,n=e.index,r=e.errors,c=e.project,a=e.touched,o=e.projectId,i=e.setFormData,s=e.handleTouch,l=e.handleRemoveProject,j=t.currentProjects;function u(e){var n=e.target,r=(j||[]).map((function(e){return e.projectId!==o?e:Object(N.a)(Object(N.a)({},e),{},Object(P.a)({},n.name,n.value))}));i(Object(N.a)(Object(N.a)({},t),{},{currentProjects:r}))}var d=r.currentProjects[n],b=a.currentProjects[n];return Object(h.jsx)(R,{children:Object(h.jsxs)("div",{className:"project-details-sections",children:[Object(h.jsx)(L,{label:"Project",name:"selectedProject",onChange:u,options:t.projects,className:"select-project",onFocus:function(){return s({name:"selectedProject",category:"currentProjects",index:n})},value:c.selectedProject,error:(null===d||void 0===d?void 0:d.selectedProject)&&(null===b||void 0===b?void 0:b.selectedProject)}),Object(h.jsx)(M,{label:"Details",value:c.details,onChange:u,onBlur:function(){return s({name:"details",category:"currentProjects",index:n})},className:"textarea-details-field",error:(null===d||void 0===d?void 0:d.details)&&(null===b||void 0===b?void 0:b.details)}),Object(h.jsxs)("div",{className:"duration-container",children:[Object(h.jsx)("div",{children:"Duration "}),Object(h.jsxs)("div",{className:"duration-section",children:[Object(h.jsx)(G,{type:"number",name:"duration",size:"extraSmall",id:"duration-input",onChange:u,value:c.duration,onBlur:function(){return s({name:"duration",category:"currentProjects",index:n})},error:(null===d||void 0===d?void 0:d.duration)&&(null===b||void 0===b?void 0:b.duration)}),Object(h.jsx)(L,{name:"units",value:c.units,onChange:u,className:"select-duration",options:T.projectDetail.duration,onFocus:function(){return s({name:"units",category:"currentProjects",index:n})},error:(null===d||void 0===d?void 0:d.units)&&(null===b||void 0===b?void 0:b.units)})]}),Object(h.jsx)("img",{id:o,src:C,alt:"Remove section",className:"delete-section-icon",onClick:function(){return l(o)}})]})]})})},V=function(){var e=Object(d.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],c=Object(d.useState)(0),a=Object(w.a)(c,2),o=a[0],i=a[1],s=Object(d.useState)(""),l=Object(w.a)(s,2),j=l[0],u=l[1],b=Object(d.useState)(!1),p=Object(w.a)(b,2),x=p[0],O=p[1],m=Object(d.useState)(!1),f=Object(w.a)(m,2),v=f[0],g=f[1],k=Object(d.useState)({userName:"",projects:[],currentProjects:[]}),I=Object(w.a)(k,2),E=I[0],D=I[1],R=Object(d.useState)({projects:[],currentProjects:[]}),T=Object(w.a)(R,2),B=T[0],F=T[1],J=Object(d.useState)({userName:!1,projects:[],currentProjects:[]}),K=Object(w.a)(J,2),L=K[0],A=K[1];function M(e,t){return Object(y.a)(E.currentProjects).map((function(n){return e===n.selectedProject?Object(N.a)(Object(N.a)({},n),{},{selectedProject:t}):n}))}function V(e){var t=(E.currentProjects||[]).filter((function(t){return t.projectId!==e}));D(Object(N.a)(Object(N.a)({},E),{},{currentProjects:t}))}function H(e){var t=(E.projects||[]).filter((function(t){return t!==e})),n=M(e,"");D(Object(N.a)(Object(N.a)({},E),{},{projects:t,currentProjects:n}))}function Q(){var e={projects:[],currentProjects:[]};((null===E||void 0===E?void 0:E.userName)||"").trim()||(e.userName=!0),E.projects.length||(e.projects=[].concat(Object(y.a)(e.projects),[!0])),E.currentProjects.length||(e.currentProjects=[].concat(Object(y.a)(e.currentProjects),[{selectedProject:!0}])),E.projects.forEach((function(t){t||(e.projects=[].concat(Object(y.a)(e.projects),[!0]))})),E.currentProjects.forEach((function(t){var n={};Object.keys(t).forEach((function(e){var r;"projectId"===e||(null===(r=t[e]||"")||void 0===r?void 0:r.trim())||(n[e]=!0)})),e.currentProjects=[].concat(Object(y.a)(e.currentProjects),[n])})),F(e)}function W(){D({userName:"",projects:[],currentProjects:[]}),A({userName:!1,projects:[],currentProjects:[]}),F({userName:!1,projects:[],currentProjects:[]})}function X(e){var t=e.index,n=e.name,r=e.category;if(r){var c=Object(y.a)(L[r]);if("projects"===r)c.splice(t,1,!0);else{var a=c[t];c.splice(t,1,Object(N.a)(Object(N.a)({},a),{},Object(P.a)({},n,!0)))}A((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(P.a)({},r,c))}))}else A((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(P.a)({},n,!0))}))}Object(d.useEffect)((function(){Q()}),[L,E]);var Y=E.userName,Z=E.projects,$=E.currentProjects;return Object(h.jsxs)(S,{children:[v?Object(h.jsxs)("div",{className:"json-string",children:[" ",JSON.stringify(E)]}):Object(h.jsxs)("form",{className:"user-form-container","data-testid":"projects-form",children:[x&&Object(h.jsx)("p",{className:"submitted-message",children:"Submitted!"}),Object(h.jsx)(G,{size:"large",label:"Name",name:"userName",value:Y,id:"user-name-input",onChange:function(e){var t=e.target;D((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(P.a)({},null===t||void 0===t?void 0:t.name,null===t||void 0===t?void 0:t.value))}))},error:B.userName&&L.userName,onBlur:function(){return X({name:"userName"})}}),Object(h.jsx)("p",{children:"Projects"}),Object(h.jsxs)("div",{className:"projects-tags",children:[(Z||[]).map((function(e,t){return Object(h.jsx)(G,{size:"small",name:"projects",value:e,id:"project-name-tag",RightIcon:C,onRightIconClick:H,onChange:function(e){return function(e,t){var n=Object(y.a)(E.projects),r=n[t];n[t]=e;var c=M(r,e);D(Object(N.a)(Object(N.a)({},E),{},{projects:n,currentProjects:c}))}(e.target.value,t)},error:B.projects[t]&&L.projects[t],onBlur:function(){return X({category:"projects"})}},t+"-project")})),Object(h.jsx)(G,{size:"small",name:"projects",value:n,onKeyDown:function(e){var t,c=e.target;if("Enter"===(null===e||void 0===e?void 0:e.key)&&(null===c||void 0===c||null===(t=c.value)||void 0===t?void 0:t.trim())){if(E.projects.indexOf(n)>-1)return u("Project already exists"),void setTimeout((function(){u("")}),3e3);D((function(e){return Object(N.a)(Object(N.a)({},e),{},{projects:[].concat(Object(y.a)(e.projects),[n])})})),r(""),A((function(e){return Object(N.a)(Object(N.a)({},e),{},{projects:[].concat(Object(y.a)(e.projects),[!1])})}))}},id:"project-name-input",onChange:function(e){var t=e.target;r(null===t||void 0===t?void 0:t.value)}}),j&&Object(h.jsx)(q,{message:j})]}),Object(h.jsxs)("p",{className:"project-details",children:["Project details",Object(h.jsx)("img",{src:C,alt:"Add section",onClick:function(){D(Object(N.a)(Object(N.a)({},E),{},{currentProjects:[].concat(Object(y.a)(E.currentProjects),[{projectId:o,selectedProject:"",details:"",duration:"",units:""}])})),i((function(e){return e+1})),A((function(e){return Object(N.a)(Object(N.a)({},e),{},{currentProjects:[].concat(Object(y.a)(e.currentProjects),[{selectedProject:!1,details:!1,duration:!1,units:!1}])})}))},className:"add-section-icon"})]}),Object(h.jsx)("div",{className:"project-details-section",children:null===$||void 0===$?void 0:$.map((function(e,t){return Object(h.jsx)(U,{index:t,data:E,errors:B,touched:L,project:e,setFormData:D,projectId:e.projectId,handleTouch:X,handleRemoveProject:V},t)}))})]}),Object(h.jsx)(z,{showJSON:v,onCancel:W,onSubmit:function(){Q(),function(){var e={projects:[],currentProjects:[]};E.userName||(e.userName=!0),E.projects.forEach((function(t){t||(e.projects=[].concat(Object(y.a)(e.projects),[!0]))})),E.currentProjects.forEach((function(t){var n={};Object.keys(t).forEach((function(e){"projectId"!==e&&(n[e]=!0)})),e.currentProjects=[].concat(Object(y.a)(e.currentProjects),[n])})),A(e)}(),!function(){var e=!0;return B.userName&&(e=!1),B.projects.forEach((function(t){t&&(e=!1)})),B.currentProjects.forEach((function(t){Object.keys(t).forEach((function(n){t[n]&&(e=!1)}))})),e}()?console.log("Error: empty fields"):(console.log("Success: ",E),O(!0),W())},toggleJSON:function(){g((function(e){return!e}))}})]})};var H=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{}),Object(h.jsx)(V,{})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};x.a.render(Object(h.jsx)(b.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root")),Q()}},[[30,1,2]]]);
//# sourceMappingURL=main.d44c68b8.chunk.js.map