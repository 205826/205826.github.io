//- name: async test
//- description: Clock on T2P
//- author: &#60;T&#62;
//- semester: any
//- input: inline_string
//- input_default_value: 
//- output: html
//- import: math

function getCurrentTime() {
	var now = new Date();
	var hours = now.getHours().toString().padStart(2, "0");
	var minutes = now.getMinutes().toString().padStart(2, "0");
	var seconds = now.getSeconds().toString().padStart(2, "0");

	return hours + ":" + minutes + ":" + seconds;
}

function clock_step() {
	// Update clock
	output.all = '';
  	output.print('Sandbox №'+input.sandbox_version+'<br>'); // Changes when removing libraries
  	output.print('Build №'+input.build_version+'<br>'); // Change when editing program or input
    output.print('Time: '+getCurrentTime()+'<br>');
	output.flush(); // Upload from sandbox
	
	setTimeout(clock_step,100); // Minimum delay is now 100ms
}
clock_step();

return 0;
