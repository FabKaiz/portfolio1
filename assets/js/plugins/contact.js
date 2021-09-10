/*==================== FORMSUBMIT AJAX ====================*/
const formName       = document.getElementById("form-name"),
      formEmail      = document.getElementById("form-email"),
      formSubject    = document.getElementById("form-subject"),
      formMessage    = document.getElementById("form-message"),
      formButton     = document.getElementById("contact-submit"),
      yesBtn         = document.getElementById("submit-form-modal"),
      noBtn          = document.getElementById("cancel-modal"),
      contactForm    = document.getElementById("contact-form"),
      modalView      = document.querySelector(".contact__modal"),
      successMessage = document.querySelector(".contact__form-succes"),
      errorModal     = document.querySelector(".error__modal"),
      closeModal     = document.querySelector(".close__modal");


// If all fields are not empty then open submit modal else open an error modal.
formButton.addEventListener("click", () => {
  if (formName.value && formEmail.value && formSubject.value && formMessage.value !== "") {
    // Open confirmation modal
    activeModal();
  } else {
    openErrorModal();
  }
});


// OK => submit button
yesBtn.addEventListener("click", () => {
  fetchContactForm();
  contactForm.reset();
  closeContactModal();
  showSuccessMessage();
  // Show and remove a success message after 5s
  setTimeout(() => {
    hideSuccessMessage();
  }, 5000);
});


// Not OK => cancel button
noBtn.addEventListener("click", () => {
  closeContactModal();
});

closeModal.addEventListener("click", () => {
  closeErrorModal();
})



// FormSubmit fetch for contact without any backend
const fetchContactForm = () => {
  fetch("https://formsubmit.co/ajax/a703cbf968b7ecdd98f74c079596f5a9", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formName.value,
      email: formEmail.value,
      subject: formSubject.value,
      message: formMessage.value,
    }),
  })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.log(error));
};


// Error modal
const openErrorModal = () => {
  errorModal.classList.add("active-modal")
}

const closeErrorModal = () => {
  errorModal.classList.remove("active-modal")
}


// Submit success message
const showSuccessMessage = () => {
  successMessage.classList.add("active-msg");
};

const hideSuccessMessage = () => {
  successMessage.classList.remove("active-msg");
};


// Submit contact info modal
const closeContactModal = () => {
  modalView.classList.remove("active-modal");
};

const activeModal = () => {
  modalView.classList.add("active-modal");
};