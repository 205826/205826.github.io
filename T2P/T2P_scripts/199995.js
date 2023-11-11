//- name: первая лабораторная по вебу
//- description: Разработать PHP-скрипт, определяющий попадание точки на координатной...
//- author: T
//- semester: 3
//- input: html
//- input_default_value: Разработать PHP-скрипт, определяющий попадание точки на координатной плоскости в заданную область, и создать HTML-страницу, которая формирует данные для отправки их на обработку этому скрипту.<br>
//- input_default_value: Параметр R и координаты точки должны передаваться скрипту посредством HTTP-запроса. Скрипт должен выполнять валидацию данных и возвращать HTML-страницу с таблицей, содержащей полученные параметры и результат вычислений - факт попадания или непопадания точки в область. Предыдущие результаты должны сохраняться между запросами и отображаться в таблице.<br>
//- input_default_value: Кроме того, ответ должен содержать данные о текущем времени и времени работы скрипта.<br>
//- input_default_value: <br>
//- input_default_value: Разработанная HTML-страница должна удовлетворять следующим требованиям:<br>
//- input_default_value: Для расположения текстовых и графических элементов необходимо использовать <select id="layout"><option>блочную верстку</option><option>табличную верстку</option></select>.<br>
//- input_default_value: Данные формы должны передаваться на обработку посредством <select id="request"><option>POST</option><option>GET</option></select>-запроса.<br>
//- input_default_value: Таблицы стилей должны располагаться в <select id="css"><option>отдельных файлах</option><option>самом веб-документе</option></select>.<br>
//- input_default_value: При работе с CSS должно быть продемонстрировано использование:<br>
//- input_default_value: <label><input type="checkbox" id="selector_1">селекторов идентификаторов</label><br>
//- input_default_value: <label><input type="checkbox" id="selector_2">селекторов псевдоклассов</label><br>
//- input_default_value: <label><input type="checkbox" id="selector_3">селекторов атрибутов</label><br>
//- input_default_value: <label><input type="checkbox" id="selector_4">селекторов псевдоэлементов</label><br>
//- input_default_value: <label><input type="checkbox" id="selector_5">селекторов потомств</label><br>
//- input_default_value: <label><input type="checkbox" id="selector_6">селекторов элементов</label><br>
//- input_default_value: <label><input type="checkbox" id="selector_7">селекторов дочерних элементов</label><br>
//- input_default_value: <label><input type="checkbox" id="selector_8">селекторов классов</label><br>а также такие свойства стилей CSS, как наследование и каскадирование.<br>
//- input_default_value: HTML-страница должна иметь "шапку", содержащую ФИО студента, номер группы и новер варианта. При оформлении шапки необходимо явным образом задать шрифт (<select id="font"><option>fantasy</option><option>serif</option><option>sans-serif</option><option>cursive</option><option>monospace</option></select>), его цвет и размер в каскадной таблице стилей.<br>
//- input_default_value: Отступы элементов ввода должны задаваться в <select id="indent"><option>процентах</option><option>пикселях</select>.<br>
//- input_default_value: Страница должна содержать сценарий на языке JavaScript, осуществляющий валидацию значений, вводимых пользователем в поля формы. Любые некорректные значения (например, буквы в координатах точки или отрицательный радиус) должны блокироваться.
//- input_default_value: <br>
//- input_default_value: <br>
//- input_default_value: ФИО: <input id="fname" type="text" style="width:300px" value="Иванов Иван Иванович"><br>
//- input_default_value: Группа: <input id="group" type="text" style="width:100px" value="P32__"><br>
//- input_default_value: Номер варианта: <input id="variant" type="text" style="width:100px" value="100000"><br>
//- input_default_value: Рисунок: <select id="image"><option>обычный</option><option>бэтмен</option></select><br>
//- input_default_value: Верхний левый угол: <select id="TL_angle"><option>Большой круг</option><option>Малый круг</option><option>Большой квадрат</option><option>Малый квадрат</option><option>Прямоугольник 1</option><option>Прямоугольник 2</option><option>Большой треугольник</option><option>Малый треугольник</option><option>Треугольник 1</option><option>Треугольник 2</option><option>пусто</option></select><br>
//- input_default_value: Верхний правый угол: <select id="TR_angle"><option>Большой круг</option><option>Малый круг</option><option>Большой квадрат</option><option>Малый квадрат</option><option>Прямоугольник 1</option><option>Прямоугольник 2</option><option>Большой треугольник</option><option>Малый треугольник</option><option>Треугольник 1</option><option>Треугольник 2</option><option>пусто</option></select><br>
//- input_default_value: Нижний левый угол: <select id="BL_angle"><option>Большой круг</option><option>Малый круг</option><option>Большой квадрат</option><option>Малый квадрат</option><option>Прямоугольник 1</option><option>Прямоугольник 2</option><option>Большой треугольник</option><option>Малый треугольник</option><option>Треугольник 1</option><option>Треугольник 2</option><option>пусто</option></select><br>
//- input_default_value: Нижний правый угол: <select id="BR_angle"><option>Большой круг</option><option>Малый круг</option><option>Большой квадрат</option><option>Малый квадрат</option><option>Прямоугольник 1</option><option>Прямоугольник 2</option><option>Большой треугольник</option><option>Малый треугольник</option><option>Треугольник 1</option><option>Треугольник 2</option><option>пусто</option></select><br>
//- input_default_value: <br>
//- input_default_value: Изменение X: <select id="x_type"><option>Text</option><option>Checkbox</option><option>Button</option><option>Select</option><option>Radio</option></select> from  <select id="x_from"><option>-5</option><option>-4</option><option>-3</option><option>-2</option><option>-1</option><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> to <select id="x_to"><option>-5</option><option>-4</option><option>-3</option><option>-2</option><option>-1</option><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option selected>5</option></select> step <select id="x_step"><option>1</option><option>0.5</option></select><br>
//- input_default_value: Изменение Y: <select id="y_type"><option>Text</option><option>Checkbox</option><option>Button</option><option>Select</option><option>Radio</option></select> from  <select id="y_from"><option>-5</option><option>-4</option><option>-3</option><option>-2</option><option>-1</option><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> to <select id="y_to"><option>-5</option><option>-4</option><option>-3</option><option>-2</option><option>-1</option><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option selected>5</option></select> step <select id="y_step"><option>1</option><option>0.5</option></select><br>
//- input_default_value: Изменение R: <select id="r_type"><option>Text</option><option>Checkbox</option><option>Button</option><option>Select</option><option>Radio</option></select> from  <select id="r_from"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> to <select id="r_to"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option selected>5</option></select> step <select id="r_step"><option>1</option><option>0.5</option></select><br>
//- output: html
//- import: canvas
function get_random(arr) {
  return arr[Math.floor((Math.random()*arr.length))];
}
function genArr(f,t,s) {
	var a=[];
  	for (var i=f;i<=t+0.0001;i+=s){
    	a.push(i);    
	}
 	return a;
}
var tabulate=(s,n)=>s.split('\n').map(x=>'\t'.repeat(n)+x).join('\n');

var get_f=(s)=>{
	if (s=='Большой круг') return ['x**2 + y**2 <= r**2','$x**2 + $y**2 <= $r**2'];
	if (s=='Малый круг') return ['4*x**2 + 4*y**2 <= r**2','4*$x**2 + 4*$y**2 <= $r**2'];
	if (s=='Большой квадрат') return ['Math.max(x**2,y**2) <= r**2',''];
	if (s=='Малый квадрат') return ['4*Math.max(x**2,y**2) <= r**2',''];
	if (s=='Прямоугольник 1') return ['Math.max(4*x**2,y**2) <= r**2',''];
	if (s=='Прямоугольник 2') return ['Math.max(x**2,4*y**2) <= r**2',''];
	if (s=='Большой треугольник') return ['Math.abs(x)+Math.abs(y) <= r',''];
 	if (s=='Малый треугольник') return ['Math.abs(2*x)+Math.abs(2*y) <= r',''];
 	if (s=='Треугольник 1') return ['Math.abs(2*x)+Math.abs(y) <= r',''];
 	if (s=='Треугольник 2') return ['Math.abs(x)+Math.abs(2*y) <= r',''];
 	if (s=='пусто') return ['false',''];
};

var f_TL;
var f_TR;
var f_BL;
var f_BR;
eval('f_TL=(x,y,r)=>('+get_f(input.value_by_id('TL_angle'))[0]+')'); // jshint ignore:line
eval('f_TR=(x,y,r)=>('+get_f(input.value_by_id('TR_angle'))[0]+')'); // jshint ignore:line
eval('f_BL=(x,y,r)=>('+get_f(input.value_by_id('BL_angle'))[0]+')'); // jshint ignore:line
eval('f_BR=(x,y,r)=>('+get_f(input.value_by_id('BR_angle'))[0]+')'); // jshint ignore:line
//var f=(x,y,r)=>4*x**2 + 4*y**2 <= r**2;
var cnv = canvas.create(300,300);
var ctx = cnv.getContext("2d");
var imageData = ctx.createImageData(300, 300);

// Iterate through every pixel
for (var i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  var x=(i>>2)%imageData.width;
  var y=Math.floor((i>>2)/imageData.width);
  var need=0;
		if (x<150&&y<150&& f_TL((x-150)/150,(y-150)/150,0.6)) {
			need=1;
		} else if (x>=150&&y<150&& f_TR((x-150)/150,(y-150)/150,0.6)) {
			need=1;
		} else if (x<150&&y>=150&& f_BL((x-150)/150,(y-150)/150,0.6)) {
			need=1;
		} else if (x>=150&&y>=150&& f_BR((x-150)/150,(y-150)/150,0.6)) {
			need=1;
		}
  if (need){
    imageData.data[i + 0] = 51; // R value
    imageData.data[i + 1] = 153; // G value
    imageData.data[i + 2] = 255; // B value
    imageData.data[i + 3] = 255; // A value
  } else {
    imageData.data[i + 0] = 255; // R value
    imageData.data[i + 1] = 255; // G value
    imageData.data[i + 2] = 255; // B value
    imageData.data[i + 3] = 255; // A value
  }
}

// Draw image data to the canvas
ctx.putImageData(imageData, 0, 0);

ctx.fillStyle = "#000";
ctx.font = "16px Verdana";
ctx.fillText("R/2", 160, 110);
ctx.fillText("-R/2", 160, 202);
ctx.fillText("R", 160, 67);
ctx.fillText("-R", 160, 245);

ctx.fillText("-R", 52, 140);
ctx.fillText("R", 234, 140);
ctx.fillText("R/2", 183, 140);
ctx.fillText("-R/2", 85, 140);

ctx.fillText("x", 280, 140);
ctx.fillText("y", 160, 20);
[[10,150,290,150],[150,10,150,290],[10,150,290,150],[10,150,290,150],[290-10,150-5,290,150],[290-10,150+5,290,150],[150-5,10+10,150,10],[150+5,10+10,150,10],[145,60,155,60],[145,240,155,240],[60,145,60,155],[240,145,240,155],[145,105,155,105],[145,197,155,197],[105,145,105,155],[197,145,197,155]].map(x=>{
	ctx.beginPath();
	ctx.moveTo(x[0], x[1]);
	ctx.lineTo(x[2], x[3]);
	ctx.lineWidth = 1;
	ctx.stroke();
});

output.print(cnv.returnImg('style="margin:10px;border-radius: 10px;"')+'<br>');
//output.print(input.all);
//output.print();
var public_html = 'public_html/';
var png_name = get_random(['areas','pic','picture','img','image'])+'.png';
output.write_to_file(public_html+png_name, cnv.returnImg().split(';base64,')[1],'base64');


var need_div=input.value_by_id('layout')=='блочную верстку';
var need_post=input.value_by_id('request')=='POST';
var need_file_for_css=input.value_by_id('css')=='отдельных файлах';
var need_selectors=[1,2,3,4,5,6,7].map(x=>input.value_by_id('selector_'+x));
var need_font=input.value_by_id('font');
var margin_in_percent=input.value_by_id('indent')=='процентах';
var fname=input.value_by_id('fname');
var group=input.value_by_id('group');
var variant=input.value_by_id('variant');
var xyr=['x','y','r'].map(x=>input.value_by_id(x+'_type')=='Text'?['Text',+input.value_by_id(x+'_from'),+input.value_by_id(x+'_to')]:[input.value_by_id(x+'_type'),genArr(+input.value_by_id(x+'_from'),+input.value_by_id(x+'_to'),+input.value_by_id(x+'_step'))]);
output.print([need_div,need_post,need_file_for_css,need_selectors,need_font,margin_in_percent,fname,group,variant,xyr]);
var if_need_in_percent=(x,y)=>(margin_in_percent?x:y);

var font_family='	font-family: '+{'fantasy':'fantasy','serif':'serif','sans-serif':'sans-serif','cursive':'cursive','monospace':'"Andale Mono", monospace'}[need_font]+';';

// + 0 селекторов идентификаторов (#, by id)
// + 1 селекторов псевдоклассов (:hover {стили })
// 2 селекторов атрибутов (span[lang] {стили })
// + 3 селекторов псевдоэлементов (::before {стили })
// ++ 4 селекторов потомств (selector1 selector2 {стили })
// ++ 5 селекторов элементов (input {стили })
// + 6 селекторов дочерних элементов (element > element {стили })


var free_input_selector=xyr.filter(x=>x[0]!='Select')[0][0].toLowerCase();
//output.print(free_input_selector);

var css=`html {
`+font_family+`
	color: #7CE700;
	background-color: #B5F36D;
	margin: 0;
	height: 100%;
	width: 100%;
	font-size: 16px;
}

`+(need_selectors[0]?'#page':'body')+` {`+(need_selectors[0]?' /*селектор идентификатора*/':'')+`
`+if_need_in_percent(
`	margin: 3%;
	width: 94%;`,
`	margin: 20px`)+`
}

header, footer, .content {
	background-color: #519600;
	padding: 12px 0;
`+if_need_in_percent(``,
`	width: 700px;
	margin: 0 auto;
`)+`}

.content {
	margin: `+if_need_in_percent(`1% 20%`,`20px auto`)+`;
}


header, footer {
`+if_need_in_percent(
`	margin: 0% 20%;
`,``)+
`	text-align: center;
}

h1, h2, h3 {
	font-weight: 200;
}

h1, h2 {
	margin: 0;
}

h1 {
	font-size: `+if_need_in_percent(`125%`,`25px`)+`;
	color: #fff;
}
`+(need_selectors[3]?`h1:after { /*селектор псевдоэлемента*/
	content: " ♥"; 
	color: #C11;
}
`:'')+`
h2 {
	font-size: `+if_need_in_percent(`110%`,`20px`)+`;
}
`+(need_selectors[2]?`input[type=`+free_input_selector+`] { /*селектор атрибутов*/
	box-shadow: 0px 0px 7px 4px #fff3;
}`:'')+`

`+(need_div?`

.container {
	width: `+if_need_in_percent(`25%`,`200px`)+`;
	margin: `+if_need_in_percent(`1% 1%`,`5px 10px`)+`;
	display:inline-block;
	vertical-align: middle;
	background:#FFF1;
	text-align: center;
	padding: `+if_need_in_percent(`1%`,`5px`)+`;
}

.top_container {
	width: `+if_need_in_percent(`96%`,`670px`)+`;
}

.left_container_x, .left_container_y {
	width: `+if_need_in_percent(`31%`,`205px`)+`;
}

.left_container_r {
	width: `+if_need_in_percent(`66%`,`440px`)+`;
}

.right_container {
	background:#0000;
}
.container`+(need_selectors[6]?' >':'')+` img {`+(need_selectors[6]?' /*селектор дочерних элементов*/':'')+`
	width: `+if_need_in_percent(`100%`,`200px`)+`;
}
.container button {
	background: #FFF1;
	border-color: #4d8c03;
	color: #7CE700;
	padding: 10px 20px;
`+font_family+`
	font-size: 16px;
}
`+(need_selectors[1]?`.container button:hover { /*селектор псевдокласса*/
	background: #FFF3;
}`:'')+`
.container input {
	background: #519600;
	border-color: #4d8c03;
	color: #7CE700;
	text-align: center;
}
`:`
table {
	text-align: center;
	border-spacing: 15px;
}

th {
	font-weight: 200;
}

td, th {
	padding: 1%;
	width: 33%;
	background: #FFF1;
}

td`+(need_selectors[6]?' >':'')+` img {`+(need_selectors[6]?' /*селектор дочерних элементов*/':'')+`
	width: 90%;
}

td button {
	background: #FFF1;
	border-color: #4d8c03;
	color: #7CE700;
	padding: 10px 20px;
	font-family: "Andale Mono", monospace;
	font-size: 16px;
}
`+(need_selectors[1]?`td button:hover { /*селектор псевдокласса*/
	background: #FFF3;
}`:'')+`

td input {
	background: #519600;
	border-color: #4d8c03;
	color: #7CE700;
	text-align: center;
}`);

if (need_file_for_css)
	output.write_to_file(public_html+'index.css', css);

var top_label='Введите данные для определения вхождения точки в представленную область';

var get_input_html=(s,i)=>{
	if (xyr[i][0]=='Text') return '<p><input type="text" maxlength="5" size="6" name="'+s+'" placeholder=" от '+xyr[i][1]+' до '+xyr[i][2]+'"></p>';
	if (xyr[i][0]=='Checkbox') return xyr[i][1].map(x=>'<label><input type="checkbox" name="'+s+'" value="'+x+'">'+x+'</label>').join('\n');
	if (xyr[i][0]=='Button') return '<p id="radius">\n'+xyr[i][1].map((x,j)=>'\t<input value="'+x+'" id="'+s+'_button_'+j+'" type="button">').join('\n')+'\n\t<input type="hidden" name="'+s+'" value="">\n</p>';
	if (xyr[i][0]=='Select') return '<select name="'+s+'">\n'+xyr[i][1].map(x=>'\t<option value="'+x+'">'+x+'</option>').join('\n')+'</select>';
	if (xyr[i][0]=='Radio') return xyr[i][1].map(x=>'<label><input type="radio" name="'+s+'" value="'+x+'">'+x+'</label>').join('\n');
};

var get_input_js=(s,i)=>{
	if (xyr[i][0]=='Text') return `
var XXX_text=document.getElementsByName("XXX")[0].value;
if (!/^[+-]?([0-9]*[.])?[0-9]+$/.test(XXX_text) || !isFinite(parseFloat(XXX_text)) || parseFloat(XXX_text)<${xyr[i][1]} || parseFloat(XXX_text)>${xyr[i][2]}) {
	checkLable(document.getElementsByClassName('left_container_XXX')[0],5);
	is_valid = false;
}
`.replace(/XXX/g,s);
	if (xyr[i][0]=='Checkbox') return `
var XXX_checkboxes=document.getElementsByName("XXX");
if (Array.from(XXX_checkboxes).map(x=>x.checked).reduce((x,y)=>x+y)!=1) {
	checkLable(document.getElementsByClassName('left_container_XXX')[0],5);
	is_valid = false;
}
`.replace(/XXX/g,s);
	if (xyr[i][0]=='Button') return `
var XXX_btn_input=document.getElementsByName("XXX")[0].value;
if (!XXX_btn_input) {
	checkLable(document.getElementsByClassName('left_container_XXX')[0],5);
	is_valid = false;
}
`.replace(/XXX/g,s);
	if (xyr[i][0]=='Select') return ``;
	if (xyr[i][0]=='Radio') return `
var XXX_radios=document.getElementsByName("XXX");
if (Array.from(XXX_radios).map(x=>x.checked).reduce((x,y)=>x+y)!=1) {
	checkLable(document.getElementsByClassName('left_container_XXX')[0],5);
	is_valid = false;
}
`.replace(/XXX/g,s);
};


var x_html=`<h3>X</h3>
`+get_input_html('x',0);

var y_html=`<h3>Y</h3>
`+get_input_html('y',1);

var r_html=`<h3>R</h3>
`+get_input_html('r',2);

var send_text='Выполнить проверку';



output.write_to_file(public_html+'index.html', `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Первая лаба по вебу</title>
		`+(need_file_for_css?'<link rel="stylesheet" href="index.css">':`<style type="text/css">
`+css+`
		</style>`)+`
		<script type = "text/javascript">
			function validate() {
				var is_valid = true;
`+tabulate(get_input_js('x',0),4)+tabulate(get_input_js('y',1),4)+tabulate(get_input_js('r',2),4)+`
				return is_valid;
			}
			function checkLable(b, a) {
				b.style.backgroundColor = a % 2 ? "#f00" : "";
				a-- && window.setTimeout(function () { checkLable(b, a) }, 250)
			};
		</script>
	</head>
	<body`+(need_selectors[0]?' id="page"':'')+`>
		<header>
			<h1>Проверка попадания точки в график</h1>
			<h2>`+fname+` <span>`+group+`</span></h2>
			<h2>Вариант - <span>`+variant+`</span></h2>
		</header>
		<div class="content">
			<form action="response.php" onsubmit="return validate();" method="`+(need_post?'post':'get')+`">`+(need_div?`
				<div class="container top_container">
`+tabulate(top_label,5)+`
				</div>
				<div class="container left_container_x">
`+tabulate(x_html,5)+`
				</div><div class="container left_container_y">
`+tabulate(y_html,5)+`
				</div><div class="container right_container">
					<img src="`+png_name+`">
				</div><div class="container left_container_r">
`+tabulate(r_html,5)+`
				</div><div class="container right_container">
					<button class="checkButton buttonLetter" type="submit">
`+tabulate(send_text,6)+`
					</button>
				</div>`:`
				<table>
					<thead>
						<tr>
							<th colspan="3">`+top_label+`</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
`+tabulate(x_html,8)+`
							</td>
							<td>
`+tabulate(y_html,8)+`
							</td>
							<td style="background: #0000;"><img src="`+png_name+`"></td>
						</tr>
						<tr>
							<td colspan="2">
`+tabulate(r_html,8)+`
							</td>
							<td style="background: #0000;">
								<button class="checkButton buttonLetter" type="submit">
`+tabulate(send_text,9)+`
								</button>
							</td>
						</tr>
					</tbody>
				</table>`)+`
			</form>
		</div>
		<footer>Copyright. All rights reserved. 2023 </footer>
	</body>
</html>`);

return 0;