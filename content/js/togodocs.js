(function(){
	var namespaceId = "togodocs";

	function ToGoDocsControl(){
		this.init();
	}
	ToGoDocsControl.prototype.init = function(){
		var btn, btnSave,tagGroup, el,higligthHover,higligthHoverContent, that = this;
		el = utils.createElement("div",{"id": namespaceId},[

			higligthHover = utils.createElement("div",{"className": "element-hover"}),
			higligthHoverContent = utils.createElement("div",{"className": "element-hover-content"}),
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
									/*
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"body"}),
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"div"}),
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"p"}),
									utils.createElement("div",{className: "btn", "data-toggle":"button", innerHTML:"div"})
									*/
								])
							]),
							utils.createElement("div",{className: "span2"},[
								btnSave = utils.createElement("div",{className: "btn btn-primary", "data-loading-text":"Saving...", innerHTML:"save"})
							])
						])
					])
				])
			])
		]);

		btn.addEventListener("click",function(){
			that.captureMouse(!that.isCapture);
		});
		tagGroup.addEventListener("click",this.onTagGroupPressed.bind(this));
		btnSave.addEventListener("click",this.save.bind(this));
		this.el = el;
		this.higligthHover = higligthHover;
		this.higligthHoverContent = higligthHoverContent;
		this.tagGroup = tagGroup;
		this.btnSave = btnSave;
		this._onMouseOver = this.onMouseOver.bind(this);
		this._onMouseDown= this.onMouseDown.bind(this);
		document.body.appendChild(el);
	};
	ToGoDocsControl.prototype.toggle = function(){
		this.el.classList.toggle("active");
	};
	ToGoDocsControl.prototype.captureMouse = function(isCapure){
		if(isCapure){
			document.addEventListener("mouseover",this._onMouseOver);
			document.addEventListener("mousedown",this._onMouseDown);
		}else{
			document.removeEventListener("mouseover",this._onMouseOver);
			document.removeEventListener("mousedown",this._onMouseDown);
			this.unSelectHoverElement();
		}
		this.isCapture = isCapure;
	};
	ToGoDocsControl.prototype.onMouseOver = function(e){
		var el = e.target;
		if(utils.isParentHasId(el,namespaceId)){
			this.unSelectHoverElement();
		}else{
			this.selectHoverElement(el);
		}
	};
	ToGoDocsControl.prototype.onMouseDown = function(e){
		var el = e.target;
		if(!utils.isParentHasId(el,namespaceId)){
			this.selectContentElement(el);
			this.setTagGroup(utils.getParents(el));
		}
	};
	ToGoDocsControl.prototype.selectHoverElement = function(el){
		var rect = el.getBoundingClientRect();
		rect = utils.includeScroll(rect);
		utils.setStyleRect(this.higligthHover,rect);
		this.hoverElement = el;
	};
	ToGoDocsControl.prototype.unSelectHoverElement = function(){
		if(this.hoverElement){
			utils.clearStyle(this.higligthHover);
			this.hoverElement = null;
		}
	};
	ToGoDocsControl.prototype.selectContentElement = function(el){
		var rect = el.getBoundingClientRect();
		rect = utils.includeScroll(rect);
		utils.setStyleRect(this.higligthHoverContent,rect);
		this.contentElement = el;
	};
	ToGoDocsControl.prototype.unSelectContentElement = function(){
		if(this.contentElement){
			utils.clearStyle(this.higligthHoverContent);
			this.contentElement = null;
		}
	};
	// todo rename
	ToGoDocsControl.prototype.setTagGroup = function(arr){
		var i,fragment = document.createDocumentFragment();
		this.tags = arr;
		for(i =0 ;i< arr.length;i++){
			fragment.appendChild(utils.createElement("div",{className: "btn "+ ( i === arr.length -1 ? "active":"") , "data-toggle":"button", innerHTML: arr[i].tagName.toLowerCase() }))
		}
		this.tagGroup.innerHTML = ""
		this.tagGroup.appendChild(fragment);
	};
	ToGoDocsControl.prototype.onTagGroupPressed = function(e){
		var index, el = e.target,
			parent = el.parentNode;
		if(parent !== this.tagGroup){
			return ;
		}
		index = [].indexOf.call(parent.children,el);
		this.selectContentElement(this.tags[index]);
	};

	ToGoDocsControl.prototype.save = function(e){
		var text,$btn;
		if(this.contentElement){
			text =  this.contentElement.innerText;
			console.log("save",text);
			$btn = $(this.btnSave);
			$btn.button('loading');
			setTimeout(function(){
				$btn.button('reset');
			},400);
		}
	};


	window.ToGoDocsControl = ToGoDocsControl;
})()
