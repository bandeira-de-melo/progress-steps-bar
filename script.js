const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')


let count = 0
let porc = 33
next.addEventListener('click', () => {
    if (porc < 129) {
        progress.style.width = `${porc}%`;
        porc += 33;
        count++
        circles[count].classList.add('active')

        if (count === 3) {
            porc = 129
        }
    }

})

/*
prev.addEventListener('click', () => {
    if (porc > 32) {
        progress.style.width = `${porc}%`;
        porc - 33;
        count--
        circles[count].classList.remove('active')

        if (count === 0) {
            porc = 0
        }
    }

})*/