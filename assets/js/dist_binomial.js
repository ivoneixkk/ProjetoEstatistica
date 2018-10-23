

function fatorialRecursivo(num) {
    if (num < 0) {//nao existe numero fatorial negativo
        return -1; //sai do programa
    }
    else if (num == 0) {//condiçao de parada
        return 1;

    } else {
        return (num * fatorialRecursivo(num - 1));//chama a recursividade ...
    }
}

let p;
function tabelaBinomial() {
    p = document.getElementById('pesquisap').value;


    let mountTable = '<table id="Tbinomial">';
    mountTable += '<tr>';
    mountTable += '<th>';
    mountTable += '';
    mountTable += '</th>';
    mountTable += '<th>';

    let contaPalavra = [];
    contaPalavra.push(document.getElementById('ppesquisa').value);
    mountTable += document.getElementById('pesquisa').value;
    mountTable += '</th>';
    mountTable += '<th>';
    mountTable += 'Porcentagem (%)';
    mountTable += '</th>';
    mountTable += '</tr>';
    mountTable += '<tr>';
    mountTable += '<td>';
    mountTable += document.getElementById('ppesquisa').value;
    mountTable += '</td>';
    mountTable += '<td>';
    mountTable += p;
    mountTable += '</td>';
    mountTable += '<td>';
    mountTable += p + '(%) ==  ' + p / 100;
    mountTable += '</td>';
    mountTable += '</tr>';

    mountTable += '<tr>';
    mountTable += '<td>';
    if (contaPalavra.length > 1) {
        mountTable += contaPalavra[1];

    } else {
        mountTable += 'Nao &nbsp;' + contaPalavra[0];

    }
    console.log(contaPalavra);

    mountTable += '</td>';
    mountTable += '<td>';
    mountTable += 100 - p;
    mountTable += '</td>';
    mountTable += '<td>';
    mountTable += 100 - p + '(%) ==  ' + ((100 - p) / 100);
    mountTable += '</td>';
    mountTable += '</tr>';

    mountTable += '</table>';
    let tabelaB = 'Tabela binomial  :&nbsp;&nbsp;' + mountTable;
    document.getElementById('tabelab').innerHTML = tabelaB;
}

function acharEvento() {
    p = document.getElementById('pesquisap').value;
    let eventok = (parseInt(document.getElementById('pesquisan').value) / 100) * p;
    let resultv = 'R:&nbsp;&nbspQuantidade de;&nbsp;&nbsp;' + eventok;
    document.getElementById('resultadoDistribuicao').innerHTML = resultv;
    console.log(p);
    //    console.log()
}

function varianciaB() {
    let vp, vq, vn, resv,vu;
    vp = p / 100;
//    vp = document.getElementById('pesquisap').value;
    vn = parseInt(document.getElementById('pesquisan').value);
    vq = 100 - p;
    vu = vn * vp;
    resv = vp * vn * (vq/100);
    console.log(vp)
    console.log(vn)
    console.log(vq)
    
    let resultv = 'Variancia de&nbsp;:&nbsp;' + resv;
    document.getElementById('resultadoDistribuicao').innerHTML = resultv;
    console.log(vp);
    console.log(vn);
    console.log(vq);
}


function DistBinomial() {
    tabelaBinomial();
    let escolha = document.getElementById('opbinomial').value;
    let pK, analize, vp, vq, vk, vn, count;
    vp = p / 100;
    vk = parseInt(document.getElementById('pesquisak').value);
    vq = (100 - p) / 100;
    vn = parseInt(document.getElementById('pesquisan').value);
    switch (escolha) {
        case "maximo":
            count = vk;
            vk = 0;
            break;
        case "minimo":
            count = vn - vk;
            vk = vk;
            break;
        case "deque":
            count = 0;
            break;
        case "maisque":
            count = vn - vk;
            break;
        case "menosque":
            count = vk - 1;
            vk = 0;
            break;
        case "pelomenos":
            count = vn - vk;
            vk = vk;
            break;
        case "todos":
            count = 0;
            break;
        case "exatamente":
            count = 0;
            break;
        case "acharQtd":
            return acharEvento();

            break;
        case "bvariancia":
            return varianciaB();

            break;


    }



    //###########################################################################################
    //#    fazer a analize combinatoria pra poder usar na formula                               #
    //###########################################################################################




    let vetBinomial = [];


    for (let i = 0; i <= count; i++) {


        //        console.log(vp);
        console.log(vk);
        //        console.log(vq);
        //        console.log(vn);


        let fn, fk, nmenosk, prob;

        if (vn == vk || vk == 0) {
            analize = 1;
        }
        else if (vk == 1) {
            analize = vn;
        }
        else {

            fn = fatorialRecursivo(vn);
            fk = fatorialRecursivo(vk);

            nmenosk = vn - vk;
            analize = fn / (fk * (fatorialRecursivo(nmenosk)));
        }
        console.log(analize);

        prob = analize * Math.pow(vp, vk) * Math.pow(vq, vn - vk);
        console.log(prob);


        vetBinomial.push(prob * 100);
        vk = vk + 1;
    }
    console.log(vetBinomial);
    let resultBinomial = 0;
    for (let i = 0; i < vetBinomial.length; i++) {
        resultBinomial += vetBinomial[i];

    }
    let resultb = 'Probabilidade de :&nbsp;&nbsp;' + resultBinomial.toFixed(2) + '&nbsp;&nbsp;%';
    document.getElementById('resultadoDistribuicao').innerHTML = resultb;


    console.log(resultBinomial);



    // prob = prob * 100;


}