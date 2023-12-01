describe('forEach functions',function(){
    let testArray=[1,2,3,4,5];
    let wordTestArray=['hello','world'];
    let objTestArray=[{1:1},{2:2}];
    let wordTest='aUtOmObIlE';
    it('should double each value of the array',function(){
        expect(doubleValues(testArray)).toEqual([2,4,6,8,10]);
    })
    it('should only return even numbers',function(){
        expect(onlyEvenValues(testArray)).toEqual([2,4]);
    })
    it('should only return the first and last letters of a string',function(){
        expect(showFirstAndLast(wordTestArray)).toEqual(['ho','wd']);
    })
    it('should add a key and a value to an object in an array',function(){
        let newKey='Hello';
        let newVal='World';
        expect(addKeyAndValue(objTestArray,newKey,newVal)).toEqual(
            [{1:1,Hello:'World'},{2:2,Hello:'World'}]
        );
    })
    it('should count the amount of vowels in each string',function(){
        expect(vowelCount(wordTest)).toEqual({'a':1,'e':1,'i':1,'o':2,'u':1});
    })
})

describe('Map functions',function(){
    let testArray=[1,2,3,4,5];
    let objTestArray=[{first:'Mark',last:'Johns'}];
    it('should double each value using map()',function(){
        expect(doubleValuesWithMap(testArray)).toEqual([2,4,6,8,10]);
    })
    it('should multiply each value by its index',function(){
        expect(valTimesIndex(testArray)).toEqual([0,2,6,12,20]);
    })
    it('should extract the key from a key/value pair',function(){
        expect(extractKey(objTestArray,'first')).toEqual(['Mark']);
        expect(extractKey(objTestArray,'last')).toEqual(['Johns']);
    })
    it('should get a full name from the "first" and "last" key values',function(){
        expect(extractFullName(objTestArray,'first','last')).toEqual(['Mark Johns']);
    })
})

describe('Filter functions',function(){
    let testArray=[1,2,3,4,5];
    it('should filter out keys based on their values',function(){
        expect(filterByValue(peopleArray,'male')).toEqual(['Mark','Toni']);
        expect(filterByValue(peopleArray,'female')).toEqual(['Siera','Morgan']);
    })
    it('should find the element you search for or return "undefined"',function(){
        expect(find(testArray,3)).toEqual(3);
        expect(find(testArray,14)).toEqual(undefined);
    })
    it('should find the first object that match the parameters you set',function(){
        expect(findInObj(peopleArray,'male',true)).toEqual({"name":"Mark","male":true});
        expect(findInObj(peopleArray,'female',true)).toEqual({"name":"Siera","female":true});
    })
    it('should filter out odd numbers in an array and then double them',function(){
        expect(doubleOddNumbers(testArray)).toEqual([2,6,10]);
    })
})