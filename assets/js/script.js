
async function getMonedas() {
    try{
        const indicador = await fetch("https://mindicador.cl/api");
        const  moneda = await indicador.json();
        console.log(moneda);
    } catch (e){
        alert(e.message);
    }
}



function fnChkGrafico() {

    alert("en grafico...");

    // Ejemplo de un checkbox con id="miCheckbox"
    const miCheckbox = document.getElementById("chk");
    const miGraph = document.getElementById("miGraph");

    let valorCheckbox = null;

    if (miCheckbox.checked) {
        valorCheckbox = miCheckbox.value;
        alert("El checkbox está marcado y su valor es: " + valorCheckbox);
    } else {
        alert("El checkbox no está marcado.");
    }

}




getMonedas();