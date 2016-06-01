(function(){
 function aRawArray(i){return setProto(Array(i),RawArrayProto);};

 const RawArrayProto=Object.setPrototypeOf([],null);

 var a=aRawArray();
 var b=aRawArray(9);

 console.clear();
 console.log('a',a,a.length,'b',b,b.length);

})();
