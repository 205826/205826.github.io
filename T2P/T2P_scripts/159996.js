//- name: На вход инвертированной таблиыцы страниц поступает виртуальный адрес
//- description: ОС
//- author: &#60;T&#62;
//- semester: 5
//- input: html
//- input_default_value: <h3>Задание 4</h3>
//- input_default_value: На вход инвертированной таблиыцы страниц поступает виртуальный адрес <input type="text" style="width:100px" id="T1_A" value="0x237b082dc">{A} в котором <input type="text" style="width:100px" id="T1_B" value="18">{B} бит занимает номёр страницы, а <input type="text" style="width:100px" id="T1_C" value="16">{C} бит занимает смещение.<br>
//- input_default_value: Номера кадров и номера страниц имеют одинаковое количество разрядов.<br><br>
//- input_default_value: Вычислите физический адрес,если хеш функция (результат 4 бита) - это операция сложенйя по модулю 2 каждых 4 битов числа на входе хэш функции,с дополнением нулями старших битов номера страницы.<br>
//- input_default_value: Поле сhаin имеет следующий формат: nextchain:frame#, где nextchain начинается со следующего разряда после старшего бита номера кадра. Если nextchain=0 то это означает конец цепочки.<br><br>
//- input_default_value: Инвертированная таблица приведена в задании.<br><br>
//- input_default_value: Chain parse <input type="text" style="width:100px" id="T1_D" value="0x008B490"><br><br>

//- output: html

function bin2hex(bin) {
    // Ensure the binary string is a multiple of 4 by padding with leading zeros if necessary
    while (bin.length % 4 !== 0) {
        bin = '0' + bin;
    }

    let hex = '';
    for (let i = 0; i < bin.length; i += 4) {
        // Take 4 bits at a time
        const fourBits = bin.substr(i, 4);
        // Convert to decimal and then to hexadecimal
        const decimal = parseInt(fourBits, 2);
        hex += decimal.toString(16); // Convert decimal to hex and append
    }

    return hex.toUpperCase(); // Return the result in uppercase
}

function xor(arr) {
    let result = 0;

    for (let num of arr) {
        result ^= parseInt(num,16); // Perform XOR operation
    }

    return result.toString(16).toUpperCase(); // Convert result to hex and return in uppercase
}

(()=>{
	var A = input.by_id('T1_A').value;
	var B = input.by_id('T1_B').value;
	var C = input.by_id('T1_C').value;
	var D = input.by_id('T1_D').value;
	if (!/^0x[0-9A-Fa-f]{9}$/.test(A)) return output.print('A not valid');
	
	
	var data = [A.split('x')[1].split(''),A.split('x')[1].split('').map(x=>parseInt(x,16).toString(2).padStart(4,'0'))];
	var num_page = data[1].join('').slice(-C-B,-C);
	var offset = data[1].join('').slice(-C);
	var html = "<table>";
	var key, idx;
	for(key in data) {
		html += `<tr>`;
		for(idx in data[key]) {
			html += `<td>${data[key][idx]}</td>`;
		}
		html += `</tr>`;
	}
	html+='</table>';
	output.print(html);
	output.print('looking for ' + bin2hex(num_page)+' ('+bin2hex(num_page).split('').join(' xor ')+' = '+xor(bin2hex(num_page).split(''))+')...<br>');
	
	
	if (!/^0x[0-9A-Fa-f]{7}$/.test(D)) return output.print('Chain not valid');
	output.print('<hr>ДЛЯ указаного CHAIN / !Ответ действителен если page = '+bin2hex(num_page)+'!');
	output.print('<hr>');
	
	
	var bin = D.split('x')[1].split('').map(x=>parseInt(x,16).toString(2).padStart(4,'0'));
	data = [
		['no use', 'nextchain', 'frame#'],
		[bin.join('').slice(0,-B-4),bin.join('').slice(-B-4,-B),bin.join('').slice(-B)]
	];
	html = "<table>";
	for(key in data) {
		html += `<tr>`;
		for(idx in data[key]) {
			html += `<td>${data[key][idx]}</td>`;
		}
		html += `</tr>`;
	}
	html+='</table>';
	output.print(html);
	output.print('Ответ: ' + bin2hex(data[1][2]+offset));
})();

return 0;

