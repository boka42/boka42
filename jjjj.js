 function countOddEvenNumber(n) {
 	var result = {odd: 0, even: 0};
 	var str = n.toString();
 	for (var i = 0; i < str.length; i++){
 		if(parseInt(str.charAt(i)) % 2==0) result.even++;
 		else result.even++;
}
return result;
 }
 countOddEvenNumber(100500)