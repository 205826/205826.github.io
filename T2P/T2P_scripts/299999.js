//- name: GL LG1
//- description: Спектр, собственные вектора, оператор, базис, образ, ядро
//- author: &#60;T&#62;
//- semester: 2
//- faculty: ВТ
//- input: html_gl
//- input_default_value: <h2>Задание 1</h2>Найти спектр и собственные вектора оператора $$\phi \in Hom(R^3,R^3)$$, заданного своей матрицей в стандартом базисе, если<br>
//- input_default_value: $$A_\phi=\Bigg($$<textarea id="СA" style="width:70px;height:55px;vertical-align:middle;">-2 1 1\n2 -3 1\n-4 -2 -6</textarea>$$\Bigg)$$<br>
//- input_default_value: <h2>Задание 2</h2>Оператор $$\phi \in Hom(R^3,R^3)$$ задан своей матрицей $$A_\phi$$ в базисе $$\{e\}^3_{i=1}$$.<br>
//- input_default_value: Найти матрицу этого оператора $$\widetilde{A}_\phi$$ в базисе $$\{\widetilde{e}\}^3_{i=1}$$, если<br>
//- input_default_value: $$A_\phi=\Bigg($$<textarea id="GA" style="width:70px;height:55px;vertical-align:middle;">1 -2 3\n-1 2 -2\n-2 5 -8</textarea>$$\Bigg)$$<br>
//- input_default_value: $$e_1=\Bigg($$<textarea id="GE0" style="width:30px;height:55px;vertical-align:middle;">1\n1\n-2</textarea>$$\Bigg),\ \ \ 
//- input_default_value: e_2=\Bigg($$<textarea id="GE1" style="width:30px;height:55px;vertical-align:middle;">-2\n-1\n3</textarea>$$\Bigg),\ \ \ 
//- input_default_value: e_3=\Bigg($$<textarea id="GE2" style="width:30px;height:55px;vertical-align:middle;">-1\n-3\n5</textarea>$$\Bigg)$$<br>
//- input_default_value: $$\widetilde{e}_1=\Bigg($$<textarea id="GTE0" style="width:30px;height:55px;vertical-align:middle;">-1\n2\n0</textarea>$$\Bigg),\ \ \ 
//- input_default_value: \widetilde{e}_2=\Bigg($$<textarea id="GTE1" style="width:30px;height:55px;vertical-align:middle;">-1\n3\n-1</textarea>$$\Bigg),\ \ \ 
//- input_default_value: \widetilde{e}_3=\Bigg($$<textarea id="GTE2" style="width:30px;height:55px;vertical-align:middle;">-2\n5\n0</textarea>$$\Bigg)$$<br>
//- input_default_value: <h2>Задание 3</h2>Вычислить базис образа оператора, заданного матрицей в стандартном базисе<br>
//- input_default_value: $$A=\Bigg($$<textarea id="RA" style="width:70px;height:55px;vertical-align:middle;">1 0 0\n-1 1 -1\n1 -2 2</textarea>$$\Bigg)$$<br>
//- input_default_value: <h2>Задание 4</h2>Вычислить базис ядра оператора, заданного матрицей в стандартном базисе<br>
//- input_default_value: $$A=\Bigg($$<textarea id="BA" style="width:70px;height:55px;vertical-align:middle;">1 0 0\n-2 1 -2\n3 -1 3</textarea>$$\Bigg)$$<br>
//- output: html
var out='';
var deb='';
function M_FSR(A) {
	var l=[];
  var b=A.map(()=>0);
  A.map(x=>{for(var i=0;i<x.length;i++)if(x[i]){l.push(i);return;}});
  var inv=A[0].map((x,i)=>l.indexOf(i)<0?i:-1).filter(x=>x>=0);
  //return [inv];
  return inv.map(x=>{
  	var CA=A.map(y=>y.map(z=>z));
  	var Cb=b.map(y=>y);
  	inv.filter(y=>y!=x).map(z=>{
      CA.push(A[0].map((w,k)=>k==z?1:0));
      Cb.push(0);
    });
    CA.push(A[0].map((w,k)=>k==x?1:0));
    Cb.push(1);
  	return M_SSOE(CA,Cb);
  });
}
function M_Mul(A, B) {
    var result = new Array(A.length).fill(0).map(() => new Array(B[0].length).fill(0));

    return result.map((row, i) => {
        return row.map((val, j) => {
            return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]) ,0);
        });
    });
}
var M_transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
function M_stepped(matrix) { // CREATER BY ChatGPT
  matrix=matrix.map(x=>x.map(y=>y)).filter(x=>x.reduce((x,y)=>x*x+y*y,0)>0.000001);
  if (matrix.length==0) return [];
  let n = matrix.length;
  let m = matrix[0].length;
  let k = Math.min(n, m);
  
  // Приводим матрицу к ступенчатому виду
  for (let i = 0; i < k; i++) {
    let max = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrix[j][i]) > Math.abs(matrix[max][i])) {
        max = j;
      }
    }
    if (matrix[max][i]*matrix[max][i]<0.00001) continue;
    [matrix[i], matrix[max]] = [matrix[max], matrix[i]];
    for (let j = 0; j < n; j++) if (i!=j){
      let coef = matrix[j][i] / matrix[i][i];
      for (let l = i; l < m; l++) {
        matrix[j][l] -= coef * matrix[i][l];
      }
    }
  }
  return matrix.filter(x=>x.reduce((x,y)=>x*x+y*y,0)>0.000001);
}
function M_SSOE(matrix, b) { // CREATER BY ChatGPT
  matrix=matrix.map(x=>x.map(y=>y));
  b=b.map(x=>x);
  let n = matrix.length;
  let m = matrix[0].length;
  let k = Math.min(n, m);
  
  // Приводим матрицу к ступенчатому виду
  for (let i = 0; i < k; i++) {
    let max = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(matrix[j][i]) > Math.abs(matrix[max][i])) {
        max = j;
      }
    }
    [matrix[i], matrix[max]] = [matrix[max], matrix[i]];
    [b[i], b[max]] = [b[max], b[i]];
    
    for (let j = i + 1; j < n; j++) {
      let coef = matrix[j][i] / matrix[i][i];
      for (let l = i; l < m; l++) {
        matrix[j][l] -= coef * matrix[i][l];
      }
      b[j] -= coef * b[i];
    }
  }
  
  // Приводим матрицу к диагональному виду
  for (let i = k - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      let coef = matrix[j][i] / matrix[i][i];
      for (let l = i; l < m; l++) {
        matrix[j][l] -= coef * matrix[i][l];
      }
      b[j] -= coef * b[i];
    }
    let coef = 1 / matrix[i][i];
    for (let j = i; j < m; j++) {
      matrix[i][j] *= coef;
    }
    b[i] *= coef;
  }
  
  return b;
}
function M_inverse(matrix) {
	return M_transpose(matrix[0].map((y,j)=>M_SSOE(matrix,matrix.map((x,i)=>j==i?1:0))));
}
function M_tos(matrix,f) {
  	var toFix = (x)=>{
    var factor = Math.pow(10, 5 || 0);
    var v = (Math.round(Math.round(x * factor * 100) / 100) / factor).toString();
    if (v.indexOf('.') >= 0) {
        return v + factor.toString().substr(v.length - v.indexOf('.'));
    }
    return v + '.' + factor.toString().substr(1);
};

	return '<textarea id="GA" style="width:300px;height:55px;vertical-align:middle;">'+(f?'[':'')+matrix.map(x=>x.map(y=>toFix(y)).join(f?', ':' ')).join(f?';':'\n')+(f?']':'')+'</textarea>';
}
(()=>{
  var A;
  input.all.map(x=>x.id=='СA'?A=x.value.split('\n').map(x=>x.split(' ').map(x=>+x)):0);
  var li = [];
  for (var i=-20;i<21;i++)
  if (M_stepped(A.map((x,j)=>x.map((y,k)=>j==k?y-i/2:y))).length!=3){
  	M_FSR(M_stepped(A.map((x,j)=>x.map((y,k)=>j==k?y-i/2:y)))).map(x=>li.push([i/2,x]));
  }
  if (li.length==3){
    var obj=[];  
	var toFix = (x)=>{
		var factor = Math.pow(10, 5 || 0);
		var v = (Math.round(Math.round(x * factor * 100) / 100) / factor).toString();
		if (v.indexOf('.') >= 0) {
			return v + factor.toString().substr(v.length - v.indexOf('.'));
		}
		return v + '.' + factor.toString().substr(1);
	};
    li.map(x=>{
      if (!obj[x[0]])
        obj[x[0]]=x[1].map(z=>toFix(z)).join(', ');
      else 
        obj[x[0]]=obj[x[0]]+'; '+x[1].map(z=>toFix(z)).join(', ');
    });
  	out+='1. <textarea id="GA" style="width:300px;height:55px;vertical-align:middle;">'+Object.keys(obj).map(x=>x+' ['+obj[x]+']').join('\n')+'</textarea><br>';//M_tos(M_SSOE(A,[0,0,0]));
  	
  }else
  out+='1. а хз<br>';//M_tos(M_SSOE(A,[0,0,0]));
})();
(()=>{
  var A,e=[0,0,0],te=[0,0,0],T;
  input.all.map(x=>x.id=='GA'?A=x.value.split('\n').map(x=>x.split(' ').map(x=>+x)):0);
  input.all.map(x=>x.id[0]+x.id[1]=='GE'?e[+x.id[2]]=x.value.split('\n').map(x=>+x):0);
  input.all.map(x=>x.id[0]+x.id[2]=='GE'?te[+x.id[3]]=x.value.split('\n').map(x=>+x):0);
  out+='2.';
  T = M_transpose(te.map(x=>M_SSOE(M_transpose(e),x)));
  var otv = M_Mul(M_Mul(M_inverse(T),A),T);
  out+=M_tos(otv,true)+'<br>';
})();
(()=>{
  var A;
  input.all.map(x=>x.id=='RA'?A=x.value.split('\n').map(x=>x.split(' ').map(x=>+x)):0);
  var rez=M_tos((M_stepped(M_transpose(A))),true);
  out+='3.'+(rez==M_tos([],true)?M_tos([],true):rez)+'<br>';
})();
(()=>{
  var A;
input.all.map(x=>x.id=='BA'?A=x.value.split('\n').map(x=>x.split(' ').map(x=>+x)):0);
  var rez =M_tos(M_FSR(M_stepped(A)),true);
  out+='4.'+(rez==M_tos([],true)?M_tos([],true):rez)+'<br>';
})();
output.print(out+deb);
return 0;
