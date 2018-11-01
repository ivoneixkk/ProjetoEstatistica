

function DivDists(dist) {
    if (dist == "uniforme") {
        document.getElementById('uniforme').style.display = 'block';
        document.getElementById('binomial').style.display = 'none';
        document.getElementById('normal').style.display = 'none';
    } else if (dist == "binomial") {
        document.getElementById('uniforme').style.display = 'none';
        document.getElementById('binomial').style.display = 'block';
        document.getElementById('normal').style.display = 'none';
    } else if (dist == "normal") {
        document.getElementById('uniforme').style.display = 'none';
        document.getElementById('binomial').style.display = 'none';
        document.getElementById('normal').style.display = 'block';
    }
}

function arrumaElementosUniforme(arruma) {

    if (arruma == "entre") {
        document.getElementById('qtdProd').style.display = 'none'
        document.getElementById('pontoMin').style.display = 'inline'
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('entreProd1').style.display = 'inline'
        document.getElementById('entreProd2').style.display = 'inline'
        document.getElementById('btCalcUni').style.display = 'inline'
    } else if (arruma == "maior" || arruma == "menor") {
        document.getElementById('pontoMin').style.display = 'inline'
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('entreProd1').style.display = 'none'
        document.getElementById('entreProd2').style.display = 'none'
        document.getElementById('qtdProd').style.display = 'inline'
        document.getElementById('btCalcUni').style.display = 'inline'
    }




}



function DistUniforme() {
    let escolha = document.getElementById('opuniforme').value;
    let interr;
    let qtdProd = document.getElementById('qtdProd').value;
    let fx;
    let ba;

    let pontoMin = document.getElementById("pontoMin").value;
    let pontoMax = document.getElementById('pontoMax').value;
    let Umedia = 0;
    let Udesvio;
    let Ucv;
    let resultado;
    Umedia = parseInt(pontoMin) + parseInt(pontoMax);
    Umedia = Umedia / 2;
    Udesvio = pontoMax - pontoMin;
    Udesvio = Math.pow(Udesvio, 2);
    Udesvio = Udesvio / 12;
    Udesvio = Math.sqrt(Udesvio);
    console.log(Udesvio);
    Ucv = Udesvio / Umedia;
    Ucv = Ucv * 100;

    switch (escolha) {
        case "entre":
            let entreProd1 = document.getElementById('entreProd1').value;
            let entreProd2 = document.getElementById('entreProd2').value;
            interr = entreProd1 - entreProd2;
            ba = pontoMax - pontoMin;
            fx = 1 / ba;
            fx = fx * interr;
            fx = fx * 100;
            resultado = 'Probabilidade de :&nbsp;&nbsp;' + fx.toFixed(2) + '%';
            document.getElementById('resultadoDistribuicao').innerHTML = resultado;

            break;

        // case "amaximo":
        //     ba = parseInt(qtdProd) - parseInt(pontoMin);
        //     ba = ba + parseInt(qtdProd);
        //     resultado = 'Maximo de :&nbsp;&nbsp;' + ba;
        //     document.getElementById('resultadoDistribuicao').innerHTML = resultado;
        //     break;
        // case "aminimo":
        //     ba = parseInt(pontoMax) - parseInt(qtdProd);
        //     ba = parseInt(qtdProd) - ba;
        //     resultado = 'Maximo de :&nbsp;&nbsp;' + ba;
        //     document.getElementById('resultadoDistribuicao').innerHTML = resultado;
        //     break;

        case "minimo":
            break;
        case "deque":
            break;
        case "maior":
            interr = pontoMax - qtdProd;
            ba = pontoMax - pontoMin;
            fx = 1 / ba;
            fx = fx * interr;
            fx = fx * 100;
            resultado = 'Probabilidade de :&nbsp;&nbsp;' + fx.toFixed(2) + '%';
            document.getElementById('resultadoDistribuicao').innerHTML = resultado;
            break;
        case "menor":
            interr = qtdProd - pontoMin;
            ba = pontoMax - pontoMin;
            fx = 1 / ba;
            fx = fx * interr;
            fx = fx * 100;
            resultado = 'Probabilidade de :&nbsp;&nbsp;' + fx.toFixed(2) + '%';
            document.getElementById('resultadoDistribuicao').innerHTML = resultado;
            break;
        // case "prejuizo":
        //     interr = qtdProd - pontoMin;
        //     ba = pontoMax - pontoMin;
        //     fx = 1 / ba;
        //     fx = fx * interr;
        //     fx = fx * 100;
        //     resultado = 'Probabilidade de :&nbsp;&nbsp;' + fx.toFixed(2) + '%';
        //     document.getElementById('resultadoDistribuicao').innerHTML = resultado;
        //     break;

        // case "pelomenos":
        //     break;
        // case "todos":
        //     break;
        // case "exatamente":
        //     break;
        // case "media":
        //     let UmediaR = 'Valor Medio de:' + Umedia;
        //     document.getElementById('qtdProd').style.display = 'none'
        //     document.getElementById('Umedia').innerHTML = UmediaR;
        //     break;
        // case "variDisv":

        //     let UdesvioR = 'Desvio padrao pela distribuiçao Uniforme é :&nbsp;&nbsp;' + Udesvio.toFixed(2);
        //     document.getElementById('Udesvio').innerHTML = UdesvioR;

        //     let UcvR = 'Coeficiente de Variação é :&nbsp;&nbsp;' + Math.round(Ucv.toFixed(0)) + '%';
        //     document.getElementById('cv').innerHTML = UcvR;

        //     let variacao = 'Variância é de :&nbsp;&nbsp;' + (Udesvio * Udesvio).toFixed(2);
        //     document.getElementById('cv').innerHTML = variacao;

        //     break;

    }










    // console.log(pontoMin);
    // console.log(Udesvio);


}