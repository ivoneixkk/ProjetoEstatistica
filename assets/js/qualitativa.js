//let vetor = []; //entrada de dados
//let vetOrd = [];
//let Elementos = [];
let Repeticao = [];
let vetpreferencia = []
let testvalores = []
let repetido = []; //elementos repedidos
let Elementos = [];
let vetEnt = [];
let media = 0;
let organiz = [];
vetpeglista = []

//let GFac = []; //Guardar as posiçoes Fac num vetor; 
//let infDados = {}; //objeto dados da tabela
let Dadostabela = [];//armazenar infDados dentro desse vetor
let Media = 0; //usar media como global
//let I, Ic;//VARIAVEL NUMEROS DE CLASSE E INTERVALO DE CLASSE
let somatorioFi = 0; //somatorio de 
//let modal = 0;
//let king = 0;   
let vetObjeto = [];
// desejaOrdenar()

// function desejaOrdenar() {
//     let desj = '<center><div id="desjOrdenar">Deseja ordenar a tabela<br>'
//     desj += '<input type="radio" id="sel1" onclick="executar()" class="coluna2" name="desj" value="S"> Sim'
//     desj += '<input type="radio" id="sel2" onclick="executar()" class="coluna3" name="desj" value="N" > Nao</div></center>'
//     let mdesj = document.getElementById('organizar');
//     //   document.write(mounTable3)
//     mdesj.innerHTML = desj;

// }

executar()
//organizarDados(org)
function executar() {
    vetor = []
    let testevar = queryString("vetor");
    console.log(testevar)
    testvalores = queryString("valores");
    testvalores = testvalores.split(',');
    testevar = testevar.split(',');
    for (let i = 0; i < testevar.length; i++) {
        vetor[i] = testevar[i];
        ''
    }
    console.log(vetor);
    ordenarVetor(vetor);
    repeticao(vetor, testvalores[0], testvalores[1]);
    //    let tickado = document.getElementById('sel1').checked;
    //    console.log(tickado)
    organizarDados(organiz);

    // } else {
    //     //   pegarPreferencias(organiz);
    //     qualiTabela(vetor, testvalores[0], testvalores[1]);
    // }
    // //  mountarTabelaResultados(vetor);
    //  MostraGra(repetido, testvalores);
    //  desvioPadrao();


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


//#####################################################################################################
//#         ORDENAÇAO DA ENTRADA DOS DADOS                                                            #
//#####################################################################################################



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
    return ent;
}



function repeticao(vet, val1, val2) {

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
            Elementos.push(val1 + "     " + vet[i]);
            organiz.push(vet[i]);
            dadosEnt = {
                elementos: vet[i],
                repeticao: qtd,
            }

            vetEnt.push(dadosEnt);
        }
        qtd = 0;
    }

    maior = vetEnt[0].repeticao;
    //    console.log(vetEnt)
    return vetEnt
    //    console.log(organiz)
}

console.log(Repeticao);
console.log(vetEnt)

function organizarDados(org) {

    let mountDados = '<ul id="sortable">'
    for (let i = 0; i < org.length; i++) {
        mountDados += "<li id=org" + i + " class=listaQ>" + org[i] + "</li>"
    }
    mountDados += '</ul><input type="button"  id="btnexecutar"   onclick="pegarPreferencias(organiz)" value="OK">'

    var orgdados = document.getElementById('teste');
    //   document.write(mounTable3)

    orgdados.innerHTML = mountDados;
    $(function () {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });
}

function pegarPreferencias(org) {
    document.getElementById('btnexecutar').style.display = 'none';

    // $(document).ready(function () {
    //     var vetlis = $("div").children().find(".listaQ");
    //     $.each(vetlis, function (index, item) {
    //         vetpeglista.pus(console.log($(item).text()));

    //     });
    // });

    $('#sortable li').each(function (index, element) {
        vetpeglista.push(element.innerHTML);
    });

    console.log(vetpeglista[0])
    console.log(vetEnt[0].elementos)

    let preferencias = {}
    let nome
    for (let i = 0; i < org.length; i++) {
        for (let h = 0; h < org.length; h++) {
            if (vetpeglista[i] == vetEnt[h].elementos) {
                nome = vetpeglista[i]
                preferencias = {
                    elementos: nome,
                    repeticao: vetEnt[h].repeticao,
                    id: (parseInt(document.getElementById('org' + h).value) - 1)

                }
            }
        }

        vetpreferencia.push(preferencias)
    }
    //vetpreferencia.sort(function (a, b) { return a.id - b.id; });
    console.log(vetpreferencia);


    vetEnt = []

    console.log(vetEnt)
    vetEnt = vetpreferencia.slice()
    console.log(vetEnt)
    document.getElementById('container').style.display = 'inline-block'

    document.getElementById('tabelaDados').style.display = 'inline-block'
    document.getElementById('tabDados').style.display = 'inline-block'
    document.getElementById('tabResultado').style.display = 'inline-block'

    document.getElementById('organizar').style.display = 'none'
    document.getElementById('sortable').style.display = 'none'
    document.getElementById('btnexecutar').style.display = 'none'
    document.getElementById('titDrag').style.display = 'none'


    qualiTabela(vetor, testvalores[0], testvalores[1])
    tabelaMediaModa()
    MostraGraQuali(vetpreferencia, testvalores)


}


function qualiTabela(vet, val1, val2) {

    let mounTable3 = "<strong>TABELA DE ANALISE DOS DADOS</strong>";


    mounTable3 += "<table>";
    mounTable3 += "<tr>";
    mounTable3 += "<th>" + val1 + "</th>";
    mounTable3 += "<th>N.: " + val2 + "(fi)</th>";
    mounTable3 += "<th>fr %</th><th>F ac</th>";
    mounTable3 += "<th>F %</th>";
    mounTable3 += "</tr>";
    let dadosObjeto = {}
    let porcfi = 0;
    let fiacu = 0;
    let porfiacu = 0;
    let mediana = 0;
    console.log(vetEnt)
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
        console.log(media)
        dadosObjeto = {
            VarPesquisada: vetEnt[i].elementos,
            Numero_elementos: vetEnt[i].repeticao,
            Fi_frequencia_porcentagem: porcfi.toFixed(2),
            Fac_acumulado: fiacu,
            Fac_porcentagem: porfiacu.toFixed(2),
            Somatorio_fi: total
        }


        vetObjeto.push(dadosObjeto);
    }

    console.log(vetObjeto)
    for (let h = 0; h < vetEnt.length; h++) {
        if (vetEnt[h].repeticao > maior) {
            maior = vetEnt[h].repeticao;

        }
    }
    console.log(media)
    mounTable3 += "</tr>";
    mounTable3 += "</table>";
    var tabela4 = document.getElementById('tabDados');
    //   document.write(mounTable3)
    console.log(tabela4)
    tabela4.innerHTML = mounTable3;
}

function tabelaMediaModa() {
    let maior=0
    let moda
    let tott =0
    for (let h = 0; h < vetEnt.length; h++) {
        if (vetEnt[h].repeticao > maior) {
            maior = vetEnt[h].repeticao;
            moda = vetEnt[h].elementos
        
        }
        tott += vetEnt[h].repeticao

    }
    console.log(maior)
    console.log(tott)
    media = tott / vetEnt.length
    let Mtabresultado = '<table id=ResultQuali>'
    Mtabresultado += '<th colspan=4>Resultados Obtidos</th>'
    Mtabresultado += '<tr><th>Media</th><td>' + media + '</td>'
    Mtabresultado += '<th>Moda</th><td>' + moda + '</td></tr>'
    let MostraRes = document.getElementById('tabResultado')
    MostraRes.innerHTML = Mtabresultado
}


function MostraGraQuali(dado, val1) {
    console.log(dado)
    let dadosV = []
    for (let i = 0; i < dado.length; i++) {
        let dadosi = []
        dadosi.push(dado[i].elementos)
        dadosi.push(dado[i].repeticao)

        dadosV.push(dadosi)

    }





    console.log(dadosV)


    Highcharts.chart('container', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: testvalores[0] + ' - por - ' + testvalores[1]
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: testvalores[0] + ' - por - ' + testvalores[1],
            data: dadosV
        }]
    });
}

