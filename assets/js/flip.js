document.addEventListener('DOMContentloaded', function(){
     document.querySelector('more_btn').addEventListener('click', function(){
          document.querySelectorAll('events').classList.toggle('flip');
     });
})