let userinput = document.querySelector('#searchUser');

let btn = document.querySelector('#btn');
let ui = new UI();

btn.addEventListener('click', (e) =>{
    let profile = userinput.value;
    //using fetch api
    if(profile !=''){
        fetch(`https://api.github.com/users/${profile}`)
        .then( response => response.json())
        .then(data =>{
            //console.log(data);
           if(data.message =='Not Found'){
               
               ui.showAlrt('alert alert-danger  m-2','profile Not Found!');

           }
           else{
              ui.showProfile(data);
              console.log(data);
              
              
              
           }
        })
    }
    else{
        ui.clrProfile();
    }

    
   
   
});

