//- name: discrete mathematics HW5
//- description: discrete mathematics HW5
//- author: owl from hogvarts (GUI by <T>)
//- semester: 1
//- faculty: ВТ
//- input: inline_string
//- input_default_value: 1272 12
//- output: html
//- import: discrete_math
output.print('<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;">');
output.print('<h2 style="margin:0;">Дисклеймер</h2>');
output.print('Результат работы данной программы (далее результат) предоставляется только с целью подготовки. Разработчики не несут никакой ответственности за использование этого результата. Продажа результата без разрешения разработчиков запрещена.');
output.print('<h3 style="margin:0;">Разработчики</h3>');
output.print('<b>owl-from-hogvarts</b> - создатель библиотеки для выполнения арифметических действий<br>'); 
output.print('⟨T⟩ - графическая оболочка над библиотекой');
output.print('</div><br>');

//output.print('<div style="background-color: #ff0000;color: #00ff00;text-align:center;border-radius:10px;font-size:20px">');
//output.print('!!!Обноружена ошибка, проверяйте результат работы алгоритма!!!');
//output.print('</div><br>');

var pb = (b)=>b.data.join('');
var pb2 = (b,i,bb)=>b.data.map((x,j)=>(j==7&&bb?'<b>':'')+x+(i==7-j&&j!=7?'|':'')+(j==7&&bb?'</b>':'')).join('');

var ia=+input.all.split(' ')[0];
var ib=+input.all.split(' ')[1];


const aBytes = discrete_math.Byte.fill(2);
const bBytes = discrete_math.Byte.fill(2);
var a = new discrete_math.Register(aBytes).set(ia);
var b = new discrete_math.Register(bBytes).set(ib);

output.print('A = '+ia+'<br>');
output.print('B = '+ib+'<br>');
output.print('<br>');
var rnd=Math.random()>0.5;
var print_num=Math.random()>0.5;

output.print('['+(rnd?'+':'')+'A]<sub>пр</sub> = '+ a.bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('[-A]<sub>доп</sub> = '+ (new discrete_math.Register(aBytes).set(-ia)).bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('<br>');
output.print('['+(rnd?'+':'')+'B]<sub>пр</sub> = '+ pb(b.bytes[1]).replace(/(\d)/,'$1.')+'<br>');
output.print('[-B]<sub>доп</sub> = '+ pb((new discrete_math.Register(aBytes).set(-ib)).bytes[1]).replace(/(\d)/,'$1.')+'<br>');
output.print('<br>');


[[1,1,'положительное (<b>A</b> > 0)', 'положительный (<b>B</b> > 0):','пр','пр','доп','доп'],
[-1,1,'отрицательное (<b>A</b> < 0)', 'положительный (<b>B</b> > 0):','доп','пр','пр','доп'],
[1,-1,'положительное (<b>A</b> > 0)', 'отрицательный (<b>B</b> < 0):','пр','доп','доп','пр'],
[-1,-1,'отрицательное (<b>A</b> < 0)', 'отрицательный (<b>B</b> < 0):','доп','доп','пр','пр']].map((xx,xn)=>{
  var mode=1;
  if (xn>0&&xn<3)mode=0;
  
a = new discrete_math.Register(aBytes).set(xx[0]*ia);
b = new discrete_math.Register(bBytes).set(xx[1]*ib);
var nb = new discrete_math.Register(discrete_math.Byte.fill(2)).set(-xx[1]*ib);
const result = discrete_math.divide(a, b);
//output.print(result);
//output.print('<BR><BR>'+result.steps.map(JSON.stringify).join('<br><br>'));
//output.print(result.result[1].formatBeauty("reminder"));
//output.all='';
output.print((xn+1)+') Делимое '+xx[2]+', делитель '+xx[3]);
output.print('<table>');
output.print('  <tr>');
output.print('    <th>№</th>');
output.print('    <th>Операнды<br>и действия</th>');
output.print('    <th>Делимое и<br>остаток (старшие)</th>');
output.print('    <th>Делимое и <br>остаток (младшие), частное</th>');
output.print('    <th>Пояснения</th>');
output.print('  </tr>');
  if(print_num){
		output.print('  <tr>');
		output.print('    <td>1</td>');
		output.print('    <td>2</td>');
		output.print('    <td>3</td>');
		output.print('    <td>4</td>');
		output.print('    <td>5</td>');
		output.print('  </tr>');
  }
output.print('  <tr>');
output.print('    <td>0</td>');
output.print('    <td style="text-align:left;">[A]<sub>'+xx[4]+'</sub></td>');
output.print('    <td>'+pb(a.bytes[0])+'</td>');
output.print('    <td>'+pb(a.bytes[1])+'</td>');
output.print('    <td style="text-align:left;">Делимое</td>');
output.print('  </tr>');
result.steps.map((x,i)=>{
  output.print('  <tr>');
  output.print('    <td>'+(i+1)+'</td>');
  var f=0;
  if (i==0 && mode)
    output.print('    <td style="text-align:left;">[A]<sub>'+xx[4]+'</sub> ←<br>[-B]<sub>'+xx[7]+'</sub><br>R<sub>1</sub></td>');
  else if (i==0)
    output.print("    <td style=\"text-align:left;\">[B]<sub>"+xx[5]+"</sub><br>R<sub>1</sub>'<br>R<sub>1</sub>' ←<br>[B]<sub>"+xx[5]+"</sub><br>R<sub>1</sub></td>");
  else if (i==8)//result.steps.length-1&&mode)
  	output.print('    <td style="text-align:left;">[B]<sub>'+xx[5]+'</sub><br>R<sub>'+(i+1)+'</sub></td>');
  else{
    f=(x.operandDescription.length-2);
    output.print('    <td style="text-align:left;">'+['R<sub>'+i+'</sub> ←<br>[B]<sub>'+xx[5]+'</sub><br>R<sub>'+(i+1)+'</sub><br>&nbsp;','R<sub>'+i+'</sub> ←<br>[-B]<sub>'+xx[7]+'</sub><br>R<sub>'+(i+1)+'</sub><br>&nbsp;'][f]+'</td>');
  }
  
  if (i==0&&mode)
    output.print('    <td>'+pb(x.operandDescription[0].data.bytes[0])+'<br>'+
                 '<u>'+pb(x.operandDescription[1].data.bytes[0])+'</u><br>'+
                 pb(x.operandDescription[2].data.bytes[0])+'<br><br><br>'+
                 pb(x.operandDescription[2].data.bytes[0])+'<br>'+
                 (pb(x.operandDescription[2].data.bytes[0])[0]==pb(b.bytes[1])[0]?'ЗнR<sub>1</sub> = ЗнB':'ЗнR<sub>1</sub> ≠ ЗнB')+
                 '</td>');
  else if (i==0){
    output.print('    <td><u>'+pb(x.operandDescription[0].data.bytes[0])+'</u><br>'+
                 pb(x.operandDescription[1].data.bytes[0])+'<br><br>'+
                 pb(x.operandDescription[2].data.bytes[0])+'<br>'+
                 '<u>'+pb(x.operandDescription[3].data.bytes[0])+'</u><br>'+
                 pb(x.operandDescription[4].data.bytes[0])+'<br><br>'+
                 pb(x.operandDescription[4].data.bytes[0])+'<br>'+
                 (pb(x.operandDescription[4].data.bytes[0])[0]==pb(b.bytes[1])[0]?'ЗнR<sub>1</sub> = ЗнB':'ЗнR<sub>1</sub> ≠ ЗнB')+
                 '</td>');
  }else if (i==8)//result.steps.length-1&&mode)
    output.print('    <td><u>'+(pb(result.steps[7].operandDescription[result.steps[7].operandDescription.length-1].data.bytes[0])[0]!=pb(b.bytes[1])[0]?pb(b.bytes[1]):pb(nb.bytes[1]))+'</u><br>'+
                 pb(result.result[1].bytes[0])+
                 '</td>');
  else
    output.print('    <td>'+pb(x.operandDescription[0].data.bytes[0])+'<br>'+
                 '<u>'+(1-f?pb(b.bytes[1]):pb(nb.bytes[1]))+'</u><br>'+
                 pb(x.operandDescription[f+1].data.bytes[0])+'<br>'+
                 (pb(x.operandDescription[f+1].data.bytes[0])[0]==pb(b.bytes[1])[0]?'ЗнR<sub>'+(i+1)+'</sub> = ЗнB':'ЗнR<sub>'+(i+1)+'</sub> ≠ ЗнB')+
                 '</td>');
 	//output.print('    <td>'+x.operandDescription.map((y,ii)=>x.operandDescription.length>1&&ii==0?'<u>'+pb(y.data.bytes[0])+'</u>':pb(y.data.bytes[0])).join('<br>')+'</td>');
  
  if (i==0&&mode)
    output.print('    <td>'+pb2(x.operandDescription[0].data.bytes[1],i+1)+'<br><br><br><br><br>'+
                 pb2(x.operandDescription[2].data.bytes[1],i+1)+'<br>&nbsp;'+
                 '</td>');
  else if (i==0){
    output.print('    <td><u>'+pb(x.operandDescription[0].data.bytes[1])+'</u><br>'+
                 pb(x.operandDescription[1].data.bytes[1])+'<br><br>'+
                 pb2(x.operandDescription[2].data.bytes[1],i+1)+'<br><br><br><br>'+
                 pb2(x.operandDescription[4].data.bytes[1],i+1).replace(/\d$/,pb(x.operandDescription[4].data.bytes[0])[0]!=pb(b.bytes[1])[0]?0:1)+'<br>&nbsp;'+
                 '</td>');
  }else if (i==8)//result.steps.length-1&&mode)
  	output.print('    <td><br>'+
                 pb(result.result[0].bytes[0])+
                 '</td>');
  else
	 output.print('    <td>'+pb2(x.operandDescription[0].data.bytes[1],i+1)+'<br><br>'+
                 pb2(x.operandDescription[0].data.bytes[1],i+1).replace(/\d$/,pb(x.operandDescription[f+1].data.bytes[0])[0]!=pb(b.bytes[1])[0]?0:1)+'<br>&nbsp;'+
                 '</td>');
  
  if (i==0&&mode)
    output.print('    <td style="text-align:left;">Сдвиг делимого влево<br>Вычитание делителя<br>Знак первого остатка не совпадает со<br>знаком делимого-делителя корректно<br><br>Формирование цифры частного<br>&nbsp;</td>');
  else if (i==0)
    output.print('    <td style="text-align:left;">Сложение с делителем, выровненным<br>по младшим разрядам<br><br>Сдвиг остатка влево<br>Сложение с делителем выровненным по старшим разрядам<br>Знак первого остатка не совпадает<br>со знаком делимого-делителя корректно<br>Формирование знака частного<br>&nbsp;</td>');
  else if (i==8){//result.steps.length-1&&mode){
    output.print('    <td style="text-align:left;">Коррекция остатка: '+(pb(result.steps[7].operandDescription[result.steps[7].operandDescription.length-1].data.bytes[0])[0]!=pb(b.bytes[1])[0]?'сложение с делителем':'вычитание делителя')+'<br>Результат</td>');
  }else
  	output.print('    <td style="text-align:left;">Сдвиг остатка влево<br>'+(f?'Вычитание делителя':'Сложение с делителем')+'<br>Формирование цифры частного<br>&nbsp;</td>');
  output.print('  </tr>');
});
output.print('</table><br>');
output.print('В результате выполнения операции получено '+(result.result[0].bytes[0].data[0]?'отрицательное':'положительное')+' частное и '+(result.result[1].bytes[0].data[0]?'отрицательный':'положительный')+' остаток:<br>');
output.print('<br>');
output.print('[C]<sub>пр</sub> = '+result.result[0].bytes[0].data[0]+'.'+(128+Math.abs(+result.result[0].formatBeauty().split(' ')[3])).toString(2).replace('1','')+'<sub>2</sub> = '+result.result[0].formatBeauty().split(' ')[3]+'<sub>10</sub><br>');
output.print('[R]<sub>пр</sub> = '+result.result[1].bytes[0].data[0]+'.'+(128+Math.abs(+result.result[1].formatBeauty().split(' ')[3])).toString(2).replace('1','')+'<sub>2</sub> = '+result.result[1].formatBeauty().split(' ')[3]+'<sub>10</sub><br>');
output.print('<br>');
output.print('<br>');
});
if (Math.random()>0.5)
  output.all=output.all.replace(/<th(.*?)>(.*?)<\/th>/g,'<td$1>$2</td>');
return 0;