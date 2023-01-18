document.addEventListener('DOMContentLoaded', function(){

     let submitButton = document.getElementById('application_btn');
     let firstName = document.getElementById('first_name');
     let lastName = document.getElementById('last_name');
     let email = document.getElementById('email');
     let phoneNumber = document.getElementById('phoneNumber');
     let gender = document.getElementById('gender');
     let birthday = document.getElementById('birthday');
     let businessName = document.getElementById('buisness-name');
     let businessAddress = document.getElementById('buisness-address');
     let businessType = document.getElementById('buisness-type');
     let isBusinessRegistered = document.getElementById('isBuisRegistered');


     function disableButton(){
          if(firstName.value == "" || lastName.value == "" || email.value == "" || phoneNumber.value == "" || gender.value == "" || birthday.value == "" || businessName.value == "" || businessAddress.value == "" || businessType.value == "" || isBusinessRegistered.value == ""){
               submitButton.disabled = true;
          }else{
               submitButton.disabled = false;
          }     
     }
     isBusinessRegistered.addEventListener('change', disableButton);

     

     const user = {}
     document.getElementById('application_btn').addEventListener('click', function(e){
          e.preventDefault();
          user.firstName = document.getElementById('first_name').value;
          user.lastName = document.getElementById('last_name').value;
          user.email = document.getElementById('email').value;
          user.phoneNumber = document.getElementById('phoneNumber').value;
          user.gender = document.getElementById('gender').value;
          user.birthday = document.getElementById('birthday').value;
          user.businessName = document.getElementById('buisness-name').value;
          user.businessAddress = document.getElementById('buisness-address').value;
          user.businessType = document.getElementById('buisness-type').value;
          user.isBusinessRegistered = document.getElementById('isBuisRegistered').value;
          console.log(user);

          $.ajax({
               url: 'https://first-react-app-bb5b8-default-rtdb.firebaseio.com/meetups.json',
               headers: {
                    'content-Type': 'application/json'
                },
               type: 'post',
               dataType: 'json',
               cache: false,
               data: JSON.stringify(user) ,
               success: function (data, status) {
                    if (status == 'sucessfull'){
                         console.log('Sucessful')
                         clearForm();
                    }
                    
               },
               error: (err) => {
                    console.log(err);
               }
           });
         
          
          
     })

     function clearForm(){
          document.getElementById('first_name').value = "";
          document.getElementById('last_name').value = "";
          document.getElementById('email').value = "";
          document.getElementById('phoneNumber').value = "";
          document.getElementById('gender').value = "";
          document.getElementById('birthday').value = "";
          document.getElementById('buisness-name').value = "";
          document.getElementById('buisness-address').value = "";
          document.getElementById('buisness-type').value = "";
          document.getElementById('isBuisRegistered').value = "";
     }
     

     //For Validating Email
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     function validateEmail(element){
          ['change','keyup'].forEach(event => {
               element.addEventListener(event, function(){
                    if(element.value !== " "){
                         if(element.value.match(mailformat)){
                              element.style = 'border: 0px solid transparent';
                              document.getElementById('validationText').innerHTML = '';
                              document.getElementById('validationText').classList.remove('text-danger');
                         }else{
                              element.style = 'border: 1px solid red';
                              document.getElementById('validationText').innerHTML = 'Invalid Email';
                              document.getElementById('validationText').classList.add('text-danger');
                         }
                    }
                    
               });
          },false)
     }
     validateEmail(email);
     
     // For Submit  Button
     

      
});



$(document).ready(function(){
     $('#Other-business-type-div').hide();
     $('#insertSpace').hide();
     let businessType = document.querySelector('#buisness-type')
     $('#buisness-type').change(function(){
          if(businessType.value == 'Others'){
               $('#Other-business-type-div').show(500);
               $('#insertSpace').show(500);
          }else{
               $('#Other-business-type-div').hide(500);
               $('#insertSpace').hide(500);
          }
           
     })
});


