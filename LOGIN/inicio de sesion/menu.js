let btnMenu = document.querySelector(".btn_menu");
let listaMenu = document.querySelector(".lista_de_menu_de_inicio");
let nombre = document.getElementById("usuario_inicio_de_sesion");

btnMenu.addEventListener("click", function () {
            listaMenu.classList.toggle("active");
        });
        
        document.addEventListener("click", function (e) {
            if (!btnMenu.contains(e.target) && !listaMenu.contains(e.target)) {
                listaMenu.classList.remove("active");
            };
        });


