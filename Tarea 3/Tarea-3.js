const $botonAgregarClases = document.getElementById("agregar-clases");
const $botonCalcularTiempo = document.getElementById("calcular-tiempo-total");

$botonAgregarClases.onclick = function () {
  const numeroClases = Number(document.getElementById("numero-clases").value);
  if (numeroClases > 0 && numeroClases <= 18) {
    agregarFormularios(numeroClases);
  } else {
    alert("El numero de clases no existe. Solo 1 al 18");
    return false;
  }
};

function agregarFormularios(numeroClases) {
  const $formulario = document.getElementById("formularios");
  $formulario.innerHTML = ``;
  for (let i = 1; i <= numeroClases; i++) {
    $formulario.innerHTML += `<form id="clase-${i}">
        <h3 class="clase">Clase ${i}</h3>
        <label for="Horas">Horas</label>
        <input type="number" name="Horas" id="horas-clase${i}">
        <label for="Minutos">Minutos</label>
        <input type="number" name="Minutos" id="minutos-clase${i}">
        <label for="Segundos">Segundos</label>
        <input type="number" name="Segundos" id="segundos-clase${i}">
        </form> <br/>`;
  }
}

$botonCalcularTiempo.onclick = function () {
  const numerodeClases = Number(document.getElementById("numero-clases").value);
  const $resultadoFinal = document.getElementById("tiempo-total");
  let totalDeHoras = 0;
  let totalDeMinutos = 0;
  let totalDeSegundos = 0;
  for (let i = 1; i <= numerodeClases; i++) {
    totalDeHoras += Number(document.getElementById(`horas-clase${i}`).value);
    totalDeMinutos += Number(
      document.getElementById(`minutos-clase${i}`).value
    );
    totalDeSegundos += Number(
      document.getElementById(`segundos-clase${i}`).value
    );
  }
  $resultadoFinal.innerText = imprimirResultado(
    totalDeHoras,
    totalDeMinutos,
    totalDeSegundos
  );
};

function imprimirResultado(horas, minutos, segundos) {
  const segundosYMinutos = 60;
  let segundosTotales = 0;
  let minutosTotales = 0;
  let horasTotales = 0;

  if (segundos < segundosYMinutos) {
    segundosTotales += segundos;
  } else if (segundos % segundosYMinutos === 0) {
    minutosTotales += segundos / segundosYMinutos;
  } else {
    segundosTotales += segundos % segundosYMinutos;
    minutosTotales += (segundos - segundosTotales) / segundosYMinutos;
  }

  if (minutos < segundosYMinutos) {
    minutosTotales += minutos;
  } else if (minutos % segundosYMinutos === 0) {
    horasTotales += minutos / segundosYMinutos;
  } else {
    minutosTotales += minutos % segundosYMinutos;
    horasTotales += (minutos - (minutos % segundosYMinutos)) / segundosYMinutos;
  }

  if (minutosTotales > segundosYMinutos) {
    minutosTotales = minutosTotales % segundosYMinutos;
    horasTotales +=
      (minutosTotales - (minutosTotales % segundosYMinutos)) / segundosYMinutos;
  }
  horasTotales += horas;

  return `El tiempo invertido es ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`;
}
