document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById('uploadButton');
  const fileInput = document.getElementById('fileInput');
  const userImage = document.getElementById('userImage');
  const imageModal = document.getElementById('imageModal');
  const closeModal = document.getElementById('closeModal');
  const modalImage = document.getElementById('modalImage');
  const removeButton = document.getElementById('removeButton');
  const replaceButton = document.getElementById('replaceButton');

  uploadButton.addEventListener('click', function () {
      imageModal.style.display = 'block';
      modalImage.src = userImage.src;
  });

  closeModal.addEventListener('click', function () {
      imageModal.style.display = 'none';
  });

  removeButton.addEventListener('click', function () {
      userImage.src = '../assets/do-utilizador 1.png';
      imageModal.style.display = 'none';
  });

  fileInput.addEventListener('change', function () {
      const file = fileInput.files[0];

      if (file) {
          const reader = new FileReader();

          reader.onload = function (e) {
              userImage.src = e.target.result;
              modalImage.src = e.target.result;
          };

          reader.readAsDataURL(file);
      }

      imageModal.style.display = 'none';
  });

  replaceButton.addEventListener('click', function () {
      fileInput.click();
  });

  /* Botão de notificação */
  var notificationCount = 0;

  function updateNotificationBadge() {
    var notificationBadge = document.getElementById("notification-badge");
    notificationBadge.textContent = notificationCount;

    if (notificationCount === 0) {
      notificationBadge.style.display = "none";
    } else {
      notificationBadge.style.display = "block";
    }
  }

  function addNotification(notification, notificationColor, fileUrl) {
    var notificationList = document.getElementById("notification-list");
    var listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";

    var color = document.createElement("div");
    color.style.backgroundColor = notificationColor;
    color.style.borderRadius = "50%";
    color.style.width = "15px";
    color.style.height = "15px";
    color.style.marginRight = "10px";

    var message = document.createElement("p");
    message.textContent = notification;

    listItem.appendChild(color);
    listItem.appendChild(message);

    if (fileUrl) {
      listItem.addEventListener("click", function () {
        openNotificationFile(fileUrl);
      });
    }

    notificationList.appendChild(listItem);

    notificationCount++;
    updateNotificationBadge();
  }

  function clearNotifications() {
    var notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = "";
    notificationCount = 0;
    updateNotificationBadge();
  }

  function toggleNotificationModal() {
    var modal = document.getElementById("notification-modal");
    modal.classList.toggle("show");
  }

  function openNotificationFile(fileUrl) {
    window.open(fileUrl, "_blank");
  }

  function toggleOrderModal() {
    var modal = document.getElementById("order-modal");
    modal.classList.toggle("show");
  }

  var notificationButton = document.getElementById("notification-button");
  notificationButton.addEventListener("click", toggleNotificationModal);

  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener("click", clearNotifications);

  var orderButton = document.getElementById("order-button");
  orderButton.addEventListener("click", toggleOrderModal);

  // Adicione suas notificações
  addNotification("Nova Máquina detectada.", "blue", "/dashboard/cadastro/form2.html");
  addNotification("CPU atingiu 70%", "yellow", "./dispositivos.html");
  addNotification("Falha de rede, reinicie o dispositivo", "red", "./dispositivos.html");
  addNotification("Memória atingiu 80%", "yellow", "./dispositivos.html");

  /* Barra de porcentagem */
  function updateProgressBar(percentage, fillId, percentageId) {
    const fill = document.getElementById(fillId);
    const percentageDiv = document.getElementById(percentageId);

    percentageDiv.textContent = percentage + '%';

    if (percentage <= 50) {
      fill.style.width = percentage + '%';
      fill.className = 'fill blue';
    } else if (percentage <= 75) {
      fill.style.width = percentage + '%';
      fill.className = 'fill yellow';
    } else {
      fill.style.width = percentage + '%';
      fill.className = 'fill red';
    }
  }

  // Exemplo de uso: atualiza os três medidores de porcentagem
  updateProgressBar(90, 'fill1', 'percentage1');
  updateProgressBar(75, 'fill2', 'percentage2');
  updateProgressBar(30, 'fill3', 'percentage3');
  updateProgressBar(10, 'fill4', 'percentage4');
  updateProgressBar(80, 'fill5', 'percentage5');
  updateProgressBar(50, 'fill6', 'percentage6');
  updateProgressBar(40, 'fill7', 'percentage7');
  updateProgressBar(95, 'fill8', 'percentage8');
  updateProgressBar(72, 'fill9', 'percentage9');
});



