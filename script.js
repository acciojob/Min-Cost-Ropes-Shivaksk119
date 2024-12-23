function mincost(arr)
{ 
	arr.sort();
	let cost = 0;
	while(arr.length>1){
	  let n1 = arr.shift();
	  let n2 = arr.shift();
	  let sum = n1+n2;
	  cost += sum;
	  insertAtOrder(sum,arr);
	}
	return cost;
}

const insertAtOrder=(num,arr)=>{
  let i=0;
  while(i<arr.length && arr[i]<num){
    i++;
  }
  return arr.splice(i,0,num)
}


module.exports=mincost;
