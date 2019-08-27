function findMin(arr){
    let smallest = arr[0];
    let smallestIndex = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    
    return smallestIndex;
}

function selectionSorting(arr){
    let sortedArr = [];

    while(arr.length > 0){
       let si = findMin(arr);        
       sortedArr.push(arr[si]);        
       arr.splice(si, 1);
    }
    
    return sortedArr;
}


selectionSorting([34, 21, 6, 78, -3, 2, 14, 678, -5400, 300000]);


