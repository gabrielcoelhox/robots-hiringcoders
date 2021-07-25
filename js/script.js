const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let data = {
        usuario,
        senha
    }
    let convertData = JSON.stringify(data)
    localStorage.setItem('login', convertData);

    if (usuario === "admin" && senha === "admin") {
        window.location.replace("index.html");
    }
    else{
        alert("usuário e senha incorretos");
    }
})