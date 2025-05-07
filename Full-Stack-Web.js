function showmenu(){
    // alert('you still remember how to handle events')
    const menu = document.getElementById('sub-menu')
    menu.classList.toggle('show-menu')
}


const dee = document.querySelectorAll('.question')
 dee.forEach((accordion) =>{
    accordion.addEventListener('click', () => {
        accordion.nextElementSibling.classList.toggle('show-answer')

        // to close already opened accordion
       dee.forEach((item) =>{
            if(item !== accordion){
                item.nextElementSibling.classList.remove('show-answer');
            }
        });
      
    });
});