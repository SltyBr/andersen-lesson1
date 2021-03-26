const form = document.getElementById("form1");
const clear = document.getElementById("clear");
const formFrame = form.querySelector("iframe");

const formFields = form.elements;
const submitBtn = form.querySelector('[type="submit"]');
const formLogin = form.querySelector("#login");
const formText = form.querySelector("#text");

function changeHandler() {
  localStorage.setItem(
    formLogin.name,
    formLogin.value.includes("отР")
      ? formLogin.value.replace("отР", "отД")
      : formLogin.value.includes("отД")
      ? formLogin.value.replace("отД", "отР")
      : formLogin.value + "отР"
  );
  localStorage.setItem(formText.name, formText.value);
}

submitBtn.addEventListener("click", changeHandler);

function checkStorage() {
  for (let i = 0; i < formFields.length; i++) {
    if (formFields[i].type !== "submit") {
      formFields[i].value = localStorage.getItem(formFields[i].name);
      if (formFields[i].value) {
        formFields[i].value = localStorage.getItem(formFields[i].name);
      }
    }
  }

  attachEvents();
}

function attachEvents() {
  for (let i = 0; i < formFields.length; i++) {
    formFields[i].addEventListener("change", changeHandler);
  }
}

function clearStorage() {
  localStorage.clear();
}

clear.addEventListener("click", () => {
  clearStorage();
  form.reset();
});

checkStorage();

if(document.querySelector('.languages')){
  document.getElementById('disabling').addEventListener('change', ()=>{
    document.querySelector('.languages').querySelectorAll('input[type="radio"]').forEach((item)=>{
      if(document.getElementById('disabling').checked){
        item.disabled = true;
      } else{
        item.disabled = false;
      }
    })
  })
}