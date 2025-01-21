document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
});

function handleFormSubmit(e) {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  renderConfirmation(formData);
}

function renderConfirmation(formData) {
  const confirmationSection = document.querySelector(".confirmation");
  confirmationSection.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "Submission Confirmation";
  confirmationSection.appendChild(heading);

  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      const para = document.createElement("p");
      para.textContent = `${key}: ${formData[key]}`;
      confirmationSection.appendChild(para);
    }
  }
}
