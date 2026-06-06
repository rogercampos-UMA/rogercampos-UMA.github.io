const contenedor = document.getElementById('contenedor-hojas');
  const cantidadHojas = 30; // Puedes subir o bajar este número

  for (let i = 0; i < cantidadHojas; i++) {
    let hoja = document.createElement('div');
    hoja.classList.add('hoja');

    // Generamos valores aleatorios para cada hoja
    let posX = Math.random() * 100;               // Posición de izquierda a derecha (0 a 100%)
    let duracionCaida = Math.random() * 5 + 5;    // Tiempo que tarda en caer (entre 5s y 10s)
    let duracionBalanceo = Math.random() * 2 + 2; // Rapidez del viento (entre 2s y 4s)
    let retraso = Math.random() * 5;              // Para que no caigan todas al mismo tiempo
    let escala = Math.random() * 0.6 + 0.7;       // Diferencia sutil de tamaño (0.7 a 1.3)

    // Aplicamos los valores aleatorios a la hoja
    hoja.style.left = posX + 'vw';
    hoja.style.animationDuration = `${duracionCaida}s, ${duracionBalanceo}s`;
    hoja.style.animationDelay = `${retraso}s, 0s`;
    hoja.style.setProperty('--escala', escala); // Pasamos el tamaño al CSS

    contenedor.appendChild(hoja);
  }