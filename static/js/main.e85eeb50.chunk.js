(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),o=(a(15),a(1)),c=a(2),s=a(4),m=a(3),u=a(5),h=(a(16),function(){return i.a.createElement("h2",null,"Form App")}),d=a(6),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={city:"",information:"",likeCity:!1,visited:"0"},a.handleChanges=function(e){"likeCity"===e.target.dataset.name?a.setState(Object(d.a)({},e.target.dataset.name,!a.state.likeCity)):a.setState(Object(d.a)({},e.target.dataset.name,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),a.state.city&&a.state.information){var t={city:a.state.city,information:a.state.information,likeCity:a.state.likeCity,visited:a.state.visited};a.props.withdrawInformation(t),a.setState({city:"",information:"",likeCity:!1,visited:"0"})}else alert("Fill up some fields")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},i.a.createElement("label",null,"City:",i.a.createElement("input",{"data-name":"city",value:this.state.city,onChange:this.handleChanges,type:"text"})),i.a.createElement("label",null,"Write something about that city:",i.a.createElement("textarea",{placeholder:"Make a note...","data-name":"information",value:this.state.information,onChange:this.handleChanges})),i.a.createElement("label",null,"Do you like this city:",i.a.createElement("input",{"data-name":"likeCity",checked:this.state.likeCity,onChange:this.handleChanges,type:"checkbox"})),i.a.createElement("label",null,"How many times have you visited that city:",i.a.createElement("select",{"data-name":"visited",name:"number",value:this.state.visited,onChange:this.handleChanges},i.a.createElement("option",{value:"0"},"0"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"more"},"more"))),i.a.createElement("button",null,"Send"))}}]),t}(n.Component),y=function(e){var t=e.obj,a=t.city,n=t.information,l=t.likeCity,r=t.visited;return i.a.createElement("div",{className:"result"},i.a.createElement("h3",null,"Information"),i.a.createElement("p",null,i.a.createElement("span",null,"City:")," ",a),i.a.createElement("p",null,i.a.createElement("span",null,"Note:")," ",n),i.a.createElement("p",null,i.a.createElement("span",null,"Nice city:")," ",l?"Yes":"No"),i.a.createElement("p",null,i.a.createElement("span",null,"Times of visits:")," ",r),i.a.createElement("button",{onClick:function(){return e.returnForm()}},"New Form"))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={displayForm:!0,obj:null},a.withdrawInformation=function(e){a.setState({displayForm:!1,obj:e}),console.log(e),console.log("OK - dziala")},a.returnForm=function(){a.setState({displayForm:!0,obj:null})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(h,null),this.state.displayForm?i.a.createElement(p,{withdrawInformation:this.withdrawInformation}):i.a.createElement(y,{returnForm:this.returnForm,obj:this.state.obj}))}}]),t}(n.Component);r.a.render(i.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.e85eeb50.chunk.js.map