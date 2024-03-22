//- name: Метод ветвей и границ
//- description: Метод ветвей и границ
//- author: &#60;T&#62;
//- semester: 2
//- faculty: ВТ
//- input: text
//- input_default_value: e1e2: 0
//- input_default_value: e1e3: 3
//- input_default_value: e1e4: 4
//- input_default_value: e2e3: 2
//- input_default_value: e2e4: 1
//- input_default_value: e3e4: 2
//- output: html

var R = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var D = [[0,1,2,3],[1,0,1,2],[2,1,0,1],[3,2,1,0]];
input.all.split('\n').filter(x=>/^e[1-4]e[1-4]: \d/.test(x)).map(x=>{R[x[1]-1][x[3]-1]=+x[6];R[x[3]-1][x[1]-1]=+x[6];});
var out = '<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">';
var posss = [[50,50],[200-50,50],[200-50,200-50],[50,200-50]];
posss.map((x,i)=>posss.map((y,j)=>{if (i>j) return;
	new Array(R[i][j]).fill(0).map((z,k)=>{
      var offset=R[i][j]<2?0:(k/(R[i][j]-1)-0.5)*15;
	var mmul = [[1,-1],[-1,-1],[-1,1],[1,1]];
out+='<line x1="'+(x[0]+(j-i==2?-1:1)*mmul[i][0]*offset)+'" y1="'+(x[1]+(j-i==2?-1:1)*mmul[i][1]*offset)+'" x2="'+(y[0]+mmul[j][0]*offset)+'" y2="'+(y[1]+mmul[j][1]*offset)+'" stroke="#fff" stroke-width="2" />';
    });
}));
posss.map((x,i)=>{
	out+='<circle cx="'+x[0]+'" cy="'+x[1]+'" r="20" fill="#FFF"/>';
	out+='<text x="'+x[0]+'" y="'+x[1]+'" dx="-6" dy="7" fill="#000" font-size="20px">'+(i+1)+'</text>';
});
out+='</svg><br>';
out+=`$$R=
   \\begin{matrix} 
   & | & e_1 & e_2 & e_3 & e_4  \\\\
   - & + & - & - & -  & -  \\\\
   `+R.map((x,i)=>'e_'+(i+1)+' & | & '+x.map((y,j)=>j<i?'':y).join(' & ')).join(' \\\\')+`
   \\end{matrix}
    \\ \\ \\ \\ \\  D=\\begin{matrix} 
   & | & p_1 & p_2 & p_3 & p_4  \\\\
   - & + & - & - & -  & -  \\\\
   `+D.map((x,i)=>'p_'+(i+1)+' & | & '+x.map((y,j)=>j<i?'':y).join(' & ')).join(' \\\\')+`
   \\end{matrix}
$$<br><br>
1.<br>`;
var r = R.map((x,i)=>x.filter((y,j)=>j>i).join(',')).filter(x=>x).join(',').split(',').sort().reverse();
var d = D.map((x,i)=>x.filter((y,j)=>j>i).join(',')).filter(x=>x).join(',').split(',').sort();
var tree = [[0],[0,0,0,0],[0,0,0],[0,0]];
var dtree=()=>{
  	out += '<br><svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">';
	var mytree = [];
  	tree.map((x,i)=>i&&x[0]&&mytree.push([tree[i].reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0),0,0,0,0]));
	var used = [];
  mytree.map((x,i)=>{
    	var t=100;
    	var ii=1;
    	var jj=0;
      while(t--){
        if (used.indexOf(ii-1)>=0){
        	ii++;
        }else {
          	mytree[i][ii]=tree[i+1][jj];
          jj++;
			
        	ii++;
          	if (!tree[i+1][jj])break;
        }
      }
      mytree[i][0]=x.filter((x,i)=>i).reduce((iMin, x, i, arr) => arr[iMin]<=0||(x < arr[iMin] && x>0) ? i : iMin, 0);
	used.push(mytree[i][0]);
    });
	mytree.map((x,i)=>{
      x.map((y,j)=>{
        	var pppos=i?mytree[i-1][0]*50+25:100;
          out+=!j||!y?'':'<line x1="'+pppos+'" y1="'+((i)*50+25)+'" x2="'+(j*50-25)+'" y2="'+((i+1)*50+25)+'" stroke="#'+(mytree[i][0]+1!=j?'FFF':'F00')+'" stroke-width="2" />';
        
        });
    });    	
  	mytree.map((x,i)=>{
      	x.map((y,j)=>{
    		out+=!y?'':'<circle cx="'+(j*50-25)+'" cy="'+(i*50+75)+'" r="20" fill="#ccc"/>';
			out+=!y?'':'<text x="'+(j*50-25)+'" y="'+(i*50+75)+'" dx="-12" dy="7" fill="#000" font-size="20px">'+y+'</text>';
        });
    });
  	out+='<circle cx="'+100+'" cy="'+25+'" r="20" fill="#ccc"/>';
	out+='<text x="'+100+'" y="'+25+'" dx="-12" dy="7" fill="#000" font-size="20px">'+tree[0][0]+'</text>';
        
	out+='</svg><br>';
    //out+=JSON.stringify(mytree)+'<br>';
};

out+=`$$r=\\{`+r.join(',')+`\\} \\\\`;
out+=`d=\\{`+d.join(',')+`\\} \\\\`;
tree[0][0] = d.map((x,i)=>r[i]*d[i]).reduce((x,y)=>x+y);
out+=`r \\times d= `+d.map((x,i)=>r[i]+' \\cdot '+d[i]).join('+')+` = `+tree[0][0]+`$$<br>`;
out+=`Целевая  функция $$F(P)$$ не может быть меньше $$`+tree[0][0]+'$$<br>';
out+= '$$F(P)=F(q)+w(P)+v(P)$$<br><br>';
//dtree();
out+= '2. Расположим $$e_1$$ на $$p_1$$<br>';

var wq = 0, vq = 0;
var di=0;
out+= '$$F(q)=0$$<br>';
r=R[0].filter((x,i)=>i!=0).sort().reverse();
d=D[di].filter((x,i)=>i!=di).sort();
out+= '$$r_1=\\{'+r.join(',')+'\\}$$<br>';
out+= '$$d_1=\\{'+d.join(',')+'\\}$$<br>';
wq = d.map((x,i)=>r[i]*d[i]).reduce((x,y)=>x+y);
out+= '$$w(P)=r_1 \\times d_1 ='+d.map((x,i)=>r[i]+' \\cdot '+d[i]).join('+')+'='+wq+'$$<br>';
r=R.filter((x,i)=>i!=0).map((x,i)=>x.filter((y,j)=>j>i+1).join(',')).filter(x=>x).join(',').split(',').sort().reverse().map(x=>+x);
d=D.filter((x,i)=>i!=0).map((x,i)=>x.filter((y,j)=>j>i+1).join(',')).filter(x=>x).join(',').split(',').sort().map(x=>+x);
out+= '$$r=\\{'+r.join(',')+'\\}$$<br>';
out+= '$$d=\\{'+d.join(',')+'\\}$$<br>';
vq = d.map((x,i)=>r[i]*d[i]).reduce((x,y)=>x+y);
out+= '$$v(P)=r \\times d ='+d.map((x,i)=>r[i]+' \\cdot '+d[i]).join('+')+'='+vq+'$$<br>';
out+= '$$F(P)='+(wq+vq)+'$$<br><br>Расположим $$e_1$$ на $$p_2$$<br>';
tree[1][0] = wq+vq;

wq = 0;
vq = 0;
di=1;
out+= '$$F(q)=0$$<br>';
r=R[0].filter((x,i)=>i!=0).sort().reverse();
d=D[di].filter((x,i)=>i!=di).sort();
out+= '$$r_1=\\{'+r.join(',')+'\\}$$<br>';
out+= '$$d_2=\\{'+d.join(',')+'\\}$$<br>';
wq = d.map((x,i)=>r[i]*d[i]).reduce((x,y)=>x+y);
out+= '$$w(P)=r_1 \\times d_2 ='+d.map((x,i)=>r[i]+' \\cdot '+d[i]).join('+')+'='+wq+'$$<br>';
r=R.filter((x,i)=>i!=0).map((x,i)=>x.filter((y,j)=>j>i+1).join(',')).filter(x=>x).join(',').split(',').sort().reverse().map(x=>+x);
d=D.filter((x,i)=>i!=di).map((x,i)=>x.filter((y,j)=>j>i+1 && j!=di).join(',')).filter(x=>x).join(',').split(',').sort().map(x=>+x);
out+= '$$r=\\{'+r.join(',')+'\\}$$<br>';
out+= '$$d=\\{'+d.join(',')+'\\}$$<br>';
vq = d.map((x,i)=>r[i]*d[i]).reduce((x,y)=>x+y);
out+= '$$v(P)=r \\times d ='+d.map((x,i)=>r[i]+' \\cdot '+d[i]).join('+')+'='+vq+'$$<br>';
out+= '$$F(P)='+(wq+vq)+'$$<br>';
tree[1][1] = wq+vq;

out+='Из-за симметрии позиций получим такой первый ярус:<br><br>';

tree[1][2]=tree[1][1];
tree[1][3]=tree[1][0];

dtree();
var mini=Math.min(tree[1][0],tree[1][1])==tree[1][0]?0:1;
out+='3. Назначаем элемент $$e_1$$ в позицию $$p_'+(mini+1)+'$$.<br>';
var iii=0;
var exitpos=[100,0];
(mini?[0,2,3]:[1,2,3]).map(iter=>{
out+='Расположим $$e_2$$ в позицию $$p_'+(iter+1)+'$$.<br>';
                                
wq = 0;
vq = 0;
var ri=[0,1];
di=[mini,iter];
var sum=0;
out+= '$$F(q)='+R[0][1]*D[mini][iter]+'$$<br>';
ri.map(xx=>{
  r=R[xx].filter((x,i)=>!~ri.indexOf(i)).sort().reverse();
d=D[di[xx]].filter((x,i)=>!~di.indexOf(i)).sort();
out+= '$$r_'+(xx+1)+'=\\{'+r.join(',')+'\\}$$<br>';
out+= '$$d_'+(di[xx]+1)+'=\\{'+d.join(',')+'\\}$$<br>';
wq = d.map((x,i)=>r[i]*d[i]).reduce((x,y)=>x+y);
out+= '$$r_'+(xx+1)+' \\times d_'+(di[xx]+1)+' ='+d.map((x,i)=>r[i]+' \\cdot '+d[i]).join('+')+'='+wq+'$$<br>';
sum+=wq;
});
out+= '$$w(P)='+sum+'$$<br>';
vq=R[2][3]*D[[0,1,2,3].filter(x=>!~di.indexOf(x))[0]][[0,1,2,3].filter(x=>!~di.indexOf(x))[1]];
out+= '$$v(P)='+R[2][3]+' \\cdot '+D[[0,1,2,3].filter(x=>!~di.indexOf(x))[0]][[0,1,2,3].filter(x=>!~di.indexOf(x))[1]]+'= '+vq+'$$<br>';
tree[2][iii] = R[0][1]*D[mini][iter]+sum+vq;
out+= '$$F(P)='+tree[2][iii]+'$$<br><br>';
if (exitpos[0]>tree[2][iii])exitpos=[tree[2][iii],iter];
iii++;
});
exitpos=exitpos[1];
dtree();

out+='4. Назначаем элемент $$e_2$$ в позицию $$p_'+(exitpos+1)+'$$.<br>';

var exitpos2=[100,0];
iii=0;
([0,1,2,3].filter(x=>!~[mini,exitpos].indexOf(x))).map(iter=>{
out+='Расположим $$e_3$$ в позицию $$p_'+(iter+1)+'$$.<br>';
                                
wq = 0;
vq = 0;
var ri=[0,1,2];
di=[mini,exitpos,iter];
var sum=0;
var aaa=[[R[0][1],D[di[0]][di[1]]],[R[0][2],D[di[0]][di[2]]],[R[1][2],D[di[1]][di[2]]]];
out+= '$$F(q)='+aaa.map(x=>x[0]+' \\cdot '+x[1]).join(' + ')+' = '+aaa.map(x=>x[0]*x[1]).reduce((x,y)=>x+y)+'$$<br>';
ri.map(xx=>{
  r=R[xx].filter((x,i)=>!~ri.indexOf(i)).sort().reverse();
d=D[di[xx]].filter((x,i)=>!~di.indexOf(i)).sort();
out+= '$$r_'+(xx+1)+'=\\{'+r.join(',')+'\\}$$<br>';
out+= '$$d_'+(di[xx]+1)+'=\\{'+d.join(',')+'\\}$$<br>';
wq = d.map((x,i)=>r[i]*d[i]).reduce((x,y)=>x+y);
out+= '$$r_'+(xx+1)+' \\times d_'+(di[xx]+1)+' ='+d.map((x,i)=>r[i]+' \\cdot '+d[i]).join('+')+'='+wq+'$$<br>';
sum+=wq;
});
out+= '$$w(P)='+sum+'$$<br>';
out+= '$$v(P)=0$$<br>';
tree[3][iii] = aaa.map(x=>x[0]*x[1]).reduce((x,y)=>x+y)+sum;
out+= '$$F(P)='+tree[3][iii]+'$$<br><br>';
if (exitpos2[0]>tree[3][iii])exitpos2=[tree[3][iii],iter];
iii++;
});
exitpos2=exitpos2[1];
out+='Назначаем элемент $$e_3$$ в позицию $$p_'+(exitpos2+1)+'$$.<br>';
dtree();
//out+=tree.map(x=>x.join(' ')).join('<br>');
var e=[3,3,3,3];
e[mini]=0;
e[exitpos]=1;
e[exitpos2]=2;
out+= 'Ответ: $$'+e.map(x=>'e_'+(x+1)).join('\\ ')+'$$';//JSON.stringify();

output.print(out+'<br>');
return 0;
