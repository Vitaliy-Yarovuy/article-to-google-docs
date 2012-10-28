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
		}
	};
	window.utils = utils;
})();