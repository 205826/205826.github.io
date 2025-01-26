//- name: В UNIX-подобной файловой системе в inode
//- description: ОС
//- author: &#60;T&#62;
//- semester: 5
//- input: html
//- input_default_value: <h3>Задание 2</h3>
//- input_default_value: В UNIX-подобной файловой системе в inode содержится <input type="text" style="width:50px" id="T1_A" value="16">{A} указателей на прямые блоки файла, каждый из которых занимает <input type="text" style="width:50px" id="T1_B" value="32">{B} бит, при необходимости используется фиксированное группирование записей в блоке. Размер логического блока файловой системы составляет <input type="text" style="width:50px" id="T1_C" value="512">{C} байт.<br><br>
//- input_default_value: Каково общее количество блоков (включая служебные) будет занимать файл длинной <input type="text" style="width:100px" id="T1_D" value="235477247">{D} байт?

//- output: html
function my_div(a,b){return Math.floor((a + b - 1) / b);}
var ppp = my_div(parseInt(input.by_id('T1_C').value)*8,parseInt(input.by_id('T1_B').value)); 
var p0 = parseInt(input.by_id('T1_A').value);
var p1 = [ppp];
var kp1 = [ppp];
var p2 = [ppp,ppp];
var kp2 = [ppp,ppp];
var p3 = [ppp,ppp,ppp];
var kp3 = [ppp,ppp,ppp];
var L0 = 0;
var L1L2L3 = parseInt(input.by_id('T1_C').value);
var file_block = parseInt(input.by_id('T1_C').value);

var file_size = parseInt(input.by_id('T1_D').value);

var system_sum = 0;
var file_sum = 0;
var t = 1000000000;
while(p0>0&&t-->0&&file_size>=0) {file_sum+=file_block;file_size-=file_block;--p0;}
while(p1[0]>0&&t-->0&&file_size>=0) {
	if (p1[0] == kp1[0]) system_sum+=L1L2L3;
	p1[0]--;
	{
		file_sum+=file_block;
		file_size-=file_block;
	}
}
while(p2[0]>0&&t-->0&&file_size>=0) {
	if (p2[0] == kp2[0]) system_sum+=L1L2L3;
	p2[0]--;
	var sp2 = p2[1];
	while(p2[1]>0&&t-->0&&file_size>=0) {
		if (p2[1] == kp2[1]) system_sum+=L1L2L3;
		file_sum+=file_block;
		file_size-=file_block;
		p2[1]--;
	}
	p2[1] = sp2;
}
while(p3[0]>0&&t-->0&&file_size>=0) {
	if (p3[0] == kp3[0]) system_sum+=L1L2L3;
	p3[0]--;
	var sp3 = p3[1];
	while(p3[1]>0&&t-->0&&file_size>=0) {
		if (p3[1] == kp3[1]) system_sum+=L1L2L3;
		p3[1]--;
		var sp32 = p3[2];
		while(p3[2]>0&&t-->0&&file_size>=0) {
			if (p3[2] == kp3[2]) system_sum+=L1L2L3;
			file_sum+=file_block;
			file_size-=file_block;
			p3[2]--;
		}
		p3[2] = sp32;
	}
	p3[1] = sp3;
}
if (t<0) return 'долгое выполнение';
output.print('Системных данных: ' + (system_sum+L0) + ' байт (' + ((L0?1:0)+system_sum/L1L2L3)+' блоков)<br>');
output.print('Файл: ' + file_sum + ' байт (' + (file_sum/file_block)+' блоков)<br>');
output.print('Сумарно: ' + (file_sum+system_sum) + ' байт (' + (((L0?1:0)+system_sum/L1L2L3)+(file_sum/file_block))+' блоков)<br><br>');

output.print('ОТВЕТ: ' + (((L0?1:0)+system_sum/L1L2L3)+(file_sum/file_block)));
return 0;
