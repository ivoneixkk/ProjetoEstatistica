

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

function retiraVirgula(param){
   return param.replace(',' ,'.')
}

function arrumaElementosUniforme(arruma) {
    if (arruma == "opcao") {
        document.getElementById('pontoMin').style.display = "none"
        document.getElementById('pontoMax').style.display = "none"
        document.getElementById('qtdProd').style.display = "none"
        document.getElementById('entreProd1').style.display = "none"
        document.getElementById('entreProd2').style.display = "none"
        document.getElementById('btCalcUni').style.display = 'none'

        document.getElementById('pontoMin').style.display = ""
        document.getElementById('pontoMax').style.display = ""
        document.getElementById('qtdProd').style.display = ""
        document.getElementById('entreProd1').style.display = ""
        document.getElementById('entreProd2').style.display = ""
        document.getElementById('resultadoDistribuicao').innerHTML = ""


    } else if (arruma == "entre") {
        document.getElementById('qtdProd').style.display = 'none'
        document.getElementById('pontoMin').style.display = 'inline'
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('pontoMin').value = ""
        document.getElementById('pontoMax').value = ""
        document.getElementById('resultadoDistribuicao').innerHTML = ""
        document.getElementById('entreProd1').value = ""
        document.getElementById('entreProd2').value = ""
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('entreProd1').style.display = 'inline'
        document.getElementById('entreProd2').style.display = 'inline'
        document.getElementById('btCalcUni').style.display = 'inline'
    } else if (arruma == "maior" || arruma == "menor") {
        document.getElementById('pontoMin').style.display = 'inline'
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('pontoMin').value = ""
        document.getElementById('pontoMax').value = ""
        document.getElementById('qtdProd').value = ""
        document.getElementById('entreProd1').style.display = 'none'
        document.getElementById('entreProd2').style.display = 'none'
        document.getElementById('qtdProd').style.display = 'inline'
        document.getElementById('qtdProd').placeholder = 'Quantidade'
        document.getElementById('btCalcUni').style.display = 'inline'
        document.getElementById('resultadoDistribuicao').innerHTML = ""

    } else if (arruma == "media") {
        document.getElementById('qtdProd').style.display = 'none'
        document.getElementById('pontoMin').style.display = 'inline'
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('pontoMin').value = ""
        document.getElementById('pontoMax').value = ""
        document.getElementById('btCalcUni').style.display = 'inline'
        document.getElementById('resultadoDistribuicao').innerHTML = ""
        document.getElementById('entreProd1').style.display = 'none'
        document.getElementById('entreProd2').style.display = 'none'


    } else if (arruma == "variDisv") {
        document.getElementById('pontoMin').style.display = 'inline'
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('btCalcUni').style.display = 'inline'
        document.getElementById('qtdProd').value = ""
        document.getElementById('qtdProd').style.display = 'none'
        document.getElementById('pontoMin').value = ""
        document.getElementById('pontoMax').value = ""
        document.getElementById('entreProd1').style.display = 'none'
        document.getElementById('entreProd2').style.display = 'none'

 
        document.getElementById('resultadoDistribuicao').innerHTML = ""

    } else if (arruma == "amaximo") {
        document.getElementById('entreProd1').style.display = 'none'
        document.getElementById('entreProd2').style.display = 'none'
        document.getElementById('pontoMin').style.display = 'inline'
        document.getElementById('pontoMax').style.display = 'none'
        document.getElementById('qtdProd').style.display = 'inline'
        document.getElementById('qtdProd').placeholder = 'Digite Media'
        document.getElementById('btCalcUni').style.display = 'inline'
        document.getElementById('pontoMin').value = ""
        document.getElementById('pontoMax').value = ""
        document.getElementById('qtdProd').value = ""
        document.getElementById('resultadoDistribuicao').innerHTML = ""

    } else if (arruma == "aminimo") {
        document.getElementById('entreProd1').style.display = 'none'
        document.getElementById('entreProd2').style.display = 'none'
        document.getElementById('pontoMin').style.display = 'none'
        document.getElementById('pontoMax').style.display = 'inline'
        document.getElementById('qtdProd').style.display = 'inline'
        document.getElementById('qtdProd').placeholder = 'Digite Media'
        document.getElementById('pontoMin').value = ""
        document.getElementById('pontoMax').value = ""
        document.getElementById('qtdProd').value = ""
        document.getElementById('btCalcUni').style.display = 'inline'
        document.getElementById('resultadoDistribuicao').innerHTML = ""

    }

}



function DistUniforme() {
    let escolha = document.getElementById('opuniforme').value;
    let interr;
    let qtdProd = retiraVirgula(document.getElementById('qtdProd').value);
    console.log(qtdProd)
        let fx;
    let ba;

    let pontoMin = retiraVirgula(document.getElementById("pontoMin").value);
    let pontoMax = retiraVirgula(document.getElementById('pontoMax').value);
    let Umedia = 0;
    let Udesvio;
    let Ucv;
    let resultado;
    Umedia = parseFloat(pontoMin) + parseFloat(pontoMax);
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
            let entreProd1 = retiraVirgula(document.getElementById('entreProd1').value);
            let entreProd2 = retiraVirgula(document.getElementById('entreProd2').value);
            interr = entreProd1 - entreProd2;
            ba = pontoMax - pontoMin;
            fx = 1 / ba;
            fx = fx * interr;
            fx = fx * 100;
            resultado = 'Probabilidade de :&nbsp;&nbsp;' + Math.abs(fx.toFixed(2)) + '%';
            document.getElementById('resultadoDistribuicao').innerHTML = resultado;

            break;

        case "amaximo":
            ba = parseInt(qtdProd) - parseInt(pontoMin);
            ba = ba + parseInt(qtdProd);
            resultado = 'Maximo de :&nbsp;&nbsp;' + ba;
            document.getElementById('resultadoDistribuicao').innerHTML = resultado;
            break;
        case "aminimo":
            ba = parseInt(pontoMax) - parseInt(qtdProd);
            ba = parseInt(qtdProd) - ba;
            resultado = 'Maximo de :&nbsp;&nbsp;' + ba;
            document.getElementById('resultadoDistribuicao').innerHTML = resultado;
            break;

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
        case "media":
            let UmediaR = 'Valor Medio de:' + Umedia;
            document.getElementById('resultadoDistribuicao').innerHTML = UmediaR;
            break;
        case "variDisv":

            let UdesvioR = 'Desvio padrao pela Uniforme é :&nbsp;&nbsp;' + Udesvio.toFixed(2);
            document.getElementById('resultadoDistribuicao').innerHTML = UdesvioR;

            let UcvR = '<br>Coeficiente de Variação é :&nbsp;&nbsp;' + Math.round(Ucv.toFixed(0)) + '%';
            document.getElementById('resultadoDistribuicao').innerHTML += UcvR;

            let variacao = '<br>Variância é de :&nbsp;&nbsp;' + (Udesvio * Udesvio).toFixed(2);
            document.getElementById('resultadoDistribuicao').innerHTML += variacao;

            break;

    }










    // console.log(pontoMin);
    // console.log(Udesvio);


}