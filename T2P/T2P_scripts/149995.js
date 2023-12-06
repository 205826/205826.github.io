//- name: discrete mathematics HW8
//- description: discrete mathematics HW8
//- author: &#60;T&#62;
//- semester: 1
//- faculty: ВТ
//- input: inline_string
//- input_default_value: 2.6 0.033
// input_default_value: 7.7 0.028
// input_default_value: 1.4 0.017
//- output: html
output.print('<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;">');
output.print('<h2 style="margin:0;">Дисклеймер</h2>');
output.print('Результат работы данной программы (далее результат) предоставляется только с целью подготовки. Разработчики не несут никакой ответственности за использование этого результата. Продажа результата без разрешения разработчиков запрещена.');
output.print('<h3 style="margin:0;">Разработчики</h3>');
output.print('⟨T⟩');
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
    else if (toBin3(a).split(',')[1][pos]==undefined||/[0]/.test(toBin3(a).split(',')[1][pos]))
      r=toBin3(a).replace(new RegExp('(,[\\dA-F]{0,'+pos+'}).*'),'$1');
    else
      r=toBin3(a+1/(2**pos-1)).replace(new RegExp('(,[\\dA-F]{0,'+pos+'}).*'),'$1');
  }
  return r+'0'.repeat(pos-r.split(',')[1].length);
}
function print_f(f, a, offset){
  var mf = {};
  if (f==1) mf = {d: 64, sp: 7, sm: 16-7-1, s: 16};
  if (f==2) mf = {d: 128, sp: 8, sm: 16-8-1, s: 2};
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

output.print('X<sub>C</sub> = X<sub>A</sub> – X<sub>B</sub> + d<br>');
output.print('<table style="border: none;">');
output.print('<tr>');
output.print('<td style="border: none;" rowspan="2">d + P<sub>C</sub> = &nbsp;</td>');
output.print('<td style="border: none;border-bottom:1px solid;">P<sub>A</sub> + d – P<sub>B</sub> – d</td>');
output.print('<td style="border: none;" rowspan="2">&nbsp;+ d</td>');
output.print('</tr>');
output.print('<tr>');
output.print('<td style="border: none;">P<sub>C</sub></td>');
output.print('</tr>');
output.print('</table>');



output.print('<br>');
output.print('X<sub>C</sub> = '+offsetF1+' – '+(offsetBF1<0?'(':'')+offsetBF1+(offsetBF1<0?')':'')+' + 64 = '+(offsetF1-offsetBF1+64)+'<br>');
output.print('P<sub>C</sub> = '+(offsetF1-offsetBF1)+'<br>');
output.print('<br>');



//output.print_error(parseInt(mfloor(ia/(16**offsetF1),1, 3).split(',')[1],16)+'\n');
//output.print_error(parseInt(mfloor(ib/(16**offsetBF1),1, 3).split(',')[1],16)+'\n');
//output.print_error(a.toString()+'\n');
//output.print_error(b.toString()+'\n');


//output.all='';
//output.all='';

var nameReplace=(x,add)=>x.replace(/[АA]/,'M<sub>A</sub>').replace(/[BВ]/,'M<sub>B</sub>').replace(/(.*)/,(x)=>(add?x:('['+x+']<sub>'+(x[0]=='-'?'доп':'пр')+'</sub>')));
{
  var ma = parseInt(mfloor(ia/(16**offsetF1),2,8).replace(/.*,/,''), 2);
  var mb = parseInt(mfloor(ib/(16**offsetBF1),2,8).replace(/.*,/,''), 2);
  var tresult = Math.floor(ma/mb*256);
  while (tresult>=256) tresult=Math.floor(tresult/16);
  var mpb = (x,num,add)=>{
    return (((3*16)<<num)+x).toString(2).slice(6).replace(/(.)(?=.)/g,add?'$1':'$1&nbsp;&nbsp;').trim();
  };
  var norms = (x,num)=>{
    if (x<0) return -norms(-x,num);
  	return parseInt(mpb(x,num,1),2);
  };
  output.print('<table>');
  output.print('  <tr>');
  output.print('    <th>N шага</th>');
  output.print('    <th>Действие</th>');
  output.print('    <th>Делимое</th>');
  output.print('    <th>Частное</th>');
  output.print('  </tr>');
  
  var res = norms(ma-mb,9); 
  var lres = 0; 
  var flag = false;
  var r = [[], [], []];
  if (res<0) {
    r[0].push(nameReplace('A',1));
    r[1].push(mpb(ma,9));
    r[2].push(mpb(0,8));
    r[0].push(nameReplace('-B'));
    r[1].push(mpb(-mb,9));
    r[2].push('&nbsp;');
    r[0].push('R<sub>'+0+'</sub>');
    r[1].push(mpb(res,9));
    r[2].push(mpb(lres,8));
  }else{
    flag = true;
    r[0].push(nameReplace('A',1));
    r[1].push(mpb(ma,9));
    r[2].push(mpb(0,8));
    r[0].push(nameReplace('-B'));
    r[1].push(mpb(-mb,9));
    r[2].push('&nbsp;');
    r[0].push('R<sub>'+0+'</sub>');
    res = norms(ma-mb,9);
    r[1].push(mpb(res,9));
    r[2].push('R<sub>0</sub>&#62;0');
    r[0].push(nameReplace('A→4',1));
    r[1].push(mpb(Math.floor(ma/16),9));
    lres = (ma%16)*16;
    r[2].push(mpb(lres,8));
    r[0].push(nameReplace('-B'));
    r[1].push(mpb(-mb,9));
    r[2].push('&nbsp;');
    res = norms(Math.floor(ma/16)-mb,9);
    r[0].push('R<sub>'+0+'</sub>');
    r[1].push(mpb(res,9));
    r[2].push(mpb(lres,8));
  }
  
  output.print('  <tr>');
  output.print('    <td>0</td>');
  output.print('    <td>'+r[0].join('<br>')+'</td>');
  output.print('    <td>'+r[1].join('<br>').replace(/(.*<br>.*?)(\d)(.*)/,'$1<font style="color:#f00;">$2</font>$3')+'</td>');
  output.print('    <td>'+r[2].join('<br>').replace(/(.*)(\d)/,'$1<font style="color:#f00;">$2</font>')+'</td>');
  output.print('  </tr>');
  
  
  new Array(8).fill(0).map((x,i)=>{
    r = [[], [], []];
    res = norms(res*2+Math.floor(lres/128),9);
    lres = lres%128*2;
    r[0].push('←R<sub>'+i+'</sub>');
    r[1].push(mpb(res,9));
    r[2].push(mpb(lres,8));
    
    r[0].push(nameReplace(lres&2?'-B':'B'));
    r[1].push(mpb(lres&2?-mb:mb,9));
    r[2].push('&nbsp;');
    
    res = norms(res+(lres&2?-mb:mb),9);
    r[0].push('R<sub>'+(i+1)+'</sub>');
    r[1].push(mpb(res,9));
    lres+=(res<0?0:1);
    r[2].push(mpb(lres,8));
    output.print('  <tr>');
    output.print('    <td>'+(i+1)+'</td>');
    output.print('    <td>'+r[0].join('<br>')+'</td>');
    output.print('    <td>'+r[1].join('<br>').replace(/(.*<br>.*?)(\d)(.*)/,'$1<font style="color:#f00;">$2</font>$3')+'</td>');
    output.print('    <td>'+r[2].join('<br>').replace(/(.*)(\d)/,'$1<font style="color:#f00;">$2</font>')+'</td>');
    output.print('  </tr>');
  });
  output.print('</table><br>');
  if (tresult!=lres) output.all='<div style="background-color: #FF0000;color: #FFFFFF;text-align:center;border-radius: 10px;padding:30px 0px;">Ожидаемый результат вычислений не совпал с получившимся в Ф1 (Ожидалось: '+tresult+', получено: '+lres+')</div><br>'+output.all;
  
  
  //output.all='';
  var calcansv = lres.toString(16);
  var ansv = ia/ib;
  var shift= offsetF1-offsetBF1+flag; 
  var nshift=shift;
  var otvF1 = calcansv.toString(16).toUpperCase().padStart(2, "0").replace(/0+$/,'');
  while (otvF1[0]==='0'){
    otvF1=otvF1.slice(1);
    nshift--;
  }
  if (nshift!=shift) output.print('X<sub>C</sub> = X<sub>C</sub> – '+(shift-nshift)+'<br><br>');
  output.print('С'+printmul+' = (0,'+otvF1+')<sub>16</sub> · 16<sup>'+nshift+'</sup> = '+((parseInt(otvF1.padEnd(2, "0"),16)*(16**(nshift-2))).toFixed(8).replace(/\.?0+$/, '')).replace('.',',')+'.<br>');
  output.print('<br>');
  output.print('Определим абсолютную и относительную погрешности результата:<br>');
  output.print('ΔС =  '+ansv.toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' – '+(parseInt(otvF1.padEnd(2, "0"),16)*(16**(nshift-2))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' = '+(ansv-(parseInt(otvF1.padEnd(2, "0"),16)*(16**(nshift-2)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'<br>');

  output.print('<table style="border: none;">');
  output.print('<tr>');
  output.print('<td style="border: none;" rowspan="2">δС =&nbsp;</td>');
  output.print('<td style="border: none;border-left:1px solid;" rowspan="2">&nbsp;</td>');
  output.print('<td style="border: none;border-bottom:1px solid;">'+(ansv-(parseInt(otvF1.padEnd(2, "0"),16)*(16**(nshift-2)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('<td style="border: none;border-right:1px solid;" rowspan="2">&nbsp;</td>');
  var pogr = Math.abs((ansv-(parseInt(otvF1.padEnd(2, "0"),16)*(16**(nshift-2))))/(ansv))*100;
  output.print('<td style="border: none;" rowspan="2">&nbsp;· 100% = '+(pogr).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'%</td>');
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;">'+(ansv).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('</tr>');
  output.print('</table><br>');

  output.print('<br>');

}

//output.all='';

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


output.print('X<sub>C</sub> = X<sub>A</sub> – X<sub>B</sub> + d<br>');
output.print('<table style="border: none;">');
output.print('<tr>');
output.print('<td style="border: none;" rowspan="2">d + P<sub>C</sub> = &nbsp;</td>');
output.print('<td style="border: none;border-bottom:1px solid;">P<sub>A</sub> + d – P<sub>B</sub> – d</td>');
output.print('<td style="border: none;" rowspan="2">&nbsp;+ d</td>');
output.print('</tr>');
output.print('<tr>');
output.print('<td style="border: none;">P<sub>C</sub></td>');
output.print('</tr>');
output.print('</table>');



output.print('<br>');
output.print('X<sub>C</sub> = '+offsetF2+' – '+(offsetBF2<0?'(':'')+offsetBF2+(offsetBF2<0?')':'')+' + 128 = '+(offsetF2-offsetBF2+128)+'<br>');
output.print('P<sub>C</sub> = '+(offsetF2-offsetBF2)+'<br>');
output.print('<br>');




{
  var ma = parseInt(mfloor(ia/(2**offsetF2),2,8).replace(/.*,/,''), 2);
  var mb = parseInt(mfloor(ib/(2**offsetBF2),2,8).replace(/.*,/,''), 2);
  var tresult = Math.floor(ma/mb*256);
  while (tresult>=256) tresult=Math.floor(tresult/2);
  var mpb = (x,num,add)=>{
    return (((3*16)<<num)+x).toString(2).slice(6).replace(/(.)(?=.)/g,add?'$1':'$1&nbsp;&nbsp;').trim();
  };
  var norms = (x,num)=>{
    if (x<0) return -norms(-x,num);
  	return parseInt(mpb(x,num,1),2);
  };
  output.print('<table>');
  output.print('  <tr>');
  output.print('    <th>N шага</th>');
  output.print('    <th>Действие</th>');
  output.print('    <th>Делимое</th>');
  output.print('    <th>Частное</th>');
  output.print('  </tr>');
  
  var res = norms(ma-mb,9); 
  var lres = 0; 
  var flag = false;
  var r = [[], [], []];
  if (res<0) {
    r[0].push(nameReplace('A',1));
    r[1].push(mpb(ma,9));
    r[2].push(mpb(0,8));
    r[0].push(nameReplace('-B'));
    r[1].push(mpb(-mb,9));
    r[2].push('&nbsp;');
    r[0].push('R<sub>'+0+'</sub>');
    r[1].push(mpb(res,9));
    r[2].push(mpb(lres,8));
  }else{
    flag = true;
    r[0].push(nameReplace('A',1));
    r[1].push(mpb(ma,9));
    r[2].push(mpb(0,8));
    r[0].push(nameReplace('-B'));
    r[1].push(mpb(-mb,9));
    r[2].push('&nbsp;');
    lres = 1;
    r[0].push('R<sub>'+0+'</sub>');
    r[1].push(mpb(res,9));
    r[2].push(mpb(lres,8));
  }
  
  output.print('  <tr>');
  output.print('    <td>0</td>');
  output.print('    <td>'+r[0].join('<br>')+'</td>');
  output.print('    <td>'+r[1].join('<br>').replace(/(.*<br>.*?)(\d)(.*)/,'$1<font style="color:#f00;">$2</font>$3')+'</td>');
  output.print('    <td>'+r[2].join('<br>').replace(/(.*)(\d)/,'$1<font style="color:#f00;">$2</font>')+'</td>');
  output.print('  </tr>');
  
  
  new Array(8-flag).fill(0).map((x,i)=>{
    r = [[], [], []];
    res = norms(res*2+Math.floor(lres/128),9);
    lres = lres%128*2;
    r[0].push('←R<sub>'+i+'</sub>');
    r[1].push(mpb(res,9));
    r[2].push(mpb(lres,8));
    
    r[0].push(nameReplace(lres&2?'-B':'B'));
    r[1].push(mpb(lres&2?-mb:mb,9));
    r[2].push('&nbsp;');
    
    res = norms(res+(lres&2?-mb:mb),9);
    r[0].push('R<sub>'+(i+1)+'</sub>');
    r[1].push(mpb(res,9));
    lres+=(res<0?0:1);
    r[2].push(mpb(lres,8));
    
    if (flag && i==6) {
    r[0].push('М<sub>С</sub>→');
    r[1].push('&nbsp;');
    r[2].push('');
    }
    if (i==7) {
    r[0].push('М<sub>С</sub>→');
    r[1].push('&nbsp;');
    r[2].push('');
    }
    
    output.print('  <tr>');
    output.print('    <td>'+(i+1)+'</td>');
    output.print('    <td>'+r[0].join('<br>')+'</td>');
    output.print('    <td>'+r[1].join('<br>').replace(/(.*<br>.*?)(\d)(.*)/,'$1<font style="color:#f00;">$2</font>$3')+'</td>');
    output.print('    <td>'+r[2].join('<br>').replace(/(.*)(\d)/,'$1<font style="color:#f00;">$2</font>')+(flag && i==6?'&nbsp;&nbsp;&nbsp;&nbsp;'+mpb(Math.abs(lres),9):'')+(i==7?'&nbsp;&nbsp;&nbsp;&nbsp;'+mpb(Math.abs(lres),9):'')+'</td>');
    output.print('  </tr>');
  });
  output.print('</table><br>');
  if (tresult!=lres) output.all='<div style="background-color: #FF0000;color: #FFFFFF;text-align:center;border-radius: 10px;padding:30px 0px;">Ожидаемый результат вычислений не совпал с получившимся в Ф2 (Ожидалось: '+tresult+', получено: '+lres+')</div><br>'+output.all;
  
  
  //output.all='';
  var calcansv = lres.toString(2);
  var ansv = ia/ib;
  var shift= offsetF2-offsetBF2+flag; 
  var nshift=shift;
  var otvF1 = calcansv.toString(2).toUpperCase().padStart(8, "0").replace(/0+$/,'');
  while (otvF1[0]==='0'){
    otvF1=otvF1.slice(1);
    nshift--;
  }
  if (nshift!=shift) output.print('X<sub>C</sub> = X<sub>C</sub> – '+(shift-nshift)+'<br><br>');
  output.print('С'+printmul+' = (0,'+otvF1+')<sub>2</sub> · 2<sup>'+nshift+'</sup> = '+((parseInt(otvF1.padEnd(8, "0"),2)*(2**(nshift-8))).toFixed(8).replace(/\.?0+$/, '')).replace('.',',')+'.<br>');
  output.print('<br>');
  output.print('Определим абсолютную и относительную погрешности результата:<br>');
  output.print('ΔС =  '+ansv.toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' – '+(parseInt(otvF1.padEnd(8, "0"),2)*(2**(nshift-8))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+' = '+(ansv-(parseInt(otvF1.padEnd(8, "0"),2)*(2**(nshift-8)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'<br>');

  output.print('<table style="border: none;">');
  output.print('<tr>');
  output.print('<td style="border: none;" rowspan="2">δС =&nbsp;</td>');
  output.print('<td style="border: none;border-left:1px solid;" rowspan="2">&nbsp;</td>');
  output.print('<td style="border: none;border-bottom:1px solid;">'+(ansv-(parseInt(otvF1.padEnd(8, "0"),2)*(2**(nshift-8)))).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('<td style="border: none;border-right:1px solid;" rowspan="2">&nbsp;</td>');
  var pogr2 = Math.abs((ansv-(parseInt(otvF1.padEnd(8, "0"),2)*(2**(nshift-8))))/(ansv))*100;
  output.print('<td style="border: none;" rowspan="2">&nbsp;· 100% = '+(pogr2).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'%</td>');
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;">'+(ansv).toFixed(8).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('</tr>');
  output.print('</table><br>');

}

if (Math.abs(pogr2-pogr)<1/10**8){
  output.print('<br>');
  output.print('Погрешности результатов вызваны неточным представлением операндов. В формате Ф1 и Ф2 операнды представлены одинаково точно.');
}else if (pogr2<pogr){
  output.print('<br>');
  output.print('Погрешности результатов вызваны неточным представлением операндов.'+(nshift==shift||Math.random()>0.25?' В формате Ф2 операнды представлены точнее и погрешность меньше.':' В формате Ф2 при нормализации результата сдвиг производился на один двоичный разряд, а не на четыре.'));
}else{
  output.print('<br>');
  output.print('Погрешности результатов вызваны неточным представлением операндов. Ф1 оказался точнее из-за отсутствия округления результата в Ф2 перед переводом в формат.');
}

return 0;