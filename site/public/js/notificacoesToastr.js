        var usoCPU = 85;
        var usoRAM = 80;
        var usoDISCO = 98;
        var usoREDE = 97;
        var componente = "CPU"
        function showNotification() {
            var notificationBuilder = [
            //Interesante pensar em algo que não dependa de uma URL!!!
            //Tambem vamos ter de correr essa lista pra resgatar dados do banco...
                { nome: componente, uso: usoCPU, dispositivo: "1", url: "./dispositovos.html" },
                { nome: componente, uso: usoRAM, dispositivo: "2", url: "./dispositovos.html" },
                { nome: componente, uso: usoDISCO, dispositivo: "3", url: "./dispositovos.html" },
                { nome: componente, uso: usoREDE, dispositivo: "4", url: "./dispositovos.html" }
            ];
    
            for (var i = 0; i < notificationBuilder.length; i++) {
                var notification = notificationBuilder[i];
    
                if (notification.uso > 60) {
                    setTimeout(function (notification) {
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": false,
                            "progressBar": true,
                            "positionClass": "toast-top-right",
                            "preventDuplicates": false,
                            "onclick": function () {
                                // Redirecionar para a página da dashboard do dispositivo
                                window.location.href = notification.url;
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
    
                        toastr.info("Uso da " + notification.nome + " do dispositivo " + notification.dispositivo + " está em: " + notification.uso + "%.<br><a href='" + notification.url + "'>Clique para abrir a dashboard</a>");
                    }, i * 2000, notification);
                }
            }
        }
    
        // Chamada da função para exibir notificações após 2 segundos
        setTimeout(showNotification, 2000);