"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function makeEmptyFunction(e){return function(){return e}}function invariant(e,t,n,r,i,s,a,o){if(validateFormat(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,a,o],c=0;(l=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}function cn(e){return e.map(function(e){return!1===e?null:e}).join(" ").replace(/\s+/g," ").trim()}function slideSize(e,t){return 100/e*t/t}function slideTraySize(e,t){return 100*e/t}function pct(e){return e+"%"}function equal(e,t,n){if(e===t)return!0;var r=types[index$3(e)],i=types[index$3(t)];return!(!r||r!==i)&&r(e,t,n)}function memoGaurd(e){return function(t,n,r){if(!r)return e(t,n,[]);for(var i,s=r.length;i=r[--s];)if(i[0]===t&&i[1]===n)return!0;return e(t,n,r)}}function arrayEqual(e,t,n){var r=e.length;if(r!==t.length)return!1;for(n.push([e,t]);r--;)if(!equal(e[r],t[r],n))return!1;return!0}function objectEqual(e,t,n){if("function"==typeof e.equal)return n.push([e,t]),e.equal(t,n);var r=getEnumerableProperties(e),i=getEnumerableProperties(t),s=r.length;if(s!==i.length)return!1;for(r.sort(),i.sort();s--;)if(r[s]!==i[s])return!1;for(n.push([e,t]),s=r.length;s--;){var a=r[s];if(!equal(e[a],t[a],n))return!1}return!0}function getEnumerableProperties(e){var t=[];for(var n in e)"constructor"!==n&&t.push(n);return t}function WithStore(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return{}},n=function(n){function r(e,n){classCallCheck(this,r);var i=possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,n));return i.state={stateProps:t(n.store.getState())},i}return inherits(r,n),createClass(r,[{key:"componentDidMount",value:function(){var e=this;this.context.store.subscribe(function(){return e.updateStateProps()})}},{key:"shouldComponentUpdate",value:function(e,t){return!index$2(t,this.state)||!index$2(e,this.props)}},{key:"updateStateProps",value:function(){this.setState({stateProps:t(this.context.store.getState())})}},{key:"render",value:function(){var t=index$5(this.state.stateProps,this.props);return React.createElement(e,_extends({},t,{store:{setState:this.context.store.setState,subscribeMasterSpinner:this.context.store.subscribeMasterSpinner,masterSpinnerSuccess:this.context.store.masterSpinnerSuccess,masterSpinnerError:this.context.store.masterSpinnerError}}),this.props.children)}}]),r}(React.Component);return n.propTypes={children:CarouselPropTypes.children},n.defaultProps={children:null},n.contextTypes={store:index$1.object},n}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},emptyFunction=function(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(e){return e};var emptyFunction_1=emptyFunction,validateFormat=function(e){},invariant_1=invariant,ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret,factoryWithThrowingShims=function(){function e(e,t,n,r,i,s){s!==ReactPropTypesSecret_1&&invariant_1(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=emptyFunction_1,n.PropTypes=n,n},index$1=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),LOADING="loading",SUCCESS="success",ERROR="error",CarouselPropTypes={children:index$1.oneOfType([index$1.arrayOf(index$1.node),index$1.node]),height:function(e,t){var n=e[t];return"vertical"!==e.orientation||null!==n&&"number"==typeof n?null:new Error("Missing required property '"+t+"' when orientation is vertical.  You must supply a number representing the height in pixels")},orientation:index$1.oneOf(["horizontal","vertical"]),isBgImage:function(e,t){return!0===e[t]&&"img"===e.tag?new Error("HTML img elements should not have a backgroundImage.  Please use "+t+" for other block-level HTML tags, like div, a, section, etc..."):null}},s={buttonBack:"_buttonBack_113ph_1"},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},objectWithoutProperties=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ButtonBack=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleOnClick=n.handleOnClick.bind(n),n.state={disabled:t.setDisabled(e.disabled,e.currentSlide)},n}return inherits(t,e),createClass(t,null,[{key:"setDisabled",value:function(e,t){return null!==e?e:0===t}}]),createClass(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({disabled:t.setDisabled(e.disabled,e.currentSlide)})}},{key:"handleOnClick",value:function(e){var t=this.props,n=t.currentSlide,r=t.onClick,i=t.step,s=t.store,a=Math.max(n-i,0);s.setState({currentSlide:a},null!==r&&r.call(this,e))}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.currentSlide,e.disabled,e.onClick,e.step,e.store,objectWithoutProperties(e,["className","currentSlide","disabled","onClick","step","store"])),r=cn([s.buttonBack,"carousel__back-button",t]);return React.createElement("button",_extends({"aria-label":"previous",className:r,onClick:this.handleOnClick,disabled:this.state.disabled},n),this.props.children)}}]),t}(React.Component);ButtonBack.propTypes={children:CarouselPropTypes.children.isRequired,className:index$1.string,currentSlide:index$1.number.isRequired,disabled:index$1.bool,onClick:index$1.func,step:index$1.number.isRequired,store:index$1.object.isRequired},ButtonBack.defaultProps={disabled:null,onClick:null,className:null};var index$3=createCommonjsModule(function(e,t){var n={}.toString,r="undefined"!=typeof window?window.Node:Function;e.exports=t=function(e){var t=typeof e;if("object"!=t)return t;if(t=i[n.call(e)],"object"==t)return e instanceof Map?"map":e instanceof Set?"set":"object";if(t)return t;if(e instanceof r)switch(e.nodeType){case 1:return"element";case 3:return"text-node";case 9:return"document";case 11:return"document-fragment";default:return"dom-node"}};var i=t.types={"[object Function]":"function","[object Date]":"date","[object RegExp]":"regexp","[object Arguments]":"arguments","[object Array]":"array","[object Set]":"set","[object String]":"string","[object Null]":"null","[object Undefined]":"undefined","[object Number]":"number","[object Boolean]":"boolean","[object Object]":"object","[object Map]":"map","[object Text]":"text-node","[object Uint8Array]":"bit-array","[object Uint16Array]":"bit-array","[object Uint32Array]":"bit-array","[object Uint8ClampedArray]":"bit-array","[object Error]":"error","[object FormData]":"form-data","[object File]":"file","[object Blob]":"blob"}}),types={};types.number=function(e,t){return e!==e&&t!==t},types.function=function(e,t,n){return e.toString()===t.toString()&&types.object(e,t,n)&&equal(e.prototype,t.prototype)},types.date=function(e,t){return+e==+t},types.regexp=function(e,t){return e.toString()===t.toString()},types.element=function(e,t){return e.outerHTML===t.outerHTML},types.textnode=function(e,t){return e.textContent===t.textContent},types.arguments=types["bit-array"]=types.array=memoGaurd(arrayEqual),types.object=memoGaurd(objectEqual);var index$2=equal,index$5=createCommonjsModule(function(e,t){!function(t,n){e.exports=n()}(0,function(){function e(e){return e&&"object"==typeof e&&"[object RegExp]"!==Object.prototype.toString.call(e)&&"[object Date]"!==Object.prototype.toString.call(e)}function t(e){return Array.isArray(e)?[]:{}}function n(n,r){return r&&!0===r.clone&&e(n)?s(t(n),n,r):n}function r(t,r,i){var a=t.slice();return r.forEach(function(r,o){void 0===a[o]?a[o]=n(r,i):e(r)?a[o]=s(t[o],r,i):-1===t.indexOf(r)&&a.push(n(r,i))}),a}function i(t,r,i){var a={};return e(t)&&Object.keys(t).forEach(function(e){a[e]=n(t[e],i)}),Object.keys(r).forEach(function(o){e(r[o])&&t[o]?a[o]=s(t[o],r[o],i):a[o]=n(r[o],i)}),a}function s(e,t,s){var a=Array.isArray(t),o=(s||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(e)?o(e,t,s):n(t,s):i(e,t,s)}return s.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce(function(e,n){return s(e,n,t)})},s})}),index=WithStore(ButtonBack,function(e){return{currentSlide:e.currentSlide,step:e.step}}),s$1={buttonFirst:"_buttonFirst_y31jn_1"},_class,_temp,ButtonFirst=(_temp=_class=function(e){function t(){classCallCheck(this,t);var e=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleOnClick=e.handleOnClick.bind(e),e}return inherits(t,e),createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,n=t.store,r=t.onClick;n.setState({currentSlide:0},null!==r&&r.call(this,e))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.currentSlide,r=e.disabled,i=(e.onClick,e.store,e.totalSlides,objectWithoutProperties(e,["className","currentSlide","disabled","onClick","store","totalSlides"])),s=cn([s$1.buttonFirst,"carousel__first-button",t]),a=null!==r?r:0===n;return React.createElement("button",_extends({"aria-label":"first",className:s,onClick:this.handleOnClick,disabled:a},i),this.props.children)}}]),t}(React.Component),_class.propTypes={children:CarouselPropTypes.children.isRequired,className:index$1.string,currentSlide:index$1.number.isRequired,disabled:index$1.bool,onClick:index$1.func,store:index$1.object.isRequired,totalSlides:index$1.number.isRequired},_class.defaultProps={className:null,disabled:null,onClick:null},_temp),index$6=WithStore(ButtonFirst,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides}}),s$2={buttonNext:"_buttonNext_p1bs6_1"},_class$1,_temp$1,ButtonNext=(_temp$1=_class$1=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleOnClick=n.handleOnClick.bind(n),n.state={disabled:t.setDisabled(e.disabled,e.currentSlide,e.visibleSlides,e.totalSlides)},n}return inherits(t,e),createClass(t,null,[{key:"setDisabled",value:function(e,t,n,r){return null!==e?e:t>=r-n}}]),createClass(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({disabled:t.setDisabled(e.disabled,e.currentSlide,e.visibleSlides,e.totalSlides)})}},{key:"handleOnClick",value:function(e){var t=this.props,n=t.currentSlide,r=t.onClick,i=t.step,s=t.store,a=this.props.totalSlides-this.props.visibleSlides,o=Math.min(n+i,a);s.setState({currentSlide:o},null!==r&&r.call(this,e))}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.currentSlide,e.disabled,e.onClick,e.step,e.store,e.totalSlides,e.visibleSlides,objectWithoutProperties(e,["className","currentSlide","disabled","onClick","step","store","totalSlides","visibleSlides"])),r=cn([s$2.buttonNext,"carousel__next-button",t]);return React.createElement("button",_extends({"aria-label":"next",className:r,onClick:this.handleOnClick,disabled:this.state.disabled},n),this.props.children)}}]),t}(React.PureComponent),_class$1.propTypes={children:CarouselPropTypes.children.isRequired,className:index$1.string,currentSlide:index$1.number.isRequired,disabled:index$1.bool,onClick:index$1.func,step:index$1.number.isRequired,store:index$1.object.isRequired,totalSlides:index$1.number.isRequired,visibleSlides:index$1.number.isRequired},_class$1.defaultProps={disabled:null,className:null,onClick:null},_temp$1),index$7=WithStore(ButtonNext,function(e){return{currentSlide:e.currentSlide,step:e.step,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),s$3={buttonLast:"_buttonLast_x8dvv_1"},_class$2,_temp$2,ButtonLast=(_temp$2=_class$2=function(e){function t(){classCallCheck(this,t);var e=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleOnClick=e.handleOnClick.bind(e),e}return inherits(t,e),createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,n=t.store,r=t.onClick,i=t.totalSlides,s=t.visibleSlides;n.setState({currentSlide:i-s},null!==r&&r.call(this,e))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.currentSlide,r=e.disabled,i=(e.onClick,e.store,e.totalSlides),s=e.visibleSlides,a=objectWithoutProperties(e,["className","currentSlide","disabled","onClick","store","totalSlides","visibleSlides"]),o=cn([s$3.buttonLast,"carousel__last-button",t]),l=null!==r?r:n>=i-s;return React.createElement("button",_extends({"aria-label":"last",className:o,onClick:this.handleOnClick,disabled:l},a),this.props.children)}}]),t}(React.Component),_class$2.propTypes={children:CarouselPropTypes.children.isRequired,className:index$1.string,currentSlide:index$1.number.isRequired,disabled:index$1.bool,onClick:index$1.func,store:index$1.object.isRequired,totalSlides:index$1.number.isRequired,visibleSlides:index$1.number.isRequired},_class$2.defaultProps={className:null,disabled:null,onClick:null},_temp$2),index$8=WithStore(ButtonLast,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),index$10=function(e){return void 0!==e&&null!==e&&("object"==typeof e||"function"==typeof e)},index$14=function(e,t,n){for(var r in e)if(!1===t.call(n,e[r],r,e))break},hasOwn=Object.prototype.hasOwnProperty,index$12=function(e,t,n){index$14(e,function(r,i){if(hasOwn.call(e,i))return t.call(n,e[i],i,e)})},index$9=function(e,t){if(!index$10(e))return{};var n,r={};"function"==typeof(t=[].concat.apply([],[].slice.call(arguments,1)))[t.length-1]&&(n=t.pop());var i="function"==typeof n;return t.length||i?(index$12(e,function(s,a){-1===t.indexOf(a)&&(i?n(s,a,e)&&(r[a]=s):r[a]=s)}),r):e},_class$3,_temp$3,CarouselProvider$1=(_temp$3=_class$3=function(e){function t(e,n){classCallCheck(this,t);var r=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),i={currentSlide:e.currentSlide,hasMasterSpinner:e.hasMasterSpinner,imageErrorCount:0,imageSuccessCount:0,masterSpinnerThreshold:0,naturalSlideHeight:e.naturalSlideHeight,naturalSlideWidth:e.naturalSlideWidth,orientation:e.orientation,slideSize:slideSize(e.totalSlides,e.visibleSlides),slideTraySize:slideTraySize(e.totalSlides,e.visibleSlides),step:e.step,totalSlides:e.totalSlides,touchEnabled:e.touchEnabled,visibleSlides:e.visibleSlides};return r.store=new Store(i),r}return inherits(t,e),createClass(t,[{key:"getStore",value:function(){return this.store}},{key:"getChildContext",value:function(){return{store:this.store}}},{key:"render",value:function(){var e=index$9(this.props,Object.keys(t.propTypes)),n=cn(["carousel",this.props.className]);return React.createElement("div",_extends({className:n},e),this.props.children)}}]),t}(React.Component),_class$3.propTypes={children:CarouselPropTypes.children.isRequired,className:index$1.string,currentSlide:index$1.number,hasMasterSpinner:index$1.bool,naturalSlideHeight:index$1.number.isRequired,naturalSlideWidth:index$1.number.isRequired,orientation:CarouselPropTypes.orientation,step:index$1.number,totalSlides:index$1.number.isRequired,touchEnabled:index$1.bool,visibleSlides:index$1.number},_class$3.defaultProps={className:null,currentSlide:0,hasMasterSpinner:!1,orientation:"horizontal",step:1,touchEnabled:!0,visibleSlides:1},_class$3.childContextTypes={store:index$1.object},_temp$3),s$4={dot:"_dot_27k82_1"},_class$4,_temp$4,Dot$1=(_temp$4=_class$4=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleOnClick=n.handleOnClick.bind(n),n}return inherits(t,e),createClass(t,[{key:"handleOnClick",value:function(e){var t=this.props,n=t.onClick,r=t.slide,i=t.store,s=t.totalSlides,a=t.visibleSlides,o=r>=s-a?s-a:r;i.setState({currentSlide:o},null!==n&&n.call(this,e))}},{key:"render",value:function(){var e=this.props,t=(e.children,e.className),n=e.currentSlide,r=e.disabled,i=(e.onClick,e.selected),s=e.slide,a=(e.store,e.totalSlides,e.visibleSlides),o=objectWithoutProperties(e,["children","className","currentSlide","disabled","onClick","selected","slide","store","totalSlides","visibleSlides"]),l=s>=n&&s<n+a,u="boolean"==typeof i?i:l,c=!0===l,d="boolean"==typeof r?r:c,p=cn([s$4.dot,u&&s$4.dotSelected,"carousel__dot","carousel__dot--"+s,u&&"carousel__dot--selected",t]);return React.createElement("button",_extends({onClick:this.handleOnClick,className:p,disabled:d},o),this.props.children)}}]),t}(React.Component),_class$4.propTypes={children:CarouselPropTypes.children.isRequired,className:index$1.string,currentSlide:index$1.number.isRequired,disabled:index$1.bool,onClick:index$1.func,selected:index$1.bool,slide:index$1.number.isRequired,store:index$1.object.isRequired,totalSlides:index$1.number.isRequired,visibleSlides:index$1.number.isRequired},_class$4.defaultProps={className:null,disabled:null,onClick:null,selected:null},_temp$4),Dot=WithStore(Dot$1,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),s$5={},_class$5,_temp$5,DotGroup$$1=(_temp$5=_class$5=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"renderDots",value:function(){for(var e=this.props,t=e.currentSlide,n=e.totalSlides,r=e.visibleSlides,i=[],s=0;s<n;s+=1){var a=s>=t&&s<t+r,o=s>=n-r?n-r:s;i.push(React.createElement(Dot,{key:s,slide:o,selected:a,disabled:a},React.createElement("span",{className:cn["carousel__dot-group-dot"]},this.props.dotNumbers&&s+1)))}return i}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.currentSlide,e.store,e.totalSlides,e.visibleSlides,e.dotNumbers,objectWithoutProperties(e,["className","currentSlide","store","totalSlides","visibleSlides","dotNumbers"])),r=cn([s$5.DotGroup,"carousel__dot-group",t]);return React.createElement("div",_extends({className:r},n),this.renderDots())}}]),t}(React.Component),_class$5.propTypes={children:CarouselPropTypes.children,className:index$1.string,currentSlide:index$1.number.isRequired,store:index$1.object.isRequired,totalSlides:index$1.number.isRequired,visibleSlides:index$1.number.isRequired,dotNumbers:index$1.bool},_class$5.defaultProps={children:null,className:null,dotNumbers:!1},_temp$5),index$16=WithStore(DotGroup$$1,function(e){return{currentSlide:e.currentSlide,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),s$6={image:"_image_u458c_1"},Image$1=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={imageStatus:LOADING},n.initImage(),e.hasMasterSpinner&&e.store.subscribeMasterSpinner(),n}return inherits(t,e),createClass(t,[{key:"componentDidMount",value:function(){this.image.onload=this.handleImageLoad,this.image.onerror=this.handleImageError,this.image.src=this.props.src}},{key:"initImage",value:function(){this.image=document.createElement("img"),this.handleImageLoad=this.handleImageLoad.bind(this),this.handleImageError=this.handleImageError.bind(this)}},{key:"handleImageLoad",value:function(e){this.setState({imageStatus:SUCCESS}),this.props.store.masterSpinnerSuccess(),this.props.onLoad&&this.props.onLoad(e)}},{key:"handleImageError",value:function(e){this.setState({imageStatus:ERROR}),this.props.store.masterSpinnerError(),this.props.onError&&this.props.onError(e)}},{key:"tempTag",value:function(){return"img"===this.props.tag?"div":this.props.tag}},{key:"customRender",value:function(e){return"function"==typeof this.props[e]?this.props[e]():this.props.children}},{key:"renderLoading",value:function(e){var t=this.tempTag(),n=cn([s$6.image,s$6.imageLoading,"carousel__image",this.props.isBgImage&&"carousel__image--with-background","carousel__image--loading",this.props.className]);return React.createElement(t,_extends({className:n},e),this.customRender("renderLoading"))}},{key:"renderError",value:function(e){var t=this.tempTag(),n=cn([s$6.image,s$6.imageError,"carousel__image",this.props.isBgImage&&"carousel__image--with-background","carousel__image--error",this.props.className]);return React.createElement(t,_extends({className:n},e),this.customRender("renderError"))}},{key:"renderSuccess",value:function(e){var t=this.props,n=t.style,r=t.tag,i=cn([s$6.image,"carousel__image",this.props.isBgImage&&"carousel__image--with-background","carousel__image--success",this.props.className]),s=Object.assign({},n),a=e;if("img"!==r){var o=e.src;e.alt;a=objectWithoutProperties(e,["src","alt"]),s=Object.assign({},n,{backgroundImage:'url("'+o+'")',backgroundSize:"cover"})}return React.createElement(r,_extends({className:i,style:s},a),this.props.children)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.className,e.hasMasterSpinner,e.isBgImage,e.naturalSlideHeight,e.naturalSlideWidth,e.onError,e.onLoad,e.orientation,e.renderError,e.renderLoading,e.store,e.style,e.tag,objectWithoutProperties(e,["children","className","hasMasterSpinner","isBgImage","naturalSlideHeight","naturalSlideWidth","onError","onLoad","orientation","renderError","renderLoading","store","style","tag"]));switch(this.state.imageStatus){case LOADING:return this.renderLoading(t);case SUCCESS:return this.renderSuccess(t);case ERROR:return this.renderError(t);default:throw new Error("unknown value for this.state.imageStatus")}}}]),t}(React.Component);Image$1.propTypes={alt:index$1.string,children:CarouselPropTypes.children,className:index$1.string,hasMasterSpinner:index$1.bool.isRequired,isBgImage:CarouselPropTypes.isBgImage,naturalSlideHeight:index$1.number.isRequired,naturalSlideWidth:index$1.number.isRequired,onError:index$1.func,onLoad:index$1.func,orientation:CarouselPropTypes.orientation.isRequired,renderError:index$1.func,renderLoading:index$1.func,src:index$1.string.isRequired,store:index$1.object.isRequired,style:index$1.object,tag:index$1.string},Image$1.defaultProps={alt:"",children:null,className:null,height:null,isBgImage:!1,onError:null,onLoad:null,renderError:null,renderLoading:null,tag:"img",style:null};var Image=WithStore(Image$1,function(e){return{hasMasterSpinner:e.hasMasterSpinner,naturalSlideHeight:e.naturalSlideHeight,naturalSlideWidth:e.naturalSlideWidth,orientation:e.orientation}}),s$7={container:"_container_11gb8_1",overlay:"_overlay_11gb8_8",hover:"_hover_11gb8_19",loading:"_loading_11gb8_24",imageLoadingSpinnerContainer:"_imageLoadingSpinnerContainer_11gb8_28"},_class$6,_temp$6,ImageWithZoom$1=(_temp$6=_class$6=function(e){function t(){classCallCheck(this,t);var e=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isImageLoading:!0,hovering:!1,style:{},x:null,y:null},e.handleOnMouseOver=e.handleOnMouseOver.bind(e),e.handleOnMouseOut=e.handleOnMouseOut.bind(e),e.handleOnMouseMove=e.handleOnMouseMove.bind(e),e.handleImageComplete=e.handleImageComplete.bind(e),e}return inherits(t,e),createClass(t,[{key:"handleImageComplete",value:function(){this.setState({isImageLoading:!1})}},{key:"handleOnMouseOver",value:function(){this.setState({hovering:!0})}},{key:"handleOnMouseOut",value:function(){this.setState({hovering:!1})}},{key:"handleOnMouseMove",value:function(e){var t=e.nativeEvent.offsetX/e.target.offsetWidth*100,n=e.nativeEvent.offsetY/e.target.offsetHeight*100;this.setState({x:t,y:n})}},{key:"renderLoading",value:function(){return this.state.isImageLoading?React.createElement("div",{className:cn([s$7.imageLoadingSpinnerContainer,"carousel__image-loading-spinner-container"])},React.createElement(Spinner$1,null)):null}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.src,r=objectWithoutProperties(e,["tag","src"]),i=cn([s$7.image,"carousel__zoom-image"]),s=cn([s$7.overlay,"carousel__zoom-image-overlay",this.state.hovering&&s$7.hover,this.state.hovering&&"carousel__zoom-image-overlay--hovering"]),a={};return a.transformOrigin=this.state.x+"% "+this.state.y+"%",React.createElement(t,_extends({className:s$7.container},r),React.createElement(Image,{className:i,tag:"div",src:n,isBgImage:!0,onLoad:this.handleImageComplete,onError:this.handleImageComplete}),React.createElement(Image,{className:s,tag:"div",src:n,style:a,isBgImage:!0,onMouseOver:this.handleOnMouseOver,onMouseOut:this.handleOnMouseOut,onMouseMove:this.handleOnMouseMove}),this.renderLoading())}}]),t}(React.Component),_class$6.propTypes={src:index$1.string.isRequired,tag:index$1.string},_class$6.defaultProps={tag:"div"},_temp$6),s$8={slideInner:"_slideInner_yg1z4_1",slideHorizontal:"_slideHorizontal_yg1z4_1",slide:"_slide_yg1z4_1",focusRing:"_focusRing_yg1z4_24"},_class$7,_temp$7,Slide=(_temp$7=_class$7=function(e){function t(){classCallCheck(this,t);var e=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleOnFocus=e.handleOnFocus.bind(e),e.handleOnBlur=e.handleOnBlur.bind(e),e.state={focused:!1},e}return inherits(t,e),createClass(t,[{key:"isVisible",value:function(){var e=this.props,t=e.currentSlide,n=e.index,r=e.visibleSlides;return n>=t&&n<t+r}},{key:"handleOnFocus",value:function(e){var t=this.props.onFocus;this.setState({focused:!0},null!==t&&t.call(this,e))}},{key:"handleOnBlur",value:function(e){var t=this.props.onBlur;this.setState({focused:!1},null!==t&&t.call(this,e))}},{key:"renderFocusRing",value:function(){return this.state.focused?React.createElement("div",{className:s$8.focusRing}):null}},{key:"render",value:function(){var e=this.props,t=(e.children,e.className),n=(e.currentSlide,e.index,e.innerClassName),r=e.innerTag,i=e.naturalSlideHeight,s=e.naturalSlideWidth,a=(e.onBlur,e.onFocus,e.orientation),o=e.slideSize,l=(e.store,e.style),u=e.tabIndex,c=e.tag,d=e.totalSlides,p=(e.visibleSlides,objectWithoutProperties(e,["children","className","currentSlide","index","innerClassName","innerTag","naturalSlideHeight","naturalSlideWidth","onBlur","onFocus","orientation","slideSize","store","style","tabIndex","tag","totalSlides","visibleSlides"])),h={};"horizontal"===a?(h.width=pct(o),h.paddingBottom=pct(100*i/(s*d))):(h.width=pct(100),h.paddingBottom=pct(100*i/s));var m=Object.assign({},h,l),S=cn([s$8.slide,"horizontal"===a&&s$8.slideHorizontal,"carousel__slide",t]),b=cn([s$8.slideInner,"carousel__inner-slide",n]),f=this.isVisible()?0:-1,y="number"==typeof u?u:f;return React.createElement(c,_extends({tabIndex:y,"aria-hidden":!this.isVisible(),onFocus:this.handleOnFocus,onBlur:this.handleOnBlur,className:S,style:m},p),React.createElement(r,{className:b},this.props.children,this.renderFocusRing()))}}]),t}(React.PureComponent),_class$7.propTypes={children:CarouselPropTypes.children,className:index$1.string,currentSlide:index$1.number.isRequired,index:index$1.number.isRequired,innerClassName:index$1.string,innerTag:index$1.string,naturalSlideHeight:index$1.number.isRequired,naturalSlideWidth:index$1.number.isRequired,onBlur:index$1.func,onFocus:index$1.func,orientation:CarouselPropTypes.orientation.isRequired,slideSize:index$1.number.isRequired,store:index$1.object,style:index$1.object,tabIndex:index$1.number,tag:index$1.string,totalSlides:index$1.number.isRequired,visibleSlides:index$1.number.isRequired},_class$7.defaultProps={children:null,className:null,innerClassName:null,innerTag:"div",onBlur:null,onFocus:null,store:null,style:{},tabIndex:null,tag:"div"},_temp$7),index$17=WithStore(Slide,function(e){return{currentSlide:e.currentSlide,naturalSlideHeight:e.naturalSlideHeight,naturalSlideWidth:e.naturalSlideWidth,orientation:e.orientation,slideSize:e.slideSize,totalSlides:e.totalSlides,visibleSlides:e.visibleSlides}}),s$9={horizontalSlider:"_horizontalSlider_qbymx_1",horizontalSliderTray:"_horizontalSliderTray_qbymx_1",verticalSlider:"_verticalSlider_qbymx_11",verticalSliderTray:"_verticalSliderTray_qbymx_1",verticalTray:"_verticalTray_qbymx_20",verticalSlideTrayWrap:"_verticalSlideTrayWrap_qbymx_24",sliderTray:"_sliderTray_qbymx_28",masterSpinnerContainer:"_masterSpinnerContainer_qbymx_33"},_class$8,_temp$8,Slider$$1=(_temp$8=_class$8=function(e){function t(){classCallCheck(this,t);var e=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleOnTouchStart=e.handleOnTouchStart.bind(e),e.handleOnTouchMove=e.handleOnTouchMove.bind(e),e.handleOnTouchEnd=e.handleOnTouchEnd.bind(e),e.state={deltaX:0,deltaY:0,startX:0,startY:0,isMoving:!1},e.originalOverflow=null,e}return inherits(t,e),createClass(t,[{key:"handleOnTouchStart",value:function(e){if(this.props.touchEnabled){var t=e.targetTouches[0];this.originalOverflow=this.originalOverflow||document.documentElement.style.overflow,document.documentElement.style.overflow="hidden",this.setState({isMoving:!0,startX:t.screenX,startY:t.screenY})}}},{key:"handleOnTouchMove",value:function(e){if(this.props.touchEnabled){var t=e.targetTouches[0];this.setState({deltaX:t.screenX-this.state.startX,deltaY:t.screenY-this.state.startY})}}},{key:"computeCurrentSlide",value:function(){var e=t.slideSizeInPx(this.props.orientation,this.sliderTrayDiv.clientWidth,this.sliderTrayDiv.clientHeight,this.props.totalSlides),n=t.slidesMoved(this.props.orientation,this.state.deltaX,this.state.deltaY,e),r=this.props.totalSlides-Math.min(this.props.totalSlides,this.props.visibleSlides),i=this.props.currentSlide+n;i=Math.max(0,i),i=Math.min(r,i),this.props.store.setState({currentSlide:i})}},{key:"handleOnTouchEnd",value:function(e){this.props.touchEnabled&&0===e.targetTouches.length&&(this.computeCurrentSlide(),document.documentElement.style.overflow=this.originalOverflow,this.originalOverflow=null,this.setState({deltaX:0,deltaY:0,isMoving:!1}))}},{key:"renderMasterSpinner",value:function(){var e=this.props,t=e.hasMasterSpinner,n=e.masterSpinnerErrorCount,r=e.masterSpinnerSuccessCount,i=e.masterSpinnerSubscriptionCount,s=n+r===i,a=0===i;return!t||s&&!a?null:("function"==typeof this.props.onMasterSpinner&&this.props.onMasterSpinner(),React.createElement("div",{className:cn([s$9.masterSpinnerContainer,"carousel__master-spinner-container"])},React.createElement(Spinner$1,null)))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.className,i=t.currentSlide,s=(t.hasMasterSpinner,t.masterSpinnerErrorCount,t.masterSpinnerSubscriptionCount,t.masterSpinnerSuccessCount,t.naturalSlideHeight),a=t.naturalSlideWidth,o=(t.onMasterSpinner,t.orientation),l=t.slideTraySize,u=t.slideSize,c=(t.store,t.style),d=(t.totalSlides,t.touchEnabled,t.visibleSlides),p=objectWithoutProperties(t,["children","className","currentSlide","hasMasterSpinner","masterSpinnerErrorCount","masterSpinnerSubscriptionCount","masterSpinnerSuccessCount","naturalSlideHeight","naturalSlideWidth","onMasterSpinner","orientation","slideTraySize","slideSize","store","style","totalSlides","touchEnabled","visibleSlides"]),h=Object.assign({},c),m={};"vertical"===o&&(m.height=0,m.paddingBottom=pct(100*s*d/a),m.width=pct(100));var S={};this.state.isMoving&&(S.transition="none"),"vertical"===o?(S.transform="translateY("+pct(u*i*-1)+") translateY("+this.state.deltaY+"px)",S.width=pct(100)):(S.width=pct(l),S.transform="translateX("+pct(u*i*-1)+") translateX("+this.state.deltaX+"px)");var b=cn(["vertical"===o?s$9.verticalSlider:s$9.horizontalSlider,"carousel__slider","vertical"===o?"carousel__slider--vertical":"carousel__slider--horizontal",r]),f=cn([s$9.sliderTray,"carousel__slider-tray","vertical"===o?s$9.verticalTray:s$9.horizontalTray,"vertical"===o?"carousel__slider-tray--vertical":"carousel__slider-tray--horizontal"]),y=cn([s$9.sliderTrayWrap,"carousel__slider-tray-wrapper","vertical"===o?s$9.verticalSlideTrayWrap:s$9.horizontalTrayWrap,"vertical"===o?"carousel__slider-tray-wrap--vertical":"carousel__slider-tray-wrap--horizontal"]);return React.createElement("div",_extends({className:b,"aria-live":"polite",style:h},p),React.createElement("div",{className:y,style:m},React.createElement("div",{ref:function(t){e.sliderTrayDiv=t},className:f,style:S,onTouchStart:this.handleOnTouchStart,onTouchMove:this.handleOnTouchMove,onTouchEnd:this.handleOnTouchEnd},n),this.renderMasterSpinner()))}}],[{key:"slideSizeInPx",value:function(e,t,n,r){return("horizontal"===e?t:n)/r}},{key:"slidesMoved",value:function(e,t,n,r){return-Math.round(("horizontal"===e?t:n)/r)}}]),t}(React.Component),_class$8.propTypes={children:index$1.node.isRequired,className:index$1.string,currentSlide:index$1.number.isRequired,hasMasterSpinner:index$1.bool.isRequired,masterSpinnerErrorCount:index$1.number.isRequired,masterSpinnerSuccessCount:index$1.number.isRequired,masterSpinnerSubscriptionCount:index$1.number.isRequired,naturalSlideHeight:index$1.number.isRequired,naturalSlideWidth:index$1.number.isRequired,onMasterSpinner:index$1.func,orientation:CarouselPropTypes.orientation.isRequired,slideTraySize:index$1.number.isRequired,slideSize:index$1.number.isRequired,store:index$1.object.isRequired,style:index$1.object,totalSlides:index$1.number.isRequired,touchEnabled:index$1.bool.isRequired,visibleSlides:index$1.number},_class$8.defaultProps={className:"",height:null,onMasterSpinner:null,style:{},visibleSlides:1},_temp$8),index$18=WithStore(Slider$$1,function(e){return{currentSlide:e.currentSlide,hasMasterSpinner:e.hasMasterSpinner,masterSpinnerErrorCount:e.masterSpinnerErrorCount,masterSpinnerSubscriptionCount:e.masterSpinnerSubscriptionCount,masterSpinnerSuccessCount:e.masterSpinnerSuccessCount,naturalSlideHeight:e.naturalSlideHeight,naturalSlideWidth:e.naturalSlideWidth,orientation:e.orientation,slideSize:e.slideSize,slideTraySize:e.slideTraySize,totalSlides:e.totalSlides,touchEnabled:e.touchEnabled,visibleSlides:e.visibleSlides}}),s$10={spinner:"_spinner_1dguc_1",spin:"_spin_1dguc_1"},_class$9,_temp$9,Spinner$1=(_temp$9=_class$9=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=objectWithoutProperties(e,["className"]),r=cn([s$10.spinner,t]);return React.createElement("div",_extends({className:r},n))}}]),t}(React.PureComponent),_class$9.propTypes={className:index$1.string},_class$9.defaultProps={className:null},_temp$9),index$19=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])}),t},DEFAULT_STATE={masterSpinnerSubscriptionCount:0,masterSpinnerErrorCount:0,masterSpinnerSuccessCount:0},Store=function(){function e(t){classCallCheck(this,e),this.state=index$19(index$5(DEFAULT_STATE,t)),this.subscriptions=[],this.setState=this.setState.bind(this),this.getState=this.getState.bind(this),this.subscribe=this.subscribe.bind(this),this.updateSubscribers=this.updateSubscribers.bind(this),this.subscribeMasterSpinner=this.subscribeMasterSpinner.bind(this),this.masterSpinnerSuccess=this.masterSpinnerSuccess.bind(this),this.masterSpinnerError=this.masterSpinnerError.bind(this)}return createClass(e,[{key:"setState",value:function(e,t){this.state=index$19(index$5(this.state,e)),this.updateSubscribers(t)}},{key:"getState",value:function(){return index$5({},this.state)}},{key:"subscribe",value:function(e){this.subscriptions.push(e)}},{key:"updateSubscribers",value:function(e){this.subscriptions.forEach(function(e){return e()}),"function"==typeof e&&e(this.getState())}},{key:"subscribeMasterSpinner",value:function(){this.setState({masterSpinnerSubscriptionCount:this.state.masterSpinnerSubscriptionCount+1})}},{key:"masterSpinnerSuccess",value:function(){this.setState({masterSpinnerSuccessCount:this.state.masterSpinnerSuccessCount+1})}},{key:"masterSpinnerError",value:function(){this.setState({masterSpinnerErrorCount:this.state.masterSpinnerErrorCount+1})}}]),e}();exports.ButtonBack=index,exports.ButtonFirst=index$6,exports.ButtonNext=index$7,exports.ButtonLast=index$8,exports.CarouselProvider=CarouselProvider$1,exports.Dot=Dot,exports.DotGroup=index$16,exports.Image=Image,exports.ImageWithZoom=ImageWithZoom$1,exports.Slide=index$17,exports.Slider=index$18,exports.Spinner=Spinner$1,exports.Store=Store;
//# sourceMappingURL=index.cjs.js.map
