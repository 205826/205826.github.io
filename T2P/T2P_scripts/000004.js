//- name: discrete mathematics HW5
//- description: discrete mathematics HW5
//- author: owl from hogvarts (GUI by <T>)
//- semester: 1
//- faculty: ВТ
//- input: inline_string
//- input_default_value: 1911 27
//- output: html
//- import: discrete_math

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
output.print('[+A]<sub>пр</sub> = '+ a.bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('[-A]<sub>доп</sub> = '+ (new discrete_math.Register(aBytes).set(-ia)).bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('<br>');
output.print('[+B]<sub>пр</sub> = '+ b.bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('[-B]<sub>доп</sub> = '+ (new discrete_math.Register(aBytes).set(-ib)).bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('<br>');

a = new discrete_math.Register(aBytes).set(ia);
b = new discrete_math.Register(bBytes).set(ib);
const result = discrete_math.divide(a, b);
//output.print(result);
//output.print('<BR><BR>'+result.steps.map(JSON.stringify).join('<br><br>'));
//output.print(result.result[1].formatBeauty("reminder"));
//output.all='';
output.print('<table>');
output.print('  <tr>');
output.print('    <th>№</th>');
output.print('    <th>Операнды<br>и действия</th>');
output.print('    <th>Делимое и<br>остаток (старшие)</th>');
output.print('    <th>Делимое и <br>остаток (младшие), частное</th>');
output.print('    <th>Пояснения</th>');
output.print('  </tr>');
output.print('  <tr>');
output.print('    <td>0</td>');
output.print('    <td style="text-align:left;">[A]<sub>пр</sub></td>');
output.print('    <td>'+pb(a.bytes[0])+'</td>');
output.print('    <td>'+pb(a.bytes[1])+'</td>');
output.print('    <td style="text-align:left;">Делимое</td>');
output.print('  </tr>');
result.steps.map((x,i)=>{
  output.print('  <tr>');
  output.print('    <td>'+(i+1)+'</td>');
  var f=0;
  if (i==0)
    output.print('    <td style="text-align:left;">[A]<sub>пр</sub> ←<br>[-B]<sub>доп</sub><br>R<sub>1</sub></td>');
  else if (i==result.steps.length-1)
  	output.print('    <td style="text-align:left;">[B]<sub>пр</sub><br>R<sub>'+(i+1)+'</sub></td>');
  else{
    f=(x.operandDescription.length-2);
    output.print('    <td style="text-align:left;">'+['R<sub>'+i+'</sub> ←<br>[B]<sub>пр</sub><br>R<sub>'+(i+1)+'</sub><br>&nbsp;',(x.operandDescription[0].comment.indexOf('складываем')?'[-A]<sub>':'[A]<sub>')+(pb(x.operandDescription[0].data.bytes[0])[0]=='0'?'пр':'доп')+'</sub><br>СЧП<br>СЧП →'][f]+'</td>');
  }
  if (i==0)
    output.print('    <td>'+pb(x.operandDescription[0].data.bytes[0])+'<br>'+
                 '<u>'+pb(x.operandDescription[1].data.bytes[0])+'</u><br>'+
                 pb(x.operandDescription[2].data.bytes[0])+'<br><br><br>'+
                 pb(x.operandDescription[2].data.bytes[0])+'<br>'+
                 (pb(x.operandDescription[2].data.bytes[0])[0]==pb(b.bytes[1])[0]?'ЗнR<sub>1</sub> = ЗнB':'ЗнR<sub>1</sub> ≠ ЗнB')+
                 '</td>');
  else if (i==result.steps.length-1)
    output.print('    <td><u>'+pb(b.bytes[1])+'</u><br>'+
                 pb(result.result[1].bytes[0])+
                 '</td>');
  else
    output.print('    <td>'+pb(x.operandDescription[0].data.bytes[0])+'<br>'+
                 '<u>'+pb(b.bytes[1])+'</u><br>'+
                 pb(x.operandDescription[f+1].data.bytes[0])+'<br>'+
                 (pb(x.operandDescription[f+1].data.bytes[0])[0]==pb(b.bytes[1])[0]?'ЗнR<sub>'+(i+1)+'</sub> = ЗнB':'ЗнR<sub>'+(i+1)+'</sub> ≠ ЗнB')+
                 '</td>');
 	//output.print('    <td>'+x.operandDescription.map((y,ii)=>x.operandDescription.length>1&&ii==0?'<u>'+pb(y.data.bytes[0])+'</u>':pb(y.data.bytes[0])).join('<br>')+'</td>');
  
  if (i==0)
    output.print('    <td>'+pb2(x.operandDescription[0].data.bytes[1],i+1)+'<br><br><br><br><br>'+
                 pb2(x.operandDescription[2].data.bytes[1],i+1)+'<br>&nbsp;'+
                 '</td>');
  else if (i==result.steps.length-1)
  	output.print('    <td><br>'+
                 pb(result.result[0].bytes[0])+
                 '</td>');
  else
	 output.print('    <td>'+pb2(x.operandDescription[0].data.bytes[1],i+1)+'<br><br>'+
                 pb2(x.operandDescription[0].data.bytes[1],i+1).replace(/\d$/,pb(x.operandDescription[f+1].data.bytes[0])[0]!=pb(b.bytes[1])[0]?0:1)+'<br>&nbsp;'+
                 '</td>');
  
  if (i==0)
    output.print('    <td style="text-align:left;">Сдвиг делимого влево<br>Вычитание делителя<br>Знак первого остатка не совпадает со<br>знаком делимого-делителя корректно<br><br>Формирование цифры частного<br>&nbsp;</td>');
  else if (i==result.steps.length-1){
    output.print('    <td style="text-align:left;">Коррекция остатка: сложение с делителем<br>Результат</td>');
  }else
  	output.print('    <td style="text-align:left;">Сдвиг остатка влево<br>'+(f?'Вычитание делителя':'Сложение с делителем')+'<br>Формирование цифры частного<br>&nbsp;</td>');
  output.print('  </tr>');
});
output.print('</table><br>');
return 0;