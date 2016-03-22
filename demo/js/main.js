$(function(){

	var app = window.navigator.userAgent.toLowerCase(),
		dpi = window.devicePixelRatio,
		platform = window.navigator.platform.toLowerCase(),
		resolution = window.screen.width;

    var AdapterBrowser = {
        width:720,
    	// 需判断的浏览器
    	browser:[
    		'qqbrowser',
    		'micromessenger',
    		'leidianbrowser'
    	],
    	device:{
    		'win':null,
    		'ipad':null,
    		'iphone':null,
    		'linux':function(){

    		}
    	},
    	doAdapter:function(){
    		var flag = 0;
    		for (var i = 0; i < this.browser.length; i++) {
    			var item = this.browser[i];
    			if(app.indexOf(item)>0){
    				flag = 1;
    				break;
    			}
    		};
    		return flag;
    	},
    	init:function(){
    		var scale = 0;
    		if(platform.indexOf('win')>=0){
    			scale = resolution/AdapterBrowser.width;
    		};
    		if(platform.indexOf('linux')>=0){
    			if(app.indexOf('android')>=0){
    				if(this.doAdapter()){
    					scale = resolution/dpi/AdapterBrowser.width;
    				}else{
    					scale = resolution/AdapterBrowser.width;
    				}
    			}
    		};
            if(platform.indexOf('ipad')>=0){
                scale = resolution/AdapterBrowser.width;
            }
            if(platform.indexOf('iphone')>=0){
                scale = resolution/AdapterBrowser.width;
            }
    		scale = scale > 1 ? 1 : scale ;
    		$('meta[name=viewport]').attr('content','width='+AdapterBrowser.width+', initial-scale='+scale+', maximum-scale='+scale+', user-scalable=no');
    	}
    };
    AdapterBrowser.init();
    


})