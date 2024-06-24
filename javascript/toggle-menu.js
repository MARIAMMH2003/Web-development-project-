document.addEventListener('DOMContentLoaded', function() { 
    var checkbox = document.querySelector('input[type="checkbox"]');
     var nav = document.querySelector('.nav1'); 
     checkbox.addEventListener('change', function() {
         if (checkbox.checked) { 
            nav.style.display = 'block'; 
        }
         else if (!nav.contains(event.target) && event.target !== checkbox){
             nav.style.display = 'none'; 
            }
         }); 
        });
