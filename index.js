function map(sourceArray, myFunction){
    let negArray = []; 
    for (let i=0; i<sourceArray.length; i++){
        negArray.push(myFunction(sourceArray[i]))
    }
    return negArray;
};

