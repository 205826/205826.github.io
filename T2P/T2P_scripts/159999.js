//- name: Дисковый массив с уровнем рейда RAID-n
//- description: ОС
//- author: &#60;T&#62;
//- semester: 5
//- input: html
//- input_default_value: <h3>Задание 1</h3>
//- input_default_value: Дисковый массив с уровнем рейда RAID-<input type="text" style="width:50px" id="T1_A" value="5">{A} состоит из <input type="text" style="width:50px" id="T1_B" value="4">{B} дисков по <input type="text" style="width:50px" id="T1_C" value="2048">{C} гигабайт с блоками по <input type="text" style="width:50px" id="T1_D" value="512">{D} байт.<br>
//- input_default_value: Размер страйп-unit составляет <input type="text" style="width:50px" id="T1_E" value="16">{E} блоков. Средняя скорость одной операции чтения блока данных при последовательном доступе к диску равна <input type="text" style="width:50px" id="T1_F" value="6">{F} мкс, а записи <input type="text" style="width:50px" id="T1_G" value="15">{G} мкс;<br>
//- input_default_value: Скорость вычислений корректирующих кодов для одного страйп-unit данных составляет <input type="text" style="width:50px" id="T1_H" value="256">{H} мкс.<br><br>
//- input_default_value: При замене одного диска, сколько будет восстанавливаться диск в минутах? Считать, что для восстановления дисков нужно обработать все блоки целиком.<br>

//- output: html

(()=>{
	var RAID = parseInt(input.by_id('T1_A').value);
	var disk_count = parseInt(input.by_id('T1_B').value);
	var valid_disks = disk_count-1;
	if (RAID==1) valid_disks = 1;
	if (RAID==6) valid_disks = disk_count - 2;
	var disk_size_GB = parseInt(input.by_id('T1_C').value);
	var block_size = parseInt(input.by_id('T1_D').value);
	var SU_size = parseInt(input.by_id('T1_E').value);
	var block_read = parseInt(input.by_id('T1_F').value);
	var block_write = parseInt(input.by_id('T1_G').value);
	var SU_calc = parseInt(input.by_id('T1_H').value);
	output.print('1) Определяем размер диска в байтах:<br>');
	var disk_size = disk_size_GB * 1024 * 1024 * 1024;
	output.print('disk_size = ' + disk_size_GB + ' * 1024 * 1024 * 1024 = ' + disk_size + ' байт<br><br>');
	
	output.print('2) Определяем количество stripe-unit\'ов на диске:<br>');
	
	var stripes = disk_size / (block_size * SU_size);
	output.print('stripes = ' + disk_size + ' / ('+block_size+' * '+SU_size+') = ' + stripes + '<br><br>');
	output.print('3) Определяем количество блоков на диске:<br>');
	var block_count = disk_size / (block_size);
	output.print('block_count = ' + disk_size + ' / '+block_size+' = ' + block_count + '<br><br>');
	
	output.print('Теперь считаем время (чтение с соседей + вычисление + запись):<br>');
	output.print('4) Сколько нам придется писать в блоки:<br>');
	var write_time = block_count * block_write;
	output.print('write_time = ' + block_count + ' * '+block_write+' мкс = ' + write_time + ' мкс<br><br>');
	
	output.print('5) Сколько нам придется считать:<br>');
	var calculate_time = stripes * SU_calc;
	output.print('calculate_time = ' + stripes + ' * '+SU_calc+' мкс = ' + calculate_time + ' мкс<br><br>');
	
	output.print('6) Сколько нам придется читать:<br>');
	var read_time = block_count * block_read * valid_disks;
	output.print('calculate_time = ' + block_count + ' * '+block_read+' мкс * ' + valid_disks + ' = ' + read_time + ' мкс<br><br>');
	output.print('7) Итого:<br>');
    var answer = read_time + calculate_time + write_time;
	output.print('answer = '+write_time+' + ' + calculate_time + ' + ' + read_time + ' = ' + answer + ' мкс = ' + (answer/1000/1000/60).toFixed(7) + ' мин<br>');
})();

return 0;

