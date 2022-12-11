function frequency(arr){
    
	let maxcount = 1;
    let item=0;
	
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = i; j < arr.length; j++) {
			if (arr[i] == arr[j])
				count++;
		}

		if (count > maxcount) {
			maxcount = count;
            item=arr[i];
			
		}
	}
    console.log(`item ${item} occured  ${maxcount} times`);

	
}


let arr = ['a','a',40, 50, 'a','a',30, 40, 40,50, 30, 30,'a'];

frequency(arr);

//moveelements
let arr2=[10,20,30,40,50];
//oldIndex=0;
//newIndex=2;
console.log(array_move(arr2,0,2));

        function array_move(arr, old_index, new_index) {
            if (new_index >= arr.length) {
                var k = new_index - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr; 
            
        } 


