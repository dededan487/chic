(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[54],{113:function(e,t,n){"use strict";var c=n(0);n(187),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},114:function(e,t,n){"use strict";var c=n(0),s=n(1),a=n(6),r=n.n(a),i=(n(190),n(113));t.a=e=>{let{children:t,className:n,screenReaderLabel:a,showSpinner:o=!1,isLoading:l=!0}=e;return Object(c.createElement)("div",{className:r()(n,{"wc-block-components-loading-mask":l})},l&&o&&Object(c.createElement)(i.a,null),Object(c.createElement)("div",{className:r()({"wc-block-components-loading-mask__children":l}),"aria-hidden":l},t),l&&Object(c.createElement)("span",{className:"screen-reader-text"},a||Object(s.__)("Loading…","woocommerce")))}},187:function(e,t){},190:function(e,t){},24:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s);t.a=e=>{let t,{label:n,screenReaderLabel:s,wrapperElement:r,wrapperProps:i={}}=e;const o=null!=n,l=null!=s;return!o&&l?(t=r||"span",i={...i,className:a()(i.className,"screen-reader-text")},Object(c.createElement)(t,i,s)):(t=r||c.Fragment,o&&l&&n!==s?Object(c.createElement)(t,i,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},s)):Object(c.createElement)(t,i,n))}},254:function(e,t,n){"use strict";var c=n(11),s=n.n(c),a=n(0),r=n(87),i=n(6),o=n.n(i),l=n(113);n(255),t.a=e=>{let{className:t,showSpinner:n=!1,children:c,variant:i="contained",...u}=e;const p=o()("wc-block-components-button","wp-element-button",t,i,{"wc-block-components-button--loading":n});return Object(a.createElement)(r.a,s()({className:p},u),n&&Object(a.createElement)(l.a,null),Object(a.createElement)("span",{className:"wc-block-components-button__text"},c))}},255:function(e,t){},256:function(e,t,n){"use strict";var c=n(11),s=n.n(c),a=n(0),r=n(269),i=n(6),o=n.n(i);n(259);const l=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{var t;let{className:n,value:c,currency:i,onValueChange:u,displayType:p="text",...d}=e;const b="string"==typeof c?parseInt(c,10):c;if(!Number.isFinite(b))return null;const m=b/10**i.minorUnit;if(!Number.isFinite(m))return null;const g=o()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",n),h=null!==(t=d.decimalScale)&&void 0!==t?t:null==i?void 0:i.minorUnit,O={...d,...l(i),decimalScale:h,value:void 0,currency:void 0,onValueChange:void 0},j=u?e=>{const t=+e.value*10**i.minorUnit;u(t)}:()=>{};return Object(a.createElement)(r.a,s()({className:g,displayType:p},O,{value:m,onValueChange:j}))}},259:function(e,t){},261:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),r=n(262);t.a=e=>{let{checked:t,name:n,onChange:s,option:i}=e;const{value:o,label:l,description:u,secondaryLabel:p,secondaryDescription:d}=i;return Object(c.createElement)("label",{className:a()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${n}-${o}`},Object(c.createElement)("input",{id:`${n}-${o}`,className:"wc-block-components-radio-control__input",type:"radio",name:n,value:o,onChange:e=>s(e.target.value),checked:t,"aria-describedby":a()({[`${n}-${o}__label`]:l,[`${n}-${o}__secondary-label`]:p,[`${n}-${o}__description`]:u,[`${n}-${o}__secondary-description`]:d})}),Object(c.createElement)(r.a,{id:`${n}-${o}`,label:l,secondaryLabel:p,description:u,secondaryDescription:d}))}},262:function(e,t,n){"use strict";var c=n(0);t.a=e=>{let{label:t,secondaryLabel:n,description:s,secondaryDescription:a,id:r}=e;return Object(c.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(c.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(c.createElement)("span",{id:r&&r+"__label",className:"wc-block-components-radio-control__label"},t),n&&Object(c.createElement)("span",{id:r&&r+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},n)),(s||a)&&Object(c.createElement)("div",{className:"wc-block-components-radio-control__description-group"},s&&Object(c.createElement)("span",{id:r&&r+"__description",className:"wc-block-components-radio-control__description"},s),a&&Object(c.createElement)("span",{id:r&&r+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},a)))}},265:function(e,t,n){"use strict";var c=n(11),s=n.n(c),a=n(0),r=n(6),i=n.n(r);n(266),t.a=e=>{let{children:t,className:n,headingLevel:c,...r}=e;const o=i()("wc-block-components-title",n),l="h"+c;return Object(a.createElement)(l,s()({className:o},r),t)}},266:function(e,t){},267:function(e,t){},268:function(e,t,n){"use strict";var c=n(1);t.a=e=>{let{defaultTitle:t=Object(c.__)("Step","woocommerce"),defaultDescription:n=Object(c.__)("Step description text.","woocommerce"),defaultShowStepNumber:s=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:n},showStepNumber:{type:"boolean",default:s}}}},272:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),r=n(9),i=n(261);n(275);const o=e=>{let{className:t="",id:n,selected:s="",onChange:l,options:u=[]}=e;const p=Object(r.useInstanceId)(o),d=n||p;return u.length?Object(c.createElement)("div",{className:a()("wc-block-components-radio-control",t)},u.map(e=>Object(c.createElement)(i.a,{key:`${d}-${e.value}`,name:"radio-control-"+d,checked:e.value===s,option:e,onChange:t=>{l(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=o},273:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),r=n(1),i=n(84),o=n(10),l=Object(c.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(o.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"})),u=(n(288),n(316)),p=Object(c.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(o.Path,{d:"M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"})),d=Object(c.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(o.Path,{fillRule:"evenodd",d:"M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",clipRule:"evenodd"}));const b=e=>{switch(e){case"success":case"warning":case"info":case"default":return"polite";case"error":default:return"assertive"}},m=e=>{switch(e){case"success":return u.a;case"warning":case"info":case"error":return p;default:return d}};var g=n(254),h=n(27);t.a=e=>{let{className:t,status:n="default",children:s,spokenMessage:o=s,onRemove:u=(()=>{}),isDismissible:p=!0,politeness:d=b(n),summary:O}=e;return((e,t)=>{const n="string"==typeof e?e:Object(c.renderToString)(e);Object(c.useEffect)(()=>{n&&Object(h.speak)(n,t)},[n,t])})(o,d),Object(c.createElement)("div",{className:a()(t,"wc-block-components-notice-banner","is-"+n,{"is-dismissible":p})},Object(c.createElement)(i.a,{icon:m(n)}),Object(c.createElement)("div",{className:"wc-block-components-notice-banner__content"},O&&Object(c.createElement)("p",{className:"wc-block-components-notice-banner__summary"},O),s),!!p&&Object(c.createElement)(g.a,{className:"wc-block-components-notice-banner__dismiss",icon:l,label:Object(r.__)("Dismiss this notice","woocommerce"),onClick:e=>{"function"==typeof(null==e?void 0:e.preventDefault)&&e.preventDefault&&e.preventDefault(),u()},showTooltip:!1}))}},275:function(e,t){},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(5),s=n(3);const a=()=>{const{customerData:e,isInitialized:t}=Object(c.useSelect)(e=>{const t=e(s.CART_STORE_KEY);return{customerData:t.getCustomerData(),isInitialized:t.hasFinishedResolution("getCartData")}}),{setShippingAddress:n,setBillingAddress:a}=Object(c.useDispatch)(s.CART_STORE_KEY);return{isInitialized:t,billingAddress:e.billingAddress,shippingAddress:e.shippingAddress,setBillingAddress:a,setShippingAddress:n}}},287:function(e,t){},288:function(e,t){},289:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),r=n(1),i=n(20),o=n(7),l=n(24),u=n(88),p=n(52),d=n(292),b=n.n(d);const m=["a","b","em","i","strong","p","br"],g=["target","href","rel","name","download"],h=(e,t)=>{const n=(null==t?void 0:t.tags)||m,c=(null==t?void 0:t.attr)||g;return b.a.sanitize(e,{ALLOWED_TAGS:n,ALLOWED_ATTR:c})};var O=n(86),j=n(272),f=n(262),_=n(36),w=n(256),E=n(2);const k=e=>{const t=Object(E.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(i.decodeEntities)(e.name),value:e.rate_id,description:Object(c.createElement)(c.Fragment,null,Number.isFinite(t)&&Object(c.createElement)(w.a,{currency:Object(_.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,Object(i.decodeEntities)(e.delivery_time))}};var v=e=>{let{className:t="",noResultsMessage:n,onSelectRate:s,rates:a,renderOption:r=k,selectedRate:i}=e;const o=(null==i?void 0:i.rate_id)||"",[l,u]=Object(c.useState)(o);if(Object(c.useEffect)(()=>{o&&u(o)},[o]),Object(c.useEffect)(()=>{!l&&a[0]&&(u(a[0].rate_id),s(a[0].rate_id))},[s,a,l]),0===a.length)return n;if(a.length>1)return Object(c.createElement)(j.a,{className:t,onChange:e=>{u(e),s(e)},selected:l,options:a.map(r)});const{label:p,secondaryLabel:d,description:b,secondaryDescription:m}=r(a[0]);return Object(c.createElement)(f.a,{label:p,secondaryLabel:d,description:b,secondaryDescription:m})};n(287),t.a=e=>{let{packageId:t,className:n="",noResultsMessage:s,renderOption:d,packageData:b,collapsible:m,showItems:g}=e;const{selectShippingRate:j}=Object(u.a)(),{dispatchCheckoutEvent:f}=Object(p.a)(),_=document.querySelectorAll(".wc-block-components-shipping-rates-control__package").length>1,w=null!=g?g:_,E=null!=m?m:_,k=Object(c.createElement)(c.Fragment,null,(E||w)&&Object(c.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title",dangerouslySetInnerHTML:{__html:h(b.name)}}),w&&Object(c.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(b.items).map(e=>{const t=Object(i.decodeEntities)(e.name),n=e.quantity;return Object(c.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},Object(c.createElement)(l.a,{label:n>1?`${t} × ${n}`:""+t,screenReaderLabel:Object(r.sprintf)(
/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
Object(r._n)("%1$s (%2$d unit)","%1$s (%2$d units)",n,"woocommerce"),t,n)}))}))),S=Object(c.useCallback)(e=>{j(e,t),f("set-selected-shipping-rate",{shippingRateId:e})},[f,t,j]),N=Object(O.a)(S,1e3),y={className:n,noResultsMessage:s,rates:b.shipping_rates,onSelectRate:N,selectedRate:b.shipping_rates.find(e=>e.selected),renderOption:d};return E?Object(c.createElement)(o.Panel,{className:"wc-block-components-shipping-rates-control__package",initialOpen:!1,title:k},Object(c.createElement)(v,y)):Object(c.createElement)("div",{className:a()("wc-block-components-shipping-rates-control__package",n)},k,Object(c.createElement)(v,y))}},293:function(e,t,n){"use strict";var c=n(0),s=n(6),a=n.n(s),r=n(265);n(267);const i=e=>{let{title:t,stepHeadingContent:n}=e;return Object(c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(c.createElement)(r.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&Object(c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},n))};t.a=e=>{let{id:t,className:n,title:s,legend:r,description:o,children:l,disabled:u=!1,showStepNumber:p=!0,stepHeadingContent:d=(()=>{})}=e;const b=r||s?"fieldset":"div";return Object(c.createElement)(b,{className:a()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":p,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!r&&!s)&&Object(c.createElement)("legend",{className:"screen-reader-text"},r||s),!!s&&Object(c.createElement)(i,{title:s,stepHeadingContent:d()}),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!o&&Object(c.createElement)("p",{className:"wc-block-components-checkout-step__description"},o),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__content"},l)))}},316:function(e,t,n){"use strict";var c=n(0),s=n(10);const a=Object(c.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(s.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));t.a=a},337:function(e,t,n){"use strict";var c=n(0),s=n(1),a=n(114),r=n(7),i=n(224),o=n(30),l=n(40),u=n(88),p=n(273),d=n(25),b=n(289),m=n(27);const g=e=>{let{packages:t,showItems:n,collapsible:s,noResultsMessage:a,renderOption:r}=e;return t.length?Object(c.createElement)(c.Fragment,null,t.map(e=>{let{package_id:t,...i}=e;return Object(c.createElement)(b.a,{key:t,packageId:t,packageData:i,collapsible:s,showItems:n,noResultsMessage:a,renderOption:r})})):null};t.a=e=>{let{shippingRates:t,isLoadingRates:n,className:h,collapsible:O,showItems:j,noResultsMessage:f,renderOption:_,context:w}=e;Object(c.useEffect)(()=>{var e,c;n||(e=Object(i.a)(t),c=Object(i.b)(t),1===e?Object(m.speak)(Object(s.sprintf)(
/* translators: %d number of shipping options found. */
Object(s._n)("%d shipping option was found.","%d shipping options were found.",c,"woocommerce"),c)):Object(m.speak)(Object(s.sprintf)(
/* translators: %d number of shipping packages packages. */
Object(s._n)("Shipping option searched for %d package.","Shipping options searched for %d packages.",e,"woocommerce"),e)+" "+Object(s.sprintf)(
/* translators: %d number of shipping options available. */
Object(s._n)("%d shipping option was found","%d shipping options were found",c,"woocommerce"),c)))},[n,t]);const{extensions:E,receiveCart:k,...v}=Object(o.a)(),S={className:h,collapsible:O,showItems:j,noResultsMessage:f,renderOption:_,extensions:E,cart:v,components:{ShippingRatesControlPackage:b.a},context:w},{isEditor:N}=Object(l.a)(),{hasSelectedLocalPickup:y,selectedRates:R}=Object(u.a)(),C=Object(d.a)(R)?Object.values(R):[],A=C.every(e=>e===C[0]);return Object(c.createElement)(a.a,{isLoading:n,screenReaderLabel:Object(s.__)("Loading shipping rates…","woocommerce"),showSpinner:!0},y&&"woocommerce/cart"===w&&t.length>1&&!A&&!N&&Object(c.createElement)(p.a,{className:"wc-block-components-notice",isDismissible:!1,status:"warning"},Object(s.__)("Multiple shipments must have the same pickup location","woocommerce")),Object(c.createElement)(r.ExperimentalOrderShippingPackages.Slot,S),Object(c.createElement)(r.ExperimentalOrderShippingPackages,null,Object(c.createElement)(g,{packages:t,noResultsMessage:f,renderOption:_})))}},384:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(2),s=n(0),a=n(5),r=n(3),i=n(286),o=n(88);const l=()=>{const{needsShipping:e}=Object(o.a)(),{useShippingAsBilling:t,prefersCollection:n}=Object(a.useSelect)(e=>({useShippingAsBilling:e(r.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),prefersCollection:e(r.CHECKOUT_STORE_KEY).prefersCollection()})),{__internalSetUseShippingAsBilling:l}=Object(a.useDispatch)(r.CHECKOUT_STORE_KEY),{billingAddress:u,setBillingAddress:p,shippingAddress:d,setShippingAddress:b}=Object(i.a)(),m=Object(s.useCallback)(e=>{p({email:e})},[p]),g=Object(s.useCallback)(e=>{p({phone:e})},[p]),h=Object(s.useCallback)(e=>{b({phone:e})},[b]),O=Object(c.getSetting)("forcedBillingAddress",!1);return{shippingAddress:d,billingAddress:u,setShippingAddress:b,setBillingAddress:p,setEmail:m,setBillingPhone:g,setShippingPhone:h,defaultAddressFields:c.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:l,needsShipping:e,showShippingFields:!O&&e&&!n,showShippingMethods:e&&!n,showBillingFields:!e||!t||n,forcedBillingAddress:O,useBillingAsShipping:O||n}}},429:function(e,t){},500:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(6),a=n.n(s),r=n(112),i=n(293),o=n(384),l=n(5),u=n(3),p=n(1),d=n(88),b=n(286),m=n(337),g=n(224),h=n(108),O=n(36),j=n(256),f=n(40),_=n(32),w=n(7),E=n(20),k=n(2),v=n(273);n(429);const S=e=>{const t=Object(k.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(E.decodeEntities)(e.name),value:e.rate_id,description:Object(E.decodeEntities)(e.description),secondaryLabel:Object(c.createElement)(j.a,{currency:Object(O.getCurrencyFromPriceResponse)(e),value:t}),secondaryDescription:Object(E.decodeEntities)(e.delivery_time)}};var N=e=>{let{noShippingPlaceholder:t=null}=e;const{isEditor:n}=Object(f.a)(),{shippingRates:s,needsShipping:a,isLoadingRates:r,hasCalculatedShipping:i,isCollectable:o}=Object(d.a)(),{shippingAddress:l}=Object(b.a)(),u=o?s.map(e=>({...e,shipping_rates:e.shipping_rates.filter(e=>!Object(g.c)(e.method_id))})):s;if(!a)return null;const O=Object(g.a)(s);if(!i&&!O)return Object(c.createElement)("p",null,Object(p.__)("Shipping options will be displayed here after entering your full shipping address.","woocommerce"));const j=Object(h.c)(l);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(w.StoreNoticesContainer,{context:_.d.SHIPPING_METHODS}),n&&!O?t:Object(c.createElement)(m.a,{noResultsMessage:Object(c.createElement)(c.Fragment,null,j?Object(c.createElement)(v.a,{isDismissible:!1,className:"wc-block-components-shipping-rates-control__no-results-notice",status:"warning"},Object(p.__)("There are no shipping options available. Please check your shipping address.","woocommerce")):Object(p.__)("Add a shipping address to view shipping options.","woocommerce")),renderOption:S,collapsible:!1,shippingRates:u,isLoadingRates:r,context:"woocommerce/checkout"}))},y=n(268),R={...Object(y.a)({defaultTitle:Object(p.__)("Shipping options","woocommerce"),defaultDescription:""}),className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}},shippingCostRequiresAddress:{type:"boolean",default:!1}};t.default=Object(r.withFilteredAttributes)(R)(e=>{let{title:t,description:n,showStepNumber:s,children:r,className:p}=e;const d=Object(l.useSelect)(e=>e(u.CHECKOUT_STORE_KEY).isProcessing()),{showShippingMethods:b}=Object(o.a)();return b?Object(c.createElement)(i.a,{id:"shipping-option",disabled:d,className:a()("wc-block-checkout__shipping-option",p),title:t,description:n,showStepNumber:s},Object(c.createElement)(N,null),r):null})},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(12);function s(e,t,n){var s=this,a=Object(c.useRef)(null),r=Object(c.useRef)(0),i=Object(c.useRef)(null),o=Object(c.useRef)([]),l=Object(c.useRef)(),u=Object(c.useRef)(),p=Object(c.useRef)(e),d=Object(c.useRef)(!0);p.current=e;var b=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var m=!!(n=n||{}).leading,g=!("trailing"in n)||!!n.trailing,h="maxWait"in n,O=h?Math.max(+n.maxWait||0,t):null;return Object(c.useEffect)((function(){return d.current=!0,function(){d.current=!1}}),[]),Object(c.useMemo)((function(){var e=function(e){var t=o.current,n=l.current;return o.current=l.current=null,r.current=e,u.current=p.current.apply(n,t)},n=function(e,t){b&&cancelAnimationFrame(i.current),i.current=b?requestAnimationFrame(e):setTimeout(e,t)},c=function(e){if(!d.current)return!1;var n=e-a.current,c=e-r.current;return!a.current||n>=t||n<0||h&&c>=O},j=function(t){return i.current=null,g&&o.current?e(t):(o.current=l.current=null,u.current)},f=function(){var e=Date.now();if(c(e))return j(e);if(d.current){var s=e-a.current,i=e-r.current,o=t-s,l=h?Math.min(o,O-i):o;n(f,l)}},_=function(){for(var p=[],b=0;b<arguments.length;b++)p[b]=arguments[b];var g=Date.now(),O=c(g);if(o.current=p,l.current=s,a.current=g,O){if(!i.current&&d.current)return r.current=a.current,n(f,t),m?e(a.current):u.current;if(h)return n(f,t),e(a.current)}return i.current||n(f,t),u.current};return _.cancel=function(){i.current&&(b?cancelAnimationFrame(i.current):clearTimeout(i.current)),r.current=0,o.current=a.current=l.current=i.current=null},_.isPending=function(){return!!i.current},_.flush=function(){return i.current?j(Date.now()):u.current},_}),[m,h,t,O,g,b])}}}]);