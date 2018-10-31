//#####################################################################################################
//#         MUDAR ESTADO DA DIV                                                                       #
//#####################################################################################################
function ChamarDiv(el) {
  var display = document.getElementById(el).style.display;
    if (display == ""){
            document.getElementById(el).style.display = 'block';
            document.getElementById('escolha').style.display = 'none';
    }
    else{
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

var   input = document.getElementById('inputCSV');
var   fileName = document.getElementById('file-name');

        input.addEventListener('change', function(){
            fileName.textContent = this.value;
            var display = document.getElementById('btnexecutar').style.display = 'block';
            document.getElementById('btnexecutar').style.display = 'block';
            
        });
        
        
        
        
//#####################################################################################################
let vetor = [];
let vetEnt = [];
let maior;
let Repeticao = [];

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



function leCSV(evt) {

    var fileArr = evt.target.result.split('n');
    var strDiv = '<strong>Arquivo CSV importado</strong>';
    strDiv += '<table>';

    for (var i = 0; i < fileArr.length; i++) {
        strDiv += '<tr>';
        var fileLine = fileArr[i].split(';');

        for (var j = 0; j < fileLine.length; j++) {
            strDiv += '<td>' + fileLine[j].trim() + '</td>';

            vetor.push(parseFloat(fileLine[j].trim()));

        }
        strDiv += '</tr>';
    }

    strDiv += '</table>';
    var CSVsaida = document.getElementById('CSVsaida'); 
    return vetor;
}
////////////////////////////////// definir se é continua ou discreta///////////////////////////
function tirarRepetidos(vetor){
    let novoVetor = []
    for(let i = 0;i < vetor.length; i++){
        if(novoVetor.indexOf(vetor[i]) == -1){
            novoVetor.push(vetor[i])
        }
    }
    return novoVetor
}

function chamarPagina(){
    var tamanho = [];
    tamanho = tirarRepetidos(vetor)
    console.log(tamanho);

    if(typeof vetor[0] == 'string'){
        return window.location.href = "teamplates/qualitativa.html"

    }else if(tamanho.length <= 7){
        return window.location.href = "teamplates/discreta.html"
    } else{
        return window.location.href = "teamplates/continua.html"
    }
}

