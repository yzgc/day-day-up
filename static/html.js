    var _maq = _maq || [];
    _maq.push(['_setAccount', '网站标识']);
     
    (function() {
        var ma = document.createElement('script'); ma.type = 'text/javascript'; ma.async = true;
        ma.src = ('https:' == document.location.protocol ? 'https://analytics' : 'http://analytics') + '.codinglabs.org/ma.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ma, s);
    })();
    
    (function () {
        var params = {};
        //Document对象数据
        if(document) {
            params.domain = document.domain || ''; 
            params.url = document.URL || ''; 
            params.title = document.title || ''; 
            params.referrer = document.referrer || ''; 
        }   
        //Window对象数据
        if(window && window.screen) {
            params.sh = window.screen.height || 0;
            params.sw = window.screen.width || 0;
            params.cd = window.screen.colorDepth || 0;
        }   
        //navigator对象数据
        if(navigator) {
            params.lang = navigator.language || ''; 
        }   
        //解析_maq配置
        if(_maq) {
            for(var i in _maq) {
                switch(_maq[i][0]) {
                    case '_setAccount':
                        params.account = _maq[i][1];
                        break;
                    default:
                        break;
                }   
            }   
        }   
        //拼接参数串
        var args = ''; 
        for(var i in params) {
            if(args != '') {
                args += '&';
            }   
            args += i + '=' + encodeURIComponent(params[i]);
        }   
     
        //通过Image对象请求后端脚本
        var img = new Image(2, 1); //参数为对象宽高
        img.src = 'http://analytics.codinglabs.org/1.gif?' + args;
        console.log(img)
    })();
    