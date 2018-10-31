//let vetor = []; //entrada de dados
//let vetOrd = [];
//let Elementos = [];
let repetido = []; //elementos repedidos
let mIc = []; //media dos intervalos de classe
let GFac = []; //Guardar as posiçoes Fac num vetor; 
let infDados = {}; //objeto dados da tabela
let Dadostabela = [];//armazenar infDados dentro desse vetor
let Media = 0; //usar media como global
let I, Ic;//VARIAVEL NUMEROS DE CLASSE E INTERVALO DE CLASSE
let somatorioFi = 0; //somatorio de 
//let modal = 0;
let king = 0;
let resPadrao;
//let Lvalor = []

executar();
function executar() {
    let testevar = queryString("vetor");
    let testvalores = queryString("valores");
    Lvalor = queryString("Lvalor");
    Lvalor = Lvalor.split(',');
    console.log(Lvalor);

    testvalores = testvalores.split(',');

/////////////////// CORRIGIR ERRO DE STRING QUANDO HÁ ESPAÇO NA FRASE///////////////////////////////
    for(let i = 0; i < testvalores.length; i++){
        if(testvalores[i].match('%20')){
            let auxTestValores;
            auxTestValores = testvalores[i].split('%20');
            testvalores[i] = ''
            for(let j = 0; j < auxTestValores.length; j++){
                testvalores[i] += auxTestValores[j] + ' ';
            }
        } 
        if(testvalores[i].match('%C3%A7')){
            let auxTestValores;
            auxTestValores = testvalores[i].split('%C3%A7');
            testvalores[i] = ''
            for(let j = 0; j < auxTestValores.length; j++){
                if(j == auxTestValores.length -1){
                    testvalores[i] += auxTestValores[j];
                } else {
                    testvalores[i] += auxTestValores[j] + 'ç';
                }
            } 
        } 
        if(testvalores[i].match('%C3%A3')){
            let auxTestValores;
            auxTestValores = testvalores[i].split('%C3%A3');
            testvalores[i] = ''
            for(let j = 0; j < auxTestValores.length; j++){
                if(j == auxTestValores.length -1){
                    testvalores[i] += auxTestValores[j];
                } else {
                    testvalores[i] += auxTestValores[j] + 'ã';
                }
            }
        }	
    }
/////////////////////////////////////FIM DA CORREÇÃO////////////////////////////////
    



    testevar = testevar.split(',');
    for (let i = 0; i < testevar.length; i++) {
        vetor[i] = parseInt(testevar[i]);
        ''
    }
    console.log(vetor);


    ordenarVetor(vetor);
    mountarTabelaDados(vetor, testvalores[0], testvalores[1]);
    mountarTabelaResultados(vetor);
    MostraGra(repetido, testvalores);
    desvioPadrao();


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



//#####################################################################################################
//#         CALCULO DA MEDIANA                                                                        #
//#####################################################################################################



function medianaCont(vet) {
    let Med = vet.length;

    //ACHAR A POSIÇAO PARA ANALIZAR O CALCULO DA MEDIANA
    //CASO FOR PAR ACHA O MEIO DO VETOR E SOMA COM A PROXIMA POSIÇAO E DIVIDE POR 2
    if (Med % 2 == 0) {
//        alert('sou par');
        Med = vet.length / 2;
        Med = (Med + (Med + 1)) / 2;
    } else {
      //  alert('sou impar');
        //SE FOR IMPAR PEGA O MEIO DO VETOR 
        Med = vet.length / 2;

    }

    return Med;

}










//#####################################################################################################
//#         MONTAR TABELA DE DADOS                                                                    #
//#####################################################################################################

function mountarTabelaDados(vet, val1, val2) {
    let At, Xmax, Xmin;
    let varpesq = val1;
    let fipesq = val2;

    Xmax = vet[vet.length - 1];
    Xmin = vet[0];
    At = Xmax - Xmin;
    let RdK; //ARMAZENAR A RAIZ (K)
    //achar raiz quadrada de K
    //caso XMIN for diferente de 0 SE NAO.
    if (Xmin !== 0) {
        RdK = Math.floor(Math.sqrt(vet.length));
    } else {
        //se nao por essa condiçao estoura uma classe;
        RdK = Math.floor(Math.sqrt(vet.length)) - 1;
    }

    let aClass = [];
    aClass.push(RdK - 1);
    aClass.push(RdK);
    aClass.push(RdK + 1);

    //calcular intervalo de classe
    //usar o proximo At para tentar achar a classe 
    let comp = At + 1;
    // console.log(comp);
    let num = 0;
    for (let i = 0; i < aClass.length; i++) {

        if (comp % aClass[num] == 0) {

            I = aClass[num];//ACHAR A CLASSE
            // console.log(I);
            Ic = comp / I;
            break;
        } else if (i == 2) {
            comp++;
            // console.log(comp);
            num = -1;
            i = 0;

        }
        num++;
    }

    let tabelaDados = '<table>';
    tabelaDados += '<tr>';
    tabelaDados += '<th>Classes</th>';
    tabelaDados += '<th>' + varpesq + '</th>';
    tabelaDados += '<th>N de .:&nbsp;' + fipesq + '</th>';
    tabelaDados += '<th>(Xi)</th>';
    tabelaDados += '<th>Xi.fi</th>';
    tabelaDados += '<th>(fi) % </th>';
    tabelaDados += '<th>Fac</th>';
    tabelaDados += '<th>Fac %</th>';
    let iIc = vetor[0];

    //    console.log(iIc);

    let qtd = 0;

    let fi;

    let Fac = 0;
    let Facp = 0;

    for (let i = 0; i < I; i++) {
        tabelaDados += '<tr>';

        tabelaDados += '<td>' + (i + 1) + '</td>';
        tabelaDados += '<td>' + iIc + '&nbsp;&nbsp;|----------&nbsp;&nbsp;' + (iIc + Ic) + '</td>'
        //media entre os intervalos de classe
        mIc.push((iIc + (iIc + Ic)) / 2); //media dos intervalos de classe


        //      console.log(mIc);

        for (let h = 0; h < vetor.length; h++) {
            if (vetor[h] >= iIc && vetor[h] < (iIc + Ic)) {
                qtd++;
            }


        }
        tabelaDados += '<td>' + qtd + '</td>';

        tabelaDados += '<td>' + mIc[i] + '</td>';

        tabelaDados += '<td>' + mIc[i] * qtd + '</td>';

        repetido.push(qtd);
        somatorioFi += repetido[i];
        console.log(somatorioFi);
        fi = (repetido[i] * 100) / vetor.length;
        tabelaDados += '<td>' + fi.toFixed(0) + '&nbsp;&nbsp; % &nbsp;&nbsp;</td>';
        Fac += repetido[i];


        tabelaDados += '<td>' + Fac; +'&nbsp;&nbsp; % </td>';
        GFac.push(Fac);

        Facp += fi;
        tabelaDados += '<td>' + Facp.toFixed(0) + '&nbsp;&nbsp;%&nbsp;&nbsp;</td>';

        tabelaDados += '</tr>';

        Media += mIc[i] * repetido[i];

        let objTabela = {
            classe: i + 1,
            intervalo_classeI: iIc,
            intervalo_classeF: iIc + Ic,
            media_Ic: iIc + (Ic / 2),
            h_Ic: Ic,
            n_elementos_fi: qtd,
            fi_porcent: fi.toFixed(0),
            fac: Fac,
            facpercent: Facp.toFixed(0)
        };

        iIc = iIc + Ic;

        Dadostabela.push(objTabela);


        qtd = 0;
    }

    //    console.log(Dadostabela);
    Media = Media / vetor.length;

    tabelaDados += '</tr>';
    tabelaDados += '<tr>';
    tabelaDados += '<th colspan=2>Somatorio de Fi</th>';
    tabelaDados += '<th colspan=6>' + somatorioFi + '</th>';


    tabelaDados += '</tr>';

    tabelaDados += '</table>';
    let MostraDados = document.getElementById('tabDadosContinua');
    MostraDados.innerHTML = tabelaDados;



    return Media, MostraDados;

}


//###################################################################################################################

function mountarTabelaResultados() {

    let mediana = medianaCont(vetor);
    let posicao = 0;

    //    console.log(GFac[0]);
    //   //ACHAR A POSIÇAO PARA CALCULO DA MEDIANA
    let lmodal = Dadostabela[0].n_elementos_fi; //achar linha para mostrar modal


    for (let i = 0; i < GFac.length; i++) {
        if (mediana <= GFac[i]) {
            posicao = GFac[i];
            break;
        }
    }
    for (let h = 0; h < Dadostabela.length; h++) {
        if (Dadostabela[h].n_elementos_fi >= lmodal) {
            lmodal = Dadostabela[h].n_elementos_fi;
            modal = Dadostabela[h].media_Ic;
        }
    }
    console.log('posicao é.: ' + posicao);
    console.log('Frequencia acumulada.: ' + GFac);
    console.log(Dadostabela);
    console.log('linha da modal.:' + lmodal);
    //FORMULA DA MEDIANA
    //INTERVALO DE CLASSE INFERIOR + { ( [SOMATORIO DE FI / 2 - Fac anterior] / FI pesquisada )} * Intervalo de classe

    for (let i = 0; i < Dadostabela.length; i++) {
        if (posicao == Dadostabela[i].fac) {
            if (posicao == GFac[0]) {
              //  alert("fac anterior nao existe, entao assume o valor 0 na formula");
                mediana = Dadostabela[i].intervalo_classeI + ((((somatorioFi / 2) - 0) / Dadostabela[i].n_elementos_fi) * Dadostabela[i].h_Ic);
            }
            else {
               // alert('oba achei vou analizar a classe .: ' + Dadostabela[i].classe);
                console.log(Dadostabela[i].intervalo_classeI);
                console.log(somatorioFi);
                console.log(Dadostabela[i - 1].fac);
                console.log(Dadostabela[i].n_elementos_fi);
                console.log(Dadostabela[i].h_Ic);


                mediana = Dadostabela[i].intervalo_classeI + ((((somatorioFi / 2) - Dadostabela[i - 1].fac) / Dadostabela[i].n_elementos_fi) * Dadostabela[i].h_Ic);


            }


            break;
        }

    }






    var mounTable4 = "<table>";
    mounTable4 += "<tr>";
    mounTable4 += "<th colspan=2><strong>RESULTADOS OBTIDOS</th>";
    mounTable4 += "</tr>";
    mounTable4 += "<tr>";
    mounTable4 += "<th>Media</th>";
    mounTable4 += "<td>&nbsp;&nbsp;" + Media.toFixed(2) + "</td>";
    mounTable4 += "<tr>";
    mounTable4 += "<th>Mediana Md </th>";
    mounTable4 += "<td>&nbsp;&nbsp;" + mediana.toFixed(3) + "</td>";
    mounTable4 += "<tr>";
    mounTable4 += "<th>Moda</th>";
    mounTable4 += "<td>&nbsp;&nbsp;" + modal.toFixed(2) + "</td>";
    let pearson = 0;
    pearson = (3 * mediana) - (2 * Media);

    mounTable4 += "</tr>";
    mounTable4 += "<tr>";
    mounTable4 += "<th>Moda de Pearson</strong></th>";
    mounTable4 += "<td>&nbsp;&nbsp;" + pearson.toFixed(2) + "&nbsp;&nbsp;</td>";
    mounTable4 += "</tr>";
    mounTable4 += "<th>Moda de Czuber</strong></th>";
    mounTable4 += "<td>&nbsp;&nbsp;" + modaCk(Dadostabela)[0] + "&nbsp;&nbsp;</td>";
    mounTable4 += "</tr>";
    mounTable4 += "<th>Moda de King</strong></th>";
    mounTable4 += "<td>&nbsp;&nbsp;" + modaCk(Dadostabela)[1] + "&nbsp;&nbsp;</td>";
    mounTable4 += "</tr>";
    mounTable4 += "<tr>"
    mounTable4 += "<th>Desvio padrao</th>"
    mounTable4 += "<td><div id='desviopadrao'></div></td>";
    mounTable4 += "</tr>";
    mounTable4 += "<tr>"
    mounTable4 += "<th><div id='coeficienteTexto'></div></th>"
    mounTable4 += "<td><div id='coeficienteResp'></div></td>"
    mounTable4 += "</tr>"

    mounTable4 += "</table>";
    var tabela4 = document.getElementById('Results');
    tabela4.innerHTML = mounTable4;
}


function separatrizCont() {
    let Lvalor = document.getElementById('campo3').value;
    let lista = document.getElementById('lista').value;
    let Mseparatriz;
    let medidaSeparatriz;
    console.log(Dadostabela);
    function acharPosicao(sep) {
        let Psep = 0;
        let Msep = 0;
        for (let i = 0; i < GFac.length; i++) {
            if (sep <= GFac[i]) {
                Psep = GFac[i];
                break;
            }
        }
    //    alert("sou a posiçao da medida separatriz" + sep);
        let ope1 = 0;
        let ope2 = 0;
        let ope3 = 0;
        let ope4 = 0;

        for (let i = 0; i < Dadostabela.length; i++) {
            if (Psep == Dadostabela[i].fac) {
                if (Psep == GFac[0]) {
                    ope1 = sep - 0;
                    ope2 = ope1 / Dadostabela[i].n_elementos_fi;
                    ope3 = ope2 * Dadostabela[i].h_Ic;
                    ope4 = ope3 + Dadostabela[i].intervalo_classeI;
                    Msep = ope4.toFixed(2);


                    //                    Msep = Dadostabela[i].intervalo_classeI + (((sep - 0) / Dadostabela[i].n_elementos_fi) * Dadostabela[i].h_Ic);

                } else {
                    ope1 = sep - Dadostabela[i - 1].fac;
                    ope2 = ope1 / Dadostabela[i].n_elementos_fi;
                    ope3 = ope2 * Dadostabela[i].h_Ic;
                    ope4 = ope3 + Dadostabela[i].intervalo_classeI;
                    Msep = ope4.toFixed(2);
                    // Msep =  + ((( / ) * 
                }

            }
        }
        console.log(Msep);
        return Msep;
    }
    console.log(lista);
    console.log(Lvalor);
    console.log(somatorioFi);
    switch (lista) {
        case "Q":
            switch (Lvalor) {
                case "1":
                    Mseparatriz = somatorioFi * 25 / 100;
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quartil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML =  Mseparatriz;                    break;
                case "2":
                    Mseparatriz = (somatorioFi * 50) / 100;
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quartil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML =  Mseparatriz;
                    break;

                case "3":
                    Mseparatriz = (somatorioFi * 75) / 100;
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quartil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML =  Mseparatriz;
                    break;
                case "4":
                    Mseparatriz = (somatorioFi * 100) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quartil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML =  Mseparatriz;
                    break;
                default:

                    window.alert("escolha um parametro valido ex(1 , 2 , 3 , 4 )");
            }
            break;

        case "K":
            switch (Lvalor) {
                case "1":
                    Mseparatriz = (somatorioFi * 20) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quintil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz; break;
                case "2":
                    Mseparatriz = (somatorioFi * 40) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quintil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz; break;
                case "3":
                    Mseparatriz = (somatorioFi * 60) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quintil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz; break;
                case "4":
                    Mseparatriz = (somatorioFi * 80) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quintil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz; break;
                case "5":
                    Mseparatriz = (somatorioFi * 100) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Quintil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz; break;

                default:
                    window.alert("escolha um parametro valido ex(1 , 2 , 3 , 4, 5 )");
            }
            break;
        case "D":
            switch (Lvalor) {
                case "1":
                    Mseparatriz = (somatorioFi * 10) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "2":
                    Mseparatriz = (somatorioFi * 20) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "3":
                    Mseparatriz = (somatorioFi * 30) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "4":
                    Mseparatriz = (somatorioFi * 40) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "5":
                    Mseparatriz = (somatorioFi * 50) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "6":
                    Mseparatriz = (somatorioFi * 60) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "7":
                    Mseparatriz = (somatorioFi * 70) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "8":
                    Mseparatriz = (somatorioFi * 80) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "9":
                    Mseparatriz = (somatorioFi * 90) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;
                case "10":
                    Mseparatriz = (somatorioFi * 100) / 100
                    Mseparatriz = acharPosicao(Mseparatriz);
                    document.getElementById('trSeparatriz').style.display = 'table-row'
                    document.getElementById('separatriz1').innerHTML = 'Decil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                    document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;break;

                default:
                    window.alert("escolha um parametro valido ex(1 , 2 , 3 , 4, 5, 6, 7, 8, 9, 10 )");

            }

            break;
        case "P":
            if (Lvalor < 1 || Lvalor > 100) {
                alert('PARAMETRO INVALIDO, DIGITE UM NUMERO DE 1 A 100');
            } else {
                Mseparatriz = somatorioFi * Lvalor / 100
                Mseparatriz = acharPosicao(Mseparatriz);
                document.getElementById('trSeparatriz').style.display = 'table-row'
                document.getElementById('separatriz1').innerHTML = 'Porcentil &nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;&nbsp;&nbsp;&nbsp; ' + Lvalor;
                document.getElementById('resulSeparatriz1').innerHTML = Mseparatriz;
            }
            break;
        default:
            alert("escolha um parametro valido");

    }
}

function desvioPadrao() {
    // classe: i + 1,
    // intervalo_classeI: iIc,
    // intervalo_classeF: iIc + Ic,
    // media_Ic: iIc + (Ic / 2),
    // h_Ic: Ic,
    // n_elementos_fi: qtd,
    // fi_porcent: fi.toFixed(0),
    // fac: Fac,
    // facpercent: Facp.toFixed(0)


//    let Lvalor = document.getElementsByName('desvio');
    resPadrao = 0;
    let teste1 = 0;
    let coeficiente = 0;
    for (var i = 0; i < Lvalor.length - 1; i++) {
        if (Lvalor[i] == "true") {
            for (let i = 0; i < Dadostabela.length; i++) {
                teste1 = Math.pow(Dadostabela[i].media_Ic - Media, 2) * Dadostabela[i].n_elementos_fi;
                resPadrao = resPadrao + teste1;
                console.log(teste1);
            }
            console.log(resPadrao);
            resPadrao = resPadrao / (somatorioFi - 1);
            resPadrao = Math.sqrt(resPadrao).toFixed(2);
            coeficiente = Math.round(((resPadrao / Media) * 100).toFixed(2));

            document.getElementById('desviopadrao').innerHTML =  resPadrao ;
            document.getElementById('coeficienteTexto').innerHTML = 'Amostra Coeficiente de Variação:';
            document.getElementById('coeficienteResp').innerHTML = coeficiente + "%";

            break;
        } else if (Lvalor[i + 1] == "true") {
            for (let i = 0; i < Dadostabela.length; i++) {
                teste1 = Math.pow(Dadostabela[i].media_Ic - Media, 2) * Dadostabela[i].n_elementos_fi;
                resPadrao = resPadrao + teste1;
                console.log(teste1);
            }
            console.log(resPadrao);
            resPadrao = resPadrao / (somatorioFi);
            resPadrao = Math.sqrt(resPadrao).toFixed(2);
            coeficiente = Math.round(((resPadrao / Media) * 100).toFixed(2));

            document.getElementById('desviopadrao').innerHTML = resPadrao;
            document.getElementById('coeficienteTexto').innerHTML = 'Populacao Coeficiente de Variação:';
            document.getElementById('coeficienteResp').innerHTML = coeficiente + "%";

            break;
        } else {
            alert('POR FAVOR ESCOLHA \n [AMOSTRA OU POPULACAO] para podermos calcular o Desvio padrao');
            break;
        }
    }

}

function modaCk(Dadostabela) {

    let czuber = 0;
    let king = 0;
    let ope1 = 0;
    let ope2 = 0;
    let ope3 = 0;
    let ope4 = 0;
    let ope5 = 0;
    let fiant = 0;
    for (let i = 0; i < Dadostabela.length; i++) {
        if (modal == Dadostabela[i].media_Ic) {
            if (Dadostabela[i].classe == 1) {
                fiant = 0;
                ope1 = Dadostabela[i].n_elementos_fi - fiant;
            } else {
                fiant = Dadostabela[i - 1].n_elementos_fi;
                ope1 = Dadostabela[i].n_elementos_fi - fiant;
            }
            ope2 = (2 * Dadostabela[i].n_elementos_fi) - (fiant + Dadostabela[i + 1].n_elementos_fi);
            ope3 = ope1 / ope2;
            ope4 = ope3 * Dadostabela[i].h_Ic;
            ope5 = ope4 + Dadostabela[i].intervalo_classeI;

            king = Dadostabela[i].intervalo_classeI + ((Dadostabela[i + 1].n_elementos_fi / (fiant + Dadostabela[i + 1].n_elementos_fi)) * Dadostabela[i].h_Ic)

            break;

        }
    }
    console.log(king);

    return [Math.round(ope5), king.toFixed(2)];
}





//###################################################################################################################
function MostraGra(dado, val1) {
    let eixoh = []
    for (let i = 0; i < dado.length; i++) {
        eixoh.push(Dadostabela[i].intervalo_classeI)
        if (i == dado.length - 1) {
            eixoh.push(Dadostabela[i].intervalo_classeF)
        }

    }
    eixoh.push(' ')
    dado.push(' ')
    eixoh.unshift(' ')
    dado.unshift(' ')

    console.log(eixoh)
    var data = eixoh
    // [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];

    Highcharts.chart('container', {
        chart: {
            type: 'histogram',

        },
        title: {
            text: val1[0] + '-' + val1[1]
        },
        subtitle: {
            text: ''
        },
        legend:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        xAxis: {
 //           alignTicks: false,
            categories: data,
//            crosshair: true,
   //         type: 'scatter'
        },
        yAxis: {
            labels:{
                format:'{value}\%'
            },
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px"></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            histogram: {
                pointPadding: 0,
                borderWidth: 0,
                borderColor: 'black',
                groupPadding: 0,
                shadow: false
            }
        },
        series: [{

            colorByPoint: true,
            name: val1[1],
            data: dado,
            borderWidth: 1,
            borderColor: 'black',

        }]
    });
}

function chamaDistribuicao(){
    return window.location.href = "Distribuicoes.html?media=" + Media + "&desvio=" + resPadrao
}



