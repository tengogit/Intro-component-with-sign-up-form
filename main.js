const btn = document.getElementById('btn2')
const inputs = document.getElementsByClassName('input')
const erroricon = document.querySelectorAll('.erroricon')
const errorp = document.querySelectorAll('p')
const email = document.getElementById('email')
const check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const erroremail = document.getElementById('emailerror')
btn.addEventListener('click', () => {
    let added = true;
    Array.from(inputs).forEach((input, i) => {
        if (input.value.trim() === "") {
            erroricon[i].classList.add('active')
            errorp[i].classList.add('active')
            added = false
        }
        else {
            erroricon[i].classList.remove('active')
            errorp[i].classList.remove('active');

        }


    })
    if (added) {
        {
            alert('SUCCESS')
        }

    }

    Array.from(inputs).forEach((input, i) => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== "") {
                erroricon[i].classList.remove('active')
                errorp[i].classList.remove('active')
            }

        })

    });

})