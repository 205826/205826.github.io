function JSON_stringify(obj) {
	let result = '';
	if (Array.isArray(obj)) {
		result += '[';
		for (let i = 0; i < obj.length; i++) {
			result += JSON_stringify(obj[i]) + ',';
		}
		if (result.length > 1) {
			result = result.slice(0, -1);
		}
		result += ']';
	} else if (typeof obj === 'object' && obj !== null) {
		result += '{';
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				result += '"' + key + '":' + JSON_stringify(obj[key]) + ',';
			}
		}
		if (result.length > 1) {
			result = result.slice(0, -1);
		}
		result += '}';
	} else {
		result += typeof obj === 'string' ? '"' + obj + '"' : String(obj);
	}
	return result;
}

function IOERROR(message) {
	Error.call(this);
	Error.captureStackTrace(this, this.constructor);
	this.message = message;
	this.name = "IOerror";
	this.toString = ()=> "IOerror: "+message;
}

(function(global){"use strict";var _Base64=global.Base64;var version="2.3.2";var buffer;if(typeof module!=="undefined"&&module.exports){try{buffer=require("buffer").Buffer}catch(err){}}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64tab=function(bin){var t={};for(var i=0,l=bin.length;i<l;i++)t[bin.charAt(i)]=i;return t}(b64chars);var fromCharCode=String.fromCharCode;var cb_utob=function(c){if(c.length<2){var cc=c.charCodeAt(0);return cc<128?c:cc<2048?fromCharCode(192|cc>>>6)+fromCharCode(128|cc&63):fromCharCode(224|cc>>>12&15)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}else{var cc=65536+(c.charCodeAt(0)-55296)*1024+(c.charCodeAt(1)-56320);return fromCharCode(240|cc>>>18&7)+fromCharCode(128|cc>>>12&63)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|cc&63)}};var re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;var utob=function(u){return u.replace(re_utob,cb_utob)};var cb_encode=function(ccc){var padlen=[0,2,1][ccc.length%3],ord=ccc.charCodeAt(0)<<16|(ccc.length>1?ccc.charCodeAt(1):0)<<8|(ccc.length>2?ccc.charCodeAt(2):0),chars=[b64chars.charAt(ord>>>18),b64chars.charAt(ord>>>12&63),padlen>=2?"=":b64chars.charAt(ord>>>6&63),padlen>=1?"=":b64chars.charAt(ord&63)];return chars.join("")};var btoa=global.btoa?function(b){return global.btoa(b)}:function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)};var _encode=buffer?buffer.from&&buffer.from!==Uint8Array.from?function(u){return(u.constructor===buffer.constructor?u:buffer.from(u)).toString("base64")}:function(u){return(u.constructor===buffer.constructor?u:new buffer(u)).toString("base64")}:function(u){return btoa(utob(u))};var encode=function(u,urisafe){return!urisafe?_encode(String(u)):_encode(String(u)).replace(/[+\/]/g,function(m0){return m0=="+"?"-":"_"}).replace(/=/g,"")};var encodeURI=function(u){return encode(u,true)};var re_btou=new RegExp(["[ГЂ-Гџ][ВЂ-Вї]","[Г -ГЇ][ВЂ-Вї]{2}","[Г°-Г·][ВЂ-Вї]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=(7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3),offset=cp-65536;return fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320);case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var cb_decode=function(cccc){var len=cccc.length,padlen=len%4,n=(len>0?b64tab[cccc.charAt(0)]<<18:0)|(len>1?b64tab[cccc.charAt(1)]<<12:0)|(len>2?b64tab[cccc.charAt(2)]<<6:0)|(len>3?b64tab[cccc.charAt(3)]:0),chars=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(n&255)];chars.length-=[0,0,2,1][padlen];return chars.join("")};var atob=global.atob?function(a){return global.atob(a)}:function(a){return a.replace(/[\s\S]{1,4}/g,cb_decode)};var _decode=buffer?buffer.from&&buffer.from!==Uint8Array.from?function(a){return(a.constructor===buffer.constructor?a:buffer.from(a,"base64")).toString()}:function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(atob(a))};var decode=function(a){return _decode(String(a).replace(/[-_]/g,function(m0){return m0=="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};var noConflict=function(){var Base64=global.Base64;global.Base64=_Base64;return Base64};global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict};if(typeof Object.defineProperty==="function"){var noEnum=function(v){return{value:v,enumerable:false,writable:true,configurable:true}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)}));Object.defineProperty(String.prototype,"toBase64",noEnum(function(urisafe){return encode(this,urisafe)}));Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,true)}))}}if(global["Meteor"]){Base64=global.Base64}if(typeof module!=="undefined"&&module.exports){module.exports.Base64=global.Base64}else if(typeof define==="function"&&define.amd){define([],function(){return global.Base64})}})(typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:this);

var input = {
		"all":"",
		"offset": 0,
		"skip": (i)=>{ // skip i chars from input stream. return true if skiped to end else false
			if (typeof i == 'number') {
				input.offset+=i;
				if (input.offset<0) input.offset=0;
				else if(input.offset>input.all.length) input.offset=input.all.length;
				else if (input.offset==input.all.length) {}
				else if (input.all[input.offset]==undefined) { input.offset=0; throw new IOERROR("not valid offset"); }
				return input.offset==input.all.length;
			} else
				throw new IOERROR("skip not number")
		},
		"read_line": ()=>{
			if (input.offset==input.all.length) return false;
			var j = input.offset;
			while (1)
				if (input.all[input.offset] == '\n')
					return input.all.slice(j,input.offset++);
				else if (input.offset>=input.all.length)
					return input.all.slice(j,input.all.length);
				else
					input.offset++;
		},
		"read_to_EOF": ()=>{
			if (input.offset==input.all.length) return false;
			var j = input.offset;
			input.offset = input.all.length;
			return input.all.slice(j, input.all.length);
		},
		"throw_read_line": ()=>{ var s = input.read_line(); if (s === false ) { throw new IOERROR("Not can read line"); } return s; },
		"read_matrix": (source, maper)=>{
			if (maper===undefined) maper = (x)=>{ if (!/^[+-]?([0-9]*[.])?[0-9]+$/.test(x) || !isFinite(parseFloat(x))) throw new IOERROR(x+" is not float"); return parseFloat(x); };
			source = (source===undefined?input.read_to_EOF():source);
			if (source === false) throw new IOERROR("Not can read line");
			matrix = source.split('\n').filter(x=>x.trim()!='').map(line=>line.split(' ').filter(x=>x.trim()!='').map(maper));
			if (matrix.length && matrix.filter(x=>x.length!=matrix[0].length)>0)
				throw new IOERROR("Matrix is not rectangular");
			return matrix;
		},
		"read_ini2object": (source)=>{ // read ini file from input stream
			// key = val
			// key2=val2
			// [section]
			// key = val3
			var data = source||input.read_to_EOF();
			var regex = {
				section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
				param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
				comment: /^\s*;.*$/
			};
			var value = {};
			var lines = data.split(/[\r\n]+/);
			var section = null;
			lines.forEach(function(line){
				if(regex.comment.test(line)){
					return;
				}else if(regex.param.test(line)){
					var match = line.match(regex.param);
					if(section){
						value[section][match[1]] = match[2];
					}else{
						value[match[1]] = match[2];
					}
				}else if(regex.section.test(line)){
					var match = line.match(regex.section);
					value[match[1]] = {};
					section = match[1];
				}else if(line.length == 0 && section){
					section = null;
				};
			});
			return value;
		},
		"by_id": (id)=>{
			return input.all.filter(x=>x.id==id)[0];
		},
		"by_name": (name)=>{
			return input.all.filter(x=>x.name==name);
		},
		"value_by_id": (id)=>{
			var e=input.by_id(id);
			if (e) return e.value;
		},
		"sandbox_version":0,
		"build_version":0,
		"init": ()=>{ output.all=''; output.files={}; output.all_error=''; }
	};

var output = {
		"all": "",
		"files": {},
		"test_file_name": (file_name) => {
			return /^([A-Za-z0-9_]{1,32}\/){0,10}[A-Za-z0-9_]{1,32}\.[A-Za-z]{1,4}$/.test(file_name);
		},
		"write_to_file": (file, text, type)=>{
			if (!~['undefined','base64'].indexOf(''+type)) throw new IOERROR("Type can be undefined and base64");
			if (!output.test_file_name(file)) throw new IOERROR("filename "+file+" is not valid");
			if (type == 'base64') {
				if (output.files[file]) throw new IOERROR("Unable to write binary files");
				else output.files[file] = text;
			} else {
				if (output.files[file]) output.files[file] = Base64.encode(Base64.decode(output.files[file]) + text);
				else output.files[file] = Base64.encode(text);
			}
		},
		"print": (s)=>{
			if (s === undefined) throw new IOERROR("Not can print undefined");
			if (typeof s == 'string') {
				output.all += s;
				return;
			}
			output.all += JSON_stringify(s);
		},
		
		"all_error":"",
		"print_error": (s)=>{
			if (typeof s == 'string') {
				output.all_error += s;
				return;
			}
			throw new IOERROR("Not can print_error "+s);
		},
		"flush": ()=>{},
		"init": ()=>{}
	};


// ================================ BIOS ================================
// ================================ BIOS ================================
// ================================ BIOS ================================

if (in_sandbox) {
	console.log('sandbox on');
	var sendMessage = (s, obj)=>{window.parent.postMessage(s+' '+JSON.stringify(obj), '*');};
	sendMessage('load_sandbox','')
	var loading_libs = [];
	var included_libs = [];
	var cached_py_sourse = '______________';
	var cached_py = '';
	var current_version = 0;
	
	var __events = [];
	var __event_loop=()=>{
		//console.log('1');
		__events.map(x=>x).map((x,i)=>{
			if (!i) __events=[];
			if (x[1]<=+new Date()){
				x[0](x[2],x[3],x[4]);
				return false;
			}
			__events.push(x);
		});
	};
				
	var commandManager = {
		'run':(____system_data)=>{
			if (included_libs.filter(x=>____system_data.libs.indexOf(x)<0).length>0) {
				sendMessage('rebuild_sandbox');
				return;
			}
			
			var need_load_libs = ____system_data.libs.filter(x=>included_libs.indexOf(x)<0);
			if (need_load_libs.length>0) {
				need_load_libs.filter((x)=>loading_libs.indexOf(x)<0).map(x=>{
					loading_libs.push(x);
					sendMessage('load_libs',x);
				});
				setTimeout(()=>{commandManager['run'](____system_data)},20);
				return;
			}
			current_version = ____system_data.version;
			//var i = 0;
			(()=>{
				var local_version = current_version;
				var send_result = (code)=>{ if (current_version==local_version) sendMessage('send_rez', [code, output.all, output.all_error, output.files]); };
				if (____system_data.option.input[1] == 'inline_string')
					input.all = ____system_data.inputs[0].value;
				else if (____system_data.option.input[1] == 'text')
					input.all = ____system_data.inputs[0].value;
				else if (____system_data.option.input[1] == 'number')
					input.all = ____system_data.inputs[0].value;
				else
					input.all = ____system_data.inputs;
				if (____system_data.language == 'py') {
					if (cached_py_sourse!=____system_data.script) {
						cached_py_sourse = ____system_data.script;
						cached_py = __BRYTHON__.python_to_js(____system_data.script);
					}
					____system_data.script=cached_py;
				}
				if (____system_data.language == 'py') $B.restart_timer();
				input.init();
				output.init();
				last_ret_code=0;
				output.flush=()=>{send_result(last_ret_code);};
				console.log(local_version);
				input.build_version=local_version;
				__events = [];
				try {
					var setTimeout = (f,time,arg1,arg2,arg3)=>{
						__events.push([f,+(new Date())+(time&&time>0?time:0),arg1,arg2,arg3]);
					}
					var setInterval = (f,time,arg1,arg2,arg3)=>{
						var r=()=>{
							f(arg1,arg2,arg3);
							setTimeout(r,time);
						};
						setTimeout(r,time);
					}
					console.log(setTimeout);
					last_ret_code=eval("(()=>{try {"+
							(____system_data.language != 'py'?____system_data.script:''+____system_data.script+'; return 0;')+
						"} catch(e){"+
							"if(e.name === undefined) return 0;"+
							"if (e.$py_error) {"+
								"output.print_error('Python runtime error on '+e.$linenos.join(', ')+': \\n '+e.args.join(', '));"+
								"return 255;"+
							"}"+
							"output.print_error('Ошибка ' + e.name + ': ' + e.message + '\\n' + e.stack);"+
							"return 255;"+
						"}})()");
				} catch(e){
					output.print_error('Ошибка ' + e.name + ': ' + e.message + '\\n' + e.stack);
				}
				send_result(last_ret_code);
			})();
			if (____system_data.language == 'py') $B.stop_timer();
		},
		'load_libs': (cached_lib)=>{
			eval(cached_lib[1]);
			included_libs.push(cached_lib[0]);
			if (cached_lib[0]=='brython') {
				brython();
				window['brython'] = eval('brython');
				window['__BRYTHON__'] = eval('__BRYTHON__');
				window['$B'] = eval('$B');
				var tmp = $B.set_lineno;
				var start_prog;
				$B.restart_timer = ()=>{start_prog=+new Date()};
				$B.stop_timer = ()=>{start_prog=new Date()*100};
				$B.stop_timer();
				$B.set_lineno = (frame, lineno)=>{
					tmp(frame, lineno);
					if (start_prog+500<+new Date()) {
						console.warn('123');
						throw $B.exception({'name':'TimeLimit','message':'Runtime 500 milliseconds timed out','toString':()=>':'});
					}
				};
				$B.$io.flush  = function(self) {
					if (self.buf) {
						output.print(self.buf.join(""));
						self.buf = []
					}
				}
				console.warn($B.set_lineno);
				return;
			}
			window[cached_lib[0]] = eval(cached_lib[0]);
		},
		'stop_print_low': (new_version)=>{
			current_version = new_version;
		},
		'onInterval': ()=>{
			__event_loop();
		},
		'load_sandbox':(v)=>{
			input.sandbox_version=v;
		}
	};
	
	window.addEventListener("message", (e)=>{
		if (commandManager[e.data.split(' ')[0]]) {
			var s = e.data.replace(e.data.split(' ')[0]+' ','');
			var rez = commandManager[e.data.split(' ')[0]](s==='undefined'?undefined:JSON.parse(s));
			return;
		}
		console.log("command not found "+e.data.split(' ')[0]);
	});
	
}