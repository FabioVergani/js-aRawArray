const call=(function(e){const o=e.prototype;return o.call.bind(o.bind);})(Function);
const RawObject=call(Object.create,null,null);

const setProto=Object.setPrototypeOf;
const RawArray=function(){return setProto([],null);};

 
      
      
let a=RawArray();
let b=RawArray();

b[0]=0;
b[1]=1;

console.dir(a);
console.dir(b);
