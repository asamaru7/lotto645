"use strict";!function(){var e,t;(e=document.querySelector('meta[name="viewport"]'))||((e=document.createElement("meta")).name="viewport",e.content="width=device-width,initial-scale=1.0",document.getElementsByTagName("head")[0].appendChild(e)),t=e.content;for(var n,o=[],c=t.split(","),r=0,a=c.length;r<a;r++)if(n=c[r].match(/\s*user-scalable\s*=\s*([a-z]+)/)){if(n[1]&&"no"===(n[1]+"").toLowerCase())return}else o.push(c[r]);c=null,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});var i=function(e,t,n){e=e.split(",");for(var o=function(){var o=e[c].trim(),r=o;"focus"===o?r="focusin":"blur"===o&&(r="focusout"),document.addEventListener(r,(function(e){for(var c=e.target;c;){if(c.closest(t))return void n.call(c,e,o);c=c.parentElement}}))},c=0,r=e.length;c<r;c++)o()},u=function(e){if("input"===(e.tagName+"").toLowerCase()){var t=(e.type+"").toLowerCase();if("radio"===t||"checkbox"===t||"button"===t||"hidden"===t||"reset"===t||"submit"===t)return!1}return!0},l="input, select, textarea";i("touchstart, focus",l,(function(){u(this)&&(e.content=o.concat(["user-scalable=no"]).join(","))})),i("touchend, blur",l,(function(n){u(this)&&setTimeout((function(){document.activeElement&&document.activeElement.closest(l)&&u(document.activeElement)||(e.content=t)}),100)}))}();
