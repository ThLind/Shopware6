(window.webpackJsonp=window.webpackJsonp||[]).push([["mollie-payments"],{tHPJ:function(t,e,n){"use strict";n.r(e);n("wcNg");var o=n("FGIj");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n,o,r,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l,p,f,d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,u(e).apply(this,arguments))}var n,o,r,l,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){var t=this,e=null,n=document.querySelector(this.getSelectors().mollieController);n&&n.remove(),"/"===this.options.shopUrl.substr(-1)&&(this.options.shopUrl=this.options.shopUrl.substr(0,this.options.shopUrl.length-1));var o=document.querySelector(this.getSelectors().cardHolder),r=document.querySelector(this.getSelectors().componentsContainer),i=document.querySelector(this.getSelectors().paymentForm),c=document.querySelectorAll(this.getSelectors().radioInputs),a=document.querySelector(this.getSelectors().submitButton);r&&o&&(e=Mollie(this.options.profileId,{locale:this.options.locale,testmode:this.options.testMode})),this.createComponentsInputs(e,[this.getInputFields().cardHolder,this.getInputFields().cardNumber,this.getInputFields().expiryDate,this.getInputFields().verificationCode]),c.forEach((function(e){e.addEventListener("change",(function(){t.showComponents()}))})),a.addEventListener("click",(function(n){n.preventDefault(),t.submitForm(n,e,i)}))}},{key:"getSelectors",value:function(){return{cardHolder:"#cardHolder",componentsContainer:"div.mollie-components-credit-card",creditCardRadioInput:'#confirmPaymentForm input[type="radio"].creditcard',mollieController:"div.mollie-components-controller",paymentForm:"#confirmPaymentForm",radioInputs:'#confirmPaymentForm input[type="radio"]',submitButton:'#confirmPaymentForm button[type="submit"]'}}},{key:"getDefaultProperties",value:function(){return{styles:{base:{backgroundColor:"#fff",fontSize:"14px",padding:"10px 10px","::placeholder":{color:"rgba(68, 68, 68, 0.2)"}},valid:{color:"#090"},invalid:{backgroundColor:"#fff1f3"}}}}},{key:"getInputFields",value:function(){return{cardHolder:{name:"cardHolder",id:"#cardHolder",errors:"cardHolderError"},cardNumber:{name:"cardNumber",id:"#cardNumber",errors:"cardNumberError"},expiryDate:{name:"expiryDate",id:"#expiryDate",errors:"expiryDateError"},verificationCode:{name:"verificationCode",id:"#verificationCode",errors:"verificationCodeError"}}}},{key:"showComponents",value:function(){var t=document.querySelector(this.getSelectors().creditCardRadioInput),e=document.querySelector(this.getSelectors().componentsContainer);e&&(void 0===t||!1===t.checked?e.classList.add("d-none"):e.classList.remove("d-none"))}},{key:"createComponentsInputs",value:function(t,e){var n=this;e.forEach((function(e,o,r){var i=t.createComponent(e.name,n.getDefaultProperties());i.mount(e.id),r[o][e.name]=i,i.addEventListener("change",(function(t){var n=document.getElementById("".concat(e.name)),o=document.getElementById("".concat(e.errors));t.error&&t.touched?(n.classList.add("error"),o.textContent=t.error):(n.classList.remove("error"),o.textContent="")})),i.addEventListener("focus",(function(){n.setFocus("".concat(e.id),!0)})),i.addEventListener("blur",(function(){n.setFocus("".concat(e.id),!1)}))}))}},{key:"setFocus",value:function(t,e){document.querySelector(t).classList.toggle("is-focused",e)}},{key:"disableForm",value:function(){var t=document.querySelector(this.getSelectors().submitButton);t&&(t.disabled=!0)}},{key:"enableForm",value:function(){var t=document.querySelector(this.getSelectors().submitButton);t&&(t.disabled=!1)}},{key:"submitForm",value:(l=regeneratorRuntime.mark((function t(e,n,o){var r,i,c,a,u,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),this.disableForm(),null!=(r=document.querySelector(this.getSelectors().creditCardRadioInput))&&!1!==r.checked||!o||o.submit(),!r||!0!==r.checked){t.next=17;break}return(i=document.getElementById("".concat(this.getInputFields().verificationCode.errors))).textContent="",t.next=9,n.createToken();case 9:if(c=t.sent,a=c.token,!(u=c.error)){t.next=16;break}return this.enableForm(),i.textContent=u.message,t.abrupt("return");case 16:u||(s=this.options.shopUrl+"/mollie/components/store-card-token/"+this.options.customerId+"/"+a)&&o&&fetch(s,{headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(){document.getElementById("cardToken").setAttribute("value",a),o.submit()})).catch(o.submit());case 17:case"end":return t.stop()}}),t,this)})),p=function(){var t=this,e=arguments;return new Promise((function(n,o){var r=l.apply(t,e);function c(t){i(r,n,o,c,a,"next",t)}function a(t){i(r,n,o,c,a,"throw",t)}c(void 0)}))},function(t,e,n){return p.apply(this,arguments)})}])&&c(n.prototype,o),r&&c(n,r),e}(o.a);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n,o,r,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(o,r)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}f={customerId:null,locale:null,profileId:null,shopUrl:null,testMode:!0},(p="options")in(l=d)?Object.defineProperty(l,p,{value:f,enumerable:!0,configurable:!0,writable:!0}):l[p]=f;var S=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,b(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){var t=document.querySelector("div.mollie-ideal-issuer");if(null!=t){var e=t.getAttribute("data-shop-url"),n=document.querySelector("#iDealIssuer");"/"===e.substr(-1)&&(e=e.substr(0,e.length-1));var o=t.getAttribute("data-customer-id"),r=document.querySelector("#confirmPaymentForm"),i=document.querySelector('#confirmPaymentForm button[type="submit"]'),c=document.querySelectorAll('#confirmPaymentForm input[type="radio"]'),a=document.querySelector('#confirmPaymentForm input[type="radio"].ideal'),u=function(){void 0===a||!1===a.checked?t.classList.add("d-none"):t.classList.remove("d-none")};u(),c.forEach((function(t){t.addEventListener("change",(function(){u()}))})),r.addEventListener("submit",function(){var t,c=(t=regeneratorRuntime.mark((function t(c){var u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),null!==i&&(i.disabled=!0),setTimeout((function(){r.submit()}),2e3),null!=a&&!1!==a.checked&&null!=n||r.submit(),null!=a&&!0===a.checked&&null!=n&&(u=e+"/mollie/ideal/store-issuer/"+o+"/"+n.value,fetch(u,{headers:{"Content-Type":"application/json; charset=utf-8"}}).then(r.submit()).catch(r.submit()));case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function c(t){y(i,o,r,c,a,"next",t)}function a(t){y(i,o,r,c,a,"throw",t)}c(void 0)}))});return function(t){return c.apply(this,arguments)}}())}}}])&&h(n.prototype,o),r&&h(n,r),e}(o.a),P=n("k8s9");function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=function(t){function e(){var t,n,o,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return o=this,n=!(r=(t=A(e)).call.apply(t,[this].concat(c)))||"object"!==w(r)&&"function"!=typeof r?C(o):r,function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(C(n),"options",{from:null,selectedProduct:null,shippingContact:null,shippingMethodId:null,cartAmount:0,cartToken:"",csrfTokenAuthorize:"",csrfTokenShippingMethods:"",currency:"",shippingAmount:0}),n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,t),n=e,(o=[{key:"init",value:function(){var t=this;t._client=new P.a(window.accessKey,window.contextToken),window.ApplePaySession&&ApplePaySession.canMakePayments()&&this.isApplePayAvailable().then((function(e){void 0!==e.available&&!0===e.available&&t.enableApplePayButtons()}))}},{key:"totalAmount",value:function(){return this.options.cartAmount+this.options.shippingAmount}},{key:"isApplePayAvailable",value:function(){return new Promise((function(t,e){fetch("/mollie/apple-pay/available").then((function(t){return t.json()})).then((function(e){return t(e)})).catch((function(t){e()}))}))}},{key:"enableApplePayButtons",value:function(){var t=this,e=document.querySelectorAll(".js-apple-pay");e.length&&e.forEach((function(e){e.classList.remove("d-none"),e.addEventListener("click",(function(n){n.preventDefault(),t.clearNotification(),t.options.form=e.parentNode;var o=t.options.form.querySelectorAll('input[name="_csrf_token"]');o.length>1&&(t.options.csrfTokenAuthorize=o[0].value,t.options.csrfTokenShippingMethods=o[1].value);var r=t.options.form.querySelector('input[name="id"]').value,i=t.options.form.querySelector('input[name="name"]').value,c=t.options.form.querySelector('input[name="price"]').value,a=t.options.form.querySelector('input[name="countryCode"]').value,u=t.options.form.querySelector('input[name="currency"]').value,s=t.getProductPrice(r);t.options.cartAmount=c,t.options.currency=u,t.createPaymentRequest("product",a,u,i),s.then((function(e){t.options.selectedProduct=e.data,t.options.cartAmount=t.options.selectedProduct.price}))}))}))}},{key:"createPaymentRequest",value:function(t,e,n,o){var r=this,i={countryCode:e,currencyCode:n,supportedNetworks:["amex","maestro","masterCard","visa","vPay"],merchantCapabilities:["supports3DS"],requiredShippingContactFields:["name","postalAddress","phone","email"],total:{label:o,amount:this.options.cartAmount}},c=new ApplePaySession(3,i);c.onvalidatemerchant=function(t){r.performValidation(t.validationURL).then((function(t){try{c.completeMerchantValidation(t)}catch(t){r.displayNotification(t.message,c)}})).catch((function(t){r.displayNotification(t,c)}))},c.onshippingcontactselected=function(t){r.options.shippingContact=t.shippingContact,void 0!==r.options.shippingContact.countryCode&&(e=r.options.shippingContact.countryCode);var n=ApplePaySession.STATUS_SUCCESS;r.getShippingMethods(e).then((function(t){if(void 0!==t.error&&null!==t.error)r.displayNotification(t.error,c);else{t.length&&(r.options.shippingMethodId=t[0].identifier,r.options.shippingAmount=t[0].amount);var e={type:"final",label:"Total amount",amount:r.totalAmount()},o=[{type:"final",label:"Subtotal",amount:r.options.cartAmount},{type:"final",label:"Shipping costs",amount:r.options.shippingAmount}];r.getShippingAmount().then((function(t){r.options.cartToken=t.cartToken,r.options.shippingMethodId=t.shippingMethod.id,r.options.shippingAmount=t.totalPrice})).catch((function(t){r.displayNotification(t,c)}));try{c.completeShippingContactSelection(n,t,e,o)}catch(t){r.displayNotification(t.message,c)}}})).catch((function(t){r.displayNotification(t,c)}))},c.onshippingmethodselected=function(t){r.options.shippingMethodId=t.shippingMethod.identifier,r.getShippingAmount().then((function(t){r.options.cartToken=t.cartToken,r.options.shippingAmount=t.totalPrice;var e=ApplePaySession.STATUS_SUCCESS,n={type:"final",label:"Total amount",amount:r.totalAmount()},o=[{type:"final",label:"Subtotal",amount:r.options.cartAmount},{type:"final",label:"Shipping costs",amount:r.options.shippingAmount}];try{c.completeShippingMethodSelection(e,n,o)}catch(t){r.displayNotification(t.message,c)}})).catch((function(t){r.displayNotification(t,c)}))},c.onpaymentmethodselected=function(){var t={type:"final",label:"Total amount",amount:r.totalAmount()},e=[{type:"final",label:"Subtotal",amount:r.options.cartAmount},{type:"final",label:"Shipping costs",amount:r.options.shippingAmount}];try{c.completePaymentMethodSelection(t,e)}catch(t){r.displayNotification(t.message,c)}},c.onpaymentauthorized=function(t){r.sendPaymentToken(t.payment).then((function(t){var e,n;if(void 0!==t.errors&&null!==t.errors&&t.errors.length>0){e=ApplePaySession.STATUS_FAILURE;var o="";t.errors.forEach((function(t){o+=t+"<br />"})),r.displayNotification(o,c)}else void 0!==t.redirectUrl&&null!==t.redirectUrl&&""!==t.redirectUrl&&(e=ApplePaySession.STATUS_SUCCESS,n=t.redirectUrl);try{c.completePayment(e)}catch(t){r.displayNotification(t.message,c)}n&&(document.location=n)})).catch((function(t){r.displayNotification(t,c)}))},c.oncancel=function(){},c.begin()}},{key:"performValidation",value:function(t){return new Promise((function(e,n){fetch("/mollie/apple-pay/validate?validationUrl="+t).then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){n()}))}))}},{key:"sendPaymentToken",value:function(t){var e=this,n={paymentToken:JSON.stringify(t.token),shippingContact:JSON.stringify(t.shippingContact),currency:e.options.currency,customer:e.options.shippingContact,productId:e.options.selectedProduct.id,shippingMethodId:e.options.shippingMethodId,cartAmount:e.options.cartAmount,cartToken:e.options.cartToken,shippingAmount:e.options.shippingAmount,totalAmount:e.totalAmount(),_csrf_token:e.options.csrfTokenAuthorize};return new Promise((function(t){e._client.post("/mollie/apple-pay/authorize",JSON.stringify(n),(function(e){return t(JSON.parse(e))}))}))}},{key:"getProductPrice",value:function(t){return new Promise((function(e,n){fetch("/mollie/apple-pay/product/"+t+"/price").then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){n()}))}))}},{key:"getShippingAmount",value:function(){var t=this;return new Promise((function(e,n){fetch("/mollie/apple-pay/shipping-costs/"+t.options.shippingMethodId+"/"+t.options.selectedProduct.id).then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){n()}))}))}},{key:"getShippingMethods",value:function(t){var e=this,n={countryCode:t,_csrf_token:e.options.csrfTokenShippingMethods};return new Promise((function(t){e._client.post("/mollie/apple-pay/shipping-methods",JSON.stringify(n),(function(e){return t(JSON.parse(e))}))}))}},{key:"displayNotification",value:function(t,e,n){var o=document.querySelector("div.flashbags.container");if(null==n&&(n="danger"),void 0!==o){var r='<div role="alert" class="alert alert-'.concat(n,'"><div class="alert-content-container"><div class="alert-content">').concat(t,"</div></div></div>");o.innerHTML=r,window.scrollTo(0,0)}}},{key:"clearNotification",value:function(){var t=document.querySelector("div.flashbags.container");void 0!==t&&(t.innerHTML="")}}])&&k(n.prototype,o),r&&k(n,r),e}(o.a);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function j(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var q=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),j(this,I(e).apply(this,arguments))}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(e,t),n=e,(o=[{key:"getClosest",value:function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null}},{key:"init",value:function(){var t=document.querySelector(".payment-method-input.applepay"),e=this.getClosest(t,".payment-method");e&&e.classList&&(window.ApplePaySession&&window.ApplePaySession.canMakePayments()||e.classList.add("d-none"))}}])&&T(n.prototype,o),r&&T(n,r),e}(o.a),N=window.PluginManager;N.register("MollieCreditCardComponents",d,"#mollie_components_credit_card"),N.register("MollieIDealIssuer",S),N.register("MollieApplePayDirect",_),N.register("MollieApplePayPaymentMethod",q)}},[["tHPJ","runtime","vendor-node","vendor-shared"]]]);