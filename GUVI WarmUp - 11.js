/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	
	if (typeof num1 === 'number' && typeof num2 === 'number' && num1 >= 0 && num2 > 0) {
		const frames = num1 * 60 * num2;
		return frames;
	} else {
		return -1;
	}
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/