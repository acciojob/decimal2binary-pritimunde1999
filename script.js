function decimalToBinary(num) {
  //Write you code here
	let ans ="";
  while(num>0)
	  {
		  let digit = num%2;
		  ans += digit;
		  num = num/2;
	  }

	let ans1="";
	for(let i=ans.length-1; i>=0;i--)
	{
		ans1+= ans.charAt(i);
	}

	return Number(ans1);
}

window.decimalToBinary = decimalToBinary;
