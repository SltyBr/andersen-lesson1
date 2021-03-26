submitBtn.addEventListener('click', ()=>{
  if (this.type !== "checkbox") {
    localStorage.setItem(formLogin.name, formLogin.value.includes('отР') ? formLogin.value.replace('отР', 'отД') : 
    formLogin.value.includes('отД') ? formLogin.value.replace('отД', 'отР') :
    formLogin.value);
  }
})
