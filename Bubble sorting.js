function bubbleSorting(arr){
    if(arr.length === 0) return 'This array is empty now';
    else{    
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                if(arr[j] > arr[j + 1]){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}