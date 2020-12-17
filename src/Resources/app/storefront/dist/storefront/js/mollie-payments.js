(window.webpackJsonp=window.webpackJsonp||[]).push([["mollie-payments"],{faWt:function(t,e,n){"use strict";n.r(e);n("wcNg");var o=n("FGIj");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n,o,r,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,r)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s,p,f,d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,u(e).apply(this,arguments))}var n,o,r,s,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){var t=this,e=null,n=document.querySelector(this.getSelectors().mollieController);n&&n.remove(),"/"===this.options.shopUrl.substr(-1)&&(this.options.shopUrl=this.options.shopUrl.substr(0,this.options.shopUrl.length-1));var o=document.querySelector(this.getSelectors().cardHolder),r=document.querySelector(this.getSelectors().componentsContainer),i=document.querySelector(this.getSelectors().paymentForm),a=document.querySelectorAll(this.getSelectors().radioInputs),c=document.querySelector(this.getSelectors().submitButton);r&&o&&(e=Mollie(this.options.profileId,{locale:this.options.locale,testmode:this.options.testMode})),this.createComponentsInputs(e,[this.getInputFields().cardHolder,this.getInputFields().cardNumber,this.getInputFields().expiryDate,this.getInputFields().verificationCode]),a.forEach((function(e){e.addEventListener("change",(function(){t.showComponents()}))})),c.addEventListener("click",(function(n){n.preventDefault(),t.submitForm(n,e,i)}))}},{key:"getSelectors",value:function(){return{cardHolder:"#cardHolder",componentsContainer:"div.mollie-components-credit-card",creditCardRadioInput:'#confirmPaymentForm input[type="radio"].creditcard',mollieController:"div.mollie-components-controller",paymentForm:"#confirmPaymentForm",radioInputs:'#confirmPaymentForm input[type="radio"]',submitButton:'#confirmPaymentForm button[type="submit"]'}}},{key:"getDefaultProperties",value:function(){return{styles:{base:{backgroundColor:"#fff",fontSize:"14px",padding:"10px 10px","::placeholder":{color:"rgba(68, 68, 68, 0.2)"}},valid:{color:"#090"},invalid:{backgroundColor:"#fff1f3"}}}}},{key:"getInputFields",value:function(){return{cardHolder:{name:"cardHolder",id:"#cardHolder",errors:"cardHolderError"},cardNumber:{name:"cardNumber",id:"#cardNumber",errors:"cardNumberError"},expiryDate:{name:"expiryDate",id:"#expiryDate",errors:"expiryDateError"},verificationCode:{name:"verificationCode",id:"#verificationCode",errors:"verificationCodeError"}}}},{key:"showComponents",value:function(){var t=document.querySelector(this.getSelectors().creditCardRadioInput),e=document.querySelector(this.getSelectors().componentsContainer);e&&(void 0===t||!1===t.checked?e.classList.add("d-none"):e.classList.remove("d-none"))}},{key:"createComponentsInputs",value:function(t,e){var n=this;e.forEach((function(e,o,r){var i=t.createComponent(e.name,n.getDefaultProperties());i.mount(e.id),r[o][e.name]=i,i.addEventListener("change",(function(t){var n=document.getElementById("".concat(e.name)),o=document.getElementById("".concat(e.errors));t.error&&t.touched?(n.classList.add("error"),o.textContent=t.error):(n.classList.remove("error"),o.textContent="")})),i.addEventListener("focus",(function(){n.setFocus("".concat(e.id),!0)})),i.addEventListener("blur",(function(){n.setFocus("".concat(e.id),!1)}))}))}},{key:"setFocus",value:function(t,e){document.querySelector(t).classList.toggle("is-focused",e)}},{key:"disableForm",value:function(){var t=document.querySelector(this.getSelectors().submitButton);t&&(t.disabled=!0)}},{key:"enableForm",value:function(){var t=document.querySelector(this.getSelectors().submitButton);t&&(t.disabled=!1)}},{key:"submitForm",value:(s=regeneratorRuntime.mark((function t(e,n,o){var r,i,a,c,u,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),this.disableForm(),null!=(r=document.querySelector(this.getSelectors().creditCardRadioInput))&&!1!==r.checked||!o||o.submit(),!r||!0!==r.checked){t.next=17;break}return(i=document.getElementById("".concat(this.getInputFields().verificationCode.errors))).textContent="",t.next=9,n.createToken();case 9:if(a=t.sent,c=a.token,!(u=a.error)){t.next=16;break}return this.enableForm(),i.textContent=u.message,t.abrupt("return");case 16:u||(l=this.options.shopUrl+"/mollie/components/store-card-token/"+this.options.customerId+"/"+c)&&o&&fetch(l,{headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(){document.getElementById("cardToken").setAttribute("value",c),o.submit()})).catch(o.submit());case 17:case"end":return t.stop()}}),t,this)})),p=function(){var t=this,e=arguments;return new Promise((function(n,o){var r=s.apply(t,e);function a(t){i(r,n,o,a,c,"next",t)}function c(t){i(r,n,o,a,c,"throw",t)}a(void 0)}))},function(t,e,n){return p.apply(this,arguments)})}])&&a(n.prototype,o),r&&a(n,r),e}(o.a);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e,n,o,r,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,r)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}f={customerId:null,locale:null,profileId:null,shopUrl:null,testMode:!0},(p="options")in(s=d)?Object.defineProperty(s,p,{value:f,enumerable:!0,configurable:!0,writable:!0}):s[p]=f;var S=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,b(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){var t=document.querySelector("div.mollie-ideal-issuer");if(null!=t){var e=t.getAttribute("data-shop-url"),n=document.querySelector("#iDealIssuer");"/"===e.substr(-1)&&(e=e.substr(0,e.length-1));var o=t.getAttribute("data-customer-id"),r=document.querySelector("#confirmPaymentForm"),i=document.querySelector('#confirmPaymentForm button[type="submit"]'),a=document.querySelectorAll('#confirmPaymentForm input[type="radio"]'),c=document.querySelector('#confirmPaymentForm input[type="radio"].ideal'),u=function(){void 0===c||!1===c.checked?t.classList.add("d-none"):t.classList.remove("d-none")};u(),a.forEach((function(t){t.addEventListener("change",(function(){u()}))})),r.addEventListener("submit",function(){var t,a=(t=regeneratorRuntime.mark((function t(a){var u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),null!==i&&(i.disabled=!0),setTimeout((function(){r.submit()}),2e3),null!=c&&!1!==c.checked&&null!=n||r.submit(),null!=c&&!0===c.checked&&null!=n&&(u=e+"/mollie/ideal/store-issuer/"+o+"/"+n.value,fetch(u,{headers:{"Content-Type":"application/json; charset=utf-8"}}).then(r.submit()).catch(r.submit()));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){m(i,o,r,a,c,"next",t)}function c(t){m(i,o,r,a,c,"throw",t)}a(void 0)}))});return function(t){return a.apply(this,arguments)}}())}}}])&&h(n.prototype,o),r&&h(n,r),e}(o.a),_=n("k8s9");function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(){var t,n,o,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return o=this,n=!(r=(t=P(e)).call.apply(t,[this].concat(a)))||"object"!==k(r)&&"function"!=typeof r?C(o):r,function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(C(n),"_data",{form:null,selectedProduct:null,shippingContact:null,shippingMethodId:null,cartAmount:0,cartToken:"",csrfTokenAuthorize:"",csrfTokenShippingMethods:"",currency:"",shippingAmount:0}),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){var t=this;t._client=new _.a(window.accessKey,window.contextToken),window.ApplePaySession&&"https:"===location.protocol&&this.isApplePayAvailable().then((function(e){void 0!==e.available&&!0===e.available&&t.enableApplePayButtons()}))}},{key:"totalAmount",value:function(){return this._data.cartAmount+this._data.shippingAmount}},{key:"isApplePayAvailable",value:function(){return new Promise((function(t,e){fetch("/mollie/apple-pay/available").then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){e()}))}))}},{key:"enableApplePayButtons",value:function(){var t=this,e=document.querySelectorAll(".js-apple-pay");e.length&&e.forEach((function(e){e.classList.remove("d-none"),e.addEventListener("click",(function(n){n.preventDefault(),t.clearNotification(),t._data.form=e.parentNode;var o=t._data.form.querySelectorAll('#mollie-apd-csrf input[name="_mollie_csrf_token"]');o.length>1&&(t._data.csrfTokenAuthorize=o[0].value,t._data.csrfTokenShippingMethods=o[1].value);var r=t._data.form.querySelector('input[name="id"]').value,i=t._data.form.querySelector('input[name="name"]').value,a=t._data.form.querySelector('input[name="price"]').value,c=t._data.form.querySelector('input[name="countryCode"]').value,u=t._data.form.querySelector('input[name="currency"]').value,l=t.getProductPrice(r);t._data.cartAmount=a,t._data.currency=u,t.createPaymentRequest("product",c,u,i),l.then((function(e){t._data.selectedProduct=e.data,t._data.cartAmount=t._data.selectedProduct.price}))}))}))}},{key:"createPaymentRequest",value:function(t,e,n,o){var r=this,i={countryCode:e,currencyCode:n,supportedNetworks:["amex","maestro","masterCard","visa","vPay"],merchantCapabilities:["supports3DS"],requiredShippingContactFields:["name","postalAddress","phone","email"],total:{label:o,amount:this._data.cartAmount}},a=new ApplePaySession(3,i);a.onvalidatemerchant=function(t){r.performValidation(t.validationURL).then((function(t){try{a.completeMerchantValidation(t)}catch(t){r.displayNotification(t.message,a)}})).catch((function(t){r.displayNotification(t,a)}))},a.onshippingcontactselected=function(t){r._data.shippingContact=t.shippingContact,void 0!==r._data.shippingContact.countryCode&&(e=r._data.shippingContact.countryCode);var n=ApplePaySession.STATUS_SUCCESS;r.getShippingMethods(e).then((function(t){if(void 0!==t.error&&null!==t.error)r.displayNotification(t.error,a);else{t.length&&(r._data.shippingMethodId=t[0].identifier,r._data.shippingAmount=t[0].amount);var e={type:"final",label:"Total amount",amount:r.totalAmount()},o=[{type:"final",label:"Subtotal",amount:r._data.cartAmount},{type:"final",label:"Shipping costs",amount:r._data.shippingAmount}];r.getShippingAmount().then((function(t){r._data.cartToken=t.cartToken,r._data.shippingMethodId=t.shippingMethod.id,r._data.shippingAmount=t.totalPrice})).catch((function(t){r.displayNotification(t,a)}));try{a.completeShippingContactSelection(n,t,e,o)}catch(t){r.displayNotification(t.message,a)}}})).catch((function(t){r.displayNotification(t,a)}))},a.onshippingmethodselected=function(t){r._data.shippingMethodId=t.shippingMethod.identifier,r.getShippingAmount().then((function(t){r._data.cartToken=t.cartToken,r._data.shippingAmount=t.totalPrice;var e=ApplePaySession.STATUS_SUCCESS,n={type:"final",label:"Total amount",amount:r.totalAmount()},o=[{type:"final",label:"Subtotal",amount:r._data.cartAmount},{type:"final",label:"Shipping costs",amount:r._data.shippingAmount}];try{a.completeShippingMethodSelection(e,n,o)}catch(t){r.displayNotification(t.message,a)}})).catch((function(t){r.displayNotification(t,a)}))},a.onpaymentmethodselected=function(){var t={type:"final",label:"Total amount",amount:r.totalAmount()},e=[{type:"final",label:"Subtotal",amount:r._data.cartAmount},{type:"final",label:"Shipping costs",amount:r._data.shippingAmount}];try{a.completePaymentMethodSelection(t,e)}catch(t){r.displayNotification(t.message,a)}},a.onpaymentauthorized=function(t){r.sendPaymentToken(t.payment).then((function(t){var e,n;if(void 0!==t.errors&&null!==t.errors&&t.errors.length>0){e=ApplePaySession.STATUS_FAILURE;var o="";t.errors.forEach((function(t){o+=t+"<br />"})),r.displayNotification(o,a)}else void 0!==t.redirectUrl&&null!==t.redirectUrl&&""!==t.redirectUrl&&(e=ApplePaySession.STATUS_SUCCESS,n=t.redirectUrl);try{a.completePayment(e)}catch(t){r.displayNotification(t.message,a)}n&&(document.location=n)})).catch((function(t){r.displayNotification(t,a)}))},a.oncancel=function(){},a.begin()}},{key:"performValidation",value:function(t){return new Promise((function(e,n){fetch("/mollie/apple-pay/validate?validationUrl="+t).then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){n()}))}))}},{key:"sendPaymentToken",value:function(t){var e=this,n={paymentToken:JSON.stringify(t.token),shippingContact:JSON.stringify(t.shippingContact),currency:e._data.currency,customer:e._data.shippingContact,productId:e._data.selectedProduct.id,shippingMethodId:e._data.shippingMethodId,cartAmount:e._data.cartAmount,cartToken:e._data.cartToken,shippingAmount:e._data.shippingAmount,totalAmount:e.totalAmount(),_csrf_token:e._data.csrfTokenAuthorize};return new Promise((function(t){e._client.post("/mollie/apple-pay/authorize",JSON.stringify(n),(function(e){return t(JSON.parse(e))}))}))}},{key:"getProductPrice",value:function(t){return new Promise((function(e,n){fetch("/mollie/apple-pay/product/"+t+"/price").then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){n()}))}))}},{key:"getShippingAmount",value:function(){var t=this;return new Promise((function(e,n){fetch("/mollie/apple-pay/shipping-costs/"+t._data.shippingMethodId+"/"+t._data.selectedProduct.id).then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){n()}))}))}},{key:"getShippingMethods",value:function(t){var e=this,n={countryCode:t,_csrf_token:e._data.csrfTokenShippingMethods};return new Promise((function(t){e._client.post("/mollie/apple-pay/shipping-methods",JSON.stringify(n),(function(e){return t(JSON.parse(e))}))}))}},{key:"displayNotification",value:function(t,e,n){var o=document.querySelector("div.flashbags.container");if(null==n&&(n="danger"),void 0!==o){var r='<div role="alert" class="alert alert-'.concat(n,'"><div class="alert-content-container"><div class="alert-content">').concat(t,"</div></div></div>");o.innerHTML=r,window.scrollTo(0,0)}}},{key:"clearNotification",value:function(){var t=document.querySelector("div.flashbags.container");void 0!==t&&(t.innerHTML="")}}])&&w(n.prototype,o),r&&w(n,r),e}(o.a);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function j(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,I(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(e,t),n=e,(o=[{key:"getClosest",value:function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null}},{key:"init",value:function(){var t=document.querySelector(".payment-method-input.applepay"),e=this.getClosest(t,".payment-method");e&&e.classList&&(window.ApplePaySession&&window.ApplePaySession.canMakePayments()||e.classList.add("d-none"))}}])&&T(n.prototype,o),r&&T(n,r),e}(o.a),q=n("u0Tz");function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e){return(D=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var R=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),L(this,U(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&D(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){this._client=new _.a,this._registerEvents()}},{key:"update",value:function(){this._registerEvents()}},{key:"_onClick",value:function(t){q.a.create(this.el),this._checkout()}},{key:"_checkout",value:function(){var t=this;this._doCheckout().catch((function(e){t.displayNotification(e)}))}},{key:"_doCheckout",value:function(){var t=this._getRequestData(),e=this;return new Promise((function(n){e._client.post(e.options.route,JSON.stringify(t),(function(t){return n(JSON.parse(t))}))})).then((function(t){var n;if(q.a.remove(e.el),void 0!==t.errors&&null!==t.errors&&t.errors.length>0){var o="";t.errors.forEach((function(t){o+=t+"<br />"})),e.displayNotification(o)}else void 0!==t.paymentUrl&&null!==t.paymentUrl&&""!==t.paymentUrl&&(n=t.paymentUrl);n&&(document.location=n)}))}},{key:"_getRequestData",value:function(){var t={productId:this.options.productId,productName:this.options.productName,productPrice:this.options.productPrice,currency:this.options.currency,currencyId:this.options.currencyId,countryCode:this.options.countryCode,shippingMethodId:this.options.shippingMethodId};return window.csrf.enabled&&"twig"===window.csrf.mode&&(t._csrf_token=this.options.csrfToken),t}},{key:"_registerEvents",value:function(){var t=this._onClick.bind(this);this.el.removeEventListener("click",t),this.el.addEventListener("click",t)}},{key:"displayNotification",value:function(t,e){var n=document.querySelector("div.flashbags.container");if(null==e&&(e="danger"),void 0!==n){var o='<div role="alert" class="alert alert-'.concat(e,'"><div class="alert-content-container"><div class="alert-content">').concat(t,"</div></div></div>");n.innerHTML=o,window.scrollTo(0,0)}}},{key:"clearNotification",value:function(){var t=document.querySelector("div.flashbags.container");void 0!==t&&(t.innerHTML="")}}])&&F(n.prototype,o),r&&F(n,r),e}(o.a);!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(R,"options",{productId:null,productName:null,productPrice:null,currency:null,currencyId:null,countryCode:null,shippingMethodId:null,route:window.router["frontend.mollie.paypal-ecs.checkout"],csrfToken:null});var H=window.PluginManager;H.register("MollieCreditCardComponents",d,"#mollie_components_credit_card"),H.register("MollieIDealIssuer",S),H.register("MollieApplePayDirect",O),H.register("MollieApplePayPaymentMethod",N),H.register("MolliePaypalExpressCheckout",R,"[data-mollie-paypal-express-checkout]")}},[["faWt","runtime","vendor-node","vendor-shared"]]]);