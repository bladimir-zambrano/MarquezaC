/* llamado de formulario */
let form = document.getElementById("formulario");
let btnMenu = document.querySelector(".btn_menu");
let listaMenu = document.querySelector(".lista_menu");
let nombre = document.getElementById("usuario");

/* evento de boton de menu */
btnMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
    if (!btnMenu.contains(e.target) && !listaMenu.contains(e.target)) {
        listaMenu.classList.remove("active");
    };
});
/* evento de formulario */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    /* Validación de campos vacíos */
    if (usuario === "" || password === "" || password2 === "") {
        Swal.fire({
            title: "Error",
            text: "Todos los campos son obligatorios",
            icon: "warning"
        });
        return;
    }


    /* Validación de contraseñas */
    if (password !== password2) {
        Swal.fire({
            title: "Error",
            text: "Las contraseñas no coinciden",
            icon: "error"
        });
        return;
    }

    /* Guardar en localStorage */
    let usuarioObj = {
        usuario: usuario,
        password: password
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioObj));

    /* Mostrar mensaje de éxito */
    Swal.fire({
        title: usuario,
        text: "Registro exitoso",
        icon: "success"
    });

    form.reset();
});
