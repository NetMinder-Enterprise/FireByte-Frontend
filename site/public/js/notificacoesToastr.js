var componentesNotificados = {};

function showNotification(captura, componente) {
    if (captura > 0) {
        if (!componentesNotificados[componente] || captura > componentesNotificados[componente].captura) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "onclick": function () {
                    window.location.href = componentesNotificados[componente].url;
                },
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "0",
                "extendedTimeOut": "0",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };

            toastr.info("Uso de " + componente + " está em: " + captura + "%");
            componentesNotificados[componente] = {
                captura: captura,
                url: "../dashboard/dispositivos.html" // Substitua pela URL correspondente
            };
        }
    }
}
