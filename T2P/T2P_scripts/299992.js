//- name: Эволюционные вычисления
//- description: Генетические алгоритмы
//- author: &#60;T&#62;
//- semester: 4
//- faculty: -
//- input: inline_string
//- input_default_value: пиши здесь чтоб сгенерировать новый вариант
//- output: html
//- import: vivagraph

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
Math.random = sfc32(seed[0], seed[1], seed[2], seed[3]);

function shuffle(array){let currentIndex=array.length;while(currentIndex!=0){let randomIndex=Math.floor(Math.random()*currentIndex);currentIndex--;[array[currentIndex],array[randomIndex]]=[array[randomIndex],array[currentIndex]];}}
function checkRepetitions(arr) {
  let repetitions = {};
  let repeatedElements = [];

  arr.forEach(element => {
    if (repetitions[element]) {
      if (!repeatedElements.includes(element)) {
        repeatedElements.push(element);
      }
    } else {
      repetitions[element] = true;
    }
  });

  return repeatedElements.length>0;
}
function arrayToTable(data) {
  let html = '<table>';
  
  data.forEach(rowData => {
    html += '<tr>';
    rowData.forEach(cellData => {
      html += `<td>${cellData}</td>`;
    });
    html += '</tr>';
  });

  html += '</table>';
  return html;
}

var matrix = new Array(5).fill(0).map(x=>new Array(5).fill(0).map(x=>Math.floor(Math.random()*7+2)));
var _outp = [[]];
for(var i=0;i<5;i++)
	for(var j=0;j<=i;j++) {
		matrix[j][i]=i==j?0:matrix[i][j];
		if (i!=j) _outp[0].push([i+1,j+1,matrix[i][j]]);
	}


//output.print(_outp);
vivagraph.renderer_svg(_outp,(s)=>{
	output.print(s[0].replace(/width="200" height="200" viewBox=/,'width="400" height="400" viewBox=')+'<br>');
	output.print('Матрица весов:<br>'+matrix.map(x=>x.join(' ')).join('<br>')+'<br><br>');
	output.print('Исходная популяция:<br>');
	var helphi = 100;
	var f = (_)=>{
		var sum=0;
		_=_.replace(/[^\d]/g,'');
		_.split('').map((x,i)=>{
			var last_i=i?i-1:4;
			sum+=matrix[+_[last_i]-1][+_[i]-1];
		});
		return sum;
	};
	var mix = (x,y)=>{
		var i=x.indexOf('|')+2;
		var a=x.split('|');
		a[0]=a[0].replace(/./g,'x');
		a[1]=y.split('|')[1];
		a[2]=a[2].replace(/./g,'x');
		y=a.join('|');
		var set = a[1].split('');
		y=y.split('').map(j=>{
			if (j=='x'){
				if (i>=x.length)i=0;
				while (x[i]=='|' || set.indexOf(x[i])!=-1){
					i++;
					if (i>=x.length)i=0;
				}
				return x[i++];
			}else return j;
		}).join('');
		return y;
	};
	var set_v = (s,seed)=>{
		if (seed>0.5) {
			seed-=0.5;s=s.replace(/^(\d)/,'$1|');
		}else
			s=s.replace(/^(\d\d)/,'$1|');
		if (seed>0.25)
			s=s.replace(/(\|\d\d)/,'$1|');
		else
			s=s.replace(/(\|\d\d\d)/,'$1|');
		return s;
	};
	var gen = ()=>{
		var s=[1,2,3,4,5];
		shuffle(s);
		return s.join('');
	};
	var parents = ['12345','21435','54312','43125'];
	do{parents = [gen(),gen(),gen(),gen()];}while(checkRepetitions(parents));
	//output.print(gen());
	var table;
	var start_stat = {};
	{
		table = [];
		table.push(['№ строки','Код','Значение целевой функции']);
		start_stat.avg = parents.reduce((x,y)=>x+f(y),0)/4;
		start_stat.min = parents.reduce((x,y)=>Math.min(x,f(y)),10000);
		parents.map((x,i)=>{
			table.push([i+1,x,f(x)]);
			
		});
		output.print(arrayToTable(table));
	}
	var indexes;
	var rnd;
	var children;
	{
		indexes = [1,2,3,4];
		shuffle(indexes);
		if (indexes[0]>indexes[1]){[indexes[1],indexes[0]]=[indexes[0],indexes[1]];}
		if (indexes[2]>indexes[3]){[indexes[2],indexes[3]]=[indexes[3],indexes[2]];}
		if (indexes[0]>indexes[2]){[indexes[2],indexes[3],indexes[0],indexes[1]]=[indexes[0],indexes[1],indexes[2],indexes[3]];}
		output.print('Пусть для скрещивания были выбраны следующие пары: ('+indexes[0]+','+indexes[1]+') и ('+indexes[2]+','+indexes[3]+')<br>');
		output.print('В результате были получены потомки:<br>');
		rnd = [Math.random(),Math.random()];
		parents[indexes[0]-1]=set_v(parents[indexes[0]-1],rnd[0]);
		parents[indexes[1]-1]=set_v(parents[indexes[1]-1],rnd[0]);
		parents[indexes[2]-1]=set_v(parents[indexes[2]-1],rnd[1]);
		parents[indexes[3]-1]=set_v(parents[indexes[3]-1],rnd[1]);
		children = [
			mix(parents[indexes[0]-1],parents[indexes[1]-1]),
			mix(parents[indexes[1]-1],parents[indexes[0]-1]),
			mix(parents[indexes[2]-1],parents[indexes[3]-1]),
			mix(parents[indexes[3]-1],parents[indexes[2]-1])];
		{
			table = [];
			table.push(['№ строки','Родители','Потомки','Значение целевой функции для потомков']);
			children.map((x,i)=>{
				table.push([indexes[i],parents[indexes[i]-1],x,f(x)]);

			});
			output.print(arrayToTable(table));
		}
		
		parents=parents.concat(children);
		if(checkRepetitions(parents)) helphi=helphi*0.8;//output.print('!!!! есть повторы, мб выбрать другой вариант !!!!');
		parents = parents.filter(function(item, pos) { return parents.indexOf(item) == pos; });
		parents=parents.map(x=>x.replace(/\|/g,'')).sort((x,y)=>f(x)-f(y)).slice(0,4);
		//output.print(parents);
	}
	output.print('Популяция первого поколения после отсечения худших особей в результате работы оператора редукции:<br>');
	{
		table = [];
		table.push(['№ строки','Код','Значение целевой функции','Вероятность участия в процессе размножения']);
		var k = parents.map(x=>parents.reduce((x,y)=>Math.min(x,f(y)),100000)+parents.reduce((x,y)=>Math.max(x,f(y)),0)-f(x));
		if (k.filter(function(item, pos) { return k.indexOf(item) == pos; }).length>2)helphi=helphi*0.9;
		parents.map((x,i)=>{
			table.push([i+1,x,f(x),k[i]+'/'+k.reduce((x,y)=>x+y,0)]);
		});
		output.print(arrayToTable(table));
		
	}
	{
		indexes = [1,2,3,4];
		shuffle(indexes);
		if (indexes[0]>indexes[1]){[indexes[1],indexes[0]]=[indexes[0],indexes[1]];}
		if (indexes[2]>indexes[3]){[indexes[2],indexes[3]]=[indexes[3],indexes[2]];}
		if (indexes[0]>indexes[2]){[indexes[2],indexes[3],indexes[0],indexes[1]]=[indexes[0],indexes[1],indexes[2],indexes[3]];}
		output.print('Пусть для получения второго поколения были выбраны следующие пары строк: ('+indexes[0]+','+indexes[1]+') и ('+indexes[2]+','+indexes[3]+')<br>');
		output.print('В результате были получены потомки:<br>');
		rnd = [Math.random(),Math.random()];
		parents[indexes[0]-1]=set_v(parents[indexes[0]-1],rnd[0]);
		parents[indexes[1]-1]=set_v(parents[indexes[1]-1],rnd[0]);
		parents[indexes[2]-1]=set_v(parents[indexes[2]-1],rnd[1]);
		parents[indexes[3]-1]=set_v(parents[indexes[3]-1],rnd[1]);
		children = [
			mix(parents[indexes[0]-1],parents[indexes[1]-1]),
			mix(parents[indexes[1]-1],parents[indexes[0]-1]),
			mix(parents[indexes[2]-1],parents[indexes[3]-1]),
			mix(parents[indexes[3]-1],parents[indexes[2]-1])];
		{
			table = [];
			table.push(['№ строки','Родители','Потомки','Значение целевой функции для потомков']);
			children.map((x,i)=>{
				table.push([indexes[i],parents[indexes[i]-1],x,f(x)]);

			});
			output.print(arrayToTable(table));
		}
		
		parents=parents.concat(children);
		if(checkRepetitions(parents)) helphi=helphi*0.8;//output.print('!!!! есть повторы, мб выбрать другой вариант !!!!');
		parents = parents.filter(function(item, pos) { return parents.indexOf(item) == pos; });
		parents=parents.map(x=>x.replace(/\|/g,'')).sort((x,y)=>f(x)-f(y)).slice(0,4);
		//output.print(parents);
	}
	output.print('Популяция второго поколения после отсечении худших особей приняла вид:');
	{
		table = [];
		table.push(['№ строки','Код','Значение целевой функции']);
		parents.map((x,i)=>{
			table.push([i+1,x,f(x)]);
		});
		output.print(arrayToTable(table));
		
	}
	//output.print();
	if (start_stat.min==(parents.reduce((x,y)=>Math.min(x,f(y)),10000))) helphi *=0.8;
	output.all='<div style="background-color: #FFB7B7;color: #570000;text-align:center;border-radius: 10px;"><h2 style="margin:0;">Качество сгенерированного варианта</h2>'+Math.floor(helphi)+'% (больше - лучше, 100 - идеально)</div><br>'+output.all;
	output.print('Таким образом после двух итераций значение целевой функции для лучшего решения изменилось c '+start_stat.min+' на '+(parents.reduce((x,y)=>Math.min(x,f(y)),10000))+', среднее значение изменилось с '+Number((start_stat.avg).toFixed(5))+' до '+Number(((parents.reduce((x,y)=>x+f(y),0))/4).toFixed(5))+', а общее количество с '+Number((start_stat.avg*4).toFixed(5))+' до '+Number(((parents.reduce((x,y)=>x+f(y),0))).toFixed(5))+'. То есть также налицо незначительное, но улучшение популяции');
	output.flush();
	
});

return 0;
