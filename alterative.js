const setProto=Object.setPrototypeOf;
//
const call=(function(e){const o=e.prototype;return o.call.bind(o.bind);})(Function);
const log=(function(e){const o=e.console,f=call,x=f(o.log,o);['dirxml','dir','info','table','clear','group','groupEnd'].map(function(i){const m=o;x[i]=f(m[i],m);});return x;})(window);
//

const RawArray=function(n){return setProto(Array.apply(null,arguments),null);};

log(RawArray().length);
log(RawArray(6).length);
log(RawArray(1,2,3));
