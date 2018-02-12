function aggregateElements(arr) {
    
    function aggregate(arr,start,func) {
        for (let obj of arr) {
            start =  func(start, obj);
        }

        console.log(start);
    }


    aggregate(arr, 0, (a, b) => a+b);
    aggregate(arr, 0, (a, b) => a+(1/b));
    aggregate(arr, "", (a, b) => a+b);
}

aggregateElements([1,2,3])