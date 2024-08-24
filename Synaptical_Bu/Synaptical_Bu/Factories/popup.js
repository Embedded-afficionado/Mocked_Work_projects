$(document).ready(function() {
    // Mapeie a área clicável da imagem
    $('#triggerImage').on('click', function(event) {
        var x = event.offsetX;
        var y = event.offsetY;

        // Verifique se o clique foi dentro da área desejada
        if (x >= specificX1 && x <= specificX2 && y >= specificY1 && y <= specificY2) {
            $('#popupModal').modal('show'); // Mostra o modal
        }
    });

    // Fecha o modal quando o botão de fechar é clicado
    $('.close').on('click', function() {
        $('#popupModal').modal('hide');
    });
});