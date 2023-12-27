function getFormvalue() {
    //Write your code here
	let input1 = document.getElementsByName("fname");
	let input2 = document.getElementsByName("lname");
	
	document.addEventListener("click" , function() {
		let i1 = input1.value;
		let i2 = input2.value;
		alert(i1 + " " + i2);
	})
}
