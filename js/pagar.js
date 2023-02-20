



  function calcularTotal() {
    // Obtener los precios de los artículos y sumarlos
    var precioArticulo1 = parseFloat(document.getElementById("precio-articulo-1").innerHTML.slice(1));
    var precioArticulo2 = parseFloat(document.getElementById("precio-articulo-2").innerHTML.slice(1));
    var precioArticulo3 = parseFloat(document.getElementById("precio-articulo-3").innerHTML.slice(1));
    var precioArticulo4 = parseFloat(document.getElementById("precio-articulo-4").innerHTML.slice(1));
    var precioArticulo5 = parseFloat(document.getElementById("precio-articulo-5").innerHTML.slice(1));
    var precioArticulo6 = parseFloat(document.getElementById("precio-articulo-6").innerHTML.slice(1));
    var precioArticulo7 = parseFloat(document.getElementById("precio-articulo-7").innerHTML.slice(1));
    var precioArticulo8 = parseFloat(document.getElementById("precio-articulo-8").innerHTML.slice(1));
    var precioArticulo9 = parseFloat(document.getElementById("precio-articulo-9").innerHTML.slice(1));
    var precioArticulo10 = parseFloat(document.getElementById("precio-articulo-10").innerHTML.slice(1));
    var neto = precioArticulo1 + precioArticulo2 + precioArticulo3 + precioArticulo4 + precioArticulo5 + precioArticulo6 + precioArticulo7 + precioArticulo8 + precioArticulo9 + precioArticulo10;

    // Calcular el IVA y el gasto de envío
    var iva = neto * 0.19;
    var gastoEnvio = neto * 0.05;

    // Calcular el total
    var precioTotal = neto + iva + gastoEnvio;

    // Actualizar los valores en la tabla
    document.getElementById("neto").innerHTML = "$" + neto.toFixed(2);
    document.getElementById("iva").innerHTML = "$" + iva.toFixed(2);
    document.getElementById("gasto-envio").innerHTML = "$" + gastoEnvio.toFixed(2);
    document.getElementById("precio-total").innerHTML = "$" + precioTotal.toFixed(2);
  }

  DOMboton-carcular.addEventListener('click', calcularTotal);

