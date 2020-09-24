!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueFinalModal={},e.Vue)}(this,(function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=[];var a=!1;if("undefined"!=typeof window){var r={get passive(){a=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),i=[],d=!1,u=-1,c=void 0,f=void 0,v=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},s=function(e){var t=e||window.event;return!!v(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},m=function(e,t){if(e){if(!i.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i),[n]),l?(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-u;!v(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?s(e):e.stopPropagation())}(t,e)},d||(document.addEventListener("touchmove",s,a?{passive:!1}:void 0),d=!0)):function(e){if(void 0===f){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(f=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},y=function(e){e?(i=i.filter((function(t){return t.targetElement!==e})),l?(e.ontouchstart=null,e.ontouchmove=null,d&&0===i.length&&(document.removeEventListener("touchmove",s,a?{passive:!1}:void 0),d=!1)):i.length||(void 0!==f&&(document.body.style.paddingRight=f,f=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};var p={name:"VueFinalModal",props:{modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=n(e);return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}},transition:{type:String,default:"vfm"},overlayTransition:{type:String,default:"vfm"},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1}},emits:["update:modelValue","before-open","opened","before-close","closed"],setup:function(e,n){var a=n.emit,r="enter",l="entering",i="leave",d="leavng",u=Symbol("vfm"),c=t.ref(null),f=t.ref(null),v=t.ref(null),s=t.ref(!1),p=t.reactive({modal:!1,overlay:!1}),h=t.ref(null),b=t.ref(null),g=t.computed((function(){return(e.hideOverlay||h.value===i)&&b.value===i})),w=t.computed((function(){return"boolean"==typeof e.zIndex?e.attach?"unset":e.zIndexBase+2*(v.value||0):e.zIndex}));function S(){if(e.modelValue){var n=T();if(n||!1===e.attach){!1!==e.attach&&n.appendChild(c.value);var a=o.findIndex((function(e){return e.uid===u}));-1!==a&&o.splice(a,1),o.push({uid:u,getAttachElement:T,modalStackIndex:v,visibility:p,handleLockScroll:B,hideOverlay:e.hideOverlay}),v.value=o.length-1,B(),o.filter((function(e){return e.uid!==u})).forEach((function(e,t){e.getAttachElement()===n&&(e.modalStackIndex.value=t,e.visibility.overlay=!1)})),s.value=!0,t.nextTick((function(){p.overlay=!0,p.modal=!0}))}else!1!==n&&console.warn("Unable to locate target ".concat(e.attach))}else e.lockScroll&&y(f.value)}function E(){var t=o.findIndex((function(e){return e.uid===u}));if(-1!==t&&o.splice(t,1),o.length>0){var n=o[o.length-1];n.handleLockScroll(),!n.hideOverlay&&(n.visibility.overlay=!0)}else e.lockScroll&&y(f.value);p.overlay=!1,p.modal=!1}function B(){e.lockScroll?m(f.value,{allowTouchMove:function(e){for(;e&&e!==document.body;){if(null!==e.getAttribute("body-scroll-lock-ignore"))return!0;e=e.parentElement}}}):y(f.value)}function T(){return!1!==e.attach&&("string"==typeof e.attach?!!window&&window.document.querySelector(e.attach):e.attach)}return t.watch((function(){return e.modelValue}),(function(e){S(),e||E()})),t.watch((function(){return e.lockScroll}),B),t.watch((function(){return e.hideOverlay}),(function(t){e.modelValue&&!t&&(p.overlay=!0)})),t.watch((function(){return e.attach}),S),t.watch(g,(function(e){e&&(s.value=!1)}),{flush:"post"}),t.onMounted((function(){S()})),t.onBeforeUnmount((function(){E(),c.value.remove()})),{root:c,vfmContent:f,visible:s,visibility:p,calculateZIndex:w,beforeOverlayEnter:function(){h.value=l},afterOverlayEnter:function(){h.value=r},beforeOverlayLeave:function(){h.value=d},afterOverlayLeave:function(){h.value=i},beforeModalEnter:function(){a("before-open"),b.value=l},afterModalEnter:function(){b.value=r,a("opened")},beforeModalLeave:function(){a("before-close"),b.value=d},afterModalLeave:function(){b.value=i,v.value=null,a("closed")}}}};const h=t.withScopeId("data-v-2836fdb5"),b=h((function(e,n,o,a,r,l){return o.ssr||a.visible?t.withDirectives((t.openBlock(),t.createBlock("div",{key:0,ref:"root",style:{zIndex:a.calculateZIndex},class:["vfm vfm--inset",[!1===o.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":o.preventClick}]]},[t.createVNode(t.Transition,{name:o.overlayTransition,"onBefore-enter":a.beforeOverlayEnter,"onAfter-enter":a.afterOverlayEnter,"onBefore-leave":a.beforeOverlayLeave,"onAfter-leave":a.afterOverlayLeave},{default:h(()=>[t.withDirectives(t.createVNode("div",{class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",o.overlayClass]},null,2),[[t.vShow,!o.hideOverlay&&a.visibility.overlay]])]),_:1},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"]),t.createVNode(t.Transition,{name:o.transition,"onBefore-enter":a.beforeModalEnter,"onAfter-enter":a.afterModalEnter,"onBefore-leave":a.beforeModalLeave,"onAfter-leave":a.afterModalLeave},{default:h(()=>[t.withDirectives(t.createVNode("div",{class:["vfm__container vfm--absolute vfm--inset",[o.classes,{"vfm--cursor-pointer":o.clickToClose}]],onClick:n[2]||(n[2]=t=>o.clickToClose&&e.$emit("update:modelValue",!1))},[t.renderSlot(e.$slots,"content-before"),t.renderSlot(e.$slots,"content",{},()=>[t.createVNode("div",{ref:"vfmContent","body-scroll-lock-ignore":"",class:["vfm__content vfm--cursor-auto",[o.contentClass,{"vfm--prevent-auto":o.preventClick}]],onClick:n[1]||(n[1]=t.withModifiers(()=>{},["stop"]))},[t.renderSlot(e.$slots,"default")],2)]),t.renderSlot(e.$slots,"content-after")],2),[[t.vShow,a.visibility.modal]])]),_:3},8,["name","onBefore-enter","onAfter-enter","onBefore-leave","onAfter-leave"])],6)),[[t.vShow,!o.ssr||a.visible]]):t.createCommentVNode("v-if",!0)}));!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-2836fdb5] {\n  position: fixed;\n}\n.vfm--absolute[data-v-2836fdb5] {\n  position: absolute;\n}\n.vfm--inset[data-v-2836fdb5] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-2836fdb5] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-2836fdb5] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-2836fdb5] {\n  pointer-events: auto;\n}\n.vfm--cursor-pointer[data-v-2836fdb5] {\n  cursor: pointer;\n}\n.vfm--cursor-auto[data-v-2836fdb5] {\n  cursor: auto;\n}\n.vfm-enter-active[data-v-2836fdb5],\n.vfm-leave-active[data-v-2836fdb5] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-2836fdb5],\n.vfm-leave-to[data-v-2836fdb5] {\n  opacity: 0;\n}\n"),p.render=b,p.__scopeId="data-v-2836fdb5",p.__file="lib/VueFinalModal.vue";var g=p;e.VueFinalModal=g,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=VueFinalModal.umd.js.map
