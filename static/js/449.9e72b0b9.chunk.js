"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[449],{2324:function(A,e,t){t.r(e),t.d(e,{default:function(){return W}});var n=t(4165),a=t(5861),s=t(9439),l=t(2791),r=t(1243),c=t(4325),o=t(7689),i=t(828),d=t(2824),x=t(8481),m=t(9846),p=t(3127),u=t(5904),h=t(6720),f=t(6971),N=t(2709),g=t(3149),j=t(5956),b=t(3664),q=t(3786),y=t.p+"static/media/KetoFriendly.741e6e38b088fe69e987.png",w=t(184),v=function(A){var e=A.rating/A.maxRating*100;return(0,w.jsx)("div",{className:"ratings",children:(0,w.jsxs)("div",{className:"ratings-stars",children:[(0,w.jsx)("span",{className:"text-yellow-400 text-2xl ".concat(e>=20?"fill-yellow":""),children:"\u2605"}),(0,w.jsx)("span",{className:"text-yellow-400 text-2xl ".concat(e>=40?"fill-yellow":""),children:"\u2605"}),(0,w.jsx)("span",{className:"text-yellow-400 text-2xl ".concat(e>=60?"fill-yellow":""),children:"\u2605"}),(0,w.jsx)("span",{className:"text-yellow-400 text-2xl ".concat(e>=80?"fill-yellow":""),children:"\u2605"}),(0,w.jsx)("span",{className:"text-yellow-400 text-2xl ".concat(100===e?"fill-yellow":""),children:"\u2605"})]})})},R=function(A){var e=A.maxRating,t=(A.onRatingSubmit,A.setAddRating),n=(0,l.useState)(null),a=(0,s.Z)(n,2),r=a[0],c=a[1],o=(0,l.useState)(Array.from({length:e},(function(){return!1}))),i=(0,s.Z)(o,2),d=i[0],x=i[1],m=function(){c(null)};return(0,w.jsx)("div",{children:Array.from({length:e}).map((function(A,e){var n=e+1,a=d[e];return(0,w.jsx)("span",{className:"text-2xl cursor-pointer ".concat(a||n<=r?"text-yellow-400":"text-gray-400"),onMouseEnter:function(){return function(A){c(A)}(n)},onMouseLeave:m,onClick:function(){return function(A){var e=d.map((function(e,t){return t<A}));x(e),t(A)}(n)},children:"\u2605"},n)}))})},S=(0,l.lazy)((function(){return t.e(456).then(t.bind(t,7456))})),V=(0,l.lazy)((function(){return t.e(194).then(t.bind(t,6194))})),W=function(){var A=(0,l.useState)(null),e=(0,s.Z)(A,2),t=(e[0],e[1],(0,l.useState)([])),W=(0,s.Z)(t,2),X=W[0],U=W[1],T=(0,l.useState)(0),O=(0,s.Z)(T,2),Z=O[0],Q=O[1],k=(0,l.useState)(null),M=(0,s.Z)(k,2),G=M[0],B=M[1],K=(0,l.useState)(""),F=(0,s.Z)(K,2),E=F[0],z=F[1],I=(0,l.useState)(!1),J=(0,s.Z)(I,2),D=J[0],L=J[1],C=(0,l.useState)(!1),Y=(0,s.Z)(C,2),P=Y[0],H=Y[1],_=(0,l.useState)(!1),$=(0,s.Z)(_,2),AA=$[0],eA=$[1],tA=(0,l.useState)([!1,!1,!1,!1,!1]),nA=(0,s.Z)(tA,2),aA=(nA[0],nA[1]),sA=(0,o.UO)().webId,lA=(0,l.useContext)(d.I),rA=c.b.find((function(A){return A.webId===sA})),cA=rA.productImage,oA=rA.productName,iA=rA.id,dA=rA.description,xA=rA.ingredients,mA=lA.getProductQuantity(iA),pA=(0,l.useContext)(x.S),uA=pA.loggedIn,hA=pA.successfulLoginData,fA=(0,o.s0)(),NA="https://justtheheads.com/products/"+sA,gA=window.innerWidth<=640,jA=function(){var A=(0,a.Z)((0,n.Z)().mark((function A(e){return(0,n.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,r.Z.post("http://localhost:4000/comments/api/products/".concat(sA,"/add-comment"),{comment:E,name:hA.name,rating:Z});case 3:L(!1),r.Z.get("http://localhost:4000/comments/api/products/".concat(sA,"/comments")).then((function(A){U(A.data)})).catch((function(A){console.error("Error fetching comments:",A)})),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),console.error("Error adding comment:",A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(e){return A.apply(this,arguments)}}();(0,l.useEffect)((function(){r.Z.get("http://localhost:4000/comments/api/products/".concat(sA,"/comments")).then((function(A){console.log(A);var e=A.data.map((function(A){return A.rating})),t=e.reduce((function(A,e){return A+e}),0)/e.length;aA(e),B(t),U(A.data)})).catch((function(A){console.error("Error fetching comments:",A)}))}),[sA]);var bA=function(A){for(var e=[],t=1;t<=5;t++)t<=A?e.push((0,w.jsx)("span",{style:{color:"yellow"},children:"\u2605"},t)):e.push((0,w.jsx)("span",{children:"\u2606"},t));return e};return(0,w.jsx)("div",{className:"relative w-screen pt-32 bg-center bg-cover max-h-max sm:pt-20 bg-color-background bg-allProducts bg-blend-lighten",children:(0,w.jsxs)("div",{className:"",children:[(0,w.jsx)("button",{className:"flex pl-4 text-xs font-bold text-color-text lg:pl-8 lg:text-xl font-CabinSketch hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-color-secondary hover:text-white",onClick:function(){return fA("/all-products")},children:"Back"}),(0,w.jsxs)("h1",{className:"pt-5 text-3xl font-extrabold text-center lg:pt-0 text-color-text lg:text-5xl font-CabinSketch",children:[oA,(0,w.jsx)("span",{children:(0,w.jsx)(v,{averageRating:G})})]}),(0,w.jsxs)("div",{className:"flex justify-center lg:px-28 lg:py-5 sm:justify-start",children:[(0,w.jsx)("img",{src:cA,alt:"productImage",className:"sm:h-[450px] sm:w-[337.5px] h-full w-11/12 sm:mx-0 sm:mt-0 mx-2 mt-12",loading:"lazy"}),(0,w.jsx)("div",{children:gA?null:(0,w.jsx)(V,{description:dA,productQuantity:mA,id:iA,cart:lA})})]}),(0,w.jsx)("div",{className:"pt-5",children:gA?(0,w.jsx)(S,{description:dA,productQuantity:mA,id:iA,cart:lA}):null}),(0,w.jsxs)("div",{className:"flex flex-row sm:flex-col justify-center space-x-8 sm:space-x-0 sm:space-y-2 sm:absolute sm:top-[5%] pt-10 sm:right-[7.5%]",children:[(0,w.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,w.jsx)("img",{src:"data:image/png;base64,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",alt:"NoGMO",className:"w-20 h-20 sm:w-28 sm:h-28 grayscale",loading:"lazy"}),(0,w.jsx)("p",{className:"pt-3 text-sm font-bold text-color-text font-CabinSketch",children:"Made with"}),(0,w.jsx)("p",{className:"text-sm font-bold text-color-text font-CabinSketch",children:"Real Ingredients"})]}),(0,w.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,w.jsx)("img",{src:y,alt:"NoGMO",className:"w-20 h-20 sm:w-28 sm:h-28",loading:"lazy"}),(0,w.jsx)("p",{className:"pt-3 text-sm font-bold text-color-text font-CabinSketch",children:"Low Carbs"}),(0,w.jsx)("p",{className:"text-sm font-bold text-color-text font-CabinSketch",children:"No Fillers"})]}),(0,w.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,w.jsx)("img",{src:"data:image/png;base64,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",alt:"NoGMO",className:"w-20 h-20 sm:w-28 sm:h-28 grayscale",loading:"lazy"}),(0,w.jsx)("p",{className:"pt-3 text-sm font-bold text-color-text font-CabinSketch",children:"Never"}),(0,w.jsx)("p",{className:"text-sm font-bold text-color-text font-CabinSketch",children:"Deep Fried!"})]})]}),(0,w.jsx)("div",{className:"flex sm:mt-[-5%] sm:flex-none sm:transform sm:-translate-x-1/2 sm:absolute sm:pr-28 sm:left-1/2",children:(0,w.jsxs)("div",{className:"flex items-center space-y-2",children:[(0,w.jsx)("h1",{className:"flex px-10 font-bold sm:p-5 sm:px-5 text-color-text font-CabinSketch",children:"Share Product:"}),(0,w.jsxs)("div",{className:"space-x-8 place-content-center",children:[(0,w.jsx)(m.Z,{url:NA,quote:"Check out these Just The Heads Products!",hashtag:"#JustTheHeads",children:(0,w.jsx)(p.Z,{size:40,round:!0,className:"hover:opacity-80"})}),(0,w.jsx)(u.Z,{url:NA,children:(0,w.jsx)(h.Z,{size:40,round:!0,className:"hover:opacity-80"})}),(0,w.jsx)(f.Z,{url:NA,children:(0,w.jsx)(N.Z,{size:40,round:!0,className:"hover:opacity-80"})}),(0,w.jsxs)(g.Z,{url:NA,appId:"657091659851318",children:[" ",(0,w.jsx)(j.Z,{size:40,round:!0,className:"hover:opacity-80"})]}),(0,w.jsx)(b.Z,{url:NA,children:(0,w.jsx)(q.Z,{size:40,round:!0,className:"hover:opacity-80"})}),(0,w.jsx)("button",{onClick:function(){navigator.clipboard.writeText(NA),H(!0)},className:"w-10 h-10 text-xs bg-black border border-black rounded-full hover:opacity-80",children:(0,w.jsx)(i.trc,{className:"mb-4 ml-2 text-2xl text-white"})}),(0,w.jsx)("div",{children:P?(0,w.jsx)("div",{class:"flex px-0 text-sm text-gray-800 rounded-lg bg-gray-50 text-center justify-center ",role:"alert",children:(0,w.jsx)("span",{class:"font-medium",children:"Successfully Copied to Clipboard!"})}):null})]})]})}),(0,w.jsx)("div",{className:"flex justify-center h-auto px-5 py-2",children:(0,w.jsxs)("div",{className:"sm:w-3/4 sm:h-[100px] bg-color-secondary border rounded-lg border-black shadow-[0px_3px_15px_rgba(0,0,0,0.2)]",children:[(0,w.jsx)("h1",{className:"px-2 text-lg font-bold text-color-text font-CabinSketch",children:"Ingredients:"}),(0,w.jsx)("p",{className:"p-2 font-medium text-color-text font-CabinSketch",children:xA})]})}),(0,w.jsxs)("div",{className:"p-5 font-CabinSketch min-w-max",children:[(0,w.jsxs)("h2",{className:"text-lg font-bold ",children:["Customer Reviews: ",uA?null:(0,w.jsxs)("span",{children:["(Please ",(0,w.jsx)("button",{className:" text-color-secondary hover:text-white",onClick:function(){return fA("/login")},children:" sign in "})," to leave a review)"]})]}),(0,w.jsx)("ul",{className:"w-11/12 bg-white border border-black rounded-md h-min",children:Array.isArray(X)&&X.length>0?X.map((function(A){return(0,w.jsx)("div",{className:"flex w-full border border-gray-200",children:(0,w.jsxs)("div",{className:"flex w-full px-3 py-2",children:[(0,w.jsx)("div",{children:A.comment}),(0,w.jsxs)("div",{className:"flex items-center ml-auto",children:[bA(A.rating),(0,w.jsx)("span",{className:"ml-2 text-sm text-gray-500",children:new Date(A.date).toLocaleDateString("en-US")}),(0,w.jsx)("span",{className:"ml-2 text-sm",children:A.name})]})]})},A._id)})):(0,w.jsx)("li",{children:"There are no reviews for this product."})}),uA?(0,w.jsxs)("div",{children:[AA?null:(0,w.jsx)("button",{className:"cursor-pointer hover:text-white",type:"button",onClick:function(){L(!0),eA(!0)},children:"Add Product Review"}),D?(0,w.jsxs)("form",{onSubmit:function(A){A.preventDefault(),z(A.target.comment.value),jA(E)},onChange:function(A){return z(A.target.value)},children:[(0,w.jsx)("textarea",{className:"w-11/12 mt-2 rounded-lg h-1/6",type:"text",name:"comment",placeholder:"Add a comment"}),(0,w.jsx)(R,{maxRating:5,setAddRating:Q}),(0,w.jsx)("button",{className:"flex hover:text-white",type:"submit",children:"Submit"})]}):null]}):null]})]})})}}}]);
//# sourceMappingURL=449.9e72b0b9.chunk.js.map