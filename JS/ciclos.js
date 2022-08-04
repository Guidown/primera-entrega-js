function saludar() {
  alert("¡Bienvenido a CelStore!");
}
const sumarIva = (precio) => {
  return precio + precio * 0.35;
};

saludar();

let estacion;
function main() {
  let estacion = parseInt(
    prompt(
      "Elija una seccion \n1- Samsung \n2- Apple \n3- Huawei \nPresione 4 para salir."
    )
  );
  console.log("estacion: " + estacion);
  if (estacion == 1) {
    //Samsung
    SamsungMostrar();
  } else if (estacion == 2) {
    //Apple
    AppleMostrar();
  } else if (estacion == 3) {
    //Huawei
    HuaweiMostrar();
  } else if (estacion == 4) {
    return;
  } else {
    console.log("No selecciono ninguna seccion");
    main();
  }

  function SamsungMostrar() {
    listaSamsung = [
      "0-Samsung Galaxy S10 (249$)",
      "1-Samsung Galaxy S20 (449$)",
      "2-Samsung Galaxy S21 (549$)",
      "3-Samsung Galaxy S22 Ultra (599$)",
    ];
    let Samsung = parseInt(
      prompt(
        "0-Samsung Galaxy S10 (249$) \n1-Samsung Galaxy S20 (449$) \n2-Samsung Galaxy S21 (549$)\n3-Samsung Galaxy S22 Ultra (599$)\nPresione '4' para salir."
      )
    );
    if ((Samsung >= 0) & (Samsung <= listaSamsung.length)) {
      console.log(listaSamsung[Samsung]);
      alert(listaSamsung[Samsung]);
      ConsStock();
    } else {
      alert("Opcion no valida");
      SamsungMostrar();
    }
  }
  let precio = 0;

  function AppleMostrar() {
    listaApple = [
      "0-Iphone 13 Pro Max (1099$)",
      "1-Iphone 13 Pro (999$)",
      "2-Iphone 13 Mini (899$)",
      "3-Iphone 13 (799$)",
    ];

    let Apple = parseInt(
      prompt(
        "0-Iphone 13 Pro Max (1099$)\n1-Iphone 13 Pro (999$)\n2-Iphone 13 Mini (899$)\n3-Iphone 13 (799$)\nPresione 'EXIT' para salir."
      )
    );
    if ((Apple >= 0) & (Apple <= listaApple.length)) {
      console.log(listaApple[Apple]);
      alert(listaApple[Apple]);
      ConsStock();
    } else {
      alert("Opcion no valida");
      AppleMostrar();
    }
  }
  function HuaweiMostrar() {
    listaHuawei = [
      "0-Huawei Mate 30 Pro (549$)",
      "1-Huawei Mate 30 Pro (549$)",
      "2-Huawei P40 Pro (349$)",
      "3-Huawei P30 Lite (349$)",
    ];
    let Huawei = parseInt(
      prompt(
        "0-Huawei Mate 30 Pro (549$)\n1-Huawei Mate 30 Pro (549$)\n2-Huawei P40 Pro (349$)\n3-Huawei P30 Lite (349$)\nPresione 'EXIT' para salir."
      )
    );
    if ((Huawei >= 0) & (Huawei <= listaHuawei.length)) {
      console.log(listaHuawei[Huawei]);
      alert(listaHuawei[Huawei]);
      ConsStock();
    } else {
      alert("Opcion no valida");
      HuaweiMostrar();
    }
  }
  function ConsStock(estacion) {
    if (Samsung == "Samsung Galaxy S10") {
      return true;
    }
  }
}
main();
