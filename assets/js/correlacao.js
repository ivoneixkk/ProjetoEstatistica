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

////////////////////////////////////////////////////////////////////////////
console.log(dependente)
console.log(independente)
for (let i = 0; i < dependente.length; i++) {

    if (dependente.match('%20')) {

        let auxTestDependente;
        auxTestDependente = dependente.split('%20');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            dependente += auxTestDependente[j] + ' ';
        }
    }

    if (dependente.match('%C3%A1')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%A1');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'á';
            }
        }
    }
    if (dependente.match('%C3%81')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%81');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Á';
            }
        }
    }

    if (dependente.match('%C3%89')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%89');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'É';
            }
        }
    }
    if (dependente.match('%C3%A9')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%A9');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'é';
            }
        }
    }


    if (dependente.match('%C3%AD')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%AD');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'í';
            }
        }
    }
    if (dependente.match('%C3%8D')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%8D');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Í';
            }
        }
    }


    if (dependente.match('%C3%B3')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%B3');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'ó';
            }
        }
    }
    if (dependente.match('%C3%93')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%93');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Ó';
            }
        }
    }


    if (dependente.match('%C3%BA')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%BA');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'ú';
            }
        }
    }


    if (dependente.match('%C3%9A')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%9A');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Ú';
            }
        }
    }


    if (dependente.match('%C3%BD')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%BD');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'ý';
            }
        }
    }

    if (dependente.match('%C3%9D')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%9D');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Ý';
            }
        }
    }

    if (dependente.match('%C3%A2')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%A2');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'â';
            }
        }
    }


    if (dependente.match('%C3%AA')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%AA');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'ê';
            }
        }
    }

    if (dependente.match('%C3%B4')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%B4');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'ô';
            }
        }
    }

    if (dependente.match('%C3%82')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%82');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Â';
            }
        }
    }


    if (dependente.match('%C3%8A')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%8A');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Ê';
            }
        }
    }

    if (dependente.match('%C3%94')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%94');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Ô';
            }
        }
    }

    if (dependente.match('%C3%87')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%87');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Ç';
            }
        }
    }

    if (dependente.match('%C3%A7')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%A7');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'ç';
            }
        }
    }

    if (dependente.match('%C3%83')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%83');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Ã';
            }
        }
    }
    if (dependente.match('%C3%A3')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%A3');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'ã';
            }
        }
    }

    if (dependente.match('%C3%95')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%95');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'Õ';
            }
        }
    }
    if (dependente.match('%C3%B5')) {
        let auxTestDependente;
        auxTestDependente = dependente.split('%C3%B5');
        dependente = ''
        for (let j = 0; j < auxTestDependente.length; j++) {
            if (j == auxTestDependente.length - 1) {
                dependente += auxTestDependente[j];
            } else {
                dependente += auxTestDependente[j] + 'õ';
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < independente.length; i++) {

    if (independente.match('%20')) {

        let auxTestDependente;
        auxTestIndependente = independente.split('%20');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            independente += auxTestIndependente[j] + ' ';
        }
    }

    if (independente.match('%C3%A1')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%A1');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'á';
            }
        }
    }
    if (independente.match('%C3%81')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%81');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Á';
            }
        }
    }

    if (independente.match('%C3%89')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%89');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'É';
            }
        }
    }
    if (independente.match('%C3%A9')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%A9');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'é';
            }
        }
    }


    if (independente.match('%C3%AD')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%AD');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'í';
            }
        }
    }
    if (independente.match('%C3%8D')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%8D');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Í';
            }
        }
    }


    if (independente.match('%C3%B3')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%B3');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'ó';
            }
        }
    }
    if (independente.match('%C3%93')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%93');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Ó';
            }
        }
    }


    if (independente.match('%C3%BA')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%BA');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'ú';
            }
        }
    }


    if (independente.match('%C3%9A')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%9A');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Ú';
            }
        }
    }


    if (independente.match('%C3%BD')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%BD');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'ý';
            }
        }
    }

    if (independente.match('%C3%9D')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%9D');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Ý';
            }
        }
    }

    if (independente.match('%C3%A2')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%A2');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'â';
            }
        }
    }


    if (independente.match('%C3%AA')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%AA');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'ê';
            }
        }
    }

    if (independente.match('%C3%B4')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%B4');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'ô';
            }
        }
    }

    if (independente.match('%C3%82')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%82');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Â';
            }
        }
    }


    if (independente.match('%C3%8A')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%8A');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Ê';
            }
        }
    }

    if (independente.match('%C3%94')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%94');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Ô';
            }
        }
    }

    if (independente.match('%C3%87')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%87');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Ç';
            }
        }
    }

    if (independente.match('%C3%A7')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%A7');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'ç';
            }
        }
    }

    if (independente.match('%C3%83')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%83');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Ã';
            }
        }
    }
    if (independente.match('%C3%A3')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%A3');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'ã';
            }
        }
    }

    if (independente.match('%C3%95')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%95');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'Õ';
            }
        }
    }
    if (independente.match('%C3%B5')) {
        let auxTestIndependente;
        auxTestIndependente = independente.split('%C3%B5');
        independente = ''
        for (let j = 0; j < auxTestIndependente.length; j++) {
            if (j == auxTestIndependente.length - 1) {
                independente += auxTestIndependente[j];
            } else {
                independente += auxTestIndependente[j] + 'õ';
            }
        }
    }
}

console.log(dependente)
console.log(independente)

//////////////////////////////////////////////////////////////////////////////







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
        dadoGra.push([VetIndependente[i], VetDependente[i]])
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

    document.getElementById('resultadoCorrelacao').innerHTML = '<b>Coeficciente de:</b><br><font class="destacar">' + coeficienteLinear + '</font>'
    let resultadoFinal = Math.abs(resultado)

    if (Math.abs(resultado) == 0) {
        correlacaoForca = "<b>Sem correlação de :</b><br><font class='destacar'> " + Math.abs(resultado) + " % </font>";
    }
    else if (Math.abs(resultado) < 30) {
        correlacaoForca = "<b>Correlação é fraca de :</b><br><font class='destacar'> " + Math.abs(resultado) + " %</font> ";
    }
    else if (Math.abs(resultado) < 60) {
        forca = "<b>Correlação é Média de :</b><br><font class='destacar'> " + Math.abs(resultado) + " %</font>";
    }
    else if (Math.abs(resultado) < 100) {
        correlacaoForca = "<b>Correlação é Forte  de :</b><br><font class='destacar'> " + Math.abs(resultado) + " % </font>";
    }
    else {
        correlacaoForca = "<b>Correlação Perfeita  :</b><br><font class='destacar'> " + Math.abs(resultado) + " % </font>";
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
        equa1grau = '<b>equação é:&nbsp;</b><br> <font class="destacar"> y =&nbsp;' + a.toFixed(2) + '.x&nbsp;&nbsp;+&nbsp;&nbsp;' + b.toFixed(2) + '</font>';
        equi = 'y =&nbsp;' + a.toFixed(2) + '.x&nbsp;&nbsp;+&nbsp;&nbsp;' + b.toFixed(2)
    }
    else {
        equa1grau = '<b>equação é:&nbsp;</b><br><font class"destacar">y =&nbsp;' + a.toFixed(2) + '&nbsp;&nbsp;x&nbsp;&nbsp;' + b.toFixed(2) + '</font>';
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

    testeLInha.push([x, y])
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
        testeLInha.push([x, y])

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
        testeLInha.push([x, y])

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
        dadoGra.push([py, px])
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
        dadoGra.push([px, py])
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

function outroGrafico() {

    var chart = new Highcharts.chart('GraGra', {
        chart: {
            type: 'scatter',
            zoomType: 'yx',
        },
        title: {
            text: 'GRAFICO DE DISPERSÃO'
        },
        subtitle: {
            text: 'Correlação entre: ' + independente + ' VS ' + dependente,

        },
        legend: {
            enabled: false,
            align: 'auto',
            verticalAlign: 'top',
            x: 100,
            y: 50,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        },
        credits:{
            enabled:false,
        },
        yAxis: {
            title: {
                enabled: false
            },
            labels: {
                style: {
                    "color": "black"
                }
            },
        },

        xAxis: {
            labels: {
                style: {
                    "color": "black"
                }
            },
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
                    },
                    style: {
                        color: 'black'
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
            name: independente + ' - ' + dependente,
            color: 'blue',
            data: dadoGra

        },
        {
            type: 'line',
            color: 'black',
            name: equi.replace(/&nbsp;/g, ' '),
            data: testeLInha,
        }]
    });

    chart.reflow();
}

