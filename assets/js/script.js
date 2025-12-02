
function fnChkGrafico() {

    alert("en grafico...");

    // Ejemplo de un checkbox con id="miCheckbox"
    const miCheckbox = document.getElementById("chk");
    let valorCheckbox = null;

    if (miCheckbox.checked) {
        valorCheckbox = miCheckbox.value;
        alert("El checkbox está marcado y su valor es: " + valorCheckbox);
    } else {
        alert("El checkbox no está marcado.");
    }

}