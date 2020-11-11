document.addEventListener('DOMContentLoaded', () => {

    let numPag = 0;
    let bien = false;
    let totalPag = 2;
    let enlace = "";

    let objetoUsuario = {
        nombre : "",
        apellidos : "",
        fecha : "",
        direccion : "",
        cPostal : "",
        provincia : "",
        municipio : "" 
    }



    function principal() {
        bien = false;
        document.getElementById("cButton").disabled = true;
        let divTitulo = document.createElement("DIV");
        divTitulo.setAttribute("id", "dTitulo");
        document.body.appendChild(divTitulo);
    
        let titulo = document.createElement("H1");
        titulo.textContent = "Hola";
        divTitulo.appendChild(titulo);
        
        let texto = document.createElement("p");
        texto.textContent = "Escribe la URL debajo";
        divTitulo.appendChild(texto);
    
        let url = document.createElement("INPUT");
        url.setAttribute("type", "text");
        url.setAttribute("id", "url");
        url.setAttribute("placeholder", "Ejemplo: https://www.google.es");
        divTitulo.appendChild(url);

        url.addEventListener("keyup", function () {
            if (url.value != "") {
                document.getElementById("cButton").disabled = false;
                enlace = url.value;
            }
            else{
                document.getElementById("cButton").disabled = true;
            }
        });
    }

    if (numPag == 0) {
        principal()
    }
   
    function formulario() {
        if (document.getElementById("dTitulo") != null) {
            document.getElementById("dTitulo").remove();
        }

        if (document.getElementById("divDatos") != null) {
            document.getElementById("divDatos").remove();
        }
        console.log(enlace);
        let divForm = document.createElement("DIV");
        divForm.setAttribute("id", "dForm");
        document.body.appendChild(divForm);



        let form = document.createElement("FORM");
        form.setAttribute("id", "myForm");
        document.getElementById("dForm").appendChild(form);

        let nameTitulo = document.createElement("P");
        nameTitulo.textContent = "Nombre:";
        document.getElementById("myForm").appendChild(nameTitulo);
        let name = document.createElement("INPUT");
        name.setAttribute("type", "text");
        name.setAttribute("id", "nombre");
        name.setAttribute("placeholder", "Nombre");
        document.getElementById("myForm").appendChild(name);

        let nameError = document.createElement("P");
        nameError.setAttribute("id", "nameError");
        nameError.setAttribute("class", "error");
        nameError.textContent = "Falta Nombre";
        nameError.style.display= "none";
        document.getElementById("myForm").appendChild(nameError);
    
        let surnameTitulo = document.createElement("P");
        surnameTitulo.textContent = "Apellidos:";
        document.getElementById("myForm").appendChild(surnameTitulo);
        let surname = document.createElement("INPUT");
        surname.setAttribute("type", "text");
        surname.setAttribute("id", "apellidos");
        surname.setAttribute("placeholder", "Apellidos");
        document.getElementById("myForm").appendChild(surname);

        let surnameError = document.createElement("P");
        surnameError.setAttribute("id", "surnameError");
        surnameError.setAttribute("class", "error");
        surnameError.textContent = "Falta apellidos";
        surnameError.style.display= "none";
        document.getElementById("myForm").appendChild(surnameError);

        let fecha = document.createElement("P");
        fecha.textContent = "Fecha:";
        document.getElementById("myForm").appendChild(fecha);
        let dBirth = document.createElement("INPUT");
        dBirth.setAttribute("type", "date");
        dBirth.setAttribute("id", "dBirth");
        dBirth.setAttribute("placeholder", "Fecha de nacimiento");
        document.getElementById("myForm").appendChild(dBirth);

        let fechaError = document.createElement("P");
        fechaError.setAttribute("id", "fechaError");
        fechaError.setAttribute("class", "error");
        fechaError.textContent = "Falta fecha de nacimiento";
        fechaError.style.display= "none";
        document.getElementById("myForm").appendChild(fechaError);

        let direccion = document.createElement("P");
        direccion.textContent = "Dirección:";
        document.getElementById("myForm").appendChild(direccion);
        let adress = document.createElement("INPUT");
        adress.setAttribute("type", "text");
        adress.setAttribute("id", "adress");
        adress.setAttribute("placeholder", "Dirección");
        document.getElementById("myForm").appendChild(adress);

        
        let postal = document.createElement("P");
        postal.textContent = "Código postal:";
        document.getElementById("myForm").appendChild(postal);
        let pCode = document.createElement("INPUT");
        pCode.setAttribute("type", "text");
        pCode.setAttribute("id", "pCode");
        pCode.setAttribute("maxlength", "5");
        pCode.setAttribute("placeholder", "Código postal");
        document.getElementById("myForm").appendChild(pCode);

        let postalError = document.createElement("P");
        postalError.setAttribute("id", "postalError");
        postalError.setAttribute("class", "error");
        postalError.textContent = "Falta código postal ";
        postalError.style.display= "none";
        document.getElementById("myForm").appendChild(postalError);

    // -- Select -- //
    let provin = document.createElement("P");
    provin.textContent = "Provicincia:";
    document.getElementById("myForm").appendChild(provin);
        let provincia = document.createElement("SELECT");
        provincia.setAttribute("id", "mySelect");
        
        provincia.setAttribute("placeholder", "Provincia");
        document.getElementById("myForm").appendChild(provincia);

            let s = document.createElement("option");
            s.text = "Selecciona";
            s.setAttribute("value", "");
            document.getElementById("mySelect").appendChild(s);
    
            let s1 = document.createElement("option");
            s1.text = "Valencia";
            s1.setAttribute("value", "valencia");
            document.getElementById("mySelect").appendChild(s1);

            let s2 = document.createElement("option");
            s2.text = "Alicante";
            s2.setAttribute("value", "alicante");
            document.getElementById("mySelect").appendChild(s2);
            
            let z3 = document.createElement("option");
            z3.text = "Castellón";
            z3.setAttribute("value", "castellon");
            document.getElementById("mySelect").appendChild(z3);
    // -- Fin select -- //

    let provinciaError = document.createElement("P");
    provinciaError.setAttribute("id", "provinciaError");
    provinciaError.setAttribute("class", "error");
    provinciaError.textContent = "Falta provincia";
    provinciaError.style.display= "none";
    document.getElementById("myForm").appendChild(provinciaError);

        let municipio = document.createElement("P");
        municipio.textContent = "Municipio:";
        document.getElementById("myForm").appendChild(municipio);
        let town = document.createElement("INPUT");
        town.setAttribute("type", "text");
        town.setAttribute("placeholder", "Municipio");
        town.style.textTransform = "upperCase";
        town.setAttribute("id", "municipio");
        document.getElementById("myForm").appendChild(town);

        let municipioError = document.createElement("P");
        municipioError.setAttribute("class", "error");
        municipioError.setAttribute("id", "municipioError");
        municipioError.textContent = "Falta municipio";
        municipioError.style.display= "none";
        document.getElementById("myForm").appendChild(municipioError);

        document.getElementById("nombre").required = true;
        document.getElementById("apellidos").required = true;
        document.getElementById("dBirth").required = true;
        document.getElementById("pCode").required = true;
        document.getElementById("mySelect").required = true;
        document.getElementById("municipio").required = true;

        let divFormerror = document.createElement("DIV");
        divFormerror.setAttribute("id", "divFormerror");
        form.before(divFormerror);

        let nameError2 = document.createElement("P");
        nameError2.setAttribute("id", "nameError2");
        nameError2.setAttribute("class", "error");
        nameError2.textContent = "Falta Nombre";
        nameError2.style.display= "none";
        document.getElementById("divFormerror").appendChild(nameError2);

        let surnameError2 = document.createElement("P");
        surnameError2.setAttribute("id", "surnameError2");
        surnameError2.setAttribute("class", "error");
        surnameError2.textContent = "Falta apellidos";
        surnameError2.style.display= "none";
        document.getElementById("divFormerror").appendChild(surnameError2);

        let fechaError2 = document.createElement("P");
        fechaError2.setAttribute("id", "fechaError2");
        fechaError2.setAttribute("class", "error");
        fechaError2.textContent = "Falta fecha de nacimiento";
        fechaError2.style.display= "none";
        document.getElementById("divFormerror").appendChild(fechaError2);

        let postalError2 = document.createElement("P");
        postalError2.setAttribute("id", "postalError2");
        postalError2.setAttribute("class", "error");
        postalError2.textContent = "Falta código postal ";
        postalError2.style.display= "none";
        document.getElementById("divFormerror").appendChild(postalError2);

        let provinciaError2 = document.createElement("P");
        provinciaError2.setAttribute("id", "provinciaError2");
        provinciaError2.setAttribute("class", "error");
        provinciaError2.textContent = "Falta provincia";
        provinciaError2.style.display= "none";
        document.getElementById("divFormerror").appendChild(provinciaError2);

        let municipioError2 = document.createElement("P");
        municipioError2.setAttribute("class", "error");
        municipioError2.setAttribute("id", "municipioError2");
        municipioError2.textContent = "Falta municipio";
        municipioError2.style.display= "none";
        document.getElementById("divFormerror").appendChild(municipioError2);
    }

    function comprobar() {
        let iNombre = document.getElementById("nombre");
        let iApellidos = document.getElementById("apellidos");
        let iDBirth= document.getElementById("dBirth");
        let iPCode = document.getElementById("pCode");
        let iMyselect = document.getElementById("mySelect");
        let iMunicipio = document.getElementById("municipio");
        let iAdress = document.getElementById("adress");

        objetoUsuario.direccion = iAdress.value;

        if (iNombre.value == "") {
            document.getElementById("nameError").style.display= "block";
            document.getElementById("nameError2").style.display= "block";
        }
        else{
            objetoUsuario.nombre = iNombre.value
            document.getElementById("nameError").style.display= "none";
            document.getElementById("nameError2").style.display= "none";
        }
        if (iApellidos.value == "") {
            document.getElementById("surnameError").style.display= "block";
            document.getElementById("surnameError2").style.display= "block";
        }
        else{
            objetoUsuario.apellidos = iApellidos.value
            document.getElementById("surnameError").style.display= "none";
            document.getElementById("surnameError2").style.display= "none";
        }
        if (iDBirth.value == "") {
            document.getElementById("fechaError").style.display= "block";
            document.getElementById("fechaError2").style.display= "block";
        }
        else{
            objetoUsuario.fecha = iDBirth.value
            document.getElementById("fechaError").style.display= "none";
            document.getElementById("fechaError2").style.display= "none";
        }
        if (iPCode.value == "" || isNaN(iPCode.value)) {
            document.getElementById("postalError").style.display= "block";
            document.getElementById("postalError2").style.display= "block";
        }
        else{
            objetoUsuario.cPostal = iPCode.value
            document.getElementById("postalError").style.display= "none";
            document.getElementById("postalError2").style.display= "none";
        }
        if (iMyselect.value == "") {
            document.getElementById("provinciaError").style.display= "block";
            document.getElementById("provinciaError2").style.display= "block";
        }
        else{
            objetoUsuario.provincia = iMyselect.value
            document.getElementById("provinciaError").style.display= "none";
            document.getElementById("provinciaError2").style.display= "none";
        }
        if (iMunicipio.value == "") {
            document.getElementById("municipioError").style.display= "block";
            document.getElementById("municipioError2").style.display= "block";
        }
        else{
            objetoUsuario.municipio = iMunicipio.value
            document.getElementById("municipioError").style.display= "none";
            document.getElementById("municipioError2").style.display= "none";
        }
        if (iNombre.value != "" && iApellidos.value != "" && iDBirth.value != "" && iPCode.value != "" && iMyselect.value != "" && iMunicipio.value != "" && !isNaN(iPCode.value)) {
            bien = true;
            totalPag = 3;
            pagina(totalPag);
        }
        
    }

    function pagDatos() {
        numPag = 3;
        document.getElementById("dForm").remove();
        let divDatos = document.createElement("DIV");
        divDatos.setAttribute("id", "divDatos");
        document.body.appendChild(divDatos);

        let nombre = document.createElement("H3");
        nombre.textContent = "Nombre:";
        divDatos.appendChild(nombre);
        let nombrep = document.createElement("p");
        nombrep.textContent = objetoUsuario.nombre;
        divDatos.appendChild(nombrep);

        let apellidos = document.createElement("H3");
        apellidos.textContent = "Apellidos:";
        divDatos.appendChild(apellidos);
        let apellidosp = document.createElement("p");
        apellidosp.textContent = objetoUsuario.apellidos;
        divDatos.appendChild(apellidosp);

        let fecha = document.createElement("H3");
        fecha.textContent = "Fecha:";
        divDatos.appendChild(fecha);
        let fechap = document.createElement("p");
        fechap.textContent = objetoUsuario.fecha;
        divDatos.appendChild(fechap);

        let direccion = document.createElement("H3");
        direccion.textContent = "Dirección:";
        divDatos.appendChild(direccion);
        let direccionp = document.createElement("p");
        direccionp.textContent = objetoUsuario.direccion;
        divDatos.appendChild(direccionp);

        let cPostal = document.createElement("H3");
        cPostal.textContent = "Código Postal:";
        divDatos.appendChild(cPostal);
        let cPostalp = document.createElement("p");
        cPostalp.textContent = objetoUsuario.cPostal;
        divDatos.appendChild(cPostalp);

        let provincia = document.createElement("H3");
        provincia.textContent = "Provicincia:";
        divDatos.appendChild(provincia);
        let provinciap = document.createElement("p");
        provinciap.textContent = objetoUsuario.provincia;
        divDatos.appendChild(provinciap);

        let municipio = document.createElement("H3");
        municipio.textContent = "Municipio:";
        divDatos.appendChild(municipio);
        let municipiop = document.createElement("p");
        municipiop.textContent = objetoUsuario.municipio;
        divDatos.appendChild(municipiop);

        let aceptar = document.createElement("BUTTON");
        aceptar.textContent = "Aceptar";
        aceptar.id = "acep"
        divDatos.appendChild(aceptar);

        let atras = document.createElement("BUTTON");
        atras.textContent = "Atrás";
        atras.id = "atras"
        divDatos.appendChild(atras);
         
        document.getElementById("acep").addEventListener("click", function () {
            
        });
        
        document.getElementById("atras").addEventListener("click", function () {
            document.getElementById("divDatos").remove();
            numPag = 1;
            bien = false;
            formulario();
        });


    }

    function pagina(pag) {

        if (pag == 0) {
            principal()
            document.getElementById("dForm").remove();
        }
        if (pag == 1 || pag == 2) {
            if (pag == 1) {
                formulario()
            }
            
            if (!bien && pag == 2) {
                comprobar()
            }
        }
        if (pag == 3) {
            pagDatos();
        }
    }

    document.getElementById("cButton").addEventListener("click", function () {
        if (numPag < totalPag) {
            numPag += 1;
            console.log(numPag);
        }
        pagina(numPag);
    });

    document.getElementById("vButton").addEventListener("click", function () {
        if (numPag == 2 && numPag != 3) {
            numPag = 0;
            pagina(numPag);
        }
        if (numPag == 3) {
            numPag = 1 ;
            bien = false;
            pagina(numPag);
        }
        else if (numPag > 0) {
            numPag -= 1;
            pagina(numPag);
            console.log(numPag);
        }
    });


});