function validarEmail(email){

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);

}

function toggleMenu(id){

  const menu = document.getElementById(id);

  if(!menu) return;

  if(menu.style.maxHeight && menu.style.maxHeight !== "0px"){

    menu.style.maxHeight = "0px";

  } else {

    menu.style.maxHeight = "180px";

  }

}

async function enviarCorreo(){

  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje");

  if(!correo){

    alert("Ingresa un correo");
    return;

  }

  if(!validarEmail(correo)){

    alert("Correo no válido");
    return;

  }

  try{

    await fetch(
      "https://script.google.com/macros/s/AKfycbyFCOnYeglGWhAQpZBe2yn58ZJT81-7ffNMvXjJa1qmcHuaM3HQWoOWMXwLHcLiqnXQ/exec",
      {
        method: "POST",

        body: JSON.stringify({
          correo: correo,
          key: "ABC123"
        })

      }
    );

    mensaje.innerHTML = "✅ Correo registrado correctamente";
    mensaje.style.color = "#9dffb2";

    document.getElementById("correo").value = "";

  } catch(error){

    mensaje.innerHTML = "❌ Error al registrar";
    mensaje.style.color = "#ff8b8b";

    console.error(error);

  }

}