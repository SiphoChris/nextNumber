const btn = document.querySelector('[type=button]')
let nextElement = document.querySelector('#display')
// console.log(nextElement);

let numbers = new Array()
let counter = 0

for(let i = 0; i < 10; i++){
    let number = Math.floor(Math.random() * 10)
    numbers.push(number)
}
console.log(numbers);

// console.log(numbers);

function showNext(){
    nextElement.innerText = numbers[counter]
    counter += 1
    if(counter == numbers.length + 1 ){
        counter = 0
        display.innerText = 'No more numbers'
    }
}

btn.addEventListener('click', showNext)
 
