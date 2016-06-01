(function(){
 function aRawArray(i){return setProto(Array(~~i),RawArrayProto);};

 const setProto=Object.setPrototypeOf;
 const RawArrayProto=setProto([],null);

 var a=aRawArray();
 var b=aRawArray(9.2);

 console.clear();
 console.log('a',a,a.length,'b',b,b.length);

})();

