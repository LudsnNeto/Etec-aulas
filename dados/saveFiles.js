var cadForm = document.getElementById("cadUser");


function saveForm() {
        if(typeof(Storage) !== "loginUser"){
            if(localStorage.cont){
                localStorage.cont = Number (localStorage.cont) +1;
            } else {
                localStorage.cont = 1;
            }
                
                cad = document.getElementById('nameUser').value + ' - ' + document.getElementById('age').value + ' anos';
                localStorage.setItem("cad_" + localStorage.cont ,cad);
                } else {

            }
    
    var nameUser = document.getElementById('nameUser').value;
    var ageUser = document.getElementById('age').value;

            let users = new Array();
                //string para objeto
                if(localStorage.hasOwnProperty('users')){
                    users = JSON.parse(localStorage.getItem('users'));
                }
                //objeto para instring
                users.push({nameUser, ageUser})
                localStorage.setItem('users', JSON.stringify(users));
                //mostra valores armazenados das variaveis
                document.getElementById("infoUser").insertAdjacentHTML('beforeend', "Olá " + nameUser);

                //localStorage.removeItem("users");
                //Remove localStorage ^

}


