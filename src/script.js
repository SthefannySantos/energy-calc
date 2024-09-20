document.getElementById("send-data").addEventListener("click", () => {
    pegarDados();
})

document.getElementById("nova-consulta").addEventListener("click", () => {
    location.reload()
})

function formatarDecimais(dado) {
    return parseFloat(dado.replace(',', '.'));
}

function pegarDados() {
    let nameProduct = document.getElementById("product-name").value;
    let consume = document.getElementById("product-consume").value;
    let time = document.getElementById("time-usage").value;
    let days = document.getElementById("days-usage").value;
    let tax = document.getElementById("tax-energy").value;

    let resultado = formatarDecimais(consume) * formatarDecimais(time) * formatarDecimais(days) * formatarDecimais(tax);

    resultado = resultado.toFixed(2);

    let resultadoFormatado = 'R$ ' + resultado.toString()

    let nomeResposta = `O gasto do(a) ${nameProduct} foi de aproximadamente..`;

    inserirDados(nomeResposta, resultadoFormatado)
}
function inserirDados(product, value) {
    let main = document.getElementById("main-container");
    let result = document.getElementById("result");
    main.classList.add("hidden");
    result.classList.remove("hidden");
    document.getElementById("result-product").innerHTML = product;
    document.getElementById("result-value").innerHTML = value;
}