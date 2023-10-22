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
  userImage.src = './do-utilizador 1.png';
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

function addNotification(notification, notificationColor) {
  var notificationList = document.getElementById("notification-list");
  var listItem = document.createElement("li");

  var color = document.createElement("div");
  color.style.backgroundColor = notificationColor;
  color.style.borderRadius = "50%";
  color.style.width = "15px";
  color.style.height = "15px";

  var message = document.createElement("p");
  message.textContent = notification;

  listItem.appendChild(message);
  listItem.appendChild(color);

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

var notificationButton = document.getElementById("notification-button");
notificationButton.addEventListener("click", toggleNotificationModal);

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearNotifications);

addNotification("Nova Maquina detectada.", "blue");
addNotification("CPU atingiu 70%", "yellow");
addNotification("Falha de rede, reinicie o dipositivo", "red");
addNotification("Memoria atingiu 80%", "red");




















