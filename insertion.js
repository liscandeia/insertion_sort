//algoritimo de ordenação insertion sort

function insertion (array){
    for( i = 0 ; i < array.length; i++){
        let n = i-1;
        let element = array[i];

        while (n>=0 && array[n]> element ){
            array[n+1]= array[n];
            n--;
        }
        array [n+1] = element;
    }
    return console.log(array);
};
module.exports = insertion;

