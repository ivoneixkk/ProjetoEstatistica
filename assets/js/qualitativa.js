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
//let GFac = []; //Guardar as posiçoes Fac num vetor; 
//let infDados = {}; //objeto dados da tabela
let Dadostabela = [];//armazenar infDados dentro desse vetor
let Media = 0; //usar media como global
//let I, Ic;//VARIAVEL NUMEROS DE CLASSE E INTERVALO DE CLASSE
let somatorioFi = 0; //somatorio de 
//let modal = 0;
//let king = 0;   
let vetObjeto = [];
desejaOrdenar()

function desejaOrdenar() {
    let desj = '<center><div id="desjOrdenar">Deseja ordenar a tabela<br>'
    desj += '<input type="radio" id="sel1" onclick="executar()" class="coluna2" name="desj" value="S"> Sim'
    desj += '<input type="radio" id="sel2" onclick="executar()" class="coluna3" name="desj" value="N" > Nao</div></center>'
    let mdesj = document.getElementById('organizar');
    //   document.write(mounTable3)
    mdesj.innerHTML = desj;

}

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
    let tickado = document.getElementById('sel1').checked;
    console.log(tickado)
    if (tickado == true) {
        organizarDados(organiz);

    } else {
        //   pegarPreferencias(organiz);
        qualiTabela(vetor, testvalores[0], testvalores[1]);
    }
    //  mountarTabelaResultados(vetor);
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


function organizarDados(org) {
    let mountDados = '<center><div id="titOrd">Enumere os Dados a ser mostrado na ordem de sua Preferência<br><br></div></center><div id="ordDentro">';
    for (let i = 0; i < org.length; i++) {
        mountDados +='<input class="ordInput" name="org"' + i + ' size="2" id="org' + i + '"  type="text" placeholder="1-' + org.length + ' " />&nbsp;&nbsp;'  + org[i] +  '<br>'
    }
    mountDados += '</div><center><input type="button"  id="btnexecutar"  style="display: inline-block"  onclick="pegarPreferencias(organiz)" value="OK"></div></center>'

    var orgdados = document.getElementById('organizar');
    //   document.write(mounTable3)
    orgdados.innerHTML = mountDados;



}

function pegarPreferencias(org) {
        document.getElementById('titOrd').style.display = 'none';
        document.getElementById('ordDentro').style.display = 'none';
        document.getElementById('btnexecutar').style.display = 'none';
     let btnvoltar = '<input type="button"  id="btnvoltar"  style="display: inline-block"  onclick="history.go(0)" value="VOLTAR">'
     let porbtn = document.getElementById('voltarbtn');
     porbtn.innerHTML = btnvoltar


    console.log(org)
    let preferencias = {}
    let nome
    for (let i = 0; i < org.length; i++) {
        nome = org[i]
        preferencias = {
            elementos: nome,
            repeticao: vetEnt[i].repeticao,
            id: (parseInt(document.getElementById('org' + i).value) - 1)
        }

        vetpreferencia.push(preferencias)
    }
    vetpreferencia.sort(function (a, b) { return a.id - b.id; });
    console.log(vetpreferencia);


    vetEnt = []

    console.log(vetEnt)
    vetEnt = vetpreferencia.slice()
    console.log(vetEnt)
    qualiTabela(vetor, testvalores[0], testvalores[1])
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
    media = media / total;
    mounTable3 += "</tr>";
    mounTable3 += "</table>";
    var tabela4 = document.getElementById('tabDados');
    //   document.write(mounTable3)
    console.log(tabela4)
    tabela4.innerHTML = mounTable3;
}


function MostraGraQuali(dado, val1) {
    console.log(dado)
    let dadosV = []
    for (let i = 0; i < dado.length ; i++) {
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
            name: testvalores[0] +' - por - '+ testvalores[1],
            data: dadosV
        }]
    });
}

