
let vetEnt = [];
let media = 0;
let total = 0;
let maior;
let modal = [];
let vetObjeto = [];
let vetor = [];
let Repeticao = [];
let Elementos = [];
let Lvalor = []


function quantiDiscreta() {
    let testevar = queryString("vetor");
    let testvalores = queryString("valores");
    Lvalor = queryString("Lvalor");
    Lvalor = Lvalor.split(',');
    console.log(Lvalor);
    testvalores = testvalores.split(',');
    testevar = testevar.split(',');
    for (let i = 0; i < testevar.length; i++) {
        vetor[i] = parseInt(testevar[i]);
        ''
    }

    ordenarVetor(vetor, vetor.length);
    repeticao(vetor, testvalores[0], testvalores[1]);
    mountTabelaDiscreta(vetor, testvalores[0], testvalores[1]);
    MostraGraDiscreta(Repeticao, testvalores);

    desvioPadraoDiscreta(Lvalor);

    mountTabelaResult(vetor);

}


function queryString(parameter) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1)
        }
    }
    if (param_value) {
        return param_value;
    }
    else {
        return undefined;
    }
}

function ordenarVetor(ent, cont) {
    let h = 0;
    for (let i = 0; i < cont; i++) {
        h = i;
        while (ent[h + 1] < ent[h]) {
            aux = ent[h + 1];
            ent[h + 1] = ent[h];
            ent[h] = aux
            h--;
        }

    }
    let showOrd = '<table>';
    showOrd += '<tr>';

    for (let i = 0; i < vetor.length; i++) {
        showOrd += '<td>' + vetor[i] + '</td>';
    }
    showOrd += '<tr>';
    showOrd += '<table>';
    let MostraOrd = document.getElementById('CSVsaida');
    return ent;
}

function mountTabelaDiscreta(vet, val1, val2) {

    let mounTable3 = "<strong>TABELA DE ANALISE DOS DADOS</strong>";


    mounTable3 += "<table><td><table>";
    mounTable3 += "<tr>";
    mounTable3 += "<th>" + val1 + "</th>";
    mounTable3 += "<th>N.: " + val2 + "(fi)</th>";
    mounTable3 += "<th>fr %</th><th>F ac</th>";
    mounTable3 += "<th>F %</th>";
    mounTable3 += "</tr>";

    let porcfi = 0;
    let fiacu = 0;
    let porfiacu = 0;
    let mediana = 0;
    for (let i = 0; i < vetEnt.length; i++) {
        mounTable3 += "<tr>";
        total = vet.length;
        mounTable3 += "<td>" + vetEnt[i].elementos + "</td>";
        mounTable3 += "<td>" + vetEnt[i].repeticao + "</td>";
        porcfi = (vetEnt[i].repeticao * 100) / total;
        mounTable3 += "<td>" + porcfi.toFixed(2) + "&nbsp;&nbsp;%&nbsp;&nbsp; </td>";
        fiacu = fiacu + vetEnt[i].repeticao;
        porfiacu = porfiacu + porcfi;
        mounTable3 += "<td>" + fiacu + "</td>";
        mounTable3 += "<td>" + porfiacu.toFixed(2) + "&nbsp;&nbsp;%&nbsp;&nbsp; </td>";
        mounTable3 += "</tr>";
        media = media + (vetEnt[i].elementos * vetEnt[i].repeticao);//vai somando os fi emultiplicando
        let dadosObjeto = {
            VarPesquisada: vetEnt[i].elementos,
            Numero_elementos: vetEnt[i].repeticao,
            Fi_frequencia_porcentagem: porcfi.toFixed(2),
            Fac_acumulado: fiacu,
            Fac_porcentagem: porfiacu.toFixed(2),
            Somatorio_fi: total
        }

        vetObjeto.push(dadosObjeto);
    }


    for (let h = 0; h < vetEnt.length; h++) {
        if (vetEnt[h].repeticao > maior) {
            maior = vetEnt[h].repeticao;

        }
    }





    media = media / total;
    mounTable3 += "</tr>";
    mounTable3 += "</table></td><div id=Results></div>";
    mounTable3 += "<div id=desviopadrao></div></table>";
    var tabela3 = document.getElementById('tabDados');
    tabela3.innerHTML = mounTable3;

}
function repeticao(vet, val1, val2) {
    let varpesq = val1;
    let fipesq = val2;

    let qtd = 0;


    let dadosEnt = {};

    for (let i = 0; i < vet.length; i++) {

        for (let h = 0; h < vet.length; h++) {
            if (vet[i] == vet[h]) {
                qtd++;
            }
        }
        if (vet[i] !== vet[i - 1]) {
            Repeticao.push(qtd);
            Elementos.push(varpesq + "     " + vet[i]);
            dadosEnt = {
                elementos: vet[i],
                repeticao: qtd
            }

            vetEnt.push(dadosEnt);
        }

        qtd = 0;
    }

    maior = vetEnt[0].repeticao;

}


function mountTabelaResult(vet) {

    var mounTable4 = "<table><th collspan=2>RESULTADOS OBTIDOS</th>";
    mounTable4 += "<tr><th>Media</td><td>" + media.toFixed(2) + "</th></tr>";

    let ttotal;
    if (total % 2 == 0) {
        ttotal = total / 2;
        mediana = (vet[ttotal - 1] + vet[ttotal]) / 2;

    } else {
        alert('sou impar');
        ttotal = Math.floor(total / 2);
        console.log(ttotal);
        mediana = (vet[ttotal]);
    }


    mounTable4 += "<tr><th>Mediana</th><td> " + mediana + "</td></tr>";

    mounTable4 += "<tr><th>Moda</strong></th>";
    for (let i = 0; i < vetEnt.length; i++) {
        if (vetEnt[i].repeticao == maior) {
            modal.push(vetEnt[i].elementos);
            mounTable4 += "<td>" + vetEnt[i].elementos + "</td></tr>";
        }
    }
    let pearson = 0;
    pearson = (3 * mediana) - (2 * media);

    mounTable4 += "<tr>";
    mounTable4 += "<th>Moda de Pearson</th>";
    mounTable4 += "<td>" + pearson.toFixed(2) + "</td>";
    mounTable4 += "</tr>";
    mounTable4 += "<tr>"
    mounTable4 += "<th>Desvio padrao</th>"
    mounTable4 += "<td><div id=desviopadrao></div></td>";
    mounTable4 += "</tr>";
    

    mounTable4 += "</table>";
    var tabela4 = document.getElementById('Results');
    tabela4.innerHTML = mounTable4;
}


function separatrizDiscreta() {
    let Lvalor = document.getElementById('campo3').value;
    let lista = document.getElementById('lista').value;
    let Mseparatriz;
    let medidaSeparatriz;

    function acharPosicao(sep) {
        console.log(sep);
        for (let i = 0; i < vetObjeto.length; i++) {
            if (sep == vetObjeto[vetObjeto.length - 1].Fac_acumulado) {
                // alert('eu sou a posicao ' + sep);
                // alert('eu sou o FAC acumulado' + vetObjeto[i].Fac_acumulado);

                sep = vetObjeto[vetObjeto.length - 1].VarPesquisada;
                break;
            }
            else if (sep > vetObjeto[i].Fac_acumulado && sep < vetObjeto[i + 1].Fac_acumulado) {
                // alert('eu sou a posicao ' + sep);
                // alert('eu sou o FAC acumulado' + vetObjeto[i].Fac_acumulado);

                sep = vetObjeto[i].VarPesquisada;
                break;
            }
            else if (sep < vetObjeto[0].Fac_acumulado) {
                // alert('eu sou a posicao ' + sep);
                // alert('eu sou o FAC acumulado' + vetObjeto[i].Fac_acumulado);

                sep = vetObjeto[i].VarPesquisada;
                break;
            }

        }
        return sep;
    }





    console.log(lista);
    console.log(Lvalor);
    console.log(total);
    switch (lista) {
        case "Q":
            switch (Lvalor) {
                case "1":
                    Mseparatriz = (total * 25) / 100;
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><strong>Quartil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;

                case "2":
                    Mseparatriz = (total * 50) / 100;
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quartil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;

                case "3":
                    Mseparatriz = (total * 75) / 100;
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quartil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';

                    break;
                case "4":
                    Mseparatriz = total * 100 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quartil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                default:

                    window.alert("escolha um parametro valido ex(1 , 2 , 3 , 4 )");
            }
            break;

        case "K":
            switch (Lvalor) {
                case "1":
                    Mseparatriz = total * 20 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quintil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "2":
                    Mseparatriz = total * 40 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quintil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "3":
                    Mseparatriz = total * 60 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quintil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "4":
                    Mseparatriz = total * 80 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quintil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "5":
                    Mseparatriz = total * 100 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Quintil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;

                default:
                    window.alert("escolha um parametro valido ex(1 , 2 , 3 , 4, 5 )");
            }
            break;
        case "D":
            switch (Lvalor) {
                case "1":
                    Mseparatriz = total * 10 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "2":
                    Mseparatriz = total * 20 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "3":
                    Mseparatriz = total * 30 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "4":
                    Mseparatriz = total * 40 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "5":
                    Mseparatriz = total * 50 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "6":
                    Mseparatriz = total * 60 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "7":
                    Mseparatriz = total * 70 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "8":
                    Mseparatriz = total * 80 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "9":
                    Mseparatriz = total * 90 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;
                case "10":
                    Mseparatriz = total * 100 / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('separatriz').innerHTML += '<p><p><strong>Decil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz + '<p>';
                    break;

                default:
                    window.alert("escolha um parametro valido ex(1 , 2 , 3 , 4, 5, 6, 7, 8, 9, 10 )");

            }

            break;
        case "P":
            if (Lvalor < 1 || Lvalor > 100) {
                alert('PARAMETRO INVALIDO, DIGITE UM NUMERO DE 1 A 100');
            } else {
                Mseparatriz = total * Lvalor / 100
                Mseparatriz = acharPosicao(Mseparatriz);
                document.getElementById('separatriz').innerHTML += '<p><p><strong>Porcentil</strong>&nbsp;-' + Lvalor + '&nbsp;=&nbsp;' + Mseparatriz ;
            }
            break;
        default:
            alert("escolha um parametro valido");

    }
}

function desvioPadraoDiscreta(Lvalor) {
//    let Lvalor = document.getElementsByName('desvio');
    let resPadrao = 0;
    let teste1 = 0;
    let coeficiente = 0;
    for (var i = 0; i < Lvalor.length - 1; i++) {
        if (Lvalor[i] == "true") {
            for (let i = 0; i < vetObjeto.length; i++) {
                teste1 = Math.pow(vetObjeto[i].VarPesquisada - media, 2) * vetObjeto[i].Numero_elementos;
                resPadrao = resPadrao + teste1;
            }
            resPadrao = resPadrao / (vetObjeto[0].Somatorio_fi - 1);
            resPadrao = Math.sqrt(resPadrao).toFixed(2);
            coeficiente = Math.round(((resPadrao / media) * 100).toFixed(2));

            document.getElementById('desviopadrao').innerHTML =  resPadrao;
            document.getElementById('coeficiente').innerHTML = '<p><strong>Amostra Coeficiente de Variação:&nbsp;&nbsp;&nbsp;</strong>' + coeficiente + '&nbsp;%&nbsp;<p>';

            break;
        } else if (Lvalor[i + 1] == "true") {
            for (let i = 0; i < vetObjeto.length; i++) {
                teste1 = Math.pow(vetObjeto[i].VarPesquisada - media, 2) * vetObjeto[i].Numero_elementos;
                resPadrao = resPadrao + teste1;
                console.log(teste1);
            }
            console.log(resPadrao);
            resPadrao = resPadrao / (vetObjeto[0].Somatorio_fi);
            resPadrao = Math.sqrt(resPadrao.toFixed(3));
            coeficiente = Math.round(((resPadrao / media) * 100).toFixed(2));

            document.getElementById('desviopadrao').innerHTML = resPadrao.toFixed(3);
            document.getElementById('coeficiente').innerHTML = '<p><strong>Populacao Coeficiente de Variação:&nbsp;&nbsp;&nbsp;</strong>' + coeficiente + '&nbsp;%&nbsp;<p>';

            break;
        } else {
            alert('POR FAVOR ESCOLHA \n [AMOSTRA OU POPULACAO] para podermos calcular o Desvio padrao');
            break;
        }
    }

}


function modasPCK() {
    let person = 0;
    person = (3 * mediana) - (2 * media);
}



function MostraGraDiscreta(dado, val1) {
//    console.log(Elementos)

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: val1[0] + ' - por -' + val1[1]
        },
        subtitle: {
            text: 'Grafico da tabela Discreta'
        },
        plotOptions: {
            column: {
                depth: 25,

            }
        },
        xAxis: {
            categories: Elementos,
            labels: {

                skew3d: true,
                style: {
                    fontSize: '16px',

                }
            }
        },
        yAxis: {

            title: {
                text: null
            }
        },

        series: [{
            colorByPoint: true,
            name: val1[1],
            data: dado
        }]
    });

    function showValues() {
        $('#alpha-value').html(chart.options.chart.options3d.alpha);
        $('#beta-value').html(chart.options.chart.options3d.beta);
        $('#depth-value').html(chart.options.chart.options3d.depth);
    }

    // Activate the sliders
    $('#sliders input').on('input change', function () {
        chart.options.chart.options3d[this.id] = parseFloat(this.value);
        showValues();
        chart.redraw(false);
    });

    showValues();


}