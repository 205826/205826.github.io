//- name: discrete mathematics HW7
//- description: discrete mathematics HW7
//- author: owl from hogvarts (GUI by &#60;T&#62;)
//- semester: 1
//- faculty: ВТ
//- input: inline_string
// input_default_value: 6.2 0.046
//- input_default_value: 2.4 0.32
//- output: html
//- import: discrete_math
output.print('<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;">');
output.print('<h2 style="margin:0;">Дисклеймер</h2>');
output.print('Результат работы данной программы (далее результат) предоставляется только с целью подготовки. Разработчики не несут никакой ответственности за использование этого результата. Продажа результата без разрешения разработчиков запрещена.');
output.print('<h3 style="margin:0;">Разработчики</h3>');
output.print('<b>owl-from-hogvarts</b> - создатель библиотеки для выполнения арифметических действий<br>'); 
output.print('⟨T⟩ - графическая оболочка над библиотекой<br>');
output.print('v3.0<br>');
output.print('</div><br>');
//output.all='';
var printmul = Math.random()>0.5?(Math.random()>0.5?'*':'<sup>*</sup>'):'';
function toBin(a){
  var s='';
    new Array(92).fill(0).map((x,i)=>51-i).map(x=>{
    s+=((a/(2**x))%2>=1?'1':'0');
    s+=(x?'':'|');
    s+=(x%4?'':'.');
  });
  return s.replace(/\.$/,'');
}

function toBin2(a){
  return toBin(a).split('.').map(x=>parseInt(x,2).toString(16).toUpperCase()+(x.length-4?',':'')).join('').replace(/^0+([\dA-F]+?\,)/,'$1').replace(/0+$/,'').replace(/,$/,'');
}
function toBin3(a){
  return toBin(a).split('.').map(x=>x.slice(0,4)+(x.length-4?',':'')).join('').replace(/^0+([\dA-F]+?\,)/,'$1').replace(/0+$/,'').replace(/,$/,'');
}
function mfloor(a,f,pos){
  var r;
    //output.print_error(s.split(',')[1][pos]);
    //output.print('KEK'+toBin2(a)+':'+pos+':'+toBin2(a).split(',')[1][pos]);
  if (f==1){
    if (!~toBin2(a).indexOf(','))
      r=toBin2(a)+','+'0'.repeat(pos);
    else if (toBin2(a).split(',')[1][pos]==undefined||/[0-7]/.test(toBin2(a).split(',')[1][pos]))
      r=toBin2(a).replace(new RegExp('(,[\\dA-F]{0,'+pos+'}).*'),'$1');
    else
      r=toBin2(a+1/(16**pos-1)).replace(new RegExp('(,[\\dA-F]{0,'+pos+'}).*'),'$1');
  }else{
    if (!~toBin3(a).indexOf(','))
      r=toBin3(a)+','+'0'.repeat(pos);
    else     if (toBin3(a).split(',')[1][pos]==undefined||/[0]/.test(toBin3(a).split(',')[1][pos]))
      r=toBin3(a).replace(new RegExp('(,[\\dA-F]{0,'+pos+'}).*'),'$1');
    else
      r=toBin3(a+1/(2**pos-1)).replace(new RegExp('(,[\\dA-F]{0,'+pos+'}).*'),'$1');
  }
  return r+'0'.repeat(pos-r.split(',')[1].length);
}
function print_f(f, a, offset){
  var mf = {};
  if (f==1) mf = {d: 64, sp: 7, sm: 20-7-1, s: 16};
  if (f==2) mf = {d: 128, sp: 8, sm: 20-8-1, s: 2};
  var st = 'padding: 2px 6px;';
  output.print('<table>');
  output.print('<tr>');
  if (typeof a == 'string'){
  	output.print('<td style="'+st+'border-right-width: 4px;">'+a[0]+'</td>');
  }else if (a<0){
  	output.print('<td style="'+st+'border-right-width: 4px;">1</td>');
  	a=-a;
  } else
  	output.print('<td style="'+st+'border-right-width: 4px;">0</td>');
  new Array(mf.sp).fill(0).map((x,i)=>{
  	output.print('<td'+(i==mf.sp-1?' style="'+st+'border-right-width: 4px;"':' style="'+st+'"')+'>'+(offset+mf.d+2**mf.sp).toString(2)[i+1]+'</td>');
  });
  if (typeof a == 'string'){
    (f==2?a.split('.')[1].slice(1):a.split('.')[1]).split('').map(x=>{
      output.print('<td style="'+st+'">'+x+'</td>');
    });
  }else{
    var _f=~~toBin(a/(mf.s**offset)).split('|')[1].replace(/\./g,'')[mf.sm+f-1];
    new Array(mf.sm).fill(0).map((x,i)=>{
      output.print('<td style="'+st+'">'+toBin(a/(mf.s**offset)+_f/(2**(mf.sm+(f-1?1:0)))).split('|')[1].replace(/\./g,'')[i+f-1]+'</td>');
    });
  }
  output.print('</tr>');
  output.print('</table>');
  output.print('<br>');
}
function print_st(a,b,f){
  var c;
  var mf = {};
  if (f==1) mf = {d: 64, sp: 7, sm: 20-7-1, s: 16};
  if (f==2) mf = {d: 128, sp: 8, sm: 20-8-1, s: 2};
  a = a+mf.d;
  b = b+mf.d;
  var ts = (x,i)=>(i?x:(x=='1'?'1':''));
  

  output.print('<table style="border:none;">');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">X<sub>A</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;border-bottom:1px solid;" rowspan="2">+</td>');
  new Array(mf.sp+1).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;">'+ts((1024+a).toString(2)[10-mf.sp+i],i)+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">X<sub>B</sub></td>');
  output.print('<td style="border: none;border-bottom:1px solid;">=</td>');
  new Array(mf.sp+1).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;border-bottom:1px solid;">'+ts((1024+b).toString(2)[10-mf.sp+i],i)+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">X<sub>A</sub>+X<sub>B</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;border-bottom:1px solid;" rowspan="2">-</td>');
  c = a+b;
  new Array(mf.sp+1).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;">'+ts((1024+c).toString(2)[10-mf.sp+i],i)+'</td>');
  });
  output.print('</tr>');
  c = mf.d;
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">d</td>');
  output.print('<td style="border: none;border-bottom:1px solid;">=</td>');
  new Array(mf.sp+1).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;border-bottom:1px solid;">'+ts((1024+c).toString(2)[10-mf.sp+i],i)+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">X<sub>C</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;"></td>');
  c = a+b-mf.d;
  new Array(mf.sp+1).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;">'+ts((1024+c).toString(2)[10-mf.sp+i],i)+'</td>');
  });
  output.print('</tr>');
  output.print('</table>');
  output.print('P<sub>C</sub> = '+(a+b-2*mf.d));
  output.print('<br>');
  output.print('<br>');	
}

var ia=parseFloat(input.all.split(' ')[0]);
var ib=parseFloat(input.all.split(' ')[1]);


if (ia<=0 || ib<=0) return '"ошибка ввода данных"';
output.print('A = '+input.all.split(' ')[0]+'<br>');
output.print('B = '+input.all.split(' ')[1]+'<br><br>');

output.print('<br>');
output.print('<h4 style="margin:0">1. Формат Ф1</h4><br>');
var offsetF1 = 0;
while (ia/(16**offsetF1)<1)offsetF1--;
while (ia/(16**offsetF1)>=1)offsetF1++; 
output.print('A = ('+input.all.split(' ')[0]+')<sub>10</sub> = ('+mfloor(ia,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(ia/(16**offsetF1),1,6+offsetF1).replace(/\,?0+$/, '')+')<sub>16</sub> · 16<sup>'+offsetF1+'</sup><br>');
print_f(1, ia, offsetF1);
var offsetBF1 = 0;
while (ib/(16**offsetBF1)<1)offsetBF1--;
while (ib/(16**offsetBF1)>=1)offsetBF1++; 
output.print('B = ('+input.all.split(' ')[1]+')<sub>10</sub> = ('+mfloor(ib,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(ib/(16**offsetBF1),1,6+offsetBF1).replace(/\,?0+$/, '')+')<sub>16</sub> · 16<sup>'+offsetBF1+'</sup>');
print_f(1, ib, offsetBF1);

output.print('SignC = SignA ⊕ SignB.<br>');
output.print('X<sub>A</sub> = P<sub>A</sub> + d;  X<sub>B</sub> = P<sub>В</sub> + d;<br>');
output.print('X<sub>C</sub> = X<sub>A</sub> + X<sub>B</sub> – d;<br>');
output.print('<table style="border: none;">');
output.print('<tr>');
output.print('<td style="border: none;" rowspan="2">P<sub>C</sub> + d = &nbsp;</td>');
output.print('<td style="border: none;border-bottom:1px solid;">P<sub>A</sub> + d + P<sub>B</sub></td>');
output.print('<td style="border: none;" rowspan="2">&nbsp;+ d – d.</td>');
output.print('</tr>');
output.print('<tr>');
output.print('<td style="border: none;">P<sub>C</sub></td>');
output.print('</tr>');
output.print('</table>');



output.print('<br>');
print_st(offsetF1,offsetBF1,1);


var pb = (b)=>b.data.join('');
var aBytes = discrete_math.Byte.fill(8);
var bBytes = discrete_math.Byte.fill(4);
var a = new discrete_math.Register(aBytes).set(parseInt(mfloor(ia/(16**offsetF1),1, 3).split(',')[1],16));
var b = new discrete_math.Register(bBytes).set(parseInt(mfloor(ib/(16**offsetBF1),1, 3).split(',')[1],16));

//output.print_error(parseInt(mfloor(ia/(16**offsetF1),1, 3).split(',')[1],16)+'\n');
//output.print_error(parseInt(mfloor(ib/(16**offsetBF1),1, 3).split(',')[1],16)+'\n');
//output.print_error(a.toString()+'\n');
//output.print_error(b.toString()+'\n');


//output.all='';
//output.all='';

output.print('<table>');
output.print('  <tr>');
output.print('    <th style="border-bottom:3px solid;">№</th>');
output.print('    <th style="border-bottom:3px solid;">Операнды</th>');
output.print('    <th style="border-bottom:3px solid;" colspan=15>СЧП (старшие разряды)</th>');
output.print('    <th style="border-bottom:3px solid;" colspan=12>В/СЧП (младшие разряды)</th>');
output.print('    <th style="border-bottom:3px solid;">Признак коррекции</th>');
output.print('  </tr>');
output.print('  <tr>');
output.print('    <td>0</td>');
output.print('    <td style="border-left:3px solid;border-right:3px solid;">СЧП</td>');
new Array(15).fill(0).map(()=>output.print('    <td>0</td>'));
pb(bBytes[2]).replace(/\d{4}/,'').split('').map((x,i)=>output.print('    <td'+(!i?' style="border-left:3px solid;"':'')+'>'+x+'</td>'));
pb(bBytes[3]).split('').map(x=>output.print('    <td>'+x+'</td>'));
output.print('    <td>0</td>');
output.print('  </tr>');

var b_text=bBytes.map(x=>pb(x)).join('').replace(/\d{20}(\d*)/,'$1').split('');
//output.print_error(b_text+'\n');

var result = discrete_math.multiplyFast2(a, b);
//output.print_error(result.result.toString()+'\n');
//output.print_error(JSON.stringify(result)+'\n\n');
var nameReplace=(x,add)=>x.replace(/[АA]/,'M<sub>A</sub>').replace(/(.*)/,(x)=>(add?x:('['+x+']<sub>'+(x[0]=='-'?'доп':'пр')+'</sub>')));
result.steps.map((x,i)=>{
  if (i>6) return;
  if (x.operandDescription.length==2){
    output.print('  <tr>');
    output.print('    <td rowspan=3 style="border-top:3px solid;">'+(i+1)+'</td>');
    output.print('    <td style="border-left:3px solid;border-right:3px solid;border-top:3px solid;">0</td>');
    new Array(15).fill(0).map(()=>output.print('    <td style="border-top:3px solid;">0</td>'));
    output.print('    <td colspan=12 style="text-align:right;border-left:3px solid;border-top:3px solid;padding-right:5px;">-</td>');
    output.print('    <td rowspan=3 style="border-top:3px solid;">'+x.comments[0].split(':')[1]+'</td>');
    output.print('  </tr>');
    x.operandDescription.map((y,yi)=>{
      var flag=0;
      if (i==6&&yi==1){flag=1;yi=0; y=x.operandDescription[yi];}
      output.print('  <tr>');
      if (flag)
        output.print('    <td style="border-left:3px solid;border-right:3px solid;'+(!yi?'border-top:3px solid;':'')+'">M<sub>C</sub></td>');
      else 
        output.print('    <td style="border-left:3px solid;border-right:3px solid;">'+x.operandDescription[yi].operandName+'</td>');
      x.operandDescription[yi].data.bytes.map(x=>pb(x)).join('').replace(/\d{17}(\d{27})\d*/,'$1').split('').map((z,zi)=>{
        if (b_text[zi-15-(yi>0?2:0)-i*2])output.print('    <td'+(zi-15-(yi>0?2:0)-i*2==0?' style="border-left:3px solid;"':'')+'>'+b_text[zi-15-(yi>0?2:0)-i*2]+'</td>');
        else output.print('    <td'+(zi==15?' style="border-left:3px solid;"':'')+'>'+z+'</td>');
      });
      output.print('  </tr>');
    });
  }else{
    x.operandDescription.map((y,yi)=>{
      var flag=0;
      if (i==6&&yi==2){flag=1;yi=1; y=x.operandDescription[yi];}
      output.print('  <tr>');
      if (!yi) output.print('    <td rowspan=3 style="border-top:3px solid;">'+(i+1)+'</td>');
      if (flag)
        output.print('    <td style="border-left:3px solid;border-right:3px solid;'+(!yi?'border-top:3px solid;':'')+'">M<sub>C</sub></td>');
      else
        output.print('    <td style="border-left:3px solid;border-right:3px solid;'+(!yi?'border-top:3px solid;':'')+'">'+(!yi?nameReplace(x.operandDescription[yi].operandName):x.operandDescription[yi].operandName)+'</td>');
      if (!yi) {
        x.operandDescription[yi].data.bytes.map(x=>pb(x)).join('').replace(/\d*(\d{15})/,'$1').split('').map(x=>output.print('    <td style="border-top:3px solid;">'+x+'</td>'));
        output.print('    <td colspan=12 style="text-align:right;border-left:3px solid;border-top:3px solid;padding-right:5px;">'+nameReplace(x.operandDescription[yi].operandName,1)+'</td>');
      }else{
        x.operandDescription[yi].data.bytes.map(x=>pb(x)).join('').replace(/\d{17}(\d{27})\d*/,'$1').split('').map((z,zi)=>{
          if (b_text[zi-15-(yi>1?2:0)-i*2])output.print('    <td'+(zi-15-(yi>1?2:0)-i*2==0?' style="border-left:3px solid;"':'')+'>'+b_text[zi-15-(yi>1?2:0)-i*2]+'</td>');
          else output.print('    <td'+(zi==15?' style="border-left:3px solid;"':'')+'>'+z+'</td>');
        });
      }
      if (!yi) output.print('    <td rowspan=3 style="border-top:3px solid;">'+result.steps[i+1].comments[0].split(':')[1]+'</td>');
      output.print('  </tr>');
    });
  }
});
//output.all='';
var calcansv = parseInt(mfloor(ia/(16**offsetF1),1, 3).split(',')[1],16)*parseInt(mfloor(ib/(16**offsetBF1),1, 3).split(',')[1],16);
var ansv = ia*ib;
var shift= offsetF1+offsetBF1; 
var nshift=shift;
output.print('</table><br>');
var otvF1 = calcansv.toString(16).toUpperCase().padStart(6, "0").replace(/0+$/,'');
while (otvF1[0]==='0'){
  otvF1=otvF1.slice(1);
  nshift--;
}
if (nshift!=shift) output.print('X<sub>C</sub> = X<sub>C</sub> – '+(shift-nshift)+'<br><br>');
output.print('С'+printmul+' = (0,'+otvF1.replace(/([\dA-F]{0,3}).*$/,'$1')+')<sub>16</sub> · 16<sup>'+nshift+'</sup> = '+((parseInt(otvF1.replace(/([\dA-F]{0,3}).*$/,'$1').padEnd(3, "0"),16)*(16**(nshift-3))).toFixed(8).replace(/\.?0+$/, '')).replace('.',',')+'.<br>');
output.print('<br>');
output.print('Определим абсолютную и относительную погрешности результата:<br>');
output.print('ΔС =  '+ansv.toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' – '+(parseInt(otvF1.replace(/([\dA-F]{0,3}).*$/,'$1').padEnd(3, "0"),16)*(16**(nshift-3))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' = '+(ansv-(parseInt(otvF1.replace(/([\dA-F]{0,3}).*$/,'$1').padEnd(3, "0"),16)*(16**(nshift-3)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'<br>');

output.print('<table style="border: none;">');
output.print('<tr>');
output.print('<td style="border: none;" rowspan="2">δС =&nbsp;</td>');
output.print('<td style="border: none;border-left:1px solid;" rowspan="2">&nbsp;</td>');
output.print('<td style="border: none;border-bottom:1px solid;">'+(ansv-(parseInt(otvF1.replace(/([\dA-F]{0,3}).*$/,'$1').padEnd(3, "0"),16)*(16**(nshift-3)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
output.print('<td style="border: none;border-right:1px solid;" rowspan="2">&nbsp;</td>');
var pogr = Math.abs((ansv-(parseInt(otvF1.replace(/([\dA-F]{0,3}).*$/,'$1').padEnd(3, "0"),16)*(16**(nshift-3))))/(ansv))*100;
output.print('<td style="border: none;" rowspan="2">&nbsp;· 100% = '+(pogr).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'%</td>');
output.print('</tr>');
output.print('<tr>');
output.print('<td style="border: none;">'+(ansv).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
output.print('</tr>');
output.print('</table><br>');

output.print('<br>');






output.print('<h4 style="margin:0">2. Формат Ф2</h4><br>');

var offsetF2 = 0;
while (ia/(2**offsetF2)<1)offsetF2--;
while (ia/(2**offsetF2)>=1)offsetF2++; 
output.print('A = ('+input.all.split(' ')[0]+')<sub>10</sub> = ('+mfloor(ia,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(ia/(2**offsetF2),2,16+offsetF2).replace(/\,?0+$/, '')+')<sub>2</sub> · 2<sup>'+offsetF2+'</sup><br>');
print_f(2, ia, offsetF2);

var offsetBF2 = 0;
while (ib/(2**offsetBF2)<1)offsetBF2--;
while (ib/(2**offsetBF2)>=1)offsetBF2++; 
output.print('B = ('+input.all.split(' ')[1]+')<sub>10</sub> = ('+mfloor(ib,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(ib/(2**offsetBF2),2,16+offsetBF2).replace(/\,?0+$/, '')+')<sub>2</sub> · 2<sup>'+offsetBF2+'</sup>');
print_f(2, ib, offsetBF2);
print_st(offsetF2,offsetBF2,2);




aBytes = discrete_math.Byte.fill(8);
bBytes = discrete_math.Byte.fill(4);
a = new discrete_math.Register(aBytes).set(parseInt(mfloor(ia/(2**offsetF2),2, 12).split(',')[1],2));
b = new discrete_math.Register(bBytes).set(parseInt(mfloor(ib/(2**offsetBF2),2, 12).split(',')[1],2));

//output.print_error(mfloor(ia/(2**offsetF2),2, 12)+'\n');
//output.print_error(mfloor(ib/(2**offsetBF2),2, 12)+'\n');
//output.print_error(a.toString()+'\n');
//output.print_error(b.toString()+'\n');



//output.all='';

output.print('<table>');
output.print('  <tr>');
output.print('    <th style="border-bottom:3px solid;">№</th>');
output.print('    <th style="border-bottom:3px solid;">Операнды</th>');
output.print('    <th style="border-bottom:3px solid;" colspan=17>СЧП (старшие разряды)</th>');
output.print('    <th style="border-bottom:3px solid;" colspan=12>В/СЧП (младшие разряды)</th>');
output.print('    <th style="border-bottom:3px solid;">Признак коррекции</th>');
output.print('  </tr>');
output.print('  <tr>');
output.print('    <td rowspan=3>0</td>');
output.print('    <td style="border-left:3px solid;border-right:3px solid;">СЧП</td>');
new Array(17).fill(0).map(()=>output.print('    <td>0</td>'));
pb(bBytes[2]).replace(/\d{4}/,'').split('').map((x,i)=>output.print('    <td'+(!i?' style="border-left:3px solid;"':'')+'>'+x+'</td>'));
pb(bBytes[3]).split('').map(x=>output.print('    <td>'+x+'</td>'));

var b_text=bBytes.map(x=>pb(x)).join('').replace(/\d{20}(\d*)/,'$1').split('');
//output.print_error(b_text+'\n');

result = discrete_math.multiplyFast4(a, b);
output.print('    <td rowspan=3>'+result.steps[0].comments[0].split(':')[1]+'</td>');
output.print('  </tr>');
//output.print_error(result.result.toString()+'\n');
//output.print_error(JSON.stringify(result)+'\n\n');
var nameReplace=(x,add)=>x.replace(/[АA]/,'M<sub>A</sub>').replace(/(.*)/,(x)=>(add?x:('['+x+']<sub>'+(x[0]=='-'?'доп':'пр')+'</sub>')));
result.steps.map((x,i)=>{
  if (i>3) return;
  var op_list = [];
  x.operandDescription.map((y,yi)=>{
    if (x.operandDescription.length-1==yi) return;
    op_list.push(nameReplace(x.operandDescription[yi].operandName,1));
  });
  if (i!=3)
  new Array(3-x.operandDescription.length).fill(0).map(()=>{
    op_list.push(nameReplace('0A',1));
  });
  var first = 1;
  x.operandDescription.map((y,yi)=>{
    if (x.operandDescription.length-1==yi) return;
    
    output.print('  <tr>');
    output.print('    <td style="border-left:3px solid;border-right:3px solid;">'+nameReplace(x.operandDescription[yi].operandName)+'</td>');
    x.operandDescription[yi].data.bytes.map(x=>pb(x)).join('').replace(/\d*(\d{17})/,'$1').split('').map(x=>output.print('    <td>'+x+'</td>'));
    if (first){
      first--;
      new Array(12-op_list.length*2).fill(0).map((_,_2)=>output.print('    <td'+(_2?'':' style="border-left:3px solid"')+'></td>'));
      op_list.map(x=>output.print('    <td colspan=2>'+x+'</td>'));
    }else{
      new Array(12).fill(0).map((_,_2)=>output.print('    <td'+(_2?'':' style="border-left:3px solid"')+'></td>'));
    }
    output.print('  </tr>');
  });
  op_list.filter(x=>x==nameReplace('0A',1)).map(()=>{
    output.print('  <tr>');
    output.print('    <td style="border-left:3px solid;border-right:3px solid;">'+nameReplace('0A')+'</td>');
    new Array(17).fill(0).map(()=>output.print('    <td>0</td>'));
    if (first){
      first--;
      new Array(12-op_list.length*2).fill(0).map((_,_2)=>output.print('    <td'+(_2?'':' style="border-left:3px solid"')+'></td>'));
      op_list.map(x=>output.print('    <td colspan=2>'+x+'</td>'));
    }else{
      new Array(12).fill(0).map((_,_2)=>output.print('    <td'+(_2?'':' style="border-left:3px solid"')+'></td>'));
    }
    output.print('  </tr>');
  });
  var shiftSCHP = x.operandDescription[x.operandDescription.length-1];
  new Array(2).fill(0).map((nx,op)=>{
    if (i==3&&op)return;
  output.print('  <tr>');
  if (!op)output.print('    <td rowspan='+(i==2?result.steps[i+1].operandDescription.length+1:(i==3?1:4))+' style="border-top:3px solid">'+(i==3?'':(i+1))+'</td>');
  output.print('    <td style="border-left:3px solid;border-right:3px solid;'+(!op?'border-top:3px solid':'')+'">'+(!op?'СЧП':'СЧП->4')+'</td>');
  shiftSCHP.data.bytes.map(x=>pb(x)).join('').replace((!op?/\d{19}(\d{29})\d*/:/\d{15}(\d{29})\d*/),'$1').split('').map((z,zi)=>{
    if (b_text[zi-17-op*4-i*4])output.print('    <td style="'+(!op?'border-top:3px solid;':'')+(zi-17-op*4-i*4==0?'border-left:3px solid;':'')+'">'+b_text[zi-17-op*4-i*4]+'</td>');
    else output.print('    <td style="'+(zi==17?'border-left:3px solid;':'')+(!op?'border-top:3px solid':'')+'">'+z+'</td>');
  });
  if (!op)output.print('    <td rowspan='+(i==2?result.steps[i+1].operandDescription.length+1:(i==3?1:4))+' style="border-top:3px solid">'+(i==3?'':result.steps[i+1].comments[0].split(':')[1])+'</td>');
  output.print('  </tr>');
  });
});
//output.all='';
var calcansv = parseInt(mfloor(ia/(2**offsetF2),2, 12).split(',')[1],2)*parseInt(mfloor(ib/(2**offsetBF2),2, 12).split(',')[1],2);
var ansv = ia*ib;
var shift= offsetF2+offsetBF2; 
var nshift=shift;
output.print('</table><br>');
var otvF2 = calcansv.toString(2).toUpperCase().padStart(6*4, "0").replace(/0+$/,'');
while (otvF2[0]==='0'){
  otvF2=otvF2.slice(1);
  nshift--;
}

if (nshift!=shift) output.print('X<sub>C</sub> = X<sub>C</sub> – '+(shift-nshift)+'<br><br>');
output.print('С'+printmul+' = (0,'+otvF2.replace(/([\dA-F]{0,12}).*$/,'$1')+')<sub>2</sub> · 2<sup>'+nshift+'</sup> = '+((parseInt(otvF2.replace(/([\dA-F]{0,12}).*$/,'$1').padEnd(12, "0"),2)*(2**(nshift-12))).toFixed(8).replace(/\.?0+$/, '')).replace('.',',')+'.<br>');
output.print('<br>');
output.print('Определим абсолютную и относительную погрешности результата:<br>');
output.print('ΔС =  '+ansv.toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' – '+(parseInt(otvF2.replace(/([\dA-F]{0,12}).*$/,'$1').padEnd(12, "0"),2)*(2**(nshift-12))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' = '+(ansv-(parseInt(otvF2.replace(/([\dA-F]{0,12}).*$/,'$1').padEnd(12, "0"),2)*(2**(nshift-12)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'<br>');

output.print('<table style="border: none;">');
output.print('<tr>');
output.print('<td style="border: none;" rowspan="2">δС =&nbsp;</td>');
output.print('<td style="border: none;border-left:1px solid;" rowspan="2">&nbsp;</td>');
output.print('<td style="border: none;border-bottom:1px solid;">'+(ansv-(parseInt(otvF2.replace(/([\dA-F]{0,12}).*$/,'$1').padEnd(12, "0"),2)*(2**(nshift-12)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
output.print('<td style="border: none;border-right:1px solid;" rowspan="2">&nbsp;</td>');
var pogr2 = Math.abs((ansv-(parseInt(otvF2.replace(/([\dA-F]{0,12}).*$/,'$1').padEnd(12, "0"),2)*(2**(nshift-12))))/(ansv))*100;
output.print('<td style="border: none;" rowspan="2">&nbsp;· 100% = '+(pogr2).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'%</td>');
output.print('</tr>');
output.print('<tr>');
output.print('<td style="border: none;">'+(ansv).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
output.print('</tr>');
output.print('</table><br>');



if (Math.abs(pogr2-pogr)<1/10**8){
  output.print('<br>');
  output.print('Погрешности результатов вызваны неточным представлением операндов. В формате Ф1 и Ф2 операнды представлены одинаково точно.');
}else if (pogr2<pogr){
  output.print('<br>');
  output.print('Погрешности результатов вызваны неточным представлением операндов.'+(nshift==shift||Math.random()>0.25?' В формате Ф2 операнды представлены точнее и погрешность меньше.':' В формате Ф2 при нормализации результата сдвиг производился на один двоичный разряд, а не на четыре.'));
}else{
  output.print('<br>');
  output.print('Погрешности результатов вызваны неточным представлением операндов. Ф1 оказался точнее из-за неточного представления операндов и отсутствия округления СЧП в Ф2 перед переводом в формат.');
}


return 0;
