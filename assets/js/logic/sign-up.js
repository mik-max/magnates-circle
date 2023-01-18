document.addEventListener("DOMContentLoaded", function(){
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
          const i = params.getAll('name');
          console.log(i);
     }

     


     let userPassword = document.getElementById('password');
     let userConfirmPassword = document.getElementById('confirmPassword');
     let validationText = document.getElementById('validationText');
     let signUpBtn = document.getElementById("signUpBtn");
     function checkPassword(password, confirmPassword){
          confirmPassword.addEventListener('keyup', function(){
               if(confirmPassword.value == password.value){
                    confirmPassword.style = 'border: 1px solid #ccc';
                    validationText.innerHTML = '';
                    validationText.classList.remove('red-text');
               }
               else{
                    confirmPassword.style = 'border: 1px solid red';
                    validationText.innerHTML = 'Password does not match';
                    validationText.classList.add('red-text');
               }
          })
     }
     checkPassword(userPassword, userConfirmPassword);
     function disableButton(){
          if(password.value == ""){
               signUpBtn.disabled = true;
          }else{
               signUpBtn.disabled = false;
          }     
     }
     userPassword.addEventListener('change', disableButton);
     const user = {};
     document.getElementById("signUpBtn").addEventListener('click', function(e){
          e.preventDefault();
          user.firstName = document.getElementById('first_name').value;
          user.lastName = document.getElementById('last_name').value;
          user.email = document.getElementById('email').value;
          user.password = document.getElementById('password').value;
          console.log(user);
          clearForm();
     });
     function clearForm(){
          document.getElementById('first_name').value = "";
          document.getElementById('last_name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('password').value = "";
          document.getElementById('confirmPassword').value = "";
     }

     

     /** checkPassword(password, confirmPassword) is a function that accepts two arguments which are the password element and the confirm passowrd element. The function checks if the VALUE of the confirmPassword is equal to that of the password on the keyup event. If they are valid, it validates the process else it throws an error. */
});