function linearSearch(list, target){
    let found = false;
    let positionYouNeed = -1;
    let i = 0;

    while(found === false && i < list.length){
        if(list[i] == target){
            found = true;
            positionYouNeed = i;
        }
        else{
            i++;
        }
    }

    return positionYouNeed;
}


linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 2);