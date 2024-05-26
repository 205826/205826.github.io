//- name: вычмат 2 рубежка
//- description: вычмат
//- author: &#60;T&#62; + &#60;K&#62;
//- semester: 4
//- input: html
//- input_default_value: 1.a.
//- input_default_value: Найти приблеженное значение функции при x=<input type="text" style="width:50px" id="T1ax" value="0.35"> для заданной таблицы с помощью <select id="T1am"><option value="n">Ньютона</option><option value="g">Гаусса</option><option value="l" selected>Лагранж</option></select>:<br>
//- input_default_value: <textarea id="T1at" style="width:300px;height:40px;vertical-align:middle;">0.1 0.2 0.3 0.4 0.5\n1.25 2.38 3.79 5.44 7.14</textarea><br>
//- input_default_value: 1.b.
//- input_default_value: Построить <select id="T1bm"><option value="n">многочлен Ньютона</option><option value="g" disabled>многочлен Гаусса</option><option value="l" selected>многочлен Лагранжа</option></select>, если функция $$y=f(x)$$ задана таблицей:<br>
//- input_default_value: <textarea id="T1bt" style="width:300px;height:40px;vertical-align:middle;">1 2 3 4\n0 3 5 7</textarea><br>
//- input_default_value: 2.
//- input_default_value: Найти кофициенты аппроксимации функции <select id="T2m"><option value="lin">y=ax + b</option><option value="log">y=alnx + b</option><option value="exp">y=ae^bx</option><option value="poc">y=ax^b</option></select> методом наименьших квадратов для таблицы заданой функции. Вычислить среднеквадратичное отклонение.<br>
//- input_default_value: <textarea id="T2t" style="width:300px;height:40px;vertical-align:middle;">1.1 2.3 3.7 4.5 5.4 6.8 7.5\n2.73 5.12 7.74 8.91 10.59 12.75 13.43</textarea><br>
//- input_default_value: 3.
//- input_default_value: Составить решение задачи Коши для обыкновенного дифференциального уравнения первого порядка методом <select id="T3m"><option value="me">модифицированным методом Эйлера</option><option value="e">Эйлера</option><option value="d2">Рунге-Кутта 2 порядка</option><option value="d4">Рунге-Кутта 4 порядка</option></select> с шагом h=<input type="text" style="width:50px" id="T3h" value="0.1">. Вычисления выполнять с тремя десятичными знаками.<br>
//- input_default_value: $$y'=$$<input type="text" style="width:150px" id="T3f" value="y+(1+x)*y^2"><br>
//- input_default_value: $$y_0=$$<input type="text" style="width:50px" id="T3y0" value="-1"><br>
//- input_default_value: $$x\in[$$<input type="text" style="width:40px" id="T3x0" value="1">$$;$$<input type="text" style="width:40px" id="T3xe" value="1.5">$$]$$<br>
//- output: html
//- import: math
//- import: nerdamer
var _ = (x) => {
    let s = math.evaluate(x).toString();
    if (s === 'true') return true;
    if (s === 'false') return false;
    return s;
};
var parseMatrix = (a)=>a.split('\n').filter(x=>x.trim()).map(x=>x.split(' ').filter(y=>y.trim()).map(x=>x));

function print_matrix(arr,loc) {
	// l = ["y_1","y_2","y_3","w"]
	// l = {"y_1":{"x_1":0,"x_2":-1,"x_3":1,"x_4":0,"x_5":0,"b":3},"y_2":{"x_1":-3,"x_2":-2.17,"x_3":0,"x_4":1,"x_5":0,"b":27},"y_3":{"x_1":-1,"x_2":-2.67,"x_3":0,"x_4":0,"x_5":1,"b":22},"w":{"x_1":-4,"x_2":-5.84,"x_3":1,"x_4":1,"x_5":1,"b":52}}
	let html = '<table border="1">';
    ['x','y'].forEach((row,i) => {
        html += `<tr><td>$$${loc[i]}$$</td>`;
        arr[row].forEach(col => {
            html += `<td>${_2(col)}</td>`;
        });
        html += '</tr>';
    });
    html += '</table>';
	output.print(html);
}

var _2 = (s,i)=>math.round(s,i||5);

function lagrnj(_xs,_ys,_x){
	let xs = _xs;
	let ys = _ys;
	
	if(xs.length !== ys.length) throw "не равны xs и ys";
	//if(xs.length > 20) throw "погрешность будет слишком большой";

	let fracs = new Array(xs.length); // [[числитель, знаменатель] [числитель, знаменатель] [числитель, знаменатель].....]

	const get_shared = (x_i) => {
		let all = new Array(xs.length).fill(0).map((_, i) => i);
		return all.slice(0, x_i).concat(all.slice(x_i + 1, xs.length)).map((v) => `(@ - x_${v})`);
	};

	for (let x_i = 0; x_i < xs.length; x_i++){
		fracs[x_i] = [
			get_shared(x_i).join("*").replaceAll("@", "x"), 
			get_shared(x_i).join("*").replaceAll("@", "x_" + x_i)
		]; // [числитель, знаменатель]
	}

	if (_x){
		// вычислить значение
		let x_val = Object.fromEntries(xs.map((v, i) => ["x_" + i, v]));
		let target_x = _x;
		let ans = "0";
		fracs.map((x,i)=>{
			let x_val_temp = { ...x_val };
			x_val_temp.x = target_x;
			let sum_part_wy = nerdamer(`(${fracs[i][0]}) / (${fracs[i][1]})`).evaluate(x_val_temp);
			let sum_part = nerdamer(`(${fracs[i][0]} * (${ys[i]})) / (${fracs[i][1]})`).evaluate(x_val_temp);
			ans = _(`${ans} + ${sum_part}`);
			var __x = [x[0],x[1]];
			x_val_temp = { ...x_val };
			Object.keys(x_val_temp).map(x=>{__x[0]=__x[0].replace(new RegExp(x, "g"),x_val_temp[x]);__x[1]=__x[1].replace(new RegExp(x, "g"),x_val_temp[x]);});
			output.print('$$l_{'+i+'}(x)=\\frac{'+x[0].replace(/\*/g,'')+'}{'+x[1].replace(/\*/g,'')+'}$$ = $$\\frac{'+__x[0].replace(/\*/g,'')+'}{'+__x[1].replace(/\*/g,'')+'}$$<br>');
			output.print('=$$'+_2(''+sum_part_wy)+'*y_{'+i+'} = '+_2(''+sum_part_wy)+'*'+_2(''+nerdamer(`${ys[i]}`).evaluate())+'$$ = $$'+_2(''+sum_part)+'$$<br>');
		});
		output.print('$$L_{'+(xs.length-1)+'}('+_x+') = '+fracs.map((x,i)=>'l_{'+i+'}(x)').join('+')+' = '+_2(ans)+'$$<br><br>');
	} else {
		output.print('$$n = '+(xs.length-1)+'$$<br>');
		output.print('$$L_{'+(xs.length-1)+'}(x) = $$');
		let x_val = Object.fromEntries(xs.map((v, i) => ["x_" + i, v]));
		output.print('$$');
		var f=(fracs.map((x,i)=>{
			let x_val_temp = { ...x_val };
			var __x = [x[0],x[1]];
			Object.keys(x_val_temp).map(x=>{__x[0]=__x[0].replace(new RegExp(x, "g"),x_val_temp[x]);__x[1]=__x[1].replace(new RegExp(x, "g"),x_val_temp[x]);});
			return (ys[i]+'*\\frac{'+__x[0].replace(/\*/g,'')+'}{'+__x[1].replace(/\*/g,'')+'}');
		}).join('+'));
		var t=nerdamer.coeffs(f.replace(/\\frac{(.*?)}{(.*?)}/g,'($1)/($2)'),'x').toString().replace(/[\[\]]/g,'').split(',').map(x=>x.replace(/(.*)\/(.*)/g,'\\frac{$1}{$2}'));
		output.print(f);
		output.print('='+t.map((x,i)=>i?x+(i-1?'x^{'+i+'}':'x'):x).reverse().join('+')+'$$');
	}
	
}
function nuton(_xs,_ys,_x){
	//let xs = ["1", "2", "3", "4"];
	//let xs = ["1", "3", "5", "7"];
	//let ys = ["1", "3", "5", "7"];
	let xs = _xs;//["0.1", "0.2", "0.3", "0.4", "0.5"];
	let ys = _ys;//["1.25", "2.38", "3.79", "5.44", "7.14"];
	const target_x= _x;//"0.47";\

	const table_for_neravnoots = () => {
		let a = [...ys];
		let r = [];

		for (let x_i = 0; x_i < xs.length; x_i++) {
			let a_temp = [];
			r.push(a);
			for (let j = 0; j + 1 < a.length; j++) {
				//output.print([j + x_i + 1, j]);
				a_temp.push(_(`(${a[j + 1]} - ${a[j]})/(${xs[j + x_i + 1]} - ${xs[j]})`));
			}
			a = [...a_temp];
		}
		return r;
	};

	// 24 слайд
	function neravnoots_solve() {    
		// здесь не нужен вывод таблицы 

		let t = table_for_neravnoots();
		let ans_to_compute = "0";
		let all = new Array(xs.length).fill(0).map((_, i) => `(x - x_${i})`);
		for(let i = 0; i < t.length; i++){
			let skobki = all.slice(0, i).join("*");
			ans_to_compute += " + " + `${t[i][0]}` + (skobki === "" ? "" : "*") + skobki;
		}

		let x_val = Object.fromEntries(xs.map((v, i) => ["x_" + i, v]));
		x_val.x = target_x;

		output.print(ans_to_compute);
		let ans = _(nerdamer(ans_to_compute).evaluate(x_val).toString());

		output.print(ans);
	}



	const table_for_ravnoots = () => {
		let a = [...ys];
		let r = [];

		for (let x_i = 0; x_i < xs.length; x_i++) {
			let a_temp = [];
			r.push(a);
			for (let j = 0; j + 1 < a.length; j++) {
				//output.print(j + x_i + 1, j);
				a_temp.push(_(`(${a[j + 1]} - ${a[j]})`));
			}
			a = [...a_temp];
		}
		return r;
	};

	const rotate_table = (table) => {
		let t = [];
		for(let i = 0; i < xs.length; i++){
			t[i] = [xs[i]].concat(new Array(xs.length - i).fill(0).map((v, j) => table[j][i]));
		}
		return t;
	};



	function ravnootst_solve_left() {
		let table = table_for_ravnoots();
		//output.print(table);
		
		
		
		var title = ['y_i','\\Delta y_i', '\\Delta^2 y_i'];
		new Array(20).fill(0).forEach((row,i) => {
			title.push('\\Delta^'+(i+3)+' y_i');
		});
		
		let html = '<table border="1">';
		html += `<tr><td>№</td><td>$$x_i$$</td>`;
		new Array(table.length).fill(0).forEach((_,i) => {
			html += '<td>$$'+title[i]+'$$</td>';
		});
		html += '</tr>';
		new Array(table.length).fill(0).forEach((row,i) => {
			html += `<tr><td>${i}</td><td>${xs[i]}</td>`;
			new Array(table.length).fill(0).forEach((col,j) => {
				html += j>=xs.length-i?'<td></td>':`<td>$$${_2(table[j][i])}$$</td>`;
			});
			html += '</tr>';
		});
		html += '</table>';
		output.print(html);
		
		table = rotate_table(table);
		
		

		let diff = xs[1] - xs[0]; // h
		let all = new Array(xs.length).fill(0).map((_, i) => `(t - ${i})`); // скобочки t(𝑡 − 1)(𝑡 − 2)

		let start_x_i = xs.findLastIndex((v) => _(`${target_x} > ${v}`));
		let t = _(`(${target_x} - ${xs[start_x_i]}) / ${diff}`);
		
		output.print('Для x='+_2(target_x)+`: $$t=\\frac{x-x_n}{h}=\\frac{${_2(target_x)} - ${_2(xs[start_x_i])}}{${_2(diff)}}=${_2(t)}$$<br>`);
		
		let ans = `${_2(table[start_x_i][1])} + (t*${_2(table[start_x_i][2])})`;
		let ans2 = `y_{${start_x_i}} + t*\\Delta y_{${start_x_i}}`;

		for (let i = 3; i < table[start_x_i].length; i++){
			ans += `+ (t*${all.slice(1, i - 1).join("*")}*${_2(table[start_x_i][i])})/${math.factorial(i-1)}`;
		   	ans2 += `+ \\frac{t*${all.slice(1, i - 1).join("*")}}{${i - 1}!}*\\Delta^{${i-1}} y_{${start_x_i}}`;
		}

		output.print('$$N_{'+(xs.length-start_x_i-1)+'}(x)='+ans2+'$$<br>');
		output.print('$$y('+target_x+')='+math.parse(ans.replace(/t/g,t<0?'('+_2(t)+')':_2(t))).toTex({parenthesis: 'keep'})+' \\approx '+_2(_(nerdamer(ans).evaluate({ t: t }).toString()))+'$$');
	} 

	function ravnootst_solve_right() {
		let table = table_for_ravnoots();
		//output.print(table);
		
		
		
		var title = ['y_i','\\Delta y_i', '\\Delta^2 y_i'];
		new Array(20).fill(0).forEach((row,i) => {
			title.push('\\Delta^'+(i+3)+' y_i');
		});
		
		let html = '<table border="1">';
		html += `<tr><td>№</td><td>$$x_i$$</td>`;
		new Array(table.length).fill(0).forEach((_,i) => {
			html += '<td>$$'+title[i]+'$$</td>';
		});
		html += '</tr>';
		new Array(table.length).fill(0).forEach((row,i) => {
			html += `<tr><td>${i}</td><td>${xs[i]}</td>`;
			new Array(table.length).fill(0).forEach((col,j) => {
				html += j>=xs.length-i?'<td></td>':`<td>$$${_2(table[j][i])}$$</td>`;
			});
			html += '</tr>';
		});
		html += '</table>';
		output.print(html);
		
		table = rotate_table(table);

		let start_x_i = xs.length-1;//xs.findIndex((v, i) => _("" + target_x + " < " + v));
		let diff = xs[1] - xs[0];
		let t = _(`(${target_x} - ${xs[start_x_i]}) / ${diff}`);
		
		output.print('Для x='+_2(target_x)+`: $$t=\\frac{x-x_n}{h}=\\frac{${_2(target_x)} - ${_2(xs[start_x_i])}}{${_2(diff)}}=${_2(t)}$$<br>`);
		
		let ans = `${_2(table[start_x_i][table[start_x_i].length - 1])} + 
		(t*${_2(table[start_x_i - 1][table[start_x_i - 1].length - 1])})`;
		let ans2 = `y_{${start_x_i}} + t*\\Delta y_{${start_x_i-1}}`;

		let all = new Array(xs.length).fill(0).map((_, i) => `(t + ${i})`);
		for (let i = start_x_i - 2, j = 3; i >= 0; i--, j++) {
			ans += `+ (t*${all.slice(1, j - 1).join("*")}*${_2(table[i][table[i].length - 1])})/${j - 1}!`;
		   	ans2 += `+ \\frac{t*${all.slice(1, j - 1).join("*")}}{${j - 1}!}*\\Delta^{${j-1}} y_{${i}}`;
		}

		output.print('$$N_{'+(xs.length-1)+'}(x)='+ans2+'$$<br>');
		output.print('$$y('+target_x+')='+math.parse(ans.replace(/t/g,t<0?'('+_2(t)+')':_2(t))).toTex({parenthesis: 'keep'})+' \\approx '+_2(_(nerdamer(ans).evaluate({ t: t }).toString()))+'$$');
	}

	// решить 
	function solve_newton(){
		if (_(`${target_x} > (${xs[0]}+${xs[xs.length-1]})/2`)){
			ravnootst_solve_right();
		}
		else ravnootst_solve_left();
	}

	// получить формулу
	function newton_get_formula() {
		
		
		let t = table_for_ravnoots();
		let ans_to_compute = [];
		let ans_to_compute2 = [];
		let diff = xs[1] - xs[0];
		output.print('n='+(xs.length-1)+', h='+diff+'<br>');
		//output.print(t);
		var title = ['y_i','\\Delta y_i', '\\Delta^2 y_i'];
		new Array(20).fill(0).forEach((row,i) => {
			title.push('\\Delta^'+(i+3)+' y_i');
		});
		
		let html = '<table border="1">';
		html += `<tr><td>$$x_i$$</td>`;
		new Array(xs.length).fill(0).forEach((_,i) => {
			html += '<td>$$'+title[i]+'$$</td>';
		});
		html += '</tr>';
		new Array(xs.length).fill(0).forEach((row,i) => {
			html += `<tr><td>${i+1}</td>`;
			new Array(xs.length).fill(0).forEach((col,j) => {
				html += j>=xs.length-i?'<td></td>':`<td>$$${_2(t[j][i])}$$</td>`;
			});
			html += '</tr>';
		});
		html += '</table>';
		output.print(html);
		let all = new Array(xs.length).fill(0).map((_, i) => `(x - x_${i})`);
		for (let i = 0; i < t.length; i++) {
			let skobki = all.slice(0, i).join("*");
			if (skobki=="") {
				ans_to_compute.push(t[i][0]);
				ans_to_compute2.push('y_0');
			}else if (Math.abs(math.factorial(i)*diff**i-1)<0.000001){
				ans_to_compute.push(`${t[i][0]}` + (skobki === "" ? "" : "*") + skobki + ``);
				ans_to_compute2.push('\\frac{\\Delta'+(i>1?'^'+i:'')+' y_0}{h'+(i>1?'^'+i:'')+'}' + (skobki === "" ? "" : "*") + skobki);
			}else { 
				ans_to_compute.push(`${t[i][0]}` + (skobki === "" ? "" : "*") + skobki + ` / (${i}!*${diff}^${i})`);
				ans_to_compute2.push('\\frac{\\Delta'+(i>1?'^'+i:'')+' y_0}{'+i+'!h'+(i>1?'^'+i:'')+'}' + (skobki === "" ? "" : "*") + skobki);
			}
		}
		let s = ans_to_compute.join(" + ");
		let x_val = Object.fromEntries(xs.map((v, i) => ["x_" + i, v]));
		let x_val_temp = { ...x_val };
		Object.keys(x_val_temp).map(x=>{s=s.replace(new RegExp(x, "g"),x_val_temp[x]);});

		output.print('$$N_'+(xs.length-1)+'(x)= $$ ');
		output.print('$$'+(ans_to_compute2.join('+'))+'= $$ ');
		output.print('$$'+math.parse(s).toTex({parenthesis: 'keep'})+'$$ ');
		
		
		var _t=nerdamer.coeffs(s,'x').toString().replace(/[\[\]]/g,'').split(',').map(x=>x.replace(/(.*)\/(.*)/g,'\\frac{$1}{$2}'));
		output.print('$$='+_t.map((x,i)=>i?x+(i-1?'x^{'+i+'}':'x'):x).reverse().join('+')+'$$');

	}
	if (target_x) solve_newton(); else newton_get_formula();
}
function gaus(_xs,_ys,_x){
	let xs = _xs;//["0.1", "0.2", "0.3", "0.4", "0.5"];
	let ys = _ys;//["1.25", "2.38", "3.79", "5.44", "7.14"];

	function differenceTable() {
		const n = ys.length;
		const defy = Array.from({ length: n }, () => Array(n).fill(0));

		for (let i = 0; i < n; i++) {
			defy[i][0] = ys[i];
		}

		for (let i = 1; i < n; i++) {
			for (let j = 0; j < n - i; j++) {
				defy[j][i] = defy[j + 1][i - 1] - defy[j][i - 1];
			}
		}

		return defy;
	}

	function gauss(self, v,) {
		self.defy = differenceTable();
		var h = _xs[1]-_xs[0];
		var title = ['y_i','\\Delta y_i', '\\Delta^2 y_i'];
		new Array(20).fill(0).forEach((row,i) => {
			title.push('\\Delta^'+(i+3)+' y_i');
		});
		let html = '<table border="1">';
		html += `<tr><td>$$x_i$$</td>`;
		new Array(xs.length).fill(0).forEach((_,i) => {
			html += '<td>$$'+title[i]+'$$</td>';
		});
		html += '</tr>';
		new Array(xs.length).fill(0).forEach((row,i) => {
			html += `<tr><td>${_xs[i]}</td>`;
			new Array(xs.length).fill(0).forEach((col,j) => {
				html += j>=xs.length-i?'<td></td>':`<td>$$${_2(self.defy[i][j])}$$</td>`;
			});
			html += '</tr>';
		});
		html += '</table>';
		output.print(html);
		//output.print(self.defy);
		self.x = xs;
		self.y = ys;
		let a = Math.floor(self.y.length / 2);
		let formula = [];
		let formula2 = [];

		if (_(`${v} > ${self.x[a]}`)) {

			let t = _(`(${v} - ${self.x[a]}) / ${h}`); 
			output.print(`$$t=\\frac{x-x_0}{h}=\\frac{${_2(v)} - ${_2(self.x[a])}}{${_2(h)}}=${_2(t)}$$<br>`);
			let n = self.defy.length;
			let pn = _(`${self.defy[a][0]} + ${t}*${self.defy[a][1]} + ((${t}*(${t}-1)) /2) * ${self.defy[a - 1][2]}`);
			formula.push(`${_2(self.defy[a][0])} + ${_2(t)}*${_2(self.defy[a][1])} + ${_2(t)}*(${_2(_(`${t}-1`))}) /2 * ${_2(self.defy[a - 1][2])}`);
			formula2.push(`y_0 + t \\Delta y_0 + \\frac{t(t-1)}{2!} \\Delta^2y_{-1}`);

			let tn = `${_2(t)} * (${_2(_(`${t} - 1`))})`; 
			let tn2 = 't(t-1)'; 
			for (let i = 3; i < n; i++) {
				let _n;
				if (i % 2 === 1) {
					_n = Math.floor((i + 1) / 2);
					tn = `${tn} * (${_2(_(`${t} + ${_n} - 1`))})`;
					tn2 += `(t+${_n-1})`;
					if (tn2=='t(t-1)(t+1)')tn2='t(t+1)(t-1)';
					pn = _(`${pn} + ((${tn}/${factorial(i)}) * ${self.defy[a - _n + 1][i]})`); 
					
					//let tn_fromula = `${tn} * (${_2(t)} + ${_n - 1})`;
					formula.push(`${tn}/${factorial(i)} * ${_2(self.defy[a - _n + 1][i])}`);
					formula2.push(`\\frac{${tn2}}{${i}!} * \\Delta^{${i}} y_{-${_n-1}}`);
				} else {
					_n = Math.floor(i / 2);
					tn = `${tn} * (${_2(_(`${t} - ${_n}`))})`;
					tn2 += `(t-${_n})`;
					if (tn2=='t(t-1)(t+1)')tn2='t(t+1)(t-1)';
					pn = _(`${pn} + ((${tn} / ${factorial(i)}) * ${self.defy[a - _n][i]})`); 

					//let tn_fromula = `${tn} * (${_2(t)} - ${_n})`;
					formula.push(`${tn} / ${factorial(i)} * ${_2(self.defy[a - _n][i])}`);
					formula2.push(`\\frac{${tn2}}{${i}!} * \\Delta^{${i}} y_{-${_n}}`);
				}
			}

			output.print('$$P_{'+(_xs.length-1)+'}(x) = '+formula2.join(" + ")+'$$ <br>');
			output.print('$$y('+(_x)+')\\approx $$ ');
			output.print('$$'+math.parse(formula.join(" + ")).toTex({parenthesis: 'keep'})+'\\approx $$ ');
			return pn;
		} else if (v < self.x[a]) {
			
			let t = _(`(${v} - ${self.x[a]}) / ${h}`); 
			output.print(`$$t=\\frac{x-x_0}{h}=\\frac{${_2(v)} - ${_2(self.x[a])}}{${_2(h)}}=${_2(t)}$$<br>`);
			let n = self.defy.length;
			let pn = _(`${self.defy[a][0]} + ${t} * ${self.defy[a - 1][1]} + ((${t} * (${t} + 1)) / 2) * ${self.defy[a - 1][2]}`);
			formula.push(`${_2(self.defy[a][0])} + ${_2(t)} * ${_2(self.defy[a - 1][1])} + ${_2(t)} * (${_2(_(`${t}+1`))}) / 2 * ${_2(self.defy[a - 1][2])}`);
			formula2.push(`y_0 + t \\Delta y_{-1} + \\frac{t(t+1)}{2!} \\Delta^2y_{-1}`);

			let tn = `${_2(t)} * (${_2(_(`${t}+1`))})`;
			let tn2 = 't(t+1)';

			for (let i = 3; i < n; i++) {
				//output.print('!'+i+'!');
				let _n;
				if (i % 2 === 1) {
					_n = Math.floor((i + 1) / 2);
					tn = `${tn} * (${_2(_(`${t}-${_n}+1`))})`; 
					tn2+='(t-'+(_n-1)+')';
				} else {
					_n = Math.floor(i / 2);
					tn = `${tn} * (${_2(_(`${t}+${_n}`))})`;
					tn2+='(t+'+(_n)+')';
				}
				let fact = factorial(i);
				pn = _(`${pn} + (${tn} / ${fact}) * ${self.defy[a - _n][i]}`);
				formula.push(`${tn} / ${fact} * ${_2(self.defy[a - _n][i])}`);
				formula2.push(`\\frac{${tn2}}{${i}!} * \\Delta^{${i}} y_{${-_n}}`);
			}

			output.print('$$P_{'+(_xs.length-1)+'}(x) = '+formula2.join(" + ")+'$$ <br>');
			output.print('$$y('+(_x)+')\\approx $$ ');
			output.print('$$'+math.parse(formula.join(" + ")).toTex({parenthesis: 'keep'})+'\\approx $$ ');
			return pn;
		} else {
			throw new Error("Error in Gauss");
		}
	}

	function factorial(n) {
		if (n === 0) {
			return 1;
		} else {
			return n * factorial(n - 1);
		}
	}


	output.print(_2(gauss({}, _x)));
}


output.print('<h2>Задание 1.a.</h2>');
if (input.by_id('T1am').value=='l')lagrnj(parseMatrix(input.by_id('T1at').value)[0], parseMatrix(input.by_id('T1at').value)[1], input.by_id('T1ax').value.trim());
if (input.by_id('T1am').value=='n')nuton(parseMatrix(input.by_id('T1at').value)[0], parseMatrix(input.by_id('T1at').value)[1], input.by_id('T1ax').value.trim());
if (input.by_id('T1am').value=='g')gaus(parseMatrix(input.by_id('T1at').value)[0], parseMatrix(input.by_id('T1at').value)[1], input.by_id('T1ax').value.trim());
output.print('<h2>Задание 1.b.</h2>');
if (input.by_id('T1bm').value=='l')lagrnj(parseMatrix(input.by_id('T1bt').value)[0], parseMatrix(input.by_id('T1bt').value)[1]);
if (input.by_id('T1bm').value=='n')nuton(parseMatrix(input.by_id('T1bt').value)[0], parseMatrix(input.by_id('T1bt').value)[1]);
if (input.by_id('T1bm').value=='g')gaus(parseMatrix(input.by_id('T1bt').value)[0], parseMatrix(input.by_id('T1bt').value)[1]);
//lagrnj(["0.1", "0.2", "0.3", "0.4", "0.5"], ["1.25", "2.38", "3.79", "5.44", "7.14"]);
//lagrnj(["1", "2", "3", "4"], ["0", "3", "5", "7"]);


function task2(_xs,_ys,f){
	if(_xs.length !== _ys.length) throw "не равны xs и ys";
	var table = {x:[],y:[]};
	var loc = ['x','y','a','b'];
	if (f=='exp'){
		output.print('Аппроксимирующая функция задана экспоненциальной функцией вида:<br>');
		output.print('$$\\varphi(x)=ae^{bx}$$<br>');
		output.print('Введем обозначения: $$Y=\\ln(\\varphi(x)); A=\\ln(a); B=b$$<br>');
		loc = ['x','Y','A','B'];
		table.x = _xs.map(x=>x);
		table.y = _ys.map(x=>Math.log(x));
	}else if(f=='lin') {
		loc = ['X','Y','a','b'];
		table.x = _xs.map(x=>x);
		table.y = _ys.map(x=>x);
		
		print_matrix(table,loc);
		//table = {x:[1.2, 2.9, 4.1, 5.5, 6.7, 7.8, 9.2, 10.3],y:[7.4, 9.5, 11.1,12.9, 14.6, 17.3, 18.2, 20.7]};
		let n=2;
		let a=new Array(n).fill(0).map((x,i)=>new Array(n).fill(0).map((y,j)=>table.x.map(y=>y**(i+j)).reduce((x,y)=>x+y)));
		let b=new Array(n).fill(0).map((x,i)=>table.x.map((y,j)=>table.y[j]*y**i).reduce((x,y)=>x+y));
		let obj = {'SX':a[0][1], 'SXX':a[1][1], 'SY':b[0], 'SXY':b[1], 'n':table.x.length};
		output.print('Вычисляем суммы: $$SX='+_2(obj.SX)+'\\ \\ \\ SXX='+_2(obj.SXX)+'\\ \\ \\ SY='+_2(obj.SY)+'\\ \\ \\ SXY='+_2(obj.SXY)+'$$<br>');
		output.print('Получаем систему линейных уравнений:<br>');
		output.print('$$\\left\\{\\begin{align}'+
			_2(a[1][1])+loc[2]+'+'+_2(a[0][1])+loc[3]+'&='+_2(b[1])+'\\\\'+
			_2(a[1][0])+loc[2]+'+'+_2(a[0][0])+loc[3]+'&='+_2(b[0])+'\\\\'+
		'\\end{align}\\right.$$<br/>');
		output.print('из которой находим (правило Крамера):<br/>');
		output.print('$$\\Delta=SXX \\cdot n - SX \\cdot SX = '+_2(obj.SXX*obj.n-obj.SX*obj.SX)+'$$<br>');
		output.print('$$\\Delta_1=SXY \\cdot n - SX \\cdot SY = '+_2(obj.SXY*obj.n-obj.SX*obj.SY)+'$$<br>');
		output.print('$$\\Delta_2=SXX \\cdot SY - SX \\cdot SXY = '+_2(obj.SXX*obj.SY-obj.SX*obj.SXY)+'$$<br>');
		let A = (obj.SXY*obj.n-obj.SX*obj.SY)/(obj.SXX*obj.n-obj.SX*obj.SX);
		let B = (obj.SXX*obj.SY-obj.SX*obj.SXY)/(obj.SXX*obj.n-obj.SX*obj.SX);
		output.print('$$'+loc[2]+'= \\frac{\\Delta_1}{\\Delta} = '+_2(A)+'$$<br>');
		output.print('$$'+loc[3]+'= \\frac{\\Delta_2}{\\Delta} = '+_2(B)+'$$<br>');
		F = (x)=>A*x+B;
		output.print('$$\\delta = \\sqrt{\\frac{\\sum_{i=1}^{n}(\\varphi(x_i)-y_i)^2}{n}}='+_2(aprox_D({x:_xs,y:_ys},F))+'$$<br>');
		return;
	}else if(f=='log') {
		output.print('Аппроксимирующая функция задана логарифмической функцией вида:<br>');
		output.print('$$\\varphi(x)=a\\ln(x)+b$$<br>');
		output.print('Введем обозначения: $$X=\\ln(x); A=a; B=b$$<br>');
		loc = ['X','y','A','B'];
		table.x = _xs.map(x=>Math.log(x));
		table.y = _ys.map(x=>x);
		
		output.print('Получаем линейную зависимость: $$'+loc[1]+'='+loc[2]+loc[0]+'+'+loc[3]+'$$.<br>');
		output.print('Определеним коэффициенты А и В:');
		print_matrix(table,loc);
		//table = {x:[1.2, 2.9, 4.1, 5.5, 6.7, 7.8, 9.2, 10.3],y:[7.4, 9.5, 11.1,12.9, 14.6, 17.3, 18.2, 20.7]};
		let n=2;
		let a=new Array(n).fill(0).map((x,i)=>new Array(n).fill(0).map((y,j)=>table.x.map(y=>y**(i+j)).reduce((x,y)=>x+y)));
		let b=new Array(n).fill(0).map((x,i)=>table.x.map((y,j)=>table.y[j]*y**i).reduce((x,y)=>x+y));
		let obj = {'SX':a[0][1], 'SXX':a[1][1], 'SY':b[0], 'SXY':b[1], 'n':table.x.length};
		output.print('Вычисляем суммы: $$SX='+_2(obj.SX)+'\\ \\ \\ SXX='+_2(obj.SXX)+'\\ \\ \\ SY='+_2(obj.SY)+'\\ \\ \\ SXY='+_2(obj.SXY)+'$$<br>');
		output.print('Получаем систему линейных уравнений:<br>');
		output.print('$$\\left\\{\\begin{align}'+
			_2(a[1][1])+loc[2]+'+'+_2(a[0][1])+loc[3]+'&='+_2(b[1])+'\\\\'+
			_2(a[1][0])+loc[2]+'+'+_2(a[0][0])+loc[3]+'&='+_2(b[0])+'\\\\'+
		'\\end{align}\\right.$$<br/>');
		output.print('из которой находим (правило Крамера):<br/>');
		output.print('$$\\Delta=SXX \\cdot n - SX \\cdot SX = '+_2(obj.SXX*obj.n-obj.SX*obj.SX)+'$$<br>');
		output.print('$$\\Delta_1=SXY \\cdot n - SX \\cdot SY = '+_2(obj.SXY*obj.n-obj.SX*obj.SY)+'$$<br>');
		output.print('$$\\Delta_2=SXX \\cdot SY - SX \\cdot SXY = '+_2(obj.SXX*obj.SY-obj.SX*obj.SXY)+'$$<br>');
		let A = (obj.SXY*obj.n-obj.SX*obj.SY)/(obj.SXX*obj.n-obj.SX*obj.SX);
		let B = (obj.SXX*obj.SY-obj.SX*obj.SXY)/(obj.SXX*obj.n-obj.SX*obj.SX);
		output.print('$$'+loc[2]+'= \\frac{\\Delta_1}{\\Delta} = '+_2(A)+'$$<br>');
		output.print('$$'+loc[3]+'= \\frac{\\Delta_2}{\\Delta} = '+_2(B)+'$$<br>');
		output.print('В вернемся к принятым ранее обозначениям:<br>');
		
		output.print('$$a=A='+_2(A)+'\\ \\ \\ b=B='+_2(B)+'$$<br>');
		F = (x)=>A*Math.log(x)+B;
		output.print('$$\\delta = \\sqrt{\\frac{\\sum_{i=1}^{n}(\\varphi(x_i)-y_i)^2}{n}}='+_2(aprox_D({x:_xs,y:_ys},F))+'$$<br>');
		return;
	}else if(f=='poc') {
		output.print('Аппроксимирующая функция задана степенной функцией вида:<br>');
		output.print('$$\\varphi(x)=ax^b$$<br>');
		output.print('Введем обозначения: $$Y=\\ln(\\varphi(x)); A=\\ln(a); B=b; X=\\ln(x)$$<br>');
		loc = ['X','Y','A','B'];
		table.x = _xs.map(x=>Math.log(x));
		table.y = _ys.map(x=>Math.log(x));
	}
	output.print('Получаем линейную зависимость: $$'+loc[1]+'='+loc[2]+'+'+loc[3]+''+loc[0]+'$$.<br>');
	output.print('Определеним коэффициенты А и В:');
	print_matrix(table,loc);
	//table = {x:[1.2, 2.9, 4.1, 5.5, 6.7, 7.8, 9.2, 10.3],y:[7.4, 9.5, 11.1,12.9, 14.6, 17.3, 18.2, 20.7]};
	var n=2;
    var a=new Array(n).fill(0).map((x,i)=>new Array(n).fill(0).map((y,j)=>table.x.map(y=>y**(i+j)).reduce((x,y)=>x+y)));
    var b=new Array(n).fill(0).map((x,i)=>table.x.map((y,j)=>table.y[j]*y**i).reduce((x,y)=>x+y));
	var obj = {'SX':a[0][1], 'SXX':a[1][1], 'SY':b[0], 'SXY':b[1], 'n':table.x.length};
	output.print('Вычисляем суммы: $$SX='+_2(obj.SX)+'\\ \\ \\ SXX='+_2(obj.SXX)+'\\ \\ \\ SY='+_2(obj.SY)+'\\ \\ \\ SXY='+_2(obj.SXY)+'$$<br>');
	output.print('Получаем систему линейных уравнений:<br>');
	output.print('$$\\left\\{\\begin{align}'+
		_2(a[0][0])+loc[2]+'+'+_2(a[1][0])+loc[3]+'&='+_2(b[0])+'\\\\'+
		_2(a[0][1])+loc[2]+'+'+_2(a[1][1])+loc[3]+'&='+_2(b[1])+'\\\\'+
	'\\end{align}\\right.$$<br/>');
	output.print('из которой находим (правило Крамера):<br/>');
	output.print('$$\\Delta=SXX \\cdot n - SX \\cdot SX = '+_2(obj.SXX*obj.n-obj.SX*obj.SX)+'$$<br>');
	output.print('$$\\Delta_1=SXX \\cdot SY - SX \\cdot SXY = '+_2(obj.SXX*obj.SY-obj.SX*obj.SXY)+'$$<br>');
	output.print('$$\\Delta_2=SXY \\cdot n - SX \\cdot SY = '+_2(obj.SXY*obj.n-obj.SX*obj.SY)+'$$<br>');
	var A = (obj.SXX*obj.SY-obj.SX*obj.SXY)/(obj.SXX*obj.n-obj.SX*obj.SX);
	var B = (obj.SXY*obj.n-obj.SX*obj.SY)/(obj.SXX*obj.n-obj.SX*obj.SX);
	output.print('$$'+loc[2]+'= \\frac{\\Delta_1}{\\Delta} = '+_2(A)+'$$<br>');
	output.print('$$'+loc[3]+'= \\frac{\\Delta_2}{\\Delta} = '+_2(B)+'$$<br>');
	output.print('В вернемся к принятым ранее обозначениям:<br>');
	var F;
	if (f=='exp'){
		output.print('$$a=e^A='+_2(Math.exp(A))+'\\ \\ \\ b=B='+_2(B)+'$$<br>');
		A = Math.exp(A);
		F = (x)=>A*Math.exp(B*x);
	}else if(f=='poc') {
		output.print('$$a=e^A='+_2(Math.exp(A))+'\\ \\ \\ b=B='+_2(B)+'$$<br>');
		A = Math.exp(A);
		F = (x)=>A*Math.pow(x,B);
	}
	function aprox_S(xy, f) {
		return xy.x.map((x,i)=>(f(x)-xy.y[i])**2).reduce((x,y)=>x+y);
	}
	function aprox_D(xy, f) {
		return Math.sqrt(aprox_S(xy, f)/xy.x.length);
	}
	//output.all='';
	output.print('$$\\delta = \\sqrt{\\frac{\\sum_{i=1}^{n}(\\varphi(x_i)-y_i)^2}{n}}='+_2(aprox_D({x:_xs,y:_ys},F))+'$$<br>');
}
output.print('<h2>Задание 2</h2>');
//task2([1.1,2.3,3.7,4.5,5.4,6.8,7.5],[2.73,5.12,7.74,8.91,10.59,12.75,13.43],'log');
task2(parseMatrix(input.by_id('T2t').value)[0], parseMatrix(input.by_id('T2t').value)[1],input.by_id('T2m').value);
output.print('<h2>Задание 3</h2>');
_2 = (s,i)=>math.round(s,i||3);
function task3(f,y0,xl,xr,n,m){
	var ny;
	var add_col={name:[], f:[]};
	var h = (xr-xl)/n;
	if (m=='e') {
		output.print('$$y_{i+1}=y_i+hf(x_i,y_i)$$<br>');
		add_col.name.push('f(x_i,y_i)');
		add_col.f.push((yi,xi)=>f(xi,yi));
		ny=(yi,xi)=>yi+h*f(xi,yi);
	} else  if (m=='me') {
		output.print('$$y_{i+1}=y_i+\\frac{h}{2}\\big[f(x_i,y_i)+f(x_{i+1},\\widetilde{y}_{i+1})\\big]$$<br>');
		output.print('$$\\widetilde{y}_{i+1}=y_i+hf(x_i,y_i)$$<br>');
		add_col.name=['\\widetilde{y}_{i+1}'];
		add_col.f=[(yi,xi)=>yi+h*f(xi,yi)];
		ny=(yi,xi)=>yi+h/2*(f(xi,yi)+f(xi+h,yi+h*f(xi,yi)));
	} else  if (m=='d2') {
		output.print('$$y_{i+1}=y_i+\\frac{1}{2}(k_1+k_2),$$<br>');
		output.print('$$k_1=hf(x_i,y_i)\\ \\ \\ k_2 = hf(x_i+h,y_i+k_1)$$<br>');
		add_col.name=['k_1','k_2'];
		let k1 = (yi,xi)=>h*f(xi,yi);
		let k2 = (yi,xi)=>h*f(xi+h,yi+k1(yi,xi));
		add_col.f=[k1, k2];
		ny=(yi,xi)=>yi+1/2*(k1(yi,xi)+k2(yi,xi));
	} else  if (m=='d4') {
		output.print('$$y_{i+1}=y_i+\\frac{1}{6}(k_1+2k_2+2k_3+k_4),$$<br>');
		output.print('$$k_1=hf(x_i,y_i)$$<br>');
		output.print('$$k_2=hf(x_i+\\frac{h}{2},y_i+\\frac{k_1}{2})$$<br>');
		output.print('$$k_3=hf(x_i+\\frac{h}{2},y_i+\\frac{k_2}{2})$$<br>');
		output.print('$$k_4=hf(x_i+h,y_i+k_3)$$<br>');
		add_col.name=['k_1','k_2','k_3','k_4'];
		let k1 = (yi,xi)=>h*f(xi,yi);
		let k2 = (yi,xi)=>h*f(xi+h/2,yi+k1(yi,xi)/2);
		let k3 = (yi,xi)=>h*f(xi+h/2,yi+k2(yi,xi)/2);
		let k4 = (yi,xi)=>h*f(xi+h,yi+k3(yi,xi));
		add_col.f=[k1, k2, k3, k4];
		ny=(yi,xi)=>yi+1/6*(k1(yi,xi)+2*k2(yi,xi)+2*k3(yi,xi)+k4(yi,xi));
	}
	let html = '<table border="1">';
	html += `<tr><td>$$i$$</td><td>$$x_i$$</td><td>$$y_i$$</td>`;
	add_col.name.forEach(col => {
		html += `<td>$$${col}$$</td>`;
	});
	html += '</tr>';
	var _y0 = y0;
    new Array(n+1).fill(0).forEach((row,i) => {
        html += `<tr><td>${i}</td><td>${_2(xl+i*h)}</td><td>${_2(_y0)}</td>`;
        add_col.f.forEach(col => {
            html += i==n?'<td></td>':`<td>${_2(col(_y0,xl+i*h))}</td>`;
        });
        html += '</tr>';
		_y0 = ny(_y0,xl+i*h);
    });
    html += '</table>';
	output.print(html);
}
var __h = (parseFloat(input.by_id('T3xe').value.trim())-parseFloat(input.by_id('T3x0').value.trim()))/parseFloat(input.by_id('T3h').value.trim());
task3((x,y)=>math.evaluate(input.by_id('T3f').value,{x:x,y:y}),parseFloat(input.by_id('T3y0').value.trim()),parseFloat(input.by_id('T3x0').value.trim()),parseFloat(input.by_id('T3xe').value.trim()),Math.round(__h),input.by_id('T3m').value);

//output.all='<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;"><h2 style="margin:0;">Это бета версия для тестирования!<br>Некоторые возможности могут быть недоступны</div><br>'+output.all;
	
return 0;
