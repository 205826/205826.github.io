//- name: GL ИнтФНП 
//- description: GL ИнтФНП
//- author: &#60;T&#62;
//- semester: 3
//- faculty: ВТ
//- input: html_gl
//- input_default_value: <h2>Задача 1</h2>Вычислить, изменив порядок интегрирования<br><br>
//- input_default_value: <input type="text" style="width:100px" id="T1F" value="6^(-4/4)"> $$\int_0^{A^{B-1}} dy \int_{y^{1/(B-1)}}^A \sqrt[B]{A^B-x^B} dx$$.<br><br>
//- input_default_value: при $$A$$ = <input type="text" id="T1A" value="6">, $$B$$ = <input type="text" id="T1B" value="4">.<br>
//- input_default_value: Формат ответа: целое число или десятичная дробь.<br>
//- input_default_value: Примеры записи ответа: 5; -4.1; 0.07.<br>

//- input_default_value: <h2>Задача 2</h2>Вычислите<br>
//- input_default_value: $$\int\int\int_V $$(<input type="text" id="T2A" value="90">$$x + $$<input type="text" id="T2B" value="60">$$y)dxdydz$$,<br>
//- input_default_value: если $$\{V = (x,y,z)|\ 0\leq y \leq x \leq 1,\ 0 \leq z \leq $$<input type="text" id="T2C" value="8">$$x^2 + $$<input type="text" id="T2D" value="30">$$y^2\}$$.<br>
//- input_default_value: Формат ответа: цело число или десятичная дробь.<br>
//- input_default_value: Примеры записи ответа: 5; -4.1; 0.07.<br>

//- input_default_value: <h2>Задача 3</h2>Вычислите<br>
//- input_default_value: $$\int_L \sin$$<input type="text" id="T3A" value="9" style="vertical-align: super;">$$x \cos^2x\ ds$$<br>
//- input_default_value: Где L - кривая $$y=ln(2\cos x), x \in [$$<input type="text" style="width:100px" id="T3L" value="-2pi/4">, <input type="text" style="width:100px" id="T3R" value="2pi/4">$$]$$.<br>
//- input_default_value: Формат ответа: целое число или десятичная дробь.<br>
//- input_default_value: Примеры записи ответа: 5; -4.1; 0.07.<br>

//- input_default_value: <h2>Задача 4</h2>Вычислите<br>
//- input_default_value: $$\int_\Gamma y$$<input type="text" id="T4A" value="4" style="vertical-align: super;">$$dx + x$$<input type="text" id="T4B" value="16" style="vertical-align: super;">$$dy$$,<br>
//- input_default_value: где $$\Gamma$$ - ломаная, соеденяющая точки (<input type="text" id="T4P1" value="-2, 0">), (<input type="text" id="T4P2" value="0, 10">), (<input type="text" id="T4P3" value="2, 0">).<br>
//- input_default_value: Формат ответа: целое число или десятичная дробь.<br>
//- input_default_value: Примеры записи ответа: 5; -4.1; 0.07.<br>

//- input_default_value: <h2>Задача 5</h2>Вычислите поверхностный интеграл 1-го рода<br>
//- input_default_value: <input type="text" style="width:100px" id="T5Fc" value="3/sqrt(3000)">$$\int\int_S ($$<input type="text" id="T5A" value="2">$$x + $$<input type="text" id="T5B" value="2">$$y + $$<input type="text" id="T5C" value="5">$$z) dS $$, <br>
//- input_default_value: Где $$S = \{(x, y, z)|x/$$<input type="text" id="T5D" value="5">$$ + y/$$<input type="text" id="T5E" value="10">$$ + z/$$<input type="text" id="T5F" value="2"> $$= 1, x,y,z \geq 0 \}$$.<br>
//- input_default_value: Формат ответа: целое число или десятичная дробь.<br>
//- input_default_value: Примеры записи ответа: 5; -4.1; 0.07.<br>

//- output: html
//- import: math
 

output.print('<h3 style="margin:10px 0px 0px 10px;">Задача 1</h3>');
(()=>{ 
  // task 1 
  var func = math.evaluate(input.by_id('T1F').value);
  var A = math.evaluate(input.by_id('T1A').value);
  var B = math.evaluate(input.by_id('T1B').value);
  
  output.print('<textarea style="width:300px;height:40px;vertical-align:middle;">');
  output.print((func*((A**(B+1))/(B+1))).toFixed(8).replace(/\.?0+$/, '')); 
  output.print('</textarea><br>'); 
})(); 
 
output.print('<h3 style="margin:10px 0px 0px 10px;">Задача 2</h3>');
(()=>{ 
  // task 2 
  var a = math.evaluate(input.by_id('T2A').value);
  var b = math.evaluate(input.by_id('T2B').value);
  var c = math.evaluate(input.by_id('T2C').value);
  var d = math.evaluate(input.by_id('T2D').value);
  
  output.print('<textarea style="width:300px;height:40px;vertical-align:middle;">');
  output.print((a*c/5+a*d/15+b*c/10+b*d/20).toFixed(8).replace(/\.?0+$/, '')); 
  output.print('</textarea><br>'); 
  
})(); 
 
output.print('<h3 style="margin:10px 0px 0px 10px;">Задача 3</h3>');
(()=>{ 
  // task 3 
  var A = math.evaluate(input.by_id('T3A').value);
  var L = math.evaluate(input.by_id('T3L').value);
  var R = math.evaluate(input.by_id('T3R').value);
  if (L<-3.14159267/2 || R>3.14159267/2) return output.print('not in [-pi/2, pi/2]');
  output.print('<textarea style="width:300px;height:40px;vertical-align:middle;">');
  output.print((Math.sin(R)**(A+1)/(A+1) - Math.sin(L)**(A+1)/(A+1)).toFixed(8).replace(/\.?0+$/, '')); 
  output.print('</textarea><br>'); 
})();
 
output.print('<h3 style="margin:10px 0px 0px 10px;">Задача 4</h3>');
(()=>{ 
  // task 4
  var A = +math.evaluate(input.by_id('T4A').value);
  var B = +math.evaluate(input.by_id('T4B').value);
  var P = [1,2,3].map(i=>input.by_id('T4P'+i).value.split(',').map(x=>math.evaluate(x)));
  var k = [0,1].map(i=>(P[1+i][1]-P[i][1])/(P[1+i][0]-P[i][0]));
  var b = [0,1].map(i=>P[i][1]-k[i]*P[i][0]);
  function factorial(n) {
    //output.print_error(n+' ');
    return n ? n * factorial(n - 1) : 1;
  }
  var C = (n,k)=>factorial(n)/(factorial(k)*factorial(n-k));
  //var r= math.simplify('((('+k[0]+')*x+('+b[0]+'))^('+A+'))');
  //math.rationalize
  var sum = 0;
  [0,1].map(j=>{
  var f=new Array(A+1).fill(0).map((x,i)=>C(A,i)+'*('+k[j]+')^('+(A-i)+')*(x)^('+(A-i+1)+')/('+(A-i+1)+')*('+b[j]+')^('+i+')').join(' + ');
  sum+=math.evaluate(f,{x:P[j+1][0]})-math.evaluate(f,{x:P[j][0]})+k[j]*P[j+1][0]**(B+1)/(B+1)-k[j]*P[j][0]**(B+1)/(B+1);
  });
  output.print('<textarea style="width:300px;height:40px;vertical-align:middle;">');
  output.print(sum.toFixed(8).replace(/\.?0+$/, '')); 
  output.print('</textarea><br>'); 
  
})();
 
output.print('<h3 style="margin:10px 0px 0px 10px;">Задача 5</h3>');
(()=>{ 
  // task 5
  var A = +math.evaluate(input.by_id('T5A').value);
  var B = +math.evaluate(input.by_id('T5B').value);
  var C = +math.evaluate(input.by_id('T5C').value);
  
  var D = +math.evaluate(input.by_id('T5D').value);  
  var E = +math.evaluate(input.by_id('T5E').value);  
  var F = +math.evaluate(input.by_id('T5F').value);
  var func = +math.evaluate('('+input.by_id('T5Fc').value+')*sqrt(('+F/D+')^2+('+F/E+')^2+1)');
  
  output.print('<textarea style="width:300px;height:40px;vertical-align:middle;">');
  output.print((func*(A*D**2*E+B*D*E**2+C*D*E*F)/6).toFixed(8).replace(/\.?0+$/, '')); 
  output.print('</textarea><br>'); 
  
})();

return 0;
