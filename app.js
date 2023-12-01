const dubVal=document.querySelector('#dubval p');
const dubValField=document.querySelector('#dubval input');
const dubValBtn=document.querySelector('#dubval button');

const onlyEVals=document.querySelector('#onlyeval p');
const onlyEValField=document.querySelector('#onlyeval input');
const onlyEValBtn=document.querySelector('#onlyeval button');

const firstLast=document.querySelector('#firstlast p');
const firstLastField=document.querySelector('#firstlast input');
const firstLastBtn=document.querySelector('#firstlast button');

const keyVal=document.querySelector('#keyval p');
const keyValField=document.querySelector('#keyval div');
const keyValBtn=document.querySelector('#keyval button');

const vCount=document.querySelector('#vowels p');
const vCountField=document.querySelector('#vowels input');
const vCountBtn=document.querySelector('#vowels button');

const dubMap=document.querySelector('#dubmap p');
const dubMapField=document.querySelector('#dubmap input');
const dubMapBtn=document.querySelector('#dubmap button');

const valIndex=document.querySelector('#valindex p');
const valIndexField=document.querySelector('#valindex input');
const valindexBtn=document.querySelector('#valindex button');

const extract=document.querySelector('#extract p');
const extractField=document.querySelector('#extract input');
const extractBtn=document.querySelector('#extract button');

const fullName=document.querySelector('#fullname p');
const fullNameField=document.querySelector('#fullname input');
const fullNameBtn=document.querySelector('#fullname button');

const filterVal=document.querySelector('#filterval p');
const filterValField=document.querySelector('#filterval input');
const filterValBtn=document.querySelector('#filterval button');

const findP=document.querySelector('#find p');
const findField=document.querySelector('#find input');
const findBtnGood=document.getElementById('good');
const findBtnBad=document.getElementById('bad');

const findObj=document.querySelector('#findobj p');
const findObjField=document.querySelector('#findobj input');
const findObjBtn=document.querySelector('#findobj button');

const dubOdd=document.querySelector('#dubodd p');
const dubOddField=document.querySelector('#dubodd input');
const dubOddBtn=document.querySelector('#dubodd button');
// ----------------------------------------------------------------------------------------------------------------

// FOREACH TESTS

// --------------------------------------------------------------

//      DOUBLE VALUES

const numArray=[1,2,3,4,5,6,7,8,9,10];

function doubleValues(arr){
    let newArr=[];
    arr.forEach(function(val){
        newArr.push(val*2);
    })
    return newArr;
}

dubVal.innerText=JSON.stringify(numArray);
dubValBtn.addEventListener('click',function(){
    dubValField.value=doubleValues(numArray);
})

// --------------------------------------------------------------

//      ONLY EVEN VALUES

function onlyEvenValues(arr){
    let newArr=[];
    arr.forEach(function(val){
        if(val%2===0){
            newArr.push(val);
        } return
    })
    return newArr;
}

onlyEVals.innerText=JSON.stringify(numArray);
onlyEValBtn.addEventListener('click',function(){
    onlyEValField.value=onlyEvenValues(numArray);
})

// --------------------------------------------------------------

//      SHOW FIRST AND LAST

const wordArray=['This','is','an','important','message'];

function showFirstAndLast(arr){
    let newArr=[];
    arr.forEach(function(str){
        let newVal=str[0]+str[str.length-1];
        newArr.push(newVal);
    })
    return newArr;
}

firstLast.innerText=JSON.stringify(wordArray);
firstLastBtn.addEventListener('click',function(){
    firstLastField.value=showFirstAndLast(wordArray);
})

// --------------------------------------------------------------

//      ADD KEY AND VALUE

const objectArray=[
    {name   : 'Mark'},
    {name   : 'Toni'},
    {name   : 'Morgan'},
    {name   : 'Bliss'},
];
let newKey='job';
let newVal='Kava Shack';

function addKeyAndValue(arr,key,value){
    let newArr=[];
    arr.forEach(function(obj){
        let newObj={...obj,[key]:value};
        newArr.push(newObj);
    })
    return newArr;
}

keyVal.innerText=JSON.stringify(objectArray);
keyValBtn.addEventListener('click',function(){
    keyValField.innerText=JSON.stringify(addKeyAndValue(objectArray,newKey,newVal));
})

// --------------------------------------------------------------

//      VOWEL COUNT

const bigWord='Antidisestablishmentarianism';

function vowelCount(str){
    let vowels='aeiou';
    let newObj={};
    Array.from(str.toLowerCase()).forEach(function(char){
        if(vowels.includes(char)){
            newObj[char]=(newObj[char]||0)+1;
        }
    })
    return newObj;
}

vCount.innerText=bigWord;
vCountBtn.addEventListener('click',function(){
    vCountField.value=JSON.stringify(vowelCount(bigWord));
})

// ----------------------------------------------------------------------------------------------------------------

//      DOUBLE VALUES WITH MAP

function doubleValuesWithMap(arr){
    let newArr=[];
    arr.map(function(val){
        newArr.push(val*2);
    })
    return newArr;
}

dubMap.innerText=JSON.stringify(numArray);
dubMapBtn.addEventListener('click',function(){
    dubMapField.value=JSON.stringify(doubleValuesWithMap(numArray));
})

// --------------------------------------------------------------

//      VAL TIMES INDEX

function valTimesIndex(arr){
    let newArr=[];
    arr.map(function(val,index){
        newArr.push(val*index);
    })
    return newArr;
}

valIndex.innerText=JSON.stringify(numArray);
valindexBtn.addEventListener('click',function(){
    valIndexField.value=JSON.stringify(valTimesIndex(numArray));
})

// --------------------------------------------------------------

//      EXTRACT KEY

function extractKey(arr,key){
    let newArr=[];
    arr.map(function(val){
        newArr.push(val[key]);
    })
    return newArr;
}
const mapKey='name';

extract.innerText=JSON.stringify(objectArray);
extractBtn.addEventListener('click',function(){
    extractField.value=JSON.stringify(extractKey(objectArray,mapKey));
})

// --------------------------------------------------------------

//      EXTRACT FULL NAME

const nameArray=[
    {
        first:  'Mark',
        last:   'Johns'
    },
    {
        first:  'Siera',
        last:   'Pedersen'
    },
    {
        first:  'Ryan',
        last:   'Brunski'
    }
];
const key1='first';
const key2='last';

function extractFullName(arr,key1,key2){
    let newArr=[];
    arr.map(function(val){
        newArr.push(`${val[key1]} ${val[key2]}`);
    })
    return newArr;
}

fullName.innerText=JSON.stringify(nameArray);
fullNameBtn.addEventListener('click',function(){
    fullNameField.value=JSON.stringify(extractFullName(nameArray,key1,key2));
})

// ----------------------------------------------------------------------------------------------------------------

//      FILTER BY VALUE

const peopleArray=[
    {
        name:   'Mark',
        male:   true
    },
    {
        name:   'Siera',
        female: true
    },
    {
        name:   'Toni',
        male:   true
    },
    {
        name:   'Morgan',
        female: true
    },
];

function filterByValue(arr,key){
    let newArr=[];
    arr.filter(function(value){
        if(key in value){
            newArr.push(value['name']);
        }
    })
    return newArr;
}

filterVal.innerText=`${JSON.stringify(peopleArray)}
(no girls allowed)`;
filterValBtn.addEventListener('click',function(){
    filterValField.value=JSON.stringify(filterByValue(peopleArray,'male'));
})

// --------------------------------------------------------------

//      FIND

const goodVal=7;
const badVal=23;
function find(arr, value) {
    let result=arr.filter(function(val){
        return val===value;
    });
    return result.length>0?result[0]:undefined;
}

findP.innerText=JSON.stringify(numArray);
findBtnGood.addEventListener('click',function(){
    findField.value=JSON.stringify(find(numArray,goodVal));
})
findBtnBad.addEventListener('click',function(){
    findField.value=JSON.stringify(find(numArray,badVal));
})

// --------------------------------------------------------------

//      FIND IN OBJ

function findInObj(arr,key,value){
    return arr.filter(function(val){
        return val[key]===value;
    })[0];
}

findObj.innerText=`${JSON.stringify(peopleArray)}
(first girl)`;
findObjBtn.addEventListener('click',function(){
    findObjField.value=JSON.stringify(findInObj(peopleArray,'female',true));
})

// --------------------------------------------------------------

//      DOUBLE ODD NUMBERS

function doubleOddNumbers(arr){
    let newArr=[];
    return arr
    .filter(function(val){
        return val%2!==0;
    })
    .map(function(val){
        return val*2;
    })
}

dubOdd.innerText=JSON.stringify(numArray);
dubOddBtn.addEventListener('click',function(){
    dubOddField.value=JSON.stringify(doubleOddNumbers(numArray));
})