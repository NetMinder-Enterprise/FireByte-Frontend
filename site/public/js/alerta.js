function buscarUltimosDados() {
    console.log('Recebendo dispositivos...');
    fetch(`/dispositivos/buscarDispositivos/${sessionStorage.ID_EMPRESA}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (resposta) {
                        console.log(resposta);
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                        resposta.reverse();
                        buscarParametros(resposta);
                    });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico de CPU: ${error.message}`);
        });
}

function buscarParametros(resposta) {
    console.log('Recebendo parametros...');
    fetch(`/alerta/ultimosParametros/${sessionStorage.ID_EMPRESA}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (parametro) {
                        console.log(parametro);
                        console.log(`Dados recebidos: ${JSON.stringify(parametro)}`);
                        parametro.reverse();

                        if (captura >= parametro.limiteMax) {
                            color.style.backgroundColor = 'red';
                        } else if (captura >= parametro.limiteMin) {
                            color.style.backgroundColor = 'yellow';
                        }
                    });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção de parametros ${error.message}`);
        });
}

function alertar(resposta){
    var notificationColor = '';
     
    if (captura >= parametro.limiteMax) {
        notificationColor = 'red';
      } else if (captura >= parametro.limiteMin) {
        notificationColor = 'yellow';
      } else if(captura < limiteMin) {
        notificationColor = 'green';
      } else  if(ativo == null){
        notificationColor = 'blue';
      }
      //addNotification(`${componente} atingiu ${captura}${metrica}`, `./dispositivos.html?idDispositivo=${idDispositivo}&tituloDispositivo=${titulo}&descrition=${descricao}`, captura);

      if (captura >= parametro.limiteMax) {
        notificationColor = 'red';
      } else if (captura >= parametro.limiteMin) {
        notificationColor = 'yellow';
      } else{
        notificationColor = 'green';
      }
}