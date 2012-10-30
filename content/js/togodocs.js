(function(){
	var cssPrefix = "togodocs";

	function ToGoDocsControl(){
		this.init();
	}
	ToGoDocsControl.prototype.init = function(){
		var btn, tagGroup, el;
		el = utils.createElement("div",{"id": cssPrefix},[
			utils.createElement("div",{"className": "navbar navbar-fixed-top"},[
				utils.createElement("div",{ className: "navbar-inner"},[
					utils.createElement("div",{ className: "container"},[
						utils.createElement("div",{ className: "row"},[
							utils.createElement("div",{className: "span2"},[
								btn = utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"select content"})
							]),
							utils.createElement("div",{className: "span8"},[
								utils.createElement("h6",{ className:"pull-left", innerHTML: "TAGS:&nbsp;"}),
								tagGroup = utils.createElement("div",{className: "btn-group white-space-normal ", "data-toggle":"buttons-radio"},[
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"body"}),
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"div"}),
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"p"}),
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"div"})
								])
							]),
							utils.createElement("div",{className: "span2"},[
								utils.createElement("div",{className: "btn btn-primary", "data-loading-text":"Saving...", innerHTML:"save"})
							])
						])
					])
				])
			])
		]);

		btn.addEventListener("click",this.onBtnSelectPress.bind(this));
		document.body.appendChild(el);
		this.el = el;
	};
	ToGoDocsControl.prototype.toggle = function(){
		this.el.classList.toggle("active");
	};
	ToGoDocsControl.prototype.onBtnSelectPress = function(){

		alert("button press on page: \n" + location.href + this.classList.contains("active"));
	};

	window.ToGoDocsControl = ToGoDocsControl;
})()
