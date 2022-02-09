document.addEventListener('DOMContentLoaded', function(){
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
          user.isRegisteredBusiness = document.getElementById('isBuisRegistered').value;
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
    
    

});