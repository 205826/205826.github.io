//- name: Количество использованных inode
//- description: ОС
//- author: &#60;T&#62;
//- semester: 5
//- input: html
//- input_default_value: Количество первичных указателей (p0): <input type="text" style="width:100px" id="p0" value="16"><br>
//- input_default_value: Количество указателей p1: <input type="text" style="width:100px" id="p1" value="128"> (L1)<br>
//- input_default_value: Количество указателей p2: <input type="text" style="width:100px" id="p2" value="128 128"> (L1 L2)<br>
//- input_default_value: Количество указателей p3: <input type="text" style="width:100px" id="p3" value="128 128 128"> (L1 L2 L3)<br><br>

//- input_default_value: Главный блок с указателями (L0): <input type="text" style="width:100px" id="L0" value="512"> байт<br>
//- input_default_value: Каждый блок с указателями весит (L1, L2, L3): <input type="text" style="width:100px" id="L1L2L3" value="512"> байт<br>
//- input_default_value: Размер блока (файла): <input type="text" style="width:100px" id="file_block" value="512"> байт<br><br>

//- input_default_value: Размер файла: <input type="text" style="width:100px" id="file_size" value="235477247"> байт<br>
//- output: html

var p0 = parseInt(input.by_id('p0').value);
var p1 = input.by_id('p1').value.split(' ').map(x=>parseInt(x));
var kp1 = input.by_id('p2').value.split(' ').map(x=>parseInt(x));
var p2 = input.by_id('p2').value.split(' ').map(x=>parseInt(x));
var kp2 = input.by_id('p2').value.split(' ').map(x=>parseInt(x));
var p3 = input.by_id('p3').value.split(' ').map(x=>parseInt(x));
var kp3 = input.by_id('p3').value.split(' ').map(x=>parseInt(x));
var L0 = parseInt(input.by_id('L0').value);
var L1L2L3 = parseInt(input.by_id('L1L2L3').value);
var file_block = parseInt(input.by_id('file_block').value);

var file_size = parseInt(input.by_id('file_size').value);

var system_sum = 0;
var file_sum = 0;
var t = 1000000000;
while(p0>0&&t--&&file_size>=0) {file_sum+=file_block;file_size-=file_block;--p0;}
while(p1[0]>0&&t--&&file_size>=0) {
	if (p1[0] == kp1[0]) system_sum+=L1L2L3;
	p1[0]--;
	{
		file_sum+=file_block;
		file_size-=file_block;
	}
}
while(p2[0]>0&&t--&&file_size>=0) {
	if (p2[0] == kp2[0]) system_sum+=L1L2L3;
	p2[0]--;
	var sp2 = p2[1];
	while(p2[1]>0&&t--&&file_size>=0) {
		if (p2[1] == kp2[1]) system_sum+=L1L2L3;
		file_sum+=file_block;
		file_size-=file_block;
		p2[1]--;
	}
	p2[1] = sp2;
}
while(p3[0]>0&&t--&&file_size>=0) {
	if (p3[0] == kp3[0]) system_sum+=L1L2L3;
	p3[0]--;
	var sp3 = p3[1];
	while(p3[1]>0&&t--&&file_size>=0) {
		if (p3[1] == kp3[1]) system_sum+=L1L2L3;
		p3[1]--;
		var sp32 = p3[2];
		while(p3[2]>0&&t--&&file_size>=0) {
			if (p3[2] == kp3[2]) system_sum+=L1L2L3;
			file_sum+=file_block;
			file_size-=file_block;
			p3[2]--;
		}
		p3[2] = sp32;
	}
	p3[1] = sp3;
	output.print('1+');
}
output.print('Системных данных: ' + (system_sum+L0) + ' байт (' + (1+system_sum/L1L2L3)+' блоков)<br>');
output.print('Файл: ' + file_sum + ' байт (' + (file_sum/file_block)+' блоков)<br>');
output.print('Сумарно: ' + (file_sum+system_sum) + ' байт (' + ((1+system_sum/L1L2L3)+(file_sum/file_block))+' блоков)');
return 0;
