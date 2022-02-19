var cupones = ["Bronce", "Plata", "Oro"];

function calcularPrecioConDescuento(precio, descuento) {
    const precioConDescuento = (precio * (100-descuento))/100;
    return precioConDescuento;
}

function calcularCuponesDescuento(precio, cupon) {
    let descuento=0;
    switch(cupon) {
        case cupones[0]:
            descuento = 15;
        break;
        case cupones[1]:
            descuento = 30;
        break;
        case cupones [2]:
            descuento = 50;
        break;
    }

    return calcularPrecioConDescuento(precio,descuento);
}

function priceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const price = parseFloat(inputPrice.value);
    const discount = parseFloat(inputDiscount.value);
    const total = calcularPrecioConDescuento(price,discount);
    const resultP = document.getElementById("resultP");
    return resultP.innerText = "El precio con descuento es de $" + total + ".";
}

function onClickCuponDiscount() {
    const inputPrice = document.getElementById("inputPriceCupon");
    const inputCupon = document.getElementById("cuponDiscount");
    const price = parseFloat(inputPrice.value);
    const cupon = inputCupon.options[inputCupon.selectedIndex].text;
    const total = calcularCuponesDescuento(price,cupon);
    const resultP = document.getElementById("resultPCupon");
    return resultP.innerText = "El precio con tu cupon es de $" + total + ".";
}