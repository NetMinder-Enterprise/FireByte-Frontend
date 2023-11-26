function abrirModal() {
    Swal.fire({
      title: "Tem certeza que deseja excluir?",
      text: "Você não será capaz de reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "sim, excluir!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Excluido!",
          text: "Dispositivo excluído com sucesso!",
          icon: "success"
        }).then(() => {
          window.location = "./dashboard.html";
        });
      }
    });
  }

  // Ir para tela de editar
  function abrirModalEditar() {
    Swal.fire({
      title: "Editar dispositivos",
      text: "Deseja editar as configurações do dispositivo?",
      icon: "question"
    }).then(() => {
      window.location = "./cadastro/formEdite.html";
    });
  }

  // editado com sucesso 
  function editadoComSucesso() {
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
      title: "Dispositivo editado com sucesso!"
    });

    setTimeout(() => {
      window.location = "../../dashboard/dispositivos.html";
    }, 3000);
  }


function abrirConfirmacao() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Dispositivo cadastrado com sucesso!"
    }).then(() => {
      window.location.href = '/dashboard/dashboard.html';
    });
  }

  // notificação confirmação de login
  function loginSucesso() {
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
      title: "Login realizado com sucesso!"
    });

    setTimeout(() => {
      window.location = "./dashboard/dashboard.html";
    }, 3000);
  }

  function abrirConfirmacaoFunc() {
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
      title: "Usuario cadastrado com sucesso!"
    });

    setTimeout(() => {
      location.reload();
    }, 3000);
  }

  function abrirConfirmacaoDispo() {
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
      window.location = "/dashboard/cadastro/form3.html";
    }, 2000);
  }

  function imagemCadastrada() {
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
      title: "Nova imagem de perfil!"
    });

    setTimeout(() => {
      location.reload();
    }, 2000);
  }
