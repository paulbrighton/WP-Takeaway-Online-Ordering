!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(o,e){if(1&e&&(o=r(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)r.d(t,n,function(e){return o[e]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=1)}([function(e,o){e.exports=jQuery},function(e,o,t){e.exports=t(5)},,,,function(e,o,t){"use strict";t.r(o);var o=t(0),n=t.n(o);n()(function(){var e=0;function o(){document.getElementById("myNav").style.width="0%",e=0}n()(".openbtn").click(function(){0===e?(document.getElementById("myNav").style.width="100%",e=1):o()}),n()(".closebtn").click(function(){o()})}),n()(".c-navigation").on("mouseenter",".menu-item-has-children",function(e){n()(e.currentTarget).addClass("open"),console.log("mouse enter")}).on("mouseleave",".menu-item-has-children",function(e){n()(e.currentTarget).removeClass("open")}),n()(".c-navigation").on("click",".menu .menu-button",function(e){e.preventDefault(),e.stopPropagation();var o=n()(e.currentTarget),t=o.parent(),e=t.parent();e.hasClass("open")?(e.add(e.find(".menu-item.open")).removeClass("open"),t.add(e.find("a")).attr("aria-expanded","false"),o.find(".menu-button-show").attr("aria-hidden","false"),o.find(".menu-button-hide").attr("aria-hidden","true")):(e.siblings(".open").find(">a>.menu-button").trigger("click"),e.addClass("open"),t.attr("aria-expanded","true"),o.find(".menu-button-show").attr("aria-hidden","true"),o.find(".menu-button-hide").attr("aria-hidden","false"))}),n()(document).click(function(e){n()(".menu-item.open").length&&n()(".menu > .menu-item.open > a > .menu-button").trigger("click")}),n()(".our-food-overlay--main").hover(function(){n()(".food-main").addClass("over-text-none"),n()(".food-main-btn").addClass("over-text-block")},function(){n()(".food-main").removeClass("over-text-none"),n()(".food-main-btn").removeClass("over-text-block")}),n()(".our-food-overlay--dim-sum").hover(function(){n()(".food-dim-sum").addClass("over-text-none"),n()(".food-dim-sum-btn").addClass("over-text-block")},function(){n()(".food-dim-sum").removeClass("over-text-none"),n()(".food-dim-sum-btn").removeClass("over-text-block")}),n()(".our-food-overlay--thai").hover(function(){n()(".food-thai").addClass("over-text-none"),n()(".food-thai-btn").addClass("over-text-block")},function(){n()(".food-thai").removeClass("over-text-none"),n()(".food-thai-btn").removeClass("over-text-block")}),n()(".our-food-overlay--appetisers").hover(function(){n()(".food-appetisers").addClass("over-text-none"),n()(".food-appetisers-btn").addClass("over-text-block")},function(){n()(".food-appetisers").removeClass("over-text-none"),n()(".food-appetisers-btn").removeClass("over-text-block")}),n()(".our-food-overlay--noodles").hover(function(){n()(".food-noodles").addClass("over-text-none"),n()(".food-noodles-btn").addClass("over-text-block")},function(){n()(".food-noodles").removeClass("over-text-none"),n()(".food-noodles-btn").removeClass("over-text-block")}),n()(document).ready(function(){n()(".c-post__gallery").slick({arrows:!1,adaptiveHeight:!0}),n()(".most_recent_widget").slick(),wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(e){e.partial.widgetIdParts&&"_themename_most_recent_widget"===e.partial.widgetIdParts.idBase&&e.container.find(".most_recent_widget").slick()})}),n()(document).ready(function(){n()("#form-submit").prop("disabled",!0)})}]);