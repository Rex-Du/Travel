(function(window){var svgSprite='<svg><symbol id="icon-jiantouarrow486" viewBox="0 0 1024 1024"><path d="M171.15136 341.00224l684.02176 0-342.016 341.99552L171.15136 341.00224z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M949.217812 877.584326 728.039535 656.473439c-0.823795-0.826831-1.687501-1.592264-2.574744-2.320858 47.224446-61.931514 75.272371-139.271974 75.272371-223.165686 0-203.455785-164.941204-368.390231-368.405326-368.390231-203.465145 0-368.405326 164.934446-368.405326 368.390231 0 203.456808 164.940181 368.390231 368.405326 368.390231 84.056792 0 161.536525-28.152177 223.529931-75.538417 0.711227 0.86674 1.457248 1.713015 2.261599 2.51938l221.238655 221.140563c16.054285 16.142655 44.891212 13.5936 64.173138-5.716188C962.816062 922.473699 965.334522 893.756657 949.217812 877.584326zM104.860436 430.987918c0-180.849928 146.614063-327.457983 327.471401-327.457983 180.856315 0 327.471401 146.608056 327.471401 327.457983 0 88.709391-35.291184 169.164794-92.582305 228.134861-1.14308 0.980327-2.265693 2.006703-3.353512 3.092431-1.111356 1.111311-2.160288 2.257413-3.161122 3.427052-58.992949 57.419757-139.545797 92.802616-228.374461 92.802616C251.474499 758.445902 104.860436 611.838869 104.860436 430.987918z"  ></path></symbol><symbol id="icon-jiantou4" viewBox="0 0 1024 1024"><path d="M256 512l512 512 0-135.776-376.224-376.224 376.224-376.256 0-135.745z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)