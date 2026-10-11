(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="163",Ec=0,wo=1,Tc=2,ml=1,gl=2,un=3,Rn=0,It=1,Vt=2,An=0,Si=1,bo=2,Ro=3,Co=4,Ac=5,Gn=100,wc=101,bc=102,Rc=103,Cc=104,Pc=200,Lc=201,Ic=202,Dc=203,Hr=204,Vr=205,Uc=206,Nc=207,Oc=208,Fc=209,Bc=210,zc=211,Hc=212,Vc=213,kc=214,Gc=0,Wc=1,Xc=2,Ps=3,qc=4,Yc=5,Zc=6,$c=7,Qr=0,Kc=1,jc=2,wn=0,Jc=1,Qc=2,eu=3,_l=4,tu=5,nu=6,iu=7,vl=300,Ai=301,wi=302,kr=303,Gr=304,Vs=306,Wr=1e3,Xn=1001,Xr=1002,kt=1003,su=1004,es=1005,Zt=1006,er=1007,qn=1008,bn=1009,ru=1010,ou=1011,xl=1012,Ml=1013,bi=1014,Tn=1015,Ls=1016,Sl=1017,yl=1018,Zi=1020,au=35902,lu=1021,cu=1022,tn=1023,uu=1024,du=1025,yi=1026,qi=1027,hu=1028,El=1029,fu=1030,Tl=1031,Al=1033,tr=33776,nr=33777,ir=33778,sr=33779,Po=35840,Lo=35841,Io=35842,Do=35843,wl=36196,Uo=37492,No=37496,Oo=37808,Fo=37809,Bo=37810,zo=37811,Ho=37812,Vo=37813,ko=37814,Go=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,$o=37821,rr=36492,Ko=36494,jo=36495,pu=36283,Jo=36284,Qo=36285,ea=36286,mu=3200,gu=3201,bl=0,_u=1,yn="",Yt="srgb",Pn="srgb-linear",eo="display-p3",ks="display-p3-linear",Is="linear",ot="srgb",Ds="rec709",Us="p3",Qn=7680,ta=519,vu=512,xu=513,Mu=514,Rl=515,Su=516,yu=517,Eu=518,Tu=519,na=35044,ia="300 es",dn=2e3,Ns=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sa=1234567;const ki=Math.PI/180,Ri=180/Math.PI;function Pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function bt(n,e,t){return Math.max(e,Math.min(t,n))}function to(n,e){return(n%e+e)%e}function Au(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wu(n,e,t){return n!==e?(t-n)/(e-n):0}function Gi(n,e,t){return(1-t)*n+t*e}function bu(n,e,t,i){return Gi(n,e,1-Math.exp(-t*i))}function Ru(n,e=1){return e-Math.abs(to(n,e*2)-e)}function Cu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Iu(n,e){return n+Math.random()*(e-n)}function Du(n){return n*(.5-Math.random())}function Uu(n){n!==void 0&&(sa=n);let e=sa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nu(n){return n*ki}function Ou(n){return n*Ri}function Fu(n){return(n&n-1)===0&&n!==0}function Bu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hu(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ts={DEG2RAD:ki,RAD2DEG:Ri,generateUUID:Pi,clamp:bt,euclideanModulo:to,mapLinear:Au,inverseLerp:wu,lerp:Gi,damp:bu,pingpong:Ru,smoothstep:Cu,smootherstep:Pu,randInt:Lu,randFloat:Iu,randFloatSpread:Du,seededRandom:Uu,degToRad:Nu,radToDeg:Ou,isPowerOfTwo:Fu,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:Hu,normalize:At,denormalize:vi};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],S=s[0],p=s[3],h=s[6],E=s[1],x=s[4],T=s[7],D=s[2],C=s[5],R=s[8];return r[0]=o*S+a*E+l*D,r[3]=o*p+a*x+l*C,r[6]=o*h+a*T+l*R,r[1]=c*S+u*E+d*D,r[4]=c*p+u*x+d*C,r[7]=c*h+u*T+d*R,r[2]=f*S+m*E+g*D,r[5]=f*p+m*x+g*C,r[8]=f*h+m*T+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=d*S,e[1]=(s*c-u*i)*S,e[2]=(a*i-s*o)*S,e[3]=f*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(o*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(or.makeScale(e,t)),this}rotate(e){return this.premultiply(or.makeRotation(-e)),this}translate(e,t){return this.premultiply(or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const or=new Ge;function Cl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vu(){const n=Os("canvas");return n.style.display="block",n}const ra={};function ku(n){n in ra||(ra[n]=!0,console.warn(n))}const oa=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),aa=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Pn]:{transfer:Is,primaries:Ds,toReference:n=>n,fromReference:n=>n},[Yt]:{transfer:ot,primaries:Ds,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ks]:{transfer:Is,primaries:Us,toReference:n=>n.applyMatrix3(aa),fromReference:n=>n.applyMatrix3(oa)},[eo]:{transfer:ot,primaries:Us,toReference:n=>n.convertSRGBToLinear().applyMatrix3(aa),fromReference:n=>n.applyMatrix3(oa).convertLinearToSRGB()}},Gu=new Set([Pn,ks]),et={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Gu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ns[e].toReference,s=ns[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ns[n].primaries},getTransfer:function(n){return n===yn?Is:ns[n].transfer}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ar(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ei;class Wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=Os("canvas")),ei.width=e.width,ei.height=e.height;const i=ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Os("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class Pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lr(s[o].image)):r.push(lr(s[o]))}else r=lr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function lr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class Dt extends jn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Xn,s=Xn,r=Zt,o=qn,a=tn,l=bn,c=Dt.DEFAULT_ANISOTROPY,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Pi(),this.name="",this.source=new Pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wr:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wr:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=vl;Dt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],S=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(m+1)/2,D=(h+1)/2,C=(u+f)/4,R=(d+S)/4,U=(g+p)/4;return x>T&&x>D?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=R/i):T>D?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=U/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=R/r,s=U/r),this.set(i,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-S)*(d-S)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-S)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends jn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new Dt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Yu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ll extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zu extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],S=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=S;return}if(d!==S||l!==f||c!==m||u!==g){let p=1-a;const h=l*f+c*m+u*g+d*S,E=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const D=Math.sqrt(x),C=Math.atan2(D,h*E);p=Math.sin(p*C)/D,a=Math.sin(a*C)/D}const T=a*E;if(l=l*p+f*T,c=c*p+m*T,u=u*p+g*T,d=d*p+S*T,p===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-a*m,e[t+2]=c*g+u*m+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(la.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(la.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new b,la=new $i;class Kn{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(r,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),is.copy(i.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),ss.subVectors(this.max,Ni),ti.subVectors(e.a,Ni),ni.subVectors(e.b,Ni),ii.subVectors(e.c,Ni),gn.subVectors(ni,ti),_n.subVectors(ii,ni),Nn.subVectors(ti,ii);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Nn.z,Nn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Nn.z,0,-Nn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Nn.y,Nn.x,0];return!ur(t,ti,ni,ii,ss)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,ti,ni,ii,ss))?!1:(rs.crossVectors(gn,_n),t=[rs.x,rs.y,rs.z],ur(t,ti,ni,ii,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new b,new b,new b,new b,new b,new b,new b,new b],Wt=new b,is=new Kn,ti=new b,ni=new b,ii=new b,gn=new b,_n=new b,Nn=new b,Ni=new b,ss=new b,rs=new b,On=new b;function ur(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){On.fromArray(n,r);const a=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),u=i.dot(On);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $u=new Kn,Oi=new b,dr=new b;class Gs{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$u.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Oi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(dr)),this.expandByPoint(Oi.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new b,hr=new b,os=new b,vn=new b,fr=new b,as=new b,pr=new b;class no{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){hr.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(hr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(os),a=vn.dot(this.direction),l=-vn.dot(os),c=vn.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const S=1/u;d*=S,f*=S,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hr).addScaledVector(os,f),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const i=on.dot(this.direction),s=on.dot(on)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,s,r){fr.subVectors(t,e),as.subVectors(i,e),pr.crossVectors(fr,as);let o=this.direction.dot(pr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,e);const l=a*this.direction.dot(as.crossVectors(vn,as));if(l<0)return null;const c=a*this.direction.dot(fr.cross(vn));if(c<0||l+c>o)return null;const u=-a*vn.dot(pr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,o,a,l,c,u,d,f,m,g,S,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,m,g,S,p)}set(e,t,i,s,r,o,a,l,c,u,d,f,m,g,S,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=S,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),o=1/si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-S*c,t[9]=-a*l,t[2]=S-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,S=c*d;t[0]=f+S*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=S+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,S=c*d;t[0]=f-S*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=S-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,S=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-S*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+S,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,ju)}lookAt(e,t,i){const s=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),xn.crossVectors(i,Nt),xn.lengthSq()===0&&(Math.abs(i.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),xn.crossVectors(i,Nt)),xn.normalize(),ls.crossVectors(Nt,xn),s[0]=xn.x,s[4]=ls.x,s[8]=Nt.x,s[1]=xn.y,s[5]=ls.y,s[9]=Nt.y,s[2]=xn.z,s[6]=ls.z,s[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],S=i[6],p=i[10],h=i[14],E=i[3],x=i[7],T=i[11],D=i[15],C=s[0],R=s[4],U=s[8],M=s[12],_=s[1],L=s[5],F=s[9],P=s[13],z=s[2],k=s[6],B=s[10],Z=s[14],N=s[3],j=s[7],K=s[11],ne=s[15];return r[0]=o*C+a*_+l*z+c*N,r[4]=o*R+a*L+l*k+c*j,r[8]=o*U+a*F+l*B+c*K,r[12]=o*M+a*P+l*Z+c*ne,r[1]=u*C+d*_+f*z+m*N,r[5]=u*R+d*L+f*k+m*j,r[9]=u*U+d*F+f*B+m*K,r[13]=u*M+d*P+f*Z+m*ne,r[2]=g*C+S*_+p*z+h*N,r[6]=g*R+S*L+p*k+h*j,r[10]=g*U+S*F+p*B+h*K,r[14]=g*M+S*P+p*Z+h*ne,r[3]=E*C+x*_+T*z+D*N,r[7]=E*R+x*L+T*k+D*j,r[11]=E*U+x*F+T*B+D*K,r[15]=E*M+x*P+T*Z+D*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],S=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+S*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],S=e[13],p=e[14],h=e[15],E=d*p*c-S*f*c+S*l*m-a*p*m-d*l*h+a*f*h,x=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,T=u*S*c-g*d*c+g*a*m-o*S*m-u*a*h+o*d*h,D=g*d*l-u*S*l-g*a*f+o*S*f+u*a*p-o*d*p,C=t*E+i*x+s*T+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=E*R,e[1]=(S*f*r-d*p*r-S*s*m+i*p*m+d*s*h-i*f*h)*R,e[2]=(a*p*r-S*l*r+S*s*c-i*p*c-a*s*h+i*l*h)*R,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*R,e[4]=x*R,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*R,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*h-t*l*h)*R,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*R,e[8]=T*R,e[9]=(g*d*r-u*S*r-g*i*m+t*S*m+u*i*h-t*d*h)*R,e[10]=(o*S*r-g*a*r+g*i*c-t*S*c-o*i*h+t*a*h)*R,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*m-t*a*m)*R,e[12]=D*R,e[13]=(u*S*s-g*d*s+g*i*f-t*S*f-u*i*p+t*d*p)*R,e[14]=(g*a*s-o*S*s-g*i*l+t*S*l+o*i*p-t*a*p)*R,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,g=r*d,S=o*u,p=o*d,h=a*d,E=l*c,x=l*u,T=l*d,D=i.x,C=i.y,R=i.z;return s[0]=(1-(S+h))*D,s[1]=(m+T)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(m-T)*C,s[5]=(1-(f+h))*C,s[6]=(p+E)*C,s[7]=0,s[8]=(g+x)*R,s[9]=(p-E)*R,s[10]=(1-(f+S))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const o=si.set(s[4],s[5],s[6]).length(),a=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,u=1/o,d=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=dn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,g;if(a===dn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ns)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=dn){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,m=(i+s)*u;let g,S;if(a===dn)g=(o+r)*d,S=-2*d;else if(a===Ns)g=r*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const si=new b,Xt=new ct,Ku=new b(0,0,0),ju=new b(1,1,1),xn=new b,ls=new b,Nt=new b,ca=new ct,ua=new $i;class Kt{constructor(e=0,t=0,i=0,s=Kt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ca,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ua.setFromEuler(this),this.setFromQuaternion(ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kt.DEFAULT_ORDER="XYZ";class io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const da=new b,ri=new $i,an=new ct,cs=new b,Fi=new b,Qu=new b,ed=new $i,ha=new b(1,0,0),fa=new b(0,1,0),pa=new b(0,0,1),ma={type:"added"},td={type:"removed"},oi={type:"childadded",child:null},mr={type:"childremoved",child:null};class Mt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new b,t=new Kt,i=new $i,s=new b(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ge}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(ha,e)}rotateY(e){return this.rotateOnAxis(fa,e)}rotateZ(e){return this.rotateOnAxis(pa,e)}translateOnAxis(e,t){return da.copy(e).applyQuaternion(this.quaternion),this.position.add(da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ha,e)}translateY(e){return this.translateOnAxis(fa,e)}translateZ(e){return this.translateOnAxis(pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Fi,cs,this.up):an.lookAt(cs,Fi,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(an),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ma),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),mr.child=e,this.dispatchEvent(mr),mr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ma),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new b(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new b,ln=new b,gr=new b,cn=new b,ai=new b,li=new b,ga=new b,_r=new b,vr=new b,xr=new b;class en{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qt.subVectors(e,t),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qt.subVectors(s,t),ln.subVectors(i,t),gr.subVectors(e,t);const o=qt.dot(qt),a=qt.dot(ln),l=qt.dot(gr),c=ln.dot(ln),u=ln.dot(gr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l)}static isFrontFacing(e,t,i,s){return qt.subVectors(i,t),ln.subVectors(e,t),qt.cross(ln).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),qt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ai.subVectors(s,i),li.subVectors(r,i),_r.subVectors(e,i);const l=ai.dot(_r),c=li.dot(_r);if(l<=0&&c<=0)return t.copy(i);vr.subVectors(e,s);const u=ai.dot(vr),d=li.dot(vr);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ai,o);xr.subVectors(e,r);const m=ai.dot(xr),g=li.dot(xr);if(g>=0&&m<=g)return t.copy(r);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(li,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return ga.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(ga,a);const h=1/(p+S+f);return o=S*h,a=f*h,t.copy(i).addScaledVector(ai,o).addScaledVector(li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},us={h:0,s:0,l:0};function Mr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=to(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Mr(o,r,e+1/3),this.g=Mr(o,r,e),this.b=Mr(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Il[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return et.fromWorkingColorSpace(Et.copy(this),e),Math.round(bt(Et.r*255,0,255))*65536+Math.round(bt(Et.g*255,0,255))*256+Math.round(bt(Et.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Et.copy(this),t);const i=Et.r,s=Et.g,r=Et.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Yt){et.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,i=Et.g,s=Et.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(us);const i=Gi(Mn.h,us.h,t),s=Gi(Mn.s,us.s,t),r=Gi(Mn.l,us.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ye;Ye.NAMES=Il;let nd=0;class Li extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Si,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hr,this.blendDst=Vr,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(i.blending=this.blending),this.side!==Rn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hr&&(i.blendSrc=this.blendSrc),this.blendDst!==Vr&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ta&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dt extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new b,ds=new Xe;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=na,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ku("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),e}}class Dl extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ul extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let id=0;const Ht=new ct,Sr=new Mt,ci=new b,Ot=new Kn,Bi=new Kn,xt=new b;class Gt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cl(e)?Ul:Dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Ot.min,Bi.min),Ot.expandByPoint(xt),xt.addVectors(Ot.max,Bi.max),Ot.expandByPoint(xt)):(Ot.expandByPoint(Bi.min),Ot.expandByPoint(Bi.max))}Ot.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(ci.fromBufferAttribute(e,c),xt.add(ci)),s=Math.max(s,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new b,l[U]=new b;const c=new b,u=new b,d=new b,f=new Xe,m=new Xe,g=new Xe,S=new b,p=new b;function h(U,M,_){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,_),f.fromBufferAttribute(r,U),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),a[U].add(S),a[M].add(S),a[_].add(S),l[U].add(p),l[M].add(p),l[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,M=E.length;U<M;++U){const _=E[U],L=_.start,F=_.count;for(let P=L,z=L+F;P<z;P+=3)h(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const x=new b,T=new b,D=new b,C=new b;function R(U){D.fromBufferAttribute(s,U),C.copy(D);const M=a[U];x.copy(M),x.sub(D.multiplyScalar(D.dot(M))).normalize(),T.crossVectors(C,M);const L=T.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,L)}for(let U=0,M=E.length;U<M;++U){const _=E[U],L=_.start,F=_.count;for(let P=L,z=L+F;P<z;P+=3)R(e.getX(P+0)),R(e.getX(P+1)),R(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,u=new b,d=new b;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new $t(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _a=new ct,Fn=new no,hs=new Gs,va=new b,ui=new b,di=new b,hi=new b,yr=new b,fs=new b,ps=new Xe,ms=new Xe,gs=new Xe,xa=new b,Ma=new b,Sa=new b,_s=new b,vs=new b;class oe extends Mt{constructor(e=new Gt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(yr.fromBufferAttribute(d,e),o?fs.addScaledVector(yr,u):fs.addScaledVector(yr.sub(t),u))}t.add(fs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere),hs.applyMatrix4(r),Fn.copy(e.ray).recast(e.near),!(hs.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(hs,va)===null||Fn.origin.distanceToSquared(va)>(e.far-e.near)**2))&&(_a.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(_a),!(i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,D=x;T<D;T+=3){const C=a.getX(T),R=a.getX(T+1),U=a.getX(T+2);s=xs(this,h,e,i,c,u,d,C,R,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=g,h=S;p<h;p+=3){const E=a.getX(p),x=a.getX(p+1),T=a.getX(p+2);s=xs(this,o,e,i,c,u,d,E,x,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,D=x;T<D;T+=3){const C=T,R=T+1,U=T+2;s=xs(this,h,e,i,c,u,d,C,R,U),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=g,h=S;p<h;p+=3){const E=p,x=p+1,T=p+2;s=xs(this,o,e,i,c,u,d,E,x,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function sd(n,e,t,i,s,r,o,a){let l;if(e.side===It?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Rn,a),l===null)return null;vs.copy(a),vs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:n}}function xs(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ui),n.getVertexPosition(l,di),n.getVertexPosition(c,hi);const u=sd(n,e,t,i,ui,di,hi,_s);if(u){s&&(ps.fromBufferAttribute(s,a),ms.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,c),u.uv=en.getInterpolation(_s,ui,di,hi,ps,ms,gs,new Xe)),r&&(ps.fromBufferAttribute(r,a),ms.fromBufferAttribute(r,l),gs.fromBufferAttribute(r,c),u.uv1=en.getInterpolation(_s,ui,di,hi,ps,ms,gs,new Xe)),o&&(xa.fromBufferAttribute(o,a),Ma.fromBufferAttribute(o,l),Sa.fromBufferAttribute(o,c),u.normal=en.getInterpolation(_s,ui,di,hi,xa,Ma,Sa,new b),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new b,materialIndex:0};en.getNormal(ui,di,hi,d.normal),u.face=d}return u}class ce extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(d,2));function g(S,p,h,E,x,T,D,C,R,U,M){const _=T/R,L=D/U,F=T/2,P=D/2,z=C/2,k=R+1,B=U+1;let Z=0,N=0;const j=new b;for(let K=0;K<B;K++){const ne=K*L-P;for(let ge=0;ge<k;ge++){const Oe=ge*_-F;j[S]=Oe*E,j[p]=ne*x,j[h]=z,c.push(j.x,j.y,j.z),j[S]=0,j[p]=0,j[h]=C>0?1:-1,u.push(j.x,j.y,j.z),d.push(ge/R),d.push(1-K/U),Z+=1}}for(let K=0;K<U;K++)for(let ne=0;ne<R;ne++){const ge=f+ne+k*K,Oe=f+ne+k*(K+1),H=f+(ne+1)+k*(K+1),ee=f+(ne+1)+k*K;l.push(ge,Oe,ee),l.push(Oe,H,ee),N+=6}a.addGroup(m,N,M),m+=N,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ce(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=Ci(n[t]);for(const s in i)e[s]=i[s]}return e}function rd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const od={clone:Ci,merge:wt};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ol extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new b,ya=new Xe,Ea=new Xe;class Ct extends Ol{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,ya,Ea),t.subVectors(Ea,ya)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ki*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class cd extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ct(fi,pi,e,t);s.layers=this.layers,this.add(s);const r=new Ct(fi,pi,e,t);r.layers=this.layers,this.add(r);const o=new Ct(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new Ct(fi,pi,e,t);a.layers=this.layers,this.add(a);const l=new Ct(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new Ct(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fl extends Dt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ud extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Fl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ci(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:An});r.uniforms.tEquirect.value=t;const o=new oe(s,r),a=t.minFilter;return t.minFilter===qn&&(t.minFilter=Zt),new cd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Er=new b,dd=new b,hd=new Ge;class Vn{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Er.subVectors(i,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Er),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hd.getNormalMatrix(e),s=this.coplanarPoint(Er).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Gs,Ms=new b;class so{constructor(e=new Vn,t=new Vn,i=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=dn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],S=s[10],p=s[11],h=s[12],E=s[13],x=s[14],T=s[15];if(i[0].setComponents(l-r,f-c,p-m,T-h).normalize(),i[1].setComponents(l+r,f+c,p+m,T+h).normalize(),i[2].setComponents(l+o,f+u,p+g,T+E).normalize(),i[3].setComponents(l-o,f-u,p-g,T-E).normalize(),i[4].setComponents(l-a,f-d,p-S,T-x).normalize(),t===dn)i[5].setComponents(l+a,f+d,p+S,T+x).normalize();else if(t===Ns)i[5].setComponents(a,d,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ms.x=s.normal.x>0?e.max.x:e.min.x,Ms.y=s.normal.y>0?e.max.y:e.min.y,Ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bl(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fd(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let m=0,g=f.length;m<g;m++){const S=f[m];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class nn extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,m=[],g=[],S=[],p=[];for(let h=0;h<u;h++){const E=h*f-o;for(let x=0;x<c;x++){const T=x*d-r;g.push(T,-E,0),S.push(0,0,1),p.push(x/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const x=E+c*h,T=E+c*(h+1),D=E+1+c*(h+1),C=E+1+c*h;m.push(x,T,C),m.push(T,D,C)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,th=`#ifdef USE_GRADIENTMAP
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
}`,nh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,lh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hh=`PhysicalMaterial material;
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
#endif`,fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,ph=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,mh=`#if defined( RE_IndirectDiffuse )
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
#endif`,gh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_h=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Th=`#if defined( USE_POINTS_UV )
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
#endif`,Ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ch=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ph=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ih=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fh=`#ifdef USE_NORMALMAP
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
#endif`,Bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Wh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$h=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,jh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
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
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
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
}`,yf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ef=`#define DISTANCE
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
}`,Tf=`#define DISTANCE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`uniform float scale;
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#define LAMBERT
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
}`,If=`#define LAMBERT
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
}`,Df=`#define MATCAP
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define NORMAL
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
}`,Of=`#define NORMAL
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
}`,Ff=`#define PHONG
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
}`,Bf=`#define PHONG
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
}`,zf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Vf=`#define TOON
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
}`,kf=`#define TOON
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
}`,Gf=`uniform float size;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 color;
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
}`,Yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Zf=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:vd,alphatest_pars_fragment:xd,aomap_fragment:Md,aomap_pars_fragment:Sd,batching_pars_vertex:yd,batching_vertex:Ed,begin_vertex:Td,beginnormal_vertex:Ad,bsdfs:wd,iridescence_fragment:bd,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Id,color_fragment:Dd,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Od,common:Fd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Vd,emissivemap_fragment:kd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:Zd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:ah,envmap_vertex:Kd,fog_vertex:jd,fog_pars_vertex:Jd,fog_fragment:Qd,fog_pars_fragment:eh,gradientmap_pars_fragment:th,lightmap_fragment:nh,lightmap_pars_fragment:ih,lights_lambert_fragment:sh,lights_lambert_pars_fragment:rh,lights_pars_begin:oh,lights_toon_fragment:lh,lights_toon_pars_fragment:ch,lights_phong_fragment:uh,lights_phong_pars_fragment:dh,lights_physical_fragment:hh,lights_physical_pars_fragment:fh,lights_fragment_begin:ph,lights_fragment_maps:mh,lights_fragment_end:gh,logdepthbuf_fragment:_h,logdepthbuf_pars_fragment:vh,logdepthbuf_pars_vertex:xh,logdepthbuf_vertex:Mh,map_fragment:Sh,map_pars_fragment:yh,map_particle_fragment:Eh,map_particle_pars_fragment:Th,metalnessmap_fragment:Ah,metalnessmap_pars_fragment:wh,morphinstance_vertex:bh,morphcolor_vertex:Rh,morphnormal_vertex:Ch,morphtarget_pars_vertex:Ph,morphtarget_vertex:Lh,normal_fragment_begin:Ih,normal_fragment_maps:Dh,normal_pars_fragment:Uh,normal_pars_vertex:Nh,normal_vertex:Oh,normalmap_pars_fragment:Fh,clearcoat_normal_fragment_begin:Bh,clearcoat_normal_fragment_maps:zh,clearcoat_pars_fragment:Hh,iridescence_pars_fragment:Vh,opaque_fragment:kh,packing:Gh,premultiplied_alpha_fragment:Wh,project_vertex:Xh,dithering_fragment:qh,dithering_pars_fragment:Yh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:$h,shadowmap_pars_fragment:Kh,shadowmap_pars_vertex:jh,shadowmap_vertex:Jh,shadowmask_pars_fragment:Qh,skinbase_vertex:ef,skinning_pars_vertex:tf,skinning_vertex:nf,skinnormal_vertex:sf,specularmap_fragment:rf,specularmap_pars_fragment:of,tonemapping_fragment:af,tonemapping_pars_fragment:lf,transmission_fragment:cf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:hf,uv_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:gf,backgroundCube_vert:_f,backgroundCube_frag:vf,cube_vert:xf,cube_frag:Mf,depth_vert:Sf,depth_frag:yf,distanceRGBA_vert:Ef,distanceRGBA_frag:Tf,equirect_vert:Af,equirect_frag:wf,linedashed_vert:bf,linedashed_frag:Rf,meshbasic_vert:Cf,meshbasic_frag:Pf,meshlambert_vert:Lf,meshlambert_frag:If,meshmatcap_vert:Df,meshmatcap_frag:Uf,meshnormal_vert:Nf,meshnormal_frag:Of,meshphong_vert:Ff,meshphong_frag:Bf,meshphysical_vert:zf,meshphysical_frag:Hf,meshtoon_vert:Vf,meshtoon_frag:kf,points_vert:Gf,points_frag:Wf,shadow_vert:Xf,shadow_frag:qf,sprite_vert:Yf,sprite_frag:Zf},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Qt={basic:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:wt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:wt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:wt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:wt([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:wt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:wt([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:wt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:wt([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:wt([pe.common,pe.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:wt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Qt.physical={uniforms:wt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ss={r:0,b:0,g:0},zn=new Kt,$f=new ct;function Kf(n,e,t,i,s,r,o){const a=new Ye(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(p,h){let E=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?S(a,l):x&&x.isColor&&(S(x,1),E=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vs)?(u===void 0&&(u=new oe(new ce(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ci(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zn.copy(h.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($f.makeRotationFromEuler(zn)),u.material.toneMapped=et.getTransfer(x.colorSpace)!==ot,(d!==x||f!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new oe(new nn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ci(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function S(p,h){p.getRGB(Ss,Nl(n)),i.buffers.color.setClear(Ss.r,Ss.g,Ss.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,S(a,l)},render:g}}function jf(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(_,L,F,P,z){let k=!1;const B=d(P,F,L);r!==B&&(r=B,c(r.object)),k=m(_,P,F,z),k&&g(_,P,F,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,T(_,L,F,P),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,L,F){const P=F.wireframe===!0;let z=i[_.id];z===void 0&&(z={},i[_.id]=z);let k=z[L.id];k===void 0&&(k={},z[L.id]=k);let B=k[P];return B===void 0&&(B=f(l()),k[P]=B),B}function f(_){const L=[],F=[],P=[];for(let z=0;z<t;z++)L[z]=0,F[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:P,object:_,attributes:{},index:null}}function m(_,L,F,P){const z=r.attributes,k=L.attributes;let B=0;const Z=F.getAttributes();for(const N in Z)if(Z[N].location>=0){const K=z[N];let ne=k[N];if(ne===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),K===void 0||K.attribute!==ne||ne&&K.data!==ne.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function g(_,L,F,P){const z={},k=L.attributes;let B=0;const Z=F.getAttributes();for(const N in Z)if(Z[N].location>=0){let K=k[N];K===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(K=_.instanceColor));const ne={};ne.attribute=K,K&&K.data&&(ne.data=K.data),z[N]=ne,B++}r.attributes=z,r.attributesNum=B,r.index=P}function S(){const _=r.newAttributes;for(let L=0,F=_.length;L<F;L++)_[L]=0}function p(_){h(_,0)}function h(_,L){const F=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;F[_]=1,P[_]===0&&(n.enableVertexAttribArray(_),P[_]=1),z[_]!==L&&(n.vertexAttribDivisor(_,L),z[_]=L)}function E(){const _=r.newAttributes,L=r.enabledAttributes;for(let F=0,P=L.length;F<P;F++)L[F]!==_[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function x(_,L,F,P,z,k,B){B===!0?n.vertexAttribIPointer(_,L,F,z,k):n.vertexAttribPointer(_,L,F,P,z,k)}function T(_,L,F,P){S();const z=P.attributes,k=F.getAttributes(),B=L.defaultAttributeValues;for(const Z in k){const N=k[Z];if(N.location>=0){let j=z[Z];if(j===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){const K=j.normalized,ne=j.itemSize,ge=e.get(j);if(ge===void 0)continue;const Oe=ge.buffer,H=ge.type,ee=ge.bytesPerElement,fe=H===n.INT||H===n.UNSIGNED_INT||j.gpuType===Ml;if(j.isInterleavedBufferAttribute){const ae=j.data,Se=ae.stride,de=j.offset;if(ae.isInstancedInterleavedBuffer){for(let ie=0;ie<N.locationSize;ie++)h(N.location+ie,ae.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ie=0;ie<N.locationSize;ie++)x(N.location+ie,ne/N.locationSize,H,K,Se*ee,(de+ne/N.locationSize*ie)*ee,fe)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)h(N.location+ae,j.meshPerAttribute);_.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<N.locationSize;ae++)p(N.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ae=0;ae<N.locationSize;ae++)x(N.location+ae,ne/N.locationSize,H,K,ne*ee,ne/N.locationSize*ae*ee,fe)}}else if(B!==void 0){const K=B[Z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(N.location,K);break;case 3:n.vertexAttrib3fv(N.location,K);break;case 4:n.vertexAttrib4fv(N.location,K);break;default:n.vertexAttrib1fv(N.location,K)}}}}E()}function D(){U();for(const _ in i){const L=i[_];for(const F in L){const P=L[F];for(const z in P)u(P[z].object),delete P[z];delete L[F]}delete i[_]}}function C(_){if(i[_.id]===void 0)return;const L=i[_.id];for(const F in L){const P=L[F];for(const z in P)u(P[z].object),delete P[z];delete L[F]}delete i[_.id]}function R(_){for(const L in i){const F=i[L];if(F[_.id]===void 0)continue;const P=F[_.id];for(const z in P)u(P[z].object),delete P[z];delete F[_.id]}}function U(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:p,disableUnusedAttributes:E}}function Jf(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];t.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qf(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),p=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),h=u>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:p,vertexTextures:h,maxSamples:E}}function ep(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Vn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const E=r?0:i,x=E*4;let T=h.clippingState||null;l.value=T,T=u(g,f,x,m);for(let D=0;D!==x;++D)T[D]=t[D];h.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,g!==!0||p===null){const h=m+S*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let x=0,T=m;x!==S;++x,T+=4)o.copy(d[x]).applyMatrix4(E,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function tp(n){let e=new WeakMap;function t(o,a){return a===kr?o.mapping=Ai:a===Gr&&(o.mapping=wi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kr||a===Gr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ud(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class np extends Ol{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,Ta=[.125,.215,.35,.446,.526,.582],Wn=20,Tr=new np,Aa=new Ye;let Ar=null,wr=0,br=0,Rr=!1;const kn=(1+Math.sqrt(5))/2,mi=1/kn,wa=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,kn,mi),new b(0,kn,-mi),new b(mi,0,kn),new b(-mi,0,kn),new b(kn,mi,0),new b(-kn,mi,0)];class ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ar=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ar,wr,br),this._renderer.xr.enabled=Rr,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ar=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Rr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ls,format:tn,colorSpace:Pn,depthBuffer:!1},s=Ra(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ip(r)),this._blurMaterial=sp(r,e,t)}return s}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,Tr)}_sceneToCubeUV(e,t,i,s){const a=new Ct(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Aa),u.toneMapping=wn,u.autoClear=!1;const m=new dt({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new oe(new ce,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(Aa),S=!0);for(let h=0;h<6;h++){const E=h%3;E===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):E===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const x=this._cubeSize;ys(s,E*x,h>2?x:0,x,x),u.setRenderTarget(s),S&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ai||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ca());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wa[(s-1)%wa.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oe(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),S=r/g,p=isFinite(r)?1+Math.floor(u*S):Wn;p>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const h=[];let E=0;for(let R=0;R<Wn;++R){const U=R/S,M=Math.exp(-U*U/2);h.push(M),R===0?E+=M:R<p&&(E+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const T=this._sizeLods[s],D=3*T*(s>x-xi?s-x+xi:0),C=4*(this._cubeSize-T);ys(t,D,C,3*T,2*T),l.setRenderTarget(t),l.render(d,Tr)}}function ip(n){const e=[],t=[],i=[];let s=n;const r=n-xi+1+Ta.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xi?l=Ta[o-n+xi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,S=3,p=2,h=1,E=new Float32Array(S*g*m),x=new Float32Array(p*g*m),T=new Float32Array(h*g*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,U=C>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];E.set(M,S*g*C),x.set(f,p*g*C);const _=[C,C,C,C,C,C];T.set(_,h*g*C)}const D=new Gt;D.setAttribute("position",new $t(E,S)),D.setAttribute("uv",new $t(x,p)),D.setAttribute("faceIndex",new $t(T,h)),e.push(D),s>xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ra(n,e,t){const i=new $n(n,e,t);return i.texture.mapping=Vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sp(n,e,t){const i=new Float32Array(Wn),s=new b(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ro(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Ca(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:An,depthTest:!1,depthWrite:!1})}function Pa(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ro(){return`

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
	`}function rp(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kr||l===Gr,u=l===Ai||l===wi;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ba(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new ba(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function op(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ap(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const S=f.morphAttributes[g];for(let p=0,h=S.length;p<h;p++)e.remove(S[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const S=m[g];for(let p=0,h=S.length;p<h;p++)e.update(S[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let S=0;if(m!==null){const E=m.array;S=m.version;for(let x=0,T=E.length;x<T;x+=3){const D=E[x+0],C=E[x+1],R=E[x+2];f.push(D,C,C,R,R,D)}}else if(g!==void 0){const E=g.array;S=g.version;for(let x=0,T=E.length/3-1;x<T;x+=3){const D=x+0,C=x+1,R=x+2;f.push(D,C,C,R,R,D)}}else return;const p=new(Cl(f)?Ul:Dl)(f,1);p.version=S;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function lp(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*o,m),t.update(f,i,m))}function u(d,f,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<m;S++)this.render(d[S]/o,f[S]);else{g.multiDrawElementsWEBGL(i,f,0,r,d,0,m);let S=0;for(let p=0;p<m;p++)S+=f[p];t.update(S,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function up(n,e,t){const i=new WeakMap,s=new lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let _=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),S===!0&&(T=2),p===!0&&(T=3);let D=a.attributes.position.count*T,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const R=new Float32Array(D*C*4*d),U=new Ll(R,D,C,d);U.type=Tn,U.needsUpdate=!0;const M=T*4;for(let L=0;L<d;L++){const F=h[L],P=E[L],z=x[L],k=D*C*4*L;for(let B=0;B<F.count;B++){const Z=B*M;g===!0&&(s.fromBufferAttribute(F,B),R[k+Z+0]=s.x,R[k+Z+1]=s.y,R[k+Z+2]=s.z,R[k+Z+3]=0),S===!0&&(s.fromBufferAttribute(P,B),R[k+Z+4]=s.x,R[k+Z+5]=s.y,R[k+Z+6]=s.z,R[k+Z+7]=0),p===!0&&(s.fromBufferAttribute(z,B),R[k+Z+8]=s.x,R[k+Z+9]=s.y,R[k+Z+10]=s.z,R[k+Z+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new Xe(D,C)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function dp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class zl extends Dt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:yi,u!==yi&&u!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===yi&&(i=bi),i===void 0&&u===qi&&(i=Zi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hl=new Dt,Vl=new zl(1,1);Vl.compareFunction=Rl;const kl=new Ll,Gl=new Zu,Wl=new Fl,La=[],Ia=[],Da=new Float32Array(16),Ua=new Float32Array(9),Na=new Float32Array(4);function Ii(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=La[s];if(r===void 0&&(r=new Float32Array(s),La[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ws(n,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function gp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Na.set(i),n.uniformMatrix2fv(this.addr,!1,Na),_t(t,i)}}function _p(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Ua.set(i),n.uniformMatrix3fv(this.addr,!1,Ua),_t(t,i)}}function vp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,i))return;Da.set(i),n.uniformMatrix4fv(this.addr,!1,Da),_t(t,i)}}function xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function Sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function Ep(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function Ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function wp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function bp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Vl:Hl;t.setTexture2D(e||r,s)}function Rp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gl,s)}function Cp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wl,s)}function Pp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kl,s)}function Lp(n){switch(n){case 5126:return hp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return _p;case 35676:return vp;case 5124:case 35670:return xp;case 35667:case 35671:return Mp;case 35668:case 35672:return Sp;case 35669:case 35673:return yp;case 5125:return Ep;case 36294:return Tp;case 36295:return Ap;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Ip(n,e){n.uniform1fv(this.addr,e)}function Dp(n,e){const t=Ii(e,this.size,2);n.uniform2fv(this.addr,t)}function Up(n,e){const t=Ii(e,this.size,3);n.uniform3fv(this.addr,t)}function Np(n,e){const t=Ii(e,this.size,4);n.uniform4fv(this.addr,t)}function Op(n,e){const t=Ii(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fp(n,e){const t=Ii(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Bp(n,e){const t=Ii(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zp(n,e){n.uniform1iv(this.addr,e)}function Hp(n,e){n.uniform2iv(this.addr,e)}function Vp(n,e){n.uniform3iv(this.addr,e)}function kp(n,e){n.uniform4iv(this.addr,e)}function Gp(n,e){n.uniform1uiv(this.addr,e)}function Wp(n,e){n.uniform2uiv(this.addr,e)}function Xp(n,e){n.uniform3uiv(this.addr,e)}function qp(n,e){n.uniform4uiv(this.addr,e)}function Yp(n,e,t){const i=this.cache,s=e.length,r=Ws(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hl,r[o])}function Zp(n,e,t){const i=this.cache,s=e.length,r=Ws(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gl,r[o])}function $p(n,e,t){const i=this.cache,s=e.length,r=Ws(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wl,r[o])}function Kp(n,e,t){const i=this.cache,s=e.length,r=Ws(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),_t(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kl,r[o])}function jp(n){switch(n){case 5126:return Ip;case 35664:return Dp;case 35665:return Up;case 35666:return Np;case 35674:return Op;case 35675:return Fp;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Vp;case 35669:case 35673:return kp;case 5125:return Gp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}class Jp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Lp(t.type)}}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jp(t.type)}}class em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function Oa(n,e){n.seq.push(e),n.map[e.id]=e}function tm(n,e,t){const i=n.name,s=i.length;for(Cr.lastIndex=0;;){const r=Cr.exec(i),o=Cr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Oa(t,c===void 0?new Jp(a,n,e):new Qp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new em(a),Oa(t,d)),t=d}}}class ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);tm(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Fa(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const nm=37297;let im=0;function sm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function rm(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Us&&t===Ds?i="LinearDisplayP3ToLinearSRGB":e===Ds&&t===Us&&(i="LinearSRGBToLinearDisplayP3"),n){case Pn:case ks:return[i,"LinearTransferOETF"];case Yt:case eo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ba(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sm(n.getShaderSource(e),o)}else return s}function om(n,e){const t=rm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function am(n,e){let t;switch(e){case Jc:t="Linear";break;case Qc:t="Reinhard";break;case eu:t="OptimizedCineon";break;case _l:t="ACESFilmic";break;case nu:t="AgX";break;case iu:t="Neutral";break;case tu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function cm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function um(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vi(n){return n!==""}function za(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ha(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(n){return n.replace(dm,fm)}const hm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fm(n,e){let t=ke[e];if(t===void 0){const i=hm.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qr(t)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(n){return n.replace(pm,mm)}function mm(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ka(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function _m(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function xm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qr:e="ENVMAP_BLENDING_MULTIPLY";break;case Kc:e="ENVMAP_BLENDING_MIX";break;case jc:e="ENVMAP_BLENDING_ADD";break}return e}function Mm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sm(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gm(t),c=_m(t),u=vm(t),d=xm(t),f=Mm(t),m=lm(t),g=cm(r),S=s.createProgram();let p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vi).join(`
`),h.length>0&&(h+=`
`)):(p=[ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),h=[ka(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?ke.tonemapping_pars_fragment:"",t.toneMapping!==wn?am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),o=qr(o),o=za(o,t),o=Ha(o,t),a=qr(a),a=za(a,t),a=Ha(a,t),o=Va(o),a=Va(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=E+p+o,T=E+h+a,D=Fa(s,s.VERTEX_SHADER,x),C=Fa(s,s.FRAGMENT_SHADER,T);s.attachShader(S,D),s.attachShader(S,C),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(S).trim(),P=s.getShaderInfoLog(D).trim(),z=s.getShaderInfoLog(C).trim();let k=!0,B=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,D,C);else{const Z=Ba(s,D,"vertex"),N=Ba(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Z+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||z==="")&&(B=!1);B&&(L.diagnostics={runnable:k,programLog:F,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:h}})}s.deleteShader(D),s.deleteShader(C),U=new ws(s,S),M=um(s,S)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(S,nm)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=im++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=C,this}let ym=0;class Em{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tm(e),t.set(e,i)),i}}class Tm{constructor(e){this.id=ym++,this.code=e,this.usedTimes=0}}function Am(n,e,t,i,s,r,o){const a=new io,l=new Em,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,_,L,F,P){const z=F.fog,k=P.geometry,B=M.isMeshStandardMaterial?F.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),N=Z&&Z.mapping===Vs?Z.image.height:null,j=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=K!==void 0?K.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let Oe,H,ee,fe;if(j){const mt=Qt[j];Oe=mt.vertexShader,H=mt.fragmentShader}else Oe=M.vertexShader,H=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const ae=n.getRenderTarget(),Se=P.isInstancedMesh===!0,de=P.isBatchedMesh===!0,ie=!!M.map,I=!!M.matcap,ue=!!Z,me=!!M.aoMap,Ce=!!M.lightMap,he=!!M.bumpMap,Fe=!!M.normalMap,A=!!M.displacementMap,v=!!M.emissiveMap,W=!!M.metalnessMap,V=!!M.roughnessMap,J=M.anisotropy>0,$=M.clearcoat>0,Me=M.iridescence>0,te=M.sheen>0,Te=M.transmission>0,Ae=J&&!!M.anisotropyMap,re=$&&!!M.clearcoatMap,ve=$&&!!M.clearcoatNormalMap,Le=$&&!!M.clearcoatRoughnessMap,xe=Me&&!!M.iridescenceMap,ye=Me&&!!M.iridescenceThicknessMap,Ue=te&&!!M.sheenColorMap,qe=te&&!!M.sheenRoughnessMap,je=!!M.specularMap,De=!!M.specularColorMap,Ze=!!M.specularIntensityMap,Ee=Te&&!!M.transmissionMap,w=Te&&!!M.thicknessMap,le=!!M.gradientMap,se=!!M.alphaMap,we=M.alphaTest>0,Pe=!!M.alphaHash,Qe=!!M.extensions;let tt=wn;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(tt=n.toneMapping);const nt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:H,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:de,instancing:Se,instancingColor:Se&&P.instanceColor!==null,instancingMorph:Se&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Pn,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:I,envMap:ue,envMapMode:ue&&Z.mapping,envMapCubeUVHeight:N,aoMap:me,lightMap:Ce,bumpMap:he,normalMap:Fe,displacementMap:f&&A,emissiveMap:v,normalMapObjectSpace:Fe&&M.normalMapType===_u,normalMapTangentSpace:Fe&&M.normalMapType===bl,metalnessMap:W,roughnessMap:V,anisotropy:J,anisotropyMap:Ae,clearcoat:$,clearcoatMap:re,clearcoatNormalMap:ve,clearcoatRoughnessMap:Le,iridescence:Me,iridescenceMap:xe,iridescenceThicknessMap:ye,sheen:te,sheenColorMap:Ue,sheenRoughnessMap:qe,specularMap:je,specularColorMap:De,specularIntensityMap:Ze,transmission:Te,transmissionMap:Ee,thicknessMap:w,gradientMap:le,opaque:M.transparent===!1&&M.blending===Si&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:we,alphaHash:Pe,combine:M.combine,mapUv:ie&&S(M.map.channel),aoMapUv:me&&S(M.aoMap.channel),lightMapUv:Ce&&S(M.lightMap.channel),bumpMapUv:he&&S(M.bumpMap.channel),normalMapUv:Fe&&S(M.normalMap.channel),displacementMapUv:A&&S(M.displacementMap.channel),emissiveMapUv:v&&S(M.emissiveMap.channel),metalnessMapUv:W&&S(M.metalnessMap.channel),roughnessMapUv:V&&S(M.roughnessMap.channel),anisotropyMapUv:Ae&&S(M.anisotropyMap.channel),clearcoatMapUv:re&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&S(M.sheenRoughnessMap.channel),specularMapUv:je&&S(M.specularMap.channel),specularColorMapUv:De&&S(M.specularColorMap.channel),specularIntensityMapUv:Ze&&S(M.specularIntensityMap.channel),transmissionMapUv:Ee&&S(M.transmissionMap.channel),thicknessMapUv:w&&S(M.thicknessMap.channel),alphaMapUv:se&&S(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Fe||J),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(ie||se),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ge,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vt,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function h(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)_.push(L),_.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(_,M),x(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function E(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function x(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),M.push(a.mask)}function T(M){const _=g[M.type];let L;if(_){const F=Qt[_];L=od.clone(F.uniforms)}else L=M.uniforms;return L}function D(M,_){let L;for(let F=0,P=u.length;F<P;F++){const z=u[F];if(z.cacheKey===_){L=z,++L.usedTimes;break}}return L===void 0&&(L=new Sm(n,_,M,r),u.push(L)),L}function C(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:T,acquireProgram:D,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:U}}function wm(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ga(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wa(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,m,g,S,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:S,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=S,h.group=p),e++,h}function a(d,f,m,g,S,p){const h=o(d,f,m,g,S,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,S,p){const h=o(d,f,m,g,S,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||bm),i.length>1&&i.sort(f||Ga),s.length>1&&s.sort(f||Ga)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Rm(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wa,n.set(i,[o])):s>=r.length?(o=new Wa,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ye};break;case"SpotLight":t={position:new b,direction:new b,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function Pm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Lm=0;function Im(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dm(n){const e=new Cm,t=Pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);const s=new b,r=new ct,o=new ct;function a(c,u){let d=0,f=0,m=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let g=0,S=0,p=0,h=0,E=0,x=0,T=0,D=0,C=0,R=0,U=0;c.sort(Im);const M=u===!0?Math.PI:1;for(let L=0,F=c.length;L<F;L++){const P=c[L],z=P.color,k=P.intensity,B=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*k*M,f+=z.g*k*M,m+=z.b*k*M;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],k);U++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const j=P.shadow,K=t.get(P);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=P.shadow.matrix,x++}i.directional[g]=N,g++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(z).multiplyScalar(k*M),N.distance=B,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[p]=N;const j=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[p]=j.matrix,P.castShadow){const K=t.get(P);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=Z,D++}p++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(z).multiplyScalar(k),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[h]=N,h++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity*M),N.distance=P.distance,N.decay=P.decay,P.castShadow){const j=P.shadow,K=t.get(P);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,i.pointShadow[S]=K,i.pointShadowMap[S]=Z,i.pointShadowMatrix[S]=P.shadow.matrix,T++}i.point[S]=N,S++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(k*M),N.groundColor.copy(P.groundColor).multiplyScalar(k*M),i.hemi[E]=N,E++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const _=i.hash;(_.directionalLength!==g||_.pointLength!==S||_.spotLength!==p||_.rectAreaLength!==h||_.hemiLength!==E||_.numDirectionalShadows!==x||_.numPointShadows!==T||_.numSpotShadows!==D||_.numSpotMaps!==C||_.numLightProbes!==U)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=h,i.point.length=S,i.hemi.length=E,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=D+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,_.directionalLength=g,_.pointLength=S,_.spotLength=p,_.rectAreaLength=h,_.hemiLength=E,_.numDirectionalShadows=x,_.numPointShadows=T,_.numSpotShadows=D,_.numSpotMaps=C,_.numLightProbes=U,i.version=Lm++)}function l(c,u){let d=0,f=0,m=0,g=0,S=0;const p=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const x=c[h];if(x.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(x.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function Xa(n){const e=new Dm(n),t=[],i=[];function s(){t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Um(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xa(n),e.set(s,[a])):r>=o.length?(a=new Xa(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Nm extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Om extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function zm(n,e,t){let i=new so;const s=new Xe,r=new Xe,o=new lt,a=new Nm({depthPacking:gu}),l=new Om,c={},u=t.maxTextureSize,d={[Rn]:It,[It]:Rn,[Vt]:Vt},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Fm,fragmentShader:Bm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new oe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let h=this.type;this.render=function(C,R,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),_=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(An),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const P=h!==un&&this.type===un,z=h===un&&this.type!==un;for(let k=0,B=C.length;k<B;k++){const Z=C[k],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const j=N.getFrameExtents();if(s.multiply(j),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,N.mapSize.y=r.y)),N.map===null||P===!0||z===!0){const ne=this.type!==un?{minFilter:kt,magFilter:kt}:{};N.map!==null&&N.map.dispose(),N.map=new $n(s.x,s.y,ne),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const K=N.getViewportCount();for(let ne=0;ne<K;ne++){const ge=N.getViewport(ne);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),F.viewport(o),N.updateMatrices(Z,ne),i=N.getFrustum(),T(R,U,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===un&&E(N,U),N.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,_,L)};function E(C,R){const U=e.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,U,m,S,null)}function x(C,R,U,M){let _=null;const L=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)_=L;else if(_=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=_.uuid,P=R.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let k=z[P];k===void 0&&(k=_.clone(),z[P]=k,R.addEventListener("dispose",D)),_=k}if(_.visible=R.visible,_.wireframe=R.wireframe,M===un?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:d[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=n.properties.get(_);F.light=U}return _}function T(C,R,U,M,_){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===un)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const P=e.update(C),z=C.material;if(Array.isArray(z)){const k=P.groups;for(let B=0,Z=k.length;B<Z;B++){const N=k[B],j=z[N.materialIndex];if(j&&j.visible){const K=x(C,j,M,_);C.onBeforeShadow(n,C,R,U,P,K,N),n.renderBufferDirect(U,null,P,K,C,N),C.onAfterShadow(n,C,R,U,P,K,N)}}}else if(z.visible){const k=x(C,z,M,_);C.onBeforeShadow(n,C,R,U,P,k,null),n.renderBufferDirect(U,null,P,k,C,null),C.onAfterShadow(n,C,R,U,P,k,null)}}const F=C.children;for(let P=0,z=F.length;P<z;P++)T(F[P],R,U,M,_)}function D(C){C.target.removeEventListener("dispose",D);for(const U in c){const M=c[U],_=C.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}function Hm(n){function e(){let w=!1;const le=new lt;let se=null;const we=new lt(0,0,0,0);return{setMask:function(Pe){se!==Pe&&!w&&(n.colorMask(Pe,Pe,Pe,Pe),se=Pe)},setLocked:function(Pe){w=Pe},setClear:function(Pe,Qe,tt,nt,mt){mt===!0&&(Pe*=nt,Qe*=nt,tt*=nt),le.set(Pe,Qe,tt,nt),we.equals(le)===!1&&(n.clearColor(Pe,Qe,tt,nt),we.copy(le))},reset:function(){w=!1,se=null,we.set(-1,0,0,0)}}}function t(){let w=!1,le=null,se=null,we=null;return{setTest:function(Pe){Pe?fe(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!w&&(n.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(se!==Pe){switch(Pe){case Gc:n.depthFunc(n.NEVER);break;case Wc:n.depthFunc(n.ALWAYS);break;case Xc:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case qc:n.depthFunc(n.EQUAL);break;case Yc:n.depthFunc(n.GEQUAL);break;case Zc:n.depthFunc(n.GREATER);break;case $c:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Pe}},setLocked:function(Pe){w=Pe},setClear:function(Pe){we!==Pe&&(n.clearDepth(Pe),we=Pe)},reset:function(){w=!1,le=null,se=null,we=null}}}function i(){let w=!1,le=null,se=null,we=null,Pe=null,Qe=null,tt=null,nt=null,mt=null;return{setTest:function(rt){w||(rt?fe(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(rt){le!==rt&&!w&&(n.stencilMask(rt),le=rt)},setFunc:function(rt,jt,Jt){(se!==rt||we!==jt||Pe!==Jt)&&(n.stencilFunc(rt,jt,Jt),se=rt,we=jt,Pe=Jt)},setOp:function(rt,jt,Jt){(Qe!==rt||tt!==jt||nt!==Jt)&&(n.stencilOp(rt,jt,Jt),Qe=rt,tt=jt,nt=Jt)},setLocked:function(rt){w=rt},setClear:function(rt){mt!==rt&&(n.clearStencil(rt),mt=rt)},reset:function(){w=!1,le=null,se=null,we=null,Pe=null,Qe=null,tt=null,nt=null,mt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],m=null,g=!1,S=null,p=null,h=null,E=null,x=null,T=null,D=null,C=new Ye(0,0,0),R=0,U=!1,M=null,_=null,L=null,F=null,P=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=B>=1):Z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=B>=2);let N=null,j={};const K=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),ge=new lt().fromArray(K),Oe=new lt().fromArray(ne);function H(w,le,se,we){const Pe=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(w,Qe),n.texParameteri(w,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(w,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<se;tt++)w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(le+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Qe}const ee={};ee[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),r.setFunc(Ps),he(!1),Fe(wo),fe(n.CULL_FACE),me(An);function fe(w){c[w]!==!0&&(n.enable(w),c[w]=!0)}function ae(w){c[w]!==!1&&(n.disable(w),c[w]=!1)}function Se(w,le){return u[w]!==le?(n.bindFramebuffer(w,le),u[w]=le,w===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),w===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function de(w,le){let se=f,we=!1;if(w){se=d.get(le),se===void 0&&(se=[],d.set(le,se));const Pe=w.textures;if(se.length!==Pe.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,tt=Pe.length;Qe<tt;Qe++)se[Qe]=n.COLOR_ATTACHMENT0+Qe;se.length=Pe.length,we=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,we=!0);we&&n.drawBuffers(se)}function ie(w){return m!==w?(n.useProgram(w),m=w,!0):!1}const I={[Gn]:n.FUNC_ADD,[wc]:n.FUNC_SUBTRACT,[bc]:n.FUNC_REVERSE_SUBTRACT};I[Rc]=n.MIN,I[Cc]=n.MAX;const ue={[Pc]:n.ZERO,[Lc]:n.ONE,[Ic]:n.SRC_COLOR,[Hr]:n.SRC_ALPHA,[Bc]:n.SRC_ALPHA_SATURATE,[Oc]:n.DST_COLOR,[Uc]:n.DST_ALPHA,[Dc]:n.ONE_MINUS_SRC_COLOR,[Vr]:n.ONE_MINUS_SRC_ALPHA,[Fc]:n.ONE_MINUS_DST_COLOR,[Nc]:n.ONE_MINUS_DST_ALPHA,[zc]:n.CONSTANT_COLOR,[Hc]:n.ONE_MINUS_CONSTANT_COLOR,[Vc]:n.CONSTANT_ALPHA,[kc]:n.ONE_MINUS_CONSTANT_ALPHA};function me(w,le,se,we,Pe,Qe,tt,nt,mt,rt){if(w===An){g===!0&&(ae(n.BLEND),g=!1);return}if(g===!1&&(fe(n.BLEND),g=!0),w!==Ac){if(w!==S||rt!==U){if((p!==Gn||x!==Gn)&&(n.blendEquation(n.FUNC_ADD),p=Gn,x=Gn),rt)switch(w){case Si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.ONE,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Co:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}h=null,E=null,T=null,D=null,C.set(0,0,0),R=0,S=w,U=rt}return}Pe=Pe||le,Qe=Qe||se,tt=tt||we,(le!==p||Pe!==x)&&(n.blendEquationSeparate(I[le],I[Pe]),p=le,x=Pe),(se!==h||we!==E||Qe!==T||tt!==D)&&(n.blendFuncSeparate(ue[se],ue[we],ue[Qe],ue[tt]),h=se,E=we,T=Qe,D=tt),(nt.equals(C)===!1||mt!==R)&&(n.blendColor(nt.r,nt.g,nt.b,mt),C.copy(nt),R=mt),S=w,U=!1}function Ce(w,le){w.side===Vt?ae(n.CULL_FACE):fe(n.CULL_FACE);let se=w.side===It;le&&(se=!se),he(se),w.blending===Si&&w.transparent===!1?me(An):me(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),s.setMask(w.colorWrite);const we=w.stencilWrite;o.setTest(we),we&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),v(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(w){M!==w&&(w?n.frontFace(n.CW):n.frontFace(n.CCW),M=w)}function Fe(w){w!==Ec?(fe(n.CULL_FACE),w!==_&&(w===wo?n.cullFace(n.BACK):w===Tc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),_=w}function A(w){w!==L&&(k&&n.lineWidth(w),L=w)}function v(w,le,se){w?(fe(n.POLYGON_OFFSET_FILL),(F!==le||P!==se)&&(n.polygonOffset(le,se),F=le,P=se)):ae(n.POLYGON_OFFSET_FILL)}function W(w){w?fe(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function V(w){w===void 0&&(w=n.TEXTURE0+z-1),N!==w&&(n.activeTexture(w),N=w)}function J(w,le,se){se===void 0&&(N===null?se=n.TEXTURE0+z-1:se=N);let we=j[se];we===void 0&&(we={type:void 0,texture:void 0},j[se]=we),(we.type!==w||we.texture!==le)&&(N!==se&&(n.activeTexture(se),N=se),n.bindTexture(w,le||ee[w]),we.type=w,we.texture=le)}function $(){const w=j[N];w!==void 0&&w.type!==void 0&&(n.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{n.texSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Le(){try{n.texStorage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xe(){try{n.texStorage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function qe(w){ge.equals(w)===!1&&(n.scissor(w.x,w.y,w.z,w.w),ge.copy(w))}function je(w){Oe.equals(w)===!1&&(n.viewport(w.x,w.y,w.z,w.w),Oe.copy(w))}function De(w,le){let se=l.get(le);se===void 0&&(se=new WeakMap,l.set(le,se));let we=se.get(w);we===void 0&&(we=n.getUniformBlockIndex(le,w.name),se.set(w,we))}function Ze(w,le){const we=l.get(le).get(w);a.get(le)!==we&&(n.uniformBlockBinding(le,we,w.__bindingPointIndex),a.set(le,we))}function Ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,j={},u={},d=new WeakMap,f=[],m=null,g=!1,S=null,p=null,h=null,E=null,x=null,T=null,D=null,C=new Ye(0,0,0),R=0,U=!1,M=null,_=null,L=null,F=null,P=null,ge.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:fe,disable:ae,bindFramebuffer:Se,drawBuffers:de,useProgram:ie,setBlending:me,setMaterial:Ce,setFlipSided:he,setCullFace:Fe,setLineWidth:A,setPolygonOffset:v,setScissorTest:W,activeTexture:V,bindTexture:J,unbindTexture:$,compressedTexImage2D:Me,compressedTexImage3D:te,texImage2D:ye,texImage3D:Ue,updateUBOMapping:De,uniformBlockBinding:Ze,texStorage2D:Le,texStorage3D:xe,texSubImage2D:Te,texSubImage3D:Ae,compressedTexSubImage2D:re,compressedTexSubImage3D:ve,scissor:qe,viewport:je,reset:Ee}}function Vm(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return m?new OffscreenCanvas(A,v):Os("canvas")}function S(A,v,W){let V=1;const J=Fe(A);if((J.width>W||J.height>W)&&(V=W/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(V*J.width),Me=Math.floor(V*J.height);d===void 0&&(d=g($,Me));const te=v?g($,Me):d;return te.width=$,te.height=Me,te.getContext("2d").drawImage(A,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Me+")."),te}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==kt&&A.minFilter!==Zt}function h(A){n.generateMipmap(A)}function E(A,v,W,V,J=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=v;if(v===n.RED&&(W===n.FLOAT&&($=n.R32F),W===n.HALF_FLOAT&&($=n.R16F),W===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&($=n.R8UI),W===n.UNSIGNED_SHORT&&($=n.R16UI),W===n.UNSIGNED_INT&&($=n.R32UI),W===n.BYTE&&($=n.R8I),W===n.SHORT&&($=n.R16I),W===n.INT&&($=n.R32I)),v===n.RG&&(W===n.FLOAT&&($=n.RG32F),W===n.HALF_FLOAT&&($=n.RG16F),W===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&($=n.RG8UI),W===n.UNSIGNED_SHORT&&($=n.RG16UI),W===n.UNSIGNED_INT&&($=n.RG32UI),W===n.BYTE&&($=n.RG8I),W===n.SHORT&&($=n.RG16I),W===n.INT&&($=n.RG32I)),v===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const Me=J?Is:et.getTransfer(V);W===n.FLOAT&&($=n.RGBA32F),W===n.HALF_FLOAT&&($=n.RGBA16F),W===n.UNSIGNED_BYTE&&($=Me===ot?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==Zt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){const v=A.target;v.removeEventListener("dispose",T),C(v),v.isVideoTexture&&u.delete(v)}function D(A){const v=A.target;v.removeEventListener("dispose",D),U(v)}function C(A){const v=i.get(A);if(v.__webglInit===void 0)return;const W=A.source,V=f.get(W);if(V){const J=V[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(V).length===0&&f.delete(W)}i.remove(A)}function R(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const W=A.source,V=f.get(W);delete V[v.__cacheKey],o.memory.textures--}function U(A){const v=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let J=0;J<v.__webglFramebuffer[V].length;J++)n.deleteFramebuffer(v.__webglFramebuffer[V][J]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const W=A.textures;for(let V=0,J=W.length;V<J;V++){const $=i.get(W[V]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(W[V])}i.remove(A)}let M=0;function _(){M=0}function L(){const A=M;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),M+=1,A}function F(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function P(A,v){const W=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(W,A,v);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+v)}function z(A,v){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ge(W,A,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+v)}function k(A,v){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ge(W,A,v);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+v)}function B(A,v){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Oe(W,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+v)}const Z={[Wr]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[Xr]:n.MIRRORED_REPEAT},N={[kt]:n.NEAREST,[su]:n.NEAREST_MIPMAP_NEAREST,[es]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[er]:n.LINEAR_MIPMAP_NEAREST,[qn]:n.LINEAR_MIPMAP_LINEAR},j={[vu]:n.NEVER,[Tu]:n.ALWAYS,[xu]:n.LESS,[Rl]:n.LEQUAL,[Mu]:n.EQUAL,[Eu]:n.GEQUAL,[Su]:n.GREATER,[yu]:n.NOTEQUAL};function K(A,v){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zt||v.magFilter===er||v.magFilter===es||v.magFilter===qn||v.minFilter===Zt||v.minFilter===er||v.minFilter===es||v.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Z[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Z[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Z[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,N[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,N[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,j[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kt||v.minFilter!==es&&v.minFilter!==qn||v.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ne(A,v){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));const V=v.source;let J=f.get(V);J===void 0&&(J={},f.set(V,J));const $=F(v);if($!==A.__cacheKey){J[$]===void 0&&(J[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),J[$].usedTimes++;const Me=J[A.__cacheKey];Me!==void 0&&(J[A.__cacheKey].usedTimes--,Me.usedTimes===0&&R(v)),A.__cacheKey=$,A.__webglTexture=J[$].texture}return W}function ge(A,v,W){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const J=ne(A,v),$=v.source;t.bindTexture(V,A.__webglTexture,n.TEXTURE0+W);const Me=i.get($);if($.version!==Me.__version||J===!0){t.activeTexture(n.TEXTURE0+W);const te=et.getPrimaries(et.workingColorSpace),Te=v.colorSpace===yn?null:et.getPrimaries(v.colorSpace),Ae=v.colorSpace===yn||te===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=S(v.image,!1,s.maxTextureSize);re=he(v,re);const ve=r.convert(v.format,v.colorSpace),Le=r.convert(v.type);let xe=E(v.internalFormat,ve,Le,v.colorSpace,v.isVideoTexture);K(V,v);let ye;const Ue=v.mipmaps,qe=v.isVideoTexture!==!0&&xe!==wl,je=Me.__version===void 0||J===!0,De=$.dataReady,Ze=x(v,re);if(v.isDepthTexture)xe=n.DEPTH_COMPONENT16,v.type===Tn?xe=n.DEPTH_COMPONENT32F:v.type===bi?xe=n.DEPTH_COMPONENT24:v.type===Zi&&(xe=n.DEPTH24_STENCIL8),je&&(qe?t.texStorage2D(n.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,ve,Le,null));else if(v.isDataTexture)if(Ue.length>0){qe&&je&&t.texStorage2D(n.TEXTURE_2D,Ze,xe,Ue[0].width,Ue[0].height);for(let Ee=0,w=Ue.length;Ee<w;Ee++)ye=Ue[Ee],qe?De&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,ye.width,ye.height,ve,Le,ye.data):t.texImage2D(n.TEXTURE_2D,Ee,xe,ye.width,ye.height,0,ve,Le,ye.data);v.generateMipmaps=!1}else qe?(je&&t.texStorage2D(n.TEXTURE_2D,Ze,xe,re.width,re.height),De&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,ve,Le,re.data)):t.texImage2D(n.TEXTURE_2D,0,xe,re.width,re.height,0,ve,Le,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,xe,Ue[0].width,Ue[0].height,re.depth);for(let Ee=0,w=Ue.length;Ee<w;Ee++)ye=Ue[Ee],v.format!==tn?ve!==null?qe?De&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,ye.width,ye.height,re.depth,ve,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,xe,ye.width,ye.height,re.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?De&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,ye.width,ye.height,re.depth,ve,Le,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,xe,ye.width,ye.height,re.depth,0,ve,Le,ye.data)}else{qe&&je&&t.texStorage2D(n.TEXTURE_2D,Ze,xe,Ue[0].width,Ue[0].height);for(let Ee=0,w=Ue.length;Ee<w;Ee++)ye=Ue[Ee],v.format!==tn?ve!==null?qe?De&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,xe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?De&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,ye.width,ye.height,ve,Le,ye.data):t.texImage2D(n.TEXTURE_2D,Ee,xe,ye.width,ye.height,0,ve,Le,ye.data)}else if(v.isDataArrayTexture)qe?(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ze,xe,re.width,re.height,re.depth),De&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,Le,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,ve,Le,re.data);else if(v.isData3DTexture)qe?(je&&t.texStorage3D(n.TEXTURE_3D,Ze,xe,re.width,re.height,re.depth),De&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,Le,re.data)):t.texImage3D(n.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,ve,Le,re.data);else if(v.isFramebufferTexture){if(je)if(qe)t.texStorage2D(n.TEXTURE_2D,Ze,xe,re.width,re.height);else{let Ee=re.width,w=re.height;for(let le=0;le<Ze;le++)t.texImage2D(n.TEXTURE_2D,le,xe,Ee,w,0,ve,Le,null),Ee>>=1,w>>=1}}else if(Ue.length>0){if(qe&&je){const Ee=Fe(Ue[0]);t.texStorage2D(n.TEXTURE_2D,Ze,xe,Ee.width,Ee.height)}for(let Ee=0,w=Ue.length;Ee<w;Ee++)ye=Ue[Ee],qe?De&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,ve,Le,ye):t.texImage2D(n.TEXTURE_2D,Ee,xe,ve,Le,ye);v.generateMipmaps=!1}else if(qe){if(je){const Ee=Fe(re);t.texStorage2D(n.TEXTURE_2D,Ze,xe,Ee.width,Ee.height)}De&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Le,re)}else t.texImage2D(n.TEXTURE_2D,0,xe,ve,Le,re);p(v)&&h(V),Me.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Oe(A,v,W){if(v.image.length!==6)return;const V=ne(A,v),J=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+W);const $=i.get(J);if(J.version!==$.__version||V===!0){t.activeTexture(n.TEXTURE0+W);const Me=et.getPrimaries(et.workingColorSpace),te=v.colorSpace===yn?null:et.getPrimaries(v.colorSpace),Te=v.colorSpace===yn||Me===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let w=0;w<6;w++)!Ae&&!re?ve[w]=S(v.image[w],!0,s.maxCubemapSize):ve[w]=re?v.image[w].image:v.image[w],ve[w]=he(v,ve[w]);const Le=ve[0],xe=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),Ue=E(v.internalFormat,xe,ye,v.colorSpace),qe=v.isVideoTexture!==!0,je=$.__version===void 0||V===!0,De=J.dataReady;let Ze=x(v,Le);K(n.TEXTURE_CUBE_MAP,v);let Ee;if(Ae){qe&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,Ue,Le.width,Le.height);for(let w=0;w<6;w++){Ee=ve[w].mipmaps;for(let le=0;le<Ee.length;le++){const se=Ee[le];v.format!==tn?xe!==null?qe?De&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,0,0,se.width,se.height,xe,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,Ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,0,0,se.width,se.height,xe,ye,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le,Ue,se.width,se.height,0,xe,ye,se.data)}}}else{if(Ee=v.mipmaps,qe&&je){Ee.length>0&&Ze++;const w=Fe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ze,Ue,w.width,w.height)}for(let w=0;w<6;w++)if(re){qe?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,ve[w].width,ve[w].height,xe,ye,ve[w].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,Ue,ve[w].width,ve[w].height,0,xe,ye,ve[w].data);for(let le=0;le<Ee.length;le++){const we=Ee[le].image[w].image;qe?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,0,0,we.width,we.height,xe,ye,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,Ue,we.width,we.height,0,xe,ye,we.data)}}else{qe?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,0,0,xe,ye,ve[w]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,0,Ue,xe,ye,ve[w]);for(let le=0;le<Ee.length;le++){const se=Ee[le];qe?De&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,0,0,xe,ye,se.image[w]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+w,le+1,Ue,xe,ye,se.image[w])}}}p(v)&&h(n.TEXTURE_CUBE_MAP),$.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function H(A,v,W,V,J,$){const Me=r.convert(W.format,W.colorSpace),te=r.convert(W.type),Te=E(W.internalFormat,Me,te,W.colorSpace);if(!i.get(v).__hasExternalTextures){const re=Math.max(1,v.width>>$),ve=Math.max(1,v.height>>$);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Te,re,ve,v.depth,0,Me,te,null):t.texImage2D(J,$,Te,re,ve,0,Me,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),me(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,J,i.get(W).__webglTexture,0,ue(v)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,J,i.get(W).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer&&!v.stencilBuffer){let V=n.DEPTH_COMPONENT24;if(W||me(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===Tn?V=n.DEPTH_COMPONENT32F:J.type===bi&&(V=n.DEPTH_COMPONENT24));const $=ue(v);me(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,V,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,V,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(v.depthBuffer&&v.stencilBuffer){const V=ue(v);W&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,v.width,v.height):me(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const V=v.textures;for(let J=0;J<V.length;J++){const $=V[J],Me=r.convert($.format,$.colorSpace),te=r.convert($.type),Te=E($.internalFormat,Me,te,$.colorSpace),Ae=ue(v);W&&me(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Te,v.width,v.height):me(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Te,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Te,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),P(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,J=ue(v);if(v.depthTexture.format===yi)me(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===qi)me(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function ae(A){const v=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");fe(v.__webglFramebuffer,A)}else if(W){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]=n.createRenderbuffer(),ee(v.__webglDepthbuffer[V],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),ee(v.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(A,v,W){const V=i.get(A);v!==void 0&&H(V.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ae(A)}function de(A){const v=A.texture,W=i.get(A),V=i.get(v);A.addEventListener("dispose",D);const J=A.textures,$=A.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),$){W.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[te]=[];for(let Te=0;Te<v.mipmaps.length;Te++)W.__webglFramebuffer[te][Te]=n.createFramebuffer()}else W.__webglFramebuffer[te]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)W.__webglFramebuffer[te]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Me)for(let te=0,Te=J.length;te<Te;te++){const Ae=i.get(J[te]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&me(A)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let te=0;te<J.length;te++){const Te=J[te];W.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[te]);const Ae=r.convert(Te.format,Te.colorSpace),re=r.convert(Te.type),ve=E(Te.internalFormat,Ae,re,Te.colorSpace,A.isXRRenderTarget===!0),Le=ue(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ve,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,W.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),K(n.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)H(W.__webglFramebuffer[te][Te],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te);else H(W.__webglFramebuffer[te],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(v)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let te=0,Te=J.length;te<Te;te++){const Ae=J[te],re=i.get(Ae);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),K(n.TEXTURE_2D,Ae),H(W.__webglFramebuffer,A,Ae,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,0),p(Ae)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,V.__webglTexture),K(te,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)H(W.__webglFramebuffer[Te],A,v,n.COLOR_ATTACHMENT0,te,Te);else H(W.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,te,0);p(v)&&h(te),t.unbindTexture()}A.depthBuffer&&ae(A)}function ie(A){const v=A.textures;for(let W=0,V=v.length;W<V;W++){const J=v[W];if(p(J)){const $=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(J).__webglTexture;t.bindTexture($,Me),h($),t.unbindTexture()}}}function I(A){if(A.samples>0&&me(A)===!1){const v=A.textures,W=A.width,V=A.height;let J=n.COLOR_BUFFER_BIT;const $=[],Me=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=i.get(A),Te=v.length>1;if(Te)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){$.push(n.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&$.push(Me);const re=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(re===!1&&(A.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&te.__isTransmissionRenderTarget!==!0&&(J|=n.STENCIL_BUFFER_BIT)),Te&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,te.__webglColorRenderbuffer[Ae]),re===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Me]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Me])),Te){const ve=i.get(v[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,W,V,0,0,W,V,J,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,te.__webglColorRenderbuffer[Ae]);const re=i.get(v[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function ue(A){return Math.min(s.maxSamples,A.samples)}function me(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ce(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function he(A,v){const W=A.colorSpace,V=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Pn&&W!==yn&&(et.getTransfer(W)===ot?(V!==tn||J!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),v}function Fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=_,this.setTexture2D=P,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=B,this.rebindTextures=Se,this.setupRenderTarget=de,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=H,this.useMultisampledRTT=me}function km(n,e){function t(i,s=yn){let r;const o=et.getTransfer(s);if(i===bn)return n.UNSIGNED_BYTE;if(i===Sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===au)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ru)return n.BYTE;if(i===ou)return n.SHORT;if(i===xl)return n.UNSIGNED_SHORT;if(i===Ml)return n.INT;if(i===bi)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Ls)return n.HALF_FLOAT;if(i===lu)return n.ALPHA;if(i===cu)return n.RGB;if(i===tn)return n.RGBA;if(i===uu)return n.LUMINANCE;if(i===du)return n.LUMINANCE_ALPHA;if(i===yi)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===hu)return n.RED;if(i===El)return n.RED_INTEGER;if(i===fu)return n.RG;if(i===Tl)return n.RG_INTEGER;if(i===Al)return n.RGBA_INTEGER;if(i===tr||i===nr||i===ir||i===sr)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Po||i===Lo||i===Io||i===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wl)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Uo||i===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Uo)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===No)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Oo||i===Fo||i===Bo||i===zo||i===Ho||i===Vo||i===ko||i===Go||i===Wo||i===Xo||i===qo||i===Yo||i===Zo||i===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ho)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Go)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zo)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$o)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rr||i===Ko||i===jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rr)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pu||i===Jo||i===Qo||i===ea)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Gm extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,i),h=this._getHandJoint(c,S);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`;class Ym{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new Cn({vertexShader:Xm,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oe(new nn(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Zm extends jn{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const S=new Ym,p=t.getContextAttributes();let h=null,E=null;const x=[],T=[],D=new Xe;let C=null;const R=new Ct;R.layers.enable(1),R.viewport=new lt;const U=new Ct;U.layers.enable(2),U.viewport=new lt;const M=[R,U],_=new Gm;_.layers.enable(1),_.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=x[H];return ee===void 0&&(ee=new Pr,x[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=x[H];return ee===void 0&&(ee=new Pr,x[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=x[H];return ee===void 0&&(ee=new Pr,x[H]=ee),ee.getHandSpace()};function P(H){const ee=T.indexOf(H.inputSource);if(ee===-1)return;const fe=x[ee];fe!==void 0&&(fe.update(H.inputSource,H.frame,c||o),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function z(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let H=0;H<x.length;H++){const ee=T[H];ee!==null&&(T[H]=null,x[H].disconnect(ee))}L=null,F=null,S.reset(),e.setRenderTarget(h),m=null,f=null,d=null,s=null,E=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new $n(m.framebufferWidth,m.framebufferHeight,{format:tn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,fe=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?qi:yi,fe=p.stencil?Zi:bi);const Se={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new $n(f.textureWidth,f.textureHeight,{format:tn,type:bn,depthTexture:new zl(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const de=e.properties.get(E);de.__ignoreDepthValues=f.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(H){for(let ee=0;ee<H.removed.length;ee++){const fe=H.removed[ee],ae=T.indexOf(fe);ae>=0&&(T[ae]=null,x[ae].disconnect(fe))}for(let ee=0;ee<H.added.length;ee++){const fe=H.added[ee];let ae=T.indexOf(fe);if(ae===-1){for(let de=0;de<x.length;de++)if(de>=T.length){T.push(fe),ae=de;break}else if(T[de]===null){T[de]=fe,ae=de;break}if(ae===-1)break}const Se=x[ae];Se&&Se.connect(fe)}}const B=new b,Z=new b;function N(H,ee,fe){B.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);const ae=B.distanceTo(Z),Se=ee.projectionMatrix.elements,de=fe.projectionMatrix.elements,ie=Se[14]/(Se[10]-1),I=Se[14]/(Se[10]+1),ue=(Se[9]+1)/Se[5],me=(Se[9]-1)/Se[5],Ce=(Se[8]-1)/Se[0],he=(de[8]+1)/de[0],Fe=ie*Ce,A=ie*he,v=ae/(-Ce+he),W=v*-Ce;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(W),H.translateZ(v),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const V=ie+v,J=I+v,$=Fe-W,Me=A+(ae-W),te=ue*I/J*V,Te=me*I/J*V;H.projectionMatrix.makePerspective($,Me,te,Te,V,J),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function j(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;S.texture!==null&&(H.near=S.depthNear,H.far=S.depthFar),_.near=U.near=R.near=H.near,_.far=U.far=R.far=H.far,(L!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,F=_.far,R.near=L,R.far=F,U.near=L,U.far=F,R.updateProjectionMatrix(),U.updateProjectionMatrix(),H.updateProjectionMatrix());const ee=H.parent,fe=_.cameras;j(_,ee);for(let ae=0;ae<fe.length;ae++)j(fe[ae],ee);fe.length===2?N(_,R,U):_.projectionMatrix.copy(R.projectionMatrix),K(H,_,ee)};function K(H,ee,fe){fe===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ri*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return S.texture!==null};let ne=null;function ge(H,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ae=!1;fe.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let de=0;de<fe.length;de++){const ie=fe[de];let I=null;if(m!==null)I=m.getViewport(ie);else{const me=d.getViewSubImage(f,ie);I=me.viewport,de===0&&(e.setRenderTargetTextures(E,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(E))}let ue=M[de];ue===void 0&&(ue=new Ct,ue.layers.enable(de),ue.viewport=new lt,M[de]=ue),ue.matrix.fromArray(ie.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ie.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(I.x,I.y,I.width,I.height),de===0&&(_.matrix.copy(ue.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(ue)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const de=d.getDepthInformation(fe[0]);de&&de.isValid&&de.texture&&S.init(e,de,s.renderState)}}for(let fe=0;fe<x.length;fe++){const ae=T[fe],Se=x[fe];ae!==null&&Se!==void 0&&Se.update(ae,ee,c||o)}S.render(e,_),ne&&ne(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Oe=new Bl;Oe.setAnimationLoop(ge),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const Hn=new Kt,$m=new ct;function Km(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Nl(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,E,x,T){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,T)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),S(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,E,x):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===It&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===It&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const E=e.get(h),x=E.envMap,T=E.envMapRotation;if(x&&(p.envMap.value=x,Hn.copy(T),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),p.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(Hn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const D=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*D,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,x){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=x*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function S(p,h){const E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jm(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const T=x.program;i.uniformBlockBinding(E,T)}function c(E,x){let T=s[E.id];T===void 0&&(g(E),T=u(E),s[E.id]=T,E.addEventListener("dispose",p));const D=x.program;i.updateUBOMapping(E,D);const C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function u(E){const x=d();E.__bindingPointIndex=x;const T=n.createBuffer(),D=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=s[E.id],T=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,R=T.length;C<R;C++){const U=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,_=U.length;M<_;M++){const L=U[M];if(m(L,C,M,D)===!0){const F=L.__offset,P=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let k=0;k<P.length;k++){const B=P[k],Z=S(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,F+z,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,T,D){const C=E.value,R=x+"_"+T;if(D[R]===void 0)return typeof C=="number"||typeof C=="boolean"?D[R]=C:D[R]=C.clone(),!0;{const U=D[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return D[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(E){const x=E.uniforms;let T=0;const D=16;for(let R=0,U=x.length;R<U;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let _=0,L=M.length;_<L;_++){const F=M[_],P=Array.isArray(F.value)?F.value:[F.value];for(let z=0,k=P.length;z<k;z++){const B=P[z],Z=S(B),N=T%D;N!==0&&D-N<Z.boundary&&(T+=D-N),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=Z.storage}}}const C=T%D;return C>0&&(T+=D-C),E.__size=T,E.__cache={},this}function S(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function h(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Jm{constructor(e={}){const{canvas:t=Vu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),g=new Int32Array(4);let S=null,p=null;const h=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this._useLegacyLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const x=this;let T=!1,D=0,C=0,R=null,U=-1,M=null;const _=new lt,L=new lt;let F=null;const P=new Ye(0);let z=0,k=t.width,B=t.height,Z=1,N=null,j=null;const K=new lt(0,0,k,B),ne=new lt(0,0,k,B);let ge=!1;const Oe=new so;let H=!1,ee=!1;const fe=new ct,ae=new Xe,Se=new b,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return R===null?Z:1}let I=i;function ue(y,O){const X=t.getContext(y,O);return X!==null?X:null}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",we,!1),I===null){const O="webgl2";if(I=ue(O,y),I===null)throw ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let me,Ce,he,Fe,A,v,W,V,J,$,Me,te,Te,Ae,re,ve,Le,xe,ye,Ue,qe,je,De,Ze;function Ee(){me=new op(I),me.init(),Ce=new Qf(I,me,e),je=new km(I,me),he=new Hm(I),Fe=new cp(I),A=new wm,v=new Vm(I,me,he,A,Ce,je,Fe),W=new tp(x),V=new rp(x),J=new fd(I),De=new jf(I,J),$=new ap(I,J,Fe,De),Me=new dp(I,$,J,Fe),ye=new up(I,Ce,v),ve=new ep(A),te=new Am(x,W,V,me,Ce,De,ve),Te=new Km(x,A),Ae=new Rm,re=new Um(me),xe=new Kf(x,W,V,he,Me,f,l),Le=new zm(x,Me,Ce),Ze=new jm(I,Fe,Ce,he),Ue=new Jf(I,me,Fe),qe=new lp(I,me,Fe),Fe.programs=te.programs,x.capabilities=Ce,x.extensions=me,x.properties=A,x.renderLists=Ae,x.shadowMap=Le,x.state=he,x.info=Fe}Ee();const w=new Zm(x,I);this.xr=w,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=me.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=me.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(k,B,!1))},this.getSize=function(y){return y.set(k,B)},this.setSize=function(y,O,X=!0){if(w.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,B=O,t.width=Math.floor(y*Z),t.height=Math.floor(O*Z),X===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(k*Z,B*Z).floor()},this.setDrawingBufferSize=function(y,O,X){k=y,B=O,Z=X,t.width=Math.floor(y*X),t.height=Math.floor(O*X),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(_)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,O,X,q){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,O,X,q),he.viewport(_.copy(K).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(ne)},this.setScissor=function(y,O,X,q){y.isVector4?ne.set(y.x,y.y,y.z,y.w):ne.set(y,O,X,q),he.scissor(L.copy(ne).multiplyScalar(Z).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(y){he.setScissorTest(ge=y)},this.setOpaqueSort=function(y){N=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(y=!0,O=!0,X=!0){let q=0;if(y){let G=!1;if(R!==null){const _e=R.texture.format;G=_e===Al||_e===Tl||_e===El}if(G){const _e=R.texture.type,Re=_e===bn||_e===bi||_e===xl||_e===Zi||_e===Sl||_e===yl,Ie=xe.getClearColor(),Ne=xe.getClearAlpha(),ze=Ie.r,Be=Ie.g,He=Ie.b;Re?(m[0]=ze,m[1]=Be,m[2]=He,m[3]=Ne,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=ze,g[1]=Be,g[2]=He,g[3]=Ne,I.clearBufferiv(I.COLOR,0,g))}else q|=I.COLOR_BUFFER_BIT}O&&(q|=I.DEPTH_BUFFER_BIT),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ae.dispose(),re.dispose(),A.dispose(),W.dispose(),V.dispose(),Me.dispose(),De.dispose(),Ze.dispose(),te.dispose(),w.dispose(),w.removeEventListener("sessionstart",jt),w.removeEventListener("sessionend",Jt),Dn.stop()};function le(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=Fe.autoReset,O=Le.enabled,X=Le.autoUpdate,q=Le.needsUpdate,G=Le.type;Ee(),Fe.autoReset=y,Le.enabled=O,Le.autoUpdate=X,Le.needsUpdate=q,Le.type=G}function we(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Pe(y){const O=y.target;O.removeEventListener("dispose",Pe),Qe(O)}function Qe(y){tt(y),A.remove(y)}function tt(y){const O=A.get(y).programs;O!==void 0&&(O.forEach(function(X){te.releaseProgram(X)}),y.isShaderMaterial&&te.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,X,q,G,_e){O===null&&(O=de);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Ie=xc(y,O,X,q,G);he.setMaterial(q,Re);let Ne=X.index,ze=1;if(q.wireframe===!0){if(Ne=$.getWireframeAttribute(X),Ne===void 0)return;ze=2}const Be=X.drawRange,He=X.attributes.position;let ft=Be.start*ze,Ut=(Be.start+Be.count)*ze;_e!==null&&(ft=Math.max(ft,_e.start*ze),Ut=Math.min(Ut,(_e.start+_e.count)*ze)),Ne!==null?(ft=Math.max(ft,0),Ut=Math.min(Ut,Ne.count)):He!=null&&(ft=Math.max(ft,0),Ut=Math.min(Ut,He.count));const vt=Ut-ft;if(vt<0||vt===1/0)return;De.setup(G,q,Ie,X,Ne);let sn,ut=Ue;if(Ne!==null&&(sn=J.get(Ne),ut=qe,ut.setIndex(sn)),G.isMesh)q.wireframe===!0?(he.setLineWidth(q.wireframeLinewidth*ie()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(G.isLine){let Ve=q.linewidth;Ve===void 0&&(Ve=1),he.setLineWidth(Ve*ie()),G.isLineSegments?ut.setMode(I.LINES):G.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else G.isPoints?ut.setMode(I.POINTS):G.isSprite&&ut.setMode(I.TRIANGLES);if(G.isBatchedMesh)ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ut.renderInstances(ft,vt,G.count);else if(X.isInstancedBufferGeometry){const Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ks=Math.min(X.instanceCount,Ve);ut.renderInstances(ft,vt,Ks)}else ut.render(ft,vt)};function nt(y,O,X){y.transparent===!0&&y.side===Vt&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,Qi(y,O,X),y.side=Rn,y.needsUpdate=!0,Qi(y,O,X),y.side=Vt):Qi(y,O,X)}this.compile=function(y,O,X=null){X===null&&(X=y),p=re.get(X),p.init(),E.push(p),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),y!==X&&y.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(x._useLegacyLights);const q=new Set;return y.traverse(function(G){const _e=G.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const Ie=_e[Re];nt(Ie,X,G),q.add(Ie)}else nt(_e,X,G),q.add(_e)}),E.pop(),p=null,q},this.compileAsync=function(y,O,X=null){const q=this.compile(y,O,X);return new Promise(G=>{function _e(){if(q.forEach(function(Re){A.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){G(y);return}setTimeout(_e,10)}me.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let mt=null;function rt(y){mt&&mt(y)}function jt(){Dn.stop()}function Jt(){Dn.start()}const Dn=new Bl;Dn.setAnimationLoop(rt),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(y){mt=y,w.setAnimationLoop(y),y===null?Dn.stop():Dn.start()},w.addEventListener("sessionstart",jt),w.addEventListener("sessionend",Jt),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),w.enabled===!0&&w.isPresenting===!0&&(w.cameraAutoUpdate===!0&&w.updateCamera(O),O=w.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,O,R),p=re.get(y,E.length),p.init(),E.push(p),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Oe.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,H=ve.init(this.clippingPlanes,ee),S=Ae.get(y,h.length),S.init(),h.push(S),xo(y,O,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(N,j),this.info.render.frame++,H===!0&&ve.beginShadows();const X=p.state.shadowsArray;if(Le.render(X,y,O),H===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(w.enabled===!1||w.isPresenting===!1||w.hasDepthSensing()===!1)&&xe.render(S,y),p.setupLights(x._useLegacyLights),O.isArrayCamera){const q=O.cameras;for(let G=0,_e=q.length;G<_e;G++){const Re=q[G];Mo(S,y,Re,Re.viewport)}}else Mo(S,y,O);R!==null&&(v.updateMultisampleRenderTarget(R),v.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(x,y,O),De.resetDefaultState(),U=-1,M=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,h.pop(),h.length>0?S=h[h.length-1]:S=null};function xo(y,O,X,q){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Oe.intersectsSprite(y)){q&&Se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);const Re=Me.update(y),Ie=y.material;Ie.visible&&S.push(y,Re,Ie,X,Se.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Oe.intersectsObject(y))){const Re=Me.update(y),Ie=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Se.copy(y.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Se.copy(Re.boundingSphere.center)),Se.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(Ie)){const Ne=Re.groups;for(let ze=0,Be=Ne.length;ze<Be;ze++){const He=Ne[ze],ft=Ie[He.materialIndex];ft&&ft.visible&&S.push(y,Re,ft,X,Se.z,He)}}else Ie.visible&&S.push(y,Re,Ie,X,Se.z,null)}}const _e=y.children;for(let Re=0,Ie=_e.length;Re<Ie;Re++)xo(_e[Re],O,X,q)}function Mo(y,O,X,q){const G=y.opaque,_e=y.transmissive,Re=y.transparent;p.setupLightsView(X),H===!0&&ve.setGlobalState(x.clippingPlanes,X),_e.length>0&&vc(G,_e,O,X),q&&he.viewport(_.copy(q)),G.length>0&&Ji(G,O,X),_e.length>0&&Ji(_e,O,X),Re.length>0&&Ji(Re,O,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function vc(y,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new $n(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Ls:bn,minFilter:qn,samples:4,stencilBuffer:r});const ze=A.get(p.state.transmissionRenderTarget);ze.__isTransmissionRenderTarget=!0}const _e=p.state.transmissionRenderTarget;x.getDrawingBufferSize(ae),_e.setSize(ae.x,ae.y);const Re=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(P),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=wn,Ji(y,X,q),v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e);let Ne=!1;for(let ze=0,Be=O.length;ze<Be;ze++){const He=O[ze],ft=He.object,Ut=He.geometry,vt=He.material,sn=He.group;if(vt.side===Vt&&ft.layers.test(q.layers)){const ut=vt.side;vt.side=It,vt.needsUpdate=!0,So(ft,X,q,Ut,vt,sn),vt.side=ut,vt.needsUpdate=!0,Ne=!0}}Ne===!0&&(v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e)),x.setRenderTarget(Re),x.setClearColor(P,z),x.toneMapping=Ie}function Ji(y,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let G=0,_e=y.length;G<_e;G++){const Re=y[G],Ie=Re.object,Ne=Re.geometry,ze=q===null?Re.material:q,Be=Re.group;Ie.layers.test(X.layers)&&So(Ie,O,X,Ne,ze,Be)}}function So(y,O,X,q,G,_e){y.onBeforeRender(x,O,X,q,G,_e),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(x,O,X,q,y,_e),G.transparent===!0&&G.side===Vt&&G.forceSinglePass===!1?(G.side=It,G.needsUpdate=!0,x.renderBufferDirect(X,O,q,G,y,_e),G.side=Rn,G.needsUpdate=!0,x.renderBufferDirect(X,O,q,G,y,_e),G.side=Vt):x.renderBufferDirect(X,O,q,G,y,_e),y.onAfterRender(x,O,X,q,G,_e)}function Qi(y,O,X){O.isScene!==!0&&(O=de);const q=A.get(y),G=p.state.lights,_e=p.state.shadowsArray,Re=G.state.version,Ie=te.getParameters(y,G.state,_e,O,X),Ne=te.getProgramCacheKey(Ie);let ze=q.programs;q.environment=y.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(y.isMeshStandardMaterial?V:W).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",Pe),ze=new Map,q.programs=ze);let Be=ze.get(Ne);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Re)return Eo(y,Ie),Be}else Ie.uniforms=te.getUniforms(y),y.onBuild(X,Ie,x),y.onBeforeCompile(Ie,x),Be=te.acquireProgram(Ie,Ne),ze.set(Ne,Be),q.uniforms=Ie.uniforms;const He=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(He.clippingPlanes=ve.uniform),Eo(y,Ie),q.needsLights=Sc(y),q.lightsStateVersion=Re,q.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function yo(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Eo(y,O){const X=A.get(y);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function xc(y,O,X,q,G){O.isScene!==!0&&(O=de),v.resetTextureUnits();const _e=O.fog,Re=q.isMeshStandardMaterial?O.environment:null,Ie=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pn,Ne=(q.isMeshStandardMaterial?V:W).get(q.envMap||Re),ze=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,Ut=!!X.morphAttributes.color;let vt=wn;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(vt=x.toneMapping);const sn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=sn!==void 0?sn.length:0,Ve=A.get(q),Ks=p.state.lights;if(H===!0&&(ee===!0||y!==M)){const zt=y===M&&q.id===U;ve.setState(q,y,zt)}let at=!1;q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ks.state.version||Ve.outputColorSpace!==Ie||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==Ne||q.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ve.numPlanes||Ve.numIntersection!==ve.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Be||Ve.morphTargets!==He||Ve.morphNormals!==ft||Ve.morphColors!==Ut||Ve.toneMapping!==vt||Ve.morphTargetsCount!==ut)&&(at=!0):(at=!0,Ve.__version=q.version);let Un=Ve.currentProgram;at===!0&&(Un=Qi(q,O,G));let To=!1,Ui=!1,js=!1;const St=Un.getUniforms(),mn=Ve.uniforms;if(he.useProgram(Un.program)&&(To=!0,Ui=!0,js=!0),q.id!==U&&(U=q.id,Ui=!0),To||M!==y){St.setValue(I,"projectionMatrix",y.projectionMatrix),St.setValue(I,"viewMatrix",y.matrixWorldInverse);const zt=St.map.cameraPosition;zt!==void 0&&zt.setValue(I,Se.setFromMatrixPosition(y.matrixWorld)),Ce.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&St.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ui=!0,js=!0)}if(G.isSkinnedMesh){St.setOptional(I,G,"bindMatrix"),St.setOptional(I,G,"bindMatrixInverse");const zt=G.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),St.setValue(I,"boneTexture",zt.boneTexture,v))}G.isBatchedMesh&&(St.setOptional(I,G,"batchingTexture"),St.setValue(I,"batchingTexture",G._matricesTexture,v));const Js=X.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&ye.update(G,X,Un),(Ui||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,St.setValue(I,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(mn.envMap.value=Ne,mn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(mn.envMapIntensity.value=O.environmentIntensity),Ui&&(St.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Mc(mn,js),_e&&q.fog===!0&&Te.refreshFogUniforms(mn,_e),Te.refreshMaterialUniforms(mn,q,Z,B,p.state.transmissionRenderTarget),ws.upload(I,yo(Ve),mn,v)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ws.upload(I,yo(Ve),mn,v),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&St.setValue(I,"center",G.center),St.setValue(I,"modelViewMatrix",G.modelViewMatrix),St.setValue(I,"normalMatrix",G.normalMatrix),St.setValue(I,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const zt=q.uniformsGroups;for(let Qs=0,yc=zt.length;Qs<yc;Qs++){const Ao=zt[Qs];Ze.update(Ao,Un),Ze.bind(Ao,Un)}}return Un}function Mc(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Sc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,O,X){A.get(y.texture).__webglTexture=O,A.get(y.depthTexture).__webglTexture=X;const q=A.get(y);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const X=A.get(y);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,X=0){R=y,D=O,C=X;let q=!0,G=null,_e=!1,Re=!1;if(y){const Ne=A.get(y);Ne.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(I.FRAMEBUFFER,null),q=!1):Ne.__webglFramebuffer===void 0?v.setupRenderTarget(y):Ne.__hasExternalTextures&&v.rebindTextures(y,A.get(y.texture).__webglTexture,A.get(y.depthTexture).__webglTexture);const ze=y.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Re=!0);const Be=A.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?G=Be[O][X]:G=Be[O],_e=!0):y.samples>0&&v.useMultisampledRTT(y)===!1?G=A.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[X]:G=Be,_.copy(y.viewport),L.copy(y.scissor),F=y.scissorTest}else _.copy(K).multiplyScalar(Z).floor(),L.copy(ne).multiplyScalar(Z).floor(),F=ge;if(he.bindFramebuffer(I.FRAMEBUFFER,G)&&q&&he.drawBuffers(y,G),he.viewport(_),he.scissor(L),he.setScissorTest(F),_e){const Ne=A.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,X)}else if(Re){const Ne=A.get(y.texture),ze=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,ze)}U=-1},this.readRenderTargetPixels=function(y,O,X,q,G,_e,Re){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=A.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){he.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Ne=y.texture,ze=Ne.format,Be=Ne.type;if(ze!==tn&&je.convert(ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Ls&&(me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float"));if(Be!==bn&&je.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&Be!==Tn&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-q&&X>=0&&X<=y.height-G&&I.readPixels(O,X,q,G,je.convert(ze),je.convert(Be),_e)}finally{const Ne=R!==null?A.get(R).__webglFramebuffer:null;he.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(y,O,X=0){const q=Math.pow(2,-X),G=Math.floor(O.image.width*q),_e=Math.floor(O.image.height*q);v.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,y.x,y.y,G,_e),he.unbindTexture()},this.copyTextureToTexture=function(y,O,X,q=0){const G=O.image.width,_e=O.image.height,Re=je.convert(X.format),Ie=je.convert(X.type);v.setTexture2D(X,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,q,y.x,y.y,G,_e,Re,Ie,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,q,y.x,y.y,O.mipmaps[0].width,O.mipmaps[0].height,Re,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,q,y.x,y.y,Re,Ie,O.image),q===0&&X.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(y,O,X,q,G=0){const _e=Math.round(y.max.x-y.min.x),Re=Math.round(y.max.y-y.min.y),Ie=y.max.z-y.min.z+1,Ne=je.convert(q.format),ze=je.convert(q.type);let Be;if(q.isData3DTexture)v.setTexture3D(q,0),Be=I.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)v.setTexture2DArray(q,0),Be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const He=I.getParameter(I.UNPACK_ROW_LENGTH),ft=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ut=I.getParameter(I.UNPACK_SKIP_PIXELS),vt=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES),ut=X.isCompressedTexture?X.mipmaps[G]:X.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,y.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,y.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,y.min.z),X.isDataTexture||X.isData3DTexture?I.texSubImage3D(Be,G,O.x,O.y,O.z,_e,Re,Ie,Ne,ze,ut.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Be,G,O.x,O.y,O.z,_e,Re,Ie,Ne,ut.data):I.texSubImage3D(Be,G,O.x,O.y,O.z,_e,Re,Ie,Ne,ze,ut),I.pixelStorei(I.UNPACK_ROW_LENGTH,He),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),G===0&&q.generateMipmaps&&I.generateMipmap(Be),he.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?v.setTextureCube(y,0):y.isData3DTexture?v.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?v.setTexture2DArray(y,0):v.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){D=0,C=0,R=null,he.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===ks?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qm extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kt,this.environmentIntensity=1,this.environmentRotation=new Kt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xl extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qa=new ct,Yr=new no,Es=new Gs,Ts=new b;class eg extends Mt{constructor(e=new Gt,t=new Xl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;qa.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(qa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,S=m;g<S;g++){const p=c.getX(g);Ts.fromBufferAttribute(d,p),Ya(Ts,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,S=m;g<S;g++)Ts.fromBufferAttribute(d,g),Ya(Ts,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ya(n,e,t,i,s,r,o){const a=Yr.distanceSqToPoint(n);if(a<t){const l=new b;Yr.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class En extends Gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],m=[];let g=0;const S=[],p=i/2;let h=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(m,2));function E(){const T=new b,D=new b;let C=0;const R=(t-e)/i;for(let U=0;U<=r;U++){const M=[],_=U/r,L=_*(t-e)+e;for(let F=0;F<=s;F++){const P=F/s,z=P*l+a,k=Math.sin(z),B=Math.cos(z);D.x=L*k,D.y=-_*i+p,D.z=L*B,d.push(D.x,D.y,D.z),T.set(k,R,B).normalize(),f.push(T.x,T.y,T.z),m.push(P,1-_),M.push(g++)}S.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){const _=S[M][U],L=S[M+1][U],F=S[M+1][U+1],P=S[M][U+1];u.push(_,L,P),u.push(L,F,P),C+=6}c.addGroup(h,C,0),h+=C}function x(T){const D=g,C=new Xe,R=new b;let U=0;const M=T===!0?e:t,_=T===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,p*_,0),f.push(0,_,0),m.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const z=F/s*l+a,k=Math.cos(z),B=Math.sin(z);R.x=M*B,R.y=p*_,R.z=M*k,d.push(R.x,R.y,R.z),f.push(0,_,0),C.x=k*.5+.5,C.y=B*.5*_+.5,m.push(C.x,C.y),g++}for(let F=0;F<s;F++){const P=D+F,z=L+F;T===!0?u.push(z,z+1,P):u.push(z+1,z,P),U+=3}c.addGroup(h,U,T===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xs extends Gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new b,T=new b,D=new b;for(let C=0;C<t.length;C+=3)m(t[C+0],x),m(t[C+1],T),m(t[C+2],D),l(x,T,D,E)}function l(E,x,T,D){const C=D+1,R=[];for(let U=0;U<=C;U++){R[U]=[];const M=E.clone().lerp(T,U/C),_=x.clone().lerp(T,U/C),L=C-U;for(let F=0;F<=L;F++)F===0&&U===C?R[U][F]=M:R[U][F]=M.clone().lerp(_,F/L)}for(let U=0;U<C;U++)for(let M=0;M<2*(C-U)-1;M++){const _=Math.floor(M/2);M%2===0?(f(R[U][_+1]),f(R[U+1][_]),f(R[U][_])):(f(R[U][_+1]),f(R[U+1][_+1]),f(R[U+1][_]))}}function c(E){const x=new b;for(let T=0;T<r.length;T+=3)x.x=r[T+0],x.y=r[T+1],x.z=r[T+2],x.normalize().multiplyScalar(E),r[T+0]=x.x,r[T+1]=x.y,r[T+2]=x.z}function u(){const E=new b;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];const T=p(E)/2/Math.PI+.5,D=h(E)/Math.PI+.5;o.push(T,1-D)}g(),d()}function d(){for(let E=0;E<o.length;E+=6){const x=o[E+0],T=o[E+2],D=o[E+4],C=Math.max(x,T,D),R=Math.min(x,T,D);C>.9&&R<.1&&(x<.2&&(o[E+0]+=1),T<.2&&(o[E+2]+=1),D<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function m(E,x){const T=E*3;x.x=e[T+0],x.y=e[T+1],x.z=e[T+2]}function g(){const E=new b,x=new b,T=new b,D=new b,C=new Xe,R=new Xe,U=new Xe;for(let M=0,_=0;M<r.length;M+=9,_+=6){E.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),T.set(r[M+6],r[M+7],r[M+8]),C.set(o[_+0],o[_+1]),R.set(o[_+2],o[_+3]),U.set(o[_+4],o[_+5]),D.copy(E).add(x).add(T).divideScalar(3);const L=p(D);S(C,_+0,E,L),S(R,_+2,x,L),S(U,_+4,T,L)}}function S(E,x,T,D){D<0&&E.x===1&&(o[x]=E.x-1),T.x===0&&T.z===0&&(o[x]=D/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.vertices,e.indices,e.radius,e.details)}}class Fs extends Xs{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fs(e.radius,e.detail)}}class ao extends Xs{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ao(e.radius,e.detail)}}class Ki extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new b,f=new b,m=[],g=[],S=[],p=[];for(let h=0;h<=i;h++){const E=[],x=h/i;let T=0;h===0&&o===0?T=.5/t:h===i&&l===Math.PI&&(T=-.5/t);for(let D=0;D<=t;D++){const C=D/t;d.x=-e*Math.cos(s+C*r)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),p.push(C+T,1-x),E.push(c++)}u.push(E)}for(let h=0;h<i;h++)for(let E=0;E<t;E++){const x=u[h][E+1],T=u[h][E],D=u[h+1][E],C=u[h+1][E+1];(h!==0||o>0)&&m.push(x,T,C),(h!==i-1||l<Math.PI)&&m.push(T,D,C)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(S,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Je extends Li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kt,this.combine=Qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lo extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Lr=new ct,Za=new b,$a=new b;class ql{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Za.setFromMatrixPosition(e.matrixWorld),t.position.copy(Za),$a.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($a),t.updateMatrixWorld(),Lr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tg extends ql{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ri*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ng extends lo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ka=new ct,zi=new b,Ir=new b;class ig extends ql{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zi.setFromMatrixPosition(e.matrixWorld),i.position.copy(zi),Ir.copy(i.position),Ir.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ir),i.updateMatrixWorld(),s.makeTranslation(-zi.x,-zi.y,-zi.z),Ka.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka)}}class Bs extends lo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sg extends lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ja=new ct;class rg{constructor(e,t,i=0,s=1/0){this.ray=new no(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ja.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ja),this}intersectObject(e,t=!0,i=[]){return Zr(e,this,i,t),i.sort(Ja),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zr(e[s],this,i,t);return i.sort(Ja),i}}function Ja(n,e){return n.distance-e.distance}function Zr(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Zr(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);const og=4.4,ag=8,lg=2.2,Dr=1.7,cg=.95,ug=8.2,dg=-22,hg=2,fg=.05,pg=.11,Qa=.4,Yn=100,Yi=50,Yl="dns_unlocked_level",Zl="dns_level_inv_",$l="dns_infinite_highscore",Kl="dns_infinite_top10",jl="dns_settings";function Jl(){try{const n=localStorage.getItem(Yl);if(!n)return 1;const e=parseInt(n,10);return isNaN(e)||e<1?1:Math.min(30,e)}catch{return 1}}function $r(n){try{const e=Jl();n>e&&localStorage.setItem(Yl,String(Math.min(30,n)))}catch{}}function mg(n,e,t,i=0){try{const s={health:Math.max(15,e),shield:Math.max(0,Math.min(Yi,i)),weapons:{pistol:{...t.pistol},rifle:{...t.rifle},shotgun:{...t.shotgun}}};localStorage.setItem(`${Zl}${n}`,JSON.stringify(s))}catch{}}function gg(n){try{const e=localStorage.getItem(`${Zl}${n}`);return e?JSON.parse(e):null}catch{return null}}function Ql(){try{const n=localStorage.getItem($l);if(!n)return 0;const e=parseFloat(n);return isNaN(e)?0:e}catch{return 0}}function _g(n){try{const e=Ql();n>e&&localStorage.setItem($l,String(n))}catch{}}function ec(){try{const n=localStorage.getItem(Kl);if(!n)return[];const e=JSON.parse(n);return Array.isArray(e)?e.sort((t,i)=>i.timeSeconds-t.timeSeconds).slice(0,10):[]}catch{return[]}}function vg(n,e){try{const t=ec(),i=new Date,s=`${i.getDate().toString().padStart(2,"0")}/${(i.getMonth()+1).toString().padStart(2,"0")} ${i.getHours().toString().padStart(2,"0")}:${i.getMinutes().toString().padStart(2,"0")}`;t.push({timeSeconds:Math.round(n),kills:e,date:s}),t.sort((o,a)=>a.timeSeconds-o.timeSeconds);const r=t.slice(0,10);return localStorage.setItem(Kl,JSON.stringify(r)),r}catch{return[]}}function zs(){const n={showFps:!0,ps1Filter:!0,touchControls:!1};try{const e=localStorage.getItem(jl);return e?{...n,...JSON.parse(e)}:n}catch{return n}}function xg(n){try{const t={...zs(),...n};return localStorage.setItem(jl,JSON.stringify(t)),t}catch{return zs()}}const ji={pistol:{type:"pistol",name:"PISTOLA 9MM",slot:1,magSize:9,fireRate:.22,pellets:1,spread:.008,recoil:.14,reloadTime:1600,damageHead:70,damageTorso:28,damageLimbs:16,ammoType:"9×19mm Luger (9 Balas)"},rifle:{type:"rifle",name:"FUSIL AK-47 TÁCTICO",slot:2,magSize:30,fireRate:.082,pellets:1,spread:.02,recoil:.11,reloadTime:2200,damageHead:90,damageTorso:38,damageLimbs:22,ammoType:"7.62×39mm Soviético (30 Balas)",isAutomatic:!0},shotgun:{type:"shotgun",name:"ESCOPETA 12G (BOMBEO)",slot:3,magSize:8,fireRate:.78,pellets:9,spread:.085,recoil:.42,reloadTime:480,damageHead:35,damageTorso:24,damageLimbs:15,ammoType:"Cartuchos Calibre 12",isIncrementalReload:!0}};function Mg(){return{health:Yn,maxHealth:Yn,shield:25,maxShield:Yi,currentWeapon:"pistol",weapons:{pistol:{magAmmo:9,reserveAmmo:36},rifle:{magAmmo:30,reserveAmmo:90},shotgun:{magAmmo:8,reserveAmmo:16}},kills:0,flashlight:!0,isRunning:!1,isCrouching:!1,isGrounded:!0,isAiming:!1,isShooting:!1,isReloading:!1,isPaused:!1,isGameOver:!1,gameMode:"horde",currentWave:1,maxWaves:30,totalEnemiesInWave:5,enemiesSpawnedSoFar:0,enemiesRemaining:0,maxActiveEnemies:10,totalBossesDefeated:0,infiniteSurvivalTime:0,infiniteKills:0,waveStartTime:0,waveShotsFired:0,waveShotsHit:0,waveHeadshots:0,waveDamageDealt:0,waveDamageTaken:0,waveKills:0}}function co(n,e="horde",t=1){n.kills=0,n.flashlight=!0,n.isRunning=!1,n.isCrouching=!1,n.isGrounded=!0,n.isAiming=!1,n.isShooting=!1,n.isReloading=!1,n.isPaused=!1,n.isGameOver=!1,n.gameMode=e,n.currentWave=t,n.maxWaves=30,n.totalEnemiesInWave=5,n.enemiesSpawnedSoFar=0,n.enemiesRemaining=0,n.maxActiveEnemies=10,n.totalBossesDefeated=0,n.infiniteSurvivalTime=0,n.infiniteKills=0;let i=null;e==="horde"&&t>1&&(i=gg(t)),i?(n.health=i.health,n.maxHealth=Yn,n.shield=i.shield!==void 0?i.shield:25,n.maxShield=Yi,n.currentWeapon="pistol",n.weapons.pistol={...i.weapons.pistol},n.weapons.rifle={...i.weapons.rifle},n.weapons.shotgun={...i.weapons.shotgun}):(n.health=Yn,n.maxHealth=Yn,n.shield=25,n.maxShield=Yi,n.currentWeapon="pistol",n.weapons.pistol={magAmmo:9,reserveAmmo:36},n.weapons.rifle={magAmmo:30,reserveAmmo:90},n.weapons.shotgun={magAmmo:8,reserveAmmo:16}),tc(n)}function tc(n){n.waveStartTime=performance.now(),n.waveShotsFired=0,n.waveShotsHit=0,n.waveHeadshots=0,n.waveDamageDealt=0,n.waveDamageTaken=0,n.waveKills=0}function Sg(){return{w:!1,a:!1,s:!1,d:!1,shift:!1,ctrl:!1,space:!1,f:!1,r:!1,digit1:!1,digit2:!1,digit3:!1}}function yg(n,e,t,i,s){const r=l=>{(l.ctrlKey||l.metaKey)&&(l.code==="KeyW"||l.key==="w"||l.key==="W")&&(l.preventDefault(),l.stopPropagation())};window.addEventListener("keydown",r,{capture:!0,passive:!1}),window.addEventListener("contextmenu",l=>{l.preventDefault()});const o=l=>{if(!(e.isPaused||e.isGameOver))switch((l.ctrlKey||l.metaKey)&&(l.code==="KeyW"||l.key==="w"||l.key==="W")&&(l.preventDefault(),l.stopPropagation()),l.code){case"KeyW":n.w=!0;break;case"KeyA":n.a=!0;break;case"KeyS":n.s=!0;break;case"KeyD":n.d=!0;break;case"ShiftLeft":case"ShiftRight":n.shift=!0;break;case"ControlLeft":case"ControlRight":case"KeyC":n.ctrl=!0;break;case"Space":n.space=!0;break;case"Digit1":case"Numpad1":i("pistol");break;case"Digit2":case"Numpad2":i("rifle");break;case"Digit3":case"Numpad3":i("shotgun");break}},a=l=>{switch(l.code){case"KeyW":n.w=!1;break;case"KeyA":n.a=!1;break;case"KeyS":n.s=!1;break;case"KeyD":n.d=!1;break;case"ShiftLeft":case"ShiftRight":n.shift=!1;break;case"ControlLeft":case"ControlRight":case"KeyC":n.ctrl=!1;break;case"Space":n.space=!1;break}};window.addEventListener("keydown",o),window.addEventListener("keyup",a),window.addEventListener("keydown",l=>{e.isPaused||e.isGameOver||(l.code==="KeyF"&&(e.flashlight=!e.flashlight),l.code==="KeyR"&&s())}),window.addEventListener("mousedown",l=>{if(e.isPaused||e.isGameOver)return;const c=l.target;c&&(c.closest(".touch-btn")||c.closest(".game-btn")||c.closest(".pause-btn")||c.closest(".level-card")||c.closest("#start-screen")||c.closest("#pause-screen")||c.closest("#level-select-modal")||c.closest("#wave-modal")||c.closest("#gameover-modal")||c.closest("#settings-modal")||c.closest("#leaderboard-modal"))||(l.button===0?(e.isShooting=!0,t()):l.button===2&&(e.isAiming=!0))}),window.addEventListener("mouseup",l=>{l.button===0?e.isShooting=!1:l.button===2&&(e.isAiming=!1)}),window.addEventListener("wheel",l=>{if(e.isPaused||e.isGameOver)return;const c=["pistol","rifle","shotgun"],u=c.indexOf(e.currentWeapon);if(l.deltaY>0){const d=c[(u+1)%c.length];i(d)}else if(l.deltaY<0){const d=c[(u-1+c.length)%c.length];i(d)}})}function Ft(n,e,t){return n+(e-n)*t}function Mi(n,e,t){return Math.max(e,Math.min(t,n))}function it(n,e,t){return new Ye(n/255,e/255,t/255)}const Eg=new ce(.32,.22,.22),Tg=new ce(.34,.05,.24),Ag=new ce(.42,.28,.24),wg=new ce(.43,.06,.25),bg=new ce(.36,.24,.26),Rg=new ce(.37,.1,.12),Cg=new ce(.46,.36,.24),Pg=new nn(.08,.22),Lg=new nn(.22,.08),Ig=new ce(.4,.38,.22),Dg=new ce(.26,.22,.25),Ug=new ce(.28,.06,.18),Hi=new ao(.09,0),Ng=new Je({color:2373666,emissive:660490}),Og=new Je({color:1384981}),Fg=new dt({color:65382}),Bg=new Je({color:4014643,emissive:1711117}),zg=new dt({color:16763938}),Hg=new dt({color:16763904}),Vg=new Je({color:8921109,emissive:2229506}),kg=new dt({color:14527010}),Gg=new dt({color:16729088}),Wg=new Je({color:14737632,emissive:1318676}),el=new dt({color:14487842,side:Vt}),Xg=new dt({color:65450}),qg=new Je({color:1450552,emissive:528674}),Yg=new Je({color:2241876}),Zg=new Je({color:791588}),$g=new dt({color:2271999});function Ke(n,e,t){const i=new Pt,s=`drop-${Math.random().toString(36).slice(2,9)}`;let r="",o;if(t==="ammo_pistol"){r="★ +15 BALAS 9MM (PISTOLA) ★";const f=new oe(Eg,Ng),m=new oe(Tg,Og);m.position.y=.12,o=new oe(Hi,Fg),i.add(f,m)}else if(t==="ammo_rifle"){r="★ +45 TIROS 7.62 (AK-47) ★";const f=new oe(Ag,Bg),m=new oe(wg,zg);m.position.y=.04,o=new oe(Hi,Hg),i.add(f,m)}else if(t==="ammo_shotgun"){r="★ +8 CARTUCHOS 12G (ESCOPETA) ★";const f=new oe(bg,Vg),m=new oe(Rg,kg);o=new oe(Hi,Gg),i.add(f,m)}else if(t==="armor_vest"){r="★ +25 ESCUDO TÁCTICO (CHALECO DE KEVLAR) ★";const f=new oe(Ig,qg),m=new oe(Dg,Yg),g=new oe(Ug,Zg);m.position.set(0,.02,.02),g.position.set(0,.2,0),o=new oe(Hi,$g),i.add(f,m,g)}else{r="★ +50% VITALIDAD RECUPERADA (BOTIQUÍN) ★";const f=new oe(Cg,Wg),m=new oe(Pg,el);m.position.z=.122;const g=new oe(Lg,el);g.position.z=.122,o=new oe(Hi,Xg),i.add(f,m,g)}o.position.set(0,.35,0),i.add(o);const a=.36;i.position.set(e.x,a,e.z),n.add(i);let l=!1,c=Math.random()*5;function u(f,m,g,S){return l?!1:(c+=f,i.position.y=a+Math.sin(c*3.2)*.06,i.rotation.y+=f*1.5,o.rotation.y+=f*3,o.rotation.x+=f*1.8,Math.hypot(m.x-i.position.x,m.z-i.position.z)<1.45?(l=!0,t==="ammo_pistol"?g.weapons.pistol.reserveAmmo+=15:t==="ammo_rifle"?g.weapons.rifle.reserveAmmo+=45:t==="ammo_shotgun"?g.weapons.shotgun.reserveAmmo+=8:t==="armor_vest"?g.shield=Math.min(Yi,g.shield+25):t==="medkit"&&(g.health=Math.min(Yn,g.health+50)),S({id:s,type:t,group:i,isPicked:l,update:u,destroy:d},r),d(),!0):!1)}function d(){n.remove(i)}return{id:s,type:t,group:i,isPicked:l,update:u,destroy:d}}function Kg(n,e,t,i=!1){const s=[],r=()=>(Math.random()-.5)*1.4,o=["ammo_pistol","ammo_rifle","ammo_shotgun"];if(t==="mega")s.push(Ke(n,new b(e.x-.9,0,e.z),"medkit")),s.push(Ke(n,new b(e.x+.9,0,e.z),"medkit")),s.push(Ke(n,new b(e.x,0,e.z-.8),"armor_vest")),s.push(Ke(n,new b(e.x-.5,0,e.z+.8),"ammo_rifle")),s.push(Ke(n,new b(e.x+.5,0,e.z+.8),"ammo_shotgun"));else if(t==="mini"){s.push(Ke(n,new b(e.x-.5,0,e.z),"medkit"));const a=Math.random()<.6?"ammo_rifle":"ammo_shotgun";s.push(Ke(n,new b(e.x+.5,0,e.z),a)),Math.random()<.65&&s.push(Ke(n,new b(e.x,0,e.z+.6),"armor_vest"))}else if(t==="irradiated"){if(Math.random()<.7){const a=Math.floor(Math.random()*o.length);s.push(Ke(n,new b(e.x+r(),0,e.z+r()),o[a]))}Math.random()<.32&&s.push(Ke(n,new b(e.x+r(),0,e.z+r()),"medkit")),Math.random()<.25&&s.push(Ke(n,new b(e.x+r(),0,e.z+r()),"armor_vest"))}else if(i)if(Math.random()<.3){const a=Math.floor(Math.random()*o.length);s.push(Ke(n,new b(e.x+r(),0,e.z+r()),o[a]))}else Math.random()<.08?s.push(Ke(n,new b(e.x+r(),0,e.z+r()),"medkit")):Math.random()<.06&&s.push(Ke(n,new b(e.x+r(),0,e.z+r()),"armor_vest"));else if(Math.random()<.34){const a=Math.floor(Math.random()*o.length);s.push(Ke(n,new b(e.x+r(),0,e.z+r()),o[a]))}else Math.random()<.1?s.push(Ke(n,new b(e.x+r(),0,e.z+r()),"medkit")):Math.random()<.08&&s.push(Ke(n,new b(e.x+r(),0,e.z+r()),"armor_vest"));return s}const Hs=[{minX:-18.2,maxX:-15.8,minZ:-18.2,maxZ:-15.8},{minX:15.8,maxX:18.2,minZ:-18.2,maxZ:-15.8},{minX:-18.2,maxX:-15.8,minZ:15.8,maxZ:18.2},{minX:15.8,maxX:18.2,minZ:15.8,maxZ:18.2},{minX:-9.2,maxX:-6.8,minZ:-26.2,maxZ:-23.8},{minX:6.8,maxX:9.2,minZ:-26.2,maxZ:-23.8},{minX:-9.2,maxX:-6.8,minZ:23.8,maxZ:26.2},{minX:6.8,maxX:9.2,minZ:23.8,maxZ:26.2},{minX:-26.2,maxX:-23.8,minZ:-9.2,maxZ:-6.8},{minX:-26.2,maxX:-23.8,minZ:6.8,maxZ:9.2},{minX:23.8,maxX:26.2,minZ:-9.2,maxZ:-6.8},{minX:23.8,maxX:26.2,minZ:6.8,maxZ:9.2},{minX:-20.75,maxX:-11.25,minZ:-.35,maxZ:.35},{minX:11.25,maxX:20.75,minZ:-.35,maxZ:.35},{minX:-.35,maxX:.35,minZ:-20.75,maxZ:-11.25},{minX:-.35,maxX:.35,minZ:11.25,maxZ:20.75},{minX:-26.35,maxX:-25.65,minZ:-18,maxZ:-10},{minX:25.65,maxX:26.35,minZ:10,maxZ:18},{minX:-16.4,maxX:-11.6,minZ:-14.3,maxZ:-13.7},{minX:11.6,maxX:16.4,minZ:13.7,maxZ:14.3},{minX:-2.1,maxX:2.1,minZ:-8.3,maxZ:-7.7},{minX:-2.1,maxX:2.1,minZ:7.7,maxZ:8.3},{minX:-29.5,maxX:-26.5,minZ:-29.5,maxZ:-26.5},{minX:-25.1,maxX:-22.9,minZ:-29.1,maxZ:-26.9},{minX:-29.1,maxX:-26.9,minZ:-25.1,maxZ:-22.9},{minX:26.5,maxX:29.5,minZ:-29.5,maxZ:-26.5},{minX:22.9,maxX:25.1,minZ:-29.1,maxZ:-26.9},{minX:26.9,maxX:29.1,minZ:-25.1,maxZ:-22.9},{minX:-29.5,maxX:-26.5,minZ:26.5,maxZ:29.5},{minX:-25.1,maxX:-22.9,minZ:26.9,maxZ:29.1},{minX:26.5,maxX:29.5,minZ:26.5,maxZ:29.5},{minX:22.9,maxX:25.1,minZ:26.9,maxZ:29.1},{minX:-20.05,maxX:-19.55,minZ:-20.05,maxZ:-11.95},{minX:-12.45,maxX:-11.95,minZ:-20.05,maxZ:-11.95},{minX:-20.05,maxX:-11.95,minZ:-20.05,maxZ:-19.55},{minX:-20.05,maxX:-15.4,minZ:-12.45,maxZ:-11.95},{minX:-13.8,maxX:-11.95,minZ:-12.45,maxZ:-11.95},{minX:11.95,maxX:12.45,minZ:11.95,maxZ:20.05},{minX:19.55,maxX:20.05,minZ:11.95,maxZ:20.05},{minX:11.95,maxX:20.05,minZ:19.55,maxZ:20.05},{minX:11.95,maxX:16.6,minZ:11.95,maxZ:12.45},{minX:18.2,maxX:20.05,minZ:11.95,maxZ:12.45}],tl=[{minX:-26.25,maxX:-18.75,minZ:-10.3,maxZ:-9.7},{minX:18.75,maxX:26.25,minZ:-10.3,maxZ:-9.7},{minX:-26.25,maxX:-18.75,minZ:9.7,maxZ:10.3},{minX:18.75,maxX:26.25,minZ:9.7,maxZ:10.3}],nl=[{minX:-15.4,maxX:-13.8,minZ:-12.45,maxZ:-11.95,isDoor:!0,doorId:"door-ROOM-ALPHA"},{minX:16.6,maxX:18.2,minZ:11.95,maxZ:12.45,isDoor:!0,doorId:"door-ROOM-BRAVO"}];function uo(){const n=new Qm;n.fog=new oo(329740,.034),n.background=new Ye(132102);const e=[],t=[],i=new Je({color:it(26,30,34)}),s=new Je({color:it(16,18,22)}),r=new Je({color:it(32,36,40)}),o=new Je({color:it(38,42,46)}),a=new Je({color:it(36,44,30)}),l=new Je({color:it(52,48,42)}),c=new Je({color:it(46,36,26)}),u=new Je({color:it(22,26,30)}),d=new Je({color:it(42,46,52)}),f=new Je({color:it(72,48,30)}),m=new Je({color:it(35,38,42)});function g(B,Z,N,j,K,ne=!0){const ge=new oe(B,Z);return ge.position.set(N,j,K),ge.receiveShadow=!0,ge.castShadow=!0,n.add(ge),ne&&e.push(ge),ge}const S=74,p=5.8,h=S/2,E=new oe(new nn(S,S),i);E.rotation.x=-Math.PI/2,E.receiveShadow=!0,n.add(E);const x=new oe(new nn(S,S),s);x.rotation.x=Math.PI/2,x.position.y=p,x.receiveShadow=!0,n.add(x);for(let B=-30;B<=30;B+=12)g(new ce(S-1,.45,.5),u,0,p-.25,B,!1);g(new ce(S,p,.8),r,0,p/2,-h),g(new ce(S,p,.8),r,0,p/2,h),g(new ce(.8,p,S),r,-h,p/2,0),g(new ce(.8,p,S),r,h,p/2,0);const T=[[-17,-17],[17,-17],[-17,17],[17,17],[-8,-25],[8,-25],[-8,25],[8,25],[-25,-8],[-25,8],[25,-8],[25,8]];for(const[B,Z]of T)g(new ce(2.4,p,2.4),o,B,p/2,Z);const D=[{x:-16,z:0,w:9.5,h:3.8,d:.7},{x:16,z:0,w:9.5,h:3.8,d:.7},{x:0,z:-16,w:.7,h:3.8,d:9.5},{x:0,z:16,w:.7,h:3.8,d:9.5},{x:-26,z:-14,w:.7,h:3.8,d:8},{x:26,z:14,w:.7,h:3.8,d:8}];for(const B of D)g(new ce(B.w,B.h,B.d),r,B.x,B.h/2,B.z);const C=[{cx:-16,cz:-16,doorSide:"south",name:"ROOM-ALPHA"},{cx:16,cz:16,doorSide:"north",name:"ROOM-BRAVO"}];for(const B of C){const Z=B.cx,N=B.cz,j=7.6,K=7.6,ne=.5,ge=3.6;g(new ce(ne,1,K),d,Z-j/2,.5,N),g(new ce(ne,ge-2.1,K),d,Z-j/2,2.1+(ge-2.1)/2,N),g(new ce(ne,1.1,1.6),d,Z-j/2,1.55,N-K/2+.8),g(new ce(ne,1.1,1.6),d,Z-j/2,1.55,N+K/2-.8),g(new ce(ne,1,K),d,Z+j/2,.5,N),g(new ce(ne,ge-2.1,K),d,Z+j/2,2.1+(ge-2.1)/2,N),g(new ce(ne,1.1,1.6),d,Z+j/2,1.55,N-K/2+.8),g(new ce(ne,1.1,1.6),d,Z+j/2,1.55,N+K/2-.8);const Oe=B.doorSide==="south"?N-K/2:N+K/2;g(new ce(j,ge,ne),d,Z,ge/2,Oe);const H=B.doorSide==="south"?N+K/2:N-K/2;g(new ce(2.2,ge,ne),d,Z-2.7,ge/2,H);const ee=Z-.7;g(new ce(1.8,.95,ne),d,ee,.475,H),g(new ce(1.8,1.55,ne),d,ee,2.05+1.55/2,H),g(new ce(.06,1.1,.06),u,ee-.45,1.5,H,!1),g(new ce(.06,1.1,.06),u,ee+.45,1.5,H,!1),g(new ce(.4,ge,ne),d,Z+.4,ge/2,H);const fe=Z+1.4,ae=2.85;g(new ce(1.6,ge-ae,ne),d,fe,ae+(ge-ae)/2,H),g(new ce(1.6,ge,ne),d,Z+3,ge/2,H);const Se=new Pt,de=.77,ie=2.8,I=new oe(new ce(1.54,ie,.22),f);I.position.set(de,ie/2,0),I.castShadow=!0,I.receiveShadow=!0,Se.add(I);const ue=new oe(new ce(1.58,.1,.24),m);ue.position.set(de,.6,0);const me=new oe(new ce(1.58,.1,.24),m);me.position.set(de,1.4,0);const Ce=new oe(new ce(1.58,.1,.24),m);Ce.position.set(de,2.2,0),Se.add(ue,me,Ce),Se.position.set(fe-de,0,H),n.add(Se);const he=new oe(new ce(1.56,2.82,.28),new dt({visible:!1}));he.position.set(fe,1.41,H),n.add(he),e.push(he);const Fe=240;let A=Fe,v=!1;const W=B.doorSide==="south"?-Math.PI/2:Math.PI/2,V={id:`door-${B.name}`,name:B.name,mesh:he,group:Se,health:A,maxHealth:Fe,isDestroyed:!1,isOpen:!1,position:new b(fe,1.41,H),toggle(J,$){if(this.isDestroyed)return!1;if(v=!v,this.isOpen=v,v){Se.rotation.y=W;const Me=$.indexOf(he);Me!==-1&&$.splice(Me,1)}else Se.rotation.y=0,$.indexOf(he)===-1&&$.push(he);return v},repair(J,$){A=Fe,this.health=Fe,this.isDestroyed=!1,this.isOpen=!1,v=!1,Se.rotation.y=0,Se.position.set(fe-de,0,H),Se.parent||J.add(Se),he.parent||J.add(he),$.indexOf(he)===-1&&$.push(he)},takeDamage(J,$){if(this.isDestroyed)return!1;if(A=Math.max(0,A-J),this.health=A,Se.position.x=fe-de+(Math.random()-.5)*.08,setTimeout(()=>{Se.position.x=fe-de},80),A<=0){this.isDestroyed=!0,this.isOpen=!1,v=!1;const Me=e.indexOf(he);return Me!==-1&&e.splice(Me,1),he.parent&&n.remove(he),jg(n,new b(fe,1.41,H)),Se.parent&&n.remove(Se),$&&$(),!0}return!1}};he.userData={isDoor:!0,doorRef:V},t.push(V)}const R=[{x:-14,z:-14,w:4.8,h:.82,d:.6},{x:14,z:14,w:4.8,h:.82,d:.6},{x:0,z:-8,w:4.2,h:.82,d:.6},{x:0,z:8,w:4.2,h:.82,d:.6}];for(const B of R)g(new ce(B.w,B.h,B.d),l,B.x,B.h/2,B.z);const U=[{x:-22.5,z:-10,w:7.5,h:2,d:.6,y:2.35},{x:22.5,z:-10,w:7.5,h:2,d:.6,y:2.35},{x:-22.5,z:10,w:7.5,h:2,d:.6,y:2.35},{x:22.5,z:10,w:7.5,h:2,d:.6,y:2.35}];for(const B of U)g(new ce(B.w,B.h,B.d),c,B.x,B.y,B.z);const M=[{x:-28,z:-28,w:3,h:.7,d:3},{x:-24,z:-28,w:2.2,h:1.4,d:2.2},{x:-28,z:-24,w:2.2,h:2.1,d:2.2},{x:28,z:-28,w:3,h:.7,d:3},{x:24,z:-28,w:2.2,h:1.4,d:2.2},{x:28,z:-24,w:2.2,h:2.1,d:2.2},{x:-28,z:28,w:3,h:.7,d:3},{x:-24,z:28,w:2.2,h:1.4,d:2.2},{x:28,z:28,w:3,h:.7,d:3},{x:24,z:28,w:2.2,h:1.4,d:2.2}];for(const B of M)g(new ce(B.w,B.h,B.d),a,B.x,B.h/2,B.z);const _=new sg(659477,.85);n.add(_);const L=[[-22,5,-22,16765072,4.8],[22,5,-22,8961023,4.4],[-22,5,22,8961023,4.4],[22,5,22,16765072,4.8],[0,5,0,16768426,4.2],[-28,4.6,0,16742212,3.6],[28,4.6,0,4500223,3.6],[0,4.6,-28,16759654,3.6],[0,4.6,28,6750122,3.6]];for(const[B,Z,N,j,K]of L){const ne=new Bs(j,K,32,1.3);ne.position.set(B,Z,N),n.add(ne)}const F=new Bs(16717056,2.5,26,1.8);F.position.set(0,4.8,0),n.add(F);let P=0;n.__flickerUpdate=B=>{P+=B,F.intensity=Math.sin(P*5)>0?4.5:.6};const z=[new b(-32,0,-32),new b(32,0,-32),new b(-32,0,32),new b(32,0,32),new b(0,0,-33),new b(0,0,33),new b(-33,0,0),new b(33,0,0),new b(-22,0,-31),new b(22,0,-31),new b(-22,0,31),new b(22,0,31),new b(-31,0,-22),new b(31,0,-22),new b(-31,0,22),new b(31,0,22)],k=new b(0,1.7,0);return{scene:n,walls:e,doors:t,spawnPoints:z,playerSpawn:k}}function jg(n,e){const t=new ce(.08,.22,.08),i=new Je({color:5913378});for(let s=0;s<8;s++){const r=new oe(t,i);r.position.set(e.x+(Math.random()-.5)*1.2,e.y+(Math.random()-.5)*1,e.z+(Math.random()-.5)*.4),r.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),n.add(r),setTimeout(()=>{n.remove(r),r.geometry.dispose()},450)}}function ho(n){const e=[];return e.push(Ke(n,new b(-16.2,.25,-17.8),"medkit")),e.push(Ke(n,new b(-17.5,.25,-17.8),"medkit")),e.push(Ke(n,new b(-14.8,.25,-17.8),"armor_vest")),e.push(Ke(n,new b(-14.8,.25,-16.2),"armor_vest")),e.push(Ke(n,new b(-17.5,.25,-16.2),"ammo_pistol")),e.push(Ke(n,new b(-17.5,.25,-14.8),"ammo_rifle")),e.push(Ke(n,new b(-16.2,.25,-14.8),"ammo_shotgun")),e.push(Ke(n,new b(16.2,.25,17.8),"medkit")),e.push(Ke(n,new b(17.5,.25,17.8),"medkit")),e.push(Ke(n,new b(14.8,.25,17.8),"armor_vest")),e.push(Ke(n,new b(14.8,.25,16.2),"armor_vest")),e.push(Ke(n,new b(17.5,.25,16.2),"ammo_pistol")),e.push(Ke(n,new b(17.5,.25,14.8),"ammo_rifle")),e.push(Ke(n,new b(16.2,.25,14.8),"ammo_shotgun")),e}function nc(n,e,t,i,s="none",r="humanoid",o=!1){const a=new Pt;a.position.set(e.x,-1.5,e.z);const l=s==="mini"||s==="mega",c=s==="mega",u=r==="dog",d=s==="irradiated"||o;let f=100;c?f=d?1900:1400:s==="mini"?f=d?800:600:u?f=d?180:75:d&&(f=240);let m=t;u?m=t*(d?1.7:1.5):d&&(m=t*1.3);let g=f,S=!0,p=!1,h=0,E=0,x=0,T=Math.random()*4,D=Math.random()*Math.PI*2,C=2+Math.random()*3;const R=u?d?1.8:1.4:d?1.35:.95,U=d?it(175,24,32):c?it(45,18,25):l?it(55,30,42):u?it(52,38,42):it(70,48,55),M=new Je({color:U}),_=new Je({color:d?it(50,15,20):c?it(18,14,18):l?it(25,20,25):u?it(30,22,26):it(36,42,38)}),L=new Je({color:d?16711717:c?it(200,20,50):l?it(160,25,45):it(110,20,35),emissive:d?5570576:c?it(60,8,15):l?it(40,5,10):0}),F=new dt({color:d?16711697:c?16729088:l?16720384:u?16724736:16716032});let P,z,k,B,Z,N,j,K,ne,ge,Oe,H;if(u){P=new oe(new ce(.36,.32,.82),M),P.position.set(0,.44,0),P.castShadow=!0,a.add(P),z=new oe(new ce(.48,.45,.95),new dt({visible:!1})),z.position.set(0,.44,0),z.userData={isEnemy:!0,zone:"torso",enemyId:n},a.add(z);const V=new Pt;V.position.set(0,.54,.48);const J=new oe(new ce(.24,.22,.32),M);J.castShadow=!0;const $=new oe(new ce(.18,.1,.24),_);$.position.set(0,-.1,.1),V.add(J,$);const Me=new oe(new ce(.04,.04,.04),F);Me.position.set(-.08,.04,.16);const te=new oe(new ce(.04,.04,.04),F);te.position.set(.08,.04,.16),V.add(Me,te);const Te=new oe(new Fs(.14,0),L);Te.position.set(0,.12,-.12),V.add(Te),a.add(V),k=new oe(new ce(.36,.36,.42),new dt({visible:!1})),k.position.set(0,.54,.48),k.userData={isEnemy:!0,zone:"head",enemyId:n},a.add(k);const Ae=new ce(.11,.38,.11);Z=new oe(Ae,M),Z.position.set(-.16,.2,.28),N=new oe(Ae,M),N.position.set(.16,.2,.28),j=new oe(Ae,M),j.position.set(-.16,.2,-.28),K=new oe(Ae,M),K.position.set(.16,.2,-.28),a.add(Z,N,j,K),B=new oe(new ce(.48,.38,.85),new dt({visible:!1})),B.position.set(0,.2,0),B.userData={isEnemy:!0,zone:"limbs",enemyId:n},a.add(B),ne=Z,ge=N,Oe=j,H=K}else{P=new oe(new ce(.52,.76,.34),_),P.position.set(0,.85,0),P.castShadow=!0,a.add(P),z=new oe(new ce(.68,.85,.45),new dt({visible:!1})),z.position.set(0,.85,0),z.userData={isEnemy:!0,zone:"torso",enemyId:n},a.add(z);const V=new Pt;V.position.set(0,1.45,.05);const J=new oe(new ce(.34,.38,.34),M);J.castShadow=!0,V.add(J);const $=c?.45:l?.32:.16,Me=new oe(new Fs($,0),L);if(Me.position.set(0,.08,-.18),V.add(Me),l){const Ae=c?4:2;for(let re=0;re<Ae;re++){const ve=re%2===0?1:-1,Le=new oe(new En(.04,.08,.5,6),L);Le.position.set(ve*(.2+re*.08),.2+re*.05,-.14),V.add(Le)}}const te=new oe(new ce(.05,.05,.05),F);te.position.set(-.09,.04,.17);const Te=new oe(new ce(.05,.05,.05),F);Te.position.set(.09,.04,.17),V.add(te,Te),a.add(V),k=new oe(new ce(.48,.52,.48),new dt({visible:!1})),k.position.set(0,1.45,.05),k.userData={isEnemy:!0,zone:"head",enemyId:n},a.add(k),Oe=new oe(new ce(.2,.76,.2),M),Oe.position.set(-.16,.38,0),H=new oe(new ce(.2,.76,.2),M),H.position.set(.16,.38,0),a.add(Oe,H),ne=new oe(new ce(.18,.72,.18),M),ne.position.set(-.38,.82,0),ge=new oe(new ce(.18,.72,.18),M),ge.position.set(.38,.82,0),a.add(ne,ge),B=new oe(new ce(.95,.88,.45),new dt({visible:!1})),B.position.set(0,.55,0),B.userData={isEnemy:!0,zone:"limbs",enemyId:n},a.add(B),Z=Oe,N=H,j=Oe,K=H}const ee=new Pt,fe=c?2.6:l?2.3:u?1.05:1.95;ee.position.set(0,fe,0);const ae=c?2.4:l?1.6:u?.72:.85,Se=c?.18:l?.14:u?.08:.09,de=new dt({color:1119762,depthTest:!0,depthWrite:!1,side:Vt}),ie=new oe(new nn(ae,Se),de);ee.add(ie);const I=c?16759552:l||d?16711731:65382,ue=new dt({color:I,depthTest:!0,depthWrite:!1,side:Vt}),me=new oe(new nn(ae-.02,Se-.02),ue);me.position.set(0,0,.015),ee.add(me),a.add(ee),c?a.scale.set(3.2,3.2,3.2):l&&a.scale.set(2.1,2.1,2.1),i.add(a);let Ce=Math.random()*10;function he(){p=!0}function Fe(V,J,$,Me,te,Te,Ae,re,ve){if(!S){ee.visible=!1,a.rotation.x=ts.lerp(a.rotation.x,-Math.PI/2.1,V*6),a.position.y=ts.lerp(a.position.y,-.4,V*6);return}a.position.y<0&&(a.position.y=Math.min(0,a.position.y+V*4.8)),ee.quaternion.copy(a.quaternion).invert().multiply($.quaternion);const Le=Math.max(.001,g/f);me.scale.x=Le,me.position.x=(Le-1)*((ae-.02)/2),c?ue.color.setHex(Le<.35?16720384:16759552):l||d?ue.color.setHex(Le<.3?16733440:16711726):ue.color.setHex(Le>.55?65382:Le>.25?16763904:16720418),x>0&&(x-=V,x<=0&&(M.color.copy(U),P.scale.set(1,1,1))),T-=V,T<=0&&p&&Ae&&(T=4.5+Math.random()*5,Ae(a.position,l,u));const xe=new b().subVectors(J,a.position);xe.y=0;const ye=xe.length();if(!p){(te<=2||ye<4.5)&&(p=!0);const De=new b(Math.sin(a.rotation.y),0,Math.cos(a.rotation.y)),Ze=xe.clone().normalize(),Ee=De.dot(Ze);ye<(Me?28:19)&&Ee>.35&&(p=!0)}const Ue=35;if(!p){C-=V,C<=0&&(C=2.5+Math.random()*3.5,D+=(Math.random()-.5)*1.8),a.rotation.y=ts.lerp(a.rotation.y,D,V*2.5);const De=a.position.x,Ze=a.position.z;a.position.x+=Math.sin(a.rotation.y)*R*V,a.position.z+=Math.cos(a.rotation.y)*R*V,(Math.abs(a.position.x)>=Ue||Math.abs(a.position.z)>=Ue)&&(D=Math.atan2(-a.position.x,-a.position.z)),a.position.x=Mi(a.position.x,-Ue,Ue),a.position.z=Mi(a.position.z,-Ue,Ue);const Ee=c?1.3:l?.95:u?.45:.55;il(a.position,Ee,ve,u),Math.hypot(a.position.x-De,a.position.z-Ze)<5e-4&&(D+=1.6+(Math.random()-.5)),Ce+=V*R*(u?4.8:2.5),u?(Z.rotation.x=Math.sin(Ce)*.35,K.rotation.x=Math.sin(Ce)*.35,N.rotation.x=-Math.sin(Ce)*.35,j.rotation.x=-Math.sin(Ce)*.35):(Oe.rotation.x=Math.sin(Ce)*.3,H.rotation.x=-Math.sin(Ce)*.3,ne.rotation.x=-.3-Math.sin(Ce)*.2,ge.rotation.x=-.3+Math.sin(Ce)*.2);return}const qe=Math.atan2(xe.x,xe.z);if(a.rotation.y=ts.lerp(a.rotation.y,qe,V*(u?9.5:7.5)),h>0&&(h-=V),re&&h<=0&&re(a.position,l?35:d?24:u?12:18),ye<=(c?3.4:l?2.6:u?1.5:1.65)){if(E+=V*(c?4.5:l?5.5:u?9:8),u)Z.rotation.x=Math.sin(E)*.4,N.rotation.x=-Math.sin(E)*.4;else{const De=Math.sin(E);ne.rotation.x=-1.6+De*.85,ge.rotation.x=-1.6-De*.85}if(h<=0){h=c?1.8:l?1.5:u?.85:1.2;let De=c?45:l?32:d?28:18;u&&(De=d?17:11),Te(De)}}else if(E=0,ye>(c?2.4:l?2:u?1.1:1.2)){xe.normalize();let De=xe.x,Ze=xe.z;const Ee=c?1.3:l?.95:u?.45:.55;for(let le=0;le<Hs.length;le++){const se=Hs[le],we=(se.minX+se.maxX)/2,Pe=(se.minZ+se.maxZ)/2,Qe=Math.hypot(a.position.x-we,a.position.z-Pe),tt=Math.hypot(se.maxX-se.minX,se.maxZ-se.minZ)/2;if(Qe<tt+Ee+.8){const nt=a.position.x-we,mt=a.position.z-Pe;De*-nt+Ze*-mt>0&&(De+=-mt*.75,Ze+=nt*.75)}}const w=Math.hypot(De,Ze);w>.001&&(De/=w,Ze/=w),a.position.x+=De*m*V,a.position.z+=Ze*m*V,a.position.x=Mi(a.position.x,-Ue,Ue),a.position.z=Mi(a.position.z,-Ue,Ue),il(a.position,Ee,ve,u),Ce+=V*t*(u?5.8:3.6),u?(Z.rotation.x=Math.sin(Ce)*.65,K.rotation.x=Math.sin(Ce)*.65,N.rotation.x=-Math.sin(Ce)*.65,j.rotation.x=-Math.sin(Ce)*.65):(Oe.rotation.x=Math.sin(Ce)*.5,H.rotation.x=-Math.sin(Ce)*.5,ne.rotation.x=-.5-Math.sin(Ce)*.38,ge.rotation.x=-.5+Math.sin(Ce)*.38)}}function A(V,J){if(!S)return{killed:!1,damage:0,isHeadshot:!1};p=!0;let $=J??24,Me=!1;return V==="head"?(Me=!0,c?$=(J??45)*2.2:l?$=(J??45)*2.5:u?$=(J??75)*1.5:$=J??68):V==="torso"?$=J??32:$=J??18,g-=$,x=.12,M.color.setHex(16720418),P.scale.set(1.08,1.08,1.08),g<=0?(g=0,S=!1,F.color.setHex(1114626),ee.visible=!1,{killed:!0,damage:$,isHeadshot:Me}):{killed:!1,damage:$,isHeadshot:Me}}function v(){return a.position.clone()}function W(){i.remove(a)}return{id:n,group:a,headMesh:k,torsoMesh:z,limbsMesh:B,get isAlive(){return S},get health(){return g},bossTier:s,species:r,isIrradiated:d,get isAlerted(){return p},maxHealth:f,speed:t,update:Fe,takeDamage:A,alertEnemy:he,getPosition:v,destroy:W}}function il(n,e,t,i=!1){for(let s=0;s<2;s++){for(let r=0;r<Hs.length;r++){const o=Hs[r];Ur(n,e,o.minX,o.maxX,o.minZ,o.maxZ)}if(!i)for(let r=0;r<tl.length;r++){const o=tl[r];Ur(n,e,o.minX,o.maxX,o.minZ,o.maxZ)}for(let r=0;r<nl.length;r++){const o=nl[r];let a=!0;if(t){const l=t.find(c=>c.id===o.doorId);l&&(l.isOpen||l.isDestroyed)&&(a=!1)}a&&Ur(n,e,o.minX,o.maxX,o.minZ,o.maxZ)}}}function Ur(n,e,t,i,s,r){const o=Math.max(t,Math.min(n.x,i)),a=Math.max(s,Math.min(n.z,r)),l=n.x-o,c=n.z-a,u=l*l+c*c;if(u<e*e)if(u>1e-6){const d=Math.sqrt(u),f=e-d;n.x+=l/d*f,n.z+=c/d*f}else{const d=n.x-t,f=i-n.x,m=n.z-s,g=r-n.z,S=Math.min(d,f,m,g);S===d?n.x=t-e:S===f?n.x=i+e:S===m?n.z=s-e:n.z=r+e}}const gi=new Kt(0,0,0,"YXZ"),_i=new b,Jg={type:"change"},Qg={type:"lock"},e0={type:"unlock"},sl=Math.PI/2;class t0 extends jn{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=n0.bind(this),this._onPointerlockChange=i0.bind(this),this._onPointerlockError=s0.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;_i.setFromMatrixColumn(t.matrix,0),_i.crossVectors(t.up,_i),t.position.addScaledVector(_i,e)}moveRight(e){const t=this.camera;_i.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(_i,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function n0(n){if(this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.camera;gi.setFromQuaternion(i.quaternion),gi.y-=e*.002*this.pointerSpeed,gi.x-=t*.002*this.pointerSpeed,gi.x=Math.max(sl-this.maxPolarAngle,Math.min(sl-this.minPolarAngle,gi.x)),i.quaternion.setFromEuler(gi),this.dispatchEvent(Jg)}function i0(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Qg),this.isLocked=!0):(this.dispatchEvent(e0),this.isLocked=!1)}function s0(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function r0(n,e,t=new b(0,Dr,0)){const i=new Ct(75,window.innerWidth/window.innerHeight,.05,250);i.rotation.order="YXZ",i.position.copy(t),n.add(i);const s=new t0(i,document.body);window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix()});const r=new Mt;i.add(r),r.position.set(0,0,-12);const o=new ng(16774624,0,44,Math.PI/4.8,.38,1.15);o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.near=.2,o.shadow.camera.far=48,o.shadow.bias=-.001,o.target=r,o.position.set(.28,-.12,0),i.add(o);const a=new Bs(16772304,0,8.5,1.8);a.position.set(0,-.1,.2),i.add(a);const l=new b,c=new b,u=new b,d=new b;let f=0,m=0,g=Dr,S=!0,p=-22.5,h=22.5,E=-22.5,x=22.5;function T(M,_,L,F){p=M,h=_,E=L,x=F}function D(M,_,L){const F=L?1.1:1.85,P=new Kn().setFromCenterAndSize(M,new b(Qa*2,F,Qa*2));for(const z of _){const k=new Kn().setFromObject(z);if(!P.intersectsBox(k))continue;if(M.y-F/2>=k.max.y-.3&&l.y<=0){M.y=k.max.y+F/2,l.y=0,S=!0;continue}if(L&&M.y+F/2<=k.min.y+.18)continue;const B=P.max.x-k.min.x,Z=k.max.x-P.min.x,N=P.max.z-k.min.z,j=k.max.z-P.min.z,K=Math.min(B,Z),ne=Math.min(N,j);K<ne?M.x+=B<Z?-K:K:M.z+=N<j?-ne:ne}M.x=Mi(M.x,p,h),M.z=Mi(M.z,E,x)}function C(M,_,L,F){if(L.isPaused||L.isGameOver)return;const P=_.w||_.a||_.s||_.d;L.isRunning=_.shift&&P&&!_.ctrl&&S,L.isCrouching=_.ctrl;let z=og;L.isRunning&&(z=ag),L.isCrouching&&(z=lg);const k=L.isCrouching?cg:Dr;g=Ft(g,k,Math.min(1,M*10)),_.space&&S&&!L.isCrouching&&(l.y=ug,S=!1),l.y+=dg*M,i.position.y+=l.y*M,i.position.y<=g&&(i.position.y=g,l.y=0,S=!0),L.isGrounded=S,i.getWorldDirection(u),u.y=0,u.normalize(),d.crossVectors(u,new b(0,1,0)).normalize(),c.set(0,0,0),_.w&&c.add(u),_.s&&c.sub(u),_.d&&c.add(d),_.a&&c.sub(d),c.lengthSq()>0&&c.normalize();const B=c.x*z,Z=c.z*z;if(l.x=Ft(l.x,B,Math.min(1,M*14)),l.z=Ft(l.z,Z,Math.min(1,M*14)),i.position.x+=l.x*M,i.position.z+=l.z*M,D(i.position,F,L.isCrouching),P&&S){const j=hg*(L.isRunning?1.75:1);f+=M*j;const K=L.isRunning?pg:fg;m=Math.sin(f*Math.PI*2)*K,i.position.y+=m*.4}const N=L.isAiming?52:75;Math.abs(i.fov-N)>.05&&(i.fov=Ft(i.fov,N,Math.min(1,M*14)),i.updateProjectionMatrix()),L.flashlight?(o.intensity=46,a.intensity=2.8):(o.intensity=0,a.intensity=0)}function R(){return i.position.clone()}function U(M){i.position.copy(M),l.set(0,0,0),i.rotation.set(0,0,0),S=!0}return{controls:s,camera:i,flashlight:o,flashFill:a,flashTarget:r,velocity:l,update:C,getPosition:R,resetPosition:U,setBounds:T}}function o0(n){const e=new Pt;n.add(e);const t=new Je({color:1579040}),i=new Je({color:855314}),s=new Je({color:1184788}),r=new Je({color:2237994}),o=new Je({color:4729368}),a=new Je({color:65345,emissive:21777,emissiveIntensity:.8}),l=new Pt,c=new oe(new ce(.052,.058,.26),t);c.position.set(0,.03,0);const u=new oe(new ce(.046,.12,.17),s);u.position.set(0,-.06,.02);const d=new oe(new En(.009,.009,.22,8),i);d.rotation.x=Math.PI/2,d.position.set(0,.018,-.21);const f=new oe(new ce(.004,.016,.004),a);f.position.set(0,.065,-.11),l.add(c,u,d,f),e.add(l);const m=new Pt,g=new oe(new ce(.062,.09,.38),t);g.position.set(0,.02,0);const S=new oe(new En(.012,.012,.42,8),i);S.rotation.x=Math.PI/2,S.position.set(0,.025,-.38);const p=new oe(new En(.018,.014,.06,8),t);p.rotation.x=Math.PI/2,p.position.set(0,.025,-.58);const h=new oe(new ce(.068,.075,.28),o);h.position.set(0,.02,-.26);const E=new oe(new ce(.045,.24,.12),i);E.position.set(0,-.14,-.04),E.rotation.x=.24;const x=new oe(new ce(.05,.11,.28),o);x.position.set(0,-.01,.28);const T=new oe(new ce(.048,.14,.07),o);T.position.set(0,-.09,.1),T.rotation.x=-.25;const D=new oe(new ce(.038,.04,.12),r);D.position.set(0,.085,-.02);const C=new oe(new Ki(.005,4,4),a);C.position.set(0,.085,-.08),m.add(g,S,p,h,E,x,T,D,C),e.add(m);const R=new Pt,U=new oe(new ce(.07,.095,.32),t);U.position.set(0,.02,0);const M=new oe(new En(.016,.016,.48,8),i);M.rotation.x=Math.PI/2,M.position.set(0,.035,-.38);const _=new oe(new En(.014,.014,.44,8),t);_.rotation.x=Math.PI/2,_.position.set(0,-.005,-.36);const L=new oe(new ce(.076,.07,.18),r);L.position.set(0,.01,-.28);const F=new oe(new ce(.055,.12,.32),s);F.position.set(0,-.02,.28),R.add(U,M,_,L,F),e.add(R);const P=new Bs(16755234,0,3.5,1.8);e.add(P),e.position.set(.15,-.16,-.32),e.rotation.y=.035;let z="pistol";function k(){l.visible=z==="pistol",m.visible=z==="rifle",R.visible=z==="shotgun",z==="pistol"?P.position.set(0,.02,-.38):z==="rifle"?P.position.set(0,.025,-.65):P.position.set(0,.035,-.62)}k();let B=0,Z=0,N=0,j=0,K=0,ne=!1,ge=0,Oe=!1,H=0;function ee(de){de!==z&&(z=de,Oe=!0,ge=.25,k())}function fe(){const de=ji[z];B=.1,Z=de.recoil,N=de.recoil*.2,P.intensity=z==="shotgun"?22:14,z==="pistol"?j=.035:z==="shotgun"&&(K=.08)}function ae(){ne||(ne=!0)}function Se(de,ie){H+=de,ie.currentWeapon!==z&&ee(ie.currentWeapon);const I=Math.sin(H*.9)*.003,ue=Math.sin(H*.6)*.002,me=ie.isAiming,Ce=me?.2:1;let he=-.105;z==="shotgun"?he=-.095:z==="pistol"&&(he=-.098);const Fe=me?I*Ce:.15+I;let A=me?he+ue*Ce:-.16+ue;const v=me?-.23:-.32,W=me?0:.035;Oe&&(ge-=de,A=-.38,ge<=0&&(Oe=!1)),e.position.x=Ft(e.position.x,Fe,Math.min(1,de*14)),e.position.y=Ft(e.position.y,A,Math.min(1,de*14)),e.rotation.y=Ft(e.rotation.y,W,Math.min(1,de*14));const V=me?.6:1;Z>0?(e.rotation.x=Ft(e.rotation.x,-Z*V,de*25),e.position.z=Ft(e.position.z,v+N*V,de*25),Z-=de*3.2,N-=de*1,Z<0&&(Z=0)):(e.rotation.x=Ft(e.rotation.x,0,de*10),e.position.z=Ft(e.position.z,v,de*10)),j>0?(c.position.z=j,j-=de*1.5,j<0&&(j=0)):c.position.z=0,K>0?(L.position.z=-.28+K,K-=de*.45,K<0&&(K=0)):L.position.z=-.28,B>0&&(B-=de,B<=0&&(P.intensity=0)),ie.isReloading&&(e.position.y=Ft(e.position.y,-.42,de*6),e.rotation.x=Ft(e.rotation.x,.35,de*6))}return{group:e,update:Se,triggerFire:fe,triggerReload:ae,setWeapon:ee}}const a0=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"];function l0(){return{ammoCount:document.getElementById("ammo-count"),ammoReserve:document.getElementById("ammo-reserve"),ammoMode:document.getElementById("ammo-mode"),reloadMsg:document.getElementById("reload-msg"),moveMode:document.getElementById("move-mode"),killCount:document.getElementById("kill-count"),flashIndicator:document.getElementById("flashlight-indicator"),compassNeedle:document.getElementById("compass-needle"),compassBar:document.getElementById("compass-bar"),killAlert:document.getElementById("kill-alert"),killAlertText:document.getElementById("kill-alert-text"),glitchOverlay:document.getElementById("glitch-overlay"),hud:document.getElementById("hud"),pauseScreen:document.getElementById("pause-screen"),healthBarFill:document.getElementById("health-bar-fill"),healthValue:document.getElementById("health-value"),shieldBarFill:document.getElementById("shield-bar-fill"),shieldValue:document.getElementById("shield-value"),hudObjective:document.getElementById("hud-objective"),hudSubinfo:document.getElementById("hud-subinfo"),hudDifficultyPhase:document.getElementById("hud-difficulty-phase"),hitmarker:document.getElementById("hitmarker"),slot1:document.getElementById("slot-1"),slot2:document.getElementById("slot-2"),slot3:document.getElementById("slot-3"),doorPrompt:document.getElementById("door-prompt"),waveModalTitle:document.getElementById("wave-modal-title"),statTime:document.getElementById("stat-time"),statAccuracy:document.getElementById("stat-accuracy"),statHeadshots:document.getElementById("stat-headshots"),statKills:document.getElementById("stat-kills"),statDamageDealt:document.getElementById("stat-damage-dealt"),statHealthLeft:document.getElementById("stat-health-left"),fpsCounter:document.getElementById("fps-counter"),infiniteStatsSummary:document.getElementById("infinite-stats-summary"),settingsModal:document.getElementById("settings-modal"),settingToggleFps:document.getElementById("setting-toggle-fps"),settingTogglePs1:document.getElementById("setting-toggle-ps1"),settingToggleTouch:document.getElementById("setting-toggle-touch"),btnSettingsClose:document.getElementById("btn-settings-close"),leaderboardModal:document.getElementById("leaderboard-modal"),leaderboardRows:document.getElementById("leaderboard-rows"),btnLeaderboardClose:document.getElementById("btn-leaderboard-close")}}let Nr=null,Ti=null,Or=null;function c0(n,e,t){const i=e.weapons[e.currentWeapon],s=ji[e.currentWeapon];n.ammoCount.textContent=String(i.magAmmo).padStart(2,"0"),n.ammoReserve.textContent=` / ${String(i.reserveAmmo).padStart(2,"0")}`,n.ammoMode.textContent=s.ammoType,i.magAmmo<=Math.max(2,Math.floor(s.magSize*.25))?(n.ammoCount.style.color="#ff4400",n.ammoCount.style.textShadow="0 0 10px #ff4400"):(n.ammoCount.style.color="#00ff41",n.ammoCount.style.textShadow="0 0 10px #00ff41"),n.slot1.classList.toggle("active",e.currentWeapon==="pistol"),n.slot2.classList.toggle("active",e.currentWeapon==="rifle"),n.slot3.classList.toggle("active",e.currentWeapon==="shotgun"),n.reloadMsg.style.display=e.isReloading?"block":"none";const r=Math.max(0,Math.min(100,Math.round(e.health/e.maxHealth*100)));n.healthBarFill.style.width=`${r}%`,n.healthValue.textContent=`${r}% HP`,r>55?(n.healthBarFill.style.background="#00ff41",n.healthBarFill.style.boxShadow="0 0 10px #00ff41",n.healthValue.style.color="#00ff41"):r>25?(n.healthBarFill.style.background="#ffaa00",n.healthBarFill.style.boxShadow="0 0 10px #ffaa00",n.healthValue.style.color="#ffaa00"):(n.healthBarFill.style.background="#ff2200",n.healthBarFill.style.boxShadow="0 0 12px #ff2200",n.healthValue.style.color="#ff2200");const o=Math.max(0,Math.min(100,Math.round(e.shield/e.maxShield*100)));if(n.shieldBarFill.style.width=`${o}%`,n.shieldValue.textContent=`🛡️ ${e.shield}/${e.maxShield} ESCUDO`,e.gameMode==="horde"){n.hudDifficultyPhase.style.display="none";const d=e.currentWave===30||e.currentWave===28||e.currentWave===25||e.currentWave===20||e.currentWave===15||e.currentWave===10;n.hudObjective.textContent=d?`▶ OLEADA ${e.currentWave}/${e.maxWaves}: ¡ALERTA DE BOSS TITÁNICO! ◀`:`▶ MODO HORDA: OLEADA ${e.currentWave}/${e.maxWaves} ◀`,n.hudSubinfo.textContent=`AMENAZAS ACTIVAS EN SECTOR: ${e.enemiesRemaining}`}e.isGrounded?e.isRunning?(n.moveMode.textContent="SPRINT",n.moveMode.style.color="#ffaa00"):e.isCrouching?(n.moveMode.textContent="AGACHADO↓",n.moveMode.style.color="#00ff41"):(n.moveMode.textContent="PIE",n.moveMode.style.color="#00ff41"):(n.moveMode.textContent="EN EL AIRE▲",n.moveMode.style.color="#00ffff"),e.flashlight?(n.flashIndicator.textContent="◉ LINTERNA: ON",n.flashIndicator.className="on"):(n.flashIndicator.textContent="○ LINTERNA: OFF",n.flashIndicator.className="off"),n.killCount.textContent=String(e.kills);let a=-t*180/Math.PI%360;a<0&&(a+=360);const l=Math.round(a/22.5)%16,c=a0[l];n.compassNeedle.textContent=`${c} ${Math.round(a)}°`;const u=a%45/45*20-10;n.compassBar.style.transform=`translateX(${u}px)`}function Rt(n,e,t=!1){n.killAlertText.textContent=e,n.killAlert.style.display="block",t?(n.killAlert.style.borderColor="#ffaa00",n.killAlertText.style.color="#ffcc00"):(n.killAlert.style.borderColor="#00ff4160",n.killAlertText.style.color="#00ff41"),Nr&&clearTimeout(Nr),Nr=setTimeout(()=>{n.killAlert.style.display="none"},1800)}function rl(n){n.hitmarker.classList.add("active"),Or&&clearTimeout(Or),Or=setTimeout(()=>{n.hitmarker.classList.remove("active")},100)}function u0(n,e=!1){const t=e?"rgba(34, 170, 255, 0.46)":"rgba(255, 0, 0, 0.48)";n.glitchOverlay.style.background=t,Ti&&clearTimeout(Ti),Ti=setTimeout(()=>{n.glitchOverlay.style.background="rgba(255, 0, 0, 0)"},220)}function As(n,e){e?(n.doorPrompt.textContent=e,n.doorPrompt.style.display="block"):n.doorPrompt.style.display="none"}function d0(n){n.glitchOverlay.style.background="rgba(255, 190, 60, 0.08)",Ti&&clearTimeout(Ti),Ti=setTimeout(()=>{n.glitchOverlay.style.background="rgba(255, 0, 0, 0)"},70)}function h0(n,e,t){n.waveModalTitle.textContent=`// OLEADA ${e.waveNumber} SUPERADA //`;const i=Math.floor(e.durationSeconds/60),s=Math.floor(e.durationSeconds%60);n.statTime.textContent=`${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`;const r=e.shotsFired>0?(e.shotsHit/e.shotsFired*100).toFixed(1):"0.0";n.statAccuracy.textContent=`${r}% (${e.shotsHit}/${e.shotsFired})`;const o=e.shotsHit>0?(e.headshots/e.shotsHit*100).toFixed(1):"0.0";n.statHeadshots.textContent=`${e.headshots} (${o}%)`,n.statKills.textContent=String(e.kills),n.statDamageDealt.textContent=`${e.damageDealt} pts`,n.statHealthLeft.textContent=`${t}% HP`}function f0(n,e,t){n.innerHTML="";for(let i=1;i<=30;i++){const s=i<=e,r=document.createElement("div");r.className=`level-card ${s?"unlocked":"locked"}`;let o='<span class="lvl-tag tag-normal">Horda Regular</span>';i===5||i===8?o='<span class="lvl-tag tag-boss">★ Mini-Boss</span>':i===10?o='<span class="lvl-tag tag-dog">🐺 Jauría Canina</span>':i>=11&&i<=14?o='<span class="lvl-tag tag-dog">🐺 Caninos + Azar Boss</span>':i===15?o='<span class="lvl-tag tag-mega">☣ 3 Bosses</span>':i===16||i===17?o='<span class="lvl-tag tag-irradiated">☢ Irradiados Rojos</span>':i===18||i===19?o='<span class="lvl-tag tag-irradiated">☢ Rojos + Caninos</span>':i===20?o='<span class="lvl-tag tag-mega">⚡ CLÍMAX TITÁNICO 20</span>':i===21?o='<span class="lvl-tag tag-irradiated">☠ Invasión Élite (105)</span>':i===22?o='<span class="lvl-tag tag-boss">☠ 2 Mini-Bosses (115)</span>':i===23?o='<span class="lvl-tag tag-irradiated">☣ 3 Mini-Bosses (120)</span>':i===24?o='<span class="lvl-tag tag-boss">☣ 2 Mini + Mega (130)</span>':i===25?o='<span class="lvl-tag tag-mega">⚡ Asalto Titánico (145)</span>':i===26?o='<span class="lvl-tag tag-boss">☣ 2 Mini-Bosses (155)</span>':i===27?o='<span class="lvl-tag tag-irradiated">☢ 3 Mini-Bosses (165)</span>':i===28?o='<span class="lvl-tag tag-mega">⚡ Dúo Mega-Boss (175)</span>':i===29?o='<span class="lvl-tag tag-boss">☠ 4 Mini + 1 Mega (190)</span>':i===30&&(o='<span class="lvl-tag tag-mega">⚡ ASEDIO FINAL APOCALÍPTICO (210)</span>'),r.innerHTML=`
      <div class="lvl-num">NIVEL ${i}</div>
      <div class="lvl-status">${s?"[ DISPONIBLE ]":"[ 🔒 BLOQUEADO ]"}</div>
      ${o}
    `,s&&r.addEventListener("click",()=>{t(i)}),n.appendChild(r)}}function p0(n,e){if(n.innerHTML="",e.length===0){const t=document.createElement("tr");t.innerHTML='<td colspan="4" style="color:#00ff4188; padding: 18px;">SIN REGISTROS TODAVÍA — ¡SOBREVIVE EN MODO INFINITO!</td>',n.appendChild(t);return}e.forEach((t,i)=>{const s=Math.floor(t.timeSeconds/60),r=Math.floor(t.timeSeconds%60),o=`${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`,a=document.createElement("tr"),l=i===0?"#ffcc00":i===1?"#00ffff":i===2?"#ff77aa":"#ffffff";a.innerHTML=`
      <td style="color:${l}; font-weight:bold;">#${i+1}</td>
      <td style="color:#00ff41; font-weight:bold; letter-spacing:0.12rem;">${o}</td>
      <td>${t.kills}</td>
      <td style="color:#ffffff99; font-size:0.75rem;">${t.date}</td>
    `,n.appendChild(a)})}function m0(n){const e=new Jm({canvas:n,antialias:!1,powerPreference:"high-performance"});return e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.shadowMap.enabled=!0,e.shadowMap.type=gl,e.toneMapping=_l,e.toneMappingExposure=.72,e.outputColorSpace=Yt,window.addEventListener("resize",()=>{e.setSize(window.innerWidth,window.innerHeight)}),e}function fo(n){const t=new Float32Array(1050);for(let o=0;o<350;o++)t[o*3]=(Math.random()-.5)*14,t[o*3+1]=Math.random()*3.2,t[o*3+2]=(Math.random()-.5)*24-2.5;const i=new Gt;i.setAttribute("position",new $t(t,3));const s=new Xl({color:10061994,size:.04,transparent:!0,opacity:.4,sizeAttenuation:!0}),r=new eg(i,s);return n.add(r),r}function g0(n,e){const t=n.geometry.attributes.position.array;for(let i=0;i<t.length/3;i++)t[i*3+1]+=e*.05*(Math.random()-.3),t[i*3]+=e*.02*(Math.random()-.5),t[i*3+1]>4.2&&(t[i*3+1]=0),t[i*3+1]<-.1&&(t[i*3+1]=4);n.geometry.attributes.position.needsUpdate=!0}function _0(){return"ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=960}function v0(){const n=_0(),e=document.getElementById("touch-controls");let t=null,i={x:0,y:0};const s=document.getElementById("touch-joystick-base"),r=document.getElementById("touch-joystick-knob");let o=null,a={x:0,y:0},l=0;function c(f=!1){e&&(n||f)&&(e.style.display="block")}function u(){e&&(e.style.display="none")}function d(f,m,g,S,p,h,E,x){if(!e)return;const T=document.getElementById("touch-zone-move");if(T){T.addEventListener("touchstart",I=>{if(I.preventDefault(),t!==null)return;const ue=I.changedTouches[0];t=ue.identifier,i={x:ue.clientX,y:ue.clientY},s&&r&&(s.style.display="block",s.style.left=`${ue.clientX-55}px`,s.style.top=`${ue.clientY-55}px`,r.style.transform="translate(0px, 0px)")},{passive:!1}),T.addEventListener("touchmove",I=>{I.preventDefault();for(let ue=0;ue<I.changedTouches.length;ue++){const me=I.changedTouches[ue];if(me.identifier===t){const Ce=me.clientX-i.x,he=me.clientY-i.y,Fe=Math.hypot(Ce,he),v=Math.min(Fe,45),W=Math.atan2(he,Ce),V=Math.cos(W)*v,J=Math.sin(W)*v;r&&(r.style.transform=`translate(${V}px, ${J}px)`);const $=14;m.w=he<-$,m.s=he>$,m.a=Ce<-$,m.d=Ce>$;break}}},{passive:!1});const ie=I=>{for(let ue=0;ue<I.changedTouches.length;ue++)if(I.changedTouches[ue].identifier===t){t=null,m.w=!1,m.s=!1,m.a=!1,m.d=!1,s&&(s.style.display="none");break}};T.addEventListener("touchend",ie),T.addEventListener("touchcancel",ie)}window.addEventListener("touchstart",ie=>{for(let I=0;I<ie.changedTouches.length;I++){const ue=ie.changedTouches[I],me=ue.target;if(!(me&&me.closest(".touch-btn"))&&!(me&&(me.closest(".game-btn")||me.closest(".pause-btn")))&&ue.clientX>window.innerWidth*.35&&o===null){o=ue.identifier,a={x:ue.clientX,y:ue.clientY},f.rotation.order="YXZ",l=f.rotation.x;break}}},{passive:!0}),window.addEventListener("touchmove",ie=>{for(let I=0;I<ie.changedTouches.length;I++){const ue=ie.changedTouches[I];if(ue.identifier===o){const me=ue.clientX-a.x,Ce=ue.clientY-a.y;a={x:ue.clientX,y:ue.clientY};const he=.0055;f.rotation.order="YXZ",f.rotation.y-=me*he,l-=Ce*he,l=Math.max(-Math.PI/2.3,Math.min(Math.PI/2.3,l)),f.rotation.x=l;break}}},{passive:!0});const D=ie=>{for(let I=0;I<ie.changedTouches.length;I++)if(ie.changedTouches[I].identifier===o){o=null;break}};window.addEventListener("touchend",D),window.addEventListener("touchcancel",D);const C=document.getElementById("touch-btn-fire"),R=document.getElementById("touch-btn-aim"),U=document.getElementById("touch-btn-reload"),M=document.getElementById("touch-btn-use"),_=document.getElementById("touch-btn-flash"),L=document.getElementById("touch-btn-sprint"),F=document.getElementById("touch-btn-crouch"),P=document.getElementById("touch-btn-wep1"),z=document.getElementById("touch-btn-wep2"),k=document.getElementById("touch-btn-wep3"),B=document.getElementById("touch-btn-tab"),Z=ie=>{ie.stopPropagation(),g.isShooting=!0,S()},N=ie=>{ie.stopPropagation(),g.isShooting=!1};C?.addEventListener("touchstart",Z),C?.addEventListener("touchend",N),C?.addEventListener("mousedown",Z),C?.addEventListener("mouseup",N);const j=ie=>{ie.stopPropagation(),g.isAiming=!g.isAiming,R?.classList.toggle("active",g.isAiming)};R?.addEventListener("touchstart",j),R?.addEventListener("click",j);const K=ie=>{ie.stopPropagation(),h()};U?.addEventListener("touchstart",K),U?.addEventListener("click",K);const ne=ie=>{ie.stopPropagation(),x&&x()};M?.addEventListener("touchstart",ne),M?.addEventListener("click",ne);const ge=ie=>{ie.stopPropagation(),g.flashlight=!g.flashlight,_?.classList.toggle("active",g.flashlight)};_?.addEventListener("touchstart",ge),_?.addEventListener("click",ge);const Oe=ie=>{ie.stopPropagation(),g.isRunning=!g.isRunning,L?.classList.toggle("active",g.isRunning)};L?.addEventListener("touchstart",Oe),L?.addEventListener("click",Oe);const H=ie=>{ie.stopPropagation(),g.isCrouching=!g.isCrouching,F?.classList.toggle("active",g.isCrouching)};F?.addEventListener("touchstart",H),F?.addEventListener("click",H);const ee=ie=>{ie.stopPropagation(),p("pistol")},fe=ie=>{ie.stopPropagation(),p("rifle")},ae=ie=>{ie.stopPropagation(),p("shotgun")};P?.addEventListener("touchstart",ee),P?.addEventListener("click",ee),z?.addEventListener("touchstart",fe),z?.addEventListener("click",fe),k?.addEventListener("touchstart",ae),k?.addEventListener("click",ae);const Se=ie=>{ie.stopPropagation(),E()};B?.addEventListener("touchstart",Se),B?.addEventListener("click",Se);let de=!1;T?.addEventListener("mousedown",ie=>{ie.stopPropagation(),de=!0,i={x:ie.clientX,y:ie.clientY},s&&r&&(s.style.display="block",s.style.left=`${ie.clientX-55}px`,s.style.top=`${ie.clientY-55}px`,r.style.transform="translate(0px, 0px)")}),window.addEventListener("mousemove",ie=>{if(!de)return;const I=ie.clientX-i.x,ue=ie.clientY-i.y,me=Math.hypot(I,ue),Ce=Math.min(me,45),he=Math.atan2(ue,I);r&&(r.style.transform=`translate(${Math.cos(he)*Ce}px, ${Math.sin(he)*Ce}px)`);const Fe=14;m.w=ue<-Fe,m.s=ue>Fe,m.a=I<-Fe,m.d=I>Fe}),window.addEventListener("mouseup",()=>{de&&(de=!1,m.w=!1,m.s=!1,m.a=!1,m.d=!1,s&&(s.style.display="none"))})}return{isMobile:n,setup:d,show:c,hide:u}}const ic=document.getElementById("game-canvas"),pn=document.getElementById("start-screen"),x0=document.getElementById("btn-mode-horde"),M0=document.getElementById("btn-mode-infinite"),S0=document.getElementById("btn-settings"),y0=document.getElementById("btn-pause-settings"),ol=document.getElementById("ps1-dither-overlay"),hn=document.getElementById("pause-screen"),E0=document.getElementById("btn-resume"),T0=document.getElementById("btn-restart"),A0=document.getElementById("btn-home"),po=document.getElementById("hud"),Ln=document.getElementById("level-select-modal"),w0=document.getElementById("level-grid"),b0=document.getElementById("btn-level-back"),In=document.getElementById("wave-modal"),R0=document.getElementById("btn-next-wave"),C0=document.getElementById("btn-wave-home"),Jn=document.getElementById("gameover-modal"),P0=document.getElementById("btn-retry-horde"),L0=document.getElementById("btn-gameover-home"),Y=Mg();Y.isPaused=!0;const mo=Sg(),be=l0(),al=m0(ic);let st,fn=[],We,qs,Ys,$e=null,Bt=[],Lt=[],ht=0,bs=0,Kr=0,jr=180,Fr=0,Br=performance.now();$e=uo();st=$e.scene;fn=$e.walls;We=r0(st,ic,$e.playerSpawn);We.setBounds(-35,35,-35,35);qs=o0(We.camera);Ys=fo(st);const Zn=v0();function sc(){const n=zs();be.fpsCounter.style.display=n.showFps?"block":"none",ol&&(ol.style.display=n.ps1Filter?"block":"none"),n.touchControls||Zn.isMobile?Zn.show(!0):Zn.hide(),be.settingToggleFps.checked=n.showFps,be.settingTogglePs1.checked=n.ps1Filter,be.settingToggleTouch.checked=n.touchControls}sc();function rc(){const n=zs();be.settingToggleFps.checked=n.showFps,be.settingTogglePs1.checked=n.ps1Filter,be.settingToggleTouch.checked=n.touchControls,be.settingsModal.style.display="flex"}function I0(){xg({showFps:be.settingToggleFps.checked,ps1Filter:be.settingTogglePs1.checked,touchControls:be.settingToggleTouch.checked}),sc(),be.settingsModal.style.display="none"}S0?.addEventListener("click",rc);y0?.addEventListener("click",rc);be.btnSettingsClose?.addEventListener("click",I0);let zr=!1;function go(){zr=!zr,zr?(p0(be.leaderboardRows,ec()),be.leaderboardModal.style.display="flex",We.controls.unlock()):(be.leaderboardModal.style.display="none",!Y.isPaused&&!Y.isGameOver&&pn.style.display==="none"&&We.controls.lock())}be.btnLeaderboardClose?.addEventListener("click",go);window.addEventListener("keydown",n=>{n.code==="Tab"&&(n.preventDefault(),go())});let Q=null;function oc(){if(Q){Q.state==="suspended"&&Q.resume();return}Q=new AudioContext;const n=Q.createOscillator();n.type="sine",n.frequency.setValueAtTime(45,Q.currentTime);const e=Q.createGain();e.gain.setValueAtTime(.035,Q.currentTime);const t=Q.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(110,Q.currentTime),n.connect(t),t.connect(e),e.connect(Q.destination),n.start()}function D0(){if(!Q)return;const n=Q.currentTime,e=Q.createBuffer(1,Q.sampleRate*.22,Q.sampleRate),t=e.getChannelData(0);for(let r=0;r<t.length;r++)t[r]=(Math.random()*2-1)*Math.exp(-r/(Q.sampleRate*.038));const i=Q.createBufferSource();i.buffer=e;const s=Q.createGain();s.gain.setValueAtTime(1.1,n),s.gain.exponentialRampToValueAtTime(.001,n+.22),i.connect(s),s.connect(Q.destination),i.start(n)}function U0(){if(!Q)return;const n=Q.currentTime,e=Q.createBuffer(1,Q.sampleRate*.2,Q.sampleRate),t=e.getChannelData(0);for(let a=0;a<t.length;a++)t[a]=(Math.random()*2-1)*Math.exp(-a/(Q.sampleRate*.032));const i=Q.createBufferSource();i.buffer=e;const s=Q.createOscillator();s.type="triangle",s.frequency.setValueAtTime(180,n),s.frequency.exponentialRampToValueAtTime(50,n+.08);const r=Q.createGain();r.gain.setValueAtTime(.8,n),r.gain.exponentialRampToValueAtTime(.001,n+.1),s.connect(r),r.connect(Q.destination),s.start(n),s.stop(n+.1);const o=Q.createGain();o.gain.setValueAtTime(1.5,n),o.gain.exponentialRampToValueAtTime(.001,n+.2),i.connect(o),o.connect(Q.destination),i.start(n)}function N0(){if(!Q)return;const n=Q.currentTime,e=Q.createBuffer(1,Q.sampleRate*.45,Q.sampleRate),t=e.getChannelData(0);for(let a=0;a<t.length;a++)t[a]=(Math.random()*2-1)*Math.exp(-a/(Q.sampleRate*.07));const i=Q.createBufferSource();i.buffer=e;const s=Q.createGain();s.gain.setValueAtTime(2.2,n),s.gain.exponentialRampToValueAtTime(.001,n+.45),i.connect(s),s.connect(Q.destination),i.start(n);const r=Q.createDelay();r.delayTime.setValueAtTime(.18,n);const o=Q.createGain();o.gain.setValueAtTime(.55,n),i.connect(r),r.connect(o),o.connect(Q.destination)}function O0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="triangle",e.frequency.setValueAtTime(320,n),e.frequency.exponentialRampToValueAtTime(160,n+.08);const t=Q.createGain();t.gain.setValueAtTime(.5,n),t.gain.exponentialRampToValueAtTime(.001,n+.09),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.09)}function F0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="sine",e.frequency.setValueAtTime(440,n),e.frequency.linearRampToValueAtTime(880,n+.22);const t=Q.createGain();t.gain.setValueAtTime(.55,n),t.gain.linearRampToValueAtTime(.001,n+.25),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.25)}function ll(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="square",e.frequency.setValueAtTime(280,n),e.frequency.exponentialRampToValueAtTime(620,n+.16);const t=Q.createGain();t.gain.setValueAtTime(.48,n),t.gain.exponentialRampToValueAtTime(.001,n+.18),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.18)}function B0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="triangle",e.frequency.setValueAtTime(520,n),e.frequency.exponentialRampToValueAtTime(840,n+.12);const t=Q.createGain();t.gain.setValueAtTime(.42,n),t.gain.exponentialRampToValueAtTime(.001,n+.14),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.14)}function z0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="triangle",e.frequency.setValueAtTime(950,n),e.frequency.exponentialRampToValueAtTime(200,n+.18);const t=Q.createGain();t.gain.setValueAtTime(.7,n),t.gain.exponentialRampToValueAtTime(.001,n+.2),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.2)}function cl(n,e,t){if(!Q)return;const i=Q.currentTime,s=Q.createOscillator();s.type="sawtooth";const r=t?360:e?90:180,o=t?120:e?35:70;s.frequency.setValueAtTime(r,i),s.frequency.exponentialRampToValueAtTime(o,i+(t?.45:e?1.6:.8));const a=Q.createBiquadFilter();a.type=t?"bandpass":"lowpass",a.frequency.setValueAtTime(t?650:e?240:360,i);const l=Q.createGain();l.gain.setValueAtTime(e?.4:t?.22:.14,i),l.gain.exponentialRampToValueAtTime(.001,i+(t?.45:e?1.6:.85)),s.connect(a),a.connect(l),l.connect(Q.destination),s.start(i),s.stop(i+(t?.45:e?1.6:.85))}function ac(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="triangle",e.frequency.setValueAtTime(140,n),e.frequency.exponentialRampToValueAtTime(80,n+.14);const t=Q.createGain();t.gain.setValueAtTime(.4,n),t.gain.exponentialRampToValueAtTime(.001,n+.15),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.15)}function H0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="triangle",e.frequency.setValueAtTime(180,n),e.frequency.linearRampToValueAtTime(320,n+.18);const t=Q.createGain();t.gain.setValueAtTime(.45,n),t.gain.exponentialRampToValueAtTime(.001,n+.22),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.22)}function V0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="triangle",e.frequency.setValueAtTime(160,n),e.frequency.exponentialRampToValueAtTime(55,n+.15);const t=Q.createGain();t.gain.setValueAtTime(.65,n),t.gain.exponentialRampToValueAtTime(.001,n+.18),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.18)}function ul(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="square",e.frequency.setValueAtTime(520,n),e.frequency.exponentialRampToValueAtTime(220,n+.14);const t=Q.createGain();t.gain.setValueAtTime(.45,n),t.gain.exponentialRampToValueAtTime(.001,n+.14),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.14)}function lc(){if(!Q)return;const n=Q.currentTime,e=Q.createBuffer(1,Q.sampleRate*.35,Q.sampleRate),t=e.getChannelData(0);for(let r=0;r<t.length;r++)t[r]=(Math.random()*2-1)*Math.exp(-r/(Q.sampleRate*.08));const i=Q.createBufferSource();i.buffer=e;const s=Q.createGain();s.gain.setValueAtTime(1.8,n),s.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(s),s.connect(Q.destination),i.start(n)}function k0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="triangle",e.frequency.setValueAtTime(125,n),e.frequency.exponentialRampToValueAtTime(40,n+.22);const t=Q.createGain();t.gain.setValueAtTime(.75,n),t.gain.exponentialRampToValueAtTime(.001,n+.25),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.25)}function G0(){if(!Q)return;const n=Q.currentTime,e=Q.createOscillator();e.type="square",e.frequency.setValueAtTime(700,n),e.frequency.exponentialRampToValueAtTime(180,n+.05);const t=Q.createGain();t.gain.setValueAtTime(.25,n),t.gain.exponentialRampToValueAtTime(.001,n+.05),e.connect(t),t.connect(Q.destination),e.start(n),e.stop(n+.05)}function cc(n){Y.isReloading&&Di(),Y.currentWeapon!==n&&(Y.currentWeapon=n,qs.setWeapon(n))}let Rs=null,Wi=null;function Di(){Rs&&(clearInterval(Rs),Rs=null),Wi&&(clearTimeout(Wi),Wi=null),Y.isReloading=!1}function uc(){if(Y.isReloading)return;const n=ji[Y.currentWeapon],e=Y.weapons[Y.currentWeapon];e.reserveAmmo<=0||e.magAmmo===n.magSize||(Y.isReloading=!0,n.isIncrementalReload?Rs=setInterval(()=>{e.magAmmo<n.magSize&&e.reserveAmmo>0?(e.magAmmo++,e.reserveAmmo--,O0()):Di()},480):Wi=setTimeout(()=>{const t=n.magSize-e.magAmmo,i=Math.min(t,e.reserveAmmo);e.magAmmo+=i,e.reserveAmmo-=i,Y.isReloading=!1,Wi=null},n.reloadTime))}const dc={1:{totalCount:5,bosses:[],speedMult:1},2:{totalCount:8,bosses:[],speedMult:1.08},3:{totalCount:12,bosses:[],speedMult:1.15},4:{totalCount:15,bosses:[],speedMult:1.22},5:{totalCount:18,bosses:["mini"],speedMult:1.28},6:{totalCount:20,bosses:[],speedMult:1.34},7:{totalCount:22,bosses:[],speedMult:1.4},8:{totalCount:24,bosses:["mini"],speedMult:1.45},9:{totalCount:28,bosses:[],speedMult:1.5},10:{totalCount:35,bosses:["mini"],dogChance:.35,speedMult:1.55},11:{totalCount:40,bosses:[],dogChance:.38,bossRandomChance:.35,speedMult:1.6},12:{totalCount:45,bosses:[],dogChance:.4,bossRandomChance:.45,speedMult:1.65},13:{totalCount:50,bosses:[],dogChance:.44,bossRandomChance:.55,speedMult:1.7},14:{totalCount:55,bosses:["mini"],dogChance:.46,speedMult:1.75},15:{totalCount:60,bosses:["mini","mini","mega"],dogChance:.48,speedMult:1.8},16:{totalCount:65,bosses:[],dogChance:.5,irradiatedChance:.35,speedMult:1.85},17:{totalCount:72,bosses:["mini"],dogChance:.5,irradiatedChance:.45,speedMult:1.9},18:{totalCount:80,bosses:["mini","mini"],dogChance:.52,irradiatedChance:.55,speedMult:1.95},19:{totalCount:90,bosses:["mini","mini"],dogChance:.55,irradiatedChance:.65,speedMult:2},20:{totalCount:100,bosses:["mini","mini","mega"],dogChance:.55,irradiatedChance:.7,speedMult:2.08},21:{totalCount:105,bosses:[],dogChance:.58,irradiatedChance:.75,speedMult:2.12},22:{totalCount:115,bosses:["mini","mini"],dogChance:.6,irradiatedChance:.8,speedMult:2.16},23:{totalCount:120,bosses:["mini","mini","mini"],dogChance:.6,irradiatedChance:.85,speedMult:2.2},24:{totalCount:130,bosses:["mini","mini","mega"],dogChance:.62,irradiatedChance:.9,speedMult:2.25},25:{totalCount:145,bosses:["mini","mini","mega"],dogChance:.65,irradiatedChance:.95,speedMult:2.3},26:{totalCount:155,bosses:["mini","mini"],dogChance:.66,irradiatedChance:.95,speedMult:2.35},27:{totalCount:165,bosses:["mini","mini","mini"],dogChance:.7,irradiatedChance:.96,speedMult:2.38},28:{totalCount:175,bosses:["mini","mini","mega","mega"],dogChance:.7,irradiatedChance:.98,speedMult:2.42},29:{totalCount:190,bosses:["mini","mini","mini","mini","mega"],dogChance:.72,irradiatedChance:1,speedMult:2.46},30:{totalCount:210,bosses:["mini","mini","mini","mini","mega","mega"],dogChance:.75,irradiatedChance:1,speedMult:2.5}};let Xi=[],Cs=0;function hc(n,e){if(!$e||$e.spawnPoints.length===0)return new b(25,0,25);const t=new b;e.getWorldDirection(t),t.y=0,t.normalize();const i=[];for(const o of $e.spawnPoints){const a=new b().subVectors(o,n);a.y=0;const l=a.length();if(l<9.5)continue;a.normalize();let u=(1-t.dot(a))*2+(l>25?2:0);i.push({pt:o,score:u})}i.sort((o,a)=>a.score-o.score);const s=Math.min(4,Math.max(1,i.length)),r=i.length>0?i[Math.floor(Math.random()*s)].pt.clone():$e.spawnPoints[Math.floor(Math.random()*$e.spawnPoints.length)].clone();return r.x+=(Math.random()-.5)*3,r.z+=(Math.random()-.5)*3,r}function fc(n){if(!$e)return;$r(n);for(const s of Bt)s.destroy();Bt=[];const e=n===1||n%5===0;for(let s=Lt.length-1;s>=0;s--){const r=Lt[s],o=r.group.position,a=Math.abs(o.x- -16)<3.8&&Math.abs(o.z- -16)<3.8||Math.abs(o.x-16)<3.8&&Math.abs(o.z-16)<3.8;(e||!a)&&(r.destroy(),Lt.splice(s,1))}if(e&&$e){for(const s of $e.doors)s.repair(st,fn);Lt.push(...ho(st)),n>1&&Rt(be,"📦 [LOGÍSTICA] ¡REFUGIOS REABASTECIDOS Y PUERTAS REPARADAS!",!0)}Y.currentWave=n,tc(Y);const t=dc[n]||{totalCount:30,bosses:[]};Y.totalEnemiesInWave=t.totalCount,Y.enemiesSpawnedSoFar=0,Y.enemiesRemaining=t.totalCount,Xi=[...t.bosses],t.bossRandomChance&&Math.random()<t.bossRandomChance&&Xi.push("mini"),Cs=0;const i=Math.min(Y.maxActiveEnemies,Y.totalEnemiesInWave);for(let s=0;s<i;s++)pc()}function pc(){if(!$e||Y.enemiesSpawnedSoFar>=Y.totalEnemiesInWave)return;const n=dc[Y.currentWave]||{speedMult:1.6},t=n.dogChance!==void 0&&Math.random()<n.dogChance?"dog":"humanoid";let i="none";const s=Y.totalEnemiesInWave-Y.enemiesSpawnedSoFar;Xi.length>0&&(s<=Xi.length+2||Math.random()<.25)?i=Xi.shift():n.irradiatedChance&&Math.random()<n.irradiatedChance&&(i="irradiated");const r=n.irradiatedChance!==void 0&&Math.random()<n.irradiatedChance,o=hc(We.camera.position,We.camera),a=(2.3+Y.currentWave*.06)*n.speedMult,l=nc(`enemy-w${Y.currentWave}-${Y.enemiesSpawnedSoFar}`,o,a,st,i,t,r);Bt.push(l),Y.enemiesSpawnedSoFar++}function mc(){if(!$e)return;let n="FASE 1: INCURSIÓN BÁSICA",e=0,t=.01,i=0;ht<120?(n="FASE 1: INCURSIÓN BÁSICA",e=ht>60?.2:0,t=.02,i=.04):ht<300?(n="FASE 2: JAURÍA ABERRANTE",e=.4,t=.18,i=.12):ht<600?(n="FASE 3: PURGA IRRADIADA CARMESÍ",e=.5,t=.5,i=.2):ht<1200?(n="FASE 4: ASALTO PESADO DE TITANES",e=.55,t=.8,i=.25):(n="FASE 5: APOCALIPSIS SUPREMO ROJO",e=.6,t=.95,i=.3),be.hudDifficultyPhase.style.display="block",be.hudDifficultyPhase.textContent=n;let s="none";if(ht-Kr>=180&&ht>=90)s="mega",Kr=ht,Rt(be,"☠ ¡ALERTA: MEGA BOSS TITÁNICO DETECTADO! ☠",!0);else{const f=Math.random();f<i?(s="mini",Rt(be,"★ ¡MINI-BOSS DETECTADO EN EL SECTOR! ★",!0)):f<i+t?s="irradiated":s="none"}const o=Math.random()<e?"dog":"humanoid",a=Math.random()<t,l=hc(We.camera.position,We.camera),u=2.4*(1+Math.min(1.2,ht/300*.6)),d=nc(`enemy-inf-${Date.now()}-${Math.random()}`,l,u,st,s,o,a);Bt.push(d)}function dl(n){if(Y.isGameOver||Y.isPaused)return;let e=!1;if(Y.shield>0&&(Y.shield>=n?(Y.shield-=n,n=0,e=!0,ul()):(n-=Y.shield,Y.shield=0,e=!1,ul())),Y.health=Math.max(0,Y.health-n),Y.waveDamageTaken+=n,e||k0(),u0(be,e),Y.health<=0){if(Y.isGameOver=!0,Di(),We.controls.unlock(),Y.gameMode==="infinite"){_g(ht),vg(ht,Y.kills);const t=Math.floor(ht/60),i=Math.floor(ht%60),s=`${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}`,r=Ql(),o=Math.floor(r/60),a=Math.floor(r%60),l=`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`;be.infiniteStatsSummary.style.display="block",be.infiniteStatsSummary.innerHTML=`
        <div style="color: #ff3344; font-weight: bold; letter-spacing: 0.15rem;">[ RESUMEN DE SUPERVIVENCIA INFINITA ]</div>
        TIEMPO RESISTIDO: <span style="color:#ffffff; font-weight:bold;">${s}</span><br>
        RÉCORD HISTÓRICO: <span style="color:#00ff41; font-weight:bold;">${l}</span><br>
        BAJAS TOTALES: <span style="color:#ffffff; font-weight:bold;">${Y.kills}</span><br>
        <span style="color:#22aaff; font-size:0.75rem;">(Registro guardado en tu Top 10 histórico)</span>
      `}else be.infiniteStatsSummary.style.display="none";Jn.style.display="flex"}}let hl=0;function _o(){if(Y.isPaused||Y.isGameOver)return;Q&&Q.state==="suspended"&&Q.resume();const n=ji[Y.currentWeapon],e=Y.weapons[Y.currentWeapon];if(Y.isReloading&&n.isIncrementalReload&&e.magAmmo>0)Di();else if(Y.isReloading)return;const t=performance.now()/1e3;if(t-hl<n.fireRate)return;if(hl=t,e.magAmmo<=0){G0();return}e.magAmmo--,qs.triggerFire(),Y.currentWeapon==="pistol"?D0():Y.currentWeapon==="rifle"?U0():N0(),d0(be),Y.waveShotsFired++;const i=n.pellets;let s=!1;for(let r=0;r<i;r++){const o=new rg;let a=0,l=0;if((i>1||n.spread>.01)&&(a=(Math.random()-.5)*n.spread*2,l=(Math.random()-.5)*n.spread*2),o.setFromCamera(new Xe(a,l),We.camera),Y.gameMode==="horde"||Y.gameMode==="infinite"){const c=Bt.filter(m=>m.isAlive),u=[];for(const m of c)u.push(m.headMesh,m.torsoMesh,m.limbsMesh);const d=[...u,...fn],f=o.intersectObjects(d,!0);if(f.length>0){const m=f[0],g=m.object;if(g.userData?.isDoor){s=!0,rl(be),ac(),g.userData.doorRef.takeDamage(n.damageTorso,()=>{lc(),Rt(be,"⚠ ¡PUERTA DESTRUIDA! ⚠",!1)}),fl(m.point);continue}if(g.userData?.isEnemy){s=!0;const S=g.userData.zone,p=g.userData.enemyId,h=c.find(E=>E.id===p);if(h&&h.isAlive){rl(be);let E=n.damageTorso;if(S==="head"?E=n.damageHead:S==="limbs"&&(E=n.damageLimbs),Y.currentWeapon==="shotgun"&&m.distance>4){const T=Math.max(.18,1-(m.distance-4)/12);E=Math.round(E*T)}const x=h.takeDamage(S,E);if(Y.waveDamageDealt+=x.damage,x.isHeadshot?(Y.waveHeadshots++,z0(),Rt(be,h.bossTier==="mega"?"★ ¡TIRO A LA CABEZA AL MEGA BOSS! ★":h.bossTier==="mini"?"★ ¡TIRO A LA CABEZA AL MINI-BOSS! ★":h.species==="dog"?"★ ¡CRÍTICO AL CRÁNEO DEL CANINO! ★":h.isIrradiated?"★ ¡TIRO A LA CABEZA AL IRRADIADO ROJO! ★":"★ ¡TIRO A LA CABEZA! (CRÍTICO) ★",!0)):S==="torso"?Rt(be,h.isIrradiated?`☢ IMPACTO A IRRADIADO (-${x.damage} HP)`:`⚠ IMPACTO EN EL TORSO (-${x.damage} HP)`,!1):Rt(be,`⚠ IMPACTO EN EXTREMIDAD (-${x.damage} HP)`,!1),W0(m.point),x.killed){Y.kills++,Y.waveKills++,h.bossTier!=="none"&&Y.totalBossesDefeated++;const T=Kg(st,h.getPosition(),h.bossTier,h.species==="dog");Lt.push(...T),Y.gameMode==="horde"&&(Y.enemiesRemaining=Math.max(0,Y.enemiesRemaining-1),Y.enemiesRemaining===0&&Y.enemiesSpawnedSoFar>=Y.totalEnemiesInWave&&X0())}}}else fl(m.point)}}}s&&Y.waveShotsHit++}function fl(n){const e=new Ki(.035,4,4),t=new dt({color:16763972}),i=new oe(e,t);i.position.copy(n),st.add(i),setTimeout(()=>st.remove(i),180)}function W0(n){const e=new Ki(.065,5,5),t=new dt({color:11145506}),i=new oe(e,t);i.position.copy(n),st.add(i),setTimeout(()=>st.remove(i),220)}function X0(){Di();const n=(performance.now()-Y.waveStartTime)/1e3,e={waveNumber:Y.currentWave,durationSeconds:n,shotsFired:Y.waveShotsFired,shotsHit:Y.waveShotsHit,headshots:Y.waveHeadshots,damageDealt:Y.waveDamageDealt,damageTaken:Y.waveDamageTaken,kills:Y.waveKills};h0(be,e,Y.health),Y.currentWave<Y.maxWaves?(mg(Y.currentWave+1,Y.health,Y.weapons,Y.shield),$r(Y.currentWave+1),Y.health=Math.min(Yn,Y.health+15),We.controls.unlock(),In.style.display="flex"):($r(30),We.controls.unlock(),q0())}function q0(){const n=document.createElement("div");n.style.cssText=`
    position: fixed; inset: 0; background: rgba(0,0,0,0.96); z-index: 200;
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; font-family: 'Courier New', monospace;
    color: #00ff41; gap: 20px; text-align: center; padding: 25px;
  `,n.innerHTML=`
    <div style="font-size:0.8rem; letter-spacing:0.35rem; color:#ffcc00;">— PROTOCOLO D.N.S. CUMPLIDO AL 100% —</div>
    <h1 style="font-size:3.0rem; letter-spacing:0.7rem; color:#00ff41; text-shadow:0 0 35px #00ff41;">¡HORDA 30/30 COMPLETADA!</h1>
    <div style="font-size:1.15rem; color:#ffcc00; letter-spacing:0.3rem; margin-top:-5px;">★ CLÍMAX FINAL SUPERADO — LA ABERRACIÓN SUPREMA HA SIDO ERRADICADA ★</div>
    <p style="font-size:0.85rem; letter-spacing:0.18rem; color:#00ff41cc; max-width:640px; line-height:2.2; margin-top:10px;">
      Superaste los 30 niveles de combate táctico de alta intensidad en el búnker militar.<br>
      Total de aberraciones neutralizadas: <span style="color:#ffffff; font-weight:bold;">${Y.kills}</span><br>
      Integridad final del operador: <span style="color:#ffffff; font-weight:bold;">${Y.health}% HP</span> | Escudo: <span style="color:#22aaff; font-weight:bold;">${Y.shield} pts</span><br>
      <span style="color:#00ff41;">El parásito en tu nuca ha sido purgado definitivamente. Tu percepción y lucidez han sido restauradas.</span>
    </p>
    <div style="display:flex; gap:16px; margin-top:25px;">
      <button id="btn-grand-retry" class="pause-btn">[ REPETIR CAMPAÑA ]</button>
      <button id="btn-grand-home" class="pause-btn danger">[ MENÚ PRINCIPAL ]</button>
    </div>
  `,document.body.appendChild(n),setTimeout(()=>{document.getElementById("btn-grand-retry")?.addEventListener("click",()=>{n.remove(),Zs(1)}),document.getElementById("btn-grand-home")?.addEventListener("click",()=>{n.remove(),$s()})},100)}function Zs(n=1){oc(),co(Y,"horde",n),$e=uo(),st=$e.scene,fn=$e.walls,st.add(We.camera),Ys=fo(st),We.resetPosition($e.playerSpawn),We.setBounds(-35,35,-35,35),fc(n),pn.style.display="none",Ln.style.display="none",hn.style.display="none",In.style.display="none",Jn.style.display="none",po.style.display="block",We.controls.lock()}function Y0(){pn.style.display="none",Ln.style.display="flex";const n=Jl();f0(w0,n,e=>{Zs(e)})}function vo(){oc(),co(Y,"infinite"),$e=uo(),st=$e.scene,fn=$e.walls,st.add(We.camera),Ys=fo(st),We.resetPosition($e.playerSpawn),We.setBounds(-35,35,-35,35);for(const n of Bt)n.destroy();Bt=[];for(const n of Lt)n.destroy();if(Lt=[],ht=0,bs=.5,Kr=0,jr=180+Math.random()*120,$e){for(const n of $e.doors)n.repair(st,fn);Lt.push(...ho(st))}for(let n=0;n<7;n++)mc();pn.style.display="none",Ln.style.display="none",hn.style.display="none",In.style.display="none",Jn.style.display="none",po.style.display="block",be.hudObjective.innerText="▶ MODO HORDA INFINITO ◀",We.controls.lock()}function $s(){Di(),co(Y),Y.isPaused=!0,We.controls.unlock(),pn.style.display="flex",Ln.style.display="none",po.style.display="none",hn.style.display="none",In.style.display="none",Jn.style.display="none",be.infiniteStatsSummary.style.display="none",be.leaderboardModal.style.display="none";for(const n of Bt)n.destroy();Bt=[];for(const n of Lt)n.destroy();Lt=[]}function gc(){if(!$e)return;const n=We.camera.position;let e=null,t=1/0;for(const i of $e.doors){const s=i.position.distanceTo(n);s<3.2&&s<t&&(t=s,e=i)}if(e){if(e.isDestroyed){Rt(be,"⚠ PUERTA DESTRUIDA — REFUGIO COMPROMETIDO ⚠",!1);return}e.toggle(st,fn)?(H0(),Rt(be,"🚪 PUERTA ABIERTA (ACCESO HABILITADO)",!1)):(V0(),Rt(be,"🚪 PUERTA CERRADA Y SELLADA (REFUGIO SEGURO)",!0))}}window.addEventListener("keydown",n=>{if(n.code==="KeyE"){if(Y.isPaused||Y.isGameOver)return;gc()}});Zn.setup(We.camera,mo,Y,_o,cc,uc,go,gc);yg(mo,Y,_o,cc,uc);x0.addEventListener("click",Y0);b0.addEventListener("click",()=>{Ln.style.display="none",pn.style.display="flex"});M0.addEventListener("click",()=>{vo()});We.controls.addEventListener("unlock",()=>{Zn.isMobile||pn.style.display==="none"&&Ln.style.display==="none"&&In.style.display==="none"&&Jn.style.display==="none"&&be.settingsModal.style.display==="none"&&be.leaderboardModal.style.display==="none"&&!Y.isGameOver&&(Y.isPaused=!0,hn.style.display="flex")});We.controls.addEventListener("lock",()=>{Y.isPaused=!1,hn.style.display="none"});E0.addEventListener("click",n=>{n.stopPropagation(),Zn.isMobile?(Y.isPaused=!1,hn.style.display="none"):We.controls.lock()});T0.addEventListener("click",n=>{n.stopPropagation(),Y.gameMode==="infinite"?vo():Zs(Y.currentWave)});A0.addEventListener("click",n=>{n.stopPropagation(),$s()});window.addEventListener("click",n=>{if(pn.style.display==="none"&&Ln.style.display==="none"&&In.style.display==="none"&&Jn.style.display==="none"&&be.settingsModal.style.display==="none"&&be.leaderboardModal.style.display==="none"&&!Y.isGameOver){const e=n.target;if(e.closest(".pause-btn")||e.closest(".game-btn")||e.closest(".touch-btn")||e.closest(".level-card"))return;!We.controls.isLocked&&!Zn.isMobile&&(Y.isPaused=!1,hn.style.display="none",We.controls.lock())}});window.addEventListener("keydown",n=>{(n.code==="KeyP"||n.code==="Escape")&&pn.style.display==="none"&&Ln.style.display==="none"&&In.style.display==="none"&&Jn.style.display==="none"&&!Y.isGameOver&&(Y.isPaused?(Y.isPaused=!1,hn.style.display="none",We.controls.lock()):(Y.isPaused=!0,hn.style.display="flex",We.controls.unlock()))});R0.addEventListener("click",n=>{n.stopPropagation(),In.style.display="none",fc(Y.currentWave+1),We.controls.lock()});C0.addEventListener("click",n=>{n.stopPropagation(),$s()});P0.addEventListener("click",n=>{n.stopPropagation(),Y.gameMode==="infinite"?vo():Zs(Y.currentWave)});L0.addEventListener("click",n=>{n.stopPropagation(),$s()});let pl=performance.now();function Z0(){return We.camera.rotation.y}function _c(){requestAnimationFrame(_c);const n=performance.now(),e=Math.min((n-pl)/1e3,.05);if(pl=n,Fr++,n-Br>=200){const o=Math.round(Fr*1e3/(n-Br)),a=(1e3/Math.max(1,o)).toFixed(1);let l=-We.camera.rotation.y*180/Math.PI%360;l<0&&(l+=360);const c=Math.round(l/22.5)%16,u=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"][c];be.fpsCounter.innerText=`FPS: ${o} (${a}ms) | ${u} ${Math.round(l)}°`,Fr=0,Br=n}if(Y.isPaused||Y.isGameOver){al.render(st,We.camera);return}const t=We.camera.position;We.update(e,mo,Y,fn),Y.isShooting&&!Y.isReloading&&ji[Y.currentWeapon].isAutomatic&&_o(),qs.update(e,Y),g0(Ys,e);for(let o=Lt.length-1;o>=0;o--){const a=Lt[o];a.update(e,t,Y,(c,u)=>{a.type==="medkit"?(F0(),Rt(be,u,!0)):a.type==="armor_vest"?(ll(),Rt(be,u,!0)):(B0(),Rt(be,u,!1))})&&Lt.splice(o,1)}if($e){let o=null,a=1/0;for(const l of $e.doors){const c=l.position.distanceTo(t);c<2.8&&c<a&&(a=c,o=l)}o?o.isDestroyed?As(be,"[PUERTA DESTRUIDA POR LA HORDA]"):o.isOpen?As(be,"[E / USAR] CERRAR PUERTA DEL REFUGIO"):As(be,`[E / USAR] ABRIR PUERTA (${o.health}/${o.maxHealth} HP)`):As(be,null)}const i=(o,a)=>{if($e){for(const l of $e.doors)if(!l.isDestroyed&&!l.isOpen&&l.position.distanceTo(o)<2.3){ac(),l.takeDamage(a,()=>{lc(),Rt(be,"⚠ ¡PUERTA DESTRUIDA POR LA HORDA! ⚠",!0)});break}}};if(Y.gameMode==="horde"){Cs-=e,Bt.filter(a=>a.isAlive).length<Y.maxActiveEnemies&&Y.enemiesSpawnedSoFar<Y.totalEnemiesInWave&&Cs<=0&&(Cs=1.1,pc());for(const a of Bt)a.update(e,t,We.camera,Y.flashlight,Y.enemiesRemaining,dl,cl,i,$e?.doors)}else if(Y.gameMode==="infinite"){if(ht+=e,Y.infiniteSurvivalTime=ht,Y.infiniteKills=Y.kills,ht>=jr){if($e){for(const d of $e.doors)d.repair(st,fn);Lt.push(...ho(st))}ll(),Rt(be,"📦 [LOGÍSTICA DE EMERGENCIA] ¡REFUGIOS REABASTECIDOS Y PUERTAS REPARADAS!",!0),jr=ht+180+Math.random()*120}const o=Math.floor(ht/60),a=Math.floor(ht%60),l=`${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`,c=Math.min(18,Math.floor(7+ht/45)),u=Bt.filter(d=>d.isAlive).length;bs-=e,u<c&&bs<=0&&(mc(),bs=Math.max(.65,2.2-ht/240)),be.hudObjective.innerText=`TIEMPO: ${l} | AMENAZAS: ${u}`;for(const d of Bt)d.update(e,t,We.camera,Y.flashlight,u,dl,cl,i,$e?.doors)}const s=st.__flickerUpdate;s&&s(e);const r=Z0();c0(be,Y,r),al.render(st,We.camera)}_c();
