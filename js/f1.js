$(function () {
    alert('Acceptez-vous les cookies?');
    $('fieldset').css('border', '3px solid #be7cf3');
    $('#target').load("ajax/source_ajax.html #home");

    $('#vert').click(function () {
        $('h1').css('color', 'rgb(85, 232, 85)');
        $('#target').load("ajax/source_ajax.html #work")
    });

    $('#bleu').click(function () {
        $('h1').css('color', '#65b8d6');
        $('#target').load("ajax/source_ajax.html #competences")
    });

    $('#violet').click(function () {
        $('h1').css('color', '#be7cf3');
        $('#target').load("ajax/source_ajax.html #home")
    });

    $('#rose').click(function () {
        $('h1').css('color', '#f095aa');
        $('#target').load("ajax/source_ajax.html #contact")
    });

    $('#orange').click(function () {
        $('h1').css('color', 'rgb(238, 177, 63)');
        $('#target').load("ajax/source_ajax.html #credits")
    });

})



$('#target').load("ajax/source_ajax.html #competences")
$('#target').load("ajax/source_ajax.html #contact")

