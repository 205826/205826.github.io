//- name: Вычислительная машина представляет собой многопроцессорную NUМА-архитектуру
//- description: ОС
//- author: &#60;T&#62;
//- semester: 5
//- input: html
//- input_default_value: <h3>Задание 5</h3>
//- input_default_value: Вычислительная машина представляет собой многопроцессорную NUМА-архитектуру. Частота процессора составляет <input type="text" style="width:50px" id="T1_A" value="2">{А} ГГц, при этом регистровая машинная команда выполняется за один такт. Подсчитайте время выполнения программы если:<br><br>
//- input_default_value: * Времена обращения L1-L2кеш/локальная NUMA памятыпамять других NUМА узлов составляет <input type="text" style="width:50px" id="T1_B" value="2">{B}/<input type="text" style="width:50px" id="T1_C" value="28">{C}/<input type="text" style="width:50px" id="T1_D" value="122">{D} нс<br><br>
//- input_default_value: * Количество команд обращающихся к perиcтрам/L1-L2/local NUMA/other NUМA = <input type="text" style="width:70px" id="T1_E" value="190980">{E}/<input type="text" style="width:50px" id="T1_F" value="179">{F}/<input type="text" style="width:50px" id="T1_G" value="181">{G}/<input type="text" style="width:50px" id="T1_H" value="108">{H} соответственно.<br><br>
//- input_default_value: На сколько уменьшится время работы программы, если данные локального узла попадут в кеш, а ОС перенесет удаленную память в память локального узла?

//- output: html

(()=>{
	var A = parseFloat(input.by_id('T1_A').value);
	var B = parseFloat(input.by_id('T1_B').value);
	var C = parseFloat(input.by_id('T1_C').value);
	var D = parseFloat(input.by_id('T1_D').value);
	var E = parseFloat(input.by_id('T1_E').value);
	var F = parseFloat(input.by_id('T1_F').value);
	var G = parseFloat(input.by_id('T1_G').value);
	var H = parseFloat(input.by_id('T1_H').value);
	var ans = ((1/A) * E + B * F + C * G + D * H) - ((1/A) * E + B * (F+G) + C * H);
	output.print(`2 ГГц - частота<br>
<br>
Длительность обращения:<br>
    ${(1/A).toFixed(7).replace(/\.?0*$/,"")} нс - registers<br>
    ${B} нс - L1-L2<br>
    ${C} нс - local NUMA<br>
    ${D} нс - other NUMA<br>
<br>
Обращений до:<br>
    ${E} - registers<br>
    ${F} - L1-L2<br>
    ${G} - local NUMA<br>
    ${H} - other NUMA<br>
<br>
Обращений после:<br>
    ${E} - registers<br>
    ${F}+${G} - L1-L2<br>
    ${H} - local NUMA<br>
    0 - other NUMA<br>
<br>
Итого:<br>
answer = (${(1/A).toFixed(7).replace(/\.?0*$/,"")} * ${E} + ${B} * ${F} + ${C} * ${G} + ${D} * ${H}) - (${(1/A).toFixed(7).replace(/\.?0*$/,"")} * ${E} + ${B} * ${F+G} + ${C} * ${H}) = ${ans} нс
`);
})();

return 0;
