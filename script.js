let searchModalOpen = document.querySelector(".search-modal-open");
let modalContainer = document.querySelector(".modal-container");
let modalCloseButton = document.querySelector(".modal-close-button");

searchModalOpen.onclick = function() {
  modalContainer.classList.remove("modal-container-close");
}

modalCloseButton.onclick = function() {
  modalContainer.classList.add("modal-container-close");
}
