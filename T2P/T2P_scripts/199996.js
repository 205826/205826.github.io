//- name: bcomp 3D-array-generator
//- description: Напишите программу на языке ассемблер для работы с трехмерным массивом
//- author: &#60;T&#62;
//- faculty: ВТ
//- semester: 2
//- input: inline_string
//- input_default_value: 10
//- output: html

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
var seed = cyrb128(input.all);
var rand = sfc32(seed[0], seed[1], seed[2], seed[3]);

var a=~~(rand()*4+3),b=~~(rand()*4+3),c=~~(rand()*4+3),start=~~(rand()*100+256);
var arr=new Array(a).fill(0).map(x=>new Array(b).fill(0).map(y=>new Array(c).fill(0).map(x=>~~(rand()*16383-16383/2))));
var mem=[];
var cnt=0;
var sum=0;

arr.map((x,i)=>mem.push(start+a+i*b));
arr.map((x,i)=>x.map((y,j)=>mem.push(start+a+a*b+i*b*c+j*c)));
arr.map((x,i)=>x.map((y,j)=>y.map((z,k)=>{mem.push(z);cnt+=1-z&1;sum+=z;})));

output.print(`Напишите программу на языке ассемблер для работы с трехмерным массивом.<br>
Заполните таблицу адресами, метками, мнемониками и комментариями.<br>
Программа должна начинаться с адреса 0x`+(~~(20+16*rand())).toString(16).toUpperCase()+` и находит количество чётных чисел.<br>
Результат программы должен быть сохранён по адресу 0x`+(~~(16+3*rand())).toString(16).toUpperCase()+`.<br>
Содержимое памяти в шестнадцатеричной системе счисления по адресу 0x`+(start-2).toString(16).toUpperCase()+`:<br>
24A3, 319B, `+mem.map(x=>(0x10000+x).toString(16).toUpperCase().slice(-4)).join(', ')+`<br>
Трехмерный массив размерностями [`+a+`, `+b+`, `+c+`] находится по адресу 0x`+start.toString(16).toUpperCase()+`. <br><br>ASM:<br><pre>
org 0x`+start.toString(16).toUpperCase()+`
`+mem.map((x,i)=>'WORD 0x'+(0x10000+x).toString(16).toUpperCase().slice(-4)+' ;'+(start+i).toString(16).toUpperCase()).join('<br>')+`</pre><br>
Количество чётных чисел: `+cnt+`<br>
Сумма: `+sum+' ('+(0x10000+sum).toString(16).toUpperCase().slice(-4)+`)<br>
JSON: <br><pre>`+JSON.stringify(arr, null, '  ')+'</pre>');

return 0;
