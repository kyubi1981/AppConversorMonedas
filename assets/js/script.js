async function getMonedas() {
    try {
        const indicadores = await fetch("https://mindicador.cl/api");
        //console.log(indicadores);
        const monedas = await indicadores.json();
        //console.log(monedas.uf);
        /********************************************************************/
        const comboMonedas = document.getElementById("cmb-monedas");
        const valores = Object.values(monedas);
        htmlComboBox = `<option value=0>Seleccione una moneda...</option>`;
        valores.forEach(valor => {
            if (typeof valor.nombre == 'undefined') {
                //alert("indefinida...");
            } else {
                console.log(`${valor.nombre}`);
                console.log(`${valor.valor}`);
                htmlComboBox +=
                    `<option value="${valor.valor}"> ${valor.nombre} </option>`;
            }
        });
        comboMonedas.innerHTML = htmlComboBox;
    } catch (e) {
        alert(e.message);
    }
}

function fnCalculaMoneda() {

    const miCalculo = document.getElementById("txt-resultado");

    let miCLP = document.getElementById("txt-monedaClp").value;
    //alert("clp = " + miCLP);
    let monedaSeleccionada = document.getElementById("cmb-monedas").value;
    //alert("valor moneda cambio " + monedaSeleccionada);
    let res = Number(miCLP) / Number(monedaSeleccionada);

    miCalculo.innerHTML = res.toFixed(2);
}

function fnChkGrafico() {
    //alert("en grafico...");
    const miCheckbox = document.getElementById("chk");

    if (miCheckbox.checked) {
        //alert("El checkbox está marcado.");
        let miGraph = document.getElementById("miGraph");
        miGraph.style.display = "block";
        miGraph.style.border = "1px solid black";
        miGraph.style.backgroundColor = "azure";
        miGraph.style.width = "90%";
        miGraph.style.height = "200px";
        miGraph.style.margintop = "30px";

    } else {
        //alert("El checkbox no está marcado.");
        let miGraph = document.getElementById("miGraph");
        miGraph.style.display = "none";

    }

}

async function obtieneMonedas() {
    const result = await fetch("https://mindicador.cl/api/");
    const historyMoney = await result.json();
    return historyMoney;
}

function configuraGrafico(historyMoney) {
    const tipoGrafico = "line";
    const nombresDeMonedas = nameMoney.map((moneda) => moneda.Codigo);
    const titulo = "Monedas";
    const colorLinea = "blue";
    const valores = monedas.map((moneda) => {
        const valor = moneda.valor.replace(",", ".");
        return Number(valor);
    });

    const config = {
        type: tipoGrafico,
        data: {
            labels: nombresDeMonedas,
            dataset: [
                {
                    label: titulo,
                    backgroundColor: colorLinea,
                    data: valores
                }
            ]
        }
    };
    return config;
}

async function generaGrafica() {
    const monedas = await obtieneMonedas();

    const config = construyeGrafica(monedas);

    const charDOM = document.getElementById("miGraph");
    new Chart(charDOM, config);
}


//construyeGrafica();



getMonedas();