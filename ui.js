
class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
        this.input=document.querySelector('#searchUser').value;
        
    }

    showProfile(user) {
       this.profile.innerHTML=`
       <div class='card card-body my-4 mx-2'>
          <div class='row'>
            <div class='col-md-3'>
                <img class='img-fluid mb-2' src='${user.avatar_url}'>
                <a href="${user.html_url}" target='_blank' class= 'btn btn-success btn-block mb-4' >View Profile</a>
            </div>
                <div class='col-md-9'>
                    <span class='badge badge-primary'>Publicrepos:${user.public_repos}</span>
                    <span class='badge badge-success'>User Id:${user.id}</span>
                    <span class='badge badge-success'>User Followers::${user.followers}</span>
                    <span class='badge badge-success'>User Following:${user.following}</span>
                    <span class='badge badge-info'>Name:${user.name}</span>
                    <span class='badge badge-secondary'>Location:'${user.location}'</span>

                    <br>

                    <ul class="list-group mt-3">
                      <li class="list-group-item">${user.company}</li>
                      <li class="list-group-item">${user.blog}</li>
                      <li class="list-group-item">${user.created_at}</li>
                    </ul>
                

                </div>
          </div>
      </div>
       `
      
   }
   
   

  

   clrProfile(){
       this.profile.innerHTML='';
   }

   showAlrt(classnam,mgs){
    this.clrAlert();
    let div=document.createElement('div');
    div.className=classnam;
    div.appendChild(document.createTextNode(mgs));
    let card =document.querySelector('.card');
    let cart_body =document.querySelector('.card-body');
    card.insertBefore(div,cart_body);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    },9000)

    

   }
   clrAlert(){
       let alrt=document.querySelector('.alert');
       if(alrt){
           alrt.remove();
       }
   }
   
}