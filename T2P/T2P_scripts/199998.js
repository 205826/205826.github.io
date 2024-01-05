//- name: Алгоритм Краскала
//- description: Алгоритм Краскала
//- author: T
//- semester: 2
//- faculty: ВТ
//- input: text
//- input_default_value:  1 4
//- input_default_value: 9 5 2
//- input_default_value: 78 6
//- input_default_value:   3
//- output: html
//- import: vivagraph



var poss = [];
var out = '';
input.all.split('\n').map((s,y)=>s.split('').map((c,x)=>/[1-9a-fA-F]/.test(c)?poss.push([x,y,parseInt(c,16)]):0));
if (poss.length==0) return 'Ошибка ввода';

var max = [0,1].map(z=>poss.map(x=>x[z]).reduce((x,y)=>Math.max(x,y)));

out+='<svg width="'+(max[0]*20+20)+'" height="'+(max[1]*20+40)+'" xmlns="http://www.w3.org/2000/svg">';
for (var i=0;i<=max[0];i++){
	out+='<line x1="'+(i*20+10)+'" y1="0" x2="'+(i*20+10)+'" y2="'+(max[1]*20+40)+'" stroke="#777" stroke-width="2" />';
}
for (var j=0;j<=max[1];j++){
	out+='<line x1="0" y1="'+(j*20+23)+'" x2="'+(max[0]*20+20)+'" y2="'+(j*20+23)+'" stroke="#777" stroke-width="2" />';
}
poss.map(p=>{
	out+='<circle cx="'+(p[0]*20+10)+'" cy="'+(p[1]*20+23)+'" r="3" fill="#FFF"/>';
	out+='<text x="'+p[0]*20+'" y="'+p[1]*20+'" dx="0" dy="20" fill="#FFF" font-size="10px">'+p[2]+'</text>';
});
out+='</svg><br><br>';
if (Math.random()>0.5) output.print('Построим МСД для графа<br>');
output.print(out);

if (poss.length!=new Set(poss.map(x=>x[2])).size) {
	output.print_error('Ошибка ввода');
	return 1;
}
var all_e = Array.from(new Set(poss.map(x=>x[2]))).sort((x,y)=>x-y);
if (Math.random()>0.5) output.print('$$d_{ij} = |x_i-x_j|+|y_i-y_j|$$<br><br>');
output.print('<table>');
output.print('  <tr>');
output.print('    <td></td>');
all_e.map(x=>output.print('    <td>$$e_{'+(x)+'}$$</td>'));
output.print('  </tr>');
output.print('  <tr>');

var eg = [];

all_e.map(x=>{
	output.print('  <tr>');
	output.print('    <td>$$e_{'+(x)+'}$$</td>');
    all_e.map(y=>{
      	var d = (a,b)=>Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]);
        output.print('    <td>'+d(poss.filter(i=>i[2]==x)[0],poss.filter(i=>i[2]==y)[0])+'</td>');
      	if (x<y)eg.push([d(poss.filter(i=>i[2]==x)[0],poss.filter(i=>i[2]==y)[0]),x,y]);
    });
	output.print('  <tr>');
});

output.print('</table><br>');
output.print('Упорядочим ребра: ');
eg = eg.sort((x,y)=>x[0]-y[0]);
output.print(eg.map(x=>'$$(e_{'+x[1]+'}; e_{'+x[2]+'})$$').join('; ')+'<br><br>');

var mkpair = [];
var cost=0;
var tree=new Array(16).fill(0).map((x,i)=>poss.map(y=>y[2]).indexOf(i)+1?i:0);
var _outp = [];
var texts = [];
var rnd = [Math.random()>0.5, Math.random()>0.5];
eg.map(x=>{
  	if(tree.filter(x=>x>0).sort()[0]==tree.filter(x=>x>0).sort().pop()) return;
    
  	var a=x[1];
    var b=x[2];
    var n = '$$'+'(e_{'+a+'}, e_{'+b+'})'+'$$';
    if (tree[a]==tree[b]){
      _outp.push(JSON.parse(JSON.stringify(mkpair)));
      	_outp[_outp.length-1].push([a,b,x[0]]);
      if (rnd[0])
     	return texts.push(n+': цикл - не добавляем<br>');
      else
     	return texts.push(n+' образует цикл с уже построенными ребрами<br>');
    }
    cost+=x[0];
    mkpair.push([a,b,x[0]]);
    var old_id = tree[b],  new_id = tree[a];
    for (var j=0; j<16; j++)
      if (tree[j] == old_id)
        tree[j] = new_id;
  _outp.push(JSON.parse(JSON.stringify(mkpair)));
  if (rnd[1])
    return texts.push(n+': Добавляем<br>');
  else 
    return texts.push('Включаем в дерево ребро '+n+':<br>');
});
//_outp.shift();
vivagraph.renderer_svg(_outp,(s)=>{
  output.print(s.map((x,i)=>texts[i]+x.replace(/width="200" height="200" viewBox=/,'width="400" height="400" viewBox=')).join('<br>')+'<br>');
  if (Math.random()>0.5)
    output.print('Суммарный вес ребер равен '+cost);
  else 
    output.print('Суммарный вес ребер МСД равен '+cost);
  output.flush();
});


return 0;