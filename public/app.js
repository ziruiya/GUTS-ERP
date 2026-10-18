(()=>{var gu=0,kl=1,_u=2;var Ol=1,vu=2,Tn=3,On=0,Vt=1,An=2,Hn=0,Si=1,Bl=2,zl=3,Hl=4,yu=5,Qn=100,xu=101,bu=102,Mu=103,Su=104,Eu=200,wu=201,Tu=202,Au=203,fa=204,pa=205,Cu=206,Ru=207,Iu=208,Pu=209,Lu=210,Du=211,Nu=212,Uu=213,Fu=214,za=0,Ha=1,Va=2,Ei=3,Ga=4,$a=5,Wa=6,Xa=7,Vl=0,ku=1,Ou=2,Vn=0,Bu=1,zu=2,Hu=3,qa=4,Vu=5,Gu=6,$u=7;var Gl=300,Ri=301,Ii=302,Ya=303,Ja=304,br=306,ma=1e3,jn=1001,ga=1002,an=1003,Wu=1004;var Mr=1005;var gn=1006,Za=1007;var ri=1008;var yn=1009,$l=1010,Wl=1011,vs=1012,Ka=1013,ai=1014,Cn=1015,ys=1016,ja=1017,Qa=1018,xs=1020,Xl=35902,ql=35899,Yl=1021,Jl=1022,ln=1023,ss=1026,bs=1027,Zl=1028,eo=1029,Kl=1030,to=1031;var no=1033,Sr=33776,Er=33777,wr=33778,Tr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,uo=37808,ho=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,vo=37815,yo=37816,xo=37817,bo=37818,Mo=37819,So=37820,Eo=37821,wo=36492,To=36494,Ao=36495,Co=36283,Ro=36284,Io=36285,Po=36286;var Vs=2300,_a=2301,da=2302,wl=2400,Tl=2401,Al=2402;var Xu=3200,qu=3201;var jl=0,Yu=1,Gn="",Ht="srgb",wi="srgb-linear",Gs="linear",at="srgb";var bi=7680;var Cl=519,Ju=512,Zu=513,Ku=514,Ql=515,ju=516,Qu=517,eh=518,th=519,Rl=35044;var ec="300 es",mn=2e3,$s=2001;var Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=1234567,Os=Math.PI/180,rs=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function tc(i,e){return(i%e+e)%e}function Md(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sd(i,e,t){return i!==e?(t-i)/(e-i):0}function Bs(i,e,t){return(1-t)*i+t*e}function Ed(i,e,t,n){return Bs(i,e,1-Math.exp(-t*n))}function wd(i,e=1){return e-Math.abs(tc(i,e*2)-e)}function Td(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ad(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Rd(i,e){return i+Math.random()*(e-i)}function Id(i){return i*(.5-Math.random())}function Pd(i){i!==void 0&&($c=i);let e=$c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ld(i){return i*Os}function Dd(i){return i*rs}function Nd(i){return(i&i-1)===0&&i!==0}function Ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ns(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ar={DEG2RAD:Os,RAD2DEG:rs,generateUUID:Pi,clamp:Ze,euclideanModulo:tc,mapLinear:Md,inverseLerp:Sd,lerp:Bs,damp:Ed,pingpong:wd,smoothstep:Td,smootherstep:Ad,randInt:Cd,randFloat:Rd,randFloatSpread:Id,seededRandom:Pd,degToRad:Ld,radToDeg:Dd,isPowerOfTwo:Nd,ceilPowerOfTwo:Ud,floorPowerOfTwo:Fd,setQuaternionFromProperEuler:kd,normalize:zt,denormalize:ns},me=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(h!==b||l!==d||c!==f||u!==g){let m=1-o,p=l*d+c*f+u*g+h*b,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),A=Math.atan2(R,p*v);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let x=o*v;if(l=l*m+d*x,c=c*m+f*x,u=u*m+g*x,h=h*m+b*x,m===1-o){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new D,Wc=new zn,He=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],R=s[2],A=s[5],I=s[8];return r[0]=a*b+o*v+l*R,r[3]=a*m+o*y+l*A,r[6]=a*p+o*x+l*I,r[1]=c*b+u*v+h*R,r[4]=c*m+u*y+h*A,r[7]=c*p+u*x+h*I,r[2]=d*b+f*v+g*R,r[5]=d*m+f*y+g*A,r[8]=d*p+f*x+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=h*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new He;function nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nh(){let i=Ws("canvas");return i.style.display="block",i}var Xc={};function as(i){i in Xc||(Xc[i]=!0,console.warn(i))}function ih(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){let i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:at,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var et=Od();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $i,va=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$i===void 0&&($i=Ws("canvas")),$i.width=e.width,$i.height=e.height;let s=$i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bd=0,os=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nl(s[a].image)):r.push(nl(s[a]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,il=new D,Kt=class i extends Bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=gn,a=ri,o=ln,l=yn,c=i.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Pi(),this.name="",this.source=new os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Gl;Kt.DEFAULT_ANISOTROPY=1;var yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(f+1)/2,R=(p+1)/2,A=(u+d)/4,I=(h+b)/4,N=(g+m)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=I/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=N/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=I/r,s=N/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-b)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends Bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Kt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new os(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends ya{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xs=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Xr.subVectors(this.max,Ds),Wi.subVectors(e.a,Ds),Xi.subVectors(e.b,Ds),qi.subVectors(e.c,Ds),Wn.subVectors(Xi,Wi),Xn.subVectors(qi,Xi),_i.subVectors(Wi,qi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-_i.z,_i.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,_i.z,0,-_i.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-_i.y,_i.x,0];return!sl(t,Wi,Xi,qi,Xr)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,Wi,Xi,qi,Xr))?!1:(qr.crossVectors(Wn,Xn),t=[qr.x,qr.y,qr.z],sl(t,Wi,Xi,qi,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,Wr=new ei,Wi=new D,Xi=new D,qi=new D,Wn=new D,Xn=new D,_i=new D,Ds=new D,Xr=new D,qr=new D,vi=new D;function sl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=n.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Hd=new ei,Ns=new D,rl=new D,ls=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);let t=Ns.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(rl)),this.expandByPoint(Ns.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dn=new D,al=new D,Yr=new D,qn=new D,ol=new D,Jr=new D,ll=new D,qs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){al.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(al);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=qn.dot(this.direction),l=-qn.dot(Yr),c=qn.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let b=1/u;h*=b,d*=b,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(al).addScaledVector(Yr,d),f}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,s,r){ol.subVectors(t,e),Jr.subVectors(n,e),ll.crossVectors(ol,Jr);let a=this.direction.dot(ll),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let l=o*this.direction.dot(Jr.crossVectors(qn,Jr));if(l<0)return null;let c=o*this.direction.dot(ol.cross(qn));if(c<0||l+c>a)return null;let u=-o*qn.dot(ll);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,b,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,b=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,b=c*h;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,b=c*h;t[0]=d-b*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,b=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+b,t[1]=l*h,t[5]=b*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*u,t[4]=b-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-b*h}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+b,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Gd)}lookAt(e,t,n){let s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Yn.crossVectors(n,Yt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Yn.crossVectors(n,Yt)),Yn.normalize(),Zr.crossVectors(Yt,Yn),s[0]=Yn.x,s[4]=Zr.x,s[8]=Yt.x,s[1]=Yn.y,s[5]=Zr.y,s[9]=Yt.y,s[2]=Yn.z,s[6]=Zr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],R=n[15],A=s[0],I=s[4],N=s[8],E=s[12],S=s[1],P=s[5],B=s[9],H=s[13],q=s[2],J=s[6],X=s[10],ie=s[14],$=s[3],he=s[7],_e=s[11],Me=s[15];return r[0]=a*A+o*S+l*q+c*$,r[4]=a*I+o*P+l*J+c*he,r[8]=a*N+o*B+l*X+c*_e,r[12]=a*E+o*H+l*ie+c*Me,r[1]=u*A+h*S+d*q+f*$,r[5]=u*I+h*P+d*J+f*he,r[9]=u*N+h*B+d*X+f*_e,r[13]=u*E+h*H+d*ie+f*Me,r[2]=g*A+b*S+m*q+p*$,r[6]=g*I+b*P+m*J+p*he,r[10]=g*N+b*B+m*X+p*_e,r[14]=g*E+b*H+m*ie+p*Me,r[3]=v*A+y*S+x*q+R*$,r[7]=v*I+y*P+x*J+R*he,r[11]=v*N+y*B+x*X+R*_e,r[15]=v*E+y*H+x*ie+R*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+b*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],v=h*m*c-b*d*c+b*l*f-o*m*f-h*l*p+o*d*p,y=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,x=u*b*c-g*h*c+g*o*f-a*b*f-u*o*p+a*h*p,R=g*h*l-u*b*l-g*o*d+a*b*d+u*o*m-a*h*m,A=t*v+n*y+s*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=v*I,e[1]=(b*d*r-h*m*r-b*s*f+n*m*f+h*s*p-n*d*p)*I,e[2]=(o*m*r-b*l*r+b*s*c-n*m*c-o*s*p+n*l*p)*I,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*I,e[4]=y*I,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*I,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*I,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*I,e[8]=x*I,e[9]=(g*h*r-u*b*r-g*n*f+t*b*f+u*n*p-t*h*p)*I,e[10]=(a*b*r-g*o*r+g*n*c-t*b*c-a*n*p+t*o*p)*I,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*I,e[12]=R*I,e[13]=(u*b*s-g*h*s+g*n*d-t*b*d-u*n*m+t*h*m)*I,e[14]=(g*o*s-a*b*s-g*n*l+t*b*l+a*n*m-t*o*m)*I,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,b=a*u,m=a*h,p=o*h,v=l*c,y=l*u,x=l*h,R=n.x,A=n.y,I=n.z;return s[0]=(1-(b+p))*R,s[1]=(f+x)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+y)*I,s[9]=(m-v)*I,s[10]=(1-(d+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Yi.set(s[0],s[1],s[2]).length(),a=Yi.set(s[4],s[5],s[6]).length(),o=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);let c=1/r,u=1/a,h=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=mn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=mn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===mn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new D,fn=new vt,Vd=new D(0,0,0),Gd=new D(1,1,1),Yn=new D,Zr=new D,Yt=new D,Jc=new vt,Zc=new zn,_n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$d=0,Kc=new D,Ji=new zn,Nn=new vt,Kr=new D,Us=new D,Wd=new D,Xd=new zn,jc=new D(1,0,0),Qc=new D(0,1,0),eu=new D(0,0,1),tu={type:"added"},qd={type:"removed"},Zi={type:"childadded",child:null},cl={type:"childremoved",child:null},Ut=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new _n,n=new zn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new He}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Us,Kr,this.up):Nn.lookAt(Kr,Us,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qd),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new D,Un=new D,ul=new D,Fn=new D,Ki=new D,ji=new D,nu=new D,hl=new D,dl=new D,fl=new D,pl=new yt,ml=new yt,gl=new yt,Kn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Un.subVectors(n,t),ul.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(Un),l=pn.dot(ul),c=Un.dot(Un),u=Un.dot(ul),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(ml,r.y),a.addScaledVector(gl,r.z),a}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Un.subVectors(e,t),pn.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),ji.subVectors(r,n),hl.subVectors(e,n);let l=Ki.dot(hl),c=ji.dot(hl);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,s);let u=Ki.dot(dl),h=ji.dot(dl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ki,a);fl.subVectors(e,r);let f=Ki.dot(fl),g=ji.dot(fl);if(g>=0&&f<=g)return t.copy(r);let b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ji,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return nu.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(nu,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Ki,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=tc(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_l(a,r,e+1/3),this.g=_l(a,r,e),this.b=_l(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return et.workingToColorSpace(Dt.copy(this),e),Math.round(Ze(Dt.r*255,0,255))*65536+Math.round(Ze(Dt.g*255,0,255))*256+Math.round(Ze(Dt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ht){et.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,s=Dt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(jr);let n=Bs(Jn.h,jr.h,t),s=Bs(Jn.s,jr.s,t),r=Bs(Jn.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new qe;qe.NAMES=sh;var Yd=0,ti=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Si,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ys=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new D,Qr=new me,Jd=0,Zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}};var Js=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zs=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zd=0,rn=new vt,vl=new Ut,Qi=new D,Jt=new ei,Fs=new ei,It=new D,on=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?Zs:Js)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Jt.min,Fs.min),Jt.expandByPoint(It),It.addVectors(Jt.max,Fs.max),Jt.expandByPoint(It)):(Jt.expandByPoint(Fs.min),Jt.expandByPoint(Fs.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),It.add(Qi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new D,l[N]=new D;let c=new D,u=new D,h=new D,d=new me,f=new me,g=new me,b=new D,m=new D;function p(N,E,S){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[N].add(b),o[E].add(b),o[S].add(b),l[N].add(m),l[E].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let N=0,E=v.length;N<E;++N){let S=v[N],P=S.start,B=S.count;for(let H=P,q=P+B;H<q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let y=new D,x=new D,R=new D,A=new D;function I(N){R.fromBufferAttribute(s,N),A.copy(R);let E=o[N];y.copy(E),y.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);let P=x.dot(l[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,P)}for(let N=0,E=v.length;N<E;++N){let S=v[N],P=S.start,B=S.count;for(let H=P,q=P+B;H<q;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},iu=new vt,yi=new qs,ea=new ls,su=new D,ta=new D,na=new D,ia=new D,yl=new D,sa=new D,ru=new D,ra=new D,Tt=class extends Ut{constructor(e=new on,t=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(yl.fromBufferAttribute(h,e),a?sa.addScaledVector(yl,u):sa.addScaledVector(yl.sub(t),u))}t.add(sa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(ea.containsPoint(yi.origin)===!1&&(yi.intersectSphere(ea,su)===null||yi.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(iu.copy(r).invert(),yi.copy(e.ray).applyMatrix4(iu),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){let A=o.getX(x),I=o.getX(x+1),N=o.getX(x+2);s=aa(this,p,e,n,c,u,h,A,I,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=aa(this,a,e,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){let A=x,I=x+1,N=x+2;s=aa(this,p,e,n,c,u,h,A,I,N),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=m,y=m+1,x=m+2;s=aa(this,a,e,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Kd(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===On,o),l===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:i}}function aa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ta),i.getVertexPosition(l,na),i.getVertexPosition(c,ia);let u=Kd(i,e,t,n,ta,na,ia,ru);if(u){let h=new D;Kn.getBarycoord(ru,ta,na,ia,h),s&&(u.uv=Kn.getInterpolatedAttribute(s,o,l,c,h,new me)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,o,l,c,h,new me)),a&&(u.normal=Kn.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Kn.getNormal(ta,na,ia,d.normal),u.face=d,u.barycoord=h}return u}var us=class i extends on{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(b,m,p,v,y,x,R,A,I,N,E){let S=x/I,P=R/N,B=x/2,H=R/2,q=A/2,J=I+1,X=N+1,ie=0,$=0,he=new D;for(let _e=0;_e<X;_e++){let Me=_e*P-H;for(let Oe=0;Oe<J;Oe++){let je=Oe*S-B;he[b]=je*v,he[m]=Me*y,he[p]=q,c.push(he.x,he.y,he.z),he[b]=0,he[m]=0,he[p]=A>0?1:-1,u.push(he.x,he.y,he.z),h.push(Oe/I),h.push(1-_e/N),ie+=1}}for(let _e=0;_e<N;_e++)for(let Me=0;Me<I;Me++){let Oe=d+Me+J*_e,je=d+Me+J*(_e+1),tt=d+(Me+1)+J*(_e+1),Z=d+(Me+1)+J*_e;l.push(Oe,je,Z),l.push(je,tt,Z),$+=6}o.addGroup(f,$,E),f+=$,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Li(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=Li(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ic(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var rh={clone:Li,merge:Ft},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ks=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new D,au=new me,ou=new me,Nt=class extends Ks{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,au,ou),t.subVectors(ou,au)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},es=-90,ts=1,ba=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(es,ts,e,t);s.layers=this.layers,this.add(s);let r=new Nt(es,ts,e,t);r.layers=this.layers,this.add(r);let a=new Nt(es,ts,e,t);a.layers=this.layers,this.add(a);let o=new Nt(es,ts,e,t);o.layers=this.layers,this.add(o);let l=new Nt(es,ts,e,t);l.layers=this.layers,this.add(l);let c=new Nt(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},js=class extends Kt{constructor(e=[],t=Ri,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ma=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new us(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Hn});r.uniforms.tEquirect.value=t;let a=new Tt(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=gn),new ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},En=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},tf={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Qs=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var xl=new D,nf=new D,sf=new He,Sn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xl.subVectors(n,t).cross(nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sf.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new ls,rf=new me(.5,.5),oa=new D,ds=class{constructor(e=new Sn,t=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],v=r[12],y=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-a,f-u,p-g,R-v).normalize(),s[1].setComponents(c+a,f+u,p+g,R+v).normalize(),s[2].setComponents(c+o,f+h,p+b,R+y).normalize(),s[3].setComponents(c-o,f-h,p-b,R-y).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,R-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-x).normalize(),t===mn)s[5].setComponents(c+l,f+d,p+m,R+x).normalize();else if(t===$s)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);let t=rf.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends Kt{constructor(e,t,n=ai,s,r,a,o=an,l=an,c,u=ss,h=1){if(u!==ss&&u!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},tr=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var nr=class i extends on{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,b=[],m=n/2,p=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function v(){let x=new D,R=new D,A=0,I=(t-e)/n;for(let N=0;N<=r;N++){let E=[],S=N/r,P=S*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,q=H*l+o,J=Math.sin(q),X=Math.cos(q);R.x=P*J,R.y=-S*n+m,R.z=P*X,h.push(R.x,R.y,R.z),x.set(J,I,X).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-S),E.push(g++)}b.push(E)}for(let N=0;N<s;N++)for(let E=0;E<r;E++){let S=b[E][N],P=b[E+1][N],B=b[E+1][N+1],H=b[E][N+1];(e>0||E!==0)&&(u.push(S,P,H),A+=3),(t>0||E!==r-1)&&(u.push(P,B,H),A+=3)}c.addGroup(p,A,0),p+=A}function y(x){let R=g,A=new me,I=new D,N=0,E=x===!0?e:t,S=x===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let P=g;for(let B=0;B<=s;B++){let q=B/s*l+o,J=Math.cos(q),X=Math.sin(q);I.x=E*X,I.y=m*S,I.z=E*J,h.push(I.x,I.y,I.z),d.push(0,S,0),A.x=J*.5+.5,A.y=X*.5*S+.5,f.push(A.x,A.y),g++}for(let B=0;B<s;B++){let H=R+B,q=P+B;x===!0?u.push(q,q+1,H):u.push(q+1,q,H),N+=3}c.addGroup(p,N,x===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new vt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fs=class extends jt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Sa=class extends fs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var la=new D,bl=new sc,Ml=new sc,Sl=new sc,ps=class extends jt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(la.subVectors(s[0],s[1]).add(s[0]),c=la);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(la.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=la),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),b=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),bl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,b,m),Ml.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,b,m),Sl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,b,m)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ml.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Sl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(bl.calc(l),Ml.calc(l),Sl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function af(i,e){let t=1-i;return t*t*e}function of(i,e){return 2*(1-i)*i*e}function lf(i,e){return i*i*e}function zs(i,e,t,n){return af(i,e)+of(i,t)+lf(i,n)}function cf(i,e){let t=1-i;return t*t*t*e}function uf(i,e){let t=1-i;return 3*t*t*i*e}function hf(i,e){return 3*(1-i)*i*i*e}function df(i,e){return i*i*i*e}function Hs(i,e,t,n,s){return cf(i,e)+uf(i,t)+hf(i,n)+df(i,s)}var ir=class extends jt{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(e,s.x,r.x,a.x,o.x),Hs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ea=class extends jt{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hs(e,s.x,r.x,a.x,o.x),Hs(e,s.y,r.y,a.y,o.y),Hs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sr=class extends jt{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends jt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rr=class extends jt{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(e,s.x,r.x,a.x),zs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ar=class extends jt{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(zs(e,s.x,r.x,a.x),zs(e,s.y,r.y,a.y),zs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},or=class extends jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(lu(o,l.x,c.x,u.x,h.x),lu(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Ta=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:ps,CubicBezierCurve:ir,CubicBezierCurve3:Ea,EllipseCurve:fs,LineCurve:sr,LineCurve3:wa,QuadraticBezierCurve:rr,QuadraticBezierCurve3:ar,SplineCurve:or}),Aa=class extends jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}},lr=class extends Aa{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sr(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new rr(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ir(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new or(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new fs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ms=class extends lr{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new lr().fromJSON(s))}return this}};function ff(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ah(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=vf(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return cr(r,a,t,o,l,c,0),a}function ah(i,e,t,n,s){let r;if(s===Rf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=cu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=cu(a/n|0,i[a],i[a+1],r);return r&&gs(r,r.next)&&(hr(r),r=r.next),r}function Ti(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gs(t,t.next)||_t(t.prev,t,t.next)===0)){if(hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Sf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?mf(i,n,s,r):pf(i)){e.push(l.i,i.i,c.i),hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gf(Ti(i),e),cr(i,e,t,n,s,r,2)):a===2&&_f(i,e,t,n,s,r):cr(Ti(i),e,t,n,s,r,1);break}}}function pf(i){let e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ks(s,o,r,l,a,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(_t(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,h,d),b=Math.max(o,l,c),m=Math.max(u,h,d),p=Il(f,g,e,t,n),v=Il(b,m,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=b&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ks(o,u,l,h,c,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ks(o,u,l,h,c,d,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=b&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ks(o,u,l,h,c,d,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ks(o,u,l,h,c,d,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!gs(n,s)&&lh(n,t,t.next,s)&&ur(n,s)&&ur(s,n)&&(e.push(n.i,t.i,s.i),hr(t),hr(t.next),t=i=s),t=t.next}while(t!==i);return Ti(t)}function _f(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tf(a,o)){let l=ch(a,o);a=Ti(a,a.next),l=Ti(l,l.next),cr(a,e,t,n,s,r,0),cr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=ah(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wf(c))}s.sort(yf);for(let r=0;r<s.length;r++)t=xf(s[r],t);return t}function yf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function xf(i,e){let t=bf(i,e);if(!t)return e;let n=ch(t,i);return Ti(n,n.next),Ti(t,t.next)}function bf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(gs(i,t))return t;do{if(gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&oh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);ur(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Mf(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Mf(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function Sf(i,e,t,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ef(s)}function Ef(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Il(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ks(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&oh(i,e,t,n,s,r,a,o)}function Tf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Af(i,e)&&(ur(i,e)&&ur(e,i)&&Cf(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||gs(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gs(i,e){return i.x===e.x&&i.y===e.y}function lh(i,e,t,n){let s=ua(_t(i,e,t)),r=ua(_t(i,e,n)),a=ua(_t(t,n,i)),o=ua(_t(t,n,e));return!!(s!==r&&a!==o||s===0&&ca(i,t,e)||r===0&&ca(i,n,e)||a===0&&ca(t,i,n)||o===0&&ca(t,e,n))}function ca(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function Af(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&lh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ur(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function Cf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ch(i,e){let t=Pl(i.i,i.x,i.y),n=Pl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cu(i,e,t,n){let s=Pl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ll=class{static triangulate(e,t,n=2){return ff(e,t,n)}},Mi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];uu(e),hu(n,e);let a=e.length;t.forEach(uu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,hu(n,t[l]);let o=Ll.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function uu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var dr=class i extends on{constructor(e=new ms([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:If,y,x=!1,R,A,I,N;p&&(y=p.getSpacedPoints(u),x=!0,d=!1,R=p.computeFrenetFrames(u,!1),A=new D,I=new D,N=new D),d||(m=0,f=0,g=0,b=0);let E=o.extractPoints(c),S=E.shape,P=E.holes;if(!Mi.isClockWise(S)){S=S.reverse();for(let te=0,Q=P.length;te<Q;te++){let j=P[te];Mi.isClockWise(j)&&(P[te]=j.reverse())}}function H(te){let j=10000000000000001e-36,K=te[0];for(let de=1;de<=te.length;de++){let se=de%te.length,fe=te[se],$e=fe.x-K.x,ze=fe.y-K.y,w=$e*$e+ze*ze,_=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(K.x),Math.abs(K.y)),O=j*_*_;if(w<=O){te.splice(se,1),de--;continue}K=fe}}H(S),P.forEach(H);let q=P.length,J=S;for(let te=0;te<q;te++){let Q=P[te];S=S.concat(Q)}function X(te,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(Q,j)}let ie=S.length;function $(te,Q,j){let K,de,se,fe=te.x-Q.x,$e=te.y-Q.y,ze=j.x-te.x,w=j.y-te.y,_=fe*fe+$e*$e,O=fe*w-$e*ze;if(Math.abs(O)>Number.EPSILON){let W=Math.sqrt(_),ne=Math.sqrt(ze*ze+w*w),Y=Q.x-$e/W,Pe=Q.y+fe/W,ue=j.x-w/ne,Ce=j.y+ze/ne,Re=((ue-Y)*w-(Ce-Pe)*ze)/(fe*w-$e*ze);K=Y+fe*Re-te.x,de=Pe+$e*Re-te.y;let re=K*K+de*de;if(re<=2)return new me(K,de);se=Math.sqrt(re/2)}else{let W=!1;fe>Number.EPSILON?ze>Number.EPSILON&&(W=!0):fe<-Number.EPSILON?ze<-Number.EPSILON&&(W=!0):Math.sign($e)===Math.sign(w)&&(W=!0),W?(K=-$e,de=fe,se=Math.sqrt(_)):(K=fe,de=$e,se=Math.sqrt(_/2))}return new me(K/se,de/se)}let he=[];for(let te=0,Q=J.length,j=Q-1,K=te+1;te<Q;te++,j++,K++)j===Q&&(j=0),K===Q&&(K=0),he[te]=$(J[te],J[j],J[K]);let _e=[],Me,Oe=he.concat();for(let te=0,Q=q;te<Q;te++){let j=P[te];Me=[];for(let K=0,de=j.length,se=de-1,fe=K+1;K<de;K++,se++,fe++)se===de&&(se=0),fe===de&&(fe=0),Me[K]=$(j[K],j[se],j[fe]);_e.push(Me),Oe=Oe.concat(Me)}let je;if(m===0)je=Mi.triangulateShape(J,P);else{let te=[],Q=[];for(let j=0;j<m;j++){let K=j/m,de=f*Math.cos(K*Math.PI/2),se=g*Math.sin(K*Math.PI/2)+b;for(let fe=0,$e=J.length;fe<$e;fe++){let ze=X(J[fe],he[fe],se);ve(ze.x,ze.y,-de),K===0&&te.push(ze)}for(let fe=0,$e=q;fe<$e;fe++){let ze=P[fe];Me=_e[fe];let w=[];for(let _=0,O=ze.length;_<O;_++){let W=X(ze[_],Me[_],se);ve(W.x,W.y,-de),K===0&&w.push(W)}K===0&&Q.push(w)}}je=Mi.triangulateShape(te,Q)}let tt=je.length,Z=g+b;for(let te=0;te<ie;te++){let Q=d?X(S[te],Oe[te],Z):S[te];x?(I.copy(R.normals[0]).multiplyScalar(Q.x),A.copy(R.binormals[0]).multiplyScalar(Q.y),N.copy(y[0]).add(I).add(A),ve(N.x,N.y,N.z)):ve(Q.x,Q.y,0)}for(let te=1;te<=u;te++)for(let Q=0;Q<ie;Q++){let j=d?X(S[Q],Oe[Q],Z):S[Q];x?(I.copy(R.normals[te]).multiplyScalar(j.x),A.copy(R.binormals[te]).multiplyScalar(j.y),N.copy(y[te]).add(I).add(A),ve(N.x,N.y,N.z)):ve(j.x,j.y,h/u*te)}for(let te=m-1;te>=0;te--){let Q=te/m,j=f*Math.cos(Q*Math.PI/2),K=g*Math.sin(Q*Math.PI/2)+b;for(let de=0,se=J.length;de<se;de++){let fe=X(J[de],he[de],K);ve(fe.x,fe.y,h+j)}for(let de=0,se=P.length;de<se;de++){let fe=P[de];Me=_e[de];for(let $e=0,ze=fe.length;$e<ze;$e++){let w=X(fe[$e],Me[$e],K);x?ve(w.x,w.y+y[u-1].y,y[u-1].x+j):ve(w.x,w.y,h+j)}}}U(),G();function U(){let te=s.length/3;if(d){let Q=0,j=ie*Q;for(let K=0;K<tt;K++){let de=je[K];Se(de[2]+j,de[1]+j,de[0]+j)}Q=u+m*2,j=ie*Q;for(let K=0;K<tt;K++){let de=je[K];Se(de[0]+j,de[1]+j,de[2]+j)}}else{for(let Q=0;Q<tt;Q++){let j=je[Q];Se(j[2],j[1],j[0])}for(let Q=0;Q<tt;Q++){let j=je[Q];Se(j[0]+ie*u,j[1]+ie*u,j[2]+ie*u)}}n.addGroup(te,s.length/3-te,0)}function G(){let te=s.length/3,Q=0;ce(J,Q),Q+=J.length;for(let j=0,K=P.length;j<K;j++){let de=P[j];ce(de,Q),Q+=de.length}n.addGroup(te,s.length/3-te,1)}function ce(te,Q){let j=te.length;for(;--j>=0;){let K=j,de=j-1;de<0&&(de=te.length-1);for(let se=0,fe=u+m*2;se<fe;se++){let $e=ie*se,ze=ie*(se+1),w=Q+K+$e,_=Q+de+$e,O=Q+de+ze,W=Q+K+ze;Ge(w,_,O,W)}}}function ve(te,Q,j){l.push(te),l.push(Q),l.push(j)}function Se(te,Q,j){it(te),it(Q),it(j);let K=s.length/3,de=v.generateTopUV(n,s,K-3,K-2,K-1);T(de[0]),T(de[1]),T(de[2])}function Ge(te,Q,j,K){it(te),it(Q),it(K),it(Q),it(j),it(K);let de=s.length/3,se=v.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);T(se[0]),T(se[1]),T(se[3]),T(se[1]),T(se[2]),T(se[3])}function it(te){s.push(l[te*3+0]),s.push(l[te*3+1]),s.push(l[te*3+2])}function T(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Pf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ta[s.type]().fromJSON(s)),new i(n,e.options)}},If={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new me(r,a),new me(o,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],b=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-h),new me(d,1-g),new me(b,1-p)]:[new me(o,1-l),new me(u,1-h),new me(f,1-g),new me(m,1-p)]}};function Pf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ai=class i extends on{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],b=[],m=[];for(let p=0;p<u;p++){let v=p*d-a;for(let y=0;y<c;y++){let x=y*h-r;g.push(x,-v,0),b.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let y=v+c*p,x=v+c*(p+1),R=v+1+c*(p+1),A=v+1+c*p;f.push(y,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(b,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var fr=class i extends on{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let b=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(b),h.y=(e+t*Math.cos(m))*Math.sin(b),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let b=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;a.push(b,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var pr=class i extends on{constructor(e=new ar(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new me,u=new D,h=[],d=[],f=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(f,2));function b(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){u=e.getPointAt(y/t,u);let x=a.normals[y],R=a.binormals[y];for(let A=0;A<=s;A++){let I=A/s*Math.PI*2,N=Math.sin(I),E=-Math.cos(I);l.x=E*x.x+N*R.x,l.y=E*x.y+N*R.y,l.z=E*x.z+N*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){let R=(s+1)*(y-1)+(x-1),A=(s+1)*y+(x-1),I=(s+1)*y+x,N=(s+1)*(y-1)+x;g.push(R,A,N),g.push(A,I,N)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)c.x=y/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ta[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ni=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_s=class extends ni{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ca=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ra=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ha(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ia=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=e,o=2*t-n;break;case Al:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tl:a=e,l=2*n-t;break;case Al:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let R=0;R!==o;++R)r[R]=p*a[u+R]+v*a[c+R]+y*a[l+R]+x*a[h+R];return r}},Pa=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},La=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ha(t,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ha(e.times,Array),values:ha(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ia(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Lf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let b=t[h+g];if(b!==t[d+g]||b!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qt.prototype.ValueTypeName="";Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=_a;var ii=class extends Qt{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Vs;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Da.prototype.ValueTypeName="color";var Na=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Na.prototype.ValueTypeName="number";var Ua=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},mr=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends Qt{constructor(e,t,n){super(e,t,n)}};si.prototype.ValueTypeName="string";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Vs;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Qt{constructor(e,t,n,s){super(e,t,n,s)}};Fa.prototype.ValueTypeName="vector";var ka=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},uh=new ka,Oa=class{constructor(e){this.manager=e!==void 0?e:uh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var gr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},_r=class extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},El=new vt,du=new D,fu=new D,Dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var vr=class extends Ks{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nl=class extends Dl{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Nl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ba=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rc="\\[\\]\\.:\\/",Df=new RegExp("["+rc+"]","g"),ac="[^"+rc+"]",Nf="[^"+rc.replace("\\.","")+"]",Uf=/((?:WC+[\/:])*)/.source.replace("WC",ac),Ff=/(WCOD+)?/.source.replace("WCOD",Nf),kf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ac),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ac),Bf=new RegExp("^"+Uf+Ff+kf+Of+"$"),zf=["material","materials","bones","map"],Ul=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(e){let t=Bf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Ul;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jv=new Float32Array(1);var pu=new vt,xr=class{constructor(e,t,n=0,s=1/0){this.ray=new qs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pu),this}intersectObject(e,t=!0,n=[]){return Fl(e,this,n,t),n.sort(mu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fl(e[s],this,n,t);return n.sort(mu),n}};function mu(i,e){return i.distance-e.distance}function Fl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Fl(r[a],e,t,!0)}}function oc(i,e,t,n){let s=Hf(n);switch(t){case Yl:return i*e;case Zl:return i*e/s.components*s.byteLength;case eo:return i*e/s.components*s.byteLength;case Kl:return i*e*2/s.components*s.byteLength;case to:return i*e*2/s.components*s.byteLength;case Jl:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case no:return i*e*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:case ao:return Math.max(i,16)*Math.max(e,8)/4;case io:case ro:return Math.max(i,8)*Math.max(e,8)/2;case oo:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wo:case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Co:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Io:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hf(i){switch(i){case yn:case $l:return{byteLength:1,components:1};case vs:case Wl:case ys:return{byteLength:2,components:1};case ja:case Qa:return{byteLength:2,components:4};case ai:case Ka:case Cn:return{byteLength:4,components:1};case Xl:case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Nh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gf(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],b=h[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let b=h[f];i.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Km=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,vg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:$f,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Jf,aomap_fragment:Zf,aomap_pars_fragment:Kf,batching_pars_vertex:jf,batching_vertex:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:up,color_pars_vertex:hp,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:vp,emissivemap_pars_fragment:yp,colorspace_fragment:xp,colorspace_pars_fragment:bp,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:Ep,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Fp,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Np,lights_pars_begin:Up,lights_toon_fragment:kp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Gp,lights_fragment_maps:$p,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Jp,map_fragment:Zp,map_pars_fragment:Kp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:em,metalnessmap_pars_fragment:tm,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:am,normal_fragment_begin:om,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:um,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:vm,premultiplied_alpha_fragment:ym,project_vertex:xm,dithering_fragment:bm,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Im,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:Nm,tonemapping_fragment:Um,tonemapping_pars_fragment:Fm,transmission_fragment:km,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:zm,uv_vertex:Hm,worldpos_vertex:Vm,background_vert:Gm,background_frag:$m,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Jm,depth_frag:Zm,distanceRGBA_vert:Km,distanceRGBA_frag:jm,equirect_vert:Qm,equirect_frag:eg,linedashed_vert:tg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:ag,meshmatcap_vert:og,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:ug,meshphong_vert:hg,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:vg,shadow_vert:yg,shadow_frag:xg,sprite_vert:bg,sprite_frag:Mg},ge={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Rn={basic:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ft([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ft([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ft([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ft([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ft([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ft([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ft([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ft([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ft([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ft([ge.lights,ge.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Rn.physical={uniforms:Ft([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Lo={r:0,b:0,g:0},Di=new _n,Sg=new vt;function Eg(i,e,t,n,s,r,a){let o=new qe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function b(y){let x=!1,R=g(y);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let R=g(x);R&&(R.isCubeTexture||R.mapping===br)?(u===void 0&&(u=new Tt(new us(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Li(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Di.copy(x.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(Di)),u.material.toneMapped=et.getTransfer(R.colorSpace)!==at,(h!==R||d!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Tt(new Ai(2,2),new vn({name:"BackgroundMaterial",uniforms:Li(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(R.colorSpace)!==at,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Lo,ic(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,x,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:b,addToRenderList:m,dispose:v}}function wg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,P,B,H,q){let J=!1,X=h(H,B,P);r!==X&&(r=X,c(r.object)),J=f(S,H,B,q),J&&g(S,H,B,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(S,P,B,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,P,B){let H=B.wireframe===!0,q=n[S.id];q===void 0&&(q={},n[S.id]=q);let J=q[P.id];J===void 0&&(J={},q[P.id]=J);let X=J[H];return X===void 0&&(X=d(l()),J[H]=X),X}function d(S){let P=[],B=[],H=[];for(let q=0;q<t;q++)P[q]=0,B[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:H,object:S,attributes:{},index:null}}function f(S,P,B,H){let q=r.attributes,J=P.attributes,X=0,ie=B.getAttributes();for(let $ in ie)if(ie[$].location>=0){let _e=q[$],Me=J[$];if(Me===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),_e===void 0||_e.attribute!==Me||Me&&_e.data!==Me.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function g(S,P,B,H){let q={},J=P.attributes,X=0,ie=B.getAttributes();for(let $ in ie)if(ie[$].location>=0){let _e=J[$];_e===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor));let Me={};Me.attribute=_e,_e&&_e.data&&(Me.data=_e.data),q[$]=Me,X++}r.attributes=q,r.attributesNum=X,r.index=H}function b(){let S=r.newAttributes;for(let P=0,B=S.length;P<B;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){let B=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;B[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),q[S]!==P&&(i.vertexAttribDivisor(S,P),q[S]=P)}function v(){let S=r.newAttributes,P=r.enabledAttributes;for(let B=0,H=P.length;B<H;B++)P[B]!==S[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function y(S,P,B,H,q,J,X){X===!0?i.vertexAttribIPointer(S,P,B,q,J):i.vertexAttribPointer(S,P,B,H,q,J)}function x(S,P,B,H){b();let q=H.attributes,J=B.getAttributes(),X=P.defaultAttributeValues;for(let ie in J){let $=J[ie];if($.location>=0){let he=q[ie];if(he===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){let _e=he.normalized,Me=he.itemSize,Oe=e.get(he);if(Oe===void 0)continue;let je=Oe.buffer,tt=Oe.type,Z=Oe.bytesPerElement,U=tt===i.INT||tt===i.UNSIGNED_INT||he.gpuType===Ka;if(he.isInterleavedBufferAttribute){let G=he.data,ce=G.stride,ve=he.offset;if(G.isInstancedInterleavedBuffer){for(let Se=0;Se<$.locationSize;Se++)p($.location+Se,G.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Se=0;Se<$.locationSize;Se++)m($.location+Se);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Se=0;Se<$.locationSize;Se++)y($.location+Se,Me/$.locationSize,tt,_e,ce*Z,(ve+Me/$.locationSize*Se)*Z,U)}else{if(he.isInstancedBufferAttribute){for(let G=0;G<$.locationSize;G++)p($.location+G,he.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let G=0;G<$.locationSize;G++)m($.location+G);i.bindBuffer(i.ARRAY_BUFFER,je);for(let G=0;G<$.locationSize;G++)y($.location+G,Me/$.locationSize,tt,_e,Me*Z,Me/$.locationSize*G*Z,U)}}else if(X!==void 0){let _e=X[ie];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv($.location,_e);break;case 3:i.vertexAttrib3fv($.location,_e);break;case 4:i.vertexAttrib4fv($.location,_e);break;default:i.vertexAttrib1fv($.location,_e)}}}}v()}function R(){N();for(let S in n){let P=n[S];for(let B in P){let H=P[B];for(let q in H)u(H[q].object),delete H[q];delete P[B]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let B in P){let H=P[B];for(let q in H)u(H[q].object),delete H[q];delete P[B]}delete n[S.id]}function I(S){for(let P in n){let B=n[P];if(B[S.id]===void 0)continue;let H=B[S.id];for(let q in H)u(H[q].object),delete H[q];delete B[S.id]}}function N(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function Tg(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let b=0;b<h;b++)g+=u[b]*d[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ag(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==ln&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let N=I===ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==yn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Cn&&!N)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function Cg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Sn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,y=v*4,x=p.clippingState||null;l.value=x,x=u(g,d,y,f);for(let R=0;R!==y;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let b=h!==null?h.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==b;++y,x+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Rg(i){let e=new WeakMap;function t(a,o){return o===Ya?a.mapping=Ri:o===Ja&&(a.mapping=Ii),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ya||o===Ja)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ma(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ss=4,hh=[.125,.215,.35,.446,.526,.582],Fi=20,lc=new vr,dh=new qe,cc=null,uc=0,hc=0,dc=!1,Ui=(1+Math.sqrt(5))/2,Ms=1/Ui,fh=[new D(-Ui,Ms,0),new D(Ui,Ms,0),new D(-Ms,0,Ui),new D(Ms,0,Ui),new D(0,Ui,-Ms),new D(0,Ui,Ms),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Ig=new D,Uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ig}=r;cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,uc,hc),this._renderer.xr.enabled=dc,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),hc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ys,format:ln,colorSpace:wi,depthBuffer:!1},s=ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pg(r)),this._blurMaterial=Lg(r,e,t)}return s}_compileMaterial(e){let t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(dh),h.toneMapping=Vn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let b=new Ys({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new Tt(new us,b),p=!1,v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,p=!0):(b.color.copy(dh),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let R=this._cubeSize;Do(s,x*R,y>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ri||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fh[(s-r-1)%fh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Tt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),b=r/g,m=isFinite(r)?1+Math.floor(u*b):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let p=[],v=0;for(let I=0;I<Fi;++I){let N=I/b,E=Math.exp(-N*N/2);p.push(E),I===0?v+=E:I<m&&(v+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let x=this._sizeLods[s],R=3*x*(s>y-Ss?s-y+Ss:0),A=4*(this._cubeSize-x);Do(t,R,A,3*x,2*x),l.setRenderTarget(t),l.render(h,lc)}};function Pg(i){let e=[],t=[],n=[],s=i,r=i-Ss+1+hh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ss?l=hh[a-i+Ss-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,N=A>2?0:-1,E=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];v.set(E,b*g*A),y.set(d,m*g*A);let S=[A,A,A,A,A,A];x.set(S,p*g*A)}let R=new on;R.setAttribute("position",new Zt(v,b)),R.setAttribute("uv",new Zt(y,m)),R.setAttribute("faceIndex",new Zt(x,p)),e.push(R),s>Ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ph(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lg(i,e,t){let n=new Float32Array(Fi),s=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function mh(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function gh(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function Dg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ya||l===Ja,u=l===Ri||l===Ii;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Uo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Uo(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ng(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ug(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let y=0,x=v.length;y<x;y+=3){let R=v[y+0],A=v[y+1],I=v[y+2];d.push(R,A,A,I,I,R)}}else if(g!==void 0){let v=g.array;b=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let R=y+0,A=y+1,I=y+2;d.push(R,A,A,I,I,R)}}else return;let m=new(nc(d)?Zs:Js)(d,1);m.version=b;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Fg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*b[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Og(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),b===!0&&(y=3);let x=o.attributes.position.count*y,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*R*4*h),I=new Xs(A,x,R,h);I.type=Cn,I.needsUpdate=!0;let N=y*4;for(let S=0;S<h;S++){let P=m[S],B=p[S],H=v[S],q=x*R*4*S;for(let J=0;J<P.count;J++){let X=J*N;f===!0&&(s.fromBufferAttribute(P,J),A[q+X+0]=s.x,A[q+X+1]=s.y,A[q+X+2]=s.z,A[q+X+3]=0),g===!0&&(s.fromBufferAttribute(B,J),A[q+X+4]=s.x,A[q+X+5]=s.y,A[q+X+6]=s.z,A[q+X+7]=0),b===!0&&(s.fromBufferAttribute(H,J),A[q+X+8]=s.x,A[q+X+9]=s.y,A[q+X+10]=s.z,A[q+X+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new me(x,R)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Bg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Uh=new Kt,_h=new er(1,1),Fh=new Xs,kh=new xa,Oh=new js,vh=[],yh=[],xh=new Float32Array(16),bh=new Float32Array(9),Mh=new Float32Array(4);function ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ko(i,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function $g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Mh.set(n),i.uniformMatrix2fv(this.addr,!1,Mh),Ct(t,n)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),Ct(t,n)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;xh.set(n),i.uniformMatrix4fv(this.addr,!1,xh),Ct(t,n)}}function qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=Ql,r=_h):r=Uh,t.setTexture2D(e||r,s)}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kh,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Oh,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fh,s)}function r_(i){switch(i){case 5126:return zg;case 35664:return Hg;case 35665:return Vg;case 35666:return Gg;case 35674:return $g;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Jg;case 35669:case 35673:return Zg;case 5125:return Kg;case 36294:return jg;case 36295:return Qg;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function a_(i,e){i.uniform1fv(this.addr,e)}function o_(i,e){let t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function l_(i,e){let t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function c_(i,e){let t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function u_(i,e){let t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h_(i,e){let t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){let t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f_(i,e){i.uniform1iv(this.addr,e)}function p_(i,e){i.uniform2iv(this.addr,e)}function m_(i,e){i.uniform3iv(this.addr,e)}function g_(i,e){i.uniform4iv(this.addr,e)}function __(i,e){i.uniform1uiv(this.addr,e)}function v_(i,e){i.uniform2uiv(this.addr,e)}function y_(i,e){i.uniform3uiv(this.addr,e)}function x_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Uh,r[a])}function M_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kh,r[a])}function S_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Oh,r[a])}function E_(i,e,t){let n=this.cache,s=e.length,r=ko(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Fh,r[a])}function w_(i){switch(i){case 5126:return a_;case 35664:return o_;case 35665:return l_;case 35666:return c_;case 35674:return u_;case 35675:return h_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return v_;case 36295:return y_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return E_}}var pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r_(t.type)}},mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w_(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function Sh(i,e){i.seq.push(e),i.map[e.id]=e}function T_(i,e,t){let n=i.name,s=n.length;for(fc.lastIndex=0;;){let r=fc.exec(n),a=fc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Sh(t,c===void 0?new pc(o,i,e):new mc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new gc(o),Sh(t,h)),t=h}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);T_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Eh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A_=37297,C_=0;function R_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var wh=new He;function I_(i){et._getMatrix(wh,et.workingColorSpace,i);let e=`mat3( ${wh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Th(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+R_(i.getShaderSource(e),o)}else return r}function P_(i,e){let t=I_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L_(i,e){let t;switch(e){case Bu:t="Linear";break;case zu:t="Reinhard";break;case Hu:t="Cineon";break;case qa:t="ACESFilmic";break;case Gu:t="AgX";break;case $u:t="Neutral";break;case Vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var No=new D;function D_(){et.getLuminanceCoefficients(No);let i=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function U_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cr(i){return i!==""}function Ah(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(k_,B_)}var O_=new Map;function B_(i,e){let t=Ye[e];if(t===void 0){let n=O_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _c(t)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(i){return i.replace(z_,H_)}function H_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ih(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function V_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ii:e="ENVMAP_TYPE_CUBE";break;case br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ii&&(e="ENVMAP_MODE_REFRACTION"),e}function W_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case ku:e="ENVMAP_BLENDING_MIX";break;case Ou:e="ENVMAP_BLENDING_ADD";break}return e}function X_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function q_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=V_(t),c=G_(t),u=$_(t),h=W_(t),d=X_(t),f=N_(t),g=U_(r),b=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[Ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Vn?L_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),D_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=_c(a),a=Ah(a,t),a=Ch(a,t),o=_c(o),o=Ah(o,t),o=Ch(o,t),a=Rh(a),o=Rh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+a,x=v+p+o,R=Eh(s,s.VERTEX_SHADER,y),A=Eh(s,s.FRAGMENT_SHADER,x);s.attachShader(b,R),s.attachShader(b,A),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(P){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(b)||"",H=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(A)||"",J=B.trim(),X=H.trim(),ie=q.trim(),$=!0,he=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,R,A);else{let _e=Th(s,R,"vertex"),Me=Th(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+J+`
`+_e+`
`+Me)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(X===""||ie==="")&&(he=!1);he&&(P.diagnostics={runnable:$,programLog:J,vertexShader:{log:X,prefix:m},fragmentShader:{log:ie,prefix:p}})}s.deleteShader(R),s.deleteShader(A),N=new Es(s,b),E=F_(s,b)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(b,A_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=A,this}var Y_=0,vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yc(e),t.set(e,n)),n}},yc=class{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}};function J_(i,e,t,n,s,r,a){let o=new cs,l=new vc,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,P,B,H){let q=B.fog,J=H.geometry,X=E.isMeshStandardMaterial?B.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),$=ie&&ie.mapping===br?ie.image.height:null,he=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let _e=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Me=_e!==void 0?_e.length:0,Oe=0;J.morphAttributes.position!==void 0&&(Oe=1),J.morphAttributes.normal!==void 0&&(Oe=2),J.morphAttributes.color!==void 0&&(Oe=3);let je,tt,Z,U;if(he){let rt=Rn[he];je=rt.vertexShader,tt=rt.fragmentShader}else je=E.vertexShader,tt=E.fragmentShader,l.update(E),Z=l.getVertexShaderID(E),U=l.getFragmentShaderID(E);let G=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),ve=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,Ge=!!E.map,it=!!E.matcap,T=!!ie,te=!!E.aoMap,Q=!!E.lightMap,j=!!E.bumpMap,K=!!E.normalMap,de=!!E.displacementMap,se=!!E.emissiveMap,fe=!!E.metalnessMap,$e=!!E.roughnessMap,ze=E.anisotropy>0,w=E.clearcoat>0,_=E.dispersion>0,O=E.iridescence>0,W=E.sheen>0,ne=E.transmission>0,Y=ze&&!!E.anisotropyMap,Pe=w&&!!E.clearcoatMap,ue=w&&!!E.clearcoatNormalMap,Ce=w&&!!E.clearcoatRoughnessMap,Re=O&&!!E.iridescenceMap,re=O&&!!E.iridescenceThicknessMap,be=W&&!!E.sheenColorMap,ke=W&&!!E.sheenRoughnessMap,Le=!!E.specularMap,ye=!!E.specularColorMap,Xe=!!E.specularIntensityMap,L=ne&&!!E.transmissionMap,le=ne&&!!E.thicknessMap,pe=!!E.gradientMap,we=!!E.alphaMap,ae=E.alphaTest>0,ee=!!E.alphaHash,Ie=!!E.extensions,We=Vn;E.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(We=i.toneMapping);let ht={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:tt,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:U,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:ve,instancingColor:ve&&H.instanceColor!==null,instancingMorph:ve&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:wi,alphaToCoverage:!!E.alphaToCoverage,map:Ge,matcap:it,envMap:T,envMapMode:T&&ie.mapping,envMapCubeUVHeight:$,aoMap:te,lightMap:Q,bumpMap:j,normalMap:K,displacementMap:d&&de,emissiveMap:se,normalMapObjectSpace:K&&E.normalMapType===Yu,normalMapTangentSpace:K&&E.normalMapType===jl,metalnessMap:fe,roughnessMap:$e,anisotropy:ze,anisotropyMap:Y,clearcoat:w,clearcoatMap:Pe,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:O,iridescenceMap:Re,iridescenceThicknessMap:re,sheen:W,sheenColorMap:be,sheenRoughnessMap:ke,specularMap:Le,specularColorMap:ye,specularIntensityMap:Xe,transmission:ne,transmissionMap:L,thicknessMap:le,gradientMap:pe,opaque:E.transparent===!1&&E.blending===Si&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:ae,alphaHash:ee,combine:E.combine,mapUv:Ge&&b(E.map.channel),aoMapUv:te&&b(E.aoMap.channel),lightMapUv:Q&&b(E.lightMap.channel),bumpMapUv:j&&b(E.bumpMap.channel),normalMapUv:K&&b(E.normalMap.channel),displacementMapUv:de&&b(E.displacementMap.channel),emissiveMapUv:se&&b(E.emissiveMap.channel),metalnessMapUv:fe&&b(E.metalnessMap.channel),roughnessMapUv:$e&&b(E.roughnessMap.channel),anisotropyMapUv:Y&&b(E.anisotropyMap.channel),clearcoatMapUv:Pe&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:re&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:ke&&b(E.sheenRoughnessMap.channel),specularMapUv:Le&&b(E.specularMap.channel),specularColorMapUv:ye&&b(E.specularColorMap.channel),specularIntensityMapUv:Xe&&b(E.specularIntensityMap.channel),transmissionMapUv:L&&b(E.transmissionMap.channel),thicknessMapUv:le&&b(E.thicknessMap.channel),alphaMapUv:we&&b(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(K||ze),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Ge||we),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===An,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let S=g[E.type],P;if(S){let B=Rn[S];P=rh.clone(B.uniforms)}else P=E.uniforms;return P}function R(E,S){let P;for(let B=0,H=u.length;B<H;B++){let q=u[B];if(q.cacheKey===S){P=q,++P.usedTimes;break}}return P===void 0&&(P=new q_(i,S,E,r),u.push(P)),P}function A(E){if(--E.usedTimes===0){let S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function I(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:N}}function Z_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function K_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,b,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function o(h,d,f,g,b,m){let p=a(h,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,b,m){let p=a(h,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||K_),n.length>1&&n.sort(d||Ph),s.length>1&&s.sort(d||Ph)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function j_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Lh,i.set(n,[a])):s>=r.length?(a=new Lh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var tv=0;function nv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iv(i){let e=new Q_,t=ev(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new vt,a=new vt;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,v=0,y=0,x=0,R=0,A=0,I=0;c.sort(nv);for(let E=0,S=c.length;E<S;E++){let P=c[E],B=P.color,H=P.intensity,q=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*H,h+=B.g*H,d+=B.b*H;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],H);I++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,$=t.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=X,f++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[b]=X;let ie=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,ie.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[b]=ie.matrix,P.castShadow){let $=t.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,n.spotShadow[b]=$,n.spotShadowMap[b]=J,x++}b++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let ie=P.shadow,$=t.get(P);$.shadowIntensity=ie.intensity,$.shadowBias=ie.bias,$.shadowNormalBias=ie.normalBias,$.shadowRadius=ie.radius,$.shadowMapSize=ie.mapSize,$.shadowCameraNear=ie.camera.near,$.shadowCameraFar=ie.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(H),X.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==b||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==x||N.numSpotMaps!==R||N.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,N.directionalLength=f,N.pointLength=g,N.spotLength=b,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=x,N.numSpotMaps=R,N.numLightProbes=I,n.version=tv++)}function l(c,u){let h=0,d=0,f=0,g=0,b=0,m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function Dh(i){let e=new iv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Dh(i),e.set(s,[o])):r>=a.length?(o=new Dh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`;function ov(i,e,t){let n=new ds,s=new me,r=new me,a=new yt,o=new Ca({depthPacking:qu}),l=new Ra,c={},u=t.maxTextureSize,h={[On]:Vt,[Vt]:On,[An]:An},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:rv,fragmentShader:av}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ol;let p=this.type;this.render=function(A,I,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Hn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=p!==Tn&&this.type===Tn,q=p===Tn&&this.type!==Tn;for(let J=0,X=A.length;J<X;J++){let ie=A[J],$=ie.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let he=$.getFrameExtents();if(s.multiply(he),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,$.mapSize.y=r.y)),$.map===null||H===!0||q===!0){let Me=this.type!==Tn?{minFilter:an,magFilter:an}:{};$.map!==null&&$.map.dispose(),$.map=new wn(s.x,s.y,Me),$.map.texture.name=ie.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let _e=$.getViewportCount();for(let Me=0;Me<_e;Me++){let Oe=$.getViewport(Me);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),B.viewport(a),$.updateMatrices(ie,Me),n=$.getFrustum(),x(I,N,$.camera,ie,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&v($,N),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,P)};function v(A,I){let N=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(I,null,N,d,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(I,null,N,f,b,null)}function y(A,I,N,E){let S=null,P=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=N.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let B=S.uuid,H=I.uuid,q=c[B];q===void 0&&(q={},c[B]=q);let J=q[H];J===void 0&&(J=S.clone(),q[H]=J,I.addEventListener("dispose",R)),S=J}if(S.visible=I.visible,S.wireframe=I.wireframe,E===Tn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=i.properties.get(S);B.light=N}return S}function x(A,I,N,E,S){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);let H=e.update(A),q=A.material;if(Array.isArray(q)){let J=H.groups;for(let X=0,ie=J.length;X<ie;X++){let $=J[X],he=q[$.materialIndex];if(he&&he.visible){let _e=y(A,he,E,S);A.onBeforeShadow(i,A,I,N,H,_e,$),i.renderBufferDirect(N,null,H,_e,A,$),A.onAfterShadow(i,A,I,N,H,_e,$)}}}else if(q.visible){let J=y(A,q,E,S);A.onBeforeShadow(i,A,I,N,H,J,null),i.renderBufferDirect(N,null,H,J,A,null),A.onAfterShadow(i,A,I,N,H,J,null)}}let B=A.children;for(let H=0,q=B.length;H<q;H++)x(B[H],I,N,E,S)}function R(A){A.target.removeEventListener("dispose",R);for(let N in c){let E=c[N],S=A.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var lv={[za]:Ha,[Va]:Wa,[Ga]:Xa,[Ei]:$a,[Ha]:za,[Wa]:Va,[Xa]:Ga,[$a]:Ei};function cv(i,e){function t(){let L=!1,le=new yt,pe=null,we=new yt(0,0,0,0);return{setMask:function(ae){pe!==ae&&!L&&(i.colorMask(ae,ae,ae,ae),pe=ae)},setLocked:function(ae){L=ae},setClear:function(ae,ee,Ie,We,ht){ht===!0&&(ae*=We,ee*=We,Ie*=We),le.set(ae,ee,Ie,We),we.equals(le)===!1&&(i.clearColor(ae,ee,Ie,We),we.copy(le))},reset:function(){L=!1,pe=null,we.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,pe=null,we=null,ae=null;return{setReversed:function(ee){if(le!==ee){let Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let We=ae;ae=null,this.setClear(We)}},getReversed:function(){return le},setTest:function(ee){ee?G(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!L&&(i.depthMask(ee),pe=ee)},setFunc:function(ee){if(le&&(ee=lv[ee]),we!==ee){switch(ee){case za:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Ga:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=ee}},setLocked:function(ee){L=ee},setClear:function(ee){ae!==ee&&(le&&(ee=1-ee),i.clearDepth(ee),ae=ee)},reset:function(){L=!1,pe=null,we=null,ae=null,le=!1}}}function s(){let L=!1,le=null,pe=null,we=null,ae=null,ee=null,Ie=null,We=null,ht=null;return{setTest:function(rt){L||(rt?G(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(rt){le!==rt&&!L&&(i.stencilMask(rt),le=rt)},setFunc:function(rt,Pn,Mn){(pe!==rt||we!==Pn||ae!==Mn)&&(i.stencilFunc(rt,Pn,Mn),pe=rt,we=Pn,ae=Mn)},setOp:function(rt,Pn,Mn){(ee!==rt||Ie!==Pn||We!==Mn)&&(i.stencilOp(rt,Pn,Mn),ee=rt,Ie=Pn,We=Mn)},setLocked:function(rt){L=rt},setClear:function(rt){ht!==rt&&(i.clearStencil(rt),ht=rt)},reset:function(){L=!1,le=null,pe=null,we=null,ae=null,ee=null,Ie=null,We=null,ht=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,y=null,x=null,R=null,A=null,I=new qe(0,0,0),N=0,E=!1,S=null,P=null,B=null,H=null,q=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ie=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ie>=1):$.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ie>=2);let he=null,_e={},Me=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),je=new yt().fromArray(Me),tt=new yt().fromArray(Oe);function Z(L,le,pe,we){let ae=new Uint8Array(4),ee=i.createTexture();i.bindTexture(L,ee),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<pe;Ie++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(le+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ee}let U={};U[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),U[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),U[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(i.DEPTH_TEST),a.setFunc(Ei),j(!1),K(kl),G(i.CULL_FACE),te(Hn);function G(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ce(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function ve(L,le){return h[L]!==le?(i.bindFramebuffer(L,le),h[L]=le,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Se(L,le){let pe=f,we=!1;if(L){pe=d.get(le),pe===void 0&&(pe=[],d.set(le,pe));let ae=L.textures;if(pe.length!==ae.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ie=ae.length;ee<Ie;ee++)pe[ee]=i.COLOR_ATTACHMENT0+ee;pe.length=ae.length,we=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,we=!0);we&&i.drawBuffers(pe)}function Ge(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let it={[Qn]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};it[Mu]=i.MIN,it[Su]=i.MAX;let T={[Eu]:i.ZERO,[wu]:i.ONE,[Tu]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Nu]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(L,le,pe,we,ae,ee,Ie,We,ht,rt){if(L===Hn){b===!0&&(ce(i.BLEND),b=!1);return}if(b===!1&&(G(i.BLEND),b=!0),L!==yu){if(L!==m||rt!==E){if((p!==Qn||x!==Qn)&&(i.blendEquation(i.FUNC_ADD),p=Qn,x=Qn),rt)switch(L){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,y=null,R=null,A=null,I.set(0,0,0),N=0,m=L,E=rt}return}ae=ae||le,ee=ee||pe,Ie=Ie||we,(le!==p||ae!==x)&&(i.blendEquationSeparate(it[le],it[ae]),p=le,x=ae),(pe!==v||we!==y||ee!==R||Ie!==A)&&(i.blendFuncSeparate(T[pe],T[we],T[ee],T[Ie]),v=pe,y=we,R=ee,A=Ie),(We.equals(I)===!1||ht!==N)&&(i.blendColor(We.r,We.g,We.b,ht),I.copy(We),N=ht),m=L,E=!1}function Q(L,le){L.side===An?ce(i.CULL_FACE):G(i.CULL_FACE);let pe=L.side===Vt;le&&(pe=!pe),j(pe),L.blending===Si&&L.transparent===!1?te(Hn):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let we=L.stencilWrite;o.setTest(we),we&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function K(L){L!==gu?(G(i.CULL_FACE),L!==P&&(L===kl?i.cullFace(i.BACK):L===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),P=L}function de(L){L!==B&&(X&&i.lineWidth(L),B=L)}function se(L,le,pe){L?(G(i.POLYGON_OFFSET_FILL),(H!==le||q!==pe)&&(i.polygonOffset(le,pe),H=le,q=pe)):ce(i.POLYGON_OFFSET_FILL)}function fe(L){L?G(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function $e(L){L===void 0&&(L=i.TEXTURE0+J-1),he!==L&&(i.activeTexture(L),he=L)}function ze(L,le,pe){pe===void 0&&(he===null?pe=i.TEXTURE0+J-1:pe=he);let we=_e[pe];we===void 0&&(we={type:void 0,texture:void 0},_e[pe]=we),(we.type!==L||we.texture!==le)&&(he!==pe&&(i.activeTexture(pe),he=pe),i.bindTexture(L,le||U[L]),we.type=L,we.texture=le)}function w(){let L=_e[he];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){je.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),je.copy(L))}function ke(L){tt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function Le(L,le){let pe=c.get(le);pe===void 0&&(pe=new WeakMap,c.set(le,pe));let we=pe.get(L);we===void 0&&(we=i.getUniformBlockIndex(le,L.name),pe.set(L,we))}function ye(L,le){let we=c.get(le).get(L);l.get(le)!==we&&(i.uniformBlockBinding(le,we,L.__bindingPointIndex),l.set(le,we))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,_e={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,y=null,x=null,R=null,A=null,I=new qe(0,0,0),N=0,E=!1,S=null,P=null,B=null,H=null,q=null,je.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:G,disable:ce,bindFramebuffer:ve,drawBuffers:Se,useProgram:Ge,setBlending:te,setMaterial:Q,setFlipSided:j,setCullFace:K,setLineWidth:de,setPolygonOffset:se,setScissorTest:fe,activeTexture:$e,bindTexture:ze,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Re,texImage3D:re,updateUBOMapping:Le,uniformBlockBinding:ye,texStorage2D:ue,texStorage3D:Ce,texSubImage2D:W,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:be,viewport:ke,reset:Xe}}function uv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return f?new OffscreenCanvas(w,_):Ws("canvas")}function b(w,_,O){let W=1,ne=ze(w);if((ne.width>O||ne.height>O)&&(W=O/Math.max(ne.width,ne.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(W*ne.width),Pe=Math.floor(W*ne.height);h===void 0&&(h=g(Y,Pe));let ue=_?g(Y,Pe):h;return ue.width=Y,ue.height=Pe,ue.getContext("2d").drawImage(w,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Pe+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,_,O,W,ne=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=_;if(_===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Pe=ne?Gs:et.getTransfer(W);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Pe===at?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(w,_){let O;return w?_===null||_===ai||_===xs?O=i.DEPTH24_STENCIL8:_===Cn?O=i.DEPTH32F_STENCIL8:_===vs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ai||_===xs?O=i.DEPTH_COMPONENT24:_===Cn?O=i.DEPTH_COMPONENT32F:_===vs&&(O=i.DEPTH_COMPONENT16),O}function R(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==gn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){let _=w.target;_.removeEventListener("dispose",A),N(_),_.isVideoTexture&&u.delete(_)}function I(w){let _=w.target;_.removeEventListener("dispose",I),S(_)}function N(w){let _=n.get(w);if(_.__webglInit===void 0)return;let O=w.source,W=d.get(O);if(W){let ne=W[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(w),Object.keys(W).length===0&&d.delete(O)}n.remove(w)}function E(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let O=w.source,W=d.get(O);delete W[_.__cacheKey],a.memory.textures--}function S(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let ne=0;ne<_.__webglFramebuffer[W].length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[W][ne]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=w.textures;for(let W=0,ne=O.length;W<ne;W++){let Y=n.get(O[W]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[W])}n.remove(w)}let P=0;function B(){P=0}function H(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function q(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function J(w,_){let O=n.get(w);if(w.isVideoTexture&&fe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function X(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){U(O,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function ie(w,_){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){U(O,w,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function $(w,_){let O=n.get(w);if(w.version>0&&O.__version!==w.version){G(O,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let he={[ma]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},_e={[an]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},Me={[Ju]:i.NEVER,[th]:i.ALWAYS,[Zu]:i.LESS,[Ql]:i.LEQUAL,[Ku]:i.EQUAL,[eh]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function Oe(w,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===gn||_.magFilter===Za||_.magFilter===Mr||_.magFilter===ri||_.minFilter===gn||_.minFilter===Za||_.minFilter===Mr||_.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,he[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,he[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,he[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==Mr&&_.minFilter!==ri||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function je(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",A));let W=_.source,ne=d.get(W);ne===void 0&&(ne={},d.set(W,ne));let Y=q(_);if(Y!==w.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ne[Y].usedTimes++;let Pe=ne[w.__cacheKey];Pe!==void 0&&(ne[w.__cacheKey].usedTimes--,Pe.usedTimes===0&&E(_)),w.__cacheKey=Y,w.__webglTexture=ne[Y].texture}return O}function tt(w,_,O){return Math.floor(Math.floor(w/O)/_)}function Z(w,_,O,W){let Y=w.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,W,_.data);else{Y.sort((re,be)=>re.start-be.start);let Pe=0;for(let re=1;re<Y.length;re++){let be=Y[Pe],ke=Y[re],Le=be.start+be.count,ye=tt(ke.start,_.width,4),Xe=tt(be.start,_.width,4);ke.start<=Le+1&&ye===Xe&&tt(ke.start+ke.count-1,_.width,4)===ye?be.count=Math.max(be.count,ke.start+ke.count-be.start):(++Pe,Y[Pe]=ke)}Y.length=Pe+1;let ue=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let re=0,be=Y.length;re<be;re++){let ke=Y[re],Le=Math.floor(ke.start/4),ye=Math.ceil(ke.count/4),Xe=Le%_.width,L=Math.floor(Le/_.width),le=ye,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Xe,L,le,pe,O,W,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function U(w,_,O){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let ne=je(w,_),Y=_.source;t.bindTexture(W,w.__webglTexture,i.TEXTURE0+O);let Pe=n.get(Y);if(Y.version!==Pe.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);let ue=et.getPrimaries(et.workingColorSpace),Ce=_.colorSpace===Gn?null:et.getPrimaries(_.colorSpace),Re=_.colorSpace===Gn||ue===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=b(_.image,!1,s.maxTextureSize);re=$e(_,re);let be=r.convert(_.format,_.colorSpace),ke=r.convert(_.type),Le=y(_.internalFormat,be,ke,_.colorSpace,_.isVideoTexture);Oe(W,_);let ye,Xe=_.mipmaps,L=_.isVideoTexture!==!0,le=Pe.__version===void 0||ne===!0,pe=Y.dataReady,we=R(_,re);if(_.isDepthTexture)Le=x(_.format===bs,_.type),le&&(L?t.texStorage2D(i.TEXTURE_2D,1,Le,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Le,re.width,re.height,0,be,ke,null));else if(_.isDataTexture)if(Xe.length>0){L&&le&&t.texStorage2D(i.TEXTURE_2D,we,Le,Xe[0].width,Xe[0].height);for(let ae=0,ee=Xe.length;ae<ee;ae++)ye=Xe[ae],L?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ke,ye.data):t.texImage2D(i.TEXTURE_2D,ae,Le,ye.width,ye.height,0,be,ke,ye.data);_.generateMipmaps=!1}else L?(le&&t.texStorage2D(i.TEXTURE_2D,we,Le,re.width,re.height),pe&&Z(_,re,be,ke)):t.texImage2D(i.TEXTURE_2D,0,Le,re.width,re.height,0,be,ke,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Le,Xe[0].width,Xe[0].height,re.depth);for(let ae=0,ee=Xe.length;ae<ee;ae++)if(ye=Xe[ae],_.format!==ln)if(be!==null)if(L){if(pe)if(_.layerUpdates.size>0){let Ie=oc(ye.width,ye.height,_.format,_.type);for(let We of _.layerUpdates){let ht=ye.data.subarray(We*Ie/ye.data.BYTES_PER_ELEMENT,(We+1)*Ie/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,We,ye.width,ye.height,1,be,ht)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,re.depth,be,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Le,ye.width,ye.height,re.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,re.depth,be,ke,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Le,ye.width,ye.height,re.depth,0,be,ke,ye.data)}else{L&&le&&t.texStorage2D(i.TEXTURE_2D,we,Le,Xe[0].width,Xe[0].height);for(let ae=0,ee=Xe.length;ae<ee;ae++)ye=Xe[ae],_.format!==ln?be!==null?L?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Le,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ke,ye.data):t.texImage2D(i.TEXTURE_2D,ae,Le,ye.width,ye.height,0,be,ke,ye.data)}else if(_.isDataArrayTexture)if(L){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Le,re.width,re.height,re.depth),pe)if(_.layerUpdates.size>0){let ae=oc(re.width,re.height,_.format,_.type);for(let ee of _.layerUpdates){let Ie=re.data.subarray(ee*ae/re.data.BYTES_PER_ELEMENT,(ee+1)*ae/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,be,ke,Ie)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,ke,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,be,ke,re.data);else if(_.isData3DTexture)L?(le&&t.texStorage3D(i.TEXTURE_3D,we,Le,re.width,re.height,re.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,ke,re.data)):t.texImage3D(i.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,be,ke,re.data);else if(_.isFramebufferTexture){if(le)if(L)t.texStorage2D(i.TEXTURE_2D,we,Le,re.width,re.height);else{let ae=re.width,ee=re.height;for(let Ie=0;Ie<we;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Le,ae,ee,0,be,ke,null),ae>>=1,ee>>=1}}else if(Xe.length>0){if(L&&le){let ae=ze(Xe[0]);t.texStorage2D(i.TEXTURE_2D,we,Le,ae.width,ae.height)}for(let ae=0,ee=Xe.length;ae<ee;ae++)ye=Xe[ae],L?pe&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be,ke,ye):t.texImage2D(i.TEXTURE_2D,ae,Le,be,ke,ye);_.generateMipmaps=!1}else if(L){if(le){let ae=ze(re);t.texStorage2D(i.TEXTURE_2D,we,Le,ae.width,ae.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,ke,re)}else t.texImage2D(i.TEXTURE_2D,0,Le,be,ke,re);m(_)&&p(W),Pe.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function G(w,_,O){if(_.image.length!==6)return;let W=je(w,_),ne=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let Y=n.get(ne);if(ne.version!==Y.__version||W===!0){t.activeTexture(i.TEXTURE0+O);let Pe=et.getPrimaries(et.workingColorSpace),ue=_.colorSpace===Gn?null:et.getPrimaries(_.colorSpace),Ce=_.colorSpace===Gn||Pe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Re=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!Re&&!re?be[ee]=b(_.image[ee],!0,s.maxCubemapSize):be[ee]=re?_.image[ee].image:_.image[ee],be[ee]=$e(_,be[ee]);let ke=be[0],Le=r.convert(_.format,_.colorSpace),ye=r.convert(_.type),Xe=y(_.internalFormat,Le,ye,_.colorSpace),L=_.isVideoTexture!==!0,le=Y.__version===void 0||W===!0,pe=ne.dataReady,we=R(_,ke);Oe(i.TEXTURE_CUBE_MAP,_);let ae;if(Re){L&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,ke.width,ke.height);for(let ee=0;ee<6;ee++){ae=be[ee].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){let We=ae[Ie];_.format!==ln?Le!==null?L?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,We.width,We.height,Le,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,We.width,We.height,Le,ye,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,Xe,We.width,We.height,0,Le,ye,We.data)}}}else{if(ae=_.mipmaps,L&&le){ae.length>0&&we++;let ee=ze(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,Le,ye,be[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,be[ee].width,be[ee].height,0,Le,ye,be[ee].data);for(let Ie=0;Ie<ae.length;Ie++){let ht=ae[Ie].image[ee].image;L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,ht.width,ht.height,Le,ye,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,Xe,ht.width,ht.height,0,Le,ye,ht.data)}}else{L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,ye,be[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Le,ye,be[ee]);for(let Ie=0;Ie<ae.length;Ie++){let We=ae[Ie];L?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,Le,ye,We.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,Xe,Le,ye,We.image[ee])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ne.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ce(w,_,O,W,ne,Y){let Pe=r.convert(O.format,O.colorSpace),ue=r.convert(O.type),Ce=y(O.internalFormat,Pe,ue,O.colorSpace),Re=n.get(_),re=n.get(O);if(re.__renderTarget=_,!Re.__hasExternalTextures){let be=Math.max(1,_.width>>Y),ke=Math.max(1,_.height>>Y);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,Ce,be,ke,_.depth,0,Pe,ue,null):t.texImage2D(ne,Y,Ce,be,ke,0,Pe,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),se(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ne,re.__webglTexture,0,de(_)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ne,re.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(w,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let W=_.depthTexture,ne=W&&W.isDepthTexture?W.type:null,Y=x(_.stencilBuffer,ne),Pe=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=de(_);se(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Y,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,w)}else{let W=_.textures;for(let ne=0;ne<W.length;ne++){let Y=W[ne],Pe=r.convert(Y.format,Y.colorSpace),ue=r.convert(Y.type),Ce=y(Y.internalFormat,Pe,ue,Y.colorSpace),Re=de(_);O&&se(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ce,_.width,_.height):se(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let ne=W.__webglTexture,Y=de(_);if(_.depthTexture.format===ss)se(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(_.depthTexture.format===bs)se(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ge(w){let _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",ne)};W.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=W}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");let W=w.texture.mipmaps;W&&W.length>0?Se(_.__webglFramebuffer[0],w):Se(_.__webglFramebuffer,w)}else if(O){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),ve(_.__webglDepthbuffer[W],w,!1);else{let ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Y)}}else{let W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ve(_.__webglDepthbuffer,w,!1);else{let ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(w,_,O){let W=n.get(w);_!==void 0&&ce(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ge(w)}function T(w){let _=w.texture,O=n.get(w),W=n.get(_);w.addEventListener("dispose",I);let ne=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)O.__webglFramebuffer[ue][Ce]=i.createFramebuffer()}else O.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)O.__webglFramebuffer[ue]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ue=0,Ce=ne.length;ue<Ce;ue++){let Re=n.get(ne[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&se(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){let Ce=ne[ue];O.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);let Re=r.convert(Ce.format,Ce.colorSpace),re=r.convert(Ce.type),be=y(Ce.internalFormat,Re,re,Ce.colorSpace,w.isXRRenderTarget===!0),ke=de(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,be,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ce(O.__webglFramebuffer[ue][Ce],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else ce(O.__webglFramebuffer[ue],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ue=0,Ce=ne.length;ue<Ce;ue++){let Re=ne[ue],re=n.get(Re),be=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,re.__webglTexture),Oe(be,Re),ce(O.__webglFramebuffer,w,Re,i.COLOR_ATTACHMENT0+ue,be,0),m(Re)&&p(be)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,W.__webglTexture),Oe(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)ce(O.__webglFramebuffer[Ce],w,_,i.COLOR_ATTACHMENT0,ue,Ce);else ce(O.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,ue,0);m(_)&&p(ue),t.unbindTexture()}w.depthBuffer&&Ge(w)}function te(w){let _=w.textures;for(let O=0,W=_.length;O<W;O++){let ne=_[O];if(m(ne)){let Y=v(w),Pe=n.get(ne).__webglTexture;t.bindTexture(Y,Pe),p(Y),t.unbindTexture()}}}let Q=[],j=[];function K(w){if(w.samples>0){if(se(w)===!1){let _=w.textures,O=w.width,W=w.height,ne=i.COLOR_BUFFER_BIT,Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(w),ue=_.length>1;if(ue)for(let Re=0;Re<_.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);let Ce=w.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<_.length;Re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);let re=n.get(_[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,ne,i.NEAREST),l===!0&&(Q.length=0,j.length=0,Q.push(i.COLOR_ATTACHMENT0+Re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push(Y),j.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<_.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);let re=n.get(_[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function de(w){return Math.min(s.maxSamples,w.samples)}function se(w){let _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function fe(w){let _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function $e(w,_){let O=w.colorSpace,W=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==wi&&O!==Gn&&(et.getTransfer(O)===at?(W!==ln||ne!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function ze(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=$,this.rebindTextures=it,this.setupRenderTarget=T,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=se}function hv(i,e){function t(n,s=Gn){let r,a=et.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return i.BYTE;if(n===Wl)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Jl)return i.RGB;if(n===ln)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===eo)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===to)return i.RG_INTEGER;if(n===no)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===wr||n===Tr)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===yo||n===xo||n===bo||n===Mo||n===So||n===Eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===To||n===Ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wo)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Co||n===Ro||n===Io||n===Po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
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

}`,xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:dv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new xc,p={},v=t.getContextAttributes(),y=null,x=null,R=[],A=[],I=new me,N=null,E=new Nt;E.viewport=new yt;let S=new Nt;S.viewport=new yt;let P=[E,S],B=new Ba,H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let G=R[U];return G===void 0&&(G=new hs,R[U]=G),G.getTargetRaySpace()},this.getControllerGrip=function(U){let G=R[U];return G===void 0&&(G=new hs,R[U]=G),G.getGripSpace()},this.getHand=function(U){let G=R[U];return G===void 0&&(G=new hs,R[U]=G),G.getHandSpace()};function J(U){let G=A.indexOf(U.inputSource);if(G===-1)return;let ce=R[G];ce!==void 0&&(ce.update(U.inputSource,U.frame,c||a),ce.dispatchEvent({type:U.type,data:U.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ie);for(let U=0;U<R.length;U++){let G=A[U];G!==null&&(A[U]=null,R[U].disconnect(G))}H=null,q=null,m.reset();for(let U in p)delete p[U];e.setRenderTarget(y),f=null,d=null,h=null,s=null,x=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ie),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ve=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?bs:ss,ve=v.stencil?xs:ai);let Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new wn(d.textureWidth,d.textureHeight,{format:ln,type:yn,depthTexture:new er(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new wn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(U){for(let G=0;G<U.removed.length;G++){let ce=U.removed[G],ve=A.indexOf(ce);ve>=0&&(A[ve]=null,R[ve].disconnect(ce))}for(let G=0;G<U.added.length;G++){let ce=U.added[G],ve=A.indexOf(ce);if(ve===-1){for(let Ge=0;Ge<R.length;Ge++)if(Ge>=A.length){A.push(ce),ve=Ge;break}else if(A[Ge]===null){A[Ge]=ce,ve=Ge;break}if(ve===-1)break}let Se=R[ve];Se&&Se.connect(ce)}}let $=new D,he=new D;function _e(U,G,ce){$.setFromMatrixPosition(G.matrixWorld),he.setFromMatrixPosition(ce.matrixWorld);let ve=$.distanceTo(he),Se=G.projectionMatrix.elements,Ge=ce.projectionMatrix.elements,it=Se[14]/(Se[10]-1),T=Se[14]/(Se[10]+1),te=(Se[9]+1)/Se[5],Q=(Se[9]-1)/Se[5],j=(Se[8]-1)/Se[0],K=(Ge[8]+1)/Ge[0],de=it*j,se=it*K,fe=ve/(-j+K),$e=fe*-j;if(G.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX($e),U.translateZ(fe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Se[10]===-1)U.projectionMatrix.copy(G.projectionMatrix),U.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let ze=it+fe,w=T+fe,_=de-$e,O=se+(ve-$e),W=te*T/w*ze,ne=Q*T/w*ze;U.projectionMatrix.makePerspective(_,O,W,ne,ze,w),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Me(U,G){G===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(G.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let G=U.near,ce=U.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),B.near=S.near=E.near=G,B.far=S.far=E.far=ce,(H!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,q=B.far),B.layers.mask=U.layers.mask|6,E.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let ve=U.parent,Se=B.cameras;Me(B,ve);for(let Ge=0;Ge<Se.length;Ge++)Me(Se[Ge],ve);Se.length===2?_e(B,E,S):B.projectionMatrix.copy(E.projectionMatrix),Oe(U,B,ve)};function Oe(U,G,ce){ce===null?U.matrix.copy(G.matrixWorld):(U.matrix.copy(ce.matrixWorld),U.matrix.invert(),U.matrix.multiply(G.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(G.projectionMatrix),U.projectionMatrixInverse.copy(G.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=rs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(U){return p[U]};let je=null;function tt(U,G){if(u=G.getViewerPose(c||a),g=G,u!==null){let ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ve=!1;ce.length!==B.cameras.length&&(B.cameras.length=0,ve=!0);for(let T=0;T<ce.length;T++){let te=ce[T],Q=null;if(f!==null)Q=f.getViewport(te);else{let K=h.getViewSubImage(d,te);Q=K.viewport,T===0&&(e.setRenderTargetTextures(x,K.colorTexture,K.depthStencilTexture),e.setRenderTarget(x))}let j=P[T];j===void 0&&(j=new Nt,j.layers.enable(T),j.viewport=new yt,P[T]=j),j.matrix.fromArray(te.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(te.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),T===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ve===!0&&B.cameras.push(j)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let T=h.getDepthInformation(ce[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let T=0;T<ce.length;T++){let te=ce[T].camera;if(te){let Q=p[te];Q||(Q=new tr,p[te]=Q);let j=h.getCameraImage(te);Q.sourceTexture=j}}}}for(let ce=0;ce<R.length;ce++){let ve=A[ce],Se=R[ce];ve!==null&&Se!==void 0&&Se.update(ve,G,c||a)}je&&je(U,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let Z=new Nh;Z.setAnimationLoop(tt),this.setAnimationLoop=function(U){je=U},this.dispose=function(){}}},Ni=new _n,pv=new vt;function mv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ic(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Ni.copy(x),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Ni)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(g(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",m));let R=y.program;n.updateUBOMapping(v,R);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function u(v){let y=h();v.__bindingPointIndex=y;let x=i.createBuffer(),R=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],x=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,I=x.length;A<I;A++){let N=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,S=N.length;E<S;E++){let P=N[E];if(f(P,A,E,R)===!0){let B=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],q=0;for(let J=0;J<H.length;J++){let X=H[J],ie=b(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,R){let A=v.value,I=y+"_"+x;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{let N=R[I];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[I]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(v){let y=v.uniforms,x=0,R=16;for(let I=0,N=y.length;I<N;I++){let E=Array.isArray(y[I])?y[I]:[y[I]];for(let S=0,P=E.length;S<P;S++){let B=E[S],H=Array.isArray(B.value)?B.value:[B.value];for(let q=0,J=H.length;q<J;q++){let X=H[q],ie=b(X),$=x%R,he=$%ie.boundary,_e=$+he;x+=he,_e!==0&&R-_e<ie.storage&&(x+=R-_e),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=ie.storage}}}let A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function b(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Fo=class{constructor(e={}){let{canvas:t=nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,p=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,R=!1;this._outputColorSpace=Ht;let A=0,I=0,N=null,E=-1,S=null,P=new yt,B=new yt,H=null,q=new qe(0),J=0,X=t.width,ie=t.height,$=1,he=null,_e=null,Me=new yt(0,0,X,ie),Oe=new yt(0,0,X,ie),je=!1,tt=new ds,Z=!1,U=!1,G=new vt,ce=new D,ve=new yt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function it(){return N===null?$:1}let T=n;function te(M,F){return t.getContext(M,F)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",ae,!1),T===null){let F="webgl2";if(T=te(F,M),T===null)throw te(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,j,K,de,se,fe,$e,ze,w,_,O,W,ne,Y,Pe,ue,Ce,Re,re,be,ke,Le,ye,Xe;function L(){Q=new Ng(T),Q.init(),Le=new hv(T,Q),j=new Ag(T,Q,e,Le),K=new cv(T,Q),j.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),de=new kg(T),se=new Z_,fe=new uv(T,Q,K,se,j,Le,de),$e=new Rg(x),ze=new Dg(x),w=new Gf(T),ye=new wg(T,w),_=new Ug(T,w,de,ye),O=new Bg(T,_,w,de),re=new Og(T,j,fe),ue=new Cg(se),W=new J_(x,$e,ze,Q,j,ye,ue),ne=new mv(x,se),Y=new j_,Pe=new sv(Q),Re=new Eg(x,$e,ze,K,O,f,l),Ce=new ov(x,O,j),Xe=new gv(T,de,j,K),be=new Tg(T,Q,de),ke=new Fg(T,Q,de),de.programs=W.programs,x.capabilities=j,x.extensions=Q,x.properties=se,x.renderLists=Y,x.shadowMap=Ce,x.state=K,x.info=de}L();let le=new bc(x,T);this.xr=le,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(X,ie,!1))},this.getSize=function(M){return M.set(X,ie)},this.setSize=function(M,F,z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,ie=F,t.width=Math.floor(M*$),t.height=Math.floor(F*$),z===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*$,ie*$).floor()},this.setDrawingBufferSize=function(M,F,z){X=M,ie=F,$=z,t.width=Math.floor(M*z),t.height=Math.floor(F*z),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Me)},this.setViewport=function(M,F,z,V){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,F,z,V),K.viewport(P.copy(Me).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,F,z,V){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,F,z,V),K.scissor(B.copy(Oe).multiplyScalar($).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){K.setScissorTest(je=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,z=!0){let V=0;if(M){let k=!1;if(N!==null){let oe=N.texture.format;k=oe===no||oe===to||oe===eo}if(k){let oe=N.texture.type,xe=oe===yn||oe===ai||oe===vs||oe===xs||oe===ja||oe===Qa,Te=Re.getClearColor(),Ee=Re.getClearAlpha(),Fe=Te.r,Be=Te.g,De=Te.b;xe?(g[0]=Fe,g[1]=Be,g[2]=De,g[3]=Ee,T.clearBufferuiv(T.COLOR,0,g)):(b[0]=Fe,b[1]=Be,b[2]=De,b[3]=Ee,T.clearBufferiv(T.COLOR,0,b))}else V|=T.COLOR_BUFFER_BIT}F&&(V|=T.DEPTH_BUFFER_BIT),z&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Re.dispose(),Y.dispose(),Pe.dispose(),se.dispose(),$e.dispose(),ze.dispose(),O.dispose(),ye.dispose(),Xe.dispose(),W.dispose(),le.dispose(),le.removeEventListener("sessionstart",Mn),le.removeEventListener("sessionend",Oc),mi.stop()};function pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=de.autoReset,F=Ce.enabled,z=Ce.autoUpdate,V=Ce.needsUpdate,k=Ce.type;L(),de.autoReset=M,Ce.enabled=F,Ce.autoUpdate=z,Ce.needsUpdate=V,Ce.type=k}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ee(M){let F=M.target;F.removeEventListener("dispose",ee),Ie(F)}function Ie(M){We(M),se.remove(M)}function We(M){let F=se.get(M).programs;F!==void 0&&(F.forEach(function(z){W.releaseProgram(z)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,z,V,k,oe){F===null&&(F=Se);let xe=k.isMesh&&k.matrixWorld.determinant()<0,Te=gd(M,F,z,V,k);K.setMaterial(V,xe);let Ee=z.index,Fe=1;if(V.wireframe===!0){if(Ee=_.getWireframeAttribute(z),Ee===void 0)return;Fe=2}let Be=z.drawRange,De=z.attributes.position,Qe=Be.start*Fe,lt=(Be.start+Be.count)*Fe;oe!==null&&(Qe=Math.max(Qe,oe.start*Fe),lt=Math.min(lt,(oe.start+oe.count)*Fe)),Ee!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,Ee.count)):De!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,De.count));let Mt=lt-Qe;if(Mt<0||Mt===1/0)return;ye.setup(k,V,Te,z,Ee);let dt,ct=be;if(Ee!==null&&(dt=w.get(Ee),ct=ke,ct.setIndex(dt)),k.isMesh)V.wireframe===!0?(K.setLineWidth(V.wireframeLinewidth*it()),ct.setMode(T.LINES)):ct.setMode(T.TRIANGLES);else if(k.isLine){let Ne=V.linewidth;Ne===void 0&&(Ne=1),K.setLineWidth(Ne*it()),k.isLineSegments?ct.setMode(T.LINES):k.isLineLoop?ct.setMode(T.LINE_LOOP):ct.setMode(T.LINE_STRIP)}else k.isPoints?ct.setMode(T.POINTS):k.isSprite&&ct.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ct.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ne=k._multiDrawStarts,mt=k._multiDrawCounts,nt=k._multiDrawCount,Xt=Ee?w.get(Ee).bytesPerElement:1,Gi=se.get(V).currentProgram.getUniforms();for(let qt=0;qt<nt;qt++)Gi.setValue(T,"_gl_DrawID",qt),ct.render(Ne[qt]/Xt,mt[qt])}else if(k.isInstancedMesh)ct.renderInstances(Qe,Mt,k.count);else if(z.isInstancedBufferGeometry){let Ne=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,mt=Math.min(z.instanceCount,Ne);ct.renderInstances(Qe,Mt,mt)}else ct.render(Qe,Mt)};function ht(M,F,z){M.transparent===!0&&M.side===An&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,$r(M,F,z),M.side=On,M.needsUpdate=!0,$r(M,F,z),M.side=An):$r(M,F,z)}this.compile=function(M,F,z=null){z===null&&(z=M),p=Pe.get(z),p.init(F),y.push(p),z.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==z&&M.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let V=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let oe=k.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){let Te=oe[xe];ht(Te,z,k),V.add(Te)}else ht(oe,z,k),V.add(oe)}),p=y.pop(),V},this.compileAsync=function(M,F,z=null){let V=this.compile(M,F,z);return new Promise(k=>{function oe(){if(V.forEach(function(xe){se.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){k(M);return}setTimeout(oe,10)}Q.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let rt=null;function Pn(M){rt&&rt(M)}function Mn(){mi.stop()}function Oc(){mi.start()}let mi=new Nh;mi.setAnimationLoop(Pn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){rt=M,le.setAnimationLoop(M),M===null?mi.stop():mi.start()},le.addEventListener("sessionstart",Mn),le.addEventListener("sessionend",Oc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,F,N),p=Pe.get(M,y.length),p.init(F),y.push(p),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(G,mn,F.reversedDepth),U=this.localClippingEnabled,Z=ue.init(this.clippingPlanes,U),m=Y.get(M,v.length),m.init(),v.push(m),le.enabled===!0&&le.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&jo(oe,F,-1/0,x.sortObjects)}jo(M,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(he,_e),Ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ge&&Re.addToRenderList(m,M),this.info.render.frame++,Z===!0&&ue.beginShadows();let z=p.state.shadowsArray;Ce.render(z,M,F),Z===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){let oe=F.cameras;if(k.length>0)for(let xe=0,Te=oe.length;xe<Te;xe++){let Ee=oe[xe];zc(V,k,M,Ee)}Ge&&Re.render(M);for(let xe=0,Te=oe.length;xe<Te;xe++){let Ee=oe[xe];Bc(m,M,Ee,Ee.viewport)}}else k.length>0&&zc(V,k,M,F),Ge&&Re.render(M),Bc(m,M,F);N!==null&&I===0&&(fe.updateMultisampleRenderTarget(N),fe.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(x,M,F),ye.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Z===!0&&ue.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function jo(M,F,z,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){V&&ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(G);let xe=O.update(M),Te=M.material;Te.visible&&m.push(M,xe,Te,z,ve.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){let xe=O.update(M),Te=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ve.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ve.copy(xe.boundingSphere.center)),ve.applyMatrix4(M.matrixWorld).applyMatrix4(G)),Array.isArray(Te)){let Ee=xe.groups;for(let Fe=0,Be=Ee.length;Fe<Be;Fe++){let De=Ee[Fe],Qe=Te[De.materialIndex];Qe&&Qe.visible&&m.push(M,xe,Qe,z,ve.z,De)}}else Te.visible&&m.push(M,xe,Te,z,ve.z,null)}}let oe=M.children;for(let xe=0,Te=oe.length;xe<Te;xe++)jo(oe[xe],F,z,V)}function Bc(M,F,z,V){let k=M.opaque,oe=M.transmissive,xe=M.transparent;p.setupLightsView(z),Z===!0&&ue.setGlobalState(x.clippingPlanes,z),V&&K.viewport(P.copy(V)),k.length>0&&Gr(k,F,z),oe.length>0&&Gr(oe,F,z),xe.length>0&&Gr(xe,F,z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function zc(M,F,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new wn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ys:yn,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let oe=p.state.transmissionRenderTarget[V.id],xe=V.viewport||P;oe.setSize(xe.z*x.transmissionResolutionScale,xe.w*x.transmissionResolutionScale);let Te=x.getRenderTarget(),Ee=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(q),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Re.render(z);let Be=x.toneMapping;x.toneMapping=Vn;let De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Z===!0&&ue.setGlobalState(x.clippingPlanes,V),Gr(M,z,V),fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let lt=0,Mt=F.length;lt<Mt;lt++){let dt=F[lt],ct=dt.object,Ne=dt.geometry,mt=dt.material,nt=dt.group;if(mt.side===An&&ct.layers.test(V.layers)){let Xt=mt.side;mt.side=Vt,mt.needsUpdate=!0,Hc(ct,z,V,Ne,mt,nt),mt.side=Xt,mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe))}x.setRenderTarget(Te,Ee,Fe),x.setClearColor(q,J),De!==void 0&&(V.viewport=De),x.toneMapping=Be}function Gr(M,F,z){let V=F.isScene===!0?F.overrideMaterial:null;for(let k=0,oe=M.length;k<oe;k++){let xe=M[k],Te=xe.object,Ee=xe.geometry,Fe=xe.group,Be=xe.material;Be.allowOverride===!0&&V!==null&&(Be=V),Te.layers.test(z.layers)&&Hc(Te,F,z,Ee,Be,Fe)}}function Hc(M,F,z,V,k,oe){M.onBeforeRender(x,F,z,V,k,oe),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(x,F,z,V,M,oe),k.transparent===!0&&k.side===An&&k.forceSinglePass===!1?(k.side=Vt,k.needsUpdate=!0,x.renderBufferDirect(z,F,V,k,M,oe),k.side=On,k.needsUpdate=!0,x.renderBufferDirect(z,F,V,k,M,oe),k.side=An):x.renderBufferDirect(z,F,V,k,M,oe),M.onAfterRender(x,F,z,V,k,oe)}function $r(M,F,z){F.isScene!==!0&&(F=Se);let V=se.get(M),k=p.state.lights,oe=p.state.shadowsArray,xe=k.state.version,Te=W.getParameters(M,k.state,oe,F,z),Ee=W.getProgramCacheKey(Te),Fe=V.programs;V.environment=M.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(M.isMeshStandardMaterial?ze:$e).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",ee),Fe=new Map,V.programs=Fe);let Be=Fe.get(Ee);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===xe)return Gc(M,Te),Be}else Te.uniforms=W.getUniforms(M),M.onBeforeCompile(Te,x),Be=W.acquireProgram(Te,Ee),Fe.set(Ee,Be),V.uniforms=Te.uniforms;let De=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=ue.uniform),Gc(M,Te),V.needsLights=vd(M),V.lightsStateVersion=xe,V.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function Vc(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Es.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Gc(M,F){let z=se.get(M);z.outputColorSpace=F.outputColorSpace,z.batching=F.batching,z.batchingColor=F.batchingColor,z.instancing=F.instancing,z.instancingColor=F.instancingColor,z.instancingMorph=F.instancingMorph,z.skinning=F.skinning,z.morphTargets=F.morphTargets,z.morphNormals=F.morphNormals,z.morphColors=F.morphColors,z.morphTargetsCount=F.morphTargetsCount,z.numClippingPlanes=F.numClippingPlanes,z.numIntersection=F.numClipIntersection,z.vertexAlphas=F.vertexAlphas,z.vertexTangents=F.vertexTangents,z.toneMapping=F.toneMapping}function gd(M,F,z,V,k){F.isScene!==!0&&(F=Se),fe.resetTextureUnits();let oe=F.fog,xe=V.isMeshStandardMaterial?F.environment:null,Te=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:wi,Ee=(V.isMeshStandardMaterial?ze:$e).get(V.envMap||xe),Fe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,lt=!!z.morphAttributes.color,Mt=Vn;V.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=x.toneMapping);let dt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=dt!==void 0?dt.length:0,Ne=se.get(V),mt=p.state.lights;if(Z===!0&&(U===!0||M!==S)){let Bt=M===S&&V.id===E;ue.setState(V,M,Bt)}let nt=!1;V.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==mt.state.version||Ne.outputColorSpace!==Te||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Ee||V.fog===!0&&Ne.fog!==oe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ue.numPlanes||Ne.numIntersection!==ue.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==De||Ne.morphNormals!==Qe||Ne.morphColors!==lt||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==ct)&&(nt=!0):(nt=!0,Ne.__version=V.version);let Xt=Ne.currentProgram;nt===!0&&(Xt=$r(V,F,k));let Gi=!1,qt=!1,Ls=!1,gt=Xt.getUniforms(),nn=Ne.uniforms;if(K.useProgram(Xt.program)&&(Gi=!0,qt=!0,Ls=!0),V.id!==E&&(E=V.id,qt=!0),Gi||S!==M){K.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),gt.setValue(T,"projectionMatrix",M.projectionMatrix),gt.setValue(T,"viewMatrix",M.matrixWorldInverse);let $t=gt.map.cameraPosition;$t!==void 0&&$t.setValue(T,ce.setFromMatrixPosition(M.matrixWorld)),j.logarithmicDepthBuffer&&gt.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(T,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,qt=!0,Ls=!0)}if(k.isSkinnedMesh){gt.setOptional(T,k,"bindMatrix"),gt.setOptional(T,k,"bindMatrixInverse");let Bt=k.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),gt.setValue(T,"boneTexture",Bt.boneTexture,fe))}k.isBatchedMesh&&(gt.setOptional(T,k,"batchingTexture"),gt.setValue(T,"batchingTexture",k._matricesTexture,fe),gt.setOptional(T,k,"batchingIdTexture"),gt.setValue(T,"batchingIdTexture",k._indirectTexture,fe),gt.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&gt.setValue(T,"batchingColorTexture",k._colorsTexture,fe));let sn=z.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&re.update(k,z,Xt),(qt||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,gt.setValue(T,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(nn.envMap.value=Ee,nn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(nn.envMapIntensity.value=F.environmentIntensity),qt&&(gt.setValue(T,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&_d(nn,Ls),oe&&V.fog===!0&&ne.refreshFogUniforms(nn,oe),ne.refreshMaterialUniforms(nn,V,$,ie,p.state.transmissionRenderTarget[M.id]),Es.upload(T,Vc(Ne),nn,fe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Es.upload(T,Vc(Ne),nn,fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(T,"center",k.center),gt.setValue(T,"modelViewMatrix",k.modelViewMatrix),gt.setValue(T,"normalMatrix",k.normalMatrix),gt.setValue(T,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Bt=V.uniformsGroups;for(let $t=0,Qo=Bt.length;$t<Qo;$t++){let gi=Bt[$t];Xe.update(gi,Xt),Xe.bind(gi,Xt)}}return Xt}function _d(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function vd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,F,z){let V=se.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),se.get(M.texture).__webglTexture=F,se.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let z=se.get(M);z.__webglFramebuffer=F,z.__useDefaultFramebuffer=F===void 0};let yd=T.createFramebuffer();this.setRenderTarget=function(M,F=0,z=0){N=M,A=F,I=z;let V=!0,k=null,oe=!1,xe=!1;if(M){let Ee=se.get(M);if(Ee.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(Ee.__webglFramebuffer===void 0)fe.setupRenderTarget(M);else if(Ee.__hasExternalTextures)fe.rebindTextures(M,se.get(M.texture).__webglTexture,se.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let De=M.depthTexture;if(Ee.__boundDepthTexture!==De){if(De!==null&&se.has(De)&&(M.width!==De.image.width||M.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(M)}}let Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);let Be=se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?k=Be[F][z]:k=Be[F],oe=!0):M.samples>0&&fe.useMultisampledRTT(M)===!1?k=se.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[z]:k=Be,P.copy(M.viewport),B.copy(M.scissor),H=M.scissorTest}else P.copy(Me).multiplyScalar($).floor(),B.copy(Oe).multiplyScalar($).floor(),H=je;if(z!==0&&(k=yd),K.bindFramebuffer(T.FRAMEBUFFER,k)&&V&&K.drawBuffers(M,k),K.viewport(P),K.scissor(B),K.setScissorTest(H),oe){let Ee=se.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ee.__webglTexture,z)}else if(xe){let Ee=F;for(let Fe=0;Fe<M.textures.length;Fe++){let Be=se.get(M.textures[Fe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,z,Ee)}}else if(M!==null&&z!==0){let Ee=se.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ee.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(M,F,z,V,k,oe,xe,Te=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee){K.bindFramebuffer(T.FRAMEBUFFER,Ee);try{let Fe=M.textures[Te],Be=Fe.format,De=Fe.type;if(!j.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&z>=0&&z<=M.height-k&&(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),T.readPixels(F,z,V,k,Le.convert(Be),Le.convert(De),oe))}finally{let Fe=N!==null?se.get(N).__webglFramebuffer:null;K.bindFramebuffer(T.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,F,z,V,k,oe,xe,Te=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(Ee=Ee[xe]),Ee)if(F>=0&&F<=M.width-V&&z>=0&&z<=M.height-k){K.bindFramebuffer(T.FRAMEBUFFER,Ee);let Fe=M.textures[Te],Be=Fe.format,De=Fe.type;if(!j.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Qe),T.bufferData(T.PIXEL_PACK_BUFFER,oe.byteLength,T.STREAM_READ),M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Te),T.readPixels(F,z,V,k,Le.convert(Be),Le.convert(De),0);let lt=N!==null?se.get(N).__webglFramebuffer:null;K.bindFramebuffer(T.FRAMEBUFFER,lt);let Mt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await ih(T,Mt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Qe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,oe),T.deleteBuffer(Qe),T.deleteSync(Mt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,z=0){let V=Math.pow(2,-z),k=Math.floor(M.image.width*V),oe=Math.floor(M.image.height*V),xe=F!==null?F.x:0,Te=F!==null?F.y:0;fe.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,xe,Te,k,oe),K.unbindTexture()};let xd=T.createFramebuffer(),bd=T.createFramebuffer();this.copyTextureToTexture=function(M,F,z=null,V=null,k=0,oe=null){oe===null&&(k!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=k,k=0):oe=0);let xe,Te,Ee,Fe,Be,De,Qe,lt,Mt,dt=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(z!==null)xe=z.max.x-z.min.x,Te=z.max.y-z.min.y,Ee=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,Be=z.min.y,De=z.isBox3?z.min.z:0;else{let sn=Math.pow(2,-k);xe=Math.floor(dt.width*sn),Te=Math.floor(dt.height*sn),M.isDataArrayTexture?Ee=dt.depth:M.isData3DTexture?Ee=Math.floor(dt.depth*sn):Ee=1,Fe=0,Be=0,De=0}V!==null?(Qe=V.x,lt=V.y,Mt=V.z):(Qe=0,lt=0,Mt=0);let ct=Le.convert(F.format),Ne=Le.convert(F.type),mt;F.isData3DTexture?(fe.setTexture3D(F,0),mt=T.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(fe.setTexture2DArray(F,0),mt=T.TEXTURE_2D_ARRAY):(fe.setTexture2D(F,0),mt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);let nt=T.getParameter(T.UNPACK_ROW_LENGTH),Xt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Gi=T.getParameter(T.UNPACK_SKIP_PIXELS),qt=T.getParameter(T.UNPACK_SKIP_ROWS),Ls=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,dt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,dt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Fe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Be),T.pixelStorei(T.UNPACK_SKIP_IMAGES,De);let gt=M.isDataArrayTexture||M.isData3DTexture,nn=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let sn=se.get(M),Bt=se.get(F),$t=se.get(sn.__renderTarget),Qo=se.get(Bt.__renderTarget);K.bindFramebuffer(T.READ_FRAMEBUFFER,$t.__webglFramebuffer),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,Qo.__webglFramebuffer);for(let gi=0;gi<Ee;gi++)gt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,se.get(M).__webglTexture,k,De+gi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,se.get(F).__webglTexture,oe,Mt+gi)),T.blitFramebuffer(Fe,Be,xe,Te,Qe,lt,xe,Te,T.DEPTH_BUFFER_BIT,T.NEAREST);K.bindFramebuffer(T.READ_FRAMEBUFFER,null),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||se.has(M)){let sn=se.get(M),Bt=se.get(F);K.bindFramebuffer(T.READ_FRAMEBUFFER,xd),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,bd);for(let $t=0;$t<Ee;$t++)gt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,sn.__webglTexture,k,De+$t):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,sn.__webglTexture,k),nn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Bt.__webglTexture,oe,Mt+$t):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Bt.__webglTexture,oe),k!==0?T.blitFramebuffer(Fe,Be,xe,Te,Qe,lt,xe,Te,T.COLOR_BUFFER_BIT,T.NEAREST):nn?T.copyTexSubImage3D(mt,oe,Qe,lt,Mt+$t,Fe,Be,xe,Te):T.copyTexSubImage2D(mt,oe,Qe,lt,Fe,Be,xe,Te);K.bindFramebuffer(T.READ_FRAMEBUFFER,null),K.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else nn?M.isDataTexture||M.isData3DTexture?T.texSubImage3D(mt,oe,Qe,lt,Mt,xe,Te,Ee,ct,Ne,dt.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(mt,oe,Qe,lt,Mt,xe,Te,Ee,ct,dt.data):T.texSubImage3D(mt,oe,Qe,lt,Mt,xe,Te,Ee,ct,Ne,dt):M.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,oe,Qe,lt,xe,Te,ct,Ne,dt.data):M.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,oe,Qe,lt,dt.width,dt.height,ct,dt.data):T.texSubImage2D(T.TEXTURE_2D,oe,Qe,lt,xe,Te,ct,Ne,dt);T.pixelStorei(T.UNPACK_ROW_LENGTH,nt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Xt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gi),T.pixelStorei(T.UNPACK_SKIP_ROWS,qt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ls),oe===0&&F.generateMipmaps&&T.generateMipmap(mt),K.unbindTexture()},this.initRenderTarget=function(M){se.get(M).__webglFramebuffer===void 0&&fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?fe.setTextureCube(M,0):M.isData3DTexture?fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?fe.setTexture2DArray(M,0):fe.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){A=0,I=0,N=null,K.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};function Sc(i,e,t,n,s=i){let r=document.createElement("canvas");r.className="parking-inspection-canvas",r.setAttribute("aria-label","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332"),i.replaceChildren(r);let a=new Qs;a.background=new qe("#f2f6f9");let o=new Nt(34,1,.1,40),l=new Fo({canvas:r,antialias:!0,powerPreference:"low-power"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),l.outputColorSpace=Ht,l.toneMapping=qa,a.add(new _r("#ffffff","#73879a",2));let c=new yr("#ffffff",3);c.position.set(-4,7,5),a.add(c);let u=new En;a.add(u);let h=new _s({color:"#d8e3e9",metalness:.18,roughness:.32,clearcoat:.8}),d=new _s({color:"#183348",metalness:.18,roughness:.2,clearcoat:1}),f=new ni({color:"#263746",roughness:.45}),g=[],b=(Z,U,G,ce)=>{let ve=new ms;ve.moveTo(Z[0][0],Z[0][1]);for(let[it,T]of Z.slice(1))ve.lineTo(it,T);ve.closePath();let Se=new dr(ve,{depth:U,bevelEnabled:!0,bevelSegments:3,bevelSize:.04,bevelThickness:.04});Se.translate(0,0,ce);let Ge=new Tt(Se,G);Ge.castShadow=!0,u.add(Ge),g.push(Ge)};b([[-2.22,.42],[-2.06,.72],[-1.5,.83],[-1.13,1.02],[-.82,1.57],[-.44,1.76],[.58,1.74],[1.08,1.45],[1.52,.91],[2.02,.78],[2.2,.56],[2.13,.32],[-2.08,.32]],1.46,h,-.73);for(let Z of[-1,1]){let U=Z*.73;b([[-.94,1.15],[-.67,1.52],[-.37,1.63],[-.3,1.15]],.018,d,U),b([[-.21,1.15],[-.2,1.63],[.5,1.61],[.84,1.34],[.7,1.15]],.018,d,U);for(let G of[-1.35,1.28]){let ce=new Tt(new nr(.39,.39,.25,24),f);ce.rotation.x=Math.PI/2,ce.position.set(G,.43,U),u.add(ce)}}let m=new Tt(new Ai(100,100),new ni({color:"#edf2f6",roughness:.95}));m.rotation.x=-Math.PI/2,m.position.y=-.04,a.add(m);let p=.82,v=1.18,y=null,x=null,R=null,A=[...t],I=[],N=new xr,E=new me,S=()=>{o.position.set(7.7*Math.sin(v)*Math.sin(p),7.7*Math.cos(v),7.7*Math.sin(v)*Math.cos(p)),o.lookAt(0,.86,0)},P=()=>l.render(a,o),B=Z=>[Z.world_x,Z.world_y,Z.world_z].every(Number.isFinite)?new D(Z.world_x,Z.world_y,Z.world_z):new D((Z.x-.5)*3.7,.92+(.5-Z.y)*.8,.76),H=()=>{for(let Z of I.splice(0))u.remove(Z),Z.traverse(U=>{U instanceof Tt&&(U.geometry.dispose(),Array.isArray(U.material)?U.material.forEach(G=>G.dispose()):U.material.dispose())});for(let Z of A){let U=e.find(it=>it.id===Z.damage_type_id);if(!U)continue;let G=new En;G.position.copy(B(Z));let ce=new D(Z.world_nx??0,Z.world_ny??0,Z.world_nz??1);ce.lengthSq()<.01&&ce.set(0,0,1),G.quaternion.setFromUnitVectors(new D(0,0,1),ce.normalize());let Se=U.built_in_key==="scratch"||U.name.includes("\u50B7")?new pr(new ps(Array.from({length:25},(it,T)=>{let te=T/24;return new D((te-.5)*.42,Math.sin(te*Math.PI*6)*.045,0)})),48,.022,8,!1):new fr(.115,.026,10,32),Ge=new Tt(Se,new ni({color:U.color,emissive:U.color,emissiveIntensity:.65}));Ge.userData.markId=Z.id,G.add(Ge),u.add(G),I.push(G)}P()},q=(Z,U)=>{let G=r.getBoundingClientRect();return Z<G.left||Z>G.right||U<G.top||U>G.bottom?[]:(E.set((Z-G.left)/G.width*2-1,-((U-G.top)/G.height)*2+1),N.setFromCamera(E,o),N.intersectObjects([...I,...g],!0))},J=(Z,U)=>{let G=new He().getNormalMatrix(U.object.matrixWorld),ce=U.face.normal.clone().applyMatrix3(G).normalize(),ve=U.point.clone().addScaledVector(ce,.035);return{id:crypto.randomUUID(),damage_type_id:Z,x:Ar.clamp((U.point.x+2.3)/4.6,0,1),y:Ar.clamp(1-U.point.y/1.9,0,1),world_x:ve.x,world_y:ve.y,world_z:ve.z,world_nx:ce.x,world_ny:ce.y,world_nz:ce.z}},X=(Z,U,G)=>{let ce=q(U,G).find(ve=>g.includes(ve.object));return!ce||!e.some(ve=>ve.id===Z)?!1:(A.push(J(Z,ce)),n(A),H(),!0)},ie=Z=>{Z.button===0&&(y={id:Z.pointerId,x:Z.clientX,y:Z.clientY,moved:!1},r.setPointerCapture(Z.pointerId))},$=Z=>{if(!y||y.id!==Z.pointerId)return;let U=Z.clientX-y.x,G=Z.clientY-y.y;Math.abs(U)+Math.abs(G)>3&&(y.moved=!0),p-=U*.009,v=Ar.clamp(v-G*.006,.38,1.48),y.x=Z.clientX,y.y=Z.clientY,S(),P()},he=Z=>{if(!y||y.id!==Z.pointerId)return;let U=y.moved;if(y=null,U)return;let ce=q(Z.clientX,Z.clientY).find(ve=>typeof ve.object.userData.markId=="string");if(ce){A=A.filter(ve=>ve.id!==ce.object.userData.markId),n(A),H();return}R!==null&&X(R,Z.clientX,Z.clientY)},_e=Z=>{let U=Z.target.closest("[data-damage-type]");U&&(R=Number(U.dataset.damageType),x={id:Z.pointerId,typeId:R,startX:Z.clientX,startY:Z.clientY,moved:!1,ghost:null},U.setPointerCapture(Z.pointerId),s.querySelectorAll("[data-damage-type]").forEach(G=>G.classList.remove("selected")),U.classList.add("selected"),Z.preventDefault())},Me=Z=>{if(!x||x.id!==Z.pointerId)return;let U=x;if(Math.abs(Z.clientX-U.startX)+Math.abs(Z.clientY-U.startY)>7&&(U.moved=!0),!!U.moved){if(!U.ghost){let G=e.find(ce=>ce.id===U.typeId);U.ghost=document.createElement("div"),U.ghost.className="parking-inspection-drag-ghost",U.ghost.style.backgroundColor=G?.color??"#b33",U.ghost.textContent=`${G?.icon??""} ${G?.name??""}`,document.body.append(U.ghost)}U.ghost.style.left=`${Z.clientX}px`,U.ghost.style.top=`${Z.clientY}px`}},Oe=Z=>{if(!x||x.id!==Z.pointerId)return;let U=x;x=null,U.ghost?.remove(),U.moved&&X(U.typeId,Z.clientX,Z.clientY)},je=()=>{let Z=Math.max(i.clientWidth,1),U=Math.max(i.clientHeight,1);l.setSize(Z,U,!1),o.aspect=Z/U,o.updateProjectionMatrix(),P()},tt=new ResizeObserver(je);return tt.observe(i),r.addEventListener("pointerdown",ie),r.addEventListener("pointermove",$),r.addEventListener("pointerup",he),r.addEventListener("pointercancel",()=>{y=null}),s.addEventListener("pointerdown",_e),s.addEventListener("pointermove",Me),s.addEventListener("pointerup",Oe),s.addEventListener("pointercancel",Oe),S(),H(),je(),{dispose(){tt.disconnect(),r.removeEventListener("pointerdown",ie),r.removeEventListener("pointermove",$),r.removeEventListener("pointerup",he),s.removeEventListener("pointerdown",_e),s.removeEventListener("pointermove",Me),s.removeEventListener("pointerup",Oe),s.removeEventListener("pointercancel",Oe),l.dispose(),a.traverse(Z=>{Z instanceof Tt&&(Z.geometry.dispose(),Array.isArray(Z.material)?Z.material.forEach(U=>U.dispose()):Z.material.dispose())})},placeAt:X,setMarks(Z){A=[...Z],H()}}}var Bh={\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9:"\u8FD0\u8425\u4EEA\u8868\u76D8",\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406:"\u79DF\u8F66\u8FD0\u8425\u7BA1\u7406",\u99D0\u8ECA\u5834\u7BA1\u7406:"\u505C\u8F66\u573A\u7BA1\u7406",\u8ECA\u4E21\u914D\u7F6E:"\u8F66\u8F86\u5E03\u5C40",\u4F4D\u7F6E\u3092\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E",\u99D0\u8ECA\u4F4D\u7F6E\u3092\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E",\u99D0\u8ECA\u5834\u8A2D\u5B9A:"\u505C\u8F66\u573A\u8BBE\u7F6E",\u767B\u9332\u6E08\u307F\u99D0\u8ECA\u30A8\u30EA\u30A2:"\u5DF2\u767B\u8BB0\u7684\u505C\u8F66\u533A\u57DF","\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6682\u65E0\u505C\u8F66\u533A\u57DF\u3002","\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u5220\u9664\u505C\u8F66\u533A\u57DF\u3002","\u8ECA\u4E21\u30AF\u30E9\u30B9\u3001\u696D\u52D9\u72B6\u614B\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u8DDD\u96E2\u3001\u67FB\u5B9A\u9805\u76EE\u3001\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002":"\u7BA1\u7406\u8F66\u8F86\u7C7B\u522B\u3001\u4E1A\u52A1\u72B6\u6001\u3001\u9009\u9879\u3001\u8DDD\u79BB\u3001\u8BC4\u4F30\u9879\u76EE\u548C\u635F\u4F24\u6807\u8BB0\u3002","\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u8FFD\u52A0\u3068\u524A\u9664\u3092\u884C\u3044\u307E\u3059\u3002\u8ECA\u4E21\u3084\u4F5C\u696D\u4E88\u5B9A\u304C\u3042\u308B\u30A8\u30EA\u30A2\u3001\u6700\u5F8C\u306E\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u6DFB\u52A0\u6216\u5220\u9664\u505C\u8F66\u533A\u57DF\u3002\u4ECD\u6709\u8F66\u8F86\u6216\u4F5C\u4E1A\u8BB0\u5F55\u7684\u533A\u57DF\u4EE5\u53CA\u6700\u540E\u4E00\u4E2A\u533A\u57DF\u65E0\u6CD5\u5220\u9664\u3002",\u4F5C\u696D\u4E88\u5B9A:"\u4F5C\u4E1A\u8BB0\u5F55","\u53F0 \xB7 \u4F5C\u696D\u4E88\u5B9A":"\u8F86 \xB7 \u4F5C\u4E1A\u8BB0\u5F55",\u30AF\u30E9\u30B9:"\u7C7B\u522B",\u5148\u306B\u6240\u5C5E\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u5148\u9009\u62E9\u6240\u5C5E\u95E8\u5E97","\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u8F66\u8F86\u7C7B\u522B\u2026",\u8ECA\u4E21\u30AF\u30E9\u30B9\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F:"\u65E0\u6CD5\u52A0\u8F7D\u8F66\u8F86\u7C7B\u522B",\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u7C7B\u522B","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026":"\u6B63\u5728\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u2026","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u305D\u306E\u5E97\u8217\u306E\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002\u9805\u76EE\u306E\u5185\u5BB9\u306FParking\u306E\u6A19\u6E96\u69CB\u6210\u3067\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u52A0\u8F7D\u8BE5\u5E97\u8BBE\u7F6E\u3002\u5F53\u524D\u663E\u793A\u7684\u9879\u76EE\u91C7\u7528 Parking \u6807\u51C6\u914D\u7F6E\u3002","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002\u8BF7\u786E\u8BA4\u95E8\u5E97\u540E\u91CD\u8BD5\u3002","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u306E\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002\u8BF7\u68C0\u67E5\u95E8\u5E97\u8BBE\u7F6E\u540E\u91CD\u8BD5\u3002","\u767B\u9332\u5148\u306E\u5E97\u8217\u306E\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002":"\u5C06\u52A0\u8F7D\u8F66\u8F86\u767B\u8BB0\u95E8\u5E97\u7684\u505C\u8F66\u573A\u8BBE\u7F6E\u3002",\u5E97\u8217\u9078\u629E\u5F8C\u306B\u8AAD\u307F\u8FBC\u307F:"\u9009\u62E9\u95E8\u5E97\u540E\u52A0\u8F7D","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u767B\u9332\u5148\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u663E\u793A\u8F66\u8F86\u7684\u9ED8\u8BA4\u505C\u8F66\u533A\u57DF\u3002","\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u30683D\u8ECA\u4E21\u30E2\u30C7\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002":"\u9009\u62E9\u95E8\u5E97\u540E\u5C06\u52A0\u8F7D 3D \u8F66\u8F86\u6A21\u578B\u3002",ETC:"ETC",B\u8EFD\u30C8\u30E9:"B\u8F7B\u578B\u5361\u8F66",\u305D\u306E\u4ED6:"\u5176\u4ED6","\u8ECA\u691C\u30FB\u6CD5\u5B9A\u70B9\u691C":"\u8F66\u68C0\u4E0E\u6CD5\u5B9A\u68C0\u67E5",\u8ECA\u691C\u6E80\u4E86\u65E5:"\u8F66\u68C0\u5230\u671F\u65E5",\u6CD5\u5B9A\u70B9\u691C\u65E5:"\u6CD5\u5B9A\u68C0\u67E5\u65E5\u671F","\u8ECA\u691C ":"\u8F66\u68C0 ","\u6CD5\u5B9A\u70B9\u691C ":"\u6CD5\u5B9A\u68C0\u67E5 ","\u65E5\u4ED8\u3092\u767B\u9332\u3059\u308B\u3068\u8ECA\u4E21\u60C5\u5831\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u65E5\u671F\u5C06\u4FDD\u5B58\u5230\u8F66\u8F86\u4FE1\u606F\u4E2D\u3002",\u696D\u52D9\u72B6\u614B\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5904\u7406\u72B6\u6001",\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8F66\u8F86\u9009\u9879",\u30A2\u30A4\u30B3\u30F3:"\u56FE\u6807",\u8ECA\u8F09\u5668:"\u8F66\u8F7D\u5668",\u7981\u7159:"\u7981\u70DF",\u55AB\u7159:"\u5438\u70DF",\u30CA\u30D3:"\u5BFC\u822A",\u30B9\u30BF\u30C3\u30C9\u30EC\u30B9:"\u96EA\u5730\u8F6E\u80CE",\u50B7:"\u5212\u75D5",\u51F9\u307F:"\u51F9\u9677",\u99D0\u8ECA\u5834\u60C5\u5831:"\u505C\u8F66\u573A\u4FE1\u606F",\u8ECA\u4E21\u30AF\u30E9\u30B9\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093:"\u5C1A\u672A\u767B\u8BB0\u8F66\u8F86\u7C7B\u522B",\u8ECA\u4E21\u60C5\u5831:"\u8F66\u8F86\u4FE1\u606F",\u30CA\u30F3\u30D0\u30FC:"\u8F66\u724C\u53F7","\u4F8B: \u54C1\u5DDD 500 \u3042 1234":"\u4F8B\uFF1A\u54C1\u5DDD 500 \u3042 1234",\u30AA\u30D7\u30B7\u30E7\u30F3:"\u9009\u9879","\u5916\u88C5\u30FB\u5185\u88C5\u7CFB":"\u5916\u89C2\u4E0E\u5185\u9970","\u8ECA\u691C\u8A3C\u30FB\u96FB\u88C5\u7CFB":"\u8F66\u8F86\u767B\u8BB0\u8BC1\u4E0E\u7535\u6C14\u8BBE\u5907",\u57FA\u672C\u60C5\u5831:"\u57FA\u672C\u4FE1\u606F",\u8FFD\u52A0\u9805\u76EE:"\u9644\u52A0\u9879\u76EE","\u5916\u88C5\uFF08\u30DC\u30C7\u30A3\u30FB\u5857\u88C5\u30FB\u9211\u91D1\uFF09":"\u5916\u89C2\uFF08\u8F66\u8EAB\u3001\u6D82\u88C5\u3001\u94A3\u91D1\uFF09","\u5185\u88C5\uFF08\u30B7\u30FC\u30C8\u30FB\u5929\u4E95\u30FB\u30D5\u30ED\u30A2\uFF09":"\u5185\u9970\uFF08\u5EA7\u6905\u3001\u8F66\u9876\u3001\u5730\u677F\uFF09",\u30DB\u30A4\u30FC\u30EB:"\u8F66\u8F6E",\u8ECA\u691C\u8A3C:"\u8F66\u68C0\u8BC1",\u78BA\u8A8D\u6E08\u307F:"\u5DF2\u786E\u8BA4",\u30E9\u30B8\u30AA:"\u6536\u97F3\u673A","\u30CA\u30D3\uFF08\uFF15\u5E74\u4EE5\u5185\uFF09":"\u5BFC\u822A\uFF085\u5E74\u5185\uFF09",\u30A8\u30A2\u30B3\u30F3:"\u7A7A\u8C03",\u30B5\u30A4\u30C9\u30DF\u30E9\u30FC\u8ABF\u6574:"\u540E\u89C6\u955C\u8C03\u6574",\u8D70\u884C\u8DDD\u96E2:"\u884C\u9A76\u91CC\u7A0B","\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u5E74\uFF09":"\u9996\u6B21\u767B\u8BB0\uFF08\u5E74\uFF09","\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u6708\uFF09":"\u9996\u6B21\u767B\u8BB0\uFF08\u6708\uFF09","1\u301C12":"1\u201312",\u8A55\u4FA1:"\u8BC4\u4F30","1\u70B9":"1\u5206","2\u70B9":"2\u5206","3\u70B9":"3\u5206","4\u70B9":"4\u5206","5\u70B9":"5\u5206",\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9:"\u5904\u7406\u72B6\u6001",\u8981\u4FEE\u7406:"\u9700\u8981\u7EF4\u4FEE","\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6682\u65E0\u9009\u9879\u3002","\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6682\u65E0\u5904\u7406\u72B6\u6001\u3002",\u8ECA\u4E21\u72B6\u614B\u8A55\u4FA1\u30B7\u30FC\u30C8:"\u8F66\u8F86\u72B6\u6001\u8BC4\u4F30\u8868","\u8A55\u4FA1\u9805\u76EE\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002":"\u6682\u65E0\u8BC4\u4F30\u9879\u76EE\u3002\u53EF\u5728\u505C\u8F66\u573A\u8BBE\u7F6E\u4E2D\u6DFB\u52A0\u3002",\u5099\u8003\u6B04:"\u5907\u6CE8","\u8ECA\u4E21\u306B\u3064\u3044\u3066\u5171\u6709\u3057\u305F\u3044\u3053\u3068\u3092\u8A18\u9332\u3067\u304D\u307E\u3059\u3002":"\u8BB0\u5F55\u9700\u8981\u4E0E\u56E2\u961F\u5171\u4EAB\u7684\u8F66\u8F86\u4FE1\u606F\u3002",\u8ECA\u4F53\u306E\u640D\u50B7\u4F4D\u7F6E:"\u8F66\u8EAB\u635F\u4F24\u4F4D\u7F6E","\u50B7\u307E\u305F\u306F\u51F9\u307F\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u305F\u307E\u307E\u30013D\u8ECA\u4F53\u306E\u8868\u9762\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u6309\u4F4F\u5212\u75D5\u6216\u51F9\u9677\u56FE\u6807\uFF0C\u5C06\u5176\u62D6\u5230 3D \u8F66\u8EAB\u8868\u9762\u3002","\u640D\u50B7\u306E\u7A2E\u985E\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002":"\u6682\u65E0\u635F\u4F24\u7C7B\u578B\u3002\u53EF\u5728\u505C\u8F66\u573A\u8BBE\u7F6E\u4E2D\u6DFB\u52A0\u3002","3D\u8ECA\u4E21\u30E2\u30C7\u30EB":"3D \u8F66\u8F86\u6A21\u578B","\u640D\u50B7\u4F4D\u7F6E\u306F\u307E\u3060\u8A18\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u8BB0\u5F55\u635F\u4F24\u4F4D\u7F6E\u3002",\u640D\u50B7\u30DE\u30FC\u30AF\u3092\u524A\u9664:"\u5220\u9664\u635F\u4F24\u6807\u8BB0",\u8FFD\u52A0\u3057\u305F\u8ECA\u4E21\u306F:"\u65B0\u589E\u8F66\u8F86\u5C06\u767B\u8BB0\u5728","\u306B\u767B\u9332\u3055\u308C\u307E\u3059\u3002":"\u3002","\u6709\u52B9\u306A\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u306A\u3044\u305F\u3081\u3001\u8ECA\u4E21\u306F\u672A\u914D\u7F6E\u3067\u767B\u9332\u3055\u308C\u307E\u3059\u3002":"\u6CA1\u6709\u53EF\u7528\u505C\u8F66\u533A\u57DF\uFF0C\u8F66\u8F86\u5C06\u4EE5\u672A\u5206\u914D\u72B6\u6001\u767B\u8BB0\u3002","\u696D\u52D9\u72B6\u614B\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u4E1A\u52A1\u72B6\u6001\u3002","\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u8F66\u8F86\u9009\u9879\u3002","\u67FB\u5B9A\u9805\u76EE\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u8BC4\u4F30\u9879\u76EE\u3002","\u640D\u50B7\u306E\u7A2E\u985E\u3092\u9078\u3073\u30013D\u8ECA\u4E21\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u4F4D\u7F6E\u3092\u8A18\u9332\u3067\u304D\u307E\u3059\u3002":"\u9009\u62E9\u635F\u4F24\u7C7B\u578B\u540E\uFF0C\u70B9\u51FB 3D \u8F66\u8F86\u5373\u53EF\u8BB0\u5F55\u4F4D\u7F6E\u3002","\u640D\u50B7\u306E\u7A2E\u985E\u306F\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002":"\u5C1A\u672A\u767B\u8BB0\u635F\u4F24\u7C7B\u578B\u3002",\u8ECA\u4E21\u60C5\u5831\u3068\u99D0\u8ECA\u5834\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u8F66\u8F86\u548C\u505C\u8F66\u573A\u4FE1\u606F","\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u505C\u8F66\u573A\u8BBE\u7F6E\u3002","\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u5220\u9664\u8BBE\u7F6E\u3002",\u767B\u9332\u8ECA\u4E21:"\u767B\u8BB0\u8F66\u8F86",\u914D\u7F6E\u30A8\u30EA\u30A2:"\u505C\u8F66\u533A\u57DF",\u8981\u5BFE\u5FDC:"\u5F85\u5904\u7406",\u30B9\u30C6\u30FC\u30BF\u30B9\u5225\u306E\u8ECA\u4E21:"\u6309\u72B6\u6001\u5206\u7C7B\u7684\u8F66\u8F86",\u30B8\u30E7\u30D6:"\u4EFB\u52A1",\u8ECA\u4E21\u4E00\u89A7:"\u8F66\u8F86\u5217\u8868",\u8ECA\u756A\u3067\u691C\u7D22:"\u6309\u8F66\u724C\u641C\u7D22",ERP\u8ECA\u4E21\u3092\u540C\u671F:"\u540C\u6B65 ERP \u8F66\u8F86",All:"\u5168\u90E8",\u3059\u3079\u3066:"\u5168\u90E8","\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u8F66\u8F86\u3002","\u8ECA\u4E21\u7BA1\u7406\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u524D\u5F80\u8F66\u8F86\u7BA1\u7406\u9875\u9762\u767B\u8BB0\u3002",\u8ECA\u4E21\u7BA1\u7406\u3078:"\u524D\u5F80\u8F66\u8F86\u7BA1\u7406",\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u3042\u308A\u307E\u305B\u3093:"\u5C1A\u672A\u8BBE\u7F6E\u505C\u8F66\u533A\u57DF","\u300C\u4F4D\u7F6E\u3092\u7BA1\u7406\u300D\u304B\u3089\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8ECA\u4E21\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002":"\u901A\u8FC7\u201C\u7BA1\u7406\u505C\u8F66\u4F4D\u7F6E\u201D\u6DFB\u52A0\u533A\u57DF\u540E\uFF0C\u5373\u53EF\u5E03\u7F6E\u8F66\u8F86\u3002",\u30B5\u30A4\u30BA\u8ABF\u6574:"\u8C03\u6574\u5C3A\u5BF8",\u8A2D\u5B9A:"\u8BBE\u7F6E","\u30A8\u30EA\u30A2\u306E\u5E45\uFF08%\uFF09":"\u533A\u57DF\u5BBD\u5EA6\uFF08%\uFF09",\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4:"\u62D6\u52A8\u4EE5\u8C03\u6574\u505C\u8F66\u533A\u57DF\u5927\u5C0F",\u30E1\u30CB\u30E5\u30FC:"\u83DC\u5355",\u6B63\u5E38\u7A3C\u50CD\u4E2D:"\u8FD0\u884C\u6B63\u5E38",\u66F4\u65B0:"\u5237\u65B0",\u518D\u8A66\u884C:"\u91CD\u8BD5","\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u2026",\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F:"\u65E0\u6CD5\u52A0\u8F7D","\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u64CD\u4F5C\u672A\u80FD\u5B8C\u6210\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u9884\u7EA6\u4E0E\u63A5\u5F85",\u5E97\u8217\u7BA1\u7406:"\u95E8\u5E97\u7BA1\u7406",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8:"\u5E97\u94FA\u8D26\u6237",\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u623B\u308B:"\u8FD4\u56DE\u7BA1\u7406\u8D26\u53F7",\u5E97\u8217\u3054\u3068\u306E\u30ED\u30B0\u30A4\u30F3\u3068\u5229\u7528\u6A29\u9650\u3092\u7BA1\u7406:"\u7BA1\u7406\u5404\u5E97\u94FA\u7684\u767B\u5F55\u8D26\u6237\u548C\u4F7F\u7528\u6743\u9650","\u3059\u3079\u3066\u306E\u5E97\u8217\u30FB\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u7BA1\u7406":"\u7BA1\u7406\u6240\u6709\u95E8\u5E97\u8D26\u6237\u548C\u7BA1\u7406\u5458\u8D26\u6237\u53CA\u5176\u5BC6\u7801",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5E97\u94FA\u8D26\u6237",\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8D26\u6237","\u5E97\u8217 / \u30A2\u30AB\u30A6\u30F3\u30C8":"\u5E97\u94FA / \u8D26\u6237",\u5E97\u8217\u30B3\u30FC\u30C9:"\u5E97\u94FA\u4EE3\u7801",\u7BA1\u7406\u8005:"\u7BA1\u7406\u5458",\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4:"\u4FEE\u6539\u5BC6\u7801",\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4:"\u4FEE\u6539\u5BC6\u7801",\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9:"\u65B0\u5BC6\u7801","\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\uFF08\u78BA\u8A8D\uFF09":"\u786E\u8BA4\u65B0\u5BC6\u7801","12\uFF5E128 \u6587\u5B57":"12\u2013128 \u4E2A\u5B57\u7B26",\u3082\u3046\u4E00\u5EA6\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u518D\u6B21\u8F93\u5165","\u5909\u66F4\u524D\u306B\u30ED\u30B0\u30A4\u30F3\u6E08\u307F\u306E\u7AEF\u672B\u306F\u3001\u305D\u306E\u307E\u307E\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u304C\u7D9A\u304D\u307E\u3059\u3002":"\u5DF2\u767B\u5F55\u7684\u8BBE\u5907\u4E0D\u4F1A\u56E0\u4FEE\u6539\u5BC6\u7801\u800C\u9000\u51FA\u3002","\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u306A\u3044\u304B\u3001\u5FC5\u8981\u306A\u6587\u5B57\u6570\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093\u3002":"\u4E24\u6B21\u8F93\u5165\u7684\u65B0\u5BC6\u7801\u4E0D\u4E00\u81F4\uFF0C\u6216\u5BC6\u7801\u957F\u5EA6\u4E0D\u7B26\u5408\u8981\u6C42\u3002",\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5E97\u94FA\u8D26\u6237",\u5E97\u8217\u7528\u306E\u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059:"\u8BBE\u7F6E\u5E97\u94FA\u767B\u5F55 ID \u548C\u4F7F\u7528\u6743\u9650",\u5229\u7528\u6A29\u9650:"\u4F7F\u7528\u6743\u9650",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F:"\u5458\u5DE5\u540D\u5355",\u30B9\u30BF\u30C3\u30D5\u540D:"\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059":"\u7528\u4E8E\u9009\u62E9\u51FA\u79DF\u548C\u6536\u8F66\u7684\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093:"\u5C1A\u672A\u767B\u8BB0\u5458\u5DE5\u59D3\u540D",\u7121\u52B9\u306B\u3059\u308B:"\u505C\u7528",\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5458\u5DE5\u59D3\u540D","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059":"\u66F4\u6539\u51FA\u79DF\u548C\u6536\u8F66\u8BB0\u5F55\u4E2D\u663E\u793A\u7684\u59D3\u540D","\u8CB8\u51FA\u62C5\u5F53\uFF1A":"\u51FA\u79DF\u7ECF\u529E\uFF1A","\u8FD4\u5374\u62C5\u5F53\uFF1A":"\u6536\u8F66\u7ECF\u529E\uFF1A","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059":"\u767B\u8BB0\u51FA\u79DF\u548C\u6536\u8F66\u65F6\u7684\u7ECF\u529E\u5458\u5DE5",\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5:"\u7ECF\u529E\u5458\u5DE5",\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u5458\u5DE5","\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u5148\u5728\u5458\u5DE5\u540D\u5355\u4E2D\u767B\u8BB0\u7ECF\u529E\u5458\u5DE5\u3002",\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F:"\u6253\u5F00\u5458\u5DE5\u540D\u5355",\u8CB8\u51FA\u624B\u7D9A\u304D:"\u529E\u7406\u51FA\u79DF",\u8FD4\u5374\u624B\u7D9A\u304D:"\u529E\u7406\u6536\u8F66",\u8CB8\u51FA\u3092\u78BA\u5B9A:"\u786E\u8BA4\u51FA\u79DF",\u8FD4\u5374\u3092\u78BA\u5B9A:"\u786E\u8BA4\u6536\u8F66","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u6DFB\u52A0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u66F4\u65B0\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u91CD\u65B0\u542F\u7528\u5458\u5DE5\u59D3\u540D\u3002","\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u505C\u7528\u5458\u5DE5\u59D3\u540D\u3002",employee_required:"\u8BF7\u9009\u62E9\u8D1F\u8D23\u6B64\u6B21\u64CD\u4F5C\u7684\u5458\u5DE5\u3002",invalid_employee:"\u8BF7\u68C0\u67E5\u5458\u5DE5\u59D3\u540D\u3002",\u8ECA\u4E21\u7BA1\u7406:"\u8F66\u8F86\u7BA1\u7406",\u99D0\u8ECA\u5834\u914D\u7F6E:"\u505C\u8F66\u573A\u5E03\u5C40",\u8ECA\u4E21\u4E00\u89A7\u3078\u623B\u308B:"\u8FD4\u56DE\u8F66\u8F86\u5217\u8868",\u30ED\u30B0\u30A2\u30A6\u30C8:"\u9000\u51FA\u767B\u5F55",\u6240\u5C5E\u5E97\u8217:"\u6240\u5C5E\u95E8\u5E97",\u6709\u52B9:"\u542F\u7528",\u7121\u52B9:"\u505C\u7528",\u8CB8\u51FA\u53EF\u80FD:"\u53EF\u51FA\u79DF",\u8CB8\u51FA\u4E2D:"\u51FA\u79DF\u4E2D",\u6574\u5099\u4E2D:"\u7EF4\u4FEE\u4E2D",\u767B\u9332\u62B9\u6D88:"\u5DF2\u6CE8\u9500",\u672C\u90E8:"\u603B\u90E8",\u76F4\u55B6\u5E97:"\u76F4\u8425\u5E97",\u52A0\u76DF\u5E97:"\u52A0\u76DF\u5E97",\u4E88\u7D04\u6E08\u307F:"\u5DF2\u9884\u7EA6",\u8FD4\u5374\u6E08\u307F:"\u5DF2\u5F52\u8FD8",\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002":"\u8D26\u6237\u6216\u5BC6\u7801\u4E0D\u6B63\u786E\u3002","\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002":"\u60A8\u6CA1\u6709\u6743\u9650\u6267\u884C\u6B64\u64CD\u4F5C\u3002","\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u4FE1\u606F\u91CD\u590D\uFF0C\u8BF7\u68C0\u67E5\u95E8\u5E97\u4EE3\u7801\u3001\u8D26\u6237\u540D\u3001\u8F66\u724C\u53F7\u6216\u5458\u5DE5\u59D3\u540D\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u4ECD\u6709\u8F66\u8F86\u6216\u4F5C\u4E1A\u8BA1\u5212\uFF0C\u6B64\u505C\u8F66\u533A\u57DF\u65E0\u6CD5\u5220\u9664\u3002","\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":"\u65E0\u6CD5\u5220\u9664\u6700\u540E\u4E00\u4E2A\u505C\u8F66\u533A\u57DF\u3002","\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u8F66\u8F86\u6216\u9884\u7EA6\u72B6\u6001\u5DF2\u66F4\u6539\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002","\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u5F79\u5272\u3001\u307E\u305F\u306F\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u95E8\u5E97\u3001\u89D2\u8272\u6216\u8F66\u8F86\u3002","\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u8ECA\u4E21\u3001\u30B9\u30BF\u30C3\u30D5\u3001\u307E\u305F\u306F\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u6240\u9009\u95E8\u5E97\u3001\u8F66\u8F86\u3001\u5458\u5DE5\u6216\u505C\u8F66\u573A\u8BBE\u7F6E\u3002","\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8F93\u5165\u5185\u5BB9\u3002","\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002":"\u53D1\u751F\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002","ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u6709\u8F66\u8F86\u7684 ERP \u7F51\u70B9\u5DF2\u66F4\u6539\uFF0C\u8BF7\u68C0\u67E5\u505C\u8F66\u573A\u6570\u636E\u4E2D\u7684\u7F51\u70B9\u5206\u914D\u3002","\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002":"\u8D26\u6237\u6216\u6240\u5C5E\u95E8\u5E97\u5DF2\u505C\u7528\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8D26\u6237\u3002","\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u8F66\u8F86\u3002","\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u9884\u7EA6\u3002","\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u95E8\u5E97\u4FE1\u606F\u3002","\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u89D2\u8272\u4FE1\u606F\u3002","\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u8D26\u6237\u4FE1\u606F\u3002","\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u6240\u9009\u6743\u9650\u3002","\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u9009\u62E9\u95E8\u5E97\u3002","\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u68C0\u67E5\u9884\u7EA6\u5185\u5BB9\u3002","\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002":"\u627E\u4E0D\u5230\u76F8\u5173\u4FE1\u606F\u3002",\u30A2\u30AB\u30A6\u30F3\u30C8:"\u8D26\u6237",\u30D1\u30B9\u30EF\u30FC\u30C9:"\u5BC6\u7801",\u30ED\u30B0\u30A4\u30F3:"\u767B\u5F55","\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026":"\u6B63\u5728\u767B\u5F55\u2026","\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002":"\u65E0\u6CD5\u8BFB\u53D6\u505C\u8F66\u573A\u66F4\u65B0\u901A\u77E5\u3002","\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u505C\u8F66\u573A\u5B9E\u65F6\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u65B0\u8FDE\u63A5\u3002","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406":"\u7BA1\u7406\u603B\u90E8\u3001\u76F4\u8425\u5E97\u548C\u52A0\u76DF\u5E97",\u5E97\u8217\u6570:"\u95E8\u5E97\u6570",\u76F4\u55B6:"\u76F4\u8425",\u52A0\u76DF:"\u52A0\u76DF","\u6709\u52B9 ":"\u542F\u7528 ",\u4EF6:"\u9879",\u8ECA\u4E21\u53F0\u6570:"\u8F66\u8F86\u6570",\u53F0:"\u8F86","\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8":"\u6700\u8FD1\u7684\u9884\u7EA6\u4E0E\u63A5\u5F85",\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u5168\u90E8",\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u9884\u7EA6",\u8ECA\u4E21\u72B6\u6CC1:"\u8F66\u8F86\u72B6\u6001",\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08:"\u5B9E\u65F6\u7EDF\u8BA1",\u5E97\u8217\u4E00\u89A7:"\u95E8\u5E97\u5217\u8868",\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97\u4FE1\u606F",\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A:"\u67E5\u770B\u6240\u6709\u95E8\u5E97",\u691C\u7D22:"\u641C\u7D22",\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22:"\u6309\u95E8\u5E97\u540D\u79F0\u6216\u4EE3\u7801\u641C\u7D22",\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u95E8\u5E97","\u5E97\u8217\u540D / \u30B3\u30FC\u30C9":"\u95E8\u5E97\u540D\u79F0 / \u4EE3\u7801",\u5E97\u8217\u7A2E\u5225:"\u95E8\u5E97\u7C7B\u578B",\u72B6\u614B:"\u72B6\u6001",\u64CD\u4F5C:"\u64CD\u4F5C",\u5E97\u8217\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u95E8\u5E97","\u5E97\u8217\u540D\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3067\u691C\u7D22":"\u6309\u5E97\u94FA\u540D\u79F0\u6216\u8D26\u6237\u540D\u641C\u7D22",\u7DE8\u96C6:"\u7F16\u8F91",\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u95E8\u5E97\u4FE1\u606F",\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7:"\u67E5\u770B\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C:"\u64CD\u4F5C\u505C\u8F66\u573A\u770B\u677F",\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406:"\u7BA1\u7406\u505C\u8F66\u573A\u770B\u677F\u8BBE\u7F6E","\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7":"\u67E5\u770B\u9884\u7EA6\u4E0E\u63A5\u5F85\u4FE1\u606F","\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D":"\u521B\u5EFA\u9884\u7EA6\u3001\u529E\u7406\u51FA\u79DF\u4E0E\u5F52\u8FD8",\u305D\u306E\u4ED6\u306E\u6A29\u9650:"\u5176\u4ED6\u6743\u9650",\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u6743\u9650\u8BF4\u660E",\u3059\u3079\u3066\u306E\u72B6\u614B:"\u6240\u6709\u72B6\u6001",\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406:"\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F\u548C\u8FD0\u8425\u72B6\u6001","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22":"\u6309\u8F66\u724C\u53F7\u3001\u5236\u9020\u5546\u6216\u8F66\u578B\u641C\u7D22","\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8":"\u8F66\u8F86 / \u8F66\u724C\u53F7",\u56FA\u5B9AID:"\u56FA\u5B9A ID",\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093:"\u627E\u4E0D\u5230\u8F66\u8F86",\u8ECA\u4E21\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8F66\u8F86",ERP\u8ECA\u4E21\u3092\u30DC\u30FC\u30C9\u3078\u53CD\u6620:"\u5C06 ERP \u8F66\u8F86\u540C\u6B65\u5230\u770B\u677F","\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58":"\u4FDD\u5B58\u4F4D\u7F6E\u548C\u72B6\u6001",\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8:"\u505C\u8F66\u533A\u57DF\u5E03\u5C40",\u672A\u914D\u7F6E:"\u672A\u5206\u914D","\u4F4D\u7F6E X":"\u4F4D\u7F6E X","\u4F4D\u7F6E Y":"\u4F4D\u7F6E Y",\u99D0\u8ECA\u533A\u753B:"\u505C\u8F66\u533A\u57DF",\u696D\u52D9\u72B6\u614B:"\u4E1A\u52A1\u72B6\u6001",\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3:"\u8F66\u8F86\u9009\u9879",\u6D17\u8ECA\u5F85\u3061:"\u5F85\u6D17\u8F66",\u7D66\u6CB9\u5F85\u3061:"\u5F85\u52A0\u6CB9",\u4FEE\u7406\u5F85\u3061:"\u5F85\u7EF4\u4FEE",\u672A\u8A55\u4FA1:"\u672A\u8BC4\u4F30",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC:"\u635F\u4F24\u6807\u8BB0","3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6":"3D \u8F66\u8F86\u68C0\u67E5 / \u7F16\u8F91\u635F\u4F24",\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC:"\u635F\u4F24\u6807\u8BB0\u9884\u89C8","3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6":"\u5728 3D \u68C0\u67E5\u4E2D\u7F16\u8F91\u635F\u4F24\u4F4D\u7F6E",\u30E1\u30E2:"\u5907\u6CE8",\u72B6\u614B\u306A\u3057:"\u65E0\u72B6\u6001",\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","\u8A73\u7D30\u30FB\u72B6\u614B":"\u8BE6\u60C5\u4E0E\u72B6\u6001",\u904B\u7528\u4E2D:"\u8FD0\u8425\u4E2D",\u505C\u6B62\u4E2D:"\u5DF2\u505C\u7528",\u4E0A\u3078:"\u4E0A\u79FB",\u4E0B\u3078:"\u4E0B\u79FB",\u30EC\u30A4\u30A2\u30A6\u30C8:"\u5E03\u5C40",\u7DDA\u63CF\u753B\u3092\u7D42\u4E86:"\u7ED3\u675F\u7ED8\u7EBF",\u7DDA\u3092\u63CF\u304F:"\u7ED8\u5236\u7EBF\u6761",\u505C\u6B62:"\u505C\u7528",\u518D\u958B:"\u91CD\u65B0\u542F\u7528",\u524A\u9664:"\u5220\u9664",\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3:"\u505C\u8F66\u533A\u57DF\u7EBF\u6761",\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0:"\u5C06\u8F66\u8F86\u62D6\u52A8\u5230\u6B64\u5904",\u7DDA\u306E\u8272:"\u7EBF\u6761\u989C\u8272",\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u6700\u540E\u4E00\u6761\u7EBF","\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u5728\u56FE\u4E2D\u62D6\u52A8\u4EE5\u7ED8\u5236\u533A\u57DF\u7EBF\u6761\uFF0C\u677E\u5F00\u9F20\u6807\u540E\u81EA\u52A8\u4FDD\u5B58\u3002","\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002":"\u62D6\u52A8\u8F66\u8F86\u7684 \u283F \u6807\u8BB0\u53EF\u8C03\u6574\u4F4D\u7F6E\uFF0C\u4FEE\u6539\u4F1A\u81EA\u52A8\u4FDD\u5B58\u3002","\u79FB\u52D5\u30FB\u4F5C\u696D\u4E88\u5B9A":"\u79FB\u52A8\u8F66\u8F86 / \u4F5C\u4E1A\u8BA1\u5212",\u4E88\u5B9A:"\u8BA1\u5212",\u5B8C\u4E86:"\u5B8C\u6210",\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u65F6\u95F4",\u4E88\u5B9A\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u8BA1\u5212",\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8BA1\u5212",\u99D0\u8ECA\u30A8\u30EA\u30A2\u540D:"\u505C\u8F66\u533A\u57DF\u540D\u79F0","Google Maps \u6848\u5185URL":"Google Maps \u5BFC\u822A URL",\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u533A\u57DF",\u8ECA\u4E21\u30AF\u30E9\u30B9:"\u8F66\u8F86\u7C7B\u522B",\u30AF\u30E9\u30B9\u540D:"\u7C7B\u522B\u540D\u79F0",\u8FFD\u52A0:"\u6DFB\u52A0",\u72B6\u614B\u540D:"\u72B6\u6001\u540D\u79F0",\u30AA\u30D7\u30B7\u30E7\u30F3\u540D:"\u9009\u9879\u540D\u79F0","\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u5E97\u8217 / \u62E0\u70B9":"\u52A0\u76DF\u95E8\u5E97 / \u7F51\u70B9","\u65E7Parking\u306E\u5E97\u8217\u306F\u73FE\u5728\u306EERP\u62E0\u70B9\u306B\u5C5E\u3059\u308B\u5E97\u8217\u30C7\u30FC\u30BF\u3078\u79FB\u884C\u3057\u307E\u3059\u3002\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u62E0\u70B9\u3068\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306FERP\u306E\u300C\u5E97\u8217\u300D\u300C\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u300D\u304B\u3089\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E7\u505C\u8F66\u7CFB\u7EDF\u7684\u95E8\u5E97\u6570\u636E\u5C06\u8FC1\u79FB\u5230\u5F53\u524D ERP \u7F51\u70B9\u3002\u8BF7\u5728 ERP \u7684\u201C\u95E8\u5E97\u201D\u548C\u201C\u5E97\u94FA\u8D26\u6237\u201D\u4E2D\u7BA1\u7406\u52A0\u76DF\u7F51\u70B9\u53CA\u8D26\u6237\u3002",\u5E97\u8217\u540D:"\u95E8\u5E97\u540D\u79F0",\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u95E8\u5E97",\u62E0\u70B9\u9593\u8DDD\u96E2:"\u505C\u8F66\u533A\u57DF\u95F4\u8DDD\u79BB","\u5206\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u65E2\u5B58\u306E\u8DDD\u96E2\u3092\u524A\u9664\u3057\u307E\u3059\u3002":"\u5206\u949F\u7559\u7A7A\u5C06\u5220\u9664\u5DF2\u6709\u8DDD\u79BB\u8BBE\u7F6E\u3002",\u5206:"\u5206\u949F",\u4FDD\u5B58:"\u4FDD\u5B58",\u5E97\u8217\u304B\u3089\u99D0\u8ECA\u5834\u307E\u3067:"\u95E8\u5E97\u81F3\u505C\u8F66\u573A","\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u306E\u6240\u8981\u6642\u9593\u30FB\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002":"\u8BBE\u7F6E\u95E8\u5E97\u4E0E\u505C\u8F66\u573A\u4E4B\u95F4\u7684\u65F6\u95F4\u548C\u8DDD\u79BB\u3002",\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u8DDD\u79BB\u8BBE\u7F6E",\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u5148\u6DFB\u52A0\u95E8\u5E97\u548C\u505C\u8F66\u573A",\u67FB\u5B9A\u9805\u76EE:"\u8BC4\u4F30\u9879\u76EE",\u5358\u4F4D:"\u5355\u4F4D",\u6A19\u6E96:"\u9ED8\u8BA4",\u67FB\u5B9A\u9805\u76EE\u540D:"\u8BC4\u4F30\u9879\u76EE\u540D\u79F0",\u640D\u50B7\u540D:"\u635F\u4F24\u540D\u79F0",\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059:"\u64A4\u9500\u4F4D\u7F6E\u4FEE\u6539","\u8ECA\u4E21\u306E\u914D\u7F6E\u30FB\u696D\u52D9\u72B6\u614B\u3092\u7BA1\u7406":"\u7BA1\u7406\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002":"\u5F53\u524D\u4E3A\u53EA\u8BFB\u6A21\u5F0F\u3002\u9700\u8981\u505C\u8F66\u573A\u5199\u5165\u6743\u9650\u624D\u80FD\u8C03\u6574\u4F4D\u7F6E\u3002","\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22":"\u6309\u9884\u7EA6\u7F16\u53F7\u3001\u5BA2\u6237\u6216\u8F66\u724C\u53F7\u641C\u7D22","\u4E88\u7D04\u3092\u767B\u9332\u3057\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059":"\u767B\u8BB0\u9884\u7EA6\u5E76\u529E\u7406\u51FA\u79DF\u3001\u5F52\u8FD8\u624B\u7EED","\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217":"\u9884\u7EA6\u7F16\u53F7 / \u95E8\u5E97",\u304A\u5BA2\u69D8\u60C5\u5831:"\u5BA2\u6237\u4FE1\u606F",\u5229\u7528\u671F\u9593:"\u4F7F\u7528\u671F\u95F4",\u53D7\u4ED8\u64CD\u4F5C:"\u63A5\u5F85\u64CD\u4F5C",\u3059\u3079\u3066\u306E\u4E88\u7D04:"\u6240\u6709\u9884\u7EA6","\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044":"\u6682\u65E0\u9884\u7EA6\u3002\u5BA2\u6237\u5230\u5E97\u65F6\u8BF7\u767B\u8BB0\u63A5\u5F85\u4FE1\u606F\u3002",\u4E88\u7D04\u3092\u4F5C\u6210:"\u521B\u5EFA\u9884\u7EA6",\u4E88\u7D04\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u9884\u7EA6",\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u5BA2\u6237\u548C\u4F7F\u7528\u671F\u9650",\u304A\u5BA2\u69D8\u7BA1\u7406:"\u5BA2\u6237\u7BA1\u7406",\u304A\u5BA2\u69D8\u306E\u57FA\u672C\u60C5\u5831\u3068\u9023\u7D61\u5148\u3092\u7BA1\u7406:"\u7BA1\u7406\u5BA2\u6237\u57FA\u672C\u4FE1\u606F\u548C\u8054\u7CFB\u65B9\u5F0F",\u304A\u5BA2\u69D8\u3092\u8FFD\u52A0:"\u6DFB\u52A0\u5BA2\u6237",\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u7DE8\u96C6:"\u7F16\u8F91\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u7BA1\u7406:"\u7BA1\u7406\u5BA2\u6237\u4FE1\u606F",\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7:"\u67E5\u770B\u672C\u95E8\u5E97\u5BA2\u6237\u4FE1\u606F","\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u66F4\u65B0":"\u521B\u5EFA\u548C\u66F4\u65B0\u672C\u95E8\u5E97\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u5BA2\u6237\u4FE1\u606F",\u304A\u5BA2\u69D8\u540D:"\u5BA2\u6237\u59D3\u540D",\u6C0F\u540D:"\u59D3\u540D",\u30D5\u30EA\u30AC\u30CA:"\u5047\u540D","\u6C0F\u540D\u30FB\u30D5\u30EA\u30AC\u30CA\u3067\u691C\u7D22":"\u6309\u59D3\u540D\u6216\u5047\u540D\u641C\u7D22",\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22:"\u6309\u7535\u8BDD\u53F7\u7801\u641C\u7D22","\u304A\u52E4\u3081\u5148\u30FB\u5B66\u6821":"\u5DE5\u4F5C\u5355\u4F4D / \u5B66\u6821","\u52E4\u52D9\u5148\u30FB\u5B66\u6821":"\u5DE5\u4F5C\u5355\u4F4D / \u5B66\u6821",\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9:"\u7535\u5B50\u90AE\u7BB1",\u751F\u5E74\u6708\u65E5:"\u51FA\u751F\u65E5\u671F",\u4F4F\u6240:"\u5730\u5740","\u7DCA\u6025\u9023\u7D61\u5148\uFF08\u4EFB\u610F\uFF09":"\u7D27\u6025\u8054\u7CFB\u4EBA\uFF08\u9009\u586B\uFF09",\u7D9A\u67C4:"\u5173\u7CFB",\u4EFB\u610F:"\u9009\u586B","\u4E88\u7D04\u4F5C\u6210\u6642\u306B\u6C0F\u540D\u3084\u96FB\u8A71\u756A\u53F7\u304B\u3089\u691C\u7D22\u3067\u304D\u307E\u3059\u3002\u4F4F\u6240\u306A\u3069\u306F\u4EFB\u610F\u3067\u3059\u3002":"\u521B\u5EFA\u9884\u7EA6\u65F6\u53EF\u6309\u59D3\u540D\u6216\u7535\u8BDD\u53F7\u7801\u641C\u7D22\u3002\u5730\u5740\u7B49\u4FE1\u606F\u4E3A\u9009\u586B\u3002","\u6C0F\u540D\u3001\u30D5\u30EA\u30AC\u30CA\u3001\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22":"\u6309\u59D3\u540D\u3001\u5047\u540D\u6216\u7535\u8BDD\u53F7\u7801\u641C\u7D22",\u767B\u9332\u6E08\u307F\u306E\u304A\u5BA2\u69D8:"\u5DF2\u767B\u8BB0\u5BA2\u6237","\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026":"\u6B63\u5728\u641C\u7D22\u5BA2\u6237\u4FE1\u606F\u2026","\u8A72\u5F53\u3059\u308B\u304A\u5BA2\u69D8\u306F\u3044\u307E\u305B\u3093\u3002\u4E88\u7D04\u4FDD\u5B58\u6642\u306B\u6C0F\u540D\u3068\u96FB\u8A71\u756A\u53F7\u3067\u65B0\u898F\u767B\u9332\u3057\u307E\u3059\u3002":"\u6CA1\u6709\u627E\u5230\u5339\u914D\u5BA2\u6237\u3002\u4FDD\u5B58\u9884\u7EA6\u65F6\u5C06\u4F7F\u7528\u59D3\u540D\u548C\u7535\u8BDD\u53F7\u7801\u65B0\u5EFA\u5BA2\u6237\u3002",\u9078\u629E\u89E3\u9664:"\u53D6\u6D88\u9009\u62E9",\u5E0C\u671B\u30AF\u30E9\u30B9:"\u671F\u671B\u7C7B\u522B","\u8ECA\u4E21\u306E\u5E0C\u671B\u6761\u4EF6\uFF08\u4EFB\u610F\uFF09":"\u8F66\u8F86\u6761\u4EF6\uFF08\u9009\u586B\uFF09",\u9078\u629E\u3067\u304D\u308B\u6761\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093:"\u6682\u65E0\u53EF\u9009\u6761\u4EF6",\u7A7A\u304D\u8ECA\u4E21:"\u53EF\u7528\u8F66\u8F86","\u5229\u7528\u65E5\u6642\u3001\u5E0C\u671B\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3059\u308B\u3068\u7A7A\u304D\u8ECA\u4E21\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002":"\u9009\u62E9\u4F7F\u7528\u65F6\u95F4\u548C\u671F\u671B\u7C7B\u522B\u540E\uFF0C\u5C06\u663E\u793A\u53EF\u7528\u8F66\u8F86\u3002","\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026":"\u6B63\u5728\u641C\u7D22\u7B26\u5408\u6761\u4EF6\u7684\u53EF\u7528\u8F66\u8F86\u2026","\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002":"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u53EF\u7528\u8F66\u8F86\u3002",\u304A\u5BA2\u69D8\u306E\u6C0F\u540D:"\u5BA2\u6237\u59D3\u540D",\u96FB\u8A71\u756A\u53F7:"\u7535\u8BDD\u53F7\u7801",\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u51FA\u79DF\u65F6\u95F4",\u53D7\u4ED8\u5E97\u8217:"\u63A5\u5F85\u95E8\u5E97",\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u95E8\u5E97",\u8ECA\u4E21\u306E\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u8CB8\u51FA\u53EF\u80FD\u306A\u8ECA\u4E21\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9\u53EF\u51FA\u79DF\u7684\u8F66\u8F86","\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u8BF7\u6B63\u786E\u586B\u5199\u51FA\u79DF\u548C\u5F52\u8FD8\u65F6\u95F4\u3002","\u8CB8\u51FA\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u51FA\u79DF\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u8FD4\u5374\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002":"\u5F52\u8FD8\u624B\u7EED\u5DF2\u5B8C\u6210\u3002","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002":"\u9884\u7EA6\u5DF2\u53D6\u6D88\u3002",\u4E88\u7D04\u756A\u53F7:"\u9884\u7EA6\u7F16\u53F7",\u304A\u5BA2\u69D8:"\u5BA2\u6237",\u8ECA\u4E21:"\u8F66\u8F86","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026":"\u6B63\u5728\u52A0\u8F7D\u8F66\u8F86\u2026","\u8ECA\u4E21\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u65E0\u6CD5\u52A0\u8F7D\u8F66\u8F86\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97\u3002",\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642:"\u8BA1\u5212\u5F52\u8FD8\u65F6\u95F4","\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u53D6\u6D88\u6B64\u9884\u7EA6\u5417\uFF1F","\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BA1\u5212\u5417\uFF1F","\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u505C\u8F66\u533A\u57DF\u5417\uFF1F","\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F":"\u786E\u5B9A\u5220\u9664\u6B64\u8BBE\u7F6E\u9879\u5417\uFF1F","\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u66F4\u65B0\u3002","\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002":"\u8BA1\u5212\u5DF2\u5220\u9664\u3002","\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002":"\u5DF2\u4FDD\u5B58\u3002",\u8A2D\u5B9A\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u8BBE\u7F6E",\u8A2D\u5B9A\u9805\u76EE:"\u8BBE\u7F6E\u9879",\u30A2\u30AB\u30A6\u30F3\u30C8\u540D:"\u8D26\u6237\u540D","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57":"3\u201364 \u4E2A\u534A\u89D2\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u7B26\u53F7",\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u59D3\u540D",\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9:"\u521D\u59CB\u5BC6\u7801","12 \u6587\u5B57\u4EE5\u4E0A":"\u81F3\u5C11 12 \u4E2A\u5B57\u7B26",\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B:"\u8D26\u6237\u72B6\u6001","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u518D\u8A2D\u5B9A\uFF08\u4EFB\u610F\uFF09":"\u91CD\u7F6E\u5BC6\u7801\uFF08\u53EF\u9009\uFF09",\u7A7A\u6B04\u306E\u5834\u5408\u306F\u5909\u66F4\u3057\u307E\u305B\u3093:"\u7559\u7A7A\u5219\u4E0D\u66F4\u6539","\u8ECA\u53F0\u756A\u53F7\uFF08\u4EFB\u610F\uFF09":"\u8F66\u67B6\u53F7\uFF08\u53EF\u9009\uFF09",\u8ECA\u53F0\u756A\u53F7:"\u8F66\u67B6\u53F7",\u30E1\u30FC\u30AB\u30FC:"\u5236\u9020\u5546",\u8ECA\u7A2E:"\u8F66\u578B","\u4F8B\uFF1AToyota":"\u4F8B\u5982\uFF1AToyota","\u4F8B\uFF1APrius":"\u4F8B\u5982\uFF1APrius","\u5E74\u5F0F\uFF08\u4EFB\u610F\uFF09":"\u5E74\u4EFD\uFF08\u53EF\u9009\uFF09",\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8:"\u8F66\u724C\u53F7",\u30D7\u30EC\u30FC\u30C8\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u8F66\u724C\u53F7",\u8ECA\u4E21\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u8F66\u8F86\u4FE1\u606F",\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6:"\u7F16\u8F91\u8F66\u8F86\u4FE1\u606F",\u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093:"\u56FA\u5B9A\u8F66\u8F86 ID \u4E0D\u53EF\u66F4\u6539",\u8ECA\u4E21\u306E\u72B6\u614B:"\u8F66\u8F86\u72B6\u6001",\u8ECA\u4E21\u3092\u4E88\u7D04:"\u9884\u7EA6\u8F66\u8F86",\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB:"\u53D6\u6D88\u9884\u7EA6","\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\uFF08\u65B0\u898F ":"\u505C\u8F66\u573A\u770B\u677F\u5DF2\u66F4\u65B0\uFF08\u65B0\u589E "," \u53F0\u3001\u66F4\u65B0 ":" \u8F86\uFF0C\u66F4\u65B0 ","\uFF09\u3002":"\uFF09\u3002",\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A:"\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u4EE5\u9017\u53F7\u5206\u9694","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09":"\u4F18\u5148\u8F66\u8F86\u7C7B\u522B\uFF08\u6309\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\uFF09","\u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A":"\u8BBE\u7F6E\u56FE\u7EB8\u5C3A\u5BF8\u3001\u5BB9\u91CF\u548C\u4F18\u5148\u7C7B\u522B","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09":"\u56FE\u7EB8\u9AD8\u5EA6\uFF08px\uFF09","\u56F3\u9762\u306E\u5E45\uFF08%\uFF09":"\u56FE\u7EB8\u5BBD\u5EA6\uFF08%\uFF09","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09":"\u5BB9\u91CF\uFF08\u4E0D\u9650\u65F6\u7559\u7A7A\uFF09",\u7A3C\u50CD\u72B6\u614B:"\u8FD0\u8425\u72B6\u6001",\u30A8\u30EA\u30A2\u540D:"\u533A\u57DF\u540D\u79F0","3D\u8ECA\u4E21\u691C\u67FB":"3D \u8F66\u8F86\u68C0\u67E5","\u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002":"\u62D6\u52A8\u53EF\u65CB\u8F6C 360\xB0\u3002\u9009\u62E9\u7C7B\u578B\u540E\u70B9\u51FB\u8F66\u8EAB\u5373\u53EF\u8BB0\u5F55\uFF0C\u70B9\u51FB\u6807\u8BB0\u53EF\u5220\u9664\u3002",\u9589\u3058\u308B:"\u5173\u95ED",\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093:"\u62B1\u6B49","\uFF5E":"\u2013",\u524D\u3078:"\u4E0A\u4E00\u9875",\u6B21\u3078:"\u4E0B\u4E00\u9875",\u4EF6\u3092\u8868\u793A:"\u9879",\u4E0D\u660E:"\u672A\u77E5",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059:"\u767B\u8BB0\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97","\u4F8B\uFF1ATKY-001":"\u4F8B\u5982\uFF1ATKY-001",\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u95E8\u5E97\u540D\u79F0",\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801",\u5E74\u5F0F:"\u5E74\u4EFD",\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F:"\u6253\u5F00\u83DC\u5355","\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002":"\u79BB\u7EBF\u5E94\u7528\u6CE8\u518C\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002","\u76F4\u55B6 ":"\u76F4\u8425 ","\u52A0\u76DF ":"\u52A0\u76DF ","\u5E97 \xB7 ":"\u5BB6 \xB7 ","\u8CB8\u51FA\u53EF\u80FD ":"\u53EF\u51FA\u79DF ","\u6574\u5099\u4E2D ":"\u7EF4\u4FEE\u4E2D ",\u6A29\u9650:"\u6743\u9650",\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97:"\u76F4\u8425\u5E97\u6216\u52A0\u76DF\u5E97",\u8ECA\u4E21\u3092\u3059\u3079\u3066\u8868\u793A:"\u67E5\u770B\u6240\u6709\u8F66\u8F86",\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u8F66\u8F86\u4EE5\u79FB\u52A8",\u65E5\u672C\u8A9E:"\u65E5\u8BED",\u4E2D\u6587:"\u4E2D\u6587",\u8A00\u8A9E\u5207\u66FF:"\u8BED\u8A00\u5207\u6362",\u30B9\u30AD\u30C3\u30D7:"\u8DF3\u8FC7",\u672A\u5272\u308A\u5F53\u3066:"\u672A\u5206\u914D",\u5E97\u8217\u3092\u9078\u629E\u3057\u76F4\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u91CD\u65B0\u9009\u62E9\u95E8\u5E97",\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650:"\u505C\u8F66\u573A\u5199\u5165\u6743\u9650",\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044:"\u8BF7\u9009\u62E9",\u9001\u308A\u5148:"\u76EE\u7684\u5730","\u69D8\u3078\u306E\u8CB8\u51FA\u624B\u7D9A\u304D\u3092\u884C\u3044\u307E\u3059\u304B\uFF1F":"\u8981\u4E3A\u8BE5\u5BA2\u6237\u529E\u7406\u51FA\u79DF\u624B\u7EED\u5417\uFF1F","\u69D8\u306E\u8FD4\u5374\u3092\u78BA\u8A8D\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u786E\u8BA4\u8BE5\u5BA2\u6237\u5DF2\u5F52\u8FD8\u8F66\u8F86\u5417\uFF1F","\u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F":"\u8981\u53D6\u6D88\u8BE5\u5BA2\u6237\u7684\u9884\u7EA6\u5417\uFF1F","\u8ECA\u4E21 ":"\u8F66\u8F86 "," \u306F\u8CB8\u51FA\u4E2D\u306B\u306A\u308A\u307E\u3059\u3002":" \u5C06\u53D8\u4E3A\u51FA\u79DF\u4E2D\u3002","\u8ECA\u4E21\u306F\u8CB8\u51FA\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002":"\u8F66\u8F86\u5C06\u53D8\u4E3A\u53EF\u51FA\u79DF\u72B6\u6001\u3002","\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u95E8\u5E97\u4FE1\u606F","\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406":"\u521B\u5EFA\u548C\u7BA1\u7406\u8F66\u8F86\u4FE1\u606F","\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0":"\u66F4\u65B0\u8F66\u8F86\u4F4D\u7F6E\u548C\u4E1A\u52A1\u72B6\u6001","\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406":"\u7BA1\u7406\u505C\u8F66\u573A\u3001\u7C7B\u522B\u548C\u72B6\u6001\u7B49\u8BBE\u7F6E",\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7:"\u67E5\u770B\u9884\u7EA6\u4FE1\u606F\u548C\u63A5\u5F85\u72B6\u6001",\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58:"\u4FDD\u5B58\u5E03\u5C40",\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5:"\u62D6\u52A8\u4EE5\u79FB\u52A8","3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332":"\u65CB\u8F6C 3D \u8F66\u8F86\u5E76\u70B9\u51FB\u635F\u4F24\u90E8\u4F4D\u8FDB\u884C\u8BB0\u5F55","\u30D0\u30FC\u30B8\u30E7\u30F3 ":"\u7248\u672C "},vv=new Map(Object.entries(Bh).map(([i,e])=>[e,i])),yv=Object.entries(Bh).sort(([i],[e])=>e.length-i.length),xv=[...vv.entries()].sort(([i],[e])=>e.length-i.length);function Ts(i,e){return(e==="zh"?yv:xv).reduce((n,[s,r])=>n.replaceAll(s,r),i)}var zh=new Set(["dashboard","reservations","sites","accounts","vehicles","parking"]);function Hh(i,e){let t=String(i||"").replace(/^#\/?/,"").split(/[?&]/,1)[0];return zh.has(t)&&e.includes(t)?t:"dashboard"}function oi(i){return`#${zh.has(i)?i:"dashboard"}`}var li="guts_erp_token",Rr="guts_erp_original_admin_token",Oo="guts_erp_original_admin_page";function Vh(i,e,t,n){i.setItem(Rr,e),i.setItem(Oo,t),i.setItem(li,n)}function Bo(i){let e=i.getItem(Rr);if(!e)return null;let t=i.getItem(Oo);return i.setItem(li,e),i.removeItem(Rr),i.removeItem(Oo),{token:e,page:t}}function ki(i){i.removeItem(li),i.removeItem(Rr),i.removeItem(Oo)}function zo(i){return!!i.getItem(Rr)}var qo=[],bv={parking_lots:[],vehicle_classes:[],vehicle_options:["ETC","\u8ECA\u8F09\u5668","\u7981\u7159","\u55AB\u7159","\u30CA\u30D3","\u30B9\u30BF\u30C3\u30C9\u30EC\u30B9"].map((i,e)=>({id:-e-1,name:i})),statuses:[{id:-1,name:"\u6D17\u8ECA\u5F85\u3061",icon:"\u{1FAE7}",key:"unwashed"},{id:-2,name:"\u7D66\u6CB9\u5F85\u3061",icon:"\u26FD",key:"no_fuel"},{id:-3,name:"\u8981\u4FEE\u7406",icon:"\u{1F527}",key:"needs_repair"}],assessment_fields:[{id:-1,built_in_key:"exterior",group_key:"body",name:"\u5916\u88C5\uFF08\u30DC\u30C7\u30A3\u30FB\u5857\u88C5\u30FB\u9211\u91D1\uFF09",field_type:"rating",suffix:""},{id:-2,built_in_key:"interior",group_key:"body",name:"\u5185\u88C5\uFF08\u30B7\u30FC\u30C8\u30FB\u5929\u4E95\u30FB\u30D5\u30ED\u30A2\uFF09",field_type:"rating",suffix:""},{id:-3,built_in_key:"wheels",group_key:"body",name:"\u30DB\u30A4\u30FC\u30EB",field_type:"rating",suffix:""},{id:-4,built_in_key:"registration_document",group_key:"electrical",name:"\u8ECA\u691C\u8A3C",field_type:"checkbox",suffix:"\u78BA\u8A8D\u6E08\u307F"},{id:-5,built_in_key:"radio",group_key:"electrical",name:"\u30E9\u30B8\u30AA",field_type:"checkbox",suffix:""},{id:-6,built_in_key:"navigation",group_key:"electrical",name:"\u30CA\u30D3\uFF08\uFF15\u5E74\u4EE5\u5185\uFF09",field_type:"checkbox",suffix:""},{id:-7,built_in_key:"air_conditioning",group_key:"electrical",name:"\u30A8\u30A2\u30B3\u30F3",field_type:"checkbox",suffix:""},{id:-8,built_in_key:"side_mirror",group_key:"electrical",name:"\u30B5\u30A4\u30C9\u30DF\u30E9\u30FC\u8ABF\u6574",field_type:"checkbox",suffix:""},{id:-9,built_in_key:"mileage",group_key:"basic",name:"\u8D70\u884C\u8DDD\u96E2",field_type:"number",suffix:"km"},{id:-10,built_in_key:"registration_year",group_key:"basic",name:"\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u5E74\uFF09",field_type:"number",suffix:"\u5E74"},{id:-11,built_in_key:"registration_month",group_key:"basic",name:"\u521D\u5E74\u5EA6\u767B\u9332\uFF08\u6708\uFF09",field_type:"number",suffix:"\u6708"}],damage_types:[{id:-1,built_in_key:"scratch",name:"\u50B7",icon:"\u3030\uFE0F",color:"#e34b4b"},{id:-2,built_in_key:"dent",name:"\u51F9\u307F",icon:"\u25C9",color:"#805ad5"}]},Ve=(i,e=document)=>e.querySelector(i),Ot=Ve("#app"),jh=document.querySelector('meta[name="app-version"]')?.content??"\u4E0D\u660E",Rc=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Mv=i=>{if(Array.isArray(i))return i.map(String);if(typeof i!="string")return[];try{let e=JSON.parse(i);return Array.isArray(e)?e.map(String):[]}catch{return[]}},Gh={dashboard:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',site:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M8 9v.01M8 12v.01M8 15v.01M8 18v.01M15 12v.01M15 15v.01M15 18v.01"/>',parking:'<path d="M5 21V3h8a6 6 0 0 1 0 12H5"/><path d="M9 7h4a2 2 0 0 1 0 4H9z"/>',people:'<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',vehicle:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3zM5 19v2m14-2v2"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',plus:'<path d="M12 5v14M5 12h14"/>',logout:'<path d="M10 17l5-5-5-5M15 12H3"/><path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6"/>',sites:'<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>',team:'<circle cx="9" cy="8" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6"/>',fleet:'<path d="m5 11 1.5-5h11L19 11M3 11h18v8H3z"/><circle cx="7.5" cy="15" r="1"/><circle cx="16.5" cy="15" r="1"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2"/>'},Rt=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Gh[i]??Gh.dashboard}</svg>`,Sv={dashboard:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",reservations:"\u4E88\u7D04\u30FB\u53D7\u4ED8",sites:"\u5E97\u8217\u7BA1\u7406",accounts:"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",vehicles:"\u8ECA\u4E21\u7BA1\u7406",customers:"\u304A\u5BA2\u69D8\u7BA1\u7406",parking:"\u99D0\u8ECA\u5834\u7BA1\u7406"},Ev={active:"\u6709\u52B9",disabled:"\u7121\u52B9",inactive:"\u7121\u52B9",available:"\u8CB8\u51FA\u53EF\u80FD",rented:"\u8CB8\u51FA\u4E2D",maintenance:"\u6574\u5099\u4E2D",retired:"\u767B\u9332\u62B9\u6D88",headquarters:"\u672C\u90E8",direct:"\u76F4\u55B6\u5E97",franchise:"\u52A0\u76DF\u5E97",reserved:"\u4E88\u7D04\u6E08\u307F",checked_in:"\u8CB8\u51FA\u4E2D",completed:"\u8FD4\u5374\u6E08\u307F",cancelled:"\u30AD\u30E3\u30F3\u30BB\u30EB"},wv={active:"green",available:"green",completed:"gray",rented:"blue",checked_in:"blue",maintenance:"orange",reserved:"orange",disabled:"red",cancelled:"gray",retired:"gray"},zr=i=>Ev[i]??i,ui=i=>`<span class="badge badge-${wv[i]??(i==="headquarters"?"blue":"gray")}">${Rc(zr(i))}</span>`,C=i=>Rc(i).replace(/[^\u0000-\u007F]/gu,e=>`&#${e.codePointAt(0)};`),Ec=i=>{let e=new Date(i),t=pi()==="zh"?"zh-CN":"ja-JP";return Number.isNaN(e.getTime())?Rc(i):new Intl.DateTimeFormat(t,{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(e)},ot=i=>({invalid_credentials:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002",forbidden:"\u3053\u306E\u64CD\u4F5C\u3092\u884C\u3046\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002",resource_conflict:"\u60C5\u5831\u304C\u91CD\u8907\u3057\u3066\u3044\u307E\u3059\u3002\u5E97\u8217\u30B3\u30FC\u30C9\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u307E\u305F\u306F\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",in_use:"\u8ECA\u4E21\u307E\u305F\u306F\u4F5C\u696D\u4E88\u5B9A\u304C\u6B8B\u3063\u3066\u3044\u308B\u305F\u3081\u3001\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",last_lot:"\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002",reservation_conflict:"\u8ECA\u4E21\u307E\u305F\u306F\u4E88\u7D04\u306E\u72B6\u614B\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",password_mismatch:"\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u4E00\u81F4\u3057\u306A\u3044\u304B\u3001\u5FC5\u8981\u306A\u6587\u5B57\u6570\u3092\u6E80\u305F\u3057\u3066\u3044\u307E\u305B\u3093\u3002",invalid_reference:"\u9078\u629E\u3057\u305F\u5E97\u8217\u3001\u8ECA\u4E21\u3001\u30B9\u30BF\u30C3\u30D5\u3001\u307E\u305F\u306F\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_request:"\u5165\u529B\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",internal_error:"\u30B7\u30B9\u30C6\u30E0\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3057\u3070\u3089\u304F\u3057\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",site_mapping_conflict:"ERP\u62E0\u70B9\u304C\u5909\u66F4\u3055\u308C\u305F\u8ECA\u4E21\u304C\u3042\u308A\u307E\u3059\u3002\u99D0\u8ECA\u5834\u30C7\u30FC\u30BF\u306E\u62E0\u70B9\u5272\u5F53\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",unauthorized:"\u30ED\u30B0\u30A4\u30F3\u306E\u6709\u52B9\u671F\u9650\u304C\u5207\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044\u3002",account_unavailable:"\u30A2\u30AB\u30A6\u30F3\u30C8\u307E\u305F\u306F\u6240\u5C5E\u5E97\u8217\u304C\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",employee_required:"\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_employee:"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",account_not_found:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",vehicle_not_found:"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",reservation_not_found:"\u4E88\u7D04\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",invalid_site:"\u5E97\u8217\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_role:"\u5F79\u5272\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",invalid_account:"\u30A2\u30AB\u30A6\u30F3\u30C8\u60C5\u5831\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",unknown_permission:"\u9078\u629E\u3055\u308C\u305F\u6A29\u9650\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002",site_required:"\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002",invalid_reservation:"\u4E88\u7D04\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002",not_found:"\u5BFE\u8C61\u306E\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3002"})[i]??"\u64CD\u4F5C\u3092\u5B8C\u4E86\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6642\u9593\u3092\u304A\u3044\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",pt=localStorage.getItem(li)||"",Ue=null,$n="ja",Rs="guts_erp_current_page",Is=["dashboard","reservations","sites","accounts","vehicles","customers","parking"];function Ic(){let i=location.hash.slice(1);return Is.includes(i)?Hh(location.hash,Is):null}var ut=Ic()??"dashboard",fi="",hn="",en=0,hi="",Pr="",ci="all",zi="all",wc="",Gt=[],Go=[],Pc=[],Qh="",$o=[],ed=[],Tc=[],$h=0,Tv=0,Av=0,kr=null,Wo=[],Lc=[],Lr=!1,Wh=0,As=null,Ac=0,cn=new Map,xt=null,Dr=[],Et=null,un=null,bn=[],Dc=null,Cs=null,Or="#e34b4b",tn=null,Xo=null,Pt=null;function pi(){return Ue?.isAdmin?$n:"ja"}function bt(i,e){i.innerHTML=Ts(e,pi())}async function Cv(i){Ue?.isAdmin&&($n=i,localStorage.setItem("guts_erp_language",$n),document.documentElement.lang=$n==="zh"?"zh-CN":"ja",Zo(),await In())}async function Ae(i,e={}){let t=new Headers(e.headers);t.set("Accept","application/json"),pt&&t.set("Authorization",`Bearer ${pt}`),e.body&&t.set("Content-Type","application/json");let n=await fetch(i,{...e,headers:t,credentials:"same-origin"});if(n.status===401&&pt){let r=i.split("?")[0];if(!["/api/v1/auth/login","/api/v1/auth/logout","/api/v1/auth/end-site","/api/v1/auth/refresh"].includes(r)){let a=zo(localStorage)?"site":"default",o=await Br(a);if(o)t.set("Authorization",`Bearer ${o}`),n=await fetch(i,{...e,headers:t,credentials:"same-origin"});else if(a==="site"){if(!(await fetch("/api/v1/auth/end-site",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error");let c=Bo(localStorage);if(c&&(pt=c.token,localStorage.setItem(li,pt),Is.includes(c.page)&&history.replaceState(null,"",oi(c.page)),await Br("default")))throw window.location.reload(),new Error("unauthorized")}}}if(n.status===401&&pt)throw pt="",Ue=null,ki(localStorage),Ps(),new Error("unauthorized");let s=await n.json().catch(()=>({}));if(!n.ok)throw new Error(s.message||s.error||`HTTP ${n.status}`);return s}async function Br(i){let e=await fetch("/api/v1/auth/refresh",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({context:i})});if(e.status===401)return null;let t=await e.json().catch(()=>({}));if(!e.ok||typeof t.accessToken!="string")throw new Error(t.error||"internal_error");return pt=t.accessToken,localStorage.setItem(li,pt),pt}function Cc(i){fetch("/api/v1/client-errors",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0}).catch(e=>console.warn("Unable to send ERP client error report.",e))}function Je(i,e=!1){let t=Ve(".toast-area");t||(t=document.createElement("div"),t.className="toast-area",document.body.append(t));let n=document.createElement("div");n.className=`toast${e?" error":""}`,n.textContent=Ts(i,pi()),t.append(n),window.setTimeout(()=>n.remove(),3600)}function Ho(i){return window.confirm(Ts(i,pi()))}window.addEventListener("error",i=>{let e=i.target;if(e instanceof Element&&["AUDIO","EMBED","IFRAME","IMG","LINK","OBJECT","SCRIPT","SOURCE","TRACK","VIDEO"].includes(e.tagName)){let t=e.getAttribute("src")||e.getAttribute("href")||e.getAttribute("data")||void 0;(e instanceof HTMLImageElement||e instanceof HTMLMediaElement)&&(t=e.currentSrc||t),Cc({type:"resource",message:`Failed to load ${e.tagName.toLowerCase()} resource.`,...t?{source:t}:{},path:window.location.pathname});return}Cc({type:"error",message:i.message||"Uncaught browser error.",...i.error instanceof Error&&i.error.stack?{stack:i.error.stack}:{},...i.filename?{source:i.filename}:{},path:window.location.pathname,...i.lineno?{line:i.lineno}:{},...i.colno?{column:i.colno}:{}})},!0);window.addEventListener("unhandledrejection",i=>{let e=i.reason;Cc({type:"unhandledrejection",message:e instanceof Error?e.message:String(e),...e instanceof Error&&e.stack?{stack:e.stack}:{},path:window.location.pathname})});function Ke(i){return!!Ue?.permissions.includes(i)}function Yo(){let i=[{page:"dashboard",title:"\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",icon:"dashboard"},{page:"reservations",title:"\u4E88\u7D04\u30FB\u53D7\u4ED8",icon:"calendar",permission:"reservations:read"},{page:"sites",title:"\u5E97\u8217\u7BA1\u7406",icon:"site",permission:"sites:read"},{page:"vehicles",title:"\u8ECA\u4E21\u7BA1\u7406",icon:"vehicle",permission:"vehicles:read"},{page:"customers",title:"\u304A\u5BA2\u69D8\u7BA1\u7406",icon:"people",permission:"customers:read"},{page:"parking",title:"\u99D0\u8ECA\u5834\u7BA1\u7406",icon:"parking",permission:"parking:read"}];return Ue?.isAdmin&&i.splice(3,0,{page:"accounts",title:"\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",icon:"people"}),i.filter(e=>!e.permission||Ke(e.permission))}function Ps(){document.documentElement.lang="ja",Ot.innerHTML=`<main class="login-screen login-simple">
    <form class="login-form" data-form="login">
      <input name="username" autocomplete="username" required placeholder="\u30A2\u30AB\u30A6\u30F3\u30C8" aria-label="\u30A2\u30AB\u30A6\u30F3\u30C8">
      <input name="password" type="password" autocomplete="current-password" required placeholder="\u30D1\u30B9\u30EF\u30FC\u30C9" aria-label="\u30D1\u30B9\u30EF\u30FC\u30C9">
      <button class="btn btn-primary" type="submit">\u30ED\u30B0\u30A4\u30F3</button>
    </form>
    <small class="app-version">\u30D0\u30FC\u30B8\u30E7\u30F3 ${C(jh)}</small>
  </main>`,Ot.onsubmit=async i=>{let e=i.target.closest('[data-form="login"]');if(!e)return;i.preventDefault();let t=Ve('button[type="submit"]',e);t.disabled=!0,t.textContent="\u30ED\u30B0\u30A4\u30F3\u4E2D\u2026";let n=new FormData(e);try{pt=(await Ae("/api/v1/auth/login",{method:"POST",body:JSON.stringify({username:n.get("username"),password:n.get("password")})})).accessToken,ki(localStorage),localStorage.setItem(li,pt),await Jo()}catch(s){Je(ot(s.message),!0),t.disabled=!1,t.textContent="\u30ED\u30B0\u30A4\u30F3"}}}async function Jo(){Ue=await Ae("/api/v1/auth/me");let i=Ic()??localStorage.getItem(Rs),e=Is.includes(i)?i:"dashboard";ut=Yo().some(t=>t.page===e)?e:"dashboard",location.hash!==`#${ut}`&&history.replaceState(null,"",oi(ut)),localStorage.setItem(Rs,ut),$n=Ue.isAdmin&&localStorage.getItem("guts_erp_language")==="zh"?"zh":"ja",document.documentElement.lang=pi()==="zh"?"zh-CN":"ja",Zo(),await In(),td()}async function td(){if(!(!pt||!Ke("parking:read")||As))try{let{ticket:i}=await Ae("/api/v1/parking/ws-ticket",{method:"POST"});if(!pt||!Ke("parking:read"))return;let e=location.protocol==="https:"?"wss:":"ws:",t=new WebSocket(`${e}//${location.host}/api/v1/parking/ws?ticket=${encodeURIComponent(i)}`);As=t,t.onmessage=n=>{try{JSON.parse(String(n.data)).type==="parking:updated"&&ut==="parking"&&kt()}catch{Je("\u99D0\u8ECA\u5834\u306E\u66F4\u65B0\u901A\u77E5\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F\u3002",!0)}},t.onclose=()=>{As===t&&(As=null),pt&&Ke("parking:read")&&(window.clearTimeout(Ac),Ac=window.setTimeout(()=>{td()},1500))},t.onerror=()=>t.close()}catch(i){i.message!=="unauthorized"&&Je("\u99D0\u8ECA\u5834\u306E\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u63A5\u7D9A\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u753B\u9762\u3092\u66F4\u65B0\u3057\u3066\u518D\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0)}}function Zo(){if(!Ue)return Ps();let i=Yo(),e=Ue.displayName.trim().slice(0,1)||"G";bt(Ot,`<div class="shell">
    <aside class="sidebar${Lr?" open":""}">
      <a class="brand" href="#" data-page="dashboard"><span class="brand-mark">G</span><span><strong>GUTS ERP</strong><small>\u30EC\u30F3\u30BF\u30AB\u30FC\u904B\u55B6\u7BA1\u7406</small></span></a>
      <div class="nav-label">\u30E1\u30CB\u30E5\u30FC</div><nav class="nav">${i.map(t=>`<button class="nav-button${ut===t.page?" active":""}" data-page="${t.page}">${Rt(t.icon)}<span>${t.title}</span></button>`).join("")}</nav>
      <div class="sidebar-bottom">
        <div class="site-chip"><small>\u6240\u5C5E\u5E97\u8217</small><strong>${C(Ue.site.name)} \xB7 ${C(Ue.site.code)}</strong></div>
        <div class="user-row"><span class="avatar">${C(e)}</span><span class="user-text"><strong>${C(Ue.displayName)}</strong><small>${C(Ue.username)}</small></span><button class="logout" title="\u30ED\u30B0\u30A2\u30A6\u30C8" data-action="logout">${Rt("logout")}</button></div>
      </div>
    </aside>
    <main class="main">
      <header class="topbar"><button class="mobile-menu" data-action="menu" aria-label="\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u304F">\u2630</button><div class="crumb">GUTS ERP&nbsp; / &nbsp;<b>${Sv[ut]}</b></div><div class="top-actions">${zo(localStorage)&&!Ue.isAdmin?'<button class="btn btn-sm btn-primary" data-action="return-admin">\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u623B\u308B</button>':""}${Ue.isAdmin?`<div class="language-switch" role="group" aria-label="\u8A00\u8A9E\u5207\u66FF"><button class="btn btn-sm${$n==="ja"?" active":""}" data-language="ja" aria-pressed="${$n==="ja"}">\u65E5\u672C\u8A9E</button><button class="btn btn-sm${$n==="zh"?" active":""}" data-language="zh" aria-pressed="${$n==="zh"}">\u4E2D\u6587</button></div>`:""}<span class="live"><i></i> \u6B63\u5E38\u7A3C\u50CD\u4E2D</span><button class="btn btn-sm btn-quiet" data-action="refresh">${Rt("refresh")} \u66F4\u65B0</button><small class="app-version">v${C(jh)}</small></div></header>
      <section class="content" id="page-content"><div class="empty">\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026</div></section>
    </main>
  </div>`),Ot.onclick=Wv,Ot.onsubmit=$v,Ot.oninput=Xv,Ot.onchange=qv,Ot.onpointerdown=t=>{Fv(t),zv(t),kv(t)},Ot.onpointermove=t=>{Bv(t),Hv(t),Ov(t)},Ot.onpointerup=t=>{Kh(t),Vv(t),Zh(t)},Ot.onpointercancel=t=>{Kh(t),Gv(t),Zh(t,!0)}}async function In(){try{switch(ut){case"dashboard":await Rv();break;case"reservations":await ld();break;case"sites":await nd();break;case"accounts":await sd();break;case"vehicles":await rd();break;case"customers":await ad();break;case"parking":await kt();break}}catch(i){if(i.message!=="unauthorized"){let e=Ve("#page-content");e&&bt(e,`<div class="empty"><strong>\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F</strong>${C(ot(i.message))}<br><br><button class="btn" data-action="refresh">${Rt("refresh")} \u518D\u8A66\u884C</button></div>`)}}}function Hi(i){let e=Ve("#page-content");e&&bt(e,i)}function Vi(i,e,t=""){return`<div class="page-head"><div><h1>${i}</h1><p>${e}</p></div><div class="head-actions">${t}</div></div>`}function Vo(i,e,t,n,s=""){let r=pi()==="zh"?"zh-CN":"ja-JP";return`<article class="stat-card"><div class="stat-top">${i}<span class="stat-icon ${s}">${Rt(n)}</span></div><div class="stat-number">${e.toLocaleString(r)}</div><div class="stat-foot">${t}</div></article>`}async function Rv(){let i=new URLSearchParams({limit:"6"});Ue.site.type==="headquarters"&&i.set("siteId",Ue.site.id);let[e,t,n]=await Promise.all([Ae("/api/v1/dashboard/stats"),Ke("sites:read")?Ae("/api/v1/sites"):Promise.resolve({items:[]}),Ke("reservations:read")?Ae(`/api/v1/reservations?${i}`):Promise.resolve({items:[]})]);Gt=t.items;let s=n.items.slice(0,5);Hi(`${Vi("\u904B\u55B6\u30C0\u30C3\u30B7\u30E5\u30DC\u30FC\u30C9",`${C(Ue.site.name)} \xB7 \u5E97\u8217\u306E\u904B\u55B6\u72B6\u6CC1`,Ue.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${C(Ue.site.id)}">${Rt("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"")}
    <div class="grid stat-grid">
      ${Vo("\u5E97\u8217\u6570",e.sites.total,`\u76F4\u55B6 ${e.sites.direct} \u5E97 \xB7 \u52A0\u76DF ${e.sites.franchise} \u5E97`,"sites")}
      ${Vo("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8",e.accounts.total,`\u6709\u52B9 ${e.accounts.active} \u4EF6`,"team","green")}
      ${Vo("\u8ECA\u4E21\u53F0\u6570",e.vehicles.total,`\u8CB8\u51FA\u53EF\u80FD ${e.vehicles.available} \u53F0`,"fleet")}
      ${Vo("\u8CB8\u51FA\u4E2D",e.vehicles.rented,`\u6574\u5099\u4E2D ${e.vehicles.maintenance} \u53F0`,"calendar","orange")}
    </div>
    <div class="grid dashboard-grid">
      ${Ke("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u6700\u8FD1\u306E\u4E88\u7D04\u30FB\u53D7\u4ED8</h2><button class="btn btn-sm btn-quiet" data-page="reservations">\u3059\u3079\u3066\u8868\u793A ${Rt("arrow")}</button></div>
        ${s.length?`<div class="site-list">${s.map(r=>`<div class="site-line"><div><div class="site-name">${C(r.guest_name)} <span class="secondary">${C(r.guest_phone)}</span></div><div class="site-meta">${Ec(r.start_at)} &nbsp;\xB7&nbsp; ${C(r.make??"")} ${C(r.model??"")}</div></div><span class="site-code">${C(r.reservation_code)}</span>${ui(r.status)}</div>`).join("")}</div>`:'<div class="empty">\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
      </section>`:`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${Xh(e)}</section>`}
      <section class="panel"><div class="panel-head"><h2>${Ue.site.type==="headquarters"?"\u5E97\u8217\u4E00\u89A7":"\u6240\u5C5E\u5E97\u8217"}</h2><small>${Gt.length} \u5E97\u8217</small></div>
        ${Gt.length?`<div class="site-list">${Gt.slice(0,6).map(r=>`<div class="site-line"><div><div class="site-name">${C(r.name)}</div><div class="site-meta">${C(r.code)}</div></div>${ui(r.type)}${ui(r.status)}</div>`).join("")}</div>`:'<div class="empty">\u5E97\u8217\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093</div>'}
        ${Gt.length>6?`<button class="btn btn-sm" data-page="sites">\u3059\u3079\u3066\u306E\u5E97\u8217\u3092\u8868\u793A ${Rt("arrow")}</button>`:""}
      </section>
      ${Ke("reservations:read")?`<section class="panel"><div class="panel-head"><h2>\u8ECA\u4E21\u72B6\u6CC1</h2><small>\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u96C6\u8A08</small></div>${Xh(e)}</section>`:""}
    </div>`)}function Xh(i){let e=Math.max(i.vehicles.total,1);return`<div class="fleet-breakdown">${[["\u8CB8\u51FA\u53EF\u80FD",i.vehicles.available,"green"],["\u8CB8\u51FA\u4E2D",i.vehicles.rented,""],["\u6574\u5099\u4E2D",i.vehicles.maintenance,"orange"]].map(([n,s,r])=>`<div class="fleet-row"><span>${n}</span><div class="fleet-track"><div class="fleet-fill ${r}" style="width:${Math.min(100,s/e*100)}%"></div></div><b>${s}</b></div>`).join("")}</div>`}function Hr(i,e=""){return`<div class="toolbar"><label class="search">${Rt("search")}<input data-search placeholder="${i}" value="${C(hn)}"></label>${e}</div>`}function Vr(i,e,t){return`<div class="table-wrap">${e?`<table class="table"><thead><tr>${i.map(n=>`<th>${n}</th>`).join("")}</tr></thead><tbody>${e}</tbody></table>`:`<div class="empty">${t}</div>`}</div>`}function Ko(i,e=50){return`<div class="pagination"><span>${i?en+1:0}\uFF5E${en+i}\u4EF6\u3092\u8868\u793A</span><div><button class="btn btn-sm" data-action="prev" ${en<=0?"disabled":""}>\u524D\u3078</button><button class="btn btn-sm" data-action="next" ${i<e?"disabled":""}>\u6B21\u3078</button></div></div>`}async function nd(){let i=await Ae("/api/v1/sites");Gt=i.items;let t=i.items.filter(n=>`${n.name} ${n.code} ${zr(n.type)}`.toLowerCase().includes(hn.toLowerCase())).map(n=>{let s=Ue.isAdmin&&n.type!=="headquarters"&&n.status==="active"&&Number(n.has_active_account)===1?`<button class="btn btn-sm" data-action="switch-site" data-id="${C(n.id)}">\u30ED\u30B0\u30A4\u30F3</button>`:"";return`<tr><td class="primary-cell" data-label="\u5E97\u8217">${C(n.name)}<span class="secondary">${C(n.code)}</span></td><td data-label="\u7A2E\u5225">${ui(n.type)}</td><td data-label="\u72B6\u614B">${ui(n.status)}</td><td data-label="\u64CD\u4F5C">${s||(Ke("sites:write")?'<span class="secondary">\u2014</span>':"")}</td></tr>`}).join("");Hi(`${Vi("\u5E97\u8217\u7BA1\u7406","\u672C\u90E8\u30FB\u76F4\u55B6\u5E97\u30FB\u52A0\u76DF\u5E97\u3092\u7BA1\u7406",Ke("sites:write")&&Ue.site.type==="headquarters"?`<button class="btn btn-primary" data-modal="site">${Rt("plus")} \u5E97\u8217\u3092\u8FFD\u52A0</button>`:"")}
    ${Hr("\u5E97\u8217\u540D\u307E\u305F\u306F\u5E97\u8217\u30B3\u30FC\u30C9\u3067\u691C\u7D22")}
    ${Vr(["\u5E97\u8217\u540D / \u30B3\u30FC\u30C9","\u5E97\u8217\u7A2E\u5225","\u72B6\u614B","\u64CD\u4F5C"],t,"\u5E97\u8217\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}`)}async function id(){if(Gt.length&&Go.length)return;let[i,e]=await Promise.all([Ae("/api/v1/sites"),Ae("/api/v1/permissions")]);Gt=i.items,Go=e.items}async function sd(){await id();let i=new URLSearchParams({limit:"50",offset:String(en)});hn&&i.set("search",hn);let e=await Ae(`/api/v1/accounts?${i}`);Wo=e.items;let t=e.items.map(n=>`<tr>
    <td class="primary-cell" data-label="\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8">${C(n.site_name)}${Number(n.is_owner_admin)===1?'<span class="account-admin-badge">\u7BA1\u7406\u8005</span>':""}<span class="secondary">${C(n.display_name)} \xB7 ${C(n.username)}</span></td>
    <td data-label="\u5E97\u8217\u30B3\u30FC\u30C9">${C(n.site_code)}</td>
    <td data-label="\u72B6\u614B">${ui(n.status)}</td>
    <td data-label="\u64CD\u4F5C"><div class="table-actions">${Number(n.is_owner_admin)===1?"":`<button class="btn btn-sm" data-action="edit-account" data-id="${C(n.id)}">\u7DE8\u96C6</button>`}<button class="btn btn-sm" data-action="reset-account-password" data-id="${C(n.id)}">\u30D1\u30B9\u30EF\u30FC\u30C9\u5909\u66F4</button></div></td>
  </tr>`).join("");Hi(`${Vi("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8","\u3059\u3079\u3066\u306E\u5E97\u8217\u30FB\u7BA1\u7406\u30A2\u30AB\u30A6\u30F3\u30C8\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u7BA1\u7406",`<button class="btn btn-primary" data-modal="account">${Rt("plus")} \u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0</button>`)}
    ${Hr("\u5E97\u8217\u540D\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u540D\u3067\u691C\u7D22")}
    ${Vr(["\u5E97\u8217 / \u30A2\u30AB\u30A6\u30F3\u30C8","\u5E97\u8217\u30B3\u30FC\u30C9","\u72B6\u614B","\u64CD\u4F5C"],t,"\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3042\u308A\u307E\u305B\u3093")}
    ${Ko(e.items.length)}`)}function qh(i="",e=!1){return Gt.filter(t=>e||t.type!=="headquarters").map(t=>`<option value="${C(t.id)}" ${String(t.id)===i?"selected":""}>${C(t.name)} \xB7 ${C(t.code)}</option>`).join("")}function Nr(i){return i?i.slice(0,10):""}function Yh(i=[]){let e={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u64CD\u4F5C","parking:admin":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u30FB\u53D7\u4ED8\u60C5\u5831\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D","customers:read":"\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7","customers:write":"\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u7BA1\u7406"},t={"sites:read":"\u5E97\u8217\u60C5\u5831\u306E\u95B2\u89A7","sites:write":"\u5E97\u8217\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","vehicles:read":"\u8ECA\u4E21\u60C5\u5831\u306E\u95B2\u89A7","vehicles:write":"\u8ECA\u4E21\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u7BA1\u7406","parking:read":"\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u306E\u95B2\u89A7","parking:write":"\u8ECA\u4E21\u4F4D\u7F6E\u30FB\u696D\u52D9\u72B6\u6CC1\u306E\u66F4\u65B0","parking:admin":"\u99D0\u8ECA\u5834\u30FB\u30AF\u30E9\u30B9\u30FB\u72B6\u614B\u306A\u3069\u306E\u8A2D\u5B9A\u7BA1\u7406","reservations:read":"\u4E88\u7D04\u60C5\u5831\u3068\u53D7\u4ED8\u72B6\u6CC1\u306E\u95B2\u89A7","reservations:write":"\u4E88\u7D04\u306E\u4F5C\u6210\u3001\u8CB8\u51FA\u30FB\u8FD4\u5374\u624B\u7D9A\u304D","customers:read":"\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u95B2\u89A7","customers:write":"\u5E97\u8217\u5185\u306E\u304A\u5BA2\u69D8\u60C5\u5831\u306E\u4F5C\u6210\u30FB\u66F4\u65B0"};return`<div class="check-grid">${Go.filter(({permission_key:n})=>n!=="accounts:write").map(n=>`<label class="check-item"><input type="checkbox" name="permissions" value="${C(n.permission_key)}" ${i.includes(n.permission_key)?"checked":""}><span>${e[n.permission_key]??"\u305D\u306E\u4ED6\u306E\u6A29\u9650"}<small>${t[n.permission_key]??"\u6A29\u9650\u306E\u8AAC\u660E\u306F\u3042\u308A\u307E\u305B\u3093"}</small></span></label>`).join("")}</div>`}async function rd(){Ke("sites:read")&&await Fc();let i=new URLSearchParams({limit:"50",offset:String(en)});Ue.site.type==="headquarters"&&i.set("siteId",Ue.site.id),hi&&i.set("status",hi),hn&&i.set("search",hn);let e=await Ae(`/api/v1/vehicles?${i}`);Lc=e.items;let t=e.items.map(r=>`<tr>
    <td class="primary-cell" data-label="\u8ECA\u4E21">${C(r.registration_number)}${r.make||r.model||r.model_year?`<span class="secondary">${C(r.make)} ${C(r.model)} ${r.model_year?`\u30FB${r.model_year}`:""}</span>`:""}${r.inspection_expiry_date||r.statutory_inspection_date?`<span class="secondary vehicle-date-summary">${r.inspection_expiry_date?`\u8ECA\u691C ${C(Nr(r.inspection_expiry_date))}`:""}${r.inspection_expiry_date&&r.statutory_inspection_date?" \xB7 ":""}${r.statutory_inspection_date?`\u6CD5\u5B9A\u70B9\u691C ${C(Nr(r.statutory_inspection_date))}`:""}</span>`:""}</td>
    <td data-label="\u5E97\u8217">${C(Gt.find(a=>a.id===r.site_id)?.name??(Ue.site.id===r.site_id?Ue.site.name:r.site_id))}</td>
    <td data-label="\u72B6\u614B">${ui(r.status)}</td>
    <td data-label="\u64CD\u4F5C">${Ke("vehicles:write")?`<button class="btn btn-sm" data-action="edit-vehicle" data-id="${C(r.id)}">\u7DE8\u96C6</button>`:""}</td>
  </tr>`).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u72B6\u614B</option>${["available","rented","maintenance","retired"].map(r=>`<option value="${r}" ${hi===r?"selected":""}>${zr(r)}</option>`).join("")}</select>`,s=[...Ke("vehicles:write")?[`<button class="btn btn-primary" data-modal="vehicle">${Rt("plus")} \u8ECA\u4E21\u3092\u8FFD\u52A0</button>`]:[]].join("");Hi(`${Vi("\u8ECA\u4E21\u7BA1\u7406","\u8ECA\u4E21\u60C5\u5831\u3068\u7A3C\u50CD\u72B6\u6CC1\u3092\u7BA1\u7406",s)}
    ${Hr("\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3001\u30E1\u30FC\u30AB\u30FC\u3001\u8ECA\u7A2E\u3067\u691C\u7D22",n)}
    ${Vr(["\u8ECA\u4E21 / \u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","\u6240\u5C5E\u5E97\u8217","\u72B6\u614B","\u64CD\u4F5C"],t,"\u8ECA\u4E21\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093")}
    ${Ko(e.items.length)}`)}async function ad(){let i=new URLSearchParams({limit:"50",offset:String(en)});hn&&i.set("search",hn);let e=await Ae(`/api/v1/customers?${i}`);ed=e.items;let t=e.items.map(n=>`<tr>
    <td class="primary-cell" data-label="\u304A\u5BA2\u69D8">${C(n.name)}${n.name_kana?`<span class="secondary">${C(n.name_kana)}</span>`:""}</td>
    <td data-label="\u96FB\u8A71\u756A\u53F7">${C(n.phone)}</td>
    <td data-label="\u52E4\u52D9\u5148\u30FB\u5B66\u6821">${C(n.workplace_school??"\u2014")}</td>
    <td data-label="\u64CD\u4F5C">${Ke("customers:write")?`<button class="btn btn-sm" data-action="edit-customer" data-id="${C(n.id)}">\u7DE8\u96C6</button>`:""}</td>
  </tr>`).join("");Hi(`${Vi("\u304A\u5BA2\u69D8\u7BA1\u7406","\u304A\u5BA2\u69D8\u306E\u57FA\u672C\u60C5\u5831\u3068\u9023\u7D61\u5148\u3092\u7BA1\u7406",Ke("customers:write")?`<button class="btn btn-primary" data-modal="customer">${Rt("plus")} \u304A\u5BA2\u69D8\u3092\u8FFD\u52A0</button>`:"")}
    ${Hr("\u6C0F\u540D\u3001\u30D5\u30EA\u30AC\u30CA\u3001\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22")}
    ${Vr(["\u304A\u5BA2\u69D8\u540D","\u96FB\u8A71\u756A\u53F7","\u52E4\u52D9\u5148\u30FB\u5B66\u6821","\u64CD\u4F5C"],t,"\u304A\u5BA2\u69D8\u60C5\u5831\u306F\u3042\u308A\u307E\u305B\u3093")}
    ${Ko(e.items.length)}`)}function Nc(i){let e=i.vehicles.filter(n=>(ci==="all"||n.vehicle_type===ci)&&(!Pr||`${n.plate} ${n.vehicle_type} ${n.options.join(" ")}`.toLocaleLowerCase("ja").includes(Pr.toLocaleLowerCase("ja")))),t=["all",...i.vehicle_classes.map(n=>n.name)];return`<div class="parking-catalog-content" id="parking-catalog-content">
    <label class="parking-catalog-search">${Rt("search")}<input type="search" data-parking-search
      placeholder="\u8ECA\u756A\u3067\u691C\u7D22" value="${C(Pr)}" aria-label="\u8ECA\u756A\u3067\u691C\u7D22"></label>
    <div class="parking-class-filters" role="group" aria-label="\u8ECA\u7A2E\u3067\u7D5E\u308A\u8FBC\u307F">
      ${t.map(n=>`<button type="button" class="parking-class-filter${ci===n?" active":""}"
        data-action="parking-class-filter" data-class="${C(n)}">${n==="all"?"All":C(n)}</button>`).join("")}
    </div>
    <div class="parking-catalog-list" aria-live="polite">
      ${e.length?e.map(n=>{let s=i.parking_lots.find(o=>o.id===n.parking_lot_id),r=i.statuses.filter(o=>n.status_ids.includes(o.id)).map(o=>`${o.icon} ${o.name}`).join("\u30FB"),a=[n.vehicle_type,s?.name??"\u672A\u914D\u7F6E",r,n.options.join("\u30FB")].filter(Boolean).join(" \xB7 ");return`<button type="button" class="parking-catalog-item" data-action="parking-focus-vehicle"
          data-id="${C(n.id)}"><strong>${C(n.plate)}</strong><span>${C(a)}</span></button>`}).join(""):Pr||ci!=="all"?'<p class="parking-catalog-empty">\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>':`<div class="parking-catalog-empty">\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002<br>\u8ECA\u4E21\u7BA1\u7406\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002
          ${Ke("vehicles:read")?'<button type="button" class="btn btn-sm" data-page="vehicles">\u8ECA\u4E21\u7BA1\u7406\u3078</button>':""}</div>`}
    </div>
  </div>`}function od(i){let e=i.vehicles.filter(n=>zi==="all"||n.status_ids.includes(Number(zi)));return`<div id="parking-status-content">
    <div class="parking-status-filters" role="group" aria-label="\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9\u3067\u7D5E\u308A\u8FBC\u307F">
      ${[{id:"all",label:"\u3059\u3079\u3066"},...i.statuses.map(n=>({id:String(n.id),label:`${n.icon} ${n.name}`}))].map(n=>`<button type="button" class="parking-status-filter${zi===n.id?" active":""}"
        data-action="parking-status-filter" data-status-id="${C(n.id)}">${C(n.label)}</button>`).join("")}
    </div>
    <div class="parking-status-list">
      ${e.length?e.map(n=>{let s=i.statuses.filter(o=>n.status_ids.includes(o.id)).map(o=>`${o.icon} ${o.name}`),r=[n.unwashed?"\u6D17\u8ECA\u5F85\u3061":"",n.no_fuel?"\u7D66\u6CB9\u5F85\u3061":"",n.needs_repair?"\u4FEE\u7406\u5F85\u3061":""].filter(Boolean),a=i.parking_lots.find(o=>o.id===n.parking_lot_id);return`<button type="button" class="parking-status-item" data-action="parking-focus-vehicle"
          data-id="${C(n.id)}"><strong>${C(n.plate)}</strong>
          <span>${C([a?.name??"\u672A\u914D\u7F6E",...s,...r].join(" \xB7 "))}</span></button>`}).join(""):'<p class="parking-catalog-empty">\u8A72\u5F53\u3059\u308B\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}
    </div>
  </div>`}async function kt(){let i=await Ae("/api/v1/parking/bootstrap");xt=i,ci!=="all"&&!i.vehicle_classes.some(v=>v.name===ci)&&(ci="all"),zi!=="all"&&!i.statuses.some(v=>String(v.id)===zi)&&(zi="all");let e=Ke("parking:write");for(let v of i.vehicles)cn.has(v.id)||cn.set(v.id,v.inspection_marks);let t=v=>e?`<form class="parking-vehicle-controls" data-form="parking-vehicle" data-id="${C(v.id)}">
        <label>\u4F4D\u7F6E X <input name="position_x" type="number" min="0" max="1" step="0.01" value="${C(v.position_x)}" required></label>
        <label>\u4F4D\u7F6E Y <input name="position_y" type="number" min="0" max="1" step="0.01" value="${C(v.position_y)}" required></label>
        <label>\u99D0\u8ECA\u533A\u753B <select name="parking_lot_id"><option value="">\u672A\u914D\u7F6E</option>${i.parking_lots.map(y=>`<option value="${C(y.id)}" ${v.parking_lot_id===y.id?"selected":""}>${C(y.name)}</option>`).join("")}</select></label>
        <fieldset><legend>\u696D\u52D9\u72B6\u614B</legend>${i.statuses.map(y=>`<label><input type="checkbox" name="status_ids" value="${C(y.id)}" ${v.status_ids.includes(y.id)?"checked":""}>${C(y.icon)} ${C(y.name)}</label>`).join("")}
          <label><input type="checkbox" name="unwashed" ${v.unwashed?"checked":""}>\u6D17\u8ECA\u5F85\u3061</label>
          <label><input type="checkbox" name="no_fuel" ${v.no_fuel?"checked":""}>\u7D66\u6CB9\u5F85\u3061</label>
          <label><input type="checkbox" name="needs_repair" ${v.needs_repair?"checked":""}>\u4FEE\u7406\u5F85\u3061</label>
        </fieldset>
        <fieldset><legend>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</legend>${i.vehicle_options.map(y=>`<label><input type="checkbox" name="options" value="${C(y.name)}" ${v.options.includes(y.name)?"checked":""}>${C(y.name)}</label>`).join("")}</fieldset>
        ${i.assessment_fields.map(y=>{let x=v.assessment_values[String(y.id)]??"",R=y.field_type==="rating"?`<select data-assessment-id="${C(y.id)}"><option value="">\u672A\u8A55\u4FA1</option>${[1,2,3,4,5].map(A=>`<option value="${A}" ${x===String(A)?"selected":""}>${A}</option>`).join("")}</select>`:y.field_type==="checkbox"?`<input type="checkbox" data-assessment-id="${C(y.id)}" ${x==="true"?"checked":""}>`:`<input type="${y.field_type==="number"?"number":"text"}" ${y.field_type==="number"?'step="1"':""} maxlength="500" data-assessment-id="${C(y.id)}" value="${C(x)}">`;return`<label class="assessment-input">${C(y.name)}${y.suffix?` (${C(y.suffix)})`:""}${R}</label>`}).join("")}
        ${i.damage_types.length?`<fieldset class="damage-field"><legend>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</legend>
          <button class="btn btn-sm" type="button" data-action="parking-inspect3d" data-id="${C(v.id)}">3D\u8ECA\u4E21\u691C\u67FB\u30FB\u640D\u50B7\u3092\u7DE8\u96C6</button>
          <div class="damage-map read-only" data-id="${C(v.id)}" aria-label="\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u306E\u30D7\u30EC\u30D3\u30E5\u30FC">
            <span class="damage-map-hint">3D\u691C\u67FB\u3067\u640D\u50B7\u4F4D\u7F6E\u3092\u7DE8\u96C6</span>
            ${(cn.get(v.id)??[]).map(y=>`<button type="button" class="damage-marker" data-action="parking-damage-remove" data-vehicle-id="${C(v.id)}" data-mark-id="${C(y.id)}" style="left:${y.x*100}%;top:${y.y*100}%;background:${C(y.color??i.damage_types.find(x=>x.id===y.damage_type_id)?.color??"#e34b4b")}">${C(y.icon??"\xD7")}</button>`).join("")}
          </div>
        </fieldset>`:""}
        <label>\u30E1\u30E2 <textarea name="notes" maxlength="2000">${C(v.notes??"")}</textarea></label>
        <button class="btn btn-sm btn-primary" type="submit">\u914D\u7F6E\u30FB\u72B6\u614B\u3092\u4FDD\u5B58</button>
      </form>`:`<div class="parking-statuses">${i.statuses.filter(y=>v.status_ids.includes(y.id)).map(y=>`${C(y.icon)} ${C(y.name)}`).join("\u3001")||"\u72B6\u614B\u306A\u3057"}
      ${v.inspection_marks.length?`<div class="damage-map read-only">${v.inspection_marks.map(y=>`<span class="damage-marker" style="left:${y.x*100}%;top:${y.y*100}%;background:${C(y.color??"#e34b4b")}">${C(y.icon??"\xD7")}</span>`).join("")}</div>`:""}</div>`,n=i.parking_lots.map(v=>{let y=i.vehicles.filter(I=>I.parking_lot_id===v.id),x=y.map(I=>`<article class="parking-map-vehicle"
      data-vehicle-id="${C(I.id)}"
      style="left:${I.position_x*100}%;top:${I.position_y*100}%">
      <button class="parking-drag-handle" type="button" data-parking-drag="${C(I.id)}"
        aria-label="${C(I.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${C(I.plate)}</button>
      <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${t(I)}</details>
    </article>`).join(""),R=v.markings.map(I=>`<line x1="${I.x1*1e3}" y1="${I.y1*1e3}" x2="${I.x2*1e3}" y2="${I.y2*1e3}" stroke="${C(I.color)}" stroke-width="7" stroke-linecap="round"/>`).join(""),A=v.navigation_url?`<a class="parking-lot-name" href="${C(v.navigation_url)}" target="_blank" rel="noopener noreferrer">${C(v.name)} <span aria-hidden="true">\u2197</span></a>`:`<h2 class="parking-lot-name">${C(v.name)}</h2>`;return`<section class="card parking-lot" style="--parking-lot-width:${C(Math.max(30,Math.min(100,v.area_width||50)))}%">
      <header><div class="parking-lot-heading">${A}<span class="parking-lot-count">${v.capacity===null?y.length:`${y.length}/${v.capacity}`} \u53F0</span></div>
      ${Ke("parking:admin")?`<div class="parking-admin-actions">
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${C(v.id)}" data-direction="up" aria-label="\u4E0A\u3078">\u2191</button>
        <button class="btn btn-sm" data-action="parking-lot-order" data-id="${C(v.id)}" data-direction="down" aria-label="\u4E0B\u3078">\u2193</button>
        <button class="btn btn-sm" data-action="parking-lot-resize" data-id="${C(v.id)}"
          aria-pressed="${Xo===v.id}">\u30B5\u30A4\u30BA\u8ABF\u6574</button>
        <button class="btn btn-sm" data-action="parking-lot-settings" data-id="${C(v.id)}">\u8A2D\u5B9A</button>
        <button class="btn btn-sm" data-action="parking-marking-toggle" data-id="${C(v.id)}">${Cs===v.id?"\u7DDA\u63CF\u753B\u3092\u7D42\u4E86":"\u7DDA\u3092\u63CF\u304F"}</button>
        <button class="btn btn-sm" data-action="parking-lot-toggle" data-id="${C(v.id)}" data-active="${String(!v.is_active)}">${v.is_active?"\u505C\u6B62":"\u518D\u958B"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${C(v.id)}">\u524A\u9664</button>
      </div>`:""}</header>
      <div class="parking-map${v.is_active?"":" inactive"}" data-parking-map data-lot-id="${C(v.id)}"
        style="height:${C(Math.max(160,Math.min(600,v.area_height||240)))}px">
        <svg class="parking-map-markings${Cs===v.id?" editable":""}" data-marking-svg
          data-lot-id="${C(v.id)}" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-label="\u99D0\u8ECA\u533A\u753B\u306E\u30E9\u30A4\u30F3">${R}</svg>
        ${x||'<span class="parking-map-empty">\u3053\u3053\u3078\u8ECA\u4E21\u3092\u30C9\u30E9\u30C3\u30B0</span>'}
        ${Ke("parking:admin")&&Xo===v.id?`<button class="parking-resize-handle" type="button" data-parking-resize="${C(v.id)}"
              aria-label="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30B5\u30A4\u30BA\u3092\u5909\u66F4" title="\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u30B5\u30A4\u30BA\u3092\u5909\u66F4">\u2198</button>`:""}
      </div>
      ${Cs===v.id?`<div class="parking-marking-tools"><label>\u7DDA\u306E\u8272 <input type="color" data-marking-color value="${C(Or)}"></label>
        <button class="btn btn-sm" data-action="parking-marking-undo" data-id="${C(v.id)}" ${v.markings.length?"":"disabled"}>\u6700\u5F8C\u306E\u7DDA\u3092\u53D6\u308A\u6D88\u3059</button>
        <span>\u56F3\u9762\u5185\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u533A\u753B\u7DDA\u3092\u63CF\u304D\u307E\u3059\u3002\u6307\u3092\u96E2\u3059\u3068\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</span></div>`:""}
      ${Ke("parking:write")?'<p class="parking-map-hint">\u8ECA\u4E21\u306E\u283F\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u914D\u7F6E\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u5909\u66F4\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</p>':""}
    </section>`}).join(""),s=i.vehicles.filter(v=>v.parking_lot_id===null),r=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,16),a=i.jobs.map(v=>{let y=i.vehicles.find(R=>R.id===v.vehicle_id),x=i.parking_lots.find(R=>R.id===v.destination_lot_id);return`<article class="parking-job${v.completed?" completed":""}">
      <div><strong>${C(y?.plate??`#${v.vehicle_id}`)}</strong>
        <span class="secondary">${C(x?.name??`#${v.destination_lot_id}`)} \xB7 ${C(v.scheduled_at)}</span></div>
      <div>${Ke("parking:write")?`<button class="btn btn-sm" data-action="parking-job-toggle" data-id="${C(v.id)}" data-completed="${String(!v.completed)}">${v.completed?"\u518D\u958B":"\u5B8C\u4E86"}</button>
        <button class="btn btn-sm btn-quiet" data-action="parking-job-delete" data-id="${C(v.id)}">\u524A\u9664</button>`:v.completed?"\u5B8C\u4E86":"\u4E88\u5B9A"}</div>
    </article>`}).join(""),o=`${e?`<form class="parking-job-form" data-form="parking-job">
      <label>\u8ECA\u4E21 <select name="vehicle_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.vehicles.map(v=>`<option value="${C(v.id)}">${C(v.plate)}</option>`).join("")}</select></label>
      <label>\u9001\u308A\u5148 <select name="destination_lot_id" required><option value="">\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${i.parking_lots.map(v=>`<option value="${C(v.id)}">${C(v.name)}</option>`).join("")}</select></label>
      <label>\u4E88\u5B9A\u65E5\u6642 <input name="scheduled_at" type="datetime-local" value="${C(r)}" required></label>
      <button class="btn btn-sm btn-primary" type="submit">\u4E88\u5B9A\u3092\u8FFD\u52A0</button>
    </form>`:""}
    <div class="parking-job-list">${a||'<p class="parking-catalog-empty">\u4E88\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}</div>`,l=(v,y)=>`<select name="${v}" required>
    ${i.parking_lots.map(x=>`<option value="${C(x.id)}" ${y===x.id?"selected":""}>${C(x.name)}</option>`).join("")}
  </select>`,c=(v,y)=>`<select name="${v}" required>
    ${i.stores.map(x=>`<option value="${C(x.id)}" ${y===x.id?"selected":""}>${C(x.name)}</option>`).join("")}
  </select>`,u=(v,y,x,R,A,I,N)=>`<form class="parking-distance-form" data-form="${v}">
      ${v==="lot-distance"?l(y,R):c(y,R)}
      ${l(x,A)}
      <label>\u5206 <input name="minutes" type="number" min="0" max="100000" step="any" value="${I??""}"></label>
      <label>km <input name="km" type="number" min="0" max="100000" step="any" value="${N??""}"></label>
      <button class="btn btn-sm" type="submit">${I===void 0?"\u8FFD\u52A0":"\u4FDD\u5B58"}</button>
    </form>`;wc=Ke("parking:admin")?`<section class="card parking-catalogs">
    <div><h2>\u8ECA\u4E21\u30AF\u30E9\u30B9</h2><form data-form="parking-class">
      <input name="name" maxlength="40" placeholder="\u30AF\u30E9\u30B9\u540D" required><input name="color" type="color" value="#4f86f7">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_classes.map(v=>`<div class="parking-catalog-row"><span><i style="background:${C(v.color)}"></i>${C(v.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-class-delete" data-id="${C(v.id)}">\u524A\u9664</button></div>`).join("")}</div>
    <div class="parking-status-settings"><h2>\u696D\u52D9\u72B6\u614B</h2><form class="parking-status-create" data-form="parking-status">
      <input name="name" maxlength="40" placeholder="\u72B6\u614B\u540D" required><input name="icon" maxlength="8" placeholder="\u{1F514}">
      <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.statuses.map(v=>`<form class="parking-status-edit" data-form="parking-status-edit" data-id="${C(v.id)}">
      <span class="parking-status-preview">${C(v.icon)}</span>
      <input name="name" maxlength="40" value="${C(v.name)}" aria-label="\u72B6\u614B\u540D" required>
      <input name="icon" maxlength="8" value="${C(v.icon)}" aria-label="\u30A2\u30A4\u30B3\u30F3">
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-status-delete" data-id="${C(v.id)}">\u524A\u9664</button>
    </form>`).join("")||'<p class="empty">\u696D\u52D9\u72B6\u614B\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div class="parking-option-settings"><h2>\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3</h2><form class="parking-option-create" data-form="parking-option">
      <input name="name" maxlength="40" placeholder="\u30AA\u30D7\u30B7\u30E7\u30F3\u540D" required><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button>
    </form>${i.vehicle_options.map(v=>`<form class="parking-option-edit" data-form="parking-option-edit" data-id="${C(v.id)}">
      <input name="name" maxlength="40" value="${C(v.name)}" aria-label="\u30AA\u30D7\u30B7\u30E7\u30F3\u540D" required>
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-option-delete" data-id="${C(v.id)}">\u524A\u9664</button>
    </form>`).join("")||'<p class="empty">\u8ECA\u4E21\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u5E97\u8217 / \u62E0\u70B9</h2><p class="secondary">\u65E7Parking\u306E\u5E97\u8217\u306F\u73FE\u5728\u306EERP\u62E0\u70B9\u306B\u5C5E\u3059\u308B\u5E97\u8217\u30C7\u30FC\u30BF\u3078\u79FB\u884C\u3057\u307E\u3059\u3002\u30D5\u30E9\u30F3\u30C1\u30E3\u30A4\u30BA\u62E0\u70B9\u3068\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u306FERP\u306E\u300C\u5E97\u8217\u300D\u300C\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u300D\u304B\u3089\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
      <form data-form="parking-store"><input name="name" maxlength="120" placeholder="\u5E97\u8217\u540D" required><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form>
      ${i.stores.map(v=>`<div class="parking-catalog-row"><span>${C(v.name)}</span><button class="btn btn-sm btn-quiet" data-action="parking-store-delete" data-id="${C(v.id)}">\u524A\u9664</button></div>`).join("")||'<p class="empty">\u5E97\u8217\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u62E0\u70B9\u9593\u8DDD\u96E2</h2><p class="secondary">\u5206\u3092\u7A7A\u6B04\u306B\u3059\u308B\u3068\u65E2\u5B58\u306E\u8DDD\u96E2\u3092\u524A\u9664\u3057\u307E\u3059\u3002</p>
      ${u("lot-distance","from_lot_id","to_lot_id")}
      ${i.lot_distances.map(v=>`<div class="parking-distance-row">${u("lot-distance","from_lot_id","to_lot_id",v.from_lot_id,v.to_lot_id,v.minutes,v.km)}</div>`).join("")||'<p class="empty">\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u5E97\u8217\u304B\u3089\u99D0\u8ECA\u5834\u307E\u3067</h2><p class="secondary">\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u306E\u6240\u8981\u6642\u9593\u30FB\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</p>
      ${i.stores.length&&i.parking_lots.length?u("store-distance","store_id","lot_id"):'<p class="empty">\u5E97\u8217\u3068\u99D0\u8ECA\u5834\u3092\u5148\u306B\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044</p>'}
      ${i.store_lot_distances.map(v=>`<div class="parking-distance-row">${u("store-distance","store_id","lot_id",v.store_id,v.lot_id,v.minutes,v.km)}</div>`).join("")||'<p class="empty">\u8DDD\u96E2\u8A2D\u5B9A\u306F\u3042\u308A\u307E\u305B\u3093</p>'}</div>
    <div><h2>\u67FB\u5B9A\u9805\u76EE</h2>${i.assessment_fields.map(v=>`<form class="parking-config-form" data-form="parking-assessment" data-id="${C(v.id)}">
      <input name="name" maxlength="120" value="${C(v.name)}" required>
      <select name="field_type">${["rating","checkbox","number","text"].map(y=>`<option value="${y}" ${v.field_type===y?"selected":""}>${y}</option>`).join("")}</select>
      <input name="suffix" maxlength="120" value="${C(v.suffix)}" placeholder="\u5358\u4F4D">
      ${v.built_in_key?'<span class="secondary">\u6A19\u6E96</span>':'<button class="btn btn-sm btn-quiet" type="button" data-action="parking-assessment-delete" data-id="'+C(v.id)+'">\u524A\u9664</button>'}
      <button class="btn btn-sm" type="submit">\u4FDD\u5B58</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-assessment"><input name="name" maxlength="120" placeholder="\u67FB\u5B9A\u9805\u76EE\u540D" required>
        <select name="field_type"><option value="rating">rating</option><option value="checkbox">checkbox</option><option value="number">number</option><option value="text">text</option></select>
        <input name="suffix" maxlength="120" placeholder="\u5358\u4F4D"><button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
    <div><h2>\u640D\u50B7\u30DE\u30FC\u30AB\u30FC</h2>${i.damage_types.map(v=>`<form class="parking-config-form" data-form="parking-damage" data-id="${C(v.id)}">
      <input name="name" maxlength="120" value="${C(v.name)}" required><input name="icon" maxlength="40" value="${C(v.icon)}">
      <input name="color" type="color" value="${C(v.color)}"><button class="btn btn-sm" type="submit">\u4FDD\u5B58</button>
      <button class="btn btn-sm btn-quiet" type="button" data-action="parking-damage-delete" data-id="${C(v.id)}">\u524A\u9664</button></form>`).join("")}
      <form class="parking-config-form" data-form="parking-damage"><input name="name" maxlength="120" placeholder="\u640D\u50B7\u540D" required>
        <input name="icon" maxlength="40" placeholder="\u26A0\uFE0F"><input name="color" type="color" value="#e34b4b">
        <button class="btn btn-sm" type="submit">\u8FFD\u52A0</button></form></div>
  </section>`:"";let f=[Dr.length?'<button class="btn btn-sm" data-action="parking-move-undo">\u914D\u7F6E\u3092\u53D6\u308A\u6D88\u3059</button>':"",Ke("vehicles:read")&&Ke("vehicles:write")&&Ue.site.type==="headquarters"?'<button class="btn btn-sm" data-action="sync-parking">ERP\u8ECA\u4E21\u3092\u540C\u671F</button>':"",Ke("parking:admin")?`<button class="btn btn-primary" data-action="parking-location-manager">${Rt("plus")} \u99D0\u8ECA\u4F4D\u7F6E\u3092\u7BA1\u7406</button>
        <button class="btn" data-action="parking-settings">\u99D0\u8ECA\u5834\u8A2D\u5B9A</button>`:""].filter(Boolean).join(""),g=i.vehicles.filter(v=>v.status_ids.length||v.unwashed||v.no_fuel||v.needs_repair).length,b=i.jobs.length,m=i.jobs.filter(v=>!v.completed).length,p=i.parking_lots.length||s.length?`${n}${s.length?`<section class="card parking-lot parking-unassigned-lot"><header><div class="parking-lot-heading"><h2 class="parking-lot-name">\u672A\u914D\u7F6E</h2><span class="parking-lot-count">${s.length} \u53F0</span></div></header>
      <div class="parking-map unassigned" data-parking-map data-lot-id="" style="height:auto;min-height:100px">
        ${s.map(v=>`<article class="parking-map-vehicle unassigned-vehicle" data-vehicle-id="${C(v.id)}">
          <button class="parking-drag-handle" type="button" data-parking-drag="${C(v.id)}"
            aria-label="${C(v.plate)}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u79FB\u52D5">\u283F ${C(v.plate)}</button>
          <details><summary>\u8A73\u7D30\u30FB\u72B6\u614B</summary>${t(v)}</details>
        </article>`).join("")}
      </div></section>`:""}`:`<section class="parking-empty-state"><strong>\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u3042\u308A\u307E\u305B\u3093</strong>
      <span>\u300C\u4F4D\u7F6E\u3092\u7BA1\u7406\u300D\u304B\u3089\u30A8\u30EA\u30A2\u3092\u8FFD\u52A0\u3059\u308B\u3068\u3001\u8ECA\u4E21\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002</span>
      ${Ke("parking:admin")?'<button class="btn btn-sm btn-primary" data-action="parking-location-manager">\u4F4D\u7F6E\u3092\u7BA1\u7406</button>':""}</section>`;Hi(`${Vi("\u8ECA\u4E21\u914D\u7F6E","",f)}
    <div class="parking-summary" aria-label="\u8ECA\u4E21\u306E\u6982\u8981">
      <div class="parking-summary-card"><span>\u767B\u9332\u8ECA\u4E21</span><strong>${i.vehicles.length}</strong></div>
      <div class="parking-summary-card"><span>\u914D\u7F6E\u30A8\u30EA\u30A2</span><strong>${i.parking_lots.length}</strong></div>
      <div class="parking-summary-card"><span>\u8981\u5BFE\u5FDC</span><strong>${g}</strong></div>
    </div>
    <section class="parking-fold"><details id="parking-status-panel">
      <summary class="parking-fold-summary"><strong>\u30B9\u30C6\u30FC\u30BF\u30B9\u5225\u306E\u8ECA\u4E21</strong><span>${i.vehicles.length} \u53F0 <span class="parking-fold-chevron" aria-hidden="true">\u203A</span></span></summary>
      ${od(i)}
    </details></section>
    <section class="parking-fold"><details id="parking-job-panel">
      <summary class="parking-fold-summary"><strong>\u30B8\u30E7\u30D6</strong><span>\u672A\u5B8C\u4E86 ${m} / \u5168 ${b} \u4EF6 <span class="parking-fold-chevron" aria-hidden="true">\u203A</span></span></summary>
      <div class="parking-fold-content">${o}</div>
    </details></section>
    ${e?"":'<div class="section-note">\u95B2\u89A7\u5C02\u7528\u3067\u3059\u3002\u914D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u306B\u306F\u99D0\u8ECA\u5834\u66F8\u304D\u8FBC\u307F\u6A29\u9650\u304C\u5FC5\u8981\u3067\u3059\u3002</div>'}
    <div class="parking-workspace"><div class="parking-grid">${p}</div>
      <aside class="parking-vehicle-catalog" aria-labelledby="parking-catalog-title">
        <details open><summary class="parking-catalog-heading"><strong id="parking-catalog-title">\u8ECA\u4E21\u4E00\u89A7</strong><span>${i.vehicles.length} \u53F0 <span class="parking-fold-chevron" aria-hidden="true">\u2304</span></span></summary>
          ${Nc(i)}
        </details>
      </aside>
    </div>`)}async function ld(){let i=new URLSearchParams({limit:"50",offset:String(en)});Ue.site.type==="headquarters"&&i.set("siteId",Ue.site.id),hi&&i.set("status",hi),hn&&i.set("search",hn);let e=await Ae(`/api/v1/reservations?${i}`);$o=e.items;let t=e.items.map(r=>{let a=r.status==="reserved"&&Ke("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-checkin" data-id="${C(r.id)}">\u8CB8\u51FA\u624B\u7D9A\u304D</button> <button class="btn btn-sm btn-quiet" data-action="reservation-cancel" data-id="${C(r.id)}">\u30AD\u30E3\u30F3\u30BB\u30EB</button>`:r.status==="checked_in"&&Ke("reservations:write")?`<button class="btn btn-sm btn-primary" data-action="reservation-return" data-id="${C(r.id)}">\u8FD4\u5374\u624B\u7D9A\u304D</button>`:'<span class="secondary">\u2014</span>';return`<tr>
      <td class="primary-cell" data-label="\u4E88\u7D04\u756A\u53F7">${C(r.reservation_code)}<span class="secondary">${C(r.site_name)}</span></td>
      <td data-label="\u304A\u5BA2\u69D8">${C(r.guest_name)}<span class="secondary">${C(r.guest_phone)}</span></td>
      <td data-label="\u5229\u7528\u671F\u9593">${Ec(r.start_at)}<span class="secondary">\uFF5E ${Ec(r.end_at)}</span></td>
      <td data-label="\u8ECA\u4E21">${C(r.registration_number??"\u672A\u5272\u308A\u5F53\u3066")}<span class="secondary">${C(r.make??"")} ${C(r.model??"")}</span></td>
      <td data-label="\u72B6\u614B">${ui(r.status)}${r.checked_out_by_name?`<span class="secondary">\u8CB8\u51FA\u62C5\u5F53\uFF1A${C(r.checked_out_by_name)}</span>`:""}${r.returned_by_name?`<span class="secondary">\u8FD4\u5374\u62C5\u5F53\uFF1A${C(r.returned_by_name)}</span>`:""}</td>
      <td data-label="\u53D7\u4ED8\u64CD\u4F5C">${a}</td>
    </tr>`}).join(""),n=`<select class="filter-select" data-status><option value="">\u3059\u3079\u3066\u306E\u4E88\u7D04</option>${["reserved","checked_in","completed","cancelled"].map(r=>`<option value="${r}" ${hi===r?"selected":""}>${zr(r)}</option>`).join("")}</select>`,s=[Ue.site.type!=="headquarters"?`<button class="btn" data-action="employee-roster" data-site-id="${C(Ue.site.id)}">${Rt("team")} \u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</button>`:"",Ke("reservations:write")?`<button class="btn btn-primary" data-modal="reservation">${Rt("plus")} \u4E88\u7D04\u3092\u4F5C\u6210</button>`:""].join("");Hi(`${Vi("\u4E88\u7D04\u30FB\u53D7\u4ED8","\u8CB8\u51FA\u30FB\u8FD4\u5374\u6642\u306B\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u8A18\u9332\u3057\u307E\u3059",s)}
    ${Hr("\u4E88\u7D04\u756A\u53F7\u3001\u304A\u5BA2\u69D8\u3001\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8\u3067\u691C\u7D22",n)}
    ${Vr(["\u4E88\u7D04\u756A\u53F7 / \u5E97\u8217","\u304A\u5BA2\u69D8\u60C5\u5831","\u5229\u7528\u671F\u9593","\u8ECA\u4E21","\u72B6\u614B","\u64CD\u4F5C"],t,"\u4E88\u7D04\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u6765\u5E97\u6642\u306B\u53D7\u4ED8\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044")}
    ${Ko(e.items.length)}`)}async function Ur(i){try{let e=Ue?.site.id===i?Ue.site:(await Fc(),Gt.find(s=>s.id===i));if(!e||e.type==="headquarters")throw new Error("invalid_site");let t=await Ae(`/api/v1/employees?${new URLSearchParams({siteId:i,includeDisabled:"true"})}`);Pc=t.items,Qh=i,fi="employees";let n=document.createElement("div");n.className="overlay",bt(n,`<section class="modal employee-modal" role="dialog" aria-modal="true" aria-labelledby="employee-modal-title">
      <header class="modal-head"><div><h2 id="employee-modal-title">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F</h2><p>${C(e.name)} \xB7 \u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u62C5\u5F53\u8005\u9078\u629E\u306B\u4F7F\u3044\u307E\u3059</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
      <div class="modal-body">
        <form class="employee-create" data-form="employee">
          <input type="hidden" name="siteId" value="${C(i)}">
          <label class="field"><span class="field-label">\u30B9\u30BF\u30C3\u30D5\u540D</span><input name="name" maxlength="120" required placeholder="\u6C0F\u540D\u3092\u5165\u529B"></label>
          <button class="btn btn-primary" type="submit">${Rt("plus")} \u8FFD\u52A0</button>
        </form>
        <div class="employee-list">${t.items.length?t.items.map(s=>`<div class="employee-row">
          <span class="${s.status==="disabled"?"employee-disabled":""}">${C(s.name)}${s.status==="disabled"?"<small>\uFF08\u7121\u52B9\uFF09</small>":""}</span>
          <div><button class="btn btn-sm" data-action="employee-edit" data-id="${C(s.id)}">\u7DE8\u96C6</button>
          <button class="btn btn-sm ${s.status==="active"?"btn-quiet":""}" data-action="employee-toggle" data-id="${C(s.id)}" data-status="${s.status==="active"?"disabled":"active"}">${s.status==="active"?"\u7121\u52B9\u306B\u3059\u308B":"\u518D\u958B"}</button></div>
        </div>`).join(""):'<div class="empty">\u30B9\u30BF\u30C3\u30D5\u540D\u304C\u307E\u3060\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093</div>'}</div>
      </div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
    </section>`),Ot.append(n),n.addEventListener("click",s=>{s.target===n&&Wt()})}catch(e){kr=null,Je(ot(e.message),!0)}}async function cd(i,e){let n=(await Ae(`/api/v1/employees?${new URLSearchParams({siteId:i.site_id})}`)).items.map(r=>`<option value="${C(r.id)}">${C(r.name)}</option>`).join(""),s=e==="checked_in"?"\u8CB8\u51FA":"\u8FD4\u5374";xn(`${s}\u624B\u7D9A\u304D`,`${C(i.registration_number??"")} \xB7 \u62C5\u5F53\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E`,`
    <input type="hidden" name="id" value="${C(i.id)}">
    <input type="hidden" name="status" value="${e}">
    ${Oi("employeeId","\u62C5\u5F53\u30B9\u30BF\u30C3\u30D5",`<option value="">\u30B9\u30BF\u30C3\u30D5\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${n}`)}
    ${n?"":`<p class="section-note">\u5148\u306B\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3078\u62C5\u5F53\u8005\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><button type="button" class="btn" data-action="employee-roster" data-site-id="${C(i.site_id)}">\u30B9\u30BF\u30C3\u30D5\u540D\u7C3F\u3092\u958B\u304F</button>`}
  `,"reservation-transition",`${s}\u3092\u78BA\u5B9A`)}function st(i,e,t="text",n="",s="",r=!1,a=""){return`<div class="field ${a}"><label for="f-${i}">${e}</label><input id="f-${i}" name="${i}" type="${t}" value="${C(n)}" placeholder="${C(s)}" ${r?"required":""}></div>`}function Oi(i,e,t,n=!0){return`<div class="field"><label for="f-${i}">${e}</label><select id="f-${i}" name="${i}" ${n?"required":""}>${t}</select></div>`}function xn(i,e,t,n,s="\u4FDD\u5B58"){fi=n;let r=document.createElement("div");r.className=n==="vehicle"?"overlay vehicle-create-overlay":"overlay",n==="vehicle"?bt(r,`<section class="modal vehicle-create-modal" role="dialog" aria-modal="true" aria-labelledby="vehicle-create-title">
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
    </section>`):bt(r,`<section class="modal" role="dialog" aria-modal="true"><header class="modal-head"><div><h2>${i}</h2><p>${e}</p></div><button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header><form data-form="${n}"><div class="modal-body">${t}</div><footer class="modal-foot"><button type="button" class="btn" data-action="close-modal">\u30AD\u30E3\u30F3\u30BB\u30EB</button><button type="submit" class="btn btn-primary">${s}</button></footer></form></section>`),Ot.append(r),r.addEventListener("click",a=>{a.target===r&&Wt()})}function Wt(){fi==="vehicle"&&(un?.dispose(),un=null,bn=[],qo=[]),Ve(".overlay")?.remove(),fi="",kr=null}function Uc(){window.clearTimeout(Ac),As?.close(),As=null}async function Iv(i){if(!Ue?.isAdmin)return;let e=ut,t=await Ae("/api/v1/auth/switch-site",{method:"POST",body:JSON.stringify({siteId:i})});Uc(),di(),ud(),Vh(localStorage,pt,e,t.accessToken),pt=t.accessToken,Ue=null,ut="dashboard",localStorage.setItem(Rs,ut),history.replaceState(null,"",oi(ut)),await Jo()}async function Pv(){if(!(await fetch("/api/v1/auth/end-site",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error");let e=Bo(localStorage);if(!e)return;if(Uc(),di(),ud(),pt=e.token,!await Br("default")){pt="",Ue=null,ki(localStorage),Ps();return}let n=e.page;Is.includes(n)&&(ut=n,localStorage.setItem(Rs,ut),history.replaceState(null,"",oi(ut))),Ue=null,await Jo()}function ud(){Gt=[],Go=[],Pc=[],$o=[],Wo=[],Lc=[],xt=null}function hd(){return`<section class="vehicle-dates-section" aria-labelledby="vehicle-dates-title">
    <div class="vehicle-section-heading"><h3 id="vehicle-dates-title">\u8ECA\u691C\u30FB\u6CD5\u5B9A\u70B9\u691C</h3>
      <p>\u65E5\u4ED8\u3092\u767B\u9332\u3059\u308B\u3068\u8ECA\u4E21\u60C5\u5831\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002</p></div>
    <div class="vehicle-dates-grid">
      <label class="field"><span class="field-label">\u8ECA\u691C\u6E80\u4E86\u65E5</span><input type="date" name="inspectionExpiryDate"></label>
      <label class="field"><span class="field-label">\u6CD5\u5B9A\u70B9\u691C\u65E5</span><input type="date" name="statutoryInspectionDate"></label>
    </div>
  </section>`}function Lv(i,e=!1,t=!1){let n=!i,s=i??bv,r={body:"\u5916\u88C5\u30FB\u5185\u88C5\u7CFB",electrical:"\u8ECA\u691C\u8A3C\u30FB\u96FB\u88C5\u7CFB",basic:"\u57FA\u672C\u60C5\u5831",custom:"\u8FFD\u52A0\u9805\u76EE"},a=(h,d)=>{let f=C(h.id);if(h.field_type==="rating")return`<input type="hidden" data-assessment-id="${f}" ${n?"disabled":""}>
        <div class="rating-control" role="group" aria-label="${C(h.name)}\u306E\u8A55\u4FA1">${[1,2,3,4,5].map(m=>`<button type="button" data-action="vehicle-rating" data-rating-assessment-id="${f}"
              data-score="${m}" aria-label="${m}\u70B9" aria-pressed="false" ${n?"disabled":""}>${m}</button>`).join("")}</div>`;if(h.field_type==="checkbox")return`${h.suffix?`<span class="assessment-field-suffix">${C(h.suffix)}</span>`:""}
          <input type="checkbox" data-assessment-id="${f}" aria-labelledby="${d}" ${n?"disabled":""}>`;let g=h.built_in_key==="registration_month",b=h.built_in_key==="registration_year";return`<input data-assessment-id="${f}"
      type="${h.field_type==="number"?"number":"text"}"
      ${h.field_type==="number"?`min="${g?1:0}" ${g?'max="12"':b?`max="${new Date().getFullYear()}"`:'max="999999999999"'} step="1" inputmode="numeric" maxlength="12" ${g?'placeholder="1\u301C12"':""}`:'maxlength="500"'}
      aria-labelledby="${d}" ${n?"disabled":""}>${h.suffix?`<span class="assessment-field-suffix">${C(h.suffix)}</span>`:""}`},o=Object.entries(r).map(([h,d])=>{let f=s.assessment_fields.filter(g=>(g.group_key??"custom")===h);return f.length?`<section class="assessment-group"><h4>${d}</h4><div class="assessment-field-grid">
      ${f.map(g=>{let b=`assessment-label-${C(g.id)}`;return`<div class="assessment-field">
        <span id="${b}">${C(g.name)}</span>
        <div class="assessment-field-control">${a(g,b)}</div>
      </div>`}).join("")}
    </div></section>`:""}).join(""),l=s.parking_lots.find(h=>h.is_active),c=n?`<input type="hidden" name="parkingLotId" value="" disabled>
       <p class="default-location-note">\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u3068\u3001\u767B\u9332\u5148\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002</p>`:l?`<input type="hidden" name="parkingLotId" value="${C(l.id)}">
       <p class="default-location-note"><span>\u8FFD\u52A0\u3057\u305F\u8ECA\u4E21\u306F</span>\u300C<strong>${C(l.name)}</strong>\u300D<span>\u306B\u767B\u9332\u3055\u308C\u307E\u3059\u3002</span></p>`:'<input type="hidden" name="parkingLotId" value=""><p class="default-location-note">\u6709\u52B9\u306A\u99D0\u8ECA\u30A8\u30EA\u30A2\u304C\u306A\u3044\u305F\u3081\u3001\u8ECA\u4E21\u306F\u672A\u914D\u7F6E\u3067\u767B\u9332\u3055\u308C\u307E\u3059\u3002</p>';return`<div class="vehicle-parking-form">
    ${n?`<p class="vehicle-catalog-message" role="${e||t?"status":"note"}">${t?"\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5E97\u8217\u306E\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u518D\u8A66\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002":e?"\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026":"\u767B\u9332\u5148\u306E\u5E97\u8217\u306E\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002"}${t?' <button class="btn btn-sm" type="button" data-action="vehicle-catalog-retry">\u518D\u8A66\u884C</button>':""}</p>`:""}
    <div class="form-row vehicle-class-row">
      <label>\u30AF\u30E9\u30B9<select name="parkingClass" data-vehicle-class required ${n||!s.vehicle_classes.length?"disabled":""}>
        ${s.vehicle_classes.map(h=>`<option value="${C(h.name)}">${C(h.name)}</option>`).join("")||`<option value="">${n?"\u5E97\u8217\u9078\u629E\u5F8C\u306B\u8AAD\u307F\u8FBC\u307F":"\u8ECA\u4E21\u30AF\u30E9\u30B9\u304C\u767B\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093"}</option>`}
      </select></label>${c}
    </div>
    <fieldset class="option-fields"><legend>\u30AA\u30D7\u30B7\u30E7\u30F3</legend><div class="status-option-list">
      ${s.vehicle_options.map(h=>`<label class="check-label">
        <input type="checkbox" name="parkingOptions" value="${C(h.name)}" ${n?"disabled":""}>${C(h.name)}
      </label>`).join("")||'<span class="status-empty">\u30AA\u30D7\u30B7\u30E7\u30F3\u306F\u3042\u308A\u307E\u305B\u3093\u3002</span>'}
    </div></fieldset>
    <fieldset class="status-fields"><legend>\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9</legend><div class="status-option-list">
      ${s.statuses.map(h=>`<label class="check-label">
        <input type="checkbox" name="parkingStatusIds" value="${C(h.id)}" ${n?"disabled":""}>${C(h.icon)} ${C(h.name)}
      </label>`).join("")}
      ${s.statuses.length?"":'<span class="status-empty">\u5BFE\u5FDC\u30B9\u30C6\u30FC\u30BF\u30B9\u306F\u3042\u308A\u307E\u305B\u3093\u3002</span>'}
    </div></fieldset>
    ${hd()}
    <section class="assessment-section">
      <h3>\u8ECA\u4E21\u72B6\u614B\u8A55\u4FA1\u30B7\u30FC\u30C8</h3>${o||'<p class="assessment-empty">\u8A55\u4FA1\u9805\u76EE\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002</p>'}
      <label class="assessment-notes-field">\u5099\u8003\u6B04
        <textarea name="parkingNotes" rows="4" maxlength="5000"
          placeholder="\u8ECA\u4E21\u306B\u3064\u3044\u3066\u5171\u6709\u3057\u305F\u3044\u3053\u3068\u3092\u8A18\u9332\u3067\u304D\u307E\u3059\u3002" ${n?"disabled":""}></textarea>
      </label>
    </section>
    <section class="inspection-section">
      <h3>\u8ECA\u4F53\u306E\u640D\u50B7\u4F4D\u7F6E</h3>
      ${s.damage_types.length?`<div class="damage-type-palette" ${n?"":"data-vehicle-damage-palette"}>${s.damage_types.map(h=>`<button class="damage-type-button" type="button" data-damage-type="${C(h.id)}"
            style="--damage-color:${C(h.color)}" ${n?"disabled":""}>${C(h.icon)} ${C(h.name)}</button>`).join("")}</div>
          <p class="inspection-hint" aria-live="polite">\u50B7\u307E\u305F\u306F\u51F9\u307F\u306E\u30A2\u30A4\u30B3\u30F3\u3092\u62BC\u3057\u305F\u307E\u307E\u30013D\u8ECA\u4F53\u306E\u8868\u9762\u307E\u3067\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>
          <div class="inspection-car-view" ${n?"":"data-vehicle-inspection-view"}
            ${n?'role="note"':'role="application"'} aria-label="3D\u8ECA\u4E21\u30E2\u30C7\u30EB">${n?'<p class="inspection-preview-note">\u5E97\u8217\u3092\u9078\u629E\u3059\u308B\u30683D\u8ECA\u4E21\u30E2\u30C7\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002</p>':""}</div>
          <div class="inspection-mark-list" ${n?"":"data-vehicle-inspection-marks"}></div>`:'<p class="assessment-empty">\u640D\u50B7\u306E\u7A2E\u985E\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u99D0\u8ECA\u5834\u8A2D\u5B9A\u3067\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002</p>'}
    </section>
  </div>`}function Fr(i,e,t=!1,n=!1){un?.dispose(),un=null,bt(i,Lv(e,t,n)),qo=e?.damage_types??[];let s=i.closest("form")?.querySelector('button[type="submit"]');if(s&&(s.disabled=t||!e||!e.vehicle_classes.length),!e?.damage_types.length)return;let r=Ve("[data-vehicle-damage-palette]",i),a=Ve("[data-vehicle-inspection-view]",i);if(!r||!a)return;un=Sc(a,e.damage_types,bn,l=>{bn=l,fd(l,e.damage_types,i)},r);let o=Ve(".parking-inspection-canvas",a);o&&o.setAttribute("aria-label",Ts("3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332",pi()))}async function dd(i,e,t){bn=[],Fr(i,null,!0);try{let n=await Ae(`/api/v1/parking/vehicle-catalog?${new URLSearchParams({siteId:e})}`);if(t&&t.value!==e)return;Fr(i,n)}catch(n){if(t&&t.value!==e)return;un?.dispose(),un=null,Fr(i,null,!1,!0);let s=i.closest("form")?.querySelector('button[type="submit"]');s&&(s.disabled=!0),Je(ot(n.message),!0)}}function fd(i,e,t){let n=Ve("[data-vehicle-inspection-marks]",t);n&&bt(n,i.length?i.map(s=>{let r=e.find(a=>a.id===s.damage_type_id);return r?`<span class="inspection-mark-entry">${C(r.icon)} ${C(r.name)}
      <button type="button" data-action="vehicle-damage-remove" data-mark-id="${C(s.id)}"
        aria-label="\u640D\u50B7\u30DE\u30FC\u30AF\u3092\u524A\u9664">\xD7</button></span>`:""}).join(""):'<span class="inspection-mark-empty">\u640D\u50B7\u4F4D\u7F6E\u306F\u307E\u3060\u8A18\u9332\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002</span>')}function Dv(){if(!Ke("parking:admin")||!xt)return;let i=xt,e=document.createElement("div");e.className="overlay";let t=i.parking_lots.map(n=>{let s=i.vehicles.filter(c=>c.parking_lot_id===n.id).length,r=i.jobs.filter(c=>c.destination_lot_id===n.id).length,a=s>0||r>0,l=i.parking_lots.length<=1?"\u6700\u5F8C\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002":a?`\u8ECA\u4E21 ${s} \u53F0\u30FB\u4F5C\u696D\u4E88\u5B9A ${r} \u4EF6\u304C\u3042\u308B\u305F\u3081\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002`:"";return`<div class="parking-location-row"><div><strong>${C(n.name)}</strong>
      <span class="secondary">${s} \u53F0 \xB7 \u4F5C\u696D\u4E88\u5B9A ${r} \u4EF6${n.is_active?"":" \xB7 \u505C\u6B62\u4E2D"}</span>
      ${l?`<small>${C(l)}</small>`:""}</div>
      <button class="btn btn-sm btn-quiet" data-action="parking-lot-delete" data-id="${C(n.id)}"
        ${l?"disabled":""}>\u524A\u9664</button></div>`}).join("");bt(e,`<section class="modal parking-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="parking-location-title">
    <header class="modal-head"><div><h2 id="parking-location-title">\u99D0\u8ECA\u4F4D\u7F6E\u3092\u7BA1\u7406</h2>
      <p>\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u8FFD\u52A0\u3068\u524A\u9664\u3092\u884C\u3044\u307E\u3059\u3002\u8ECA\u4E21\u3084\u4F5C\u696D\u4E88\u5B9A\u304C\u3042\u308B\u30A8\u30EA\u30A2\u3001\u6700\u5F8C\u306E\u30A8\u30EA\u30A2\u306F\u524A\u9664\u3067\u304D\u307E\u305B\u3093\u3002</p></div>
      <button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
    <div class="modal-body"><form class="card parking-lot-create" data-form="parking-lot">
      <label>\u99D0\u8ECA\u30A8\u30EA\u30A2\u540D <input name="name" maxlength="40" required></label>
      <label>Google Maps \u6848\u5185URL <input name="navigation_url" type="url" maxlength="2000" placeholder="https://maps.google.com/\u2026"></label>
      <button class="btn btn-sm btn-primary" type="submit">${Rt("plus")} \u30A8\u30EA\u30A2\u3092\u8FFD\u52A0</button>
    </form><section class="parking-location-list" aria-label="\u767B\u9332\u6E08\u307F\u99D0\u8ECA\u30A8\u30EA\u30A2">
      ${t||'<p class="empty">\u99D0\u8ECA\u30A8\u30EA\u30A2\u306F\u3042\u308A\u307E\u305B\u3093\u3002</p>'}
    </section></div><footer class="modal-foot"><button class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
  </section>`),Ot.append(e),fi="parking-locations",e.addEventListener("click",n=>{n.target===e&&Wt()})}function Nv(){if(!Ke("parking:admin")||!wc)return;let i=document.createElement("div");i.className="overlay",bt(i,`<section class="modal parking-admin-dialog" role="dialog" aria-modal="true" aria-labelledby="parking-settings-title">
    <header class="modal-head"><div><h2 id="parking-settings-title">\u99D0\u8ECA\u5834\u8A2D\u5B9A</h2>
      <p>\u8ECA\u4E21\u30AF\u30E9\u30B9\u3001\u696D\u52D9\u72B6\u614B\u3001\u30AA\u30D7\u30B7\u30E7\u30F3\u3001\u8DDD\u96E2\u3001\u67FB\u5B9A\u9805\u76EE\u3001\u640D\u50B7\u30DE\u30FC\u30AB\u30FC\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002</p></div>
      <button class="modal-close" data-action="close-modal" aria-label="\u9589\u3058\u308B">\xD7</button></header>
    <div class="modal-body">${wc}</div>
    <footer class="modal-foot"><button class="btn" data-action="close-modal">\u9589\u3058\u308B</button></footer>
  </section>`),Ot.append(i),fi="parking-settings",i.addEventListener("click",e=>{e.target===i&&Wt()})}async function Ir(i,e=""){try{if(["account"].includes(i)&&await id(),i==="site")xn("\u5E97\u8217\u3092\u8FFD\u52A0","\u76F4\u55B6\u5E97\u307E\u305F\u306F\u52A0\u76DF\u5E97\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        ${st("code","\u5E97\u8217\u30B3\u30FC\u30C9","text","","\u4F8B\uFF1ATKY-001",!0)}
        ${Oi("type","\u5E97\u8217\u7A2E\u5225",'<option value="direct">\u76F4\u55B6\u5E97</option><option value="franchise">\u52A0\u76DF\u5E97</option>')}
        ${st("name","\u5E97\u8217\u540D","text","","\u5E97\u8217\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0,"full")}
      </div>`,"site");else if(i==="account")xn("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u8FFD\u52A0","\u5E97\u8217\u7528\u306E\u30ED\u30B0\u30A4\u30F3ID\u3068\u5229\u7528\u6A29\u9650\u3092\u8A2D\u5B9A\u3057\u307E\u3059",`<div class="form-grid">
        ${st("username","\u30A2\u30AB\u30A6\u30F3\u30C8\u540D","text","","\u534A\u89D2\u82F1\u6570\u5B57\u30FB\u8A18\u53F7 3\uFF5E64 \u6587\u5B57",!0)}
        ${st("password","\u521D\u671F\u30D1\u30B9\u30EF\u30FC\u30C9","password","","12 \u6587\u5B57\u4EE5\u4E0A",!0)}
        ${Oi("siteId","\u6240\u5C5E\u5E97\u8217",`<option value="">\u5E97\u8217\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${qh()}`)}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${Yh()}</div>
      </div>`,"account");else if(i==="edit-account"){let t=Wo.find(n=>n.id===e);if(!t)throw new Error("not_found");xn("\u5E97\u8217\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u7DE8\u96C6",`${C(t.site_name)} \xB7 ${C(t.username)}`,`<input type="hidden" name="id" value="${C(t.id)}"><div class="form-grid">
        ${Oi("status","\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u72B6\u614B",`<option value="active" ${t.status==="active"?"selected":""}>\u6709\u52B9</option><option value="disabled" ${t.status==="disabled"?"selected":""}>\u7121\u52B9</option>`)}
        <div class="field full"><span class="field-label">\u5229\u7528\u6A29\u9650</span>${Yh(Mv(t.permissions))}</div>
      </div>`,"edit-account")}else if(i==="reset-account-password"){let t=Wo.find(n=>n.id===e);if(!t)throw new Error("not_found");xn("\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4",`${C(t.site_name)} \xB7 ${C(t.username)}`,`
        <input type="hidden" name="id" value="${C(t.id)}">
        <div class="form-grid">
          <label class="field"><span class="field-label">\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9</span><input name="password" type="password" autocomplete="new-password" minlength="12" maxlength="128" placeholder="12\uFF5E128 \u6587\u5B57" required></label>
          <label class="field"><span class="field-label">\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9\uFF08\u78BA\u8A8D\uFF09</span><input name="confirmPassword" type="password" autocomplete="new-password" minlength="12" maxlength="128" placeholder="\u3082\u3046\u4E00\u5EA6\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044" required></label>
          <p class="section-note field full">\u5909\u66F4\u524D\u306B\u30ED\u30B0\u30A4\u30F3\u6E08\u307F\u306E\u7AEF\u672B\u306F\u3001\u305D\u306E\u307E\u307E\u30ED\u30B0\u30A4\u30F3\u72B6\u614B\u304C\u7D9A\u304D\u307E\u3059\u3002</p>
        </div>`,"reset-account-password","\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4")}else if(i==="customer"||i==="edit-customer"){let t=i==="edit-customer"?ed.find(n=>n.id===e):void 0;if(i==="edit-customer"&&!t)throw new Error("not_found");xn(t?"\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u7DE8\u96C6":"\u304A\u5BA2\u69D8\u3092\u8FFD\u52A0","\u4E88\u7D04\u4F5C\u6210\u6642\u306B\u6C0F\u540D\u3084\u96FB\u8A71\u756A\u53F7\u304B\u3089\u691C\u7D22\u3067\u304D\u307E\u3059\u3002\u4F4F\u6240\u306A\u3069\u306F\u4EFB\u610F\u3067\u3059\u3002",`
          ${t?`<input type="hidden" name="id" value="${C(t.id)}">`:""}
          <div class="form-grid">
            ${st("name","\u6C0F\u540D","text",t?.name??"","\u6C0F\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
            ${st("nameKana","\u30D5\u30EA\u30AC\u30CA","text",t?.name_kana??"","\u30D5\u30EA\u30AC\u30CA\uFF08\u4EFB\u610F\uFF09")}
            ${st("phone","\u96FB\u8A71\u756A\u53F7","tel",t?.phone??"","\u96FB\u8A71\u756A\u53F7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",!0)}
            ${st("email","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","email",t?.email??"","\u4EFB\u610F")}
            ${st("birthDate","\u751F\u5E74\u6708\u65E5","date",Nr(t?.birth_date))}
            ${st("workplaceSchool","\u304A\u52E4\u3081\u5148\u30FB\u5B66\u6821","text",t?.workplace_school??"","\u4EFB\u610F")}
            ${st("address","\u4F4F\u6240","text",t?.address??"","\u4EFB\u610F",!1,"full")}
            <div class="field full"><span class="field-label">\u7DCA\u6025\u9023\u7D61\u5148\uFF08\u4EFB\u610F\uFF09</span></div>
            ${st("emergencyContactName","\u6C0F\u540D","text",t?.emergency_contact_name??"","\u4EFB\u610F")}
            ${st("emergencyContactRelationship","\u7D9A\u67C4","text",t?.emergency_contact_relationship??"","\u4EFB\u610F")}
            ${st("emergencyContactPhone","\u96FB\u8A71\u756A\u53F7","tel",t?.emergency_contact_phone??"","\u4EFB\u610F",!1,"full")}
          </div>`,t?"edit-customer":"customer")}else if(i==="employee-edit"){let t=Pc.find(n=>n.id===e);if(!t)throw new Error("not_found");xn("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7DE8\u96C6","\u8CB8\u51FA\u30FB\u8FD4\u5374\u306E\u8A18\u9332\u306B\u8868\u793A\u3059\u308B\u540D\u524D\u3092\u5909\u66F4\u3057\u307E\u3059",`
        <input type="hidden" name="id" value="${C(t.id)}">
        <input type="hidden" name="siteId" value="${C(t.site_id)}">
        ${st("name","\u30B9\u30BF\u30C3\u30D5\u540D","text",t.name,"\u6C0F\u540D\u3092\u5165\u529B",!0)}
      `,"employee-edit")}else if(i==="vehicle"){let t=Ke("parking:read")&&Ke("parking:write"),n=t?await Ae("/api/v1/parking/vehicle-catalog"):null,s=`<input type="hidden" name="siteId" value="${C(Ue.site.id)}">`;bn=[],qo=n?.damage_types??[],xn("\u8ECA\u4E21\u3092\u8FFD\u52A0","\u8ECA\u4E21\u60C5\u5831\u3068\u99D0\u8ECA\u5834\u60C5\u5831\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="vehicle-create-content">
        <div class="vehicle-registration-field">
          ${st("registrationNumber","\u30CA\u30F3\u30D0\u30FC","text","","\u4F8B: \u54C1\u5DDD 500 \u3042 1234",!0)}
        </div>
        ${s}
        ${t?"":hd()}
        ${t?"<div data-vehicle-parking-fields></div>":""}
      </div>`,"vehicle");let r=Ve("[data-vehicle-parking-fields]");r&&n&&Fr(r,n)}else if(i==="edit-vehicle"){let t=Lc.find(s=>s.id===e);if(!t)throw new Error("not_found");Ue.site.type==="headquarters"&&await Fc();let n=Ue.site.type==="headquarters"?Oi("siteId","\u6240\u5C5E\u5E97\u8217",qh(t.site_id,!0)):`<input type="hidden" name="siteId" value="${C(Ue.site.id)}">`;xn("\u8ECA\u4E21\u60C5\u5831\u3092\u7DE8\u96C6",`${C(t.registration_number)} \xB7 \u56FA\u5B9A\u8ECA\u4E21ID\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093`,`<input type="hidden" name="id" value="${C(t.id)}"><div class="form-grid">
        ${st("registrationNumber","\u30CA\u30F3\u30D0\u30FC\u30D7\u30EC\u30FC\u30C8","text",t.registration_number,"",!0)}
        ${st("vin","\u8ECA\u53F0\u756A\u53F7","text",t.vin??"")}
        ${st("make","\u30E1\u30FC\u30AB\u30FC","text",t.make)}
        ${st("model","\u8ECA\u7A2E","text",t.model)}
        ${st("modelYear","\u5E74\u5F0F","number",String(t.model_year??""))}
        ${st("inspectionExpiryDate","\u8ECA\u691C\u6E80\u4E86\u65E5","date",Nr(t.inspection_expiry_date))}
        ${st("statutoryInspectionDate","\u6CD5\u5B9A\u70B9\u691C\u65E5","date",Nr(t.statutory_inspection_date))}
        ${n}
        ${Oi("status","\u8ECA\u4E21\u306E\u72B6\u614B",["available","rented","maintenance","retired"].map(s=>`<option value="${s}" ${t.status===s?"selected":""}>${zr(s)}</option>`).join(""))}
      </div>`,"edit-vehicle")}else if(i==="reservation"){let t=new Date(Date.now()+18e5),n=new Date(t.getTime()+1440*6e4),s=o=>new Date(o.getTime()-o.getTimezoneOffset()*6e4).toISOString().slice(0,16),r=await Ae("/api/v1/reservations/vehicle-catalog"),a=Ue.site.type==="headquarters"?`<input type="hidden" name="siteId" value="${C(Ue.site.id)}">`:"";xn("\u4E88\u7D04\u3092\u4F5C\u6210","\u304A\u5BA2\u69D8\u3068\u5229\u7528\u671F\u9593\u3092\u767B\u9332\u3057\u307E\u3059",`<div class="form-grid">
        <input type="hidden" name="customerId">
        <label class="field"><span class="field-label">\u304A\u5BA2\u69D8\u306E\u6C0F\u540D</span><input name="guestName" type="text" placeholder="\u6C0F\u540D\u30FB\u30D5\u30EA\u30AC\u30CA\u3067\u691C\u7D22" data-customer-search required></label>
        <label class="field"><span class="field-label">\u96FB\u8A71\u756A\u53F7</span><input name="guestPhone" type="tel" placeholder="\u96FB\u8A71\u756A\u53F7\u3067\u691C\u7D22" data-customer-search required></label>
        <div class="customer-suggestions field full" data-customer-suggestions aria-live="polite"></div>
        ${st("startAt","\u8CB8\u51FA\u4E88\u5B9A\u65E5\u6642","datetime-local",s(t),"",!0)}
        ${st("endAt","\u8FD4\u5374\u4E88\u5B9A\u65E5\u6642","datetime-local",s(n),"",!0)}
        ${a}
        ${Oi("vehicleClass","\u5E0C\u671B\u30AF\u30E9\u30B9",`<option value="">\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option>${r.classes.map(o=>`<option value="${C(o.name)}">${C(o.name)}</option>`).join("")}`)}
        <fieldset class="reservation-options field full"><legend class="field-label">\u8ECA\u4E21\u306E\u5E0C\u671B\u6761\u4EF6\uFF08\u4EFB\u610F\uFF09</legend>
          ${r.options.map(o=>`<label class="check-item"><input type="checkbox" name="reservationOptions" value="${C(o.name)}" data-reservation-filter><span>${C(o.name)}</span></label>`).join("")||'<span class="secondary">\u9078\u629E\u3067\u304D\u308B\u6761\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093</span>'}
        </fieldset>
        <fieldset class="available-vehicles field full"><legend class="field-label">\u7A7A\u304D\u8ECA\u4E21</legend>
          <div data-available-vehicles role="status" aria-live="polite">\u5229\u7528\u65E5\u6642\u3001\u5E0C\u671B\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3059\u308B\u3068\u7A7A\u304D\u8ECA\u4E21\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002</div>
        </fieldset>
      </div>`,"reservation","\u4E88\u7D04\u3092\u4FDD\u5B58")}else if(i==="parking-lot-layout"){let t=xt?.parking_lots.find(n=>String(n.id)===e);if(!t)throw new Error("not_found");xn("\u99D0\u8ECA\u30A8\u30EA\u30A2\u306E\u30EC\u30A4\u30A2\u30A6\u30C8",`${C(t.name)} \xB7 \u56F3\u9762\u30B5\u30A4\u30BA\u3001\u53CE\u5BB9\u53F0\u6570\u3001\u512A\u5148\u30AF\u30E9\u30B9\u3092\u8A2D\u5B9A`,`
        <input type="hidden" name="id" value="${C(t.id)}"><div class="form-grid">
          ${st("name","\u30A8\u30EA\u30A2\u540D","text",t.name,"",!0)}
          ${st("area_height","\u56F3\u9762\u306E\u9AD8\u3055\uFF08px\uFF09","number",String(t.area_height),"160\uFF5E600",!0)}
          ${st("area_width","\u30A8\u30EA\u30A2\u306E\u5E45\uFF08%\uFF09","number",String(t.area_width),"30\uFF5E100",!0)}
          ${st("capacity","\u53CE\u5BB9\u53F0\u6570\uFF08\u7121\u5236\u9650\u306F\u7A7A\u6B04\uFF09","number",t.capacity===null?"":String(t.capacity),"0\uFF5E1000")}
          ${st("navigation_url","Google Maps \u6848\u5185URL","url",t.navigation_url,"https://maps.google.com/\u2026",!1,"full")}
          ${st("class_priority","\u512A\u5148\u8ECA\u4E21\u30AF\u30E9\u30B9\uFF08\u4E0A\u4F4D\u304B\u3089\u30AB\u30F3\u30DE\u533A\u5207\u308A\uFF09","text",t.class_priority.join(", "),"",!1,"full")}
          <label class="field"><span class="field-label">\u7A3C\u50CD\u72B6\u614B</span><select name="is_active"><option value="true" ${t.is_active?"selected":""}>\u904B\u7528\u4E2D</option><option value="false" ${t.is_active?"":"selected"}>\u505C\u6B62\u4E2D</option></select></label>
        </div>`,"parking-lot-layout","\u30EC\u30A4\u30A2\u30A6\u30C8\u3092\u4FDD\u5B58")}}catch(t){Je(ot(t.message),!0)}}async function Fc(){Gt.length||(Gt=(await Ae("/api/v1/sites")).items)}function Bi(i,e){return[...i.querySelectorAll(`input[name="${e}"]:checked`)].map(t=>t.value)}async function pd(i){let e=i.closest('form[data-form="reservation"]'),t=Ve("[data-customer-suggestions]",e??document);if(!e||!t)return;let n=i.value.trim(),s=++Tv;e.dataset.customerRequestId=String(s);let r=Ve('[name="customerId"]',e);if(r&&(r.value=""),!n){Tc=[],bt(t,"");return}bt(t,'<span class="secondary">\u304A\u5BA2\u69D8\u60C5\u5831\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026</span>');try{let a=await Ae(`/api/v1/customers?${new URLSearchParams({search:n,limit:"8"})}`);if(!document.body.contains(e)||i.value.trim()!==n||e.dataset.customerRequestId!==String(s))return;Tc=a.items,bt(t,a.items.length?`<span class="field-label">\u767B\u9332\u6E08\u307F\u306E\u304A\u5BA2\u69D8</span><div class="customer-suggestion-list">${a.items.map(o=>`<button type="button" class="customer-suggestion" data-action="customer-select" data-id="${C(o.id)}">
          <strong>${C(o.name)}</strong>${o.name_kana?`<span>${C(o.name_kana)}</span>`:""}
          <small>${C(o.phone)}</small></button>`).join("")}</div>`:'<span class="secondary">\u8A72\u5F53\u3059\u308B\u304A\u5BA2\u69D8\u306F\u3044\u307E\u305B\u3093\u3002\u4E88\u7D04\u4FDD\u5B58\u6642\u306B\u6C0F\u540D\u3068\u96FB\u8A71\u756A\u53F7\u3067\u65B0\u898F\u767B\u9332\u3057\u307E\u3059\u3002</span>')}catch(a){if(!document.body.contains(e)||e.dataset.customerRequestId!==String(s))return;bt(t,`<span class="field-error">${C(ot(a.message))}</span>`),Je(ot(a.message),!0)}}async function Jh(i){let e=Ve("[data-available-vehicles]",i);if(!e)return;let t=++Av;i.dataset.vehicleRequestId=String(t);let n=Ve('[name="vehicleId"]:checked',i)?.value??"",s=new FormData(i),r=String(s.get("vehicleClass")??"").trim(),a=new Date(String(s.get("startAt")??"")),o=new Date(String(s.get("endAt")??""));if(!r||!Number.isFinite(a.getTime())||!Number.isFinite(o.getTime())||a>=o){bt(e,"\u5229\u7528\u65E5\u6642\u3001\u5E0C\u671B\u30AF\u30E9\u30B9\u3092\u9078\u629E\u3059\u308B\u3068\u7A7A\u304D\u8ECA\u4E21\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002");return}bt(e,'<span class="secondary">\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059\u2026</span>');let l=new URLSearchParams({startAt:a.toISOString(),endAt:o.toISOString(),vehicleClass:r});Bi(i,"reservationOptions").forEach(c=>l.append("options",c));try{let c=await Ae(`/api/v1/reservations/available-vehicles?${l}`);if(!document.body.contains(i)||i.dataset.vehicleRequestId!==String(t))return;bt(e,c.items.length?`<div class="available-vehicle-list">${c.items.map(u=>`<label class="available-vehicle">
          <input type="radio" name="vehicleId" value="${C(u.id)}" required ${u.id===n?"checked":""}>
          <span><strong>${C(u.registration_number)} \xB7 ${C(u.vehicle_class)}</strong>
          <small>${C([u.make,u.model].filter(Boolean).join(" "))} \xB7 ${C(u.parking_lot_name??"\u672A\u914D\u7F6E")}</small></span>
        </label>`).join("")}</div>`:'<span class="secondary">\u6761\u4EF6\u306B\u5408\u3046\u7A7A\u304D\u8ECA\u4E21\u306F\u3042\u308A\u307E\u305B\u3093\u3002</span>')}catch(c){if(!document.body.contains(i)||i.dataset.vehicleRequestId!==String(t))return;bt(e,`<span class="field-error">${C(ot(c.message))}</span>`),Je(ot(c.message),!0)}}function di(){un?.dispose(),un=null,Dc=null,Ve(".parking-inspection-overlay")?.remove()}function Uv(i){let e=xt,t=e?.vehicles.find(r=>r.id===i);if(!e||!t||!e.damage_types.length)return;di();let n=document.createElement("div");n.className="parking-inspection-overlay",bt(n,`<section class="parking-inspection-dialog" role="dialog" aria-modal="true">
    <header><div><h2>3D\u8ECA\u4E21\u691C\u67FB</h2><p>${C(t.plate)} \xB7 \u30C9\u30E9\u30C3\u30B0\u3067360\xB0\u56DE\u8EE2\u3002\u7A2E\u985E\u3092\u9078\u3093\u3067\u8ECA\u4F53\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u8A18\u9332\u3001\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u524A\u9664\u3057\u307E\u3059\u3002</p></div>
      <button class="btn btn-sm" type="button" data-action="parking-inspect3d-close">\u9589\u3058\u308B</button></header>
    <div class="parking-inspection-palette">${e.damage_types.map(r=>`<button type="button" data-damage-type="${C(r.id)}" style="--damage-color:${C(r.color)}">${C(r.icon)} ${C(r.name)}</button>`).join("")}</div>
    <div class="parking-inspection-view"></div>
  </section>`),Ot.append(n),Dc=i,un=Sc(Ve(".parking-inspection-view",n),e.damage_types,cn.get(i)??t.inspection_marks,r=>cn.set(i,r),Ve(".parking-inspection-palette",n));let s=Ve(".parking-inspection-canvas",n);s&&s.setAttribute("aria-label",Ts("3D\u8ECA\u4E21\u3092\u56DE\u8EE2\u3057\u640D\u50B7\u7B87\u6240\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8A18\u9332",pi())),n.addEventListener("click",r=>{r.target===n&&di()})}function Fv(i){let e=i.target.closest("[data-parking-drag]");if(!e||!Ke("parking:write")||!xt||i.button!==0||Et)return;let t=Number(e.dataset.parkingDrag),n=e.closest(".parking-map-vehicle"),s=xt.vehicles.find(a=>a.id===t);if(!n||!s)return;i.preventDefault();let r=e.cloneNode(!0);r.className="parking-drag-ghost",r.style.left=`${i.clientX}px`,r.style.top=`${i.clientY}px`,document.body.append(r),Et={vehicleId:t,pointerId:i.pointerId,source:n,ghost:r,clientX:i.clientX,clientY:i.clientY,startX:i.clientX,startY:i.clientY,moved:!1,frame:0},e.setPointerCapture(i.pointerId),Et.frame=requestAnimationFrame(md)}function kv(i){let e=i.target.closest("[data-parking-resize]");if(!e||!Ke("parking:admin")||!xt||i.button!==0||Pt)return;let t=Number(e.dataset.parkingResize),n=xt.parking_lots.find(l=>l.id===t),s=e.closest(".parking-lot"),r=Ve("[data-parking-map]",s??document),a=Ve(".parking-grid");if(!n||!s||!r||!a)return;let o=a.getBoundingClientRect().width;o&&(i.preventDefault(),i.stopPropagation(),Pt={pointerId:i.pointerId,lotId:t,card:s,map:r,handle:e,startX:i.clientX,startY:i.clientY,width:n.area_width,height:n.area_height,gridWidth:o,nextWidth:n.area_width,nextHeight:n.area_height},e.setPointerCapture(i.pointerId),s.classList.add("parking-lot-resizing"))}function Ov(i){if(!Pt||i.pointerId!==Pt.pointerId)return;let e=Math.max(30,Math.min(100,Math.round(Pt.width+(i.clientX-Pt.startX)/Pt.gridWidth*100))),t=Math.max(160,Math.min(600,Math.round(Pt.height+i.clientY-Pt.startY)));Pt.nextWidth=e,Pt.nextHeight=t,Pt.card.style.setProperty("--parking-lot-width",`${e}%`),Pt.map.style.height=`${t}px`}async function Zh(i,e=!1){if(!Pt||i.pointerId!==Pt.pointerId)return;let t=Pt;Pt=null,t.card.classList.remove("parking-lot-resizing");let n=xt?.parking_lots.find(s=>s.id===t.lotId);if(e||!n){t.card.style.setProperty("--parking-lot-width",`${t.width}%`),t.map.style.height=`${t.height}px`;return}if(!(t.nextWidth===t.width&&t.nextHeight===t.height))try{await Ae(`/api/v1/parking/lots/${t.lotId}`,{method:"PATCH",body:JSON.stringify({area_width:t.nextWidth,area_height:t.nextHeight})}),await kt()}catch(s){Je(ot(s.message),!0),t.card.style.setProperty("--parking-lot-width",`${t.width}%`),t.map.style.height=`${t.height}px`}}function md(){if(!Et||(Et.frame=requestAnimationFrame(md),!Et.moved))return;let i=Math.min(90,window.innerHeight*.14),e=Et.clientY,t=e<i?-Math.ceil(18*(1-e/i)):e>window.innerHeight-i?Math.ceil(18*(1-(window.innerHeight-e)/i)):0;t&&window.scrollBy(0,t)}function Bv(i){!Et||i.pointerId!==Et.pointerId||(Et.clientX=i.clientX,Et.clientY=i.clientY,Math.abs(i.clientX-Et.startX)+Math.abs(i.clientY-Et.startY)>5&&(Et.moved=!0),Et.moved&&(Et.ghost.style.left=`${i.clientX}px`,Et.ghost.style.top=`${i.clientY}px`,document.querySelectorAll(".parking-map.drop-target").forEach(e=>e.classList.remove("drop-target")),document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]")?.classList.add("drop-target")))}function kc(i,e,t){let n=i.getBoundingClientRect();return{x:Math.max(0,Math.min(1,(e-n.left)/n.width)),y:Math.max(0,Math.min(1,(t-n.top)/n.height))}}function zv(i){let e=i.target.closest("svg[data-marking-svg].editable");if(!e||!Ke("parking:admin")||Cs!==Number(e.dataset.lotId)||i.button!==0||!xt)return;let t=kc(e,i.clientX,i.clientY);i.preventDefault(),tn={pointerId:i.pointerId,lotId:Number(e.dataset.lotId),x1:t.x,y1:t.y,svg:e},e.setPointerCapture(i.pointerId);let n=document.createElementNS("http://www.w3.org/2000/svg","line");n.classList.add("parking-marking-preview"),n.dataset.draftMarking="true",n.setAttribute("x1",String(t.x*1e3)),n.setAttribute("y1",String(t.y*1e3)),n.setAttribute("x2",String(t.x*1e3)),n.setAttribute("y2",String(t.y*1e3)),n.setAttribute("stroke",Or),n.setAttribute("stroke-width","7"),n.setAttribute("stroke-linecap","round"),e.append(n)}function Hv(i){if(!tn||tn.pointerId!==i.pointerId)return;let e=kc(tn.svg,i.clientX,i.clientY),t=tn.svg.querySelector('[data-draft-marking="true"]');t?.setAttribute("x2",String(e.x*1e3)),t?.setAttribute("y2",String(e.y*1e3))}async function Vv(i){if(!tn||tn.pointerId!==i.pointerId)return;let e=tn;tn=null,e.svg.querySelector('[data-draft-marking="true"]')?.remove();let n=kc(e.svg,i.clientX,i.clientY);if(Math.hypot(n.x-e.x1,n.y-e.y1)<.005)return;let s=xt?.parking_lots.find(a=>a.id===e.lotId);if(!s)return;let r={id:crypto.randomUUID(),x1:e.x1,y1:e.y1,x2:n.x,y2:n.y,color:Or};try{await Ae(`/api/v1/parking/lots/${s.id}`,{method:"PATCH",body:JSON.stringify({markings:[...s.markings,r]})}),await kt()}catch(a){Je(ot(a.message),!0)}}function Gv(i){!tn||tn.pointerId!==i.pointerId||(tn.svg.querySelector('[data-draft-marking="true"]')?.remove(),tn=null)}async function Kh(i){if(!Et||i.pointerId!==Et.pointerId)return;let e=Et;if(Et=null,cancelAnimationFrame(e.frame),e.ghost.remove(),document.querySelectorAll(".parking-map.drop-target").forEach(c=>c.classList.remove("drop-target")),!e.moved)return;let t=document.elementFromPoint(i.clientX,i.clientY)?.closest("[data-parking-map]"),n=xt?.vehicles.find(c=>c.id===e.vehicleId);if(!t||!n)return;let s=t.getBoundingClientRect(),r=t.dataset.lotId?Number(t.dataset.lotId):null,a=r===null?n.position_x:Math.max(0,Math.min(1,(i.clientX-s.left)/s.width)),o=r===null?n.position_y:Math.max(0,Math.min(1,(i.clientY-s.top)/s.height)),l={vehicleId:n.id,lotId:n.parking_lot_id,x:n.position_x,y:n.position_y};try{await Ae(`/api/v1/parking/vehicles/${n.id}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:r,position_x:a,position_y:o})}),Dr.push(l),await kt()}catch(c){Je(ot(c.message),!0)}}async function $v(i){let e=i.target.closest("form[data-form]");if(!e)return;i.preventDefault();let t=e.dataset.form,n=new FormData(e),s=a=>String(n.get(a)??"").trim(),r=Ve('button[type="submit"]',e);r&&r.setAttribute("disabled","true");try{if(t==="site")await Ae("/api/v1/sites",{method:"POST",body:JSON.stringify({code:s("code"),name:s("name"),type:s("type")})});else if(t==="account")await Ae("/api/v1/accounts",{method:"POST",body:JSON.stringify({siteId:s("siteId"),username:s("username"),password:s("password"),permissions:Bi(e,"permissions")})});else if(t==="edit-account"){let a={status:s("status"),permissions:Bi(e,"permissions")};await Ae(`/api/v1/accounts/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify(a)})}else if(t==="reset-account-password"){let a=String(n.get("password")??""),o=String(n.get("confirmPassword")??"");if(a.length<12||a.length>128||a!==o)throw new Error("password_mismatch");await Ae(`/api/v1/accounts/${encodeURIComponent(s("id"))}/password`,{method:"PATCH",body:JSON.stringify({password:a})})}else if(t==="employee"){await Ae("/api/v1/employees",{method:"POST",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId"),o=kr;kr=null,Wt(),Je("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u8FFD\u52A0\u3057\u307E\u3057\u305F\u3002"),o?await cd(o.reservation,o.status):await Ur(a);return}else if(t==="employee-edit"){await Ae(`/api/v1/employees/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({siteId:s("siteId"),name:s("name")})});let a=s("siteId");Wt(),Je("\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await Ur(a);return}else if(t==="customer"||t==="edit-customer"){let a={name:s("name"),nameKana:s("nameKana")||null,phone:s("phone"),email:s("email")||null,birthDate:s("birthDate")||null,address:s("address")||null,emergencyContactName:s("emergencyContactName")||null,emergencyContactRelationship:s("emergencyContactRelationship")||null,emergencyContactPhone:s("emergencyContactPhone")||null,workplaceSchool:s("workplaceSchool")||null};await Ae(t==="customer"?"/api/v1/customers":`/api/v1/customers/${encodeURIComponent(s("id"))}`,{method:t==="customer"?"POST":"PATCH",body:JSON.stringify(a)})}else if(t==="reservation-transition")await Ae(`/api/v1/reservations/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({status:s("status"),employeeId:s("employeeId")})});else if(t==="vehicle"){let a={registrationNumber:s("registrationNumber"),inspectionExpiryDate:s("inspectionExpiryDate")||null,statutoryInspectionDate:s("statutoryInspectionDate")||null,siteId:s("siteId")};Ke("parking:read")&&Ke("parking:write")&&(a.parkingClass=s("parkingClass"),a.parkingOptions=Bi(e,"parkingOptions"),a.parkingNotes=s("parkingNotes").trim(),a.parkingLotId=s("parkingLotId")?Number(s("parkingLotId")):null,a.parkingStatusIds=Bi(e,"parkingStatusIds").map(Number),a.parkingUnwashed=!!n.get("parkingUnwashed"),a.parkingNoFuel=!!n.get("parkingNoFuel"),a.parkingNeedsRepair=!!n.get("parkingNeedsRepair"),a.parkingAssessmentValues=Object.fromEntries([...e.querySelectorAll("[data-assessment-id]")].map(o=>[o.dataset.assessmentId,o instanceof HTMLInputElement&&o.type==="checkbox"?o.checked:o.value])),a.parkingInspectionMarks=bn.map(o=>({id:o.id,damage_type_id:o.damage_type_id,x:o.x,y:o.y,...typeof o.world_x=="number"&&typeof o.world_y=="number"&&typeof o.world_z=="number"?{world_x:o.world_x,world_y:o.world_y,world_z:o.world_z}:{},...typeof o.world_nx=="number"&&typeof o.world_ny=="number"&&typeof o.world_nz=="number"?{world_nx:o.world_nx,world_ny:o.world_ny,world_nz:o.world_nz}:{}}))),await Ae("/api/v1/vehicles",{method:"POST",body:JSON.stringify(a)})}else if(t==="edit-vehicle")await Ae(`/api/v1/vehicles/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({registrationNumber:s("registrationNumber"),vin:s("vin")||null,make:s("make"),model:s("model"),modelYear:s("modelYear")?Number(s("modelYear")):null,inspectionExpiryDate:s("inspectionExpiryDate")||null,statutoryInspectionDate:s("statutoryInspectionDate")||null,siteId:s("siteId"),status:s("status")})});else if(t==="reservation"){let a=new Date(s("startAt")),o=new Date(s("endAt"));if(!Number.isFinite(a.getTime())||!Number.isFinite(o.getTime())||a>=o)throw new Error("\u8CB8\u51FA\u65E5\u6642\u3068\u8FD4\u5374\u65E5\u6642\u3092\u6B63\u3057\u304F\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");let l={guestName:s("guestName"),guestPhone:s("guestPhone"),startAt:a.toISOString(),endAt:o.toISOString(),vehicleId:s("vehicleId")};s("customerId")&&(l.customerId=s("customerId")),Ue.site.type==="headquarters"&&(l.siteId=s("siteId")),await Ae("/api/v1/reservations",{method:"POST",body:JSON.stringify(l)})}else if(t==="parking-vehicle"){let a=Number(s("position_x")),o=Number(s("position_y"));if(!Number.isFinite(a)||!Number.isFinite(o)||a<0||a>1||o<0||o>1)throw new Error("invalid_request");await Ae(`/api/v1/parking/vehicles/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:s("parking_lot_id")?Number(s("parking_lot_id")):null,position_x:a,position_y:o,status_ids:Bi(e,"status_ids").map(Number),unwashed:!!n.get("unwashed"),no_fuel:!!n.get("no_fuel"),needs_repair:!!n.get("needs_repair"),options:Bi(e,"options"),notes:s("notes")||null,assessment_values:Object.fromEntries([...e.querySelectorAll("[data-assessment-id]")].map(l=>[l.dataset.assessmentId,l instanceof HTMLInputElement&&l.type==="checkbox"?l.checked:l.value])),inspection_marks:(cn.get(Number(e.dataset.id))??[]).map(l=>({id:l.id,damage_type_id:l.damage_type_id,x:l.x,y:l.y,...typeof l.world_x=="number"&&typeof l.world_y=="number"&&typeof l.world_z=="number"?{world_x:l.world_x,world_y:l.world_y,world_z:l.world_z}:{},...typeof l.world_nx=="number"&&typeof l.world_ny=="number"&&typeof l.world_nz=="number"?{world_nx:l.world_nx,world_ny:l.world_ny,world_nz:l.world_nz}:{}}))})}),cn.delete(Number(e.dataset.id))}else if(t==="parking-job")await Ae("/api/v1/parking/jobs",{method:"POST",body:JSON.stringify({vehicle_id:Number(s("vehicle_id")),destination_lot_id:Number(s("destination_lot_id")),scheduled_at:s("scheduled_at")})});else if(t==="parking-lot")await Ae("/api/v1/parking/lots",{method:"POST",body:JSON.stringify({name:s("name"),navigation_url:s("navigation_url")})});else if(t==="parking-lot-layout"){let a=Number(s("area_height")),o=Number(s("area_width")),l=s("capacity")?Number(s("capacity")):null;if(!Number.isInteger(a)||a<160||a>600||!Number.isInteger(o)||o<30||o>100||l!==null&&(!Number.isInteger(l)||l<0||l>1e3))throw new Error("invalid_request");await Ae(`/api/v1/parking/lots/${encodeURIComponent(s("id"))}`,{method:"PATCH",body:JSON.stringify({name:s("name"),area_height:a,area_width:o,capacity:l,navigation_url:s("navigation_url"),class_priority:s("class_priority").split(",").map(c=>c.trim()).filter(Boolean),is_active:s("is_active")==="true"})})}else if(t==="parking-class")await Ae("/api/v1/parking/classes",{method:"POST",body:JSON.stringify({name:s("name"),color:s("color")})});else if(t==="parking-status")await Ae("/api/v1/parking/statuses",{method:"POST",body:JSON.stringify({name:s("name"),icon:s("icon")||void 0})});else if(t==="parking-status-edit")await Ae(`/api/v1/parking/statuses/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({name:s("name"),icon:s("icon")})});else if(t==="parking-option")await Ae("/api/v1/parking/options",{method:"POST",body:JSON.stringify({name:s("name")})});else if(t==="parking-option-edit")await Ae(`/api/v1/parking/options/${encodeURIComponent(e.dataset.id)}`,{method:"PATCH",body:JSON.stringify({name:s("name")})});else if(t==="parking-store")await Ae("/api/v1/parking/stores",{method:"POST",body:JSON.stringify({name:s("name")})});else if(t==="lot-distance"||t==="store-distance"){let a=s("minutes")===""?null:Number(s("minutes")),o=s("km")===""?null:Number(s("km"));if(a!==null&&!Number.isFinite(a)||o!==null&&!Number.isFinite(o))throw new Error("invalid_request");let l=t==="lot-distance"?{from_lot_id:Number(s("from_lot_id")),to_lot_id:Number(s("to_lot_id")),minutes:a,km:o}:{store_id:Number(s("store_id")),lot_id:Number(s("lot_id")),minutes:a,km:o};await Ae(`/api/v1/parking/${t==="lot-distance"?"lot-distances":"store-distances"}`,{method:"PUT",body:JSON.stringify({entries:[l]})})}else if(t==="parking-assessment"){let a={name:s("name"),field_type:s("field_type"),suffix:s("suffix")};await Ae(`/api/v1/parking/assessment-fields${e.dataset.id?`/${encodeURIComponent(e.dataset.id)}`:""}`,{method:e.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}else if(t==="parking-damage"){let a={name:s("name"),icon:s("icon"),color:s("color")};await Ae(`/api/v1/parking/damage-types${e.dataset.id?`/${encodeURIComponent(e.dataset.id)}`:""}`,{method:e.dataset.id?"PATCH":"POST",body:JSON.stringify(a)})}Wt(),Je("\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002"),t==="site"&&(Gt=[]),await In()}catch(a){Je(ot(a.message),!0),r&&r.removeAttribute("disabled")}}async function Wv(i){let e=i.target.closest('[data-action="vehicle-catalog-retry"]');if(e){let o=e.closest("form"),l=o?.querySelector("[data-vehicle-site]"),c=l?.value||o?.querySelector('[name="siteId"]')?.value,u=o?.querySelector("[data-vehicle-parking-fields]");c&&u&&await dd(u,c,l??void 0);return}let t=i.target.closest('[data-action="vehicle-rating"]');if(t){i.preventDefault();let o=t.closest(".assessment-field"),l=o?.querySelector(`input[data-assessment-id="${t.dataset.ratingAssessmentId}"]`);if(!o||!l)return;l.value=t.dataset.score??"",o.querySelectorAll('[data-action="vehicle-rating"]').forEach(c=>{c.setAttribute("aria-pressed",String(c===t))});return}let n=i.target.closest('[data-action="vehicle-damage-remove"]');if(n){i.preventDefault(),bn=bn.filter(l=>l.id!==n.dataset.markId),un?.setMarks(bn);let o=n.closest("[data-vehicle-parking-fields]");o&&fd(bn,qo,o);return}let s=i.target.closest('[data-action="parking-damage-remove"]');if(s){i.preventDefault();let o=Number(s.dataset.vehicleId),l=s.dataset.markId;cn.set(o,(cn.get(o)??[]).filter(c=>c.id!==l)),Dc===o&&un?.setMarks(cn.get(o)??[]),s.remove();return}let r=i.target.closest("[data-damage-map]");if(r){i.preventDefault();let o=r.closest('form[data-form="parking-vehicle"]'),l=Ve('[name="damage_type_id"]',o??document);if(!o||!l?.value)return;let c=r.getBoundingClientRect();if(!c.width||!c.height)return;let u=Number(r.dataset.id),h={id:crypto.randomUUID(),damage_type_id:Number(l.value),x:Math.max(0,Math.min(1,(i.clientX-c.left)/c.width)),y:Math.max(0,Math.min(1,(i.clientY-c.top)/c.height))},d=[...cn.get(u)??[],h];cn.set(u,d);let f=document.createElement("button");f.type="button",f.className="damage-marker",f.dataset.action="parking-damage-remove",f.dataset.vehicleId=String(u),f.dataset.markId=h.id,f.style.left=`${h.x*100}%`,f.style.top=`${h.y*100}%`,f.style.background=l.selectedOptions[0]?.dataset.color??"#e34b4b",f.textContent="\xD7",r.append(f);return}let a=i.target.closest("[data-page],[data-action],[data-modal],[data-language]");if(a){if(a.dataset.language==="ja"||a.dataset.language==="zh")await Cv(a.dataset.language);else if(a.dataset.action==="customer-select"){let o=Tc.find(f=>f.id===a.dataset.id),l=a.closest('form[data-form="reservation"]');if(!o||!l)return;let c=Ve('[name="customerId"]',l),u=Ve('[name="guestName"]',l),h=Ve('[name="guestPhone"]',l),d=Ve("[data-customer-suggestions]",l);c&&(c.value=o.id),u&&(u.value=o.name),h&&(h.value=o.phone),d&&bt(d,`<span class="customer-selected"><strong>${C(o.name)}</strong> \xB7 ${C(o.phone)}
        <button type="button" class="btn btn-sm btn-quiet" data-action="customer-clear-selection">\u9078\u629E\u89E3\u9664</button></span>`)}else if(a.dataset.action==="customer-clear-selection"){let o=a.closest('form[data-form="reservation"]'),l=o&&Ve('[name="customerId"]',o);l&&(l.value="");let c=o&&Ve('[name="guestName"]',o);c&&pd(c)}else if(a.dataset.page){i.preventDefault(),di();let o=a.dataset.page;if(!Is.includes(o)||!Yo().some(l=>l.page===o))return;o!==ut&&history.pushState(null,"",oi(o)),ut=o,localStorage.setItem(Rs,ut),en=0,hn="",hi="",Lr=!1,Zo(),await In()}else if(a.dataset.modal)await Ir(a.dataset.modal);else if(a.dataset.action==="close-modal")Wt();else if(a.dataset.action==="logout"){di(),Uc();try{if(!(await fetch("/api/v1/auth/logout",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error")}catch{Je(ot("internal_error"),!0);return}pt="",Ue=null,ki(localStorage),Ps()}else if(a.dataset.action==="switch-site"){a.setAttribute("disabled","true");try{await Iv(a.dataset.id)}catch(o){Je(ot(o.message),!0),a.removeAttribute("disabled")}}else if(a.dataset.action==="return-admin")try{await Pv()}catch(o){Je(ot(o.message),!0)}else if(a.dataset.action==="parking-location-manager")Dv();else if(a.dataset.action==="parking-settings")Nv();else if(a.dataset.action==="parking-class-filter"){ci=a.dataset.class??"all";let o=Ve("#parking-catalog-content");o&&xt&&(bt(o,Nc(xt)),o.replaceWith(o.firstElementChild))}else if(a.dataset.action==="parking-status-filter"){zi=a.dataset.statusId??"all";let o=Ve("#parking-status-content");o&&xt&&(bt(o,od(xt)),o.replaceWith(o.firstElementChild))}else if(a.dataset.action==="parking-focus-vehicle"){let o=Ve(`.parking-map-vehicle[data-vehicle-id="${CSS.escape(a.dataset.id??"")}"]`);o?.scrollIntoView({behavior:"smooth",block:"center"}),Ve("[data-parking-drag]",o??document)?.focus({preventScroll:!0}),o?.classList.add("parking-vehicle-highlight"),window.setTimeout(()=>o?.classList.remove("parking-vehicle-highlight"),1700)}else if(a.dataset.action==="employee-roster"){if(fi==="reservation-transition"){let o=Ve('form[data-form="reservation-transition"]'),l=$o.find(h=>h.id===Ve('[name="id"]',o??document)?.value),c=Ve('[name="status"]',o??document)?.value,u=null;l&&c==="checked_in"?u={reservation:l,status:"checked_in"}:l&&c==="completed"&&(u={reservation:l,status:"completed"}),Wt(),kr=u,await Ur(a.dataset.siteId??Ue.site.id);return}else fi&&Wt();await Ur(a.dataset.siteId??Ue.site.id)}else if(a.dataset.action==="employee-edit")Wt(),await Ir("employee-edit",a.dataset.id);else if(a.dataset.action==="reset-account-password")await Ir("reset-account-password",a.dataset.id);else if(a.dataset.action==="employee-toggle"){let o=Qh;Wt();try{await Ae(`/api/v1/employees/${encodeURIComponent(a.dataset.id)}`,{method:"PATCH",body:JSON.stringify({siteId:o,status:a.dataset.status})}),Je(a.dataset.status==="active"?"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u518D\u958B\u3057\u307E\u3057\u305F\u3002":"\u30B9\u30BF\u30C3\u30D5\u540D\u3092\u7121\u52B9\u306B\u3057\u307E\u3057\u305F\u3002"),await Ur(o)}catch(l){Je(ot(l.message),!0)}}else if(a.dataset.action==="parking-inspect3d")Uv(Number(a.dataset.id));else if(a.dataset.action==="parking-inspect3d-close")di();else if(a.dataset.action==="parking-move-undo"){let o=Dr[Dr.length-1];if(!o)return;try{await Ae(`/api/v1/parking/vehicles/${o.vehicleId}`,{method:"PATCH",body:JSON.stringify({parking_lot_id:o.lotId,position_x:o.x,position_y:o.y})}),Dr.pop(),await kt()}catch(l){Je(ot(l.message),!0)}}else if(a.dataset.action==="parking-lot-settings")await Ir("parking-lot-layout",a.dataset.id);else if(a.dataset.action==="parking-lot-resize"){let o=Number(a.dataset.id);Xo=Xo===o?null:o,await kt()}else if(a.dataset.action==="parking-marking-toggle"){let o=Number(a.dataset.id);Cs=Cs===o?null:o,await kt()}else if(a.dataset.action==="parking-marking-undo"){let o=xt?.parking_lots.find(l=>String(l.id)===a.dataset.id);if(!o?.markings.length)return;try{await Ae(`/api/v1/parking/lots/${o.id}`,{method:"PATCH",body:JSON.stringify({markings:o.markings.slice(0,-1)})}),await kt()}catch(l){Je(ot(l.message),!0)}}else if(a.dataset.action==="parking-job-toggle")try{await Ae(`/api/v1/parking/jobs/${encodeURIComponent(a.dataset.id)}`,{method:"PATCH",body:JSON.stringify({completed:a.dataset.completed==="true"})}),Je("\u4E88\u5B9A\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\u3002"),await kt()}catch(o){Je(ot(o.message),!0)}else if(a.dataset.action==="parking-job-delete"){if(!Ho("\u3053\u306E\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Ae(`/api/v1/parking/jobs/${encodeURIComponent(a.dataset.id)}`,{method:"DELETE"}),Je("\u4E88\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await kt()}catch(o){Je(ot(o.message),!0)}}else if(a.dataset.action==="parking-lot-toggle")try{await Ae(`/api/v1/parking/lots/${encodeURIComponent(a.dataset.id)}`,{method:"PATCH",body:JSON.stringify({is_active:a.dataset.active==="true"})}),await kt()}catch(o){Je(ot(o.message),!0)}else if(a.dataset.action==="parking-lot-delete"){if(!Ke("parking:admin")||!Ho("\u3053\u306E\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Ae(`/api/v1/parking/lots/${encodeURIComponent(a.dataset.id)}`,{method:"DELETE"}),Wt(),Je("\u99D0\u8ECA\u30A8\u30EA\u30A2\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await kt()}catch(o){Je(ot(o.message),!0)}}else if(a.dataset.action==="parking-lot-order"){if(!xt)return;let o=xt.parking_lots.map(u=>u.id),l=o.indexOf(Number(a.dataset.id)),c=l+(a.dataset.direction==="up"?-1:1);if(l<0||c<0||c>=o.length)return;[o[l],o[c]]=[o[c],o[l]];try{await Ae("/api/v1/parking/lots/order",{method:"PUT",body:JSON.stringify({ids:o})}),await kt()}catch(u){Je(ot(u.message),!0)}}else if(a.dataset.action?.startsWith("parking-")&&["parking-class-delete","parking-status-delete","parking-option-delete","parking-store-delete","parking-assessment-delete","parking-damage-delete"].includes(a.dataset.action)){let o=a.dataset.action==="parking-class-delete"?"classes":a.dataset.action==="parking-status-delete"?"statuses":a.dataset.action==="parking-option-delete"?"options":a.dataset.action==="parking-store-delete"?"stores":a.dataset.action==="parking-assessment-delete"?"assessment-fields":"damage-types";if(!Ho("\u3053\u306E\u8A2D\u5B9A\u9805\u76EE\u3092\u524A\u9664\u3057\u307E\u3059\u304B\uFF1F"))return;try{await Ae(`/api/v1/parking/${o}/${encodeURIComponent(a.dataset.id)}`,{method:"DELETE"}),Wt(),Je("\u8A2D\u5B9A\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"),await kt()}catch(l){Je(ot(l.message),!0)}}else if(a.dataset.action==="sync-parking"){let o=a;o.disabled=!0;try{let l=await Ae("/api/v1/parking/vehicles:sync",{method:"POST"});Je(`\u99D0\u8ECA\u5834\u30DC\u30FC\u30C9\u3092\u66F4\u65B0\u3057\u307E\u3057\u305F\uFF08\u65B0\u898F ${l.created} \u53F0\u3001\u66F4\u65B0 ${l.updated} \u53F0\uFF09\u3002`),await kt()}catch(l){Je(l.message,!0)}finally{o.disabled=!1}}else if(a.dataset.action==="refresh")await In();else if(a.dataset.action==="menu")Lr=!Lr,Ve(".sidebar")?.classList.toggle("open",Lr);else if(a.dataset.action==="next")en+=50,await In();else if(a.dataset.action==="prev")en=Math.max(0,en-50),await In();else if(a.dataset.action==="edit-account"||a.dataset.action==="edit-vehicle")await Ir(a.dataset.action,a.dataset.id);else if(a.dataset.action?.startsWith("reservation-")){let o=$o.find(c=>c.id===a.dataset.id);if(!o)return;if(a.dataset.action==="reservation-checkin"||a.dataset.action==="reservation-return"){try{await cd(o,a.dataset.action==="reservation-checkin"?"checked_in":"completed")}catch(c){Je(ot(c.message),!0)}return}let l=`${o.guest_name} \u69D8\u306E\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u304B\uFF1F`;if(!Ho(l))return;try{await Ae(`/api/v1/reservations/${encodeURIComponent(o.id)}`,{method:"PATCH",body:JSON.stringify({status:"cancelled"})}),Je("\u4E88\u7D04\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3057\u305F\u3002"),await In()}catch(c){Je(ot(c.message),!0)}}}}function Xv(i){if(!(i.target instanceof HTMLInputElement))return;if(i.target.matches("[data-customer-search]")){let n=i.target.closest('form[data-form="reservation"]'),s=n&&Ve('[name="customerId"]',n);s&&(s.value=""),window.clearTimeout($h),$h=window.setTimeout(()=>{pd(i.target)},220);return}if(i.target.matches("[data-parking-search]")){Pr=i.target.value.trim();let n=Ve("#parking-catalog-content");if(n&&xt){bt(n,Nc(xt)),n.replaceWith(n.firstElementChild);let s=Ve("[data-parking-search]");s?.focus(),s instanceof HTMLInputElement&&s.setSelectionRange(s.value.length,s.value.length)}return}if(i.target.matches("[data-marking-color]")){Or=i.target.value,Ve(".parking-marking-preview")?.setAttribute("stroke",Or);return}if(!i.target.matches("[data-search]"))return;let e=i.target.selectionStart;hn=i.target.value,en=0;let t=ut==="sites"?nd:ut==="accounts"?sd:ut==="vehicles"?rd:ut==="reservations"?ld:ut==="customers"?ad:null;t&&(window.clearTimeout(Wh),Wh=window.setTimeout(()=>{t().then(()=>{let n=Ve("[data-search]");n?.focus(),n instanceof HTMLInputElement&&e!==null&&n.setSelectionRange(e,e)}).catch(n=>Je(ot(n.message),!0))},180))}function qv(i){let e=i.target;if(e.matches("[data-reservation-filter]")){let t=e.closest('form[data-form="reservation"]');t&&Jh(t)}else if(e.matches('[name="startAt"], [name="endAt"], [name="vehicleClass"]')){let t=e.closest('form[data-form="reservation"]');t&&Jh(t)}else if(e.matches("[data-vehicle-site]")){let t=Ve("[data-vehicle-parking-fields]",Ve(".overlay"));if(!t)return;let n=e.value;bn=[],n?dd(t,n,e):Fr(t,null)}else e.matches("[data-status]")&&(hi=e.value,en=0,In())}"serviceWorker"in navigator&&window.isSecureContext&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js",{scope:"/"}).catch(()=>Je("\u30AA\u30D5\u30E9\u30A4\u30F3\u7528\u30A2\u30D7\u30EA\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002",!0))},{once:!0});window.addEventListener("hashchange",()=>{if(!Ue)return;let i=Ic()??"dashboard";ut=Yo().some(e=>e.page===i)?i:"dashboard",location.hash!==oi(ut)&&history.replaceState(null,"",oi(ut)),localStorage.setItem(Rs,ut),di(),Zo(),In()});async function Yv(){try{if(!pt){let i=zo(localStorage)?"site":"default",e=await Br(i);if(!e&&i==="site"){if(!(await fetch("/api/v1/auth/end-site",{method:"POST",credentials:"same-origin"})).ok)throw new Error("internal_error");let n=Bo(localStorage);n&&(pt=n.token,e=await Br("default"))}if(!e){pt="",Ue=null,ki(localStorage),Ps();return}}await Jo()}catch(i){i.message==="unauthorized"?(pt="",Ue=null,ki(localStorage)):Je(ot(i.message),!0),Ps()}}Yv();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
