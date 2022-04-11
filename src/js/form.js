let form = document.querySelector('.form__body'),
    inputName = document.querySelector('.required-input-name'),
    inputEmail = document.querySelector('.required-input-email'),
    inputPhone = document.querySelector('.required-input-phone'),
    allInput = Array.from(document.querySelectorAll('.form__item input[type="text"]'))

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onchange = function (e) {
    allInput.forEach((el) => {
        el.parentElement.classList.remove('error');
        el.parentElement.classList.remove('ok');
        let elValue = el.value

        if(el.classList.contains('required-input-name')){
            if(elValue.length <= 2){
            el.parentElement.classList.add('error');    
            }else {
            el.parentElement.classList.add('ok')
          }
        }
        if(el.classList.contains('required-input-phone')){
            if(validatePhone(elValue) && elValue.length !== 0){
              el.parentElement.classList.add('ok')
            } else {
              el.parentElement.classList.add('error')
            }
        }
        if(el.classList.contains('required-input-email')){
          if(validateEmail(elValue) && elValue.length !== 0){
            el.parentElement.classList.add('ok')
          } else {
            el.parentElement.classList.add('error')
          }
      }
        
    })

 

 
}

form.onsubmit = function (e) {
  e.preventDefault();
  let errInput = allInput.filter((el, i) => el.parentElement.classList.contains('error'))
  allInput.forEach((el) => {
    if(errInput.length === 0){
      el.value = '';
      el.parentElement.classList.remove('error');
      el.parentElement.classList.remove('ok');

      document.querySelector('.dispatch_message').classList.add('open_message')

    }
  })
    
}

document.querySelector('.close_pop').addEventListener('click', () => {
  document.querySelector('.dispatch_message').classList.remove('open_message')
})
