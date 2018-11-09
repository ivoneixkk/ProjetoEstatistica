let vetor = [];
let Repeticao = [];
let Elementos = [];
let Lvalor = []
let valores = []
let dependente, independente
let testvar
let landing;


//#####################################################################################################
//#         Landing Page                                                                              #
//#####################################################################################################

landing = queryString('landing')
console.log(landing)

if (landing == 0) {
    document.getElementById('carrousel').style.display = 'inline'
    document.getElementById('carrousel').style.display = 'none'
    document.getElementById('dadosEntrada').style.display = 'inline-block'

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




$(document).ready(function () {

    var speed = 5000;
    var run = setInterval('rotate()', speed);
    var item_width = $('#itens li').outerWidth();
    var left_value = item_width * (-1);
    $('#itens li:first').before($('#itens li:last'));
    $('#itens ul').css({ 'left': left_value });
    $('#prev').click(function () {

        var left_intend = parseInt($('#itens ul').css('left')) + item_width;
        $('#itens ul').animate({ 'left': left_intend }, 200, function () {
            $('#itens li:first').before($('#itens li:last'));
            $('#itens ul').css({ 'left': left_value });
        });
        clearInterval(run);
        run = setInterval('rotate()', speed);

    });

    $('#next').click(function () {

        var left_intend = parseInt($('#itens ul').css('left')) - item_width;
        $('#itens ul').animate({ 'left': left_intend }, 200, function () {
            $('#itens li:last').after($('#itens li:first'));
            $('#itens ul').css({ 'left': left_value });
        });

        clearInterval(run);
        run = setInterval('rotate()', speed);

    });

    $('#itens').hover(
        function () {
            clearInterval(run);
            disableScroll();
        },
        function () {
            run = setInterval('rotate()', speed);
            enableScroll();
        }
    )

});


function rotate() {
    $('#next').click();
}

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }

}
function disableScroll() {
    window.onwheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;


}





function someLanding() {

    document.getElementById('carrousel').style.display = 'none';
    document.getElementById('dadosEntrada').style.display = 'inline-block'
    document.body.style.backgroundColor = '#f1f1f1'
}









//#####################################################################################################
//#         PEGAR DIGITACAO DO USUARIO                                                                #
//#####################################################################################################

function DigitaUsuario() {
    let vetdigitado = []
    let digitado = campo4.value
    if (digitado.indexOf(" ") > 0) {
        digitado = digitado.trim().replace(/[\s]+/g, ';')

        console.log(digitado)

    } else if (digitado.indexOf(",") > 0) {
        digitado = digitado.trim().replace(/,+/g, ';')

        console.log(digitado)
    }
    vetdigitado = digitado.split(";")
    testvar = parseFloat(vetdigitado[0])

    console.log(testvar)
    for (let j = 0; j < vetdigitado.length; j++) {
        if (isNaN(testvar)) {
            vetor.push(vetdigitado[j].trim());

        } else {
            vetor.push(parseFloat(vetdigitado[j]));
        }

    }


    achar()
    chamarPagina('descritivas')

    console.log(vetor);
    //    chamarPagina('descritivas')
}


//#####################################################################################################
//#         MUDAR ESTADO DA DIV                                                                       #
//#####################################################################################################
function ChamarDiv(el) {

    //var display = document.getElementById(el).style.display;
    let display = el
    let lengthLvalor
    console.log(el)
    //    console.log(display)
    // if (display == "") {
    //     document.getElementById(el).style.display = 'block';
    //     document.getElementById('escolha').style.display = 'none';
    // }
    if (display == "estatisticaDescritiva") {



        document.getElementById('logoIndex').style.display = 'none';
        document.getElementById('estatisticaDescritiva').style.display = 'inline';
        document.getElementById('btnCorre').style.display = 'none';
        document.getElementById('btnDist').style.display = 'none';
        document.getElementById('btnDescri').style.display = 'none';
        document.getElementById('btnvoltarindex').style.display = 'inline';
    }
    else if (display == "correlacao") {
        document.getElementById('logoIndex').style.display = 'none';
        document.getElementById('estatisticaDescritiva').style.display = 'none';
        document.getElementById('btnDist').style.display = 'none';
        document.getElementById('btnDescri').style.display = 'none';
        document.getElementById('btnCorre').style.display = 'none';
        document.getElementById('btnCorrevoltarindex').style.display = 'inline';
        document.getElementById('correlacao').style.display = "block";
        document.getElementById('escCorre').style.display = 'inline';


    } else if (display == "importarC") {
        independente = document.getElementById("Independ").value;
        dependente = document.getElementById("Depend").value;

        if (independente == "" || dependente == "") {
            document.getElementById('erro').style.display = "inline"
            return ChamarDiv('correlacao')
        } else {
            document.getElementById('erro').style.display = "none"

            document.getElementById('btnImpC').style.display = 'none';
            document.getElementById('importarC').style.display = 'inline';
        }
    } else if (display == "importar") {
        lengthLvalor = Lvalor.length

        if (valores == " " || lengthLvalor == 0) {
            console.log(Lvalor)
            document.getElementById('erroD').style.display = "inline"
            document.getElementById('btnDigi').style.display = "none"

            return ChamarDiv('estatisticaDescritiva')
        } else {

            document.getElementById('erroD').style.display = "none"
            document.getElementById('escolha').style.display = 'none';
            document.getElementById('btnvoltarindex').style.display = 'none';
            document.getElementById('importar').style.display = 'inline';
            document.getElementById('btnDigi').style.display = 'none';
            document.getElementById('btnImp').style.display = 'none';



        }


    } else if (display == "digitarr") {
        document.getElementById('importar').style.display = 'none';

        lengthLvalor = Lvalor.length

        if (valores == " " || lengthLvalor == 0) {
            console.log(Lvalor)
            document.getElementById('erroD').style.display = "inline"
            document.getElementById('btnImp').style.display = 'none';

            return ChamarDiv('estatisticaDescritiva')
        } else {
            document.getElementById('erroD').style.display = "none"
            document.getElementById('escolha').style.display = 'none';
            document.getElementById('digitarr').style.display = 'inline';
            document.getElementById('btnexecutar2').style.display = 'inline';
            document.getElementById('btnvoltarindex').style.display = 'none';
            document.getElementById('btnDigi').style.display = 'none';
            document.getElementById('btnImp').style.display = 'none';

        }
    } else if (display == "escolha") {
        document.getElementById('digitarr').style.display = 'none';
        document.getElementById('escolha').style.display = 'inline';
        document.getElementById('btnvoltarindex').style.display = 'inline';
        document.getElementById('btnImp').style.display = 'inline';
        document.getElementById('btnDigi').style.display = 'inline';
    }
    else if (display == "escolhaDigi") {
        document.getElementById('importar').style.display = 'none';
        document.getElementById('escolha').style.display = 'inline';
        document.getElementById('btnvoltarindex').style.display = 'inline';
        document.getElementById('btnImp').style.display = 'inline';
        document.getElementById('btnDigi').style.display = 'inline';

    }


    // else {
    //     document.getElementById(el).style.display = 'none';
    //     document.getElementById('escCorre').style.display = 'block';
    // }
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
function mudarDiv(condic) {
    console.log(condic)
    var input, fileName, elementoD
    if (condic == "arqCorr") {
        input = document.getElementById('inputCSVC');
        fileName = document.getElementById('file-namec');
        elementoD = "btnexecutarc"

    }
    if (condic == "arqDesc") {
        input = document.getElementById('inputCSV');
        fileName = document.getElementById('file-name');
        elementoD = "btnexecutar"

    }
    input.addEventListener('change', function () {
        fileName.textContent = this.value;
        var display = document.getElementById(elementoD).style.display = 'block';
        document.getElementById(elementoD).style.display = 'block';
    });
    achar();
}

function achar() {
    let varpesq = document.getElementById('campo1').value;
    let fipesq = document.getElementById('campo2').value;

    valores.push(varpesq)
    console.log(valores)
    valores.push(fipesq)
    console.log(valores);
}

//#####################################################################################################
//#         IMPORTACAO DO ARQUIVO                                                                     #
//#####################################################################################################



var fileArr
var strCorre
var testCSV
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

    strCorre = evt.target.result.replace('\n', '-');
    fileArr = evt.target.result.split('n');


    for (var i = 0; i < fileArr.length; i++) {

        var fileLine = fileArr[i].split(';');

        testvar = parseFloat(fileLine[0])
        for (var j = 0; j < fileLine.length; j++) {
            if (isNaN(testvar)) {
                vetor.push(fileLine[j].trim());

            } else {
                vetor.push(parseFloat(fileLine[j].trim()));
            }
        }
    }

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


function chamarPagina(condic) {

    var tamanho = [];

    tamanho = tirarRepetidos(vetor)
    console.log(tamanho);
    typeof (vetor)

    if (condic == 'descritivas') {

        if (isNaN(testvar)) {
            return window.location.href = "teamplates/qualitativa.html?vetor=" + vetor + "&valores=" + valores + "&Lvalor=" + Lvalor

        } else if (tamanho.length <= 7) {
            return window.location.href = "teamplates/Discreta.html?vetor=" + vetor + "&valores=" + valores + "&Lvalor=" + Lvalor
        } else {
            return window.location.href = "teamplates/Continua.html?vetor=" + vetor + "&valores=" + valores + "&Lvalor=" + Lvalor
        }
    } else if (condic == 'correlacao') {
        return window.location.href = "teamplates/Correlacao.html?dependente=" + dependente + "&independente=" + independente + "&docimport=" + strCorre

    }




}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

