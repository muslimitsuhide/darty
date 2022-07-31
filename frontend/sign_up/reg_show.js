function ShowPass(){
    const btn = document.querySelector(".pass_btn")
    const pass = document.querySelector(".reg_pass")

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')

        if (pass.getAttribute('type') === 'password'){
            pass.setAttribute('type', 'text')
        } else {
            pass.setAttribute('type', 'password')
        }
    })
}
ShowPass()