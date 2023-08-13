var cached_libs = {};
var Linker = {
	
	
	link_lib: (name, GlobalScope) => {
		// 0 -> can't link
		// 1 -> loading...
		// 2 -> LOAD!
		if (name == 'IO') {
			if (GlobalScope.input) return 0;
			if (GlobalScope.output) return 0;
			if (cached_libs['IO'] == 'loading') return 1;
			if (!cached_libs['IO']) {
				cached_libs['IO'] = 'loading';
				fetch('LIB/linker_lib/IO.js?v='+Math.floor(new Date()/3/60/1000), {}).then((response) => response.text()).then((t) => {
						cached_libs['IO'] = t;
						eval(cached_libs['IO']);
						window['ml_input'] = input;
						window['ml_output'] = output;
						GlobalScope['input'] = window['ml_input'];
						GlobalScope['output'] = window['ml_output'];
					});
				return 1;
			}
			GlobalScope['input'] = window['ml_input'];
			GlobalScope['output'] = window['ml_output'];
			return 2;
		}
		
		var libs = ['calc', 'random', 'url_loader', 'math', 'brython', 'canvas'];
		
		if (libs.indexOf(name)>=0) {
			if (GlobalScope[name]) return false;
			if (cached_libs[name] == 'loading') return 1;
			if (!cached_libs[name]) {
				cached_libs[name] = 'loading';
				fetch("LIB/linker_lib/"+name+'.js?v='+Math.floor(new Date()/3/60/1000), {}).then((response) => response.text()).then((t) => {
						cached_libs[name] = t;
						eval(cached_libs[name]);
						window['ml_'+name] = eval(name);
						GlobalScope[name] = window['ml_'+name];
					});
				return 1;
			}
			GlobalScope[name] = window['ml_'+name];
			return 2;
		}
		return false;
	}
}


//<iframe sandbox="allow-scripts" style="position:absolute;top:0;left:0;display:none;height:10px;width:10px;" ></iframe>

var myJSON = {
	parse : (s) => {
		return JSON.parse(s);
	},
	stringify : (s) => {
		return '"'+JSON.stringify(s).replace(/(["\\])/g,(m,p)=>'\\'+p)+'"';
	}
}

var safe_data_callback_eval = (()=>{
		var iframe;
		var mycallback;
		var commandManager = {
			'send_rez':(obj, callback)=>{
				mycallback(obj);
			},
			'rebuild_sandbox':(obj, callback)=>{
				iframe.srcdoc = '';
				rebuild_sandbox();
			},
			'load_libs': (obj, callback)=>{
				callback([obj,cached_libs[obj]]);
			}
		};
		var sandbox_is_work = false;
		var rebuild_sandbox = ()=>{
			iframe = iframe || document.getElementById('mysandbox') || console.log('ERROR');
			
			var js = "";
			js += "var in_sandbox=true;";
			// js += "var ____system_data =JSON.parse("+myJSON.stringify(data)+");\n";
			js += "eval(JSON.parse("+myJSON.stringify(cached_libs.IO)+"));\n";
			
			iframe.srcdoc = '<!DOCTYPE html><html><head><script type="text/javascript">'+
				js.replace(/(?:<!--|<\\!--|<script|<\\script|<\/script|<\\\/script)/g,i=>'__html_tag__')+
				'</script></head><body></body></html>';
			sandbox_is_work=true;
		}
		//iframe.contentWindow.postMessage('123_!23', "*");
		window.addEventListener('message', (e)=>{
			if (commandManager[e.data.split(' ')[0]]) {
				var s = e.data.replace(e.data.split(' ')[0]+' ','');
				var rez = commandManager[e.data.split(' ')[0]](s==='undefined'?undefined:JSON.parse(s), (rez)=>{iframe.contentWindow.postMessage(e.data.split(' ')[0]+' '+JSON.stringify(rez), "*");});
				return;
			}
			if (iframe && typeof e == 'string')
				iframe.contentWindow.postMessage(e.split(' ')[0]+' "command not found"', "*");
		});
		return (data, callback)=>{
			mycallback = callback;
			if (!sandbox_is_work) {
				rebuild_sandbox();
				setTimeout(()=>{iframe.contentWindow.postMessage('run '+JSON.stringify(data), "*");},100);
			} else {
				
				setTimeout(()=>{iframe.contentWindow.postMessage('run '+JSON.stringify(data), "*");},10);
			}
		};
	})();

// safe_data_callback_eval('return [1,a,b];', {a:2, b:3}, (r)=>console.log(r));

