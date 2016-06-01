(function(){
 function aRawArray(i){return setProto(Array(~~i),RawArrayProto);};

 const setProto=Object.setPrototypeOf;
 const RawArrayProto=setProto([],null);
 RawArrayProto.each=function(x){const m=this,l=m.length,f=x;var i=0;while(l>i){f(m[i],i++);};};

 var A=aRawArray();

 A['zzz']=666;
 A[3]=1;
 A[6]=1;
 A[7]=2;

 var B=[].concat(A);

 function test(v,i){console.log(i,v)}

 console.clear();


 console.group('test A.each');
 console.dir(A);
 A.each(test);
 console.groupEnd();

 console.group('test B.forEach');
 console.dir(B);
 B.forEach(test);
 console.groupEnd();

})();
/*

test 

 A.each/Array[8]
 0 undefined
 1 undefined
 2 undefined
 3 1
 4 undefined
 5 undefined
 6 1
 7 2

 test B.forEach/Array[8] //It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).
 3 1
 6 1
 7 2

*/

