let imp = document.querySelector('input')
let btn = document.querySelector('.ok')
let box = document.querySelector('.box')
let del = document.querySelector('.del')

btn.addEventListener('click', function () {

    let newdiv = document.createElement('div')
    newdiv.textContent = imp.value
    newdiv.classList.add('red')
    box.appendChild(newdiv)
    imp.value = ' '
})

// del.addEventListener('click', function() {
    
// })
