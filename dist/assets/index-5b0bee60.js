import{S as o,G as a,m as u,j as s,L as c,p as i,d as x,e as h,I as g,H as j}from"./index-187f8b77.js";function f(){const l=[{status:a.all,name:"Tất cả"},{status:a.waitForConfirmation,name:"Chờ xác nhận"},{status:a.waitForGetting,name:"Chờ lấy hàng"},{status:a.inProgress,name:"Đang giao"},{status:a.delivered,name:"Đã giao"},{status:a.cancelled,name:"Đã hủy"}],d=o(),t=Number(d.status)||a.all,{data:r,refetch:N}=u({queryKey:["purchases",{status:t}],queryFn:()=>j.getPurchases({status:t})}),n=r==null?void 0:r.data.data,m=l.map(e=>s.jsx(c,{to:{pathname:i.historyPurchase,search:x({status:String(e.status)}).toString()},className:h("flex flex-1 items-center justify-center border-b-2 bg-white py-4 text-center",{"border-b-orange text-orange":t===e.status,"border-b-black/10 text-gray-900":t!==e.status}),children:e.name},e.status));return s.jsx("div",{children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs("div",{className:"min-w-[700px]",children:[s.jsx("div",{className:"sticky top-0 flex rounded-t-sm shadow-sm",children:m}),s.jsx("div",{children:n==null?void 0:n.map(e=>s.jsxs("div",{className:"mt-4 rounded-sm border-black/10 bg-white p-6 text-gray-800 shadow-sm",children:[s.jsxs(c,{to:`${i.home}${g({name:e.product.name,id:e.product._id})}`,className:"flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{className:"h-20 w-20 object-cover",src:e.product.image,alt:e.product.name})}),s.jsxs("div",{className:"ml-3 flex-grow overflow-hidden",children:[s.jsx("div",{className:"truncate",children:e.product.name}),s.jsxs("div",{className:"mt-3",children:["x",e.buy_count]})]}),s.jsxs("div",{className:"ml-3 flex-shrink-0",children:[s.jsxs("span",{className:"truncate text-gray-500 line-through",children:["₫",new Intl.NumberFormat().format(e.product.price_before_discount)]}),s.jsxs("span",{className:"ml-2 truncate text-orange",children:["₫",new Intl.NumberFormat().format(e.product.price)]})]})]}),s.jsx("div",{className:"flex justify-end",children:s.jsxs("div",{children:[s.jsx("span",{children:"Tổng giá tiền"}),s.jsxs("span",{className:"ml-4 text-xl text-orange",children:["₫",new Intl.NumberFormat().format(e.product.price*e.buy_count)]})]})})]},e._id))})]})})})}export{f as default};
