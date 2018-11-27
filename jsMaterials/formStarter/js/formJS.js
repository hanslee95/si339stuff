function start(){
	alert("Just checking....")
}

function checkEmail() {
 	 if (document.getElementById('e1').value != 
 	 	document.getElementById('e2').value) {
 	 	alert("Emails must match!!");
 	 	document.getElementById('e2').focus()
  	}
  }
// SAME CODE - ACTUALLY USES PARAMETER
 // function checkEmail(input) {
 // 	 if (document.getElementById('e1').value != 
 // 	 	input.value) {
 // 	 	alert("Emails must match!!");
 //  	}
 //  }

// function checkEmail() {
//  	 if (document.getElementById('e1').value != 
//  	 	document.getElementById('e2').value) {
//  	 	alert("Emails must match!!");
//  	 	document.getElementById('e2').focus()
//  	 	return false;
//   	}
//   	return true
//   }











 function checkPass() {
 	alert(document.getElementById('pass').value)
 	 if (document.getElementById('pass').value.length <= 8){
 	 	alert("Password must be at least 8 characters long");
  	}
  }