!function n(a,i,r){function s(e,t){if(!i[e]){if(!a[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(l)return l(e,!0);throw new Error("Cannot find module '"+e+"'")}t=i[e]={exports:{}};a[e][0].call(t.exports,function(t){var o=a[e][1][t];return s(o||t)},t,t.exports,n,a,i,r)}return i[e].exports}for(var l="function"==typeof require&&require,t=0;t<r.length;t++)s(r[t]);return s}({1:[function(t,o,e){const n=$("#header");getComputedStyle(document.body);function a(){if($(".s-tabs-01__nav").length){let t=$(".s-tabs-01__nav .nav-item-dropdown"),o=Math.round(t.outerWidth(!0));var e=$(".s-tabs-01__nav").outerWidth(!0);$(".s-tabs-01__nav .nav-item").each(function(){o+=Math.round($(this).outerWidth(!0))}),o>=e&&($(".s-tabs-01__nav .nav-item .nav-link").last().clone().removeClass("nav-link").prependTo(".s-tabs-01__nav .dropdown-menu"),$(".s-tabs-01__nav .nav-item").last().remove(),t.css("visibility","visible"),a())}}$(window).on("load",function(){$('[data-toggle="popover"]').popover(),$('[data-toggle="tooltip"]').tooltip(),a()}),$(window).on("resize orientationchange",function(){a()}),$(window).on("scroll",function(){}),$("[data-toggle=burger]").on("click tap",function(t){t.preventDefault(),n.data("top",n.offset().top),n.toggleClass("is-opened")}).on("keypress",function(t){13==t.which&&(t.preventDefault(),n.data("top",n.offset().top),n.toggleClass("is-opened"))}),$(".input-group .form-control").on("focus",function(t){t.preventDefault(),$(this).parent(".input-group").toggleClass("has-focus")}).on("blur",function(t){t.preventDefault(),$(this).parent(".input-group").toggleClass("has-focus")}),$("body").on("keydown input","textarea[data-expandable]",function(){this.style.removeProperty("height"),this.style.height=this.scrollHeight+2+"px"}).on("mousedown focus","textarea[data-expandable]",function(){this.style.removeProperty("height"),this.style.height=this.scrollHeight+2+"px"}),$("[data-target-conseil]").on("focus",function(t){t.preventDefault();t=$(this).data("target-conseil");$(t).toggleClass("is-openable")}).on("blur",function(t){t.preventDefault();t=$(this).data("target-conseil");$(t).toggleClass("is-openable")}),$("[data-clipboard=copy]").on("click tap",function(){$(this).tooltip("show");var t=$(this).parents(".input-group"),t=$(t).find(".form-control").val();navigator.clipboard.writeText(t).then(()=>{}).catch(()=>{})}),$("[data-clipboard=copy]").on("blur",function(){$(this).tooltip("hide")})},{}]},{},[1]);