var usoCPU = 85;
        var usoRAM = 80;
        var usoDISCO = 98;
        var usoREDE = 97;
    
        function showNotification() {
            var dispositivos = [
            //Interesante pensar em algo que não dependa de uma URL!!!
                { nome: "CPU", uso: usoCPU, dispositivo: "1", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                { nome: "RAM", uso: usoRAM, dispositivo: "2", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                { nome: "DISCO", uso: usoDISCO, dispositivo: "3", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                { nome: "REDE", uso: usoREDE, dispositivo: "4", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
            ];
    
            for (var i = 0; i < dispositivos.length; i++) {
                var dispositivo = dispositivos[i];
    
                if (dispositivo.uso > 60) {
                    setTimeout(function (dispositivo) {
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": false,
                            "progressBar": true,
                            "positionClass": "toast-top-right",
                            "preventDuplicates": false,
                            "onclick": function () {
                                // Redirecionar para a página da dashboard do dispositivo
                                window.location.href = dispositivo.url;
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
    
                        toastr.info("Uso da " + dispositivo.nome + " do dispositivo " + dispositivo.dispositivo + " está em: " + dispositivo.uso + "%.<br><a href='" + dispositivo.url + "'>Clique para abrir a dashboard</a>");
                    }, i * 2000, dispositivo);
                }
            }
        }
    
        // Chamada da função para exibir notificações após 2 segundos
        setTimeout(showNotification, 1000);