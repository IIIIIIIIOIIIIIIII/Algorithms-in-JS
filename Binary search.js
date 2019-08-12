
function binarySearch(list, target){    
   let minItem = 0;
   let maxItem = list.length - 1;
   let positionYouNeed = -1;
   let found = false;
   let middleItem;

   while(found === false && minItem <= maxItem){
       middleItem = Math.floor((minItem + maxItem) / 2);

       if(list[middleItem] === target){
           found = true;
           positionYouNeed = middleItem;
       }
       else if(list[middleItem] > target){
           maxItem = middleItem - 1;
       }
       else{
           minItem = middleItem + 1;
       }
   }

   return positionYouNeed;   
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 3);


