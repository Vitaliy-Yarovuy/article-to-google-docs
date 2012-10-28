(function(){
	var cssPrefix = "togodocs";

	function ToGoDocsControl(){
		this.init();
	}
	ToGoDocsControl.prototype.init = function(){
		var btn, el;
		btn = utils.createElement("button",{"className":cssPrefix+"-select-button", "innerHTML":"select content"});
		el = utils.createElement("div",{"className": cssPrefix+"-wrap"},[btn]);
		btn.addEventListener("click",this.onBtnSelectPress.bind(this));
		document.body.appendChild(el);
		this.el = el;
	};
	ToGoDocsControl.prototype.toggle = function(){
		this.el.classList.toggle(cssPrefix+"-active")
	};
	ToGoDocsControl.prototype.onBtnSelectPress = function(){
		alert("button press on page: \n" + location.href );
	};

	window.ToGoDocsControl = ToGoDocsControl;
})()
