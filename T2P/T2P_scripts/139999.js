//- name: Тренажёр по расчётным задачам
//- semester: 7
//- description: Генератор случайных задач с проверкой ответов
//- author: <T>
//- input: html
//- input_default_value: Номер варианта (seed): <input id="seed" type="number" value="1"><br>
//- input_default_value: Ответ на задание 1: <input id="answer1" type="number" step="0.01"><br>
//- input_default_value: Ответ на задание 2: <input id="answer2" type="number" step="0.01"><br>
//- input_default_value: Ответ на задание 3: <input id="answer3" type="number" step="0.01"><br>
//- input_default_value: Ответ на задание 4: <input id="answer4" type="number" step="0.01"><br>
//- input_default_value: Ответ на задание 5: <input id="answer5" type="number" step="0.01"><br>
//- input_default_value: Показать ответы: <input id="show_answers" type="checkbox"><br>
//- output: html

// Функции для генератора случайных чисел
function cyrb128(str) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return [(h1^h2^h3^h4)>>>0, (h2^h1)>>>0, (h3^h1)>>>0, (h4^h1)>>>0];
}

function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    };
}

// Инициализация генератора случайных чисел
var seedStr = input.value_by_id("seed") || "1";
var seed = cyrb128(seedStr);
var rand = sfc32(seed[0], seed[1], seed[2], seed[3]);

// Функция для генерации случайного числа в диапазоне
function randomInRange(min, max) {
    return min + rand() * (max - min);
}

// Функция для генерации случайного целого числа
function randomInt(min, max) {
    return Math.floor(randomInRange(min, max + 1));
}

// Функция для выбора случайного элемента массива
//function getRandom(arr) {
//    return arr[Math.floor(rand() * arr.length)];
//}

// Генерация параметров для задачи 1
function generateTask1() {
    var pricePO = Math.round(randomInRange(300000, 500000) / 100) * 100; // Цена ПО с НДС
    var sum1 = Math.round(randomInRange(40000, 60000) / 100) * 100; // С НДС
    var sum2 = Math.round(randomInRange(30000, 50000) / 100) * 100; // С НДС
    var sum3 = Math.round(randomInRange(60000, 80000) / 100) * 100; // Без НДС
    var sum4_nds = Math.round(randomInRange(3000, 6000) / 100) * 100; // НДС отдельно
    
    // Расчёт правильного ответа
    var nds_realiz = pricePO * 20 / 120;
    var nds1 = sum1 * 20 / 120;
    var nds2 = sum2 * 20 / 120;
    var nds3 = sum3 * 0.2;
    var nds4 = sum4_nds;
    
    var nds_vichet = nds1 + nds2 + nds3 + nds4;
    var nds_uplata = nds_realiz - nds_vichet;
    
    return {
        pricePO: pricePO,
        sum1: sum1,
        sum2: sum2,
        sum3: sum3,
        sum4_nds: sum4_nds,
        correctAnswer: Math.round(nds_uplata * 100) / 100
    };
}

// Генерация параметров для задачи 2
function generateTask2() {
    var O1 = randomInt(10, 20);
    var M1 = randomInt(30, 40);
    var P1 = randomInt(50, 70);
    
    var O2 = randomInt(1, 5);
    var M2 = randomInt(5, 10);
    var P2 = randomInt(20, 40);
    
    var O3 = randomInt(1, 5);
    var M3 = randomInt(5, 15);
    var P3 = randomInt(40, 80);
    
    var costPerHour = Math.round(randomInRange(4000, 6000) / 100) * 100;
    
    // Расчёт
    var E1 = (O1 + 4*M1 + P1) / 6;
    var E2 = (O2 + 4*M2 + P2) / 6;
    var E3 = (O3 + 4*M3 + P3) / 6;
    var E = E1 + E2 + E3;
    
    var SKO1 = (P1 - O1) / 6;
    var SKO2 = (P2 - O2) / 6;
    var SKO3 = (P3 - O3) / 6;
    var SKO = Math.sqrt(SKO1*SKO1 + SKO2*SKO2 + SKO3*SKO3);
    
    var E_95 = E + 2*SKO;
    var cost = costPerHour * E_95;
    
    return {
        O1: O1, M1: M1, P1: P1,
        O2: O2, M2: M2, P2: P2,
        O3: O3, M3: M3, P3: P3,
        costPerHour: costPerHour,
        correctAnswer: Math.round(cost)
    };
}

// Генерация параметров для задачи 3
function generateTask3() {
    var variation = randomInt(1, 2);
    var contractSum = Math.round(randomInRange(2000000, 4000000) / 100000) * 100000;
    var deposit = Math.round(randomInRange(500000, 1000000) / 100000) * 100000;
    var correctAnswer = -1;
    if (variation === 1) {
        // Вариация 1: просрочка 15 дней
        let penaltyPerDay = contractSum * 0.004;
        let penalty = penaltyPerDay * 15;
        penalty = Math.min(penalty, 186000);
        let fine = 92800;
        correctAnswer = 2*deposit + penalty + fine;
    } else {
        // Вариация 2: просрочка 9 дней
        let penaltyPerDay = contractSum * 0.004;
        let penalty = penaltyPerDay * 9;
        penalty = Math.min(penalty, 186000);
        let fine = 92800;
        correctAnswer = deposit + penalty + fine;
    }
    
    return {
        variation: variation,
        contractSum: contractSum,
        deposit: deposit,
        correctAnswer: Math.round(correctAnswer)
    };
}

// Генерация параметров для задачи 4
function generateTask4() {
    var variation = randomInt(1, 2);
    
    if (variation === 1) {
        // Вариация 1: расчёт количества спринтов
        var initialBacklog = randomInt(300, 400);
        var velocityPerDev = randomInt(25, 35);
        var addedPerSprint = randomInt(5, 15);
        
        // Расчёт
        var v1 = velocityPerDev;
        var v2 = 2 * velocityPerDev;
        var x = (initialBacklog + 3*v1) / (v2 - addedPerSprint);
        let correctAnswer = Math.ceil(x);
        
        return {
            variation: variation,
            initialBacklog: initialBacklog,
            velocityPerDev: velocityPerDev,
            addedPerSprint: addedPerSprint,
            correctAnswer: correctAnswer
        };
    } else {
        // Вариация 2: расчёт начального бэклога
        var totalSprints = randomInt(8, 12);
        var velocityPerSprint = randomInt(70, 90);
        var addedFirst = randomInt(5, 15);
        var addedRest = randomInt(10, 20);
        
        let correctAnswer = totalSprints * velocityPerSprint - (3*addedFirst + (totalSprints-3)*addedRest);
        
        return {
            variation: variation,
            totalSprints: totalSprints,
            velocityPerSprint: velocityPerSprint,
            addedFirst: addedFirst,
            addedRest: addedRest,
            correctAnswer: Math.round(correctAnswer)
        };
    }
}

// Генерация параметров для задачи 5
function generateTask5() {
    var premiaNaRuki = Math.round(randomInRange(80000, 150000) / 1000) * 1000;
    var alreadyPaid = Math.round(randomInRange(2000000, 2500000) / 1000) * 1000;
    
    // Расчёт
    var nacisPremia = premiaNaRuki / 0.87;
    var limitBase = 2225000;
    
    var partInLimit = Math.max(0, limitBase - alreadyPaid);
    var partOverLimit = Math.max(0, nacisPremia - partInLimit);
    
    var vzosy = partInLimit * 0.3 + partOverLimit * 0.151;
    var sumForAccount = nacisPremia + vzosy;
    var sumWithNDS = sumForAccount * 1.2;
    
    return {
        premiaNaRuki: premiaNaRuki,
        alreadyPaid: alreadyPaid,
        correctAnswer: Math.round(sumWithNDS * 100) / 100
    };
}

// Генерация всех задач
var task1 = generateTask1();
var task2 = generateTask2();
var task3 = generateTask3();
var task4 = generateTask4();
var task5 = generateTask5();

// Вывод условий задач
output.print('<h2>Тренажёр по расчётным задачам</h2>');
output.print('<p><strong>Seed:</strong> ' + seedStr + '</p>');

output.print('<h3>Задание 1</h3>');
output.print('<p>Не прошедшее IT-регистрацию ПАО "Ой, всё упало" в этой контрольной работе для студентов ведет разработку ПО с использованием ОСНО в 2025 году. ПАО воспользовалось услугами субподрядчиков на ОСНО, и получила документарные подтверждения указанных в задании работ, включенных в разработанное ПО. Цена ПО ПАО для заказчиков составляет ' + task1.pricePO.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей включая НДС. Какую, рассчитанную вручную сумму НДС, должно уплатить ПАО в бюджет после продажи своего ПО?</p>');
output.print('<ul>');
output.print('<li>ООО "АйТи-Прорыв": услуг разработки ПО на ' + task1.sum1.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей с НДС;</li>');
output.print('<li>ООО "Оптимизировали хуже": услуг разработки ПО на ' + task1.sum2.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей с НДС;</li>');
output.print('<li>ООО "Клик-клак-код": услуг разработки ПО на ' + task1.sum3.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей без НДС;</li>');
output.print('<li>ООО "Кэш и Соль": услуг разработки ПО на сумму, где НДС составляет ' + task1.sum4_nds.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей;</li>');
output.print('</ul>');
if (Math.abs(input.value_by_id("answer1")-task1.correctAnswer)<1) {
	output.print('Ответ верный!!!');
} else if (input.value_by_id("answer1")) {
	output.print('<b>Ответ НЕ верный!!!</b>');
}

output.print('<h3>Задание 2</h3>');
output.print('<p>В ООО "Оптимизировали хуже" ведется разработка информационной системы инновационных самоходных хлебобулочных изделий "Колобок". Сколько стоит (без НДС) доработка системы со следующими требованиями (в чел.часах), если используется методика PERT, а стоимость одного человека-часа составляет ' + task2.costPerHour.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей? Ответ округлить до целого.</p>');
output.print('<ul>');
output.print('<li>FR-4. Система должна запрашивать ФИО покупателя колобка. O=' + task2.O1 + ' M=' + task2.M1 + ' P=' + task2.P1 + '</li>');
output.print('<li>FR-5. Модуль предупреждений должен получать прогноз хитрости лисиц. O=' + task2.O2 + ' M=' + task2.M2 + ' P=' + task2.P2 + '</li>');
output.print('<li>FR-6. Модуль алиби должен вводить время последнего контакта с покупателем. O=' + task2.O3 + ' M=' + task2.M3 + ' P=' + task2.P3 + '</li>');
output.print('</ul>');
if (Math.abs(input.value_by_id("answer2")-task2.correctAnswer)<1) {
	output.print('Ответ верный!!!');
} else if (input.value_by_id("answer2")) {
	output.print('<b>Ответ НЕ верный!!!</b>');
}

output.print('<h3>Задание 3</h3>');
if (task3.variation === 1) {
    output.print('<p>ООО "Разработчик выжил", именуемое в дальнейшем Заказчик и ООО "Шифрую что вижу", именуемое в дальнейшем Исполнитель, в этом итоговом тесте заключили договор о разработке программного обеспечения на общую сумму ' + task3.contractSum.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей. Исполнитель использует УСН, его услуги в настоящее время НДС не облагаются. Обеспечительным активом по договору является задаток в сумме ' + task3.deposit.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей. Договор может быть расторгнут Заказчиком, если если просрочка сдачи промежуточного релиза ПО Исполнителем составила 14 и более календарных дней. Штрафные санкции по договору составляют пени 0.4% за каждый день просрочки, но не более 186000 рублей. За каждый случай просрочки предусмотрен штраф 92800 рублей. Договор был расторгнут Заказчиком на 15 день после несостоявшегося показа ПО. Положения ст. 395 ГК РФ к настоящему студенческому контролю неприменимы. Посчитайте какую итоговую сумму должен вернуть Исполнитель Заказчику?</p>');
} else {
    output.print('<p>ООО "Разработчик выжил", именуемое в дальнейшем Заказчик и ООО "Шифрую что вижу", именуемое в дальнейшем Исполнитель, в этом итоговом тесте заключили договор о разработке программного обеспечения на общую сумму ' + task3.contractSum.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей. Исполнитель использует УСН, его услуги в настоящее время НДС не облагаются. Обеспечительным активом по договору является задаток в сумме ' + task3.deposit.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей. Договор может быть расторгнут Заказчиком, если если просрочка сдачи промежуточного релиза ПО Исполнителем составила 10 и более календарных дней. Штрафные санкции по договору составляют пени 0.4% за каждый день просрочки, но не более 186000 рублей. За каждый случай просрочки предусмотрен штраф 92800 рублей. Договор был расторгнут Заказчиком на 9 день после несостоявшегося показа ПО. Положения ст. 395 ГК РФ к настоящему студенческому контролю неприменимы. Посчитайте какую итоговую сумму должен вернуть Исполнитель Заказчику?</p>');
}
if (Math.abs(input.value_by_id("answer3")-task3.correctAnswer)<1) {
	output.print('Ответ верный!!!');
} else if (input.value_by_id("answer3")) {
	output.print('<b>Ответ НЕ верный!!!</b>');
}

output.print('<h3>Задание 4</h3>');
if (task4.variation === 1) {
    output.print('<p>В ООО "Обновите драйвер" два разработчика за спринт в среднем закрывают задач по ' + task4.velocityPerDev + ' сторипоинтов каждый. В последние три недели проекта один из разработчиков находился в отпуске. Владелец продукта добавляет в среднем ' + task4.addedPerSprint + ' попугаев в каждый спринт. Посчитайте какое количество спринтов необходимо, если изначально бэклог был оценен в ' + task4.initialBacklog + ' сторипоинтов?</p>');
} else {
    output.print('<p>Вы разработали ПО за ' + task4.totalSprints + ' спринтов, как показывает ваша финальная улучшенная диаграмма сгорания. За спринт разработчики отрабатывают в среднем по ' + task4.velocityPerSprint + ' попугаев. Каждый спринт ПМ добавлял в спринт по ' + task4.addedFirst + ' попугаев. После третьего спринта в каждый следующий спринт добавлялось по ' + task4.addedRest + ' попугаев. Сколько попугаев было изначально в улучшенной диаграмме сгорания?</p>');
}
if (Math.abs(input.value_by_id("answer4")-task4.correctAnswer)<1) {
	output.print('Ответ верный!!!');
} else if (input.value_by_id("answer4")) {
	output.print('<b>Ответ НЕ верный!!!</b>');
}

output.print('<h3>Задание 5</h3>');
output.print('<p>Не прошедшее IT-регистрацию ЗАО "Зашёл и завис" использует ОСНО в 2024 году. По условиям этой контрольной работы директор решил выплатить своему сотруднику премию за разработку ПО в размере ' + task5.premiaNaRuki.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей на руки. Посчитайте вручную, как оптимизировать налоги, и сколько директор должен включить в счет для заказчика, если в этом году он уже выплатил ему ' + task5.alreadyPaid.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' рублей? Компания не является малым предприятием.</p>');
if (Math.abs(input.value_by_id("answer5")-task5.correctAnswer)<1) {
	output.print('Ответ верный!!!');
} else if (input.value_by_id("answer5")) {
	output.print('<b>Ответ НЕ верный!!!</b>');
}

// Если отмечен чекбокс "Показать ответы"
if (input.value_by_id("show_answers")) {
    output.print('<hr><h3>Правильные ответы:</h3>');
    output.print('<p><strong>Задание 1:</strong> ' + task1.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' руб.</p>');
    output.print('<p><strong>Задание 2:</strong> ' + task2.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' руб.</p>');
    output.print('<p><strong>Задание 3:</strong> ' + task3.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' руб.</p>');
    output.print('<p><strong>Задание 4:</strong> ' + task4.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + '</p>');
    output.print('<p><strong>Задание 5:</strong> ' + task5.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' руб.</p>');
}
