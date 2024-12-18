//********************************************************* */
//************************ARRAY  1 */
//? tar 1

const _ar= [5,1,3,2,6];
console.log("array before sort: ",_ar)


function sort(_ar) {
   
    let len= _ar.length;

    while(len) {
    
            for(let i=0 ;i<len-1;i++) {
                if(_ar[i]<_ar[i+1]) {
                    let temp=_ar[i];
                    _ar[i] = _ar[i+1];
                    _ar[i+1] = temp;
                }    
            }
            len--;
    }
   
    console.log("array after sort: ",_ar)
}
sort(_ar);

//********************************************************* */
//************************ARRAY  2 */
 //? tar 2   for   


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
 getSameValuesBetweenTwoArrayes(ar1,ar2);

 //********************************************************* */
 //************************ARRAY  3 */
//? tar 3  for


function getEverageArr(_ar) {

    let sum=0;
    let items=0;

   for(let i=0;i<arr.length;i++) {
     for(let j=0;j<arr[i].length;j++,items++) {
        sum+=arr[i][j];
     }
   }
   let avg=sum/items;
   console.log(avg);

}

const arr=[[6,6,6],
           [6,6,6,6]
        ];
getEverageArr(arr);


 //********************************************************* */
 //************************ARRAY  4 */
//? tar 4  for

function isFound(_ar,num) {

    let new_ar=[];
    let inx=0;
    console.log("before:",_ar);
    let count=0;

    for(let i=0;i<_ar.length;i++) {
        new_ar[inx]=_ar[i]; 
        if(new_ar[inx]!=num) {
            inx++;
            
        }
        else {
            count++;
            new_ar.pop();            
        }
    
       
    }


    console.log("after:",new_ar)
    console.log("count:",count);
}

isFound([0,1,100,1,100,12,75],1);


//****************************************************************************** */
//                                         (1)   Arrow function
//                                        
//***************************************************************************** */
const greaterThenFive = (str) => {

   return str.length>5;
}

let res=greaterThenFive("123456");
console.log("isGreaterThenFive: ",res);

//                                        (2) Arrow function
//****************************************************************************** */

const isHeadTailAreEqual = (str)=>{
    let len= str.length;
    if(!len) {
        console.log("The string are Empty");
        return false;
    }
   
    if(str[0]==str[len-1]) {
           return true;
     }

     return false;
    
}

console.log("isHeadTailAreEqual: " ,isHeadTailAreEqual("aba"));



//                                        (3) Arrow function
//****************************************************************************** */

const isTailUperCase= (str)=> {
    let len= str.length;
    if(!len ) {
        console.log("the string are empty!!!");
        return false;
    }
   
    if(str[len-1]<='Z' && str[len-1]>='A') {
           return true;
     }

     return false; 
}

let str="abcdA";
console.log("isTaliUpperCase: " ,isTailUperCase(str))



//                                        (1) map/foreach
//****************************************************************************** */

function moduloThree(_ar) {

    let isFound=false;

    _ar.forEach((element,inx) => {
        if( element%3==0) {
            console.log(element,inx);
            isFound=true;
        }
    });

    if(isFound==false) {
        console.log("The array is not divisible by 3")
    }

    
}

let myAr= [4,5,1,9,17,18,56,90];
let myAr1= [4,5,1,8,17,19,56,91];
moduloThree(myAr);
moduloThree(myAr1);


//                                        (2) map/foreach
//****************************************************************************** */


function ar2UpperCase(_ar) {

    let new_ar=_ar.map(element=>{
        if(element==element.toUpperCase()) {
            return 'U';
        }
        else {
            return 'L';
        }
    });
    console.log(new_ar);


}

ar2UpperCase(['E','l','i','P','e','n','t','s','e','r']);


//                                        (3) map/foreach
//****************************************************************************** */

function toEvenIndex(_ar) {

    console.log("before:",_ar)

    let newAr= _ar.map((element,inx)=>{
        if(inx%2==0) {
            return inx;
        }
        else {
            return element;
        }
});

console.log("after: ",newAr);

}

const arrOfNumber= ['a','b','c','d','e'];
toEvenIndex(arrOfNumber);


//                                        (4) filter
//****************************************************************************** */

function over18(_ar) {
  const over18 = _ar.filter(elm=>elm>18);
  console.log(over18);
}

over18([17,13,21,19]);

//                                        (5) filter
//****************************************************************************** */

function notIncludeIndex3(_ar) {

    const arr=_ar.filter((element,inx)=>{
        if(inx!=3) {
         return element
        }
    })
    return arr;

}

const resArr= notIncludeIndex3([-1,4,1,2,7,15,8]);
console.log(resArr)

//                                        (6) spread
//****************************************************************************** */

let arrOfNames= ["eli","dan","ela"];

function getName(name) {
   return [...arrOfNames,name];
}
arrOfNames=getName("ben");
console.log(arrOfNames);

//                                        (7) spread
//****************************************************************************** */

 function concat2Arrayes (_ar1,_ar2) {

    return [..._ar1,..._ar2];

}
const firstArr=[1,2,3];
const secoundArr=[4,5,6];
console.log(concat2Arrayes(firstArr,secoundArr));























