(function(window){var svgSprite='<svg><symbol id="icon-ai66" viewBox="0 0 1024 1024"><path d="M366.036116 723.970716c-38.862099 0-70.634734 31.823799-70.634734 70.637804 0 38.916335 31.773657 70.689992 70.634734 70.689992 38.916335 0 70.689992-31.773657 70.689992-70.689992C436.726108 755.794515 404.95245 723.970716 366.036116 723.970716M154.06847 158.700465l0 70.692039 70.688969 0 127.204124 268.479731-49.525973 84.766592c-3.464915 10.55745-7.034207 24.737404-7.034207 35.348066 0 38.862099 31.773657 70.635757 70.634734 70.635757l423.940408 0 0-70.635757-409.81162 0c-3.572362 0-7.036253-3.571339-7.036253-7.091512l0-3.51915 31.823799-60.029188 261.392312 0c28.202319 0 49.41955-14.180977 60.030212-35.347043l127.150912-229.614561c7.140631-7.142677 7.140631-10.610662 7.140631-17.699104 0-21.217231-14.179954-35.293831-35.346019-35.293831l-522.885931 0-31.828916-70.692039L154.06847 158.700465zM719.334627 723.970716c-38.862099 0-70.635757 31.823799-70.635757 70.637804 0 38.916335 31.774681 70.689992 70.635757 70.689992 38.868239 0 70.641897-31.773657 70.641897-70.689992C789.976524 755.794515 758.202866 723.970716 719.334627 723.970716"  ></path></symbol><symbol id="icon-jianhao" viewBox="0 0 1024 1024"><path d="M512 32C246.912 32 32 246.912 32 512c0 265.088 214.912 480 480 480s480-214.912 480-480c0-265.088-214.912-480-480-480z m256 512H256v-64h512v64z" fill="" ></path></symbol><symbol id="icon-jiahao" viewBox="0 0 1024 1024"><path d="M828.02 196.518C743.477 112.384 631.108 66.05 511.546 66.05c-119.558 0-231.954 46.333-316.5 130.467-84.578 84.162-131.17 196.112-131.17 315.195 0 119.112 46.592 231.028 131.135 315.189 84.548 84.133 196.946 130.467 316.507 130.467 119.56 0 231.96-46.334 316.474-130.467 84.611-84.19 131.198-196.14 131.169-315.222 0.03-119.086-46.529-231-131.141-315.162z m-92.63 347.167H543.525v191.863c0 17.683-14.326 31.975-31.98 31.975-17.646 0-31.973-14.292-31.973-31.975V543.685H287.711c-17.648 0-31.972-14.324-31.972-31.972 0-17.653 14.324-31.98 31.972-31.98h191.863v-191.86c0-17.649 14.326-31.975 31.973-31.975 17.654 0 31.98 14.326 31.98 31.974v191.861h191.862c17.682 0 31.973 14.327 31.973 31.98 0 17.648-14.291 31.972-31.973 31.972z m0 0" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)