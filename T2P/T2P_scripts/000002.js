//- name: mathjs test
//- description: mathjs test
//- author: T
//- semester: any
//- input: inline_string
//- input_default_value: sqrt(75 / 3) + det([[-1, 2], [3, 1]]) - sin(pi / 4)^2
//- output: html
//- import: math

try {
	output.print('$$'+math.parse(input.all).toTex({parenthesis: 'keep'})+'$$ = $$'+math.evaluate(input.all)+'$$');
	return 0;
}catch(e){
	output.print_error(e.message);
	return e.message;
}