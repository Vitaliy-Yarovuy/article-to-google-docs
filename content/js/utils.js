(function(){
	var utils, noAttr = ["id","className","innerHTML","value","src"];

	utils = {
		createElement : function(type,attrs,childs){
			var el = document.createElement(type), key;
			if(attrs){
				for(key in attrs){
					if(attrs.hasOwnProperty(key)){
						if(noAttr.indexOf(key) !== -1 ){
							el[key] = attrs[key];
						}else{
							el.setAttribute(key, attrs[key]);
						}
					}
				}
			}
			if(childs){
				if(!childs instanceof  Array){
					childs = [childs];
				}
				childs.forEach(function(child){
					el.appendChild(child);
				});
			}
			return el;
		},
		setStyleRect:function(el,rect){
			el.style.top = rect.top + "px";
			el.style.left = rect.left + "px";
			el.style.width = rect.width + "px";
			el.style.height = rect.height + "px";
		},
		includeScroll:function(rect){
			return {
				left: rect.left + document.body.scrollLeft,
				top: rect.top + document.body.scrollTop,
				width: rect.width,
				height: rect.height
			};
		},
		clearStyle:function(el,rect){
			el.style.cssText = "";
		},
		isParentHasId:function(el,id){
			var parent = el ;
			while(parent){
				if(parent.id === id ){
					return true;
				}
				parent = parent.parentNode;
			}
			return false;
		},
		getParents:function(el){
			var parents = [],parent = el;
			while(parent && parent.tagName !== "HTML" ){
				parents.push(parent);
				parent = parent.parentNode;
			}
			return parents.reverse();
		}
	};
	window.utils = utils;
})();