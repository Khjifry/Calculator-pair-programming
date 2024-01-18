const keys = document.querySelectorAll('.container .calculator .keys-container .key')
const input = document.querySelector('.container .calculator .screen .input')
const output = document.querySelector('.container .calculator .screen .output')
const equal = document.querySelector('.container .calculator .keys-container .equal-key')
const c = document.querySelector('.container .calculator .keys-container .c-key')
const ce = document.querySelector('.container .calculator .keys-container .ce-key')

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () =>  {
        input.innerHTML += keys[i].textContent
    })

}
equal.addEventListener('click', () => {
    output.innerHTML = eval(input.innerHTML)
})
c.addEventListener('click', () => {
    input.innerHTML = input.innerHTML.slice(0, -1)
})
ce.addEventListener('click', () => {
    input.innerHTML = ''
})