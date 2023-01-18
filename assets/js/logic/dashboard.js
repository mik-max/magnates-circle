document.addEventListener("DOMContentLoaded", function(){

     let container = document.getElementById('applicantsDiv');
     let alertDiv = document.getElementById('alertDiv');
     let dismis = `<button type="button" class="close" data-dismiss="alert">&times;</button>`
     document.getElementById('accept').addEventListener('click', function(){
          alertDiv.classList.remove('alert-danger');
          alertDiv.classList.add('alert-success', 'alert-dismissible');
          alertDiv.innerHTML = 'Application has been succeefully accepted.'
          alertDiv.insertAdjacentHTML('beforeend', dismis);

     });
     document.getElementById('reject').addEventListener('click', function(){
          alertDiv.classList.remove('alert-success');
          alertDiv.classList.add('alert-danger', 'alert-dismissible');
          alertDiv.innerHTML = 'Application has been succeefully rejected.'
          let dismis = `<button type="button" class="close" data-dismiss="alert">&times;</button>`
          alertDiv.insertAdjacentHTML('beforeend', dismis);
     })

});