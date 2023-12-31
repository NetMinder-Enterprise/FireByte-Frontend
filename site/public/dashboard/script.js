// const uploadButton = document.getElementById('uploadButton');
// const fileInput = document.getElementById('fileInput');
const userImage = document.getElementById('userImage');
const imageModal = document.getElementById('imageModal');
// const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
// const removeButton = document.getElementById('removeButton');
// const replaceButton = document.getElementById('replaceButton');

// uploadButton.addEventListener('click', function () {
//     imageModal.style.display = 'block';
//     modalImage.src = userImage.src;
// });

// closeModal.addEventListener('click', function () {
//     imageModal.style.display = 'none';
// });

// removeButton.addEventListener('click', function () {
//     userImage.src = '../assets/do-utilizador 1.png';
//     imageModal.style.display = 'none';
// });

// fileInput.addEventListener('change', function () {
//     const file = fileInput.files[0];

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             userImage.src = e.target.result;
//             modalImage.src = e.target.result;
//         };

//         reader.readAsDataURL(file);
//     }

//     imageModal.style.display = 'none';
// });

// replaceButton.addEventListener('click', function () {
//     fileInput.click();
// });

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

// var clearButton = document.getElementById("clear-button");
// clearButton.addEventListener("click", clearNotifications);

// var orderButton = document.getElementById("order-button");
// orderButton.addEventListener("click", toggleOrderModal);

/*Barra de porcentagem*/
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

var notificationButton = document.getElementById("notification-button");
notificationButton.addEventListener("click", toggleNotificationModal);

// var clearButton = document.getElementById("clear-button");
// clearButton.addEventListener("click", clearNotifications);

// var orderButton = document.getElementById("order-button");
// orderButton.addEventListener("click", toggleOrderModal);

function abrirConfirmacaoDispo(id){
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
      icon: "success",
      title: "Nome atualizado com sucesso!"
  });
  setTimeout(() => {
    window.location = `/dashboard/cadastro/form3.html?dispId=${id}`;
  }, 2000);
}


// Validação para cada campo e lógica de exibição de erro
function validateAndDisplayError(input, alertMessage, erroEncontrado) {
  const value = parseFloat(input.value);

  if (input.value === '' || value < 0 || isNaN(value)) {
      input.style.borderColor = 'red';
      div_erro.innerHTML = alertMessage;
      return true; // Indica que ocorreu um erro
  } else {
      input.style.borderColor = 'var(--primary-color)';
      return erroEncontrado; // Retorna o estado atual de erroEncontrado
  }
}