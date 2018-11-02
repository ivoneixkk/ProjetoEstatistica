let tabelaNormal = []

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


let dmedia, ddesvio

dmedia = queryString("media");
ddesvio = queryString("desvio");

console.log(dmedia);
console.log(ddesvio);

if (dmedia != undefined && ddesvio != undefined) {
    document.getElementById('normal').style.display = 'block';
    document.getElementById('nmedia').value = dmedia
    document.getElementById('nmedia').style.display = 'focus'
    document.getElementById('ndesvio').value = ddesvio
}


function arrumaElementos(opvalor) {
    let pentre1, pentre2, pn1transf

    console.log(opvalor);
    if (opvalor == "uma" || opvalor == "menor" || opvalor == "maior") {
        document.getElementById('n1transf').style.display = 'inline';
        document.getElementById('ntxate').style.display = 'none';
        document.getElementById('nentre1').style.display = 'none';
        document.getElementById('nentre2').style.display = 'none';
        document.getElementById('dn1transf').style.display = 'none';
        n1transf.placeholder = 'Parametro'
    } else if (opvalor == 'nentre') {
        document.getElementById('n1transf').style.display = 'none';
        document.getElementById('nentre1').style.display = 'inline';
        document.getElementById('nentre2').style.display = 'inline';
        document.getElementById('ntxate').style.display = 'inline';
        document.getElementById('ntxate').innerHTML = '- Ate -';
        pentre1 = document.getElementById('nentre1')
        pentre2 = document.getElementById('nentre2')
        pentre1.placeholder = 'Parametro 1'
        pentre2.placeholder = 'Parametro 2'


    } else if (opvalor == 'menormaior') {
        document.getElementById('n1transf').style.display = 'none';
        document.getElementById('nentre1').style.display = 'inline';
        document.getElementById('nentre2').style.display = 'inline';
        document.getElementById('ntxate').style.display = 'inline';

        pentre1 = document.getElementById('nentre1')
        pentre2 = document.getElementById('nentre2')
        pentre1.placeholder = 'Menorque'
        pentre2.placeholder = 'Maiorque'
        document.getElementById('ntxate').innerHTML = '- OU -';

    } else if (opvalor == 'achaQuantidade') {
        document.getElementById('n1transf').style.display = 'inline';
        document.getElementById('ntxate').style.display = 'none';
        document.getElementById('nentre1').style.display = 'none';
        document.getElementById('nentre2').style.display = 'none';
        pn1transf = document.getElementById('n1transf')
        n1transf.placeholder = 'Digite ( % )'
    } else if (opvalor == 'varianca') {
        document.getElementById('n1transf').style.display = 'none';
        document.getElementById('dn1transf').style.display = 'inline';
        document.getElementById('ntxate').style.display = 'none';
        document.getElementById('nentre1').style.display = 'none';
        document.getElementById('nentre2').style.display = 'none';
        pn1transf = document.getElementById('dn1transf')
        dn1transf.placeholder = 'Digite ( varianca )'
    }
}

function mostraDesvio(num) {
    document.getElementById('dn1transf').style.display = 'none';
    document.getElementById('n1transf').style.display = 'inline';
    document.getElementById('ndesvio').value = Math.sqrt(num);

}

function construirTabela() {
    tabelaNormal.push(['0.0000', '0.0040', '0.0080', '0.0120', '0.0160', '0.0199', '0.0239', '0.0279', '0.0319', '0.0359', '0.0'])
    tabelaNormal.push(['0.0398', '0.0438', '0.0478', '0.0517', '0.0557', '0.0596', '0.0636', '0.0675', '0.0714', '0.0753', '0.1'])
    tabelaNormal.push(['0.0793', '0.0832', '0.0871', '0.0910', '0.0948', '0.0987', '0.1026', '0.1064', '0.1103', '0.1141', '0.2'])
    tabelaNormal.push(['0.1179', '0.1217', '0.1255', '0.1293', '0.1331', '0.1368', '0.1406', '0.1443', '0.1480', '0.1517', '0.3'])
    tabelaNormal.push(['0.1554', '0.1591', '0.1628', '0.1664', '0.1700', '0.1736', '0.1772', '0.1808', '0.1844', '0.1879', '0.4'])
    tabelaNormal.push(['0.1915', '0.1950', '0.1985', '0.2019', '0.2054', '0.2088', '0.2123', '0.2157', '0.2190', '0.2224', '0.5'])
    tabelaNormal.push(['0.2257', '0.2291', '0.2324', '0.2357', '0.2389', '0.2422', '0.2454', '0.2486', '0.2517', '0.2549', '0.6'])
    tabelaNormal.push(['0.2580', '0.2611', '0.2642', '0.2673', '0.2703', '0.2734', '0.2764', '0.2794', '0.2823', '0.2852', '0.7'])
    tabelaNormal.push(['0.2881', '0.2910', '0.2939', '0.2967', '0.2995', '0.3023', '0.3051', '0.3078', '0.3106', '0.3133', '0.8'])
    tabelaNormal.push(['0.3159', '0.3186', '0.3212', '0.3238', '0.3264', '0.3289', '0.3315', '0.3340', '0.3365', '0.3389', '0.9'])
    tabelaNormal.push(['0.3413', '0.3438', '0.3461', '0.3485', '0.3508', '0.3531', '0.3554', '0.3577', '0.3599', '0.3621', '1.0'])
    tabelaNormal.push(['0.3643', '0.3665', '0.3686', '0.3708', '0.3729', '0.3749', '0.3770', '0.3790', '0.3810', '0.3830', '1.1'])
    tabelaNormal.push(['0.3849', '0.3869', '0.3888', '0.3907', '0.3925', '0.3944', '0.3962', '0.3980', '0.3997', '0.4015', '1.2'])
    tabelaNormal.push(['0.4032', '0.4049', '0.4066', '0.4082', '0.4099', '0.4115', '0.4131', '0.4147', '0.4162', '0.4177', '1.3'])
    tabelaNormal.push(['0.4192', '0.4207', '0.4222', '0.4236', '0.4251', '0.4265', '0.4279', '0.4292', '0.4306', '0.4319', '1.4'])
    tabelaNormal.push(['0.4332', '0.4345', '0.4357', '0.4370', '0.4382', '0.4394', '0.4406', '0.4418', '0.4429', '0.4441', '1.5'])
    tabelaNormal.push(['0.4452', '0.4463', '0.4474', '0.4484', '0.4495', '0.4505', '0.4515', '0.4525', '0.4535', '0.4545', '1.6'])
    tabelaNormal.push(['0.4554', '0.4564', '0.4573', '0.4582', '0.4591', '0.4599', '0.4608', '0.4616', '0.4625', '0.4633', '1.7'])
    tabelaNormal.push(['0.4641', '0.4649', '0.4656', '0.4664', '0.4671', '0.4678', '0.4686', '0.4693', '0.4699', '0.4706', '1.8'])
    tabelaNormal.push(['0.4713', '0.4719', '0.4726', '0.4732', '0.4738', '0.4744', '0.4750', '0.4756', '0.4761', '0.4767', '1.9'])
    tabelaNormal.push(['0.4772', '0.4778', '0.4783', '0.4788', '0.4793', '0.4798', '0.4803', '0.4808', '0.4812', '0.4817', '2.0'])
    tabelaNormal.push(['0.4821', '0.4826', '0.4830', '0.4834', '0.4838', '0.4842', '0.4846', '0.4850', '0.4854', '0.4857', '2.1'])
    tabelaNormal.push(['0.4861', '0.4864', '0.4868', '0.4871', '0.4875', '0.4878', '0.4881', '0.4884', '0.4887', '0.4890', '2.2'])
    tabelaNormal.push(['0.4893', '0.4896', '0.4898', '0.4901', '0.4904', '0.4906', '0.4909', '0.4911', '0.4913', '0.4916', '2.3'])
    tabelaNormal.push(['0.4918', '0.4920', '0.4922', '0.4925', '0.4927', '0.4929', '0.4931', '0.4932', '0.4934', '0.4936', '2.4'])
    tabelaNormal.push(['0.4938', '0.4940', '0.4941', '0.4943', '0.4945', '0.4946', '0.4948', '0.4949', '0.4951', '0.4952', '2.5'])
    tabelaNormal.push(['0.4953', '0.4955', '0.4956', '0.4957', '0.4959', '0.4960', '0.4961', '0.4962', '0.4963', '0.4964', '2.6'])
    tabelaNormal.push(['0.4965', '0.4966', '0.4967', '0.4968', '0.4969', '0.4970', '0.4971', '0.4972', '0.4973', '0.4974', '2.7'])
    tabelaNormal.push(['0.4974', '0.4975', '0.4967', '0.4977', '0.4977', '0.4978', '0.4979', '0.4979', '0.4980', '0.4981', '2.8'])
    tabelaNormal.push(['0.4981', '0.4982', '0.4982', '0.4983', '0.4984', '0.4984', '0.4985', '0.4985', '0.4986', '0.4986', '2.9'])
    tabelaNormal.push(['0.4987', '0.4987', '0.4987', '0.4988', '0.4988', '0.4989', '0.4989', '0.4989', '0.4990', '0.4990', '3.0'])
    tabelaNormal.push(['0.4990', '0.4991', '0.4991', '0.4991', '0.4992', '0.4992', '0.4992', '0.4992', '0.4993', '0.4993', '3.1'])
    tabelaNormal.push(['0.4993', '0.4993', '0.4994', '0.4994', '0.4994', '0.4994', '0.4994', '0.4995', '0.4995', '0.4995', '3.2'])
    tabelaNormal.push(['0.4995', '0.4995', '0.4995', '0.4996', '0.4996', '0.4996', '0.4996', '0.4996', '0.4996', '0.4997', '3.3'])
    tabelaNormal.push(['0.4997', '0.4997', '0.4997', '0.4997', '0.4997', '0.4997', '0.4997', '0.4997', '0.4997', '0.4998', '3.4'])
    tabelaNormal.push(['0.4998', '0.4998', '0.4998', '0.4998', '0.4998', '0.4998', '0.4998', '0.4998', '0.4998', '0.4998', '3.5'])
    tabelaNormal.push(['0.4998', '0.4998', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '3.6'])
    tabelaNormal.push(['0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '3.7'])
    tabelaNormal.push(['0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '0.4999', '3.8'])
    tabelaNormal.push(['0.5000', '0.5000', '0.5000', '0.5000', '0.5000', '0.5000', '0.5000', '0.5000', '0.5000', '0.5000', '3.9'])

}

function pesquisarNaTabela(coluna, linha) {
    for (let h = 0; h < tabelaNormal.length; h++) {
        if (coluna == tabelaNormal[h][10]) {
            for (let i = 0; i < tabelaNormal.length; i++) {
                console.log(tabelaNormal[h][linha])
                return tabelaNormal[h][linha]
            }
        }
    }
}

function pesquisaReversa(num) {
    for (let h = 0; h < tabelaNormal.length; h++) {
        for (let i = tabelaNormal.length; i >= 0; i--) {
            if (num == tabelaNormal[h][i]) {
                return tabelaNormal[h][10] + i
            }
        }
    }
}


function DistNormal() {
    let x, y, w, v;
    let nmedia = parseFloat(document.getElementById('nmedia').value);
    let ndesvio = parseFloat(document.getElementById('ndesvio').value);
    let n1transf = parseFloat(document.getElementById('n1transf').value);
    let opnormal = document.getElementById('opnormal').value;
    let formZ1, formZ2, uformZ1, uformZ2
    console.log(opnormal)

    if (n1transf < nmedia) {
        x = 1;
        y = 4;
    } else {
        x = 0;
        y = 3;
    }

    construirTabela()

    console.log(tabelaNormal);

    console.log(ndesvio);
    console.log(nmedia);
    console.log(n1transf)
    //achar o Z para buscar na tabela

    let formZ; //ira servir para pesquisar a coluna
    let uformZ; //ira servir para pesquisar  a linha
    let resultNormal;
    const METAREA = parseFloat(0.5000);
    switch (opnormal) {
        case "uma":
            formZ = ((n1transf - nmedia) / ndesvio).toFixed(2)
            uformZ = formZ.charAt(formZ.length - 1)
            formZ = formZ.substring(x, y)
            if (formZ > 3.9) {
                formZ = "3.9"
            }

            resultNormal = pesquisarNaTabela(formZ, uformZ)
            resultNormal = parseFloat(resultNormal)
            if (x == 1) {
                resultNormal = ((METAREA - resultNormal) * 100).toFixed(2)
            } else {
                resultNormal = ((METAREA + resultNormal) * 100).toFixed(2)

            }


            document.getElementById('resultadoDistribuicao').innerHTML = 'Probabilidade de : ' + Math.abs(resultNormal).toFixed(2) + '%';




            break;

        case "maior":
            formZ = ((n1transf - nmedia) / ndesvio).toFixed(2)
            uformZ = formZ.charAt(formZ.length - 1)
            formZ = formZ.substring(x, y)
            if (formZ > 3.9) {
                formZ = "3.9"
            }

            resultNormal = pesquisarNaTabela(formZ, uformZ)
            console.log(resultNormal)
            resultNormal = parseFloat(resultNormal)
            if (x == 0) {
                resultNormal = ((METAREA - resultNormal) * 100).toFixed(2)
            } else {
                resultNormal = ((resultNormal + METAREA) * 100).toFixed(2)
            }
            console.log(resultNormal)
            document.getElementById('resultadoDistribuicao').innerHTML = 'Probabilidade de : ' + Math.abs(resultNormal).toFixed(2) + '%';


            break;

        case "nentre":
            formZ1 = document.getElementById('nentre1').value;
            if (formZ1 < nmedia) {
                x = 1;
                y = 4;
            } else {
                x = 0;
                y = 3;
            }

            formZ2 = document.getElementById('nentre2').value;
            if (formZ2 < nmedia) {
                w = 1;
                v = 4;
            } else {
                w = 0;
                v = 3;
            }

            console.log(formZ1)
            console.log(formZ2)
            formZ1 = ((formZ1 - nmedia) / ndesvio).toFixed(2);
            formZ2 = ((formZ2 - nmedia) / ndesvio).toFixed(2);
            console.log(formZ1)
            console.log(formZ2)
            uformZ1 = formZ1.charAt(formZ1.length - 1)
            uformZ2 = formZ2.charAt(formZ2.length - 1)
            formZ1 = formZ1.substring(x, y)
            formZ2 = formZ2.substring(w, v)
            if (formZ1 > 3.9) {
                formZ1 = "3.9"
            }
            if (formZ2 > 3.9) {
                formZ2 = "3.9"
            }

            console.log(uformZ1)
            console.log(uformZ2)
            if (formZ > 3.9) {
                formZ = "3.9"
            }

            formZ1 = pesquisarNaTabela(formZ1, uformZ1)
            formZ2 = pesquisarNaTabela(formZ2, uformZ2)
            formZ1 = parseFloat(formZ1)
            formZ2 = parseFloat(formZ2)

            //estao a direita da curva de Gauus === entradas positivas
            console.log(x)
            console.log(w)
            if (x == 0 && w == 0) {
                resultNormal = ((formZ2 - formZ1) * 100).toFixed(2);
            } else if (x == 1 && w == 0) { // entrada 1 esta a esquerda e entrada 2 a direita da curva
                resultNormal = ((formZ1 + formZ2) * 100).toFixed(2);
            } else if (x == 1 && w == 1) {
                resultNormal = ((formZ2 - formZ1) * 100).toFixed(2);
            }



            document.getElementById('resultadoDistribuicao').innerHTML = 'Probabilidade de : ' + Math.abs(resultNormal).toFixed(2) + '%';

            break;

        case "menor":


            formZ = ((n1transf - nmedia) / ndesvio).toFixed(2)
            console.log(formZ);
            uformZ = formZ.charAt(formZ.length - 1)
            formZ = formZ.substring(x, y)
            console.log(formZ)
            console.log(uformZ)
            if (formZ > 3.9) {
                formZ = "3.9"
            }
            resultNormal = pesquisarNaTabela(formZ, uformZ)
            resultNormal = parseFloat(resultNormal)
            console.log(resultNormal)



            if (x == 1) {
                resultNormal = (METAREA - resultNormal) * 100
                console.log(resultNormal)
            } else {
                resultNormal = (METAREA + resultNormal) * 100
                console.log(resultNormal)

            }


            document.getElementById('resultadoDistribuicao').innerHTML = 'Probabilidade de : ' + Math.abs(resultNormal).toFixed(2) + '%';






            break;



        case "menormaior":
            formZ1 = document.getElementById('nentre1').value;
            if (formZ1 < nmedia) {
                x = 1;
                y = 4;
            } else {
                x = 0;
                y = 3;
            }

            formZ2 = document.getElementById('nentre2').value;
            if (formZ2 < nmedia) {
                w = 1;
                v = 4;
            } else {
                w = 0;
                v = 3;
            }

            console.log(formZ1)
            console.log(formZ2)
            formZ1 = ((formZ1 - nmedia) / ndesvio).toFixed(2);
            formZ2 = ((formZ2 - nmedia) / ndesvio).toFixed(2);
            console.log(formZ1)
            console.log(formZ2)
            uformZ1 = formZ1.charAt(formZ1.length - 1)
            uformZ2 = formZ2.charAt(formZ2.length - 1)
            formZ1 = formZ1.substring(x, y)
            if (formZ1 > 3.9) {
                formZ1 = "3.9"
            }
            if (formZ2 > 3.9) {
                formZ2 = "3.9"
            }

            formZ2 = formZ2.substring(w, v)
            console.log(uformZ1)
            console.log(uformZ2)
            formZ1 = pesquisarNaTabela(formZ1, uformZ1)
            formZ2 = pesquisarNaTabela(formZ2, uformZ2)
            formZ1 = parseFloat(formZ1)
            formZ2 = parseFloat(formZ2)

            //estao a direita da curva de Gauus === entradas positivas
            console.log(x)
            console.log(w)
            if (x == 0 && w == 0) {
                resultNormal = METAREA + formZ1
                resultNormal = resultNormal + (METAREA - formZ2)
                resultNormal = (resultNormal * 100).toFixed(2)
            } else if (x == 1 && w == 0) { // entrada 1 esta a esquerda e entrada 2 a direita da curva
                console.log('to aqui');
                resultNormal = METAREA - formZ1
                resultNormal = resultNormal + (METAREA - formZ2)
                resultNormal = (resultNormal * 100).toFixed(2)
                console.log(resultNormal)
            } else if (x == 1 && w == 1) {
                resultNormal = METAREA - formZ1
                resultNormal = resultNormal + (METAREA + formZ2)
                resultNormal = (resultNormal * 100).toFixed(2)
                console.log(resultNormal)
            }
            document.getElementById('resultadoDistribuicao').innerHTML = 'Probabilidade de : ' + Math.abs(resultNormal).toFixed(2) + '%';

            break;
        case "achaQuantidade":
            n1transf = (n1transf / 100)
            n1transf = (METAREA - n1transf).toFixed(4)
            console.log(n1transf)
            n1transf = pesquisaReversa(n1transf)
            console.log(n1transf)
            n1transf = (n1transf * (- ndesvio)) + nmedia
            console.log(n1transf)
            document.getElementById('resultadoDistribuicao').innerHTML = 'Quantidade de : ' + Math.abs(n1transf);
            break;

        case "varianca":
            n1transf = Math.sqrt(n1transf)
            console.log(n1transf)
            n1transf = (METAREA - n1transf).toFixed(4)
            n1transf = pesquisaReversa(n1transf)
            n1transf = (n1transf * (- ndesvio)) + nmedia
            document.getElementById('resultadoDistribuicao').innerHTML = 'Probabilidade de : ' + Math.abs(n1transf).toFixed(2) + '%';
            break;

    }


}
