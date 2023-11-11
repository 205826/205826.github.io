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
//- import: calc

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

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

if (poss.length!=new Set(poss.map(x=>x[2])).size) {
	output.print(out);
	output.print_error('Ошибка ввода');
	return 1;
}

out+='$$d_{ij} = |x_i-x_j|+|y_i-y_j|$$<br><br>';

var mkpair = [];
var iter=0;
var cost=0;
var tree=new Array(16).fill(0).map((x,i)=>poss.map(y=>y[2]).indexOf(i)+1?i:0);
while (iter++<100){
	out+='$$d = '+iter+'$$:<br>';
	const v=[];
	poss.map(x=>poss.map(y=>x[2]<y[2]&&Math.abs(x[0]-y[0])+Math.abs(x[1]-y[1])==iter?v.push([x[2],y[2]]):0));
	shuffleArray(v);
	out+=v.map(x=>{
		if(tree.filter(x=>x>0).sort()[0]==tree.filter(x=>x>0).sort().pop())
			return '';
		var a=x[0];
		var b=x[1];
		var n = '$$\\;\\;\\;\\;'+'(e_{'+x[0]+'}, e_{'+x[1]+'})'+'$$';
		if (tree[a]==tree[b])
			return n+': ЦИКЛ! Не добавляем';
      	cost+=iter;
		mkpair.push([a,b]);
		var old_id = tree[b],  new_id = tree[a];
		for (var j=0; j<16; j++)
			if (tree[j] == old_id)
				tree[j] = new_id;
		return n+': Добавляем';
	}).filter(x=>x).join('<br>');
	
	out+='<br>';
	if(tree.filter(x=>x>0).sort()[0]==tree.filter(x=>x>0).sort().pop()){
		out+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Все вершины соединены, дерево построено!';
		break;
	}
	
	out+='<br><br>';
	//break;
}
out+='<br><br>';

out+='<svg width="'+(max[0]*20+20)+'" height="'+(max[1]*20+40)+'" xmlns="http://www.w3.org/2000/svg">';
for (var i=0;i<=max[0];i++){
	out+='<line x1="'+(i*20+10)+'" y1="0" x2="'+(i*20+10)+'" y2="'+(max[1]*20+40)+'" stroke="#777" stroke-width="2" />';
}
for (var j=0;j<=max[1];j++){
	out+='<line x1="0" y1="'+(j*20+23)+'" x2="'+(max[0]*20+20)+'" y2="'+(j*20+23)+'" stroke="#777" stroke-width="2" />';
}
var colors=['#F00','#FF0','#0F0','#0FF','#00F','#F0F','#F00','#FF0','#0F0','#0FF','#00F','#F0F','#F00','#FF0','#0F0','#0FF','#00F','#F0F'];
mkpair.map((x,i)=>{
	var p = x.map(y=> poss.filter(z=>z[2]==y));
	var c=colors[Math.floor(Math.random()*colors.length)];
	out+='<line x1="'+(p[0][0][0]*20+10)+'" y1="'+(p[0][0][1]*20+23)+'" x2="'+(p[1][0][0]*20+10)+'" y2="'+(p[0][0][1]*20+23)+'" stroke="'+c+'" stroke-width="'+((1-i/mkpair.length)*3+0.5)+'" />';
	out+='<line x1="'+(p[1][0][0]*20+10)+'" y1="'+(p[0][0][1]*20+23)+'" x2="'+(p[1][0][0]*20+10)+'" y2="'+(p[1][0][1]*20+23)+'" stroke="'+c+'" stroke-width="'+((1-i/mkpair.length)*3+0.5)+'" />';
});

poss.map(p=>{
	out+='<circle cx="'+(p[0]*20+10)+'" cy="'+(p[1]*20+23)+'" r="3" fill="#FFF"/>';
	out+='<text x="'+p[0]*20+'" y="'+p[1]*20+'" dx="0" dy="20" fill="#FFF" font-size="10px">'+p[2]+'</text>';
});
out+='</svg><br>Cуммарный вес ребер: '+cost;

output.print(out+'<br>');
return 0;