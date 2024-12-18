//********************************************************* */
//? tar 1

// const _ar= [5,1,3,2,6];
// console.log("array before sort: ",_ar)


// function sort(_ar) {
   
//     let len= _ar.length;

//     while(len) {
    
//             for(let i=0 ;i<len-1;i++) {
//                 if(_ar[i]<_ar[i+1]) {
//                     let temp=_ar[i];
//                     _ar[i] = _ar[i+1];
//                     _ar[i+1] = temp;
//                 }    
//             }
//             len--;
//     }
   
//     console.log("array after sort: ",_ar)
// }
// sort(_ar);

//********************************************************* */
// //? tar 2


function handleDuplicateValue(ar3,value) {
    let isFound=false;
    for(let i=0;i<ar3.length;i++) {
        if(ar3[i]==value) {
            isFound=true;
        }   
    }
    return isFound;
}

function getSameValuesBetweenTwoArrayes(ar1,ar2) {
   
    const commonValue=[];

    for(let i=0;i<ar1.length;i++) {
        if(handleDuplicateValue(commonValue,ar1[i])) {
            continue;
        }
        let found=false;
        for(let j=0;j<ar2.length;j++) {
            if(ar2[j]==ar1[i]) {
                found=true;
                break;           
                }
            }
        if(found) {
            commonValue.push(ar1[i]);
        }
    }
   console.log(commonValue)
}

 const ar1=[1,2,1,2,1];
 const ar2=[2,2,2,1,3,1,2];
 console.log(getSameValuesBetweenTwoArrayes(ar1,ar2));

 //********************************************************* */
//? tar 3




