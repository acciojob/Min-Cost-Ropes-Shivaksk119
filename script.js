function mincost(arr)
{ 
//write your code here
// return the min cost

	arr.sort();
	let minCost = 0;
	let lengthOfRope = arr[0];
	for(let i=1;i<arr.length;i++){
		lengthOfRope = lengthOfRope+arr[i];
		minCost = minCost + lengthOfRope;
	}
	retrun minCost;
  
}

module.exports=mincost;
