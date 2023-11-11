//- name: Алгоритм Вейсмана
//- description: Алгоритм Вейсмана 6*6
//- author: T
//- semester: 2
//- faculty: ВТ
//- input: text
//- input_default_value: 000011
//- input_default_value: 000111
//- input_default_value: 000111
//- input_default_value: 011010
//- input_default_value: 111101
//- input_default_value: 111010
//- output: html
//- import: calc

let matrix2html = (a,ind) => '&nbsp;&nbsp;&nbsp;&nbsp;' + ind.join(' ')+'<br>'+a.map((x,i)=>ind[i]+' '+x.join('&nbsp;&nbsp;&nbsp;')).join('<br>');

let matrix = input.all.split('\n').map(x=>x.split('').map(y=>~~y));
if (matrix.filter(x=>x.length!=matrix.length).length>0)
	return 'Не квадратная!!';
if (matrix.filter((x,i)=>matrix[i][i]).length>0)
	return 'Не ноль на диагонале!!';
if (matrix.filter((x,i)=>x.filter((y,j)=>matrix[i][j]!=matrix[j][i]).length>0).length>0)
	return 'Не симметричная!!';

let tt=100;
let out='';
let matrix_copy = JSON.parse(JSON.stringify(matrix));
let indexs_copy = matrix.map((x,i)=>i+1);
out += '<b>1 этап</b><br>';
let C = [];
	
while (tt-->0 && matrix_copy.length) {
  	out += matrix2html(matrix_copy,indexs_copy.map(x=>'$$e_{'+x+'}$$'))+'<br>';
	let ri = matrix_copy.map(x=>x.reduce((y,z)=>y+z));
	const maxi = ri.indexOf(ri.map(x=>x).sort((x,y)=>y-x)[0]);
	if (!matrix_copy[maxi].filter(x=>x==1).length) break;
	const indexs_copy_copy = indexs_copy;
  	out += '[$$C_{'+indexs_copy[maxi]+'}=e_{'+indexs_copy[maxi]+'} \\vee '+matrix_copy[maxi].map((x,i)=>!x?'':'e_{'+indexs_copy_copy[i]+'}').join('')+'$$]<br><br>';
	C.push([indexs_copy[maxi], matrix_copy[maxi].map((x,i)=>!x?0:indexs_copy_copy[i]).filter(x=>x)]);
  	matrix_copy = matrix_copy.filter((x,i)=>i!=maxi);
	matrix_copy = matrix_copy.map(x=>x.filter((y,i)=>i!=maxi));
    indexs_copy = indexs_copy.filter((x,i)=>i!=maxi);
}

out += '<br><b>2 этап</b><br>';
out += C.map(x=>'$$C_{'+x[0]+'}=e_{'+x[0]+'} \\vee '+x[1].map(x=>'e_{'+x+'}').join('')+'$$').join('<br>')+'<br><br>';
C.sort((x,y)=>x[0]-y[0]);
out += '$$\\prod = '+C.map(x=>'C_{'+x[0]+'}').join('')+'=\\\\ = ('+C.map(x=>'e_{'+x[0]+'} \\vee '+x[1].map(x=>'e_{'+x+'}').join('')).join(')(')+')=$$<br>';
var term_list = (new Array(1<<C.length)).fill(0).map((x,i)=>(i.toString(2)).padStart(C.length,0).split('').map((y,j)=>y=='0'?C[j][0]:C[j][1].join(',')).join(',')).join('|');
out += '$$= '+term_list.split('|').map(x=>x.split(',').map(y=>'e_{'+y+'}').join('')).join(' \\vee ')+' =$$<br>';
term_list=term_list.split('|').map(x=>{var a={}; x.split(',').map(x=>a[x]=1); return Object.keys(a).join(',');}).join('|');
out += '$$= '+term_list.split('|').map(x=>x.split(',').map(y=>'e_{'+y+'}').join('')).join(' \\vee ')+' =$$<br>';
term_list=term_list.split('|').sort((x,y)=>y.split(',').length-x.split(',').length).join('|');
term_list=term_list.split('|').filter((x,i)=>!term_list.split('|').map((y,j)=>i<j?y.split(',').map(z=>x.split(',').indexOf(z)>=0).reduce((x,y)=>x&&y,!0):false).reduce((x,y)=>x||y,!1)).join('|');
out += '$$= '+term_list.split('|').map(x=>x.split(',').map(y=>'e_{'+y+'}').join('')).join(' \\vee ')+'$$<br><br>';
var phis = [];
term_list.split('|').map((x,i)=>phis.push([i+1,matrix.map((x,i)=>i+1).filter(y=>x.indexOf(y)<0)]));
out += phis.map(x=>'$$\\phi_{'+x[0]+'}=\\{'+x[1].map(x=>'e_{'+x+'}').join(',\\ ')+'\\}$$').join('<br>');
out += '<br><br><b>3 этап</b><br>';
var t = [];
matrix.map((x,i)=>t.push([i+1,phis.filter(x=>x[1].indexOf(i+1)>=0).map(x=>x[0])]));
t = t.filter(x=>x[1].length);
t.map(x=>out += '$$t_'+x[0]+'='+x[1].map(x=>'\\phi_{'+x+'}').join(' \\vee ')+'$$<br>');
out += '<br>$$\\prod\'='+t.map(x=>'t_{'+x[0]+'}').join('')+' =$$<br>';
t = t.map(x=>x[1]);
out += '$$= ('+t.map(x=>x.map(x=>'\\phi_{'+x+'}').join(' \\vee ')).join(')(')+') =$$<br>';
var seq = t.map(()=>0);
term_list = [];
var req = (i)=>{
	if (t[i])
      t[i].map(x=>{seq[i]=x;req(i+1);});
  	else 
      term_list.push(seq.map(x=>x));
	};
req(0);
out += '$$= '+term_list.map(x=>x.map(y=>'\\phi_{'+y+'}').join('')).join(' \\vee ')+' =$$<br>';
term_list=term_list.map(x=>{var a={}; x.map(x=>a[x]=1); return Object.keys(a).map(x=>+x);});
term_list=term_list.sort((x,y)=>y.length-x.length);
out += '$$= '+term_list.map(x=>x.map(y=>'\\phi_{'+y+'}').join('')).join(' \\vee ')+' =$$<br>';
term_list=term_list.filter((x,i)=>!term_list.map((y,j)=>i<j?y.map(z=>x.indexOf(z)>=0).reduce((x,y)=>x&&y,!0):false).reduce((x,y)=>x||y,!1));
out += '$$= '+term_list.map(x=>x.map(y=>'\\phi_{'+y+'}').join('')).join(' \\vee ')+'$$<br><br>';

term_list.map(x=>{
	if (tt--<0) return;
	x.map(y=>out += '$$\\phi_{'+y+'} = \\{e_{'+(phis[y-1][1]).join('},\\ e_{')+'}\\}$$<br>');
	var poss = matrix.map((x,i)=>[Math.sin(i/matrix.length*3.14159*2)*70+100,Math.cos(i/matrix.length*3.14159*2)*70+100]);
	out+='<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">';
 	matrix.map((x,i)=>x.map((y,j)=>y?out+='<line x1="'+poss[i][0] +'" y1="'+poss[i][1] +'" x2="'+poss[j][0] +'" y2="'+poss[j][1] +'" stroke="black" stroke-width="3" />':''));
	poss.map((y,i)=>{
		out+='<circle cx="'+y[0]+'" cy="'+y[1]+'" r="15" fill="'+['','#F00','#FF0','#0F0','#0FF','#00F','#F0F','#F00','#FF0','#0F0','#0FF','#00F','#F0F','#F00','#FF0','#0F0','#0FF','#00F','#F0F'][phis.filter(z=>z[1].indexOf(i+1)>=0 && x.indexOf(z[0])>=0).map(z=>z[0])[0]]+'"/>';
		out+='<text x="'+y[0]+'" y="'+y[1]+'" dx="-5" dy="5" fill="black">'+(i+1)+'</text>';
    });
 	out+='</svg>';
  	out+='<br>';
});



//out += JSON.stringify(phis);


output.print(out+'<br>');
return 0;