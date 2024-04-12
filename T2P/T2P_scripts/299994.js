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
//- input_default_value: $$B\Bigg($$<textarea id="T2B" style="width:30px;height:55px;vertical-align:middle;">1.0\n-1.5\n3.0</textarea>$$\Bigg)$$<br>
//- input_default_value: Метод: <select id="T2M"><option>Гауса-Зейделя</option><option>Простой итерации</option></select><br>

//- input_default_value: <h2>Задание №3</h2> Найти корень нелинейного уравнения указанным методом с точностью до 0,01 на заданном интервале. <br>
//- input_default_value: <br>
//- input_default_value: <input type="text" style="width:150px" id="T3F" value="3*x^3+0.1*x^2+0.5"> $$= 0$$<br>
//- input_default_value: Метод: <select id="T3M"><option>Половинного деления</option><option>Ньютона</option><option>Хорд</option><option>Секущих</option></select><br>
//- input_default_value: [a, b]: [<input type="text" style="width:20px" id="T3A" value="-2">, <input type="text" style="width:20px" id="T3B" value="0">]<br>

//- input_default_value: <h2>Задание №4</h2> Имеет ли место сходимость метода простой итерации к найденому корню $$x^*$$ при заданных значениях $$\lambda$$ и $$x_0$$? Ответ обоснуйте. <br>
//- input_default_value: <br>
//- input_default_value: <input type="text" style="width:150px" id="T4F" value="ln(x-5)*sin(x)+2"> $$= 0$$<br>
//- input_default_value: $$x^*$$: <input type="text" style="width:80px" id="T4X" value="16.65949"><br>
//- input_default_value: $$\lambda$$ = <input type="text" style="width:30px" id="T4L" value="0.6"><br>
//- input_default_value: $$x_0$$ = <input type="text" style="width:30px" id="T4X0" value="17"><br>

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
      	output.print('Условие преобладания диагональных элементов не выполняется, так как '+s.join(', ')+'. Переставим уравнения местами так, чтобы выполнялось условие преобладания диагональных элементов:<br>');
	  	var new_a = 0;
      	permute(a.map((x,i)=>i)).map(p2=>{
        	if (new_a) return;
       		var _a = a.map(x=>x.map(()=>0));
       	 	a.map((y,j)=>y.map((x,i)=>_a[p2[j]][i]=x));
        	if (Math.abs(_a[0][0])>=Math.abs(_a[0][1])+Math.abs(_a[0][2]) && Math.abs(_a[1][1])>=Math.abs(_a[1][0])+Math.abs(_a[0][2]) && Math.abs(_a[2][2])>=Math.abs(_a[2][1])+Math.abs(_a[2][0]))
          		new_a = [_a,p2];
      	});
      	if (!new_a) return output.print('!!!ПЕРЕСТАНОВКА НЕ УДАЛАСЬ!!! Условие сходимости видимо не выполняется, press F<br>');
      	var new_b = []; 
      	b.map((x,i)=>new_b[new_a[1][i]]=x);
     	b=new_b;
      	a=new_a[0];
      	var z_ = (x)=>(x>=0?'+':'')+_(x);
      	output.print('$$\\left\\{\\begin{align}'+
            a.map((x,i)=>_(a[i][0])+'x_1'+z_(a[i][1])+'x_2'+z_(a[i][2])+'x_3 &= '+_(b[i][0])+'').join(' \\\\')+
  		'\\end{align}\\right.$$<br/>');
      	output.print('Выразим из первого уравнения $$x_1$$ , из второго $$x_2$$, из третьего $$x_3$$:<br/>');
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
      
      	output.print('Для первого приближения получаем:');
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
return 0;
