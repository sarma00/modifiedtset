var myFirebaseRef = new Firebase("https://sarma1.firebaseio.com");
			myFirebaseRef.child("news5").on("value", function(snapshot) {
				//alert(snapshot.val()); 
				document.getElementById('para1').innerHTML=snapshot.val();
				
			});
			myFirebaseRef.child("news2").on("value", function(snapshot) {
				//alert(snapshot.val()); 
				document.getElementById('para2').innerHTML=snapshot.val();
			});
			myFirebaseRef.child("news3").on("value", function(snapshot) {
				//alert(snapshot.val()); 
				document.getElementById('para3').innerHTML=snapshot.val();
			});
			myFirebaseRef.child("news4").on("value", function(snapshot) {
				//alert(snapshot.val()); 
				document.getElementById('para4').innerHTML=snapshot.val();
			});
			
