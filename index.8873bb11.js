var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n("g1uI7");var o=n("cSykv"),i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),y=Object.prototype.toString,p=Math.max,b=Math.min,v=function(){return d.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||a.test(e)?c(e.slice(2),r?2:8):f.test(e)?NaN:+e}const h=document.querySelector(".movie-gallery"),j=document.querySelector(".search-form__input"),x=document.querySelector(".search-form__button"),O=document.querySelector(".error-message");x.addEventListener("click",(async function(e){e.preventDefault();const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=50faffa66bb05e881b7f3de0b265b30c&page=1&query=${j.value}`),r=await t.json();if(""===j.value)return O.style.display="flex",void(O.textContent=O.textContent);void(h.innerHTML=""),(0,o.renderMoviesCards)(r.results),h.innerHTML=r.query="",0==r.results?O.style.display="flex":O.style.display="none";return}));n("cSykv"),n("dLZVI"),n("cyBjM"),n("99hUO");
//# sourceMappingURL=index.8873bb11.js.map