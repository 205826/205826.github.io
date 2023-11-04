//- name: discrete mathematics HW5
//- description: discrete mathematics HW5
//- author: owl from hogvarts (GUI by &#60;T&#62;)
//- semester: 1
//- faculty: ВТ
//- input: inline_string
//- input_default_value: 1911 27
//- output: html
//- import: discrete_math

var pb = (b)=>b.data.join('');

var ia=+input.all.split(' ')[0];
var ib=+input.all.split(' ')[1];


const aBytes = discrete_math.Byte.fill(2);
const bBytes = discrete_math.Byte.fill(2);
var a = new discrete_math.Register(aBytes).set(ia);
var b = new discrete_math.Register(bBytes).set(ib);

output.print('A = '+ia+'<br>');
output.print('B = '+ib+'<br>');
output.print('<br>');
output.print('[+A]пр = '+ a.bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('[-A]доп = '+ (new discrete_math.Register(aBytes).set(-ia)).bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('<br>');
output.print('[+B]пр = '+ b.bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('[-B]доп = '+ (new discrete_math.Register(aBytes).set(-ib)).bytes.map(pb).join('').replace(/(\d)/,'$1.')+'<br>');
output.print('<br>');


a = new discrete_math.Register(aBytes).set(ia);
b = new discrete_math.Register(bBytes).set(ib);
const result = discrete_math.divide(a, b);
output.print(result);
output.print(result.result[1].formatBeauty("reminder"));