// code your solution here
function superbowlWin(array){
    for(let row of array){
    let result=array.find(arrayPlace=>arrayPlace['result']==='W')
    if(result){
        let i=array.indexOf(result)
        return array[i].year
    }
}}