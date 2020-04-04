$(document).ready(function() {
    $("#inicio").show();
    $("#calculadora").hide();
})

$("#conferir").on("click", function() {
    $("#inicio").hide();
    $("#calculadora").show();
})

$("#home").on("click", function(){
    $("#inicio").show();
    $("#calculadora").hide();
})

$("#calcular").on("click", function() {
    let horasDiarias = $("#horasDiarias").val();
    let diasFerias = $("#diasFerias").val();
    let diasEfetivos = $("#diasEfetivos").val();
    let valorProjeto = input.formatToNumber();
    
    if(verificarCamposVazios(horasDiarias, diasEfetivos, diasFerias, valorProjeto)) {
        calcularHora(horasDiarias, diasEfetivos, diasFerias, valorProjeto);
    } else {
        $("#valorHora").html(`por favor,<br>preencha todos os campos!`);
    }
})

function calcularHora(horasDiarias, diasEfetivos, diasFerias, valorProjeto) {
    let valorHora
    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
    $("#valorHora").html(`sua hora vale<br>${formatter.format(valorHora)}`);
}

function verificarCamposVazios(horasDiarias, diasEfetivos, diasFerias, valorProjeto) {
    let preenchidos = true;
    if (!horasDiarias) {
        $("#horasDiarias").addClass('makeRed');
        preenchidos = false;
    } else {
        $("#horasDiarias").removeClass('makeRed');
    }

    if (!diasEfetivos) {
        $("#diasEfetivos").addClass('makeRed');
        preenchidos = false;
    } else {
        $("#diasEfetivos").removeClass('makeRed');
    }

    if (diasFerias.length == 0) {
        $("#diasFerias").addClass('makeRed');
        preenchidos = false;
    } else {
        $("#diasFerias").removeClass('makeRed');
    }

    if (!valorProjeto) {
        $("#valorProjeto").addClass('makeRed');
        preenchidos = false;
    } else {
        $("#valorProjeto").removeClass('makeRed');
    }
    
    return preenchidos;
}

const input = SimpleMaskMoney.setMask('#valorProjeto', {
    negativeSignAfter: false,
    prefix: 'R$ ',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'move'
});

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});