function saveForm() {
    if(typeof(Storage) !== "loginUser"){

        if(localStorage.cont){
            sessionStorage.cont = Number (localStorage.cont) +1;
        } else {
            localStorage.cont = 1;
        }

        cad = document.getElementById('nameUser').value + ';' +document.getElementById('age');
        localStorage.setItem("cad_" + localStorage.cont,cad);
    } else {

    }

}