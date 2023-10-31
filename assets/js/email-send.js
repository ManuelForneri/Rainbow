const sendButton = document.getElementById("send-email-btn");

sendButton.addEventListener("click", () => {
  const formName = document.getElementById("name").value;
  const formEmail = document.getElementById("email").value;
  const formSubject = document.getElementById("subject").value;
  const formMessage = document.getElementById("message").value;

  const data = {
    name: formName,
    email: formEmail,
    subject: formSubject,
    message: formMessage,
  };
  fetch("http://localhost:3000/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        if (sendButton.textContent === "Send") {
          Swal.fire(
            "Email sent successfully!",
            "We will contact you shortly!",
            "success"
          );
        } else {
          Swal.fire(
            "Email enviado correctamente!",
            "En breve nos contactaremos con usted!",
            "success"
          );
        }

        // Clear input fields and textarea
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      } else {
        console.error("Error al realizar la solicitud POST");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud POST:", error);
    });
});
