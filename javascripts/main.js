    let buttonUp = document.getElementById("button_up")
    let buttonDown = document.getElementById("button_down")
    buttonDown.classList.add('show_button_down')

    document.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            buttonUp.classList.add('show_button_up')
            buttonDown.classList.remove('show_button_down')
        } else {
            buttonDown.classList.add('show_button_down')
            buttonUp.classList.remove('show_button_up')
        }
    })

    buttonUp.onclick = () => {
    window.scrollTo(0, 0)
    }

    buttonDown.onclick = () => {
    window.scrollTo(0, document.body.scrollHeight)
    }

function cambiarForma() {

    var formaSeleccionada = document.getElementById("forma").value;
    var botones = document.getElementsByClassName("boton");
    clearInterval(darkModeInterval);
    darkModeInterval = null;

    var bg1 = document.getElementById("seccion1").getAttribute("data-bg1");
    var bg2 = document.getElementById("seccion1").getAttribute("data-bg2");
    var bg3 = document.getElementById("seccion1").getAttribute("data-bg3");
    var bg4 = document.getElementById("seccion1").getAttribute("data-bg4");


    // Crear un arreglo con las URLs de fondo
    var backgrounds = [bg1, bg2, bg3,bg4];

    // Seleccionar al azar una URL de fondo
    var fondoSeleccionado = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // Aplicar el fondo seleccionado a la primera seccion
    document.getElementById("seccion1").style.backgroundImage = "url('" + fondoSeleccionado + "')";

    
    
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("seleccionado");
        botones[i].classList.remove("delaforma");
        botones[i].classList.remove("nodelaforma");
    }

    if (formaSeleccionada === "pleno") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5  || i === 6 || i === 7 || i === 8) {
                
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
                
            }
            
        }
    }

    if (formaSeleccionada === "formadeo") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 ||  i === 1 || i === 2 || i === 3 || i === 5 || i === 6  || i === 7 || i === 8) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 4 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }

    if (formaSeleccionada === "formadeh") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 2 || i === 3 || i === 4 || i === 5  || i === 6 || i === 8) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 1 || i === 7 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }

    if (formaSeleccionada === "formadec") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 1 || i === 2 || i === 3  || i === 6 || i === 7 || i === 8) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 4 || i === 5 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }
    if (formaSeleccionada === "formadeu") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 2 || i === 3 || i === 5  || i === 6 || i === 7 || i === 8) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 1 || i === 4 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }
    if (formaSeleccionada === "formaden") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 1 || i === 2 || i === 3  || i === 5 || i === 6 || i === 8) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 4 || i === 7 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }
    if (formaSeleccionada === "formadet") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 1 || i === 2 || i === 4  || i === 7 ) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 3 || i === 6 || i === 5 || i === 8 ) {
                botones[i].classList.add("nodelaforma")
                botones[i].setAttribute("disabled", "true");
            }
        }
    }

    if (formaSeleccionada === "formadex") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 2 || i === 4  || i === 6 || i === 8) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 1 || i === 3 || i === 5 || i === 7 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }

    if (formaSeleccionada === "formade+") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 1 || i === 3 || i === 4  || i === 5 || i === 7) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 0 || i === 2 || i === 6 || i === 8 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }

    if (formaSeleccionada === "formadel") {
        for (var i = 0; i < botones.length; i++) {
            if (i === 0 || i === 3 || i === 6  || i === 7 || i === 8) {
                botones[i].classList.add("delaforma");
                botones[i].removeAttribute("disabled");
            }
            if (i === 1 || i === 2 || i === 4 || i === 5 ) {
                botones[i].classList.add("nodelaforma");
                botones[i].setAttribute("disabled", "true");
            }
        }
    }
    
    document.body.classList.add("dark-mode");
}

        

let darkModeInterval; // Variable para almacenar el intervalo del modo oscuro

        function cambiar(boton) {
            boton.classList.toggle("delaforma");
            boton.classList.toggle("seleccionado");
            verificarModoOscuro();
        }

        function verificarModoOscuro() {
            const botones = document.getElementsByClassName("boton");
            const formaSeleccionada = document.getElementById("forma").value;
            const todosDeLaForma = Array.from(botones).some(boton => boton.classList.contains("delaforma"));
            const todosSeleccionados = Array.from(botones).every(boton => boton.classList.contains("seleccionado"));
            if (!todosDeLaForma  ) {
                if (!darkModeInterval) {
                    darkModeInterval = setInterval(toggleModoOscuro, 200);
                }
            } else {
                clearInterval(darkModeInterval);
                darkModeInterval = null;
            }
        }

        function toggleModoOscuro() {
            document.body.classList.toggle("dark-mode");
        }

        function restaurar() {
            const botones = document.getElementsByClassName("boton");
            for (const boton of botones) {
                boton.classList.remove("seleccionado");
                boton.classList.remove("delaforma");
                boton.classList.remove("nodelaforma");
                boton.removeAttribute("disabled");
                desactivarTodosLosBotones();
                document.body.classList.add("dark-mode");

            }

            const formaSelect = document.getElementById("forma");
            formaSelect.value = ""; // Selecciona la opción por defecto "Forma de Juego"
            formaSelect.disabled = false; // Desactiva el select

            clearInterval(darkModeInterval);
            darkModeInterval = null;
              
        }
        function desactivarTodosLosBotones() {
            const botones = document.getElementsByClassName("boton");
            for (const boton of botones) {
                boton.classList.add("nodelaforma");
                boton.setAttribute("disabled", "true");
            }
        }

        // Llama a la función al cargar la página
        window.addEventListener("load", desactivarTodosLosBotones);
        window.addEventListener("load", toggleModoOscuro);

       //Leemos los parámetros en la URL
       
       
       const paramURL = window.location.search
       console.log(paramURL)
       

       // Creamos un instancia de URLSearchParams
       const parametrosURL = new URLSearchParams(paramURL);
       console.log(parametrosURL);


       // Recorremos todos los parámetros de la URL

       for (let valoresURL of parametrosURL) {

            console.log(valoresURL);
        

       }

        // Usamos el metodo GET para obtener cada uno de los valores de los parámetros.

        const b1 = parametrosURL.get('b1');
        const n1 = parametrosURL.get('n1');
        const g1 = parametrosURL.get('g1');
        
        const b2 = parametrosURL.get('b2');
        const n2 = parametrosURL.get('n2');
        const g2 = parametrosURL.get('g2');
        
        const b3 = parametrosURL.get('b3');
        const n3 = parametrosURL.get('n3');
        const g3 = parametrosURL.get('g3');



        // Mostrar los paramétros en el HTML

        // Obtenemos el elemento con el id "resultado"
        const resultadoB1 = document.getElementById('b1');
        const resultadoN1 = document.getElementById('n1');
        const resultadoG1 = document.getElementById('g1');
        const resultadoB2 = document.getElementById('b2');
        const resultadoN2 = document.getElementById('n2');
        const resultadoG2 = document.getElementById('g2');
        const resultadoB3 = document.getElementById('b3');
        const resultadoN3 = document.getElementById('n3');
        const resultadoG3 = document.getElementById('g3');

          
        // Asignamos al contenido del elemento el valor de b1
        resultadoB1.textContent = `${b1}`;
        resultadoN1.textContent = `${n1}`;
        resultadoG1.textContent = `${g1}`;
        resultadoB2.textContent = `${b2}`;
        resultadoN2.textContent = `${n2}`;  
        resultadoG2.textContent = `${g2}`;
        resultadoB3.textContent = `${b3}`;
        resultadoN3.textContent = `${n3}`;
        resultadoG3.textContent = `${g3}`;

        