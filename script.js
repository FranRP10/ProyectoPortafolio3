document.addEventListener('DOMContentLoaded', function(){
    liteners()
})


    function liteners(){
        const burger = document.querySelector('#burger');

        burger.addEventListener('click', navegacionResponsive)

    }

    function navegacionResponsive(){
        const menu = document.querySelector('.navegacion');

        if(menu.classList.contains('mostrar')){
            menu.classList.remove('mostrar');
        } else {
            menu.classList.add('mostrar');
        }

    }



 

  
 