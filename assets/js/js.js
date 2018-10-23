let vetor = [];
let Repeticao = [];
let Elementos = [];
let Lvalor = []
let valores = []


//#####################################################################################################
//#         MUDAR ESTADO DA DIV                                                                       #
//#####################################################################################################
function ChamarDiv(el) {
    var display = document.getElementById(el).style.display;
    if (display == "") {
        document.getElementById(el).style.display = 'block';
        document.getElementById('escolha').style.display = 'none';
    }
    else {
        document.getElementById(el).style.display = 'none';
        document.getElementById('escolha').style.display = 'block';
    }
}
//#####################################################################################################
//#####################################################################################################
//#         MUDAR ESTADO DA DIV                                                                       #
//#####################################################################################################
//var   input = document.getElementById('inputCSV');
//var   fileName = document.getElementById('file-name');
//
//input.addEventListener('change', function(){
//  var fileName.textContent = this.value;
//});
function mudarDiv() {
    var input = document.getElementById('inputCSV');
    var fileName = document.getElementById('file-name');

    input.addEventListener('change', function () {
        fileName.textContent = this.value;
        var display = document.getElementById('btnexecutar').style.display = 'block';
        document.getElementById('btnexecutar').style.display = 'block';
    });
    achar();

}

function achar() {
    let varpesq = document.getElementById('campo1').value;
    let fipesq = document.getElementById('campo2').value;

    valores = [varpesq, fipesq]
}

//#####################################################################################################
//#         IMPORTACAO DO ARQUIVO                                                                     #
//#####################################################################################################


var leitorDeCSV = new FileReader()
window.onload = function init() {
    leitorDeCSV.onload = leCSV;
}

for (let i = 0; i < leitorDeCSV.length; i++) {
    vetor.push(FileReader.onload.result);
}



function pegaCSV(inputFile) {
    var file = inputFile.files[0];
    leitorDeCSV.readAsText(file);
}

let testvar

function leCSV(evt) {

    var fileArr = evt.target.result.split('n');
    var strDiv = '<strong>Arquivo CSV importado</strong>';
    strDiv += '<ta  ble>';
    for (var i = 0; i < fileArr.length; i++) {
        strDiv += '<tr>';
        var fileLine = fileArr[i].split(';');
        testvar = parseFloat(fileLine[0])
        for (var j = 0; j < fileLine.length; j++) {
            strDiv += '<td>' + fileLine[j].trim() + '</td>';
            if (isNaN(testvar)) {
                vetor.push(fileLine[j].trim());

            } else {
                vetor.push(parseFloat(fileLine[j].trim()));

            }
        }
        strDiv += '</tr>';
    }

    strDiv += '</table>';
    var CSVsaida = document.getElementById('CSVsaida');
    return vetor;
}
////////////////////////////////// definir se é continua ou discreta///////////////////////////
function tirarRepetidos(vetor) {
    let novoVetor = []
    for (let i = 0; i < vetor.length; i++) {
        if (novoVetor.indexOf(vetor[i]) == -1) {
            novoVetor.push(vetor[i])
        }
    }
    return novoVetor
}


function pegaDesvio() {
    Lvalor.push(document.getElementById('select1').checked)
    Lvalor.push(document.getElementById('select2').checked)
   console.log(Lvalor)
   return Lvalor
}


function chamarPagina() {

    var tamanho = [];

    tamanho = tirarRepetidos(vetor)
    console.log(tamanho);
    typeof (vetor)
    if (isNaN(testvar)) {
        return window.location.href = "teamplates/qualitativa.html?vetor=" + vetor + "&valores=" + valores + "&Lvalor=" + Lvalor

    } else if (tamanho.length <= 7) {
        return window.location.href = "teamplates/Discreta.html?vetor=" + vetor + "&valores=" + valores + "&Lvalor=" + Lvalor
    } else {
        return window.location.href = "teamplates/Continua.html?vetor=" + vetor + "&valores=" + valores + "&Lvalor=" + Lvalor
    }
}

//testando de novo o git
//testando github
///////////////////////////////////////////////////////////////////////////////////////////////////////////

