let string='';

let buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('.input').value= string;

        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('.input').value= string;

        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector('.input').value= string;

        }

    }) 

})

function toggleMode(){

    let mode = document.getElementById('flexSwitchCheckDefault');
    if(mode.checked==true){
        document.body.style='background-color:black; color:white;';
        document.getElementById('change').innerHTML='Enable Light Mode';
    }
    else{
        document.body.style='background-color:white; color:black;';
        document.getElementById('change').innerHTML='Enable Dark Mode';
    }

}



