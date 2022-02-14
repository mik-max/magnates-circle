document.addEventListener('DOMContentLoaded', function(){
     function decode(encodedStr) {
          return decodeURIComponent(encodedStr);
     }
     function encode(decodedStr){
          return encodeURIComponent(decodedStr);
     }
     //i%3Dmain%26mode%3Dfront%26sid%3Dde8d49b78a85a322c4155015fdce22c4%26enc%3D%2BHello%2B%26empty%3D
    // https://test.com/hello?name=roger&name=flavio
     const query = decode('i%3Dmain%26mode%3Dfront%26sid%3Dde8d49b78a85a322c4155015fdce22c4%26enc%3D%2BHello%2B%26empty%3D')
     let params = new URLSearchParams(`${query}`);
     for (const param of params) {
          const i = params.getAll('i');
          console.log(i);
     }


     
     const user = {}
     document.getElementById('application_btn').addEventListener('click', function(e){
          e.preventDefault();
          user.firstName = document.getElementById('first_name').value;
          user.lastName = document.getElementById('last_name').value;
          user.email = document.getElementById('email').value;
          user.phoneNumber = document.getElementById('phoneNumber').value;
          user.gender = document.getElementById('gender').value;
          user.birthday = document.getElementById('birthday').value;
          user.businessName = document.getElementById('buis-name').value;
          user.businessAddress = document.getElementById('buis-address').value;
          user.businessType = document.getElementById('buis-type').value;
          user.isBusinessRegistered = document.getElementById('isBuisRegistered').value;
          console.log(user);
          clearForm();
          
     })

     function clearForm(){
          document.getElementById('first_name').value = "";
          document.getElementById('last_name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('phoneNumber').value = "";
          document.getElementById('gender').value = "";
          document.getElementById('birthday').value = "";
          document.getElementById('buis-name').value = "";
          document.getElementById('buis-address').value = "";
          document.getElementById('buis-type').value = "";
          document.getElementById('isBuisRegistered').value = "";
     }
    //Codility test 1
    let arrayOfexcludedNumbers = [];
    function solution(A){
         for(let x = 1; x < 100000; x++){
               let valid = checkAvailability(A, x);
               if(!valid){
                    arrayOfexcludedNumbers.push(x);
               }
          }
        let min = Math.min(...arrayOfexcludedNumbers);
        console.log(min);
        return min;
    }
    function checkAvailability(arrayToCheck, searchValue) {
     return arrayToCheck.some((arrayValues) => { 
         return searchValue === arrayValues;
     });
 }
    solution([1, 2, 3, 8, 5, 6, 7]);


    //Codility test2   BinaryGap
    // NEW recursive function
function getGaps (BinaryArray, gaps) {
     // finding the first one via its index
     const firstOne = BinaryArray.indexOf("1");
     if (firstOne > -1) {
          // new array created taking a slice of original array 
          // from the index of the firstOne + 1 index
          let NewBinaryArray = BinaryArray.slice(firstOne + 1);
          // finding second one via its index in new array slice
          const secondOne = NewBinaryArray.indexOf("1");
          // accounting for no zeros
          if (secondOne > 0) {
               // adding 2 to our gaps array
               gaps.push(secondOne);
          }
 
          // Pass array minus second one and gaps array
          return getGaps(NewBinaryArray.slice(secondOne +1), gaps); 
     }
     
     // if gaps array length is empty return 0
     // otherwise return largest value in array
     return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}
     // our function 
     function solution (N) {
          
          // Tests if our value is an integer 
          // Tests if N is within range
          if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
               // Convert to binary
               const Binary = N.toString(2).split('');
               
               // calling our recursive function with initial empty gaps
               return getGaps(Binary, []);
          }
          
          // default if it doesn't meet the requirements
          return 0;
     }

     // Codility Third test CyclicRotation

     function solution(A, K) {
          if(typeof K == "number" && K >= 0 && K <= 100 && A.length > 0 && A.length<= 100){
              for(let x = 0; x < K; x++){
                  let lastItem = A.pop();
                  A.unshift(lastItem);
              }
               return A;
          }else if(A === []){
              return [];
          }
          else{
              return [];
          }
          
         
          
     }

     // Codility fourth test Odd Occurence In An Array

     function singleOne(arr, arrLen){
          let result =  arr[0];
          // used javascript XOR(^) to find the number that occurs once in the array and then return that number
          //See MDN XOR documentation....
          for(let i = 1; i < arrLen; i++){
              result = result ^ arr[i]; 
          }
          return result;
        }
        function solution(A) {
            const even = A.length % 2;
            if(even == 0 && A == []){
                return 0;
            }else{
                let length = A.length;
               return singleOne(A, length);
            }
        }
      
});