//- name: discrete mathematics HW4
//- description: discrete mathematics HW4
//- author: owl from hogvarts (GUI by <T>)
//- semester: 1
//- faculty: ВТ
//- input: inline_string
//- input_default_value: 44 56
//- output: html
//- import: discrete_math
output.print('<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;">');
output.print('<h2 style="margin:0;">Дисклеймер</h2>');
output.print('Результат работы данной программы (далее результат) предоставляется только с целью подготовки. Разработчики не несут никакой ответственности за использование этого результата. Продажа результата без разрешения разработчиков запрещена.');
output.print('<h3 style="margin:0;">Разработчики</h3>');
output.print('<b>owl-from-hogvarts</b> - создатель библиотеки для выполнения арифметических действий<br>'); 
output.print('⟨T⟩ - графическая оболочка над библиотекой');
output.print('</div><br>');
var print_num =Math.random()>0.5;
var ia=+input.all.split(' ')[0];
var ib=+input.all.split(' ')[1];
if (ia<=0 || ib<=0) return '"ошибка ввода данных"';
output.print('A = '+ia+'<br>');
output.print('B = '+ib);




output.print('<h4 style="text-align:center;">№1</h4>');
var pram='';
['а) A>0, B>0','б) A<0, B>0','в) A>0, B<0','г) A<0, B<0'].map((tx,ti)=>{
output.print(tx);

var pb = (b)=>b.data.join('');
var pb2 = (b,i,bb)=>b.data.map((x,j)=>(j==7&&bb?'<b>':'')+x+(i==7-j&&j!=7?'|':'')+(j==7&&bb?'</b>':'')).join('');
const aBytes = discrete_math.Byte.fill(1);
const bBytes = discrete_math.Byte.fill(1);
const a = new discrete_math.Register(aBytes).set((ti%2==1?-1:1)*ia);
const b = new discrete_math.Register(bBytes).set((ti>1?-1:1)*ib);
const result = discrete_math.multiplyWithCorrection(a, b);
//console.dir(result.steps, { depth: 4 });
//console.log(result.result[0].formatBeauty("result"));
output.print('<table>');
output.print('  <tr>');
output.print('    <th>№</th>');
output.print('    <th>Операнды<br>и действия</th>');
output.print('    <th>СЧП (старшие)</th>');
output.print('    <th>Множитель и<br>СЧП (младшие разряды)</th>');
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
output.print('    <td style="text-align:left;">СЧП</td>');
output.print('    <td>00000000</td>');
output.print('    <td>'+pb2(bBytes[0],0)+'</td>');
output.print('    <td style="text-align:left;">Обнуление старших разрядов СЧП</td>');
output.print('  </tr>');
result.steps.map((x,i)=>{
  output.print('  <tr>');
  output.print('    <td>'+(i+1)+'</td>');
  output.print('    <td style="text-align:left;">'+['СЧП →','[-A]<sub>доп</sub><br>СЧП','[A]<sub>'+(ti%2!=1?'пр':'доп')+'</sub><br>СЧП<br>СЧП →'][x.operandDescription.length-1]+'</td>');
  output.print('    <td>'+x.operandDescription.map((y,ii)=>x.operandDescription.length>1&&ii==0?'<u>'+pb(y.data.bytes[0])+'</u>':pb(y.data.bytes[0])).join('<br>')+'</td>');
  var md=x.operandDescription[x.operandDescription.length-1].data.bytes[0].data[0];
  //output.print(md);
  output.print('    <td>'+x.operandDescription.map((y,ii)=>y.data.bytes[1]?pb2(y.data.bytes[1],y.data.cursorPosition,ii==x.operandDescription.length-1&& i<7):'').join('<br>')+'</td>');
  output.print('    <td style="text-align:left;">'+([md?'Модифицированный сдвиг СЧП и множителя вправо':'Сдвиг СЧП и множителя вправо','Коррекция результата: сложение<br>старших разрядов СЧП с дополнением множимого','Сложение СЧП с множимым<br><br>'+(md?'Модифицированный сдвиг СЧП и множителя вправо':'Сдвиг СЧП и множителя вправо')][x.operandDescription.length-1])+'</td>');
  output.print('  </tr>');
});
output.print('</table><br>');

if (ti>0&&ti<3){
output.print('Полученный результат отрицателен и представлен в дополнительном коде:<br>');
output.print('[C]<sub>доп</sub> = [A]<sub>'+(ti%2==1?'доп':'пр')+'</sub> × [B]<sub>'+(ti>1?'доп':'пр')+'</sub>');
output.print(' = '+pb(result.result[0].bytes[0]).replace(/(\d)/,'$1.')+pb(result.result[0].bytes[1])+'<br>');
output.print('[C]<sub>пр</sub> = '+pram+' = -'+ia*ib);
}else{
output.print('Полученный результат положителен и представлен в прямом коде:<br>');
output.print('[C]<sub>пр</sub> = [A]<sub>'+(ti%2==1?'доп':'пр')+'</sub> × [B]<sub>'+(ti>1?'доп':'пр')+'</sub> = ');
output.print(pb(result.result[0].bytes[0]).replace(/(\d)/,'$1.')+pb(result.result[0].bytes[1])+' = '+ia*ib);
pram=pb(result.result[0].bytes[0]).replace(/(\d)/,'1.')+pb(result.result[0].bytes[1]);
}
output.print('<br><br>');
});


output.print('<h4 style="text-align:center;">№2</h4>');


['а) A>0, B>0','б) A<0, B>0','в) A>0, B<0','г) A<0, B<0'].map((tx,ti)=>{
output.print(tx);

var pb = (b)=>b.data.join('');
var pb2 = (b,i,bb)=>b.data.map((x,j)=>(j==7&&bb?'<b>':'')+x+(i==7-j&&j!=7?'|':'')+(j==7&&bb?'</b>':'')).join('');
const aBytes = discrete_math.Byte.fill(1);
const bBytes = discrete_math.Byte.fill(1);
const a = new discrete_math.Register(aBytes).set((ti%2==1?-1:1)*ia);
const b = new discrete_math.Register(bBytes).set((ti>1?-1:1)*ib);
const result = discrete_math.multiplyBute(a, b);
//console.dir(result.steps, { depth: 4 });
//console.log(result.result[0].formatBeauty("result"));
output.print('<table>');
output.print('  <tr>');
output.print('    <th>№</th>');
output.print('    <th>Операнды<br>и действия</th>');
output.print('    <th>СЧП (старшие)</th>');
output.print('    <th>Множитель и<br>СЧП (младшие разряды)</th>');
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
output.print('    <td style="text-align:left;">СЧП</td>');
output.print('    <td>00000000</td>');
output.print('    <td>'+pb2(bBytes[0],0)+'</td>');
output.print('    <td style="text-align:left;">Обнуление старших разрядов СЧП</td>');
output.print('  </tr>');
result.steps.map((x,i)=>{
  output.print('  <tr>');
  output.print('    <td>'+(i+1)+'</td>');
  output.print('    <td style="text-align:left;">'+['СЧП →','!!!!!!!',(x.operandDescription[0].comment.indexOf('складываем')?'[-A]<sub>':'[A]<sub>')+(pb(x.operandDescription[0].data.bytes[0])[0]=='0'?'пр':'доп')+'</sub><br>СЧП<br>СЧП →'][x.operandDescription.length-1]+'</td>');
  output.print('    <td>'+x.operandDescription.map((y,ii)=>x.operandDescription.length>1&&ii==0?'<u>'+pb(y.data.bytes[0])+'</u>':pb(y.data.bytes[0])).join('<br>')+'</td>');
  var md=x.operandDescription[x.operandDescription.length-1].data.bytes[0].data[0];
  //output.print(md);
  output.print('    <td>'+x.operandDescription.map((y,ii)=>y.data.bytes[1]?pb2(y.data.bytes[1],y.data.cursorPosition,ii==x.operandDescription.length-1&& i<7):'').join('<br>')+'</td>');
  output.print('    <td style="text-align:left;">'+([md?'Модифицированный сдвиг СЧП и множителя вправо':'Сдвиг СЧП и множителя вправо','!!!!!!!!!!!!!!',(x.operandDescription[0].comment.indexOf('складываем')?'Вычитание СЧП с множимым<br><br>':'Сложение СЧП с множимым<br><br>')+(md?'Модифицированный сдвиг СЧП и множителя вправо':'Сдвиг СЧП и множителя вправо')][x.operandDescription.length-1])+'</td>');
  output.print('  </tr>');
});
output.print('</table><br>');

if (ti>0&&ti<3){
output.print('Полученный результат отрицателен и представлен в дополнительном коде:<br>');
output.print('[C]<sub>доп</sub> = [A]<sub>'+(ti%2==1?'доп':'пр')+'</sub> × [B]<sub>'+(ti>1?'доп':'пр')+'</sub>');
output.print(' = '+pb(result.result[0].bytes[0]).replace(/(\d)/,'$1.')+pb(result.result[0].bytes[1])+'<br>');
output.print('[C]<sub>пр</sub> = '+pram+' = -'+ia*ib);
}else{
output.print('Полученный результат положителен и представлен в прямом коде:<br>');
output.print('[C]<sub>пр</sub> = [A]<sub>'+(ti%2==1?'доп':'пр')+'</sub> × [B]<sub>'+(ti>1?'доп':'пр')+'</sub> = ');
output.print(pb(result.result[0].bytes[0]).replace(/(\d)/,'$1.')+pb(result.result[0].bytes[1])+' = '+ia*ib);
pram=pb(result.result[0].bytes[0]).replace(/(\d)/,'1.')+pb(result.result[0].bytes[1]);
}
output.print('<br><br>');
});

if (Math.random()>0.5)
  output.all=output.all.replace(/Полученный.*?:<br>/g,'');
 
if (Math.random()>0.5)
  output.all=output.all.replace(/(СЧП с множимым)<br><br>/g,'$1<br>');
if (Math.random()>0.8)
  output.all=output.all.replace(/<sub>(.*?)<\/sub>/g,'$1');
if (Math.random()>0.5)
  output.all=output.all.replace(/<th(.*?)>(.*?)<\/th>/g,'<td$1>$2</td>');
return 0;