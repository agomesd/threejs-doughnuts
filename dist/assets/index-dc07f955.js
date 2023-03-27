(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const is="150",An={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Da=0,gs=1,Ra=2,Wo=1,Ia=2,hi=3,sn=0,Me=1,en=2,rn=0,Wn=1,_s=2,xs=3,vs=4,Fa=5,Gn=100,Na=101,Oa=102,ys=103,Ms=104,za=200,Ua=201,Ba=202,ka=203,Xo=204,qo=205,Ga=206,Va=207,Ha=208,Wa=209,Xa=210,qa=0,$a=1,Ya=2,qr=3,ja=4,Za=5,Ja=6,Ka=7,$o=0,Qa=1,tl=2,Ze=0,el=1,nl=2,il=3,rl=4,sl=5,Yo=300,Yn=301,jn=302,$r=303,Yr=304,Ki=306,jr=1e3,Le=1001,Zr=1002,de=1003,bs=1004,lr=1005,we=1006,ol=1007,pi=1008,vn=1009,al=1010,ll=1011,jo=1012,cl=1013,gn=1014,_n=1015,mi=1016,hl=1017,ul=1018,Xn=1020,dl=1021,Pe=1023,fl=1024,pl=1025,xn=1026,Zn=1027,ml=1028,gl=1029,_l=1030,xl=1031,vl=1033,cr=33776,hr=33777,ur=33778,dr=33779,Ss=35840,ws=35841,Es=35842,As=35843,yl=36196,Ts=37492,Cs=37496,Ls=37808,Ps=37809,Ds=37810,Rs=37811,Is=37812,Fs=37813,Ns=37814,Os=37815,zs=37816,Us=37817,Bs=37818,ks=37819,Gs=37820,Vs=37821,fr=36492,Ml=36283,Hs=36284,Ws=36285,Xs=36286,yn=3e3,Xt=3001,bl=3200,Sl=3201,Zo=0,wl=1,Oe="srgb",gi="srgb-linear",Jo="display-p3",pr=7680,El=519,qs=35044,$s="300 es",Jr=1035;class En{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,Ys=180/Math.PI;function Kn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(re[s&255]+re[s>>8&255]+re[s>>16&255]+re[s>>24&255]+"-"+re[t&255]+re[t>>8&255]+"-"+re[t>>16&15|64]+re[t>>24&255]+"-"+re[e&63|128]+re[e>>8&255]+"-"+re[e>>16&255]+re[e>>24&255]+re[n&255]+re[n>>8&255]+re[n>>16&255]+re[n>>24&255]).toLowerCase()}function oe(s,t,e){return Math.max(t,Math.min(e,s))}function Al(s,t){return(s%t+t)%t}function gr(s,t,e){return(1-e)*s+e*t}function js(s){return(s&s-1)===0&&s!==0}function Tl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],p=i[0],f=i[3],g=i[6],S=i[1],x=i[4],v=i[7],E=i[2],C=i[5],D=i[8];return r[0]=a*p+o*S+c*E,r[3]=a*f+o*x+c*C,r[6]=a*g+o*v+c*D,r[1]=l*p+h*S+u*E,r[4]=l*f+h*x+u*C,r[7]=l*g+h*v+u*D,r[2]=d*p+m*S+_*E,r[5]=d*f+m*x+_*C,r[8]=d*g+m*v+_*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,_=e*u+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return t[0]=u*p,t[1]=(i*l-h*n)*p,t[2]=(o*n-i*a)*p,t[3]=d*p,t[4]=(h*e-i*c)*p,t[5]=(i*r-o*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(a*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new fe;function Ko(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function _i(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}class Mn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],m=r[a+1],_=r[a+2],p=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=p;return}if(u!==p||c!==d||l!==m||h!==_){let f=1-o;const g=c*d+l*m+h*_+u*p,S=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),C=Math.atan2(E,g*S);f=Math.sin(f*C)/E,o=Math.sin(o*C)/E}const v=o*S;if(c=c*f+d*v,l=l*f+m*v,h=h*f+_*v,u=u*f+p*v,f===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+c*m-l*d,t[e+1]=c*_+h*d+l*u-o*m,t[e+2]=l*_+h*m+o*d-c*u,t[e+3]=h*_-o*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),m=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"YZX":this._x=d*h*u+l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u-d*m*_;break;case"XZY":this._x=d*h*u-l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zs.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zs.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=c*e+a*i-o*n,h=c*n+o*e-r*i,u=c*i+r*n-a*e,d=-r*e-a*n-o*i;return this.x=l*c+d*-r+h*-o-u*-a,this.y=h*c+d*-a+u*-r-l*-o,this.z=u*c+d*-o+l*-a-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new P,Zs=new Mn;function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Cl=new fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ll=new fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),nn=new P;function Pl(s){return s.convertSRGBToLinear(),nn.set(s.r,s.g,s.b).applyMatrix3(Ll),s.setRGB(nn.x,nn.y,nn.z)}function Dl(s){return nn.set(s.r,s.g,s.b).applyMatrix3(Cl),s.setRGB(nn.x,nn.y,nn.z).convertLinearToSRGB()}const Rl={[gi]:s=>s,[Oe]:s=>s.convertSRGBToLinear(),[Jo]:Pl},Il={[gi]:s=>s,[Oe]:s=>s.convertLinearToSRGB(),[Jo]:Dl},he={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return gi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Rl[t],i=Il[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let Cn;class Qo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cn===void 0&&(Cn=_i("canvas")),Cn.width=t.width,Cn.height=t.height;const n=Cn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Cn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_i("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ta{constructor(t=null){this.isSource=!0,this.uuid=Kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(yr(i[a].image)):r.push(yr(i[a]))}else r=yr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function yr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class pe extends En{constructor(t=pe.DEFAULT_IMAGE,e=pe.DEFAULT_MAPPING,n=Le,i=Le,r=we,a=pi,o=Pe,c=vn,l=pe.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=Kn(),this.name="",this.source=new ta(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jr:t.x=t.x-Math.floor(t.x);break;case Le:t.x=t.x<0?0:1;break;case Zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jr:t.y=t.y-Math.floor(t.y);break;case Le:t.y=t.y<0?0:1;break;case Zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}pe.DEFAULT_IMAGE=null;pe.DEFAULT_MAPPING=Yo;pe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],_=c[9],p=c[2],f=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(m+1)/2,E=(g+1)/2,C=(h+d)/4,D=(u+p)/4,y=(_+f)/4;return x>v&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=D/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=y/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=D/r,i=y/r),this.set(n,i,r,e),this}let S=Math.sqrt((f-_)*(f-_)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(u-p)/S,this.z=(d-h)/S,this.w=Math.acos((l+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bn extends En{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new pe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:we,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ta(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ea extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nl extends pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Le,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(e,n,i),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)hn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(hn)}else n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox),Mr.applyMatrix4(t.matrixWorld),this.union(Mr);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ii),Ei.subVectors(this.max,ii),Ln.subVectors(t.a,ii),Pn.subVectors(t.b,ii),Dn.subVectors(t.c,ii),Je.subVectors(Pn,Ln),Ke.subVectors(Dn,Pn),un.subVectors(Ln,Dn);let e=[0,-Je.z,Je.y,0,-Ke.z,Ke.y,0,-un.z,un.y,Je.z,0,-Je.x,Ke.z,0,-Ke.x,un.z,0,-un.x,-Je.y,Je.x,0,-Ke.y,Ke.x,0,-un.y,un.x,0];return!br(e,Ln,Pn,Dn,Ei)||(e=[1,0,0,0,1,0,0,0,1],!br(e,Ln,Pn,Dn,Ei))?!1:(Ai.crossVectors(Je,Ke),e=[Ai.x,Ai.y,Ai.z],br(e,Ln,Pn,Dn,Ei))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(He[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),He[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),He[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),He[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),He[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),He[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),He[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),He[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(He),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const He=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,Mr=new Si,Ln=new P,Pn=new P,Dn=new P,Je=new P,Ke=new P,un=new P,ii=new P,Ei=new P,Ai=new P,dn=new P;function br(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){dn.fromArray(s,r);const o=i.x*Math.abs(dn.x)+i.y*Math.abs(dn.y)+i.z*Math.abs(dn.z),c=t.dot(dn),l=e.dot(dn),h=n.dot(dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ol=new Si,ri=new P,Sr=new P;class Qi{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ol.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ri.subVectors(t,this.center);const e=ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ri.copy(t.center).add(Sr)),this.expandByPoint(ri.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new P,wr=new P,Ti=new P,Qe=new P,Er=new P,Ci=new P,Ar=new P;class na{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.origin).addScaledVector(this.direction,e),We.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wr.copy(t).add(e).multiplyScalar(.5),Ti.copy(e).sub(t).normalize(),Qe.copy(this.origin).sub(wr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ti),o=Qe.dot(this.direction),c=-Qe.dot(Ti),l=Qe.lengthSq(),h=Math.abs(1-a*a);let u,d,m,_;if(h>0)if(u=a*c-o,d=a*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const p=1/h;u*=p,d*=p,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wr).addScaledVector(Ti,d),m}intersectSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),i=We.dot(We)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,n,i,r){Er.subVectors(e,t),Ci.subVectors(n,t),Ar.crossVectors(Er,Ci);let a=this.direction.dot(Ar),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qe.subVectors(this.origin,t);const c=o*this.direction.dot(Ci.crossVectors(Qe,Ci));if(c<0)return null;const l=o*this.direction.dot(Er.cross(Qe));if(l<0||c+l>a)return null;const h=-o*Qe.dot(Ar);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,o,c,l,h,u,d,m,_,p,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=m,g[7]=_,g[11]=p,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Rn.setFromMatrixColumn(t,0).length(),r=1/Rn.setFromMatrixColumn(t,1).length(),a=1/Rn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,m=a*u,_=o*h,p=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+_*l,e[5]=d-p*l,e[9]=-o*c,e[2]=p-d*l,e[6]=_+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,_=l*h,p=l*u;e[0]=d+p*o,e[4]=_*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=p+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,_=l*h,p=l*u;e[0]=d-p*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=p-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*u,_=o*h,p=o*u;e[0]=c*h,e[4]=_*l-m,e[8]=d*l+p,e[1]=c*u,e[5]=p*l+d,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,_=o*c,p=o*l;e[0]=c*h,e[4]=p-d*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+_,e[10]=d-p*u}else if(t.order==="XZY"){const d=a*c,m=a*l,_=o*c,p=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+p,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=p*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zl,t,Ul)}lookAt(t,e,n){const i=this.elements;return ve.subVectors(t,e),ve.lengthSq()===0&&(ve.z=1),ve.normalize(),tn.crossVectors(n,ve),tn.lengthSq()===0&&(Math.abs(n.z)===1?ve.x+=1e-4:ve.z+=1e-4,ve.normalize(),tn.crossVectors(n,ve)),tn.normalize(),Li.crossVectors(ve,tn),i[0]=tn.x,i[4]=Li.x,i[8]=ve.x,i[1]=tn.y,i[5]=Li.y,i[9]=ve.y,i[2]=tn.z,i[6]=Li.z,i[10]=ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],p=n[6],f=n[10],g=n[14],S=n[3],x=n[7],v=n[11],E=n[15],C=i[0],D=i[4],y=i[8],A=i[12],R=i[1],X=i[5],Z=i[9],U=i[13],I=i[2],V=i[6],Y=i[10],tt=i[14],q=i[3],et=i[7],J=i[11],_t=i[15];return r[0]=a*C+o*R+c*I+l*q,r[4]=a*D+o*X+c*V+l*et,r[8]=a*y+o*Z+c*Y+l*J,r[12]=a*A+o*U+c*tt+l*_t,r[1]=h*C+u*R+d*I+m*q,r[5]=h*D+u*X+d*V+m*et,r[9]=h*y+u*Z+d*Y+m*J,r[13]=h*A+u*U+d*tt+m*_t,r[2]=_*C+p*R+f*I+g*q,r[6]=_*D+p*X+f*V+g*et,r[10]=_*y+p*Z+f*Y+g*J,r[14]=_*A+p*U+f*tt+g*_t,r[3]=S*C+x*R+v*I+E*q,r[7]=S*D+x*X+v*V+E*et,r[11]=S*y+x*Z+v*Y+E*J,r[15]=S*A+x*U+v*tt+E*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],p=t[7],f=t[11],g=t[15];return _*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*m-n*c*m)+p*(+e*c*m-e*l*d+r*a*d-i*a*m+i*l*h-r*c*h)+f*(+e*l*u-e*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+g*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],p=t[13],f=t[14],g=t[15],S=u*f*l-p*d*l+p*c*m-o*f*m-u*c*g+o*d*g,x=_*d*l-h*f*l-_*c*m+a*f*m+h*c*g-a*d*g,v=h*p*l-_*u*l+_*o*m-a*p*m-h*o*g+a*u*g,E=_*u*c-h*p*c-_*o*d+a*p*d+h*o*f-a*u*f,C=e*S+n*x+i*v+r*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=S*D,t[1]=(p*d*r-u*f*r-p*i*m+n*f*m+u*i*g-n*d*g)*D,t[2]=(o*f*r-p*c*r+p*i*l-n*f*l-o*i*g+n*c*g)*D,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*m-n*c*m)*D,t[4]=x*D,t[5]=(h*f*r-_*d*r+_*i*m-e*f*m-h*i*g+e*d*g)*D,t[6]=(_*c*r-a*f*r-_*i*l+e*f*l+a*i*g-e*c*g)*D,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*m+e*c*m)*D,t[8]=v*D,t[9]=(_*u*r-h*p*r-_*n*m+e*p*m+h*n*g-e*u*g)*D,t[10]=(a*p*r-_*o*r+_*n*l-e*p*l-a*n*g+e*o*g)*D,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*m-e*o*m)*D,t[12]=E*D,t[13]=(h*p*i-_*u*i+_*n*d-e*p*d-h*n*f+e*u*f)*D,t[14]=(_*o*i-a*p*i-_*n*c+e*p*c+a*n*f-e*o*f)*D,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,_=r*u,p=a*h,f=a*u,g=o*u,S=c*l,x=c*h,v=c*u,E=n.x,C=n.y,D=n.z;return i[0]=(1-(p+g))*E,i[1]=(m+v)*E,i[2]=(_-x)*E,i[3]=0,i[4]=(m-v)*C,i[5]=(1-(d+g))*C,i[6]=(f+S)*C,i[7]=0,i[8]=(_+x)*D,i[9]=(f-S)*D,i[10]=(1-(d+p))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Rn.set(i[0],i[1],i[2]).length();const a=Rn.set(i[4],i[5],i[6]).length(),o=Rn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ae.copy(this);const l=1/r,h=1/a,u=1/o;return Ae.elements[0]*=l,Ae.elements[1]*=l,Ae.elements[2]*=l,Ae.elements[4]*=h,Ae.elements[5]*=h,Ae.elements[6]*=h,Ae.elements[8]*=u,Ae.elements[9]*=u,Ae.elements[10]*=u,e.setFromRotationMatrix(Ae),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a){const o=this.elements,c=2*r/(e-t),l=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,a){const o=this.elements,c=1/(e-t),l=1/(n-i),h=1/(a-r),u=(e+t)*c,d=(n+i)*l,m=(a+r)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rn=new P,Ae=new Jt,zl=new P(0,0,0),Ul=new P(1,1,1),tn=new P,Li=new P,ve=new P,Js=new Jt,Ks=new Mn;class tr{constructor(t=0,e=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Js.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Js,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ks.setFromEuler(this),this.setFromQuaternion(Ks,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class ia{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bl=0;const Qs=new P,In=new Mn,Xe=new Jt,Pi=new P,si=new P,kl=new P,Gl=new Mn,to=new P(1,0,0),eo=new P(0,1,0),no=new P(0,0,1),Vl={type:"added"},io={type:"removed"};class me extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new P,e=new tr,n=new Mn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new fe}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return In.setFromAxisAngle(t,e),this.quaternion.multiply(In),this}rotateOnWorldAxis(t,e){return In.setFromAxisAngle(t,e),this.quaternion.premultiply(In),this}rotateX(t){return this.rotateOnAxis(to,t)}rotateY(t){return this.rotateOnAxis(eo,t)}rotateZ(t){return this.rotateOnAxis(no,t)}translateOnAxis(t,e){return Qs.copy(t).applyQuaternion(this.quaternion),this.position.add(Qs.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(to,t)}translateY(t){return this.translateOnAxis(eo,t)}translateZ(t){return this.translateOnAxis(no,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pi.copy(t):Pi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(si,Pi,this.up):Xe.lookAt(Pi,si,this.up),this.quaternion.setFromRotationMatrix(Xe),i&&(Xe.extractRotation(i.matrixWorld),In.setFromRotationMatrix(Xe),this.quaternion.premultiply(In.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(io)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(io)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,t,kl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(si,Gl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new P(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Te=new P,qe=new P,Tr=new P,$e=new P,Fn=new P,Nn=new P,ro=new P,Cr=new P,Lr=new P,Pr=new P;class je{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Te.subVectors(t,e),i.cross(Te);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Te.subVectors(i,e),qe.subVectors(n,e),Tr.subVectors(t,e);const a=Te.dot(Te),o=Te.dot(qe),c=Te.dot(Tr),l=qe.dot(qe),h=qe.dot(Tr),u=a*l-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,m=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$e),$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,$e),c.set(0,0),c.addScaledVector(r,$e.x),c.addScaledVector(a,$e.y),c.addScaledVector(o,$e.z),c}static isFrontFacing(t,e,n,i){return Te.subVectors(n,e),qe.subVectors(t,e),Te.cross(qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Te.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Te.cross(qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return je.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Fn.subVectors(i,n),Nn.subVectors(r,n),Cr.subVectors(t,n);const c=Fn.dot(Cr),l=Nn.dot(Cr);if(c<=0&&l<=0)return e.copy(n);Lr.subVectors(t,i);const h=Fn.dot(Lr),u=Nn.dot(Lr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Fn,a);Pr.subVectors(t,r);const m=Fn.dot(Pr),_=Nn.dot(Pr);if(_>=0&&m<=_)return e.copy(r);const p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(Nn,o);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return ro.subVectors(r,i),o=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(ro,o);const g=1/(f+p+d);return a=p*g,o=d*g,e.copy(n).addScaledVector(Fn,a).addScaledVector(Nn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Hl=0;class Qn extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Wn,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ra={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ce={h:0,s:0,l:0},Di={h:0,s:0,l:0};function Dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Al(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dr(a,r,t+1/3),this.g=Dr(a,r,t),this.b=Dr(a,r,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,he.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,he.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,he.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,he.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=ra[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return he.fromWorkingColorSpace(se.copy(this),t),oe(se.r*255,0,255)<<16^oe(se.g*255,0,255)<<8^oe(se.b*255,0,255)<<0}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(se.copy(this),e);const n=se.r,i=se.g,r=se.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(se.copy(this),e),t.r=se.r,t.g=se.g,t.b=se.b,t}getStyle(t=Oe){he.fromWorkingColorSpace(se.copy(this),t);const e=se.r,n=se.g,i=se.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ce),Ce.h+=t,Ce.s+=e,Ce.l+=n,this.setHSL(Ce.h,Ce.s,Ce.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ce),t.getHSL(Di);const n=gr(Ce.h,Di.h,e),i=gr(Ce.s,Di.s,e),r=gr(Ce.l,Di.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const se=new Ht;Ht.NAMES=ra;class rs extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new P,Ri=new at;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ri.fromBufferAttribute(this,e),Ri.applyMatrix3(t),this.setXY(e,Ri.x,Ri.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sa extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oa extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wl=0;const Se=new Jt,Rr=new me,On=new P,ye=new Si,oi=new Si,ne=new P;class Re extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ko(t)?oa:sa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Se.makeRotationFromQuaternion(t),this.applyMatrix4(Se),this}rotateX(t){return Se.makeRotationX(t),this.applyMatrix4(Se),this}rotateY(t){return Se.makeRotationY(t),this.applyMatrix4(Se),this}rotateZ(t){return Se.makeRotationZ(t),this.applyMatrix4(Se),this}translate(t,e,n){return Se.makeTranslation(t,e,n),this.applyMatrix4(Se),this}scale(t,e,n){return Se.makeScale(t,e,n),this.applyMatrix4(Se),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ye.setFromBufferAttribute(r),this.morphTargetsRelative?(ne.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(ne),ne.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(ne)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];oi.setFromBufferAttribute(o),this.morphTargetsRelative?(ne.addVectors(ye.min,oi.min),ye.expandByPoint(ne),ne.addVectors(ye.max,oi.max),ye.expandByPoint(ne)):(ye.expandByPoint(oi.min),ye.expandByPoint(oi.max))}ye.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ne.fromBufferAttribute(o,l),c&&(On.fromBufferAttribute(t,l),ne.add(On)),i=Math.max(i,n.distanceToSquared(ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<o;R++)l[R]=new P,h[R]=new P;const u=new P,d=new P,m=new P,_=new at,p=new at,f=new at,g=new P,S=new P;function x(R,X,Z){u.fromArray(i,R*3),d.fromArray(i,X*3),m.fromArray(i,Z*3),_.fromArray(a,R*2),p.fromArray(a,X*2),f.fromArray(a,Z*2),d.sub(u),m.sub(u),p.sub(_),f.sub(_);const U=1/(p.x*f.y-f.x*p.y);isFinite(U)&&(g.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(U),S.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(U),l[R].add(g),l[X].add(g),l[Z].add(g),h[R].add(S),h[X].add(S),h[Z].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,X=v.length;R<X;++R){const Z=v[R],U=Z.start,I=Z.count;for(let V=U,Y=U+I;V<Y;V+=3)x(n[V+0],n[V+1],n[V+2])}const E=new P,C=new P,D=new P,y=new P;function A(R){D.fromArray(r,R*3),y.copy(D);const X=l[R];E.copy(X),E.sub(D.multiplyScalar(D.dot(X))).normalize(),C.crossVectors(y,X);const U=C.dot(h[R])<0?-1:1;c[R*4]=E.x,c[R*4+1]=E.y,c[R*4+2]=E.z,c[R*4+3]=U}for(let R=0,X=v.length;R<X;++R){const Z=v[R],U=Z.start,I=Z.count;for(let V=U,Y=U+I;V<Y;V+=3)A(n[V+0]),A(n[V+1]),A(n[V+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),p=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ne.fromBufferAttribute(t,e),ne.normalize(),t.setXYZ(e,ne.x,ne.y,ne.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let p=0,f=c.length;p<f;p++){o.isInterleavedBufferAttribute?m=c[p]*o.data.stride+o.offset:m=c[p]*h;for(let g=0;g<h;g++)d[_++]=l[m++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new Jt,Ne=new na,Ii=new Qi,oo=new P,ai=new P,li=new P,ci=new P,Ir=new P,Fi=new P,Ni=new at,Oi=new at,zi=new at,Fr=new P,Ui=new P;class De extends me{constructor(t=new Re,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Fi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ir.fromBufferAttribute(u,t),a?Fi.addScaledVector(Ir,h):Fi.addScaledVector(Ir.sub(e),h))}e.add(Fi)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere),Ii.applyMatrix4(r),Ne.copy(t.ray).recast(t.near),Ii.containsPoint(Ne.origin)===!1&&(Ne.intersectSphere(Ii,oo)===null||Ne.origin.distanceToSquared(oo)>(t.far-t.near)**2))||(so.copy(r).invert(),Ne.copy(t.ray).applyMatrix4(so),n.boundingBox!==null&&Ne.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,_=u.length;m<_;m++){const p=u[m],f=i[p.materialIndex],g=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,v=S;x<v;x+=3){const E=o.getX(x),C=o.getX(x+1),D=o.getX(x+2);a=Bi(this,f,t,Ne,l,h,E,C,D),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const g=o.getX(p),S=o.getX(p+1),x=o.getX(p+2);a=Bi(this,i,t,Ne,l,h,g,S,x),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,_=u.length;m<_;m++){const p=u[m],f=i[p.materialIndex],g=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let x=g,v=S;x<v;x+=3){const E=x,C=x+1,D=x+2;a=Bi(this,f,t,Ne,l,h,E,C,D),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=p.materialIndex,e.push(a))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const g=p,S=p+1,x=p+2;a=Bi(this,i,t,Ne,l,h,g,S,x),a&&(a.faceIndex=Math.floor(p/3),e.push(a))}}}}function Xl(s,t,e,n,i,r,a,o){let c;if(t.side===Me?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===sn,o),c===null)return null;Ui.copy(o),Ui.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ui);return l<e.near||l>e.far?null:{distance:l,point:Ui.clone(),object:s}}function Bi(s,t,e,n,i,r,a,o,c){s.getVertexPosition(a,ai),s.getVertexPosition(o,li),s.getVertexPosition(c,ci);const l=Xl(s,t,e,n,ai,li,ci,Fr);if(l){i&&(Ni.fromBufferAttribute(i,a),Oi.fromBufferAttribute(i,o),zi.fromBufferAttribute(i,c),l.uv=je.getUV(Fr,ai,li,ci,Ni,Oi,zi,new at)),r&&(Ni.fromBufferAttribute(r,a),Oi.fromBufferAttribute(r,o),zi.fromBufferAttribute(r,c),l.uv2=je.getUV(Fr,ai,li,ci,Ni,Oi,zi,new at));const h={a,b:o,c,normal:new P,materialIndex:0};je.getNormal(ai,li,ci,h.normal),l.face=h}return l}class ti extends Re{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function _(p,f,g,S,x,v,E,C,D,y,A){const R=v/D,X=E/y,Z=v/2,U=E/2,I=C/2,V=D+1,Y=y+1;let tt=0,q=0;const et=new P;for(let J=0;J<Y;J++){const _t=J*X-U;for(let B=0;B<V;B++){const K=B*R-Z;et[p]=K*S,et[f]=_t*x,et[g]=I,l.push(et.x,et.y,et.z),et[p]=0,et[f]=0,et[g]=C>0?1:-1,h.push(et.x,et.y,et.z),u.push(B/D),u.push(1-J/y),tt+=1}}for(let J=0;J<y;J++)for(let _t=0;_t<D;_t++){const B=d+_t+V*J,K=d+_t+V*(J+1),st=d+(_t+1)+V*(J+1),O=d+(_t+1)+V*J;c.push(B,K,O),c.push(K,st,O),q+=6}o.addGroup(m,q,A),m+=q,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Jn(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ue(s){const t={};for(let e=0;e<s.length;e++){const n=Jn(s[e]);for(const i in n)t[i]=n[i]}return t}function ql(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function aa(s){return s.getRenderTarget()===null&&s.outputEncoding===Xt?Oe:gi}const $l={clone:Jn,merge:ue};var Yl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yl,this.fragmentShader=jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jn(t.uniforms),this.uniformsGroups=ql(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class la extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ee extends la{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zn=-90,Un=1;class Zl extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ee(zn,Un,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Ee(zn,Un,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ee(zn,Un,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ee(zn,Un,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Ee(zn,Un,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ee(zn,Un,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Ze,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ca extends pe{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Yn,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jl extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ca(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:we}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ti(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:rn});r.uniforms.tEquirect.value=e;const a=new De(i,r),o=e.minFilter;return e.minFilter===pi&&(e.minFilter=we),new Zl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Nr=new P,Kl=new P,Ql=new fe;class fn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Nr.subVectors(n,e).cross(Kl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ql.getNormalMatrix(t),i=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new Qi,ki=new P;class ha{constructor(t=new fn,e=new fn,n=new fn,i=new fn,r=new fn,a=new fn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],_=n[10],p=n[11],f=n[12],g=n[13],S=n[14],x=n[15];return e[0].setComponents(o-i,u-c,p-d,x-f).normalize(),e[1].setComponents(o+i,u+c,p+d,x+f).normalize(),e[2].setComponents(o+r,u+l,p+m,x+g).normalize(),e[3].setComponents(o-r,u-l,p-m,x-g).normalize(),e[4].setComponents(o-a,u-h,p-_,x-S).normalize(),e[5].setComponents(o+a,u+h,p+_,x+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSprite(t){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ki.x=i.normal.x>0?t.max.x:t.min.x,ki.y=i.normal.y>0?t.max.y:t.min.y,ki.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ki)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ua(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tc(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,m=h.updateRange;s.bindBuffer(u,l),m.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:a,remove:o,update:c}}class ss extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,m=[],_=[],p=[],f=[];for(let g=0;g<h;g++){const S=g*d-a;for(let x=0;x<l;x++){const v=x*u-r;_.push(v,-S,0),p.push(0,0,1),f.push(x/o),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<o;S++){const x=S+l*g,v=S+l*(g+1),E=S+1+l*(g+1),C=S+1+l*g;m.push(x,v,C),m.push(v,E,C)}this.setIndex(m),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(p,3)),this.setAttribute("uv",new ae(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ss(t.width,t.height,t.widthSegments,t.heightSegments)}}var ec=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,nc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ic=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ac="vec3 transformed = vec3( position );",lc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,hc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,uc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yc=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,Mc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,bc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ec=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Pc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Rc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ic=`#ifdef USE_ENVMAP
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
#endif`,Fc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uc=`#ifdef USE_GRADIENTMAP
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
}`,Bc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Wc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$c=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zc=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Jc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uh=`#ifdef USE_MORPHNORMALS
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
#endif`,dh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,fh=`#ifdef USE_MORPHTARGETS
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
#endif`,ph=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Eh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Th=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ph=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nh=`float getShadowMask() {
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
}`,Oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Uh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bh=`#ifdef USE_SKINNING
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
#endif`,kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Xh=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$h=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,jh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tu=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ru=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,su=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ou=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,au=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,lu=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,du=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_u=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,xu=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,bu=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Au=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Cu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Pu=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Du=`uniform float rotation;
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
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dt={alphamap_fragment:ec,alphamap_pars_fragment:nc,alphatest_fragment:ic,alphatest_pars_fragment:rc,aomap_fragment:sc,aomap_pars_fragment:oc,begin_vertex:ac,beginnormal_vertex:lc,bsdfs:cc,iridescence_fragment:hc,bumpmap_pars_fragment:uc,clipping_planes_fragment:dc,clipping_planes_pars_fragment:fc,clipping_planes_pars_vertex:pc,clipping_planes_vertex:mc,color_fragment:gc,color_pars_fragment:_c,color_pars_vertex:xc,color_vertex:vc,common:yc,cube_uv_reflection_fragment:Mc,defaultnormal_vertex:bc,displacementmap_pars_vertex:Sc,displacementmap_vertex:wc,emissivemap_fragment:Ec,emissivemap_pars_fragment:Ac,encodings_fragment:Tc,encodings_pars_fragment:Cc,envmap_fragment:Lc,envmap_common_pars_fragment:Pc,envmap_pars_fragment:Dc,envmap_pars_vertex:Rc,envmap_physical_pars_fragment:Wc,envmap_vertex:Ic,fog_vertex:Fc,fog_pars_vertex:Nc,fog_fragment:Oc,fog_pars_fragment:zc,gradientmap_pars_fragment:Uc,lightmap_fragment:Bc,lightmap_pars_fragment:kc,lights_lambert_fragment:Gc,lights_lambert_pars_fragment:Vc,lights_pars_begin:Hc,lights_toon_fragment:Xc,lights_toon_pars_fragment:qc,lights_phong_fragment:$c,lights_phong_pars_fragment:Yc,lights_physical_fragment:jc,lights_physical_pars_fragment:Zc,lights_fragment_begin:Jc,lights_fragment_maps:Kc,lights_fragment_end:Qc,logdepthbuf_fragment:th,logdepthbuf_pars_fragment:eh,logdepthbuf_pars_vertex:nh,logdepthbuf_vertex:ih,map_fragment:rh,map_pars_fragment:sh,map_particle_fragment:oh,map_particle_pars_fragment:ah,metalnessmap_fragment:lh,metalnessmap_pars_fragment:ch,morphcolor_vertex:hh,morphnormal_vertex:uh,morphtarget_pars_vertex:dh,morphtarget_vertex:fh,normal_fragment_begin:ph,normal_fragment_maps:mh,normal_pars_fragment:gh,normal_pars_vertex:_h,normal_vertex:xh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:Mh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:Sh,output_fragment:wh,packing:Eh,premultiplied_alpha_fragment:Ah,project_vertex:Th,dithering_fragment:Ch,dithering_pars_fragment:Lh,roughnessmap_fragment:Ph,roughnessmap_pars_fragment:Dh,shadowmap_pars_fragment:Rh,shadowmap_pars_vertex:Ih,shadowmap_vertex:Fh,shadowmask_pars_fragment:Nh,skinbase_vertex:Oh,skinning_pars_vertex:zh,skinning_vertex:Uh,skinnormal_vertex:Bh,specularmap_fragment:kh,specularmap_pars_fragment:Gh,tonemapping_fragment:Vh,tonemapping_pars_fragment:Hh,transmission_fragment:Wh,transmission_pars_fragment:Xh,uv_pars_fragment:qh,uv_pars_vertex:$h,uv_vertex:Yh,uv2_pars_fragment:jh,uv2_pars_vertex:Zh,uv2_vertex:Jh,worldpos_vertex:Kh,background_vert:Qh,background_frag:tu,backgroundCube_vert:eu,backgroundCube_frag:nu,cube_vert:iu,cube_frag:ru,depth_vert:su,depth_frag:ou,distanceRGBA_vert:au,distanceRGBA_frag:lu,equirect_vert:cu,equirect_frag:hu,linedashed_vert:uu,linedashed_frag:du,meshbasic_vert:fu,meshbasic_frag:pu,meshlambert_vert:mu,meshlambert_frag:gu,meshmatcap_vert:_u,meshmatcap_frag:xu,meshnormal_vert:vu,meshnormal_frag:yu,meshphong_vert:Mu,meshphong_frag:bu,meshphysical_vert:Su,meshphysical_frag:wu,meshtoon_vert:Eu,meshtoon_frag:Au,points_vert:Tu,points_frag:Cu,shadow_vert:Lu,shadow_frag:Pu,sprite_vert:Du,sprite_frag:Ru},ot={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fe},uv2Transform:{value:new fe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}}},ze={basic:{uniforms:ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ue([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ue([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ue([ot.points,ot.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ue([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ue([ot.common,ot.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ue([ot.sprite,ot.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:ue([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:ue([ot.lights,ot.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};ze.physical={uniforms:ue([ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new at(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Gi={r:0,b:0,g:0};function Iu(s,t,e,n,i,r,a){const o=new Ht(0);let c=r===!0?0:1,l,h,u=null,d=0,m=null;function _(f,g){let S=!1,x=g.isScene===!0?g.background:null;x&&x.isTexture&&(x=(g.backgroundBlurriness>0?e:t).get(x));const v=s.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?p(o,c):x&&x.isColor&&(p(x,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ki)?(h===void 0&&(h=new De(new ti(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Jn(ze.backgroundCube.uniforms),vertexShader:ze.backgroundCube.vertexShader,fragmentShader:ze.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=x.encoding!==Xt,(u!==x||d!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new De(new ss(2,2),new Sn({name:"BackgroundMaterial",uniforms:Jn(ze.background.uniforms),vertexShader:ze.background.vertexShader,fragmentShader:ze.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=x.encoding!==Xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,g){f.getRGB(Gi,aa(s)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(f,g=1){o.set(f),c=g,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(o,c)},render:_}}function Fu(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=f(null);let l=c,h=!1;function u(I,V,Y,tt,q){let et=!1;if(a){const J=p(tt,Y,V);l!==J&&(l=J,m(l.object)),et=g(I,tt,Y,q),et&&S(I,tt,Y,q)}else{const J=V.wireframe===!0;(l.geometry!==tt.id||l.program!==Y.id||l.wireframe!==J)&&(l.geometry=tt.id,l.program=Y.id,l.wireframe=J,et=!0)}q!==null&&e.update(q,34963),(et||h)&&(h=!1,y(I,V,Y,tt),q!==null&&s.bindBuffer(34963,e.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function p(I,V,Y){const tt=Y.wireframe===!0;let q=o[I.id];q===void 0&&(q={},o[I.id]=q);let et=q[V.id];et===void 0&&(et={},q[V.id]=et);let J=et[tt];return J===void 0&&(J=f(d()),et[tt]=J),J}function f(I){const V=[],Y=[],tt=[];for(let q=0;q<i;q++)V[q]=0,Y[q]=0,tt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:tt,object:I,attributes:{},index:null}}function g(I,V,Y,tt){const q=l.attributes,et=V.attributes;let J=0;const _t=Y.getAttributes();for(const B in _t)if(_t[B].location>=0){const st=q[B];let O=et[B];if(O===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(O=I.instanceColor)),st===void 0||st.attribute!==O||O&&st.data!==O.data)return!0;J++}return l.attributesNum!==J||l.index!==tt}function S(I,V,Y,tt){const q={},et=V.attributes;let J=0;const _t=Y.getAttributes();for(const B in _t)if(_t[B].location>=0){let st=et[B];st===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(st=I.instanceColor));const O={};O.attribute=st,st&&st.data&&(O.data=st.data),q[B]=O,J++}l.attributes=q,l.attributesNum=J,l.index=tt}function x(){const I=l.newAttributes;for(let V=0,Y=I.length;V<Y;V++)I[V]=0}function v(I){E(I,0)}function E(I,V){const Y=l.newAttributes,tt=l.enabledAttributes,q=l.attributeDivisors;Y[I]=1,tt[I]===0&&(s.enableVertexAttribArray(I),tt[I]=1),q[I]!==V&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,V),q[I]=V)}function C(){const I=l.newAttributes,V=l.enabledAttributes;for(let Y=0,tt=V.length;Y<tt;Y++)V[Y]!==I[Y]&&(s.disableVertexAttribArray(Y),V[Y]=0)}function D(I,V,Y,tt,q,et){n.isWebGL2===!0&&(Y===5124||Y===5125)?s.vertexAttribIPointer(I,V,Y,q,et):s.vertexAttribPointer(I,V,Y,tt,q,et)}function y(I,V,Y,tt){if(n.isWebGL2===!1&&(I.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const q=tt.attributes,et=Y.getAttributes(),J=V.defaultAttributeValues;for(const _t in et){const B=et[_t];if(B.location>=0){let K=q[_t];if(K===void 0&&(_t==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),_t==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const st=K.normalized,O=K.itemSize,pt=e.get(K);if(pt===void 0)continue;const ut=pt.buffer,mt=pt.type,gt=pt.bytesPerElement;if(K.isInterleavedBufferAttribute){const xt=K.data,Tt=xt.stride,$=K.offset;if(xt.isInstancedInterleavedBuffer){for(let j=0;j<B.locationSize;j++)E(B.location+j,xt.meshPerAttribute);I.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let j=0;j<B.locationSize;j++)v(B.location+j);s.bindBuffer(34962,ut);for(let j=0;j<B.locationSize;j++)D(B.location+j,O/B.locationSize,mt,st,Tt*gt,($+O/B.locationSize*j)*gt)}else{if(K.isInstancedBufferAttribute){for(let xt=0;xt<B.locationSize;xt++)E(B.location+xt,K.meshPerAttribute);I.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xt=0;xt<B.locationSize;xt++)v(B.location+xt);s.bindBuffer(34962,ut);for(let xt=0;xt<B.locationSize;xt++)D(B.location+xt,O/B.locationSize,mt,st,O*gt,O/B.locationSize*xt*gt)}}else if(J!==void 0){const st=J[_t];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(B.location,st);break;case 3:s.vertexAttrib3fv(B.location,st);break;case 4:s.vertexAttrib4fv(B.location,st);break;default:s.vertexAttrib1fv(B.location,st)}}}}C()}function A(){Z();for(const I in o){const V=o[I];for(const Y in V){const tt=V[Y];for(const q in tt)_(tt[q].object),delete tt[q];delete V[Y]}delete o[I]}}function R(I){if(o[I.id]===void 0)return;const V=o[I.id];for(const Y in V){const tt=V[Y];for(const q in tt)_(tt[q].object),delete tt[q];delete V[Y]}delete o[I.id]}function X(I){for(const V in o){const Y=o[V];if(Y[I.id]===void 0)continue;const tt=Y[I.id];for(const q in tt)_(tt[q].object),delete tt[q];delete Y[I.id]}}function Z(){U(),h=!0,l!==c&&(l=c,m(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:v,disableUnusedAttributes:C}}function Nu(s,t,e,n){const i=n.isWebGL2;let r;function a(l){r=l}function o(l,h){s.drawArrays(r,l,h),e.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,h,u),e.update(h,r,u)}this.setMode=a,this.render=o,this.renderInstances=c}function Ou(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),p=s.getParameter(34921),f=s.getParameter(36347),g=s.getParameter(36348),S=s.getParameter(36349),x=d>0,v=a||t.has("OES_texture_float"),E=x&&v,C=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:C}}function zu(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new fn,o=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,g=s.get(u);if(!i||_===null||_.length===0||r&&!f)r?h(null):l();else{const S=r?0:n,x=S*4;let v=g.clippingState||null;c.value=v,v=h(_,d,x,m);for(let E=0;E!==x;++E)v[E]=e[E];g.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=c.value,_!==!0||f===null){const g=m+p*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<g)&&(f=new Float32Array(g));for(let x=0,v=m;x!==p;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(f,v),f[v+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Uu(s){let t=new WeakMap;function e(a,o){return o===$r?a.mapping=Yn:o===Yr&&(a.mapping=jn),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===$r||o===Yr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Jl(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Bu extends la{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vn=4,ao=[.125,.215,.35,.446,.526,.582],mn=20,Or=new Bu,lo=new Ht;let zr=null;const pn=(1+Math.sqrt(5))/2,kn=1/pn,co=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,pn,kn),new P(0,pn,-kn),new P(kn,0,pn),new P(-kn,0,pn),new P(pn,kn,0),new P(-pn,kn,0)];class ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){zr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zr),t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yn||t.mapping===jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zr=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:we,minFilter:we,generateMipmaps:!1,type:mi,format:Pe,encoding:yn,depthBuffer:!1},i=uo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(r)),this._blurMaterial=Gu(r,t,e)}return i}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Or)}_sceneToCubeUV(t,e,n,i){const o=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lo),h.toneMapping=Ze,h.autoClear=!1;const m=new rs({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),_=new De(new ti,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(lo),p=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):S===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const x=this._cubeSize;Vi(i,S*x,g>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Yn||t.mapping===jn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Vi(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=co[(i-1)%co.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new De(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*mn-1),p=r/_,f=isFinite(r)?1+Math.floor(h*p):mn;f>mn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${mn}`);const g=[];let S=0;for(let D=0;D<mn;++D){const y=D/p,A=Math.exp(-y*y/2);g.push(A),D===0?S+=A:D<f&&(S+=2*A)}for(let D=0;D<g.length;D++)g[D]=g[D]/S;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const v=this._sizeLods[i],E=3*v*(i>x-Vn?i-x+Vn:0),C=4*(this._cubeSize-v);Vi(e,E,C,3*v,2*v),c.setRenderTarget(e),c.render(u,Or)}}function ku(s){const t=[],e=[],n=[];let i=s;const r=s-Vn+1+ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Vn?c=ao[a-s+Vn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,p=3,f=2,g=1,S=new Float32Array(p*_*m),x=new Float32Array(f*_*m),v=new Float32Array(g*_*m);for(let C=0;C<m;C++){const D=C%3*2/3-1,y=C>2?0:-1,A=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];S.set(A,p*_*C),x.set(d,f*_*C);const R=[C,C,C,C,C,C];v.set(R,g*_*C)}const E=new Re;E.setAttribute("position",new Be(S,p)),E.setAttribute("uv",new Be(x,f)),E.setAttribute("faceIndex",new Be(v,g)),t.push(E),i>Vn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uo(s,t,e){const n=new bn(s,t,e);return n.texture.mapping=Ki,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Gu(s,t,e){const n=new Float32Array(mn),i=new P(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:mn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:os(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function fo(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:os(),fragmentShader:`

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
		`,blending:rn,depthTest:!1,depthWrite:!1})}function po(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function os(){return`

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
	`}function Vu(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===$r||c===Yr,h=c===Yn||c===jn;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ho(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ho(s));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wu(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const m=u.morphAttributes;for(const _ in m){const p=m[_];for(let f=0,g=p.length;f<g;f++)t.update(p[f],34962)}}function l(u){const d=[],m=u.index,_=u.attributes.position;let p=0;if(m!==null){const S=m.array;p=m.version;for(let x=0,v=S.length;x<v;x+=3){const E=S[x+0],C=S[x+1],D=S[x+2];d.push(E,C,C,D,D,E)}}else{const S=_.array;p=_.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const E=x+0,C=x+1,D=x+2;d.push(E,C,C,D,D,E)}}const f=new(Ko(d)?oa:sa)(d,1);f.version=p;const g=r.get(u);g&&t.remove(g),r.set(u,f)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Xu(s,t,e,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,m){s.drawElements(r,m,o,d*c),e.update(m,r,1)}function u(d,m,_){if(_===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,o,d*c,_),e.update(m,r,_)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u}function qu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $u(s,t){return s[0]-t[0]}function Yu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ju(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ie,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=_!==void 0?_.length:0;let f=r.get(h);if(f===void 0||f.count!==p){let V=function(){U.dispose(),r.delete(h),h.removeEventListener("dispose",V)};var m=V;f!==void 0&&f.texture.dispose();const x=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],y=h.morphAttributes.color||[];let A=0;x===!0&&(A=1),v===!0&&(A=2),E===!0&&(A=3);let R=h.attributes.position.count*A,X=1;R>t.maxTextureSize&&(X=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const Z=new Float32Array(R*X*4*p),U=new ea(Z,R,X,p);U.type=_n,U.needsUpdate=!0;const I=A*4;for(let Y=0;Y<p;Y++){const tt=C[Y],q=D[Y],et=y[Y],J=R*X*4*Y;for(let _t=0;_t<tt.count;_t++){const B=_t*I;x===!0&&(a.fromBufferAttribute(tt,_t),Z[J+B+0]=a.x,Z[J+B+1]=a.y,Z[J+B+2]=a.z,Z[J+B+3]=0),v===!0&&(a.fromBufferAttribute(q,_t),Z[J+B+4]=a.x,Z[J+B+5]=a.y,Z[J+B+6]=a.z,Z[J+B+7]=0),E===!0&&(a.fromBufferAttribute(et,_t),Z[J+B+8]=a.x,Z[J+B+9]=a.y,Z[J+B+10]=a.z,Z[J+B+11]=et.itemSize===4?a.w:1)}}f={count:p,texture:U,size:new at(R,X)},r.set(h,f),h.addEventListener("dispose",V)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];const S=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const _=d===void 0?0:d.length;let p=n[h.id];if(p===void 0||p.length!==_){p=[];for(let v=0;v<_;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<_;v++){const E=p[v];E[0]=v,E[1]=d[v]}p.sort(Yu);for(let v=0;v<8;v++)v<_&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort($u);const f=h.morphAttributes.position,g=h.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const E=o[v],C=E[0],D=E[1];C!==Number.MAX_SAFE_INTEGER&&D?(f&&h.getAttribute("morphTarget"+v)!==f[C]&&h.setAttribute("morphTarget"+v,f[C]),g&&h.getAttribute("morphNormal"+v)!==g[C]&&h.setAttribute("morphNormal"+v,g[C]),i[v]=D,S+=D):(f&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),g&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const x=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Zu(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const da=new pe,fa=new ea,pa=new Nl,ma=new ca,mo=[],go=[],_o=new Float32Array(16),xo=new Float32Array(9),vo=new Float32Array(4);function ei(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=mo[i];if(r===void 0&&(r=new Float32Array(i),mo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Kt(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Qt(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function er(s,t){let e=go[t];e===void 0&&(e=new Int32Array(t),go[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ju(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ku(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Kt(e,t))return;s.uniform2fv(this.addr,t),Qt(e,t)}}function Qu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Kt(e,t))return;s.uniform3fv(this.addr,t),Qt(e,t)}}function td(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Kt(e,t))return;s.uniform4fv(this.addr,t),Qt(e,t)}}function ed(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Kt(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Qt(e,t)}else{if(Kt(e,n))return;vo.set(n),s.uniformMatrix2fv(this.addr,!1,vo),Qt(e,n)}}function nd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Kt(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Qt(e,t)}else{if(Kt(e,n))return;xo.set(n),s.uniformMatrix3fv(this.addr,!1,xo),Qt(e,n)}}function id(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Kt(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Qt(e,t)}else{if(Kt(e,n))return;_o.set(n),s.uniformMatrix4fv(this.addr,!1,_o),Qt(e,n)}}function rd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Kt(e,t))return;s.uniform2iv(this.addr,t),Qt(e,t)}}function od(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Kt(e,t))return;s.uniform3iv(this.addr,t),Qt(e,t)}}function ad(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Kt(e,t))return;s.uniform4iv(this.addr,t),Qt(e,t)}}function ld(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Kt(e,t))return;s.uniform2uiv(this.addr,t),Qt(e,t)}}function hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Kt(e,t))return;s.uniform3uiv(this.addr,t),Qt(e,t)}}function ud(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Kt(e,t))return;s.uniform4uiv(this.addr,t),Qt(e,t)}}function dd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||da,i)}function fd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pa,i)}function pd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ma,i)}function md(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fa,i)}function gd(s){switch(s){case 5126:return Ju;case 35664:return Ku;case 35665:return Qu;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return od;case 35669:case 35673:return ad;case 5125:return ld;case 36294:return cd;case 36295:return hd;case 36296:return ud;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}function _d(s,t){s.uniform1fv(this.addr,t)}function xd(s,t){const e=ei(t,this.size,2);s.uniform2fv(this.addr,e)}function vd(s,t){const e=ei(t,this.size,3);s.uniform3fv(this.addr,e)}function yd(s,t){const e=ei(t,this.size,4);s.uniform4fv(this.addr,e)}function Md(s,t){const e=ei(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bd(s,t){const e=ei(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sd(s,t){const e=ei(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wd(s,t){s.uniform1iv(this.addr,t)}function Ed(s,t){s.uniform2iv(this.addr,t)}function Ad(s,t){s.uniform3iv(this.addr,t)}function Td(s,t){s.uniform4iv(this.addr,t)}function Cd(s,t){s.uniform1uiv(this.addr,t)}function Ld(s,t){s.uniform2uiv(this.addr,t)}function Pd(s,t){s.uniform3uiv(this.addr,t)}function Dd(s,t){s.uniform4uiv(this.addr,t)}function Rd(s,t,e){const n=this.cache,i=t.length,r=er(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||da,r[a])}function Id(s,t,e){const n=this.cache,i=t.length,r=er(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||pa,r[a])}function Fd(s,t,e){const n=this.cache,i=t.length,r=er(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ma,r[a])}function Nd(s,t,e){const n=this.cache,i=t.length,r=er(e,i);Kt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||fa,r[a])}function Od(s){switch(s){case 5126:return _d;case 35664:return xd;case 35665:return vd;case 35666:return yd;case 35674:return Md;case 35675:return bd;case 35676:return Sd;case 5124:case 35670:return wd;case 35667:case 35671:return Ed;case 35668:case 35672:return Ad;case 35669:case 35673:return Td;case 5125:return Cd;case 36294:return Ld;case 36295:return Pd;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Rd;case 35679:case 36299:case 36307:return Id;case 35680:case 36300:case 36308:case 36293:return Fd;case 36289:case 36303:case 36311:case 36292:return Nd}}class zd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=gd(e.type)}}class Ud{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Od(e.type)}}class Bd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function yo(s,t){s.seq.push(t),s.map[t.id]=t}function kd(s,t,e){const n=s.name,i=n.length;for(Ur.lastIndex=0;;){const r=Ur.exec(n),a=Ur.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yo(e,l===void 0?new zd(o,s,t):new Ud(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Bd(o),yo(e,u)),e=u}}}class Yi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);kd(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Mo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let Gd=0;function Vd(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Hd(s){switch(s){case yn:return["Linear","( value )"];case Xt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function bo(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vd(s.getShaderSource(t),a)}else return i}function Wd(s,t){const e=Hd(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Xd(s,t){let e;switch(t){case el:e="Linear";break;case nl:e="Reinhard";break;case il:e="OptimizedCineon";break;case rl:e="ACESFilmic";break;case sl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ui).join(`
`)}function $d(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yd(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ui(s){return s!==""}function So(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(s){return s.replace(jd,Zd)}function Zd(s,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Kr(e)}const Jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eo(s){return s.replace(Jd,Kd)}function Kd(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ao(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qd(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function tf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yn:case jn:t="ENVMAP_TYPE_CUBE";break;case Ki:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ef(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case jn:t="ENVMAP_MODE_REFRACTION";break}return t}function nf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $o:t="ENVMAP_BLENDING_MULTIPLY";break;case Qa:t="ENVMAP_BLENDING_MIX";break;case tl:t="ENVMAP_BLENDING_ADD";break}return t}function rf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sf(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Qd(e),l=tf(e),h=ef(e),u=nf(e),d=rf(e),m=e.isWebGL2?"":qd(e),_=$d(r),p=i.createProgram();let f,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[_].filter(ui).join(`
`),f.length>0&&(f+=`
`),g=[m,_].filter(ui).join(`
`),g.length>0&&(g+=`
`)):(f=[Ao(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ui).join(`
`),g=[m,Ao(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ze?"#define TONE_MAPPING":"",e.toneMapping!==Ze?Dt.tonemapping_pars_fragment:"",e.toneMapping!==Ze?Xd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,Wd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ui).join(`
`)),a=Kr(a),a=So(a,e),a=wo(a,e),o=Kr(o),o=So(o,e),o=wo(o,e),a=Eo(a),o=Eo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===$s?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=S+f+a,v=S+g+o,E=Mo(i,35633,x),C=Mo(i,35632,v);if(i.attachShader(p,E),i.attachShader(p,C),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(E).trim(),X=i.getShaderInfoLog(C).trim();let Z=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){Z=!1;const I=bo(i,E,"vertex"),V=bo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+I+`
`+V)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||X==="")&&(U=!1);U&&(this.diagnostics={runnable:Z,programLog:A,vertexShader:{log:R,prefix:f},fragmentShader:{log:X,prefix:g}})}i.deleteShader(E),i.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new Yi(i,p)),D};let y;return this.getAttributes=function(){return y===void 0&&(y=Yd(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=Gd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=C,this}let of=0;class af{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lf(t),e.set(t,n)),n}}class lf{constructor(t){this.id=of++,this.code=t,this.usedTimes=0}}function cf(s,t,e,n,i,r,a){const o=new ia,c=new af,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,A,R,X,Z){const U=X.fog,I=Z.geometry,V=y.isMeshStandardMaterial?X.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),tt=Y&&Y.mapping===Ki?Y.image.height:null,q=_[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=et!==void 0?et.length:0;let _t=0;I.morphAttributes.position!==void 0&&(_t=1),I.morphAttributes.normal!==void 0&&(_t=2),I.morphAttributes.color!==void 0&&(_t=3);let B,K,st,O;if(q){const Tt=ze[q];B=Tt.vertexShader,K=Tt.fragmentShader}else B=y.vertexShader,K=y.fragmentShader,c.update(y),st=c.getVertexShaderID(y),O=c.getFragmentShaderID(y);const pt=s.getRenderTarget(),ut=y.alphaTest>0,mt=y.clearcoat>0,gt=y.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:y.type,vertexShader:B,fragmentShader:K,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:O,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:d,outputEncoding:pt===null?s.outputEncoding:pt.isXRRenderTarget===!0?pt.texture.encoding:yn,map:!!y.map,matcap:!!y.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:tt,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===wl,tangentSpaceNormalMap:y.normalMapType===Zo,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Xt,clearcoat:mt,clearcoatMap:mt&&!!y.clearcoatMap,clearcoatRoughnessMap:mt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!y.clearcoatNormalMap,iridescence:gt,iridescenceMap:gt&&!!y.iridescenceMap,iridescenceThicknessMap:gt&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Wn,alphaMap:!!y.alphaMap,alphaTest:ut,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!I.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:_t,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Ze,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===Me,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)A.push(R),A.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(A,y),S(A,y),A.push(s.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function g(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function S(y,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),y.push(o.mask)}function x(y){const A=_[y.type];let R;if(A){const X=ze[A];R=$l.clone(X.uniforms)}else R=y.uniforms;return R}function v(y,A){let R;for(let X=0,Z=l.length;X<Z;X++){const U=l[X];if(U.cacheKey===A){R=U,++R.usedTimes;break}}return R===void 0&&(R=new sf(s,A,y,r),l.push(R)),R}function E(y){if(--y.usedTimes===0){const A=l.indexOf(y);l[A]=l[l.length-1],l.pop(),y.destroy()}}function C(y){c.remove(y)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:x,acquireProgram:v,releaseProgram:E,releaseShaderCache:C,programs:l,dispose:D}}function hf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function uf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function To(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Co(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,m,_,p,f){let g=s[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:p,group:f},s[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=u.renderOrder,g.z=p,g.group=f),t++,g}function o(u,d,m,_,p,f){const g=a(u,d,m,_,p,f);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function c(u,d,m,_,p,f){const g=a(u,d,m,_,p,f);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||uf),n.length>1&&n.sort(d||To),i.length>1&&i.sort(d||To)}function h(){for(let u=t,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function df(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Co,s.set(n,[a])):i>=r.length?(a=new Co,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ff(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ht};break;case"SpotLight":e={position:new P,direction:new P,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function pf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let mf=0;function gf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _f(s,t){const e=new ff,n=pf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const r=new P,a=new Jt,o=new Jt;function c(h,u){let d=0,m=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,f=0,g=0,S=0,x=0,v=0,E=0,C=0,D=0,y=0;h.sort(gf);const A=u===!0?Math.PI:1;for(let X=0,Z=h.length;X<Z;X++){const U=h[X],I=U.color,V=U.intensity,Y=U.distance,tt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=I.r*V*A,m+=I.g*V*A,_+=I.b*V*A;else if(U.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],V);else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*A),U.castShadow){const et=U.shadow,J=n.get(U);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=tt,i.directionalShadowMatrix[p]=U.shadow.matrix,v++}i.directional[p]=q,p++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(I).multiplyScalar(V*A),q.distance=Y,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[g]=q;const et=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,et.updateMatrices(U),U.castShadow&&y++),i.spotLightMatrix[g]=et.matrix,U.castShadow){const J=n.get(U);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,i.spotShadow[g]=J,i.spotShadowMap[g]=tt,C++}g++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(I).multiplyScalar(V),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=q,S++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*A),q.distance=U.distance,q.decay=U.decay,U.castShadow){const et=U.shadow,J=n.get(U);J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,J.shadowCameraNear=et.camera.near,J.shadowCameraFar=et.camera.far,i.pointShadow[f]=J,i.pointShadowMap[f]=tt,i.pointShadowMatrix[f]=U.shadow.matrix,E++}i.point[f]=q,f++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(V*A),q.groundColor.copy(U.groundColor).multiplyScalar(V*A),i.hemi[x]=q,x++}}S>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const R=i.hash;(R.directionalLength!==p||R.pointLength!==f||R.spotLength!==g||R.rectAreaLength!==S||R.hemiLength!==x||R.numDirectionalShadows!==v||R.numPointShadows!==E||R.numSpotShadows!==C||R.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=S,i.point.length=f,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+D-y,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=y,R.directionalLength=p,R.pointLength=f,R.spotLength=g,R.rectAreaLength=S,R.hemiLength=x,R.numDirectionalShadows=v,R.numPointShadows=E,R.numSpotShadows=C,R.numSpotMaps=D,i.version=mf++)}function l(h,u){let d=0,m=0,_=0,p=0,f=0;const g=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const v=h[S];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(v.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),_++}else if(v.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),o.identity(),a.copy(v.matrixWorld),a.premultiply(g),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),m++}else if(v.isHemisphereLight){const E=i.hemi[f];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),f++}}}return{setup:c,setupView:l,state:i}}function Lo(s,t){const e=new _f(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function xf(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Lo(s,t),e.set(r,[c])):a>=o.length?(c=new Lo(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class vf extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yf extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bf=`uniform sampler2D shadow_pass;
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
}`;function Sf(s,t,e){let n=new ha;const i=new at,r=new at,a=new ie,o=new vf({depthPacking:Sl}),c=new yf,l={},h=e.maxTextureSize,u={[sn]:Me,[Me]:sn,[en]:en},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Mf,fragmentShader:bf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Re;_.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new De(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo,this.render=function(v,E,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||v.length===0)return;const D=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),R=s.state;R.setBlending(rn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let X=0,Z=v.length;X<Z;X++){const U=v[X],I=U.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const V=I.getFrameExtents();if(i.multiply(V),r.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,I.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,I.mapSize.y=r.y)),I.map===null){const tt=this.type!==hi?{minFilter:de,magFilter:de}:{};I.map=new bn(i.x,i.y,tt),I.map.texture.name=U.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const Y=I.getViewportCount();for(let tt=0;tt<Y;tt++){const q=I.getViewport(tt);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),R.viewport(a),I.updateMatrices(U,tt),n=I.getFrustum(),x(E,C,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===hi&&g(I,C),I.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(D,y,A)};function g(v,E){const C=t.update(p);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new bn(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(E,null,C,d,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(E,null,C,m,p,null)}function S(v,E,C,D,y,A){let R=null;const X=C.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(X!==void 0)R=X;else if(R=C.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Z=R.uuid,U=E.uuid;let I=l[Z];I===void 0&&(I={},l[Z]=I);let V=I[U];V===void 0&&(V=R.clone(),I[U]=V),R=V}return R.visible=E.visible,R.wireframe=E.wireframe,A===hi?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:u[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=D,R.farDistance=y),R}function x(v,E,C,D,y){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===hi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld);const X=t.update(v),Z=v.material;if(Array.isArray(Z)){const U=X.groups;for(let I=0,V=U.length;I<V;I++){const Y=U[I],tt=Z[Y.materialIndex];if(tt&&tt.visible){const q=S(v,tt,D,C.near,C.far,y);s.renderBufferDirect(C,null,X,q,v,Y)}}}else if(Z.visible){const U=S(v,Z,D,C.near,C.far,y);s.renderBufferDirect(C,null,X,U,v,null)}}const R=v.children;for(let X=0,Z=R.length;X<Z;X++)x(R[X],E,C,D,y)}}function wf(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const H=new ie;let Q=null;const ft=new ie(0,0,0,0);return{setMask:function(yt){Q!==yt&&!L&&(s.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){L=yt},setClear:function(yt,Wt,te,le,Ie){Ie===!0&&(yt*=le,Wt*=le,te*=le),H.set(yt,Wt,te,le),ft.equals(H)===!1&&(s.clearColor(yt,Wt,te,le),ft.copy(H))},reset:function(){L=!1,Q=null,ft.set(-1,0,0,0)}}}function r(){let L=!1,H=null,Q=null,ft=null;return{setTest:function(yt){yt?ut(2929):mt(2929)},setMask:function(yt){H!==yt&&!L&&(s.depthMask(yt),H=yt)},setFunc:function(yt){if(Q!==yt){switch(yt){case qa:s.depthFunc(512);break;case $a:s.depthFunc(519);break;case Ya:s.depthFunc(513);break;case qr:s.depthFunc(515);break;case ja:s.depthFunc(514);break;case Za:s.depthFunc(518);break;case Ja:s.depthFunc(516);break;case Ka:s.depthFunc(517);break;default:s.depthFunc(515)}Q=yt}},setLocked:function(yt){L=yt},setClear:function(yt){ft!==yt&&(s.clearDepth(yt),ft=yt)},reset:function(){L=!1,H=null,Q=null,ft=null}}}function a(){let L=!1,H=null,Q=null,ft=null,yt=null,Wt=null,te=null,le=null,Ie=null;return{setTest:function($t){L||($t?ut(2960):mt(2960))},setMask:function($t){H!==$t&&!L&&(s.stencilMask($t),H=$t)},setFunc:function($t,be,Fe){(Q!==$t||ft!==be||yt!==Fe)&&(s.stencilFunc($t,be,Fe),Q=$t,ft=be,yt=Fe)},setOp:function($t,be,Fe){(Wt!==$t||te!==be||le!==Fe)&&(s.stencilOp($t,be,Fe),Wt=$t,te=be,le=Fe)},setLocked:function($t){L=$t},setClear:function($t){Ie!==$t&&(s.clearStencil($t),Ie=$t)},reset:function(){L=!1,H=null,Q=null,ft=null,yt=null,Wt=null,te=null,le=null,Ie=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,p=[],f=null,g=!1,S=null,x=null,v=null,E=null,C=null,D=null,y=null,A=!1,R=null,X=null,Z=null,U=null,I=null;const V=s.getParameter(35661);let Y=!1,tt=0;const q=s.getParameter(7938);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=tt>=2);let et=null,J={};const _t=s.getParameter(3088),B=s.getParameter(2978),K=new ie().fromArray(_t),st=new ie().fromArray(B);function O(L,H,Q){const ft=new Uint8Array(4),yt=s.createTexture();s.bindTexture(L,yt),s.texParameteri(L,10241,9728),s.texParameteri(L,10240,9728);for(let Wt=0;Wt<Q;Wt++)s.texImage2D(H+Wt,0,6408,1,1,0,6408,5121,ft);return yt}const pt={};pt[3553]=O(3553,3553,1),pt[34067]=O(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ut(2929),c.setFunc(qr),lt(!1),Ct(gs),ut(2884),rt(rn);function ut(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function mt(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function gt(L,H){return m[L]!==H?(s.bindFramebuffer(L,H),m[L]=H,n&&(L===36009&&(m[36160]=H),L===36160&&(m[36009]=H)),!0):!1}function xt(L,H){let Q=p,ft=!1;if(L)if(Q=_.get(H),Q===void 0&&(Q=[],_.set(H,Q)),L.isWebGLMultipleRenderTargets){const yt=L.texture;if(Q.length!==yt.length||Q[0]!==36064){for(let Wt=0,te=yt.length;Wt<te;Wt++)Q[Wt]=36064+Wt;Q.length=yt.length,ft=!0}}else Q[0]!==36064&&(Q[0]=36064,ft=!0);else Q[0]!==1029&&(Q[0]=1029,ft=!0);ft&&(e.isWebGL2?s.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Tt(L){return f!==L?(s.useProgram(L),f=L,!0):!1}const $={[Gn]:32774,[Na]:32778,[Oa]:32779};if(n)$[ys]=32775,$[Ms]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&($[ys]=L.MIN_EXT,$[Ms]=L.MAX_EXT)}const j={[za]:0,[Ua]:1,[Ba]:768,[Xo]:770,[Xa]:776,[Ha]:774,[Ga]:772,[ka]:769,[qo]:771,[Wa]:775,[Va]:773};function rt(L,H,Q,ft,yt,Wt,te,le){if(L===rn){g===!0&&(mt(3042),g=!1);return}if(g===!1&&(ut(3042),g=!0),L!==Fa){if(L!==S||le!==A){if((x!==Gn||C!==Gn)&&(s.blendEquation(32774),x=Gn,C=Gn),le)switch(L){case Wn:s.blendFuncSeparate(1,771,1,771);break;case _s:s.blendFunc(1,1);break;case xs:s.blendFuncSeparate(0,769,0,1);break;case vs:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wn:s.blendFuncSeparate(770,771,1,771);break;case _s:s.blendFunc(770,1);break;case xs:s.blendFuncSeparate(0,769,0,1);break;case vs:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,E=null,D=null,y=null,S=L,A=le}return}yt=yt||H,Wt=Wt||Q,te=te||ft,(H!==x||yt!==C)&&(s.blendEquationSeparate($[H],$[yt]),x=H,C=yt),(Q!==v||ft!==E||Wt!==D||te!==y)&&(s.blendFuncSeparate(j[Q],j[ft],j[Wt],j[te]),v=Q,E=ft,D=Wt,y=te),S=L,A=!1}function vt(L,H){L.side===en?mt(2884):ut(2884);let Q=L.side===Me;H&&(Q=!Q),lt(Q),L.blending===Wn&&L.transparent===!1?rt(rn):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const ft=L.stencilWrite;l.setTest(ft),ft&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Lt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(32926):mt(32926)}function lt(L){R!==L&&(L?s.frontFace(2304):s.frontFace(2305),R=L)}function Ct(L){L!==Da?(ut(2884),L!==X&&(L===gs?s.cullFace(1029):L===Ra?s.cullFace(1028):s.cullFace(1032))):mt(2884),X=L}function Et(L){L!==Z&&(Y&&s.lineWidth(L),Z=L)}function Lt(L,H,Q){L?(ut(32823),(U!==H||I!==Q)&&(s.polygonOffset(H,Q),U=H,I=Q)):mt(32823)}function Gt(L){L?ut(3089):mt(3089)}function Ut(L){L===void 0&&(L=33984+V-1),et!==L&&(s.activeTexture(L),et=L)}function w(L,H,Q){Q===void 0&&(et===null?Q=33984+V-1:Q=et);let ft=J[Q];ft===void 0&&(ft={type:void 0,texture:void 0},J[Q]=ft),(ft.type!==L||ft.texture!==H)&&(et!==Q&&(s.activeTexture(Q),et=Q),s.bindTexture(L,H||pt[L]),ft.type=L,ft.texture=H)}function M(){const L=J[et];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function T(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){K.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function St(L){st.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Ft(L,H){let Q=u.get(H);Q===void 0&&(Q=new WeakMap,u.set(H,Q));let ft=Q.get(L);ft===void 0&&(ft=s.getUniformBlockIndex(H,L.name),Q.set(L,ft))}function Bt(L,H){const ft=u.get(H).get(L);h.get(H)!==ft&&(s.uniformBlockBinding(H,ft,L.__bindingPointIndex),h.set(H,ft))}function Vt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},et=null,J={},m={},_=new WeakMap,p=[],f=null,g=!1,S=null,x=null,v=null,E=null,C=null,D=null,y=null,A=!1,R=null,X=null,Z=null,U=null,I=null,K.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ut,disable:mt,bindFramebuffer:gt,drawBuffers:xt,useProgram:Tt,setBlending:rt,setMaterial:vt,setFlipSided:lt,setCullFace:Ct,setLineWidth:Et,setPolygonOffset:Lt,setScissorTest:Gt,activeTexture:Ut,bindTexture:w,unbindTexture:M,compressedTexImage2D:k,compressedTexImage3D:nt,texImage2D:ct,texImage3D:Mt,updateUBOMapping:Ft,uniformBlockBinding:Bt,texStorage2D:F,texStorage3D:dt,texSubImage2D:it,texSubImage3D:ht,compressedTexSubImage2D:bt,compressedTexSubImage3D:T,scissor:wt,viewport:St,reset:Vt}}function Ef(s,t,e,n,i,r,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,M){return g?new OffscreenCanvas(w,M):_i("canvas")}function x(w,M,k,nt){let it=1;if((w.width>nt||w.height>nt)&&(it=nt/Math.max(w.width,w.height)),it<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ht=M?Tl:Math.floor,bt=ht(it*w.width),T=ht(it*w.height);p===void 0&&(p=S(bt,T));const F=k?S(bt,T):p;return F.width=bt,F.height=T,F.getContext("2d").drawImage(w,0,0,bt,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+bt+"x"+T+")."),F}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return js(w.width)&&js(w.height)}function E(w){return o?!1:w.wrapS!==Le||w.wrapT!==Le||w.minFilter!==de&&w.minFilter!==we}function C(w,M){return w.generateMipmaps&&M&&w.minFilter!==de&&w.minFilter!==we}function D(w){s.generateMipmap(w)}function y(w,M,k,nt,it=!1){if(o===!1)return M;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht=M;return M===6403&&(k===5126&&(ht=33326),k===5131&&(ht=33325),k===5121&&(ht=33321)),M===33319&&(k===5126&&(ht=33328),k===5131&&(ht=33327),k===5121&&(ht=33323)),M===6408&&(k===5126&&(ht=34836),k===5131&&(ht=34842),k===5121&&(ht=nt===Xt&&it===!1?35907:32856),k===32819&&(ht=32854),k===32820&&(ht=32855)),(ht===33325||ht===33326||ht===33327||ht===33328||ht===34842||ht===34836)&&t.get("EXT_color_buffer_float"),ht}function A(w,M,k){return C(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==de&&w.minFilter!==we?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){return w===de||w===bs||w===lr?9728:9729}function X(w){const M=w.target;M.removeEventListener("dispose",X),U(M),M.isVideoTexture&&_.delete(M)}function Z(w){const M=w.target;M.removeEventListener("dispose",Z),V(M)}function U(w){const M=n.get(w);if(M.__webglInit===void 0)return;const k=w.source,nt=f.get(k);if(nt){const it=nt[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&I(w),Object.keys(nt).length===0&&f.delete(k)}n.remove(w)}function I(w){const M=n.get(w);s.deleteTexture(M.__webglTexture);const k=w.source,nt=f.get(k);delete nt[M.__cacheKey],a.memory.textures--}function V(w){const M=w.texture,k=n.get(w),nt=n.get(M);if(nt.__webglTexture!==void 0&&(s.deleteTexture(nt.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)s.deleteFramebuffer(k.__webglFramebuffer[it]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[it]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let it=0;it<k.__webglColorRenderbuffer.length;it++)k.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[it]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let it=0,ht=M.length;it<ht;it++){const bt=n.get(M[it]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(M[it])}n.remove(M),n.remove(w)}let Y=0;function tt(){Y=0}function q(){const w=Y;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),Y+=1,w}function et(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function J(w,M){const k=n.get(w);if(w.isVideoTexture&&Gt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const nt=w.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(k,w,M);return}}e.bindTexture(3553,k.__webglTexture,33984+M)}function _t(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){mt(k,w,M);return}e.bindTexture(35866,k.__webglTexture,33984+M)}function B(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){mt(k,w,M);return}e.bindTexture(32879,k.__webglTexture,33984+M)}function K(w,M){const k=n.get(w);if(w.version>0&&k.__version!==w.version){gt(k,w,M);return}e.bindTexture(34067,k.__webglTexture,33984+M)}const st={[jr]:10497,[Le]:33071,[Zr]:33648},O={[de]:9728,[bs]:9984,[lr]:9986,[we]:9729,[ol]:9985,[pi]:9987};function pt(w,M,k){if(k?(s.texParameteri(w,10242,st[M.wrapS]),s.texParameteri(w,10243,st[M.wrapT]),(w===32879||w===35866)&&s.texParameteri(w,32882,st[M.wrapR]),s.texParameteri(w,10240,O[M.magFilter]),s.texParameteri(w,10241,O[M.minFilter])):(s.texParameteri(w,10242,33071),s.texParameteri(w,10243,33071),(w===32879||w===35866)&&s.texParameteri(w,32882,33071),(M.wrapS!==Le||M.wrapT!==Le)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,10240,R(M.magFilter)),s.texParameteri(w,10241,R(M.minFilter)),M.minFilter!==de&&M.minFilter!==we&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===de||M.minFilter!==lr&&M.minFilter!==pi||M.type===_n&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===mi&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(w,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ut(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",X));const nt=M.source;let it=f.get(nt);it===void 0&&(it={},f.set(nt,it));const ht=et(M);if(ht!==w.__cacheKey){it[ht]===void 0&&(it[ht]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),it[ht].usedTimes++;const bt=it[w.__cacheKey];bt!==void 0&&(it[w.__cacheKey].usedTimes--,bt.usedTimes===0&&I(M)),w.__cacheKey=ht,w.__webglTexture=it[ht].texture}return k}function mt(w,M,k){let nt=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=35866),M.isData3DTexture&&(nt=32879);const it=ut(w,M),ht=M.source;e.bindTexture(nt,w.__webglTexture,33984+k);const bt=n.get(ht);if(ht.version!==bt.__version||it===!0){e.activeTexture(33984+k),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const T=E(M)&&v(M.image)===!1;let F=x(M.image,T,!1,h);F=Ut(M,F);const dt=v(F)||o,ct=r.convert(M.format,M.encoding);let Mt=r.convert(M.type),wt=y(M.internalFormat,ct,Mt,M.encoding,M.isVideoTexture);pt(nt,M,dt);let St;const Ft=M.mipmaps,Bt=o&&M.isVideoTexture!==!0,Vt=bt.__version===void 0||it===!0,L=A(M,F,dt);if(M.isDepthTexture)wt=6402,o?M.type===_n?wt=36012:M.type===gn?wt=33190:M.type===Xn?wt=35056:wt=33189:M.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===xn&&wt===6402&&M.type!==jo&&M.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=gn,Mt=r.convert(M.type)),M.format===Zn&&wt===6402&&(wt=34041,M.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Xn,Mt=r.convert(M.type))),Vt&&(Bt?e.texStorage2D(3553,1,wt,F.width,F.height):e.texImage2D(3553,0,wt,F.width,F.height,0,ct,Mt,null));else if(M.isDataTexture)if(Ft.length>0&&dt){Bt&&Vt&&e.texStorage2D(3553,L,wt,Ft[0].width,Ft[0].height);for(let H=0,Q=Ft.length;H<Q;H++)St=Ft[H],Bt?e.texSubImage2D(3553,H,0,0,St.width,St.height,ct,Mt,St.data):e.texImage2D(3553,H,wt,St.width,St.height,0,ct,Mt,St.data);M.generateMipmaps=!1}else Bt?(Vt&&e.texStorage2D(3553,L,wt,F.width,F.height),e.texSubImage2D(3553,0,0,0,F.width,F.height,ct,Mt,F.data)):e.texImage2D(3553,0,wt,F.width,F.height,0,ct,Mt,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&Vt&&e.texStorage3D(35866,L,wt,Ft[0].width,Ft[0].height,F.depth);for(let H=0,Q=Ft.length;H<Q;H++)St=Ft[H],M.format!==Pe?ct!==null?Bt?e.compressedTexSubImage3D(35866,H,0,0,0,St.width,St.height,F.depth,ct,St.data,0,0):e.compressedTexImage3D(35866,H,wt,St.width,St.height,F.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage3D(35866,H,0,0,0,St.width,St.height,F.depth,ct,Mt,St.data):e.texImage3D(35866,H,wt,St.width,St.height,F.depth,0,ct,Mt,St.data)}else{Bt&&Vt&&e.texStorage2D(3553,L,wt,Ft[0].width,Ft[0].height);for(let H=0,Q=Ft.length;H<Q;H++)St=Ft[H],M.format!==Pe?ct!==null?Bt?e.compressedTexSubImage2D(3553,H,0,0,St.width,St.height,ct,St.data):e.compressedTexImage2D(3553,H,wt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage2D(3553,H,0,0,St.width,St.height,ct,Mt,St.data):e.texImage2D(3553,H,wt,St.width,St.height,0,ct,Mt,St.data)}else if(M.isDataArrayTexture)Bt?(Vt&&e.texStorage3D(35866,L,wt,F.width,F.height,F.depth),e.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,ct,Mt,F.data)):e.texImage3D(35866,0,wt,F.width,F.height,F.depth,0,ct,Mt,F.data);else if(M.isData3DTexture)Bt?(Vt&&e.texStorage3D(32879,L,wt,F.width,F.height,F.depth),e.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,ct,Mt,F.data)):e.texImage3D(32879,0,wt,F.width,F.height,F.depth,0,ct,Mt,F.data);else if(M.isFramebufferTexture){if(Vt)if(Bt)e.texStorage2D(3553,L,wt,F.width,F.height);else{let H=F.width,Q=F.height;for(let ft=0;ft<L;ft++)e.texImage2D(3553,ft,wt,H,Q,0,ct,Mt,null),H>>=1,Q>>=1}}else if(Ft.length>0&&dt){Bt&&Vt&&e.texStorage2D(3553,L,wt,Ft[0].width,Ft[0].height);for(let H=0,Q=Ft.length;H<Q;H++)St=Ft[H],Bt?e.texSubImage2D(3553,H,0,0,ct,Mt,St):e.texImage2D(3553,H,wt,ct,Mt,St);M.generateMipmaps=!1}else Bt?(Vt&&e.texStorage2D(3553,L,wt,F.width,F.height),e.texSubImage2D(3553,0,0,0,ct,Mt,F)):e.texImage2D(3553,0,wt,ct,Mt,F);C(M,dt)&&D(nt),bt.__version=ht.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function gt(w,M,k){if(M.image.length!==6)return;const nt=ut(w,M),it=M.source;e.bindTexture(34067,w.__webglTexture,33984+k);const ht=n.get(it);if(it.version!==ht.__version||nt===!0){e.activeTexture(33984+k),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const bt=M.isCompressedTexture||M.image[0].isCompressedTexture,T=M.image[0]&&M.image[0].isDataTexture,F=[];for(let H=0;H<6;H++)!bt&&!T?F[H]=x(M.image[H],!1,!0,l):F[H]=T?M.image[H].image:M.image[H],F[H]=Ut(M,F[H]);const dt=F[0],ct=v(dt)||o,Mt=r.convert(M.format,M.encoding),wt=r.convert(M.type),St=y(M.internalFormat,Mt,wt,M.encoding),Ft=o&&M.isVideoTexture!==!0,Bt=ht.__version===void 0||nt===!0;let Vt=A(M,dt,ct);pt(34067,M,ct);let L;if(bt){Ft&&Bt&&e.texStorage2D(34067,Vt,St,dt.width,dt.height);for(let H=0;H<6;H++){L=F[H].mipmaps;for(let Q=0;Q<L.length;Q++){const ft=L[Q];M.format!==Pe?Mt!==null?Ft?e.compressedTexSubImage2D(34069+H,Q,0,0,ft.width,ft.height,Mt,ft.data):e.compressedTexImage2D(34069+H,Q,St,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(34069+H,Q,0,0,ft.width,ft.height,Mt,wt,ft.data):e.texImage2D(34069+H,Q,St,ft.width,ft.height,0,Mt,wt,ft.data)}}}else{L=M.mipmaps,Ft&&Bt&&(L.length>0&&Vt++,e.texStorage2D(34067,Vt,St,F[0].width,F[0].height));for(let H=0;H<6;H++)if(T){Ft?e.texSubImage2D(34069+H,0,0,0,F[H].width,F[H].height,Mt,wt,F[H].data):e.texImage2D(34069+H,0,St,F[H].width,F[H].height,0,Mt,wt,F[H].data);for(let Q=0;Q<L.length;Q++){const yt=L[Q].image[H].image;Ft?e.texSubImage2D(34069+H,Q+1,0,0,yt.width,yt.height,Mt,wt,yt.data):e.texImage2D(34069+H,Q+1,St,yt.width,yt.height,0,Mt,wt,yt.data)}}else{Ft?e.texSubImage2D(34069+H,0,0,0,Mt,wt,F[H]):e.texImage2D(34069+H,0,St,Mt,wt,F[H]);for(let Q=0;Q<L.length;Q++){const ft=L[Q];Ft?e.texSubImage2D(34069+H,Q+1,0,0,Mt,wt,ft.image[H]):e.texImage2D(34069+H,Q+1,St,Mt,wt,ft.image[H])}}}C(M,ct)&&D(34067),ht.__version=it.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xt(w,M,k,nt,it){const ht=r.convert(k.format,k.encoding),bt=r.convert(k.type),T=y(k.internalFormat,ht,bt,k.encoding);n.get(M).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,T,M.width,M.height,M.depth,0,ht,bt,null):e.texImage2D(it,0,T,M.width,M.height,0,ht,bt,null)),e.bindFramebuffer(36160,w),Lt(M)?d.framebufferTexture2DMultisampleEXT(36160,nt,it,n.get(k).__webglTexture,0,Et(M)):(it===3553||it>=34069&&it<=34074)&&s.framebufferTexture2D(36160,nt,it,n.get(k).__webglTexture,0),e.bindFramebuffer(36160,null)}function Tt(w,M,k){if(s.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let nt=33189;if(k||Lt(M)){const it=M.depthTexture;it&&it.isDepthTexture&&(it.type===_n?nt=36012:it.type===gn&&(nt=33190));const ht=Et(M);Lt(M)?d.renderbufferStorageMultisampleEXT(36161,ht,nt,M.width,M.height):s.renderbufferStorageMultisample(36161,ht,nt,M.width,M.height)}else s.renderbufferStorage(36161,nt,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const nt=Et(M);k&&Lt(M)===!1?s.renderbufferStorageMultisample(36161,nt,35056,M.width,M.height):Lt(M)?d.renderbufferStorageMultisampleEXT(36161,nt,35056,M.width,M.height):s.renderbufferStorage(36161,34041,M.width,M.height),s.framebufferRenderbuffer(36160,33306,36161,w)}else{const nt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let it=0;it<nt.length;it++){const ht=nt[it],bt=r.convert(ht.format,ht.encoding),T=r.convert(ht.type),F=y(ht.internalFormat,bt,T,ht.encoding),dt=Et(M);k&&Lt(M)===!1?s.renderbufferStorageMultisample(36161,dt,F,M.width,M.height):Lt(M)?d.renderbufferStorageMultisampleEXT(36161,dt,F,M.width,M.height):s.renderbufferStorage(36161,F,M.width,M.height)}}s.bindRenderbuffer(36161,null)}function $(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const nt=n.get(M.depthTexture).__webglTexture,it=Et(M);if(M.depthTexture.format===xn)Lt(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,nt,0,it):s.framebufferTexture2D(36160,36096,3553,nt,0);else if(M.depthTexture.format===Zn)Lt(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,nt,0,it):s.framebufferTexture2D(36160,33306,3553,nt,0);else throw new Error("Unknown depthTexture format")}function j(w){const M=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");$(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(36160,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]=s.createRenderbuffer(),Tt(M.__webglDepthbuffer[nt],w,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Tt(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function rt(w,M,k){const nt=n.get(w);M!==void 0&&xt(nt.__webglFramebuffer,w,w.texture,36064,3553),k!==void 0&&j(w)}function vt(w){const M=w.texture,k=n.get(w),nt=n.get(M);w.addEventListener("dispose",Z),w.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=M.version,a.memory.textures++);const it=w.isWebGLCubeRenderTarget===!0,ht=w.isWebGLMultipleRenderTargets===!0,bt=v(w)||o;if(it){k.__webglFramebuffer=[];for(let T=0;T<6;T++)k.__webglFramebuffer[T]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),ht)if(i.drawBuffers){const T=w.texture;for(let F=0,dt=T.length;F<dt;F++){const ct=n.get(T[F]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Lt(w)===!1){const T=ht?M:[M];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let F=0;F<T.length;F++){const dt=T[F];k.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[F]);const ct=r.convert(dt.format,dt.encoding),Mt=r.convert(dt.type),wt=y(dt.internalFormat,ct,Mt,dt.encoding,w.isXRRenderTarget===!0),St=Et(w);s.renderbufferStorageMultisample(36161,St,wt,w.width,w.height),s.framebufferRenderbuffer(36160,36064+F,36161,k.__webglColorRenderbuffer[F])}s.bindRenderbuffer(36161,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,nt.__webglTexture),pt(34067,M,bt);for(let T=0;T<6;T++)xt(k.__webglFramebuffer[T],w,M,36064,34069+T);C(M,bt)&&D(34067),e.unbindTexture()}else if(ht){const T=w.texture;for(let F=0,dt=T.length;F<dt;F++){const ct=T[F],Mt=n.get(ct);e.bindTexture(3553,Mt.__webglTexture),pt(3553,ct,bt),xt(k.__webglFramebuffer,w,ct,36064+F,3553),C(ct,bt)&&D(3553)}e.unbindTexture()}else{let T=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?T=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(T,nt.__webglTexture),pt(T,M,bt),xt(k.__webglFramebuffer,w,M,36064,T),C(M,bt)&&D(T),e.unbindTexture()}w.depthBuffer&&j(w)}function lt(w){const M=v(w)||o,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0,it=k.length;nt<it;nt++){const ht=k[nt];if(C(ht,M)){const bt=w.isWebGLCubeRenderTarget?34067:3553,T=n.get(ht).__webglTexture;e.bindTexture(bt,T),D(bt),e.unbindTexture()}}}function Ct(w){if(o&&w.samples>0&&Lt(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,nt=w.height;let it=16384;const ht=[],bt=w.stencilBuffer?33306:36096,T=n.get(w),F=w.isWebGLMultipleRenderTargets===!0;if(F)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+dt,36161,null),e.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+dt,3553,null,0);e.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,T.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){ht.push(36064+dt),w.depthBuffer&&ht.push(bt);const ct=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ct===!1&&(w.depthBuffer&&(it|=256),w.stencilBuffer&&(it|=1024)),F&&s.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[dt]),ct===!0&&(s.invalidateFramebuffer(36008,[bt]),s.invalidateFramebuffer(36009,[bt])),F){const Mt=n.get(M[dt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Mt,0)}s.blitFramebuffer(0,0,k,nt,0,0,k,nt,it,9728),m&&s.invalidateFramebuffer(36008,ht)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),F)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+dt,36161,T.__webglColorRenderbuffer[dt]);const ct=n.get(M[dt]).__webglTexture;e.bindFramebuffer(36160,T.__webglFramebuffer),s.framebufferTexture2D(36009,36064+dt,3553,ct,0)}e.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Et(w){return Math.min(u,w.samples)}function Lt(w){const M=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Gt(w){const M=a.render.frame;_.get(w)!==M&&(_.set(w,M),w.update())}function Ut(w,M){const k=w.encoding,nt=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Jr||k!==yn&&(k===Xt?o===!1?t.has("EXT_sRGB")===!0&&nt===Pe?(w.format=Jr,w.minFilter=we,w.generateMipmaps=!1):M=Qo.sRGBToLinear(M):(nt!==Pe||it!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),M}this.allocateTextureUnit=q,this.resetTextureUnits=tt,this.setTexture2D=J,this.setTexture2DArray=_t,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=rt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Lt}function Af(s,t,e){const n=e.isWebGL2;function i(r,a=null){let o;if(r===vn)return 5121;if(r===hl)return 32819;if(r===ul)return 32820;if(r===al)return 5120;if(r===ll)return 5122;if(r===jo)return 5123;if(r===cl)return 5124;if(r===gn)return 5125;if(r===_n)return 5126;if(r===mi)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===dl)return 6406;if(r===Pe)return 6408;if(r===fl)return 6409;if(r===pl)return 6410;if(r===xn)return 6402;if(r===Zn)return 34041;if(r===Jr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ml)return 6403;if(r===gl)return 36244;if(r===_l)return 33319;if(r===xl)return 33320;if(r===vl)return 36249;if(r===cr||r===hr||r===ur||r===dr)if(a===Xt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===cr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===cr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ur)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ss||r===ws||r===Es||r===As)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ss)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ws)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Es)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===As)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yl)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ts||r===Cs)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ts)return a===Xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Cs)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ls||r===Ps||r===Ds||r===Rs||r===Is||r===Fs||r===Ns||r===Os||r===zs||r===Us||r===Bs||r===ks||r===Gs||r===Vs)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ls)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ps)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ds)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rs)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Is)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fs)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ns)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Os)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zs)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Us)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bs)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ks)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gs)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vs)return a===Xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===fr)return a===Xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ml||r===Hs||r===Ws||r===Xs)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===fr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Hs)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ws)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xs)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xn?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Tf extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Hi extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),g=this._getHandJoint(l,p);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=f.radius),g.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Lf extends pe{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:xn,h!==xn&&h!==Zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xn&&(n=gn),n===void 0&&h===Zn&&(n=Xn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:de,this.minFilter=c!==void 0?c:de,this.flipY=!1,this.generateMipmaps=!1}}class Pf extends En{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,_=null;const p=e.getContextAttributes();let f=null,g=null;const S=[],x=[],v=new Set,E=new Map,C=new Ee;C.layers.enable(1),C.viewport=new ie;const D=new Ee;D.layers.enable(2),D.viewport=new ie;const y=[C,D],A=new Tf;A.layers.enable(1),A.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=S[B];return K===void 0&&(K=new Br,S[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=S[B];return K===void 0&&(K=new Br,S[B]=K),K.getGripSpace()},this.getHand=function(B){let K=S[B];return K===void 0&&(K=new Br,S[B]=K),K.getHandSpace()};function Z(B){const K=x.indexOf(B.inputSource);if(K===-1)return;const st=S[K];st!==void 0&&st.dispatchEvent({type:B.type,data:B.inputSource})}function U(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",I);for(let B=0;B<S.length;B++){const K=x[B];K!==null&&(x[B]=null,S[B].disconnect(K))}R=null,X=null,t.setRenderTarget(f),m=null,d=null,u=null,i=null,g=null,_t.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",U),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:m}),g=new bn(m.framebufferWidth,m.framebufferHeight,{format:Pe,type:vn,encoding:t.outputEncoding,stencilBuffer:p.stencil})}else{let K=null,st=null,O=null;p.depth&&(O=p.stencil?35056:33190,K=p.stencil?Zn:xn,st=p.stencil?Xn:gn);const pt={colorFormat:32856,depthFormat:O,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(pt),i.updateRenderState({layers:[d]}),g=new bn(d.textureWidth,d.textureHeight,{format:Pe,type:vn,depthTexture:new Lf(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const ut=t.properties.get(g);ut.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),_t.setContext(i),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let K=0;K<B.removed.length;K++){const st=B.removed[K],O=x.indexOf(st);O>=0&&(x[O]=null,S[O].disconnect(st))}for(let K=0;K<B.added.length;K++){const st=B.added[K];let O=x.indexOf(st);if(O===-1){for(let ut=0;ut<S.length;ut++)if(ut>=x.length){x.push(st),O=ut;break}else if(x[ut]===null){x[ut]=st,O=ut;break}if(O===-1)break}const pt=S[O];pt&&pt.connect(st)}}const V=new P,Y=new P;function tt(B,K,st){V.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(st.matrixWorld);const O=V.distanceTo(Y),pt=K.projectionMatrix.elements,ut=st.projectionMatrix.elements,mt=pt[14]/(pt[10]-1),gt=pt[14]/(pt[10]+1),xt=(pt[9]+1)/pt[5],Tt=(pt[9]-1)/pt[5],$=(pt[8]-1)/pt[0],j=(ut[8]+1)/ut[0],rt=mt*$,vt=mt*j,lt=O/(-$+j),Ct=lt*-$;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ct),B.translateZ(lt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Et=mt+lt,Lt=gt+lt,Gt=rt-Ct,Ut=vt+(O-Ct),w=xt*gt/Lt*Et,M=Tt*gt/Lt*Et;B.projectionMatrix.makePerspective(Gt,Ut,w,M,Et,Lt)}function q(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;A.near=D.near=C.near=B.near,A.far=D.far=C.far=B.far,(R!==A.near||X!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,X=A.far);const K=B.parent,st=A.cameras;q(A,K);for(let pt=0;pt<st.length;pt++)q(st[pt],K);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),B.matrix.copy(A.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const O=B.children;for(let pt=0,ut=O.length;pt<ut;pt++)O[pt].updateMatrixWorld(!0);st.length===2?tt(A,C,D):A.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(B){c=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return v};let et=null;function J(B,K){if(h=K.getViewerPose(l||a),_=K,h!==null){const st=h.views;m!==null&&(t.setRenderTargetFramebuffer(g,m.framebuffer),t.setRenderTarget(g));let O=!1;st.length!==A.cameras.length&&(A.cameras.length=0,O=!0);for(let pt=0;pt<st.length;pt++){const ut=st[pt];let mt=null;if(m!==null)mt=m.getViewport(ut);else{const xt=u.getViewSubImage(d,ut);mt=xt.viewport,pt===0&&(t.setRenderTargetTextures(g,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(g))}let gt=y[pt];gt===void 0&&(gt=new Ee,gt.layers.enable(pt),gt.viewport=new ie,y[pt]=gt),gt.matrix.fromArray(ut.transform.matrix),gt.projectionMatrix.fromArray(ut.projectionMatrix),gt.viewport.set(mt.x,mt.y,mt.width,mt.height),pt===0&&A.matrix.copy(gt.matrix),O===!0&&A.cameras.push(gt)}}for(let st=0;st<S.length;st++){const O=x[st],pt=S[st];O!==null&&pt!==void 0&&pt.update(O,K,l||a)}if(et&&et(B,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let st=null;for(const O of v)K.detectedPlanes.has(O)||(st===null&&(st=[]),st.push(O));if(st!==null)for(const O of st)v.delete(O),E.delete(O),n.dispatchEvent({type:"planeremoved",data:O});for(const O of K.detectedPlanes)if(!v.has(O))v.add(O),E.set(O,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:O});else{const pt=E.get(O);O.lastChangedTime>pt&&(E.set(O,O.lastChangedTime),n.dispatchEvent({type:"planechanged",data:O}))}}_=null}const _t=new ua;_t.setAnimationLoop(J),this.setAnimationLoop=function(B){et=B},this.dispose=function(){}}}function Df(s,t){function e(p,f){f.color.getRGB(p.fogColor.value,aa(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,g,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,x)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),_(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?o(p,f,g,S):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Me&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Me&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=t.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=s.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let S;f.map?S=f.map:f.specularMap?S=f.specularMap:f.displacementMap?S=f.displacementMap:f.normalMap?S=f.normalMap:f.bumpMap?S=f.bumpMap:f.roughnessMap?S=f.roughnessMap:f.metalnessMap?S=f.metalnessMap:f.alphaMap?S=f.alphaMap:f.emissiveMap?S=f.emissiveMap:f.clearcoatMap?S=f.clearcoatMap:f.clearcoatNormalMap?S=f.clearcoatNormalMap:f.clearcoatRoughnessMap?S=f.clearcoatRoughnessMap:f.iridescenceMap?S=f.iridescenceMap:f.iridescenceThicknessMap?S=f.iridescenceThicknessMap:f.specularIntensityMap?S=f.specularIntensityMap:f.specularColorMap?S=f.specularColorMap:f.transmissionMap?S=f.transmissionMap:f.thicknessMap?S=f.thicknessMap:f.sheenColorMap?S=f.sheenColorMap:f.sheenRoughnessMap&&(S=f.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix));let x;f.aoMap?x=f.aoMap:f.lightMap&&(x=f.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,g,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=S*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Me&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Rf(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(35375):0;function c(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function l(S,x){let v=i[S.id];v===void 0&&(_(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",f));const E=x.program;n.updateUBOMapping(S,E);const C=t.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function h(S){const x=u();S.__bindingPointIndex=x;const v=s.createBuffer(),E=S.__size,C=S.usage;return s.bindBuffer(35345,v),s.bufferData(35345,E,C),s.bindBuffer(35345,null),s.bindBufferBase(35345,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=i[S.id],v=S.uniforms,E=S.__cache;s.bindBuffer(35345,x);for(let C=0,D=v.length;C<D;C++){const y=v[C];if(m(y,C,E)===!0){const A=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let X=0;for(let Z=0;Z<R.length;Z++){const U=R[Z],I=p(U);typeof U=="number"?(y.__data[0]=U,s.bufferSubData(35345,A+X,y.__data)):U.isMatrix3?(y.__data[0]=U.elements[0],y.__data[1]=U.elements[1],y.__data[2]=U.elements[2],y.__data[3]=U.elements[0],y.__data[4]=U.elements[3],y.__data[5]=U.elements[4],y.__data[6]=U.elements[5],y.__data[7]=U.elements[0],y.__data[8]=U.elements[6],y.__data[9]=U.elements[7],y.__data[10]=U.elements[8],y.__data[11]=U.elements[0]):(U.toArray(y.__data,X),X+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,A,y.__data)}}s.bindBuffer(35345,null)}function m(S,x,v){const E=S.value;if(v[x]===void 0){if(typeof E=="number")v[x]=E;else{const C=Array.isArray(E)?E:[E],D=[];for(let y=0;y<C.length;y++)D.push(C[y].clone());v[x]=D}return!0}else if(typeof E=="number"){if(v[x]!==E)return v[x]=E,!0}else{const C=Array.isArray(v[x])?v[x]:[v[x]],D=Array.isArray(E)?E:[E];for(let y=0;y<C.length;y++){const A=C[y];if(A.equals(D[y])===!1)return A.copy(D[y]),!0}}return!1}function _(S){const x=S.uniforms;let v=0;const E=16;let C=0;for(let D=0,y=x.length;D<y;D++){const A=x[D],R={boundary:0,storage:0},X=Array.isArray(A.value)?A.value:[A.value];for(let Z=0,U=X.length;Z<U;Z++){const I=X[Z],V=p(I);R.boundary+=V.boundary,R.storage+=V.storage}if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,D>0){C=v%E;const Z=E-C;C!==0&&Z-R.boundary<0&&(v+=E-C,A.__offset=v)}v+=R.storage}return C=v%E,C>0&&(v+=E-C),S.__size=v,S.__cache={},this}function p(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:g}}function If(){const s=_i("canvas");return s.style.display="block",s}function as(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:If(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yn,this.useLegacyLights=!0,this.toneMapping=Ze,this.toneMappingExposure=1;const p=this;let f=!1,g=0,S=0,x=null,v=-1,E=null;const C=new ie,D=new ie;let y=null,A=t.width,R=t.height,X=1,Z=null,U=null;const I=new ie(0,0,A,R),V=new ie(0,0,A,R);let Y=!1;const tt=new ha;let q=!1,et=!1,J=null;const _t=new Jt,B=new P,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return x===null?X:1}let O=e;function pt(b,z){for(let G=0;G<b.length;G++){const N=b[G],W=t.getContext(N,z);if(W!==null)return W}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${is}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",St,!1),O===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),O=pt(z,b),O===null)throw pt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ut,mt,gt,xt,Tt,$,j,rt,vt,lt,Ct,Et,Lt,Gt,Ut,w,M,k,nt,it,ht,bt,T,F;function dt(){ut=new Hu(O),mt=new Ou(O,ut,s),ut.init(mt),bt=new Af(O,ut,mt),gt=new wf(O,ut,mt),xt=new qu,Tt=new hf,$=new Ef(O,ut,gt,Tt,mt,bt,xt),j=new Uu(p),rt=new Vu(p),vt=new tc(O,mt),T=new Fu(O,ut,vt,mt),lt=new Wu(O,vt,xt,T),Ct=new Zu(O,lt,vt,xt),nt=new ju(O,mt,$),w=new zu(Tt),Et=new cf(p,j,rt,ut,mt,T,w),Lt=new Df(p,Tt),Gt=new df,Ut=new xf(ut,mt),k=new Iu(p,j,rt,gt,Ct,h,a),M=new Sf(p,Ct,mt),F=new Rf(O,xt,mt,gt),it=new Nu(O,ut,xt,mt),ht=new Xu(O,ut,xt,mt),xt.programs=Et.programs,p.capabilities=mt,p.extensions=ut,p.properties=Tt,p.renderLists=Gt,p.shadowMap=M,p.state=gt,p.info=xt}dt();const ct=new Pf(p,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=ut.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ut.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(A,R,!1))},this.getSize=function(b){return b.set(A,R)},this.setSize=function(b,z,G=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,R=z,t.width=Math.floor(b*X),t.height=Math.floor(z*X),G===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(A*X,R*X).floor()},this.setDrawingBufferSize=function(b,z,G){A=b,R=z,X=G,t.width=Math.floor(b*G),t.height=Math.floor(z*G),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,z,G,N){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,z,G,N),gt.viewport(C.copy(I).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,z,G,N){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,z,G,N),gt.scissor(D.copy(V).multiplyScalar(X).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){gt.setScissorTest(Y=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){U=b},this.getClearColor=function(b){return b.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(b=!0,z=!0,G=!0){let N=0;b&&(N|=16384),z&&(N|=256),G&&(N|=1024),O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Gt.dispose(),Ut.dispose(),Tt.dispose(),j.dispose(),rt.dispose(),Ct.dispose(),T.dispose(),F.dispose(),Et.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Q),ct.removeEventListener("sessionend",ft),J&&(J.dispose(),J=null),yt.stop()};function Mt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=xt.autoReset,z=M.enabled,G=M.autoUpdate,N=M.needsUpdate,W=M.type;dt(),xt.autoReset=b,M.enabled=z,M.autoUpdate=G,M.needsUpdate=N,M.type=W}function St(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ft(b){const z=b.target;z.removeEventListener("dispose",Ft),Bt(z)}function Bt(b){Vt(b),Tt.remove(b)}function Vt(b){const z=Tt.get(b).programs;z!==void 0&&(z.forEach(function(G){Et.releaseProgram(G)}),b.isShaderMaterial&&Et.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,G,N,W,At){z===null&&(z=K);const Pt=W.isMesh&&W.matrixWorld.determinant()<0,Rt=Ta(b,z,G,N,W);gt.setMaterial(N,Pt);let It=G.index,kt=1;N.wireframe===!0&&(It=lt.getWireframeAttribute(G),kt=2);const Nt=G.drawRange,Ot=G.attributes.position;let Yt=Nt.start*kt,ge=(Nt.start+Nt.count)*kt;At!==null&&(Yt=Math.max(Yt,At.start*kt),ge=Math.min(ge,(At.start+At.count)*kt)),It!==null?(Yt=Math.max(Yt,0),ge=Math.min(ge,It.count)):Ot!=null&&(Yt=Math.max(Yt,0),ge=Math.min(ge,Ot.count));const Ve=ge-Yt;if(Ve<0||Ve===1/0)return;T.setup(W,N,Rt,G,It);let an,jt=it;if(It!==null&&(an=vt.get(It),jt=ht,jt.setIndex(an)),W.isMesh)N.wireframe===!0?(gt.setLineWidth(N.wireframeLinewidth*st()),jt.setMode(1)):jt.setMode(4);else if(W.isLine){let zt=N.linewidth;zt===void 0&&(zt=1),gt.setLineWidth(zt*st()),W.isLineSegments?jt.setMode(1):W.isLineLoop?jt.setMode(2):jt.setMode(3)}else W.isPoints?jt.setMode(0):W.isSprite&&jt.setMode(4);if(W.isInstancedMesh)jt.renderInstances(Yt,Ve,W.count);else if(G.isInstancedBufferGeometry){const zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,rr=Math.min(G.instanceCount,zt);jt.renderInstances(Yt,Ve,rr)}else jt.render(Yt,Ve)},this.compile=function(b,z){function G(N,W,At){N.transparent===!0&&N.side===en&&N.forceSinglePass===!1?(N.side=Me,N.needsUpdate=!0,be(N,W,At),N.side=sn,N.needsUpdate=!0,be(N,W,At),N.side=en):be(N,W,At)}d=Ut.get(b),d.init(),_.push(d),b.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(p.useLegacyLights),b.traverse(function(N){const W=N.material;if(W)if(Array.isArray(W))for(let At=0;At<W.length;At++){const Pt=W[At];G(Pt,b,N)}else G(W,b,N)}),_.pop(),d=null};let L=null;function H(b){L&&L(b)}function Q(){yt.stop()}function ft(){yt.start()}const yt=new ua;yt.setAnimationLoop(H),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(b){L=b,ct.setAnimationLoop(b),b===null?yt.stop():yt.start()},ct.addEventListener("sessionstart",Q),ct.addEventListener("sessionend",ft),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(z),z=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,z,x),d=Ut.get(b,_.length),d.init(),_.push(d),_t.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(_t),et=this.localClippingEnabled,q=w.init(this.clippingPlanes,et),u=Gt.get(b,m.length),u.init(),m.push(u),Wt(b,z,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(Z,U),q===!0&&w.beginShadows();const G=d.state.shadowsArray;if(M.render(G,b,z),q===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(u,b),d.setupLights(p.useLegacyLights),z.isArrayCamera){const N=z.cameras;for(let W=0,At=N.length;W<At;W++){const Pt=N[W];te(u,b,Pt,Pt.viewport)}}else te(u,b,z);x!==null&&($.updateMultisampleRenderTarget(x),$.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(p,b,z),T.resetDefaultState(),v=-1,E=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function Wt(b,z,G,N){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||tt.intersectsSprite(b)){N&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const Pt=Ct.update(b),Rt=b.material;Rt.visible&&u.push(b,Pt,Rt,G,B.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==xt.render.frame&&(b.skeleton.update(),b.skeleton.frame=xt.render.frame),!b.frustumCulled||tt.intersectsObject(b))){N&&B.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const Pt=Ct.update(b),Rt=b.material;if(Array.isArray(Rt)){const It=Pt.groups;for(let kt=0,Nt=It.length;kt<Nt;kt++){const Ot=It[kt],Yt=Rt[Ot.materialIndex];Yt&&Yt.visible&&u.push(b,Pt,Yt,G,B.z,Ot)}}else Rt.visible&&u.push(b,Pt,Rt,G,B.z,null)}}const At=b.children;for(let Pt=0,Rt=At.length;Pt<Rt;Pt++)Wt(At[Pt],z,G,N)}function te(b,z,G,N){const W=b.opaque,At=b.transmissive,Pt=b.transparent;d.setupLightsView(G),q===!0&&w.setGlobalState(p.clippingPlanes,G),At.length>0&&le(W,z,G),N&&gt.viewport(C.copy(N)),W.length>0&&Ie(W,z,G),At.length>0&&Ie(At,z,G),Pt.length>0&&Ie(Pt,z,G),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function le(b,z,G){const N=mt.isWebGL2;J===null&&(J=new bn(1024,1024,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?mi:vn,minFilter:pi,samples:N&&r===!0?4:0}));const W=p.getRenderTarget();p.setRenderTarget(J),p.clear();const At=p.toneMapping;p.toneMapping=Ze,Ie(b,z,G),p.toneMapping=At,$.updateMultisampleRenderTarget(J),$.updateRenderTargetMipmap(J),p.setRenderTarget(W)}function Ie(b,z,G){const N=z.isScene===!0?z.overrideMaterial:null;for(let W=0,At=b.length;W<At;W++){const Pt=b[W],Rt=Pt.object,It=Pt.geometry,kt=N===null?Pt.material:N,Nt=Pt.group;Rt.layers.test(G.layers)&&$t(Rt,z,G,It,kt,Nt)}}function $t(b,z,G,N,W,At){b.onBeforeRender(p,z,G,N,W,At),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(p,z,G,N,b,At),W.transparent===!0&&W.side===en&&W.forceSinglePass===!1?(W.side=Me,W.needsUpdate=!0,p.renderBufferDirect(G,z,N,W,b,At),W.side=sn,W.needsUpdate=!0,p.renderBufferDirect(G,z,N,W,b,At),W.side=en):p.renderBufferDirect(G,z,N,W,b,At),b.onAfterRender(p,z,G,N,W,At)}function be(b,z,G){z.isScene!==!0&&(z=K);const N=Tt.get(b),W=d.state.lights,At=d.state.shadowsArray,Pt=W.state.version,Rt=Et.getParameters(b,W.state,At,z,G),It=Et.getProgramCacheKey(Rt);let kt=N.programs;N.environment=b.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(b.isMeshStandardMaterial?rt:j).get(b.envMap||N.environment),kt===void 0&&(b.addEventListener("dispose",Ft),kt=new Map,N.programs=kt);let Nt=kt.get(It);if(Nt!==void 0){if(N.currentProgram===Nt&&N.lightsStateVersion===Pt)return Fe(b,Rt),Nt}else Rt.uniforms=Et.getUniforms(b),b.onBuild(G,Rt,p),b.onBeforeCompile(Rt,p),Nt=Et.acquireProgram(Rt,It),kt.set(It,Nt),N.uniforms=Rt.uniforms;const Ot=N.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=w.uniform),Fe(b,Rt),N.needsLights=La(b),N.lightsStateVersion=Pt,N.needsLights&&(Ot.ambientLightColor.value=W.state.ambient,Ot.lightProbe.value=W.state.probe,Ot.directionalLights.value=W.state.directional,Ot.directionalLightShadows.value=W.state.directionalShadow,Ot.spotLights.value=W.state.spot,Ot.spotLightShadows.value=W.state.spotShadow,Ot.rectAreaLights.value=W.state.rectArea,Ot.ltc_1.value=W.state.rectAreaLTC1,Ot.ltc_2.value=W.state.rectAreaLTC2,Ot.pointLights.value=W.state.point,Ot.pointLightShadows.value=W.state.pointShadow,Ot.hemisphereLights.value=W.state.hemi,Ot.directionalShadowMap.value=W.state.directionalShadowMap,Ot.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ot.spotShadowMap.value=W.state.spotShadowMap,Ot.spotLightMatrix.value=W.state.spotLightMatrix,Ot.spotLightMap.value=W.state.spotLightMap,Ot.pointShadowMap.value=W.state.pointShadowMap,Ot.pointShadowMatrix.value=W.state.pointShadowMatrix);const Yt=Nt.getUniforms(),ge=Yi.seqWithValue(Yt.seq,Ot);return N.currentProgram=Nt,N.uniformsList=ge,Nt}function Fe(b,z){const G=Tt.get(b);G.outputEncoding=z.outputEncoding,G.instancing=z.instancing,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function Ta(b,z,G,N,W){z.isScene!==!0&&(z=K),$.resetTextureUnits();const At=z.fog,Pt=N.isMeshStandardMaterial?z.environment:null,Rt=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:yn,It=(N.isMeshStandardMaterial?rt:j).get(N.envMap||Pt),kt=N.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!N.normalMap&&!!G.attributes.tangent,Ot=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,ge=!!G.morphAttributes.color,Ve=N.toneMapped?p.toneMapping:Ze,an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=an!==void 0?an.length:0,zt=Tt.get(N),rr=d.state.lights;if(q===!0&&(et===!0||b!==E)){const _e=b===E&&N.id===v;w.setState(N,b,_e)}let ee=!1;N.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==rr.state.version||zt.outputEncoding!==Rt||W.isInstancedMesh&&zt.instancing===!1||!W.isInstancedMesh&&zt.instancing===!0||W.isSkinnedMesh&&zt.skinning===!1||!W.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==It||N.fog===!0&&zt.fog!==At||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==w.numPlanes||zt.numIntersection!==w.numIntersection)||zt.vertexAlphas!==kt||zt.vertexTangents!==Nt||zt.morphTargets!==Ot||zt.morphNormals!==Yt||zt.morphColors!==ge||zt.toneMapping!==Ve||mt.isWebGL2===!0&&zt.morphTargetsCount!==jt)&&(ee=!0):(ee=!0,zt.__version=N.version);let ln=zt.currentProgram;ee===!0&&(ln=be(N,z,W));let ps=!1,ni=!1,sr=!1;const ce=ln.getUniforms(),cn=zt.uniforms;if(gt.useProgram(ln.program)&&(ps=!0,ni=!0,sr=!0),N.id!==v&&(v=N.id,ni=!0),ps||E!==b){if(ce.setValue(O,"projectionMatrix",b.projectionMatrix),mt.logarithmicDepthBuffer&&ce.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),E!==b&&(E=b,ni=!0,sr=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const _e=ce.map.cameraPosition;_e!==void 0&&_e.setValue(O,B.setFromMatrixPosition(b.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ce.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||W.isSkinnedMesh)&&ce.setValue(O,"viewMatrix",b.matrixWorldInverse)}if(W.isSkinnedMesh){ce.setOptional(O,W,"bindMatrix"),ce.setOptional(O,W,"bindMatrixInverse");const _e=W.skeleton;_e&&(mt.floatVertexTextures?(_e.boneTexture===null&&_e.computeBoneTexture(),ce.setValue(O,"boneTexture",_e.boneTexture,$),ce.setValue(O,"boneTextureSize",_e.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const or=G.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0&&mt.isWebGL2===!0)&&nt.update(W,G,ln),(ni||zt.receiveShadow!==W.receiveShadow)&&(zt.receiveShadow=W.receiveShadow,ce.setValue(O,"receiveShadow",W.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(cn.envMap.value=It,cn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ni&&(ce.setValue(O,"toneMappingExposure",p.toneMappingExposure),zt.needsLights&&Ca(cn,sr),At&&N.fog===!0&&Lt.refreshFogUniforms(cn,At),Lt.refreshMaterialUniforms(cn,N,X,R,J),Yi.upload(O,zt.uniformsList,cn,$)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Yi.upload(O,zt.uniformsList,cn,$),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ce.setValue(O,"center",W.center),ce.setValue(O,"modelViewMatrix",W.modelViewMatrix),ce.setValue(O,"normalMatrix",W.normalMatrix),ce.setValue(O,"modelMatrix",W.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const _e=N.uniformsGroups;for(let ar=0,Pa=_e.length;ar<Pa;ar++)if(mt.isWebGL2){const ms=_e[ar];F.update(ms,ln),F.bind(ms,ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ln}function Ca(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function La(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,z,G){Tt.get(b.texture).__webglTexture=z,Tt.get(b.depthTexture).__webglTexture=G;const N=Tt.get(b);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=G===void 0,N.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const G=Tt.get(b);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,G=0){x=b,g=z,S=G;let N=!0,W=null,At=!1,Pt=!1;if(b){const It=Tt.get(b);It.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(36160,null),N=!1):It.__webglFramebuffer===void 0?$.setupRenderTarget(b):It.__hasExternalTextures&&$.rebindTextures(b,Tt.get(b.texture).__webglTexture,Tt.get(b.depthTexture).__webglTexture);const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Pt=!0);const Nt=Tt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(W=Nt[z],At=!0):mt.isWebGL2&&b.samples>0&&$.useMultisampledRTT(b)===!1?W=Tt.get(b).__webglMultisampledFramebuffer:W=Nt,C.copy(b.viewport),D.copy(b.scissor),y=b.scissorTest}else C.copy(I).multiplyScalar(X).floor(),D.copy(V).multiplyScalar(X).floor(),y=Y;if(gt.bindFramebuffer(36160,W)&&mt.drawBuffers&&N&&gt.drawBuffers(b,W),gt.viewport(C),gt.scissor(D),gt.setScissorTest(y),At){const It=Tt.get(b.texture);O.framebufferTexture2D(36160,36064,34069+z,It.__webglTexture,G)}else if(Pt){const It=Tt.get(b.texture),kt=z||0;O.framebufferTextureLayer(36160,36064,It.__webglTexture,G||0,kt)}v=-1},this.readRenderTargetPixels=function(b,z,G,N,W,At,Pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Tt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Rt=Rt[Pt]),Rt){gt.bindFramebuffer(36160,Rt);try{const It=b.texture,kt=It.format,Nt=It.type;if(kt!==Pe&&bt.convert(kt)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===mi&&(ut.has("EXT_color_buffer_half_float")||mt.isWebGL2&&ut.has("EXT_color_buffer_float"));if(Nt!==vn&&bt.convert(Nt)!==O.getParameter(35738)&&!(Nt===_n&&(mt.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-N&&G>=0&&G<=b.height-W&&O.readPixels(z,G,N,W,bt.convert(kt),bt.convert(Nt),At)}finally{const It=x!==null?Tt.get(x).__webglFramebuffer:null;gt.bindFramebuffer(36160,It)}}},this.copyFramebufferToTexture=function(b,z,G=0){const N=Math.pow(2,-G),W=Math.floor(z.image.width*N),At=Math.floor(z.image.height*N);$.setTexture2D(z,0),O.copyTexSubImage2D(3553,G,0,0,b.x,b.y,W,At),gt.unbindTexture()},this.copyTextureToTexture=function(b,z,G,N=0){const W=z.image.width,At=z.image.height,Pt=bt.convert(G.format),Rt=bt.convert(G.type);$.setTexture2D(G,0),O.pixelStorei(37440,G.flipY),O.pixelStorei(37441,G.premultiplyAlpha),O.pixelStorei(3317,G.unpackAlignment),z.isDataTexture?O.texSubImage2D(3553,N,b.x,b.y,W,At,Pt,Rt,z.image.data):z.isCompressedTexture?O.compressedTexSubImage2D(3553,N,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Pt,z.mipmaps[0].data):O.texSubImage2D(3553,N,b.x,b.y,Pt,Rt,z.image),N===0&&G.generateMipmaps&&O.generateMipmap(3553),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,z,G,N,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const At=b.max.x-b.min.x+1,Pt=b.max.y-b.min.y+1,Rt=b.max.z-b.min.z+1,It=bt.convert(N.format),kt=bt.convert(N.type);let Nt;if(N.isData3DTexture)$.setTexture3D(N,0),Nt=32879;else if(N.isDataArrayTexture)$.setTexture2DArray(N,0),Nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,N.flipY),O.pixelStorei(37441,N.premultiplyAlpha),O.pixelStorei(3317,N.unpackAlignment);const Ot=O.getParameter(3314),Yt=O.getParameter(32878),ge=O.getParameter(3316),Ve=O.getParameter(3315),an=O.getParameter(32877),jt=G.isCompressedTexture?G.mipmaps[0]:G.image;O.pixelStorei(3314,jt.width),O.pixelStorei(32878,jt.height),O.pixelStorei(3316,b.min.x),O.pixelStorei(3315,b.min.y),O.pixelStorei(32877,b.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Nt,W,z.x,z.y,z.z,At,Pt,Rt,It,kt,jt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Nt,W,z.x,z.y,z.z,At,Pt,Rt,It,jt.data)):O.texSubImage3D(Nt,W,z.x,z.y,z.z,At,Pt,Rt,It,kt,jt),O.pixelStorei(3314,Ot),O.pixelStorei(32878,Yt),O.pixelStorei(3316,ge),O.pixelStorei(3315,Ve),O.pixelStorei(32877,an),W===0&&N.generateMipmaps&&O.generateMipmap(Nt),gt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){g=0,S=0,x=null,gt.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(as.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(s){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!s}}});class Ff extends as{}Ff.prototype.isWebGL1Renderer=!0;class Nf extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ga extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Po=new P,Do=new P,Ro=new Jt,kr=new na,Wi=new Qi;class Of extends me{constructor(t=new Re,e=new ga){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Po.fromBufferAttribute(e,i-1),Do.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Po.distanceTo(Do);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Wi.radius+=r,t.ray.intersectsSphere(Wi)===!1)return;Ro.copy(i).invert(),kr.copy(t.ray).applyMatrix4(Ro);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,m=this.isLineSegments?2:1,_=n.index,f=n.attributes.position;if(_!==null){const g=Math.max(0,a.start),S=Math.min(_.count,a.start+a.count);for(let x=g,v=S-1;x<v;x+=m){const E=_.getX(x),C=_.getX(x+1);if(l.fromBufferAttribute(f,E),h.fromBufferAttribute(f,C),kr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const y=t.ray.origin.distanceTo(d);y<t.near||y>t.far||e.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let x=g,v=S-1;x<v;x+=m){if(l.fromBufferAttribute(f,x),h.fromBufferAttribute(f,x+1),kr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Io=new P,Fo=new P;class zf extends Of{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Io.fromBufferAttribute(e,i),Fo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Io.distanceTo(Fo);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ge{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,m=(a-h)/d;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new at:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],a=[],o=new P,c=new Jt;for(let m=0;m<=t;m++){const _=m/t;i[m]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(oe(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,_))}a[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(oe(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],m*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ls extends Ge{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new at,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*h-m*u+this.aX,l=d*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Uf extends ls{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cs(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,m*=h,i(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Xi=new P,Gr=new cs,Vr=new cs,Hr=new cs;class Bf extends Ge{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Xi.subVectors(i[0],i[1]).add(i[0]),l=Xi);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Xi.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Xi),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(h),m);p<1e-4&&(p=1),_<1e-4&&(_=p),f<1e-4&&(f=p),Gr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,p,f),Vr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,p,f),Hr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,p,f)}else this.curveType==="catmullrom"&&(Gr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Vr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Hr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Gr.calc(c),Vr.calc(c),Hr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function No(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function kf(s,t){const e=1-s;return e*e*t}function Gf(s,t){return 2*(1-s)*s*t}function Vf(s,t){return s*s*t}function di(s,t,e,n){return kf(s,t)+Gf(s,e)+Vf(s,n)}function Hf(s,t){const e=1-s;return e*e*e*t}function Wf(s,t){const e=1-s;return 3*e*e*s*t}function Xf(s,t){return 3*(1-s)*s*s*t}function qf(s,t){return s*s*s*t}function fi(s,t,e,n,i){return Hf(s,t)+Wf(s,e)+Xf(s,n)+qf(s,i)}class _a extends Ge{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fi(t,i.x,r.x,a.x,o.x),fi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $f extends Ge{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fi(t,i.x,r.x,a.x,o.x),fi(t,i.y,r.y,a.y,o.y),fi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hs extends Ge{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yf extends Ge{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xa extends Ge{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(di(t,i.x,r.x,a.x),di(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jf extends Ge{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(di(t,i.x,r.x,a.x),di(t,i.y,r.y,a.y),di(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class va extends Ge{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(No(o,c.x,l.x,h.x,u.x),No(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var ya=Object.freeze({__proto__:null,ArcCurve:Uf,CatmullRomCurve3:Bf,CubicBezierCurve:_a,CubicBezierCurve3:$f,EllipseCurve:ls,LineCurve:hs,LineCurve3:Yf,QuadraticBezierCurve:xa,QuadraticBezierCurve3:jf,SplineCurve:va});class Zf extends Ge{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new hs(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ya[i.type]().fromJSON(i))}return this}}class Qr extends Zf{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new hs(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new xa(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new _a(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new va(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new ls(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ji extends Qr{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Qr().fromJSON(i))}return this}}const Jf={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Ma(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,m;if(n&&(r=np(s,t,r,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let _=e;_<i;_+=e)u=s[_],d=s[_+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return xi(r,a,e,o,c,m,0),a}};function Ma(s,t,e,n,i){let r,a;if(i===fp(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Oo(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Oo(r,s[r],s[r+1],a);return a&&nr(a,a.next)&&(yi(a),a=a.next),a}function wn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(nr(e,e.next)||qt(e.prev,e,e.next)===0)){if(yi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xi(s,t,e,n,i,r,a){if(!s)return;!a&&r&&ap(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Qf(s,n,i,r):Kf(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),yi(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=tp(wn(s),t,e),xi(s,t,e,n,i,r,2)):a===2&&ep(s,t,e,n,i,r):xi(wn(s),t,e,n,i,r,1);break}}}function Kf(s){const t=s.prev,e=s,n=s.next;if(qt(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,m=o>c?o>l?o:l:c>l?c:l;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=m&&Hn(i,o,r,c,a,l,_.x,_.y)&&qt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Qf(s,t,e,n){const i=s.prev,r=s,a=s.next;if(qt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,m=o<c?o<l?o:l:c<l?c:l,_=h<u?h<d?h:d:u<d?u:d,p=o>c?o>l?o:l:c>l?c:l,f=h>u?h>d?h:d:u>d?u:d,g=ts(m,_,t,e,n),S=ts(p,f,t,e,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=g&&v&&v.z<=S;){if(x.x>=m&&x.x<=p&&x.y>=_&&x.y<=f&&x!==i&&x!==a&&Hn(o,h,c,u,l,d,x.x,x.y)&&qt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=m&&v.x<=p&&v.y>=_&&v.y<=f&&v!==i&&v!==a&&Hn(o,h,c,u,l,d,v.x,v.y)&&qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=g;){if(x.x>=m&&x.x<=p&&x.y>=_&&x.y<=f&&x!==i&&x!==a&&Hn(o,h,c,u,l,d,x.x,x.y)&&qt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=m&&v.x<=p&&v.y>=_&&v.y<=f&&v!==i&&v!==a&&Hn(o,h,c,u,l,d,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tp(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!nr(i,r)&&ba(i,n,n.next,r)&&vi(i,r)&&vi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),yi(n),yi(n.next),n=s=r),n=n.next}while(n!==s);return wn(n)}function ep(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hp(a,o)){let c=Sa(a,o);a=wn(a,a.next),c=wn(c,c.next),xi(a,t,e,n,i,r,0),xi(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function np(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Ma(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(cp(l));for(i.sort(ip),r=0;r<i.length;r++)e=rp(i[r],e);return e}function ip(s,t){return s.x-t.x}function rp(s,t){const e=sp(s,t);if(!e)return t;const n=Sa(e,s);return wn(n,n.next),wn(e,e.next)}function sp(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Hn(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),vi(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&op(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function op(s,t){return qt(s.prev,s,t.prev)<0&&qt(t.next,s,s.next)<0}function ap(s,t,e,n){let i=s;do i.z===0&&(i.z=ts(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lp(i)}function lp(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function ts(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hn(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function hp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!up(s,t)&&(vi(s,t)&&vi(t,s)&&dp(s,t)&&(qt(s.prev,s,t.prev)||qt(s,t.prev,t))||nr(s,t)&&qt(s.prev,s,s.next)>0&&qt(t.prev,t,t.next)>0)}function qt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function nr(s,t){return s.x===t.x&&s.y===t.y}function ba(s,t,e,n){const i=$i(qt(s,t,e)),r=$i(qt(s,t,n)),a=$i(qt(e,n,s)),o=$i(qt(e,n,t));return!!(i!==r&&a!==o||i===0&&qi(s,e,t)||r===0&&qi(s,n,t)||a===0&&qi(e,s,n)||o===0&&qi(e,t,n))}function qi(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function $i(s){return s>0?1:s<0?-1:0}function up(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ba(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vi(s,t){return qt(s.prev,s,s.next)<0?qt(s,t,s.next)>=0&&qt(s,s.prev,t)>=0:qt(s,t,s.prev)<0||qt(s,s.next,t)<0}function dp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sa(s,t){const e=new es(s.i,s.x,s.y),n=new es(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oo(s,t,e,n){const i=new es(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function es(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fp(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class $n{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return $n.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];zo(t),Uo(n,t);let a=t.length;e.forEach(zo);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Uo(n,e[c]);const o=Jf.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function zo(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Uo(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class us extends Re{constructor(t=new ji([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new ae(i,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:pp;let x,v=!1,E,C,D,y;g&&(x=g.getSpacedPoints(h),v=!0,d=!1,E=g.computeFrenetFrames(h,!1),C=new P,D=new P,y=new P),d||(f=0,m=0,_=0,p=0);const A=o.extractPoints(l);let R=A.shape;const X=A.holes;if(!$n.isClockWise(R)){R=R.reverse();for(let $=0,j=X.length;$<j;$++){const rt=X[$];$n.isClockWise(rt)&&(X[$]=rt.reverse())}}const U=$n.triangulateShape(R,X),I=R;for(let $=0,j=X.length;$<j;$++){const rt=X[$];R=R.concat(rt)}function V($,j,rt){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(j,rt)}const Y=R.length,tt=U.length;function q($,j,rt){let vt,lt,Ct;const Et=$.x-j.x,Lt=$.y-j.y,Gt=rt.x-$.x,Ut=rt.y-$.y,w=Et*Et+Lt*Lt,M=Et*Ut-Lt*Gt;if(Math.abs(M)>Number.EPSILON){const k=Math.sqrt(w),nt=Math.sqrt(Gt*Gt+Ut*Ut),it=j.x-Lt/k,ht=j.y+Et/k,bt=rt.x-Ut/nt,T=rt.y+Gt/nt,F=((bt-it)*Ut-(T-ht)*Gt)/(Et*Ut-Lt*Gt);vt=it+Et*F-$.x,lt=ht+Lt*F-$.y;const dt=vt*vt+lt*lt;if(dt<=2)return new at(vt,lt);Ct=Math.sqrt(dt/2)}else{let k=!1;Et>Number.EPSILON?Gt>Number.EPSILON&&(k=!0):Et<-Number.EPSILON?Gt<-Number.EPSILON&&(k=!0):Math.sign(Lt)===Math.sign(Ut)&&(k=!0),k?(vt=-Lt,lt=Et,Ct=Math.sqrt(w)):(vt=Et,lt=Lt,Ct=Math.sqrt(w/2))}return new at(vt/Ct,lt/Ct)}const et=[];for(let $=0,j=I.length,rt=j-1,vt=$+1;$<j;$++,rt++,vt++)rt===j&&(rt=0),vt===j&&(vt=0),et[$]=q(I[$],I[rt],I[vt]);const J=[];let _t,B=et.concat();for(let $=0,j=X.length;$<j;$++){const rt=X[$];_t=[];for(let vt=0,lt=rt.length,Ct=lt-1,Et=vt+1;vt<lt;vt++,Ct++,Et++)Ct===lt&&(Ct=0),Et===lt&&(Et=0),_t[vt]=q(rt[vt],rt[Ct],rt[Et]);J.push(_t),B=B.concat(_t)}for(let $=0;$<f;$++){const j=$/f,rt=m*Math.cos(j*Math.PI/2),vt=_*Math.sin(j*Math.PI/2)+p;for(let lt=0,Ct=I.length;lt<Ct;lt++){const Et=V(I[lt],et[lt],vt);ut(Et.x,Et.y,-rt)}for(let lt=0,Ct=X.length;lt<Ct;lt++){const Et=X[lt];_t=J[lt];for(let Lt=0,Gt=Et.length;Lt<Gt;Lt++){const Ut=V(Et[Lt],_t[Lt],vt);ut(Ut.x,Ut.y,-rt)}}}const K=_+p;for(let $=0;$<Y;$++){const j=d?V(R[$],B[$],K):R[$];v?(D.copy(E.normals[0]).multiplyScalar(j.x),C.copy(E.binormals[0]).multiplyScalar(j.y),y.copy(x[0]).add(D).add(C),ut(y.x,y.y,y.z)):ut(j.x,j.y,0)}for(let $=1;$<=h;$++)for(let j=0;j<Y;j++){const rt=d?V(R[j],B[j],K):R[j];v?(D.copy(E.normals[$]).multiplyScalar(rt.x),C.copy(E.binormals[$]).multiplyScalar(rt.y),y.copy(x[$]).add(D).add(C),ut(y.x,y.y,y.z)):ut(rt.x,rt.y,u/h*$)}for(let $=f-1;$>=0;$--){const j=$/f,rt=m*Math.cos(j*Math.PI/2),vt=_*Math.sin(j*Math.PI/2)+p;for(let lt=0,Ct=I.length;lt<Ct;lt++){const Et=V(I[lt],et[lt],vt);ut(Et.x,Et.y,u+rt)}for(let lt=0,Ct=X.length;lt<Ct;lt++){const Et=X[lt];_t=J[lt];for(let Lt=0,Gt=Et.length;Lt<Gt;Lt++){const Ut=V(Et[Lt],_t[Lt],vt);v?ut(Ut.x,Ut.y+x[h-1].y,x[h-1].x+rt):ut(Ut.x,Ut.y,u+rt)}}}st(),O();function st(){const $=i.length/3;if(d){let j=0,rt=Y*j;for(let vt=0;vt<tt;vt++){const lt=U[vt];mt(lt[2]+rt,lt[1]+rt,lt[0]+rt)}j=h+f*2,rt=Y*j;for(let vt=0;vt<tt;vt++){const lt=U[vt];mt(lt[0]+rt,lt[1]+rt,lt[2]+rt)}}else{for(let j=0;j<tt;j++){const rt=U[j];mt(rt[2],rt[1],rt[0])}for(let j=0;j<tt;j++){const rt=U[j];mt(rt[0]+Y*h,rt[1]+Y*h,rt[2]+Y*h)}}n.addGroup($,i.length/3-$,0)}function O(){const $=i.length/3;let j=0;pt(I,j),j+=I.length;for(let rt=0,vt=X.length;rt<vt;rt++){const lt=X[rt];pt(lt,j),j+=lt.length}n.addGroup($,i.length/3-$,1)}function pt($,j){let rt=$.length;for(;--rt>=0;){const vt=rt;let lt=rt-1;lt<0&&(lt=$.length-1);for(let Ct=0,Et=h+f*2;Ct<Et;Ct++){const Lt=Y*Ct,Gt=Y*(Ct+1),Ut=j+vt+Lt,w=j+lt+Lt,M=j+lt+Gt,k=j+vt+Gt;gt(Ut,w,M,k)}}}function ut($,j,rt){c.push($),c.push(j),c.push(rt)}function mt($,j,rt){xt($),xt(j),xt(rt);const vt=i.length/3,lt=S.generateTopUV(n,i,vt-3,vt-2,vt-1);Tt(lt[0]),Tt(lt[1]),Tt(lt[2])}function gt($,j,rt,vt){xt($),xt(j),xt(vt),xt(j),xt(rt),xt(vt);const lt=i.length/3,Ct=S.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Tt(Ct[0]),Tt(Ct[1]),Tt(Ct[3]),Tt(Ct[1]),Tt(Ct[2]),Tt(Ct[3])}function xt($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function Tt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ya[i.type]().fromJSON(i)),new us(n,t.options)}}const pp={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new at(r,a),new at(o,c),new at(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],m=t[i*3+1],_=t[i*3+2],p=t[r*3],f=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-u),new at(d,1-_),new at(p,1-g)]:[new at(o,1-c),new at(h,1-u),new at(m,1-_),new at(f,1-g)]}};function mp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ds extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const p=_/i*r,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(p),u.y=(t+e*Math.cos(f))*Math.sin(p),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(p),h.y=t*Math.sin(p),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const p=(i+1)*m+_-1,f=(i+1)*(m-1)+_-1,g=(i+1)*(m-1)+_,S=(i+1)*m+_;a.push(p,f,S),a.push(f,g,S)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gp extends Qn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ht(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Zi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _p{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],_=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const xp=new _p;class ir{constructor(t){this.manager=t!==void 0?t:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const Ye={};class vp extends Error{constructor(t,e){super(t),this.response=e}}class yp extends ir{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Zi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ye[t]!==void 0){Ye[t].push({onLoad:e,onProgress:n,onError:i});return}Ye[t]=[],Ye[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ye[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0;let p=0;const f=new ReadableStream({start(g){S();function S(){u.read().then(({done:x,value:v})=>{if(x)g.close();else{p+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:p,total:m});for(let C=0,D=h.length;C<D;C++){const y=h[C];y.onProgress&&y.onProgress(E)}g.enqueue(v),S()}})}}});return new Response(f)}else throw new vp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(_=>m.decode(_))}}}).then(l=>{Zi.add(t,l);const h=Ye[t];delete Ye[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Ye[t];if(h===void 0)throw this.manager.itemError(t),l;delete Ye[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Mp extends ir{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Zi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=_i("img");function c(){h(),Zi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class bp extends ir{constructor(t){super(t)}load(t,e,n,i){const r=new pe,a=new Mp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Sp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bo(){return(typeof performance>"u"?Date:performance).now()}class ko{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wp extends zf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Re;i.setAttribute("position",new ae(e,3)),i.setAttribute("color",new ae(n,3));const r=new ga({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new Ht,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ep{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Qr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const S=[];for(let x=0,v=g.length;x<v;x++){const E=g[x],C=new ji;C.curves=E.curves,S.push(C)}return S}function n(g,S){const x=S.length;let v=!1;for(let E=x-1,C=0;C<x;E=C++){let D=S[E],y=S[C],A=y.x-D.x,R=y.y-D.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(D=S[C],A=-A,y=S[E],R=-R),g.y<D.y||g.y>y.y)continue;if(g.y===D.y){if(g.x===D.x)return!0}else{const X=R*(g.x-D.x)-A*(g.y-D.y);if(X===0)return!0;if(X<0)continue;v=!v}}else{if(g.y!==D.y)continue;if(y.x<=g.x&&g.x<=D.x||D.x<=g.x&&g.x<=y.x)return!0}}return v}const i=$n.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new ji,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let m=[],_=0,p;d[_]=void 0,m[_]=[];for(let g=0,S=r.length;g<S;g++)o=r[g],p=o.getPoints(),a=i(p),a=t?!a:a,a?(!h&&d[_]&&_++,d[_]={s:new ji,p},d[_].s.curves=o.curves,h&&_++,m[_]=[]):m[_].push({h:o,p:p[0]});if(!d[0])return e(r);if(d.length>1){let g=!1,S=0;for(let x=0,v=d.length;x<v;x++)u[x]=[];for(let x=0,v=d.length;x<v;x++){const E=m[x];for(let C=0;C<E.length;C++){const D=E[C];let y=!0;for(let A=0;A<d.length;A++)n(D.p,d[A].p)&&(x!==A&&S++,y?(y=!1,u[A].push(D)):g=!0);y&&u[x].push(D)}}S>0&&g===!1&&(m=u)}let f;for(let g=0,S=d.length;g<S;g++){c=d[g].s,l.push(c),f=m[g];for(let x=0,v=f.length;x<v;x++)c.holes.push(f[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:is}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=is);const Go={type:"change"},Wr={type:"start"},Vo={type:"end"};class Ap extends En{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:An.ROTATE,MIDDLE:An.DOLLY,RIGHT:An.PAN},this.touches={ONE:Tn.ROTATE,TWO:Tn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Ut),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ut),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Go),n.update(),r=i.NONE},this.update=function(){const T=new P,F=new Mn().setFromUnitVectors(t.up,new P(0,1,0)),dt=F.clone().invert(),ct=new P,Mt=new Mn,wt=2*Math.PI;return function(){const Ft=n.object.position;T.copy(Ft).sub(n.target),T.applyQuaternion(F),o.setFromVector3(T),n.autoRotate&&r===i.NONE&&A(D()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Bt=n.minAzimuthAngle,Vt=n.maxAzimuthAngle;return isFinite(Bt)&&isFinite(Vt)&&(Bt<-Math.PI?Bt+=wt:Bt>Math.PI&&(Bt-=wt),Vt<-Math.PI?Vt+=wt:Vt>Math.PI&&(Vt-=wt),Bt<=Vt?o.theta=Math.max(Bt,Math.min(Vt,o.theta)):o.theta=o.theta>(Bt+Vt)/2?Math.max(Bt,o.theta):Math.min(Vt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),T.setFromSpherical(o),T.applyQuaternion(dt),Ft.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||ct.distanceToSquared(n.object.position)>a||8*(1-Mt.dot(n.object.quaternion))>a?(n.dispatchEvent(Go),ct.copy(n.object.position),Mt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",rt),n.domElement.removeEventListener("pointercancel",Ct),n.domElement.removeEventListener("wheel",Gt),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",lt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ut),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new ko,c=new ko;let l=1;const h=new P;let u=!1;const d=new at,m=new at,_=new at,p=new at,f=new at,g=new at,S=new at,x=new at,v=new at,E=[],C={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function A(T){c.theta-=T}function R(T){c.phi-=T}const X=function(){const T=new P;return function(dt,ct){T.setFromMatrixColumn(ct,0),T.multiplyScalar(-dt),h.add(T)}}(),Z=function(){const T=new P;return function(dt,ct){n.screenSpacePanning===!0?T.setFromMatrixColumn(ct,1):(T.setFromMatrixColumn(ct,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(dt),h.add(T)}}(),U=function(){const T=new P;return function(dt,ct){const Mt=n.domElement;if(n.object.isPerspectiveCamera){const wt=n.object.position;T.copy(wt).sub(n.target);let St=T.length();St*=Math.tan(n.object.fov/2*Math.PI/180),X(2*dt*St/Mt.clientHeight,n.object.matrix),Z(2*ct*St/Mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(dt*(n.object.right-n.object.left)/n.object.zoom/Mt.clientWidth,n.object.matrix),Z(ct*(n.object.top-n.object.bottom)/n.object.zoom/Mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(T){d.set(T.clientX,T.clientY)}function tt(T){S.set(T.clientX,T.clientY)}function q(T){p.set(T.clientX,T.clientY)}function et(T){m.set(T.clientX,T.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;A(2*Math.PI*_.x/F.clientHeight),R(2*Math.PI*_.y/F.clientHeight),d.copy(m),n.update()}function J(T){x.set(T.clientX,T.clientY),v.subVectors(x,S),v.y>0?I(y()):v.y<0&&V(y()),S.copy(x),n.update()}function _t(T){f.set(T.clientX,T.clientY),g.subVectors(f,p).multiplyScalar(n.panSpeed),U(g.x,g.y),p.copy(f),n.update()}function B(T){T.deltaY<0?V(y()):T.deltaY>0&&I(y()),n.update()}function K(T){let F=!1;switch(T.code){case n.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),F=!0;break}F&&(T.preventDefault(),n.update())}function st(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const T=.5*(E[0].pageX+E[1].pageX),F=.5*(E[0].pageY+E[1].pageY);d.set(T,F)}}function O(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const T=.5*(E[0].pageX+E[1].pageX),F=.5*(E[0].pageY+E[1].pageY);p.set(T,F)}}function pt(){const T=E[0].pageX-E[1].pageX,F=E[0].pageY-E[1].pageY,dt=Math.sqrt(T*T+F*F);S.set(0,dt)}function ut(){n.enableZoom&&pt(),n.enablePan&&O()}function mt(){n.enableZoom&&pt(),n.enableRotate&&st()}function gt(T){if(E.length==1)m.set(T.pageX,T.pageY);else{const dt=bt(T),ct=.5*(T.pageX+dt.x),Mt=.5*(T.pageY+dt.y);m.set(ct,Mt)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;A(2*Math.PI*_.x/F.clientHeight),R(2*Math.PI*_.y/F.clientHeight),d.copy(m)}function xt(T){if(E.length===1)f.set(T.pageX,T.pageY);else{const F=bt(T),dt=.5*(T.pageX+F.x),ct=.5*(T.pageY+F.y);f.set(dt,ct)}g.subVectors(f,p).multiplyScalar(n.panSpeed),U(g.x,g.y),p.copy(f)}function Tt(T){const F=bt(T),dt=T.pageX-F.x,ct=T.pageY-F.y,Mt=Math.sqrt(dt*dt+ct*ct);x.set(0,Mt),v.set(0,Math.pow(x.y/S.y,n.zoomSpeed)),I(v.y),S.copy(x)}function $(T){n.enableZoom&&Tt(T),n.enablePan&&xt(T)}function j(T){n.enableZoom&&Tt(T),n.enableRotate&&gt(T)}function rt(T){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",vt),n.domElement.addEventListener("pointerup",lt)),nt(T),T.pointerType==="touch"?w(T):Et(T))}function vt(T){n.enabled!==!1&&(T.pointerType==="touch"?M(T):Lt(T))}function lt(T){it(T),E.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",lt)),n.dispatchEvent(Vo),r=i.NONE}function Ct(T){it(T)}function Et(T){let F;switch(T.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case An.DOLLY:if(n.enableZoom===!1)return;tt(T),r=i.DOLLY;break;case An.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;q(T),r=i.PAN}else{if(n.enableRotate===!1)return;Y(T),r=i.ROTATE}break;case An.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Y(T),r=i.ROTATE}else{if(n.enablePan===!1)return;q(T),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Wr)}function Lt(T){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;et(T);break;case i.DOLLY:if(n.enableZoom===!1)return;J(T);break;case i.PAN:if(n.enablePan===!1)return;_t(T);break}}function Gt(T){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(T.preventDefault(),n.dispatchEvent(Wr),B(T),n.dispatchEvent(Vo))}function Ut(T){n.enabled===!1||n.enablePan===!1||K(T)}function w(T){switch(ht(T),E.length){case 1:switch(n.touches.ONE){case Tn.ROTATE:if(n.enableRotate===!1)return;st(),r=i.TOUCH_ROTATE;break;case Tn.PAN:if(n.enablePan===!1)return;O(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Tn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ut(),r=i.TOUCH_DOLLY_PAN;break;case Tn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Wr)}function M(T){switch(ht(T),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xt(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;j(T),n.update();break;default:r=i.NONE}}function k(T){n.enabled!==!1&&T.preventDefault()}function nt(T){E.push(T)}function it(T){delete C[T.pointerId];for(let F=0;F<E.length;F++)if(E[F].pointerId==T.pointerId){E.splice(F,1);return}}function ht(T){let F=C[T.pointerId];F===void 0&&(F=new at,C[T.pointerId]=F),F.set(T.pageX,T.pageY)}function bt(T){const F=T.pointerId===E[0].pointerId?E[1]:E[0];return C[F.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",rt),n.domElement.addEventListener("pointercancel",Ct),n.domElement.addEventListener("wheel",Gt,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class ke{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),ke.nextNameID=ke.nextNameID||0,this.$name.id=`lil-gui-name-${++ke.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Tp extends ke{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ns(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Cp={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:ns,toHexString:ns},Mi={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Lp={isPrimitive:!1,match:Array.isArray,fromHexString(s,t,e=1){const n=Mi.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Mi.toHexString(i)}},Pp={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=Mi.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Mi.toHexString(i)}},Dp=[Cp,Mi,Lp,Pp];function Rp(s){return Dp.find(t=>t.match(s))}class Ip extends ke{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Rp(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ns(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Xr extends ke{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Fp extends ke{constructor(t,e,n,i,r,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},e=g=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),e(this._step*this._normalizeMouseWheel(g)))};let r=!1,a,o,c,l,h;const u=5,d=g=>{a=g.clientX,o=c=g.clientY,r=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(r){const S=g.clientX-a,x=g.clientY-o;Math.abs(x)>u?(g.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>u&&_()}if(!r){const S=g.clientY-c;h-=S*this._step*this._arrowKeyMultiplier(g),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)}c=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,S,x,v,E)=>(g-S)/(x-S)*(E-v)+v,e=g=>{const S=this.$slider.getBoundingClientRect();let x=t(g,S.left,S.right,this._min,this._max);this._snapClampSetValue(x)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=g=>{e(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,o,c;const l=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),a=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(o=g.touches[0].clientX,c=g.touches[0].clientY,a=!0):l(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=g=>{if(a){const S=g.touches[0].clientX-o,x=g.touches[0].clientY-c;Math.abs(S)>Math.abs(x)?l(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else g.preventDefault(),e(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),_=400;let p;const f=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const x=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Np extends ke{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class Op extends ke{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const zp=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Up(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Ho=!1;class fs{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Ho&&a&&(Up(zp),Ho=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new Np(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Fp(this,t,e,n,i,r);case"boolean":return new Tp(this,t,e);case"string":return new Op(this,t,e);case"function":return new Xr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Ip(this,t,e,n)}addFolder(t){return new fs({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Xr||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Xr)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class Bp extends ir{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new yp(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){const c=r.parse(JSON.parse(o));e&&e(c)},n,i)}parse(t){return new kp(t)}}class kp{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Gp(t,e,this.data);for(let r=0,a=i.length;r<a;r++)n.push(...i[r].toShapes());return n}}function Gp(s,t,e){const n=Array.from(s),i=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,a=[];let o=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)o=0,c-=r;else{const u=Vp(h,i,o,c,e);o+=u.offsetX,a.push(u.path)}}return a}function Vp(s,t,e,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const a=new Ep;let o,c,l,h,u,d,m,_;if(r.o){const p=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let f=0,g=p.length;f<g;)switch(p[f++]){case"m":o=p[f++]*t+e,c=p[f++]*t+n,a.moveTo(o,c);break;case"l":o=p[f++]*t+e,c=p[f++]*t+n,a.lineTo(o,c);break;case"q":l=p[f++]*t+e,h=p[f++]*t+n,u=p[f++]*t+e,d=p[f++]*t+n,a.quadraticCurveTo(u,d,l,h);break;case"b":l=p[f++]*t+e,h=p[f++]*t+n,u=p[f++]*t+e,d=p[f++]*t+n,m=p[f++]*t+e,_=p[f++]*t+n,a.bezierCurveTo(u,d,m,_,l,h);break}}return{offsetX:r.ha*t,path:a}}class Hp extends us{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}new fs;const wa=document.querySelector("canvas.webgl"),Ji=new Nf;new wp;const Wp=new bp,Xp=Wp.load("/textures/matcaps/8.png"),qp=new Bp;qp.load("/fonts/helvetiker_regular.typeface.json",s=>{const t=new Hp("Sam Roberts Doughnut Shop",{font:s,size:.5,height:.2,curveSegments:5,bevelEnabled:!0,bevelThickness:.03,bevelSize:.02,bevelOffset:0,bevelSegments:3});t.center();const e=new gp({matcap:Xp}),n=new De(t,e);Ji.add(n),console.time("donuts");const i=new ds(.3,.2,20,45);for(let r=0;r<300;r++){const a=new De(i,e);a.position.x=(Math.random()-.5)*10,a.position.y=(Math.random()-.5)*10,a.position.z=(Math.random()-.5)*10,a.rotation.x=Math.random()*Math.PI,a.rotation.y=Math.random()*Math.PI;const o=Math.random();a.scale.x=o,a.scale.y=o,a.scale.z=o,Ji.add(a)}console.timeEnd("donuts")});new De(new ti(1,1,1),new rs);const Ue={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ue.width=window.innerWidth,Ue.height=window.innerHeight,on.aspect=Ue.width/Ue.height,on.updateProjectionMatrix(),bi.setSize(Ue.width,Ue.height),bi.setPixelRatio(Math.min(window.devicePixelRatio,2))});const on=new Ee(75,Ue.width/Ue.height,.1,100);on.position.x=1;on.position.y=1;on.position.z=2;Ji.add(on);const Ea=new Ap(on,wa);Ea.enableDamping=!0;const bi=new as({canvas:wa});bi.setSize(Ue.width,Ue.height);bi.setPixelRatio(Math.min(window.devicePixelRatio,2));const $p=new Sp,Aa=()=>{$p.getElapsedTime(),Ea.update(),bi.render(Ji,on),window.requestAnimationFrame(Aa)};Aa();
//# sourceMappingURL=index-dc07f955.js.map
