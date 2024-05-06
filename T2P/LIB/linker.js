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
		
		var libs = ['calc', 'random', 'url_loader', 'math', 'brython', 'canvas', 'discrete_math', 'vivagraph', 'nerdamer'];
		
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

/*var myJSON = {
	parse : (s) => {
		return JSON.parse(s);
	},
	stringify : (s) => {
		return '"'+JSON.stringify(s).replace(/(["\\])/g,(m,p)=>'\\'+p)+'"';
	}
}*/

var safe_sandbox = (()=>{
		var real_sandbox_version=0;
		var sandbox_version=0;
		var iframe;
		var mycallback;
		var commandManager = {
			'send_rez':(obj, callback)=>{
				sandbox_is_work=2;
				var current_version = sandbox_version;
				setTimeout(()=>{
					mycallback(obj,()=>(current_version==sandbox_version));
				});
			},
			'rebuild_sandbox':(obj, callback)=>{
				iframe.srcdoc = '';
				rebuild_sandbox();
				srun();
			},
			'load_libs': (obj, callback)=>{
				callback([obj,cached_libs[obj]]);
			},
			'load_sandbox': (obj, callback)=>{
				sandbox_is_work=2;
				callback(real_sandbox_version++);
			}
		};
		setInterval(()=>{
			if (sandbox_is_work==2) { 
				iframe.contentWindow.postMessage('onInterval '+JSON.stringify(""), "*");
			}
		},100);
		
		window.addEventListener('message', (e)=>{
			if (commandManager[e.data.split(' ')[0]]) {
				var s = e.data.replace(e.data.split(' ')[0]+' ','');
				var rez = commandManager[e.data.split(' ')[0]](s==='undefined'?undefined:JSON.parse(s), (rez)=>{iframe.contentWindow.postMessage(e.data.split(' ')[0]+' '+JSON.stringify(rez), "*");});
				return;
			}
			if (typeof e == 'string') console.log('"'+e.split(' ')[0]+'" command not found');
		});
		
		var sandbox_is_work = 0;
		var rebuild_sandbox = ()=>{
			iframe = iframe || document.getElementById('mysandbox') || console.log('ERROR');
			iframe.srcdoc = '<!DOCTYPE html><html><head><script type="text/javascript">var in_sandbox=true;</script><script type="text/javascript">'+
				cached_libs.IO.replace(/(?:<!--|<\\!--|<script|<\\script|<\/script|<\\\/script)/g,i=>'__html_tag__')+
				'</script></head><body></body></html>';
			
			if (sandbox_is_work!=1){
				sandbox_is_work=1;
			}
		};
		var st = [];
		function srun(){
			console.log('start run');
			if (!st.length)return;
			if (sandbox_is_work!=2) { setTimeout(srun,50); return; }
			console.log('normal start run');
			var tmp=st.pop();
			//console.log(tmp);
			st = [[tmp[0],tmp[1]]];
			mycallback = st[0][1];
			sandbox_is_work = 1;
			iframe.contentWindow.postMessage('run '+JSON.stringify(st[0][0]), "*");
		}
		var sb = {
			init: ()=>{
				console.log('rebuild_sandbox');
				rebuild_sandbox();
			},
			stop: ()=>{
				console.log('mycallback clear');
				mycallback = ()=>{};
				if (sandbox_is_work==2) {
					console.log('stop_print');
					iframe.contentWindow.postMessage('stop_print_low '+JSON.stringify(sandbox_version+1), "*");
				}
			},
			run: (data, callback)=>{
				data.version = sandbox_version++;
				st.push([data, callback]);
				srun();
			}
		};
		return sb;
	})();

// safe_data_callback_eval('return [1,a,b];', {a:2, b:3}, (r)=>console.log(r));

