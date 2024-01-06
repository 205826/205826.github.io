//- name: discrete mathematics HW6
//- description: Операции сложения и вычитания чисел с плавающей запятой
//- author: &#60;T&#62;
//- semester: 1
//- faculty: ВТ
//- input: inline_string
//- input_default_value: 0,3 15,8
//- output: html

output.print('<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;">');
output.print('<h2 style="margin:0;">Дисклеймер</h2>');
output.print('Результат работы данной программы (далее результат) предоставляется только с целью подготовки. Разработчики не несут никакой ответственности за использование этого результата. Продажа результата без разрешения разработчиков запрещена.');
output.print('<h3 style="margin:0;">Разработчики</h3>');
output.print('⟨T⟩');
output.print('</div><br>');

var notP=Math.random()>0.95;
var fomatP=Math.random()>0.5;

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

function print_st(a,b,c,char,f){
  var mf = {};
  if (f==1) mf = {d: 64, sp: 7, sm: 20-7-1, s: 16};
  if (f==2) mf = {d: 128, sp: 8, sm: 20-8-1, s: 2};
  

  output.print('<table style="border:none;">');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">X<sub>A</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;border-bottom:1px solid;" rowspan="2">'+char+'</td>');
  new Array(mf.sp).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;">'+(512+a+mf.d).toString(2)[10-mf.sp+i]+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">X<sub>B</sub></td>');
  output.print('<td style="border: none;border-bottom:1px solid;">=</td>');
  new Array(mf.sp).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;border-bottom:1px solid;">'+(512+b+mf.d).toString(2)[10-mf.sp+i]+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">(X<sub>A</sub>-X<sub>B</sub>)<sub>'+((512+256+c).toString(2)[2]=='1'?'доп.':'пр.')+'</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;"></td>');
  new Array(mf.sp).fill(0).map((x,i)=>{
  	output.print('<td style="border: none;">'+(512+c+256).toString(2)[10-mf.sp+i]+'</td>');
  });
  output.print('</tr>');
  output.print('</table>');
  output.print('(X<sub>A</sub>-X<sub>B</sub>) = '+c+'; X<sub>C</sub> = '+(Math.max(a,b)==a?'X<sub>A</sub> = ':'')+(Math.max(a,b)==b?'X<sub>B</sub> = ':'')+Math.max(a,b)+'<br>');
  output.print('<br>');
}

function print_st2(a,b,char,A,B,f){
  a = a.split('').map(x=>x!=','?(16+parseInt(x,16)).toString(2).slice(1):',').join('').replace(/\d{3}(\d),/,'$1.');
  b = b.split('').map(x=>x!=','?(16+parseInt(x,16)).toString(2).slice(1):',').join('').replace(/\d{3}(\d),/,'$1.');
  var c = (char=='+'?(parseInt(a.replace('.',''),2)+parseInt(b.replace('.',''),2)+2**13+2**14).toString(2).replace(/\d\d(\d)/,'$1.'):(parseInt(a.replace('.',''),2)-parseInt(b.replace('.',''),2)+2**13+2**14).toString(2).replace(/\d\d(\d)/,'$1.'));
  var mf = {};
  if (f==1) mf = {d: 64, sp: 7, sm: 20-7-1, s: 16};
  if (f==2) mf = {d: 128, sp: 8, sm: 20-8-1, s: 2};
  //output.print(a+'<br>');
  //output.print(b+'<br>');
  //output.print('<br>'+c+'<br>');
  output.print('<table style="border:none;">');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">M<sub>'+A+'</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;border-bottom:1px solid;" rowspan="2">'+char+'</td>');
  a.split('').map((x,i)=>{
  	output.print('<td style="border: none;">'+(i==0&&x=='0'?'':x)+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">M<sub>'+B+'</sub></td>');
  output.print('<td style="border: none;border-bottom:1px solid;">=</td>');
  b.split('').map((x,i)=>{
  	output.print('<td style="border: none;border-bottom:1px solid;">'+(i==0&&x=='0'?'':x)+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">M<sub>C</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;"></td>');
  c.split('').map((x,i)=>{
  	output.print('<td style="border: none;">'+(i==0&&(x=='0'||char!='+')?'':x)+'</td>');
  });
  output.print('</tr>');
  output.print('</table>');
  output.print('<br>');
  var mc=c;
  var msh=0;
  if (char=='+'){
    if (/1\./.test(mc)){
      msh--;
      mc=mc.replace(/1\.(.*)\d{4}/,'0.0001$1');
      output.print('Результат сложения денормализован влево.<br>');
    }else{
      while (/0\.0000/.test(mc)&&msh<32){msh++;mc=mc.replace(/0\.0000(.*)/,'0.$10000');}
      if (msh)
        output.print('Результат сложения денормализован вправо.<br>');
      else
        output.print('Результат сложения нормализован.<br>');
    }
  }else{
    if (/1\./.test(mc)){
      while (/1\.1111/.test(mc)&&msh<32){msh++;mc=mc.replace(/1\.1111(.*)/,'1.$10000');}
      if (msh)
        output.print('Результат вычитания денормализован вправо и представлен в дополнительном коде.<br>');
      else 
        output.print('Результат вычитания нормализован и представлен в дополнительном коде.<br>');
    }else{
      while (/0\.0000/.test(mc)&&msh<32){msh++;mc=mc.replace(/0\.0000(.*)/,'0.$10000');}
      if (msh)
        output.print('Результат вычитания денормализован вправо.<br>');
      else
        output.print('Результат вычитания нормализован.<br>');
    }
  }
  return {num:c,shift:msh,norm:mc};
}

function nabs(x) {
	return x>=0?x:0;
}

//output.all='';
var a = parseFloat(input.all.split(' ')[0].replace(',','.'));
var b = parseFloat(input.all.split(' ')[1].replace(',','.'));
if (a<=0.0000001 || b<=0.0000001) return 'a<=0.0001 && b<=0.0001';
output.print('A = '+input.all.split(' ')[0]+'<br>');
output.print('B = '+input.all.split(' ')[1]+'<br><br>');
output.print('<h4 style="margin:0">1.1 Формат Ф1</h4><br>');

var offsetF1 = 0;
while (a/(16**offsetF1)<1)offsetF1--;
while (a/(16**offsetF1)>=1)offsetF1++; 
output.print('A = ('+input.all.split(' ')[0]+')<sub>10</sub> = ('+mfloor(a,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(a/(16**offsetF1),1,6+offsetF1).replace(/\,?0+$/, '')+')<sub>16</sub> · 16<sup>'+offsetF1+'</sup><br>');
print_f(1, a, offsetF1);
var offsetBF1 = 0;
while (b/(16**offsetBF1)<1)offsetBF1--;
while (b/(16**offsetBF1)>=1)offsetBF1++; 
output.print('B = ('+input.all.split(' ')[1]+')<sub>10</sub> = ('+mfloor(b,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(b/(16**offsetBF1),1,6+offsetBF1).replace(/\,?0+$/, '')+')<sub>16</sub> · 16<sup>'+offsetBF1+'</sup>');
print_f(1, b, offsetBF1);


print_st(offsetF1,offsetBF1,offsetF1-offsetBF1,'–',1);
[[1,1],[1,-1],[-1,1]].map((x,i)=>{
  output.print('<h4 style="margin:0">'+['а)','б)','с)'][i]+' '+(x[0]>0?'A>0':'A<0')+', '+(x[1]>0?'B>0':'B<0')+':</h4><br>');
  var ma = mfloor(a/(16**(offsetF1+nabs(offsetBF1-offsetF1))),1,3+nabs(offsetBF1-offsetF1)).replace(/(,[\dA-F]{3}).*/,'$1');
  var mb = mfloor(b/(16**(offsetBF1+nabs(offsetF1-offsetBF1))),1,3+nabs(offsetF1-offsetBF1)).replace(/(,[\dA-F]{3}).*/,'$1');
  var e;
  if (i==0) e=print_st2(ma,mb,'+','A','B',1);
  if (i==1) e=print_st2(ma,mb,'–','A','B',1);
  if (i==2) e=print_st2(mb,ma,'–','B','A',1);
  output.print('<br>');
  output.print('M<sub>C</sub> = '+e.norm.replace(/\d./,'.').split('').join(' ')+'<br><br>');
  if (e.shift<0){
    output.print('Т.к. выполнен сдвиг мантиссы вправо, характеристику результата нужно увеличить на '+(-e.shift)+' (Х<sub>C</sub> = Х<sub>C</sub> + '+(-e.shift)+' = '+(Math.max(offsetF1,offsetBF1)-e.shift)+').<br><br>');
  }
  if (e.shift>0){
    output.print('Т.к. выполнен сдвиг мантиссы влево, характеристику результата нужно уменьшить на '+(e.shift)+' (Х<sub>C</sub> = Х<sub>C</sub> - '+(e.shift)+' = '+(Math.max(offsetF1,offsetBF1)-e.shift)+').<br><br>');
  }
  if (/1\./.test(e.norm)) e.norm='1.'+(parseInt(e.norm.split('.')[1].replace(/\d/g,(x)=>1-x),2)+0x8001).toString(2).slice(4);
  print_f(1, e.norm, Math.max(offsetF1,offsetBF1)-e.shift);
  var ansv = (e.norm[0]=='0'?1:-1)*parseInt(e.norm.split('.')[1],2)/0x1000*(16**(Math.max(offsetF1,offsetBF1)-e.shift));
  output.print('С<sup>*</sup> = М<sub>С</sub> · 16<sup>Рс</sup> = ('+(e.norm[0]=='0'?'':'-')+'0,'+(e.norm.split('.')[1].replace(/(\d{4})/g,(x)=>parseInt(x,2).toString(16).toUpperCase()))+')<sub>16</sub> · 16<sup>'+(Math.max(offsetF1,offsetBF1)-e.shift)+'</sup> = '+(ansv.toFixed(5).replace(/\.?0+$/, '')).replace('.',',')+'.<br>');
  output.print('<br>');
  output.print('Определим абсолютную и относительную погрешности результата:<br>');
  output.print('ΔС =  '+(x[0]*a+x[1]*b).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+' – '+(ansv<0?'(':'')+ansv.toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+(ansv<0?')':'')+' = '+(x[0]*a+x[1]*b-ansv).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'<br>');
  
  output.print('<table style="border: none;">');
  output.print('<tr>');
  output.print('<td style="border: none;" rowspan="2">δС =&nbsp;</td>');
  output.print('<td style="border: none;border-left:1px solid;" rowspan="2">&nbsp;</td>');
  output.print('<td style="border: none;border-bottom:1px solid;">'+(x[0]*a+x[1]*b-ansv).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('<td style="border: none;border-right:1px solid;" rowspan="2">&nbsp;</td>');
  var pogr = Math.abs((x[0]*a+x[1]*b-ansv)/(x[0]*a+x[1]*b))*100;
  output.print('<td style="border: none;" rowspan="2">&nbsp;· 100% = '+(pogr).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'%</td>');
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;">'+(x[0]*a+x[1]*b).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('</tr>');
  output.print('</table><br>');
  if (pogr>0.00001&&!notP){
    if (fomatP){
      if (e.shift)output.print('Результат получился представленным с избытком. Этот факт можно объяснить потерей значащих разрядов мантиссы результата при его нормализации.<br>');
      else if (offsetF1-offsetBF1) output.print('Результат получился представленным с избытком. Этот факт можно объяснить потерей значащих младших у '+(offsetF1>offsetBF1?'второго':'первого')+' операнда при выравнивании порядков.<br>');
      else output.print('Результат получился представленным с избытком. Этот факт можно объяснить неточным представлением операндов.<br>');
      output.print('<br>');
    }else{
  	output.print('Погрешность полученного результата объясняется следующими факторами:<br>');
  	output.print('<ul>');
    output.print('<li>неточным представлением операндов;</li>');
    if (offsetF1-offsetBF1)output.print('<li>потерей значащих разрядов мантиссы одного из операндов при уравнивании порядков;</li>');
    if (e.shift)output.print('<li>потерей значащих разрядов мантиссы результата при его нормализации;</li>');
    output.print('</ul>');
    }
  }
});

output.print('<h4 style="margin:0">2.1 Формат Ф2</h4><br>');

var offsetF2 = 0;
while (a/(2**offsetF2)<1)offsetF2--;
while (a/(2**offsetF2)>=1)offsetF2++; 
output.print('A = ('+input.all.split(' ')[0]+')<sub>10</sub> = ('+mfloor(a,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(a/(2**offsetF2),2,16+offsetF2).replace(/\,?0+$/, '')+')<sub>2</sub> · 2<sup>'+offsetF2+'</sup><br>');
print_f(2, a, offsetF2);
var offsetBF2 = 0;
while (b/(2**offsetBF2)<1)offsetBF2--;
while (b/(2**offsetBF2)>=1)offsetBF2++; 
output.print('B = ('+input.all.split(' ')[1]+')<sub>10</sub> = ('+mfloor(b,1,6).replace(/\,?0+$/, '')+')<sub>16</sub> = ('+mfloor(b/(2**offsetBF2),2,16+offsetBF2).replace(/\,?0+$/, '')+')<sub>2</sub> · 2<sup>'+offsetBF2+'</sup>');
print_f(2, b, offsetBF2);
print_st(offsetF2,offsetBF2,offsetF2-offsetBF2,'–',2);





function print_st3(a,b,char,A,B,f){
  a = a.split('').map(x=>x!=','?(16+parseInt(x,16)).toString(2).slice(1):',').join('').replace(/\d{3}(\d),/,'$1.');
  
  b = b.split('').map(x=>x!=','?(16+parseInt(x,16)).toString(2).slice(1):',').join('').replace(/\d{3}(\d),/,'$1.');
  
  var c = (char=='+'?(parseInt(a.replace('.',''),2)+parseInt(b.replace('.',''),2)+2**13+2**14).toString(2).replace(/\d\d(\d)/,'$1.'):(parseInt(a.replace('.',''),2)-parseInt(b.replace('.',''),2)+2**13+2**14).toString(2).replace(/\d\d(\d)/,'$1.'));
  var mf = {};
  if (f==1) mf = {d: 64, sp: 7, sm: 20-7-1, s: 16};
  if (f==2) mf = {d: 128, sp: 8, sm: 20-8-1, s: 2};
  //output.print(a+'<br>');
  //output.print(b+'<br>');
  //output.print('<br>'+c+'<br>');
  output.print('<table style="border:none;">');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">M<sub>'+A+'</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;border-bottom:1px solid;" rowspan="2">'+char+'</td>');
  a.split('').map((x,i)=>{
  	output.print('<td style="border: none;">'+(i==0&&x=='0'?'':x)+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">M<sub>'+B+'</sub></td>');
  output.print('<td style="border: none;border-bottom:1px solid;">=</td>');
  b.split('').map((x,i)=>{
  	output.print('<td style="border: none;border-bottom:1px solid;">'+(i==0&&x=='0'?'':x)+'</td>');
  });
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;text-align:right;">M<sub>C</sub></td>');
  output.print('<td style="border: none;">=</td>');
  output.print('<td style="border: none;"></td>');
  c.split('').map((x,i)=>{
  	output.print('<td style="border: none;">'+(i==0&&(x=='0'||char!='+')?'':x)+'</td>');
  });
  output.print('</tr>');
  output.print('</table>');
  output.print('<br>');
  var mc=c;
  var msh=0;
  
  if (char=='+'){
    if (/1\./.test(mc)){
      msh--;
      mc=mc.replace(/1\.(.*)\d{1}/,'0.1$1');
      output.print('Результат сложения денормализован влево.<br>');
    }else{
      while (/0\.0/.test(mc)&&msh<32){msh++;mc=mc.replace(/0\.0(.*)/,'0.$10');}
      if (msh)
        output.print('Результат сложения денормализован вправо.<br>');
      else
        output.print('Результат сложения нормализован.<br>');
    }
  }else{
    if (/1\./.test(mc)){
      while (/1\.1/.test(mc)&&msh<32){msh++;mc=mc.replace(/1\.1(.*)/,'1.$10');}
      if (msh)
        output.print('Результат вычитания денормализован вправо и представлен в дополнительном коде.<br>');
      else 
        output.print('Результат вычитания нормализован и представлен в дополнительном коде.<br>');
    }else{
      while (/0\.0/.test(mc)&&msh<32){msh++;mc=mc.replace(/0\.0(.*)/,'0.$10');}
      if (msh)
        output.print('Результат вычитания денормализован вправо.<br>');
      else
        output.print('Результат вычитания нормализован.<br>');
    }
  }
  return {num:c,shift:msh,norm:mc};
}



[[1,1],[1,-1],[-1,1]].map((x,i)=>{
  output.print('<h4 style="margin:0">'+['а)','б)','с)'][i]+' '+(x[0]>0?'A>0':'A<0')+', '+(x[1]>0?'B>0':'B<0')+':</h4><br>');
  var ma = mfloor(a/(2**(offsetF2+nabs(offsetBF2-offsetF2))),1,3+nabs(offsetBF2-offsetF2)).replace(/(,[\dA-F]{3}).*/,'$1');
  var mb = mfloor(b/(2**(offsetBF2+nabs(offsetF2-offsetBF2))),1,3+nabs(offsetF2-offsetBF2)).replace(/(,[\dA-F]{3}).*/,'$1');
  
  
  var e;
  if (i==0) e=print_st3(ma,mb,'+','A','B',2);
  if (i==1) e=print_st3(ma,mb,'–','A','B',2);
  if (i==2) e=print_st3(mb,ma,'–','B','A',2);
  output.print('<br>');
  output.print('M<sub>C</sub> = '+e.norm.replace(/\d./,'.').split('').join(' ')+'<br><br>');
  if (e.shift<0){
    output.print('Т.к. выполнен сдвиг мантиссы вправо, характеристику результата нужно увеличить на '+(-e.shift)+' (Х<sub>C</sub> = Х<sub>C</sub> + '+(-e.shift)+' = '+(Math.max(offsetF2,offsetBF2)-e.shift)+').<br><br>');
  }
  if (e.shift>0){
    output.print('Т.к. выполнен сдвиг мантиссы влево, характеристику результата нужно уменьшить на '+(e.shift)+' (Х<sub>C</sub> = Х<sub>C</sub> - '+(e.shift)+' = '+(Math.max(offsetF2,offsetBF2)-e.shift)+').<br><br>');
  }
  if (/1\./.test(e.norm)) e.norm='1.'+(parseInt(e.norm.split('.')[1].replace(/\d/g,(x)=>1-x),2)+0x8001).toString(2).slice(4);
  print_f(2, e.norm, Math.max(offsetF2,offsetBF2)-e.shift);
  var ansv = (e.norm[0]=='0'?1:-1)*parseInt(e.norm.split('.')[1],2)/0x1000*(2**(Math.max(offsetF2,offsetBF2)-e.shift));
  output.print('С<sup>*</sup> = М<sub>С</sub> · 2<sup>Рс</sup> = ('+(e.norm[0]=='0'?'':'-')+'0,'+(e.norm.split('.')[1].replace(/0+$/,''))+')<sub>2</sub> · 2<sup>'+(Math.max(offsetF2,offsetBF2)-e.shift)+'</sup> = '+(ansv.toFixed(5).replace(/\.?0+$/, '')).replace('.',',')+'.<br>');
  output.print('<br>');
  output.print('Определим абсолютную и относительную погрешности результата:<br>');
  output.print('ΔС =  '+(x[0]*a+x[1]*b).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+' – '+(ansv<0?'(':'')+ansv.toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+(ansv<0?')':'')+' = '+(x[0]*a+x[1]*b-ansv).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'<br>');
  
  output.print('<table style="border: none;">');
  output.print('<tr>');
  output.print('<td style="border: none;" rowspan="2">δС =&nbsp;</td>');
  output.print('<td style="border: none;border-left:1px solid;" rowspan="2">&nbsp;</td>');
  output.print('<td style="border: none;border-bottom:1px solid;">'+(x[0]*a+x[1]*b-ansv).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('<td style="border: none;border-right:1px solid;" rowspan="2">&nbsp;</td>');
  var pogr = Math.abs((x[0]*a+x[1]*b-ansv)/(x[0]*a+x[1]*b))*100;
  output.print('<td style="border: none;" rowspan="2">&nbsp;· 100% = '+(pogr).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'%</td>');
  output.print('</tr>');
  output.print('<tr>');
  output.print('<td style="border: none;">'+(x[0]*a+x[1]*b).toFixed(5).replace(/\.?0+$/, '').replace(/\./, ',')+'</td>');
  output.print('</tr>');
  output.print('</table><br>');
  if (pogr>0.00001&&!notP){
    if (fomatP){
      if (e.shift)output.print('Результат получился представленным с избытком. Этот факт можно объяснить потерей значащих разрядов мантиссы результата при его нормализации.<br>');
      else if (offsetF2-offsetBF2) output.print('Результат получился представленным с избытком. Этот факт можно объяснить потерей значащих младших у '+(offsetF2>offsetBF2?'второго':'первого')+' операнда при выравнивании порядков.<br>');
      else output.print('Результат получился представленным с избытком. Этот факт можно объяснить неточным представлением операндов.<br>');
      output.print('<br>');
    }else{
      output.print('Погрешность полученного результата объясняется следующими факторами:<br>');
  	output.print('<ul>');
    output.print('<li>неточным представлением операндов;</li>');
    if (offsetF2-offsetBF2)output.print('<li>потерей значащих разрядов мантиссы одного из операндов при уравнивании порядков;</li>');
    if (e.shift)output.print('<li>потерей значащих разрядов мантиссы результата при его нормализации;</li>');
    output.print('</ul>');
    }
  }
});

output.print('<br>В формате Ф2 результаты получились точнее из-за того, что операнды представлены точнее и при нормализации результата сдвиг производился на один двоичный разряд, а не на четыре.<br>');

return 0;
