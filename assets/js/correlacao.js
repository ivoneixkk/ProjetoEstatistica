let vetor = []
let VetDependente = []
let VetIndependente = []
let troca = []
let historico
let dependente
let independente
let a, b
let correlacaoForca
let dispersao = []
let equa1grau = 0
let equi = 0
let dadosGraficos = []
let Lmaior = 0
let Lmenor = 0
let linhaGraf = []
let resultado = 0
let x, y
let testeLInha = []
let dadoGra = []

executar();
function executar() {
    dependente = queryString("dependente");
    independente = queryString("independente");
    let verCSV = queryString("docimport");
    verCSV = verCSV.replace(/,/g, '.')
    verCSV = verCSV.replace(/-/g, ' ')
    troca = verCSV.split(' ')

    console.log(troca[0].length)
    VetIndependente = troca[0].split(';')
    VetDependente = troca[1].split(';')

    let objDadosGraf = {}

    //converter os vetores de string para numeros float
    for (let i = 0; i < VetDependente.length; i++) {
        VetDependente[i] = parseFloat(VetDependente[i])
        VetIndependente[i] = parseFloat(VetIndependente[i])
        objDadosGraf = {
            x: VetIndependente[i],
            y: VetDependente[i]
        }

        dadosGraficos.push(objDadosGraf)
        dadoGra.push([VetIndependente[i],VetDependente[i]])
    }

    console.log(VetDependente)
    console.log(VetIndependente)
    console.log(dadoGra)
    console.log(dadosGraficos)
    console.log(dadoGra)
    calcularCorrelacao()
    popularGrafico()
    //    MostraGraCorrelacao()
}

function fazerProjecao(inputproj) {
    console.log(inputproj)
    if (inputproj !== "opcao" && inputproj != undefined) {
        console.log(inputproj)
        let innppt, mostrainppt
        innppt = '<input name="entproj" id="entrproj"  value="" type="text"  placeholder="Valor esperado" />'
        innppt += '<input id="cproje" type="button" class="tbtnDigi" value="CALCULAR"  onclick="calcProjecao(entrproj.value)">'

        mostrainppt = document.getElementById('inppt');
        console.log(mostrainppt)
        mostrainppt.innerHTML = innppt

    } else {
        if (inputproj == undefined) {
            document.getElementById('fproje').style.display = 'none';
        }
        let proje
        proje = '<select id="opproje" onchange="fazerProjecao(this.value)">'
        proje += '<option value="opcao">SELECIONE A VARIAVEL</option>'
        proje += '<option value="' + dependente + '">' + dependente + '</option>'
        proje += '<option value="' + independente + '">' + independente + '</option>'
        proje += '</select>'
        let colproje = document.getElementById('fazproje');
        colproje.innerHTML = proje;
        inputproj = document.getElementById('opproje').value;
        console.log(inputproj)
    }



}

function calcularCorrelacao() {
    let somatorio_X = 0
    let somatorio_Y = 0
    let somatorio_XY = 0
    let somatorio_X2 = 0
    let somatorio_Y2 = 0

    historico = VetDependente.length
    for (let i = 0; i < historico; i++) {
        somatorio_Y += VetDependente[i]
        somatorio_X += VetIndependente[i]
        somatorio_XY += VetDependente[i] * VetIndependente[i]
        somatorio_Y2 += Math.pow(VetDependente[i], 2)
        somatorio_X2 += Math.pow(VetIndependente[i], 2)
    }

    let rX = (historico * somatorio_XY) - (somatorio_X * somatorio_Y)
    let rY = ((historico * somatorio_X2) - Math.pow(somatorio_X, 2)) * ((historico * somatorio_Y2) - Math.pow(somatorio_Y, 2))
    resultado = rX / Math.sqrt(rY)
    let coeficienteLinear = resultado.toFixed(2)
    resultado = resultado * 100
    resultado = resultado.toFixed(0)

    document.getElementById('resultadoCorrelacao').innerHTML = '<b>Coeficciente de:</b><font class="destacar">' + coeficienteLinear + '</font>'
    let resultadoFinal = Math.abs(resultado)

    if (Math.abs(resultado) == 0) {
        correlacaoForca = "<b>Sem correlação de :</b><font class='destacar'> " + Math.abs(resultado) + " % </font>";
    }
    else if (Math.abs(resultado) < 30) {
        correlacaoForca = "<b>Correlação é fraca de :</b><font class='destacar'> " + Math.abs(resultado) + " %</font> ";
    }
    else if (Math.abs(resultado) < 60) {
        forca = "<b>Correlação é Média de :</b><font class='destacar'> " + Math.abs(resultado) + " %</font>";
    }
    else if (Math.abs(resultado) < 100) {
        correlacaoForca = "<b>Correlação é Forte  de :</b><font class='destacar'> " + Math.abs(resultado) + " % </font>";
    }
    else {
        correlacaoForca = "<b>Correlação Perfeita  :</b><font class='destacar'> " + Math.abs(resultado) + " % </font>";
    }

    document.getElementById('forca').innerHTML = correlacaoForca
    console.log('coeficiente: ' + coeficienteLinear)
    console.log(somatorio_X)
    console.log(somatorio_Y)
    console.log(somatorio_XY)
    console.log(somatorio_X2)
    console.log(somatorio_Y2)
    console.log(resultado)
    console.log(resultadoFinal)
    console.log(correlacaoForca)

    a = ((historico * somatorio_XY) - (somatorio_X * somatorio_Y))
    a = a / ((historico * somatorio_X2) - (Math.pow(somatorio_X, 2)));
    b = (somatorio_Y / historico)
    b = b - a * (somatorio_X / historico);
    console.log(a)
    console.log(b)

    if (b > 0) {
        equa1grau = '<b>equação é&nbsp;</b> <font class="destacar"> y =&nbsp;' + a.toFixed(2) + '.x&nbsp;&nbsp;+&nbsp;&nbsp;' + b.toFixed(2) + '</font>';
        equi = 'y =&nbsp;' + a.toFixed(2) + '.x&nbsp;&nbsp;+&nbsp;&nbsp;' + b.toFixed(2)
    }
    else {
        equa1grau = '<b>equação é&nbsp;</b><font class"destacar">y =&nbsp;' + a.toFixed(2) + '&nbsp;&nbsp;x&nbsp;&nbsp;' + b.toFixed(2) + '</font>';
        equi = 'y =&nbsp;' + a.toFixed(2) + '.x&nbsp;&nbsp;+&nbsp;&nbsp;' + b.toFixed(2)

    }
    document.getElementById('equacao').innerHTML = equa1grau

    console.log(equa1grau)
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

console.log(equa1grau)

function popularGrafico() {

    Lmaior = VetDependente[0]
    Lmenor = VetDependente[0]

    console.log(Lmaior)
    console.log(Lmenor)
    //achar maior elemento e menor elemendo da variavel dependente
    for (let h = 1; h < VetDependente.length; h++) {
        if (VetDependente[h] > Lmaior) {
            Lmaior = VetDependente[h];
        }
        if (VetDependente[h] < Lmaior) {
            Lmenor = VetDependente[h];
        }
    }
    console.log(Lmaior)
    console.log(Lmenor)
    console.log(a)
    console.log(b)
    console.log(VetDependente)
    console.log(VetIndependente)
    y = Lmaior;
    x = (y - b) / a
    //    x = x / a;
    linhaGraf.push({
        x,
        y
    });

    testeLInha.push([x,y])
    console.log(testeLInha)

    //    x = 0;

    if (a < 0) {
        y = Lmenor;
        console.log(Lmenor)
        console.log(b)
        x = (y - b) / a
        //    x = x / a;
        linhaGraf.push({
            x,
            y
        });
        testeLInha.push([x,y])

    } else {
        y = VetDependente[0];
        console.log(Lmenor)
        console.log(b)
        x = (y - b) / a
        //    x = x / a;
        linhaGraf.push({
            x,
            y
            
        });
        testeLInha.push([x,y])

    }

//    MostraGraCorrelacao();
    outroGrafico()
}



function ordenarVetor(ent) {
    let h = 0;
    for (let i = 0; i < ent.length; i++) {
        h = i;
        while (ent[h + 1] < ent[h]) {
            aux = ent[h + 1];
            ent[h + 1] = ent[h];
            ent[h] = aux
            h--;
        }

    }
}


function calcProjecao(param) {
    let Y, X
    let VarDI = document.getElementById('opproje').value
    let px, py

    if (VarDI == dependente) {
        Y = - param + b
        Y = Y / -(a)
        VetDependente.push(parseFloat(param))
        VetIndependente.push(parseFloat(Y.toFixed(2)))
        px = parseFloat(param)
        py = parseFloat(Y.toFixed(2))
        ordenarVetor(VetDependente)
        ordenarVetor(VetIndependente)

        objDadosGraf = {
            x: py,
            y: px
        }
        dadoGra.push([py,px])
        dadosGraficos.push(objDadosGraf)
        console.log(dadoGra)
        console.log(VetDependente[0])
        console.log(VetIndependente[0])
        // console.log(dadosGraficos)
        document.getElementById('resprojecao').style.display = 'inline'
        let rescorrelacao = document.getElementById('resprojecao')
        rescorrelacao.innerHTML = '<b>' + independente + ' => ' + Y.toFixed(2) + '</b>'
        //         popularGrafico()
    } else {
        X = (a * param) + b
        console.log(X.toFixed(2))
        console.log(dadosGraficos)
        VetDependente.push(parseFloat(X.toFixed(2)))
        VetIndependente.push(parseFloat(param))
        px = parseFloat(param)
        py = parseFloat(X.toFixed(2))
        ordenarVetor(VetDependente)
        ordenarVetor(VetIndependente)
        objDadosGraf = {
            x: px,
            y: py
        }
        dadoGra.push([py,px])
        dadosGraficos.push(objDadosGraf)
        console.log(dadoGra)
        console.log(dadosGraficos)
        console.log(VetDependente[0])
        console.log(VetIndependente[0])
        console.log(dadosGraficos)
        document.getElementById('resprojecao').style.display = 'inline'
        let rescorrelacao = document.getElementById('resprojecao')
        rescorrelacao.innerHTML = '<b>' + dependente + ' => ' + X.toFixed(0) + '</b>'
        //        popularGrafico()
    }

    //  MostraGraCorrelacao()
    popularGrafico()
}

function removeData() {
    myChart.data.datasets[1].data.pop();
    myChart.data.datasets[1].forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


// function MostraGraCorrelacao() {

//     removeData()
//     console.log(linhaGraf)
//     console.log(dadosGraficos)

//     let CanvGraf = '<canvas id="Container" width="780" height="400"></canvas>';
//     let mounGraf = document.getElementById('divGrafico');
//     let titulo = document.getElementById('titulo')
//     titulo.innerHTML = '<font id=ind>' + independente + '</font>    &nbsp;&nbsp;por&nbsp;&nbsp;<font id=dep>' + dependente + '</font>'

//     var ctx = document.getElementById("Contain");

//     var myChart = new Chart(ctx, {
//         type: 'scatter',
//         data: {

//             datasets: [{
//                 label: independente + ' - ' + dependente,
//                 data: dadosGraficos,
//                 backgroundColor: "rgba(255,0,0,1)"
//             },
//             {
//                 type: 'line',
//                 label: 'Reta',
//                 data: linhaGraf,
//                 showLine: true,
//                 backgroundColor: "rgba(0,0,255,0)",
//                 pointBorderColor: "rgba(0,0,255,0)",
//                 borderColor: "rgba(0,0,255,.5)"

//             },

//             ]
//         },
//         events: {
//             render: false
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     beginAtZero: true
//                 }],
//                 xAxes: [{
//                     beginAtZero: true
//                 }]
//             }
//         }
//     });
// }



function outroGrafico(){

    Highcharts.chart('GraGra', {
        chart: {
            type: 'scatter',
            zoomType: 'yx'
        },
        title: {
            text: 'GRAFICO DE DISPERSÃO'
        },
        subtitle: {
            text: 'Correlação entre: ' + independente + ' VS ' + dependente,
        
        },
        legend: {
            align: 'auto',
            verticalAlign: 'top',
            x: 100,
            y: 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
            }
        },
        series: [{
            name:  independente + ' - ' + dependente,
            color: 'rgba(223, 83, 83, .5)',
            data: dadoGra
    
        },
        {
            type: 'line',
            name: equi.replace(/&nbsp;/g,' '),
            data: linhaGraf,
        }]
    });
    

}
