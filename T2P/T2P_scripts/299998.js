//- name: GL SUIR
//- description: Тензоры
//- author: ____ (feat. T)
//- semester: 2
//- faculty: СУИР
//- input: html_gl
//- input_default_value: <h2>Задание 4</h2>Тензор $$a^k_{tl}$$ задан матрицей в базисе $$\{e\}^2_{i=1}$$<br>
//- input_default_value: $$A=\Bigg|\Bigg|$$<textarea id="СA1" style="width:50px;height:45px;vertical-align:middle;">2 3\n5 2</textarea>$$\Bigg|$$<textarea id="СA2" style="width:50px;height:45px;vertical-align:middle;">1 4\n2 4</textarea>$$\Bigg|\Bigg|$$<br>
//- input_default_value: В матрице $$A$$ индекс $$k$$ определяется номером строки, индекс $$t$$ определяеться номером столбца, индекс $$l$$ определяеться номером слоя по горизонтали<br>
//- input_default_value: Найти матрицу $$\widetilde{A}$$ этого тензора в базисе $$\{\widetilde{e}\}^2_{i=1}$$, если <br>
//- input_default_value: $$e_1=\Bigg($$<textarea id="GE0" style="width:30px;height:55px;vertical-align:middle;">-1\n1</textarea>$$\Bigg),\ \ \ 
//- input_default_value: e_2=\Bigg($$<textarea id="GE1" style="width:30px;height:55px;vertical-align:middle;">1\n0</textarea>$$\Bigg)$$<br>
//- input_default_value: $$\widetilde{e}_1=\Bigg($$<textarea id="GTE0" style="width:30px;height:55px;vertical-align:middle;">-1\n1</textarea>$$\Bigg),\ \ \
//- input_default_value: \widetilde{e}_2=\Bigg($$<textarea id="GTE1" style="width:30px;height:55px;vertical-align:middle;">2\n-3</textarea>$$\Bigg)$$<br>

//- input_default_value: <h2>Задание 5</h2>Тензор $$a^{jk}$$ задан матрицей в базисе $$\{e\}^3_{i=1}$$<br>
//- input_default_value: $$A=\Bigg|\Bigg|$$<textarea id="DA1" style="width:80px;height:55px;vertical-align:middle;">1 3 2\n4 6 -4\n6 2 6</textarea>$$\Bigg|\Bigg|$$<br>
//- input_default_value: В матрице $$A$$ индекс $$j$$ определяется номером строки, индекс $$l$$ определяеться номером столбца.<br>
//- input_default_value: Найти матрицу $$\widetilde{A}$$ этого тензора в базисе $$\{\widetilde{e}\}^3_{i=1}$$, если <br>
//- input_default_value: $$e_1=\Bigg($$<textarea id="DE0" style="width:30px;height:55px;vertical-align:middle;">-1\n2\n2</textarea>$$\Bigg),\ \ \ 
//- input_default_value: e_2=\Bigg($$<textarea id="DE1" style="width:30px;height:55px;vertical-align:middle;">-1\n1\n0</textarea>$$\Bigg),\ \ \ 
//- input_default_value: e_3=\Bigg($$<textarea id="DE2" style="width:30px;height:55px;vertical-align:middle;">1\n-1\n1</textarea>$$\Bigg)$$<br>
//- input_default_value: $$\widetilde{e}_1=\Bigg($$<textarea id="DTE0" style="width:30px;height:55px;vertical-align:middle;">-1\n-1\n1</textarea>$$\Bigg),\ \ \
//- input_default_value: \widetilde{e}_2=\Bigg($$<textarea id="DTE1" style="width:30px;height:55px;vertical-align:middle;">-2\n-3\n1</textarea>$$\Bigg),\ \ \ 
//- input_default_value: \widetilde{e}_3=\Bigg($$<textarea id="DTE2" style="width:30px;height:55px;vertical-align:middle;">1\n2\n1</textarea>$$\Bigg)$$<br>
//- output: html
//- import: math
//- language: py


a = [list(map(lambda y:list(map(float,y.split(' '))),input.all.filter(lambda x,y,z:x.id=='СA1')[0].value.split('\n'))),
     list(map(lambda y:list(map(float,y.split(' '))),input.all.filter(lambda x,y,z:x.id=='СA2')[0].value.split('\n')))]

f = [list(map(float,input.all.filter(lambda x,y,z:x.id=='GE0')[0].value.split('\n'))), list(map(float,input.all.filter(lambda x,y,z:x.id=='GE1')[0].value.split('\n')))]
q = [list(map(float,input.all.filter(lambda x,y,z:x.id=='GTE0')[0].value.split('\n'))), list(map(float,input.all.filter(lambda x,y,z:x.id=='GTE1')[0].value.split('\n')))]

fqf = 'fqf qqq qqf qfq qff fqq ffq fff'.split(' ');
print('Возможные ответы задания 4:<br>')
B = [[[0,0],[0,0]],[[0,0],[0,0]]]
T = math.transpose([math.transpose(math.lusolve(math.transpose(f),list(map(lambda x:[x],q[0]))))[0],math.transpose(math.lusolve(math.transpose(f),list(map(lambda x:[x],q[1]))))[0]]);
S = math.inv(T)
for layer_in_A in range(1, 3):
    for layer_in_B in range(1, 3):
        for line_in_B in range(1, 3):
            for column_in_B in range(1, 3):
                for line_in_A in range(1, 3):
                    for column_in_A in range(1, 3):
                        B[layer_in_B - 1][line_in_B - 1][column_in_B - 1] += \
                            a[layer_in_A - 1][line_in_A - 1][column_in_A - 1] \
                            * S[line_in_B - 1][line_in_A - 1] \
                            * T[column_in_A - 1][column_in_B - 1] \
                            * T[layer_in_A - 1][layer_in_B - 1]

print("[", B[0][0][0], ', ', B[0][0][1], ', ', B[1][0][0], ', ', B[1][0][1], "; ",
      B[0][1][0], ', ', B[0][1][1], ', ', B[1][1][0], ', ', B[1][1][1], "]<br>", sep='')
for i in fqf:
  exec('''
b = [[[0,0],[0,0]],[[0,0],[0,0]]]
for t in range(1,3):
    for l in range(1, 3):
        for m in range(1, 3):
            for i in range(1,3):
                for j in range(1,3):
                    for k in range(1,3):
                        b[t-1][l-1][m-1] += a[i-1][j-1][k-1]*'''+i[0]+'''[t-1][i-1]*'''+i[1]+'''[l-1][j-1]*'''+i[2]+'''[m-1][k-1]
                        # print(b[t-1][l-1][m-1], a[i-1][j-1][k-1], f[t-1][i-1], f[l-1][j-1], f[m-1][k-1])

print("[", b[0][0][0], ', ', b[0][0][1], ', ', b[1][0][0], ', ', b[1][0][1], "; ", b[0][1][0], ', ', b[0][1][1], ', ', b[1][1][0], ', ', b[1][1][1], "]<br>", sep='')
''');

A = list(map(lambda y:list(map(float,y.split(' '))),input.all.filter(lambda x,y,z:x.id=='DA1')[0].value.split('\n')));

f = [list(map(float,input.all.filter(lambda x,y,z:x.id=='DE0')[0].value.split('\n'))), list(map(float,input.all.filter(lambda x,y,z:x.id=='DE1')[0].value.split('\n'))), list(map(float,input.all.filter(lambda x,y,z:x.id=='DE2')[0].value.split('\n')))]
q = [list(map(float,input.all.filter(lambda x,y,z:x.id=='DTE0')[0].value.split('\n'))), list(map(float,input.all.filter(lambda x,y,z:x.id=='DTE1')[0].value.split('\n'))), list(map(float,input.all.filter(lambda x,y,z:x.id=='DTE2')[0].value.split('\n')))]


# Задание 5 для тензора валентности (0, 2) в пространстве R^3
print('Задание 5:<br>')

B = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
T = math.transpose([math.transpose(math.lusolve(math.transpose(f),list(map(lambda x:[x],q[0]))))[0],math.transpose(math.lusolve(math.transpose(f),list(map(lambda x:[x],q[1]))))[0],math.transpose(math.lusolve(math.transpose(f),list(map(lambda x:[x],q[2]))))[0]]);
S = math.inv(T)

for line_in_B in range(1, 4):
    for column_in_B in range(1, 4):
        for line_in_A in range(1, 4):
            for column_in_A in range(1, 4):
                B[line_in_B - 1][column_in_B - 1] += \
                    A[line_in_A - 1][column_in_A - 1] \
                    * S[line_in_B - 1][line_in_A - 1] \
                    * S[column_in_B - 1][column_in_A - 1]

print('[', B[0][0], ', ', B[0][1], ', ', B[0][2], '; ', B[1][0], ', ', B[1][1],
      ', ', B[1][2], '; ', B[2][0], ', ', B[2][1], ', ', B[2][2], ']', sep='')