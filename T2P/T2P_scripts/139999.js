//- name: Тренажёр по расчётным задачам
//- semester: 7
//- description: Генератор случайных задач с проверкой ответов
//- author: &#60;T&#62;
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

function shuffleArray(array) {
    const shuffled = [...array];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// Генерация параметров для задачи 1
function generateTask1() {
    // Генерация формата для цены ПО компании
    const companyPriceType = Math.floor(rand() * 2); // 0 - цена с НДС, 1 - цена без НДС
    
    // Генерация базовых сумм в зависимости от формата
    let pricePO, priceText, nds_realiz;
    
    if (companyPriceType === 0) {
        // Цена с НДС (как было в оригинале)
        pricePO = Math.round(randomInRange(300000, 500000) / 100) * 100;
        nds_realiz = pricePO * 20 / 120;
        priceText = `Цена ПО ПАО для заказчиков составляет ${pricePO.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей, включая НДС.`;
    } else {
        // Цена без НДС
        pricePO = Math.round(randomInRange(250000, 450000) / 100) * 100;
        nds_realiz = pricePO * 0.2;
        priceText = `Цена ПО ПАО для заказчиков составляет ${pricePO.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей без учета НДС.`;
    }
    
    // Генерация услуг (от 3 до 5)
    const serviceCount = randomInRange(3, 5);
    const services = [];
    const companyNames = [
        "АйТи-Прорыв", "Оптимизировали хуже", "Клик-клак-код", 
        "Кэш и Соль", "Веб-мастодонты", "Байт-стандарт", 
        "Код-мейкеры", "Бит-системы", "Техно-лидеры"
    ];
    
    // Перемешиваем имена компаний
    const shuffledNames = shuffleArray(companyNames);
    
    let nds_vichet = 0;
    const serviceTexts = [];
    
    for (let i = 0; i < serviceCount; i++) {
        const serviceType = Math.floor(rand() * 4); // 0 - с НДС, 1 - без НДС, 2 - отдельно НДС, 3 - вообще нет НДС (например, УСН)
        
        let serviceSum, serviceNds, serviceText, serviceName = shuffledNames[i];
        
        if (serviceType === 0) {
            // С НДС
            serviceSum = Math.round(randomInRange(20000, 70000) / 100) * 100;
            serviceNds = serviceSum * 20 / 120;
            serviceText = `${serviceName}: услуг разработки ПО на ${serviceSum.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей с НДС`;
        } else if (serviceType === 1) {
            // Без НДС
            serviceSum = Math.round(randomInRange(20000, 70000) / 100) * 100;
            serviceNds = serviceSum * 0.2;
            serviceText = `${serviceName}: услуг разработки ПО на ${serviceSum.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей без НДС`;
        } else if (serviceType === 2) {
            // Отдельно указан НДС
            serviceNds = Math.round(randomInRange(3000, 10000) / 100) * 100;
            const sumWithoutNds = Math.round(randomInRange(20000, 60000) / 100) * 100;
            serviceSum = sumWithoutNds + serviceNds;
            serviceText = `${serviceName}: услуг разработки ПО на сумму, где НДС составляет ${serviceNds.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей`;
        } else {
            // Нет НДС (например, компания на УСН)
            serviceSum = Math.round(randomInRange(20000, 70000) / 100) * 100;
            serviceNds = 0;
            serviceText = `${serviceName}: услуг разработки ПО на ${serviceSum.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей без НДС; (услуги не облагаются ндс)`;
        }
        
        services.push({
            name: serviceName,
            type: serviceType,
            sum: serviceSum,
            nds: serviceNds,
            text: serviceText
        });
        
        nds_vichet += serviceNds;
        serviceTexts.push(serviceText);
    }
    
    // Расчёт итогового НДС к уплате
    const nds_uplata = nds_realiz - nds_vichet;
    
    return {
        priceText: priceText,
        services: services,
        serviceTexts: serviceTexts,
        correctAnswer: Math.round(nds_uplata * 100) / 100,
        nds_realiz: Math.round(nds_realiz * 100) / 100,
        nds_vichet: Math.round(nds_vichet * 100) / 100
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
    // Рандомные параметры для разнообразия
    const variations = [
        { type: "пени", calc: "ежедневные" },
        { type: "штраф", calc: "фиксированный" },
        { type: "пени+штраф", calc: "комбинированные" }
    ];
    
    const variation = variations[Math.floor(rand() * variations.length)];
    
    // Генерация базовых параметров с разными диапазонами
    const contractSum = Math.round(randomInRange(1500000, 5000000) / 100000) * 100000;
    
    // Тип обеспечительного актива (может быть задаток, аванс или залог)
    const depositTypes = ["задаток", "аванс", "обеспечительный платеж"];
    const depositType = depositTypes[Math.floor(rand() * depositTypes.length)];
    
    // Сумма обеспечительного актива (от 10% до 30% от суммы контракта)
    const depositPercent = randomInRange(10, 30) / 100;
    const deposit = Math.round(contractSum * depositPercent / 100000) * 100000;
    
    // Параметры просрочки
    const maxThreshold = randomInt(7, 20); // Максимальный порог для расторжения
    const actualDelay = Math.floor(randomInRange(maxThreshold + 1, maxThreshold + 5)); // Фактическая просрочка
    const canTerminate = actualDelay >= maxThreshold;
    
    // Генерация штрафных санкций
    let penaltyRate, maxPenalty, fixedFine;
    
    if (variation.type === "пени") {
        penaltyRate = Math.round(randomInRange(0.2, 0.5)*10)/10 / 100; // 0.2% - 0.5%
        maxPenalty = Math.round(randomInRange(100000, 250000) / 10000) * 10000;
        fixedFine = 0;
    } else if (variation.type === "штраф") {
        penaltyRate = 0;
        maxPenalty = 0;
        fixedFine = Math.round(randomInRange(50000, 200000) / 10000) * 10000;
    } else { // пени+штраф
        penaltyRate = Math.round(randomInRange(0.1, 0.4)*10)/10 / 100; // 0.1% - 0.4%
        maxPenalty = Math.round(randomInRange(80000, 200000) / 10000) * 10000;
        fixedFine = Math.round(randomInRange(30000, 150000) / 10000) * 10000;
    }
    
    // Налоговый режим компании (может быть УСН или ОСНО)
    const taxRegimes = ["ОСНО"];
    const taxRegime = taxRegimes[Math.floor(rand() * taxRegimes.length)];
    
    // Расчёт правильного ответа
    let correctAnswer = 0;
    
    // Возврат обеспечительного актива
    if (depositType === "задаток" && canTerminate) {
        // Задаток возвращается в двойном размере при расторжении по вине исполнителя
        correctAnswer += 2 * deposit;
    } else {
        // Аванс или обеспечительный платеж возвращается в одинарном размере
        correctAnswer += deposit;
    }
    
    // Пени за просрочку
    let penalty = 0;
    if (penaltyRate > 0) {
        penalty = contractSum * penaltyRate * actualDelay;
        penalty = Math.min(penalty, maxPenalty);
        correctAnswer += penalty;
    }
    
    // Штраф
    if (fixedFine > 0) {
        correctAnswer += fixedFine;
    }
    
    return {
        contractSum: contractSum,
        depositType: depositType,
        deposit: deposit,
        taxRegime: taxRegime,
        maxThreshold: maxThreshold,
        actualDelay: actualDelay,
        canTerminate: canTerminate,
        penaltyRate: penaltyRate,
        maxPenalty: maxPenalty,
        fixedFine: fixedFine,
        variationType: variation.type,
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
    
	var partInLimit = Math.min(nacisPremia, Math.max(0, limitBase - alreadyPaid));
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
output.print('<p>Не прошедшее IT-регистрацию ПАО "Ой, всё упало" в этой контрольной работе для студентов ведет разработку ПО с использованием ОСНО в 2025 году. ПАО воспользовалось услугами субподрядчиков, и получила документарные подтверждения указанных в задании работ, включенных в разработанное ПО. ' + task1.priceText + ' Какую, рассчитанную вручную сумму НДС, должно уплатить ПАО в бюджет после продажи своего ПО?</p>');
output.print('<ul>');
for (let serviceText of task1.serviceTexts) {
    output.print('<li>' + serviceText + ';</li>');
}
output.print('</ul>');
if (Math.abs(input.value_by_id("answer1") - task1.correctAnswer) < 1) {
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
let taskText = `<p>ООО "Разработчик выжил", именуемое в дальнейшем Заказчик и ООО "Шифрую что вижу", именуемое в дальнейшем Исполнитель, заключили договор о разработке программного обеспечения на общую сумму ${task3.contractSum.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей. Исполнитель использует ${task3.taxRegime}, его услуги в настоящее время НДС не облагаются.</p>`;
taskText += `<p>Обеспечительным активом по договору является ${task3.depositType} в сумме ${task3.deposit.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей.`;
if (task3.depositType === "задаток") {
    taskText += ` Договор может быть расторгнут Заказчиком, если просрочка сдачи промежуточного релиза ПО Исполнителем составила ${task3.maxThreshold} и более календарных дней.`;
} else {
    taskText += ` Договор может быть расторгнут Заказчиком в одностороннем порядке, если просрочка сдачи промежуточного релиза ПО Исполнителем составила ${task3.maxThreshold} и более календарных дней.`;
}
if (task3.variationType === "пени") {
    taskText += ` Штрафные санкции по договору составляют пени ${(task3.penaltyRate * 100).toFixed(1)}% за каждый день просрочки, но не более ${task3.maxPenalty.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей.`;
} else if (task3.variationType === "штраф") {
    taskText += ` Штрафные санкции по договору составляют фиксированный штраф ${task3.fixedFine.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей за каждый случай просрочки.`;
} else {
    taskText += ` Штрафные санкции по договору составляют пени ${(task3.penaltyRate * 100).toFixed(1)}% за каждый день просрочки (но не более ${task3.maxPenalty.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей) и фиксированный штраф ${task3.fixedFine.toLocaleString('ru-RU', { maximumFractionDigits: 2 })} рублей за каждый случай просрочки.`;
}
taskText += ` Договор был расторгнут Заказчиком на ${task3.actualDelay} день после несостоявшегося показа ПО. Положения ст. 395 ГК РФ к настоящему студенческому контролю неприменимы.</p>`;
taskText += `<p>Посчитайте какую итоговую сумму должен вернуть Исполнитель Заказчику?</p>`;
output.print(taskText);
if (Math.abs(input.value_by_id("answer3") - task3.correctAnswer) < 1) {
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
	output.print('<div style="font-size: 0.8em; color: #666; margin-top: 20px;">');
	output.print('<p><strong>Отладочная информация:</strong></p>');
	output.print('<p>НДС с реализации: ' + task1.nds_realiz.toLocaleString('ru-RU') + ' руб.</p>');
	output.print('<p>НДС к вычету: ' + task1.nds_vichet.toLocaleString('ru-RU') + ' руб.</p>');
	output.print('</div>');
    output.print('<p><strong>Задание 2:</strong> ' + task2.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' руб.</p>');
    output.print('<p><strong>Задание 3:</strong> ' + task3.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' руб.</p>');
	output.print('<div style="font-size: 0.8em; color: #666; margin-top: 20px;">');
	output.print('<p><strong>Отладочная информация:</strong></p>');
	output.print(`<p>Тип обеспечительного актива: ${task3.depositType}</p>`);
	output.print(`<p>Порог для расторжения: ${task3.maxThreshold} дней</p>`);
	output.print(`<p>Фактическая просрочка: ${task3.actualDelay} дней</p>`);
	output.print(`<p>Можно ли расторгнуть: ${task3.canTerminate ? 'Да' : 'Нет'}</p>`);
	output.print(`<p>Возврат обеспечительного актива: ${task3.canTerminate && task3.depositType === 'задаток' ? '2 × ' + task3.deposit.toLocaleString('ru-RU') + ' = ' + (2 * task3.deposit).toLocaleString('ru-RU') + ' руб.' : task3.deposit.toLocaleString('ru-RU') + ' руб.'}</p>`);
	if (task3.penaltyRate > 0) {
		const penalty = Math.min(task3.contractSum * task3.penaltyRate * task3.actualDelay, task3.maxPenalty);
		output.print(`<p>Пени: ${(task3.penaltyRate * 100).toFixed(1)}% × ${task3.contractSum.toLocaleString('ru-RU')} × ${task3.actualDelay} дней = ${penalty.toLocaleString('ru-RU')} руб.</p>`);
	}
	if (task3.fixedFine > 0) {
		output.print(`<p>Штраф: ${task3.fixedFine.toLocaleString('ru-RU')} руб.</p>`);
	}
	output.print('</div>');
    output.print('<p><strong>Задание 4:</strong> ' + task4.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + '</p>');
    output.print('<p><strong>Задание 5:</strong> ' + task5.correctAnswer.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' руб.</p>');
}
