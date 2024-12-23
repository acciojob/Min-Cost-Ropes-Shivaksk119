function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
	let cost = 0;
	let l1 = parseInt(arr.length/2);
	
	let lor1 = arr[0];
	
	for(let i=1;i<=l1;i++){
	  lor1 = lor1 + arr[i];
	   cost += lor1;
	}
	
	let lor2 = arr[arr.length-1];
	
	for(let j=arr.length-2;j>l1;j--){
	    lor2 = lor2 + arr[j];
	    cost += lor2;
	}
	
	cost = cost+lor1+lor2;
  return cost;
}

module.exports=mincost;
