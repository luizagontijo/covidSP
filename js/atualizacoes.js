/*---------------divs que informam a situacao atual de sao paulo--------*/
/*---------------uso do slidetoglle-------------------------------------*/

$(document).ready(function () {
    $("#atualUti").click(function () { //USO DO TOGGLE
        $("#h4um,#h4dois,#h4tres").slideToggle(); //USO DO TOGGLE

    })
})
$(document).ready(function () {
    $("#faseVermelha h2").click(function () {
        $("#faseVermelha h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseLaranja h2").click(function () {
        $("#faseLaranja h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseAmarela h2").click(function () {
        $("#faseAmarela h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseVerde h2").click(function () {
        $("#faseVerde h3").slideToggle()
    })
});
$(document).ready(function () {
    $("#faseAzul h2").click(function () {
        $("#faseAzul h3").slideToggle()
    })
});

/*------------Função do número de leitos-------------*/
/*--------------Blur usado---------------------------*/

// $(document).ready(function () {
//     var taxaUti, taxaEnfermaria

//     $("#leitosUti").blur(function () { //USO DO BLUR
//         var habitantes = 46000000;
//         var leitosUti = $("#leitosUti")[0].value; //input do usuario
//         taxaUti = (leitosUti * 100000) / habitantes;
//         $("#resultadoUti").text(taxaUti.toFixed(2));
//         console.log("aqui");

//     })
//     $("#leitosEnfermaria").blur(function () {
//         var habitantes = 46000000;
//         var leitosEnfermaria = $("#leitosEnfermaria")[0].value; //input do usuario
//         taxaEnfermaria = (leitosEnfermaria * 100000) / habitantes;
//         $("#resultadoEnfermaria").text(taxaEnfermaria.toFixed(2));
//         console.log("aqui");
//         if (taxaUti < 3 || taxaEnfermaria > 1.5) {

//             $("#faseVermelha h3").slideDown();  //USO SLIDE
//             $("header").css("background-color", "#e44a4a");
//             $("#calculeEnfermaria,#calculeUti").css("background-color", "#e44a4a")
//             console.log("vermelha");

//         }
//         if (taxaUti > 3 && taxaUti < 5 && taxaEnfermaria > 1 && taxaEnfermaria <= 1.5) {

//             $("#faseLaranja h3").slideDown();
//             $("header").css("background-color", "f89d2e");
//             $("#calculeEnfermaria,#calculeUti").css("background-color", "f89d2e")

//             console.log("laranja");

//         }
//         if (taxaUti > 5 && taxaEnfermaria > 0.5 && taxaEnfermaria < 1.0) {
//             console.log("amarelo");

//             $("#faseAmarela h3").slideDown();
//             $("header").css("background-color", "#dddd58");
//             $("#calculeEnfermaria,#calculeUti").css("background-color", "#dddd58");
//         }
//         if (taxaUti > 5 && taxaEnfermaria <= 0.5) {

//             $("#faseVerde h3").slideDown();
//             $("header").css("background-color", "#93ec93");
//             $("#calculeEnfermaria,#calculeUti").css("background-color", "#93ec93")
//             console.log("verde");
//         }
//     })
// });