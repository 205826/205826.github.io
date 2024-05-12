//- name: Решение симпликс таблицы
//- description: метопы
//- author: &#60;T&#62; + &#60;K&#62;
//- semester: 4
//- input: html
//- input_default_value: $$a\Bigg($$<textarea id="T1a" style="width:110px;height:55px;vertical-align:middle;">5 -4 20\n-2 -3 24\n-1 3 3</textarea>$$\Bigg)$$<br>
//- input_default_value: $$f($$<input type="text" style="width:100px" id="T1f" value="-3 -2 0"><br>
//- input_default_value: Поиск <select id="T1m"><option>минимума</option><option selected>максимума</option></select><br>
//- input_default_value: Отображение формул: <select id="T1tex"><option>Mathjs</option><option>Tex</option></select><br>
//- output: html
//- import: math
//- import: nerdamer
try{return (()=>{

var _ = (x) => {
	let s = math.evaluate(x).toString();
	if (s === 'true') return true;
	if (s === 'false') return false;
	return s;
};
const _2 = (s,i)=>math.round(s,i||5);
var _toTex = (values,labels_f)=>values.map((x,i)=>_(`${x}!=0`)?(_(`${x}<0`)?'-':'+')+(Math.abs(x)!=1?_2(Math.abs(x)):'')+''+(Math.abs(x)==1?labels_f(i+1)||1:labels_f(i+1)):'').join('').replace(/^\+/,'');
var parseMatrix = (a)=>a.split('\n').filter(x=>x.trim()).map(x=>x.split(' ').filter(y=>y.trim()).map(x=>parseFloat(x)));

const A = parseMatrix(input.by_id('T1a').value);
const F = parseMatrix(input.by_id('T1f').value)[0];
const find_min = input.by_id('T1m').value!='минимума';

// заполняем изначальную матрицу
let matrix = {};
A.map((x,i)=>{
	matrix['x_'+(i+A[0].length)] = {};
	x.map((y,j)=>{
		matrix['x_'+(i+A[0].length)][j==A[0].length-1?'b':'x_'+(j+1)] = y;
	});
});
//output.print(matrix);

function print_matrix(l,t,arr,sx,sy) {
	// l = ["y_1","y_2","y_3","w"]
	// t = ["x_1","x_2","x_3","x_4","x_5","b"]
	// l = {"y_1":{"x_1":0,"x_2":-1,"x_3":1,"x_4":0,"x_5":0,"b":3},"y_2":{"x_1":-3,"x_2":-2.17,"x_3":0,"x_4":1,"x_5":0,"b":27},"y_3":{"x_1":-1,"x_2":-2.67,"x_3":0,"x_4":0,"x_5":1,"b":22},"w":{"x_1":-4,"x_2":-5.84,"x_3":1,"x_4":1,"x_5":1,"b":52}}
	let html = '<table border="1"><tr><td></td>';
    t.forEach(col => {
        html += `<td${(col==sx?' style="border-top-width: 5px;border-left-width: 5px;border-right-width: 5px;"':'')}>$$${col.replace('b','\\beta')}$$</td>`;
    });
    html += '</tr>';
    l.forEach(row => {
        html += `<tr><td${(row==sy?' style="border-top-width: 5px;border-left-width: 5px;border-bottom-width: 5px;"':'')}>$$${row.replace('w','W').replace('f',find_min?'f':'f')}$$</td>`;
        t.forEach(col => {
            html += `<td${(row==sy||col==sx?' style="'+(row==sy?'border-top-width: 5px;border-bottom-width: 5px;':'')+(col==sx?'border-left-width: 5px;border-right-width: 5px;':'')+'"':'')}>${(_2((arr[row]||[])[col]||0))}</td>`;
        });
        html += '</tr>';
    });
    html += '</table>';
	output.print(html);
}

function check_is_answer_ready(w_row) {
	if (find_min) return check_is_answer_ready_max(w_row);
	return Object.keys(w_row).filter(x=>x!='b').every((k, i) => _(`${w_row[k]} >= 0`));
}
function check_is_answer_ready_max(w_row) {
//output.print(w_row);
	return Object.keys(w_row).filter(x=>x!='b').every((k, i) => _(`${w_row[k]} <= 0`));
}

// среди всех w_i < 0, return max(|w_i|)
function select_next_column() {
	if (find_min) return select_next_column_max();
	let res = "0";
	let res_key = "";
	for (let key of Object.keys(f)) {
		if (key === "b") continue;

		if (_(`${f[key]} < 0`) && _(`${f[key]} < ${res}`)) {
			res = f[key];
			res_key = key;
		}
	}
	if (res_key === "") throw "не смогли выбрать столбец";
	return res_key;
}
// среди всех w_i < 0, return max(|w_i|)
let f={};
F.map((x,i)=>{
	f[i==A[0].length-1?'b':'x_'+(i+1)] = x;
});
//output.print(f);
function select_next_column_max() {
	let res = "0";
	let res_key = "";
	for (let key of Object.keys(f)) {
		if (key === "b") continue;

		if (_(`${f[key]} > 0`) && _(`${f[key]} > ${res}`)) {
			res = f[key];
			res_key = key;
		}
	}
	if (res_key === "") throw "не смогли выбрать столбец";
	return res_key;
}

// среди всех строк выбранной колонки, вибирает такую строку,
// при увеличении которой, b в этой строке будет быстрее отальных b стремиться к 0
//
// к примеру column_var мб "x_3"
function select_next_row(column_var) {
	let keys = Object.keys(matrix);
	let res_val = Number.MAX_VALUE;
	let res_key = "";
	for (let row_index = 0; row_index < keys.length; row_index++) {
		let row_key = keys[row_index];
		let row = matrix[row_key];
		let b = row.b || 0;
		let v = row[column_var] || 0;
		if (v==0) continue;
		let approx_b_val = _(`-(${b})/(${v})`);
		if (_(`${approx_b_val} < ${res_val}`) && _(`${approx_b_val} > 0`)) {
			res_key = row_key;
			res_val = approx_b_val;
		}
	}
	if (res_key === "") throw "не смогли выбрать строку у столбца " + column_var;
	return res_key;
}

// 2 x + 4 y + 3 -> obj
function extract_coffs(str) {
	let obj = {};
	Array.from(str.matchAll(/[xy]_\d+/g)).map(x=>obj[x] = math.derivative(str.replace(/_/g,''), x[0].replace(/_/g,'')).evaluate());
	str=str.replace(/[xy]_\d+/g,'0');
	obj.b = math.evaluate(str);
	return obj;
}

// возвращает без "="
function stringify_row(sel_row) {
	return Object.keys(matrix[sel_row])
		.map(key => key === "b" ? matrix[sel_row].b
			: "" + key + "*" + matrix[sel_row][key])
		.join("+");
}


let max_iter = 20;
let lables = [A.map((x,i)=>'x_'+(A[0].length+i)).concat(['f']),A[0].map((x,i)=>i==A[0].length-1?'b':'x_'+(i+1))];
let lables_swap = (a,b) => {
	var ai=lables[0].indexOf(a);
	var bi=lables[1].indexOf(b);
	var tmp = lables[0][ai];
	lables[0][ai] = lables[1][bi];
	lables[1][bi] = tmp;
};

while (!(check_is_answer_ready(f) || !(max_iter--))) {
	// выбираем следующик колонку и строку
	let sel_column = select_next_column();
	let sel_row = select_next_row(sel_column);
	
	matrix.f = f;
	print_matrix(lables[0], lables[1],matrix, sel_column, sel_row);
	//output.print(matrix);
	delete matrix.w;
	output.print('Выбираем большую по модулю '+(find_min?'положительную':'отрицательную')+' $$\\Delta$$. Видим, что при увеличении $$'+sel_column+'$$ быстрее всего до нуля доходит $$'+sel_row+'$$.<br>');
	output.print('Меняем $$'+sel_row+'$$ и $$'+sel_column+'$$ местами.<br>');
	
	// выражаем переменную, которая была в sel_column из строки sel_row
	let eq_str = stringify_row(sel_row);
	eq_str += "=" + sel_row;

	let solvedStr = nerdamer(eq_str).solveFor(sel_column).toString();
	solvedStr = math.rationalize(math.simplify(math.rationalize(solvedStr))).toString();
	let row_obj = extract_coffs(solvedStr);

	// удалим старую
	delete matrix[sel_row];
	let obj = {};
	matrix.f = f;
	lables[0].map(_=>{
		if (_==sel_row)return;
		let tex = _toTex(lables[1].map(x=>matrix[_][x]||0),i=>lables[1][i-1]=='b'?'':lables[1][i-1]);
		obj[_]=tex;
	});
	//output.print(obj);
	lables_swap(sel_row,sel_column);
	// изменим остальные строки
	for(let key of Object.keys(matrix)){
		//let row = matrix[key]
		let row_str = stringify_row(key);
		row_str = row_str.replaceAll(sel_column, `(${solvedStr})`);
		let simpl = math.rationalize(math.simplify(math.rationalize(row_str))).toString();
		simpl = simpl.replace(/\d(\.\d+)?e-\d+/g,'0');
		matrix[key] = extract_coffs(simpl);
	}
	f=matrix.f;
	delete matrix.f;

	// а теперь добавим новую
	matrix[sel_column] = row_obj;
	let column_tex = '';
	[0,1].map(_3=>{
		lables[0].map(_=>{
			if (_=='f')return;
			
			let tex = _toTex(lables[1].map(x=>matrix[_][x]||0),i=>lables[1][i-1]=='b'?'':lables[1][i-1]);
			if (_3^+(_==sel_column)) output.print('$$'+_+' = '+(obj[_]?obj[_].replace(sel_column,'('+column_tex+')')+' = $$$$':'')+tex+'$$<br>');
			if (!_3&&_==sel_column) column_tex=tex;
		});
	});
	output.print('$$F = '+obj.f.replace(sel_column,'('+column_tex+')')+' = $$$$'+_toTex(lables[1].map(x=>f[x]||0),i=>lables[1][i-1]=='b'?'':lables[1][i-1])+'$$<br>');
	output.print('<br>');
}
matrix.f = f;
//output.all='';
print_matrix(lables[0], lables[1],matrix, '', '');
//delete matrix.f;
output.print('Видим, что выполнен критерий оптимальности: все $$\\Delta '+(find_min?'\\leq':'\\geq')+' 0$$.<br>');
F.map((x,i)=>{
	output.print('$$x_'+(i+1)+'^* = '+_2((matrix['x_'+(i+1)]||{}).b||0)+'$$<br>');
});

output.print('$$f^* = '+_2(matrix.f.b||0)+'$$<br>');
return 0;
})();}catch(e){
	output.all='<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;">'+e+'</div><br>'+output.all;
	return 1;
}
