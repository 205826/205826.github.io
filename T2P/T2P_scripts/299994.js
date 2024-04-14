//- name: Выч мат
//- description: Рубежная работа №1
//- author: &#60;T&#62;
//- semester: 4
//- faculty: ВТ
//- input: html
//- input_default_value: <h2>Задание №1</h2>Вычислить определенный интеграл указанным методом при заданом числе разбиения n интервала интегрирования [a, b]. Оценить точность.<br>
//- input_default_value: <br>
//- input_default_value: <input type="text" style="width:20px" id="T1B" value="1"><br>
//- input_default_value: $$\int($$<input type="text" style="width:100px" id="T1F" value="3x^2+4x">$$)dx$$<br>
//- input_default_value: <input type="text" style="width:20px" id="T1A" value="0"><br>
//- input_default_value: Метод: <select id="T1M"><option>Средних прямоугольников</option><option>Трапеции</option><option>Симпсона</option><option>Левых и правых прямоугольников</option></select><br>
//- input_default_value: n: <input type="text" style="width:20px" id="T1N" value="8"><br>

//- input_default_value: <h2>Задание №2</h2> Решить систему линейных уравнений указанным методом, выполнить 3 итерации. Вычислить невязку при получении значений. Начальное приближение M(<input type="text" style="width:100px" id="T2P" value="d">). <br>
//- input_default_value: <br>
//- input_default_value: $$A\Bigg($$<textarea id="T2A" style="width:110px;height:55px;vertical-align:middle;">5.5 1.6 1.7\n2.4 -2.0 -4.5\n0.8 3.4 0.9</textarea>$$\Bigg)$$<br>
//- input_default_value: $$B\Bigg($$<textarea id="T2B" style="width:50px;height:55px;vertical-align:middle;">1.0\n-1.5\n3.0</textarea>$$\Bigg)$$<br>
//- input_default_value: Метод: <select id="T2M"><option>Гауса-Зейделя</option><option>Простой итерации</option></select><br>

//- input_default_value: <h2>Задание №3</h2> Найти корень нелинейного уравнения указанным методом с точностью до 0,01 на заданном интервале. <br>
//- input_default_value: <br>
//- input_default_value: <input type="text" style="width:150px" id="T3F" value="3x^3+0.1x^2+0.5"> $$= 0$$<br>
//- input_default_value: Метод: <select id="T3M"><option>Половинного деления</option><option>Ньютона</option><option>Хорд</option><option>Секущих</option></select><br>
//- input_default_value: [a, b]: [<input type="text" style="width:20px" id="T3A" value="-2">, <input type="text" style="width:20px" id="T3B" value="0">]<br>

// input_default_value: <h2>Задание №4</h2> Имеет ли место сходимость метода простой итерации к найденому корню $$x^*$$ при заданных значениях $$\lambda$$ и $$x_0$$? Ответ обоснуйте. <br>
// input_default_value: <br>
// input_default_value: <input type="text" style="width:150px" id="T4F" value="ln(x-5)*sin(x)+2"> $$= 0$$<br>
// input_default_value: $$x^*$$: <input type="text" style="width:80px" id="T4X" value="16.65949"><br>
// input_default_value: $$\lambda$$ = <input type="text" style="width:30px" id="T4L" value="0.6"><br>
// input_default_value: $$x_0$$ = <input type="text" style="width:30px" id="T4X0" value="17"><br>

//- input_default_value: <h2>Задание №5</h2> Найти решение системы нелинейных уравнений с точносью до 0.01 <br>
//- input_default_value: <br>
//- input_default_value: $$\Bigg\{$$<textarea id="T5F" style="width:150px;height:39px;vertical-align:middle;">sin(y+1)-x=2\n2y+cos(x)=1</textarea><br>
//- input_default_value: $$x_0$$ = <input type="text" style="width:30px" id="T5X0" value="-1"><br>
//- input_default_value: $$y_0$$ = <input type="text" style="width:30px" id="T5Y0" value="0"><br>
//- input_default_value: Метод: <select id="T5M"><option>Простых итераций</option><option>Ньютона</option></select><br>

//- import: math
//- output: html
function adsimp (f, a, b, fa, fm, fb, V0, tol, maxdepth, depth, state) {  if (state.nanEncountered) {    return NaN;  }  var h, f1, f2, sl, sr, s2, m, V1, V2, err;  h = b - a;  f1 = f(a + h * 0.25);  f2 = f(b - h * 0.25);  if (isNaN(f1)) {    state.nanEncountered = true;    return;  }  if (isNaN(f2)) {    state.nanEncountered = true;    return;  }  sl = h * (fa + 4 * f1 + fm) / 12;  sr = h * (fm + 4 * f2 + fb) / 12;  s2 = sl + sr;  err = (s2 - V0) / 15;  if (depth > maxdepth) {    state.maxDepthCount++;    return s2 + err;  } else if (Math.abs(err) < tol) {    return s2 + err;  } else {    m = a + h * 0.5;    V1 = adsimp(f, a, m, fa, f1, fm, sl, tol * 0.5, maxdepth, depth + 1, state);    if (isNaN(V1)) {      state.nanEncountered = true;      return NaN;    }    V2 = adsimp(f, m, b, fm, f2, fb, sr, tol * 0.5, maxdepth, depth + 1, state);    if (isNaN(V2)) {      state.nanEncountered = true;      return NaN;    }    return V1 + V2;  }}
function integrate (f, a, b, tol, maxdepth) {  var state = {    maxDepthCount: 0,    nanEncountered: false  };  if (tol === undefined) {    tol = 1e-8;  }  if (maxdepth === undefined) {    maxdepth = 20;  }  var fa = f(a);  var fm = f(0.5 * (a + b));  var fb = f(b);  var V0 = (fa + 4 * fm + fb) * (b - a) / 6;  var result = adsimp(f, a, b, fa, fm, fb, V0, tol, maxdepth, 1, state);  if (state.maxDepthCount > 0 && output && output.print_error) {    output.print_error('integrate-adaptive-simpson: Warning: maximum recursion depth (' + maxdepth + ') reached ' + state.maxDepthCount + ' times');  }  if (state.nanEncountered && output && output.print_error) {    output.print_error('integrate-adaptive-simpson: Warning: NaN encountered. Halting early.');  }  return result;}
function permute(arr) {  const result = [];  const swap = (a, i, j) => ([a[i], a[j]] = [a[j], a[i]]);  const generate = (k, heapArr) => {    if (k === 1) {      result.push(heapArr.slice());      return;    }    generate(k - 1, heapArr);    for (let i = 0; i < k - 1; i++) {      swap(heapArr, k % 2 ? 0 : i, k - 1);      generate(k - 1, heapArr);    }  };  generate(arr.length, arr.slice());  return result;}
var _ = (s,i)=>math.round(s,i||5);
var table = (arr)=>{
	var style='padding:2px 5px;';
	return '<table border="2"><thead>'+arr.map(line => {
	  return ('<tr><td style="'+style+'">'+line.join('</td><td  style="'+style+'">')+'</td></tr>');
	}).join('')+'</tbody></table>';
};
var parseMatrix = (a)=>a.split('\n').filter(x=>x.trim()).map(x=>x.split(' ').filter(y=>y.trim()).map(x=>parseFloat(x)));
output.all='';

(()=>{
	output.print('<h2>Задание №1</h2>');
	var a=parseFloat(input.by_id('T1A').value);
	var b=parseFloat(input.by_id('T1B').value);
	var f=math.parse(input.by_id('T1F').value);
	var n=parseInt(input.by_id('T1N').value);
	var method=input.by_id('T1M').value;
	//output.print(method+'<br/>');
	var int = integrate((x)=>f.evaluate({x:x}), a, b, 1e-8);
	//output.print(f.evaluate({x:2}));
	
	if(n<1) return output.print('N<1<br>');
	if(a>=b) return output.print('a>=b<br>');
	({
		'Средних прямоугольников': ()=>{
			output.print("$$I=\\int_{"+a+"}^{"+b+"} ("+f.toTex({parenthesis: 'keep'})+")dx = "+_(int)+"$$<br><br>");
			var h=(b-a)/n;
			var arr = [['$$i$$'],['$$x_{i-\\frac{1}{2}}$$'],['$$y_{i-\\frac{1}{2}}$$']];
			var sum1=0;
			var i;
			for (i=1;i<=n;i++){
				arr[0].push(i);
				arr[1].push(a+(i-1/2)*h);
				var v=f.evaluate({x:a+(i-1/2)*h});
				sum1+=v;
				arr[2].push(v);
			}
			output.print('Разобьем отрезок интегрирования на '+n+' равных частей: $$n = '+n+'$$, $$h = \\frac{b-a}{n} = '+_(h)+'$$<br>');
			output.print('По формулам средних прямоугольников получим:<br>');
			output.print("$$I$$<sub><i>сред</i></sub>$$= h\\sum_{i=1}^{n}y_i = "+_(h*sum1)+"$$<br>");
			output.print("Погрешность в вычислении интеграла составляет:<br>");
			output.print("$$\\Delta I$$<sub><i>сред</i></sub>$$ = I - I$$<sub><i>сред</i></sub>$$ = "+_(int)+" - "+_(h*sum1)+"="+_(Math.abs(int-h*sum1))+" (\\approx "+_(Math.abs((int-h*sum1)/int)*100,2)+"\\%)$$<br>");
			
			for (i=1;i<=n;i++){
				arr[0][i]=_(arr[0][i]);
				arr[1][i]=_(arr[1][i]);
				arr[2][i]=_(arr[2][i]);
			}	
			output.print(table(arr));
		},
		'Трапеции': ()=>{
			output.print("$$I=\\int_{"+a+"}^{"+b+"} ("+f.toTex({parenthesis: 'keep'})+")dx = "+_(int)+"$$<br><br>");
			var h=(b-a)/n;
			var arr = [['$$i$$'],['$$x_i$$'],['$$y_i$$']];
			var sum1=0;
			var i;
			for (i=0;i<=n;i++){
				arr[0].push(i);
				arr[1].push(a+i*h);
				var v=f.evaluate({x:a+i*h});
				if(i>0 && i<n)sum1+=v;
				arr[2].push(v);
			}
			output.print('Разобьем отрезок интегрирования на '+n+' равных частей: $$n = '+n+'$$, $$h = \\frac{b-a}{n} = '+_(h)+'$$<br>');
			output.print("$$I$$<sub><i>трап</i></sub>$$=\\int_{"+a+"}^{"+b+"} ("+f.toTex({parenthesis: 'keep'})+")dx =$$ $$h \\cdot \\big(\\frac{y_0+y_n}{2}+\\sum_{i=1}^{n-1}y_i\\big) =$$ $$"+h+" \\cdot \\big(\\frac{"+_(arr[2][1])+"+"+_(arr[2][n+1])+"}{2} + ("+arr[2].slice(2,-1).map(x=>_(x)).join('+')+")\\big) = "+_(h*((arr[2][1]+arr[2][n+1])/2+sum1))+"$$<br><br>");
			for (i=1;i<=n;i++){
				arr[0][i]=_(arr[0][i]);
				arr[1][i]=_(arr[1][i]);
				arr[2][i]=_(arr[2][i]);
			}	
			output.print("Погрешность в вычислении интеграла составляет:<br>");
			output.print("$$\\Delta I$$<sub><i>трап</i></sub>$$ = $$ $$I - I$$<sub><i>трап</i></sub>$$ = "+_(int)+" - "+_(h*((arr[2][1]+arr[2][n+1])/2+sum1))+"="+_(Math.abs(int-h*((arr[2][1]+arr[2][n+1])/2+sum1)))+" (\\approx "+_(Math.abs((int-h*((arr[2][1]+arr[2][n+1])/2+sum1))/int)*100,3)+"\\%)$$<br>");
			output.print(table(arr));
		},
		'Симпсона': ()=>{
			var h=(b-a)/n;
			output.print("Найти значение интеграла методом Симпсона: $$I=\\int_{"+a+"}^{"+b+"} ("+f.toTex({parenthesis: 'keep'})+")dx = "+_(int)+"$$<br/>При $$n = "+n+"$$, $$h = \\frac{b-a}{n} = "+_(h)+"$$<br><br>");
			var arr = [['$$i$$'],['$$x_i$$'],['$$y_i$$']];
			var sum1=0,sum2=0;
			var ssum1=[],ssum2=[];
			var i;
			for (i=0;i<=n;i++){
				arr[0].push(i);
				arr[1].push(a+i*h);
				var v=f.evaluate({x:a+i*h});
				if (i>0 && i<n && i%2) {sum1+=v;ssum1.push(_(v));}
				if (i>0 && i<n && 1-i%2) {sum2+=v;ssum2.push(_(v));}
				arr[2].push(v);
			}
			var tmparr = JSON.parse(JSON.stringify(arr));
			for (i=1;i<=n+1;i++){
				arr[0][i]=_(arr[0][i]);
				arr[1][i]=_(arr[1][i]);
				arr[2][i]=_(arr[2][i]);
			}
			output.print(table(arr));
			arr = tmparr;
			
			output.print("$$I$$<sub><i>сим</i></sub>$$= \\frac{"+h+"}{3}[("+_(arr[2][1])+" + 4("+ssum1.join('+')+") + 2("+ssum2.join('+')+")) + "+_(arr[2][n+1])+"] = "+_(h/3*(arr[2][1]+arr[2][n+1]+4*sum1+2*sum2))+"$$<br>");
			output.print("$$\\Delta I$$<sub><i>сим</i></sub>$$ = I - I$$<sub><i>сим</i></sub>$$ = "+_(int)+" - "+_(h/3*(arr[2][1]+arr[2][n+1]+4*sum1+2*sum2))+"="+_(Math.abs(int-h/3*(arr[2][1]+arr[2][n+1]+4*sum1+2*sum2)))+" (\\approx "+_(Math.abs((int-h/3*(arr[2][1]+arr[2][n+1]+4*sum1+2*sum2))/int)*100)+"\\%)$$<br>");
		},
		'Левых и правых прямоугольников': ()=>{
			output.print("$$I=\\int_{"+a+"}^{"+b+"} ("+f.toTex({parenthesis: 'keep'})+")dx = "+_(int)+"$$<br><br>");
			var h=(b-a)/n;
			var arr = [['$$i$$'],['$$x_i$$'],['$$y_i$$']];
			var sum1=0,sum2=0;
			var i;
			for (i=0;i<=n;i++){
				arr[0].push(i);
				arr[1].push(a+i*h);
				var v=f.evaluate({x:a+i*h});
				if (i>0) sum1+=v;
				if (i<n) sum2+=v;
				arr[2].push(v);
			}
			output.print('Разобьем отрезок интегрирования на '+n+' равных частей: $$n = '+n+'$$, $$h = \\frac{b-a}{n} = '+_(h)+'$$<br>');
			output.print('По формулам левых и правых прямоугольников получим:<br>');
			output.print("$$I$$<sub><i>прав</i></sub>$$= h\\sum_{i=1}^{n}y_i = "+_(h*sum1)+"$$<br>");
			output.print("$$I$$<sub><i>лев</i></sub>$$= h\\sum_{i=1}^{n}y_{i-1} = "+_(h*sum2)+"$$<br>");
			output.print("Погрешность в вычислении интеграла составляет:<br>");
			output.print("$$\\Delta I$$<sub><i>прав</i></sub>$$ = I - I$$<sub><i>прав</i></sub>$$ = "+_(int)+" - "+_(h*sum1)+"="+_(Math.abs(int-h*sum1))+" (\\approx "+_(Math.abs((int-h*sum1)/int)*100,1)+"\\%)$$<br>");
			output.print("$$\\Delta I$$<sub><i>лев</i></sub>$$ = I - I$$<sub><i>лев</i></sub>$$ = "+_(int)+" - "+_(h*sum2)+"="+_(Math.abs(int-h*sum2))+" (\\approx "+_(Math.abs((int-h*sum2)/int)*100,1)+"\\%)$$<br>");
			
			for (i=1;i<=n+1;i++){
				arr[0][i]=_(arr[0][i]);
				arr[1][i]=_(arr[1][i]);
				arr[2][i]=_(arr[2][i]);
			}	
			output.print(table(arr));
		}
	})[method]();
})();

(()=>{
	var m=(input.by_id('T2P').value.trim()=='d'?'d':input.by_id('T2P').value.split(',').map(y=>y.trim()).map(parseFloat));
	var a=parseMatrix(input.by_id('T2A').value);
	var b=parseMatrix(input.by_id('T2B').value);
	var method=input.by_id('T2M').value=='Гауса-Зейделя';
	output.print('<h2>Задание №2</h2>');
	if(m.length!=3 && m!='d') return output.print(m+'M.length!=3<br>');
	if (Math.abs(a[0][0])<Math.abs(a[0][1])+Math.abs(a[0][2]) || Math.abs(a[1][1])<Math.abs(a[1][0])+Math.abs(a[0][2]) || Math.abs(a[2][2])<Math.abs(a[2][1])+Math.abs(a[2][0])){
		var s=[];
		if (Math.abs(a[0][0])<Math.abs(a[0][1])+Math.abs(a[0][2])) s.push('|'+_(a[0][0])+'|<|'+_(a[0][1])+'|+|'+_(a[0][2])+'|');
		if (Math.abs(a[1][1])<Math.abs(a[1][0])+Math.abs(a[0][2])) s.push('|'+_(a[1][1])+'|<|'+_(a[1][0])+'|+|'+_(a[0][2])+'|');
		if (Math.abs(a[2][2])<Math.abs(a[2][0])+Math.abs(a[2][1])) s.push('|'+_(a[2][2])+'|<|'+_(a[2][0])+'|+|'+_(a[2][1])+'|');
		output.print('Условие преобладания диагональных элементов не выполняется, так как '+s.join(', ')+'.');
		var new_a = 0;
		permute(a.map((x,i)=>i)).map(p2=>{
			if (new_a) return;
			var _a = a.map(x=>x.map(()=>0));
			a.map((y,j)=>y.map((x,i)=>_a[p2[j]][i]=x));
			if (Math.abs(_a[0][0])>=Math.abs(_a[0][1])+Math.abs(_a[0][2]) && Math.abs(_a[1][1])>=Math.abs(_a[1][0])+Math.abs(_a[0][2]) && Math.abs(_a[2][2])>=Math.abs(_a[2][1])+Math.abs(_a[2][0]))
				new_a = [_a,p2];
		});
		if (!new_a) {
			let p2 = [0,1,2];
			var _a = a.map(x=>x.map(()=>0));
			a.map((y,j)=>y.map((x,i)=>_a[p2[j]][i]=x));
			new_a = [_a,p2];
			output.print(' Переставить уравнения местами так, чтобы выполнялось условие преобладания диагональных элементов не удалось.<br>');
		}else output.print(' Переставим уравнения местами так, чтобы выполнялось условие преобладания диагональных элементов:<br>');
		var new_b = []; 
		b.map((x,i)=>new_b[new_a[1][i]]=x);
		b=new_b;
		a=new_a[0];
		var z_ = (x)=>(x>=0?'+':'')+_(x);
		output.print('$$\\left\\{\\begin{align}'+
			a.map((x,i)=>_(a[i][0])+'x_1'+z_(a[i][1])+'x_2'+z_(a[i][2])+'x_3 &= '+_(b[i][0])+'').join(' \\\\')+
		'\\end{align}\\right.$$<br/>');
		output.print('Выразим из первого уравнения $$x_1$$, из второго $$x_2$$, из третьего $$x_3$$:<br/>');
		var c = [[a[0][1],a[0][2],-b[0][0]].map(x=>x/-a[0][0]),
				 [a[1][0],a[1][2],-b[1][0]].map(x=>x/-a[1][1]),
				 [a[2][0],a[2][1],-b[2][0]].map(x=>x/-a[2][2])];
		var c_lables = [['x_2', 'x_3', ''], ['x_1', 'x_3', ''], ['x_1', 'x_2', '']];
		output.print('$$\\left\\{\\begin{align}'+
			a.map((x,i)=>'x_'+(i+1)+'&='+_(c[i][0])+c_lables[i][0]+z_(c[i][1])+c_lables[i][1]+z_(c[i][2])+'').join(' \\\\')+
		'\\end{align}\\right.$$<br/><br/>');
	 // output.all='';
		c_lables = method?
		  [['x_2^k', 'x_3^k', ''], ['x_1^{k+1}', 'x_3^k', ''], ['x_1^{k+1}', 'x_2^{k+1}', '']]:
		  [['x_2^k', 'x_3^k', ''], ['x_1^k', 'x_3^k', ''], ['x_1^k', 'x_2^k', '']];
		var ss='$$\\left\\{\\begin{align}'+
			c.map((x,i)=>'x_'+(i+1)+'^{k+1}&='+_(c[i][0])+c_lables[i][0]+z_(c[i][1])+c_lables[i][1]+z_(c[i][2])+'').join(' \\\\')+
		'\\end{align}\\right.$$<br/><br/>';
		a.map((x,i)=>c[i].splice(i, 0, 0));
		output.print('$$C=\\begin{pmatrix}'+
			c.map(x=>x.slice(0,3).map(x=>_(x)).join('&')).join(' \\\\')+
		'\\end{pmatrix}$$<br/>');
		output.print('$$d=\\begin{pmatrix}'+
			c.map(x=>_(x[3])).join(' \\\\')+
		'\\end{pmatrix}$$<br/>');
		output.print('Зададим начальное приближение:<br/>');
		output.print('$$x^0=');	
	  if(m==='d') {m = c.map(x=>[x[3]]);output.print('d=');}
		output.print('\\begin{pmatrix}'+
			c.map(x=>_(x[3])).join(' \\\\')+
		'\\end{pmatrix}$$<br/>');
		output.print('Выполним расчеты по формуле:'+(method?'':' $$x^{k+1}=Cx^k+d$$ или:'));
		output.print(ss);
	  
		output.print('Для первого приближения получаем:<br>');
		var s_ = (x)=>(x<0?'(':'')+_(x)+(x<0?')':'');
		m = m.map(x=>x[0]);
		var arr=[['$$k$$','$$x_1^k$$','$$x_2^k$$','$$x_3^k$$','$$max|x_i^{(k)} - x_i^{(k-1)}|$$'],[0].concat(m.map(x=>_(x))).concat('-')];
		[0,1,2].map(x=>{
			var new_m = m.map(x=>x);
			[0,1,2].map(y=>{
				new_m[y]=0;
				var s='';
				c[y].slice(0,3).map((x,i)=>{new_m[y]+=m[i]*x; if (x) s+=(s?z_(x)+' \\cdot '+s_(m[i]):_(x)+' \\cdot '+s_(m[i]));});
				new_m[y]+=c[y][3];
				s+=z_(c[y][3]);
				if (!x) output.print('$$x_'+(y+1)+'^'+(x+1)+'='+s+'='+_(new_m[y])+'$$<br/>');
				if (method) m=new_m.map(x=>x);
			});
			arr.push([x+1].concat(new_m.map(x=>_(x))));
			//output.print(new_m);
			m = new_m;
		});
		[2,3,4].map(x=>{
			var max=0;
			arr[x-1].slice(1,4).map((z,i)=>max=Math.max(max,Math.abs(parseFloat(z)-parseFloat(arr[x].slice(1,4)[i]))));
			arr[x].push(_(max));
		});
		output.print(table(arr));
		output.print('$$r = Ax-b = \\begin{pmatrix}'+
			parseMatrix(input.by_id('T2A').value).map(x=>x.map(x=>_(x)).join('&')).join(' \\\\')+
		'\\end{pmatrix}\\begin{pmatrix}'+
			m.map(x=>_(x)).join(' \\\\')+
		'\\end{pmatrix} - \\begin{pmatrix}'+
			parseMatrix(input.by_id('T2B').value).map(x=>_(x)).join(' \\\\')+
		'\\end{pmatrix} = \\begin{pmatrix}'+
			//         math.multiply(parseMatrix(input.by_id('T2A').value),m).map(x=>x).join(' \\\\ ')+
			math.subtract(math.multiply(parseMatrix(input.by_id('T2A').value),m).map(x=>[x]),parseMatrix(input.by_id('T2B').value)).map(x=>x.map(x=>_(x)).join(' & ')).join(' \\\\ ')+
		'\\end{pmatrix}$$');
	 }
	
})();
(()=>{
	var f=math.parse(input.by_id('T3F').value);
	var a=parseFloat(input.by_id('T3A').value);
	var b=parseFloat(input.by_id('T3B').value);
	var method=input.by_id('T3M').value;
	if (f.evaluate({x:a})*f.evaluate({x:b})>0) output.print('f(a)*b(b)>0. ТАК НЕ ДОЛЖНО БЫТЬ! ВЫ ВЕРНО ПЕРЕПИСАЛИ ФОРМУЛУ??? ФУНКЦИЯ НА ГРАНИЦАХ ИНТЕРВАЛА ВОЗВРАЩАЕТ ЗНАЧЕНИЯ ОДНОГО ЗНАКА! КОРНЕЙ НЕЧЁТНОЕ КОЛИЧЕТСВО<br/>');
	output.print('<h2>Задание №3</h2>');
	output.print('Найти корень уравнения:<br/>');
	output.print('$$'+f.toTex({parenthesis: 'keep'})+'=0$$<br/>');
	output.print('с точностью $$\\varepsilon = 0.01$$<br/>');
	if(a>=b) return output.print('a>=b<br>');
	({
		'Половинного деления':()=>{
			var n=Math.floor(Math.log((b-a)/0.01)/Math.log(2)+1);
			output.print('$$n=\\log_2\\frac{|a_0-b_0|}{\\varepsilon}+1='+n+'$$<br/>');
			var x=(a+b)/2;
			var _f= (x)=>f.evaluate({x:x});
			var arr = [
			  ['№<br/>итерации','a','b','x','f(a)','f(b)','f(x)','|a-b|'],
			  [0,a,b,x,_f(a),_f(b), _f(x),b-a]
			];
			var i;
			for (i=1;i<=n;i++){
				var ar = [];
				if(_f(a)*_f(x)>0) a=x; else b=x;
				x=(a+b)/2;
				ar=[i,a,b,x,_f(a),_f(b), _f(x),b-a];
				arr.push(ar);
			}
			for (i=1;i<=n+1;i++){
				arr[i]=arr[i].map(x=>_(x));
			}	
			output.print('$$x^*=\\frac{a_7+b_7}{2}\\approx'+_(x)+'$$');
			output.print(table(arr));
		},
		'Ньютона':()=>{
			var _f=(x)=>f.evaluate({x:x});
			var df=math.derivative(f,'x');
			var _df=(x)=>df.evaluate({x:x});
			var ddf=math.derivative(df,'x');
			var _ddf=(x)=>ddf.evaluate({x:x});
			var i;
			
			output.print('$$f\'(x)='+df.toTex({parenthesis: 'keep'})+' \\quad ');
			output.print('f\'\'(x)='+ddf.toTex({parenthesis: 'keep'})+'$$<br/>');
			df = df.compile();
			ddf = ddf.compile();
			let x_prev = 0;
			let x_curr = a;
			var save_sign = true;
			for (i=a;i<b;i+=(b-a)/100){
				if (_df(i)*_df(i)<0)save_sign=false;
				if (_ddf(i)*_ddf(i)<0)save_sign=false;
			}
			output.print((save_sign?'Сохраняют':'Не сохраняют')+' знак на ['+a+';'+b+']<br/>');
			output.print('$$f('+a+')'+(_f(a)<0?'<':'>')+'0 \\quad f('+b+')'+(_f(b)<0?'<':'>')+'0$$<br/>');
			if (_f(a)*_ddf(a)>0) output.print('$$f\'\'('+a+')'+(_f(a)<0?'<':'>')+'0 \\to x_0 = '+_(a)+'$$<br/>');
			else if (_f(b)*_ddf(b)>0) output.print('$$f\'\'('+b+')'+(_f(b)<0?'<':'>')+'0 \\to x_0 = '+_(b)+'$$<br/>');
			var arr = [
			  	['№<br/>итерации','$$x_i$$','$$f(x_i)$$','$$f\'(x_i)$$','$$x_{i+1}$$','$$|x_{i+1}-x_i|$$']
			];
			i=0;
			do
			{
				i++;
				if (i>100) break;
				x_prev = x_curr;
				x_curr -= _f(x_curr)/_df(x_curr);
				
				arr.push([i-1, x_prev,_f(x_prev),_df(x_prev), x_curr, Math.abs(x_prev-x_curr)]);
			} while (Math.abs(x_prev-x_curr) > 0.01);
			
			output.print('$$n = '+_(i)+' \\quad ');
			output.print('x^*\\approx '+_(x_curr)+'$$');
			for (i=1;i<arr.length;i++){
				arr[i]=arr[i].map(x=>_(x));
			}	
			output.print(table(arr));
		},
		'Хорд':()=>{
			var n=20;
			var _f= (x)=>f.evaluate({x:x});
			output.print('$$f('+a+')'+(_f(a)<0?'<':'>')+'0\\quad  f('+b+')'+(_f(b)<0?'<':'>')+'0$$<br/>');
			output.print('$$x_i=\\frac{a_i f(b_i) - b_i f(a_i)}{f(b_i)-f(a_i)}$$<br/>');
			var x=(a*_f(b)-b*_f(a))/(_f(b)-_f(a));
			var arr = [
			  	['№<br/>итерации','a','b','x','f(a)','f(b)','f(x)','$$|x_{i+1}-x_i|$$'],
			 	[0,a,b,x,_f(a),_f(b), _f(x),Math.abs(a-x)]
			];
			var i;
			for (i=1;i<=n;i++){
				var ar = [];
				if(_f(a)*_f(x)>0) a=x; else b=x;
				x=(a*_f(b)-b*_f(a))/(_f(b)-_f(a));
				ar=[i,a,b,x,_f(a),_f(b), _f(x),Math.abs(arr[i][3]-x)];
				arr.push(ar);
				if (Math.abs(arr[i][3]-x)<0.01) break;
			}
			for (i=1;i<arr.length;i++){
				arr[i]=arr[i].map(x=>_(x));
			}	
			output.print('$$n='+(arr.length-1)+'$$<br/>');
			output.print('$$x^*\\approx'+_(x)+'$$<br/>');
			output.print(table(arr));
		},
		'Секущих':()=>{
			var _f= (x)=>f.evaluate({x:x});
			var i;
			
			
			let x_prev = 0;
			let x_curr = a;
			let x_next = (b+a)/2;
			
			var arr = [
			  ['№<br/>итерации','$$x_{i-1}$$','$$x_i$$','$$x_{i+1}$$','$$f(x_{i+1})$$','$$|x_{i+1}-x_i|$$']
			];
			i=0;
			do
			{
				i++;
				if (i>100) break;
				x_prev = x_curr;
				x_curr = x_next;
				x_next = x_curr - _f(x_curr) * (x_prev - x_curr) / (_f(x_prev) - _f(x_curr));
				
				arr.push([i-1, x_prev,x_curr,x_next, _f(x_next), Math.abs(x_curr-x_next)]);
			} while (Math.abs(x_next - x_curr) > 0.01);
			output.print('$$x_0 = '+_(a)+' \\quad ');
			output.print('x_0 = '+_((b+a)/2)+'$$<br/>');
			output.print('$$n = '+_(i)+' \\quad ');
			output.print('x^*\\approx '+_(x_next)+'$$');
			for (i=1;i<arr.length;i++){
				arr[i]=arr[i].map(x=>_(x));
			}	
			output.print(table(arr));
		},
	})[method]();
	
})();
(()=>{
	var a=input.by_id('T5F').value.split('\n').filter(x=>x.trim()).map(x=>x.split('=').map(x=>math.parse(x)));
	var x0=parseFloat(input.by_id('T5X0').value);
	var y0=parseFloat(input.by_id('T5Y0').value);
	var method=input.by_id('T5M').value;
	output.print('<h2>Задание №5</h2>');
	if (method=='Простых итераций'){
		output.print('Найти положительное решение системы нелинейных уравнений с точностью $$\\varepsilon = 0.01$$<br>');
		output.print('$$\\left\\{\\begin{align}'+
				'f_1(x,y)&='+a[0][0].toString({parenthesis: 'auto'})+'='+a[0][1].toString()+' \\\\'+
				'f_2(x,y)&='+a[1][0].toString()+'='+a[1][1].toString()+
			'\\end{align}\\right.$$<br/>');
		var f = math.simplify('-('+a[0][0].toString()+')+('+a[0][1].toString()+')+x', {}, {exactFractions: false});
		var g = math.simplify('-('+a[1][0].toString()+')+('+a[1][1].toString()+')+y', {}, {exactFractions: false});

		output.print('$$\\left\\{\\begin{align}'+
					 'x&='+f.toTex({parenthesis: 'keep'})+' \\\\'+
					 'y&='+g.toTex({parenthesis: 'keep'})+
					 '\\end{align}\\right.$$<br/>');
		
		var i=0;
		var cb = function (node) {
		  if (node.isSymbolNode && node.name === 'x') {
			return new math.ConstantNode(_(x0,3));
		  } else if (node.isSymbolNode && node.name === 'y') {
			return new math.ConstantNode(_(y0,3));
		  } else {
			return node;
		  }
		};
		var s = '';
		for (i=0;i<100;i++){
			if (math.abs(math.derivative(f,'x').evaluate({x:x0,y:y0})) + math.abs(math.derivative(f,'y').evaluate({x:x0,y:y0}))>1||
				math.abs(math.derivative(g,'x').evaluate({x:x0,y:y0})) + math.abs(math.derivative(g,'y').evaluate({x:x0,y:y0}))>1){
				output.print('Проверим условие сходимости.<br>');
				output.print('$$\\frac{\\partial \\varphi_1}{\\partial x} = '+math.derivative(f,'x').toTex({parenthesis: 'keep'})+' \\quad ');
				output.print('\\frac{\\partial \\varphi_1}{\\partial y} = '+math.derivative(f,'y').toTex({parenthesis: 'keep'})+' $$<br>');
				output.print('$$\\frac{\\partial \\varphi_2}{\\partial x} = '+math.derivative(g,'x').toTex({parenthesis: 'keep'})+' \\quad ');
				output.print('\\frac{\\partial \\varphi_2}{\\partial y} = '+math.derivative(g,'y').toTex({parenthesis: 'keep'})+' $$<br>');
				
				output.print('<br>');
				output.print('$$|\\frac{\\partial \\varphi_1}{\\partial x}|  + |\\frac{\\partial \\varphi_1}{\\partial y}| = |'+math.derivative(f,'x').toTex({parenthesis: 'keep'})+'| + |'+math.derivative(f,'y').toTex({parenthesis: 'keep'})+'| ');
				output.print(math.abs(math.derivative(f,'x').evaluate({x:x0,y:y0})) + math.abs(math.derivative(f,'y').evaluate({x:x0,y:y0}))>1?'>1':'<1');output.print('$$<br>');
				output.print('$$|\\frac{\\partial \\varphi_2}{\\partial x}| + |\\frac{\\partial \\varphi_2}{\\partial y}| = |'+math.derivative(g,'x').toTex({parenthesis: 'keep'})+'| + |'+math.derivative(g,'y').toTex({parenthesis: 'keep'})+'| ');
				output.print(math.abs(math.derivative(g,'x').evaluate({x:x0,y:y0})) + math.abs(math.derivative(g,'y').evaluate({x:x0,y:y0}))>1?'>1':'<1');output.print('$$<br>');
				
				output.print('$$max|\\varphi\'(x)|>1$$<br>');
				return;
			}
			if (!i) s+=('Выберем начальное приближение: $$x_0 = '+_(x0)+' \\quad y_0 = '+_(y0)+'$$<br>');
			s+=((i+1)+' шаг.<br>');
			var nx = f.evaluate({x:x0,y:y0});
			var ny = g.evaluate({x:x0,y:y0});
			s+=('$$x_{'+(i+1)+'}='+f.transform(cb).toTex({parenthesis: 'keep'})+'='+_(nx)+'$$<br>');
			s+=('$$y_{'+(i+1)+'}='+g.transform(cb).map(x=>x).toTex({parenthesis: 'keep'})+'='+_(ny)+'$$<br>');
			s+=('$$|x_{'+(i+1)+'}-x_{'+i+'}|='+_(Math.abs(x0-nx))+(_(Math.abs(x0-nx))>0.01?'>\\varepsilon':'<\\varepsilon')+' \\quad |y_{'+(i+1)+'}-y_{'+i+'}|='+_(Math.abs(y0-ny))+(_(Math.abs(y0-ny))>0.01?'>\\varepsilon':'<\\varepsilon')+'$$<br>');

			if (Math.abs(x0-nx)<0.01 && Math.abs(y0-ny)<0.01) break;
			x0 = nx;
			y0 = ny;
		}
		output.print(s);
	}else {
		output.print('$$\\left\\{\\begin{align}'+
				''+a[0][0].toString({parenthesis: 'auto'})+'='+a[0][1].toString({parenthesis: 'auto'})+' \\\\'+
				''+a[1][0].toString({parenthesis: 'auto'})+'='+a[1][1].toString({parenthesis: 'auto'})+
			'\\end{align}\\right.$$ $$\\to$$ ');
		var f2 = math.simplify('('+a[0][0].toString()+')-('+a[0][1].toString()+')', {}, {exactFractions: false});
		var g2 = math.simplify('('+a[1][0].toString()+')-('+a[1][1].toString()+')', {}, {exactFractions: false});
		var b = [[math.derivative(f2,'x'),math.derivative(f2,'y')],[math.derivative(g2,'x'),math.derivative(g2,'y')]];
		output.print('$$\\left\\{\\begin{align}'+
					 'f(x,y)=0 \\\\'+
					 'g(x,y)=0'+
					 '\\end{align}\\right.$$ $$\\to$$ ');
		output.print('$$\\left\\{\\begin{align}'+
					 ''+f2.toTex({parenthesis: 'keep'})+'=0 \\\\'+
					 ''+g2.toTex({parenthesis: 'keep'})+'=0'+
					 '\\end{align}\\right.$$<br/>');
		output.print('Построим матрицу Якоби:<br/>');
		output.print('$$\\frac{\\partial f}{\\partial x} = '+b[0][0].toTex({parenthesis: 'auto'})+' \\quad $$');
		output.print('$$\\frac{\\partial f}{\\partial y} = '+b[0][1].toTex({parenthesis: 'auto'})+' \\quad $$');
		output.print('$$\\frac{\\partial g}{\\partial x} = '+b[1][0].toTex({parenthesis: 'auto'})+' \\quad $$');
		output.print('$$\\frac{\\partial g}{\\partial y} = '+b[1][1].toTex({parenthesis: 'auto'})+'$$<br/>');
		output.print('Тогда будем решать следующую систему линейных уравнений:<br/>');
		output.print('$$\\begin{vmatrix}'+
			'\\frac{\\partial f(x,y)}{\\partial x} & \\frac{\\partial f(x,y)}{\\partial y} \\\\'+
			'\\frac{\\partial g(x,y)}{\\partial x} & \\frac{\\partial g(x,y)}{\\partial y} '+
		'\\end{vmatrix}\\begin{pmatrix}'+
			'\\Delta x \\\\'+
			'\\Delta y '+
		'\\end{pmatrix}=-\\begin{pmatrix}f(x,y) \\\\ g(x,y)\\end{pmatrix}$$<br/>');
		output.print('$$\\begin{vmatrix}'+
			b[0][0].toTex({parenthesis: 'auto'})+' & '+b[0][1].toTex({parenthesis: 'auto'})+' \\\\'+
			b[1][0].toTex({parenthesis: 'auto'})+' & '+b[1][1].toTex({parenthesis: 'auto'})+
		'\\end{vmatrix}\\begin{pmatrix}'+
			'\\Delta x \\\\'+
			'\\Delta y '+
		'\\end{pmatrix}=\\begin{pmatrix}'+math.simplify('-('+f2.toString()+')').toTex({parenthesis: 'keep'})+' \\\\ '+math.simplify('-('+g2.toString()+')').toTex({parenthesis: 'keep'})+'\\end{pmatrix}$$ или <br/>');
		
		output.print('$$\\left\\{\\begin{align}('+b[0][0].toTex({parenthesis: 'auto'})+')\\Delta x + ('+b[0][1].toTex({parenthesis: 'auto'})+')\\Delta y &='+math.simplify('-('+f2.toString()+')').toTex({parenthesis: 'keep'})+' \\\\');
		output.print('('+b[1][0].toTex({parenthesis: 'auto'})+')\\Delta x + ('+b[1][1].toTex({parenthesis: 'auto'})+')\\Delta y &='+math.simplify('-('+g2.toString()+')').toTex({parenthesis: 'keep'})+'\\end{align}\\right.$$<br><br/>');
		var j=0;
		var ii=1;
		output.print('Шаг 1. Выбираем $$x_0='+x0+', y_0='+y0+'$$.<br/>');
		output.print('$$\\left\\{\\begin{align}('+b[0][0].toTex({parenthesis: 'auto'})+')\\Delta x + ('+b[0][1].toTex({parenthesis: 'auto'})+')\\Delta y &='+math.simplify('-('+f2.toString()+')').toTex({parenthesis: 'keep'})+' \\\\');
		output.print('('+b[1][0].toTex({parenthesis: 'auto'})+')\\Delta x + ('+b[1][1].toTex({parenthesis: 'auto'})+')\\Delta y &='+math.simplify('-('+g2.toString()+')').toTex({parenthesis: 'keep'})+'\\end{align}\\right.$$<br>');
		output.print('На первой итерации система будет иметь вид:<br>');
		for (j=0;j<100;j++){
			var z_ = (x)=>(x<0?_(x):'+'+(_(x)=='1'?'':_(x)));
			var ev = b.map(x=>x.map(x=>x.evaluate({x:x0,y:y0})));
			output.print('$$\\left\\{\\begin{align}'+_(ev[0][0])+'\\Delta x  '+z_(ev[0][1])+'\\Delta y &='+_(-f2.evaluate({x:x0,y:y0}))+' \\\\');
			output.print(_(ev[1][0])+'\\Delta x  '+z_(ev[1][1])+'\\Delta y &='+_(-g2.evaluate({x:x0,y:y0}))+'\\end{align}\\right.$$<br>');
			ii++;
			output.print('Шаг '+ii+'. Решаем полученную систему.<br/>');
			
			//output.print(x0+' '+y0);
			//output.print('<br>');
			var nxy = math.multiply( math.inv(ev),[f2,g2].map(x=>[-x.evaluate({x:x0,y:y0})]));
			output.print('Получаем $$\\Delta x='+_(nxy[0][0])+'$$ и $$\\Delta y='+_(nxy[1][0])+'$$.<br/>');
			ii++;
			output.print('Шаг '+ii+'. Вычисляем очередные приближения:<br/>');
			var nx2 = x0+nxy[0][0];
			var ny2 = y0+nxy[1][0];
			output.print('$$x_'+(j+1)+' = x_'+j+' + \\Delta x = '+_(x0)+z_(nxy[0][0])+'='+_(nx2)+'$$<br/>');
			output.print('$$y_'+(j+1)+' = y_'+j+' + \\Delta y = '+_(y0)+z_(nxy[1][0])+'='+_(ny2)+'$$<br/>');
			ii++;
			output.print('Шаг '+ii+'.  Проверяем критерий окончания итерационного процесса при $$\\varepsilon = 0.01$$<br/>');
			output.print('$$|x_'+(j+1)+' - x_'+j+'|\\le \\varepsilon \\quad |y_'+(j+1)+' - y_'+j+'|\\le \\varepsilon$$<br/>');
			output.print('$$|'+_(nx2)+' - '+_(x0)+'| '+(Math.abs(x0-nx2)<0.01?'\\le':'>')+' \\varepsilon \\quad |'+_(ny2)+' - '+_(y0)+'|'+(Math.abs(y0-ny2)<0.01?'\\le':'>')+' \\varepsilon$$<br/>');
			
			
			if (Math.abs(x0-nx2)<0.01 && Math.abs(y0-ny2)<0.01) break;
			ii++;
			output.print('Шаг '+ii+'. Подставляем очередные приближения в систему:<br/>');
			x0 = nx2;
			y0 = ny2;
		}
	}
})();
return 0;
