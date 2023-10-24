/*Modal da imagem*/
const uploadButton = document.getElementById('uploadButton');
const fileInput = document.getElementById('fileInput');
const userImage = document.getElementById('userImage');
const imageModal = document.getElementById('imageModal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const removeButton = document.getElementById('removeButton');
const replaceButton = document.getElementById('replaceButton');

// Abrir a modal ao clicar no botão "Carregar Imagem"
uploadButton.addEventListener('click', function () {
  imageModal.style.display = 'block';
  modalImage.src = userImage.src;
});

// Fechar a modal ao clicar no "X"
closeModal.addEventListener('click', function () {
  imageModal.style.display = 'none';
});

// Remover a imagem ao clicar no botão "Remover"
removeButton.addEventListener('click', function () {
  userImage.src = '../assets/do-utilizador 1.png';
  imageModal.style.display = 'none';
});

// Adicionar um ouvinte de eventos ao elemento input de arquivo
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

// Trocar a imagem ao clicar no botão "Trocar"
replaceButton.addEventListener('click', function () {
  fileInput.click();
});

/*Botão de notificação*/
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

var notificationCount = 0; // Inicialize a variável notificationCount

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
      openNewFile(fileUrl);
    });
  }

  notificationList.appendChild(listItem);

  notificationCount++;
  updateNotificationBadge();
}

// Restante do seu código...

function clearNotifications() {
  var notificationList = document.getElementById("notification-list");
  notificationList.innerHTML = "";
  notificationCount = 0; // Atualize a variável notificationCount para 0
  updateNotificationBadge(); // Chame a função para atualizar o contador
}

function updateNotificationBadge() {
  var badge = document.getElementById("notification-badge");
  badge.textContent = notificationCount;
}

function toggleNotificationModal() {
  var modal = document.getElementById("notification-modal");
  modal.classList.toggle("show");
}

function openNewFile(fileUrl) {
  window.open(fileUrl, "_blank");
}

var notificationButton = document.getElementById("notification-button");
notificationButton.addEventListener("click", toggleNotificationModal);

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearNotifications);

addNotification("Nova Maquina detectada.", "blue", "./cadastro/form2.html");
addNotification("CPU atingiu 70%", "yellow", "./dispositivos.html");
addNotification("Falha de rede, reinicie o dispositivo", "red", "./dispositivos.html");
addNotification("Memoria atingiu 80%", "yellow", "./dispositivos.html");






















