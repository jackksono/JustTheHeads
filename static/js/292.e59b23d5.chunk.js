"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[292],{7292:function(e,t,n){n.r(t);var r=n(1413),s=n(4165),a=n(5861),l=n(9439),o=n(2791),c=n(1243),u=n(7689),i=n(1087),d=n(184);t.default=function(){var e=(0,u.s0)(),t=(0,o.useState)({name:"",email:"",password:""}),n=(0,l.Z)(t,2),p=n[0],m=n[1],h=(0,o.useState)(""),x=(0,l.Z)(h,2),f=x[0],b=x[1],g=(0,o.useState)(""),v=(0,l.Z)(g,2),j=(v[0],v[1]),w=(0,o.useState)(!1),Z=(0,l.Z)(w,2),y=(Z[0],Z[1],function(){var t=(0,a.Z)((0,s.Z)().mark((function t(n){var r,a,l,o;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=p.name,a=p.email,l=p.password,t.prev=2,t.next=5,c.Z.post("http://localhost:4000/users/signup",{name:r,password:l,email:a});case 5:o=t.sent,console.log("this is the response",o),console.log("This is the button response",o.data),j("Welcome to the Head Club!"),e("/login"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),console.log("Error inside the POST signup button",t.t0),b("***Unable to Create Account***");case 16:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}());return(0,d.jsxs)("div",{className:"flex flex-col items-center justify-center h-screen bg-center bg-cover bg-color-background bg-allProducts bg-blend-lighten font-CabinSketch",children:[(0,d.jsx)("h1",{className:"pb-4 text-2xl font-bold text-black",children:"Signup Here"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("form",{className:"flex flex-col items-center justify-items-center rounded-2xl",onSubmit:y,children:[(0,d.jsx)("input",{className:"w-full pl-3 m-2 rounded-xl",type:"text",placeholder:"Enter Name...",value:p.name,onChange:function(e){return m((0,r.Z)((0,r.Z)({},p),{},{name:e.target.value}))},required:!0}),(0,d.jsx)("input",{className:"w-full pl-3 m-2 rounded-xl",type:"email",placeholder:"Enter Email...",value:p.email,onChange:function(e){return m((0,r.Z)((0,r.Z)({},p),{},{email:e.target.value}))},required:!0}),(0,d.jsx)("input",{className:"w-full pl-3 m-2 rounded-xl",type:"password",placeholder:"Create Password...",value:p.password,onChange:function(e){return m((0,r.Z)((0,r.Z)({},p),{},{password:e.target.value}))},required:!0}),(0,d.jsx)("button",{className:"absolute mt-40 m-6 w-[100px] text-center justify-center hover:bg-cyan-400 bg-color-primary border border-black border-solid rounded-xl",children:"Sign Up"})]}),(0,d.jsx)("div",{className:"flex justify-center text-red-700",children:(0,d.jsx)("p",{children:f})}),(0,d.jsxs)("div",{className:"pt-16 text-stone-600 ",children:["Have an account already?",(0,d.jsx)(i.rU,{to:"/login",className:"p-4 underline text-stone-600 hover:text-stone-800 ",children:"Login right here!"})]})]})]})}}}]);
//# sourceMappingURL=292.e59b23d5.chunk.js.map