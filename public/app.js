(()=>{var yu=0,Bl=1,xu=2;var zl=1,bu=2,Tn=3,Bn=0,Ht=1,An=2,Vn=0,wi=1,Hl=2,Vl=3,Gl=4,Mu=5,ii=100,Su=101,wu=102,Eu=103,Tu=104,Au=200,Cu=201,Ru=202,Iu=203,ga=204,_a=205,Pu=206,Lu=207,Du=208,Uu=209,Nu=210,Fu=211,ku=212,Ou=213,Bu=214,Ga=0,$a=1,Wa=2,Ei=3,Xa=4,qa=5,Ya=6,Ja=7,$l=0,zu=1,Hu=2,Gn=0,Vu=1,Gu=2,$u=3,Za=4,Wu=5,Xu=6,qu=7;var Wl=300,Ii=301,Pi=302,Ka=303,ja=304,Ar=306,va=1e3,ni=1001,ya=1002,an=1003,Yu=1004;var Cr=1005;var _n=1006,Qa=1007;var ci=1008;var xn=1009,Xl=1010,ql=1011,bs=1012,eo=1013,ui=1014,Cn=1015,Ms=1016,to=1017,no=1018,Ss=1020,Yl=35902,Jl=35899,Zl=1021,Kl=1022,ln=1023,os=1026,ws=1027,jl=1028,io=1029,Ql=1030,so=1031;var ro=1033,Rr=33776,Ir=33777,Pr=33778,Lr=33779,ao=35840,oo=35841,lo=35842,co=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,vo=37812,yo=37813,xo=37814,bo=37815,Mo=37816,So=37817,wo=37818,Eo=37819,To=37820,Ao=37821,Co=36492,Ro=36494,Io=36495,Po=36283,Lo=36284,Do=36285,Uo=36286;var Ys=2300,xa=2301,ma=2302,Al=2400,Cl=2401,Rl=2402;var Ju=3200,Zu=3201;var ec=0,Ku=1,$n="",zt="srgb",Ti="srgb-linear",Js="linear",ot="srgb";var Mi=7680;var Il=519,ju=512,Qu=513,ed=514,tc=515,td=516,nd=517,id=518,sd=519,Pl=35044;var nc="300 es",gn=2e3,Zs=2001;var zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=1234567,$s=Math.PI/180,ls=180/Math.PI;function Li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function ic(i,e){return(i%e+e)%e}function wh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Eh(i,e,t){return i!==e?(t-i)/(e-i):0}function Ws(i,e,t){return(1-t)*i+t*e}function Th(i,e,t,n){return Ws(i,e,1-Math.exp(-t*n))}function Ah(i,e=1){return e-Math.abs(ic(i,e*2)-e)}function Ch(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ih(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ph(i,e){return i+Math.random()*(e-i)}function Lh(i){return i*(.5-Math.random())}function Dh(i){i!==void 0&&(qc=i);let e=qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uh(i){return i*$s}function Nh(i){return i*ls}function Fh(i){return(i&i-1)===0&&i!==0}function kh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bh(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Dr={DEG2RAD:$s,RAD2DEG:ls,generateUUID:Li,clamp:Ze,euclideanModulo:ic,mapLinear:wh,inverseLerp:Eh,lerp:Ws,damp:Th,pingpong:Ah,smoothstep:Ch,smootherstep:Rh,randInt:Ih,randFloat:Ph,randFloatSpread:Lh,seededRandom:Dh,degToRad:Uh,radToDeg:Nh,isPowerOfTwo:Fh,ceilPowerOfTwo:kh,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:Bh,normalize:Bt,denormalize:rs},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==h||c!==f||u!==g){let m=1-o,p=l*h+c*f+u*g+d*x,I=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let _=Math.sqrt(w),E=Math.atan2(_,p*I);m=Math.sin(m*E)/_,o=Math.sin(o*E)/_}let b=o*I;if(l=l*m+h*b,c=c*m+f*b,u=u*m+g*b,d=d*m+x*b,m===1-o){let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new U,Yc=new Hn,Ve=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],I=s[1],w=s[4],b=s[7],_=s[2],E=s[5],R=s[8];return r[0]=a*x+o*I+l*_,r[3]=a*m+o*w+l*E,r[6]=a*p+o*b+l*R,r[1]=c*x+u*I+d*_,r[4]=c*m+u*w+d*E,r[7]=c*p+u*b+d*R,r[2]=h*x+f*I+g*_,r[5]=h*m+f*w+g*E,r[8]=h*p+f*b+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},il=new Ve;function sc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){let i=Ks("canvas");return i.style.display="block",i}var Jc={};function cs(i){i in Jc||(Jc[i]=!0,console.warn(i))}function ad(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Zc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zh(){let i={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ti]:{primaries:e,whitePoint:n,transfer:Js,toXYZ:Zc,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Zc,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var tt=zh();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qi,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=Ks("canvas")),qi.width=e.width,qi.height=e.height;let s=qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hh=0,us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sl(s[a].image)):r.push(sl(s[a]))}else r=sl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vh=0,rl=new U,Zt=class i extends zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=_n,a=ci,o=ln,l=xn,c=i.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Li(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Wl;Zt.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(f+1)/2,_=(p+1)/2,E=(u+h)/4,R=(d+x)/4,L=(g+m)/4;return w>b&&w>_?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=R/n):b>_?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=L/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=R/r,s=L/r),this.set(n,s,r,t),this}let I=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(I)<.001&&(I=1),this.x=(m-g)/I,this.y=(d-x)/I,this.z=(h-u)/I,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ma=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Zt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Ma{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},js=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sa=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var si=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Jr.subVectors(this.max,Bs),Yi.subVectors(e.a,Bs),Ji.subVectors(e.b,Bs),Zi.subVectors(e.c,Bs),Jn.subVectors(Ji,Yi),Zn.subVectors(Zi,Ji),vi.subVectors(Yi,Zi);let t=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-vi.z,vi.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,vi.z,0,-vi.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-vi.y,vi.x,0];return!al(t,Yi,Ji,Zi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!al(t,Yi,Ji,Zi,Jr))?!1:(Zr.crossVectors(Jn,Zn),t=[Zr.x,Zr.y,Zr.z],al(t,Yi,Ji,Zi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Dn=[new U,new U,new U,new U,new U,new U,new U,new U],fn=new U,Yr=new si,Yi=new U,Ji=new U,Zi=new U,Jn=new U,Zn=new U,vi=new U,Bs=new U,Jr=new U,Zr=new U,yi=new U;function al(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Gh=new si,zs=new U,ol=new U,ds=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);let t=zs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(ol)),this.expandByPoint(zs.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Un=new U,ll=new U,Kr=new U,Kn=new U,cl=new U,jr=new U,ul=new U,Qs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ll.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ll);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=Kn.dot(this.direction),l=-Kn.dot(Kr),c=Kn.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ll).addScaledVector(Kr,h),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){cl.subVectors(t,e),jr.subVectors(n,e),ul.crossVectors(cl,jr);let a=this.direction.dot(ul),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);let l=o*this.direction.dot(jr.crossVectors(Kn,jr));if(l<0)return null;let c=o*this.direction.dot(cl.cross(Kn));if(c<0||l+c>a)return null;let u=-o*Kn.dot(ul);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,a,o,l,c,u,d,h,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,u,d,h,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Wh)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),jn.crossVectors(n,qt),jn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),jn.crossVectors(n,qt)),jn.normalize(),Qr.crossVectors(qt,jn),s[0]=jn.x,s[4]=Qr.x,s[8]=qt.x,s[1]=jn.y,s[5]=Qr.y,s[9]=qt.y,s[2]=jn.z,s[6]=Qr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],I=n[3],w=n[7],b=n[11],_=n[15],E=s[0],R=s[4],L=s[8],S=s[12],y=s[1],P=s[5],B=s[9],H=s[13],q=s[2],J=s[6],X=s[10],ie=s[14],$=s[3],de=s[7],_e=s[11],Se=s[15];return r[0]=a*E+o*y+l*q+c*$,r[4]=a*R+o*P+l*J+c*de,r[8]=a*L+o*B+l*X+c*_e,r[12]=a*S+o*H+l*ie+c*Se,r[1]=u*E+d*y+h*q+f*$,r[5]=u*R+d*P+h*J+f*de,r[9]=u*L+d*B+h*X+f*_e,r[13]=u*S+d*H+h*ie+f*Se,r[2]=g*E+x*y+m*q+p*$,r[6]=g*R+x*P+m*J+p*de,r[10]=g*L+x*B+m*X+p*_e,r[14]=g*S+x*H+m*ie+p*Se,r[3]=I*E+w*y+b*q+_*$,r[7]=I*R+w*P+b*J+_*de,r[11]=I*L+w*B+b*X+_*_e,r[15]=I*S+w*H+b*ie+_*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*h+n*c*h+s*o*f-n*l*f)+x*(+t*l*f-t*c*h+r*a*h-s*a*f+s*c*u-r*l*u)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*d+t*o*h+s*a*d-n*a*h+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],I=d*m*c-x*h*c+x*l*f-o*m*f-d*l*p+o*h*p,w=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,b=u*x*c-g*d*c+g*o*f-a*x*f-u*o*p+a*d*p,_=g*d*l-u*x*l-g*o*h+a*x*h+u*o*m-a*d*m,E=t*I+n*w+s*b+r*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=I*R,e[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*p-n*h*p)*R,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(d*l*r-o*h*r-d*s*c+n*h*c+o*s*f-n*l*f)*R,e[4]=w*R,e[5]=(u*m*r-g*h*r+g*s*f-t*m*f-u*s*p+t*h*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*h*r-u*l*r+u*s*c-t*h*c-a*s*f+t*l*f)*R,e[8]=b*R,e[9]=(g*d*r-u*x*r-g*n*f+t*x*f+u*n*p-t*d*p)*R,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*f-t*o*f)*R,e[12]=_*R,e[13]=(u*x*s-g*d*s+g*n*h-t*x*h-u*n*m+t*d*m)*R,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*R,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*h+t*o*h)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,x=a*u,m=a*d,p=o*d,I=l*c,w=l*u,b=l*d,_=n.x,E=n.y,R=n.z;return s[0]=(1-(x+p))*_,s[1]=(f+b)*_,s[2]=(g-w)*_,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(h+p))*E,s[6]=(m+I)*E,s[7]=0,s[8]=(g+w)*R,s[9]=(m-I)*R,s[10]=(1-(h+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ki.set(s[0],s[1],s[2]).length(),a=Ki.set(s[4],s[5],s[6]).length(),o=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);let c=1/r,u=1/a,d=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===gn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Zs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===gn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Zs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ki=new U,pn=new vt,$h=new U(0,0,0),Wh=new U(1,1,1),jn=new U,Qr=new U,qt=new U,jc=new vt,Qc=new Hn,vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xh=0,eu=new U,ji=new Hn,Nn=new vt,ea=new U,Hs=new U,qh=new U,Yh=new Hn,tu=new U(1,0,0),nu=new U(0,1,0),iu=new U(0,0,1),su={type:"added"},Jh={type:"removed"},Qi={type:"childadded",child:null},dl={type:"childremoved",child:null},Ft=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new vn,n=new Hn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Hs,ea,this.up):Nn.lookAt(ea,Hs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Nn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jh),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new U,Fn=new U,hl=new U,kn=new U,es=new U,ts=new U,ru=new U,fl=new U,pl=new U,ml=new U,gl=new yt,_l=new yt,vl=new yt,ti=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Fn.subVectors(n,t),hl.subVectors(e,t);let a=mn.dot(mn),o=mn.dot(Fn),l=mn.dot(hl),c=Fn.dot(Fn),u=Fn.dot(hl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return gl.setScalar(0),_l.setScalar(0),vl.setScalar(0),gl.fromBufferAttribute(e,t),_l.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gl,r.x),a.addScaledVector(_l,r.y),a.addScaledVector(vl,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Fn.subVectors(e,t),mn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),mn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;es.subVectors(s,n),ts.subVectors(r,n),fl.subVectors(e,n);let l=es.dot(fl),c=ts.dot(fl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,s);let u=es.dot(pl),d=ts.dot(pl);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(es,a);ml.subVectors(e,r);let f=es.dot(ml),g=ts.dot(ml);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ts,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return ru.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(ru,o);let p=1/(m+x+h);return a=x*p,o=h*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},ta={h:0,s:0,l:0};function yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=ic(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yl(a,r,e+1/3),this.g=yl(a,r,e),this.b=yl(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return tt.workingToColorSpace(Ut.copy(this),e),Math.round(Ze(Ut.r*255,0,255))*65536+Math.round(Ze(Ut.g*255,0,255))*256+Math.round(Ze(Ut.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ut.copy(this),t);let n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=zt){tt.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,s=Ut.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(ta);let n=Ws(Qn.h,ta.h,t),s=Ws(Qn.s,ta.s,t),r=Ws(Qn.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Ye;Ye.NAMES=od;var Zh=0,ri=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=wi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},er=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new U,na=new me,Kh=0,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}};var tr=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var nr=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jh=0,rn=new vt,xl=new Ft,ns=new U,Yt=new si,Vs=new si,It=new U,on=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sc(e)?nr:tr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Yt.min,Vs.min),Yt.expandByPoint(It),It.addVectors(Yt.max,Vs.max),Yt.expandByPoint(It)):(Yt.expandByPoint(Vs.min),Yt.expandByPoint(Vs.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),It.add(ns)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new U,l[L]=new U;let c=new U,u=new U,d=new U,h=new me,f=new me,g=new me,x=new U,m=new U;function p(L,S,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[L].add(x),o[S].add(x),o[y].add(x),l[L].add(m),l[S].add(m),l[y].add(m))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let L=0,S=I.length;L<S;++L){let y=I[L],P=y.start,B=y.count;for(let H=P,q=P+B;H<q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let w=new U,b=new U,_=new U,E=new U;function R(L){_.fromBufferAttribute(s,L),E.copy(_);let S=o[L];w.copy(S),w.sub(_.multiplyScalar(_.dot(S))).normalize(),b.crossVectors(E,S);let P=b.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,P)}for(let L=0,S=I.length;L<S;++L){let y=I[L],P=y.start,B=y.count;for(let H=P,q=P+B;H<q;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Jt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=new vt,xi=new Qs,ia=new ds,ou=new U,sa=new U,ra=new U,aa=new U,bl=new U,oa=new U,lu=new U,la=new U,At=class extends Ft{constructor(e=new on,t=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(bl.fromBufferAttribute(d,e),a?oa.addScaledVector(bl,u):oa.addScaledVector(bl.sub(t),u))}t.add(oa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),xi.copy(e.ray).recast(e.near),!(ia.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ia,ou)===null||xi.origin.distanceToSquared(ou)>(e.far-e.near)**2))&&(au.copy(r).invert(),xi.copy(e.ray).applyMatrix4(au),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],I=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=I,_=w;b<_;b+=3){let E=o.getX(b),R=o.getX(b+1),L=o.getX(b+2);s=ca(this,p,e,n,c,u,d,E,R,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let I=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=ca(this,a,e,n,c,u,d,I,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],I=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=I,_=w;b<_;b+=3){let E=b,R=b+1,L=b+2;s=ca(this,p,e,n,c,u,d,E,R,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let I=m,w=m+1,b=m+2;s=ca(this,a,e,n,c,u,d,I,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Qh(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Bn,o),l===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,sa),i.getVertexPosition(l,ra),i.getVertexPosition(c,aa);let u=Qh(i,e,t,n,sa,ra,aa,lu);if(u){let d=new U;ti.getBarycoord(lu,sa,ra,aa,d),s&&(u.uv=ti.getInterpolatedAttribute(s,o,l,c,d,new me)),r&&(u.uv1=ti.getInterpolatedAttribute(r,o,l,c,d,new me)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,l,c,d,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new U,materialIndex:0};ti.getNormal(sa,ra,aa,h.normal),u.face=h,u.barycoord=d}return u}var fs=class i extends on{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(d,2));function g(x,m,p,I,w,b,_,E,R,L,S){let y=b/R,P=_/L,B=b/2,H=_/2,q=E/2,J=R+1,X=L+1,ie=0,$=0,de=new U;for(let _e=0;_e<X;_e++){let Se=_e*P-H;for(let Oe=0;Oe<J;Oe++){let je=Oe*y-B;de[x]=je*I,de[m]=Se*w,de[p]=q,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=E>0?1:-1,u.push(de.x,de.y,de.z),d.push(Oe/R),d.push(1-_e/L),ie+=1}}for(let _e=0;_e<L;_e++)for(let Se=0;Se<R;Se++){let Oe=h+Se+J*_e,je=h+Se+J*(_e+1),nt=h+(Se+1)+J*(_e+1),Z=h+(Se+1)+J*_e;l.push(Oe,je,Z),l.push(je,nt,Z),$+=6}o.addGroup(f,$,S),f+=$,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Di(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Di(i[t]);for(let s in n)e[s]=n[s]}return e}function ef(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var ld={clone:Di,merge:kt},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ir=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new U,cu=new me,uu=new me,Nt=class extends ir{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,cu,uu),t.subVectors(uu,cu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},is=-90,ss=1,wa=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(is,ss,e,t);s.layers=this.layers,this.add(s);let r=new Nt(is,ss,e,t);r.layers=this.layers,this.add(r);let a=new Nt(is,ss,e,t);a.layers=this.layers,this.add(a);let o=new Nt(is,ss,e,t);o.layers=this.layers,this.add(o);let l=new Nt(is,ss,e,t);l.layers=this.layers,this.add(l);let c=new Nt(is,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},sr=class extends Zt{constructor(e=[],t=Ii,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ea=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fs(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Vn});r.uniforms.tEquirect.value=t;let a=new At(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=_n),new wa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wn=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},sf={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var rr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ml=new U,rf=new U,af=new Ve,Sn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ml.subVectors(n,t).cross(rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||af.getNormalMatrix(e),s=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new ds,of=new me(.5,.5),ua=new U,ms=class{constructor(e=new Sn,t=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],I=r[12],w=r[13],b=r[14],_=r[15];if(s[0].setComponents(c-a,f-u,p-g,_-I).normalize(),s[1].setComponents(c+a,f+u,p+g,_+I).normalize(),s[2].setComponents(c+o,f+d,p+x,_+w).normalize(),s[3].setComponents(c-o,f-d,p-x,_-w).normalize(),n)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,f-h,p-m,_-b).normalize();else if(s[4].setComponents(c-l,f-h,p-m,_-b).normalize(),t===gn)s[5].setComponents(c+l,f+h,p+m,_+b).normalize();else if(t===Zs)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);let t=of.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ua.x=s.normal.x>0?e.max.x:e.min.x,ua.y=s.normal.y>0?e.max.y:e.min.y,ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ar=class extends Zt{constructor(e,t,n=ui,s,r,a,o=an,l=an,c,u=os,d=1){if(u!==os&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},or=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var lr=class i extends on{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],m=n/2,p=0;I(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(f,2));function I(){let b=new U,_=new U,E=0,R=(t-e)/n;for(let L=0;L<=r;L++){let S=[],y=L/r,P=y*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,q=H*l+o,J=Math.sin(q),X=Math.cos(q);_.x=P*J,_.y=-y*n+m,_.z=P*X,d.push(_.x,_.y,_.z),b.set(J,R,X).normalize(),h.push(b.x,b.y,b.z),f.push(H,1-y),S.push(g++)}x.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){let y=x[S][L],P=x[S+1][L],B=x[S+1][L+1],H=x[S][L+1];(e>0||S!==0)&&(u.push(y,P,H),E+=3),(t>0||S!==r-1)&&(u.push(P,B,H),E+=3)}c.addGroup(p,E,0),p+=E}function w(b){let _=g,E=new me,R=new U,L=0,S=b===!0?e:t,y=b===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*y,0),h.push(0,y,0),f.push(.5,.5),g++;let P=g;for(let B=0;B<=s;B++){let q=B/s*l+o,J=Math.cos(q),X=Math.sin(q);R.x=S*X,R.y=m*y,R.z=S*J,d.push(R.x,R.y,R.z),h.push(0,y,0),E.x=J*.5+.5,E.y=X*.5*y+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){let H=_+B,q=P+B;b===!0?u.push(q,q+1,H):u.push(q+1,q,H),L+=3}c.addGroup(p,L,b===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new vt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gs=class extends Kt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ta=class extends gs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ac(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var da=new U,Sl=new ac,wl=new ac,El=new ac,_s=class extends Kt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(da.subVectors(s[0],s[1]).add(s[0]),c=da);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(da.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=da),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Sl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,m),wl.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,m),El.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),wl.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),El.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Sl.calc(l),wl.calc(l),El.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function du(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function lf(i,e){let t=1-i;return t*t*e}function cf(i,e){return 2*(1-i)*i*e}function uf(i,e){return i*i*e}function Xs(i,e,t,n){return lf(i,e)+cf(i,t)+uf(i,n)}function df(i,e){let t=1-i;return t*t*t*e}function hf(i,e){let t=1-i;return 3*t*t*i*e}function ff(i,e){return 3*(1-i)*i*i*e}function pf(i,e){return i*i*i*e}function qs(i,e,t,n,s){return df(i,e)+hf(i,t)+ff(i,n)+pf(i,s)}var cr=class extends Kt{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(e,s.x,r.x,a.x,o.x),qs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Kt{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qs(e,s.x,r.x,a.x,o.x),qs(e,s.y,r.y,a.y,o.y),qs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ur=class extends Kt{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Kt{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends Kt{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(e,s.x,r.x,a.x),Xs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends Kt{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(e,s.x,r.x,a.x),Xs(e,s.y,r.y,a.y),Xs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fr=class extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(du(o,l.x,c.x,u.x,d.x),du(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Ra=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:_s,CubicBezierCurve:cr,CubicBezierCurve3:Aa,EllipseCurve:gs,LineCurve:ur,LineCurve3:Ca,QuadraticBezierCurve:dr,QuadraticBezierCurve3:hr,SplineCurve:fr}),Ia=class extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ra[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ra[s.type]().fromJSON(s))}return this}},pr=class extends Ia{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ur(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new dr(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new cr(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new gs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vs=class extends pr{constructor(e){super(e),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new pr().fromJSON(s))}return this}};function mf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=cd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xf(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let u=-1/0,d=-1/0;for(let h=t;h<s;h+=t){let f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return mr(r,a,t,o,l,c,0),a}function cd(i,e,t,n,s){let r;if(s===Pf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=hu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=hu(a/n|0,i[a],i[a+1],r);return r&&ys(r,r.next)&&(_r(r),r=r.next),r}function Ai(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ys(t,t.next)||_t(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ef(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?_f(i,n,s,r):gf(i)){e.push(l.i,i.i,c.i),_r(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vf(Ai(i),e),mr(i,e,t,n,s,r,2)):a===2&&yf(i,e,t,n,s,r):mr(Ai(i),e,t,n,s,r,1);break}}}function gf(i){let e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Gs(s,o,r,l,a,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _f(i,e,t,n){let s=i.prev,r=i,a=i.next;if(_t(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),x=Math.max(o,l,c),m=Math.max(u,d,h),p=Ll(f,g,e,t,n),I=Ll(x,m,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=p&&b&&b.z<=I;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Gs(o,u,l,d,c,h,w.x,w.y)&&_t(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Gs(o,u,l,d,c,h,b.x,b.y)&&_t(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Gs(o,u,l,d,c,h,w.x,w.y)&&_t(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=I;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Gs(o,u,l,d,c,h,b.x,b.y)&&_t(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function vf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ys(n,s)&&dd(n,t,t.next,s)&&gr(n,s)&&gr(s,n)&&(e.push(n.i,t.i,s.i),_r(t),_r(t.next),t=i=s),t=t.next}while(t!==i);return Ai(t)}function yf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cf(a,o)){let l=hd(a,o);a=Ai(a,a.next),l=Ai(l,l.next),mr(a,e,t,n,s,r,0),mr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=cd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Af(c))}s.sort(bf);for(let r=0;r<s.length;r++)t=Mf(s[r],t);return t}function bf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Mf(i,e){let t=Sf(i,e);if(!t)return e;let n=hd(t,i);return Ai(n,n.next),Ai(t,t.next)}function Sf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ys(i,t))return t;do{if(ys(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ud(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);gr(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&wf(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function wf(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function Ef(i,e,t,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tf(s)}function Tf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ll(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Af(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ud(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Gs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ud(i,e,t,n,s,r,a,o)}function Cf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Rf(i,e)&&(gr(i,e)&&gr(e,i)&&If(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||ys(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ys(i,e){return i.x===e.x&&i.y===e.y}function dd(i,e,t,n){let s=fa(_t(i,e,t)),r=fa(_t(i,e,n)),a=fa(_t(t,n,i)),o=fa(_t(t,n,e));return!!(s!==r&&a!==o||s===0&&ha(i,t,e)||r===0&&ha(i,n,e)||a===0&&ha(t,i,n)||o===0&&ha(t,e,n))}function ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fa(i){return i>0?1:i<0?-1:0}function Rf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gr(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function If(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hd(i,e){let t=Dl(i.i,i.x,i.y),n=Dl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hu(i,e,t,n){let s=Dl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ul=class{static triangulate(e,t,n=2){return mf(e,t,n)}},Si=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];fu(e),pu(n,e);let a=e.length;t.forEach(fu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,pu(n,t[l]);let o=Ul.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function fu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function pu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vr=class i extends on{constructor(e=new vs([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Mt(s,3)),this.setAttribute("uv",new Mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,I=t.UVGenerator!==void 0?t.UVGenerator:Lf,w,b=!1,_,E,R,L;p&&(w=p.getSpacedPoints(u),b=!0,h=!1,_=p.computeFrenetFrames(u,!1),E=new U,R=new U,L=new U),h||(m=0,f=0,g=0,x=0);let S=o.extractPoints(c),y=S.shape,P=S.holes;if(!Si.isClockWise(y)){y=y.reverse();for(let te=0,Q=P.length;te<Q;te++){let j=P[te];Si.isClockWise(j)&&(P[te]=j.reverse())}}function H(te){let j=10000000000000001e-36,K=te[0];for(let he=1;he<=te.length;he++){let se=he%te.length,fe=te[se],$e=fe.x-K.x,He=fe.y-K.y,T=$e*$e+He*He,v=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(K.x),Math.abs(K.y)),O=j*v*v;if(T<=O){te.splice(se,1),he--;continue}K=fe}}H(y),P.forEach(H);let q=P.length,J=y;for(let te=0;te<q;te++){let Q=P[te];y=y.concat(Q)}function X(te,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(Q,j)}let ie=y.length;function $(te,Q,j){let K,he,se,fe=te.x-Q.x,$e=te.y-Q.y,He=j.x-te.x,T=j.y-te.y,v=fe*fe+$e*$e,O=fe*T-$e*He;if(Math.abs(O)>Number.EPSILON){let W=Math.sqrt(v),ne=Math.sqrt(He*He+T*T),Y=Q.x-$e/W,Le=Q.y+fe/W,ue=j.x-T/ne,Ce=j.y+He/ne,Re=((ue-Y)*T-(Ce-Le)*He)/(fe*T-$e*He);K=Y+fe*Re-te.x,he=Le+$e*Re-te.y;let re=K*K+he*he;if(re<=2)return new me(K,he);se=Math.sqrt(re/2)}else{let W=!1;fe>Number.EPSILON?He>Number.EPSILON&&(W=!0):fe<-Number.EPSILON?He<-Number.EPSILON&&(W=!0):Math.sign($e)===Math.sign(T)&&(W=!0),W?(K=-$e,he=fe,se=Math.sqrt(v)):(K=fe,he=$e,se=Math.sqrt(v/2))}return new me(K/se,he/se)}let de=[];for(let te=0,Q=J.length,j=Q-1,K=te+1;te<Q;te++,j++,K++)j===Q&&(j=0),K===Q&&(K=0),de[te]=$(J[te],J[j],J[K]);let _e=[],Se,Oe=de.concat();for(let te=0,Q=q;te<Q;te++){let j=P[te];Se=[];for(let K=0,he=j.length,se=he-1,fe=K+1;K<he;K++,se++,fe++)se===he&&(se=0),fe===he&&(fe=0),Se[K]=$(j[K],j[se],j[fe]);_e.push(Se),Oe=Oe.concat(Se)}let je;if(m===0)je=Si.triangulateShape(J,P);else{let te=[],Q=[];for(let j=0;j<m;j++){let K=j/m,he=f*Math.cos(K*Math.PI/2),se=g*Math.sin(K*Math.PI/2)+x;for(let fe=0,$e=J.length;fe<$e;fe++){let He=X(J[fe],de[fe],se);ve(He.x,He.y,-he),K===0&&te.push(He)}for(let fe=0,$e=q;fe<$e;fe++){let He=P[fe];Se=_e[fe];let T=[];for(let v=0,O=He.length;v<O;v++){let W=X(He[v],Se[v],se);ve(W.x,W.y,-he),K===0&&T.push(W)}K===0&&Q.push(T)}}je=Si.triangulateShape(te,Q)}let nt=je.length,Z=g+x;for(let te=0;te<ie;te++){let Q=h?X(y[te],Oe[te],Z):y[te];b?(R.copy(_.normals[0]).multiplyScalar(Q.x),E.copy(_.binormals[0]).multiplyScalar(Q.y),L.copy(w[0]).add(R).add(E),ve(L.x,L.y,L.z)):ve(Q.x,Q.y,0)}for(let te=1;te<=u;te++)for(let Q=0;Q<ie;Q++){let j=h?X(y[Q],Oe[Q],Z):y[Q];b?(R.copy(_.normals[te]).multiplyScalar(j.x),E.copy(_.binormals[te]).multiplyScalar(j.y),L.copy(w[te]).add(R).add(E),ve(L.x,L.y,L.z)):ve(j.x,j.y,d/u*te)}for(let te=m-1;te>=0;te--){let Q=te/m,j=f*Math.cos(Q*Math.PI/2),K=g*Math.sin(Q*Math.PI/2)+x;for(let he=0,se=J.length;he<se;he++){let fe=X(J[he],de[he],K);ve(fe.x,fe.y,d+j)}for(let he=0,se=P.length;he<se;he++){let fe=P[he];Se=_e[he];for(let $e=0,He=fe.length;$e<He;$e++){let T=X(fe[$e],Se[$e],K);b?ve(T.x,T.y+w[u-1].y,w[u-1].x+j):ve(T.x,T.y,d+j)}}}N(),G();function N(){let te=s.length/3;if(h){let Q=0,j=ie*Q;for(let K=0;K<nt;K++){let he=je[K];we(he[2]+j,he[1]+j,he[0]+j)}Q=u+m*2,j=ie*Q;for(let K=0;K<nt;K++){let he=je[K];we(he[0]+j,he[1]+j,he[2]+j)}}else{for(let Q=0;Q<nt;Q++){let j=je[Q];we(j[2],j[1],j[0])}for(let Q=0;Q<nt;Q++){let j=je[Q];we(j[0]+ie*u,j[1]+ie*u,j[2]+ie*u)}}n.addGroup(te,s.length/3-te,0)}function G(){let te=s.length/3,Q=0;ce(J,Q),Q+=J.length;for(let j=0,K=P.length;j<K;j++){let he=P[j];ce(he,Q),Q+=he.length}n.addGroup(te,s.length/3-te,1)}function ce(te,Q){let j=te.length;for(;--j>=0;){let K=j,he=j-1;he<0&&(he=te.length-1);for(let se=0,fe=u+m*2;se<fe;se++){let $e=ie*se,He=ie*(se+1),T=Q+K+$e,v=Q+he+$e,O=Q+he+He,W=Q+K+He;Ge(T,v,O,W)}}}function ve(te,Q,j){l.push(te),l.push(Q),l.push(j)}function we(te,Q,j){rt(te),rt(Q),rt(j);let K=s.length/3,he=I.generateTopUV(n,s,K-3,K-2,K-1);C(he[0]),C(he[1]),C(he[2])}function Ge(te,Q,j,K){rt(te),rt(Q),rt(K),rt(Q),rt(j),rt(K);let he=s.length/3,se=I.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);C(se[0]),C(se[1]),C(se[3]),C(se[1]),C(se[2]),C(se[3])}function rt(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function C(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Df(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ra[s.type]().fromJSON(s)),new i(n,e.options)}},Lf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new me(r,a),new me(o,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-d),new me(h,1-g),new me(x,1-p)]:[new me(o,1-l),new me(u,1-d),new me(f,1-g),new me(m,1-p)]}};function Df(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ci=class i extends on{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let I=p*h-a;for(let w=0;w<c;w++){let b=w*d-r;g.push(b,-I,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let I=0;I<o;I++){let w=I+c*p,b=I+c*(p+1),_=I+1+c*(p+1),E=I+1+c*p;f.push(w,b,E),f.push(b,_,E)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(x,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var yr=class i extends on{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new U,d=new U,h=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,I=(s+1)*f+g;a.push(x,m,I),a.push(m,p,I)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var xr=class i extends on{constructor(e=new hr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new me,u=new U,d=[],h=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(f,2));function x(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),I(),p()}function m(w){u=e.getPointAt(w/t,u);let b=a.normals[w],_=a.binormals[w];for(let E=0;E<=s;E++){let R=E/s*Math.PI*2,L=Math.sin(R),S=-Math.cos(R);l.x=S*b.x+L*_.x,l.y=S*b.y+L*_.y,l.z=S*b.z+L*_.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let _=(s+1)*(w-1)+(b-1),E=(s+1)*w+(b-1),R=(s+1)*w+b,L=(s+1)*(w-1)+b;g.push(_,E,L),g.push(E,R,L)}}function I(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)c.x=w/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ra[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ai=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xs=class extends ai{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pa=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},La=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Da=class extends Ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cl:r=e,o=2*t-n;break;case Rl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cl:a=e,l=2*n-t;break;case Rl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,I=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let _=0;_!==o;++_)r[_]=p*a[u+_]+I*a[c+_]+w*a[l+_]+b*a[d+_];return r}},Ua=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Na=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Da(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case xa:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return xa;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Uf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ma,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[h+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=xa;var oi=class extends jt{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ys;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Fa.prototype.ValueTypeName="color";var ka=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};ka.prototype.ValueTypeName="number";var Oa=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},br=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}};br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends jt{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ys;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Ba.prototype.ValueTypeName="vector";var za=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},fd=new za,Ha=class{constructor(e){this.manager=e!==void 0?e:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Sr=class extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tl=new vt,mu=new U,gu=new U,Nl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var wr=class extends ir{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fl=class extends Nl{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Va=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var oc="\\[\\]\\.:\\/",Nf=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",Ff="[^"+oc.replace("\\.","")+"]",kf=/((?:WC+[\/:])*)/.source.replace("WC",lc),Of=/(WCOD+)?/.source.replace("WCOD",Ff),Bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),Hf=new RegExp("^"+kf+Of+Bf+zf+"$"),Vf=["material","materials","bones","map"],kl=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(e){let t=Hf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=kl;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);var _u=new vt,Tr=class{constructor(e,t,n=0,s=1/0){this.ray=new Qs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_u),this}intersectObject(e,t=!0,n=[]){return Ol(e,this,n,t),n.sort(vu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ol(e[s],this,n,t);return n.sort(vu),n}};function vu(i,e){return i.distance-e.distance}function Ol(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ol(r[a],e,t,!0)}}function cc(i,e,t,n){let s=Gf(n);switch(t){case Zl:return i*e;case jl:return i*e/s.components*s.byteLength;case io:return i*e/s.components*s.byteLength;case Ql:return i*e*2/s.components*s.byteLength;case so:return i*e*2/s.components*s.byteLength;case Kl:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case ro:return i*e*4/s.components*s.byteLength;case Rr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(i,16)*Math.max(e,8)/4;case ao:case lo:return Math.max(i,8)*Math.max(e,8)/2;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Co:case Ro:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gf(i){switch(i){case xn:case Xl:return{byteLength:1,components:1};case bs:case ql:case Ms:return{byteLength:2,components:1};case to:case no:return{byteLength:2,components:4};case ui:case eo:case Cn:return{byteLength:4,components:1};case Yl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wf(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:Jf,alphatest_fragment:Zf,alphatest_pars_fragment:Kf,aomap_fragment:jf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:hp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:_p,displacementmap_pars_vertex:vp,displacementmap_vertex:yp,emissivemap_fragment:xp,emissivemap_pars_fragment:bp,colorspace_fragment:Mp,colorspace_pars_fragment:Sp,envmap_fragment:wp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Cp,fog_vertex:Rp,fog_pars_vertex:Ip,fog_fragment:Pp,fog_pars_fragment:Lp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:kp,lights_toon_fragment:Bp,lights_toon_pars_fragment:zp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Gp,lights_physical_pars_fragment:$p,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Kp,map_fragment:jp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:hm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:vm,opaque_fragment:ym,packing:xm,premultiplied_alpha_fragment:bm,project_vertex:Mm,dithering_fragment:Sm,dithering_pars_fragment:wm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Cm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Im,skinbase_vertex:Pm,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:km,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Gm,worldpos_vertex:$m,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:Jm,cube_frag:Zm,depth_vert:Km,depth_frag:jm,distanceRGBA_vert:Qm,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:hg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:_g,meshtoon_frag:vg,points_vert:yg,points_frag:xg,shadow_vert:bg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:wg},ge={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Rn={basic:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:kt([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:kt([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:kt([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:kt([ge.common,ge.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:kt([ge.lights,ge.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Rn.physical={uniforms:kt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var No={r:0,b:0,g:0},Ui=new vn,Eg=new vt;function Tg(i,e,t,n,s,r,a){let o=new Ye(0),l=r===!0?0:1,c,u,d=null,h=0,f=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function x(w){let b=!1,_=g(w);_===null?p(o,l):_&&_.isColor&&(p(_,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===Ar)?(u===void 0&&(u=new At(new fs(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Di(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ui.copy(b.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Ui)),u.material.toneMapped=tt.getTransfer(_.colorSpace)!==ot,(d!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new At(new Ci(2,2),new yn({name:"BackgroundMaterial",uniforms:Di(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(_.colorSpace)!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,b){w.getRGB(No,rc(i)),n.buffers.color.setClear(No.r,No.g,No.b,b,a)}function I(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,b=1){o.set(w),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:m,dispose:I}}function Ag(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(y,P,B,H,q){let J=!1,X=d(H,B,P);r!==X&&(r=X,c(r.object)),J=f(y,H,B,q),J&&g(y,H,B,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(y,P,B,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,P,B){let H=B.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let J=q[P.id];J===void 0&&(J={},q[P.id]=J);let X=J[H];return X===void 0&&(X=h(l()),J[H]=X),X}function h(y){let P=[],B=[],H=[];for(let q=0;q<t;q++)P[q]=0,B[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:H,object:y,attributes:{},index:null}}function f(y,P,B,H){let q=r.attributes,J=P.attributes,X=0,ie=B.getAttributes();for(let $ in ie)if(ie[$].location>=0){let _e=q[$],Se=J[$];if(Se===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),_e===void 0||_e.attribute!==Se||Se&&_e.data!==Se.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function g(y,P,B,H){let q={},J=P.attributes,X=0,ie=B.getAttributes();for(let $ in ie)if(ie[$].location>=0){let _e=J[$];_e===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));let Se={};Se.attribute=_e,_e&&_e.data&&(Se.data=_e.data),q[$]=Se,X++}r.attributes=q,r.attributesNum=X,r.index=H}function x(){let y=r.newAttributes;for(let P=0,B=y.length;P<B;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){let B=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;B[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),q[y]!==P&&(i.vertexAttribDivisor(y,P),q[y]=P)}function I(){let y=r.newAttributes,P=r.enabledAttributes;for(let B=0,H=P.length;B<H;B++)P[B]!==y[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function w(y,P,B,H,q,J,X){X===!0?i.vertexAttribIPointer(y,P,B,q,J):i.vertexAttribPointer(y,P,B,H,q,J)}function b(y,P,B,H){x();let q=H.attributes,J=B.getAttributes(),X=P.defaultAttributeValues;for(let ie in J){let $=J[ie];if($.location>=0){let de=q[ie];if(de===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){let _e=de.normalized,Se=de.itemSize,Oe=e.get(de);if(Oe===void 0)continue;let je=Oe.buffer,nt=Oe.type,Z=Oe.bytesPerElement,N=nt===i.INT||nt===i.UNSIGNED_INT||de.gpuType===eo;if(de.isInterleavedBufferAttribute){let G=de.data,ce=G.stride,ve=de.offset;if(G.isInstancedInterleavedBuffer){for(let we=0;we<$.locationSize;we++)p($.location+we,G.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let we=0;we<$.locationSize;we++)m($.location+we);i.bindBuffer(i.ARRAY_BUFFER,je);for(let we=0;we<$.locationSize;we++)w($.location+we,Se/$.locationSize,nt,_e,ce*Z,(ve+Se/$.locationSize*we)*Z,N)}else{if(de.isInstancedBufferAttribute){for(let G=0;G<$.locationSize;G++)p($.location+G,de.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let G=0;G<$.locationSize;G++)m($.location+G);i.bindBuffer(i.ARRAY_BUFFER,je);for(let G=0;G<$.locationSize;G++)w($.location+G,Se/$.locationSize,nt,_e,Se*Z,Se/$.locationSize*G*Z,N)}}else if(X!==void 0){let _e=X[ie];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv($.location,_e);break;case 3:i.vertexAttrib3fv($.location,_e);break;case 4:i.vertexAttrib4fv($.location,_e);break;default:i.vertexAttrib1fv($.location,_e)}}}}I()}function _(){L();for(let y in n){let P=n[y];for(let B in P){let H=P[B];for(let q in H)u(H[q].object),delete H[q];delete P[B]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let B in P){let H=P[B];for(let q in H)u(H[q].object),delete H[q];delete P[B]}delete n[y.id]}function R(y){for(let P in n){let B=n[P];if(B[y.id]===void 0)continue;let H=B[y.id];for(let q in H)u(H[q].object),delete H[q];delete B[y.id]}}function L(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:I}}function Cg(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let L=R===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Cn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:I,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:_,maxSamples:E}}function Ig(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Sn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let I=r?0:n,w=I*4,b=p.clippingState||null;l.value=b,b=u(g,h,w,f);for(let _=0;_!==w;++_)b[_]=t[_];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,I=h.matrixWorldInverse;o.getNormalMatrix(I),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=f;w!==x;++w,b+=4)a.copy(d[w]).applyMatrix4(I,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Pg(i){let e=new WeakMap;function t(a,o){return o===Ka?a.mapping=Ii:o===ja&&(a.mapping=Pi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ka||o===ja)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ea(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ts=4,pd=[.125,.215,.35,.446,.526,.582],ki=20,uc=new wr,md=new Ye,dc=null,hc=0,fc=0,pc=!1,Fi=(1+Math.sqrt(5))/2,Es=1/Fi,gd=[new U(-Fi,Es,0),new U(Fi,Es,0),new U(-Es,0,Fi),new U(Es,0,Fi),new U(0,Fi,-Es),new U(0,Fi,Es),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Lg=new U,Oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lg}=r;dc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,hc,fc),this._renderer.xr.enabled=pc,e.scissorTest=!1,Fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ms,format:ln,colorSpace:Ti,depthBuffer:!1},s=_d(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Ug(r,e,t)}return s}_compileMaterial(e){let t=new At(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(md),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new er({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new At(new fs,x),p=!1,I=e.background;I?I.isColor&&(x.color.copy(I),e.background=null,p=!0):(x.color.copy(md),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):b===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let _=this._cubeSize;Fo(s,b*_,w>2?_:0,_,_),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=I}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ii||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gd[(s-r-1)%gd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new At(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);let p=[],I=0;for(let R=0;R<ki;++R){let L=R/x,S=Math.exp(-L*L/2);p.push(S),R===0?I+=S:R<m&&(I+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/I;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;let b=this._sizeLods[s],_=3*b*(s>w-Ts?s-w+Ts:0),E=4*(this._cubeSize-b);Fo(t,_,E,3*b,2*b),l.setRenderTarget(t),l.render(d,uc)}};function Dg(i){let e=[],t=[],n=[],s=i,r=i-Ts+1+pd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ts?l=pd[a-i+Ts-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,I=new Float32Array(x*g*f),w=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,L=E>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];I.set(S,x*g*E),w.set(h,m*g*E);let y=[E,E,E,E,E,E];b.set(y,p*g*E)}let _=new on;_.setAttribute("position",new Jt(I,x)),_.setAttribute("uv",new Jt(w,m)),_.setAttribute("faceIndex",new Jt(b,p)),e.push(_),s>Ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _d(i,e,t){let n=new En(i,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ug(i,e,t){let n=new Float32Array(ki),s=new U(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vd(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function yd(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ng(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ka||l===ja,u=l===Ii||l===Pi;if(c||u){let d=e.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Oo(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Oo(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let I=f.array;x=f.version;for(let w=0,b=I.length;w<b;w+=3){let _=I[w+0],E=I[w+1],R=I[w+2];h.push(_,E,E,R,R,_)}}else if(g!==void 0){let I=g.array;x=g.version;for(let w=0,b=I.length/3-1;w<b;w+=3){let _=w+0,E=w+1,R=w+2;h.push(_,E,E,R,R,_)}}else return;let m=new(sc(h)?nr:tr)(h,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Og(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let p=0;for(let I=0;I<g;I++)p+=f[I]*x[I];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Bg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zg(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],I=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let b=o.attributes.position.count*w,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*_*4*d),R=new js(E,b,_,d);R.type=Cn,R.needsUpdate=!0;let L=w*4;for(let y=0;y<d;y++){let P=m[y],B=p[y],H=I[y],q=b*_*4*y;for(let J=0;J<P.count;J++){let X=J*L;f===!0&&(s.fromBufferAttribute(P,J),E[q+X+0]=s.x,E[q+X+1]=s.y,E[q+X+2]=s.z,E[q+X+3]=0),g===!0&&(s.fromBufferAttribute(B,J),E[q+X+4]=s.x,E[q+X+5]=s.y,E[q+X+6]=s.z,E[q+X+7]=0),x===!0&&(s.fromBufferAttribute(H,J),E[q+X+8]=s.x,E[q+X+9]=s.y,E[q+X+10]=s.z,E[q+X+11]=H.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new me(b,_)},n.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Hg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Od=new Zt,xd=new ar(1,1),Bd=new js,zd=new Sa,Hd=new sr,bd=[],Md=[],Sd=new Float32Array(16),wd=new Float32Array(9),Ed=new Float32Array(4);function Cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bd[s];if(r===void 0&&(r=new Float32Array(s),bd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zo(i,e){let t=Md[e];t===void 0&&(t=new Int32Array(e),Md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Ed.set(n),i.uniformMatrix2fv(this.addr,!1,Ed),Rt(t,n)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),Rt(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),Rt(t,n)}}function Jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=tc,r=xd):r=Od,t.setTexture2D(e||r,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hd,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function o_(i){switch(i){case 5126:return Vg;case 35664:return Gg;case 35665:return $g;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Jg;case 35667:case 35671:return Zg;case 35668:case 35672:return Kg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return a_}}function l_(i,e){i.uniform1fv(this.addr,e)}function c_(i,e){let t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function u_(i,e){let t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function d_(i,e){let t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function h_(i,e){let t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f_(i,e){let t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p_(i,e){let t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m_(i,e){i.uniform1iv(this.addr,e)}function g_(i,e){i.uniform2iv(this.addr,e)}function __(i,e){i.uniform3iv(this.addr,e)}function v_(i,e){i.uniform4iv(this.addr,e)}function y_(i,e){i.uniform1uiv(this.addr,e)}function x_(i,e){i.uniform2uiv(this.addr,e)}function b_(i,e){i.uniform3uiv(this.addr,e)}function M_(i,e){i.uniform4uiv(this.addr,e)}function S_(i,e,t){let n=this.cache,s=e.length,r=zo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Od,r[a])}function w_(i,e,t){let n=this.cache,s=e.length,r=zo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zd,r[a])}function E_(i,e,t){let n=this.cache,s=e.length,r=zo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hd,r[a])}function T_(i,e,t){let n=this.cache,s=e.length,r=zo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bd,r[a])}function A_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return u_;case 35666:return d_;case 35674:return h_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return x_;case 36295:return b_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return T_}}var gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}},_c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}},vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function C_(i,e,t){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),a=mc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Td(t,c===void 0?new gc(o,i,e):new _c(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new vc(o),Td(t,d)),t=d}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);C_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ad(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R_=37297,I_=0;function P_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Cd=new Ve;function L_(i){tt._getMatrix(Cd,tt.workingColorSpace,i);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Js:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+P_(i.getShaderSource(e),o)}else return r}function D_(i,e){let t=L_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U_(i,e){let t;switch(e){case Vu:t="Linear";break;case Gu:t="Reinhard";break;case $u:t="Cineon";break;case Za:t="ACESFilmic";break;case Xu:t="AgX";break;case qu:t="Neutral";break;case Wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new U;function N_(){tt.getLuminanceCoefficients(ko);let i=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function k_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ur(i){return i!==""}function Id(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(B_,H_)}var z_=new Map;function H_(i,e){let t=Je[e];if(t===void 0){let n=z_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(V_,G_)}function G_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function W_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Pi:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Pi&&(e="ENVMAP_MODE_REFRACTION"),e}function q_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case zu:e="ENVMAP_BLENDING_MIX";break;case Hu:e="ENVMAP_BLENDING_ADD";break}return e}function Y_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function J_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=$_(t),c=W_(t),u=X_(t),d=q_(t),h=Y_(t),f=F_(t),g=k_(r),x=s.createProgram(),m,p,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Gn?U_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),N_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),a=yc(a),a=Id(a,t),a=Pd(a,t),o=yc(o),o=Id(o,t),o=Pd(o,t),a=Ld(a),o=Ld(o),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=I+m+a,b=I+p+o,_=Ad(s,s.VERTEX_SHADER,w),E=Ad(s,s.FRAGMENT_SHADER,b);s.attachShader(x,_),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(_)||"",q=s.getShaderInfoLog(E)||"",J=B.trim(),X=H.trim(),ie=q.trim(),$=!0,de=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,E);else{let _e=Rd(s,_,"vertex"),Se=Rd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+J+`
`+_e+`
`+Se)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(X===""||ie==="")&&(de=!1);de&&(P.diagnostics={runnable:$,programLog:J,vertexShader:{log:X,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(_),s.deleteShader(E),L=new As(s,x),S=O_(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,R_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=E,this}var Z_=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bc(e),t.set(e,n)),n}},bc=class{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}};function K_(i,e,t,n,s,r,a){let o=new hs,l=new xc,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,B,H){let q=B.fog,J=H.geometry,X=S.isMeshStandardMaterial?B.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),$=ie&&ie.mapping===Ar?ie.image.height:null,de=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=_e!==void 0?_e.length:0,Oe=0;J.morphAttributes.position!==void 0&&(Oe=1),J.morphAttributes.normal!==void 0&&(Oe=2),J.morphAttributes.color!==void 0&&(Oe=3);let je,nt,Z,N;if(de){let at=Rn[de];je=at.vertexShader,nt=at.fragmentShader}else je=S.vertexShader,nt=S.fragmentShader,l.update(S),Z=l.getVertexShaderID(S),N=l.getFragmentShaderID(S);let G=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),ve=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,Ge=!!S.map,rt=!!S.matcap,C=!!ie,te=!!S.aoMap,Q=!!S.lightMap,j=!!S.bumpMap,K=!!S.normalMap,he=!!S.displacementMap,se=!!S.emissiveMap,fe=!!S.metalnessMap,$e=!!S.roughnessMap,He=S.anisotropy>0,T=S.clearcoat>0,v=S.dispersion>0,O=S.iridescence>0,W=S.sheen>0,ne=S.transmission>0,Y=He&&!!S.anisotropyMap,Le=T&&!!S.clearcoatMap,ue=T&&!!S.clearcoatNormalMap,Ce=T&&!!S.clearcoatRoughnessMap,Re=O&&!!S.iridescenceMap,re=O&&!!S.iridescenceThicknessMap,be=W&&!!S.sheenColorMap,ke=W&&!!S.sheenRoughnessMap,De=!!S.specularMap,ye=!!S.specularColorMap,qe=!!S.specularIntensityMap,D=ne&&!!S.transmissionMap,le=ne&&!!S.thicknessMap,pe=!!S.gradientMap,Te=!!S.alphaMap,ae=S.alphaTest>0,ee=!!S.alphaHash,Ie=!!S.extensions,We=Gn;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(We=i.toneMapping);let ut={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:nt,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:N,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:ve,instancingColor:ve&&H.instanceColor!==null,instancingMorph:ve&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ti,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:rt,envMap:C,envMapMode:C&&ie.mapping,envMapCubeUVHeight:$,aoMap:te,lightMap:Q,bumpMap:j,normalMap:K,displacementMap:h&&he,emissiveMap:se,normalMapObjectSpace:K&&S.normalMapType===Ku,normalMapTangentSpace:K&&S.normalMapType===ec,metalnessMap:fe,roughnessMap:$e,anisotropy:He,anisotropyMap:Y,clearcoat:T,clearcoatMap:Le,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ce,dispersion:v,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:re,sheen:W,sheenColorMap:be,sheenRoughnessMap:ke,specularMap:De,specularColorMap:ye,specularIntensityMap:qe,transmission:ne,transmissionMap:D,thicknessMap:le,gradientMap:pe,opaque:S.transparent===!1&&S.blending===wi&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:ae,alphaHash:ee,combine:S.combine,mapUv:Ge&&x(S.map.channel),aoMapUv:te&&x(S.aoMap.channel),lightMapUv:Q&&x(S.lightMap.channel),bumpMapUv:j&&x(S.bumpMap.channel),normalMapUv:K&&x(S.normalMap.channel),displacementMapUv:he&&x(S.displacementMap.channel),emissiveMapUv:se&&x(S.emissiveMap.channel),metalnessMapUv:fe&&x(S.metalnessMap.channel),roughnessMapUv:$e&&x(S.roughnessMap.channel),anisotropyMapUv:Y&&x(S.anisotropyMap.channel),clearcoatMapUv:Le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(S.sheenRoughnessMap.channel),specularMapUv:De&&x(S.specularMap.channel),specularColorMapUv:ye&&x(S.specularColorMap.channel),specularIntensityMapUv:qe&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:le&&x(S.thicknessMap.channel),alphaMapUv:Te&&x(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(K||He),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Ge||Te),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(I(y,S),w(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function I(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){let y=g[S.type],P;if(y){let B=Rn[y];P=ld.clone(B.uniforms)}else P=S.uniforms;return P}function _(S,y){let P;for(let B=0,H=u.length;B<H;B++){let q=u[B];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new J_(i,y,S,r),u.push(P)),P}function E(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:_,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:L}}function j_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ud(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,h,f,g,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function o(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||Q_),n.length>1&&n.sort(h||Ud),s.length>1&&s.sort(h||Ud)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function ev(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Nd,i.set(n,[a])):s>=r.length?(a=new Nd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var iv=0;function sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rv(i){let e=new tv,t=nv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new vt,a=new vt;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,I=0,w=0,b=0,_=0,E=0,R=0;c.sort(sv);for(let S=0,y=c.length;S<y;S++){let P=c[S],B=P.color,H=P.intensity,q=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*H,d+=B.g*H,h+=B.b*H;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],H);R++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,$=t.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=P.shadow.matrix,I++}n.directional[f]=X,f++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;let ie=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,ie.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=ie.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=J,b++}x++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let ie=P.shadow,$=t.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,$.shadowCameraNear=ie.camera.near,$.shadowCameraFar=ie.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(H),X.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==I||L.numPointShadows!==w||L.numSpotShadows!==b||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=I,L.numPointShadows=w,L.numSpotShadows=b,L.numSpotMaps=_,L.numLightProbes=R,n.version=iv++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,I=c.length;p<I;p++){let w=c[p];if(w.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(w.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){let b=n.point[h];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Fd(i){let e=new rv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function av(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Fd(i),e.set(s,[o])):r>=a.length?(o=new Fd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cv(i,e,t){let n=new ms,s=new me,r=new me,a=new yt,o=new Pa({depthPacking:Zu}),l=new La,c={},u=t.maxTextureSize,d={[Bn]:Ht,[Ht]:Bn,[An]:An},h=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:ov,fragmentShader:lv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new At(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let p=this.type;this.render=function(E,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Vn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=p!==Tn&&this.type===Tn,q=p===Tn&&this.type!==Tn;for(let J=0,X=E.length;J<X;J++){let ie=E[J],$=ie.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let de=$.getFrameExtents();if(s.multiply(de),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,$.mapSize.y=r.y)),$.map===null||H===!0||q===!0){let Se=this.type!==Tn?{minFilter:an,magFilter:an}:{};$.map!==null&&$.map.dispose(),$.map=new En(s.x,s.y,Se),$.map.texture.name=ie.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let _e=$.getViewportCount();for(let Se=0;Se<_e;Se++){let Oe=$.getViewport(Se);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),B.viewport(a),$.updateMatrices(ie,Se),n=$.getFrustum(),b(R,L,$.camera,ie,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&I($,L),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function I(E,R){let L=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new En(s.x,s.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,L,h,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,L,f,x,null)}function w(E,R,L,S){let y=null,P=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=y.uuid,H=R.uuid,q=c[B];q===void 0&&(q={},c[B]=q);let J=q[H];J===void 0&&(J=y.clone(),q[H]=J,R.addEventListener("dispose",_)),y=J}if(y.visible=R.visible,y.wireframe=R.wireframe,S===Tn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=i.properties.get(y);B.light=L}return y}function b(E,R,L,S,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Tn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);let H=e.update(E),q=E.material;if(Array.isArray(q)){let J=H.groups;for(let X=0,ie=J.length;X<ie;X++){let $=J[X],de=q[$.materialIndex];if(de&&de.visible){let _e=w(E,de,S,y);E.onBeforeShadow(i,E,R,L,H,_e,$),i.renderBufferDirect(L,null,H,_e,E,$),E.onAfterShadow(i,E,R,L,H,_e,$)}}}else if(q.visible){let J=w(E,q,S,y);E.onBeforeShadow(i,E,R,L,H,J,null),i.renderBufferDirect(L,null,H,J,E,null),E.onAfterShadow(i,E,R,L,H,J,null)}}let B=E.children;for(let H=0,q=B.length;H<q;H++)b(B[H],R,L,S,y)}function _(E){E.target.removeEventListener("dispose",_);for(let L in c){let S=c[L],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var uv={[Ga]:$a,[Wa]:Ya,[Xa]:Ja,[Ei]:qa,[$a]:Ga,[Ya]:Wa,[Ja]:Xa,[qa]:Ei};function dv(i,e){function t(){let D=!1,le=new yt,pe=null,Te=new yt(0,0,0,0);return{setMask:function(ae){pe!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){D=ae},setClear:function(ae,ee,Ie,We,ut){ut===!0&&(ae*=We,ee*=We,Ie*=We),le.set(ae,ee,Ie,We),Te.equals(le)===!1&&(i.clearColor(ae,ee,Ie,We),Te.copy(le))},reset:function(){D=!1,pe=null,Te.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,pe=null,Te=null,ae=null;return{setReversed:function(ee){if(le!==ee){let Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let We=ae;ae=null,this.setClear(We)}},getReversed:function(){return le},setTest:function(ee){ee?G(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!D&&(i.depthMask(ee),pe=ee)},setFunc:function(ee){if(le&&(ee=uv[ee]),Te!==ee){switch(ee){case Ga:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=ee}},setLocked:function(ee){D=ee},setClear:function(ee){ae!==ee&&(le&&(ee=1-ee),i.clearDepth(ee),ae=ee)},reset:function(){D=!1,pe=null,Te=null,ae=null,le=!1}}}function s(){let D=!1,le=null,pe=null,Te=null,ae=null,ee=null,Ie=null,We=null,ut=null;return{setTest:function(at){D||(at?G(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(at){le!==at&&!D&&(i.stencilMask(at),le=at)},setFunc:function(at,Ln,Mn){(pe!==at||Te!==Ln||ae!==Mn)&&(i.stencilFunc(at,Ln,Mn),pe=at,Te=Ln,ae=Mn)},setOp:function(at,Ln,Mn){(ee!==at||Ie!==Ln||We!==Mn)&&(i.stencilOp(at,Ln,Mn),ee=at,Ie=Ln,We=Mn)},setLocked:function(at){D=at},setClear:function(at){ut!==at&&(i.clearStencil(at),ut=at)},reset:function(){D=!1,le=null,pe=null,Te=null,ae=null,ee=null,Ie=null,We=null,ut=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,I=null,w=null,b=null,_=null,E=null,R=new Ye(0,0,0),L=0,S=!1,y=null,P=null,B=null,H=null,q=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ie=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ie>=2);let de=null,_e={},Se=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),je=new yt().fromArray(Se),nt=new yt().fromArray(Oe);function Z(D,le,pe,Te){let ae=new Uint8Array(4),ee=i.createTexture();i.bindTexture(D,ee),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<pe;Ie++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(le+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ee}let N={};N[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(i.DEPTH_TEST),a.setFunc(Ei),j(!1),K(Bl),G(i.CULL_FACE),te(Vn);function G(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ce(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function ve(D,le){return d[D]!==le?(i.bindFramebuffer(D,le),d[D]=le,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function we(D,le){let pe=f,Te=!1;if(D){pe=h.get(le),pe===void 0&&(pe=[],h.set(le,pe));let ae=D.textures;if(pe.length!==ae.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ie=ae.length;ee<Ie;ee++)pe[ee]=i.COLOR_ATTACHMENT0+ee;pe.length=ae.length,Te=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Te=!0);Te&&i.drawBuffers(pe)}function Ge(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let rt={[ii]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};rt[Eu]=i.MIN,rt[Tu]=i.MAX;let C={[Au]:i.ZERO,[Cu]:i.ONE,[Ru]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[Nu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Iu]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(D,le,pe,Te,ae,ee,Ie,We,ut,at){if(D===Vn){x===!0&&(ce(i.BLEND),x=!1);return}if(x===!1&&(G(i.BLEND),x=!0),D!==Mu){if(D!==m||at!==S){if((p!==ii||b!==ii)&&(i.blendEquation(i.FUNC_ADD),p=ii,b=ii),at)switch(D){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}I=null,w=null,_=null,E=null,R.set(0,0,0),L=0,m=D,S=at}return}ae=ae||le,ee=ee||pe,Ie=Ie||Te,(le!==p||ae!==b)&&(i.blendEquationSeparate(rt[le],rt[ae]),p=le,b=ae),(pe!==I||Te!==w||ee!==_||Ie!==E)&&(i.blendFuncSeparate(C[pe],C[Te],C[ee],C[Ie]),I=pe,w=Te,_=ee,E=Ie),(We.equals(R)===!1||ut!==L)&&(i.blendColor(We.r,We.g,We.b,ut),R.copy(We),L=ut),m=D,S=!1}function Q(D,le){D.side===An?ce(i.CULL_FACE):G(i.CULL_FACE);let pe=D.side===Ht;le&&(pe=!pe),j(pe),D.blending===wi&&D.transparent===!1?te(Vn):te(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Te=D.stencilWrite;o.setTest(Te),Te&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function K(D){D!==yu?(G(i.CULL_FACE),D!==P&&(D===Bl?i.cullFace(i.BACK):D===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),P=D}function he(D){D!==B&&(X&&i.lineWidth(D),B=D)}function se(D,le,pe){D?(G(i.POLYGON_OFFSET_FILL),(H!==le||q!==pe)&&(i.polygonOffset(le,pe),H=le,q=pe)):ce(i.POLYGON_OFFSET_FILL)}function fe(D){D?G(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function $e(D){D===void 0&&(D=i.TEXTURE0+J-1),de!==D&&(i.activeTexture(D),de=D)}function He(D,le,pe){pe===void 0&&(de===null?pe=i.TEXTURE0+J-1:pe=de);let Te=_e[pe];Te===void 0&&(Te={type:void 0,texture:void 0},_e[pe]=Te),(Te.type!==D||Te.texture!==le)&&(de!==pe&&(i.activeTexture(pe),de=pe),i.bindTexture(D,le||N[D]),Te.type=D,Te.texture=le)}function T(){let D=_e[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){je.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function ke(D){nt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),nt.copy(D))}function De(D,le){let pe=c.get(le);pe===void 0&&(pe=new WeakMap,c.set(le,pe));let Te=pe.get(D);Te===void 0&&(Te=i.getUniformBlockIndex(le,D.name),pe.set(D,Te))}function ye(D,le){let Te=c.get(le).get(D);l.get(le)!==Te&&(i.uniformBlockBinding(le,Te,D.__bindingPointIndex),l.set(le,Te))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,_e={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,I=null,w=null,b=null,_=null,E=null,R=new Ye(0,0,0),L=0,S=!1,y=null,P=null,B=null,H=null,q=null,je.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:ce,bindFramebuffer:ve,drawBuffers:we,useProgram:Ge,setBlending:te,setMaterial:Q,setFlipSided:j,setCullFace:K,setLineWidth:he,setPolygonOffset:se,setScissorTest:fe,activeTexture:$e,bindTexture:He,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Re,texImage3D:re,updateUBOMapping:De,uniformBlockBinding:ye,texStorage2D:ue,texStorage3D:Ce,texSubImage2D:W,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Le,scissor:be,viewport:ke,reset:qe}}function hv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Ks("canvas")}function x(T,v,O){let W=1,ne=He(T);if((ne.width>O||ne.height>O)&&(W=O/Math.max(ne.width,ne.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(W*ne.width),Le=Math.floor(W*ne.height);d===void 0&&(d=g(Y,Le));let ue=v?g(Y,Le):d;return ue.width=Y,ue.height=Le,ue.getContext("2d").drawImage(T,0,0,Y,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Le+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function I(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,v,O,W,ne=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=v;if(v===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){let Le=ne?Js:tt.getTransfer(W);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Le===ot?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(T,v){let O;return T?v===null||v===ui||v===Ss?O=i.DEPTH24_STENCIL8:v===Cn?O=i.DEPTH32F_STENCIL8:v===bs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ui||v===Ss?O=i.DEPTH_COMPONENT24:v===Cn?O=i.DEPTH_COMPONENT32F:v===bs&&(O=i.DEPTH_COMPONENT16),O}function _(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==an&&T.minFilter!==_n?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){let v=T.target;v.removeEventListener("dispose",E),L(v),v.isVideoTexture&&u.delete(v)}function R(T){let v=T.target;v.removeEventListener("dispose",R),y(v)}function L(T){let v=n.get(T);if(v.__webglInit===void 0)return;let O=T.source,W=h.get(O);if(W){let ne=W[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(T),Object.keys(W).length===0&&h.delete(O)}n.remove(T)}function S(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let O=T.source,W=h.get(O);delete W[v.__cacheKey],a.memory.textures--}function y(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let ne=0;ne<v.__webglFramebuffer[W].length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[W][ne]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=T.textures;for(let W=0,ne=O.length;W<ne;W++){let Y=n.get(O[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(T)}let P=0;function B(){P=0}function H(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function q(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function J(T,v){let O=n.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(O,T,v);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function X(T,v){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){N(O,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function ie(T,v){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){N(O,T,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function $(T,v){let O=n.get(T);if(T.version>0&&O.__version!==T.version){G(O,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let de={[va]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},_e={[an]:i.NEAREST,[Yu]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Se={[ju]:i.NEVER,[sd]:i.ALWAYS,[Qu]:i.LESS,[tc]:i.LEQUAL,[ed]:i.EQUAL,[id]:i.GEQUAL,[td]:i.GREATER,[nd]:i.NOTEQUAL};function Oe(T,v){if(v.type===Cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===_n||v.magFilter===Qa||v.magFilter===Cr||v.magFilter===ci||v.minFilter===_n||v.minFilter===Qa||v.minFilter===Cr||v.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,de[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,de[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,de[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,_e[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==Cr&&v.minFilter!==ci||v.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function je(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",E));let W=v.source,ne=h.get(W);ne===void 0&&(ne={},h.set(W,ne));let Y=q(v);if(Y!==T.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ne[Y].usedTimes++;let Le=ne[T.__cacheKey];Le!==void 0&&(ne[T.__cacheKey].usedTimes--,Le.usedTimes===0&&S(v)),T.__cacheKey=Y,T.__webglTexture=ne[Y].texture}return O}function nt(T,v,O){return Math.floor(Math.floor(T/O)/v)}function Z(T,v,O,W){let Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,W,v.data);else{Y.sort((re,be)=>re.start-be.start);let Le=0;for(let re=1;re<Y.length;re++){let be=Y[Le],ke=Y[re],De=be.start+be.count,ye=nt(ke.start,v.width,4),qe=nt(be.start,v.width,4);ke.start<=De+1&&ye===qe&&nt(ke.start+ke.count-1,v.width,4)===ye?be.count=Math.max(be.count,ke.start+ke.count-be.start):(++Le,Y[Le]=ke)}Y.length=Le+1;let ue=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let re=0,be=Y.length;re<be;re++){let ke=Y[re],De=Math.floor(ke.start/4),ye=Math.ceil(ke.count/4),qe=De%v.width,D=Math.floor(De/v.width),le=ye,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,qe,D,le,pe,O,W,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function N(T,v,O){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let ne=je(T,v),Y=v.source;t.bindTexture(W,T.__webglTexture,i.TEXTURE0+O);let Le=n.get(Y);if(Y.version!==Le.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);let ue=tt.getPrimaries(tt.workingColorSpace),Ce=v.colorSpace===$n?null:tt.getPrimaries(v.colorSpace),Re=v.colorSpace===$n||ue===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=x(v.image,!1,s.maxTextureSize);re=$e(v,re);let be=r.convert(v.format,v.colorSpace),ke=r.convert(v.type),De=w(v.internalFormat,be,ke,v.colorSpace,v.isVideoTexture);Oe(W,v);let ye,qe=v.mipmaps,D=v.isVideoTexture!==!0,le=Le.__version===void 0||ne===!0,pe=Y.dataReady,Te=_(v,re);if(v.isDepthTexture)De=b(v.format===ws,v.type),le&&(D?t.texStorage2D(i.TEXTURE_2D,1,De,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,be,ke,null));else if(v.isDataTexture)if(qe.length>0){D&&le&&t.texStorage2D(i.TEXTURE_2D,Te,De,qe[0].width,qe[0].height);for(let ae=0,ee=qe.length;ae<ee;ae++)ye=qe[ae],D?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ke,ye.data):t.texImage2D(i.TEXTURE_2D,ae,De,ye.width,ye.height,0,be,ke,ye.data);v.generateMipmaps=!1}else D?(le&&t.texStorage2D(i.TEXTURE_2D,Te,De,re.width,re.height),pe&&Z(v,re,be,ke)):t.texImage2D(i.TEXTURE_2D,0,De,re.width,re.height,0,be,ke,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,De,qe[0].width,qe[0].height,re.depth);for(let ae=0,ee=qe.length;ae<ee;ae++)if(ye=qe[ae],v.format!==ln)if(be!==null)if(D){if(pe)if(v.layerUpdates.size>0){let Ie=cc(ye.width,ye.height,v.format,v.type);for(let We of v.layerUpdates){let ut=ye.data.subarray(We*Ie/ye.data.BYTES_PER_ELEMENT,(We+1)*Ie/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,We,ye.width,ye.height,1,be,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,re.depth,be,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,De,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,re.depth,be,ke,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,De,ye.width,ye.height,re.depth,0,be,ke,ye.data)}else{D&&le&&t.texStorage2D(i.TEXTURE_2D,Te,De,qe[0].width,qe[0].height);for(let ae=0,ee=qe.length;ae<ee;ae++)ye=qe[ae],v.format!==ln?be!==null?D?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,De,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ke,ye.data):t.texImage2D(i.TEXTURE_2D,ae,De,ye.width,ye.height,0,be,ke,ye.data)}else if(v.isDataArrayTexture)if(D){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,De,re.width,re.height,re.depth),pe)if(v.layerUpdates.size>0){let ae=cc(re.width,re.height,v.format,v.type);for(let ee of v.layerUpdates){let Ie=re.data.subarray(ee*ae/re.data.BYTES_PER_ELEMENT,(ee+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,be,ke,Ie)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,ke,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,be,ke,re.data);else if(v.isData3DTexture)D?(le&&t.texStorage3D(i.TEXTURE_3D,Te,De,re.width,re.height,re.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,ke,re.data)):t.texImage3D(i.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,be,ke,re.data);else if(v.isFramebufferTexture){if(le)if(D)t.texStorage2D(i.TEXTURE_2D,Te,De,re.width,re.height);else{let ae=re.width,ee=re.height;for(let Ie=0;Ie<Te;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,De,ae,ee,0,be,ke,null),ae>>=1,ee>>=1}}else if(qe.length>0){if(D&&le){let ae=He(qe[0]);t.texStorage2D(i.TEXTURE_2D,Te,De,ae.width,ae.height)}for(let ae=0,ee=qe.length;ae<ee;ae++)ye=qe[ae],D?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be,ke,ye):t.texImage2D(i.TEXTURE_2D,ae,De,be,ke,ye);v.generateMipmaps=!1}else if(D){if(le){let ae=He(re);t.texStorage2D(i.TEXTURE_2D,Te,De,ae.width,ae.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,ke,re)}else t.texImage2D(i.TEXTURE_2D,0,De,be,ke,re);m(v)&&p(W),Le.__version=Y.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function G(T,v,O){if(v.image.length!==6)return;let W=je(T,v),ne=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let Y=n.get(ne);if(ne.version!==Y.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let Le=tt.getPrimaries(tt.workingColorSpace),ue=v.colorSpace===$n?null:tt.getPrimaries(v.colorSpace),Ce=v.colorSpace===$n||Le===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Re=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!Re&&!re?be[ee]=x(v.image[ee],!0,s.maxCubemapSize):be[ee]=re?v.image[ee].image:v.image[ee],be[ee]=$e(v,be[ee]);let ke=be[0],De=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),qe=w(v.internalFormat,De,ye,v.colorSpace),D=v.isVideoTexture!==!0,le=Y.__version===void 0||W===!0,pe=ne.dataReady,Te=_(v,ke);Oe(i.TEXTURE_CUBE_MAP,v);let ae;if(Re){D&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,qe,ke.width,ke.height);for(let ee=0;ee<6;ee++){ae=be[ee].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){let We=ae[Ie];v.format!==ln?De!==null?D?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,We.width,We.height,De,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,We.width,We.height,De,ye,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,qe,We.width,We.height,0,De,ye,We.data)}}}else{if(ae=v.mipmaps,D&&le){ae.length>0&&Te++;let ee=He(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){D?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,De,ye,be[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,be[ee].width,be[ee].height,0,De,ye,be[ee].data);for(let Ie=0;Ie<ae.length;Ie++){let ut=ae[Ie].image[ee].image;D?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,ut.width,ut.height,De,ye,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,qe,ut.width,ut.height,0,De,ye,ut.data)}}else{D?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,ye,be[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,De,ye,be[ee]);for(let Ie=0;Ie<ae.length;Ie++){let We=ae[Ie];D?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,De,ye,We.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,qe,De,ye,We.image[ee])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ne.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ce(T,v,O,W,ne,Y){let Le=r.convert(O.format,O.colorSpace),ue=r.convert(O.type),Ce=w(O.internalFormat,Le,ue,O.colorSpace),Re=n.get(v),re=n.get(O);if(re.__renderTarget=v,!Re.__hasExternalTextures){let be=Math.max(1,v.width>>Y),ke=Math.max(1,v.height>>Y);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,Ce,be,ke,v.depth,0,Le,ue,null):t.texImage2D(ne,Y,Ce,be,ke,0,Le,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ne,re.__webglTexture,0,he(v)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ne,re.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let W=v.depthTexture,ne=W&&W.isDepthTexture?W.type:null,Y=b(v.stencilBuffer,ne),Le=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=he(v);se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Y,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,T)}else{let W=v.textures;for(let ne=0;ne<W.length;ne++){let Y=W[ne],Le=r.convert(Y.format,Y.colorSpace),ue=r.convert(Y.type),Ce=w(Y.internalFormat,Le,ue,Y.colorSpace),Re=he(v);O&&se(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ce,v.width,v.height):se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let ne=W.__webglTexture,Y=he(v);if(v.depthTexture.format===os)se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===ws)se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ge(T){let v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",ne)};W.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=W}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let W=T.texture.mipmaps;W&&W.length>0?we(v.__webglFramebuffer[0],T):we(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),ve(v.__webglDepthbuffer[W],T,!1);else{let ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Y)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ve(v.__webglDepthbuffer,T,!1);else{let ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,O){let W=n.get(T);v!==void 0&&ce(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ge(T)}function C(T){let v=T.texture,O=n.get(T),W=n.get(v);T.addEventListener("dispose",R);let ne=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Le=ne.length>1;if(Le||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<v.mipmaps.length;Ce++)O.__webglFramebuffer[ue][Ce]=i.createFramebuffer()}else O.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)O.__webglFramebuffer[ue]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ue=0,Ce=ne.length;ue<Ce;ue++){let Re=n.get(ne[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&se(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){let Ce=ne[ue];O.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);let Re=r.convert(Ce.format,Ce.colorSpace),re=r.convert(Ce.type),be=w(Ce.internalFormat,Re,re,Ce.colorSpace,T.isXRRenderTarget===!0),ke=he(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,be,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ce(O.__webglFramebuffer[ue][Ce],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else ce(O.__webglFramebuffer[ue],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ue=0,Ce=ne.length;ue<Ce;ue++){let Re=ne[ue],re=n.get(Re),be=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(be=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,re.__webglTexture),Oe(be,Re),ce(O.__webglFramebuffer,T,Re,i.COLOR_ATTACHMENT0+ue,be,0),m(Re)&&p(be)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),Oe(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Ce=0;Ce<v.mipmaps.length;Ce++)ce(O.__webglFramebuffer[Ce],T,v,i.COLOR_ATTACHMENT0,ue,Ce);else ce(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),t.unbindTexture()}T.depthBuffer&&Ge(T)}function te(T){let v=T.textures;for(let O=0,W=v.length;O<W;O++){let ne=v[O];if(m(ne)){let Y=I(T),Le=n.get(ne).__webglTexture;t.bindTexture(Y,Le),p(Y),t.unbindTexture()}}}let Q=[],j=[];function K(T){if(T.samples>0){if(se(T)===!1){let v=T.textures,O=T.width,W=T.height,ne=i.COLOR_BUFFER_BIT,Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(T),ue=v.length>1;if(ue)for(let Re=0;Re<v.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Ce=T.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Re=0;Re<v.length;Re++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);let re=n.get(v[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,ne,i.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(i.COLOR_ATTACHMENT0+Re),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(Y),j.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<v.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);let re=n.get(v[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function he(T){return Math.min(s.maxSamples,T.samples)}function se(T){let v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function fe(T){let v=a.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function $e(T,v){let O=T.colorSpace,W=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ti&&O!==$n&&(tt.getTransfer(O)===ot?(W!==ln||ne!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function He(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=se}function fv(i,e){function t(n,s=$n){let r,a=tt.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===to)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return i.BYTE;if(n===ql)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===eo)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Ms)return i.HALF_FLOAT;if(n===Zl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===ln)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===io)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===so)return i.RG_INTEGER;if(n===ro)return i.RGBA_INTEGER;if(n===Rr||n===Ir||n===Pr||n===Lr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===ho||n===fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===ho)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===vo||n===yo||n===xo||n===bo||n===Mo||n===So||n===wo||n===Eo||n===To||n===Ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Ro||n===Io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Po||n===Lo||n===Do||n===Uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new or(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yn({vertexShader:pv,fragmentShader:mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends zn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Mc,p={},I=t.getContextAttributes(),w=null,b=null,_=[],E=[],R=new me,L=null,S=new Nt;S.viewport=new yt;let y=new Nt;y.viewport=new yt;let P=[S,y],B=new Va,H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=_[N];return G===void 0&&(G=new ps,_[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=_[N];return G===void 0&&(G=new ps,_[N]=G),G.getGripSpace()},this.getHand=function(N){let G=_[N];return G===void 0&&(G=new ps,_[N]=G),G.getHandSpace()};function J(N){let G=E.indexOf(N.inputSource);if(G===-1)return;let ce=_[G];ce!==void 0&&(ce.update(N.inputSource,N.frame,c||a),ce.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ie);for(let N=0;N<_.length;N++){let G=E[N];G!==null&&(E[N]=null,_[N].disconnect(G))}H=null,q=null,m.reset();for(let N in p)delete p[N];e.setRenderTarget(w),f=null,h=null,d=null,s=null,b=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ie),I.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ve=null,we=null;I.depth&&(we=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=I.stencil?ws:os,ve=I.stencil?Ss:ui);let Ge={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ge),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new En(h.textureWidth,h.textureHeight,{format:ln,type:xn,depthTexture:new ar(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ce={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new En(f.framebufferWidth,f.framebufferHeight,{format:ln,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(N){for(let G=0;G<N.removed.length;G++){let ce=N.removed[G],ve=E.indexOf(ce);ve>=0&&(E[ve]=null,_[ve].disconnect(ce))}for(let G=0;G<N.added.length;G++){let ce=N.added[G],ve=E.indexOf(ce);if(ve===-1){for(let Ge=0;Ge<_.length;Ge++)if(Ge>=E.length){E.push(ce),ve=Ge;break}else if(E[Ge]===null){E[Ge]=ce,ve=Ge;break}if(ve===-1)break}let we=_[ve];we&&we.connect(ce)}}let $=new U,de=new U;function _e(N,G,ce){$.setFromMatrixPosition(G.matrixWorld),de.setFromMatrixPosition(ce.matrixWorld);let ve=$.distanceTo(de),we=G.projectionMatrix.elements,Ge=ce.projectionMatrix.elements,rt=we[14]/(we[10]-1),C=we[14]/(we[10]+1),te=(we[9]+1)/we[5],Q=(we[9]-1)/we[5],j=(we[8]-1)/we[0],K=(Ge[8]+1)/Ge[0],he=rt*j,se=rt*K,fe=ve/(-j+K),$e=fe*-j;if(G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX($e),N.translateZ(fe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),we[10]===-1)N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let He=rt+fe,T=C+fe,v=he-$e,O=se+(ve-$e),W=te*C/T*He,ne=Q*C/T*He;N.projectionMatrix.makePerspective(v,O,W,ne,He,T),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Se(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let G=N.near,ce=N.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),B.near=y.near=S.near=G,B.far=y.far=S.far=ce,(H!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,q=B.far),B.layers.mask=N.layers.mask|6,S.layers.mask=B.layers.mask&3,y.layers.mask=B.layers.mask&5;let ve=N.parent,we=B.cameras;Se(B,ve);for(let Ge=0;Ge<we.length;Ge++)Se(we[Ge],ve);we.length===2?_e(B,S,y):B.projectionMatrix.copy(S.projectionMatrix),Oe(N,B,ve)};function Oe(N,G,ce){ce===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(ce.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ls*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(N){return p[N]};let je=null;function nt(N,G){if(u=G.getViewerPose(c||a),g=G,u!==null){let ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ve=!1;ce.length!==B.cameras.length&&(B.cameras.length=0,ve=!0);for(let C=0;C<ce.length;C++){let te=ce[C],Q=null;if(f!==null)Q=f.getViewport(te);else{let K=d.getViewSubImage(h,te);Q=K.viewport,C===0&&(e.setRenderTargetTextures(b,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(b))}let j=P[C];j===void 0&&(j=new Nt,j.layers.enable(C),j.viewport=new yt,P[C]=j),j.matrix.fromArray(te.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(te.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),C===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ve===!0&&B.cameras.push(j)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let C=d.getDepthInformation(ce[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let C=0;C<ce.length;C++){let te=ce[C].camera;if(te){let Q=p[te];Q||(Q=new or,p[te]=Q);let j=d.getCameraImage(te);Q.sourceTexture=j}}}}for(let ce=0;ce<_.length;ce++){let ve=E[ce],we=_[ce];ve!==null&&we!==void 0&&we.update(ve,G,c||a)}je&&je(N,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let Z=new kd;Z.setAnimationLoop(nt),this.setAnimationLoop=function(N){je=N},this.dispose=function(){}}},Ni=new vn,gv=new vt;function _v(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,I,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,I,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let I=e.get(p),w=I.envMap,b=I.envMapRotation;w&&(m.envMap.value=w,Ni.copy(b),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(gv.makeRotationFromEuler(Ni)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,I,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*I,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,I){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=I.texture,m.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let I=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(I.matrixWorld),m.nearDistance.value=I.shadow.camera.near,m.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(I,w){let b=w.program;n.uniformBlockBinding(I,b)}function c(I,w){let b=s[I.id];b===void 0&&(g(I),b=u(I),s[I.id]=b,I.addEventListener("dispose",m));let _=w.program;n.updateUBOMapping(I,_);let E=e.render.frame;r[I.id]!==E&&(h(I),r[I.id]=E)}function u(I){let w=d();I.__bindingPointIndex=w;let b=i.createBuffer(),_=I.__size,E=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,_,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(I){let w=s[I.id],b=I.uniforms,_=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,R=b.length;E<R;E++){let L=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,y=L.length;S<y;S++){let P=L[S];if(f(P,E,S,_)===!0){let B=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],q=0;for(let J=0;J<H.length;J++){let X=H[J],ie=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(I,w,b,_){let E=I.value,R=w+"_"+b;if(_[R]===void 0)return typeof E=="number"||typeof E=="boolean"?_[R]=E:_[R]=E.clone(),!0;{let L=_[R];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return _[R]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(I){let w=I.uniforms,b=0,_=16;for(let R=0,L=w.length;R<L;R++){let S=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,P=S.length;y<P;y++){let B=S[y],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,J=H.length;q<J;q++){let X=H[q],ie=x(X),$=b%_,de=$%ie.boundary,_e=$+de;b+=de,_e!==0&&_-_e<ie.storage&&(b+=_-_e),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=ie.storage}}}let E=b%_;return E>0&&(b+=_-E),I.__size=b,I.__cache={},this}function x(I){let w={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function m(I){let w=I.target;w.removeEventListener("dispose",m);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let I in s)i.deleteBuffer(s[I]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Bo=class{constructor(e={}){let{canvas:t=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,I=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,_=!1;this._outputColorSpace=zt;let E=0,R=0,L=null,S=-1,y=null,P=new yt,B=new yt,H=null,q=new Ye(0),J=0,X=t.width,ie=t.height,$=1,de=null,_e=null,Se=new yt(0,0,X,ie),Oe=new yt(0,0,X,ie),je=!1,nt=new ms,Z=!1,N=!1,G=new vt,ce=new U,ve=new yt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function rt(){return L===null?$:1}let C=n;function te(M,F){return t.getContext(M,F)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ae,!1),C===null){let F="webgl2";if(C=te(F,M),C===null)throw te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,j,K,he,se,fe,$e,He,T,v,O,W,ne,Y,Le,ue,Ce,Re,re,be,ke,De,ye,qe;function D(){Q=new Fg(C),Q.init(),De=new fv(C,Q),j=new Rg(C,Q,e,De),K=new dv(C,Q),j.reversedDepthBuffer&&h&&K.buffers.depth.setReversed(!0),he=new Bg(C),se=new j_,fe=new hv(C,Q,K,se,j,De,he),$e=new Pg(b),He=new Ng(b),T=new Wf(C),ye=new Ag(C,T),v=new kg(C,T,he,ye),O=new Hg(C,v,T,he),re=new zg(C,j,fe),ue=new Ig(se),W=new K_(b,$e,He,Q,j,ye,ue),ne=new _v(b,se),Y=new ev,Le=new av(Q),Re=new Tg(b,$e,He,K,O,f,l),Ce=new cv(b,O,j),qe=new vv(C,he,j,K),be=new Cg(C,Q,he),ke=new Og(C,Q,he),he.programs=W.programs,b.capabilities=j,b.extensions=Q,b.properties=se,b.renderLists=Y,b.shadowMap=Ce,b.state=K,b.info=he}D();let le=new Sc(b,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(X,ie,!1))},this.getSize=function(M){return M.set(X,ie)},this.setSize=function(M,F,z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,ie=F,t.width=Math.floor(M*$),t.height=Math.floor(F*$),z===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*$,ie*$).floor()},this.setDrawingBufferSize=function(M,F,z){X=M,ie=F,$=z,t.width=Math.floor(M*z),t.height=Math.floor(F*z),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Se)},this.setViewport=function(M,F,z,V){M.isVector4?Se.set(M.x,M.y,M.z,M.w):Se.set(M,F,z,V),K.viewport(P.copy(Se).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,F,z,V){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,F,z,V),K.scissor(B.copy(Oe).multiplyScalar($).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){K.setScissorTest(je=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,z=!0){let V=0;if(M){let k=!1;if(L!==null){let oe=L.texture.format;k=oe===ro||oe===so||oe===io}if(k){let oe=L.texture.type,xe=oe===xn||oe===ui||oe===bs||oe===Ss||oe===to||oe===no,Ae=Re.getClearColor(),Ee=Re.getClearAlpha(),Fe=Ae.r,Be=Ae.g,Ue=Ae.b;xe?(g[0]=Fe,g[1]=Be,g[2]=Ue,g[3]=Ee,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Fe,x[1]=Be,x[2]=Ue,x[3]=Ee,C.clearBufferiv(C.COLOR,0,x))}else V|=C.COLOR_BUFFER_BIT}F&&(V|=C.DEPTH_BUFFER_BIT),z&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Re.dispose(),Y.dispose(),Le.dispose(),se.dispose(),$e.dispose(),He.dispose(),O.dispose(),ye.dispose(),qe.dispose(),W.dispose(),le.dispose(),le.removeEventListener("sessionstart",Mn),le.removeEventListener("sessionend",Hc),gi.stop()};function pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let M=he.autoReset,F=Ce.enabled,z=Ce.autoUpdate,V=Ce.needsUpdate,k=Ce.type;D(),he.autoReset=M,Ce.enabled=F,Ce.autoUpdate=z,Ce.needsUpdate=V,Ce.type=k}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ee(M){let F=M.target;F.removeEventListener("dispose",ee),Ie(F)}function Ie(M){We(M),se.remove(M)}function We(M){let F=se.get(M).programs;F!==void 0&&(F.forEach(function(z){W.releaseProgram(z)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,z,V,k,oe){F===null&&(F=we);let xe=k.isMesh&&k.matrixWorld.determinant()<0,Ae=vh(M,F,z,V,k);K.setMaterial(V,xe);let Ee=z.index,Fe=1;if(V.wireframe===!0){if(Ee=v.getWireframeAttribute(z),Ee===void 0)return;Fe=2}let Be=z.drawRange,Ue=z.attributes.position,Qe=Be.start*Fe,lt=(Be.start+Be.count)*Fe;oe!==null&&(Qe=Math.max(Qe,oe.start*Fe),lt=Math.min(lt,(oe.start+oe.count)*Fe)),Ee!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,Ee.count)):Ue!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Ue.count));let xt=lt-Qe;if(xt<0||xt===1/0)return;ye.setup(k,V,Ae,z,Ee);let ht,ct=be;if(Ee!==null&&(ht=T.get(Ee),ct=ke,ct.setIndex(ht)),k.isMesh)V.wireframe===!0?(K.setLineWidth(V.wireframeLinewidth*rt()),ct.setMode(C.LINES)):ct.setMode(C.TRIANGLES);else if(k.isLine){let Ne=V.linewidth;Ne===void 0&&(Ne=1),K.setLineWidth(Ne*rt()),k.isLineSegments?ct.setMode(C.LINES):k.isLineLoop?ct.setMode(C.LINE_LOOP):ct.setMode(C.LINE_STRIP)}else k.isPoints?ct.setMode(C.POINTS):k.isSprite&&ct.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ne=k._multiDrawStarts,mt=k._multiDrawCounts,it=k._multiDrawCount,Wt=Ee?T.get(Ee).bytesPerElement:1,Xi=se.get(V).currentProgram.getUniforms();for(let Xt=0;Xt<it;Xt++)Xi.setValue(C,"_gl_DrawID",Xt),ct.render(Ne[Xt]/Wt,mt[Xt])}else if(k.isInstancedMesh)ct.renderInstances(Qe,xt,k.count);else if(z.isInstancedBufferGeometry){let Ne=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mt=Math.min(z.instanceCount,Ne);ct.renderInstances(Qe,xt,mt)}else ct.render(Qe,xt)};function ut(M,F,z){M.transparent===!0&&M.side===An&&M.forceSinglePass===!1?(M.side=Ht,M.needsUpdate=!0,qr(M,F,z),M.side=Bn,M.needsUpdate=!0,qr(M,F,z),M.side=An):qr(M,F,z)}this.compile=function(M,F,z=null){z===null&&(z=M),p=Le.get(z),p.init(F),w.push(p),z.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==z&&M.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let V=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let oe=k.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){let Ae=oe[xe];ut(Ae,z,k),V.add(Ae)}else ut(oe,z,k),V.add(oe)}),p=w.pop(),V},this.compileAsync=function(M,F,z=null){let V=this.compile(M,F,z);return new Promise(k=>{function oe(){if(V.forEach(function(xe){se.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){k(M);return}setTimeout(oe,10)}Q.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let at=null;function Ln(M){at&&at(M)}function Mn(){gi.stop()}function Hc(){gi.start()}let gi=new kd;gi.setAnimationLoop(Ln),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(M){at=M,le.setAnimationLoop(M),M===null?gi.stop():gi.start()},le.addEventListener("sessionstart",Mn),le.addEventListener("sessionend",Hc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,F,L),p=Le.get(M,w.length),p.init(F),w.push(p),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(G,gn,F.reversedDepth),N=this.localClippingEnabled,Z=ue.init(this.clippingPlanes,N),m=Y.get(M,I.length),m.init(),I.push(m),le.enabled===!0&&le.isPresenting===!0){let oe=b.xr.getDepthSensingMesh();oe!==null&&el(oe,F,-1/0,b.sortObjects)}el(M,F,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(de,_e),Ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ge&&Re.addToRenderList(m,M),this.info.render.frame++,Z===!0&&ue.beginShadows();let z=p.state.shadowsArray;Ce.render(z,M,F),Z===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){let oe=F.cameras;if(k.length>0)for(let xe=0,Ae=oe.length;xe<Ae;xe++){let Ee=oe[xe];Gc(V,k,M,Ee)}Ge&&Re.render(M);for(let xe=0,Ae=oe.length;xe<Ae;xe++){let Ee=oe[xe];Vc(m,M,Ee,Ee.viewport)}}else k.length>0&&Gc(V,k,M,F),Ge&&Re.render(M),Vc(m,M,F);L!==null&&R===0&&(fe.updateMultisampleRenderTarget(L),fe.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(b,M,F),ye.resetDefaultState(),S=-1,y=null,w.pop(),w.length>0?(p=w[w.length-1],Z===!0&&ue.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,I.pop(),I.length>0?m=I[I.length-1]:m=null};function el(M,F,z,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||nt.intersectsSprite(M)){V&&ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(G);let xe=O.update(M),Ae=M.material;Ae.visible&&m.push(M,xe,Ae,z,ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||nt.intersectsObject(M))){let xe=O.update(M),Ae=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ve.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ve.copy(xe.boundingSphere.center)),ve.applyMatrix4(M.matrixWorld).applyMatrix4(G)),Array.isArray(Ae)){let Ee=xe.groups;for(let Fe=0,Be=Ee.length;Fe<Be;Fe++){let Ue=Ee[Fe],Qe=Ae[Ue.materialIndex];Qe&&Qe.visible&&m.push(M,xe,Qe,z,ve.z,Ue)}}else Ae.visible&&m.push(M,xe,Ae,z,ve.z,null)}}let oe=M.children;for(let xe=0,Ae=oe.length;xe<Ae;xe++)el(oe[xe],F,z,V)}function Vc(M,F,z,V){let k=M.opaque,oe=M.transmissive,xe=M.transparent;p.setupLightsView(z),Z===!0&&ue.setGlobalState(b.clippingPlanes,z),V&&K.viewport(P.copy(V)),k.length>0&&Xr(k,F,z),oe.length>0&&Xr(oe,F,z),xe.length>0&&Xr(xe,F,z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Gc(M,F,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new En(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ms:xn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let oe=p.state.transmissionRenderTarget[V.id],xe=V.viewport||P;oe.setSize(xe.z*b.transmissionResolutionScale,xe.w*b.transmissionResolutionScale);let Ae=b.getRenderTarget(),Ee=b.getActiveCubeFace(),Fe=b.getActiveMipmapLevel();b.setRenderTarget(oe),b.getClearColor(q),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),Ge&&Re.render(z);let Be=b.toneMapping;b.toneMapping=Gn;let Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Z===!0&&ue.setGlobalState(b.clippingPlanes,V),Xr(M,z,V),fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let lt=0,xt=F.length;lt<xt;lt++){let ht=F[lt],ct=ht.object,Ne=ht.geometry,mt=ht.material,it=ht.group;if(mt.side===An&&ct.layers.test(V.layers)){let Wt=mt.side;mt.side=Ht,mt.needsUpdate=!0,$c(ct,z,V,Ne,mt,it),mt.side=Wt,mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe))}b.setRenderTarget(Ae,Ee,Fe),b.setClearColor(q,J),Ue!==void 0&&(V.viewport=Ue),b.toneMapping=Be}function Xr(M,F,z){let V=F.isScene===!0?F.overrideMaterial:null;for(let k=0,oe=M.length;k<oe;k++){let xe=M[k],Ae=xe.object,Ee=xe.geometry,Fe=xe.group,Be=xe.material;Be.allowOverride===!0&&V!==null&&(Be=V),Ae.layers.test(z.layers)&&$c(Ae,F,z,Ee,Be,Fe)}}function $c(M,F,z,V,k,oe){M.onBeforeRender(b,F,z,V,k,oe),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(b,F,z,V,M,oe),k.transparent===!0&&k.side===An&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,b.renderBufferDirect(z,F,V,k,M,oe),k.side=Bn,k.needsUpdate=!0,b.renderBufferDirect(z,F,V,k,M,oe),k.side=An):b.renderBufferDirect(z,F,V,k,M,oe),M.onAfterRender(b,F,z,V,k,oe)}function qr(M,F,z){F.isScene!==!0&&(F=we);let V=se.get(M),k=p.state.lights,oe=p.state.shadowsArray,xe=k.state.version,Ae=W.getParameters(M,k.state,oe,F,z),Ee=W.getProgramCacheKey(Ae),Fe=V.programs;V.environment=M.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(M.isMeshStandardMaterial?He:$e).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",ee),Fe=new Map,V.programs=Fe);let Be=Fe.get(Ee);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===xe)return Xc(M,Ae),Be}else Ae.uniforms=W.getUniforms(M),M.onBeforeCompile(Ae,b),Be=W.acquireProgram(Ae,Ee),Fe.set(Ee,Be),V.uniforms=Ae.uniforms;let Ue=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),Xc(M,Ae),V.needsLights=xh(M),V.lightsStateVersion=xe,V.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Wc(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=As.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Xc(M,F){let z=se.get(M);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function vh(M,F,z,V,k){F.isScene!==!0&&(F=we),fe.resetTextureUnits();let oe=F.fog,xe=V.isMeshStandardMaterial?F.environment:null,Ae=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ti,Ee=(V.isMeshStandardMaterial?He:$e).get(V.envMap||xe),Fe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,lt=!!z.morphAttributes.color,xt=Gn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xt=b.toneMapping);let ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=ht!==void 0?ht.length:0,Ne=se.get(V),mt=p.state.lights;if(Z===!0&&(N===!0||M!==y)){let Ot=M===y&&V.id===S;ue.setState(V,M,Ot)}let it=!1;V.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==mt.state.version||Ne.outputColorSpace!==Ae||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Ee||V.fog===!0&&Ne.fog!==oe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==Ue||Ne.morphNormals!==Qe||Ne.morphColors!==lt||Ne.toneMapping!==xt||Ne.morphTargetsCount!==ct)&&(it=!0):(it=!0,Ne.__version=V.version);let Wt=Ne.currentProgram;it===!0&&(Wt=qr(V,F,k));let Xi=!1,Xt=!1,Os=!1,gt=Wt.getUniforms(),nn=Ne.uniforms;if(K.useProgram(Wt.program)&&(Xi=!0,Xt=!0,Os=!0),V.id!==S&&(S=V.id,Xt=!0),Xi||y!==M){K.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),gt.setValue(C,"projectionMatrix",M.projectionMatrix),gt.setValue(C,"viewMatrix",M.matrixWorldInverse);let $t=gt.map.cameraPosition;$t!==void 0&&$t.setValue(C,ce.setFromMatrixPosition(M.matrixWorld)),j.logarithmicDepthBuffer&&gt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Xt=!0,Os=!0)}if(k.isSkinnedMesh){gt.setOptional(C,k,"bindMatrix"),gt.setOptional(C,k,"bindMatrixInverse");let Ot=k.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),gt.setValue(C,"boneTexture",Ot.boneTexture,fe))}k.isBatchedMesh&&(gt.setOptional(C,k,"batchingTexture"),gt.setValue(C,"batchingTexture",k._matricesTexture,fe),gt.setOptional(C,k,"batchingIdTexture"),gt.setValue(C,"batchingIdTexture",k._indirectTexture,fe),gt.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&gt.setValue(C,"batchingColorTexture",k._colorsTexture,fe));let sn=z.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&re.update(k,z,Wt),(Xt||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,gt.setValue(C,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(nn.envMap.value=Ee,nn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(nn.envMapIntensity.value=F.environmentIntensity),Xt&&(gt.setValue(C,"toneMappingExposure",b.toneMappingExposure),Ne.needsLights&&yh(nn,Os),oe&&V.fog===!0&&ne.refreshFogUniforms(nn,oe),ne.refreshMaterialUniforms(nn,V,$,ie,p.state.transmissionRenderTarget[M.id]),As.upload(C,Wc(Ne),nn,fe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(As.upload(C,Wc(Ne),nn,fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(C,"center",k.center),gt.setValue(C,"modelViewMatrix",k.modelViewMatrix),gt.setValue(C,"normalMatrix",k.normalMatrix),gt.setValue(C,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ot=V.uniformsGroups;for(let $t=0,tl=Ot.length;$t<tl;$t++){let _i=Ot[$t];qe.update(_i,Wt),qe.bind(_i,Wt)}}return Wt}function yh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function xh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,F,z){let V=se.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),se.get(M.texture).__webglTexture=F,se.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let z=se.get(M);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};let bh=C.createFramebuffer();this.setRenderTarget=function(M,F=0,z=0){L=M,E=F,R=z;let V=!0,k=null,oe=!1,xe=!1;if(M){let Ee=se.get(M);if(Ee.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(Ee.__webglFramebuffer===void 0)fe.setupRenderTarget(M);else if(Ee.__hasExternalTextures)fe.rebindTextures(M,se.get(M.texture).__webglTexture,se.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ue=M.depthTexture;if(Ee.__boundDepthTexture!==Ue){if(Ue!==null&&se.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(M)}}let Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);let Be=se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?k=Be[F][z]:k=Be[F],oe=!0):M.samples>0&&fe.useMultisampledRTT(M)===!1?k=se.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[z]:k=Be,P.copy(M.viewport),B.copy(M.scissor),H=M.scissorTest}else P.copy(Se).multiplyScalar($).floor(),B.copy(Oe).multiplyScalar($).floor(),H=je;if(z!==0&&(k=bh),K.bindFramebuffer(C.FRAMEBUFFER,k)&&V&&K.drawBuffers(M,k),K.viewport(P),K.scissor(B),K.setScissorTest(H),oe){let Ee=se.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,z)}else if(xe){let Ee=F;for(let Fe=0;Fe<M.textures.length;Fe++){let Be=se.get(M.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,z,Ee)}}else if(M!==null&&z!==0){let Ee=se.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ee.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(M,F,z,V,k,oe,xe,Ae=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){K.bindFramebuffer(C.FRAMEBUFFER,Ee);try{let Fe=M.textures[Ae],Be=Fe.format,Ue=Fe.type;if(!j.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&z>=0&&z<=M.height-k&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),C.readPixels(F,z,V,k,De.convert(Be),De.convert(Ue),oe))}finally{let Fe=L!==null?se.get(L).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,F,z,V,k,oe,xe,Ae=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee)if(F>=0&&F<=M.width-V&&z>=0&&z<=M.height-k){K.bindFramebuffer(C.FRAMEBUFFER,Ee);let Fe=M.textures[Ae],Be=Fe.format,Ue=Fe.type;if(!j.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),C.readPixels(F,z,V,k,De.convert(Be),De.convert(Ue),0);let lt=L!==null?se.get(L).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,lt);let xt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ad(C,xt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(Qe),C.deleteSync(xt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,z=0){let V=Math.pow(2,-z),k=Math.floor(M.image.width*V),oe=Math.floor(M.image.height*V),xe=F!==null?F.x:0,Ae=F!==null?F.y:0;fe.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,xe,Ae,k,oe),K.unbindTexture()};let Mh=C.createFramebuffer(),Sh=C.createFramebuffer();this.copyTextureToTexture=function(M,F,z=null,V=null,k=0,oe=null){oe===null&&(k!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=k,k=0):oe=0);let xe,Ae,Ee,Fe,Be,Ue,Qe,lt,xt,ht=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(z!==null)xe=z.max.x-z.min.x,Ae=z.max.y-z.min.y,Ee=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,Be=z.min.y,Ue=z.isBox3?z.min.z:0;else{let sn=Math.pow(2,-k);xe=Math.floor(ht.width*sn),Ae=Math.floor(ht.height*sn),M.isDataArrayTexture?Ee=ht.depth:M.isData3DTexture?Ee=Math.floor(ht.depth*sn):Ee=1,Fe=0,Be=0,Ue=0}V!==null?(Qe=V.x,lt=V.y,xt=V.z):(Qe=0,lt=0,xt=0);let ct=De.convert(F.format),Ne=De.convert(F.type),mt;F.isData3DTexture?(fe.setTexture3D(F,0),mt=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(fe.setTexture2DArray(F,0),mt=C.TEXTURE_2D_ARRAY):(fe.setTexture2D(F,0),mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let it=C.getParameter(C.UNPACK_ROW_LENGTH),Wt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xi=C.getParameter(C.UNPACK_SKIP_PIXELS),Xt=C.getParameter(C.UNPACK_SKIP_ROWS),Os=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue);let gt=M.isDataArrayTexture||M.isData3DTexture,nn=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let sn=se.get(M),Ot=se.get(F),$t=se.get(sn.__renderTarget),tl=se.get(Ot.__renderTarget);K.bindFramebuffer(C.READ_FRAMEBUFFER,$t.__webglFramebuffer),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,tl.__webglFramebuffer);for(let _i=0;_i<Ee;_i++)gt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,se.get(M).__webglTexture,k,Ue+_i),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,se.get(F).__webglTexture,oe,xt+_i)),C.blitFramebuffer(Fe,Be,xe,Ae,Qe,lt,xe,Ae,C.DEPTH_BUFFER_BIT,C.NEAREST);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||se.has(M)){let sn=se.get(M),Ot=se.get(F);K.bindFramebuffer(C.READ_FRAMEBUFFER,Mh),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,Sh);for(let $t=0;$t<Ee;$t++)gt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,sn.__webglTexture,k,Ue+$t):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,sn.__webglTexture,k),nn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ot.__webglTexture,oe,xt+$t):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ot.__webglTexture,oe),k!==0?C.blitFramebuffer(Fe,Be,xe,Ae,Qe,lt,xe,Ae,C.COLOR_BUFFER_BIT,C.NEAREST):nn?C.copyTexSubImage3D(mt,oe,Qe,lt,xt+$t,Fe,Be,xe,Ae):C.copyTexSubImage2D(mt,oe,Qe,lt,Fe,Be,xe,Ae);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else nn?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(mt,oe,Qe,lt,xt,xe,Ae,Ee,ct,Ne,ht.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(mt,oe,Qe,lt,xt,xe,Ae,Ee,ct,ht.data):C.texSubImage3D(mt,oe,Qe,lt,xt,xe,Ae,Ee,ct,Ne,ht):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,oe,Qe,lt,xe,Ae,ct,Ne,ht.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,oe,Qe,lt,ht.width,ht.height,ct,ht.data):C.texSubImage2D(C.TEXTURE_2D,oe,Qe,lt,xe,Ae,ct,Ne,ht);C.pixelStorei(C.UNPACK_ROW_LENGTH,it),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Wt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Os),oe===0&&F.generateMipmaps&&C.generateMipmap(mt),K.unbindTexture()},this.initRenderTarget=function(M){se.get(M).__webglFramebuffer===void 0&&fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?fe.setTextureCube(M,0):M.isData3DTexture?fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?fe.setTexture2DArray(M,0):fe.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){E=0,R=0,L=null,K.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};function Ec(i,e,t,n,s=i){let r=document.createElement("canvas");r.className="parking-inspection-canvas",r.setAttribute("aria-label","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332"),i.replaceChildren(r);let a=new rr;a.background=new Ye("#f2f6f9");let o=new Nt(34,1,.1,40),l=new Bo({canvas:r,antialias:!0,powerPreference:"low-power"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),l.outputColorSpace=zt,l.toneMapping=Za,a.add(new Sr("#ffffff","#73879a",2));let c=new Er("#ffffff",3);c.position.set(-4,7,5),a.add(c);let u=new wn;a.add(u);let d=new xs({color:"#d8e3e9",metalness:.18,roughness:.32,clearcoat:.8}),h=new xs({color:"#183348",metalness:.18,roughness:.2,clearcoat:1}),f=new ai({color:"#263746",roughness:.45}),g=[],x=(Z,N,G,ce)=>{let ve=new vs;ve.moveTo(Z[0][0],Z[0][1]);for(let[rt,C]of Z.slice(1))ve.lineTo(rt,C);ve.closePath();let we=new vr(ve,{depth:N,bevelEnabled:!0,bevelSegments:3,bevelSize:.04,bevelThickness:.04});we.translate(0,0,ce);let Ge=new At(we,G);Ge.castShadow=!0,u.add(Ge),g.push(Ge)};x([[-2.22,.42],[-2.06,.72],[-1.5,.83],[-1.13,1.02],[-.82,1.57],[-.44,1.76],[.58,1.74],[1.08,1.45],[1.52,.91],[2.02,.78],[2.2,.56],[2.13,.32],[-2.08,.32]],1.46,d,-.73);for(let Z of[-1,1]){let N=Z*.73;x([[-.94,1.15],[-.67,1.52],[-.37,1.63],[-.3,1.15]],.018,h,N),x([[-.21,1.15],[-.2,1.63],[.5,1.61],[.84,1.34],[.7,1.15]],.018,h,N);for(let G of[-1.35,1.28]){let ce=new At(new lr(.39,.39,.25,24),f);ce.rotation.x=Math.PI/2,ce.position.set(G,.43,N),u.add(ce)}}let m=new At(new Ci(100,100),new ai({color:"#edf2f6",roughness:.95}));m.rotation.x=-Math.PI/2,m.position.y=-.04,a.add(m);let p=.82,I=1.18,w=null,b=null,_=null,E=[...t],R=[],L=new Tr,S=new me,y=()=>{o.position.set(7.7*Math.sin(I)*Math.sin(p),7.7*Math.cos(I),7.7*Math.sin(I)*Math.cos(p)),o.lookAt(0,.86,0)},P=()=>l.render(a,o),B=Z=>[Z.world_x,Z.world_y,Z.world_z].every(Number.isFinite)?new U(Z.world_x,Z.world_y,Z.world_z):new U((Z.x-.5)*3.7,.92+(.5-Z.y)*.8,.76),H=()=>{for(let Z of R.splice(0))u.remove(Z),Z.traverse(N=>{N instanceof At&&(N.geometry.dispose(),Array.isArray(N.material)?N.material.forEach(G=>G.dispose()):N.material.dispose())});for(let Z of E){let N=e.find(rt=>rt.id===Z.damage_type_id);if(!N)continue;let G=new wn;G.position.copy(B(Z));let ce=new U(Z.world_nx??0,Z.world_ny??0,Z.world_nz??1);ce.lengthSq()<.01&&ce.set(0,0,1),G.quaternion.setFromUnitVectors(new U(0,0,1),ce.normalize());let we=N.built_in_key==="scratch"||N.name.includes("\u50B7")?new xr(new _s(Array.from({length:25},(rt,C)=>{let te=C/24;return new U((te-.5)*.42,Math.sin(te*Math.PI*6)*.045,0)})),48,.022,8,!1):new yr(.115,.026,10,32),Ge=new At(we,new ai({color:N.color,emissive:N.color,emissiveIntensity:.65}));Ge.userData.markId=Z.id,G.add(Ge),u.add(G),R.push(G)}P()},q=(Z,N)=>{let G=r.getBoundingClientRect();return Z<G.left||Z>G.right||N<G.top||N>G.bottom?[]:(S.set((Z-G.left)/G.width*2-1,-((N-G.top)/G.height)*2+1),L.setFromCamera(S,o),L.intersectObjects([...R,...g],!0))},J=(Z,N)=>{let G=new Ve().getNormalMatrix(N.object.matrixWorld),ce=N.face.normal.clone().applyMatrix3(G).normalize(),ve=N.point.clone().addScaledVector(ce,.035);return{id:crypto.randomUUID(),damage_type_id:Z,x:Dr.clamp((N.point.x+2.3)/4.6,0,1),y:Dr.clamp(1-N.point.y/1.9,0,1),world_x:ve.x,world_y:ve.y,world_z:ve.z,world_nx:ce.x,world_ny:ce.y,world_nz:ce.z}},X=(Z,N,G)=>{let ce=q(N,G).find(ve=>g.includes(ve.object));return!ce||!e.some(ve=>ve.id===Z)?!1:(E.push(J(Z,ce)),n(E),H(),!0)},ie=Z=>{Z.button===0&&(w={id:Z.pointerId,x:Z.clientX,y:Z.clientY,moved:!1},r.setPointerCapture(Z.pointerId))},$=Z=>{if(!w||w.id!==Z.pointerId)return;let N=Z.clientX-w.x,G=Z.clientY-w.y;Math.abs(N)+Math.abs(G)>3&&(w.moved=!0),p-=N*.009,I=Dr.clamp(I-G*.006,.38,1.48),w.x=Z.clientX,w.y=Z.clientY,y(),P()},de=Z=>{if(!w||w.id!==Z.pointerId)return;let N=w.moved;if(w=null,N)return;let ce=q(Z.clientX,Z.clientY).find(ve=>typeof ve.object.userData.markId=="string");if(ce){E=E.filter(ve=>ve.id!==ce.object.userData.markId),n(E),H();return}_!==null&&X(_,Z.clientX,Z.clientY)},_e=Z=>{let N=Z.target.closest("[data-damage-type]");N&&(_=Number(N.dataset.damageType),b={id:Z.pointerId,typeId:_,startX:Z.clientX,startY:Z.clientY,moved:!1,ghost:null},N.setPointerCapture(Z.pointerId),s.querySelectorAll("[data-damage-type]").forEach(G=>G.classList.remove("selected")),N.classList.add("selected"),Z.preventDefault())},Se=Z=>{if(!b||b.id!==Z.pointerId)return;let N=b;if(Math.abs(Z.clientX-N.startX)+Math.abs(Z.clientY-N.startY)>7&&(N.moved=!0),!!N.moved){if(!N.ghost){let G=e.find(ce=>ce.id===N.typeId);N.ghost=document.createElement("div"),N.ghost.className="parking-inspection-drag-ghost",N.ghost.style.backgroundColor=G?.color??"#b33",N.ghost.textContent=`${G?.icon??""} ${G?.name??""}`,document.body.append(N.ghost)}N.ghost.style.left=`${Z.clientX}px`,N.ghost.style.top=`${Z.clientY}px`}},Oe=Z=>{if(!b||b.id!==Z.pointerId)return;let N=b;b=null,N.ghost?.remove(),N.moved&&X(N.typeId,Z.clientX,Z.clientY)},je=()=>{let Z=Math.max(i.clientWidth,1),N=Math.max(i.clientHeight,1);l.setSize(Z,N,!1),o.aspect=Z/N,o.updateProjectionMatrix(),P()},nt=new ResizeObserver(je);return nt.observe(i),r.addEventListener("pointerdown",ie),r.addEventListener("pointermove",$),r.addEventListener("pointerup",de),r.addEventListener("pointercancel",()=>{w=null}),s.addEventListener("pointerdown",_e),s.addEventListener("pointermove",Se),s.addEventListener("pointerup",Oe),s.addEventListener("pointercancel",Oe),y(),H(),je(),{dispose(){nt.disconnect(),r.removeEventListener("pointerdown",ie),r.removeEventListener("pointermove",$),r.removeEventListener("pointerup",de),s.removeEventListener("pointerdown",_e),s.removeEventListener("pointermove",Se),s.removeEventListener("pointerup",Oe),s.removeEventListener("pointercancel",Oe),l.dispose(),a.traverse(Z=>{Z instanceof At&&(Z.geometry.dispose(),Array.isArray(Z.material)?Z.material.forEach(N=>N.dispose()):Z.material.dispose())})},placeAt:X,setMarks(Z){E=[...Z],H()}}}var Vd={\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9:"\u8FD0\u8425\u4EEA\u8868\u76D8",\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406:"\u79DF\u8F66\u8FD0\u8425\u7BA1\u7406",\u99D0\u8ECA\u5834\u7BA1\u7406:"\u505C\u8F66\u573A\u7BA1\u7406",\u8ECA\u4E21\u914D\u7F6E:"\u8F66\u8F86\u5E03\u5C40","ERP\u8ECA\u4E21\u3068\u4E88\u7D04\u306E\u5909\u66F4\u306F\u81EA\u52D5\u3067\u99D0\u8ECA\u5834\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002":"ERP \u8F66\u8F86\u548C\u9884\u7EA6\u53D8\u66F4\u4F1A\u81EA\u52A8\u540C\u6B65\u5230\u505C\u8F66\u573A\u3002","\u8FFD\u52A0\u3059\u308B\u9805\u76EE\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u8F93\u5165\u8981\u6DFB\u52A0\u7684\u9879\u76EE\u540D\u79F0\u3002",\u4F4D\u7F6E\u3092\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E",\u99D0\u8ECA\u4F4D\u7F6E\u3092\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E",\u99D0\u8ECA\u5834\u8A2D\u5B9A:"\u505C\u8F66\u573A\u8BBE\u7F6E","\u99D0\u8ECA\u5834\u306E\u7BA1\u7406\u30FB\u8A2D\u5B9A":"\u505C\u8F66\u573A\u7BA1\u7406\u4E0E\u8BBE\u7F6E","\u99D0\u8ECA\u5834\u3092\u7BA1\u7406\u30FB\u8A2D\u5B9A":"\u7BA1\u7406\u548C\u8BBE\u7F6E\u505C\u8F66\u573A","\u99D0\u8ECA\u5834\u306E\u4F4D\u7F6E\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3001\u5E97\u8217\u304B\u3089\u306E\u8DDD\u96E2\u3001\u8ECA\u4E21\u9805\u76EE\u3092\u307E\u3068\u3081\u3066\u7BA1\u7406\u3057\u307E\u3059\u3002":"\u5728\u540C\u4E00\u5904\u7BA1\u7406\u505C\u8F66\u573A\u4F4D\u7F6E\u3001\u4F18\u5148\u8F66\u8F86\u7C7B\u522B\u3001\u95E8\u5E97\u8DDD\u79BB\u548C\u8F66\u8F86\u9879\u76EE\u3002","\u99D0\u8ECA\u5834\u30FB\u914D\u7F6E\u30A8\u30EA\u30A2":"\u505C\u8F66\u573A\u4E0E\u5E03\u5C40\u533A\u57DF",\u99D0\u8ECA\u5834\u540D:"\u505C\u8F66\u573A\u540D\u79F0","Google Maps URL":"Google Maps \u94FE\u63A5","Google Maps URL \u306B\u5EA7\u6A19\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u306F\u76F4\u7DDA\u8DDD\u96E2\u3092\u81EA\u52D5\u8A08\u7B97\u3057\u307E\u3059\u3002\u77ED\u7E2EURL\u3084\u4F4F\u6240\u3060\u3051\u3067\u306F\u5EA7\u6A19\u3092\u53D6\u5F97\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u8DDD\u96E2\u3092\u624B\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"Google Maps \u94FE\u63A5\u4E2D\u5305\u542B\u5750\u6807\u65F6\u4F1A\u81EA\u52A8\u8BA1\u7B97\u76F4\u7EBF\u8DDD\u79BB\u3002\u77ED\u94FE\u63A5\u6216\u4EC5\u6709\u5730\u5740\u65F6\u65E0\u6CD5\u8BFB\u53D6\u5750\u6807\uFF0C\u8BF7\u624B\u52A8\u8F93\u5165\u8DDD\u79BB\u3002","\u512A\u5148\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u9806\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09":"\u4F18\u5148\u8F66\u8F86\u7C7B\u522B\uFF08\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u7528\u9017\u53F7\u5206\u9694\uFF09",\u512A\u5148\u9806\u4F4D\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u4F18\u5148\u987A\u5E8F","\u5730\u56F3\u5EA7\u6A19\u304B\u3089\u8A08\u7B97\u3057\u305F\u76F4\u7DDA\u8DDD\u96E2\uFF1A":"\u6839\u636E\u5730\u56FE\u5750\u6807\u8BA1\u7B97\u7684\u76F4\u7EBF\u8DDD\u79BB\uFF1A",\u5E97\u8217\u306E\u5730\u56F3\u4F4D\u7F6E:"\u95E8\u5E97\u5730\u56FE\u4F4D\u7F6E","\u5404\u5E97\u8217\u306E Google Maps URL \u3092\u767B\u9332\u3059\u308B\u3068\u3001\u5EA7\u6A19\u3092\u542B\u3080URL\u304B\u3089\u5404\u99D0\u8ECA\u5834\u307E\u3067\u306E\u76F4\u7DDA\u8DDD\u96E2\u3092\u7B97\u51FA\u3057\u307E\u3059\u3002\u4F4F\u6240\u306E\u691C\u7D22\u3084\u5916\u90E8\u3078\u306E\u9001\u4FE1\u306F\u884C\u3044\u307E\u305B\u3093\u3002":"\u767B\u8BB0\u5404\u95E8\u5E97\u7684 Google Maps \u94FE\u63A5\u540E\uFF0C\u4F1A\u4ECE\u542B\u5750\u6807\u7684\u94FE\u63A5\u8BA1\u7B97\u5230\u5404\u505C\u8F66\u573A\u7684\u76F4\u7EBF\u8DDD\u79BB\u3002\u4E0D\u4F1A\u641C\u7D22\u5730\u5740\uFF0C\u4E5F\u4E0D\u4F1A\u5411\u5916\u90E8\u53D1\u9001\u6570\u636E\u3002",\u5730\u56F3\u4F4D\u7F6E\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u5730\u56FE\u4F4D\u7F6E",\u99D0\u8ECA\u5834\u9593\u306E\u8DDD\u96E2:"\u505C\u8F66\u573A\u4E4B\u95F4\u7684\u8DDD\u79BB","\u76F4\u7DDA\u8DDD\u96E2\u306F\u81EA\u52D5\u7B97\u51FA\u3067\u304D\u307E\u3059\u3002\u6240\u8981\u6642\u9593\u306F\u5B9F\u969B\u306E\u30EB\u30FC\u30C8\u306B\u6CBF\u3063\u3066\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4E21\u65B9\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u3002":"\u53EF\u81EA\u52A8\u8BA1\u7B97\u76F4\u7EBF\u8DDD\u79BB\u3002\u8BF7\u6309\u5B9E\u9645\u8DEF\u7EBF\u586B\u5199\u6240\u9700\u65F6\u95F4\u3002\u4E24\u9879\u90FD\u7559\u7A7A\u53EF\u5220\u9664\u8DDD\u79BB\u8BBE\u7F6E\u3002",\u5E97\u8217\u304B\u3089\u5404\u99D0\u8ECA\u5834\u307E\u3067:"\u95E8\u5E97\u5230\u5404\u505C\u8F66\u573A\u7684\u8DDD\u79BB","\u79FB\u52D5\u6642\u9593\u306F\u5B9F\u969B\u306E\u6240\u8981\u6642\u9593\u3092\u5165\u529B\u3057\u307E\u3059\u3002\u5730\u56F3\u5EA7\u6A19\u304B\u3089\u6C42\u3081\u305F\u76F4\u7DDA\u8DDD\u96E2\u306F\u5165\u529B\u305B\u305A\u306B\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002":"\u8BF7\u586B\u5199\u5B9E\u9645\u884C\u9A76\u65F6\u95F4\u3002\u5730\u56FE\u5750\u6807\u81EA\u52A8\u8BA1\u7B97\u7684\u76F4\u7EBF\u8DDD\u79BB\u53EF\u4EE5\u7559\u7A7A\u5E76\u76F4\u63A5\u4FDD\u5B58\u3002","\u9078\u629E\u9805\u76EE\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u6DFB\u52A0\u9009\u9879\u3002",\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u9009\u9879",\u3092\u524A\u9664:"\u5220\u9664",\u767B\u9332\u6E08\u307F\u99D0\u8ECA\u30A8\u30EA\u30A2:"\u5DF2\u767B\u8BB0\u7684\u505C\u8F66\u533A\u57DF","\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6682\u65E0\u505C\u8F66\u533A\u57DF\u3002","\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u5220\u9664\u505C\u8F66\u533A\u57DF\u3002","\u8ECA\u4E21\u30AF\u30E9\u30B9\u3001\u696D\u52D9\u72B6\u614B\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u8DDD\u96E2\u3001\u67FB\u5B9A\u9805\u76EE\u3001\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002":"\u7BA1\u7406\u8F66\u8F86\u7C7B\u522B\u3001\u4E1A\u52A1\u72B6\u6001\u3001\u9009\u9879\u3001\u8DDD\u79BB\u3001\u8BC4\u4F30\u9879\u76EE\u548C\u635F\u4F24\u6807\u8BB0\u3002","\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u8FFD\u52A0\u3068\u524A\u9664\u3092\u884C\u3044\u307E\u3059\u3002\u8ECA\u4E21\u3084\u4F5C\u696D\u4E88\u5B9A\u304C\u3042\u308B\u30A8\u30EA\u30A2\u3001\u6700\u5F8C\u306E\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u6DFB\u52A0\u6216\u5220\u9664\u505C\u8F66\u533A\u57DF\u3002\u4ECD\u6709\u8F66\u8F86\u6216\u4F5C\u4E1A\u8BB0\u5F55\u7684\u533A\u57DF\u4EE5\u53CA\u6700\u540E\u4E00\u4E2A\u533A\u57DF\u65E0\u6CD5\u5220\u9664\u3002",\u4F5C\u696D\u4E88\u5B9A:"\u4F5C\u4E1A\u8BB0\u5F55","\u53F0 \xB7 \u4F5C\u696D\u4E88\u5B9A":"\u8F86 \xB7 \u4F5C\u4E1A\u8BB0\u5F55",\u30AF\u30E9\u30B9:"\u7C7B\u522B",\u5148\u306B\u6240\u5C5E\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u5148\u9009\u62E9\u6240\u5C5E\u95E8\u5E97","\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u8F66\u8F86\u7C7B\u522B\u2026",\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F:"\u65E0\u6CD5\u52A0\u8F7D\u8F66\u8F86\u7C7B\u522B",\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u7C7B\u522B","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026":"\u6B63\u5728\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u2026","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u305D\u306E\u5E97\u8217\u306E\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002\u9805\u76EE\u306E\u5185\u5BB9\u306FParking\u306E\u6A19\u6E96\u69CB\u6210\u3067\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u52A0\u8F7D\u8BE5\u5E97\u8BBE\u7F6E\u3002\u5F53\u524D\u663E\u793A\u7684\u9879\u76EE\u91C7\u7528 Parking \u6807\u51C6\u914D\u7F6E\u3002","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002\u8BF7\u786E\u8BA4\u95E8\u5E97\u540E\u91CD\u8BD5\u3002","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u306E\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002\u8BF7\u68C0\u67E5\u95E8\u5E97\u8BBE\u7F6E\u540E\u91CD\u8BD5\u3002","\u767B\u9332\u5148\u306E\u5E97\u8217\u306E\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002":"\u5C06\u52A0\u8F7D\u8F66\u8F86\u767B\u8BB0\u95E8\u5E97\u7684\u505C\u8F66\u573A\u8BBE\u7F6E\u3002",\u5E97\u8217\u9078\u629E\u5F8C\u306B\u8AAD\u307F\u8FBC\u307F:"\u9009\u62E9\u95E8\u5E97\u540E\u52A0\u8F7D","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u767B\u9332\u5148\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u663E\u793A\u8F66\u8F86\u7684\u9ED8\u8BA4\u505C\u8F66\u533A\u57DF\u3002","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u30683D\u8ECA\u4E21\u30E2\u30C7\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u52A0\u8F7D 3D \u8F66\u8F86\u6A21\u578B\u3002",ETC:"ETC",B\u8EFD\u30C8\u30E9:"B\u8F7B\u578B\u5361\u8F66",\u305D\u306E\u4ED6:"\u5176\u4ED6","\u8ECA\u691C\u30FB\u6CD5\u5B9A\u70B9\u691C":"\u8F66\u68C0\u4E0E\u6CD5\u5B9A\u68C0\u67E5",\u8ECA\u691C\u6E80\u4E86\u65E5:"\u8F66\u68C0\u5230\u671F\u65E5",\u6CD5\u5B9A\u70B9\u691C\u65E5:"\u6CD5\u5B9A\u68C0\u67E5\u65E5\u671F","\u8ECA\u691C ":"\u8F66\u68C0 ","\u6CD5\u5B9A\u70B9\u691C ":"\u6CD5\u5B9A\u68C0\u67E5 ","\u65E5\u4ED8\u3092\u767B\u9332\u3059\u308B\u3068\u8ECA\u4E21\u60C5\u5831\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u65E5\u671F\u5C06\u4FDD\u5B58\u5230\u8F66\u8F86\u4FE1\u606F\u4E2D\u3002",\u696D\u52D9\u72B6\u614B\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5904\u7406\u72B6\u6001",\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8F66\u8F86\u9009\u9879",\u30A2\u30A4\u30B3\u30F3:"\u56FE\u6807",\u8ECA\u8F09\u5668:"\u8F66\u8F7D\u5668",\u7981\u7159:"\u7981\u70DF",\u55AB\u7159:"\u5438\u70DF",\u30CA\u30D3:"\u5BFC\u822A",\u30B9\u30BF\u30C3\u30C9\u30EC\u30B9:"\u96EA\u5730\u8F6E\u80CE",\u50B7:"\u5212\u75D5",\u51F9\u307F:"\u51F9\u9677",\u99D0\u8ECA\u5834\u60C5\u5831:"\u505C\u8F66\u573A\u4FE1\u606F",\u8ECA\u4E21\u30AF\u30E9\u30B9\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093:"\u5C1A\u672A\u767B\u8BB0\u8F66\u8F86\u7C7B\u522B",\u8ECA\u4E21\u60C5\u5831:"\u8F66\u8F86\u4FE1\u606F",\u30CA\u30F3\u30D0\u30FC:"\u8F66\u724C\u53F7","\u4F8B: \u54C1\u5DDD 500 \u3042 1234":"\u4F8B\uFF1A\u54C1\u5DDD 500 \u3042 1234",\u30AA\u30D7\u30B7\u30E7\u30F3:"\u9009\u9879","\u5916\u88C5\u30FB\u5185\u88C5\u7CFB":"\u5916\u89C2\u4E0E\u5185\u9970","\u8ECA\u691C\u8A3C\u30FB\u96FB\u88C5\u7CFB":"\u8F66\u8F86\u767B\u8BB0\u8BC1\u4E0E\u7535\u6C14\u8BBE\u5907",\u57FA\u672C\u60C5\u5831:"\u57FA\u672C\u4FE1\u606F",\u8FFD\u52A0\u9805\u76EE:"\u9644\u52A0\u9879\u76EE","\u5916\u88C5\uFF08\u30DC\u30C7\u30A3\u30FB\u5857\u88C5\u30FB\u9211\u91D1\uFF09":"\u5916\u89C2\uFF08\u8F66\u8EAB\u3001\u6D82\u88C5\u3001\u94A3\u91D1\uFF09","\u5185\u88C5\uFF08\u30B7\u30FC\u30C8\u30FB\u5929\u4E95\u30FB\u30D5\u30ED\u30A2\uFF09":"\u5185\u9970\uFF08\u5EA7\u6905\u3001\u8F66\u9876\u3001\u5730\u677F\uFF09",\u30DB\u30A4\u30FC\u30EB:"\u8F66\u8F6E",\u8ECA\u691C\u8A3C:"\u8F66\u68C0\u8BC1",\u78BA\u8A8D\u6E08\u307F:"\u5DF2\u786E\u8BA4",\u30E9\u30B8\u30AA:"\u6536\u97F3\u673A","\u30CA\u30D3\uFF08\uFF15\u5E74\u4EE5\u5185\uFF09":"\u5BFC\u822A\uFF085\u5E74\u5185\uFF09",\u30A8\u30A2\u30B3\u30F3:"\u7A7A\u8C03",\u30B5\u30A4\u30C9\u30DF\u30E9\u30FC\u8ABF\u6574:"\u540E\u89C6\u955C\u8C03\u6574",\u8D70\u884C\u8DDD\u96E2:"\u884C\u9A76\u91CC\u7A0B","\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u5E74\uFF09":"\u9996\u6B21\u767B\u8BB0\uFF08\u5E74\uFF09","\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u6708\uFF09":"\u9996\u6B21\u767B\u8BB0\uFF08\u6708\uFF09","1\u301C12":"1\u201312",\u8A55\u4FA1:"\u8BC4\u4F30","1\u70B9":"1\u5206","2\u70B9":"2\u5206","3\u70B9":"3\u5206","4\u70B9":"4\u5206","5\u70B9":"5\u5206",\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9:"\u5904\u7406\u72B6\u6001",\u8981\u4FEE\u7406:"\u9700\u8981\u7EF4\u4FEE","\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6682\u65E0\u9009\u9879\u3002","\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6682\u65E0\u5904\u7406\u72B6\u6001\u3002",\u8ECA\u4E21\u72B6\u614B\u8A55\u4FA1\u30B7\u30FC\u30C8:"\u8F66\u8F86\u72B6\u6001\u8BC4\u4F30\u8868","\u8A55\u4FA1\u9805\u76EE\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002":"\u6682\u65E0\u8BC4\u4F30\u9879\u76EE\u3002\u53EF\u5728\u505C\u8F66\u573A\u8BBE\u7F6E\u4E2D\u6DFB\u52A0\u3002",\u5099\u8003\u6B04:"\u5907\u6CE8","\u8ECA\u4E21\u306B\u3064\u3044\u3066\u5171\u6709\u3057\u305F\u3044\u3053\u3068\u3092\u8A18\u9332\u3067\u304D\u307E\u3059\u3002":"\u8BB0\u5F55\u9700\u8981\u4E0E\u56E2\u961F\u5171\u4EAB\u7684\u8F66\u8F86\u4FE1\u606F\u3002",\u8ECA\u4F53\u306E\u640D\u50B7\u4F4D\u7F6E:"\u8F66\u8EAB\u635F\u4F24\u4F4D\u7F6E","\u50B7\u307E\u305F\u306F\u51F9\u307F\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u305F\u307E\u307E\u30013D\u8ECA\u4F53\u306E\u8868\u9762\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u6309\u4F4F\u5212\u75D5\u6216\u51F9\u9677\u56FE\u6807\uFF0C\u5C06\u5176\u62D6\u5230 3D \u8F66\u8EAB\u8868\u9762\u3002","\u640D\u50B7\u306E\u7A2E\u985E\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002":"\u6682\u65E0\u635F\u4F24\u7C7B\u578B\u3002\u53EF\u5728\u505C\u8F66\u573A\u8BBE\u7F6E\u4E2D\u6DFB\u52A0\u3002","3D\u8ECA\u4E21\u30E2\u30C7\u30EB":"3D \u8F66\u8F86\u6A21\u578B","\u640D\u50B7\u4F4D\u7F6E\u306F\u307E\u3060\u8A18\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u8BB0\u5F55\u635F\u4F24\u4F4D\u7F6E\u3002",\u640D\u50B7\u30DE\u30FC\u30AF\u3092\u524A\u9664:"\u5220\u9664\u635F\u4F24\u6807\u8BB0",\u8FFD\u52A0\u3057\u305F\u8ECA\u4E21\u306F:"\u65B0\u589E\u8F66\u8F86\u5C06\u767B\u8BB0\u5728","\u306B\u767B\u9332\u3055\u308C\u307E\u3059\u3002":"\u3002","\u6709\u52B9\u306A\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u306A\u3044\u305F\u3081\u3001\u8ECA\u4E21\u306F\u672A\u914D\u7F6E\u3067\u767B\u9332\u3055\u308C\u307E\u3059\u3002":"\u6CA1\u6709\u53EF\u7528\u505C\u8F66\u533A\u57DF\uFF0C\u8F66\u8F86\u5C06\u4EE5\u672A\u5206\u914D\u72B6\u6001\u767B\u8BB0\u3002","\u696D\u52D9\u72B6\u614B\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u4E1A\u52A1\u72B6\u6001\u3002","\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u8F66\u8F86\u9009\u9879\u3002","\u67FB\u5B9A\u9805\u76EE\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u8BC4\u4F30\u9879\u76EE\u3002","\u640D\u50B7\u306E\u7A2E\u985E\u3092\u9078\u3073\u30013D\u8ECA\u4E21\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u4F4D\u7F6E\u3092\u8A18\u9332\u3067\u304D\u307E\u3059\u3002":"\u9009\u62E9\u635F\u4F24\u7C7B\u578B\u540E\uFF0C\u70B9\u51FB 3D \u8F66\u8F86\u5373\u53EF\u8BB0\u5F55\u4F4D\u7F6E\u3002","\u640D\u50B7\u306E\u7A2E\u985E\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u635F\u4F24\u7C7B\u578B\u3002",\u8ECA\u4E21\u60C5\u5831\u3068\u99D0\u8ECA\u5834\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u8F66\u8F86\u548C\u505C\u8F66\u573A\u4FE1\u606F","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002","\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u5220\u9664\u8BBE\u7F6E\u3002",\u767B\u9332\u8ECA\u4E21:"\u767B\u8BB0\u8F66\u8F86",\u914D\u7F6E\u30A8\u30EA\u30A2:"\u505C\u8F66\u533A\u57DF",\u8981\u5BFE\u5FDC:"\u5F85\u5904\u7406",\u30B9\u30C6\u30FC\u30BF\u30B9\u5225\u306E\u8ECA\u4E21:"\u6309\u72B6\u6001\u5206\u7C7B\u7684\u8F66\u8F86",\u30B8\u30E7\u30D6:"\u4EFB\u52A1",\u8ECA\u4E21\u4E00\u89A7:"\u8F66\u8F86\u5217\u8868",\u8ECA\u756A\u3067\u691C\u7D22:"\u6309\u8F66\u724C\u641C\u7D22",ERP\u8ECA\u4E21\u3092\u540C\u671F:"\u540C\u6B65 ERP \u8F66\u8F86",All:"\u5168\u90E8",\u3059\u3079\u3066:"\u5168\u90E8","\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u8F66\u8F86\u3002","\u8ECA\u4E21\u7BA1\u7406\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u524D\u5F80\u8F66\u8F86\u7BA1\u7406\u9875\u9762\u767B\u8BB0\u3002",\u8ECA\u4E21\u7BA1\u7406\u3078:"\u524D\u5F80\u8F66\u8F86\u7BA1\u7406",\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u3042\u308A\u307E\u305B\u3093:"\u5C1A\u672A\u8BBE\u7F6E\u505C\u8F66\u533A\u57DF","\u300C\u4F4D\u7F6E\u3092\u7BA1\u7406\u300D\u304B\u3089\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8ECA\u4E21\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002":"\u901A\u8FC7\u201C\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E\u201D\u6DFB\u52A0\u533A\u57DF\u540E\uFF0C\u5373\u53EF\u5E03\u7F6E\u8F66\u8F86\u3002",\u30B5\u30A4\u30BA\u8ABF\u6574:"\u8C03\u6574\u5C3A\u5BF8",\u8A2D\u5B9A:"\u8BBE\u7F6E","\u30A8\u30EA\u30A2\u306E\u5E45\uFF08%\uFF09":"\u533A\u57DF\u5BBD\u5EA6\uFF08%\uFF09",\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4:"\u62D6\u52A8\u4EE5\u8C03\u6574\u505C\u8F66\u533A\u57DF\u5927\u5C0F",\u30E1\u30CB\u30E5\u30FC:"\u83DC\u5355",\u6B63\u5E38\u7A3C\u50CD\u4E2D:"\u8FD0\u884C\u6B63\u5E38",\u66F4\u65B0:"\u5237\u65B0",\u518D\u8A66\u884C:"\u91CD\u8BD5","\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u2026",\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F:"\u65E0\u6CD5\u52A0\u8F7D","\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u64CD\u4F5C\u672A\u80FD\u5B8C\u6210\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u9884\u7EA6\u4E0E\u63A5\u5F85",\u5E97\u8217\u7BA1\u7406:"\u95E8\u5E97\u7BA1\u7406",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8:"\u5E97\u94FA\u8D26\u6237",\u7BA1\u7406\u30D1\u30CD\u30EB\u306B\u623B\u308B:"\u8FD4\u56DE\u7BA1\u7406\u9762\u677F",\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8:"\u7BA1\u7406\u5458\u8D26\u6237",\u5E97\u8217\u60C5\u5831:"\u95E8\u5E97\u4FE1\u606F",\u5E97\u8217\u60C5\u5831\u3092\u7DE8\u96C6:"\u7F16\u8F91\u95E8\u5E97\u4FE1\u606F",\u5E97\u8217\u4E00\u89A7\u3078\u623B\u308B:"\u8FD4\u56DE\u95E8\u5E97\u5217\u8868",\u8A73\u7D30:"\u8BE6\u60C5",\u4F4F\u6240:"\u5730\u5740","\u4F4F\u6240\uFF08\u4EFB\u610F\uFF09":"\u5730\u5740\uFF08\u9009\u586B\uFF09","\u96FB\u8A71\u756A\u53F7\uFF08\u4EFB\u610F\uFF09":"\u7535\u8BDD\u53F7\u7801\uFF08\u9009\u586B\uFF09",\u52A0\u5165\u65E5:"\u52A0\u5165\u65E5\u671F",\u8ECA\u4E21\u30AF\u30E9\u30B9\u5225\u306E\u53F0\u6570:"\u5404\u8F66\u8F86\u7C7B\u522B\u6570\u91CF",\u8ECA\u4E21\u30AF\u30E9\u30B9\u306E\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8F66\u8F86\u7C7B\u522B\u4FE1\u606F",\u672A\u5206\u985E:"\u672A\u5206\u7C7B",\u672A\u767B\u9332:"\u672A\u586B\u5199",\u5E97\u8217\u3092\u505C\u6B62:"\u505C\u7528\u95E8\u5E97",\u5E97\u8217\u3092\u518D\u958B:"\u6062\u590D\u95E8\u5E97","\u5E97\u8217\u3092\u505C\u6B62\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u505C\u7528\u95E8\u5E97\u3002","\u5E97\u8217\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u6062\u590D\u95E8\u5E97\u3002","\u3053\u306E\u5E97\u8217\u3092\u505C\u6B62\u3057\u307E\u3059\u304B\uFF1F\u5C65\u6B74\u30C7\u30FC\u30BF\u306F\u4FDD\u6301\u3055\u308C\u3001\u3042\u3068\u3067\u518D\u958B\u3067\u304D\u307E\u3059\u3002":"\u786E\u5B9A\u505C\u7528\u6B64\u95E8\u5E97\u5417\uFF1F\u5386\u53F2\u6570\u636E\u4F1A\u4FDD\u7559\uFF0C\u4E4B\u540E\u53EF\u4EE5\u6062\u590D\u3002","\u3053\u306E\u5E97\u8217\u3092\u518D\u958B\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u6062\u590D\u6B64\u95E8\u5E97\u5417\uFF1F",\u73FE\u5728\u306E\u30A2\u30AB\u30A6\u30F3\u30C8:"\u5F53\u524D\u8D26\u53F7",\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8D26\u6237",\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8868\u793A:"\u67E5\u770B\u8D26\u6237",\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u9589\u3058\u308B:"\u6536\u8D77\u8D26\u6237",\u5E97\u8217\u3054\u3068\u306E\u30ED\u30B0\u30A4\u30F3\u3068\u5229\u7528\u6A29\u9650\u3092\u7BA1\u7406:"\u7BA1\u7406\u5404\u95E8\u5E97\u7684\u767B\u5F55\u8D26\u6237\u548C\u4F7F\u7528\u6743\u9650","\u3059\u3079\u3066\u306E\u5E97\u8217\u30FB\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u7BA1\u7406":"\u7BA1\u7406\u6240\u6709\u95E8\u5E97\u8D26\u6237\u548C\u7BA1\u7406\u5458\u8D26\u6237\u53CA\u5176\u5BC6\u7801",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5E97\u94FA\u8D26\u6237",\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8D26\u6237","\u5E97\u8217 / \u30A2\u30AB\u30A6\u30F3\u30C8":"\u5E97\u94FA / \u8D26\u6237",\u5E97\u8217\u30B3\u30FC\u30C9:"\u5E97\u94FA\u4EE3\u7801",\u7BA1\u7406\u8005:"\u7BA1\u7406\u5458",\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4:"\u4FEE\u6539\u5BC6\u7801",\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4:"\u4FEE\u6539\u5BC6\u7801",\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9:"\u65B0\u5BC6\u7801","\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\uFF08\u78BA\u8A8D\uFF09":"\u786E\u8BA4\u65B0\u5BC6\u7801","12\uFF5E128 \u6587\u5B57":"12\u2013128 \u4E2A\u5B57\u7B26",\u3082\u3046\u4E00\u5EA6\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u518D\u6B21\u8F93\u5165","\u5909\u66F4\u524D\u306B\u30ED\u30B0\u30A4\u30F3\u6E08\u307F\u306E\u7AEF\u672B\u306F\u3001\u305D\u306E\u307E\u307E\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u304C\u7D9A\u304D\u307E\u3059\u3002":"\u5DF2\u767B\u5F55\u7684\u8BBE\u5907\u4E0D\u4F1A\u56E0\u4FEE\u6539\u5BC6\u7801\u800C\u9000\u51FA\u3002","\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u306A\u3044\u304B\u3001\u5FC5\u8981\u306A\u6587\u5B57\u6570\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093\u3002":"\u4E24\u6B21\u8F93\u5165\u7684\u65B0\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u6216\u5BC6\u7801\u957F\u5EA6\u4E0D\u7B26\u5408\u8981\u6C42\u3002",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5E97\u94FA\u8D26\u6237",\u5229\u7528\u505C\u6B62\u4E2D:"\u5DF2\u505C\u7528",\u5E97\u8217\u7528\u306E\u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"\u8BBE\u7F6E\u5E97\u94FA\u767B\u5F55 ID \u548C\u4F7F\u7528\u6743\u9650",\u5229\u7528\u6A29\u9650:"\u4F7F\u7528\u6743\u9650",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F:"\u5458\u5DE5\u540D\u5355",\u30B9\u30BF\u30C3\u30D5\u540D:"\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059":"\u7528\u4E8E\u9009\u62E9\u51FA\u79DF\u548C\u6536\u8F66\u7684\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093:"\u5C1A\u672A\u767B\u8BB0\u5458\u5DE5\u59D3\u540D",\u7121\u52B9\u306B\u3059\u308B:"\u505C\u7528",\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059":"\u66F4\u6539\u51FA\u79DF\u548C\u6536\u8F66\u8BB0\u5F55\u4E2D\u663E\u793A\u7684\u59D3\u540D","\u8CB8\u51FA\u62C5\u5F53\uFF1A":"\u51FA\u79DF\u7ECF\u529E\uFF1A","\u8FD4\u5374\u62C5\u5F53\uFF1A":"\u6536\u8F66\u7ECF\u529E\uFF1A","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059":"\u767B\u8BB0\u51FA\u79DF\u548C\u6536\u8F66\u65F6\u7684\u7ECF\u529E\u5458\u5DE5",\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5:"\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u5458\u5DE5","\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u5148\u5728\u5458\u5DE5\u540D\u5355\u4E2D\u767B\u8BB0\u7ECF\u529E\u5458\u5DE5\u3002",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F:"\u6253\u5F00\u5458\u5DE5\u540D\u5355",\u8CB8\u51FA\u624B\u7D9A\u304D:"\u529E\u7406\u51FA\u79DF",\u8FD4\u5374\u624B\u7D9A\u304D:"\u529E\u7406\u6536\u8F66",\u8CB8\u51FA\u3092\u78BA\u5B9A:"\u786E\u8BA4\u51FA\u79DF",\u8FD4\u5374\u3092\u78BA\u5B9A:"\u786E\u8BA4\u6536\u8F66","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u6DFB\u52A0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u66F4\u65B0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u91CD\u65B0\u542F\u7528\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u505C\u7528\u5458\u5DE5\u59D3\u540D\u3002",employee_required:"\u8BF7\u9009\u62E9\u8D1F\u8D23\u6B64\u6B21\u64CD\u4F5C\u7684\u5458\u5DE5\u3002",invalid_employee:"\u8BF7\u68C0\u67E5\u5458\u5DE5\u59D3\u540D\u3002",\u8ECA\u4E21\u7BA1\u7406:"\u8F66\u8F86\u7BA1\u7406",\u99D0\u8ECA\u5834\u914D\u7F6E:"\u505C\u8F66\u573A\u5E03\u5C40",\u8ECA\u4E21\u4E00\u89A7\u3078\u623B\u308B:"\u8FD4\u56DE\u8F66\u8F86\u5217\u8868",\u30ED\u30B0\u30A2\u30A6\u30C8:"\u9000\u51FA\u767B\u5F55",\u6240\u5C5E\u5E97\u8217:"\u6240\u5C5E\u95E8\u5E97",\u6709\u52B9:"\u542F\u7528",\u7121\u52B9:"\u505C\u7528",\u8CB8\u51FA\u53EF\u80FD:"\u53EF\u51FA\u79DF",\u8CB8\u51FA\u4E2D:"\u51FA\u79DF\u4E2D",\u6574\u5099\u4E2D:"\u7EF4\u4FEE\u4E2D",\u767B\u9332\u62B9\u6D88:"\u5DF2\u6CE8\u9500",\u672C\u90E8:"\u603B\u90E8",\u76F4\u55B6\u5E97:"\u76F4\u8425\u5E97",\u52A0\u76DF\u5E97:"\u52A0\u76DF\u5E97",\u4E88\u7D04\u6E08\u307F:"\u5DF2\u9884\u7EA6",\u8FD4\u5374\u6E08\u307F:"\u5DF2\u5F52\u8FD8",\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002":"\u8D26\u6237\u6216\u5BC6\u7801\u4E0D\u6B63\u786E\u3002","\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002":"\u60A8\u6CA1\u6709\u6743\u9650\u6267\u884C\u6B64\u64CD\u4F5C\u3002","\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u4FE1\u606F\u91CD\u590D\uFF0C\u8BF7\u68C0\u67E5\u95E8\u5E97\u4EE3\u7801\u3001\u8D26\u6237\u540D\u3001\u8F66\u724C\u53F7\u6216\u5458\u5DE5\u59D3\u540D\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u4ECD\u6709\u8F66\u8F86\u6216\u4F5C\u4E1A\u8BA1\u5212\uFF0C\u6B64\u505C\u8F66\u533A\u57DF\u65E0\u6CD5\u5220\u9664\u3002","\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u65E0\u6CD5\u5220\u9664\u6700\u540E\u4E00\u4E2A\u505C\u8F66\u533A\u57DF\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u8F66\u8F86\u6216\u9884\u7EA6\u72B6\u6001\u5DF2\u66F4\u6539\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002","\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u5F79\u5272\u3001\u307E\u305F\u306F\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u95E8\u5E97\u3001\u89D2\u8272\u6216\u8F66\u8F86\u3002","\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u8ECA\u4E21\u3001\u30B9\u30BF\u30C3\u30D5\u3001\u307E\u305F\u306F\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u6240\u9009\u95E8\u5E97\u3001\u8F66\u8F86\u3001\u5458\u5DE5\u6216\u505C\u8F66\u573A\u8BBE\u7F6E\u3002","\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8F93\u5165\u5185\u5BB9\u3002","\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u53D1\u751F\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u6709\u8F66\u8F86\u7684 ERP \u7F51\u70B9\u5DF2\u66F4\u6539\uFF0C\u8BF7\u68C0\u67E5\u505C\u8F66\u573A\u6570\u636E\u4E2D\u7684\u7F51\u70B9\u5206\u914D\u3002","\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002":"\u8D26\u6237\u6216\u6240\u5C5E\u95E8\u5E97\u5DF2\u505C\u7528\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8D26\u6237\u3002","\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8F66\u8F86\u3002","\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u9884\u7EA6\u3002","\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u95E8\u5E97\u4FE1\u606F\u3002","\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u89D2\u8272\u4FE1\u606F\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8D26\u6237\u4FE1\u606F\u3002","\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u6743\u9650\u3002","\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u9009\u62E9\u95E8\u5E97\u3002","\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u9884\u7EA6\u5185\u5BB9\u3002","\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u76F8\u5173\u4FE1\u606F\u3002",\u30A2\u30AB\u30A6\u30F3\u30C8:"\u8D26\u6237",\u30D1\u30B9\u30EF\u30FC\u30C9:"\u5BC6\u7801",\u30ED\u30B0\u30A4\u30F3:"\u767B\u5F55","\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026":"\u6B63\u5728\u767B\u5F55\u2026","\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002":"\u65E0\u6CD5\u8BFB\u53D6\u505C\u8F66\u573A\u66F4\u65B0\u901A\u77E5\u3002","\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u505C\u8F66\u573A\u5B9E\u65F6\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u8FDE\u63A5\u3002","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406":"\u7BA1\u7406\u603B\u90E8\u3001\u76F4\u8425\u5E97\u548C\u52A0\u76DF\u5E97",\u5E97\u8217\u6570:"\u95E8\u5E97\u6570",\u76F4\u55B6:"\u76F4\u8425",\u52A0\u76DF:"\u52A0\u76DF","\u6709\u52B9 ":"\u542F\u7528 ",\u4EF6:"\u9879",\u8ECA\u4E21\u53F0\u6570:"\u8F66\u8F86\u6570",\u53F0:"\u8F86","\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u6700\u8FD1\u7684\u9884\u7EA6\u4E0E\u63A5\u5F85",\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u5168\u90E8",\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u9884\u7EA6",\u8ECA\u4E21\u72B6\u6CC1:"\u8F66\u8F86\u72B6\u6001",\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08:"\u5B9E\u65F6\u7EDF\u8BA1",\u5E97\u8217\u4E00\u89A7:"\u95E8\u5E97\u5217\u8868",\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97\u4FE1\u606F",\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A:"\u67E5\u770B\u6240\u6709\u95E8\u5E97",\u691C\u7D22:"\u641C\u7D22",\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22:"\u6309\u95E8\u5E97\u540D\u79F0\u6216\u4EE3\u7801\u641C\u7D22",\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u95E8\u5E97","\u5E97\u8217\u540D / \u30B3\u30FC\u30C9":"\u95E8\u5E97\u540D\u79F0 / \u4EE3\u7801",\u5E97\u8217\u7A2E\u5225:"\u95E8\u5E97\u7C7B\u578B",\u72B6\u614B:"\u72B6\u6001",\u64CD\u4F5C:"\u64CD\u4F5C",\u5E97\u8217\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u95E8\u5E97","\u5E97\u8217\u540D\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3067\u691C\u7D22":"\u6309\u5E97\u94FA\u540D\u79F0\u6216\u8D26\u6237\u540D\u641C\u7D22",\u7DE8\u96C6:"\u7F16\u8F91",\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u95E8\u5E97\u4FE1\u606F",\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7:"\u67E5\u770B\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C:"\u64CD\u4F5C\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u573A\u770B\u677F\u8BBE\u7F6E","\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7":"\u67E5\u770B\u9884\u7EA6\u4E0E\u63A5\u5F85\u4FE1\u606F","\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D":"\u521B\u5EFA\u9884\u7EA6\u3001\u529E\u7406\u51FA\u79DF\u4E0E\u5F52\u8FD8",\u305D\u306E\u4ED6\u306E\u6A29\u9650:"\u5176\u4ED6\u6743\u9650",\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u6743\u9650\u8BF4\u660E",\u3059\u3079\u3066\u306E\u72B6\u614B:"\u6240\u6709\u72B6\u6001",\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F\u548C\u8FD0\u8425\u72B6\u6001","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22":"\u6309\u8F66\u724C\u53F7\u3001\u5236\u9020\u5546\u6216\u8F66\u578B\u641C\u7D22","\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8":"\u8F66\u8F86 / \u8F66\u724C\u53F7",\u56FA\u5B9AID:"\u56FA\u5B9A ID",\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u8F66\u8F86",\u8ECA\u4E21\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8F66\u8F86",ERP\u8ECA\u4E21\u3092\u30DC\u30FC\u30C9\u3078\u53CD\u6620:"\u5C06 ERP \u8F66\u8F86\u540C\u6B65\u5230\u770B\u677F","\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58":"\u4FDD\u5B58\u4F4D\u7F6E\u548C\u72B6\u6001",\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8:"\u505C\u8F66\u533A\u57DF\u5E03\u5C40",\u672A\u914D\u7F6E:"\u672A\u5206\u914D","\u4F4D\u7F6E X":"\u4F4D\u7F6E X","\u4F4D\u7F6E Y":"\u4F4D\u7F6E Y",\u99D0\u8ECA\u533A\u753B:"\u505C\u8F66\u533A\u57DF",\u696D\u52D9\u72B6\u614B:"\u4E1A\u52A1\u72B6\u6001",\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3:"\u8F66\u8F86\u9009\u9879",\u6D17\u8ECA\u5F85\u3061:"\u5F85\u6D17\u8F66",\u7D66\u6CB9\u5F85\u3061:"\u5F85\u52A0\u6CB9",\u4FEE\u7406\u5F85\u3061:"\u5F85\u7EF4\u4FEE",\u672A\u8A55\u4FA1:"\u672A\u8BC4\u4F30",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC:"\u635F\u4F24\u6807\u8BB0","3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6":"3D \u8F66\u8F86\u68C0\u67E5 / \u7F16\u8F91\u635F\u4F24",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC:"\u635F\u4F24\u6807\u8BB0\u9884\u89C8","3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6":"\u5728 3D \u68C0\u67E5\u4E2D\u7F16\u8F91\u635F\u4F24\u4F4D\u7F6E",\u30E1\u30E2:"\u5907\u6CE8",\u72B6\u614B\u306A\u3057:"\u65E0\u72B6\u6001",\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","\u8A73\u7D30\u30FB\u72B6\u614B":"\u8BE6\u60C5\u4E0E\u72B6\u6001",\u904B\u7528\u4E2D:"\u8FD0\u8425\u4E2D",\u505C\u6B62\u4E2D:"\u5DF2\u505C\u7528",\u4E0A\u3078:"\u4E0A\u79FB",\u4E0B\u3078:"\u4E0B\u79FB",\u30EC\u30A4\u30A2\u30A6\u30C8:"\u5E03\u5C40",\u7DDA\u63CF\u753B\u3092\u7D42\u4E86:"\u7ED3\u675F\u7ED8\u7EBF",\u7DDA\u3092\u63CF\u304F:"\u7ED8\u5236\u7EBF\u6761",\u505C\u6B62:"\u505C\u7528",\u518D\u958B:"\u91CD\u65B0\u542F\u7528",\u524A\u9664:"\u5220\u9664",\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3:"\u505C\u8F66\u533A\u57DF\u7EBF\u6761",\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0:"\u5C06\u8F66\u8F86\u62D6\u52A8\u5230\u6B64\u5904",\u7DDA\u306E\u8272:"\u7EBF\u6761\u989C\u8272",\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u6700\u540E\u4E00\u6761\u7EBF","\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u5728\u56FE\u4E2D\u62D6\u52A8\u4EE5\u7ED8\u5236\u533A\u57DF\u7EBF\u6761\uFF0C\u677E\u5F00\u9F20\u6807\u540E\u81EA\u52A8\u4FDD\u5B58\u3002","\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u62D6\u52A8\u8F66\u8F86\u7684 \u283F \u6807\u8BB0\u53EF\u8C03\u6574\u4F4D\u7F6E\uFF0C\u4FEE\u6539\u4F1A\u81EA\u52A8\u4FDD\u5B58\u3002","\u79FB\u52D5\u30FB\u4F5C\u696D\u4E88\u5B9A":"\u79FB\u52A8\u8F66\u8F86 / \u4F5C\u4E1A\u8BA1\u5212",\u4E88\u5B9A:"\u8BA1\u5212",\u5B8C\u4E86:"\u5B8C\u6210",\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u65F6\u95F4",\u4E88\u5B9A\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8BA1\u5212",\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8BA1\u5212",\u99D0\u8ECA\u30A8\u30EA\u30A2\u540D:"\u505C\u8F66\u533A\u57DF\u540D\u79F0","Google Maps \u6848\u5185URL":"Google Maps \u5BFC\u822A URL",\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u533A\u57DF",\u8ECA\u4E21\u30AF\u30E9\u30B9:"\u8F66\u8F86\u7C7B\u522B",\u30AF\u30E9\u30B9\u540D:"\u7C7B\u522B\u540D\u79F0",\u8FFD\u52A0:"\u6DFB\u52A0",\u72B6\u614B\u540D:"\u72B6\u6001\u540D\u79F0",\u30AA\u30D7\u30B7\u30E7\u30F3\u540D:"\u9009\u9879\u540D\u79F0","\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u5E97\u8217 / \u62E0\u70B9":"\u52A0\u76DF\u95E8\u5E97 / \u7F51\u70B9","\u65E7Parking\u306E\u5E97\u8217\u306F\u73FE\u5728\u306EERP\u62E0\u70B9\u306B\u5C5E\u3059\u308B\u5E97\u8217\u30C7\u30FC\u30BF\u3078\u79FB\u884C\u3057\u307E\u3059\u3002\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u62E0\u70B9\u3068\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306FERP\u306E\u300C\u5E97\u8217\u7BA1\u7406\u300D\u304B\u3089\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E7\u505C\u8F66\u7CFB\u7EDF\u7684\u95E8\u5E97\u6570\u636E\u5C06\u8FC1\u79FB\u5230\u5F53\u524D ERP \u7F51\u70B9\u3002\u8BF7\u5728 ERP \u7684\u201C\u95E8\u5E97\u7BA1\u7406\u201D\u4E2D\u7BA1\u7406\u52A0\u76DF\u7F51\u70B9\u53CA\u8D26\u6237\u3002",\u5E97\u8217\u540D:"\u95E8\u5E97\u540D\u79F0",\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97",\u62E0\u70B9\u9593\u8DDD\u96E2:"\u505C\u8F66\u533A\u57DF\u95F4\u8DDD\u79BB","\u5206\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u65E2\u5B58\u306E\u8DDD\u96E2\u3092\u524A\u9664\u3057\u307E\u3059\u3002":"\u5206\u949F\u7559\u7A7A\u5C06\u5220\u9664\u5DF2\u6709\u8DDD\u79BB\u8BBE\u7F6E\u3002",\u5206:"\u5206\u949F",\u4FDD\u5B58:"\u4FDD\u5B58",\u5E97\u8217\u304B\u3089\u99D0\u8ECA\u5834\u307E\u3067:"\u95E8\u5E97\u81F3\u505C\u8F66\u573A","\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u306E\u6240\u8981\u6642\u9593\u30FB\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002":"\u8BBE\u7F6E\u95E8\u5E97\u4E0E\u505C\u8F66\u573A\u4E4B\u95F4\u7684\u65F6\u95F4\u548C\u8DDD\u79BB\u3002",\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8DDD\u79BB\u8BBE\u7F6E",\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u5148\u6DFB\u52A0\u95E8\u5E97\u548C\u505C\u8F66\u573A",\u67FB\u5B9A\u9805\u76EE:"\u8BC4\u4F30\u9879\u76EE",\u5358\u4F4D:"\u5355\u4F4D",\u6A19\u6E96:"\u9ED8\u8BA4",\u67FB\u5B9A\u9805\u76EE\u540D:"\u8BC4\u4F30\u9879\u76EE\u540D\u79F0",\u640D\u50B7\u540D:"\u635F\u4F24\u540D\u79F0",\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u4F4D\u7F6E\u4FEE\u6539","\u8ECA\u4E21\u306E\u914D\u7F6E\u30FB\u696D\u52D9\u72B6\u614B\u3092\u7BA1\u7406":"\u7BA1\u7406\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002":"\u5F53\u524D\u4E3A\u53EA\u8BFB\u6A21\u5F0F\u3002\u9700\u8981\u505C\u8F66\u573A\u5199\u5165\u6743\u9650\u624D\u80FD\u8C03\u6574\u4F4D\u7F6E\u3002","\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22":"\u6309\u9884\u7EA6\u7F16\u53F7\u3001\u5BA2\u6237\u6216\u8F66\u724C\u53F7\u641C\u7D22","\u4E88\u7D04\u3092\u767B\u9332\u3057\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059":"\u767B\u8BB0\u9884\u7EA6\u5E76\u529E\u7406\u51FA\u79DF\u3001\u5F52\u8FD8\u624B\u7EED","\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217":"\u9884\u7EA6\u7F16\u53F7 / \u95E8\u5E97",\u304A\u5BA2\u69D8\u60C5\u5831:"\u5BA2\u6237\u4FE1\u606F",\u5229\u7528\u671F\u9593:"\u4F7F\u7528\u671F\u95F4",\u53D7\u4ED8\u64CD\u4F5C:"\u63A5\u5F85\u64CD\u4F5C",\u3059\u3079\u3066\u306E\u4E88\u7D04:"\u6240\u6709\u9884\u7EA6","\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044":"\u6682\u65E0\u9884\u7EA6\u3002\u5BA2\u6237\u5230\u5E97\u65F6\u8BF7\u767B\u8BB0\u63A5\u5F85\u4FE1\u606F\u3002",\u4E88\u7D04\u3092\u4F5C\u6210:"\u521B\u5EFA\u9884\u7EA6",\u4E88\u7D04\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u9884\u7EA6",\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u5BA2\u6237\u548C\u4F7F\u7528\u671F\u9650",\u304A\u5BA2\u69D8\u7BA1\u7406:"\u5BA2\u6237\u7BA1\u7406",\u304A\u5BA2\u69D8\u306E\u57FA\u672C\u60C5\u5831\u3068\u9023\u7D61\u5148\u3092\u7BA1\u7406:"\u7BA1\u7406\u5BA2\u6237\u57FA\u672C\u4FE1\u606F\u548C\u8054\u7CFB\u65B9\u5F0F",\u304A\u5BA2\u69D8\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u5BA2\u6237",\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u5BA2\u6237\u4FE1\u606F",\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u672C\u95E8\u5E97\u5BA2\u6237\u4FE1\u606F","\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u66F4\u65B0":"\u521B\u5EFA\u548C\u66F4\u65B0\u672C\u95E8\u5E97\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u540D:"\u5BA2\u6237\u59D3\u540D",\u6C0F\u540D:"\u59D3\u540D",\u30D5\u30EA\u30AC\u30CA:"\u5047\u540D","\u6C0F\u540D\u30FB\u30D5\u30EA\u30AC\u30CA\u3067\u691C\u7D22":"\u6309\u59D3\u540D\u6216\u5047\u540D\u641C\u7D22",\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22:"\u6309\u7535\u8BDD\u53F7\u7801\u641C\u7D22","\u304A\u52E4\u3081\u5148\u30FB\u5B66\u6821":"\u5DE5\u4F5C\u5355\u4F4D / \u5B66\u6821","\u52E4\u52D9\u5148\u30FB\u5B66\u6821":"\u5DE5\u4F5C\u5355\u4F4D / \u5B66\u6821",\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:"\u7535\u5B50\u90AE\u7BB1",\u751F\u5E74\u6708\u65E5:"\u51FA\u751F\u65E5\u671F","\u7DCA\u6025\u9023\u7D61\u5148\uFF08\u4EFB\u610F\uFF09":"\u7D27\u6025\u8054\u7CFB\u4EBA\uFF08\u9009\u586B\uFF09",\u7D9A\u67C4:"\u5173\u7CFB",\u4EFB\u610F:"\u9009\u586B","\u4E88\u7D04\u4F5C\u6210\u6642\u306B\u6C0F\u540D\u3084\u96FB\u8A71\u756A\u53F7\u304B\u3089\u691C\u7D22\u3067\u304D\u307E\u3059\u3002\u4F4F\u6240\u306A\u3069\u306F\u4EFB\u610F\u3067\u3059\u3002":"\u521B\u5EFA\u9884\u7EA6\u65F6\u53EF\u6309\u59D3\u540D\u6216\u7535\u8BDD\u53F7\u7801\u641C\u7D22\u3002\u5730\u5740\u7B49\u4FE1\u606F\u4E3A\u9009\u586B\u3002","\u6C0F\u540D\u3001\u30D5\u30EA\u30AC\u30CA\u3001\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22":"\u6309\u59D3\u540D\u3001\u5047\u540D\u6216\u7535\u8BDD\u53F7\u7801\u641C\u7D22",\u767B\u9332\u6E08\u307F\u306E\u304A\u5BA2\u69D8:"\u5DF2\u767B\u8BB0\u5BA2\u6237","\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026":"\u6B63\u5728\u641C\u7D22\u5BA2\u6237\u4FE1\u606F\u2026","\u8A72\u5F53\u3059\u308B\u304A\u5BA2\u69D8\u306F\u3044\u307E\u305B\u3093\u3002\u4E88\u7D04\u4FDD\u5B58\u6642\u306B\u6C0F\u540D\u3068\u96FB\u8A71\u756A\u53F7\u3067\u65B0\u898F\u767B\u9332\u3057\u307E\u3059\u3002":"\u6CA1\u6709\u627E\u5230\u5339\u914D\u5BA2\u6237\u3002\u4FDD\u5B58\u9884\u7EA6\u65F6\u5C06\u4F7F\u7528\u59D3\u540D\u548C\u7535\u8BDD\u53F7\u7801\u65B0\u5EFA\u5BA2\u6237\u3002",\u9078\u629E\u89E3\u9664:"\u53D6\u6D88\u9009\u62E9",\u5E0C\u671B\u30AF\u30E9\u30B9:"\u671F\u671B\u7C7B\u522B","\u8ECA\u4E21\u306E\u5E0C\u671B\u6761\u4EF6\uFF08\u4EFB\u610F\uFF09":"\u8F66\u8F86\u6761\u4EF6\uFF08\u9009\u586B\uFF09",\u9078\u629E\u3067\u304D\u308B\u6761\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u53EF\u9009\u6761\u4EF6",\u7A7A\u304D\u8ECA\u4E21:"\u53EF\u7528\u8F66\u8F86","\u5229\u7528\u65E5\u6642\u3001\u5E0C\u671B\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3059\u308B\u3068\u7A7A\u304D\u8ECA\u4E21\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002":"\u9009\u62E9\u4F7F\u7528\u65F6\u95F4\u548C\u671F\u671B\u7C7B\u522B\u540E\uFF0C\u5C06\u663E\u793A\u53EF\u7528\u8F66\u8F86\u3002","\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026":"\u6B63\u5728\u641C\u7D22\u7B26\u5408\u6761\u4EF6\u7684\u53EF\u7528\u8F66\u8F86\u2026","\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u53EF\u7528\u8F66\u8F86\u3002",\u304A\u5BA2\u69D8\u306E\u6C0F\u540D:"\u5BA2\u6237\u59D3\u540D",\u96FB\u8A71\u756A\u53F7:"\u7535\u8BDD\u53F7\u7801",\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u51FA\u79DF\u65F6\u95F4",\u53D7\u4ED8\u5E97\u8217:"\u63A5\u5F85\u95E8\u5E97",\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u95E8\u5E97",\u8ECA\u4E21\u306E\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u53EF\u51FA\u79DF\u7684\u8F66\u8F86","\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u6B63\u786E\u586B\u5199\u51FA\u79DF\u548C\u5F52\u8FD8\u65F6\u95F4\u3002","\u8CB8\u51FA\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u51FA\u79DF\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u8FD4\u5374\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u5F52\u8FD8\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002":"\u9884\u7EA6\u5DF2\u53D6\u6D88\u3002",\u4E88\u7D04\u756A\u53F7:"\u9884\u7EA6\u7F16\u53F7",\u304A\u5BA2\u69D8:"\u5BA2\u6237",\u8ECA\u4E21:"\u8F66\u8F86","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u8F66\u8F86\u2026","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u8F66\u8F86\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97\u3002",\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u5F52\u8FD8\u65F6\u95F4","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u53D6\u6D88\u6B64\u9884\u7EA6\u5417\uFF1F","\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BA1\u5212\u5417\uFF1F","\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u505C\u8F66\u533A\u57DF\u5417\uFF1F","\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BBE\u7F6E\u9879\u5417\uFF1F","\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u66F4\u65B0\u3002","\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u5220\u9664\u3002","\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u4FDD\u5B58\u3002",\u8A2D\u5B9A\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u8BBE\u7F6E",\u8A2D\u5B9A\u9805\u76EE:"\u8BBE\u7F6E\u9879",\u30A2\u30AB\u30A6\u30F3\u30C8\u540D:"\u8D26\u6237\u540D","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57":"3\u201364 \u4E2A\u534A\u89D2\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u7B26\u53F7",\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u59D3\u540D",\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9:"\u521D\u59CB\u5BC6\u7801","12 \u6587\u5B57\u4EE5\u4E0A":"\u81F3\u5C11 12 \u4E2A\u5B57\u7B26",\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B:"\u8D26\u6237\u72B6\u6001","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u8A2D\u5B9A\uFF08\u4EFB\u610F\uFF09":"\u91CD\u7F6E\u5BC6\u7801\uFF08\u53EF\u9009\uFF09",\u7A7A\u6B04\u306E\u5834\u5408\u306F\u5909\u66F4\u3057\u307E\u305B\u3093:"\u7559\u7A7A\u5219\u4E0D\u66F4\u6539","\u8ECA\u53F0\u756A\u53F7\uFF08\u4EFB\u610F\uFF09":"\u8F66\u67B6\u53F7\uFF08\u53EF\u9009\uFF09",\u8ECA\u53F0\u756A\u53F7:"\u8F66\u67B6\u53F7",\u30E1\u30FC\u30AB\u30FC:"\u5236\u9020\u5546",\u8ECA\u7A2E:"\u8F66\u578B","\u4F8B\uFF1AToyota":"\u4F8B\u5982\uFF1AToyota","\u4F8B\uFF1APrius":"\u4F8B\u5982\uFF1APrius","\u5E74\u5F0F\uFF08\u4EFB\u610F\uFF09":"\u5E74\u4EFD\uFF08\u53EF\u9009\uFF09",\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8:"\u8F66\u724C\u53F7",\u30D7\u30EC\u30FC\u30C8\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u8F66\u724C\u53F7",\u8ECA\u4E21\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6:"\u7F16\u8F91\u8F66\u8F86\u4FE1\u606F",\u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093:"\u56FA\u5B9A\u8F66\u8F86 ID \u4E0D\u53EF\u66F4\u6539",\u8ECA\u4E21\u306E\u72B6\u614B:"\u8F66\u8F86\u72B6\u6001",\u8ECA\u4E21\u3092\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88\u9884\u7EA6","\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\uFF08\u65B0\u898F ":"\u505C\u8F66\u573A\u770B\u677F\u5DF2\u66F4\u65B0\uFF08\u65B0\u589E "," \u53F0\u3001\u66F4\u65B0 ":" \u8F86\uFF0C\u66F4\u65B0 ","\uFF09\u3002":"\uFF09\u3002",\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A:"\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u4EE5\u9017\u53F7\u5206\u9694","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09":"\u4F18\u5148\u8F66\u8F86\u7C7B\u522B\uFF08\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF09","\u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A":"\u8BBE\u7F6E\u56FE\u7EB8\u5C3A\u5BF8\u3001\u5BB9\u91CF\u548C\u4F18\u5148\u7C7B\u522B","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09":"\u56FE\u7EB8\u9AD8\u5EA6\uFF08px\uFF09","\u56F3\u9762\u306E\u5E45\uFF08%\uFF09":"\u56FE\u7EB8\u5BBD\u5EA6\uFF08%\uFF09","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09":"\u5BB9\u91CF\uFF08\u4E0D\u9650\u65F6\u7559\u7A7A\uFF09",\u7A3C\u50CD\u72B6\u614B:"\u8FD0\u8425\u72B6\u6001",\u30A8\u30EA\u30A2\u540D:"\u533A\u57DF\u540D\u79F0","3D\u8ECA\u4E21\u691C\u67FB":"3D \u8F66\u8F86\u68C0\u67E5","\u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002":"\u62D6\u52A8\u53EF\u65CB\u8F6C 360\xB0\u3002\u9009\u62E9\u7C7B\u578B\u540E\u70B9\u51FB\u8F66\u8EAB\u5373\u53EF\u8BB0\u5F55\uFF0C\u70B9\u51FB\u6807\u8BB0\u53EF\u5220\u9664\u3002",\u9589\u3058\u308B:"\u5173\u95ED",\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093:"\u62B1\u6B49","\uFF5E":"\u2013",\u524D\u3078:"\u4E0A\u4E00\u9875",\u6B21\u3078:"\u4E0B\u4E00\u9875",\u4EF6\u3092\u8868\u793A:"\u9879",\u4E0D\u660E:"\u672A\u77E5",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97","\u4F8B\uFF1ATKY-001":"\u4F8B\u5982\uFF1ATKY-001",\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u95E8\u5E97\u540D\u79F0",\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801",\u5E74\u5F0F:"\u5E74\u4EFD",\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F:"\u6253\u5F00\u83DC\u5355","\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u79BB\u7EBF\u5E94\u7528\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002","\u76F4\u55B6 ":"\u76F4\u8425 ","\u52A0\u76DF ":"\u52A0\u76DF ","\u5E97 \xB7 ":"\u5BB6 \xB7 ","\u8CB8\u51FA\u53EF\u80FD ":"\u53EF\u51FA\u79DF ","\u6574\u5099\u4E2D ":"\u7EF4\u4FEE\u4E2D ",\u6A29\u9650:"\u6743\u9650",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97:"\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97",\u8ECA\u4E21\u3092\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u6240\u6709\u8F66\u8F86",\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u8F66\u8F86\u4EE5\u79FB\u52A8",\u65E5\u672C\u8A9E:"\u65E5\u8BED",\u4E2D\u6587:"\u4E2D\u6587",\u8A00\u8A9E\u5207\u66FF:"\u8BED\u8A00\u5207\u6362",\u30B9\u30AD\u30C3\u30D7:"\u8DF3\u8FC7",\u672A\u5272\u308A\u5F53\u3066:"\u672A\u5206\u914D",\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97",\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650:"\u505C\u8F66\u573A\u5199\u5165\u6743\u9650",\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9",\u9001\u308A\u5148:"\u76EE\u7684\u5730","\u69D8\u3078\u306E\u8CB8\u51FA\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059\u304B\uFF1F":"\u8981\u4E3A\u8BE5\u5BA2\u6237\u529E\u7406\u51FA\u79DF\u624B\u7EED\u5417\uFF1F","\u69D8\u306E\u8FD4\u5374\u3092\u78BA\u8A8D\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u786E\u8BA4\u8BE5\u5BA2\u6237\u5DF2\u5F52\u8FD8\u8F66\u8F86\u5417\uFF1F","\u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u53D6\u6D88\u8BE5\u5BA2\u6237\u7684\u9884\u7EA6\u5417\uFF1F","\u8ECA\u4E21 ":"\u8F66\u8F86 "," \u306F\u8CB8\u51FA\u4E2D\u306B\u306A\u308A\u307E\u3059\u3002":" \u5C06\u53D8\u4E3A\u51FA\u79DF\u4E2D\u3002","\u8ECA\u4E21\u306F\u8CB8\u51FA\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002":"\u8F66\u8F86\u5C06\u53D8\u4E3A\u53EF\u51FA\u79DF\u72B6\u6001\u3002","\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F","\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F","\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0":"\u66F4\u65B0\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406":"\u7BA1\u7406\u505C\u8F66\u573A\u3001\u7C7B\u522B\u548C\u72B6\u6001\u7B49\u8BBE\u7F6E",\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7:"\u67E5\u770B\u9884\u7EA6\u4FE1\u606F\u548C\u63A5\u5F85\u72B6\u6001",\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u5E03\u5C40",\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332":"\u65CB\u8F6C 3D \u8F66\u8F86\u5E76\u70B9\u51FB\u635F\u4F24\u90E8\u4F4D\u8FDB\u884C\u8BB0\u5F55","\u30D0\u30FC\u30B8\u30E7\u30F3 ":"\u7248\u672C "},xv=new Map(Object.entries(Vd).map(([i,e])=>[e,i])),bv=Object.entries(Vd).sort(([i],[e])=>e.length-i.length),Mv=[...xv.entries()].sort(([i],[e])=>e.length-i.length);function Rs(i,e){return(e==="zh"?bv:Mv).reduce((n,[s,r])=>n.replaceAll(s,r),i)}var Gd=new Set(["dashboard","reservations","sites","vehicles","parking"]);function $d(i,e){let t=String(i||"").replace(/^#\/?/,"").split(/[?&]/,1)[0];return Gd.has(t)&&e.includes(t)?t:"dashboard"}function di(i){return`#${Gd.has(i)?i:"dashboard"}`}var hi="guts_erp_token",Nr="guts_erp_original_admin_token",Ho="guts_erp_original_admin_page";function Wd(i,e,t,n){i.setItem(Nr,e),i.setItem(Ho,t),i.setItem(hi,n)}function Vo(i){let e=i.getItem(Nr);if(!e)return null;let t=i.getItem(Ho);return i.setItem(hi,e),i.removeItem(Nr),i.removeItem(Ho),{token:e,page:t}}function Oi(i){i.removeItem(hi),i.removeItem(Nr),i.removeItem(Ho)}function Go(i){return!!i.getItem(Nr)}var Yo=[],Sv={parking_lots:[],vehicle_classes:[],vehicle_options:["ETC","\u8ECA\u8F09\u5668","\u7981\u7159","\u55AB\u7159","\u30CA\u30D3","\u30B9\u30BF\u30C3\u30C9\u30EC\u30B9"].map((i,e)=>({id:-e-1,name:i})),statuses:[{id:-1,name:"\u6D17\u8ECA\u5F85\u3061",icon:"\u{1FAE7}",key:"unwashed"},{id:-2,name:"\u7D66\u6CB9\u5F85\u3061",icon:"\u26FD",key:"no_fuel"},{id:-3,name:"\u8981\u4FEE\u7406",icon:"\u{1F527}",key:"needs_repair"}],assessment_fields:[{id:-1,built_in_key:"exterior",group_key:"body",name:"\u5916\u88C5\uFF08\u30DC\u30C7\u30A3\u30FB\u5857\u88C5\u30FB\u9211\u91D1\uFF09",field_type:"rating",suffix:""},{id:-2,built_in_key:"interior",group_key:"body",name:"\u5185\u88C5\uFF08\u30B7\u30FC\u30C8\u30FB\u5929\u4E95\u30FB\u30D5\u30ED\u30A2\uFF09",field_type:"rating",suffix:""},{id:-3,built_in_key:"wheels",group_key:"body",name:"\u30DB\u30A4\u30FC\u30EB",field_type:"rating",suffix:""},{id:-4,built_in_key:"registration_document",group_key:"electrical",name:"\u8ECA\u691C\u8A3C",field_type:"checkbox",suffix:"\u78BA\u8A8D\u6E08\u307F"},{id:-5,built_in_key:"radio",group_key:"electrical",name:"\u30E9\u30B8\u30AA",field_type:"checkbox",suffix:""},{id:-6,built_in_key:"navigation",group_key:"electrical",name:"\u30CA\u30D3\uFF08\uFF15\u5E74\u4EE5\u5185\uFF09",field_type:"checkbox",suffix:""},{id:-7,built_in_key:"air_conditioning",group_key:"electrical",name:"\u30A8\u30A2\u30B3\u30F3",field_type:"checkbox",suffix:""},{id:-8,built_in_key:"side_mirror",group_key:"electrical",name:"\u30B5\u30A4\u30C9\u30DF\u30E9\u30FC\u8ABF\u6574",field_type:"checkbox",suffix:""},{id:-9,built_in_key:"mileage",group_key:"basic",name:"\u8D70\u884C\u8DDD\u96E2",field_type:"number",suffix:"km"},{id:-10,built_in_key:"registration_year",group_key:"basic",name:"\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u5E74\uFF09",field_type:"number",suffix:"\u5E74"},{id:-11,built_in_key:"registration_month",group_key:"basic",name:"\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u6708\uFF09",field_type:"number",suffix:"\u6708"}],damage_types:[{id:-1,built_in_key:"scratch",name:"\u50B7",icon:"\u3030\uFE0F",color:"#e34b4b"},{id:-2,built_in_key:"dent",name:"\u51F9\u307F",icon:"\u25C9",color:"#805ad5"}]},ze=(i,e=document)=>e.querySelector(i),Gt=ze("#app"),eh=document.querySelector('meta[name="app-version"]')?.content??"\u4E0D\u660E",Pc=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),wv=i=>{if(Array.isArray(i))return i.map(String);if(typeof i!="string")return[];try{let e=JSON.parse(i);return Array.isArray(e)?e.map(String):[]}catch{return[]}},Xd={dashboard:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',site:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M8 9v.01M8 12v.01M8 15v.01M8 18v.01M15 12v.01M15 15v.01M15 18v.01"/>',parking:'<path d="M5 21V3h8a6 6 0 0 1 0 12H5"/><path d="M9 7h4a2 2 0 0 1 0 4H9z"/>',people:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',vehicle:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3zM5 19v2m14-2v2"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',plus:'<path d="M12 5v14M5 12h14"/>',logout:'<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',sites:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>',team:'<circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6"/>',fleet:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3z"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>'},Et=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Xd[i]??Xd.dashboard}</svg>`,Ev={dashboard:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",reservations:"\u4E88\u7D04\u30FB\u53D7\u4ED8",sites:"\u5E97\u8217\u7BA1\u7406",vehicles:"\u8ECA\u4E21\u7BA1\u7406",customers:"\u304A\u5BA2\u69D8\u7BA1\u7406",parking:"\u99D0\u8ECA\u5834\u7BA1\u7406"},Tv={active:"\u6709\u52B9",disabled:"\u7121\u52B9",inactive:"\u7121\u52B9",available:"\u8CB8\u51FA\u53EF\u80FD",rented:"\u8CB8\u51FA\u4E2D",maintenance:"\u6574\u5099\u4E2D",retired:"\u767B\u9332\u62B9\u6D88",headquarters:"\u672C\u90E8",direct:"\u76F4\u55B6\u5E97",franchise:"\u52A0\u76DF\u5E97",reserved:"\u4E88\u7D04\u6E08\u307F",checked_in:"\u8CB8\u51FA\u4E2D",completed:"\u8FD4\u5374\u6E08\u307F",cancelled:"\u30AD\u30E3\u30F3\u30BB\u30EB"},Av={active:"green",available:"green",completed:"gray",rented:"blue",checked_in:"blue",maintenance:"orange",reserved:"orange",disabled:"red",cancelled:"gray",retired:"gray"},Bi=i=>Tv[i]??i,Xn=i=>`<span class="badge badge-${Av[i]??(i==="headquarters"?"blue":"gray")}">${Pc(Bi(i))}</span>`,A=i=>Pc(i).replace(/[^\u0000-\u007F]/gu,e=>`&#${e.codePointAt(0)};`),Tc=i=>{let e=new Date(i),t=en()==="zh"?"zh-CN":"ja-JP";return Number.isNaN(e.getTime())?Pc(i):new Intl.DateTimeFormat(t,{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(e)},st=i=>({invalid_credentials:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002",forbidden:"\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002",resource_conflict:"\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",in_use:"\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",last_lot:"\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",reservation_conflict:"\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",password_mismatch:"\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u306A\u3044\u304B\u3001\u5FC5\u8981\u306A\u6587\u5B57\u6570\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093\u3002",invalid_reference:"\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u8ECA\u4E21\u3001\u30B9\u30BF\u30C3\u30D5\u3001\u307E\u305F\u306F\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_request:"\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",internal_error:"\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",site_mapping_conflict:"ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",unauthorized:"\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",account_unavailable:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",employee_required:"\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_employee:"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",parking_catalog_name_required:"\u8FFD\u52A0\u3059\u308B\u9805\u76EE\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",account_not_found:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",vehicle_not_found:"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",reservation_not_found:"\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",invalid_site:"\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_role:"\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_account:"\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",unknown_permission:"\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",site_required:"\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_reservation:"\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",not_found:"\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002"})[i]??"\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",pt=localStorage.getItem(hi)||"",Pe=null,qn="ja",Ns="guts_erp_current_page",Fs=["dashboard","reservations","sites","vehicles","customers","parking"];function Lc(){let i=location.hash.slice(1);return Fs.includes(i)?$d(location.hash,Fs):null}var dt=Lc()??"dashboard",Vi="",Pn="",dn=0,pi="",kr="",fi="all",zi="all",Ac="",Lt=[],Wo=[],Gi="",Yn=!1,Dc=[],th="",Xo=[],nh=[],Cc=[],qd=0,Cv=0,Rv=0,Gr=null,Hi=[],Uc=[],Or=!1,Yd=0,Ls=null,Rc=0,un=new Map,wt=null,Br=[],St=null,hn=null,bn=[],Nc=null,Us=null,$r="#e34b4b",tn=null,qo=null,Pt=null;function en(){return Pe?.isAdmin?qn:"ja"}function bt(i,e){i.innerHTML=Rs(e,en())}async function Iv(i){Pe?.isAdmin&&(qn=i,localStorage.setItem("guts_erp_language",qn),document.documentElement.lang=qn==="zh"?"zh-CN":"ja",Ko(),await In())}async function Me(i,e={}){let t=new Headers(e.headers);t.set("Accept","application/json"),pt&&t.set("Authorization",`Bearer ${pt}`),e.body&&t.set("Content-Type","application/json");let n=await fetch(i,{...e,headers:t,credentials:"same-origin"});if(n.status===401&&pt){let r=i.split("?")[0];if(!["/api/v1/auth/login","/api/v1/auth/logout","/api/v1/auth/end-site","/api/v1/auth/refresh"].includes(r)){let a=Go(localStorage)?"site":"default",o=await Wr(a);if(o)t.set("Authorization",`Bearer ${o}`),n=await fetch(i,{...e,headers:t,credentials:"same-origin"});else if(a==="site"){if(!(await fetch("/api/v1/auth/end-site",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error");let c=Vo(localStorage);if(c&&(pt=c.token,localStorage.setItem(hi,pt),Fs.includes(c.page)&&history.replaceState(null,"",di(c.page)),await Wr("default")))throw window.location.reload(),new Error("unauthorized")}}}if(n.status===401&&pt)throw pt="",Pe=null,Oi(localStorage),ks(),new Error("unauthorized");let s=await n.json().catch(()=>({}));if(!n.ok)throw new Error(s.message||s.error||`HTTP ${n.status}`);return s}async function Wr(i){let e=await fetch("/api/v1/auth/refresh",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({context:i})});if(e.status===401)return null;let t=await e.json().catch(()=>({}));if(!e.ok||typeof t.accessToken!="string")throw new Error(t.error||"internal_error");return pt=t.accessToken,localStorage.setItem(hi,pt),pt}function Ic(i){fetch("/api/v1/client-errors",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(e=>console.warn("Unable to send ERP client error report.",e))}function Xe(i,e=!1){let t=ze(".toast-area");t||(t=document.createElement("div"),t.className="toast-area",document.body.append(t));let n=document.createElement("div");n.className=`toast${e?" error":""}`,n.textContent=Rs(i,en()),t.append(n),window.setTimeout(()=>n.remove(),3600)}function Is(i){return window.confirm(Rs(i,en()))}window.addEventListener("error",i=>{let e=i.target;if(e instanceof Element&&["AUDIO","EMBED","IFRAME","IMG","LINK","OBJECT","SCRIPT","SOURCE","TRACK","VIDEO"].includes(e.tagName)){let t=e.getAttribute("src")||e.getAttribute("href")||e.getAttribute("data")||void 0;(e instanceof HTMLImageElement||e instanceof HTMLMediaElement)&&(t=e.currentSrc||t),Ic({type:"resource",message:`Failed to load ${e.tagName.toLowerCase()} resource.`,...t?{source:t}:{},path:window.location.pathname});return}Ic({type:"error",message:i.message||"Uncaught browser error.",...i.error instanceof Error&&i.error.stack?{stack:i.error.stack}:{},...i.filename?{source:i.filename}:{},path:window.location.pathname,...i.lineno?{line:i.lineno}:{},...i.colno?{column:i.colno}:{}})},!0);window.addEventListener("unhandledrejection",i=>{let e=i.reason;Ic({type:"unhandledrejection",message:e instanceof Error?e.message:String(e),...e instanceof Error&&e.stack?{stack:e.stack}:{},path:window.location.pathname})});function Ke(i){return!!Pe?.permissions.includes(i)}function Jo(){return[{page:"dashboard",title:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",icon:"dashboard"},{page:"reservations",title:"\u4E88\u7D04\u30FB\u53D7\u4ED8",icon:"calendar",permission:"reservations:read"},{page:"sites",title:"\u5E97\u8217\u7BA1\u7406",icon:"site",permission:"sites:read"},{page:"vehicles",title:"\u8ECA\u4E21\u7BA1\u7406",icon:"vehicle",permission:"vehicles:read"},{page:"customers",title:"\u304A\u5BA2\u69D8\u7BA1\u7406",icon:"people",permission:"customers:read"},{page:"parking",title:"\u99D0\u8ECA\u5834\u7BA1\u7406",icon:"parking",permission:"parking:read"}].filter(e=>!e.permission||Ke(e.permission))}function ks(){document.documentElement.lang="ja",Gt.innerHTML=`<main class="login-screen login-simple">
    <form class="login-form" data-form="login">
      <input name="username" autocomplete="username" required placeholder="\u30A2\u30AB\u30A6\u30F3\u30C8" aria-label="\u30A2\u30AB\u30A6\u30F3\u30C8">
      <input name="password" type="password" autocomplete="current-password" required placeholder="\u30D1\u30B9\u30EF\u30FC\u30C9" aria-label="\u30D1\u30B9\u30EF\u30FC\u30C9">
      <button class="btn btn-primary" type="submit">\u30ED\u30B0\u30A4\u30F3</button>
    </form>
    <small class="app-version">\u30D0\u30FC\u30B8\u30E7\u30F3 ${A(eh)}</small>
  </main>`,Gt.onsubmit=async i=>{let e=i.target.closest('[data-form="login"]');if(!e)return;i.preventDefault();let t=ze('button[type="submit"]',e);t.disabled=!0,t.textContent="\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026";let n=new FormData(e);try{pt=(await Me("/api/v1/auth/login",{method:"POST",body:JSON.stringify({username:n.get("username"),password:n.get("password")})})).accessToken,Oi(localStorage),localStorage.setItem(hi,pt),await Zo()}catch(s){Xe(st(s.message),!0),t.disabled=!1,t.textContent="\u30ED\u30B0\u30A4\u30F3"}}}async function Zo(){Pe=await Me("/api/v1/auth/me");let i=Lc()??localStorage.getItem(Ns),e=Fs.includes(i)?i:"dashboard";dt=Jo().some(t=>t.page===e)?e:"dashboard",location.hash!==`#${dt}`&&history.replaceState(null,"",di(dt)),localStorage.setItem(Ns,dt),qn=Pe.isAdmin&&localStorage.getItem("guts_erp_language")==="zh"?"zh":"ja",document.documentElement.lang=en()==="zh"?"zh-CN":"ja",Ko(),await In(),ih()}async function ih(){if(!(!pt||!Ke("parking:read")||Ls))try{let{ticket:i}=await Me("/api/v1/parking/ws-ticket",{method:"POST"});if(!pt||!Ke("parking:read"))return;let e=location.protocol==="https:"?"wss:":"ws:",t=new WebSocket(`${e}//${location.host}/api/v1/parking/ws?ticket=${encodeURIComponent(i)}`);Ls=t,t.onmessage=n=>{try{JSON.parse(String(n.data)).type==="parking:updated"&&dt==="parking"&&Vt()}catch{Xe("\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002",!0)}},t.onclose=()=>{Ls===t&&(Ls=null),pt&&Ke("parking:read")&&(window.clearTimeout(Rc),Rc=window.setTimeout(()=>{ih()},1500))},t.onerror=()=>t.close()}catch(i){i.message!=="unauthorized"&&Xe("\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0)}}function Ko(){if(!Pe)return ks();let i=Jo(),e=Pe.displayName.trim().slice(0,1)||"G";bt(Gt,`<div class="shell">
    <aside class="sidebar${Or?" open":""}">
      <a class="brand" href="#" data-page="dashboard"><span class="brand-mark">G</span><span><strong>GUTS ERP</strong><small>\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406</small></span></a>
      <div class="nav-label">\u30E1\u30CB\u30E5\u30FC</div><nav class="nav">${i.map(t=>`<button class="nav-button${dt===t.page?" active":""}" data-page="${t.page}">${Et(t.icon)}<span>${t.title}</span></button>`).join("")}</nav>
      <div class="sidebar-bottom">
        <div class="site-chip"><small>\u6240\u5C5E\u5E97\u8217</small><strong>${A(Pe.site.name)} \xB7 ${A(Pe.site.code)}</strong></div>
        <div class="user-row"><span class="avatar">${A(e)}</span><span class="user-text"><strong>${A(Pe.displayName)}</strong><small>${A(Pe.username)}</small></span><button class="logout" title="\u30ED\u30B0\u30A2\u30A6\u30C8" data-action="logout">${Et("logout")}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar"><button class="mobile-menu" data-action="menu" aria-label="\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F">\u2630</button><div class="crumb">GUTS ERP&nbsp; / &nbsp;<b>${Ev[dt]}</b></div><div class="top-actions">${Go(localStorage)&&!Pe.isAdmin?'<button class="btn btn-sm btn-primary" data-action="return-admin">\u7BA1\u7406\u30D1\u30CD\u30EB\u306B\u623B\u308B</button>':""}${Pe.isAdmin?`<div class="language-switch" role="group" aria-label="\u8A00\u8A9E\u5207\u66FF"><button class="btn btn-sm${qn==="ja"?" active":""}" data-language="ja" aria-pressed="${qn==="ja"}">\u65E5\u672C\u8A9E</button><button class="btn btn-sm${qn==="zh"?" active":""}" data-language="zh" aria-pressed="${qn==="zh"}">\u4E2D\u6587</button></div>`:""}<span class="live"><i></i> \u6B63\u5E38\u7A3C\u50CD\u4E2D</span><button class="btn btn-sm btn-quiet" data-action="refresh">${Et("refresh")} \u66F4\u65B0</button><small class="app-version">v${A(eh)}</small></div></header>
      <section class="content" id="page-content"><div class="empty">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div></section>
    </main>
  </div>`),Gt.onclick=Zv,Gt.onsubmit=Jv,Gt.oninput=Kv,Gt.onchange=jv,Gt.onpointerdown=t=>{Hv(t),Wv(t),Vv(t)},Gt.onpointermove=t=>{$v(t),Xv(t),Gv(t)},Gt.onpointerup=t=>{Qd(t),qv(t),jd(t)},Gt.onpointercancel=t=>{Qd(t),Yv(t),jd(t,!0)}}async function In(){try{switch(dt){case"dashboard":await Pv();break;case"reservations":await oh();break;case"sites":await Ds();break;case"vehicles":await sh();break;case"customers":await rh();break;case"parking":await Vt();break}}catch(i){if(i.message!=="unauthorized"){let e=ze("#page-content");e&&bt(e,`<div class="empty"><strong>\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F</strong>${A(st(i.message))}<br><br><button class="btn" data-action="refresh">${Et("refresh")} \u518D\u8A66\u884C</button></div>`)}}}function $i(i){let e=ze("#page-content");e&&bt(e,i)}function Wi(i,e,t=""){return`<div class="page-head"><div><h1>${i}</h1><p>${e}</p></div><div class="head-actions">${t}</div></div>`}function $o(i,e,t,n,s=""){let r=en()==="zh"?"zh-CN":"ja-JP";return`<article class="stat-card"><div class="stat-top">${i}<span class="stat-icon ${s}">${Et(n)}</span></div><div class="stat-number">${e.toLocaleString(r)}</div><div class="stat-foot">${t}</div></article>`}async function Pv(){let i=new URLSearchParams({limit:"6"});Pe.site.type==="headquarters"&&i.set("siteId",Pe.site.id);let[e,t,n]=await Promise.all([Me("/api/v1/dashboard/stats"),Ke("sites:read")?Me("/api/v1/sites"):Promise.resolve({items:[]}),Ke("reservations:read")?Me(`/api/v1/reservations?${i}`):Promise.resolve({items:[]})]);Lt=t.items;let s=n.items.slice(0,5);$i(`${Wi("\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",`${A(Pe.site.name)} \xB7 \u5E97\u8217\u306E\u904B\u55B6\u72B6\u6CC1`,Pe.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${A(Pe.site.id)}">${Et("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"")}
    <div class="grid stat-grid">
      ${$o("\u5E97\u8217\u6570",e.sites.total,`\u76F4\u55B6 ${e.sites.direct} \u5E97 \xB7 \u52A0\u76DF ${e.sites.franchise} \u5E97`,"sites")}
      ${$o("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",e.accounts.total,`\u6709\u52B9 ${e.accounts.active} \u4EF6`,"team","green")}
      ${$o("\u8ECA\u4E21\u53F0\u6570",e.vehicles.total,`\u8CB8\u51FA\u53EF\u80FD ${e.vehicles.available} \u53F0`,"fleet")}
      ${$o("\u8CB8\u51FA\u4E2D",e.vehicles.rented,`\u6574\u5099\u4E2D ${e.vehicles.maintenance} \u53F0`,"calendar","orange")}
    </div>
    <div class="grid dashboard-grid">
      ${Ke("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8</h2><button class="btn btn-sm btn-quiet" data-page="reservations">\u3059\u3079\u3066\u8868\u793A ${Et("arrow")}</button></div>
        ${s.length?`<div class="site-list">${s.map(r=>`<div class="site-line"><div><div class="site-name">${A(r.guest_name)} <span class="secondary">${A(r.guest_phone)}</span></div><div class="site-meta">${Tc(r.start_at)} &nbsp;\xB7&nbsp; ${A(r.make??"")} ${A(r.model??"")}</div></div><span class="site-code">${A(r.reservation_code)}</span>${Xn(r.status)}</div>`).join("")}</div>`:'<div class="empty">\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
      </section>`:`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${Jd(e)}</section>`}
      <section class="panel"><div class="panel-head"><h2>${Pe.site.type==="headquarters"?"\u5E97\u8217\u4E00\u89A7":"\u6240\u5C5E\u5E97\u8217"}</h2><small>${Lt.length} \u5E97\u8217</small></div>
        ${Lt.length?`<div class="site-list">${Lt.slice(0,6).map(r=>`<div class="site-line"><div><div class="site-name">${A(r.name)}</div><div class="site-meta">${A(r.code)}</div></div>${Xn(r.type)}${Xn(r.status)}</div>`).join("")}</div>`:'<div class="empty">\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
        ${Lt.length>6?`<button class="btn btn-sm" data-page="sites">\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A ${Et("arrow")}</button>`:""}
      </section>
      ${Ke("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${Jd(e)}</section>`:""}
    </div>`)}function Jd(i){let e=Math.max(i.vehicles.total,1);return`<div class="fleet-breakdown">${[["\u8CB8\u51FA\u53EF\u80FD",i.vehicles.available,"green"],["\u8CB8\u51FA\u4E2D",i.vehicles.rented,""],["\u6574\u5099\u4E2D",i.vehicles.maintenance,"orange"]].map(([n,s,r])=>`<div class="fleet-row"><span>${n}</span><div class="fleet-track"><div class="fleet-fill ${r}" style="width:${Math.min(100,s/e*100)}%"></div></div><b>${s}</b></div>`).join("")}</div>`}function jo(i,e=""){return`<div class="toolbar"><label class="search">${Et("search")}<input data-search placeholder="${i}" value="${A(Pn)}"></label>${e}</div>`}function Qo(i,e,t){return`<div class="table-wrap">${e?`<table class="table"><thead><tr>${i.map(n=>`<th>${n}</th>`).join("")}</tr></thead><tbody>${e}</tbody></table>`:`<div class="empty">${t}</div>`}</div>`}function Fc(i,e=50){return`<div class="pagination"><span>${i?dn+1:0}\uFF5E${dn+i}\u4EF6\u3092\u8868\u793A</span><div><button class="btn btn-sm" data-action="prev" ${dn<=0?"disabled":""}>\u524D\u3078</button><button class="btn btn-sm" data-action="next" ${i<e?"disabled":""}>\u6B21\u3078</button></div></div>`}async function Ds(){let i=await Me("/api/v1/sites");if(Lt=i.items,Gi){let n=await Me(`/api/v1/sites/${encodeURIComponent(Gi)}`);Hi=(Yn&&Pe.isAdmin?await Me(`/api/v1/accounts?${new URLSearchParams({siteId:n.id,limit:"100",offset:"0"})}`):null)?.items??[];let r=n.vehicle_counts?.classes??[],a=n.vehicle_counts?.statuses??[],o=Math.max(0,Number(n.vehicle_count??0)-r.reduce((d,h)=>d+Number(h.count),0)),l=o?[...r,{name:"\u672A\u5206\u985E",count:o}]:r,c=Yn?`<section class="panel site-accounts-panel">
      <div class="panel-head"><div><h2>${A(n.type==="headquarters"?"\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8":"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8")}</h2>
        <small>${A(n.account_count)} \u4EF6</small></div>
        ${n.type!=="headquarters"?`<button class="btn btn-primary" data-modal="account" data-site-id="${A(n.id)}">${Et("plus")} \u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0</button>`:""}
      </div>
      ${Hi.length?`<div class="table-wrap"><table class="table"><thead><tr><th>\u30A2\u30AB\u30A6\u30F3\u30C8</th><th>\u72B6\u614B</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${Hi.map(d=>{let h=Number(d.is_owner_admin)===1,f=Pe.isAdmin&&!h&&d.status==="active"&&n.status==="active",g=[h?"":`<button class="btn btn-sm" data-action="edit-account" data-id="${A(d.id)}">\u7DE8\u96C6</button>`,Pe.isAdmin?`<button class="btn btn-sm" data-action="reset-account-password" data-id="${A(d.id)}">\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4</button>`:"",h?d.id===Pe.id?'<span class="secondary">\u73FE\u5728\u306E\u30A2\u30AB\u30A6\u30F3\u30C8</span>':"":`<button class="btn btn-sm btn-primary" data-action="switch-account" data-id="${A(d.id)}" ${f?"":"disabled"}>\u30ED\u30B0\u30A4\u30F3</button>`].filter(Boolean).join("");return`<tr><td class="primary-cell" data-label="\u30A2\u30AB\u30A6\u30F3\u30C8">${A(d.display_name)}${h?'<span class="account-admin-badge">\u7BA1\u7406\u8005</span>':""}<span class="secondary">${A(d.username)}</span></td><td data-label="\u72B6\u614B">${Xn(d.status)}</td><td data-label="\u64CD\u4F5C"><div class="table-actions">${g}</div></td></tr>`}).join("")}</tbody></table></div>`:'<div class="empty">\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
    </section>`:"",u=`<button class="btn" data-action="site-list-back">${Et("arrow")} \u5E97\u8217\u4E00\u89A7\u3078\u623B\u308B</button>
      ${Pe.isAdmin?`<button class="btn" data-modal="site-contact" data-site-id="${A(n.id)}">\u5E97\u8217\u60C5\u5831\u3092\u7DE8\u96C6</button>`:""}
      ${Pe.isAdmin&&n.type!=="headquarters"&&n.status==="active"&&Number(n.has_active_account)===1?`<button class="btn" data-action="switch-site" data-id="${A(n.id)}">\u30ED\u30B0\u30A4\u30F3</button>`:""}
      ${Pe.isAdmin&&n.type!=="headquarters"?`<button class="btn ${n.status==="active"?"btn-danger":""}" data-action="toggle-site-status" data-id="${A(n.id)}" data-status="${n.status==="active"?"inactive":"active"}">${n.status==="active"?"\u5E97\u8217\u3092\u505C\u6B62":"\u5E97\u8217\u3092\u518D\u958B"}</button>`:""}`;$i(`${Wi(n.name,`${A(n.code)} \xB7 ${A(Bi(n.type))}`,u)}
      <section class="panel site-detail-panel">
        <div class="site-detail-heading"><h2>\u5E97\u8217\u60C5\u5831</h2><span>${Xn(n.status)}</span></div>
        <dl class="site-detail-grid">
          <div><dt>\u4F4F\u6240</dt><dd>${A(n.address||"\u672A\u767B\u9332")}</dd></div>
          <div><dt>\u96FB\u8A71\u756A\u53F7</dt><dd>${A(n.phone||"\u672A\u767B\u9332")}</dd></div>
          <div><dt>\u52A0\u5165\u65E5</dt><dd>${A(n.created_at?new Date(n.created_at).toLocaleDateString(en()==="zh"?"zh-CN":"ja-JP"):"\u2014")}</dd></div>
          <div><dt>\u767B\u9332\u8ECA\u4E21</dt><dd>${Number(n.vehicle_count??0).toLocaleString(en()==="zh"?"zh-CN":"ja-JP")} \u53F0</dd></div>
        </dl>
        <div class="site-vehicle-counts"><h3>\u8ECA\u4E21\u30AF\u30E9\u30B9\u5225\u306E\u53F0\u6570</h3>
          ${l.length?`<ul>${l.map(d=>`<li><span>${A(d.name)}</span><strong>${Number(d.count).toLocaleString(en()==="zh"?"zh-CN":"ja-JP")} \u53F0</strong></li>`).join("")}</ul>`:'<p class="secondary">\u8ECA\u4E21\u30AF\u30E9\u30B9\u306E\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093</p>'}
        </div>
        ${a.length?`<p class="site-status-summary">${a.map(d=>`${A(Bi(d.status))} ${Number(d.count).toLocaleString(en()==="zh"?"zh-CN":"ja-JP")} \u53F0`).join(" \xB7 ")}</p>`:""}
        ${Pe.isAdmin?`<div class="site-account-entry"><div><h3>${n.type==="headquarters"?"\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8":"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8"}</h3><p>${Number(n.account_count??0).toLocaleString(en()==="zh"?"zh-CN":"ja-JP")} \u4EF6</p></div>
          <button class="btn btn-primary" data-action="toggle-site-accounts">${Yn?"\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u9589\u3058\u308B":"\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8868\u793A"} ${Et("arrow")}</button>
        </div>`:""}
      </section>
      ${c}`);return}let t=i.items.filter(n=>`${n.name} ${n.code} ${Bi(n.type)}`.toLowerCase().includes(Pn.toLowerCase())).map(n=>{let s=Pe.isAdmin&&n.type!=="headquarters"&&n.status==="active"&&Number(n.has_active_account)===1?`<button class="btn btn-sm" data-action="switch-site" data-id="${A(n.id)}">\u30ED\u30B0\u30A4\u30F3</button>`:"";return`<tr><td class="primary-cell" data-label="\u5E97\u8217">${A(n.name)}<span class="secondary">${A(n.code)}</span></td><td data-label="\u7A2E\u5225">${Xn(n.type)}</td><td data-label="\u72B6\u614B">${Xn(n.status)}</td><td data-label="\u64CD\u4F5C"><div class="table-actions"><button class="btn btn-sm" data-action="site-details" data-id="${A(n.id)}">\u8A73\u7D30</button>${s}</div></td></tr>`}).join("");$i(`${Wi("\u5E97\u8217\u7BA1\u7406","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406",Ke("sites:write")&&Pe.site.type==="headquarters"?`<button class="btn btn-primary" data-modal="site">${Et("plus")} \u5E97\u8217\u3092\u8FFD\u52A0</button>`:"")}
    ${jo("\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22")}
    ${Qo(["\u5E97\u8217\u540D / \u30B3\u30FC\u30C9","\u5E97\u8217\u7A2E\u5225","\u72B6\u614B","\u64CD\u4F5C"],t,"\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}`)}async function Lv(){if(Lt.length&&Wo.length)return;let[i,e]=await Promise.all([Me("/api/v1/sites"),Me("/api/v1/permissions")]);Lt=i.items,Wo=e.items}function Dv(i="",e=!1){return Lt.filter(t=>e||t.type!=="headquarters").map(t=>`<option value="${A(t.id)}" ${String(t.id)===i?"selected":""}>${A(t.name)} \xB7 ${A(t.code)}</option>`).join("")}function zr(i){return i?i.slice(0,10):""}function Zd(i=[]){let e={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C","parking:admin":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D","customers:read":"\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7","customers:write":"\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u7BA1\u7406"},t={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0","parking:admin":"\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D","customers:read":"\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7","customers:write":"\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u66F4\u65B0"};return`<div class="check-grid">${Wo.filter(({permission_key:n})=>n!=="accounts:write").map(n=>`<label class="check-item"><input type="checkbox" name="permissions" value="${A(n.permission_key)}" ${i.includes(n.permission_key)?"checked":""}><span>${e[n.permission_key]??"\u305D\u306E\u4ED6\u306E\u6A29\u9650"}<small>${t[n.permission_key]??"\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093"}</small></span></label>`).join("")}</div>`}async function sh(){Ke("sites:read")&&await Bc();let i=new URLSearchParams({limit:"50",offset:String(dn)});Pe.site.type==="headquarters"&&i.set("siteId",Pe.site.id),pi&&i.set("status",pi),Pn&&i.set("search",Pn);let e=await Me(`/api/v1/vehicles?${i}`);Uc=e.items;let t=e.items.map(r=>`<tr>
    <td class="primary-cell" data-label="\u8ECA\u4E21">${A(r.registration_number)}${r.make||r.model||r.model_year?`<span class="secondary">${A(r.make)} ${A(r.model)} ${r.model_year?`\u30FB${r.model_year}`:""}</span>`:""}${r.inspection_expiry_date||r.statutory_inspection_date?`<span class="secondary vehicle-date-summary">${r.inspection_expiry_date?`\u8ECA\u691C ${A(zr(r.inspection_expiry_date))}`:""}${r.inspection_expiry_date&&r.statutory_inspection_date?" \xB7 ":""}${r.statutory_inspection_date?`\u6CD5\u5B9A\u70B9\u691C ${A(zr(r.statutory_inspection_date))}`:""}</span>`:""}</td>
    <td data-label="\u5E97\u8217">${A(Lt.find(a=>a.id===r.site_id)?.name??(Pe.site.id===r.site_id?Pe.site.name:r.site_id))}</td>
    <td data-label="\u72B6\u614B">${Xn(r.status)}</td>
    <td data-label="\u64CD\u4F5C">${Ke("vehicles:write")?`<button class="btn btn-sm" data-action="edit-vehicle" data-id="${A(r.id)}">\u7DE8\u96C6</button>`:""}</td>
  </tr>`).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u72B6\u614B</option>${["available","rented","maintenance","retired"].map(r=>`<option value="${r}" ${pi===r?"selected":""}>${Bi(r)}</option>`).join("")}</select>`,s=[...Ke("vehicles:write")?[`<button class="btn btn-primary" data-modal="vehicle">${Et("plus")} \u8ECA\u4E21\u3092\u8FFD\u52A0</button>`]:[]].join("");$i(`${Wi("\u8ECA\u4E21\u7BA1\u7406","\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406",s)}
    ${jo("\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22",n)}
    ${Qo(["\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","\u6240\u5C5E\u5E97\u8217","\u72B6\u614B","\u64CD\u4F5C"],t,"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}
    ${Fc(e.items.length)}`)}async function rh(){let i=new URLSearchParams({limit:"50",offset:String(dn)});Pn&&i.set("search",Pn);let e=await Me(`/api/v1/customers?${i}`);nh=e.items;let t=e.items.map(n=>`<tr>
    <td class="primary-cell" data-label="\u304A\u5BA2\u69D8">${A(n.name)}${n.name_kana?`<span class="secondary">${A(n.name_kana)}</span>`:""}</td>
    <td data-label="\u96FB\u8A71\u756A\u53F7">${A(n.phone)}</td>
    <td data-label="\u52E4\u52D9\u5148\u30FB\u5B66\u6821">${A(n.workplace_school??"\u2014")}</td>
    <td data-label="\u64CD\u4F5C">${Ke("customers:write")?`<button class="btn btn-sm" data-action="edit-customer" data-id="${A(n.id)}">\u7DE8\u96C6</button>`:""}</td>
  </tr>`).join("");$i(`${Wi("\u304A\u5BA2\u69D8\u7BA1\u7406","\u304A\u5BA2\u69D8\u306E\u57FA\u672C\u60C5\u5831\u3068\u9023\u7D61\u5148\u3092\u7BA1\u7406",Ke("customers:write")?`<button class="btn btn-primary" data-modal="customer">${Et("plus")} \u304A\u5BA2\u69D8\u3092\u8FFD\u52A0</button>`:"")}
    ${jo("\u6C0F\u540D\u3001\u30D5\u30EA\u30AC\u30CA\u3001\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22")}
    ${Qo(["\u304A\u5BA2\u69D8\u540D","\u96FB\u8A71\u756A\u53F7","\u52E4\u52D9\u5148\u30FB\u5B66\u6821","\u64CD\u4F5C"],t,"\u304A\u5BA2\u69D8\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093")}
    ${Fc(e.items.length)}`)}function kc(i){let e=i.vehicles.filter(n=>(fi==="all"||n.vehicle_type===fi)&&(!kr||`${n.plate} ${n.vehicle_type} ${n.options.join(" ")}`.toLocaleLowerCase("ja").includes(kr.toLocaleLowerCase("ja")))),t=["all",...i.vehicle_classes.map(n=>n.name)];return`<div class="parking-catalog-content" id="parking-catalog-content">
    <label class="parking-catalog-search">${Et("search")}<input type="search" data-parking-search
      placeholder="\u8ECA\u756A\u3067\u691C\u7D22" value="${A(kr)}" aria-label="\u8ECA\u756A\u3067\u691C\u7D22"></label>
    <div class="parking-class-filters" role="group" aria-label="\u8ECA\u7A2E\u3067\u7D5E\u308A\u8FBC\u307F">
      ${t.map(n=>`<button type="button" class="parking-class-filter${fi===n?" active":""}"
        data-action="parking-class-filter" data-class="${A(n)}">${n==="all"?"All":A(n)}</button>`).join("")}
    </div>
    <div class="parking-catalog-list" aria-live="polite">
      ${e.length?e.map(n=>{let s=i.parking_lots.find(l=>l.id===n.parking_lot_id),r=i.statuses.filter(l=>n.status_ids.includes(l.id)).map(l=>`${l.icon} ${l.name}`).join("\u30FB"),a=n.reservation?.status==="checked_in"?"\u8CB8\u51FA\u4E2D":n.reservation?"\u4E88\u7D04\u6E08\u307F":"",o=[n.vehicle_type,s?.name??"\u672A\u914D\u7F6E",r,a,n.options.join("\u30FB")].filter(Boolean).join(" \xB7 ");return`<button type="button" class="parking-catalog-item" data-action="parking-focus-vehicle"
          data-id="${A(n.id)}"><strong>${A(n.plate)}</strong><span>${A(o)}</span></button>`}).join(""):kr||fi!=="all"?'<p class="parking-catalog-empty">\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>':`<div class="parking-catalog-empty">\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br>\u8ECA\u4E21\u7BA1\u7406\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002
          ${Ke("vehicles:read")?'<button type="button" class="btn btn-sm" data-page="vehicles">\u8ECA\u4E21\u7BA1\u7406\u3078</button>':""}</div>`}
    </div>
  </div>`}function ah(i){let e=i.vehicles.filter(n=>zi==="all"||n.status_ids.includes(Number(zi)));return`<div id="parking-status-content">
    <div class="parking-status-filters" role="group" aria-label="\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9\u3067\u7D5E\u308A\u8FBC\u307F">
      ${[{id:"all",label:"\u3059\u3079\u3066"},...i.statuses.map(n=>({id:String(n.id),label:`${n.icon} ${n.name}`}))].map(n=>`<button type="button" class="parking-status-filter${zi===n.id?" active":""}"
        data-action="parking-status-filter" data-status-id="${A(n.id)}">${A(n.label)}</button>`).join("")}
    </div>
    <div class="parking-status-list">
      ${e.length?e.map(n=>{let s=i.statuses.filter(o=>n.status_ids.includes(o.id)).map(o=>`${o.icon} ${o.name}`),r=[n.unwashed?"\u6D17\u8ECA\u5F85\u3061":"",n.no_fuel?"\u7D66\u6CB9\u5F85\u3061":"",n.needs_repair?"\u4FEE\u7406\u5F85\u3061":""].filter(Boolean),a=i.parking_lots.find(o=>o.id===n.parking_lot_id);return`<button type="button" class="parking-status-item" data-action="parking-focus-vehicle"
          data-id="${A(n.id)}"><strong>${A(n.plate)}</strong>
          <span>${A([a?.name??"\u672A\u914D\u7F6E",...s,...r].join(" \xB7 "))}</span></button>`}).join(""):'<p class="parking-catalog-empty">\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}
    </div>
  </div>`}async function Vt(){let i=await Me("/api/v1/parking/bootstrap");wt=i,fi!=="all"&&!i.vehicle_classes.some(_=>_.name===fi)&&(fi="all"),zi!=="all"&&!i.statuses.some(_=>String(_.id)===zi)&&(zi="all");let e=Ke("parking:write");for(let _ of i.vehicles)un.has(_.id)||un.set(_.id,_.inspection_marks);let t=_=>e?`<form class="parking-vehicle-controls" data-form="parking-vehicle" data-id="${A(_.id)}">
        <label>\u4F4D\u7F6E X <input name="position_x" type="number" min="0" max="1" step="0.01" value="${A(_.position_x)}" required></label>
        <label>\u4F4D\u7F6E Y <input name="position_y" type="number" min="0" max="1" step="0.01" value="${A(_.position_y)}" required></label>
        <label>\u99D0\u8ECA\u533A\u753B <select name="parking_lot_id"><option value="">\u672A\u914D\u7F6E</option>${i.parking_lots.map(E=>`<option value="${A(E.id)}" ${_.parking_lot_id===E.id?"selected":""}>${A(E.name)}</option>`).join("")}</select></label>
        <fieldset><legend>\u696D\u52D9\u72B6\u614B</legend>${i.statuses.map(E=>`<label><input type="checkbox" name="status_ids" value="${A(E.id)}" ${_.status_ids.includes(E.id)?"checked":""}>${A(E.icon)} ${A(E.name)}</label>`).join("")}
          <label><input type="checkbox" name="unwashed" ${_.unwashed?"checked":""}>\u6D17\u8ECA\u5F85\u3061</label>
          <label><input type="checkbox" name="no_fuel" ${_.no_fuel?"checked":""}>\u7D66\u6CB9\u5F85\u3061</label>
          <label><input type="checkbox" name="needs_repair" ${_.needs_repair?"checked":""}>\u4FEE\u7406\u5F85\u3061</label>
        </fieldset>
        <fieldset><legend>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</legend>${i.vehicle_options.map(E=>`<label><input type="checkbox" name="options" value="${A(E.name)}" ${_.options.includes(E.name)?"checked":""}>${A(E.name)}</label>`).join("")}</fieldset>
        ${i.assessment_fields.map(E=>{let R=_.assessment_values[String(E.id)]??"",L=E.field_type==="rating"?`<select data-assessment-id="${A(E.id)}"><option value="">\u672A\u8A55\u4FA1</option>${[1,2,3,4,5].map(S=>`<option value="${S}" ${R===String(S)?"selected":""}>${S}</option>`).join("")}</select>`:E.field_type==="checkbox"?`<input type="checkbox" data-assessment-id="${A(E.id)}" ${R==="true"?"checked":""}>`:`<input type="${E.field_type==="number"?"number":"text"}" ${E.field_type==="number"?'step="1"':""} maxlength="500" data-assessment-id="${A(E.id)}" value="${A(R)}">`;return`<label class="assessment-input">${A(E.name)}${E.suffix?` (${A(E.suffix)})`:""}${L}</label>`}).join("")}
        ${i.damage_types.length?`<fieldset class="damage-field"><legend>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</legend>
          <button class="btn btn-sm" type="button" data-action="parking-inspect3d" data-id="${A(_.id)}">3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6</button>
          <div class="damage-map read-only" data-id="${A(_.id)}" aria-label="\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC">
            <span class="damage-map-hint">3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6</span>
            ${(un.get(_.id)??[]).map(E=>`<button type="button" class="damage-marker" data-action="parking-damage-remove" data-vehicle-id="${A(_.id)}" data-mark-id="${A(E.id)}" style="left:${E.x*100}%;top:${E.y*100}%;background:${A(E.color??i.damage_types.find(R=>R.id===E.damage_type_id)?.color??"#e34b4b")}">${A(E.icon??"\xD7")}</button>`).join("")}
          </div>
        </fieldset>`:""}
        <label>\u30E1\u30E2 <textarea name="notes" maxlength="2000">${A(_.notes??"")}</textarea></label>
        <button class="btn btn-sm btn-primary" type="submit">\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58</button>
      </form>`:`<div class="parking-statuses">${i.statuses.filter(E=>_.status_ids.includes(E.id)).map(E=>`${A(E.icon)} ${A(E.name)}`).join("\u3001")||"\u72B6\u614B\u306A\u3057"}
      ${_.inspection_marks.length?`<div class="damage-map read-only">${_.inspection_marks.map(E=>`<span class="damage-marker" style="left:${E.x*100}%;top:${E.y*100}%;background:${A(E.color??"#e34b4b")}">${A(E.icon??"\xD7")}</span>`).join("")}</div>`:""}</div>`,n=i.parking_lots.map(_=>{let E=i.vehicles.filter(y=>y.parking_lot_id===_.id),R=E.map(y=>`<article class="parking-map-vehicle"
      data-vehicle-id="${A(y.id)}"
      style="left:${y.position_x*100}%;top:${y.position_y*100}%">
      <button class="parking-drag-handle" type="button" data-parking-drag="${A(y.id)}"
        aria-label="${A(y.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${A(y.plate)}</button>
      ${y.reservation?`<span class="parking-reservation-indicator${y.reservation.status==="checked_in"?" checked-in":""}">
        ${y.reservation.status==="checked_in"?"\u8CB8\u51FA\u4E2D":"\u4E88\u7D04\u6E08\u307F"}</span>`:""}
      <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${t(y)}</details>
    </article>`).join(""),L=_.markings.map(y=>`<line x1="${y.x1*1e3}" y1="${y.y1*1e3}" x2="${y.x2*1e3}" y2="${y.y2*1e3}" stroke="${A(y.color)}" stroke-width="7" stroke-linecap="round"/>`).join(""),S=_.navigation_url?`<a class="parking-lot-name" href="${A(_.navigation_url)}" target="_blank" rel="noopener noreferrer">${A(_.name)} <span aria-hidden="true">\u2197</span></a>`:`<h2 class="parking-lot-name">${A(_.name)}</h2>`;return`<section class="card parking-lot" style="--parking-lot-width:${A(Math.max(30,Math.min(100,_.area_width||50)))}%">
      <header><div class="parking-lot-heading">${S}<span class="parking-lot-count">${_.capacity===null?E.length:`${E.length}/${_.capacity}`} \u53F0</span></div>
      ${Ke("parking:admin")?`<div class="parking-admin-actions">
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${A(_.id)}" data-direction="up" aria-label="\u4E0A\u3078">\u2191</button>
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${A(_.id)}" data-direction="down" aria-label="\u4E0B\u3078">\u2193</button>
        <button class="btn btn-sm" data-action="parking-lot-resize" data-id="${A(_.id)}"
          aria-pressed="${qo===_.id}">\u30B5\u30A4\u30BA\u8ABF\u6574</button>
        <button class="btn btn-sm" data-action="parking-lot-settings" data-id="${A(_.id)}">\u8A2D\u5B9A</button>
        <button class="btn btn-sm" data-action="parking-marking-toggle" data-id="${A(_.id)}">${Us===_.id?"\u7DDA\u63CF\u753B\u3092\u7D42\u4E86":"\u7DDA\u3092\u63CF\u304F"}</button>
        <button class="btn btn-sm" data-action="parking-lot-toggle" data-id="${A(_.id)}" data-active="${String(!_.is_active)}">${_.is_active?"\u505C\u6B62":"\u518D\u958B"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${A(_.id)}">\u524A\u9664</button>
      </div>`:""}</header>
      <div class="parking-map${_.is_active?"":" inactive"}" data-parking-map data-lot-id="${A(_.id)}"
        style="height:${A(Math.max(160,Math.min(600,_.area_height||240)))}px">
        <svg class="parking-map-markings${Us===_.id?" editable":""}" data-marking-svg
          data-lot-id="${A(_.id)}" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-label="\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3">${L}</svg>
        ${R||'<span class="parking-map-empty">\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0</span>'}
        ${Ke("parking:admin")&&qo===_.id?`<button class="parking-resize-handle" type="button" data-parking-resize="${A(_.id)}"
              aria-label="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u30B5\u30A4\u30BA\u3092\u5909\u66F4">\u2198</button>`:""}
      </div>
      ${Us===_.id?`<div class="parking-marking-tools"><label>\u7DDA\u306E\u8272 <input type="color" data-marking-color value="${A($r)}"></label>
        <button class="btn btn-sm" data-action="parking-marking-undo" data-id="${A(_.id)}" ${_.markings.length?"":"disabled"}>\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059</button>
        <span>\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</span></div>`:""}
      ${Ke("parking:write")?'<p class="parking-map-hint">\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</p>':""}
    </section>`}).join(""),s=i.vehicles.filter(_=>_.parking_lot_id===null),r=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,16),a=i.jobs.map(_=>{let E=i.vehicles.find(L=>L.id===_.vehicle_id),R=i.parking_lots.find(L=>L.id===_.destination_lot_id);return`<article class="parking-job${_.completed?" completed":""}">
      <div><strong>${A(E?.plate??`#${_.vehicle_id}`)}</strong>
        <span class="secondary">${A(R?.name??`#${_.destination_lot_id}`)} \xB7 ${A(_.scheduled_at)}</span></div>
      <div>${Ke("parking:write")?`<button class="btn btn-sm" data-action="parking-job-toggle" data-id="${A(_.id)}" data-completed="${String(!_.completed)}">${_.completed?"\u518D\u958B":"\u5B8C\u4E86"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-job-delete" data-id="${A(_.id)}">\u524A\u9664</button>`:_.completed?"\u5B8C\u4E86":"\u4E88\u5B9A"}</div>
    </article>`}).join(""),o=`${e?`<form class="parking-job-form" data-form="parking-job">
      <label>\u8ECA\u4E21 <select name="vehicle_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.vehicles.map(_=>`<option value="${A(_.id)}">${A(_.plate)}</option>`).join("")}</select></label>
      <label>\u9001\u308A\u5148 <select name="destination_lot_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.parking_lots.map(_=>`<option value="${A(_.id)}">${A(_.name)}</option>`).join("")}</select></label>
      <label>\u4E88\u5B9A\u65E5\u6642 <input name="scheduled_at" type="datetime-local" value="${A(r)}" required></label>
      <button class="btn btn-sm btn-primary" type="submit">\u4E88\u5B9A\u3092\u8FFD\u52A0</button>
    </form>`:""}
    <div class="parking-job-list">${a||'<p class="parking-catalog-empty">\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}</div>`,l=(_,E)=>`<select name="${_}" required>
    ${i.parking_lots.map(R=>`<option value="${A(R.id)}" ${E===R.id?"selected":""}>${A(R.name)}</option>`).join("")}
  </select>`,c=(_,E)=>`<select name="${_}" required>
    ${i.stores.map(R=>`<option value="${A(R.id)}" ${E===R.id?"selected":""}>${A(R.name)}</option>`).join("")}
  </select>`,u=(_,E,R,L,S,y,P,B=!1)=>`<form class="parking-distance-form" data-form="${_}">
      ${_==="lot-distance"?l(E,L):c(E,L)}
      ${l(R,S)}
      <label>\u5206 <input name="minutes" type="number" min="0" max="100000" step="any" value="${y??""}"></label>
      <label>km <input name="km" type="number" min="0" max="100000" step="any"
        value="${B?"":P??""}" placeholder="${B&&P!=null?P.toFixed(3):""}"></label>
      ${B&&P!=null?`<small class="distance-derived">\u5730\u56F3\u5EA7\u6A19\u304B\u3089\u8A08\u7B97\u3057\u305F\u76F4\u7DDA\u8DDD\u96E2\uFF1A${P.toFixed(3)} km</small>`:""}
      <button class="btn btn-sm" type="submit">${y===void 0&&P===void 0?"\u8FFD\u52A0":"\u4FDD\u5B58"}</button>
    </form>`,d=new Map;for(let _ of i.store_lot_distances)d.set(`${_.store_id}:${_.lot_id}`,_);let h=i.stores.map(_=>`<details class="parking-store-distance-group">
    <summary>${A(_.name)} \xB7 ${i.parking_lots.length} \u304B\u6240</summary>
    ${i.parking_lots.map(E=>{let R=d.get(`${_.id}:${E.id}`);return`<div class="parking-distance-row"><strong>${A(E.name)}</strong>
        ${u("store-distance","store_id","lot_id",_.id,E.id,R?.minutes,R?.km,R?.km_auto)}</div>`}).join("")}
  </details>`).join(""),f=Ke("parking:admin")?`<section class="card parking-location-settings">
    <h2>\u99D0\u8ECA\u5834\u30FB\u914D\u7F6E\u30A8\u30EA\u30A2</h2>
    <p class="secondary">Google Maps URL \u306B\u5EA7\u6A19\u304C\u542B\u307E\u308C\u308B\u5834\u5408\u306F\u76F4\u7DDA\u8DDD\u96E2\u3092\u81EA\u52D5\u8A08\u7B97\u3057\u307E\u3059\u3002\u77ED\u7E2EURL\u3084\u4F4F\u6240\u3060\u3051\u3067\u306F\u5EA7\u6A19\u3092\u53D6\u5F97\u3067\u304D\u306A\u3044\u305F\u3081\u3001\u8DDD\u96E2\u3092\u624B\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
    <form class="parking-lot-create" data-form="parking-lot">
      <label>\u99D0\u8ECA\u5834\u540D <input name="name" maxlength="40" required></label>
      <label>Google Maps URL <input name="navigation_url" type="url" maxlength="2000" placeholder="https://maps.google.com/\u2026"></label>
      <button class="btn btn-sm btn-primary" type="submit">${Et("plus")} \u8FFD\u52A0</button>
    </form>
    <div class="parking-location-list">${i.parking_lots.map(_=>{let E=i.vehicles.filter(S=>S.parking_lot_id===_.id).length,R=i.jobs.filter(S=>S.destination_lot_id===_.id).length,L=i.parking_lots.length<=1||E>0||R>0;return`<article class="parking-location-row">
        <div class="parking-location-summary"><strong>${A(_.name)}</strong>
          <span class="secondary">${E} \u53F0 \xB7 \u4F5C\u696D\u4E88\u5B9A ${R} \u4EF6${_.is_active?"":" \xB7 \u505C\u6B62\u4E2D"}</span>
          ${_.navigation_url?`<a class="secondary parking-map-link" href="${A(_.navigation_url)}" target="_blank" rel="noopener noreferrer">Google Maps \u2197</a>`:""}
        </div>
        <form class="parking-priority-form" data-form="parking-lot-priority" data-id="${A(_.id)}">
          <label>\u512A\u5148\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u9806\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09
            <input name="class_priority" maxlength="2000" value="${A(_.class_priority.join(", "))}"
              placeholder="${A(i.vehicle_classes.map(S=>S.name).join(", "))}">
          </label>
          <button class="btn btn-sm" type="submit">\u512A\u5148\u9806\u4F4D\u3092\u4FDD\u5B58</button>
        </form>
        <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${A(_.id)}"
          ${L?"disabled":""} aria-label="${A(_.name)}\u3092\u524A\u9664">\u524A\u9664</button>
      </article>`}).join("")||'<p class="empty">\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}</div>
  </section>`:"",g=Ke("parking:admin")?`<section class="card parking-catalogs">
    <div><h2>\u8ECA\u4E21\u30AF\u30E9\u30B9</h2><form data-form="parking-class">
      <input name="name" maxlength="40" placeholder="\u30AF\u30E9\u30B9\u540D" required><input name="color" type="color" value="#4f86f7">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_classes.map(_=>`<div class="parking-catalog-row"><span><i style="background:${A(_.color)}"></i>${A(_.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-class-delete" data-id="${A(_.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div class="parking-status-settings"><h2>\u696D\u52D9\u72B6\u614B</h2><form class="parking-status-create" data-form="parking-status">
      <input name="name" maxlength="40" placeholder="\u72B6\u614B\u540D" required><input name="icon" maxlength="8" placeholder="\u{1F514}">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.statuses.map(_=>`<form class="parking-status-edit" data-form="parking-status-edit" data-id="${A(_.id)}">
      <span class="parking-status-preview">${A(_.icon)}</span>
      <input name="name" maxlength="40" value="${A(_.name)}" aria-label="\u72B6\u614B\u540D" required>
      <input name="icon" maxlength="8" value="${A(_.icon)}" aria-label="\u30A2\u30A4\u30B3\u30F3">
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-status-delete" data-id="${A(_.id)}">\u524A\u9664</button>
    </form>`).join("")||'<p class="empty">\u696D\u52D9\u72B6\u614B\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div class="parking-option-settings"><h2>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</h2><form class="parking-option-create" data-form="parking-option">
      <input name="name" maxlength="40" placeholder="\u30AA\u30D7\u30B7\u30E7\u30F3\u540D" required><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_options.map(_=>`<form class="parking-option-edit" data-form="parking-option-edit" data-id="${A(_.id)}">
      <input name="name" maxlength="40" value="${A(_.name)}" aria-label="\u30AA\u30D7\u30B7\u30E7\u30F3\u540D" required>
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-option-delete" data-id="${A(_.id)}">\u524A\u9664</button>
    </form>`).join("")||'<p class="empty">\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u5E97\u8217\u306E\u5730\u56F3\u4F4D\u7F6E</h2><p class="secondary">\u5404\u5E97\u8217\u306E Google Maps URL \u3092\u767B\u9332\u3059\u308B\u3068\u3001\u5EA7\u6A19\u3092\u542B\u3080URL\u304B\u3089\u5404\u99D0\u8ECA\u5834\u307E\u3067\u306E\u76F4\u7DDA\u8DDD\u96E2\u3092\u7B97\u51FA\u3057\u307E\u3059\u3002\u4F4F\u6240\u306E\u691C\u7D22\u3084\u5916\u90E8\u3078\u306E\u9001\u4FE1\u306F\u884C\u3044\u307E\u305B\u3093\u3002</p>
      <form class="parking-store-create" data-form="parking-store">
        <label>\u5E97\u8217\u540D<input name="name" maxlength="120" required></label>
        <label>Google Maps URL<input name="navigation_url" type="url" maxlength="2000" placeholder="https://maps.google.com/\u2026"></label>
        <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
      </form>
      ${i.stores.map(_=>`<div class="parking-store-location-row">
        <strong>${A(_.name)}</strong>
        <form data-form="parking-store-location" data-id="${A(_.id)}">
          <label>Google Maps URL<input name="navigation_url" type="url" maxlength="2000"
            value="${A(_.navigation_url)}" placeholder="https://maps.google.com/\u2026"></label>
          <button class="btn btn-sm" type="submit">\u5730\u56F3\u4F4D\u7F6E\u3092\u4FDD\u5B58</button>
        </form>
        <button class="btn btn-sm btn-quiet" data-action="parking-store-delete" data-id="${A(_.id)}">\u524A\u9664</button>
      </div>`).join("")||'<p class="empty">\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u99D0\u8ECA\u5834\u9593\u306E\u8DDD\u96E2</h2><p class="secondary">\u76F4\u7DDA\u8DDD\u96E2\u306F\u81EA\u52D5\u7B97\u51FA\u3067\u304D\u307E\u3059\u3002\u6240\u8981\u6642\u9593\u306F\u5B9F\u969B\u306E\u30EB\u30FC\u30C8\u306B\u6CBF\u3063\u3066\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4E21\u65B9\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u3002</p>
      ${u("lot-distance","from_lot_id","to_lot_id")}
      ${i.lot_distances.map(_=>`<div class="parking-distance-row">${u("lot-distance","from_lot_id","to_lot_id",_.from_lot_id,_.to_lot_id,_.minutes,_.km,_.km_auto)}</div>`).join("")||'<p class="empty">\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u5E97\u8217\u304B\u3089\u5404\u99D0\u8ECA\u5834\u307E\u3067</h2><p class="secondary">\u79FB\u52D5\u6642\u9593\u306F\u5B9F\u969B\u306E\u6240\u8981\u6642\u9593\u3092\u5165\u529B\u3057\u307E\u3059\u3002\u5730\u56F3\u5EA7\u6A19\u304B\u3089\u6C42\u3081\u305F\u76F4\u7DDA\u8DDD\u96E2\u306F\u5165\u529B\u305B\u305A\u306B\u4FDD\u5B58\u3067\u304D\u307E\u3059\u3002</p>
      ${i.stores.length&&i.parking_lots.length?h:'<p class="empty">\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044</p>'}</div>
    <div><h2>\u67FB\u5B9A\u9805\u76EE</h2>${i.assessment_fields.map(_=>`<form class="parking-config-form" data-form="parking-assessment" data-id="${A(_.id)}">
      <input name="name" maxlength="120" value="${A(_.name)}" required>
      <select name="field_type">${["rating","checkbox","number","text"].map(E=>`<option value="${E}" ${_.field_type===E?"selected":""}>${E}</option>`).join("")}</select>
      <input name="suffix" maxlength="120" value="${A(_.suffix)}" placeholder="\u5358\u4F4D">
      ${_.built_in_key?'<span class="secondary">\u6A19\u6E96</span>':'<button class="btn btn-sm btn-quiet" type="button" data-action="parking-assessment-delete" data-id="'+A(_.id)+'">\u524A\u9664</button>'}
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-assessment"><input name="name" maxlength="120" placeholder="\u67FB\u5B9A\u9805\u76EE\u540D" required>
        <select name="field_type"><option value="rating">rating</option><option value="checkbox">checkbox</option><option value="number">number</option><option value="text">text</option></select>
        <input name="suffix" maxlength="120" placeholder="\u5358\u4F4D"><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
    <div><h2>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</h2>${i.damage_types.map(_=>`<form class="parking-config-form" data-form="parking-damage" data-id="${A(_.id)}">
      <input name="name" maxlength="120" value="${A(_.name)}" required><input name="icon" maxlength="40" value="${A(_.icon)}">
      <input name="color" type="color" value="${A(_.color)}"><button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-damage-delete" data-id="${A(_.id)}">\u524A\u9664</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-damage"><input name="name" maxlength="120" placeholder="\u640D\u50B7\u540D" required>
        <input name="icon" maxlength="40" placeholder="\u26A0\uFE0F"><input name="color" type="color" value="#e34b4b">
        <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
  </section>`:"";Ac=`${f}${g}`;let m=[Br.length?'<button class="btn btn-sm" data-action="parking-move-undo">\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059</button>':"",Ke("parking:admin")?`<button class="btn btn-primary" data-action="parking-settings">${Et("plus")} \u99D0\u8ECA\u5834\u3092\u7BA1\u7406\u30FB\u8A2D\u5B9A</button>`:""].filter(Boolean).join(""),p=i.vehicles.filter(_=>_.status_ids.length||_.unwashed||_.no_fuel||_.needs_repair).length,I=i.jobs.length,w=i.jobs.filter(_=>!_.completed).length,b=i.parking_lots.length||s.length?`${n}${s.length?`<section class="card parking-lot parking-unassigned-lot"><header><div class="parking-lot-heading"><h2 class="parking-lot-name">\u672A\u914D\u7F6E</h2><span class="parking-lot-count">${s.length} \u53F0</span></div></header>
      <div class="parking-map unassigned" data-parking-map data-lot-id="" style="height:auto;min-height:100px">
        ${s.map(_=>`<article class="parking-map-vehicle unassigned-vehicle" data-vehicle-id="${A(_.id)}">
          <button class="parking-drag-handle" type="button" data-parking-drag="${A(_.id)}"
            aria-label="${A(_.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${A(_.plate)}</button>
          ${_.reservation?`<span class="parking-reservation-indicator${_.reservation.status==="checked_in"?" checked-in":""}">
            ${_.reservation.status==="checked_in"?"\u8CB8\u51FA\u4E2D":"\u4E88\u7D04\u6E08\u307F"}</span>`:""}
          <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${t(_)}</details>
        </article>`).join("")}
      </div></section>`:""}`:`<section class="parking-empty-state"><strong>\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u3042\u308A\u307E\u305B\u3093</strong>
      <span>\u300C\u4F4D\u7F6E\u3092\u7BA1\u7406\u300D\u304B\u3089\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8ECA\u4E21\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002</span>
      ${Ke("parking:admin")?'<button class="btn btn-sm btn-primary" data-action="parking-settings">\u99D0\u8ECA\u5834\u3092\u7BA1\u7406\u30FB\u8A2D\u5B9A</button>':""}</section>`;$i(`${Wi("\u8ECA\u4E21\u914D\u7F6E","ERP\u8ECA\u4E21\u3068\u4E88\u7D04\u306E\u5909\u66F4\u306F\u81EA\u52D5\u3067\u99D0\u8ECA\u5834\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002",m)}
    <div class="parking-summary" aria-label="\u8ECA\u4E21\u306E\u6982\u8981">
      <div class="parking-summary-card"><span>\u767B\u9332\u8ECA\u4E21</span><strong>${i.vehicles.length}</strong></div>
      <div class="parking-summary-card"><span>\u914D\u7F6E\u30A8\u30EA\u30A2</span><strong>${i.parking_lots.length}</strong></div>
      <div class="parking-summary-card"><span>\u8981\u5BFE\u5FDC</span><strong>${p}</strong></div>
    </div>
    <section class="parking-fold"><details id="parking-status-panel">
      <summary class="parking-fold-summary"><strong>\u30B9\u30C6\u30FC\u30BF\u30B9\u5225\u306E\u8ECA\u4E21</strong><span>${i.vehicles.length} \u53F0 <span class="parking-fold-chevron" aria-hidden="true">\u203A</span></span></summary>
      ${ah(i)}
    </details></section>
    <section class="parking-fold"><details id="parking-job-panel">
      <summary class="parking-fold-summary"><strong>\u30B8\u30E7\u30D6</strong><span>\u672A\u5B8C\u4E86 ${w} / \u5168 ${I} \u4EF6 <span class="parking-fold-chevron" aria-hidden="true">\u203A</span></span></summary>
      <div class="parking-fold-content">${o}</div>
    </details></section>
    ${e?"":'<div class="section-note">\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002</div>'}
    <div class="parking-workspace"><div class="parking-grid">${b}</div>
      <aside class="parking-vehicle-catalog" aria-labelledby="parking-catalog-title">
        <details open><summary class="parking-catalog-heading"><strong id="parking-catalog-title">\u8ECA\u4E21\u4E00\u89A7</strong><span>${i.vehicles.length} \u53F0 <span class="parking-fold-chevron" aria-hidden="true">\u2304</span></span></summary>
          ${kc(i)}
        </details>
      </aside>
    </div>`)}async function oh(){let i=new URLSearchParams({limit:"50",offset:String(dn)});Pe.site.type==="headquarters"&&i.set("siteId",Pe.site.id),pi&&i.set("status",pi),Pn&&i.set("search",Pn);let e=await Me(`/api/v1/reservations?${i}`);Xo=e.items;let t=e.items.map(r=>{let a=r.status==="reserved"&&Ke("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-checkin" data-id="${A(r.id)}">\u8CB8\u51FA\u624B\u7D9A\u304D</button> <button class="btn btn-sm btn-quiet" data-action="reservation-cancel" data-id="${A(r.id)}">\u30AD\u30E3\u30F3\u30BB\u30EB</button>`:r.status==="checked_in"&&Ke("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-return" data-id="${A(r.id)}">\u8FD4\u5374\u624B\u7D9A\u304D</button>`:'<span class="secondary">\u2014</span>';return`<tr>
      <td class="primary-cell" data-label="\u4E88\u7D04\u756A\u53F7">${A(r.reservation_code)}<span class="secondary">${A(r.site_name)}</span></td>
      <td data-label="\u304A\u5BA2\u69D8">${A(r.guest_name)}<span class="secondary">${A(r.guest_phone)}</span></td>
      <td data-label="\u5229\u7528\u671F\u9593">${Tc(r.start_at)}<span class="secondary">\uFF5E ${Tc(r.end_at)}</span></td>
      <td data-label="\u8ECA\u4E21">${A(r.registration_number??"\u672A\u5272\u308A\u5F53\u3066")}<span class="secondary">${A(r.make??"")} ${A(r.model??"")}</span></td>
      <td data-label="\u72B6\u614B">${Xn(r.status)}${r.checked_out_by_name?`<span class="secondary">\u8CB8\u51FA\u62C5\u5F53\uFF1A${A(r.checked_out_by_name)}</span>`:""}${r.returned_by_name?`<span class="secondary">\u8FD4\u5374\u62C5\u5F53\uFF1A${A(r.returned_by_name)}</span>`:""}</td>
      <td data-label="\u53D7\u4ED8\u64CD\u4F5C">${a}</td>
    </tr>`}).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u4E88\u7D04</option>${["reserved","checked_in","completed","cancelled"].map(r=>`<option value="${r}" ${pi===r?"selected":""}>${Bi(r)}</option>`).join("")}</select>`,s=[Pe.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${A(Pe.site.id)}">${Et("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"",Ke("reservations:write")?`<button class="btn btn-primary" data-modal="reservation">${Et("plus")} \u4E88\u7D04\u3092\u4F5C\u6210</button>`:""].join("");$i(`${Wi("\u4E88\u7D04\u30FB\u53D7\u4ED8","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059",s)}
    ${jo("\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22",n)}
    ${Qo(["\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217","\u304A\u5BA2\u69D8\u60C5\u5831","\u5229\u7528\u671F\u9593","\u8ECA\u4E21","\u72B6\u614B","\u64CD\u4F5C"],t,"\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044")}
    ${Fc(e.items.length)}`)}async function Hr(i){try{let e=Pe?.site.id===i?Pe.site:(await Bc(),Lt.find(s=>s.id===i));if(!e||e.type==="headquarters")throw new Error("invalid_site");let t=await Me(`/api/v1/employees?${new URLSearchParams({siteId:i,includeDisabled:"true"})}`);Dc=t.items,th=i,Vi="employees";let n=document.createElement("div");n.className="overlay",bt(n,`<section class="modal employee-modal" role="dialog" aria-modal="true" aria-labelledby="employee-modal-title">
      <header class="modal-head"><div><h2 id="employee-modal-title">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</h2><p>${A(e.name)} \xB7 \u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
      <div class="modal-body">
        <form class="employee-create" data-form="employee">
          <input type="hidden" name="siteId" value="${A(i)}">
          <label class="field"><span class="field-label">\u30B9\u30BF\u30C3\u30D5\u540D</span><input name="name" maxlength="120" required placeholder="\u6C0F\u540D\u3092\u5165\u529B"></label>
          <button class="btn btn-primary" type="submit">${Et("plus")} \u8FFD\u52A0</button>
        </form>
        <div class="employee-list">${t.items.length?t.items.map(s=>`<div class="employee-row">
          <span class="${s.status==="disabled"?"employee-disabled":""}">${A(s.name)}${s.status==="disabled"?"<small>\uFF08\u7121\u52B9\uFF09</small>":""}</span>
          <div><button class="btn btn-sm" data-action="employee-edit" data-id="${A(s.id)}">\u7DE8\u96C6</button>
          <button class="btn btn-sm ${s.status==="active"?"btn-quiet":""}" data-action="employee-toggle" data-id="${A(s.id)}" data-status="${s.status==="active"?"disabled":"active"}">${s.status==="active"?"\u7121\u52B9\u306B\u3059\u308B":"\u518D\u958B"}</button></div>
        </div>`).join(""):'<div class="empty">\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}</div>
      </div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
    </section>`),Gt.append(n),n.addEventListener("click",s=>{s.target===n&&Qt()})}catch(e){Gr=null,Xe(st(e.message),!0)}}async function lh(i,e){let n=(await Me(`/api/v1/employees?${new URLSearchParams({siteId:i.site_id})}`)).items.map(r=>`<option value="${A(r.id)}">${A(r.name)}</option>`).join(""),s=e==="checked_in"?"\u8CB8\u51FA":"\u8FD4\u5374";cn(`${s}\u624B\u7D9A\u304D`,`${A(i.registration_number??"")} \xB7 \u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E`,`
    <input type="hidden" name="id" value="${A(i.id)}">
    <input type="hidden" name="status" value="${e}">
    ${Ps("employeeId","\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5",`<option value="">\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${n}`)}
    ${n?"":`<p class="section-note">\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><button type="button" class="btn" data-action="employee-roster" data-site-id="${A(i.site_id)}">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F</button>`}
  `,"reservation-transition",`${s}\u3092\u78BA\u5B9A`)}function et(i,e,t="text",n="",s="",r=!1,a=""){return`<div class="field ${a}"><label for="f-${i}">${e}</label><input id="f-${i}" name="${i}" type="${t}" value="${A(n)}" placeholder="${A(s)}" ${r?"required":""}></div>`}function Ps(i,e,t,n=!0){return`<div class="field"><label for="f-${i}">${e}</label><select id="f-${i}" name="${i}" ${n?"required":""}>${t}</select></div>`}function cn(i,e,t,n,s="\u4FDD\u5B58"){Vi=n;let r=document.createElement("div");r.className=n==="vehicle"?"overlay vehicle-create-overlay":"overlay",n==="vehicle"?bt(r,`<section class="modal vehicle-create-modal" role="dialog" aria-modal="true" aria-labelledby="vehicle-create-title">
      <form data-form="${n}" class="vehicle-create-form">
        <header class="vehicle-create-header"><h2 id="vehicle-create-title">${i}</h2>
          <div class="vehicle-create-actions">
            <button type="button" class="btn vehicle-cancel" data-action="close-modal">\u30AD\u30E3\u30F3\u30BB\u30EB</button>
            <button type="submit" class="btn btn-primary vehicle-save">${s}</button>
            <button type="button" class="vehicle-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button>
          </div>
        </header>
        <div class="vehicle-create-body">${t}</div>
      </form>
    </section>`):bt(r,`<section class="modal" role="dialog" aria-modal="true"><header class="modal-head"><div><h2>${i}</h2><p>${e}</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header><form data-form="${n}"><div class="modal-body">${t}</div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u30AD\u30E3\u30F3\u30BB\u30EB</button><button type="submit" class="btn btn-primary">${s}</button></footer></form></section>`),Gt.append(r),r.addEventListener("click",a=>{a.target===r&&Qt()})}function Qt(){Vi==="vehicle"&&(hn?.dispose(),hn=null,bn=[],Yo=[]),ze(".overlay")?.remove(),Vi="",Gr=null}function Oc(){window.clearTimeout(Rc),Ls?.close(),Ls=null}async function Uv(i){if(!Pe?.isAdmin)return;let e=await Me("/api/v1/auth/switch-site",{method:"POST",body:JSON.stringify({siteId:i})});await ch(e)}async function Nv(i){if(!Pe?.isAdmin)return;let e=await Me("/api/v1/auth/switch-account",{method:"POST",body:JSON.stringify({accountId:i})});await ch(e)}async function ch(i){let e=dt;Oc(),mi(),uh(),Wd(localStorage,pt,e,i.accessToken),pt=i.accessToken,Pe=null,dt="dashboard",localStorage.setItem(Ns,dt),history.replaceState(null,"",di(dt)),await Zo()}async function Fv(){if(!(await fetch("/api/v1/auth/end-site",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error");let e=Vo(localStorage);if(!e)return;if(Oc(),mi(),uh(),pt=e.token,!await Wr("default")){pt="",Pe=null,Oi(localStorage),ks();return}let n=e.page;Fs.includes(n)&&(dt=n,localStorage.setItem(Ns,dt),history.replaceState(null,"",di(dt))),Pe=null,await Zo()}function uh(){Lt=[],Wo=[],Gi="",Yn=!1,Dc=[],Xo=[],Hi=[],Uc=[],wt=null}function dh(){return`<section class="vehicle-dates-section" aria-labelledby="vehicle-dates-title">
    <div class="vehicle-section-heading"><h3 id="vehicle-dates-title">\u8ECA\u691C\u30FB\u6CD5\u5B9A\u70B9\u691C</h3>
      <p>\u65E5\u4ED8\u3092\u767B\u9332\u3059\u308B\u3068\u8ECA\u4E21\u60C5\u5831\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</p></div>
    <div class="vehicle-dates-grid">
      <label class="field"><span class="field-label">\u8ECA\u691C\u6E80\u4E86\u65E5</span><input type="date" name="inspectionExpiryDate"></label>
      <label class="field"><span class="field-label">\u6CD5\u5B9A\u70B9\u691C\u65E5</span><input type="date" name="statutoryInspectionDate"></label>
    </div>
  </section>`}function hh(i,e,t=[]){let n=!e&&Ke("parking:admin");return`<fieldset class="option-fields" data-vehicle-option-catalog><legend>\u30AA\u30D7\u30B7\u30E7\u30F3</legend>
    <div class="vehicle-catalog-choice-list">${i.vehicle_options.map(s=>`<div class="vehicle-catalog-choice">
      <label class="check-label"><input type="checkbox" name="parkingOptions" value="${A(s.name)}"
        ${t.includes(s.name)?"checked":""} ${e?"disabled":""}>${A(s.name)}</label>
      ${n?`<button class="btn btn-sm btn-quiet" type="button" data-action="vehicle-option-delete"
        data-id="${A(s.id)}" aria-label="${A(s.name)}\u3092\u524A\u9664">\u524A\u9664</button>`:""}
    </div>`).join("")||'<span class="status-empty">\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093\u3002</span>'}</div>
    ${n?`<div class="catalog-inline-add"><label><span>\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0</span>
      <input name="newVehicleOption" maxlength="40" autocomplete="off"></label>
      <button class="btn btn-sm" type="button" data-action="vehicle-option-add">\u8FFD\u52A0</button></div>`:""}
  </fieldset>`}function fh(i,e,t=[]){let n=!e&&Ke("parking:admin");return`<fieldset class="status-fields" data-vehicle-status-catalog><legend>\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9</legend>
    <div class="vehicle-catalog-choice-list">${i.statuses.map(s=>`<div class="vehicle-catalog-choice">
      <label class="check-label"><input type="checkbox" name="parkingStatusIds" value="${A(s.id)}"
        ${t.includes(String(s.id))?"checked":""} ${e?"disabled":""}>${A(s.icon)} ${A(s.name)}</label>
      ${n?`<button class="btn btn-sm btn-quiet" type="button" data-action="vehicle-status-delete"
        data-id="${A(s.id)}" aria-label="${A(s.name)}\u3092\u524A\u9664">\u524A\u9664</button>`:""}
    </div>`).join("")||'<span class="status-empty">\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9\u306F\u3042\u308A\u307E\u305B\u3093\u3002</span>'}</div>
    ${n?`<div class="catalog-inline-add catalog-status-add">
      <label><span>\u72B6\u614B\u540D</span><input name="newVehicleStatus" maxlength="40" autocomplete="off"></label>
      <label><span>\u30A2\u30A4\u30B3\u30F3</span><input name="newVehicleStatusIcon" maxlength="8" placeholder="\u{1F514}" autocomplete="off"></label>
      <button class="btn btn-sm" type="button" data-action="vehicle-status-add">\u8FFD\u52A0</button>
    </div>`:""}
  </fieldset>`}function kv(i,e=!1,t=!1){let n=!i,s=i??Sv,r={body:"\u5916\u88C5\u30FB\u5185\u88C5\u7CFB",electrical:"\u8ECA\u691C\u8A3C\u30FB\u96FB\u88C5\u7CFB",basic:"\u57FA\u672C\u60C5\u5831",custom:"\u8FFD\u52A0\u9805\u76EE"},a=(d,h)=>{let f=A(d.id);if(d.field_type==="rating")return`<input type="hidden" data-assessment-id="${f}" ${n?"disabled":""}>
        <div class="rating-control" role="group" aria-label="${A(d.name)}\u306E\u8A55\u4FA1">${[1,2,3,4,5].map(m=>`<button type="button" data-action="vehicle-rating" data-rating-assessment-id="${f}"
              data-score="${m}" aria-label="${m}\u70B9" aria-pressed="false" ${n?"disabled":""}>${m}</button>`).join("")}</div>`;if(d.field_type==="checkbox")return`${d.suffix?`<span class="assessment-field-suffix">${A(d.suffix)}</span>`:""}
          <input type="checkbox" data-assessment-id="${f}" aria-labelledby="${h}" ${n?"disabled":""}>`;let g=d.built_in_key==="registration_month",x=d.built_in_key==="registration_year";return`<input data-assessment-id="${f}"
      type="${d.field_type==="number"?"number":"text"}"
      ${d.field_type==="number"?`min="${g?1:0}" ${g?'max="12"':x?`max="${new Date().getFullYear()}"`:'max="999999999999"'} step="1" inputmode="numeric" maxlength="12" ${g?'placeholder="1\u301C12"':""}`:'maxlength="500"'}
      aria-labelledby="${h}" ${n?"disabled":""}>${d.suffix?`<span class="assessment-field-suffix">${A(d.suffix)}</span>`:""}`},o=Object.entries(r).map(([d,h])=>{let f=s.assessment_fields.filter(g=>(g.group_key??"custom")===d);return f.length?`<section class="assessment-group"><h4>${h}</h4><div class="assessment-field-grid">
      ${f.map(g=>{let x=`assessment-label-${A(g.id)}`;return`<div class="assessment-field">
        <span id="${x}">${A(g.name)}</span>
        <div class="assessment-field-control">${a(g,x)}</div>
      </div>`}).join("")}
    </div></section>`:""}).join(""),l=s.parking_lots.find(d=>d.is_active),c=n?`<input type="hidden" name="parkingLotId" value="" disabled>
       <p class="default-location-note">\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u767B\u9332\u5148\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002</p>`:l?`<input type="hidden" name="parkingLotId" value="${A(l.id)}">
       <p class="default-location-note"><span>\u8FFD\u52A0\u3057\u305F\u8ECA\u4E21\u306F</span>\u300C<strong>${A(l.name)}</strong>\u300D<span>\u306B\u767B\u9332\u3055\u308C\u307E\u3059\u3002</span></p>`:'<input type="hidden" name="parkingLotId" value=""><p class="default-location-note">\u6709\u52B9\u306A\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u306A\u3044\u305F\u3081\u3001\u8ECA\u4E21\u306F\u672A\u914D\u7F6E\u3067\u767B\u9332\u3055\u308C\u307E\u3059\u3002</p>';return`<div class="vehicle-parking-form">
    ${n?`<p class="vehicle-catalog-message" role="${e||t?"status":"note"}">${t?"\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u306E\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002":e?"\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026":"\u767B\u9332\u5148\u306E\u5E97\u8217\u306E\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002"}${t?' <button class="btn btn-sm" type="button" data-action="vehicle-catalog-retry">\u518D\u8A66\u884C</button>':""}</p>`:""}
    <div class="form-row vehicle-class-row">
      <label>\u30AF\u30E9\u30B9<select name="parkingClass" data-vehicle-class required ${n||!s.vehicle_classes.length?"disabled":""}>
        ${s.vehicle_classes.map(d=>`<option value="${A(d.name)}">${A(d.name)}</option>`).join("")||`<option value="">${n?"\u5E97\u8217\u9078\u629E\u5F8C\u306B\u8AAD\u307F\u8FBC\u307F":"\u8ECA\u4E21\u30AF\u30E9\u30B9\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093"}</option>`}
      </select></label>${c}
    </div>
    ${hh(s,n)}
    ${fh(s,n)}
    ${dh()}
    <section class="assessment-section">
      <h3>\u8ECA\u4E21\u72B6\u614B\u8A55\u4FA1\u30B7\u30FC\u30C8</h3>${o||'<p class="assessment-empty">\u8A55\u4FA1\u9805\u76EE\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002</p>'}
      <label class="assessment-notes-field">\u5099\u8003\u6B04
        <textarea name="parkingNotes" rows="4" maxlength="5000"
          placeholder="\u8ECA\u4E21\u306B\u3064\u3044\u3066\u5171\u6709\u3057\u305F\u3044\u3053\u3068\u3092\u8A18\u9332\u3067\u304D\u307E\u3059\u3002" ${n?"disabled":""}></textarea>
      </label>
    </section>
    <section class="inspection-section">
      <h3>\u8ECA\u4F53\u306E\u640D\u50B7\u4F4D\u7F6E</h3>
      ${s.damage_types.length?`<div class="damage-type-palette" ${n?"":"data-vehicle-damage-palette"}>${s.damage_types.map(d=>`<button class="damage-type-button" type="button" data-damage-type="${A(d.id)}"
            style="--damage-color:${A(d.color)}" ${n?"disabled":""}>${A(d.icon)} ${A(d.name)}</button>`).join("")}</div>
          <p class="inspection-hint" aria-live="polite">\u50B7\u307E\u305F\u306F\u51F9\u307F\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u305F\u307E\u307E\u30013D\u8ECA\u4F53\u306E\u8868\u9762\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
          <div class="inspection-car-view" ${n?"":"data-vehicle-inspection-view"}
            ${n?'role="note"':'role="application"'} aria-label="3D\u8ECA\u4E21\u30E2\u30C7\u30EB">${n?'<p class="inspection-preview-note">\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u30683D\u8ECA\u4E21\u30E2\u30C7\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002</p>':""}</div>
          <div class="inspection-mark-list" ${n?"":"data-vehicle-inspection-marks"}></div>`:'<p class="assessment-empty">\u640D\u50B7\u306E\u7A2E\u985E\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002</p>'}
    </section>
  </div>`}function Vr(i,e,t=!1,n=!1){hn?.dispose(),hn=null,bt(i,kv(e,t,n)),Yo=e?.damage_types??[];let s=i.closest("form")?.querySelector('button[type="submit"]');if(s&&(s.disabled=t||!e||!e.vehicle_classes.length),!e?.damage_types.length)return;let r=ze("[data-vehicle-damage-palette]",i),a=ze("[data-vehicle-inspection-view]",i);if(!r||!a)return;hn=Ec(a,e.damage_types,bn,l=>{bn=l,mh(l,e.damage_types,i)},r);let o=ze(".parking-inspection-canvas",a);o&&o.setAttribute("aria-label",Rs("3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332",en()))}async function ph(i,e,t){bn=[],Vr(i,null,!0);try{let n=await Me(`/api/v1/parking/vehicle-catalog?${new URLSearchParams({siteId:e})}`);if(t&&t.value!==e)return;Vr(i,n)}catch(n){if(t&&t.value!==e)return;hn?.dispose(),hn=null,Vr(i,null,!1,!0);let s=i.closest("form")?.querySelector('button[type="submit"]');s&&(s.disabled=!0),Xe(st(n.message),!0)}}async function Ov(i){let e=i.querySelector('[name="siteId"]');if(!e?.value)throw new Error("site_required");let t=Wn(i,"parkingOptions"),n=Wn(i,"parkingStatusIds"),s=await Me(`/api/v1/parking/vehicle-catalog?${new URLSearchParams({siteId:e.value})}`),r=ze("[data-vehicle-option-catalog]",i),a=ze("[data-vehicle-status-catalog]",i);r&&(r.outerHTML=hh(s,!1,t)),a&&(a.outerHTML=fh(s,!1,n))}function mh(i,e,t){let n=ze("[data-vehicle-inspection-marks]",t);n&&bt(n,i.length?i.map(s=>{let r=e.find(a=>a.id===s.damage_type_id);return r?`<span class="inspection-mark-entry">${A(r.icon)} ${A(r.name)}
      <button type="button" data-action="vehicle-damage-remove" data-mark-id="${A(s.id)}"
        aria-label="\u640D\u50B7\u30DE\u30FC\u30AF\u3092\u524A\u9664">\xD7</button></span>`:""}).join(""):'<span class="inspection-mark-empty">\u640D\u50B7\u4F4D\u7F6E\u306F\u307E\u3060\u8A18\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002</span>')}function Bv(){if(!Ke("parking:admin")||!Ac)return;let i=document.createElement("div");i.className="overlay",bt(i,`<section class="modal parking-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="parking-settings-title">
    <header class="modal-head"><div><h2 id="parking-settings-title">\u99D0\u8ECA\u5834\u306E\u7BA1\u7406\u30FB\u8A2D\u5B9A</h2>
      <p>\u99D0\u8ECA\u5834\u306E\u4F4D\u7F6E\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3001\u5E97\u8217\u304B\u3089\u306E\u8DDD\u96E2\u3001\u8ECA\u4E21\u9805\u76EE\u3092\u307E\u3068\u3081\u3066\u7BA1\u7406\u3057\u307E\u3059\u3002</p></div>
      <button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
    <div class="modal-body">${Ac}</div>
    <footer class="modal-foot"><button class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
  </section>`),Gt.append(i),Vi="parking-settings",i.addEventListener("click",e=>{e.target===i&&Qt()})}async function Fr(i,e=""){try{if(["account"].includes(i)&&await Lv(),i==="site")cn("\u5E97\u8217\u3092\u8FFD\u52A0","\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${et("code","\u5E97\u8217\u30B3\u30FC\u30C9","text","","\u4F8B\uFF1ATKY-001",!0)}
        ${Ps("type","\u5E97\u8217\u7A2E\u5225",'<option value="direct">\u76F4\u55B6\u5E97</option><option value="franchise">\u52A0\u76DF\u5E97</option>')}
        ${et("name","\u5E97\u8217\u540D","text","","\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0,"full")}
        ${et("address","\u4F4F\u6240","text","","\u4F4F\u6240\uFF08\u4EFB\u610F\uFF09",!1,"full")}
        ${et("phone","\u96FB\u8A71\u756A\u53F7","tel","","\u96FB\u8A71\u756A\u53F7\uFF08\u4EFB\u610F\uFF09")}
      </div>`,"site");else if(i==="site-contact"){let t=Lt.find(n=>n.id===e);if(!t)throw new Error("not_found");cn("\u5E97\u8217\u60C5\u5831\u3092\u7DE8\u96C6",t.name,`<input type="hidden" name="id" value="${A(t.id)}"><div class="form-grid">
        ${et("address","\u4F4F\u6240","text",t.address??"","\u4F4F\u6240\uFF08\u4EFB\u610F\uFF09",!1,"full")}
        ${et("phone","\u96FB\u8A71\u756A\u53F7","tel",t.phone??"","\u96FB\u8A71\u756A\u53F7\uFF08\u4EFB\u610F\uFF09")}
      </div>`,"site-contact")}else if(i==="account"){let t=e||Gi,n=Lt.find(s=>s.id===t);if(!n||n.type==="headquarters")throw new Error("invalid_site");cn("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0",`${A(n.name)} \xB7 \u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059`,`<div class="form-grid">
        <input type="hidden" name="siteId" value="${A(n.id)}">
        ${et("username","\u30A2\u30AB\u30A6\u30F3\u30C8\u540D","text","","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57",!0)}
        ${et("password","\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9","password","","12 \u6587\u5B57\u4EE5\u4E0A",!0)}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${Zd()}</div>
      </div>`,"account")}else if(i==="edit-account"){let t=Hi.find(n=>n.id===e);if(!t)throw new Error("not_found");cn("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6",`${A(t.site_name)} \xB7 ${A(t.username)}`,`<input type="hidden" name="id" value="${A(t.id)}"><div class="form-grid">
        ${Ps("status","\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B",`<option value="active" ${t.status==="active"?"selected":""}>\u6709\u52B9</option><option value="disabled" ${t.status==="disabled"?"selected":""}>\u7121\u52B9</option>`)}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${Zd(wv(t.permissions))}</div>
      </div>`,"edit-account")}else if(i==="reset-account-password"){let t=Hi.find(n=>n.id===e);if(!t)throw new Error("not_found");cn("\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4",`${A(t.site_name)} \xB7 ${A(t.username)}`,`
        <input type="hidden" name="id" value="${A(t.id)}">
        <div class="form-grid">
          <label class="field"><span class="field-label">\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9</span><input name="password" type="password" autocomplete="new-password" minlength="12" maxlength="128" placeholder="12\uFF5E128 \u6587\u5B57" required></label>
          <label class="field"><span class="field-label">\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\uFF08\u78BA\u8A8D\uFF09</span><input name="confirmPassword" type="password" autocomplete="new-password" minlength="12" maxlength="128" placeholder="\u3082\u3046\u4E00\u5EA6\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" required></label>
          <p class="section-note field full">\u5909\u66F4\u524D\u306B\u30ED\u30B0\u30A4\u30F3\u6E08\u307F\u306E\u7AEF\u672B\u306F\u3001\u305D\u306E\u307E\u307E\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u304C\u7D9A\u304D\u307E\u3059\u3002</p>
        </div>`,"reset-account-password","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4")}else if(i==="customer"||i==="edit-customer"){let t=i==="edit-customer"?nh.find(n=>n.id===e):void 0;if(i==="edit-customer"&&!t)throw new Error("not_found");cn(t?"\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u7DE8\u96C6":"\u304A\u5BA2\u69D8\u3092\u8FFD\u52A0","\u4E88\u7D04\u4F5C\u6210\u6642\u306B\u6C0F\u540D\u3084\u96FB\u8A71\u756A\u53F7\u304B\u3089\u691C\u7D22\u3067\u304D\u307E\u3059\u3002\u4F4F\u6240\u306A\u3069\u306F\u4EFB\u610F\u3067\u3059\u3002",`
          ${t?`<input type="hidden" name="id" value="${A(t.id)}">`:""}
          <div class="form-grid">
            ${et("name","\u6C0F\u540D","text",t?.name??"","\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
            ${et("nameKana","\u30D5\u30EA\u30AC\u30CA","text",t?.name_kana??"","\u30D5\u30EA\u30AC\u30CA\uFF08\u4EFB\u610F\uFF09")}
            ${et("phone","\u96FB\u8A71\u756A\u53F7","tel",t?.phone??"","\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
            ${et("email","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","email",t?.email??"","\u4EFB\u610F")}
            ${et("birthDate","\u751F\u5E74\u6708\u65E5","date",zr(t?.birth_date))}
            ${et("workplaceSchool","\u304A\u52E4\u3081\u5148\u30FB\u5B66\u6821","text",t?.workplace_school??"","\u4EFB\u610F")}
            ${et("address","\u4F4F\u6240","text",t?.address??"","\u4EFB\u610F",!1,"full")}
            <div class="field full"><span class="field-label">\u7DCA\u6025\u9023\u7D61\u5148\uFF08\u4EFB\u610F\uFF09</span></div>
            ${et("emergencyContactName","\u6C0F\u540D","text",t?.emergency_contact_name??"","\u4EFB\u610F")}
            ${et("emergencyContactRelationship","\u7D9A\u67C4","text",t?.emergency_contact_relationship??"","\u4EFB\u610F")}
            ${et("emergencyContactPhone","\u96FB\u8A71\u756A\u53F7","tel",t?.emergency_contact_phone??"","\u4EFB\u610F",!1,"full")}
          </div>`,t?"edit-customer":"customer")}else if(i==="employee-edit"){let t=Dc.find(n=>n.id===e);if(!t)throw new Error("not_found");cn("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059",`
        <input type="hidden" name="id" value="${A(t.id)}">
        <input type="hidden" name="siteId" value="${A(t.site_id)}">
        ${et("name","\u30B9\u30BF\u30C3\u30D5\u540D","text",t.name,"\u6C0F\u540D\u3092\u5165\u529B",!0)}
      `,"employee-edit")}else if(i==="vehicle"){let t=Ke("parking:read")&&Ke("parking:write"),n=t?await Me("/api/v1/parking/vehicle-catalog"):null,s=`<input type="hidden" name="siteId" value="${A(Pe.site.id)}">`;bn=[],Yo=n?.damage_types??[],cn("\u8ECA\u4E21\u3092\u8FFD\u52A0","\u8ECA\u4E21\u60C5\u5831\u3068\u99D0\u8ECA\u5834\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="vehicle-create-content">
        <div class="vehicle-registration-field">
          ${et("registrationNumber","\u30CA\u30F3\u30D0\u30FC","text","","\u4F8B: \u54C1\u5DDD 500 \u3042 1234",!0)}
        </div>
        ${s}
        ${t?"":dh()}
        ${t?"<div data-vehicle-parking-fields></div>":""}
      </div>`,"vehicle");let r=ze("[data-vehicle-parking-fields]");r&&n&&Vr(r,n)}else if(i==="edit-vehicle"){let t=Uc.find(s=>s.id===e);if(!t)throw new Error("not_found");Pe.site.type==="headquarters"&&await Bc();let n=Pe.site.type==="headquarters"?Ps("siteId","\u6240\u5C5E\u5E97\u8217",Dv(t.site_id,!0)):`<input type="hidden" name="siteId" value="${A(Pe.site.id)}">`;cn("\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6",`${A(t.registration_number)} \xB7 \u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093`,`<input type="hidden" name="id" value="${A(t.id)}"><div class="form-grid">
        ${et("registrationNumber","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","text",t.registration_number,"",!0)}
        ${et("vin","\u8ECA\u53F0\u756A\u53F7","text",t.vin??"")}
        ${et("make","\u30E1\u30FC\u30AB\u30FC","text",t.make)}
        ${et("model","\u8ECA\u7A2E","text",t.model)}
        ${et("modelYear","\u5E74\u5F0F","number",String(t.model_year??""))}
        ${et("inspectionExpiryDate","\u8ECA\u691C\u6E80\u4E86\u65E5","date",zr(t.inspection_expiry_date))}
        ${et("statutoryInspectionDate","\u6CD5\u5B9A\u70B9\u691C\u65E5","date",zr(t.statutory_inspection_date))}
        ${n}
        ${Ps("status","\u8ECA\u4E21\u306E\u72B6\u614B",["available","rented","maintenance","retired"].map(s=>`<option value="${s}" ${t.status===s?"selected":""}>${Bi(s)}</option>`).join(""))}
      </div>`,"edit-vehicle")}else if(i==="reservation"){let t=new Date(Date.now()+18e5),n=new Date(t.getTime()+1440*6e4),s=o=>new Date(o.getTime()-o.getTimezoneOffset()*6e4).toISOString().slice(0,16),r=await Me("/api/v1/reservations/vehicle-catalog"),a=Pe.site.type==="headquarters"?`<input type="hidden" name="siteId" value="${A(Pe.site.id)}">`:"";cn("\u4E88\u7D04\u3092\u4F5C\u6210","\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        <input type="hidden" name="customerId">
        <label class="field"><span class="field-label">\u304A\u5BA2\u69D8\u306E\u6C0F\u540D</span><input name="guestName" type="text" placeholder="\u6C0F\u540D\u30FB\u30D5\u30EA\u30AC\u30CA\u3067\u691C\u7D22" data-customer-search required></label>
        <label class="field"><span class="field-label">\u96FB\u8A71\u756A\u53F7</span><input name="guestPhone" type="tel" placeholder="\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22" data-customer-search required></label>
        <div class="customer-suggestions field full" data-customer-suggestions aria-live="polite"></div>
        ${et("startAt","\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642","datetime-local",s(t),"",!0)}
        ${et("endAt","\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642","datetime-local",s(n),"",!0)}
        ${a}
        ${Ps("vehicleClass","\u5E0C\u671B\u30AF\u30E9\u30B9",`<option value="">\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${r.classes.map(o=>`<option value="${A(o.name)}">${A(o.name)}</option>`).join("")}`)}
        <fieldset class="reservation-options field full"><legend class="field-label">\u8ECA\u4E21\u306E\u5E0C\u671B\u6761\u4EF6\uFF08\u4EFB\u610F\uFF09</legend>
          ${r.options.map(o=>`<label class="check-item"><input type="checkbox" name="reservationOptions" value="${A(o.name)}" data-reservation-filter><span>${A(o.name)}</span></label>`).join("")||'<span class="secondary">\u9078\u629E\u3067\u304D\u308B\u6761\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093</span>'}
        </fieldset>
        <fieldset class="available-vehicles field full"><legend class="field-label">\u7A7A\u304D\u8ECA\u4E21</legend>
          <div data-available-vehicles role="status" aria-live="polite">\u5229\u7528\u65E5\u6642\u3001\u5E0C\u671B\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3059\u308B\u3068\u7A7A\u304D\u8ECA\u4E21\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002</div>
        </fieldset>
      </div>`,"reservation","\u4E88\u7D04\u3092\u4FDD\u5B58")}else if(i==="parking-lot-layout"){let t=wt?.parking_lots.find(n=>String(n.id)===e);if(!t)throw new Error("not_found");cn("\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8",`${A(t.name)} \xB7 \u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A`,`
        <input type="hidden" name="id" value="${A(t.id)}"><div class="form-grid">
          ${et("name","\u30A8\u30EA\u30A2\u540D","text",t.name,"",!0)}
          ${et("area_height","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09","number",String(t.area_height),"160\uFF5E600",!0)}
          ${et("area_width","\u30A8\u30EA\u30A2\u306E\u5E45\uFF08%\uFF09","number",String(t.area_width),"30\uFF5E100",!0)}
          ${et("capacity","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09","number",t.capacity===null?"":String(t.capacity),"0\uFF5E1000")}
          ${et("navigation_url","Google Maps \u6848\u5185URL","url",t.navigation_url,"https://maps.google.com/\u2026",!1,"full")}
          ${et("class_priority","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09","text",t.class_priority.join(", "),"",!1,"full")}
          <label class="field"><span class="field-label">\u7A3C\u50CD\u72B6\u614B</span><select name="is_active"><option value="true" ${t.is_active?"selected":""}>\u904B\u7528\u4E2D</option><option value="false" ${t.is_active?"":"selected"}>\u505C\u6B62\u4E2D</option></select></label>
        </div>`,"parking-lot-layout","\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58")}}catch(t){Xe(st(t.message),!0)}}async function Bc(){Lt.length||(Lt=(await Me("/api/v1/sites")).items)}function Wn(i,e){return[...i.querySelectorAll(`input[name="${e}"]:checked`)].map(t=>t.value)}async function gh(i){let e=i.closest('form[data-form="reservation"]'),t=ze("[data-customer-suggestions]",e??document);if(!e||!t)return;let n=i.value.trim(),s=++Cv;e.dataset.customerRequestId=String(s);let r=ze('[name="customerId"]',e);if(r&&(r.value=""),!n){Cc=[],bt(t,"");return}bt(t,'<span class="secondary">\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026</span>');try{let a=await Me(`/api/v1/customers?${new URLSearchParams({search:n,limit:"8"})}`);if(!document.body.contains(e)||i.value.trim()!==n||e.dataset.customerRequestId!==String(s))return;Cc=a.items,bt(t,a.items.length?`<span class="field-label">\u767B\u9332\u6E08\u307F\u306E\u304A\u5BA2\u69D8</span><div class="customer-suggestion-list">${a.items.map(o=>`<button type="button" class="customer-suggestion" data-action="customer-select" data-id="${A(o.id)}">
          <strong>${A(o.name)}</strong>${o.name_kana?`<span>${A(o.name_kana)}</span>`:""}
          <small>${A(o.phone)}</small></button>`).join("")}</div>`:'<span class="secondary">\u8A72\u5F53\u3059\u308B\u304A\u5BA2\u69D8\u306F\u3044\u307E\u305B\u3093\u3002\u4E88\u7D04\u4FDD\u5B58\u6642\u306B\u6C0F\u540D\u3068\u96FB\u8A71\u756A\u53F7\u3067\u65B0\u898F\u767B\u9332\u3057\u307E\u3059\u3002</span>')}catch(a){if(!document.body.contains(e)||e.dataset.customerRequestId!==String(s))return;bt(t,`<span class="field-error">${A(st(a.message))}</span>`),Xe(st(a.message),!0)}}async function Kd(i){let e=ze("[data-available-vehicles]",i);if(!e)return;let t=++Rv;i.dataset.vehicleRequestId=String(t);let n=ze('[name="vehicleId"]:checked',i)?.value??"",s=new FormData(i),r=String(s.get("vehicleClass")??"").trim(),a=new Date(String(s.get("startAt")??"")),o=new Date(String(s.get("endAt")??""));if(!r||!Number.isFinite(a.getTime())||!Number.isFinite(o.getTime())||a>=o){bt(e,"\u5229\u7528\u65E5\u6642\u3001\u5E0C\u671B\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3059\u308B\u3068\u7A7A\u304D\u8ECA\u4E21\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002");return}bt(e,'<span class="secondary">\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026</span>');let l=new URLSearchParams({startAt:a.toISOString(),endAt:o.toISOString(),vehicleClass:r});Wn(i,"reservationOptions").forEach(c=>l.append("options",c));try{let c=await Me(`/api/v1/reservations/available-vehicles?${l}`);if(!document.body.contains(i)||i.dataset.vehicleRequestId!==String(t))return;bt(e,c.items.length?`<div class="available-vehicle-list">${c.items.map(u=>`<label class="available-vehicle">
          <input type="radio" name="vehicleId" value="${A(u.id)}" required ${u.id===n?"checked":""}>
          <span><strong>${A(u.registration_number)} \xB7 ${A(u.vehicle_class)}</strong>
          <small>${A([u.make,u.model].filter(Boolean).join(" "))} \xB7 ${A(u.parking_lot_name??"\u672A\u914D\u7F6E")}</small></span>
        </label>`).join("")}</div>`:'<span class="secondary">\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</span>')}catch(c){if(!document.body.contains(i)||i.dataset.vehicleRequestId!==String(t))return;bt(e,`<span class="field-error">${A(st(c.message))}</span>`),Xe(st(c.message),!0)}}function mi(){hn?.dispose(),hn=null,Nc=null,ze(".parking-inspection-overlay")?.remove()}function zv(i){let e=wt,t=e?.vehicles.find(r=>r.id===i);if(!e||!t||!e.damage_types.length)return;mi();let n=document.createElement("div");n.className="parking-inspection-overlay",bt(n,`<section class="parking-inspection-dialog" role="dialog" aria-modal="true">
    <header><div><h2>3D\u8ECA\u4E21\u691C\u67FB</h2><p>${A(t.plate)} \xB7 \u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002</p></div>
      <button class="btn btn-sm" type="button" data-action="parking-inspect3d-close">\u9589\u3058\u308B</button></header>
    <div class="parking-inspection-palette">${e.damage_types.map(r=>`<button type="button" data-damage-type="${A(r.id)}" style="--damage-color:${A(r.color)}">${A(r.icon)} ${A(r.name)}</button>`).join("")}</div>
    <div class="parking-inspection-view"></div>
  </section>`),Gt.append(n),Nc=i,hn=Ec(ze(".parking-inspection-view",n),e.damage_types,un.get(i)??t.inspection_marks,r=>un.set(i,r),ze(".parking-inspection-palette",n));let s=ze(".parking-inspection-canvas",n);s&&s.setAttribute("aria-label",Rs("3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332",en())),n.addEventListener("click",r=>{r.target===n&&mi()})}function Hv(i){let e=i.target.closest("[data-parking-drag]");if(!e||!Ke("parking:write")||!wt||i.button!==0||St)return;let t=Number(e.dataset.parkingDrag),n=e.closest(".parking-map-vehicle"),s=wt.vehicles.find(a=>a.id===t);if(!n||!s)return;i.preventDefault();let r=e.cloneNode(!0);r.className="parking-drag-ghost",r.style.left=`${i.clientX}px`,r.style.top=`${i.clientY}px`,document.body.append(r),St={vehicleId:t,pointerId:i.pointerId,source:n,ghost:r,clientX:i.clientX,clientY:i.clientY,startX:i.clientX,startY:i.clientY,moved:!1,frame:0},e.setPointerCapture(i.pointerId),St.frame=requestAnimationFrame(_h)}function Vv(i){let e=i.target.closest("[data-parking-resize]");if(!e||!Ke("parking:admin")||!wt||i.button!==0||Pt)return;let t=Number(e.dataset.parkingResize),n=wt.parking_lots.find(l=>l.id===t),s=e.closest(".parking-lot"),r=ze("[data-parking-map]",s??document),a=ze(".parking-grid");if(!n||!s||!r||!a)return;let o=a.getBoundingClientRect().width;o&&(i.preventDefault(),i.stopPropagation(),Pt={pointerId:i.pointerId,lotId:t,card:s,map:r,handle:e,startX:i.clientX,startY:i.clientY,width:n.area_width,height:n.area_height,gridWidth:o,nextWidth:n.area_width,nextHeight:n.area_height},e.setPointerCapture(i.pointerId),s.classList.add("parking-lot-resizing"))}function Gv(i){if(!Pt||i.pointerId!==Pt.pointerId)return;let e=Math.max(30,Math.min(100,Math.round(Pt.width+(i.clientX-Pt.startX)/Pt.gridWidth*100))),t=Math.max(160,Math.min(600,Math.round(Pt.height+i.clientY-Pt.startY)));Pt.nextWidth=e,Pt.nextHeight=t,Pt.card.style.setProperty("--parking-lot-width",`${e}%`),Pt.map.style.height=`${t}px`}async function jd(i,e=!1){if(!Pt||i.pointerId!==Pt.pointerId)return;let t=Pt;Pt=null,t.card.classList.remove("parking-lot-resizing");let n=wt?.parking_lots.find(s=>s.id===t.lotId);if(e||!n){t.card.style.setProperty("--parking-lot-width",`${t.width}%`),t.map.style.height=`${t.height}px`;return}if(!(t.nextWidth===t.width&&t.nextHeight===t.height))try{await Me(`/api/v1/parking/lots/${t.lotId}`,{method:"PATCH",body:JSON.stringify({area_width:t.nextWidth,area_height:t.nextHeight})}),await Vt()}catch(s){Xe(st(s.message),!0),t.card.style.setProperty("--parking-lot-width",`${t.width}%`),t.map.style.height=`${t.height}px`}}function _h(){if(!St||(St.frame=requestAnimationFrame(_h),!St.moved))return;let i=Math.min(90,window.innerHeight*.14),e=St.clientY,t=e<i?-Math.ceil(18*(1-e/i)):e>window.innerHeight-i?Math.ceil(18*(1-(window.innerHeight-e)/i)):0;t&&window.scrollBy(0,t)}function $v(i){!St||i.pointerId!==St.pointerId||(St.clientX=i.clientX,St.clientY=i.clientY,Math.abs(i.clientX-St.startX)+Math.abs(i.clientY-St.startY)>5&&(St.moved=!0),St.moved&&(St.ghost.style.left=`${i.clientX}px`,St.ghost.style.top=`${i.clientY}px`,document.querySelectorAll(".parking-map.drop-target").forEach(e=>e.classList.remove("drop-target")),document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]")?.classList.add("drop-target")))}function zc(i,e,t){let n=i.getBoundingClientRect();return{x:Math.max(0,Math.min(1,(e-n.left)/n.width)),y:Math.max(0,Math.min(1,(t-n.top)/n.height))}}function Wv(i){let e=i.target.closest("svg[data-marking-svg].editable");if(!e||!Ke("parking:admin")||Us!==Number(e.dataset.lotId)||i.button!==0||!wt)return;let t=zc(e,i.clientX,i.clientY);i.preventDefault(),tn={pointerId:i.pointerId,lotId:Number(e.dataset.lotId),x1:t.x,y1:t.y,svg:e},e.setPointerCapture(i.pointerId);let n=document.createElementNS("http://www.w3.org/2000/svg","line");n.classList.add("parking-marking-preview"),n.dataset.draftMarking="true",n.setAttribute("x1",String(t.x*1e3)),n.setAttribute("y1",String(t.y*1e3)),n.setAttribute("x2",String(t.x*1e3)),n.setAttribute("y2",String(t.y*1e3)),n.setAttribute("stroke",$r),n.setAttribute("stroke-width","7"),n.setAttribute("stroke-linecap","round"),e.append(n)}function Xv(i){if(!tn||tn.pointerId!==i.pointerId)return;let e=zc(tn.svg,i.clientX,i.clientY),t=tn.svg.querySelector('[data-draft-marking="true"]');t?.setAttribute("x2",String(e.x*1e3)),t?.setAttribute("y2",String(e.y*1e3))}async function qv(i){if(!tn||tn.pointerId!==i.pointerId)return;let e=tn;tn=null,e.svg.querySelector('[data-draft-marking="true"]')?.remove();let n=zc(e.svg,i.clientX,i.clientY);if(Math.hypot(n.x-e.x1,n.y-e.y1)<.005)return;let s=wt?.parking_lots.find(a=>a.id===e.lotId);if(!s)return;let r={id:crypto.randomUUID(),x1:e.x1,y1:e.y1,x2:n.x,y2:n.y,color:$r};try{await Me(`/api/v1/parking/lots/${s.id}`,{method:"PATCH",body:JSON.stringify({markings:[...s.markings,r]})}),await Vt()}catch(a){Xe(st(a.message),!0)}}function Yv(i){!tn||tn.pointerId!==i.pointerId||(tn.svg.querySelector('[data-draft-marking="true"]')?.remove(),tn=null)}async function Qd(i){if(!St||i.pointerId!==St.pointerId)return;let e=St;if(St=null,cancelAnimationFrame(e.frame),e.ghost.remove(),document.querySelectorAll(".parking-map.drop-target").forEach(c=>c.classList.remove("drop-target")),!e.moved)return;let t=document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]"),n=wt?.vehicles.find(c=>c.id===e.vehicleId);if(!t||!n)return;let s=t.getBoundingClientRect(),r=t.dataset.lotId?Number(t.dataset.lotId):null,a=r===null?n.position_x:Math.max(0,Math.min(1,(i.clientX-s.left)/s.width)),o=r===null?n.position_y:Math.max(0,Math.min(1,(i.clientY-s.top)/s.height)),l={vehicleId:n.id,lotId:n.parking_lot_id,x:n.position_x,y:n.position_y};try{await Me(`/api/v1/parking/vehicles/${n.id}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:r,position_x:a,position_y:o})}),Br.push(l),await Vt()}catch(c){Xe(st(c.message),!0)}}async function Jv(i){let e=i.target.closest("form[data-form]");if(!e)return;i.preventDefault();let t=e.dataset.form,n=new FormData(e),s=a=>String(n.get(a)??"").trim(),r=ze('button[type="submit"]',e);r&&r.setAttribute("disabled","true");try{if(t==="site")await Me("/api/v1/sites",{method:"POST",body:JSON.stringify({code:s("code"),name:s("name"),type:s("type"),address:s("address"),phone:s("phone")})});else if(t==="site-contact")await Me(`/api/v1/sites/${encodeURIComponent(s("id"))}/contact`,{method:"PATCH",body:JSON.stringify({address:s("address"),phone:s("phone")})});else if(t==="account")await Me("/api/v1/accounts",{method:"POST",body:JSON.stringify({siteId:s("siteId"),username:s("username"),password:s("password"),permissions:Wn(e,"permissions")})});else if(t==="edit-account"){let a={status:s("status"),permissions:Wn(e,"permissions")};await Me(`/api/v1/accounts/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify(a)})}else if(t==="reset-account-password"){let a=String(n.get("password")??""),o=String(n.get("confirmPassword")??"");if(a.length<12||a.length>128||a!==o)throw new Error("password_mismatch");await Me(`/api/v1/accounts/${encodeURIComponent(s("id"))}/password`,{method:"PATCH",body:JSON.stringify({password:a})})}else if(t==="employee"){await Me("/api/v1/employees",{method:"POST",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId"),o=Gr;Gr=null,Qt(),Xe("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002"),o?await lh(o.reservation,o.status):await Hr(a);return}else if(t==="employee-edit"){await Me(`/api/v1/employees/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId");Qt(),Xe("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await Hr(a);return}else if(t==="customer"||t==="edit-customer"){let a={name:s("name"),nameKana:s("nameKana")||null,phone:s("phone"),email:s("email")||null,birthDate:s("birthDate")||null,address:s("address")||null,emergencyContactName:s("emergencyContactName")||null,emergencyContactRelationship:s("emergencyContactRelationship")||null,emergencyContactPhone:s("emergencyContactPhone")||null,workplaceSchool:s("workplaceSchool")||null};await Me(t==="customer"?"/api/v1/customers":`/api/v1/customers/${encodeURIComponent(s("id"))}`,{method:t==="customer"?"POST":"PATCH",body:JSON.stringify(a)})}else if(t==="reservation-transition")await Me(`/api/v1/reservations/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({status:s("status"),employeeId:s("employeeId")})});else if(t==="vehicle"){let a={registrationNumber:s("registrationNumber"),inspectionExpiryDate:s("inspectionExpiryDate")||null,statutoryInspectionDate:s("statutoryInspectionDate")||null,siteId:s("siteId")};Ke("parking:read")&&Ke("parking:write")&&(a.parkingClass=s("parkingClass"),a.parkingOptions=Wn(e,"parkingOptions"),a.parkingNotes=s("parkingNotes").trim(),a.parkingLotId=s("parkingLotId")?Number(s("parkingLotId")):null,a.parkingStatusIds=Wn(e,"parkingStatusIds").map(Number),a.parkingUnwashed=!!n.get("parkingUnwashed"),a.parkingNoFuel=!!n.get("parkingNoFuel"),a.parkingNeedsRepair=!!n.get("parkingNeedsRepair"),a.parkingAssessmentValues=Object.fromEntries([...e.querySelectorAll("[data-assessment-id]")].map(o=>[o.dataset.assessmentId,o instanceof HTMLInputElement&&o.type==="checkbox"?o.checked:o.value])),a.parkingInspectionMarks=bn.map(o=>({id:o.id,damage_type_id:o.damage_type_id,x:o.x,y:o.y,...typeof o.world_x=="number"&&typeof o.world_y=="number"&&typeof o.world_z=="number"?{world_x:o.world_x,world_y:o.world_y,world_z:o.world_z}:{},...typeof o.world_nx=="number"&&typeof o.world_ny=="number"&&typeof o.world_nz=="number"?{world_nx:o.world_nx,world_ny:o.world_ny,world_nz:o.world_nz}:{}}))),await Me("/api/v1/vehicles",{method:"POST",body:JSON.stringify(a)})}else if(t==="edit-vehicle")await Me(`/api/v1/vehicles/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({registrationNumber:s("registrationNumber"),vin:s("vin")||null,make:s("make"),model:s("model"),modelYear:s("modelYear")?Number(s("modelYear")):null,inspectionExpiryDate:s("inspectionExpiryDate")||null,statutoryInspectionDate:s("statutoryInspectionDate")||null,siteId:s("siteId"),status:s("status")})});else if(t==="reservation"){let a=new Date(s("startAt")),o=new Date(s("endAt"));if(!Number.isFinite(a.getTime())||!Number.isFinite(o.getTime())||a>=o)throw new Error("\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");let l={guestName:s("guestName"),guestPhone:s("guestPhone"),startAt:a.toISOString(),endAt:o.toISOString(),vehicleId:s("vehicleId")};s("customerId")&&(l.customerId=s("customerId")),Pe.site.type==="headquarters"&&(l.siteId=s("siteId")),await Me("/api/v1/reservations",{method:"POST",body:JSON.stringify(l)})}else if(t==="parking-vehicle"){let a=Number(s("position_x")),o=Number(s("position_y"));if(!Number.isFinite(a)||!Number.isFinite(o)||a<0||a>1||o<0||o>1)throw new Error("invalid_request");await Me(`/api/v1/parking/vehicles/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:s("parking_lot_id")?Number(s("parking_lot_id")):null,position_x:a,position_y:o,status_ids:Wn(e,"status_ids").map(Number),unwashed:!!n.get("unwashed"),no_fuel:!!n.get("no_fuel"),needs_repair:!!n.get("needs_repair"),options:Wn(e,"options"),notes:s("notes")||null,assessment_values:Object.fromEntries([...e.querySelectorAll("[data-assessment-id]")].map(l=>[l.dataset.assessmentId,l instanceof HTMLInputElement&&l.type==="checkbox"?l.checked:l.value])),inspection_marks:(un.get(Number(e.dataset.id))??[]).map(l=>({id:l.id,damage_type_id:l.damage_type_id,x:l.x,y:l.y,...typeof l.world_x=="number"&&typeof l.world_y=="number"&&typeof l.world_z=="number"?{world_x:l.world_x,world_y:l.world_y,world_z:l.world_z}:{},...typeof l.world_nx=="number"&&typeof l.world_ny=="number"&&typeof l.world_nz=="number"?{world_nx:l.world_nx,world_ny:l.world_ny,world_nz:l.world_nz}:{}}))})}),un.delete(Number(e.dataset.id))}else if(t==="parking-job")await Me("/api/v1/parking/jobs",{method:"POST",body:JSON.stringify({vehicle_id:Number(s("vehicle_id")),destination_lot_id:Number(s("destination_lot_id")),scheduled_at:s("scheduled_at")})});else if(t==="parking-lot")await Me("/api/v1/parking/lots",{method:"POST",body:JSON.stringify({name:s("name"),navigation_url:s("navigation_url")})});else if(t==="parking-lot-priority")await Me(`/api/v1/parking/lots/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({class_priority:s("class_priority").split(/[，,]/).map(a=>a.trim()).filter(Boolean)})});else if(t==="parking-lot-layout"){let a=Number(s("area_height")),o=Number(s("area_width")),l=s("capacity")?Number(s("capacity")):null;if(!Number.isInteger(a)||a<160||a>600||!Number.isInteger(o)||o<30||o>100||l!==null&&(!Number.isInteger(l)||l<0||l>1e3))throw new Error("invalid_request");await Me(`/api/v1/parking/lots/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({name:s("name"),area_height:a,area_width:o,capacity:l,navigation_url:s("navigation_url"),class_priority:s("class_priority").split(/[，,]/).map(c=>c.trim()).filter(Boolean),is_active:s("is_active")==="true"})})}else if(t==="parking-class")await Me("/api/v1/parking/classes",{method:"POST",body:JSON.stringify({name:s("name"),color:s("color")})});else if(t==="parking-status")await Me("/api/v1/parking/statuses",{method:"POST",body:JSON.stringify({name:s("name"),icon:s("icon")||void 0})});else if(t==="parking-status-edit")await Me(`/api/v1/parking/statuses/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({name:s("name"),icon:s("icon")})});else if(t==="parking-option")await Me("/api/v1/parking/options",{method:"POST",body:JSON.stringify({name:s("name")})});else if(t==="parking-option-edit")await Me(`/api/v1/parking/options/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({name:s("name")})});else if(t==="parking-store")await Me("/api/v1/parking/stores",{method:"POST",body:JSON.stringify({name:s("name"),navigation_url:s("navigation_url")})});else if(t==="parking-store-location")await Me(`/api/v1/parking/stores/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({navigation_url:s("navigation_url")})});else if(t==="lot-distance"||t==="store-distance"){let a=s("minutes")===""?null:Number(s("minutes")),o=s("km")===""?null:Number(s("km"));if(a!==null&&!Number.isFinite(a)||o!==null&&!Number.isFinite(o))throw new Error("invalid_request");let l=t==="lot-distance"?{from_lot_id:Number(s("from_lot_id")),to_lot_id:Number(s("to_lot_id")),minutes:a,km:o}:{store_id:Number(s("store_id")),lot_id:Number(s("lot_id")),minutes:a,km:o};await Me(`/api/v1/parking/${t==="lot-distance"?"lot-distances":"store-distances"}`,{method:"PUT",body:JSON.stringify({entries:[l]})})}else if(t==="parking-assessment"){let a={name:s("name"),field_type:s("field_type"),suffix:s("suffix")};await Me(`/api/v1/parking/assessment-fields${e.dataset.id?`/${encodeURIComponent(e.dataset.id)}`:""}`,{method:e.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}else if(t==="parking-damage"){let a={name:s("name"),icon:s("icon"),color:s("color")};await Me(`/api/v1/parking/damage-types${e.dataset.id?`/${encodeURIComponent(e.dataset.id)}`:""}`,{method:e.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}Qt(),Xe("\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002"),t==="site"&&(Lt=[],Gi="",Yn=!1),await In()}catch(a){Xe(st(a.message),!0),r&&r.removeAttribute("disabled")}}async function Zv(i){let e=i.target.closest('[data-action="vehicle-catalog-retry"]');if(e){let l=e.closest("form"),c=l?.querySelector("[data-vehicle-site]"),u=c?.value||l?.querySelector('[name="siteId"]')?.value,d=l?.querySelector("[data-vehicle-parking-fields]");u&&d&&await ph(d,u,c??void 0);return}let t=i.target.closest('[data-action^="vehicle-option-"], [data-action^="vehicle-status-"]');if(t){if(i.preventDefault(),!Ke("parking:admin"))return;let l=t.closest('form[data-form="vehicle"]');if(!l)return;let c=t.dataset.action,u=c?.startsWith("vehicle-option-"),d=u?"options":"statuses";try{if(t.disabled=!0,c==="vehicle-option-add"||c==="vehicle-status-add"){let h=l.querySelector(`[name="${u?"newVehicleOption":"newVehicleStatus"}"]`)?.value.trim()??"",f=l.querySelector('[name="newVehicleStatusIcon"]')?.value.trim();if(!h)throw new Error("parking_catalog_name_required");await Me(`/api/v1/parking/${d}`,{method:"POST",body:JSON.stringify({name:h,...u?{}:{icon:f}})})}else{if(!Is("\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;await Me(`/api/v1/parking/${d}/${encodeURIComponent(t.dataset.id)}`,{method:"DELETE"})}await Ov(l),Xe(c?.endsWith("-add")?"\u9078\u629E\u9805\u76EE\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002":"\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002")}catch(h){Xe(st(h.message),!0)}finally{t.disabled=!1}return}let n=i.target.closest('[data-action="vehicle-rating"]');if(n){i.preventDefault();let l=n.closest(".assessment-field"),c=l?.querySelector(`input[data-assessment-id="${n.dataset.ratingAssessmentId}"]`);if(!l||!c)return;c.value=n.dataset.score??"",l.querySelectorAll('[data-action="vehicle-rating"]').forEach(u=>{u.setAttribute("aria-pressed",String(u===n))});return}let s=i.target.closest('[data-action="vehicle-damage-remove"]');if(s){i.preventDefault(),bn=bn.filter(c=>c.id!==s.dataset.markId),hn?.setMarks(bn);let l=s.closest("[data-vehicle-parking-fields]");l&&mh(bn,Yo,l);return}let r=i.target.closest('[data-action="parking-damage-remove"]');if(r){i.preventDefault();let l=Number(r.dataset.vehicleId),c=r.dataset.markId;un.set(l,(un.get(l)??[]).filter(u=>u.id!==c)),Nc===l&&hn?.setMarks(un.get(l)??[]),r.remove();return}let a=i.target.closest("[data-damage-map]");if(a){i.preventDefault();let l=a.closest('form[data-form="parking-vehicle"]'),c=ze('[name="damage_type_id"]',l??document);if(!l||!c?.value)return;let u=a.getBoundingClientRect();if(!u.width||!u.height)return;let d=Number(a.dataset.id),h={id:crypto.randomUUID(),damage_type_id:Number(c.value),x:Math.max(0,Math.min(1,(i.clientX-u.left)/u.width)),y:Math.max(0,Math.min(1,(i.clientY-u.top)/u.height))},f=[...un.get(d)??[],h];un.set(d,f);let g=document.createElement("button");g.type="button",g.className="damage-marker",g.dataset.action="parking-damage-remove",g.dataset.vehicleId=String(d),g.dataset.markId=h.id,g.style.left=`${h.x*100}%`,g.style.top=`${h.y*100}%`,g.style.background=c.selectedOptions[0]?.dataset.color??"#e34b4b",g.textContent="\xD7",a.append(g);return}let o=i.target.closest("[data-page],[data-action],[data-modal],[data-language]");if(o){if(o.dataset.language==="ja"||o.dataset.language==="zh")await Iv(o.dataset.language);else if(o.dataset.action==="customer-select"){let l=Cc.find(g=>g.id===o.dataset.id),c=o.closest('form[data-form="reservation"]');if(!l||!c)return;let u=ze('[name="customerId"]',c),d=ze('[name="guestName"]',c),h=ze('[name="guestPhone"]',c),f=ze("[data-customer-suggestions]",c);u&&(u.value=l.id),d&&(d.value=l.name),h&&(h.value=l.phone),f&&bt(f,`<span class="customer-selected"><strong>${A(l.name)}</strong> \xB7 ${A(l.phone)}
        <button type="button" class="btn btn-sm btn-quiet" data-action="customer-clear-selection">\u9078\u629E\u89E3\u9664</button></span>`)}else if(o.dataset.action==="customer-clear-selection"){let l=o.closest('form[data-form="reservation"]'),c=l&&ze('[name="customerId"]',l);c&&(c.value="");let u=l&&ze('[name="guestName"]',l);u&&gh(u)}else if(o.dataset.page){i.preventDefault(),mi();let l=o.dataset.page;if(!Fs.includes(l)||!Jo().some(c=>c.page===l))return;l!==dt&&history.pushState(null,"",di(l)),dt=l,localStorage.setItem(Ns,dt),dn=0,Pn="",pi="",Or=!1,Ko(),await In()}else if(o.dataset.action==="site-details")Gi=o.dataset.id??"",Yn=!1,await Ds();else if(o.dataset.action==="site-list-back")Gi="",Yn=!1,Hi=[],await Ds();else if(o.dataset.action==="toggle-site-accounts"){if(!Pe?.isAdmin)return;Yn=!Yn,await Ds()}else if(o.dataset.action==="toggle-site-status"){if(!Pe?.isAdmin)return;let l=o.dataset.status;if(l!=="active"&&l!=="inactive"||!Is(l==="inactive"?"\u3053\u306E\u5E97\u8217\u3092\u505C\u6B62\u3057\u307E\u3059\u304B\uFF1F\u5C65\u6B74\u30C7\u30FC\u30BF\u306F\u4FDD\u6301\u3055\u308C\u3001\u3042\u3068\u3067\u518D\u958B\u3067\u304D\u307E\u3059\u3002":"\u3053\u306E\u5E97\u8217\u3092\u518D\u958B\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Me(`/api/v1/sites/${encodeURIComponent(o.dataset.id)}`,{method:"PATCH",body:JSON.stringify({status:l})}),Xe(l==="active"?"\u5E97\u8217\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u5E97\u8217\u3092\u505C\u6B62\u3057\u307E\u3057\u305F\u3002"),await Ds()}catch(u){Xe(st(u.message),!0)}}else if(o.dataset.modal)await Fr(o.dataset.modal,o.dataset.siteId??"");else if(o.dataset.action==="close-modal")Qt();else if(o.dataset.action==="logout"){mi(),Oc();try{if(!(await fetch("/api/v1/auth/logout",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error")}catch{Xe(st("internal_error"),!0);return}pt="",Pe=null,Oi(localStorage),ks()}else if(o.dataset.action==="switch-site"){o.setAttribute("disabled","true");try{await Uv(o.dataset.id)}catch(l){Xe(st(l.message),!0),o.removeAttribute("disabled")}}else if(o.dataset.action==="switch-account"){o.setAttribute("disabled","true");try{await Nv(o.dataset.id)}catch(l){Xe(st(l.message),!0),o.removeAttribute("disabled")}}else if(o.dataset.action==="return-admin")try{await Fv()}catch(l){Xe(st(l.message),!0)}else if(o.dataset.action==="parking-settings")Bv();else if(o.dataset.action==="parking-class-filter"){fi=o.dataset.class??"all";let l=ze("#parking-catalog-content");l&&wt&&(bt(l,kc(wt)),l.replaceWith(l.firstElementChild))}else if(o.dataset.action==="parking-status-filter"){zi=o.dataset.statusId??"all";let l=ze("#parking-status-content");l&&wt&&(bt(l,ah(wt)),l.replaceWith(l.firstElementChild))}else if(o.dataset.action==="parking-focus-vehicle"){let l=ze(`.parking-map-vehicle[data-vehicle-id="${CSS.escape(o.dataset.id??"")}"]`);l?.scrollIntoView({behavior:"smooth",block:"center"}),ze("[data-parking-drag]",l??document)?.focus({preventScroll:!0}),l?.classList.add("parking-vehicle-highlight"),window.setTimeout(()=>l?.classList.remove("parking-vehicle-highlight"),1700)}else if(o.dataset.action==="employee-roster"){if(Vi==="reservation-transition"){let l=ze('form[data-form="reservation-transition"]'),c=Xo.find(h=>h.id===ze('[name="id"]',l??document)?.value),u=ze('[name="status"]',l??document)?.value,d=null;c&&u==="checked_in"?d={reservation:c,status:"checked_in"}:c&&u==="completed"&&(d={reservation:c,status:"completed"}),Qt(),Gr=d,await Hr(o.dataset.siteId??Pe.site.id);return}else Vi&&Qt();await Hr(o.dataset.siteId??Pe.site.id)}else if(o.dataset.action==="employee-edit")Qt(),await Fr("employee-edit",o.dataset.id);else if(o.dataset.action==="reset-account-password")await Fr("reset-account-password",o.dataset.id);else if(o.dataset.action==="employee-toggle"){let l=th;Qt();try{await Me(`/api/v1/employees/${encodeURIComponent(o.dataset.id)}`,{method:"PATCH",body:JSON.stringify({siteId:l,status:o.dataset.status})}),Xe(o.dataset.status==="active"?"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002"),await Hr(l)}catch(c){Xe(st(c.message),!0)}}else if(o.dataset.action==="parking-inspect3d")zv(Number(o.dataset.id));else if(o.dataset.action==="parking-inspect3d-close")mi();else if(o.dataset.action==="parking-move-undo"){let l=Br[Br.length-1];if(!l)return;try{await Me(`/api/v1/parking/vehicles/${l.vehicleId}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:l.lotId,position_x:l.x,position_y:l.y})}),Br.pop(),await Vt()}catch(c){Xe(st(c.message),!0)}}else if(o.dataset.action==="parking-lot-settings")await Fr("parking-lot-layout",o.dataset.id);else if(o.dataset.action==="parking-lot-resize"){let l=Number(o.dataset.id);qo=qo===l?null:l,await Vt()}else if(o.dataset.action==="parking-marking-toggle"){let l=Number(o.dataset.id);Us=Us===l?null:l,await Vt()}else if(o.dataset.action==="parking-marking-undo"){let l=wt?.parking_lots.find(c=>String(c.id)===o.dataset.id);if(!l?.markings.length)return;try{await Me(`/api/v1/parking/lots/${l.id}`,{method:"PATCH",body:JSON.stringify({markings:l.markings.slice(0,-1)})}),await Vt()}catch(c){Xe(st(c.message),!0)}}else if(o.dataset.action==="parking-job-toggle")try{await Me(`/api/v1/parking/jobs/${encodeURIComponent(o.dataset.id)}`,{method:"PATCH",body:JSON.stringify({completed:o.dataset.completed==="true"})}),Xe("\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await Vt()}catch(l){Xe(st(l.message),!0)}else if(o.dataset.action==="parking-job-delete"){if(!Is("\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Me(`/api/v1/parking/jobs/${encodeURIComponent(o.dataset.id)}`,{method:"DELETE"}),Xe("\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await Vt()}catch(l){Xe(st(l.message),!0)}}else if(o.dataset.action==="parking-lot-toggle")try{await Me(`/api/v1/parking/lots/${encodeURIComponent(o.dataset.id)}`,{method:"PATCH",body:JSON.stringify({is_active:o.dataset.active==="true"})}),await Vt()}catch(l){Xe(st(l.message),!0)}else if(o.dataset.action==="parking-lot-delete"){if(!Ke("parking:admin")||!Is("\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Me(`/api/v1/parking/lots/${encodeURIComponent(o.dataset.id)}`,{method:"DELETE"}),Qt(),Xe("\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await Vt()}catch(l){Xe(st(l.message),!0)}}else if(o.dataset.action==="parking-lot-order"){if(!wt)return;let l=wt.parking_lots.map(d=>d.id),c=l.indexOf(Number(o.dataset.id)),u=c+(o.dataset.direction==="up"?-1:1);if(c<0||u<0||u>=l.length)return;[l[c],l[u]]=[l[u],l[c]];try{await Me("/api/v1/parking/lots/order",{method:"PUT",body:JSON.stringify({ids:l})}),await Vt()}catch(d){Xe(st(d.message),!0)}}else if(o.dataset.action?.startsWith("parking-")&&["parking-class-delete","parking-status-delete","parking-option-delete","parking-store-delete","parking-assessment-delete","parking-damage-delete"].includes(o.dataset.action)){let l=o.dataset.action==="parking-class-delete"?"classes":o.dataset.action==="parking-status-delete"?"statuses":o.dataset.action==="parking-option-delete"?"options":o.dataset.action==="parking-store-delete"?"stores":o.dataset.action==="parking-assessment-delete"?"assessment-fields":"damage-types";if(!Is("\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Me(`/api/v1/parking/${l}/${encodeURIComponent(o.dataset.id)}`,{method:"DELETE"}),Qt(),Xe("\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await Vt()}catch(c){Xe(st(c.message),!0)}}else if(o.dataset.action==="refresh")await In();else if(o.dataset.action==="menu")Or=!Or,ze(".sidebar")?.classList.toggle("open",Or);else if(o.dataset.action==="next")dn+=50,await In();else if(o.dataset.action==="prev")dn=Math.max(0,dn-50),await In();else if(o.dataset.action==="edit-account"||o.dataset.action==="edit-vehicle")await Fr(o.dataset.action,o.dataset.id);else if(o.dataset.action?.startsWith("reservation-")){let l=Xo.find(u=>u.id===o.dataset.id);if(!l)return;if(o.dataset.action==="reservation-checkin"||o.dataset.action==="reservation-return"){try{await lh(l,o.dataset.action==="reservation-checkin"?"checked_in":"completed")}catch(u){Xe(st(u.message),!0)}return}let c=`${l.guest_name} \u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F`;if(!Is(c))return;try{await Me(`/api/v1/reservations/${encodeURIComponent(l.id)}`,{method:"PATCH",body:JSON.stringify({status:"cancelled"})}),Xe("\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002"),await In()}catch(u){Xe(st(u.message),!0)}}}}function Kv(i){if(!(i.target instanceof HTMLInputElement))return;if(i.target.matches("[data-customer-search]")){let n=i.target.closest('form[data-form="reservation"]'),s=n&&ze('[name="customerId"]',n);s&&(s.value=""),window.clearTimeout(qd),qd=window.setTimeout(()=>{gh(i.target)},220);return}if(i.target.matches("[data-parking-search]")){kr=i.target.value.trim();let n=ze("#parking-catalog-content");if(n&&wt){bt(n,kc(wt)),n.replaceWith(n.firstElementChild);let s=ze("[data-parking-search]");s?.focus(),s instanceof HTMLInputElement&&s.setSelectionRange(s.value.length,s.value.length)}return}if(i.target.matches("[data-marking-color]")){$r=i.target.value,ze(".parking-marking-preview")?.setAttribute("stroke",$r);return}if(!i.target.matches("[data-search]"))return;let e=i.target.selectionStart;Pn=i.target.value,dn=0;let t=dt==="sites"?Ds:dt==="vehicles"?sh:dt==="reservations"?oh:dt==="customers"?rh:null;t&&(window.clearTimeout(Yd),Yd=window.setTimeout(()=>{t().then(()=>{let n=ze("[data-search]");n?.focus(),n instanceof HTMLInputElement&&e!==null&&n.setSelectionRange(e,e)}).catch(n=>Xe(st(n.message),!0))},180))}function jv(i){let e=i.target;if(e.matches("[data-reservation-filter]")){let t=e.closest('form[data-form="reservation"]');t&&Kd(t)}else if(e.matches('[name="startAt"], [name="endAt"], [name="vehicleClass"]')){let t=e.closest('form[data-form="reservation"]');t&&Kd(t)}else if(e.matches("[data-vehicle-site]")){let t=ze("[data-vehicle-parking-fields]",ze(".overlay"));if(!t)return;let n=e.value;bn=[],n?ph(t,n,e):Vr(t,null)}else e.matches("[data-status]")&&(pi=e.value,dn=0,In())}"serviceWorker"in navigator&&window.isSecureContext&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).catch(()=>Xe("\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0))},{once:!0});window.addEventListener("hashchange",()=>{if(!Pe)return;let i=Lc()??"dashboard";dt=Jo().some(e=>e.page===i)?i:"dashboard",location.hash!==di(dt)&&history.replaceState(null,"",di(dt)),localStorage.setItem(Ns,dt),mi(),Ko(),In()});async function Qv(){try{if(!pt){let i=Go(localStorage)?"site":"default",e=await Wr(i);if(!e&&i==="site"){if(!(await fetch("/api/v1/auth/end-site",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error");let n=Vo(localStorage);n&&(pt=n.token,e=await Wr("default"))}if(!e){pt="",Pe=null,Oi(localStorage),ks();return}}await Zo()}catch(i){i.message==="unauthorized"?(pt="",Pe=null,Oi(localStorage)):Xe(st(i.message),!0),ks()}}Qv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
