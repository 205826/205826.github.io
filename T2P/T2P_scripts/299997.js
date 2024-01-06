//- name: GL LG2
//- description: Евклидово пространство, квадратичные формы, сигнатура
//- author: &#60;T&#62;
//- semester: 2
//- faculty: ВТ
//- input: html_gl
//- input_default_value: <h2>Задание 1</h2>Подпространство $$L$$ Евклидова пространства $$E^3$$ задано как система уравнений на координаты векторов $$x_i$$:<br>
//- input_default_value: $$L: $$ <input type="text" style="margin-left:20px"\ id="T1V1" value="2"> $$x_1+$$<input type="text"\ id="T1V2" value="0"> $$x_2+$$<input type="text"\ id="T1V3" value="-4"> $$x_3 = 0$$<br>
//- input_default_value: <input type="text" style="margin-left:48.5px"\ id="T1V4" value="3"> $$x_1+$$<input type="text"\ id="T1V5" value="-1"> $$x_2+$$<input type="text"\ id="T1V6" value="-5"> $$x_3 = 0$$<br>
//- input_default_value: Скалярное произведение задано матрицей Грама $$G$$<br>
//- input_default_value: $$G=\Bigg($$<textarea id="T1V7" style="width:70px;height:55px;vertical-align:middle;">2 -1 -3\n-1 2 -1\n-3 -1 9</textarea>$$\Bigg)$$<br>
//- input_default_value: Найти базис ортогонального дополнения $$L^\perp$$ к пространству $$L$$

//- input_default_value: <h2>Задание 2</h2>Подпространство $$L$$ Евклидова пространства $$E^3$$ задано как линейная оболочка векторов:<br>
//- input_default_value: $$L: \mathfrak{L}\{\Bigg($$<textarea id="T2V1" style="width:70px;height:55px;vertical-align:middle;">2 -2\n2 0\n0 0</textarea>$$\Bigg)\}$$<br>
//- input_default_value: Скалярное произведение задано матрицей Грама $$G$$:<br>
//- input_default_value: $$G=\Bigg($$<textarea id="T2V2" style="width:70px;height:55px;vertical-align:middle;">4 2 -2\n2 4 -2\n-2 -2 2</textarea>$$\Bigg)$$<br>
//- input_default_value: Вектор $$y$$ задан своими координатами в стандартном базисе:<br>
//- input_default_value: $$y=\Bigg($$<textarea id="T2V3" style="width:30px;height:55px;vertical-align:middle;">-2\n-4\n2</textarea>$$\Bigg)$$<br>
//- input_default_value: Найти $$y_L$$ - ортогональную проекцию вектора $$y$$ на $$L$$.

//- input_default_value: <h2>Задание 3</h2>Квадратичная форма $$q$$ в некотором базисе $$\{e_i\}^2_{i=1}$$ задаётся формулой:<br>
//- input_default_value: $$q(x) = $$ <input type="text" style="margin-left:20px"\ id="T3V1" value="1"> $$(\xi^1)^2+$$<input type="text"\ id="T3V2" value="4"> $$\xi^1\xi^2+$$<input type="text"\ id="T3V3" value="4"> $$(\xi^2)^2$$<br>
//- input_default_value: Найти матрицу формы $$q$$ в бвзисе $$\{\widetilde{e}_i\}^2_{i=1}$$, если координаты веторов $$\xi^i$$ в базисе $$\{e_i\}^2_{i=1}$$ связаны с координатами веторов $$\widetilde{\xi}^i$$ в базисе $$\{\widetilde{e}_i\}^2_{i=1}$$ соотношением:<br>
//- input_default_value: $$\Bigg\{\xi=\Bigg($$<textarea id="T3V4" style="width:70px;height:55px;vertical-align:middle;">5 -9\n-4 7</textarea>$$\Bigg)(\widetilde{\xi}^1\ \widetilde{\xi}^2)^T$$<br>

//- input_default_value: <h2>Задание 4</h2>Найти матрицу $$A_\phi$$ линейного оператора $$\phi \in Hom(E^2, E^2)$$ в стандатном базисе, если известно, что квадратичная форма $$q$$, заданная своими координатам в стандартном базисе присоединена к этому оператору, а скалярное произведение в $$E^2$$ задано своей матрицей $$G$$ в стандартном базисе. <br>
//- input_default_value: $$q(x) = $$ <input type="text" style="margin-left:20px"\ id="T4V1" value="4"> $$(\xi^1)^2+$$<input type="text"\ id="T4V2" value="16"> $$\xi^1\xi^2+$$<input type="text"\ id="T4V3" value="6"> $$(\xi^2)^2$$<br>
//- input_default_value: $$G=\Bigg($$<textarea id="T4V4" style="width:70px;height:55px;vertical-align:middle;">1 1\n1 3</textarea>$$\Bigg)$$<br>

//- input_default_value: <h2>Задание 5</h2>Найти сигнатуру квадратичной формы $$q(x)$$, если в стандартном базисе она задаётся формулой:<br>
//- input_default_value: $$q(x) = $$ <input type="text" style="margin-left:20px"\ id="T5V00" value="-1"> $$(\xi^1)^2+$$<input type="text"\ id="T5V01" value="-4"> $$\xi^1\xi^2+$$<input type="text"\ id="T5V02" value="-4"> $$\xi^1\xi^3+$$<input type="text"\ id="T5V11" value="-4"> $$(\xi^2)^2+$$<input type="text"\ id="T5V12" value="-8"> $$\xi^2\xi^3+$$<input type="text"\ id="T5V22" value="-4"> $$(\xi^3)^2$$<br>
//- input_default_value: В качестве ответа введите пару чисел, первое из которых будет являться положительным индексом инерции квадратичной формы $$q$$, а второе отрицательным<br>
//- import: math
//- output: html
var out='';
var parseMatrix = (a)=>a.split('\n').filter(x=>x.trim()).map(x=>x.split(' ').filter(y=>y.trim()).map(x=>parseInt(x)));
var getInput = (a)=>input.all.filter(x=>x.id==a)[0].value;
function M_tos(matrix,f) {
  	var toFix = (x)=>{
    var factor = Math.pow(10, 5);
    var v = (Math.round(Math.round(x * factor * 100) / 100) / factor).toString();
    if (v.indexOf('.') >= 0) {
        return v + factor.toString().substr(v.length - v.indexOf('.'));
    }
    return v;// + '.' + factor.toString().substr(1);
};

	return '<textarea id="GA" style="width:300px;height:55px;vertical-align:middle;">'+(f?'[':'')+matrix.map(x=>x.map(y=>toFix(y)).join(f?', ':' ')).join(f?'; ':'\n')+(f?']':'')+'</textarea>';
}
function ldl(arr) {
	var len = arr.length;
	var res = Array(len);

	for (var k = 0; k<len; ++k) res[k] = Array(k+1); // lower triangle

	res[0][0] = arr[0][0]; // diagonal

	for (var i = 1; i<len; ++i) {
		for (var j = 0; j < i; ++j) {
			res[i][j] = delta(arr[i][j], res, i, j) / res[j][j];
		}
		res[i][i] = delta(arr[i][i], res, i, i); // the diagonal is stored in the array
	}
	//integrate the diagonal back into L
	return diag(res);
}
function delta(aij, res, i, j) {
	for (var k=0, sum=aij; k<j; ++k) sum -= res[i][k] * res[j][k] * res[k][k];
	return sum;
}
function diag(res) { //integrate the diagonal back into L
	for (var i = 0; i<res.length; ++i) {
		res[i][i] = Math.sqrt( res[i][i] );
		for (var j = 0; j < i; ++j) res[i][j] *= res[j][j];
	}
	return res;
}
var oldf=math.usolveAll;
math.usolveAll = (a,b)=>oldf(math.lup(a).U,b);
(()=>{
	var L = [[+getInput('T1V1'), +getInput('T1V2'), +getInput('T1V3')],[+getInput('T1V4'), +getInput('T1V5'), +getInput('T1V6')]];
  	var G = parseMatrix(getInput('T1V7'));
	var fsr=math.usolveAll([[0,0,0],L[1],L[0]],[0,0,0]).filter(x=>x[0][0]||x[1][0]||x[2][0]).map(x=>math.multiply(math.transpose(x),G));
	
  	
  	fsr=fsr.map(x=>[x[0].map(y=>Math.round(y*1000000)/1000000)]);
	
  	
  	var v=math.usolveAll([fsr[2]?fsr[2][0]:[0,0,0],fsr[1]?fsr[1][0]:[0,0,0],fsr[0][0]],[0,0,0]).filter(x=>x[0][0]||x[1][0]||x[2][0]);
	out+='1. '+M_tos(v.map(x=>math.transpose(x)[0]),1)+'<br>';
})();
(()=>{
	var L = math.transpose(parseMatrix(getInput('T2V1')));
	var G = parseMatrix(getInput('T2V2'));
	var prd = (x,y)=>math.multiply(math.multiply(x,G),y);
	var e1 = L[0];
	var e2 = math.add(L[1],e1.map(x=>x*(-prd(L[1],e1)/prd(e1,e1))));
	e1 = e1.map(x=>x/Math.sqrt(prd(e1,e1)));
	e2 = e2.map(x=>x/Math.sqrt(prd(e2,e2)));
  	var y = math.transpose(parseMatrix(getInput('T2V3')))[0];
  	var z = math.add(math.multiply(prd(y,e1),e1),math.multiply(prd(y,e2),e2));
	out+='2. '+M_tos([z],1)+'<br>';
})();
(()=>{
	var Q=[[+getInput('T3V1'),getInput('T3V2')/2],[getInput('T3V2')/2,+getInput('T3V3')]];
	var E=parseMatrix(getInput('T3V4'));
  	var z=math.multiply(math.multiply(math.transpose(E),Q),E);
	out+='3. '+M_tos(z,1)+'<br>';
})();
(()=>{
	var Q=[[+getInput('T4V1'),getInput('T4V2')/2],[getInput('T4V2')/2,+getInput('T4V3')]];
	var G=parseMatrix(getInput('T4V4'));
  	var z=math.transpose(math.multiply(Q,math.pow(G,-1)));
	out+='4. '+M_tos(z,1)+'<br>';
})();
(()=>{
	var Q=[[+getInput('T5V00'),getInput('T5V01')/2,getInput('T5V02')/2],[getInput('T5V01')/2,+getInput('T5V11'),getInput('T5V12')/2],[getInput('T5V02')/2,getInput('T5V12')/2,+getInput('T5V22')]];
	out+='5. '+M_tos([[math.eigs(Q).values.filter(x=>x>0.0001).length,math.eigs(Q).values.filter(x=>x<-0.0001).length]],1)+'<br>';
})();

output.print(out);
return 0;
