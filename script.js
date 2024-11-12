const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");
const loadingMessage = document.getElementById("loadingMessage");
const responseTable = document
  .getElementById("responseTable")
  .getElementsByTagName("tbody")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  loadingMessage.style.display = "block";
  submitButton.disable = true;

  setTimeout(() => {
    const formData = new FormData(form);
    const textField = formData.get("textField");
    const selectField = formData.get("selectField");
    const radioField = formData.get("radioField");
    const checkboxField = formData.get("checkboxField") ? "sim" : "não";

    const newRow = responseTable.insertRow();
    newRow.innerHTML = `
    
    <th>${textField}</th>
    <th>${selectField}</th>
    <th>${radioField}</th>
    <th>${checkboxField}</th>
    
    `;

    loadingMessage.style.display = "none";
    submitButton.disable = false;

    form.reset();
  }, 2000);
});
