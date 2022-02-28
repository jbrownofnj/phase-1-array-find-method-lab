// code your solution here
const aOO=[{year:2000,result:"W"},{year:2000,result:"d"},{year:2000,result:"d"}]

function isItAWinner(object){
    if(object.result==="W"){
        return true;
    }  
    else {
        return false;
    }
}

function superbowlWin(arrayOfObjects){
    const answer = arrayOfObjects.find(isItAWinner)
    if (typeof(answer)==="object"){
        return answer.year;
    }
    else{
        return answer;
    }
}



