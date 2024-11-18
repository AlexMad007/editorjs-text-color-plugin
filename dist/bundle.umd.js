(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".picker_wrapper.popup{z-index:99;width:170px;margin:0;box-shadow:0 0 10px 1px #eaeaea;background:#fff}.picker_arrow{display:none}.layout_default .picker_slider,.layout_default .picker_selector{padding:5px}.colorPlugin.ce-inline-tool{width:38px;border-radius:4px}.colorPlugin.ce-inline-tool--active svg{fill:#3c99ff}#color-left-btn{display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;width:24px;height:100%}#color-left-btn:hover{border-radius:4px 0 0 4px;background:#cbcbcb33}#color-text{padding:0 4px}#color-btn-text{height:15px}.ce-popover__container{overflow:visible}.ce-popover--inline .ce-popover__items{overflow:hidden}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(l,r){typeof exports=="object"&&typeof module<"u"?module.exports=r():typeof define=="function"&&define.amd?define(r):(l=typeof globalThis<"u"?globalThis:l||self,l.TextColor=r())})(this,function(){"use strict";function l(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function r(i){if(i.__esModule)return i;var t=i.default;if(typeof t=="function"){var o=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};o.prototype=t.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(i).forEach(function(e){var s=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(o,e,s.get?s:{enumerable:!0,get:function(){return i[e]}})}),o}class v extends HTMLElement{static get observedAttributes(){return["disabled","icon","loading","href","htmltype"]}constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
        <style>
        :host{ 
            position:relative; 
            display:inline-flex; 
            padding: .25em .625em;
            box-sizing:border-box; 
            vertical-align: middle;
            line-height: 1.8;
            width: 5px;
            overflow:hidden; 
            align-items:center;
            justify-content: center;
            font-size: 14px; 
            color: var(--fontColor,#333);  
            border-radius: var(--borderRadius,.25em);
            background: var(--fontColor,#333); 
            transition:background .3s,box-shadow .3s,border-color .3s,color .3s;
        }
        :host([shape="circle"]){ 
            border-radius:50%; 
        }
        /*
        :host(:not([disabled]):active){
            z-index:1;
            transform:translateY(.1em);
        }
        */
        :host([disabled]),:host([loading]){
            pointer-events: none; 
            opacity:.6; 
        }
        :host([block]){ 
            display:flex; 
        }
        :host([disabled]:not([type])){ 
            background:rgba(0,0,0,.1); 
        }
        :host([disabled]) .btn,:host([loading]) .btn{ 
            cursor: not-allowed; 
            pointer-events: all; 
        }
        :host(:not([type="primary"]):not([type="danger"]):not([disabled]):hover),
        :host(:not([type="primary"]):not([type="danger"]):focus-within),
        :host([type="flat"][focus]){ 
            color:var(--themeColor,#42b983); 
            border-color: var(--themeColor,#42b983); 
        }
        :host(:not([type="primary"]):not([type="danger"])) .btn::after{ 
            background-image: radial-gradient(circle, var(--themeColor,#42b983) 10%, transparent 10.01%); 
        }
        :host([type="primary"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--themeColor,#42b983));
        }
        :host([type="danger"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--dangerColor,#ff7875));
        }
        :host([type="dashed"]){ 
            border-style:dashed 
        }
        :host([type="flat"]),:host([type="primary"]),:host([type="danger"]){ 
            border:0;
            padding: calc( .25em + 1px ) calc( .625em + 1px );
        }
        :host([type="flat"]) .btn::before{ 
            content:''; 
            position:absolute; 
            background:var(--themeColor,#42b983);
            pointer-events:none; 
            left:0; 
            right:0; 
            top:0; 
            bottom:0; 
            opacity:0; 
            transition:.3s;
        }
        :host([type="flat"]:not([disabled]):hover) .btn::before{ 
            opacity:.1 
        }
        :host(:not([disabled]):hover){ 
            z-index:1 
        }
        :host([type="flat"]:focus-within) .btn:before,
        :host([type="flat"][focus]) .btn:before{ 
            opacity:.2; 
        }
        :host(:focus-within){ 
            /*box-shadow: 0 0 10px rgba(0,0,0,0.1);*/ 
        }
        .btn{ 
            background:none; 
            outline:0; 
            border:0; 
            position: 
            absolute; 
            left:0; 
            top:0;
            width:100%;
            height:100%;
            padding:0;
            user-select: none;
            cursor: unset;
        }
        xy-loading{ 
            margin-right: 0.35em;  
        }
        ::-moz-focus-inner{
            border:0;
        }
        .btn::before{
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left:0;
            top:0;
            transition:.2s;
            background:#fff;
            opacity:0;
        }
        :host(:not([disabled]):active) .btn::before{ 
            opacity:.2;
        }
        .btn::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            left: var(--x,0); 
            top: var(--y,0);
            pointer-events: none;
            background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
            background-repeat: no-repeat;
            background-position: 50%;
            transform: translate(-50%,-50%) scale(10);
            opacity: 0;
            transition: transform .3s, opacity .8s;
        }
        .btn:not([disabled]):active::after {
            transform: translate(-50%,-50%) scale(0);
            opacity: .3;
            transition: 0s;
        }
        xy-icon{
            margin-right: 0.35em;
            transition: none;
        }
        :host(:empty) xy-icon{
            margin: auto;
        }
        :host(:empty){
            padding: .65em;
        }
        :host([type="flat"]:empty),:host([type="primary"]:empty){ 
            padding: calc( .65em + 1px );
        }
        ::slotted(xy-icon){
            transition: none;
        }
        :host([href]){
            cursor:pointer;
        }
        </style>
        <${this.href?"a":"button"} ${this.htmltype?`type="${this.htmltype}"`:""} ${this.download&&this.href?`download="${this.download}"`:""} ${this.href?`href="${this.href}" target="${this.target}" rel="${this.rel}"`:""} class="btn" id="btn"></${this.href?"a":"button"}>${!this.loading&&this.icon&&this.icon!=="null"?`<xy-icon id="icon" name=${this.icon}></xy-icon>`:""}<slot></slot>
        `}focus(){this.btn.focus()}get disabled(){return this.getAttribute("disabled")!==null}get toggle(){return this.getAttribute("toggle")!==null}get htmltype(){return this.getAttribute("htmltype")}get name(){return this.getAttribute("name")}get checked(){return this.getAttribute("checked")!==null}get href(){return this.getAttribute("href")}get target(){return this.getAttribute("target")||"_blank"}get rel(){return this.getAttribute("rel")}get download(){return this.getAttribute("download")}get icon(){return this.getAttribute("icon")}get loading(){return this.getAttribute("loading")!==null}set icon(t){this.setAttribute("icon",t)}set htmltype(t){this.setAttribute("htmltype",t)}set href(t){this.setAttribute("href",t)}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}set checked(t){t===null||t===!1?this.removeAttribute("checked"):this.setAttribute("checked","")}set loading(t){t===null||t===!1?this.removeAttribute("loading"):this.setAttribute("loading","")}connectedCallback(){this.btn=this.shadowRoot.getElementById("btn"),this.ico=this.shadowRoot.getElementById("icon"),this.load=document.createElement("xy-loading"),this.load.style.color="inherit",this.btn.addEventListener("mousedown",t=>{if(!this.disabled){const{left:o,top:e}=this.getBoundingClientRect();this.style.setProperty("--x",`${t.clientX-o}px`),this.style.setProperty("--y",`${t.clientY-e}px`)}}),this.addEventListener("click",()=>{this.toggle&&(this.checked=!this.checked)}),this.btn.addEventListener("keydown",t=>{switch(t.keyCode){case 13:t.stopPropagation();break}})}attributeChangedCallback(t,o,e){t==="disabled"&&this.btn&&(e!==null?(this.btn.setAttribute("disabled","disabled"),this.href&&this.btn.removeAttribute("href")):(this.btn.removeAttribute("disabled"),this.href&&(this.btn.href=this.href))),t==="loading"&&this.btn&&(e!==null?(this.shadowRoot.prepend(this.load),this.btn.setAttribute("disabled","disabled")):(this.shadowRoot.removeChild(this.load),this.btn.removeAttribute("disabled"))),t==="icon"&&this.ico&&(this.ico.name=e),t==="href"&&this.btn&&(this.disabled||(this.btn.href=e)),t==="htmltype"&&this.btn&&(this.btn.type=e)}}customElements.get("xy-button")||customElements.define("xy-button",v);class k extends HTMLElement{static get observedAttributes(){return["disabled"]}constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
        <style>
        :host {
            display:inline-flex;
        }
        ::slotted(xy-button:not(:first-of-type):not(:last-of-type)){
            border-radius:0;
        }
        ::slotted(xy-button){
            margin:0!important;
        }
        ::slotted(xy-button:not(:first-of-type)){
            margin-left:-1px!important;
        }
        ::slotted(xy-button[type]:not([type="dashed"]):not(:first-of-type)){
            margin-left:1px!important;
        }
        ::slotted(xy-button:first-of-type){
            border-top-right-radius: 0;
            border-bottom-right-radius: 0px;
        }
        ::slotted(xy-button:last-of-type){
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        </style>
        <slot></slot>
        `}get disabled(){return this.getAttribute("disabled")!==null}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}}customElements.get("xy-button-group")||customElements.define("xy-button-group",k);class d extends HTMLElement{static get observedAttributes(){return["open","title","oktext","canceltext","loading","type"]}constructor(t){super();const o=this.attachShadow({mode:"open"});o.innerHTML=`
        <style>
        :host{
            position:absolute;
            display:flex;
            box-shadow: 2px 2px 15px rgba(0,0,0,0.15);
            box-sizing: border-box;
            transform:scale(0);
            opacity:0.5;
            border-radius: 3px;
            z-index:10;
            transition:.3s cubic-bezier(.645, .045, .355, 1);
            transform-origin:inherit;
            background:#fff;
            visibility:hidden;
        }
        .popcon-content{
            box-sizing: border-box;
            display:flex;
            width: max-content;
            padding: 0 15px;
            flex:1;
            flex-direction:column;
        }
        .popcon-title {
            line-height: 30px;
            padding: 15px 30px 0 0;
            font-weight: 700;
            font-size: 14px;
            color: #4c5161;
            user-select: none;
            cursor: default;
        }
        .popcon-body {
            flex: 1;
            padding: 5px 0 15px 0;
        }
        .popcon-footer {
            padding: 3px 0 15px 0;
            margin-top: -3px;
            text-align: right;
            white-space: nowrap;
        }
        .btn-close{
            position:absolute;
            right:10px;
            top:10px;
            border:0;
        }
        .popcon-footer xy-button {
            font-size: .8em;
            margin-left: .8em;
        }
        .popcon-type{
            display:flex;
            width:30px;
            height:30px;
            font-size:22px;
            margin: 15px -10px 0 15px;
        }
        /*
        :host(:not([type="confirm"])) .popcon-type,
        :host(:not([type="confirm"])) .popcon-footer,
        :host(:not([type])) .popcon-title,
        :host(:not([type])) .btn-close{
            display:none;
        }
        */
        :host([type="confirm"]){
            min-width:250px;
        }
        :host([type="confirm"]) .popcon-body{
            font-size:14px;
        }
        :host(:not([type])) .popcon-content,:host(:not([type])) .popcon-body{
            padding: 0;
        }
        </style>
          ${(t||this.type)==="confirm"?'<xy-icon id="popcon-type" class="popcon-type" name="question-circle" color="var(--waringColor,#faad14)"></xy-icon>':""}
            <div class="popcon-content">
                ${(t||this.type)!==null?`<div class="popcon-title" id="title">${this.title}</div><xy-button class="btn-close" id="btn-close" icon="close"></xy-button>`:""}
                <div class="popcon-body">
                    <slot></slot>
                </div>
                ${(t||this.type)==="confirm"?`<div class="popcon-footer"><xy-button id="btn-cancel">${this.canceltext}</xy-button><xy-button id="btn-submit" type="primary">${this.oktext}</xy-button></div>`:""}
            </div>
        `}get open(){return this.getAttribute("open")!==null}get stopfocus(){return this.getAttribute("stopfocus")!==null}get title(){return this.getAttribute("title")||"popcon"}get type(){return this.getAttribute("type")}get oktext(){return this.getAttribute("oktext")||"confirm"}get canceltext(){return this.getAttribute("canceltext")||"cancel"}get loading(){return this.getAttribute("loading")!==null}set title(t){this.setAttribute("title",t)}set type(t){t===null||t===!1?this.removeAttribute("type"):this.setAttribute("type",t)}set oktext(t){this.setAttribute("oktext",t)}set canceltext(t){this.setAttribute("canceltext",t)}set open(t){t===null||t===!1?(this.removeAttribute("open"),this.parentNode.removeAttribute("open")):(this.setAttribute("open",""),this.parentNode.setAttribute("open",""),this.loading&&(this.loading=!1))}set loading(t){t===null||t===!1?this.removeAttribute("loading"):this.setAttribute("loading","")}connectedCallback(){this.remove=!1,this.type&&(this.titles=this.shadowRoot.getElementById("title"),this.btnClose=this.shadowRoot.getElementById("btn-close")),this.type==="confirm"&&(this.btnCancel=this.shadowRoot.getElementById("btn-cancel"),this.btnSubmit=this.shadowRoot.getElementById("btn-submit")),this.addEventListener("transitionend",t=>{t.propertyName==="transform"&&this.open&&(this.type==="confirm"&&this.btnSubmit.focus(),this.type==="pane"&&this.btnClose.focus(),this.dispatchEvent(new CustomEvent("open")))}),this.addEventListener("transitionend",t=>{t.propertyName==="transform"&&!this.open&&(this.remove&&this.parentNode.removeChild(this),this.dispatchEvent(new CustomEvent("close")))}),this.addEventListener("click",t=>{t.target.closest("[autoclose]")&&(this.open=!1,window.xyActiveElement.focus())}),this.type&&this.btnClose.addEventListener("click",()=>{this.open=!1,window.xyActiveElement.focus()}),this.type==="confirm"&&(this.btnCancel.addEventListener("click",async()=>{this.dispatchEvent(new CustomEvent("cancel")),this.open=!1,window.xyActiveElement.focus()}),this.btnSubmit.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("submit")),this.loading||(this.open=!1,window.xyActiveElement.focus())}))}attributeChangedCallback(t,o,e){t==="loading"&&this.shadowRoot&&(e!==null?this.btnSubmit.loading=!0:this.btnSubmit.loading=!1),t==="title"&&this.titles&&e!==null&&(this.titles.innerHTML=e),t==="oktext"&&this.btnSubmit&&e!==null&&(this.btnSubmit.innerHTML=e),t==="canceltext"&&this.btnCancel&&e!==null&&(this.btnCancel.innerHTML=e)}}customElements.get("xy-popcon")||customElements.define("xy-popcon",d);class C extends HTMLElement{static get observedAttributes(){return["title","oktext","canceltext","loading","type"]}constructor(){super();const t=this.attachShadow({mode:"open"});t.innerHTML=`
        <style>
        :host {
            display:inline-block;
            position:relative;
            overflow:visible;
        }
        :host([dir="top"]) ::slotted(xy-popcon){
            bottom:100%;
            left:50%;
            transform:translate(-50%,-10px) scale(0);
            transform-origin: center bottom;
        }
        :host([dir="top"]) ::slotted(xy-popcon[open]),
        :host([dir="top"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="top"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-50%,-10px) scale(1);
        }
        :host([dir="right"]) ::slotted(xy-popcon){
            left:100%;
            top:50%;
            transform:translate(10px,-50%) scale(0);
            transform-origin: left;
        }
        :host([dir="right"]) ::slotted(xy-popcon[open]),
        :host([dir="right"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="right"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px,-50%) scale(1);
        }
        :host([dir="bottom"]) ::slotted(xy-popcon){
            top:100%;
            left:50%;
            transform:translate(-50%,10px) scale(0);
            transform-origin: center top;
        }
        :host([dir="bottom"]) ::slotted(xy-popcon[open]),
        :host([dir="bottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-50%,10px) scale(1);
        }
        :host([dir="left"]) ::slotted(xy-popcon){
            right:100%;
            top:50%;
            transform:translate(-10px,-50%) scale(0);
            transform-origin: right;
        }
        :host([dir="left"]) ::slotted(xy-popcon[open]),
        :host([dir="left"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="left"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px,-50%) scale(1);
        }
        :host([dir="lefttop"]) ::slotted(xy-popcon){
            right:100%;
            top:0;
            transform:translate(-10px) scale(0);
            transform-origin: right top;
        }
        :host([dir="lefttop"]) ::slotted(xy-popcon[open]),
        :host([dir="lefttop"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="lefttop"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px) scale(1);
        }
        :host([dir="leftbottom"]) ::slotted(xy-popcon){
            right:100%;
            bottom:0;
            transform:translate(-10px) scale(0);
            transform-origin: right bottom;
        }
        :host([dir="leftbottom"]) ::slotted(xy-popcon[open]),
        :host([dir="leftbottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="leftbottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(-10px) scale(1);
        }
        :host([dir="topleft"]) ::slotted(xy-popcon){
            bottom:100%;
            left:0;
            transform:translate(0,-10px) scale(0);
            transform-origin: left bottom;
        }
        :host([dir="topleft"]) ::slotted(xy-popcon[open]),
        :host([dir="topleft"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="topleft"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,-10px) scale(1);
        }
        :host([dir="topright"]) ::slotted(xy-popcon){
            bottom:100%;
            right:0;
            transform:translate(0,-10px) scale(0);
            transform-origin: right bottom;
        }
        :host([dir="topright"]) ::slotted(xy-popcon[open]),
        :host([dir="topright"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="topright"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,-10px) scale(1);
        }
        :host([dir="righttop"]) ::slotted(xy-popcon){
            left:100%;
            top:0;
            transform:translate(10px) scale(0);
            transform-origin: left top;
        }
        :host([dir="righttop"]) ::slotted(xy-popcon[open]),
        :host([dir="righttop"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="righttop"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px) scale(1);
        }
        :host([dir="rightbottom"]) ::slotted(xy-popcon){
            left:100%;
            bottom:0;
            transform:translate(10px) scale(0);
            transform-origin: left bottom;
        }
        :host([dir="rightbottom"]) ::slotted(xy-popcon[open]),
        :host([dir="rightbottom"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="rightbottom"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(10px) scale(1);
        }
        :host([dir="bottomleft"]) ::slotted(xy-popcon),
        :host(:not([dir])) ::slotted(xy-popcon){
            left:0;
            top:100%;
            transform:translate(0,10px) scale(0);
            transform-origin: left top;
        }
        :host(:not([dir])) ::slotted(xy-popcon[open]),
        :host(:not([dir])[trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host(:not([dir])[trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon),
        :host([dir="bottomleft"]) ::slotted(xy-popcon[open]),
        :host([dir="bottomleft"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottomleft"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,10px) scale(1);
        }
        :host([dir="bottomright"]) ::slotted(xy-popcon){
            right:0;
            top:100%;
            transform:translate(0,10px) scale(0);
            transform-origin: right top;
        }
        :host([dir="bottomright"]) ::slotted(xy-popcon[open]),
        :host([dir="bottomright"][trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([dir="bottomright"][trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            transform:translate(0,10px) scale(1);
        }
        :host([trigger="contextmenu"]) ::slotted(xy-popcon){
            right:auto;
            bottom:auto;
            left:var(--x,0);
            top:var(--y,100%);
            transform-origin: left top;
            transform:translate(5px,5px) scale(0);
            transition: .15s;
        }
        :host([trigger="contextmenu"]) ::slotted(xy-popcon[open]){
            transform:translate(5px,5px) scale(1);
        }
        :host ::slotted(xy-popcon[open]),
        :host([trigger="hover"]:not([disabled]):hover) ::slotted(xy-popcon),
        :host([trigger="focus"]:not([disabled]):focus-within) ::slotted(xy-popcon){
            opacity:1;
            visibility:visible;
        }
        slot{
            border-radius: inherit;
        }
        </style>
        <slot></slot>
        `}get title(){return this.getAttribute("title")||"popcon"}get trigger(){return this.getAttribute("trigger")}get disabled(){return this.getAttribute("disabled")!==null}get type(){return this.getAttribute("type")}get accomplish(){return this.getAttribute("accomplish")!==null}get content(){return this.getAttribute("content")}get oktext(){return this.getAttribute("oktext")}get canceltext(){return this.getAttribute("canceltext")}get dir(){return this.getAttribute("dir")}get loading(){return this.getAttribute("loading")!==null}set dir(t){this.setAttribute("dir",t)}set title(t){this.setAttribute("title",t)}set type(t){this.setAttribute("type",t)}set oktext(t){this.setAttribute("oktext",t)}set canceltext(t){this.setAttribute("canceltext",t)}set loading(t){t===null||t===!1?this.removeAttribute("loading"):this.setAttribute("loading","")}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}show(t){if(t.stopPropagation(),this.popcon=this.querySelector("xy-popcon"),this.disabled)(this.popcon||this).dispatchEvent(new CustomEvent("submit"));else if(this.popcon||(this.popcon=new d(this.type),this.popcon.type=this.type,this.appendChild(this.popcon),this.popcon.title=this.title||"popover",this.popcon.innerHTML=this.content||"",this.type==="confirm"&&(this.popcon.oktext=this.oktext||"confirm",this.popcon.canceltext=this.canceltext||"cancel",this.popcon.onsubmit=()=>this.dispatchEvent(new CustomEvent("submit")),this.popcon.oncancel=()=>this.dispatchEvent(new CustomEvent("cancel")))),this.trigger==="contextmenu"){const{x:o,y:e}=this.getBoundingClientRect();this.popcon.style.setProperty("--x",`${t.clientX-o}px`),this.popcon.style.setProperty("--y",`${t.clientY-e}px`),this.popcon.open=!0}else(t.path||t.composedPath&&t.composedPath()).includes(this.popcon)||(window.xyActiveElement=document.activeElement,this.accomplish?this.popcon.open=!0:this.popcon.open=!this.popcon.open);return this.popcon}connectedCallback(){this.popcon=this.querySelector("xy-popcon"),this.trigger&&this.trigger!=="click"||this.addEventListener("click",this.show),this.trigger==="contextmenu"&&this.addEventListener("contextmenu",t=>{t.preventDefault(),(t.path||t.composedPath&&t.composedPath()).includes(this.popcon)||this.show(t)}),document.addEventListener("mousedown",t=>{const o=t.path||t.composedPath&&t.composedPath();(this.popcon&&!o.includes(this.popcon)&&!this.popcon.loading&&!o.includes(this.children[0])||this.trigger==="contextmenu"&&!o.includes(this.popcon)&&t.which==="1")&&(this.popcon.open=!1)})}attributeChangedCallback(t,o,e){t==="loading"&&this.popcon&&(e!==null?this.popcon.loading=!0:this.popcon.loading=!1),t==="title"&&this.popcon&&e!==null&&(this.popcon.title=e),t==="oktext"&&this.popcon&&e!==null&&(this.popcon.oktext=e),t==="canceltext"&&this.popcon&&e!==null&&(this.popcon.canceltext=e)}}customElements.get("xy-popover")||customElements.define("xy-popover",C);const c="editor-js-text-color-cache";function a(i){if(E(i)){const t=w(i);return A(t)}return i}function w(i){const t=/\((.*?)\)/.exec(i);return t?t[1]:null}function A(i){return window.getComputedStyle(document.documentElement).getPropertyValue(i)}function E(i){return T(i)&&i.includes("--")}function T(i){return typeof i=="string"||i instanceof String}function h(i,t){let o;return(...e)=>{o||(o=setTimeout(()=>{i(...e),o=null},t))}}function u(i,t){return sessionStorage.setItem(`${c}-${t}`,JSON.stringify(i)),i}function f(i,t){const o=sessionStorage.getItem(`${c}-${t}`);return o?JSON.parse(o):i}function g(i,t){sessionStorage.setItem(`${c}-${t}-custom`,JSON.stringify(i))}function b(i){const t=sessionStorage.getItem(`${c}-${i}-custom`);return t?JSON.parse(t):null}const m="ce-inline-toolbar__dropdown",y="ce-conversion-toolbar--showed",P=Object.freeze(Object.defineProperty({__proto__:null,CONVERTER_BTN:m,CONVERTER_PANEL:y,getCustomColorCache:b,getDefaultColorCache:f,handleCSSVariables:a,setCustomColorCache:g,setDefaultColorCache:u,throttle:h},Symbol.toStringTag,{value:"Module"})),$=["#ff1300","#EC7878","#9C27B0","#673AB7","#3F51B5","#0070FF","#03A9F4","#00BCD4","#4CAF50","#8BC34A","#CDDC39","#FFE500","#FFBF00","#FF9800","#795548","#9E9E9E","#5A5A5A","#FFF"];class x extends HTMLElement{static get observedAttributes(){return["disabled","dir"]}constructor(t={}){super();const o=this.attachShadow({mode:"open"});this.colorCollections=t.colorCollections||$,this.onColorPicked=t.onColorPicked,this.defaulColor=a(t.defaultColor||this.colorCollections[0]),this.pluginType=t.type,this.hasCustomPicker=t.hasCustomPicker,this.customColor=b(this.pluginType),o.innerHTML=`
        <style>
        :host{
            display:inline-block;
            width:15px;
            font-size:14px;
            border: none;
        }
        :host([block]){
            display:block;
        }
        :host([disabled]){
            pointer-events:none;
        }
        
        :host(:focus-within) xy-popover,:host(:hover) xy-popover{ 
            z-index: 2;
        }
        input[type="color"]{
            -webkit-appearance: none;
            outline: none;
            border: none;
        }
        xy-popover{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
       
        }
        xy-popover:hover {
            border-radius: 0 4px 4px 0;
            background: rgba(203, 203, 203, 0.2);
        }
        .color-btn {
            border: 1px solid #cab9b9;
            width: 8px;
            height: 8px;
            padding: 0;
            opacity: 0.9;
            color: var(--themeColor, #42b983);
            background: var(--themeColor, #42b983);
            font-weight: bolder;
            border-radius: 2px;
        }
        .color-btn:hover {
            opacity: 1;
            z-index: auto;
        }
        xy-popover{
            display:block;
            position: static;
        }
        #custom-picker {
            position: relative;
            top: -1px;
            background-color: rgb(250, 250, 250);
            border-color: rgb(255 118 21) rgb(245 80 80 / 74%) #89c1c9 #95d5b6;
            border-width: 3px;
            border-radius: 8px;
            height: 18px;
        }
        .pop-footer{
            display:flex;
            justify-content:flex-end;
            padding:0 .8em .8em;
        }
        .pop-footer xy-button{
            font-size: .8em;
            margin-left: .8em;
        }
        .color-btn::before{
            content:'';
            position:absolute;
            left:5px;
            top:5px;
            right:5px;
            bottom:5px;
            z-index:-1;
            background: linear-gradient(45deg, #ddd 25%,transparent 0,transparent 75%,#ddd 0 ), linear-gradient(45deg, #ddd 25%, transparent 0, transparent 75%, #ddd 0);
            background-position: 0 0,5px 5px;
            background-size: 10px 10px;
        }
        .color-sign {
           max-width: 220px;
           padding: 10px;
           display:grid;
           cursor: default;
           grid-template-columns: repeat(auto-fit, minmax(15px, 1fr));
           grid-gap: 7px;     
        }
        .color-sign>button {
            position: relative;
            width: 16px;
            height: 16px;
            border-radius: 6px;
            border: 1px solid #b8b9b49e;
            outline: 0;
            opacity: 0.9;
        }
        .color-sign>button:hover {
            cursor: pointer;
            opacity: 1;
        }
        .color-section {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 14px;
            height: 30px;
        }
        .color-fire-btn {
            font-size: 17px;
            font-weight: bold;
            height: 28px;
            padding-top: 8px;
            padding-right: 1px;
            margin-left: 3px;
            padding-left: 3px;
            border-radius: 5px 0 0 5px;
        }
        .color-fire-btn:hover {
            font-size: 17px;
            font-weight: bold;
            background: rgba(203, 203, 203, 0.49);
            border-radius: 5px 0 0 5px;
        }
        </style>
        <section class="color-section">
            <xy-popover id="popover" ${this.dir?`div='${this.dir}'`:""}>
                <xy-button class="color-btn" id="color-btn" ${this.disabled?"disabled":""}>_</xy-button>
                <xy-popcon id="popcon">
                    <div class="color-sign" id="colors">
                        ${this.hasCustomPicker&&'<button id="custom-picker" class="rainbow-mask"/>'||""}
                        ${this.colorCollections.map(e=>`<button class="color-cube" style="background-color:${e}" data-color="${e}"></button>`).join("")}
                    </div>
                </xy-popcon>
            </xy-popover>
        </section>`}focus(){this.colorBtn.focus()}connectedCallback(){this.$popover=this.shadowRoot.getElementById("popover"),this.popcon=this.shadowRoot.getElementById("popcon"),this.colorBtn=this.shadowRoot.getElementById("color-btn"),this.colors=this.shadowRoot.getElementById("colors"),this.colors.addEventListener("click",t=>{const o=t.target.closest("button");o&&o.id!=="custom-picker"&&(this.nativeclick=!0,this.value=a(o.dataset.color),this.onColorPicked(this.value))}),this.$popover.addEventListener("click",()=>this.closeConverter()),this.hasCustomPicker&&this.setupCustomPicker(),this.value=this.defaultvalue}closeConverter(){if(document.getElementsByClassName(y)[0]){const o=document.getElementsByClassName(m)[0];o==null||o.click()}}disconnectedCallback(){this.pickerInput&&document.body.removeChild(this.pickerInput)}setupCustomPicker(){let t=!1;this.customPicker=this.shadowRoot.getElementById("custom-picker");const{customPicker:o}=this;o.style.backgroundColor=this.customColor,this.customPicker.addEventListener("click",()=>{if(t){t=!1;return}this.pickerInput&&document.body.removeChild(this.pickerInput),this.pickerInput=document.createElement("input");const{pickerInput:e}=this,s=this.popcon.getBoundingClientRect();e.setAttribute("type","color"),e.value=this.customColor,e.style.position="fixed",e.style.left=`${s.x+3}px`,e.style.top=`${s.y+10}px`,e.style.pointerEvents="none",e.style.zIndex="999",e.style.opacity="0",e.addEventListener("input",h(p=>{this.nativeclick=!0,this.value=a(p.target.value),this.onColorPicked(this.value),g(this.value,this.pluginType),o.style.backgroundColor=this.value,t=!0,o.click()},30)),document.body.appendChild(e),setTimeout(()=>{e.focus(),e.click()},0)})}get defaultvalue(){return this.defaulColor}get value(){return this.$value}get type(){return this.getAttribute("type")}get disabled(){return this.getAttribute("disabled")!==null}get dir(){return this.getAttribute("dir")}set dir(t){this.setAttribute("dir",t)}set disabled(t){t===null||t===!1?this.removeAttribute("disabled"):this.setAttribute("disabled","")}set defaultvalue(t){this.setAttribute("defaultvalue",t)}set value(t){t&&(this.$value=t,this.colorBtn.style.setProperty("--themeColor",this.nativeclick?u(t,this.pluginType):f(t,this.pluginType)),this.nativeclick?(this.nativeclick=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))):this.colorPane?this.colorPane.value=this.value:this.defaultvalue=this.value)}attributeChangedCallback(t,o,e){t==="disabled"&&this.colorBtn&&(e!=null?this.colorBtn.setAttribute("disabled","disabled"):this.colorBtn.removeAttribute("disabled")),t==="dir"&&this.$popover&&e!=null&&(this.$popover.dir=e)}}customElements.get("xy-color-picker")||customElements.define("xy-color-picker",x);const S=r(Object.freeze(Object.defineProperty({__proto__:null,ColorPlugin:x},Symbol.toStringTag,{value:"Module"})));var L={markerIcon:'<svg fill="#000000" height="34px" width="34px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.644 491.644" xml:space="preserve"><g><path d="M456.623,2.282c-42.758-20.283-141.107,96.84-223.473,264.224c-2.35,4.776-2.686,10.294-0.936,15.321.75,5.026,5.442,9.145,10.251,11.426L366.758,352.2c4.809,2.281,10.332,2.538,15.333,0.714c5.001-1.825,9.059-5.579,11.272-10.42470.883,172.829,499.385,22.562,456.623,2.282z"/><path d="M34.71,461.799l-17.257,16.708c-2.225,2.17-2.934,5.475-1.773,8.363c1.179,2.886,3.985,4.773,7.099,4.773h160.887-1.364-5.043-0.921-10.445,1.391-15.306l7.919-16.692H40.036C38.036,459.646,36.129,460.419,34.71,461.799z"/><path d="M264.766,448.864l-32.615-15.458c-1.046-0.502-2.161-0.744-3.257-0.744c-2.87,0-5.611,1.614-6.901,4.372l-22.001,46.3840.871,1.789-0.723,3.895,0.341,5.564c1.046,1.661,2.888,2.661,4.855,2.661h0.046l44.275-0.3782.206-0.016,4.206-1.299,5.159-3.292l13.724-28.925c0.856-1.838,0.967-3.936,0.29-5.846268.004,451.292,266.585,449.728,264.766,448.864z"/><path d="M348.445,366.038l-112.572-51.392c-8.909-4.067-19.434-0.227-23.63,8.622c-2.551,5.378-3.58,11.353-2.975,17.2755.2,50.909c0.703,6.882,4.983,12.884,11.261,15.792l60.031,27.797c6.688,3.097,14.548,2.179,20.343-2.375l45.983-36.1374.931-3.875,7.487-10.041,6.743-16.269C358.086,374.032,354.151,368.642,348.445,366.038z"/></g></svg>',textIcon:'<svg fill="#000000" viewBox="-6 0 512 512" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g><title>text</title><path d="M365 432L328 352 172 352 135 432 64 432 227 80 272 80 436 432 365 432ZM201 288L299 288 250 183 201 288Z"></path></g></svg>'};const B=r(P),R=r(Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}))),N=S,{markerIcon:I,textIcon:z}=L,{getDefaultColorCache:M,handleCSSVariables:O}=B;R.toString();class _{constructor({config:t,api:o}){this.api=o,this.config=t,this.clickedOnLeft=!1,this.pluginType=this.config.type||"text",this.parentTag=this.pluginType==="marker"?"MARK":"SPAN",this.hasCustomPicker=this.config.customPicker||!1,this.color=O(M(this.config.defaultColor,this.pluginType)),this.picker=null,this.icon=null,this.button=null,this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}static get isInline(){return!0}render(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add("colorPlugin"),this.button.classList.add(this.iconClasses.base),this.button.appendChild(this.createLeftButton()),this.button.appendChild(this.createRightButton(this)),this.button}createLeftButton(){return this.icon||(this.icon=document.createElement("div"),this.icon.id="color-left-btn",this.icon.appendChild(this.createButtonIcon()),this.icon.addEventListener("click",()=>{this.clickedOnLeft=!0})),this.icon}createButtonIcon(){const t=document.createElement("div");t.id="color-btn-text";const o=this.pluginType==="marker"?I:z;return t.innerHTML=this.config.icon||o,t}createRightButton(t){return this.picker||(this.picker=new N.ColorPlugin({onColorPicked:o=>{t.color=o;const e=document.getSelection();if(e){const s=e.getRangeAt(0);this.wrap(s)}},hasCustomPicker:this.hasCustomPicker,defaultColor:this.config.defaultColor,colorCollections:this.config.colorCollections,type:this.pluginType})),this.picker}surround(t){if(!t)return;const o=this.api.selection.findParentTag("SPAN");o&&this.unwrap(o);const e=this.api.selection.findParentTag(this.parentTag);e?this.unwrap(e):this.wrap(t),this.clickedOnLeft=!1}unwrapTagInRange(t,o){o=o.toUpperCase();const{startContainer:e}=t,{endContainer:s}=t;e.nodeType===Node.TEXT_NODE&&e.parentNode.tagName===o&&t.setStartBefore(e.parentNode),s.nodeType===Node.TEXT_NODE&&s.parentNode.tagName===o&&t.setEndAfter(s.parentNode);const p=t.extractContents(),H=p.querySelectorAll(o),F=n=>{for(;n.firstChild;)n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n)};H.forEach(n=>F(n)),t.deleteContents(),t.insertNode(p)}wrap(t){this.unwrapTagInRange(t,this.parentTag);const o=t.extractContents(),e=document.createElement(this.parentTag);e.appendChild(o),t.insertNode(e),this.pluginType==="marker"?this.wrapMarker(e):this.wrapTextColor(e),this.api.selection.expandToTag(e)}wrapMarker(t){t.style.backgroundColor=this.color;const o=this.api.selection.findParentTag("SPAN");o&&(t.style.color=o.style.color)}wrapTextColor(t){t.style.color=this.color}unwrap(t){this.api.selection.expandToTag(t);const o=window.getSelection(),e=o.getRangeAt(0),s=e.extractContents();this.clickedOnLeft?this.removeWrapper(t):this.updateWrapper(t),e.insertNode(s),o.removeAllRanges(),o.addRange(e)}updateWrapper(t){this.pluginType==="marker"?t.style.backgroundColor=this.color:t.style.color=this.color}removeWrapper(t){t.parentNode.removeChild(t)}checkState(){const t=this.api.selection.findParentTag("SPAN"),o=this.api.selection.findParentTag(this.parentTag),e=t?this.handleLegacyWrapper(t,o):o;return this.button.classList.toggle(this.iconClasses.active,!!e),!!e}handleLegacyWrapper(t,o){return this.pluginType==="marker"?t:o&t}static get sanitize(){return{font:!0,span:!0,mark:!0}}clear(){this.picker=null,this.icon=null}}var j=_;return l(j)});
