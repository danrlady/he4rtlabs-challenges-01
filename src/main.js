$(document).ready(function() {
    $("#inicio").show();
    $("#calculadora").hide();
})

$("#conferir").on("click", function() {
    $("#inicio").hide();
    $("#calculadora").show();
})

$("#calcular").on("click", function() {
    let horasDiarias = $("#horasDiarias").val();
    let diasEfetivos = $("#diasEfetivos").val();
    let valorProjeto = $("#valorProjeto").val();
    let diasFerias = $("#diasFerias").val();
    let valorHora
    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
    $("#valorHora").html(`sua hora vale R$ ${valorHora.toFixed(2).replace('.', ',')}`);
})