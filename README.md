# lovecars
the pages for webapp


这里，我要着重说一下main.js文件，因为该文件主要功能是对移动端终端设备进行适配

demo --> main.js

主要代码如下：

$(function(){
	
	var app = window.navigator.userAgent.toLowerCase(),
		dpi = window.devicePixelRatio,
		platform = window.navigator.platform.toLowerCase(),
		resolution = window.screen.width;

    var AdapterBrowser = {
        width:720,
    	// 需判断的浏览器，此配置如今还未进行使用，后期可能会用到，暂时放着
    	browser:[
    		'qqbrowser',
    		'micromessenger',
    		'leidianbrowser'
    	],
    	// 对设备平台的判断-->安卓手机，苹果手机，电脑等的操作系统
    	device:{
    		'win':null,
    		'ipad':null,
    		'iphone':null,
    		'linux':function(){

    		}
    	},
    	// 这里主要是用来做适配的
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

    		// 根据不同的设备设置不同的缩放比

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
            };

            if(platform.indexOf('iphone')>=0){
                scale = resolution/AdapterBrowser.width;
            };

    		scale = scale > 1 ? 1 : scale ;
    		// 设备name值为viewport的meta标签的属性，这里主要设置缩放比
    		$('meta[name=viewport]').attr('content','width='+AdapterBrowser.width+', initial-scale='+scale+', maximum-scale='+scale+', user-scalable=no');
    	}
    };
    AdapterBrowser.init();
    


})